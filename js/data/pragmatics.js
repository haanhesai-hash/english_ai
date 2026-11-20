/**
 * Kho dữ liệu Ngữ dụng học & Diễn ngôn (Pragmatics & Discourse Analysis)
 * Bộ chuyển đổi phong cách (Register Switcher), Kỹ thuật Hedging, Kịch bản hội thoại AI & Phòng luyện Shadowing.
 */

export const PRAGMATICS_DATA = {
  registerSwitcher: [
    {
      intent: "Từ chối một lời đề nghị / Lời mời (Declining an offer)",
      casual: "Nah, no way. I'm tied up right now.",
      neutral: "I'd love to, but I'm really busy at the moment. Can we do it another time?",
      formal: "I sincerely appreciate your kind invitation; however, owing to prior commitments, I must respectfully decline on this occasion.",
      linguisticAnalysis: "Ở văn phong trang trọng, người nói sử dụng mệnh đề nhượng bộ ('however, owing to...'), từ vựng gốc La-tinh ('prior commitments', 'respectfully decline') và tránh hoàn toàn các cấu trúc rút gọn (I'm, can't)."
    },
    {
      intent: "Bày tỏ sự không đồng tình (Expressing Disagreement)",
      casual: "You're totally wrong on that, man.",
      neutral: "I see your point, but I'm not sure that's entirely accurate.",
      formal: "While that perspective is certainly thought-provoking, the empirical data appears to support an alternative conclusion.",
      linguisticAnalysis: "Kỹ thuật 'Hedging' (nói rào đón) trong văn phong học thuật giúp giảm thiểu tính đối đầu. Người nói công nhận đối phương trước ('thought-provoking') rồi mới dẫn dắt chứng cứ khách quan ('empirical data')."
    },
    {
      intent: "Yêu cầu ai đó làm một việc gấp (Urgent Request)",
      casual: "Hey, get this done ASAP, ok?",
      neutral: "Could you please finalize this report as soon as you have a chance?",
      formal: "Would it be feasible for your team to expedite this matter at your earliest convenience?",
      linguisticAnalysis: "Chuyển từ câu mệnh lệnh trực tiếp (imperative) sang câu hỏi giả định lịch sự ('Would it be feasible...'), thay 'ASAP' bằng 'at your earliest convenience'."
    },
    {
      intent: "Xin lỗi vì gửi tài liệu trễ (Apologizing for Delay)",
      casual: "Sorry for the late reply, got swamped!",
      neutral: "Apologies for the delay in getting back to you. I've had a lot on my plate recently.",
      formal: "Please accept my sincere apologies for the delayed correspondence. I appreciate your patience during this demanding period.",
      linguisticAnalysis: "Thay thành ngữ đời thường ('got swamped') bằng danh từ hóa trang trọng ('delayed correspondence', 'demanding period')."
    },
    {
      intent: "Yêu cầu giải thích lại vì chưa hiểu (Asking for Clarification)",
      casual: "Wait, what? Say that again?",
      neutral: "Sorry, I didn't quite catch that. Could you run through it one more time?",
      formal: "Could you kindly elaborate further on that particular point to ensure our alignment?",
      linguisticAnalysis: "Văn phong học thuật/công sở cấp cao thay động từ 'say again' bằng 'elaborate further', gắn liền với mục tiêu 'ensure alignment' (đảm bảo sự thống nhất)."
    }
  ],
  hedgingTechniques: {
    title: "Nghệ thuật 'Hedging' (Rào đón ngôn ngữ trong học thuật & ngoại giao)",
    description: "Trong giao tiếp chuyên nghiệp C1/C2, người bản ngữ hiếm khi đưa ra khẳng định tuyệt đối 100% ('This proves that...'). Thay vào đó, họ sử dụng Hedging để bảo vệ lập luận của mình trước các phản biện trái chiều.",
    devices: [
      {
        category: "Động từ khiêm định (Epistemic Modals)",
        words: "may, might, could, would appear to, seem to",
        example: "The findings seem to suggest that phonological awareness facilitates reading comprehension."
      },
      {
        category: "Phó từ xác suất (Probability Adverbs)",
        words: "arguably, conceivably, presumably, plausibly, relatively",
        example: "Chomsky is arguably the most influential figure in modern linguistics."
      },
      {
        category: "Mệnh đề quy chiếu dè dặt (Shielding Clauses)",
        words: "To our knowledge, According to available evidence, It is widely considered that",
        example: "Based on current data, there is little reason to assume an immediate paradigm shift."
      }
    ]
  },
  scenarios: [
    {
      id: "cafe-ordering",
      title: "Tình huống 1: Gọi đồ uống tại quán cà phê quốc tế",
      level: "A1 - A2 (Căn bản sinh tồn)",
      context: "Bạn đang đứng ở quầy gọi đồ uống của một quán cà phê tại trung tâm London.",
      dialogue: [
        { speaker: "Barista", text: "Hi there! Welcome to Costa. What can I get started for you today?", ipa: "haɪ ðeər! ˈwelkəm tə ˈkɒstə. wɒt kən aɪ ɡet ˈstɑːtɪd fə juː təˈdeɪ?" },
        { speaker: "You", text: "Hi! Could I please get a medium oat flat white with no sugar?", ipa: "haɪ! kəd aɪ pliːz ɡet ə ˈmiːdiəm əʊt flæt waɪt wɪð nəʊ ˈʃʊɡər?" },
        { speaker: "Barista", text: "Sure thing! For here or to take away?", ipa: "ʃɔː θɪŋ! fə hɪər ɔː tə teɪk əˈweɪ?" },
        { speaker: "You", text: "To take away, please. And do you accept contactless payment?", ipa: "tə teɪk əˈweɪ, pliːz. ænd duː juː əkˈsept ˈkɒntæktləs ˈpeɪmənt?" },
        { speaker: "Barista", text: "We certainly do! Just tap your card right here whenever you're ready.", ipa: "wiː ˈsɜːtnli duː! dʒəst tæp jɔː kɑːd raɪt hɪə wenˈevər jʊər ˈredi." }
      ],
      culturalTip: "Ở các nước nói tiếng Anh, luôn dùng câu hỏi điều kiện 'Could I have...' hoặc 'Can I get...' kèm theo chữ 'please'. Tránh dùng câu mệnh lệnh như 'Give me a coffee' vì người bản ngữ cảm thấy thô lỗ."
    },
    {
      id: "job-interview",
      title: "Tình huống 2: Phỏng vấn xin việc & Phương pháp STAR",
      level: "B1 - B2 (Chuyên nghiệp công sở)",
      context: "Bạn đang trả lời phỏng vấn cho vị trí Giám đốc Dự án tại một tập đoàn đa quốc gia.",
      dialogue: [
        { speaker: "Interviewer", text: "Could you walk me through a situation where you had to manage a difficult conflict within your team?", ipa: "kəd juː wɔːk miː θruː ə ˌsɪtʃuˈeɪʃn weə juː hæd tə ˈmænɪdʒ ə ˈdɪfɪkəlt ˈkɒnflɪkt wɪðˈɪn jɔː tiːm?" },
        { speaker: "You", text: "Certainly. In my previous role (Situation), our engineering and marketing teams had conflicting deadlines for the app launch (Task).", ipa: "ˈsɜːtnli. ɪn maɪ ˈpriːviəs rəʊl, ˈaʊər ˌendʒɪˈnɪərɪŋ ænd ˈmɑːkɪtɪŋ tiːmz hæd kənˈflɪktɪŋ ˈdedlaɪnz..." },
        { speaker: "You", text: "I organized a cross-functional alignment workshop to establish clear priorities (Action). As a result, we delivered the release two weeks ahead of schedule (Result).", ipa: "aɪ ˈɔːɡənaɪzd ə krɒs-ˈfʌŋkʃənl əˈlaɪnmənt ˈwɜːkʃɒp... æz ə rɪˈzʌlt, wiː dɪˈlɪvəd ðə rɪˈliːs..." },
        { speaker: "Interviewer", text: "That demonstrates impressive leadership and emotional intelligence. How did the team dynamics evolve after that?", ipa: "ðæt ˈdemənstreɪts ɪmˈpresɪv ˈliːdəʃɪp ænd ɪˈməʊʃənl ɪnˈtelɪdʒəns..." }
      ],
      culturalTip: "Áp dụng cấu trúc STAR (Situation - Tình huống, Task - Nhiệm vụ, Action - Hành động của bản thân, Result - Kết quả đo lường được). Sử dụng các động từ hành động mạnh mẽ (spearheaded, streamlined, optimized)."
    },
    {
      id: "academic-defense",
      title: "Tình huống 3: Bảo vệ Luận văn & Phản biện Hội nghị Khoa học",
      level: "C1 - C2 (Học thuật đỉnh cao)",
      context: "Bạn đang bảo vệ bài nghiên cứu ngôn ngữ học trước hội đồng giáo sư quốc tế.",
      dialogue: [
        { speaker: "Professor", text: "Your quantitative methodology is rigorous; nevertheless, don't you think your sampling size might introduce a selection bias?", ipa: "jɔː ˈkwɒntɪtətɪv ˌmeθəˈdɒlədʒi ɪz ˈrɪɡərəs; ˌnevəðəˈles, dəʊnt juː θɪŋk..." },
        { speaker: "You", text: "That is an exceptionally valid critique, Professor. To mitigate this limitation, we ran a bootstrap cross-validation with five thousand iterations.", ipa: "ðæt ɪz ən ɪkˈsepʃənəli ˈvælɪd krɪˈtiːk, prəˈfesər. tə ˈmɪtɪɡeɪt ðɪs ˌlɪmɪˈteɪʃn..." },
        { speaker: "You", text: "The statistical variance remained below two percent, which reinforces our core hypothesis regarding morphosyntactic acquisition.", ipa: "ðə stəˈtɪstɪkl ˈveəriəns rɪˈmeɪnd bɪˈləʊ tuː pə ˈsent, wɪtʃ ˌriːɪnˈfɔːsɪz ˈaʊə kɔː haɪˈpɒθəsɪs..." }
      ],
      culturalTip: "Khi bảo vệ học thuật, không bao giờ phản ứng phòng thủ gay gắt. Hãy mở đầu bằng việc công nhận giá trị của câu hỏi ('That is a profound observation / valid critique') rồi bình tĩnh trình bày các biện pháp kiểm chứng khoa học."
    }
  ],
  shadowingPassages: [
    {
      id: "shadow-1",
      title: "The Architecture of Human Language (Noam Chomsky Insight)",
      level: "B1 - B2",
      speaker: "Academic English (Neutral RP / GA)",
      speed: "1.0x",
      text: "Language is not merely a tool for communication; it is a mirror of the human mind. When we acquire our mother tongue, we effortlessly absorb complex structural rules without explicit instruction.",
      ipa: "/ˈlæŋɡwɪdʒ ɪz nɒt ˈmɪəli ə tuːl fə kəˌmjuːnɪˈkeɪʃn; ɪt ɪz ə ˈmɪrər əv ðə ˈhjuːmən maɪnd. wen wiː əˈkwaɪər ˈaʊə ˈmʌðə tʌŋ, wiː ˈefətləsli əbˈzɔːb ˈkɒmpleks ˈstrʌktʃərəl ruːlz wɪðˈaʊt ɪkˈsplɪsɪt ɪnˈstrʌkʃn./",
      tips: "Chú ý nối âm giữa 'tool for' (/tuːl fə/) và nhược hóa âm 'of' thành /əv/. Nhấn mạnh vào các từ mang thông tin: *mirror*, *human mind*, *effortlessly*, *structural rules*."
    },
    {
      id: "shadow-2",
      title: "The Art of Clear Thinking (Steve Jobs Style)",
      level: "B2 - C1",
      speaker: "Inspirational General American",
      speed: "1.0x",
      text: "Simplicity is not the absence of clutter; that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object and product.",
      ipa: "/sɪmˈplɪsəti ɪz nɒt ði ˈæbsəns əv ˈklʌtər; ðæts ə ˈkɒnsɪkwəns əv sɪmˈplɪsəti. sɪmˈplɪsəti ˈsʌmhaʊ ɪˈsenʃəli dɪˈskraɪbz ðə ˈpɜːpəs ənd pleɪs əv ən ˈɒbdʒɪkt ænd ˈprɒdʌkt./",
      tips: "Ngắt nghỉ có chủ đích sau từ 'clutter'. Sử dụng ngữ điệu đi xuống (Falling intonation) ở cuối câu để tạo sức thuyết phục tuyệt đối."
    }
  ]
};
