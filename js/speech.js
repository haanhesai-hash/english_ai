/**
 * Speech Engine: Web Speech Synthesis (TTS) & Web Speech Recognition (STT)
 * Tích hợp công nghệ nhận diện và tổng hợp giọng nói bản ngữ trực tiếp trên trình duyệt.
 */

export class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.rate = 1.0;
    this.pitch = 1.0;
    this.preferredAccent = 'en-US'; // 'en-US' or 'en-GB'

    // Initialize voices
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }

    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.isRecognitionSupported = !!SpeechRecognition;
    this.recognition = null;
    if (this.isRecognitionSupported) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    this.updateSelectedVoice();
  }

  setAccent(accentCode) {
    this.preferredAccent = accentCode;
    if (this.recognition) {
      this.recognition.lang = accentCode;
    }
    this.updateSelectedVoice();
  }

  setRate(newRate) {
    this.rate = Math.max(0.5, Math.min(2.0, parseFloat(newRate) || 1.0));
  }

  updateSelectedVoice() {
    if (!this.voices || this.voices.length === 0) return;

    // Try finding a natural or high quality voice for the preferred accent
    const targetVoices = this.voices.filter(v => v.lang.startsWith(this.preferredAccent) || v.lang.replace('_', '-').startsWith(this.preferredAccent));
    
    // Prefer Google, Natural or Apple voices if present
    const bestVoice = targetVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Jenny') || v.name.includes('Guy')) || targetVoices[0] || this.voices.find(v => v.lang.startsWith('en'));

    this.selectedVoice = bestVoice || this.voices[0];
  }

  /**
   * Phát âm một từ hoặc một câu tiếng Anh
   * @param {string} text - Văn bản cần đọc
   * @param {object} options - { rate, pitch, onStart, onEnd }
   */
  speak(text, options = {}) {
    if (!this.synth) {
      console.warn("Trình duyệt không hỗ trợ Web Speech Synthesis API.");
      return;
    }

    // Cancel any ongoing speech
    this.synth.cancel();

    if (!text || text.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.lang = this.preferredAccent;
    utterance.rate = options.rate !== undefined ? options.rate : this.rate;
    utterance.pitch = options.pitch !== undefined ? options.pitch : this.pitch;

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onError) utterance.onerror = options.onError;

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
    }
  }

  /**
   * Bắt đầu thu âm giọng người học và so sánh với câu mẫu
   * @param {string} targetSentence - Câu chuẩn cần đọc
   * @param {object} callbacks - { onInterim, onFinal, onError, onStart }
   */
  startListening(targetSentence, callbacks = {}) {
    if (!this.isRecognitionSupported) {
      if (callbacks.onError) {
        callbacks.onError("Trình duyệt của bạn chưa hỗ trợ Web Speech Recognition. Khuyên dùng Google Chrome hoặc Microsoft Edge.");
      }
      return;
    }

    try {
      this.recognition.abort();
    } catch (e) {}

    this.recognition.onstart = () => {
      if (callbacks.onStart) callbacks.onStart();
    };

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item.isFinal) {
          finalTranscript += item[0].transcript;
        } else {
          interimTranscript += item[0].transcript;
        }
      }

      if (callbacks.onInterim && interimTranscript) {
        callbacks.onInterim(interimTranscript);
      }

      if (finalTranscript) {
        const analysis = this.compareTranscripts(targetSentence, finalTranscript);
        if (callbacks.onFinal) {
          callbacks.onFinal({
            transcript: finalTranscript,
            ...analysis
          });
        }
      }
    };

    this.recognition.onerror = (event) => {
      let errMsg = "Đã xảy ra lỗi khi thu âm giọng nói.";
      if (event.error === 'not-allowed') {
        errMsg = "Vui lòng cấp quyền truy cập Microphone cho trình duyệt để luyện nói.";
      } else if (event.error === 'no-speech') {
        errMsg = "Chưa nhận được âm thanh. Hãy thử nói to và rõ hơn!";
      }
      if (callbacks.onError) callbacks.onError(errMsg);
    };

    this.recognition.start();
  }

  stopListening() {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
  }

  /**
   * So sánh văn bản người học nói và câu mục tiêu
   */
  compareTranscripts(target, spoken) {
    const clean = str => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/);
    const targetWords = clean(target);
    const spokenWords = clean(spoken);

    let matches = 0;
    const wordFeedback = targetWords.map(tWord => {
      const isMatched = spokenWords.includes(tWord);
      if (isMatched) matches++;
      return {
        word: tWord,
        matched: isMatched
      };
    });

    const accuracy = targetWords.length > 0 
      ? Math.round((matches / targetWords.length) * 100) 
      : 0;

    let rating = "Cần cố gắng thêm";
    let badgeClass = "text-amber-500 bg-amber-50";
    if (accuracy >= 85) {
      rating = "Xuất sắc! Chuẩn ngữ âm bản ngữ";
      badgeClass = "text-emerald-600 bg-emerald-50";
    } else if (accuracy >= 65) {
      rating = "Khá tốt! Đã rõ ràng và dễ hiểu";
      badgeClass = "text-blue-600 bg-blue-50";
    }

    return {
      accuracy,
      rating,
      badgeClass,
      wordFeedback
    };
  }
}
