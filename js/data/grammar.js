/**
 * Kho dữ liệu Cú pháp học & Ngữ pháp Nhận thức (Cognitive Syntax & Grammar)
 * Ma trận 12 thì, Trục thời gian trực quan, 5 mẫu câu chuẩn, Đảo ngữ & Cú pháp học thuật.
 */

export const GRAMMAR_DATA = {
  cognitiveOverview: {
    title: "Tư duy Cú pháp học Nhận thức (Cognitive Linguistics Approach)",
    philosophy: "Trong lăng kính ngôn ngữ học hiện đại, hệ thống thì tiếng Anh KHÔNG PHẢI là 12 công thức học vẹt rời rạc. Bản chất của nó là sự giao thoa giữa 2 trục nhận thức: Trục Thời Gian (Time: Past, Present, Future) và Trục Khía Cạnh/Thể (Aspect: Simple, Continuous, Perfect, Perfect Continuous).",
    axes: {
      time: "Điểm mốc diễn ra sự việc trên trục thời gian khách quan (Quá khứ - Hiện tại - Tương lai).",
      aspect: "Góc nhìn chủ quan của người nói về cấu trúc bên trong của hành động (Bao quát trọn gói? Đang diễn ra dở dang? Hay kéo dài để lại hệ quả?)"
    }
  },
  tensesMatrix: [
    {
      id: "present_simple",
      name: "Hiện tại đơn (Present Simple)",
      time: "Present",
      aspect: "Simple",
      formula: "S + V(s/es) / S + don't/doesn't + V_inf",
      linguisticEssence: "Góc nhìn bao quát một chân lý, định luật tự nhiên hoặc thói quen mang tính vĩnh cửu. Người nói không quan tâm đến tiến trình thời điểm này đang làm gì, mà khẳng định tính chất tồn tại của sự việc.",
      timeline: "Quá khứ <--- [x] --- [x] --- [x] (Thói quen lặp lại vô tận) ---> Tương lai",
      examples: [
        { en: "Water boils at 100 degrees Celsius.", vi: "Nước sôi ở 100 độ C (Chân lý vĩnh cửu)." },
        { en: "Linguists analyze structural properties of human speech.", vi: "Các nhà ngôn ngữ học nghiên cứu đặc tính cấu trúc của tiếng nói." }
      ],
      signalWords: ["always", "usually", "often", "every day", "routinely"],
      vnLearnerTrap: "Người học tiếng Việt thường quên chia đuôi -s/-es cho ngôi thứ 3 số ít vì tiếng Việt là ngôn ngữ phi hình thái (không biến hình từ)."
    },
    {
      id: "present_continuous",
      name: "Hiện tại tiếp diễn (Present Continuous)",
      time: "Present",
      aspect: "Continuous",
      formula: "S + am/is/are + V-ing",
      linguisticEssence: "Góc nhìn 'từ bên trong' tiến trình. Sự việc đang dang dở, chưa hoàn tất tại thời điểm quy chiếu và mang tính chất tạm thời (Temporary state).",
      timeline: "Quá khứ -------- [ ==== (BÂY GIỜ ĐANG DIỄN RA) ==== ] --------> Tương lai",
      examples: [
        { en: "The climate is rapidly warming.", vi: "Khí hậu đang ấm lên nhanh chóng (Tiến trình đang biến đổi)." },
        { en: "I am currently living in London for my master's thesis.", vi: "Tôi hiện đang sống ở London để làm luận văn thạc sĩ (Tính chất tạm thời)." }
      ],
      signalWords: ["now", "at the moment", "currently", "these days"],
      vnLearnerTrap: "Lạm dụng chia V-ing với các động từ trạng thái nhận thức (Stative verbs) như *I am knowing*, *I am believing* (Sai - phải dùng Simple)."
    },
    {
      id: "present_perfect",
      name: "Hiện tại hoàn thành (Present Perfect)",
      time: "Present (Current Relevance)",
      aspect: "Perfect",
      formula: "S + have/has + V3/ed",
      linguisticEssence: "CẦU NỐI giữa Quá khứ và Hiện tại. Hành động đã diễn ra trong quá khứ, nhưng người nói quan tâm tới KẾT QUẢ, TRẢI NGHIỆM hoặc HỆ QUẢ còn đang hiện hữu ở thời điểm nói.",
      timeline: "Quá khứ [x Xảy ra trong quá khứ] ========> [HỆ QUẢ TÁC ĐỘNG TỚI BÂY GIỜ]",
      examples: [
        { en: "I have lost my passport.", vi: "Tôi bị mất hộ chiếu rồi (Và hệ quả bây giờ là tôi không có hộ chiếu để đi)." },
        { en: "Scientists have mapped the complete human genome.", vi: "Các nhà khoa học đã giải mã hoàn chỉnh bộ gen người (Hiện tại nhân loại đã có bản đồ này)." }
      ],
      signalWords: ["already", "yet", "just", "ever", "never", "since", "for"],
      vnLearnerTrap: "Dùng Present Perfect với mốc thời gian đã chấm dứt hoàn toàn trong quá khứ: *I have seen him yesterday* (Sai - phải dùng Past Simple)."
    },
    {
      id: "present_perfect_continuous",
      name: "Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)",
      time: "Present",
      aspect: "Perfect Continuous",
      formula: "S + have/has been + V-ing",
      linguisticEssence: "Nhấn mạnh vào SỰ TẬP TRUNG NĂNG LƯỢNG và ĐỘ DÀI LIÊN TỤC của tiến trình bắt đầu từ quá khứ và vẫn đang tiếp diễn hoặc vừa mới dừng lại để lại dấu vết rõ rệt.",
      timeline: "Quá khứ [ === TIẾN TRÌNH KÉO DÀI LIÊN TỤC KHÔNG NGỪNG ===> ] Hiện tại",
      examples: [
        { en: "It has been raining for five hours.", vi: "Trời đã mưa ròng rã suốt 5 tiếng đồng hồ (Nhấn mạnh thời gian dồn dập)." },
        { en: "My eyes are tired because I have been reading old manuscripts all day.", vi: "Mắt tôi mỏi vì cả ngày nay tôi cặm cụi đọc các bản thảo cổ." }
      ],
      signalWords: ["for hours", "since morning", "all day", "how long"],
      vnLearnerTrap: "Quên chữ 'been' hoặc nhầm lẫn với Present Perfect khi muốn nhấn mạnh thời lượng hành động."
    },
    {
      id: "past_simple",
      name: "Quá khứ đơn (Past Simple)",
      time: "Past",
      aspect: "Simple",
      formula: "S + V2/ed / S + didn't + V_inf",
      linguisticEssence: "Khẳng định một sự kiện đã CHẤM DỨT HOÀN TOÀN trong một ngăn thời gian quá khứ đã đóng lại (Closed past time container). Không còn kết nối trực tiếp với hiện tại.",
      timeline: "Quá khứ [=== Sự việc đã xong xuôi trọn gói ===] | NGĂN CÁCH | ---> Hiện tại",
      examples: [
        { en: "Shakespeare wrote 37 plays.", vi: "Shakespeare đã viết 37 vở kịch (Tác giả đã mất, số lượng đóng lại)." },
        { en: "In 1969, Apollo 11 landed on the Moon.", vi: "Năm 1969, tàu Apollo 11 đã hạ cánh xuống Mặt Trăng." }
      ],
      signalWords: ["yesterday", "last year", "in 1990", "ago", "when I was young"],
      vnLearnerTrap: "Không phát âm hoặc bỏ quên đuôi -ed khi nói, làm biến câu quá khứ thành hiện tại trong thính giác người bản ngữ."
    },
    {
      id: "past_continuous",
      name: "Quá khứ tiếp diễn (Past Continuous)",
      time: "Past",
      aspect: "Continuous",
      formula: "S + was/were + V-ing",
      linguisticEssence: "Dựng bối cảnh (Background scene). Hành động đang dang dở diễn ra tại một thời điểm xác định trong quá khứ khi một hành động khác xen vào.",
      timeline: "Quá khứ [==== Đang diễn ra thì bị xen ngang (Past Simple) ====] ---> Hiện tại",
      examples: [
        { en: "I was reading a linguistic journal when the phone suddenly rang.", vi: "Tôi đang đọc tạp chí ngôn ngữ học thì điện thoại bất ngờ reo." },
        { en: "At 8 PM yesterday, they were having dinner.", vi: "Vào đúng 8 giờ tối hôm qua, họ đang dùng bữa tối." }
      ],
      signalWords: ["at that moment", "at 8 PM yesterday", "while", "as"],
      vnLearnerTrap: "Dùng lẫn lộn giữa *While* (thường đi với Continuous) và *When* (thường đi với Simple ngắt quãng)."
    },
    {
      id: "past_perfect",
      name: "Quá khứ hoàn thành (Past Perfect)",
      time: "Past-of-the-Past",
      aspect: "Perfect",
      formula: "S + had + V3/ed",
      linguisticEssence: "QUÁ KHỨ CỦA QUÁ KHỨ. Định vị một hành động xảy ra và hoàn tất TRƯỚC một mốc thời gian hoặc một hành động khác trong quá khứ.",
      timeline: "Quá khứ [Hành động A (Had Done)] -----> [Hành động B (Past Simple)] -----> Hiện tại",
      examples: [
        { en: "By the time the ambulance arrived, the patient had already stabilized.", vi: "Vào lúc xe cứu thương tới, bệnh nhân đã ổn định trở lại rồi." },
        { en: "She had never witnessed such a rare dialect before moving to Scotland.", vi: "Cô ấy chưa từng chứng kiến một phương ngữ hiếm như vậy trước khi chuyển tới Scotland." }
      ],
      signalWords: ["by the time", "before", "after", "already", "had hardly... when"],
      vnLearnerTrap: "Lạm dụng chia Had + V3 cho mọi sự việc trong quá khứ mà không có sự so sánh trước-sau với một mốc quá khứ khác."
    },
    {
      id: "future_modalities",
      name: "Các phương thức biểu đạt Tương lai (Future Expressions)",
      time: "Future",
      aspect: "Modal Perspectives",
      formula: "Will + V / Be going to + V / Present Continuous / Present Simple",
      linguisticEssence: "Tiếng Anh không có thì tương lai hình thái (Inflectional future). Tương lai là nhận định chủ quan: 'Will' (Quyết định tức thời hoặc phỏng đoán), 'Be going to' (Kế hoạch có dự tính hoặc bằng chứng khách quan hiện có), 'Present Continuous' (Lịch trình đã sắp xếp chắc chắn với người khác).",
      timeline: "Hiện tại --------------------------> Tương lai [Dự định / Dự đoán / Lịch trình]",
      examples: [
        { en: "Look at those dark clouds! It is going to rain.", vi: "Nhìn những đám mây đen kìa! Trời sắp mưa đấy (Có dấu hiệu thực tế hiện tại)." },
        { en: "I promise I will send you the research data tonight.", vi: "Tôi hứa tôi sẽ gửi cho bạn dữ liệu nghiên cứu tối nay (Lời hứa tức thì)." }
      ],
      signalWords: ["tomorrow", "next week", "in the future", "soon"],
      vnLearnerTrap: "Luôn dịch từ 'sẽ' thành 'will' trong mọi trường hợp, kể cả khi nói về lịch tàu xe hay kế hoạch cá nhân đã hẹn."
    }
  ],
  sentencePatterns: [
    {
      pattern: "Pattern 1: S + V (Nội động từ - Intransitive)",
      explanation: "Động từ tự thân diễn đạt trọn vẹn ý nghĩa, không đòi hỏi một tân ngữ tiếp nhận tác động.",
      example: "The baby wept.",
      breakdown: "[S: The baby] + [V: wept]"
    },
    {
      pattern: "Pattern 2: S + V + O (Ngoại động từ đơn - Monotransitive)",
      explanation: "Động từ truyền năng lượng trực tiếp lên một tân ngữ (Direct Object).",
      example: "Linguists preserve endangered languages.",
      breakdown: "[S: Linguists] + [V: preserve] + [DO: endangered languages]"
    },
    {
      pattern: "Pattern 3: S + V + C (Hệ từ nối & Bổ ngữ - Linking/Copular)",
      explanation: "Động từ đóng vai trò cầu nối, bổ ngữ (Complement) giải thích phẩm chất hoặc định danh cho chủ ngữ.",
      example: "The explanation seems plausible.",
      breakdown: "[S: The explanation] + [LV: seems] + [Subject Complement: plausible]"
    },
    {
      pattern: "Pattern 4: S + V + IO + DO (Ngoại động từ kép - Ditransitive)",
      explanation: "Động từ hành vi trao tặng chuyển giao cho một người nhận (Indirect Object) một vật phẩm (Direct Object).",
      example: "The professor granted the student an extension.",
      breakdown: "[S: The professor] + [V: granted] + [IO: the student] + [DO: an extension]"
    },
    {
      pattern: "Pattern 5: S + V + O + OC (Bổ ngữ tân ngữ - Complex Transitive)",
      explanation: "Tân ngữ cần một bổ ngữ đi kèm để hoàn tất trạng thái hoặc danh hiệu mới.",
      example: "The committee appointed him chairperson.",
      breakdown: "[S: The committee] + [V: appointed] + [DO: him] + [Object Complement: chairperson]"
    }
  ],
  advancedSyntax: [
    {
      title: "Đảo ngữ cú pháp (Syntactic Inversion)",
      purpose: "Nhấn mạnh tính kịch tính, sự hiếm có hoặc chuyển tiêu điểm thông tin lên đầu câu theo nguyên tắc diễn ngôn (Discourse Fronting).",
      rules: [
        {
          trigger: "Phó từ phủ định đứng đầu câu (Negative Adverbials: Never, Seldom, Rarely, Hardly)",
          structure: "Trạng từ phủ định + Trợ động từ + Chủ ngữ + Động từ chính",
          example: "Never have I witnessed such profound linguistic creativity.",
          standard: "I have never witnessed such profound linguistic creativity."
        },
        {
          trigger: "Cấu trúc 'Only after / Only when'",
          structure: "Only after/when + Mệnh đề 1 + Trợ động từ + Chủ ngữ + Động từ chính",
          example: "Only when you master phonetics can you perceive subtle differences in spoken English.",
          standard: "You can perceive subtle differences in spoken English only when you master phonetics."
        }
      ]
    },
    {
      title: "Câu chẻ tiêu điểm (Cleft Sentences)",
      purpose: "Tách một câu thành hai mệnh đề để làm nổi bật tuyệt đối một đối tượng (Subject focus, Time focus, Action focus).",
      rules: [
        {
          type: "It-cleft (Câu chẻ với 'It')",
          formula: "It is/was + Đối tượng được nhấn mạnh + that/who + Thành phần còn lại",
          example: "It was Noam Chomsky who transformed the field of generative linguistics in 1957.",
          note: "Nhấn mạnh chính xác Noam Chomsky chứ không phải ai khác."
        },
        {
          type: "Wh-cleft / Pseudo-cleft (Câu chẻ với 'What')",
          formula: "What + S + V + is/was + Điều muốn nhấn mạnh",
          example: "What language learners need most is comprehensive and engaging input.",
          note: "Tập trung sự chú ý của người nghe vào điều quan trọng nhất."
        }
      ]
    }
  ]
};
