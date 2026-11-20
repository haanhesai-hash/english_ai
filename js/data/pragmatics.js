/**
 * Kho dữ liệu Ngữ dụng học & Diễn ngôn (Pragmatics & Discourse Analysis)
 * Bộ chuyển đổi phong cách (Register Switcher), Kỹ thuật Hedging, Kịch bản hội thoại AI & Phòng luyện Shadowing.
 * Chú thích 100% bằng tiếng Việt kèm dịch nghĩa từng câu thoại dành riêng cho người Việt.
 */

export const PRAGMATICS_DATA = {
  registerSwitcher: [
    {
      intent: "Từ chối một lời đề nghị / Lời mời (Declining an offer)",
      casual: "Nah, no way. I'm tied up right now.",
      casualVi: "Thôi, chịu rồi. Giờ tôi đang bận tối mắt tối mũi.",
      neutral: "I'd love to, but I'm really busy at the moment. Can we do it another time?",
      neutralVi: "Tôi rất muốn đi, nhưng hiện tại tôi đang khá bận. Chúng ta hẹn dịp khác được không?",
      formal: "I sincerely appreciate your kind invitation; however, owing to prior commitments, I must respectfully decline on this occasion.",
      formalVi: "Tôi chân thành cảm ơn lời mời của quý vị; tuy nhiên do đã có lịch trình từ trước, tôi xin phép được kính cẩn từ chối vào dịp này.",
      linguisticAnalysis: "Ở văn phong trang trọng, người nói sử dụng mệnh đề nhượng bộ ('however, owing to...'), từ vựng gốc La-tinh ('prior commitments', 'respectfully decline') và tránh hoàn toàn các cấu trúc rút gọn (I'm, can't)."
    },
    {
      intent: "Bày tỏ sự không đồng tình một cách khéo léo (Expressing Disagreement)",
      casual: "You're totally wrong on that, man.",
      casualVi: "Cậu sai bét nhè rồi bạn ơi.",
      neutral: "I see your point, but I'm not sure that's entirely accurate.",
      neutralVi: "Tôi hiểu góc nhìn của bạn, nhưng tôi không chắc điều đó hoàn toàn chính xác.",
      formal: "While that perspective is certainly thought-provoking, the empirical data appears to support an alternative conclusion.",
      formalVi: "Mặc dù góc nhìn đó rất đáng suy ngẫm, dữ liệu thực nghiệm dường như lại ủng hộ một kết luận khác.",
      linguisticAnalysis: "Kỹ thuật 'Hedging' (nói rào đón) trong văn phong học thuật giúp giảm thiểu tính đối đầu. Người nói công nhận đối phương trước ('thought-provoking') rồi mới dẫn dắt chứng cứ khách quan ('empirical data')."
    },
    {
      intent: "Yêu cầu ai đó làm một việc gấp (Urgent Request)",
      casual: "Hey, get this done ASAP, ok?",
      casualVi: "Này, làm xong cái này gấp giùm nhé?",
      neutral: "Could you please finalize this report as soon as you have a chance?",
      neutralVi: "Bạn có thể hoàn tất bản báo cáo này ngay khi có thể được không?",
      formal: "Would it be feasible for your team to expedite this matter at your earliest convenience?",
      formalVi: "Liệu có khả thi không nếu quý đội ngũ có thể xúc tiến vấn đề này vào thời điểm thuận tiện sớm nhất?",
      linguisticAnalysis: "Chuyển từ câu mệnh lệnh trực tiếp (imperative) sang câu hỏi điều kiện giả định lịch sự ('Would it be feasible...'), thay từ đời thường 'ASAP' bằng 'at your earliest convenience'."
    },
    {
      intent: "Xin lỗi vì gửi tài liệu trễ (Apologizing for Delay)",
      casual: "Sorry for the late reply, got swamped!",
      casualVi: "Xin lỗi vì trả lời trễ nhé, bận ngập đầu luôn!",
      neutral: "Apologies for the delay in getting back to you. I've had a lot on my plate recently.",
      neutralVi: "Thành thật xin lỗi vì đã phản hồi trễ cho bạn. Dạo gần đây tôi có khá nhiều việc cần xử lý.",
      formal: "Please accept my sincere apologies for the delayed correspondence. I appreciate your patience during this demanding period.",
      formalVi: "Xin vui lòng nhận lời xin lỗi chân thành của tôi vì sự hồi đáp chậm trễ này. Tôi rất trân trọng sự kiên nhẫn của quý vị trong giai đoạn bận rộn này.",
      linguisticAnalysis: "Thay thành ngữ đời thường ('got swamped') bằng cấu trúc danh từ hóa trang trọng ('delayed correspondence', 'demanding period')."
    },
    {
      intent: "Yêu cầu giải thích lại vì chưa hiểu (Asking for Clarification)",
      casual: "Wait, what? Say that again?",
      casualVi: "Ủa sao cơ? Nói lại xem nào?",
      neutral: "Sorry, I didn't quite catch that. Could you run through it one more time?",
      neutralVi: "Xin lỗi, tôi chưa nghe kịp chỗ đó. Bạn có thể nói lại một lần nữa được không?",
      formal: "Could you kindly elaborate further on that particular point to ensure our alignment?",
      formalVi: "Quý vị có thể vui lòng giải thích chi tiết hơn về điểm cụ thể đó để đảm bảo sự thống nhất của hai bên không?",
      linguisticAnalysis: "Văn phong học thuật và công sở cấp cao thay động từ 'say again' bằng 'elaborate further', gắn liền với mục tiêu 'ensure alignment' (đảm bảo sự đồng thuận)."
    }
  ],
  hedgingTechniques: {
    title: "Nghệ thuật 'Hedging' (Rào đón ngôn ngữ trong học thuật & ngoại giao)",
    description: "Trong giao tiếp chuyên nghiệp C1/C2, người bản ngữ hiếm khi đưa ra khẳng định tuyệt đối 100% ('This proves that...'). Thay vào đó, họ sử dụng kỹ thuật Hedging để bảo vệ lập luận của mình trước các phản biện trái chiều.",
    devices: [
      {
        category: "Động từ tình thái khiêm định (Epistemic Modals)",
        words: "may, might, could, would appear to, seem to",
        example: "The findings seem to suggest that phonological awareness facilitates reading comprehension.",
        exampleVi: "Các phát hiện nghiên cứu dường như gợi ý rằng nhận thức âm vị học tạo điều kiện thuận lợi cho việc đọc hiểu."
      },
      {
        category: "Phó từ chỉ xác suất (Probability Adverbs)",
        words: "arguably, conceivably, presumably, plausibly, relatively",
        example: "Chomsky is arguably the most influential figure in modern linguistics.",
        exampleVi: "Chomsky có thể được coi là nhân vật có tầm ảnh hưởng lớn nhất trong nền ngôn ngữ học hiện đại."
      },
      {
        category: "Mệnh đề quy chiếu dè dặt (Shielding Clauses)",
        words: "To our knowledge, According to available evidence, It is widely considered that",
        example: "Based on current data, there is little reason to assume an immediate paradigm shift.",
        exampleVi: "Dựa trên dữ liệu hiện có, có rất ít lý do để cho rằng sẽ xảy ra một sự dịch chuyển hệ hình tức thời."
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
        { speaker: "Nhân viên pha chế (Barista)", text: "Hi there! Welcome to Costa. What can I get started for you today?", vi: "Xin chào quý khách! Chào mừng bạn đến với Costa. Tôi có thể chuẩn bị món gì cho bạn hôm nay?", ipa: "haɪ ðeər! ˈwelkəm tə ˈkɒstə. wɒt kən aɪ ɡet ˈstɑːtɪd fə juː təˈdeɪ?" },
        { speaker: "Bạn (Học sinh)", text: "Hi! Could I please get a medium oat flat white with no sugar?", vi: "Chào bạn! Cho tôi một ly cà phê flat white sữa yến mạch cỡ vừa không đường nhé?", ipa: "haɪ! kəd aɪ pliːz ɡet ə ˈmiːdiəm əʊt flæt waɪt wɪð nəʊ ˈʃʊɡər?" },
        { speaker: "Nhân viên pha chế (Barista)", text: "Sure thing! For here or to take away?", vi: "Chắc chắn rồi! Bạn dùng tại quán hay mang đi?", ipa: "ʃɔː θɪŋ! fə hɪər ɔː tə teɪk əˈweɪ?" },
        { speaker: "Bạn (Học sinh)", text: "To take away, please. And do you accept contactless payment?", vi: "Mang đi giùm tôi nhé. Và quán có nhận thanh toán chạm thẻ không?", ipa: "tə teɪk əˈweɪ, pliːz. ænd duː juː əkˈsept ˈkɒntæktləs ˈpeɪmənt?" },
        { speaker: "Nhân viên pha chế (Barista)", text: "We certainly do! Just tap your card right here whenever you're ready.", vi: "Quán có nhận nhé! Bạn chỉ cần chạm thẻ vào đây bất cứ khi nào bạn sẵn sàng.", ipa: "wiː ˈsɜːtnli duː! dʒəst tæp jɔː kɑːd raɪt hɪə wenˈevər jʊər ˈredi." }
      ],
      culturalTip: "Ở các nước nói tiếng Anh, luôn dùng câu hỏi điều kiện 'Could I have...' hoặc 'Can I get...' kèm theo chữ 'please'. Tránh dùng câu mệnh lệnh như 'Give me a coffee' vì người bản xứ sẽ cảm thấy bị ra lệnh thiếu lịch sự."
    },
    {
      id: "job-interview",
      title: "Tình huống 2: Phỏng vấn xin việc & Phương pháp STAR",
      level: "B1 - B2 (Chuyên nghiệp công sở)",
      context: "Bạn đang trả lời phỏng vấn cho vị trí Giám đốc Dự án tại một tập đoàn đa quốc gia.",
      dialogue: [
        { speaker: "Nhà tuyển dụng (Interviewer)", text: "Could you walk me through a situation where you had to manage a difficult conflict within your team?", vi: "Bạn có thể chia sẻ một tình huống mà bạn đã phải giải quyết mâu thuẫn phức tạp trong đội ngũ của mình không?", ipa: "kəd juː wɔːk miː θruː ə ˌsɪtʃuˈeɪʃn weə juː hæd tə ˈmænɪdʒ ə ˈdɪfɪkəlt ˈkɒnflɪkt wɪðˈɪn jɔː tiːm?" },
        { speaker: "Bạn (Ứng viên)", text: "Certainly. In my previous role (Situation), our engineering and marketing teams had conflicting deadlines for the app launch (Task).", vi: "Chắc chắn rồi. Ở vai trò trước đây của tôi (Tình huống), đội kỹ thuật và tiếp thị có hạn chót xung đột về thời điểm ra mắt ứng dụng (Nhiệm vụ).", ipa: "ˈsɜːtnli. ɪn maɪ ˈpriːviəs rəʊl, ˈaʊər ˌendʒɪˈnɪərɪŋ ænd ˈmɑːkɪtɪŋ tiːmz hæd kənˈflɪktɪŋ ˈdedlaɪnz..." },
        { speaker: "Bạn (Ứng viên)", text: "I organized a cross-functional alignment workshop to establish clear priorities (Action). As a result, we delivered the release two weeks ahead of schedule (Result).", vi: "Tôi đã tổ chức buổi hội thảo liên bộ phận để thống nhất lại thứ tự ưu tiên (Hành động). Kết quả là chúng tôi đã ra mắt bản cập nhật sớm hơn 2 tuần so với kế hoạch (Kết quả).", ipa: "aɪ ˈɔːɡənaɪzd ə krɒs-ˈfʌŋkʃənl əˈlaɪnmənt ˈwɜːkʃɒp... æz ə rɪˈzʌlt, wiː dɪˈlɪvəd ðə rɪˈliːs..." },
        { speaker: "Nhà tuyển dụng (Interviewer)", text: "That demonstrates impressive leadership and emotional intelligence. How did the team dynamics evolve after that?", vi: "Điều đó chứng tỏ năng lực lãnh đạo và trí tuệ cảm xúc rất ấn tượng. Không khí đội ngũ sau đó đã tiến triển ra sao?", ipa: "ðæt ˈdemənstreɪts ɪmˈpresɪv ˈliːdəʃɪp ænd ɪˈməʊʃənl ɪnˈtelɪdʒəns..." }
      ],
      culturalTip: "Áp dụng cấu trúc STAR: S (Tình huống) ➔ T (Nhiệm vụ) ➔ A (Hành động cụ thể của bản thân) ➔ R (Kết quả đo lường được). Sử dụng các động từ hành động mạnh mẽ (*spearheaded, streamlined, optimized*)."
    },
    {
      id: "academic-defense",
      title: "Tình huống 3: Bảo vệ Luận văn & Phản biện Hội nghị Khoa học",
      level: "C1 - C2 (Học thuật đỉnh cao)",
      context: "Bạn đang bảo vệ bài nghiên cứu ngôn ngữ học trước hội đồng giáo sư quốc tế.",
      dialogue: [
        { speaker: "Giáo sư phản biện (Professor)", text: "Your quantitative methodology is rigorous; nevertheless, don't you think your sampling size might introduce a selection bias?", vi: "Phương pháp nghiên cứu định lượng của bạn rất chặt chẽ; tuy vậy, bạn có nghĩ rằng cỡ mẫu của bạn có thể tạo ra độ lệch chọn lọc không?", ipa: "jɔː ˈkwɒntɪtətɪv ˌmeθəˈdɒlədʒi ɪz ˈrɪɡərəs; ˌnevəðəˈles, dəʊnt juː θɪŋk..." },
        { speaker: "Bạn (Nghiên cứu sinh)", text: "That is an exceptionally valid critique, Professor. To mitigate this limitation, we ran a bootstrap cross-validation with five thousand iterations.", vi: "Đó là một câu hỏi phản biện cực kỳ chuẩn xác, thưa Giáo sư. Để giảm thiểu hạn chế này, chúng tôi đã chạy kiểm chứng chéo bootstrap với 5.000 lần lặp.", ipa: "ðæt ɪz ən ɪkˈsepʃənəli ˈvælɪd krɪˈtiːk, prəˈfesər. tə ˈmɪtɪɡeɪt ðɪs ˌlɪmɪˈteɪʃn..." },
        { speaker: "Bạn (Nghiên cứu sinh)", text: "The statistical variance remained below two percent, which reinforces our core hypothesis regarding morphosyntactic acquisition.", vi: "Phương sai thống kê vẫn duy trì dưới 2%, điều này càng củng cố giả thuyết cốt lõi của chúng tôi về quá trình thụ đắc cú pháp hình thái.", ipa: "ðə stəˈtɪstɪkl ˈveəriəns rɪˈmeɪnd bɪˈləʊ tuː pə ˈsent, wɪtʃ ˌriːɪnˈfɔːsɪz ˈaʊə kɔː haɪˈpɒθəsɪs..." }
      ],
      culturalTip: "Khi bảo vệ học thuật, không bao giờ phản ứng phòng thủ gay gắt. Hãy mở đầu bằng việc công nhận giá trị của câu hỏi ('That is a valid critique, Professor') rồi bình tĩnh trình bày các chứng cứ kiểm định khách quan."
    }
  ],
  shadowingPassages: [
    {
      id: "shadow-1",
      title: "Cấu Trúc Của Ngôn Ngữ Con Người (Góc nhìn Noam Chomsky)",
      level: "B1 - B2 (Trung cấp)",
      speaker: "Tiếng Anh Học thuật Chuẩn mực (Neutral RP / GA)",
      speed: "1.0x",
      text: "Language is not merely a tool for communication; it is a mirror of the human mind. When we acquire our mother tongue, we effortlessly absorb complex structural rules without explicit instruction.",
      translationVi: "Ngôn ngữ không đơn thuần chỉ là công cụ giao tiếp; nó là tấm gương phản chiếu tâm trí con người. Khi thụ đắc tiếng mẹ đẻ, chúng ta tiếp thu những quy luật cấu trúc phức tạp một cách tự nhiên mà không cần ai chỉ dạy quy tắc.",
      ipa: "/ˈlæŋɡwɪdʒ ɪz nɒt ˈmɪəli ə tuːl fə kəˌmjuːnɪˈkeɪʃn; ɪt ɪz ə ˈmɪrər əv ðə ˈhjuːmən maɪnd. wen wiː əˈkwaɪər ˈaʊə ˈmʌðə tʌŋ, wiː ˈefətləsli əbˈzɔːb ˈkɒmpleks ˈstrʌktʃərəl ruːlz wɪðˈaʊt ɪkˈsplɪsɪt ɪnˈstrʌkʃn./",
      tips: "Chú ý nối âm tự nhiên giữa 'tool for' (/tuːl fə/) và nhược hóa âm 'of' thành /əv/. Nhấn mạnh vào các từ mang thông tin cốt lõi: mirror, human mind, effortlessly, structural rules."
    },
    {
      id: "shadow-2",
      title: "Nghệ Thuật Của Sự Đơn Giản Tinh Tế (Phong cách Steve Jobs)",
      level: "B2 - C1 (Trung cao cấp)",
      speaker: "Tiếng Anh Diễn thuyết Truyền cảm hứng (General American)",
      speed: "1.0x",
      text: "Simplicity is not the absence of clutter; that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object and product.",
      translationVi: "Sự đơn giản không chỉ là loại bỏ sự lộn xộn; đó chỉ là hệ quả của nó. Sự đơn giản về bản chất mô tả chính xác mục đích và vị thế tồn tại của một sự vật và sản phẩm.",
      ipa: "/sɪmˈplɪsəti ɪz nɒt ði ˈæbsəns əv ˈklʌtər; ðæts ə ˈkɒnsɪkwəns əv sɪmˈplɪsəti. sɪmˈplɪsəti ˈsʌmhaʊ ɪˈsenʃəli dɪˈskraɪbz ðə ˈpɜːpəs ənd pleɪs əv ən ˈɒbdʒɪkt ænd ˈprɒdʌkt./",
      tips: "Ngắt nghỉ có chủ đích sau từ 'clutter'. Sử dụng ngữ điệu đi xuống (Falling intonation) ở cuối câu để tạo sức thuyết phục tuyệt đối của một lời tuyên ngôn."
    }
  ]
};
