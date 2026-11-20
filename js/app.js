/**
 * Main Application Orchestrator & View Controller
 * Linguistics English AI - Nền tảng Tự học Tiếng Anh Chuyên sâu dưới Góc nhìn Ngôn ngữ học
 */

import { CEFR_ROADMAP } from './data/roadmap.js';
import { IPA_DATA } from './data/ipa.js';
import { MORPHOLOGY_DATA } from './data/morphology.js';
import { GRAMMAR_DATA } from './data/grammar.js';
import { PRAGMATICS_DATA } from './data/pragmatics.js';
import { DIAGNOSTIC_TEST } from './data/tests.js';
import { SpeechService } from './speech.js';
import { StorageService } from './storage.js';

class App {
  constructor() {
    this.speech = new SpeechService();
    this.storage = new StorageService();
    this.currentView = 'roadmap';
    this.currentSpeechTarget = null;
    this.isRecording = false;

    // Sub-view states
    this.activeRoadmapLevel = 'all';
    this.activeIpaTab = 'chart'; // 'chart' | 'pairs' | 'connected'
    this.activeMorphTab = 'roots'; // 'roots' | 'collocations' | 'flashcards'
    this.activeGrammarTab = 'tenses'; // 'tenses' | 'patterns' | 'advanced'
    this.activePragmaticsTab = 'register'; // 'register' | 'scenarios'
    this.currentFlashcardIndex = 0;
    this.flashcardFlipped = false;
    
    // Diagnostic Test State
    this.testState = {
      currentIndex: 0,
      userAnswers: {},
      isSubmitted: false,
      score: 0
    };

    this.init();
  }

  init() {
    this.storage.updateStreak();
    this.bindGlobalEvents();
    this.updateHeaderUI();
    this.navigateTo('roadmap');

    // Automatically show onboarding guide on first visit
    if (localStorage.getItem('seen_onboarding_guide') !== 'true') {
      setTimeout(() => this.openGuideModal(), 600);
    }
  }

