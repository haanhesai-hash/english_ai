/**
 * Kho dữ liệu Cú pháp học & Ngữ pháp Nhận thức (Cognitive Syntax & Grammar)
 * Ma trận 12 thì, Trục thời gian trực quan, 5 mẫu câu chuẩn, Đảo ngữ & Cú pháp học thuật.
 * Chú thích 100% bằng tiếng Việt dành riêng cho người Việt Nam tự học tiếng Anh.
 */

export const GRAMMAR_DATA = {
  cognitiveOverview: {
    title: "Tư duy Cú pháp học Nhận thức (Cognitive Linguistics Approach)",
    philosophy: "Dưới lăng kính ngôn ngữ học hiện đại, hệ thống thì tiếng Anh KHÔNG PHẢI là 12 công thức học vẹt rời rạc. Bản chất thực sự của nó là sự giao thoa giữa 2 trục nhận thức trong bộ não: Trục Thời Gian khách quan (Time: Quá khứ, Hiện tại, Tương lai) và Trục Thể/Khía Cạnh chủ quan (Aspect: Đơn, Tiếp diễn, Hoàn thành, Hoàn thành tiếp diễn).",
    axes: {
      time: "Điểm mốc xảy ra sự việc trên dòng chảy thời gian khách quan (Quá khứ ➔ Hiện tại ➔ Tương lai).",
      aspect: "Góc nhìn chủ quan của người nói về cấu trúc bên trong của hành động (Bao quát trọn gói? Đang diễn ra dở dang? Hay kéo dài để lại dấu vết/hệ quả hiện hữu?)"
    }
  },
  tensesMatrix: [
    {
      id: "present_simple",
      name: "Thì Hiện tại đơn (Present Simple)",
      time: "Hiện tại",
      aspect: "Thể Đơn (Chân lý vĩnh cửu / Thói quen)",
      formula: "Khẳng định: S + V(s/es) | Phủ định: S + don't/doesn't + V_nguyên_thể",
      linguisticEssence: "Góc nhìn bao quát một chân lý khoa học, định luật tự nhiên hoặc thói quen mang tính quy luật. Người nói không quan tâm lúc này sự việc đang làm gì, mà khẳng định tính chất tồn tại vĩnh cửu của nó.",
      timeline: "Quá khứ <--- [x] --- [x] --- [x] (Thói quen lặp đi lặp lại vô tận) ---> Tương lai",
      examples: [
        { en: "Water boils at 100 degrees Celsius.", vi: "Nước sôi ở 100 độ C (Chân lý khoa học vĩnh cửu)." },
        { en: "Linguists analyze structural properties of human speech.", vi: "Các nhà ngôn ngữ học nghiên cứu đặc tính cấu trúc của tiếng nói con người." }
      ],
      signalWords: ["always (luôn luôn)", "usually (thường lệ)", "often (thường xuyên)", "every day (mỗi ngày)", "routinely (định kỳ)"],
      vnLearnerTrap: "Người học tiếng Việt thường xuyên quên chia đuôi -s/-es cho ngôi thứ 3 số ít vì tiếng Việt là ngôn ngữ đơn lập phi hình thái (từ không bao giờ bị biến đổi hình thức)."
    },
    {
      id: "present_continuous",
      name: "Thì Hiện tại tiếp diễn (Present Continuous)",
      time: "Hiện tại",
      aspect: "Thể Tiếp diễn (Tiến trình đang dang dở / Tạm thời)",
      formula: "Khẳng định: S + am/is/are + V-ing | Phủ định: S + am/is/are not + V-ing",
      linguisticEssence: "Góc nhìn 'từ bên trong' tiến trình. Hành động đang xảy ra dở dang tại thời điểm quy chiếu, chưa hoàn tất và chỉ mang tính chất tạm thời, không phải là chân lý vĩnh cửu.",
      timeline: "Quá khứ -------- [ ==== (BÂY GIỜ ĐANG DIỄN RA DỞ DANG) ==== ] --------> Tương lai",
      examples: [
        { en: "The climate is rapidly warming.", vi: "Khí hậu toàn cầu đang ấm lên nhanh chóng (Tiến trình đang biến đổi dở dang)." },
        { en: "I am currently living in London for my master's thesis.", vi: "Tôi hiện đang sống ở London để làm luận văn thạc sĩ (Tính chất tạm thời, không vĩnh viễn)." }
      ],
      signalWords: ["now (bây giờ)", "at the moment (ngay lúc này)", "currently (hiện thời)", "these days (dạo này)"],
      vnLearnerTrap: "Lạm dụng chia V-ing với các động từ trạng thái nhận thức (Stative verbs) như *I am knowing*, *I am believing* (Sai bản chất ngôn ngữ - buộc phải dùng thì Hiện tại đơn: *I know*, *I believe*)."
    },
    {
      id: "present_perfect",
      name: "Thì Hiện tại hoàn thành (Present Perfect)",
      time: "Hiện tại (Có hệ quả hiện hữu)",
      aspect: "Thể Hoàn thành (Cầu nối giữa Quá khứ và Hiện tại)",
      formula: "Khẳng định: S + have/has + V3/ed | Phủ định: S + have/has not + V3/ed",
      linguisticEssence: "CHIẾC CẦU NỐI giữa Quá khứ và Hiện tại. Hành động đã diễn ra trong quá khứ, nhưng người nói đặc biệt quan tâm tới KẾT QUẢ, TRẢI NGHIỆM hoặc HỆ QUẢ còn đang tác động trực tiếp tới hiện tại.",
      timeline: "Quá khứ [x Xảy ra trong quá khứ] ========> [HỆ QUẢ TÁC ĐỘNG TRỰC TIẾP TỚI BÂY GIỜ]",
      examples: [
        { en: "I have lost my passport.", vi: "Tôi bị mất hộ chiếu rồi (Và hệ quả bây giờ là tôi không có hộ chiếu để lên máy bay)." },
        { en: "Scientists have mapped the complete human genome.", vi: "Các nhà khoa học đã giải mã hoàn chỉnh bộ gen người (Hiện tại nhân loại đã sở hữu bản đồ này)." }
      ],
      signalWords: ["already (đã... rồi)", "yet (chưa)", "just (vừa mới)", "ever (từng)", "never (chưa từng)", "since (từ mốc)", "for (trong khoảng)"],
      vnLearnerTrap: "Dùng thì Hiện tại hoàn thành với các mốc thời gian đã chấm dứt hoàn toàn trong quá khứ: *I have seen him yesterday* (Sai ngữ pháp - buộc phải dùng Quá khứ đơn: *I saw him yesterday*)."
    },
    {
      id: "present_perfect_continuous",
      name: "Thì Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)",
      time: "Hiện tại",
      aspect: "Thể Hoàn thành tiếp diễn (Nhấn mạnh độ dài và năng lượng liên tục)",
      formula: "Khẳng định: S + have/has been + V-ing | Phủ định: S + have/has not been + V-ing",
      linguisticEssence: "Nhấn mạnh vào SỰ TẬP TRUNG NĂNG LƯỢNG và ĐỘ DÀI LIÊN TỤC của tiến trình bắt đầu từ quá khứ, kéo dài không ngừng nghỉ và vẫn đang tiếp tục hoặc vừa dừng lại để lại dấu vết rõ rệt.",
      timeline: "Quá khứ [ === TIẾN TRÌNH KÉO DÀI LIÊN TỤC KHÔNG DỨT ===> ] Hiện tại",
      examples: [
        { en: "It has been raining for five hours.", vi: "Trời đã mưa ròng rã suốt 5 tiếng đồng hồ (Nhấn mạnh sự liên tục không ngớt của cơn mưa)." },
        { en: "My eyes are tired because I have been reading old manuscripts all day.", vi: "Mắt tôi mỏi nhừ vì cả ngày nay tôi cặm cụi đọc các bản thảo cổ." }
      ],
      signalWords: ["for hours (suốt nhiều giờ)", "since morning (từ sáng sớm)", "all day (cả ngày ròng)", "how long (bao lâu rồi)"],
      vnLearnerTrap: "Quên chữ 'been' hoặc nhầm lẫn với thì Hiện tại hoàn thành khi muốn nhấn mạnh thời lượng hành động diễn ra."
    },
    {
      id: "past_simple",
      name: "Thì Quá khứ đơn (Past Simple)",
      time: "Quá khứ đã đóng kín",
      aspect: "Thể Đơn (Trọn gói một sự kiện đã chấm dứt)",
      formula: "Khẳng định: S + V2/ed | Phủ định: S + didn't + V_nguyên_thể",
      linguisticEssence: "Khẳng định một sự kiện đã CHẤM DỨT HOÀN TOÀN trong một ngăn thời gian quá khứ đã khép lại (Closed past container). Không còn kết nối trực tiếp với thực tại bây giờ.",
      timeline: "Quá khứ [=== Sự việc đã xong xuôi trọn gói ===] | NGĂN CÁCH | ---> Hiện tại",
      examples: [
        { en: "Shakespeare wrote 37 plays.", vi: "Shakespeare đã viết 37 vở kịch (Tác giả đã qua đời, số lượng vở kịch đã đóng lại vĩnh viễn)." },
        { en: "In 1969, Apollo 11 landed on the Moon.", vi: "Năm 1969, tàu Apollo 11 đã hạ cánh xuống Mặt Trăng." }
      ],
      signalWords: ["yesterday (hôm qua)", "last year (năm ngoái)", "in 1990 (vào năm 1990)", "ago (cách đây)", "when I was young (khi tôi còn nhỏ)"],
      vnLearnerTrap: "Không phát âm hoặc bỏ quên âm đuôi -ed khi nói, làm biến câu quá khứ thành hiện tại trong thính giác người bản xứ."
    },
    {
      id: "past_continuous",
      name: "Thì Quá khứ tiếp diễn (Past Continuous)",
      time: "Quá khứ",
      aspect: "Thể Tiếp diễn (Dựng bối cảnh đang xảy ra thì bị ngắt)",
      formula: "Khẳng định: S + was/were + V-ing | Phủ định: S + was/were not + V-ing",
      linguisticEssence: "Dựng bối cảnh nền (Background scene). Hành động đang diễn ra dang dở tại một thời điểm xác định trong quá khứ thì có một hành động khác xen vào cắt ngang.",
      timeline: "Quá khứ [==== Đang diễn ra thì bị xen ngang (Past Simple) ====] ---> Hiện tại",
      examples: [
        { en: "I was reading a linguistic journal when the phone suddenly rang.", vi: "Tôi đang đọc tạp chí ngôn ngữ học thì chuông điện thoại bất ngờ reo lên." },
        { en: "At 8 PM yesterday, they were having dinner.", vi: "Vào đúng 8 giờ tối hôm qua, họ đang cùng nhau dùng bữa tối." }
      ],
      signalWords: ["at that moment (tại khoảnh khắc đó)", "at 8 PM yesterday (lúc 8 giờ tối qua)", "while (trong khi)", "as (khi)"],
      vnLearnerTrap: "Dùng lẫn lộn giữa liên từ 'While' (thường đi với hành động kéo dài Continuous) và 'When' (thường đi với hành động cắt ngang Simple)."
    },
    {
      id: "past_perfect",
      name: "Thì Quá khứ hoàn thành (Past Perfect)",
      time: "Quá khứ của quá khứ",
      aspect: "Thể Hoàn thành (Xảy ra trước một mốc quá khứ khác)",
      formula: "Khẳng định: S + had + V3/ed | Phủ định: S + had not + V3/ed",
      linguisticEssence: "QUÁ KHỨ CỦA QUÁ KHỨ. Định vị một hành động đã xảy ra và kết thúc hoàn toàn TRƯỚC một mốc thời gian hoặc trước một hành động khác trong quá khứ.",
      timeline: "Quá khứ [Hành động A xảy ra trước (Had Done)] ➔ [Hành động B xảy ra sau (Past Simple)] ➔ Hiện tại",
      examples: [
        { en: "By the time the ambulance arrived, the patient had already stabilized.", vi: "Trước lúc xe cứu thương tới, bệnh nhân đã ổn định trở lại rồi." },
        { en: "She had never witnessed such a rare dialect before moving to Scotland.", vi: "Cô ấy chưa từng chứng kiến một phương ngữ hiếm như vậy trước khi chuyển tới Scotland sinh sống." }
      ],
      signalWords: ["by the time (trước khi)", "before (trước)", "after (sau khi)", "already (đã... rồi)", "hardly... when (vừa mới... thì)"],
      vnLearnerTrap: "Lạm dụng chia Had + V3 cho mọi sự việc trong quá khứ mà không có sự so sánh trước - sau với một mốc quá khứ nào khác."
    },
    {
      id: "future_modalities",
      name: "Phương thức Biểu đạt Tương lai (Future Expressions)",
      time: "Tương lai",
      aspect: "Góc nhìn tình thái chủ quan (Modal Perspectives)",
      formula: "Will + V_nguyên_thể | Be going to + V_nguyên_thể | Hiện tại tiếp diễn | Hiện tại đơn",
      linguisticEssence: "Tiếng Anh không có thì tương lai hình thái (từ không bị biến đổi đuôi). Tương lai là nhận định chủ quan của người nói: 'Will' (Quyết định tức thì hoặc phỏng đoán), 'Be going to' (Kế hoạch có dự tính hoặc có dấu hiệu căn cứ hiện tại), 'Hiện tại tiếp diễn' (Lịch trình đã sắp xếp chắc chắn với người khác).",
      timeline: "Hiện tại --------------------------> Tương lai [Dự định / Dự đoán / Lịch trình cố định]",
      examples: [
        { en: "Look at those dark clouds! It is going to rain.", vi: "Nhìn những đám mây đen kịt kìa! Trời sắp sửa đổ mưa đấy (Đã có dấu hiệu thực tế ở hiện tại)." },
        { en: "I promise I will send you the research data tonight.", vi: "Tôi hứa tôi sẽ gửi cho bạn dữ liệu nghiên cứu tối nay (Lời hứa tức thì tại thời điểm nói)." }
      ],
      signalWords: ["tomorrow (ngày mai)", "next week (tuần tới)", "in the future (trong tương lai)", "soon (sớm thôi)"],
      vnLearnerTrap: "Luôn luôn dịch từ 'sẽ' thành chữ 'will' trong mọi trường hợp, kể cả khi nói về lịch tàu xe hay kế hoạch cá nhân đã hẹn chắc chắn."
    }
  ],
  sentencePatterns: [
    {
      pattern: "Mẫu 1: S + V (Chủ ngữ + Động từ - Nội động từ)",
      explanation: "Động từ tự thân đã diễn đạt trọn vẹn ý nghĩa của hành động, không đòi hỏi một tân ngữ nào tiếp nhận tác động.",
      example: "The baby wept.",
      breakdown: "[Chủ ngữ (S): The baby] + [Nội động từ (V): wept (đã khóc)]"
    },
    {
      pattern: "Mẫu 2: S + V + O (Chủ ngữ + Động từ + Tân ngữ - Ngoại động từ đơn)",
      explanation: "Động từ truyền năng lượng trực tiếp lên một tân ngữ tiếp nhận (Direct Object).",
      example: "Linguists preserve endangered languages.",
      breakdown: "[Chủ ngữ (S): Linguists] + [Ngoại động từ (V): preserve] + [Tân ngữ trực tiếp (DO): endangered languages]"
    },
    {
      pattern: "Mẫu 3: S + V + C (Chủ ngữ + Động từ nối + Bổ ngữ - Hệ từ liên kết)",
      explanation: "Động từ đóng vai trò cầu nối, phần bổ ngữ (Complement) giải thích phẩm chất, tính chất hoặc định danh cho chủ ngữ.",
      example: "The explanation seems plausible.",
      breakdown: "[Chủ ngữ (S): The explanation] + [Động từ nối (LV): seems] + [Bổ ngữ chủ ngữ: plausible (hợp lý)]"
    },
    {
      pattern: "Mẫu 4: S + V + IO + DO (Chủ ngữ + Động từ + Tân ngữ gián tiếp + Tân ngữ trực tiếp)",
      explanation: "Động từ hành vi trao tặng chuyển giao cho một người nhận (Indirect Object) một vật phẩm (Direct Object).",
      example: "The professor granted the student an extension.",
      breakdown: "[Chủ ngữ (S): The professor] + [Động từ (V): granted] + [Tân ngữ gián tiếp (IO): the student] + [Tân ngữ trực tiếp (DO): an extension]"
    },
    {
      pattern: "Mẫu 5: S + V + O + OC (Chủ ngữ + Động từ + Tân ngữ + Bổ ngữ cho tân ngữ)",
      explanation: "Tân ngữ cần một bổ ngữ đi kèm phía sau để hoàn tất trạng thái, tính chất hoặc danh hiệu mới được gán cho tân ngữ.",
      example: "The committee appointed him chairperson.",
      breakdown: "[Chủ ngữ (S): The committee] + [Động từ (V): appointed] + [Tân ngữ (O): him] + [Bổ ngữ tân ngữ (OC): chairperson (chủ tịch)]"
    }
  ],
  advancedSyntax: [
    {
      title: "1. Nghệ thuật Đảo ngữ Cú pháp (Syntactic Inversion)",
      purpose: "Dùng để nhấn mạnh tính kịch tính, sự hiếm có hoặc chuyển trọng tâm thông tin lên đầu câu theo quy luật diễn ngôn tu từ.",
      rules: [
        {
          trigger: "Phó từ phủ định đứng đầu câu (Never, Seldom, Rarely, Hardly)",
          structure: "Trạng từ phủ định + Trợ động từ + Chủ ngữ + Động từ chính",
          example: "Never have I witnessed such profound linguistic creativity.",
          standard: "I have never witnessed such profound linguistic creativity. (Chưa bao giờ tôi chứng kiến sự sáng tạo ngôn ngữ sâu sắc đến vậy.)"
        },
        {
          trigger: "Cấu trúc nhấn mạnh 'Only after / Only when' (Chỉ sau khi / Chỉ khi)",
          structure: "Only after/when + Mệnh đề 1 + Trợ động từ + Chủ ngữ + Động từ chính",
          example: "Only when you master phonetics can you perceive subtle differences in spoken English.",
          standard: "You can perceive subtle differences in spoken English only when you master phonetics. (Chỉ khi làm chủ ngữ âm thì bạn mới cảm nhận được sự khác biệt tinh tế khi nghe tiếng Anh.)"
        }
      ]
    },
    {
      title: "2. Câu chẻ Nhấn mạnh Tiêu điểm (Cleft Sentences)",
      purpose: "Tách một câu thành hai mệnh đề để làm nổi bật tuyệt đối đối tượng trọng tâm (Nhấn mạnh Chủ thể, Thời gian hoặc Hành vi).",
      rules: [
        {
          type: "Câu chẻ với 'It' (It-cleft)",
          formula: "It is/was + Đối tượng cần nhấn mạnh + that/who + Thành phần còn lại",
          example: "It was Noam Chomsky who transformed the field of generative linguistics in 1957.",
          note: "Nhấn mạnh chính xác Noam Chomsky là người đã thay đổi nền ngôn ngữ học tạo sinh chứ không phải bất kỳ ai khác."
        },
        {
          type: "Câu chẻ với 'What' (Wh-cleft / Pseudo-cleft)",
          formula: "What + Chủ ngữ + Động từ + is/was + Điều muốn nhấn mạnh",
          example: "What language learners need most is comprehensive and engaging input.",
          note: "Thu hút toàn bộ sự chú ý của người nghe vào điều quan trọng nhất: lượng đầu vào dễ hiểu và hấp dẫn."
        }
      ]
    }
  ]
};
