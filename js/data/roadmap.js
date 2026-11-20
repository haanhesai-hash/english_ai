/**
 * Lộ trình Ngôn ngữ học CEFR (A1 -> C2)
 * Thiết kế dựa trên khung tham chiếu Châu Âu CEFR và các nguyên lý Thụ đắc Ngôn ngữ thứ hai (SLA).
 */

export const CEFR_ROADMAP = [
  {
    level: "A1",
    name: "Foundation (Khởi đầu - Căn bản)",
    cefr: "A1 - Breakthrough",
    color: "emerald",
    badge: "Người bắt đầu",
    vocabTarget: "500 - 800 từ",
    linguisticFocus: "Âm vị học căn bản, từ loại cơ bản, cấu trúc câu đơn (S-V-O)",
    overview: "Giai đoạn xây dựng nền móng thính giác và cơ quan phát âm. Người học giải mã 44 âm IPA, làm quen với trọng âm từ, trật tự từ cơ bản và các mẫu hội thoại sinh tồn.",
    canDo: [
      "Nhận diện và phát âm chuẩn các nguyên âm ngắn, nguyên âm dài và phụ âm cơ bản.",
      "Tự giới thiệu bản thân, quê quán, nghề nghiệp và gia đình bằng câu đơn giản.",
      "Hiểu và sử dụng các câu chào hỏi, cảm ơn, xin lỗi và số đếm trong ngữ cảnh hàng ngày.",
      "Hỏi và trả lời về sở hữu (my, your, his), vị trí (in, on, at) và thời gian biểu."
    ],
    phoneticsTarget: "Nắm vững 44 âm IPA, bật âm đuôi (final sounds) /s/, /z/, /t/, /d/.",
    grammarTarget: "Đại từ nhân xưng, Động từ To Be, Hiện tại đơn, Mạo từ A/An/The, Danh từ số ít/nhiều.",
    modules: [
      { id: "a1-1", title: "Bài 1: Giải mã 44 âm vị IPA & Vị trí cấu âm", type: "phonetics", duration: "45 phút" },
      { id: "a1-2", title: "Bài 2: Hình thái học danh từ: Số ít, Số nhiều & Sở hữu cách", type: "grammar", duration: "40 phút" },
      { id: "a1-3", title: "Bài 3: Trật tự câu đơn S + V + O & Thì Hiện tại đơn (Simple Present)", type: "grammar", duration: "50 phút" },
      { id: "a1-4", title: "Bài 4: Ngữ dụng sinh tồn: Tự giới thiệu & Giao tiếp xã giao", type: "pragmatics", duration: "45 phút" }
    ]
  },
  {
    level: "A2",
    name: "Elementary (Sơ cấp - Nối dài)",
    cefr: "A2 - Waystage",
    color: "teal",
    badge: "Người kiến tạo",
    vocabTarget: "1,000 - 1,500 từ",
    linguisticFocus: "Trục thời gian Quá khứ - Tương lai, Hiện tượng nối âm (Linking), Cụm động từ quen thuộc",
    overview: "Mở rộng khả năng diễn đạt thời gian, thói quen trong quá khứ và kế hoạch tương lai. Làm quen với hiện tượng nối âm phụ âm - nguyên âm và trọng âm câu.",
    canDo: [
      "Kể lại một chuỗi sự việc trong quá khứ bằng thì Quá khứ đơn (Past Simple).",
      "Miêu tả kế hoạch tương lai, sự sắp đặt bằng 'going to' và 'will'.",
      "Giao dịch cơ bản khi đi mua sắm, gọi món tại nhà hàng, hỏi đường.",
      "So sánh sự vật, hiện tượng bằng cấu trúc so sánh hơn và so sánh nhất."
    ],
    phoneticsTarget: "Hiện tượng nối âm liên từ (Consonant-to-Vowel), phát âm đuôi -ed và -s/es.",
    grammarTarget: "Quá khứ đơn (regular/irregular), Tương lai gần, So sánh tính từ, Giới từ chỉ phương hướng.",
    modules: [
      { id: "a2-1", title: "Bài 1: Hiện tượng nối âm (Linking) & Nhịp điệu câu tiếng Anh", type: "phonetics", duration: "45 phút" },
      { id: "a2-2", title: "Bài 2: Trục thời gian Quá khứ: Regular vs Irregular Verbs", type: "grammar", duration: "55 phút" },
      { id: "a2-3", title: "Bài 3: Tính từ hóa & Cấu trúc so sánh (Degree of Comparison)", type: "morphology", duration: "40 phút" },
      { id: "a2-4", title: "Bài 4: Giao tiếp thực địa: Gọi món, mua sắm và hỏi đường", type: "pragmatics", duration: "50 phút" }
    ]
  },
  {
    level: "B1",
    name: "Intermediate (Trung cấp - Tự chủ)",
    cefr: "B1 - Threshold",
    color: "blue",
    badge: "Người tự chủ",
    vocabTarget: "2,000 - 3,000 từ",
    linguisticFocus: "Khía niệm Thể (Aspect), Mệnh đề quan hệ, Hiện tượng nuốt âm (Elision) & Nhược hóa (Schwa)",
    overview: "Bước ngoặt sang tính độc lập ngôn ngữ. Người học làm chủ hệ thống thì hoàn thành (Aspect: Perfect), hiểu bản chất khía niệm thời gian trong tư duy Anh ngữ, và sử dụng câu phức.",
    canDo: [
      "Bày tỏ quan điểm cá nhân, đồng tình hoặc phản biện nhẹ nhàng.",
      "Mô tả cảm xúc, ước mơ, hy vọng và giải thích lý do cho các kế hoạch.",
      "Xử lý hầu hết các tình huống phát sinh khi du lịch ở nước ngoài.",
      "Viết email, đoạn văn mạch lạc kết nối các ý tưởng bằng liên từ liên kết."
    ],
    phoneticsTarget: "Âm yếu (Weak forms), vai trò của âm Schwa /ə/, hiện tượng nuốt âm (Elision).",
    grammarTarget: "Hiện tại hoàn thành (Present Perfect), Mệnh đề quan hệ (Relative Clauses), Câu điều kiện loại 1 & 2, Động từ khuyết thiếu.",
    modules: [
      { id: "b1-1", title: "Bài 1: Sức mạnh của âm Schwa /ə/ & Nhược hóa từ chức năng (Weak Forms)", type: "phonetics", duration: "50 phút" },
      { id: "b1-2", title: "Bài 2: Tư duy khía cạnh hoàn thành: Present Perfect vs Past Simple", type: "grammar", duration: "60 phút" },
      { id: "b1-3", title: "Bài 3: Gốc từ Hy Lạp & La Tinh I: Mở khóa từ vựng học thuật", type: "morphology", duration: "50 phút" },
      { id: "b1-4", title: "Bài 4: Diễn ngôn tranh biện: Thể hiện quan điểm & Lịch sự xã giao", type: "pragmatics", duration: "55 phút" }
    ]
  },
  {
    level: "B2",
    name: "Upper-Intermediate (Trung cao cấp - Lưu loát)",
    cefr: "B2 - Vantage",
    color: "indigo",
    badge: "Người lưu loát",
    vocabTarget: "4,000 - 5,000 từ",
    linguisticFocus: "Hiện tượng đồng hóa (Assimilation), Câu bị động nâng cao, Collocations & Cụm từ chuyên sâu",
    overview: "Khả năng giao tiếp trôi chảy và tự nhiên với người bản ngữ. Tiếp cận văn bản chuyên môn, phân tích cấu trúc diễn ngôn (Discourse Analysis) và sử dụng uyển chuyển các sắc thái từ vựng.",
    canDo: [
      "Hiểu ý chính của các văn bản phức tạp về các chủ đề cụ thể và trừu tượng.",
      "Giao tiếp lưu loát và tự nhiên mà không gây khó khăn cho người đối thoại.",
      "Viết bài luận rõ ràng, chi tiết, nêu bật ưu và nhược điểm của các giải pháp.",
      "Phân biệt sắc thái biểu cảm (tone, register) giữa thân mật và học thuật."
    ],
    phoneticsTarget: "Hiện tượng biến âm/đồng hóa (Assimilation), Ngữ điệu biểu cảm (Intonation contours).",
    grammarTarget: "Câu điều kiện hỗn hợp (Mixed Conditionals), Thể bị động khách quan, Mệnh đề phân từ (Participle Clauses), Đảo ngữ cơ bản.",
    modules: [
      { id: "b2-1", title: "Bài 1: Biến âm trong luồng nói tự nhiên (Assimilation & Intonation)", type: "phonetics", duration: "55 phút" },
      { id: "b2-2", title: "Bài 2: Rút gọn mệnh đề bằng Participle Clauses & Bị động nâng cao", type: "grammar", duration: "60 phút" },
      { id: "b2-3", title: "Bài 3: Mạng lưới Collocations: Tư duy từ vựng theo khối ngôn ngữ", type: "morphology", duration: "50 phút" },
      { id: "b2-4", title: "Bài 4: Phỏng vấn nghề nghiệp & Đàm phán chuyên nghiệp", type: "pragmatics", duration: "60 phút" }
    ]
  },
  {
    level: "C1",
    name: "Advanced (Cao cấp - Tinh tế)",
    cefr: "C1 - Effective Operational Proficiency",
    color: "purple",
    badge: "Chuyên gia Ngôn ngữ",
    vocabTarget: "7,000 - 8,000 từ",
    linguisticFocus: "Đảo ngữ cấu trúc (Syntactic Inversion), Câu chẻ (Cleft Sentences), Ngữ dụng học thực tiễn & Ẩn dụ nhận thức",
    overview: "Sử dụng ngôn ngữ linh hoạt và hiệu quả cho các mục đích xã hội, học thuật và chuyên nghiệp. Nắm bắt được hàm ý, nghĩa bóng, chơi chữ và ẩn dụ trong các văn bản phức tạp.",
    canDo: [
      "Hiểu sâu rộng các văn bản dài, đòi hỏi khắt khe và nhận ra ý nghĩa ngầm định.",
      "Diễn đạt ý tưởng một cách trôi chảy, tức thì mà không cần tìm kiếm từ ngữ quá nhiều.",
      "Sử dụng ngôn ngữ linh hoạt cho các mục đích xã hội, học thuật và chuyên ngành.",
      "Tạo ra các văn bản rõ ràng, có cấu trúc chặt chẽ, chi tiết về các chủ đề phức tạp."
    ],
    phoneticsTarget: "Làm chủ hoàn toàn ngữ điệu nhấn mạnh (tonic prominence) và nhịp điệu diễn thuyết.",
    grammarTarget: "Cấu trúc đảo ngữ nhấn mạnh, Câu chẻ (Cleft sentences), Cấu trúc giả định thức (Subjunctive mood).",
    modules: [
      { id: "c1-1", title: "Bài 1: Đảo ngữ (Inversion) & Nghệ thuật tạo nhịp điệu tu từ", type: "grammar", duration: "60 phút" },
      { id: "c1-2", title: "Bài 2: Câu chẻ (Cleft Sentences) & Tiêu điểm thông tin (Focus/Topic)", type: "grammar", duration: "55 phút" },
      { id: "c1-3", title: "Bài 3: Ẩn dụ nhận thức (Conceptual Metaphors) & Thành ngữ học thuật", type: "morphology", duration: "60 phút" },
      { id: "c1-4", title: "Bài 4: Thuyết trình học thuật & Phản biện hội nghị quốc tế", type: "pragmatics", duration: "65 phút" }
    ]
  },
  {
    level: "C2",
    name: "Mastery (Bậc thầy - Tinh thông)",
    cefr: "C2 - Mastery",
    color: "rose",
    badge: "Bậc thầy Tinh thông",
    vocabTarget: "10,000+ từ",
    linguisticFocus: "Phong cách học thuật đỉnh cao, Phân tích diễn ngôn chuyên sâu, Bản sắc ngôn ngữ & Tinh tế sắc thái",
    overview: "Đạt đến trình độ tương đương hoặc vượt trội người bản ngữ có học thức cao. Tự do chuyển đổi phong cách (Register) từ văn hóa đường phố đến nghị trường và văn bản triết học.",
    canDo: [
      "Hiểu một cách dễ dàng hầu như mọi thứ nghe hoặc đọc được.",
      "Tóm tắt thông tin từ các nguồn nói và viết khác nhau, tái cấu trúc lập luận thành bài thuyết trình mạch lạc.",
      "Diễn đạt tự phát, rất lưu loát và chính xác, phân biệt các sắc thái ý nghĩa tinh tế ngay cả trong các tình huống phức tạp nhất."
    ],
    phoneticsTarget: "Khả năng phân biệt và chuyển đổi giữa các phương ngữ chuẩn (Received Pronunciation, General American, v.v.).",
    grammarTarget: "Uyển chuyển mọi cấu trúc cú pháp, phá vỡ quy tắc một cách có chủ đích trong tu từ học.",
    modules: [
      { id: "c2-1", title: "Bài 1: Phong cách học (Stylistics) & Biến thể phương ngữ Anh - Mỹ", type: "phonetics", duration: "60 phút" },
      { id: "c2-2", title: "Bài 2: Phân tích diễn ngôn nâng cao: Tính mạch lạc & Liên kết văn bản", type: "grammar", duration: "65 phút" },
      { id: "c2-3", title: "Bài 3: Từ vựng văn chương, Triết học & Biệt ngữ pháp lý - chính trị", type: "morphology", duration: "70 phút" },
      { id: "c2-4", title: "Bài 4: Bậc thầy Đàm phán chiến lược & Ngoại giao cấp cao", type: "pragmatics", duration: "70 phút" }
    ]
  }
];
