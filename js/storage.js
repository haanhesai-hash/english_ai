/**
 * Local Storage & Spaced Repetition (Lặp lại ngắt quãng SM-2)
 * Quản lý tiến trình học tập, Streak chuỗi ngày, Thẻ ghi nhớ và Điểm kiểm tra.
 */

const STORAGE_KEY = 'linguistics_english_profile_v1';

export class StorageService {
  constructor() {
    this.profile = this.loadProfile();
  }

  loadProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Lỗi đọc LocalStorage:", e);
    }

    // Default initial profile
    const initial = {
      name: "Người học Ngôn ngữ",
      level: "Chưa kiểm tra",
      cefrBadge: "A1",
      streak: 1,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      totalMinutesStudied: 15,
      completedModules: [],
      bookmarks: {
        ipa: [],
        morphology: [],
        grammar: []
      },
      flashcards: {}, // cardId -> { interval, repetitions, easeFactor, dueDate }
      testHistory: []
    };
    this.saveProfile(initial);
    return initial;
  }

  saveProfile(profileData = null) {
    if (profileData) this.profile = profileData;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.profile));
    } catch (e) {
      console.error("Lỗi lưu LocalStorage:", e);
    }
  }

  updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const lastActive = this.profile.lastActiveDate;

    if (lastActive !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastActive === yesterday) {
        this.profile.streak += 1;
      } else {
        this.profile.streak = 1;
      }
      this.profile.lastActiveDate = today;
      this.saveProfile();
    }
  }

  addStudyTime(minutes = 5) {
    this.profile.totalMinutesStudied = (this.profile.totalMinutesStudied || 0) + minutes;
    this.saveProfile();
  }

  markModuleComplete(moduleId) {
    if (!this.profile.completedModules.includes(moduleId)) {
      this.profile.completedModules.push(moduleId);
      this.addStudyTime(10);
      this.saveProfile();
    }
  }

  recordTestScore(score, maxScore, levelResult) {
    this.profile.level = levelResult.level;
    this.profile.cefrBadge = levelResult.badge;
    const testRecord = {
      date: new Date().toLocaleString('vi-VN'),
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
      level: levelResult.level,
      badge: levelResult.badge
    };
    this.profile.testHistory.unshift(testRecord);
    // Keep last 10 records
    if (this.profile.testHistory.length > 10) {
      this.profile.testHistory.pop();
    }
    this.saveProfile();
  }

  toggleBookmark(category, id) {
    if (!this.profile.bookmarks[category]) {
      this.profile.bookmarks[category] = [];
    }
    const list = this.profile.bookmarks[category];
    const index = list.indexOf(id);
    let bookmarked = false;
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(id);
      bookmarked = true;
    }
    this.saveProfile();
    return bookmarked;
  }

  isBookmarked(category, id) {
    return this.profile.bookmarks[category]?.includes(id) || false;
  }

  /**
   * Thuật toán Lặp lại ngắt quãng SuperMemo 2 (SM-2)
   * @param {string} cardId
   * @param {number} quality - Điểm đánh giá độ nhớ từ 0 (quên hoàn toàn) đến 5 (nhớ hoàn hảo)
   */
  reviewCardSM2(cardId, quality) {
    const defaultCard = {
      interval: 1, // số ngày
      repetitions: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString()
    };

    let card = this.profile.flashcards[cardId] || defaultCard;

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

    this.profile.flashcards[cardId] = card;
    this.saveProfile();
    return card;
  }

  resetAllProgress() {
    localStorage.removeItem(STORAGE_KEY);
    this.profile = this.loadProfile();
  }
}
