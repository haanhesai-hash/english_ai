/**
 * Hệ thống Quản lý Tài khoản & Hồ sơ Học viên theo Gmail
 * Hỗ trợ nhiều học sinh trên cùng một thiết bị hoặc đồng bộ xuất/nhập hồ sơ học tập.
 * Thuật toán Lặp lại ngắt quãng SM-2 và Lưu trữ độc lập cho từng học viên.
 */

const ACCOUNTS_STORAGE_KEY = 'linguistics_english_accounts_v2';
const ACTIVE_EMAIL_KEY = 'linguistics_english_active_email_v2';
const LEGACY_STORAGE_KEY = 'linguistics_english_profile_v1';

export class StorageService {
  constructor() {
    this.accounts = this.loadAllAccounts();
    this.currentUser = this.loadActiveUser();
  }

  /**
   * Tải toàn bộ danh sách tài khoản học sinh đã lưu trên trình duyệt
   */
  loadAllAccounts() {
    try {
      const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Lỗi đọc danh sách tài khoản học viên:", e);
    }

    // Kiểm tra di chuyển dữ liệu từ phiên bản cũ (nếu có)
    const migrated = this.migrateLegacyProfile();
    if (migrated) {
      return migrated;
    }

    return {};
  }

  /**
   * Di chuyển dữ liệu ẩn danh cũ sang tài khoản mặc định
   */
  migrateLegacyProfile() {
    try {
      const oldRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (oldRaw) {
        const oldData = JSON.parse(oldRaw);
        const defaultEmail = 'hocsinh.demo@gmail.com';
        const initialAccounts = {
          [defaultEmail]: {
            name: oldData.name || "Học viên Demo",
            email: defaultEmail,
            password: "",
            targetLevel: "B2",
            joinedDate: new Date().toLocaleDateString('vi-VN'),
            avatarColor: "brand",
            profile: {
              level: oldData.level || "Chưa kiểm tra",
              cefrBadge: oldData.cefrBadge || "A1",
              streak: oldData.streak || 1,
              lastActiveDate: oldData.lastActiveDate || new Date().toISOString().slice(0, 10),
              totalMinutesStudied: oldData.totalMinutesStudied || 15,
              completedModules: oldData.completedModules || [],
              bookmarks: oldData.bookmarks || { ipa: [], morphology: [], grammar: [] },
              flashcards: oldData.flashcards || {},
              testHistory: oldData.testHistory || []
            }
          }
        };
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(initialAccounts));
        localStorage.setItem(ACTIVE_EMAIL_KEY, defaultEmail);
        return initialAccounts;
      }
    } catch (e) {
      console.warn("Không có dữ liệu cũ cần di chuyển.");
    }
    return null;
  }

  /**
   * Tải tài khoản học viên đang kích hoạt
   */
  loadActiveUser() {
    const activeEmail = localStorage.getItem(ACTIVE_EMAIL_KEY);
    if (activeEmail && this.accounts[activeEmail]) {
      return this.accounts[activeEmail];
    }

    // Nếu có ít nhất 1 tài khoản, chọn tài khoản đầu tiên
    const emails = Object.keys(this.accounts);
    if (emails.length > 0) {
      const firstUser = this.accounts[emails[0]];
      localStorage.setItem(ACTIVE_EMAIL_KEY, firstUser.email);
      return firstUser;
    }

    return null;
  }

  /**
   * Lấy profile học tập của học viên hiện tại
   */
  get profile() {
    if (this.currentUser && this.currentUser.profile) {
      return this.currentUser.profile;
    }
    // Trả về profile mặc định nếu chưa đăng nhập
    return {
      level: "Chưa kiểm tra",
      cefrBadge: "A1",
      streak: 1,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      totalMinutesStudied: 0,
      completedModules: [],
      bookmarks: { ipa: [], morphology: [], grammar: [] },
      flashcards: {},
      testHistory: []
    };
  }

  /**
   * Lưu thay đổi vào LocalStorage
   */
  save() {
    try {
      if (this.currentUser) {
        this.accounts[this.currentUser.email] = this.currentUser;
        localStorage.setItem(ACTIVE_EMAIL_KEY, this.currentUser.email);
      }
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(this.accounts));
    } catch (e) {
      console.error("Lỗi khi lưu dữ liệu học viên:", e);
    }
  }

  /**
   * Đăng ký tài khoản học sinh mới bằng Gmail
   */
  register(name, email, password = "", targetLevel = "B2") {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      throw new Error("Vui lòng nhập địa chỉ Gmail hợp lệ (ví dụ: student@gmail.com).");
    }
    if (!cleanName) {
      throw new Error("Vui lòng nhập họ và tên học sinh.");
    }
    if (this.accounts[cleanEmail]) {
      throw new Error(`Tài khoản Gmail '${cleanEmail}' đã tồn tại trên thiết bị này. Hãy chọn Đăng nhập.`);
    }

    const colors = ["brand", "indigo", "purple", "emerald", "teal", "rose", "amber"];
    const avatarColor = colors[Math.floor(Math.random() * colors.length)];

    const newAccount = {
      name: cleanName,
      email: cleanEmail,
      password: password ? String(password) : "",
      targetLevel: targetLevel || "B2",
      joinedDate: new Date().toLocaleDateString('vi-VN'),
      avatarColor,
      profile: {
        level: "Chưa kiểm tra",
        cefrBadge: "A1",
        streak: 1,
        lastActiveDate: new Date().toISOString().slice(0, 10),
        totalMinutesStudied: 0,
        completedModules: [],
        bookmarks: { ipa: [], morphology: [], grammar: [] },
        flashcards: {},
        testHistory: []
      }
    };

    this.accounts[cleanEmail] = newAccount;
    this.currentUser = newAccount;
    this.save();
    return newAccount;
  }

  /**
   * Đăng nhập học viên bằng Gmail
   */
  login(email, password = "") {
    const cleanEmail = email.trim().toLowerCase();
    const account = this.accounts[cleanEmail];

    if (!account) {
      throw new Error(`Không tìm thấy học sinh với Gmail '${cleanEmail}'. Vui lòng tạo tài khoản mới.`);
    }

    if (account.password && password && account.password !== String(password)) {
      throw new Error("Mật khẩu không chính xác. Vui lòng thử lại.");
    }

    this.currentUser = account;
    this.save();
    this.updateStreak();
    return account;
  }

  /**
   * Chuyển đổi nhanh giữa các tài khoản học sinh trên máy
   */
  switchUser(email) {
    const cleanEmail = email.trim().toLowerCase();
    if (this.accounts[cleanEmail]) {
      this.currentUser = this.accounts[cleanEmail];
      this.save();
      this.updateStreak();
      return this.currentUser;
    }
    return null;
  }

  /**
   * Đăng xuất học sinh hiện tại
   */
  logout() {
    this.currentUser = null;
    localStorage.removeItem(ACTIVE_EMAIL_KEY);
  }

  /**
   * Lấy danh sách tóm tắt tất cả học sinh đã lưu trên máy
   */
  getAccountList() {
    return Object.values(this.accounts).map(acc => ({
      name: acc.name,
      email: acc.email,
      targetLevel: acc.targetLevel || "B2",
      cefrBadge: acc.profile?.cefrBadge || "A1",
      level: acc.profile?.level || "Chưa kiểm tra",
      streak: acc.profile?.streak || 1,
      totalMinutes: acc.profile?.totalMinutesStudied || 0,
      joinedDate: acc.joinedDate || "Gần đây",
      avatarColor: acc.avatarColor || "brand"
    }));
  }

  /**
   * Xóa tài khoản học sinh
   */
  deleteAccount(email) {
    const cleanEmail = email.trim().toLowerCase();
    if (this.accounts[cleanEmail]) {
      delete this.accounts[cleanEmail];
      if (this.currentUser && this.currentUser.email === cleanEmail) {
        this.currentUser = this.loadActiveUser();
      }
      this.save();
      return true;
    }
    return false;
  }

  /**
   * Xuất toàn bộ lộ trình học của học sinh hiện tại ra file JSON
   */
  exportUserData() {
    if (!this.currentUser) return null;
    return JSON.stringify(this.currentUser, null, 2);
  }

  /**
   * Nhập dữ liệu học sinh từ file JSON sao lưu
   */
  importUserData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (!data.email || !data.profile) {
        throw new Error("Dữ liệu không đúng cấu trúc hồ sơ học viên.");
      }
      this.accounts[data.email.toLowerCase()] = data;
      this.currentUser = data;
      this.save();
      return data;
    } catch (e) {
      throw new Error(`Không thể nhập dữ liệu: ${e.message}`);
    }
  }

  // --- CÁC PHƯƠNG THỨC CẬP NHẬT LỘ TRÌNH CỦA HỌC SINH HIỆN TẠI ---

  updateStreak() {
    if (!this.currentUser || !this.currentUser.profile) return;
    const profile = this.currentUser.profile;
    const today = new Date().toISOString().slice(0, 10);
    const lastActive = profile.lastActiveDate;

    if (lastActive !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastActive === yesterday) {
        profile.streak = (profile.streak || 0) + 1;
      } else {
        profile.streak = 1;
      }
      profile.lastActiveDate = today;
      this.save();
    }
  }

  addStudyTime(minutes = 5) {
    if (!this.currentUser || !this.currentUser.profile) return;
    this.currentUser.profile.totalMinutesStudied = (this.currentUser.profile.totalMinutesStudied || 0) + minutes;
    this.save();
  }

  recordTestScore(score, maxScore, levelResult) {
    if (!this.currentUser || !this.currentUser.profile) return;
    const profile = this.currentUser.profile;
    profile.level = levelResult.level;
    profile.cefrBadge = levelResult.badge;
    const testRecord = {
      date: new Date().toLocaleString('vi-VN'),
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
      level: levelResult.level,
      badge: levelResult.badge
    };
    if (!profile.testHistory) profile.testHistory = [];
    profile.testHistory.unshift(testRecord);
    if (profile.testHistory.length > 10) profile.testHistory.pop();
    this.save();
  }

  reviewCardSM2(cardId, quality) {
    if (!this.currentUser || !this.currentUser.profile) return null;
    const profile = this.currentUser.profile;
    if (!profile.flashcards) profile.flashcards = {};

    const defaultCard = {
      interval: 1,
      repetitions: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString()
    };

    let card = profile.flashcards[cardId] || defaultCard;

    if (quality >= 3) {
      if (card.repetitions === 0) {
        card.interval = 1;
      } else if (card.repetitions === 1) {
        card.interval = 6;
      } else {
        card.interval = Math.round(card.interval * card.easeFactor);
      }
      card.repetitions += 1;
    } else {
      card.repetitions = 0;
      card.interval = 1;
    }

    card.easeFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (card.easeFactor < 1.3) card.easeFactor = 1.3;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + card.interval);
    card.nextReviewDate = nextDate.toISOString();

    profile.flashcards[cardId] = card;
    this.save();
    return card;
  }

  resetAllProgress() {
    if (this.currentUser && this.currentUser.profile) {
      this.currentUser.profile = {
        level: "Chưa kiểm tra",
        cefrBadge: "A1",
        streak: 1,
        lastActiveDate: new Date().toISOString().slice(0, 10),
        totalMinutesStudied: 0,
        completedModules: [],
        bookmarks: { ipa: [], morphology: [], grammar: [] },
        flashcards: {},
        testHistory: []
      };
      this.save();
    }
  }
}