  bindGlobalEvents() {
    // Navigation items
    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-nav');
        this.navigateTo(view);
      });
    });

    // Accent switcher
    const btnUs = document.getElementById('btn-accent-us');
    const btnUk = document.getElementById('btn-accent-uk');
    if (btnUs && btnUk) {
      btnUs.addEventListener('click', () => {
        this.speech.setAccent('en-US');
        btnUs.className = "px-2.5 py-1 rounded-md bg-white text-brand-700 shadow-sm font-semibold transition-all";
        btnUk.className = "px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-all";
        this.showToast("Đã đổi sang giọng Anh - Mỹ (General American)");
      });
      btnUk.addEventListener('click', () => {
        this.speech.setAccent('en-GB');
        btnUk.className = "px-2.5 py-1 rounded-md bg-white text-brand-700 shadow-sm font-semibold transition-all";
        btnUs.className = "px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-all";
        this.showToast("Đã đổi sang giọng Anh - Anh (Received Pronunciation)");
      });
    }

    // Speed selector
    const speedSelect = document.getElementById('select-speech-rate');
    if (speedSelect) {
      speedSelect.addEventListener('change', (e) => {
        this.speech.setRate(e.target.value);
        this.showToast(`Tốc độ phát âm: ${e.target.value}x`);
      });
    }

    // Diagnostic badge in header triggers test
    const btnHeaderLevel = document.getElementById('btn-header-level');
    if (btnHeaderLevel) {
      btnHeaderLevel.addEventListener('click', () => {
        this.navigateTo('diagnostic');
      });
    }

    // Audio bar close
    const audioBarClose = document.getElementById('audio-bar-close');
    if (audioBarClose) {
      audioBarClose.addEventListener('click', () => this.hideAudioBar());
    }

    // Audio bar replay
    const audioBarPlay = document.getElementById('audio-bar-play');
    if (audioBarPlay) {
      audioBarPlay.addEventListener('click', () => {
        if (this.currentAudioBarItem) {
          this.playAudio(this.currentAudioBarItem.text, this.currentAudioBarItem.phonetic);
        }
      });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('btn-mobile-menu');
    const sidebar = document.getElementById('sidebar');
    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('fixed');
        sidebar.classList.toggle('inset-y-0');
        sidebar.classList.toggle('left-0');
        sidebar.classList.toggle('z-50');
        sidebar.classList.toggle('shadow-2xl');
      });
    }

    // Guide modal controls
    const btnOpenGuideHeader = document.getElementById('btn-open-guide-header');
    if (btnOpenGuideHeader) {
      btnOpenGuideHeader.addEventListener('click', () => this.openGuideModal());
    }

    const btnOpenGuideSidebar = document.getElementById('btn-open-guide-sidebar');
    if (btnOpenGuideSidebar) {
      btnOpenGuideSidebar.addEventListener('click', () => this.openGuideModal());
    }

    const closeGuideModal = document.getElementById('close-guide-modal');
    if (closeGuideModal) {
      closeGuideModal.addEventListener('click', () => this.closeGuideModal());
    }

    const btnGuideCloseBtn = document.getElementById('btn-guide-close-btn');
    if (btnGuideCloseBtn) {
      btnGuideCloseBtn.addEventListener('click', () => this.closeGuideModal());
    }

    const btnGuideStartTest = document.getElementById('btn-guide-start-test');
    if (btnGuideStartTest) {
      btnGuideStartTest.addEventListener('click', () => {
        this.closeGuideModal();
        this.navigateTo('diagnostic');
      });
    }

    // Auth modal controls
    const btnStudentAcc = document.getElementById('btn-student-account');
    if (btnStudentAcc) {
      btnStudentAcc.addEventListener('click', () => this.openAuthModal());
    }

    const btnSidebarAcc = document.getElementById('btn-sidebar-account');
    if (btnSidebarAcc) {
      btnSidebarAcc.addEventListener('click', () => this.openAuthModal());
    }

    const closeAuthModal = document.getElementById('close-auth-modal');
    if (closeAuthModal) {
      closeAuthModal.addEventListener('click', () => this.closeAuthModal());
    }

    // Auth modal tabs
    const tabAuthSwitch = document.getElementById('tab-auth-switch');
    const tabAuthRegister = document.getElementById('tab-auth-register');
    const tabAuthBackup = document.getElementById('tab-auth-backup');

    if (tabAuthSwitch) {
      tabAuthSwitch.addEventListener('click', () => this.switchAuthTab('login'));
    }
    if (tabAuthRegister) {
      tabAuthRegister.addEventListener('click', () => this.switchAuthTab('register'));
    }
    if (tabAuthBackup) {
      tabAuthBackup.addEventListener('click', () => this.switchAuthTab('backup'));
    }

    // Login form submit
    const formLogin = document.getElementById('form-auth-login');
    if (formLogin) {
      formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errEl = document.getElementById('login-error-msg');
        try {
          this.storage.login(email, password);
          this.closeAuthModal();
          this.updateHeaderUI();
          this.navigateTo(this.currentView);
          this.showToast(`Chào mừng ${this.storage.currentUser.name} quay trở lại!`);
        } catch (err) {
          if (errEl) {
            errEl.textContent = err.message;
            errEl.classList.remove('hidden');
          }
        }
      });
    }

    // Register form submit
    const formRegister = document.getElementById('form-auth-register');
    if (formRegister) {
      formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const targetLevel = document.getElementById('reg-target-level').value;
        const errEl = document.getElementById('reg-error-msg');
        try {
          this.storage.register(name, email, password, targetLevel);
          this.closeAuthModal();
          this.updateHeaderUI();
          this.navigateTo('roadmap');
          this.showToast(`Đã tạo hồ sơ cho học viên ${name}!`);
        } catch (err) {
          if (errEl) {
            errEl.textContent = err.message;
            errEl.classList.remove('hidden');
          }
        }
      });
    }

    // Export JSON
    const btnExport = document.getElementById('btn-export-json');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const data = this.storage.exportUserData();
        if (!data) {
          this.showToast("Chưa có học sinh nào đang đăng nhập để xuất dữ liệu.");
          return;
        }
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const email = this.storage.currentUser ? this.storage.currentUser.email.split('@')[0] : 'hocsinh';
        a.href = url;
        a.download = `lo-trinh-tieng-anh-${email}-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast("Đã tải tệp sao lưu lộ trình về máy!");
      });
    }

    // Import JSON
    const inputImport = document.getElementById('input-import-json');
    if (inputImport) {
      inputImport.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const imported = this.storage.importUserData(event.target.result);
            this.closeAuthModal();
            this.updateHeaderUI();
            this.navigateTo(this.currentView);
            this.showToast(`Đã khôi phục thành công lộ trình của học viên ${imported.name}!`);
          } catch (err) {
            alert(`Lỗi khi đọc tệp sao lưu: ${err.message}`);
          }
        };
        reader.readAsText(file);
      });
    }

    // Logout
    const btnModalLogout = document.getElementById('btn-modal-logout');
    if (btnModalLogout) {
      btnModalLogout.addEventListener('click', () => {
        this.storage.logout();
        this.closeAuthModal();
        this.updateHeaderUI();
        this.navigateTo('roadmap');
        this.showToast("Đã đăng xuất học viên.");
      });
    }

    // Delete Account
    const btnModalDeleteAcc = document.getElementById('btn-modal-delete-acc');
    if (btnModalDeleteAcc) {
      btnModalDeleteAcc.addEventListener('click', () => {
        if (!this.storage.currentUser) return;
        const email = this.storage.currentUser.email;
        if (confirm(`Bạn có chắc chắn muốn xóa hồ sơ học viên '${email}' khỏi máy này không?`)) {
          this.storage.deleteAccount(email);
          this.closeAuthModal();
          this.updateHeaderUI();
          this.navigateTo('roadmap');
          this.showToast("Đã xóa hồ sơ học viên khỏi thiết bị.");
        }
      });
    }

    // Speech modal controls
    const closeSpeechModal = document.getElementById('close-speech-modal');
    if (closeSpeechModal) {
      closeSpeechModal.addEventListener('click', () => this.closeSpeechModal());
    }

    const btnListenSample = document.getElementById('btn-listen-sample');
    if (btnListenSample) {
      btnListenSample.addEventListener('click', () => {
        if (this.currentSpeechTarget) {
          this.speech.speak(this.currentSpeechTarget.text);
        }
      });
    }

    const btnToggleRecord = document.getElementById('btn-toggle-record');
    if (btnToggleRecord) {
      btnToggleRecord.addEventListener('click', () => this.toggleSpeechRecording());
    }
  }

  updateHeaderUI() {
    const user = this.storage.currentUser;
    const profile = this.storage.profile;

    const streakEl = document.getElementById('header-streak-count');
    if (streakEl) streakEl.textContent = profile.streak || 1;

    const levelBadgeEl = document.getElementById('header-level-badge');
    if (levelBadgeEl) {
      levelBadgeEl.textContent = profile.cefrBadge 
        ? `${profile.cefrBadge} - ${profile.level}` 
        : 'A1 - Khởi đầu';
    }

    const userNameEl = document.getElementById('header-user-name');
    const userEmailEl = document.getElementById('header-user-email');
    const avatarEl = document.getElementById('header-avatar');

    if (user) {
      if (userNameEl) userNameEl.textContent = user.name || 'Học viên';
      if (userEmailEl) userEmailEl.textContent = user.email || '';
      if (avatarEl) {
        const initial = (user.name || 'H').charAt(0).toUpperCase();
        avatarEl.textContent = initial;
      }
    } else {
      if (userNameEl) userNameEl.textContent = 'Đăng nhập';
      if (userEmailEl) userEmailEl.textContent = 'Chọn học viên';
      if (avatarEl) avatarEl.textContent = '+';
    }
  }

  navigateTo(viewName) {
    this.currentView = viewName;

    // Auto-close sidebar on mobile after clicking
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('fixed')) {
      sidebar.classList.add('hidden');
      sidebar.classList.remove('fixed', 'inset-y-0', 'left-0', 'z-50', 'shadow-2xl');
    }

    // Update sidebar navigation styles
    document.querySelectorAll('[data-nav]').forEach(btn => {
      const v = btn.getAttribute('data-nav');
      if (v === viewName) {
        btn.className = "nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-100/80 transition-all shadow-xs";
        const icon = btn.querySelector('i');
        if (icon) icon.className = "w-4 h-4 text-brand-600";
      } else {
        btn.className = "nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all";
        const icon = btn.querySelector('i');
        if (icon) icon.className = "w-4 h-4 text-slate-400";
      }
    });

    const container = document.getElementById('content-container');
    if (!container) return;

    // Render corresponding view
    switch (viewName) {
      case 'roadmap':
        this.renderRoadmap(container);
        break;
      case 'phonetics':
        this.renderPhonetics(container);
        break;
      case 'morphology':
        this.renderMorphology(container);
        break;
      case 'grammar':
        this.renderGrammar(container);
        break;
      case 'pragmatics':
        this.renderPragmatics(container);
        break;
      case 'shadowing':
        this.renderShadowing(container);
        break;
      case 'diagnostic':
        this.renderDiagnostic(container);
        break;
      case 'profile':
        this.renderProfile(container);
        break;
      default:
        this.renderRoadmap(container);
    }

    // Refresh icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
    container.scrollTop = 0;
  }

  /* =========================================================================
   * 1. ROADMAP (LỘ TRÌNH CEFR A1 -> C2 DƯỚI GÓC NHÌN NGÔN NGỮ HỌC)
   * ========================================================================= */
  renderRoadmap(container) {
    const levels = CEFR_ROADMAP;
    const filteredLevels = this.activeRoadmapLevel === 'all' 
      ? levels 
      : levels.filter(l => l.level.toLowerCase() === this.activeRoadmapLevel.toLowerCase());

    container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        
        <!-- Hero Header -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-lg">
          <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="max-w-3xl space-y-3 relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-200 border border-brand-400/30 text-xs font-semibold">
              <i data-lucide="compass" class="w-3.5 h-3.5 text-brand-300"></i>
              <span>Khung Tham chiếu Châu Âu (CEFR) & Thụ đắc Ngôn ngữ thứ hai (SLA)</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Lộ trình Tự học Tiếng Anh Khoa học: Từ Căn bản đến Bậc thầy
            </h1>
            <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dưới góc nhìn ngôn ngữ học, học ngoại ngữ không phải là nhồi nhét từ ngữ ngẫu nhiên, mà là sự phát triển đồng bộ 4 trụ cột: 
              <strong class="text-white">Âm vị học (Phonology)</strong>, 
              <strong class="text-white">Hình thái học (Morphology)</strong>, 
              <strong class="text-white">Cú pháp học (Syntax)</strong> và 
              <strong class="text-white">Ngữ dụng học (Pragmatics)</strong>.
            </p>

            <div class="pt-2 flex flex-wrap gap-3">
              <button id="btn-hero-guide" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all">
                <i data-lucide="compass" class="w-4 h-4"></i>
                <span>Hướng Dẫn Lộ Trình & Phương Pháp</span>
              </button>
              <button id="btn-start-diag" class="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all">
                <i data-lucide="target" class="w-4 h-4"></i>
                <span>Kiểm tra Chẩn đoán Trình độ Ngay</span>
              </button>
              <button id="btn-goto-ipa" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all">
                <i data-lucide="mic" class="w-4 h-4 text-brand-300"></i>
                <span>Phòng Lab Ngữ âm IPA</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Level Filter Tabs -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
          <div class="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            <button class="filter-roadmap-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${this.activeRoadmapLevel === 'all' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}" data-lvl="all">Tất cả cấp độ (A1 - C2)</button>
            ${levels.map(l => `
              <button class="filter-roadmap-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${this.activeRoadmapLevel === l.level.toLowerCase() ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}" data-lvl="${l.level.toLowerCase()}">
                ${l.level}
              </button>
            `).join('')}
          </div>
          <span class="text-xs text-slate-400 font-medium">6 Cấp độ Tiêu chuẩn Châu Âu</span>
        </div>

        <!-- Levels Grid / Roadmap Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredLevels.map(lvl => `
            <div class="rounded-2xl border border-slate-200 hover:border-brand-300 bg-white p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-1 rounded-lg text-xs font-black tracking-wide bg-${lvl.color}-50 text-${lvl.color}-700 border border-${lvl.color}-200">
                    CEFR ${lvl.level}
                  </span>
                  <span class="text-xs font-semibold text-slate-400">${lvl.vocabTarget}</span>
                </div>
                
                <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  ${lvl.name}
                </h3>

                <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  ${lvl.overview}
                </p>

                <div class="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div class="text-[11px] text-slate-600 flex items-start gap-1.5">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5"></i>
                    <span><strong>Ngữ âm:</strong> ${lvl.phoneticsTarget}</span>
                  </div>
                  <div class="text-[11px] text-slate-600 flex items-start gap-1.5">
                    <i data-lucide="book-open" class="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5"></i>
                    <span><strong>Cú pháp:</strong> ${lvl.grammarTarget}</span>
                  </div>
                </div>

                <div class="mt-3">
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Năng lực thực chứng (Can-do):</span>
                  <ul class="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                    ${lvl.canDo.slice(0, 2).map(c => `<li class="line-clamp-1">${c}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <div class="pt-2">
                <button class="btn-explore-level w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-brand-50 group-hover:bg-brand-600 text-slate-700 group-hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all" data-level="${lvl.level}">
                  <span>Học cấp độ ${lvl.level}</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 3 Pillars of SLA (Lý thuyết Thụ đắc Ngôn ngữ) -->
        <div class="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 space-y-4">
          <div class="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <i data-lucide="book-marked" class="w-4 h-4 text-brand-600"></i>
            <span>3 Trụ Cột Thụ Đắc Ngôn Ngữ Học (Stephen Krashen & Michael Long)</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
              <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px]">1</span>
                Đầu vào dễ hiểu (Comprehensible Input i+1)
              </h4>
              <p class="text-slate-500 leading-relaxed">
                Não bộ chỉ tiếp thu khi nội dung vượt hơn trình độ hiện tại đúng một bậc nhỏ (+1). Học theo từng nấc thang A1 đến C2 tránh tình trạng nản lòng do quá tải thông tin.
              </p>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
              <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px]">2</span>
                Bộ lọc Tình cảm thấp (Low Affective Filter)
              </h4>
              <p class="text-slate-500 leading-relaxed">
                Nỗi sợ sai là rào cản lớn nhất. Ứng dụng cung cấp môi trường luyện phát âm và phản xạ riêng tư với AI, giúp gạt bỏ tâm lý e ngại trước khi giao tiếp ngoài đời thực.
              </p>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5 shadow-xs">
              <h4 class="font-bold text-slate-800 flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px]">3</span>
                Đầu ra & Tương tác (Pushed Output Hypothesis)
              </h4>
              <p class="text-slate-500 leading-relaxed">
                Chỉ nghe hiểu là chưa đủ; não bộ cần chuyển dịch từ 'hiểu thụ động' sang 'sản xuất chủ động' thông qua phương pháp Shadowing và thực hành hội thoại theo tình huống.
              </p>
            </div>
          </div>
        </div>

      </div>
    `;

    // Bind sub-events for Roadmap
    container.querySelectorAll('.filter-roadmap-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        this.activeRoadmapLevel = e.currentTarget.getAttribute('data-lvl');
        this.renderRoadmap(container);
      });
    });

    const btnHeroGuide = container.querySelector('#btn-hero-guide');
    if (btnHeroGuide) {
      btnHeroGuide.addEventListener('click', () => this.openGuideModal());
    }

    const btnStartDiag = container.querySelector('#btn-start-diag');
    if (btnStartDiag) {
      btnStartDiag.addEventListener('click', () => this.navigateTo('diagnostic'));
    }

    const btnGotoIpa = container.querySelector('#btn-goto-ipa');
    if (btnGotoIpa) {
      btnGotoIpa.addEventListener('click', () => this.navigateTo('phonetics'));
    }

    container.querySelectorAll('.btn-explore-level').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lvl = e.currentTarget.getAttribute('data-level');
        this.showToast(`Đang mở học phần cấp độ ${lvl}`);
        this.navigateTo('phonetics');
      });
    });
  }

  /* =========================================================================
   * 2. PHONETICS LAB (PHÒNG LAB NGỮ ÂM HỌC 44 ÂM IPA & MINIMAL PAIRS)
   * ========================================================================= */
  renderPhonetics(container) {
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Phòng Thí Nghiệm Ngữ Âm Học (Applied Phonetics)</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold">44 IPA Symbols</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Âm thanh là gốc rễ của ngôn ngữ. Làm chủ cơ quan phát âm, phân biệt cặp âm tối thiểu và các hiện tượng nói tự nhiên.
            </p>
          </div>

          <!-- Phonetics Tabs -->
          <div class="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-semibold">
            <button id="tab-ipa-chart" class="px-3 py-1.5 rounded-lg transition-all ${this.activeIpaTab === 'chart' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              44 Ký hiệu IPA
            </button>
            <button id="tab-ipa-pairs" class="px-3 py-1.5 rounded-lg transition-all ${this.activeIpaTab === 'pairs' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Cặp âm Tối thiểu (Minimal Pairs)
            </button>
            <button id="tab-ipa-connected" class="px-3 py-1.5 rounded-lg transition-all ${this.activeIpaTab === 'connected' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Nối âm & Biến âm
            </button>
          </div>
        </div>

        <!-- Dynamic Phonetics Content Area -->
        <div id="phonetics-subcontent">
          ${this.renderPhoneticsSubcontent()}
        </div>

      </div>
    `;

    // Tab switcher events
    const tabChart = container.querySelector('#tab-ipa-chart');
    const tabPairs = container.querySelector('#tab-ipa-pairs');
    const tabConnected = container.querySelector('#tab-ipa-connected');

    if (tabChart) tabChart.addEventListener('click', () => { this.activeIpaTab = 'chart'; this.renderPhonetics(container); });
    if (tabPairs) tabPairs.addEventListener('click', () => { this.activeIpaTab = 'pairs'; this.renderPhonetics(container); });
    if (tabConnected) tabConnected.addEventListener('click', () => { this.activeIpaTab = 'connected'; this.renderPhonetics(container); });

    this.bindPhoneticsInteractions(container);
  }

  renderPhoneticsSubcontent() {
    if (this.activeIpaTab === 'chart') {
      return this.renderIpaChartHTML();
    } else if (this.activeIpaTab === 'pairs') {
      return this.renderMinimalPairsHTML();
    } else {
      return this.renderConnectedSpeechHTML();
    }
  }

  renderIpaChartHTML() {
    const { monophthongs, diphthongs } = IPA_DATA.vowels;
    const consonants = IPA_DATA.consonants;

    return `
      <div class="space-y-8">
        
        <!-- Vowels Section -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-slate-800 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Nguyên âm (Vowels: 12 Đơn & 8 Đôi)</span>
            </h3>
            <span class="text-xs text-slate-400">Nhấn vào ký tự bất kỳ để nghe âm mẫu và khẩu hình</span>
          </div>

          <!-- Monophthongs Grid -->
          <div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">12 Nguyên âm đơn (Monophthongs)</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              ${monophthongs.map(v => `
                <button class="ipa-card p-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/40 text-left transition-all shadow-2xs group cursor-pointer" data-ipa-symbol="${v.symbol}">
                  <div class="flex items-center justify-between">
                    <span class="text-xl font-mono font-bold text-emerald-700 group-hover:scale-110 transition-transform">/${v.symbol}/</span>
                    <i data-lucide="volume-2" class="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 transition-colors"></i>
                  </div>
                  <div class="mt-2 text-xs font-semibold text-slate-800 truncate">${v.sampleWord}</div>
                  <div class="text-[10px] text-slate-400 font-mono">${v.phonetic}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Diphthongs Grid -->
          <div class="pt-2">
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">8 Nguyên âm đôi (Diphthongs - Trượt giữa 2 âm)</div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${diphthongs.map(d => `
                <button class="ipa-card p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50/40 text-left transition-all shadow-2xs group cursor-pointer" data-ipa-symbol="${d.symbol}">
                  <div class="flex items-center justify-between">
                    <span class="text-xl font-mono font-bold text-teal-700 group-hover:scale-110 transition-transform">/${d.symbol}/</span>
                    <i data-lucide="volume-2" class="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-600 transition-colors"></i>
                  </div>
                  <div class="mt-2 text-xs font-semibold text-slate-800 truncate">${d.sampleWord}</div>
                  <div class="text-[10px] text-slate-400 font-mono">${d.phonetic}</div>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Consonants Section -->
        <div class="space-y-4 pt-4 border-t border-slate-200">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-slate-800 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              <span>24 Phụ âm (Consonants: Cặp Vô thanh vs Hữu thanh)</span>
            </h3>
            <span class="text-xs text-slate-400">Quy tắc thanh tính (Voicing)</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            ${consonants.map(c => `
              <button class="ipa-card p-3 rounded-xl border border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/40 text-left transition-all shadow-2xs group cursor-pointer" data-ipa-symbol="${c.symbol}">
                <div class="flex items-center justify-between">
                  <span class="text-xl font-mono font-bold ${c.voiced ? 'text-indigo-700' : 'text-slate-700'} group-hover:scale-110 transition-transform">/${c.symbol}/</span>
                  <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${c.voiced ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-600'}">
                    ${c.voiced ? 'Rung' : 'Gió'}
                  </span>
                </div>
                <div class="mt-2 text-xs font-semibold text-slate-800 truncate">${c.sampleWord}</div>
                <div class="text-[10px] text-slate-400 font-mono">${c.phonetic}</div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Detail Modal / Drawer placeholder -->
        <div id="ipa-detail-panel" class="hidden rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 animate-fade-in">
          <!-- Filled dynamically when user clicks an IPA card -->
        </div>

      </div>
    `;
  }

  renderMinimalPairsHTML() {
    const pairs = IPA_DATA.minimalPairs;

    return `
      <div class="space-y-6">
        <div class="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <i data-lucide="info" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="font-bold">Lợi thế của Cặp âm Tối thiểu (Minimal Pairs):</strong>
            <p class="mt-0.5 text-amber-800 leading-relaxed">
              Hai từ chỉ khác nhau đúng một âm vị (như <em>sheep</em> vs <em>ship</em>) nhưng mang ý nghĩa hoàn toàn khác biệt. Luyện nghe và phát âm cặp âm là con đường nhanh nhất giúp não bộ hình thành các bản đồ âm vị học chuẩn xác.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${pairs.map(p => `
            <div class="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-2xs">
              <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <span class="font-mono font-bold text-sm text-brand-700">${p.name}</span>
                <span class="text-[11px] font-medium text-slate-400">${p.contrast}</span>
              </div>

              <!-- Two words compared -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-slate-50 rounded-lg p-3 text-center border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div class="text-base font-bold text-slate-800">${p.wordA}</div>
                    <div class="font-mono text-xs text-emerald-600">${p.ipaA}</div>
                    <div class="text-[11px] text-slate-400 mt-1">${p.meaningA}</div>
                  </div>
                  <button class="btn-play-word mt-2 w-full py-1.5 px-2 rounded-md bg-white hover:bg-emerald-50 text-emerald-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-all" data-word="${p.wordA}" data-ipa="${p.ipaA}">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                    <span>Nghe âm A</span>
                  </button>
                </div>

                <div class="bg-slate-50 rounded-lg p-3 text-center border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div class="text-base font-bold text-slate-800">${p.wordB}</div>
                    <div class="font-mono text-xs text-indigo-600">${p.ipaB}</div>
                    <div class="text-[11px] text-slate-400 mt-1">${p.meaningB}</div>
                  </div>
                  <button class="btn-play-word mt-2 w-full py-1.5 px-2 rounded-md bg-white hover:bg-indigo-50 text-indigo-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-all" data-word="${p.wordB}" data-ipa="${p.ipaB}">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                    <span>Nghe âm B</span>
                  </button>
                </div>
              </div>

              <!-- Linguistic Note -->
              <div class="text-[11px] text-slate-500 bg-slate-50/60 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                💡 <strong class="text-slate-700">Lưu ý người Việt:</strong> ${p.linguisticNote}
              </div>

              <!-- Pronunciation Practice with AI -->
              <div class="pt-1 flex gap-2">
                <button class="btn-practice-pair w-full py-1.5 px-3 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all" data-word-a="${p.wordA}" data-word-b="${p.wordB}" data-ipa="${p.name}">
                  <i data-lucide="mic" class="w-3.5 h-3.5"></i>
                  <span>Luyện đọc với AI</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderConnectedSpeechHTML() {
    const list = IPA_DATA.connectedSpeech;

    return `
      <div class="space-y-6">
        <div class="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-900 flex items-start gap-3">
          <i data-lucide="sparkles" class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="font-bold">Bí mật của người bản xứ (Connected Speech):</strong>
            <p class="mt-0.5 text-indigo-800 leading-relaxed">
              Người bản ngữ không đọc từng từ rời rạc như robot. Khi nói nhanh, các từ kết dính vào nhau thông qua <strong>Nối âm (Linking)</strong>, <strong>Nuốt âm (Elision)</strong>, <strong>Biến âm (Assimilation)</strong> và <strong>Nhược hóa âm Schwa /ə/</strong>.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          ${list.map(item => `
            <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs">
              <div>
                <h4 class="text-base font-bold text-slate-900">${item.title}</h4>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.description}</p>
              </div>

              <div class="space-y-3">
                ${item.rules.map(r => `
                  <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-brand-800">${r.name}</span>
                      <span class="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">${r.formula}</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      ${r.examples.map(ex => `
                        <div class="bg-white p-2.5 rounded-lg border border-slate-200/80 flex items-center justify-between shadow-2xs">
                          <div>
                            <div class="text-xs font-bold text-slate-800">${ex.text}</div>
                            <div class="font-mono text-[11px] text-brand-600">${ex.spoken}</div>
                            <div class="text-[10px] text-slate-400">${ex.note}</div>
                          </div>
                          <button class="btn-play-word p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-brand-600 transition-colors" data-word="${ex.text}" data-ipa="${ex.spoken}">
                            <i data-lucide="volume-2" class="w-4 h-4"></i>
                          </button>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindPhoneticsInteractions(container) {
    // Click IPA card to hear sound & view mouth placement
    container.querySelectorAll('.ipa-card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const symbol = e.currentTarget.getAttribute('data-ipa-symbol');
        const allItems = [
          ...IPA_DATA.vowels.monophthongs,
          ...IPA_DATA.vowels.diphthongs,
          ...IPA_DATA.consonants
        ];
        const item = allItems.find(i => i.symbol === symbol);
        if (item) {
          this.playAudio(item.sampleWord, item.phonetic);
          this.showIpaDetail(item);
        }
      });
    });

    // Play word buttons
    container.querySelectorAll('.btn-play-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = e.currentTarget.getAttribute('data-word');
        const ipa = e.currentTarget.getAttribute('data-ipa');
        this.playAudio(word, ipa);
      });
    });

    // Practice pair with AI
    container.querySelectorAll('.btn-practice-pair').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const wordA = e.currentTarget.getAttribute('data-word-a');
        const wordB = e.currentTarget.getAttribute('data-word-b');
        const ipa = e.currentTarget.getAttribute('data-ipa');
        this.openSpeechModal({
          text: `${wordA} and ${wordB}`,
          ipa: `Luyện đọc phân biệt: ${wordA} vs ${wordB} (${ipa})`
        });
      });
    });
  }

  showIpaDetail(item) {
    const detailPanel = document.getElementById('ipa-detail-panel');
    if (!detailPanel) return;

    detailPanel.classList.remove('hidden');
    detailPanel.innerHTML = `
      <div class="flex items-start justify-between border-b border-slate-200/80 pb-3">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-brand-600 text-white font-mono font-bold text-2xl flex items-center justify-center shadow-md shadow-brand-500/20">
            /${item.symbol}/
          </div>
          <div>
            <h4 class="text-base font-bold text-slate-900">${item.name || `Âm vị /${item.symbol}/`}</h4>
            <p class="text-xs text-slate-500">${item.type || item.manner || 'Âm vị chuẩn IPA'}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button id="btn-ipa-detail-speak" class="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold flex items-center gap-1.5 transition-all">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
            <span>Nghe lại</span>
          </button>
          <button id="btn-ipa-detail-close" class="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
        <div class="space-y-2">
          <div class="font-bold text-slate-700 flex items-center gap-1.5">
            <i data-lucide="smile" class="w-4 h-4 text-emerald-600"></i>
            <span>Hướng dẫn Khẩu hình & Vị trí Cấu âm:</span>
          </div>
          <p class="text-slate-600 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
            ${item.mouth}
          </p>
        </div>

        <div class="space-y-2">
          <div class="font-bold text-slate-700 flex items-center gap-1.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-500"></i>
            <span>Lỗi người Việt hay mắc phải:</span>
          </div>
          <p class="text-slate-600 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
            ${item.vnMistake || 'Không phân biệt độ dài hoặc bỏ quên âm đuôi (final consonant).'}
          </p>
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between text-xs border-t border-slate-200/80">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-slate-500">Từ ví dụ:</span>
          <div class="flex gap-2 font-medium">
            ${(item.examples || []).map(ex => `
              <span class="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 cursor-pointer hover:border-brand-400 hover:text-brand-600 transition-colors btn-play-example" data-word="${ex}">
                ${ex}
              </span>
            `).join('')}
          </div>
        </div>
        <button id="btn-ipa-practice-mic" class="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-all">
          <i data-lucide="mic" class="w-3.5 h-3.5"></i>
          <span>Thử đọc từ mẫu</span>
        </button>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Bind inside detail
    const closeBtn = detailPanel.querySelector('#btn-ipa-detail-close');
    if (closeBtn) closeBtn.addEventListener('click', () => detailPanel.classList.add('hidden'));

    const speakBtn = detailPanel.querySelector('#btn-ipa-detail-speak');
    if (speakBtn) speakBtn.addEventListener('click', () => this.speech.speak(item.sampleWord));

    detailPanel.querySelectorAll('.btn-play-example').forEach(b => {
      b.addEventListener('click', (e) => this.speech.speak(e.currentTarget.getAttribute('data-word')));
    });

    const micBtn = detailPanel.querySelector('#btn-ipa-practice-mic');
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        this.openSpeechModal({
          text: item.sampleWord,
          ipa: item.phonetic
        });
      });
    }

    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* =========================================================================
   * 3. MORPHOLOGY & LEXICOLOGY (HÌNH THÁI HỌC, GỐC TỪ & COLLOCATIONS)
   * ========================================================================= */
  renderMorphology(container) {
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Hình thái học & Từ nguyên học (Morphology)</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold">Word Roots & AWL</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Mở khóa hàng ngàn từ vựng học thuật chỉ qua 1 gốc từ. Nắm vững mạng lưới kết hợp từ tự nhiên (Collocations).
            </p>
          </div>

          <!-- Tabs -->
          <div class="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-semibold">
            <button id="tab-morph-roots" class="px-3 py-1.5 rounded-lg transition-all ${this.activeMorphTab === 'roots' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Gốc từ & Tiền/Hậu tố
            </button>
            <button id="tab-morph-colloc" class="px-3 py-1.5 rounded-lg transition-all ${this.activeMorphTab === 'collocations' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Mạng lưới Collocations
            </button>
            <button id="tab-morph-flashcards" class="px-3 py-1.5 rounded-lg transition-all ${this.activeMorphTab === 'flashcards' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Thẻ ghi nhớ SM-2 (AWL)
            </button>
          </div>
        </div>

        <!-- Subcontent -->
        <div id="morphology-subcontent">
          ${this.renderMorphologySubcontent()}
        </div>

      </div>
    `;

    // Tab bindings
    const tabRoots = container.querySelector('#tab-morph-roots');
    const tabColloc = container.querySelector('#tab-morph-colloc');
    const tabFlash = container.querySelector('#tab-morph-flashcards');

    if (tabRoots) tabRoots.addEventListener('click', () => { this.activeMorphTab = 'roots'; this.renderMorphology(container); });
    if (tabColloc) tabColloc.addEventListener('click', () => { this.activeMorphTab = 'collocations'; this.renderMorphology(container); });
    if (tabFlash) tabFlash.addEventListener('click', () => { this.activeMorphTab = 'flashcards'; this.renderMorphology(container); });

    this.bindMorphologyInteractions(container);
  }

  renderMorphologySubcontent() {
    if (this.activeMorphTab === 'roots') {
      return this.renderRootsHTML();
    } else if (this.activeMorphTab === 'collocations') {
      return this.renderCollocationsHTML();
    } else {
      return this.renderFlashcardsHTML();
    }
  }

  renderRootsHTML() {
    const roots = MORPHOLOGY_DATA.roots;
    const prefixes = MORPHOLOGY_DATA.affixes.prefixes;
    const suffixes = MORPHOLOGY_DATA.affixes.suffixes;

    return `
      <div class="space-y-8">
        
        <!-- Explanation card -->
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 rounded-2xl p-5 text-xs text-purple-950 space-y-2">
          <div class="flex items-center gap-2 font-bold text-sm text-purple-900">
            <i data-lucide="key" class="w-4 h-4 text-purple-600"></i>
            <span>Công thức Kiến tạo Từ vựng (Morphological Word Formation):</span>
          </div>
          <p class="leading-relaxed">
            Trong tiếng Anh, trên 70% từ vựng chuyên ngành được hình thành theo công thức: 
            <strong class="font-mono bg-white px-2 py-0.5 rounded border border-purple-200 text-purple-700">Prefix (Tiền tố) + Root (Gốc từ) + Suffix (Hậu tố)</strong>. 
            Hiểu được 1 gốc từ như <em>spect</em> (nhìn) giúp bạn suy luận ngay nghĩa của <em>inspect</em>, <em>perspective</em>, <em>retrospect</em> và <em>circumspect</em> mà không cần tra từ điển.
          </p>
        </div>

        <!-- Roots Accordion / Cards -->
        <div class="space-y-4">
          <h3 class="text-base font-bold text-slate-800 flex items-center gap-2">
            <i data-lucide="database" class="w-4 h-4 text-brand-600"></i>
            <span>Các Gốc từ Hy Lạp & La-tinh Nổi bật</span>
          </h3>

          <div class="grid grid-cols-1 gap-4">
            ${roots.map(r => `
              <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs hover:border-brand-300 transition-all">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div class="flex items-center gap-3">
                    <span class="font-mono font-extrabold text-lg text-brand-700 bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">
                      -${r.root}-
                    </span>
                    <div>
                      <h4 class="font-bold text-slate-900 text-sm">${r.meaning}</h4>
                      <span class="text-[11px] text-slate-400">Nguồn gốc: ${r.origin}</span>
                    </div>
                  </div>
                  <span class="text-xs text-slate-500 italic max-w-xs sm:text-right">${r.explanation}</span>
                </div>

                <!-- Derived words tree -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  ${r.derivations.map(d => `
                    <div class="bg-slate-50 rounded-xl p-3 border border-slate-100/90 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center justify-between">
                          <span class="font-bold text-slate-900 text-sm">${d.word}</span>
                          <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-slate-500 border border-slate-200">${d.pos}</span>
                        </div>
                        <div class="font-mono text-[11px] text-brand-600">${d.breakdown}</div>
                        <div class="text-xs text-slate-600 mt-1">${d.meaning}</div>
                        <div class="text-[11px] text-slate-500 italic mt-1 bg-white p-1.5 rounded border border-slate-200/60">
                          "${d.example}"
                        </div>
                      </div>

                      <div class="pt-2 flex items-center justify-between border-t border-slate-100">
                        <span class="text-[10px] font-semibold text-slate-400">Cụm: ${d.collocation}</span>
                        <button class="btn-play-word p-1 rounded hover:bg-slate-200 text-slate-400 hover:text-brand-600 transition-colors" data-word="${d.word}" data-ipa="${d.word}">
                          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Prefixes & Suffixes Quick Reference -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
          <!-- Prefixes -->
          <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <h4 class="font-bold text-slate-800 text-sm flex items-center gap-2">
              <i data-lucide="arrow-left-circle" class="w-4 h-4 text-emerald-600"></i>
              <span>10 Tiền tố Phổ biến nhất (Prefixes)</span>
            </h4>
            <div class="space-y-2">
              ${prefixes.slice(0, 6).map(p => `
                <div class="bg-white p-2.5 rounded-lg border border-slate-200/80 text-xs flex items-center justify-between">
                  <div class="font-mono font-bold text-brand-700">${p.prefix}</div>
                  <div class="text-slate-600 max-w-xs truncate">${p.meaning}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Suffixes -->
          <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <h4 class="font-bold text-slate-800 text-sm flex items-center gap-2">
              <i data-lucide="arrow-right-circle" class="w-4 h-4 text-indigo-600"></i>
              <span>Hậu tố chuyển đổi từ loại (Suffixes)</span>
            </h4>
            <div class="space-y-2">
              ${suffixes.slice(0, 6).map(s => `
                <div class="bg-white p-2.5 rounded-lg border border-slate-200/80 text-xs flex items-center justify-between">
                  <div class="font-mono font-bold text-indigo-700">${s.suffix}</div>
                  <div class="text-slate-600 max-w-xs truncate">${s.function}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    `;
  }

  renderCollocationsHTML() {
    const categories = MORPHOLOGY_DATA.collocations;

    return `
      <div class="space-y-6">
        <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start gap-3">
          <i data-lucide="network" class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="font-bold">Collocation là gì dưới góc nhìn Ngôn ngữ học?</strong>
            <p class="mt-0.5 text-teal-800 leading-relaxed">
              Collocation là xu hướng tự nhiên của các từ khi luôn 'đi chung' với nhau trong diễn ngôn bản ngữ. Người học Việt Nam thường ghép từ theo nghĩa tiếng Việt (e.g. <em>strong rain</em> - Sai, phải là <em>heavy rain</em>).
            </p>
          </div>
        </div>

        <div class="space-y-6">
          ${categories.map(cat => `
            <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs">
              <div class="border-b border-slate-100 pb-3">
                <h4 class="text-base font-bold text-slate-900">${cat.category}</h4>
                <p class="text-xs text-brand-700 font-medium mt-1">${cat.linguisticPrinciple}</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                ${cat.items.map(item => `
                  <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between space-y-2">
                    <div>
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-slate-800 text-xs">${item.phrase}</span>
                        <button class="btn-play-word text-slate-400 hover:text-brand-600" data-word="${item.phrase}" data-ipa="${item.phrase}">
                          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>
                      ${item.wrong ? `<div class="text-[10px] text-rose-500 line-through">❌ ${item.wrong}</div>` : ''}
                      <div class="text-[11px] text-slate-500 mt-1">${item.meaning}</div>
                    </div>
                    <div class="text-[10px] text-slate-400 bg-white p-1 rounded border border-slate-200/60 italic">
                      ${item.note}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderFlashcardsHTML() {
    const awl = MORPHOLOGY_DATA.awl;
    const currentCard = awl[this.currentFlashcardIndex] || awl[0];

    return `
      <div class="space-y-6 max-w-2xl mx-auto">
        <div class="flex items-center justify-between text-xs text-slate-500">
          <div class="flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4 text-brand-600"></i>
            <span>Academic Word List (AWL) - Thuật toán SM-2</span>
          </div>
          <span>Thẻ ${this.currentFlashcardIndex + 1} / ${awl.length}</span>
        </div>

        <!-- 3D Interactive Flashcard Scene -->
        <div class="flashcard-scene h-80 w-full" id="flashcard-container">
          <div class="flashcard bg-white rounded-3xl border-2 border-slate-200 hover:border-brand-400 shadow-lg p-6 sm:p-8 flex flex-col justify-between relative transition-all" id="flashcard-card">
            
            <!-- Card Front / Back toggle badge -->
            <div class="flex items-center justify-between w-full">
              <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                ${currentCard.pos}
              </span>
              <button class="btn-play-word p-2 rounded-xl bg-slate-50 hover:bg-brand-50 text-brand-600 transition-colors" data-word="${currentCard.word}" data-ipa="${currentCard.ipa}">
                <i data-lucide="volume-2" class="w-5 h-5"></i>
              </button>
            </div>

            <!-- Card Core Content -->
            <div class="text-center space-y-2 py-4">
              <h3 class="text-3xl font-extrabold text-slate-900 tracking-tight">${currentCard.word}</h3>
              <div class="font-mono text-sm text-brand-600">${currentCard.ipa}</div>
              <p class="text-sm text-slate-600 pt-2 font-medium">${currentCard.meaning}</p>
            </div>

            <!-- Extra Details -->
            <div class="bg-slate-50 rounded-2xl p-3 text-xs text-left border border-slate-100 space-y-1">
              <div class="text-slate-500"><strong>Word family:</strong> ${currentCard.family}</div>
              <div class="text-slate-700 italic">"${currentCard.example}"</div>
            </div>

            <div class="text-[10px] text-center text-slate-400">
              Nhấn các nút bên dưới để đánh giá độ nhớ (Thuật toán SM-2)
            </div>
          </div>
        </div>

        <!-- SM-2 Quality Feedback Buttons -->
        <div class="flex items-center justify-center gap-3 pt-2">
          <button class="btn-sm2 px-4 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all" data-quality="1">
            Chưa nhớ (Học lại)
          </button>
          <button class="btn-sm2 px-4 py-2 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold transition-all" data-quality="3">
            Nhớ vừa (6 ngày)
          </button>
          <button class="btn-sm2 px-5 py-2 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-all" data-quality="5">
            Nhớ rõ (Thuần thục)
          </button>
        </div>
      </div>
    `;
  }

  bindMorphologyInteractions(container) {
    container.querySelectorAll('.btn-play-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = e.currentTarget.getAttribute('data-word');
        const ipa = e.currentTarget.getAttribute('data-ipa');
        this.playAudio(word, ipa);
      });
    });

    // SM-2 Review button events
    container.querySelectorAll('.btn-sm2').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const quality = parseInt(e.currentTarget.getAttribute('data-quality'), 10);
        const awl = MORPHOLOGY_DATA.awl;
        const currentCard = awl[this.currentFlashcardIndex];
        if (currentCard) {
          this.storage.reviewCardSM2(currentCard.word, quality);
          this.showToast(`Đã lưu tiến độ thẻ "${currentCard.word}" theo SM-2`);
        }

        // Advance to next card
        this.currentFlashcardIndex = (this.currentFlashcardIndex + 1) % awl.length;
        this.renderMorphology(container);
      });
    });
  }

  /* =========================================================================
   * 4. COGNITIVE SYNTAX & GRAMMAR (MA TRẬN 12 THÌ & CÚ PHÁP)
   * ========================================================================= */
  renderGrammar(container) {
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Cú pháp học & Ngữ pháp Nhận thức (Cognitive Syntax)</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">Time vs Aspect</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Giải mã ma trận 12 thì qua 2 trục nhận thức Thời gian & Khía cạnh. 5 mẫu câu nền tảng và nghệ thuật đảo ngữ.
            </p>
          </div>

          <!-- Tabs -->
          <div class="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-semibold">
            <button id="tab-gram-tenses" class="px-3 py-1.5 rounded-lg transition-all ${this.activeGrammarTab === 'tenses' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Ma trận 12 Thì & Timeline
            </button>
            <button id="tab-gram-patterns" class="px-3 py-1.5 rounded-lg transition-all ${this.activeGrammarTab === 'patterns' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              5 Mẫu Câu Chuẩn
            </button>
            <button id="tab-gram-advanced" class="px-3 py-1.5 rounded-lg transition-all ${this.activeGrammarTab === 'advanced' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Đảo ngữ & Câu chẻ
            </button>
          </div>
        </div>

        <!-- Subcontent -->
        <div id="grammar-subcontent">
          ${this.renderGrammarSubcontent()}
        </div>

      </div>
    `;

    const tabTenses = container.querySelector('#tab-gram-tenses');
    const tabPatterns = container.querySelector('#tab-gram-patterns');
    const tabAdv = container.querySelector('#tab-gram-advanced');

    if (tabTenses) tabTenses.addEventListener('click', () => { this.activeGrammarTab = 'tenses'; this.renderGrammar(container); });
    if (tabPatterns) tabPatterns.addEventListener('click', () => { this.activeGrammarTab = 'patterns'; this.renderGrammar(container); });
    if (tabAdv) tabAdv.addEventListener('click', () => { this.activeGrammarTab = 'advanced'; this.renderGrammar(container); });

    this.bindGrammarInteractions(container);
  }

  renderGrammarSubcontent() {
    if (this.activeGrammarTab === 'tenses') {
      return this.renderTensesHTML();
    } else if (this.activeGrammarTab === 'patterns') {
      return this.renderPatternsHTML();
    } else {
      return this.renderAdvancedSyntaxHTML();
    }
  }

  renderTensesHTML() {
    const { cognitiveOverview, tensesMatrix } = GRAMMAR_DATA;

    return `
      <div class="space-y-6">
        
        <!-- Cognitive Philosophy Card -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5 text-xs text-blue-950 space-y-2">
          <div class="flex items-center gap-2 font-bold text-sm text-blue-900">
            <i data-lucide="clock" class="w-4 h-4 text-blue-600"></i>
            <span>${cognitiveOverview.title}</span>
          </div>
          <p class="leading-relaxed">${cognitiveOverview.philosophy}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div class="bg-white p-3 rounded-xl border border-blue-100">
              <strong class="text-blue-800">1. Trục Thời Gian (Time):</strong>
              <p class="text-slate-600 mt-0.5">${cognitiveOverview.axes.time}</p>
            </div>
            <div class="bg-white p-3 rounded-xl border border-blue-100">
              <strong class="text-indigo-800">2. Trục Thể/Khía Cạnh (Aspect):</strong>
              <p class="text-slate-600 mt-0.5">${cognitiveOverview.axes.aspect}</p>
            </div>
          </div>
        </div>

        <!-- Tenses Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${tensesMatrix.map(t => `
            <div class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs hover:border-brand-300 transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span class="font-bold text-slate-900 text-sm">${t.name}</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200 font-semibold">
                    ${t.time} • ${t.aspect}
                  </span>
                </div>

                <!-- Formula -->
                <div class="mt-2 font-mono text-xs font-bold text-brand-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  ${t.formula}
                </div>

                <!-- Linguistic Essence -->
                <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                  💡 <strong class="text-slate-800">Bản chất ngôn ngữ:</strong> ${t.linguisticEssence}
                </p>

                <!-- Visual Timeline ASCII / Graphic -->
                <div class="bg-slate-900 text-slate-200 font-mono text-[10px] p-2.5 rounded-lg mt-3 overflow-x-auto">
                  ${t.timeline}
                </div>

                <!-- Examples -->
                <div class="mt-3 space-y-1.5 text-xs">
                  ${t.examples.map(ex => `
                    <div class="bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start justify-between gap-2">
                      <div>
                        <div class="font-semibold text-slate-800">${ex.en}</div>
                        <div class="text-[11px] text-slate-500">${ex.vi}</div>
                      </div>
                      <button class="btn-play-word text-slate-400 hover:text-brand-600 mt-0.5" data-word="${ex.en}">
                        <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Trap -->
              <div class="text-[11px] text-amber-800 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed mt-2">
                ⚠️ <strong class="text-amber-900">Cạm bẫy người Việt:</strong> ${t.vnLearnerTrap}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  }

  renderPatternsHTML() {
    const patterns = GRAMMAR_DATA.sentencePatterns;

    return `
      <div class="space-y-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
          <i data-lucide="git-commit" class="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="font-bold text-slate-900">5 Mẫu Cú pháp Căn bản của Mọi Câu Tiếng Anh:</strong>
            <p class="mt-0.5 text-slate-600 leading-relaxed">
              Mọi câu tiếng Anh dù dài đến 100 từ trong văn bản của Shakespeare hay luận án tiến sĩ đều có thể quy về 1 trong 5 mẫu cú pháp cốt lõi này. Nắm chắc 5 mẫu giúp bạn tự tin viết câu đúng ngữ pháp mà không bị sót thành phần.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          ${patterns.map(p => `
            <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs">
              <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 class="font-bold text-slate-900 text-sm">${p.pattern}</h4>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed">${p.explanation}</p>

              <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
                <div>
                  <div class="text-sm font-bold text-slate-800">${p.example}</div>
                  <div class="font-mono text-xs text-brand-600 mt-0.5">${p.breakdown}</div>
                </div>
                <button class="btn-play-word p-2 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-brand-600 transition-colors" data-word="${p.example}">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderAdvancedSyntaxHTML() {
    const advanced = GRAMMAR_DATA.advancedSyntax;

    return `
      <div class="space-y-6">
        ${advanced.map(sec => `
          <div class="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs">
            <div class="border-b border-slate-100 pb-3">
              <h4 class="text-base font-bold text-slate-900">${sec.title}</h4>
              <p class="text-xs text-slate-500 mt-1">${sec.purpose}</p>
            </div>

            <div class="space-y-3">
              ${sec.rules.map(r => `
                <div class="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                  <div class="text-xs font-bold text-brand-800">${r.trigger || r.type}</div>
                  ${r.structure ? `<div class="text-[11px] font-mono text-slate-600 bg-white p-1.5 rounded border border-slate-200">Cấu trúc: ${r.structure}</div>` : ''}
                  ${r.formula ? `<div class="text-[11px] font-mono text-slate-600 bg-white p-1.5 rounded border border-slate-200">Công thức: ${r.formula}</div>` : ''}

                  <div class="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <div class="font-bold text-slate-800 flex items-center justify-between">
                      <span>✨ Ví dụ: "${r.example}"</span>
                      <button class="btn-play-word text-slate-400 hover:text-brand-600" data-word="${r.example}">
                        <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                    ${r.standard ? `<div class="text-slate-400 text-[11px]">Câu thường: "${r.standard}"</div>` : ''}
                    ${r.note ? `<div class="text-slate-500 text-[11px] italic mt-1">${r.note}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  bindGrammarInteractions(container) {
    container.querySelectorAll('.btn-play-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = e.currentTarget.getAttribute('data-word');
        this.playAudio(word);
      });
    });
  }

  /* =========================================================================
   * 5. PRAGMATICS & DISCOURSE (NGỮ DỤNG HỌC & REGISTER SWITCHER)
   * ========================================================================= */
  renderPragmatics(container) {
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Ngữ dụng học & Diễn ngôn (Pragmatics & Discourse)</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold">Register & Hedging</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Ngôn ngữ trong đời thực: Chuyển đổi văn phong (Casual vs Formal), nghệ thuật rào đón ngoại giao (Hedging).
            </p>
          </div>

          <!-- Tabs -->
          <div class="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-semibold">
            <button id="tab-prag-register" class="px-3 py-1.5 rounded-lg transition-all ${this.activePragmaticsTab === 'register' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Bộ chuyển đổi Văn phong (Register)
            </button>
            <button id="tab-prag-scenarios" class="px-3 py-1.5 rounded-lg transition-all ${this.activePragmaticsTab === 'scenarios' ? 'bg-white text-brand-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Hội thoại Tình huống Thực tế
            </button>
          </div>
        </div>

        <div id="pragmatics-subcontent">
          ${this.renderPragmaticsSubcontent()}
        </div>

      </div>
    `;

    const tabReg = container.querySelector('#tab-prag-register');
    const tabScen = container.querySelector('#tab-prag-scenarios');

    if (tabReg) tabReg.addEventListener('click', () => { this.activePragmaticsTab = 'register'; this.renderPragmatics(container); });
    if (tabScen) tabScen.addEventListener('click', () => { this.activePragmaticsTab = 'scenarios'; this.renderPragmatics(container); });

    this.bindPragmaticsInteractions(container);
  }

  renderPragmaticsSubcontent() {
    if (this.activePragmaticsTab === 'register') {
      const items = PRAGMATICS_DATA.registerSwitcher;
      const hedging = PRAGMATICS_DATA.hedgingTechniques;

      return `
        <div class="space-y-6">
          <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 flex items-start gap-3">
            <i data-lucide="sliders-horizontal" class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5"></i>
            <div>
              <strong class="font-bold">Khái niệm Phong cách Ngôn ngữ (Register) của Halliday:</strong>
              <p class="mt-0.5 text-purple-800 leading-relaxed">
                Người bản ngữ tinh tế không chỉ nói đúng ngữ pháp mà luôn chọn đúng <em>Register</em> phù hợp với hoàn cảnh: bạn bè uống bia (Casual), đồng nghiệp công sở (Neutral) hay hội nghị quốc tế (Formal).
              </p>
            </div>
          </div>

          <!-- Register Switcher Cards -->
          <div class="space-y-4">
            ${items.map(item => `
              <div class="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs">
                <div class="border-b border-slate-100 pb-2">
                  <h4 class="font-bold text-slate-900 text-sm">${item.intent}</h4>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <!-- Casual -->
                  <div class="bg-amber-50/50 rounded-xl p-3 border border-amber-200/60 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        Thân mật (Casual)
                      </span>
                      <p class="text-xs font-semibold text-slate-800 mt-2">"${item.casual}"</p>
                    </div>
                    <button class="btn-play-word mt-2 w-full py-1 rounded bg-white hover:bg-amber-50 text-amber-800 text-[11px] font-semibold flex items-center justify-center gap-1 border border-slate-200 transition-colors" data-word="${item.casual}">
                      <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      <span>Nghe</span>
                    </button>
                  </div>

                  <!-- Neutral -->
                  <div class="bg-blue-50/50 rounded-xl p-3 border border-blue-200/60 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                        Công sở (Neutral)
                      </span>
                      <p class="text-xs font-semibold text-slate-800 mt-2">"${item.neutral}"</p>
                    </div>
                    <button class="btn-play-word mt-2 w-full py-1 rounded bg-white hover:bg-blue-50 text-blue-800 text-[11px] font-semibold flex items-center justify-center gap-1 border border-slate-200 transition-colors" data-word="${item.neutral}">
                      <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      <span>Nghe</span>
                    </button>
                  </div>

                  <!-- Formal -->
                  <div class="bg-purple-50/50 rounded-xl p-3 border border-purple-200/60 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                        Trang trọng (Formal / C1-C2)
                      </span>
                      <p class="text-xs font-semibold text-slate-800 mt-2">"${item.formal}"</p>
                    </div>
                    <button class="btn-play-word mt-2 w-full py-1 rounded bg-white hover:bg-purple-50 text-purple-800 text-[11px] font-semibold flex items-center justify-center gap-1 border border-slate-200 transition-colors" data-word="${item.formal}">
                      <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      <span>Nghe</span>
                    </button>
                  </div>
                </div>

                <div class="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                  💡 <strong class="text-slate-700">Phân tích ngôn ngữ:</strong> ${item.linguisticAnalysis}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Hedging Guide -->
          <div class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
            <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
              <span>${hedging.title}</span>
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">${hedging.description}</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              ${hedging.devices.map(d => `
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                  <div class="font-bold text-brand-800">${d.category}</div>
                  <div class="font-mono text-[11px] text-slate-600">${d.words}</div>
                  <div class="text-[11px] text-slate-500 italic pt-1">"${d.example}"</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      const scenarios = PRAGMATICS_DATA.scenarios;

      return `
        <div class="space-y-6">
          ${scenarios.map(sc => `
            <div class="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-2xs">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h4 class="font-bold text-slate-900 text-base">${sc.title}</h4>
                  <p class="text-xs text-slate-500 mt-0.5">${sc.context}</p>
                </div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 self-start sm:self-auto">
                  ${sc.level}
                </span>
              </div>

              <!-- Dialogue flow -->
              <div class="space-y-2.5">
                ${sc.dialogue.map(d => `
                  <div class="p-3 rounded-xl ${d.speaker === 'You' ? 'bg-brand-50/70 border border-brand-200 ml-4' : 'bg-slate-50 border border-slate-200/80 mr-4'} space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold ${d.speaker === 'You' ? 'text-brand-700' : 'text-slate-700'}">${d.speaker}</span>
                      <button class="btn-play-word text-slate-400 hover:text-brand-600" data-word="${d.text}">
                        <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-slate-800">${d.text}</p>
                    <p class="text-[10px] font-mono text-slate-400">${d.ipa}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Cultural Tip -->
              <div class="text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                🌐 <strong class="font-bold">Mẹo văn hóa & xã hội:</strong> ${sc.culturalTip}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  bindPragmaticsInteractions(container) {
    container.querySelectorAll('.btn-play-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const word = e.currentTarget.getAttribute('data-word');
        this.playAudio(word);
      });
    });
  }

  /* =========================================================================
   * 6. SHADOWING STUDIO (PHÒNG LUYỆN NÓI SHADOWING VỚI NHẬN DIỆN GIỌNG NÓI AI)
   * ========================================================================= */
  renderShadowing(container) {
    const passages = PRAGMATICS_DATA.shadowingPassages;

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        
        <!-- Header -->
        <div class="border-b border-slate-200 pb-4">
          <div class="flex items-center gap-2">
            <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Phòng Luyện Nói Shadowing & Phản Xạ AI</h2>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Kỹ thuật Nhại giọng</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Phương pháp Shadowing (Nghe - Ngừng - Nhại lại đồng thời) là phương pháp số 1 của các phiên dịch viên quốc tế để hình thành ngữ điệu và phản xạ vô thức.
          </p>
        </div>

        <!-- Passages List -->
        <div class="space-y-6">
          ${passages.map(p => `
            <div class="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm hover:border-brand-300 transition-all">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 class="font-bold text-slate-900 text-base">${p.title}</h3>
                  <div class="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                    <span>${p.speaker}</span>
                    <span>•</span>
                    <span class="text-brand-600 font-semibold">${p.level}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button class="btn-play-passage px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all" data-text="${p.text}">
                    <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
                    <span>Nghe toàn bài</span>
                  </button>
                  <button class="btn-practice-shadow px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs border border-emerald-200 flex items-center gap-1.5 transition-all" data-text="${p.text}" data-ipa="${p.ipa}">
                    <i data-lucide="mic" class="w-3.5 h-3.5"></i>
                    <span>Luyện nói với AI</span>
                  </button>
                </div>
              </div>

              <!-- Main script & IPA -->
              <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 space-y-2">
                <p class="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">${p.text}</p>
                <p class="text-xs font-mono text-brand-600 leading-relaxed pt-1">${p.ipa}</p>
              </div>

              <!-- Linguistic Tips -->
              <div class="text-xs text-slate-600 bg-slate-50/60 p-3 rounded-xl border border-slate-100 flex items-start gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"></i>
                <div>
                  <strong class="text-slate-800">Kỹ thuật phát âm:</strong> ${p.tips}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    // Bindings
    container.querySelectorAll('.btn-play-passage').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.getAttribute('data-text');
        this.speech.speak(text);
      });
    });

    container.querySelectorAll('.btn-practice-shadow').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.getAttribute('data-text');
        const ipa = e.currentTarget.getAttribute('data-ipa');
        this.openSpeechModal({ text, ipa });
      });
    });
  }

  /* =========================================================================
   * 7. DIAGNOSTIC PLACEMENT TEST (KIỂM TRA CHẨN ĐOÁN TRÌNH ĐỘ CEFR)
   * ========================================================================= */
  renderDiagnostic(container) {
    const questions = DIAGNOSTIC_TEST;
    const isDone = this.testState.isSubmitted;

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in max-w-3xl mx-auto">
        
        <!-- Header -->
        <div class="border-b border-slate-200 pb-4">
          <div class="flex items-center gap-2">
            <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Bài Thi Chẩn Đoán Trình Độ Ngôn Ngữ Học CEFR</h2>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold">18 Câu Chuyên sâu</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Đánh giá toàn diện 4 trụ cột: Ngữ âm, Hình thái học, Cú pháp học nhận thức và Ngữ dụng học từ A1 đến C2.
          </p>
        </div>

        ${isDone ? this.renderDiagnosticResultHTML() : this.renderDiagnosticQuestionsHTML()}

      </div>
    `;

    this.bindDiagnosticInteractions(container);
  }

  renderDiagnosticQuestionsHTML() {
    const questions = DIAGNOSTIC_TEST;

    return `
      <div class="space-y-6">
        <form id="diagnostic-form" class="space-y-6">
          ${questions.map((q, idx) => `
            <div class="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs">
              <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <span class="text-xs font-bold text-slate-400">Câu ${idx + 1} / ${questions.length}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200 font-semibold">
                  Mục tiêu: ${q.level} • ${q.pillar}
                </span>
              </div>

              <div class="text-sm font-bold text-slate-800 leading-snug">
                ${q.question}
              </div>

              <div class="space-y-2 pt-1">
                ${q.options.map((opt, oIdx) => `
                  <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 cursor-pointer transition-all text-xs font-medium text-slate-700">
                    <input type="radio" name="q_${q.id}" value="${oIdx}" class="text-brand-600 focus:ring-brand-500 h-4 w-4" ${this.testState.userAnswers[q.id] === oIdx ? 'checked' : ''}>
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}

          <div class="pt-4 flex justify-end">
            <button type="submit" class="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/20 transition-all">
              Hoàn Thành & Chẩn Đoán Trình Độ
            </button>
          </div>
        </form>
      </div>
    `;
  }

  renderDiagnosticResultHTML() {
    const { score, total, level, badge, recommendation } = this.testResultData;

    return `
      <div class="rounded-3xl border border-brand-200 bg-white p-6 sm:p-8 space-y-6 shadow-xl animate-scale-up">
        <div class="text-center space-y-3">
          <div class="w-16 h-16 rounded-3xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center shadow-inner">
            <i data-lucide="award" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-extrabold text-slate-900">Kết Quả Chẩn Đoán Của Bạn</h3>
          <p class="text-sm text-slate-500">Dựa trên ma trận năng lực ngôn ngữ học CEFR</p>

          <div class="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl">
            <div class="text-center">
              <span class="text-3xl font-black text-brand-600">${score} / ${total}</span>
              <div class="text-[11px] font-semibold text-slate-400 uppercase">Điểm số</div>
            </div>
            <div class="h-8 w-px bg-slate-200"></div>
            <div class="text-center">
              <span class="text-3xl font-black text-emerald-600">${level}</span>
              <div class="text-[11px] font-semibold text-slate-400 uppercase">${badge}</div>
            </div>
          </div>
        </div>

        <!-- Detailed Linguistic Analysis of Score -->
        <div class="bg-brand-50/60 rounded-2xl p-5 border border-brand-100 text-xs text-brand-950 space-y-2">
          <h4 class="font-bold text-sm text-brand-900 flex items-center gap-1.5">
            <i data-lucide="compass" class="w-4 h-4 text-brand-600"></i>
            <span>Định Hướng Học Tập Cá Nhân Hóa:</span>
          </h4>
          <p class="leading-relaxed text-slate-700">${recommendation}</p>
        </div>

        <div class="flex items-center justify-center gap-4 pt-2">
          <button id="btn-retest" class="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all">
            Làm lại bài thi
          </button>
          <button id="btn-goto-roadmap-after-test" class="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-md transition-all">
            Xem Lộ trình đề xuất
          </button>
        </div>
      </div>
    `;
  }

  bindDiagnosticInteractions(container) {
    const form = container.querySelector('#diagnostic-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const questions = DIAGNOSTIC_TEST;
        let score = 0;

        questions.forEach(q => {
          const selected = form.querySelector(`input[name="q_${q.id}"]:checked`);
          if (selected) {
            const val = parseInt(selected.value, 10);
            this.testState.userAnswers[q.id] = val;
            if (val === q.correct) {
              score++;
            }
          }
        });

        // Determine level
        let level = "A1";
        let badge = "Khởi đầu";
        let recommendation = "";

        if (score >= 16) {
          level = "C1 / C2";
          badge = "Chuyên gia / Tinh thông";
          recommendation = "Khả năng phân tích ngôn ngữ học của bạn rất xuất sắc. Bạn đã làm chủ đảo ngữ, câu chẻ, kỹ thuật hedging và âm vị học biến âm. Hãy tập trung vào việc đọc các văn bản triết học, diễn ngôn chuyên ngành và phản biện học thuật.";
        } else if (score >= 12) {
          level = "B2";
          badge = "Lưu loát";
          recommendation = "Bạn có nền tảng ngữ pháp và từ vựng rất vững. Để vươn tới C1, hãy trau dồi các cấu trúc cú pháp nâng cao (Đảo ngữ, Mệnh đề phân từ) và làm chủ hiện tượng biến âm trong luồng nói tự nhiên.";
        } else if (score >= 8) {
          level = "B1";
          badge = "Tự chủ";
          recommendation = "Bạn đã vượt qua giai đoạn cơ bản và có thể tự chủ giao tiếp. Hãy tập trung giải mã gốc từ Hy Lạp / La-tinh và hiểu sâu sắc khía cạnh Hoàn thành (Perfect Aspect) so với Quá khứ đơn.";
        } else if (score >= 4) {
          level = "A2";
          badge = "Sơ cấp";
          recommendation = "Bạn đang nắm các mẫu câu đơn giản tốt. Hãy tập trung vào Phòng Lab Ngữ âm IPA để chuẩn hóa phát âm đuôi (-ed, -s) và học các cụm liên kết câu.";
        } else {
          level = "A1";
          badge = "Căn bản";
          recommendation = "Hãy bắt đầu từ nền móng âm thanh! Dành 2 tuần đầu tiên làm chủ 44 âm vị IPA trong Phòng Lab và luyện tập trật tự từ cơ bản S-V-O.";
        }

        this.testResultData = {
          score,
          total: questions.length,
          level,
          badge,
          recommendation
        };

        this.testState.isSubmitted = true;
        this.storage.recordTestScore(score, questions.length, { level, badge });
        this.updateHeaderUI();
        this.renderDiagnostic(container);
      });
    }

    const retestBtn = container.querySelector('#btn-retest');
    if (retestBtn) {
      retestBtn.addEventListener('click', () => {
        this.testState.isSubmitted = false;
        this.testState.userAnswers = {};
        this.renderDiagnostic(container);
      });
    }

    const gotoRoadmapBtn = container.querySelector('#btn-goto-roadmap-after-test');
    if (gotoRoadmapBtn) {
      gotoRoadmapBtn.addEventListener('click', () => this.navigateTo('roadmap'));
    }
  }

  /* =========================================================================
   * 8. LEARNER PROFILE & NOTEBOOK (HỒ SƠ, THỐNG KÊ & SỔ TAY)
   * ========================================================================= */
  renderProfile(container) {
    const user = this.storage.currentUser;
    const profile = this.storage.profile;

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in max-w-4xl mx-auto">
        
        <!-- Header -->
        <div class="border-b border-slate-200 pb-4">
          <div class="flex items-center gap-2">
            <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Hồ Sơ Năng Lực & Sổ Tay Học Tập</h2>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold">Progress Tracker</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Theo dõi sự chuyển biến năng lực ngôn ngữ, lịch sử bài thi và thời gian học tập tích lũy.
          </p>
        </div>

        <!-- Student Info Banner -->
        <div class="bg-gradient-to-r from-brand-900 via-indigo-900 to-slate-900 rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg border border-brand-800">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-white/10 text-white font-black text-2xl flex items-center justify-center border border-white/20 shadow-inner">
              ${(user?.name || 'H').charAt(0).toUpperCase()}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl font-bold text-white">${user?.name || 'Học viên'}</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/30 text-brand-200 border border-brand-400/30">
                  Mục tiêu: ${user?.targetLevel || 'B2'}
                </span>
              </div>
              <p class="text-xs text-slate-300 mt-0.5">${user?.email || 'Chưa đăng nhập'}</p>
              <div class="text-[11px] text-slate-400 mt-1">Ngày tham gia: ${user?.joinedDate || 'Gần đây'}</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <button id="btn-profile-switch-acc" class="px-4 py-2 rounded-xl bg-white text-brand-900 font-bold text-xs hover:bg-slate-100 transition-all shadow-sm">
              Đổi / Thêm Học Viên
            </button>
            <button id="btn-profile-backup" class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all">
              Sao Lưu / Xuất File
            </button>
          </div>
        </div>

        <!-- Metrics Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
            <span class="text-xs text-slate-400 font-medium">Trình độ hiện tại</span>
            <div class="text-xl font-bold text-brand-600">${profile.cefrBadge || 'A1'}</div>
            <span class="text-[11px] text-slate-500">${profile.level || 'Chưa kiểm tra'}</span>
          </div>

          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
            <span class="text-xs text-slate-400 font-medium">Chuỗi ngày (Streak)</span>
            <div class="text-xl font-bold text-amber-500 flex items-center gap-1">
              <span>${profile.streak || 1}</span>
              <span class="text-xs font-normal text-slate-400">ngày</span>
            </div>
            <span class="text-[11px] text-slate-500">Chăm chỉ mỗi ngày</span>
          </div>

          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
            <span class="text-xs text-slate-400 font-medium">Thời gian đã học</span>
            <div class="text-xl font-bold text-emerald-600">${profile.totalMinutesStudied || 15}</div>
            <span class="text-[11px] text-slate-500">phút tích lũy</span>
          </div>

          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
            <span class="text-xs text-slate-400 font-medium">Thẻ SM-2 đã ôn</span>
            <div class="text-xl font-bold text-purple-600">${Object.keys(profile.flashcards || {}).length}</div>
            <span class="text-[11px] text-slate-500">từ vựng học thuật</span>
          </div>
        </div>

        <!-- Test History -->
        <div class="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-2xs">
          <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
            <i data-lucide="history" class="w-4 h-4 text-brand-600"></i>
            <span>Lịch sử Bài thi Chẩn đoán Trình độ</span>
          </h4>

          ${(profile.testHistory && profile.testHistory.length > 0) ? `
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-slate-100 text-slate-400">
                    <th class="py-2">Thời gian</th>
                    <th class="py-2">Điểm số</th>
                    <th class="py-2">Tỷ lệ</th>
                    <th class="py-2">Cấp độ CEFR</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium text-slate-700">
                  ${profile.testHistory.map(th => `
                    <tr>
                      <td class="py-2.5 text-slate-400">${th.date}</td>
                      <td class="py-2.5 font-bold">${th.score} / ${th.maxScore}</td>
                      <td class="py-2.5">${th.percentage}%</td>
                      <td class="py-2.5">
                        <span class="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-bold">${th.level}</span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <p class="text-xs text-slate-400 italic">Bạn chưa thực hiện bài kiểm tra chẩn đoán nào. Hãy thực hiện ngay để lưu lại mốc bắt đầu!</p>
          `}
        </div>

        <!-- Reset Button -->
        <div class="pt-4 border-t border-slate-200 flex justify-between items-center">
          <span class="text-xs text-slate-400">Dữ liệu được lưu trữ an toàn trong trình duyệt của bạn (LocalStorage).</span>
          <button id="btn-reset-storage" class="px-4 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-all">
            Xóa dữ liệu & Học lại từ đầu
          </button>
        </div>

      </div>
    `;

    const btnProfileSwitch = container.querySelector('#btn-profile-switch-acc');
    if (btnProfileSwitch) {
      btnProfileSwitch.addEventListener('click', () => this.openAuthModal('login'));
    }

    const btnProfileBackup = container.querySelector('#btn-profile-backup');
    if (btnProfileBackup) {
      btnProfileBackup.addEventListener('click', () => this.openAuthModal('backup'));
    }

    const resetBtn = container.querySelector('#btn-reset-storage');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập?")) {
          this.storage.resetAllProgress();
          this.updateHeaderUI();
          this.navigateTo('roadmap');
          this.showToast("Đã đặt lại toàn bộ dữ liệu học tập!");
        }
      });
    }
  }

  /* =========================================================================
   * AUDIO BAR & SPEECH RECOGNITION HELPERS
   * ========================================================================= */
  playAudio(text, phonetic = '') {
    if (!text) return;
    this.speech.speak(text);

    // Show floating audio bar
    const bar = document.getElementById('audio-bar');
    const textEl = document.getElementById('audio-bar-text');
    const phoEl = document.getElementById('audio-bar-phonetic');
    const waveEl = document.getElementById('audio-bar-wave');

    if (bar && textEl) {
      textEl.textContent = text;
      if (phoEl) phoEl.textContent = phonetic || '';
      bar.classList.remove('translate-y-32', 'opacity-0');

      if (waveEl) waveEl.classList.remove('hidden');
      setTimeout(() => {
        if (waveEl) waveEl.classList.add('hidden');
      }, 1500);
    }

    this.currentAudioBarItem = { text, phonetic };
  }

  hideAudioBar() {
    const bar = document.getElementById('audio-bar');
    if (bar) bar.classList.add('translate-y-32', 'opacity-0');
  }

  openAuthModal(defaultTab = 'login') {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.switchAuthTab(defaultTab);
      this.renderAuthAccountList();
    }
  }

  closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  switchAuthTab(tab) {
    const panelLogin = document.getElementById('auth-panel-login');
    const panelRegister = document.getElementById('auth-panel-register');
    const panelBackup = document.getElementById('auth-panel-backup');

    const tabSwitch = document.getElementById('tab-auth-switch');
    const tabRegister = document.getElementById('tab-auth-register');
    const tabBackup = document.getElementById('tab-auth-backup');

    if (panelLogin) panelLogin.classList.toggle('hidden', tab !== 'login');
    if (panelRegister) panelRegister.classList.toggle('hidden', tab !== 'register');
    if (panelBackup) panelBackup.classList.toggle('hidden', tab !== 'backup');

    const activeCls = 'flex-1 py-2 rounded-lg transition-all bg-white text-brand-700 shadow-xs';
    const inactiveCls = 'flex-1 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900';

    if (tabSwitch) tabSwitch.className = tab === 'login' ? activeCls : inactiveCls;
    if (tabRegister) tabRegister.className = tab === 'register' ? activeCls : inactiveCls;
    if (tabBackup) tabBackup.className = tab === 'backup' ? activeCls : inactiveCls;

    if (tab === 'login') {
      this.renderAuthAccountList();
    }
  }

  renderAuthAccountList() {
    const listEl = document.getElementById('auth-account-list');
    if (!listEl) return;

    const accounts = this.storage.getAccountList();
    const currentEmail = this.storage.currentUser?.email;

    if (accounts.length === 0) {
      listEl.innerHTML = `
        <div class="text-xs text-slate-400 italic p-3 text-center bg-slate-50 rounded-xl">
          Chưa có học sinh nào lưu trên máy. Hãy chuyển sang tab "Tạo Học Viên Mới" để bắt đầu!
        </div>
      `;
      return;
    }

    listEl.innerHTML = accounts.map(acc => {
      const isCurrent = acc.email === currentEmail;
      const initial = (acc.name || 'H').charAt(0).toUpperCase();

      return `
        <div class="flex items-center justify-between p-2.5 rounded-xl border ${isCurrent ? 'border-brand-500 bg-brand-50/60' : 'border-slate-200 bg-slate-50 hover:bg-slate-100/70'} transition-all text-xs">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-lg ${isCurrent ? 'bg-brand-600' : 'bg-slate-400'} text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
              ${initial}
            </div>
            <div class="min-w-0">
              <div class="font-bold text-slate-800 flex items-center gap-1.5 truncate">
                <span>${acc.name}</span>
                ${isCurrent ? '<span class="text-[9px] px-1.5 py-0.2 rounded bg-brand-600 text-white font-semibold">Đang học</span>' : ''}
              </div>
              <div class="text-[10px] text-slate-400 truncate">${acc.email}</div>
            </div>
          </div>

          <div class="flex items-center gap-2 flex-shrink-0">
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
              ${acc.cefrBadge} • 🔥${acc.streak}d
            </span>
            ${!isCurrent ? `
              <button class="btn-quick-switch px-2.5 py-1 rounded-lg bg-white hover:bg-brand-50 text-brand-700 border border-slate-200 text-xs font-semibold shadow-2xs transition-colors" data-email="${acc.email}">
                Chọn học
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Bind quick switch buttons
    listEl.querySelectorAll('.btn-quick-switch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const email = e.currentTarget.getAttribute('data-email');
        this.storage.switchUser(email);
        this.closeAuthModal();
        this.updateHeaderUI();
        this.navigateTo(this.currentView);
        this.showToast(`Đã chuyển sang học viên ${this.storage.currentUser.name}!`);
      });
    });
  }

  openGuideModal() {
    const modal = document.getElementById('guide-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeGuideModal() {
    const modal = document.getElementById('guide-modal');
    const chk = document.getElementById('chk-dont-show-guide-again');
    if (chk && chk.checked) {
      localStorage.setItem('seen_onboarding_guide', 'true');
    }
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  openSpeechModal({ text, ipa }) {
    this.currentSpeechTarget = { text, ipa };
    const modal = document.getElementById('speech-modal');
    const targetText = document.getElementById('speech-target-text');
    const targetIpa = document.getElementById('speech-target-ipa');
    const liveTranscript = document.getElementById('speech-live-transcript');
    const resultContainer = document.getElementById('speech-result-container');

    if (modal && targetText) {
      targetText.textContent = `"${text}"`;
      if (targetIpa) targetIpa.textContent = ipa || '';
      if (liveTranscript) liveTranscript.textContent = "Nhấn nút Microphone bên dưới và đọc to rõ ràng...";
      if (resultContainer) resultContainer.classList.add('hidden');
      modal.classList.remove('hidden');
    }
  }

  closeSpeechModal() {
    const modal = document.getElementById('speech-modal');
    if (modal) modal.classList.add('hidden');
    this.speech.stopListening();
    this.isRecording = false;
    this.updateRecordButtonUI(false);
  }

  toggleSpeechRecording() {
    if (!this.currentSpeechTarget) return;

    if (this.isRecording) {
      this.speech.stopListening();
      this.isRecording = false;
      this.updateRecordButtonUI(false);
    } else {
      this.isRecording = true;
      this.updateRecordButtonUI(true);

      const liveTranscript = document.getElementById('speech-live-transcript');
      const resultContainer = document.getElementById('speech-result-container');
      if (resultContainer) resultContainer.classList.add('hidden');

      this.speech.startListening(this.currentSpeechTarget.text, {
        onStart: () => {
          if (liveTranscript) liveTranscript.textContent = "Đang lắng nghe giọng của bạn...";
        },
        onInterim: (text) => {
          if (liveTranscript) liveTranscript.textContent = text;
        },
        onFinal: (res) => {
          this.isRecording = false;
          this.updateRecordButtonUI(false);
          this.displaySpeechResults(res);
        },
        onError: (err) => {
          this.isRecording = false;
          this.updateRecordButtonUI(false);
          if (liveTranscript) liveTranscript.textContent = `⚠️ ${err}`;
        }
      });
    }
  }

  updateRecordButtonUI(recording) {
    const btn = document.getElementById('btn-toggle-record');
    const text = document.getElementById('btn-toggle-record-text');
    if (!btn || !text) return;

    if (recording) {
      btn.className = "px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-rose-500/30 transition-all animate-pulse";
      text.textContent = "Đang thu... Nhấn để Dừng";
    } else {
      btn.className = "px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-brand-500/30 transition-all";
      text.textContent = "Bắt đầu Thu âm";
    }
  }

  displaySpeechResults(result) {
    const container = document.getElementById('speech-result-container');
    const badge = document.getElementById('speech-accuracy-badge');
    const rating = document.getElementById('speech-rating-text');
    const breakdown = document.getElementById('speech-word-breakdown');

    if (!container) return;

    container.classList.remove('hidden');
    if (badge) {
      badge.textContent = `${result.accuracy}%`;
      badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold ${result.badgeClass}`;
    }
    if (rating) rating.textContent = result.rating;

    if (breakdown && result.wordFeedback) {
      breakdown.innerHTML = result.wordFeedback.map(w => `
        <span class="px-2 py-0.5 rounded text-xs font-mono font-medium ${w.matched ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200'}">
          ${w.word} ${w.matched ? '✓' : '✗'}
        </span>
      `).join('');
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = "fixed top-20 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-fade-in";
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
