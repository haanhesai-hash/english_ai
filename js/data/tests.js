/**
 * Bộ đề Đánh giá Chẩn đoán Trình độ Ngôn ngữ học CEFR (A1 -> C2)
 * Bao quát 4 trụ cột: Ngữ âm, Hình thái từ vựng, Cú pháp học, và Ngữ dụng học.
 */

export const DIAGNOSTIC_TEST = [
  // --- A1 LEVEL ---
  {
    id: 1,
    level: "A1",
    pillar: "Phonology (Ngữ âm)",
    question: "Từ nào sau đây chứa nguyên âm dài /iː/ (cơ miệng mỉm cười căng)?",
    options: ["ship", "sheep", "sit", "hit"],
    correct: 1,
    linguisticExplanation: "'sheep' /ʃiːp/ chứa nguyên âm dài căng (tense long vowel), trong khi 'ship', 'sit', 'hit' đều chứa nguyên âm ngắn chùng /ɪ/ (lax short vowel)."
  },
  {
    id: 2,
    level: "A1",
    pillar: "Syntax (Cú pháp)",
    question: "Chọn câu có trật tự cú pháp tiếng Anh chuẩn (Subject - Verb - Object):",
    options: [
      "Yesterday bought he a new car.",
      "He bought a new car yesterday.",
      "A new car yesterday he bought.",
      "He a new car bought yesterday."
    ],
    correct: 1,
    linguisticExplanation: "Tiếng Anh là ngôn ngữ có trật tự từ cố định SVO (Chủ ngữ - Động từ - Tân ngữ). Trạng từ chỉ thời gian (yesterday) thường được đặt ở cuối câu hoặc đầu câu để định khung thời gian."
  },
  {
    id: 3,
    level: "A1",
    pillar: "Morphology (Hình thái)",
    question: "Hình thức số nhiều bất quy tắc của danh từ 'child' là gì?",
    options: ["childs", "children", "childes", "childrens"],
    correct: 1,
    linguisticExplanation: "'children' là tàn dư hình thái học từ thời kỳ tiếng Anh cổ (Old English - hậu tố -ru chuyển thành -ren), là danh từ số nhiều bất quy tắc không thêm đuôi -s."
  },

  // --- A2 LEVEL ---
  {
    id: 4,
    level: "A2",
    pillar: "Phonology (Ngữ âm)",
    question: "Đuôi '-ed' trong động từ 'watched' được phát âm là âm gì?",
    options: ["/ɪd/", "/d/", "/t/", "/ed/"],
    correct: 2,
    linguisticExplanation: "Theo quy luật đồng hóa thanh tính: vì âm kết thúc của 'watch' là âm vô thanh /tʃ/, đuôi '-ed' buộc phải đồng hóa thành phụ âm vô thanh tương ứng là /t/ (/wɒtʃt/)."
  },
  {
    id: 5,
    level: "A2",
    pillar: "Lexicon (Từ vựng Collocation)",
    question: "Chọn cụm từ kết hợp tự nhiên (Collocation) chính xác:",
    options: ["do a mistake", "make a mistake", "create a mistake", "perform a mistake"],
    correct: 1,
    linguisticExplanation: "Quy luật ngôn ngữ học: 'make' đi với các hành vi tạo ra sản phẩm/kết quả trừu tượng như 'make a mistake', 'make a decision'. 'Do' dùng cho nhiệm vụ và thói quen."
  },
  {
    id: 6,
    level: "A2",
    pillar: "Syntax (Cú pháp)",
    question: "Chọn câu diễn đạt kế hoạch tương lai đã có dấu hiệu căn cứ ở hiện tại:",
    options: [
      "Look at that speeding car! It will crash.",
      "Look at that speeding car! It is going to crash.",
      "Look at that speeding car! It crashes.",
      "Look at that speeding car! It crashed."
    ],
    correct: 1,
    linguisticExplanation: "'Be going to' được dùng khi có bằng chứng khách quan ở hiện tại báo hiệu hành động sắp diễn ra ('Look at that speeding car!'). 'Will' chỉ dùng cho phỏng đoán chủ quan hoặc quyết định tức thời."
  },

  // --- B1 LEVEL ---
  {
    id: 7,
    level: "B1",
    pillar: "Phonology (Ngữ âm)",
    question: "Trong cụm từ 'next door', âm /t/ bị biến mất theo hiện tượng gì?",
    options: ["Assimilation (Đồng hóa)", "Elision (Nuốt âm)", "Linking (Nối âm)", "Intrusion (Chèn âm)"],
    correct: 1,
    linguisticExplanation: "Đây là hiện tượng Nuốt âm (Elision): Khi âm tắc vô thanh /t/ hoặc /d/ bị kẹp giữa hai phụ âm khác (/k/ và /d/), nó sẽ bị triệt tiêu để tối ưu hóa năng lượng phát âm (/neks dɔːr/)."
  },
  {
    id: 8,
    level: "B1",
    pillar: "Cognitive Syntax (Cú pháp)",
    question: "Chọn câu phân biệt đúng bản chất của Present Perfect và Past Simple:",
    options: [
      "I have visited Paris three years ago.",
      "I visited Paris three times in my life and I hope to go again.",
      "I have lost my key, so I cannot enter my apartment right now.",
      "Yesterday, I have finished reading the entire book."
    ],
    correct: 2,
    linguisticExplanation: "Hiện tại hoàn thành (Present Perfect) diễn tả hành động trong quá khứ nhưng có HỆ QUẢ HIỆN HỮU ở hiện tại ('bây giờ không vào được nhà'). Không dùng thì này với các mốc thời gian quá khứ đóng như 'ago' hay 'yesterday'."
  },
  {
    id: 9,
    level: "B1",
    pillar: "Morphology (Gốc từ)",
    question: "Gốc từ La-tinh 'struct' trong 'construct', 'destruct', 'instruct' có nghĩa là gì?",
    options: ["Nói, tuyên bố", "Xây dựng, sắp đặt", "Nhìn, xem", "Kéo, rút ra"],
    correct: 1,
    linguisticExplanation: "'struct' bắt nguồn từ động từ La-tinh 'struere' có nghĩa là xây dựng, kiến thiết hoặc tổ chức."
  },

  // --- B2 LEVEL ---
  {
    id: 10,
    level: "B2",
    pillar: "Phonology (Ngữ âm)",
    question: "Hiện tượng biến âm trong cụm 'good girl' thành /ɡʊɡ ɡɜːl/ là ví dụ của:",
    options: ["Nối phụ âm với nguyên âm", "Đồng hóa vị trí cấu âm (Regressive Assimilation)", "Nuốt nguyên âm Schwa", "Nhấn sai trọng âm"],
    correct: 1,
    linguisticExplanation: "Đây là hiện tượng Đồng hóa ngược (Regressive Assimilation): Âm tắc chân răng /d/ bị hút về vị trí vòm mềm của âm /ɡ/ đứng sau, biến thành âm /ɡ/ (/ɡʊɡ ɡɜːl/)."
  },
  {
    id: 11,
    level: "B2",
    pillar: "Syntax (Cú pháp nâng cao)",
    question: "Câu nào sử dụng Mệnh đề phân từ (Participle Clause) để rút gọn nguyên nhân chính xác?",
    options: [
      "Having finished the dissertation, the degree was awarded to him.",
      "Having finished the dissertation, he submitted it to the committee.",
      "Finished the dissertation, the professor congratulated him.",
      "To finish the dissertation, the submission was made."
    ],
    correct: 1,
    linguisticExplanation: "Cần tránh lỗi 'Dangling Modifier' (bổ ngữ treo lơ lửng). Chủ ngữ của mệnh đề phân từ ('Having finished') phải trùng khớp với chủ ngữ chính của câu ('he')."
  },
  {
    id: 12,
    level: "B2",
    pillar: "Pragmatics (Ngữ dụng học)",
    question: "Cách diễn đạt nào thể hiện sự phản biện lịch sự (Polite Disagreement) trong môi trường chuyên nghiệp?",
    options: [
      "That is totally impossible and makes no sense.",
      "I hear what you are saying, but let us look at the alternative evidence.",
      "You do not understand the problem at all.",
      "Your proposal is entirely flawed."
    ],
    correct: 1,
    linguisticExplanation: "Ngữ dụng học chuyên nghiệp sử dụng chiến lược khẳng định giá trị đối phương ('I hear what you are saying') trước khi nhẹ nhàng chuyển hướng ('let us look at alternative evidence') để bảo toàn thể diện (Face-saving act)."
  },

  // --- C1 LEVEL ---
  {
    id: 13,
    level: "C1",
    pillar: "Advanced Syntax (Đảo ngữ)",
    question: "Chọn câu đảo ngữ nhấn mạnh (Syntactic Inversion) chính xác:",
    options: [
      "Seldom we have seen such comprehensive research.",
      "Seldom have we seen such comprehensive research.",
      "Seldom we saw such comprehensive research.",
      "Seldom did we had seen such comprehensive research."
    ],
    correct: 1,
    linguisticExplanation: "Khi phó từ mang nghĩa bán phủ định ('Seldom', 'Rarely', 'Never') được đưa lên đầu câu để tạo tiêu điểm thông tin, cấu trúc câu bắt buộc phải đảo trợ động từ lên trước chủ ngữ: Seldom + have + we + seen."
  },
  {
    id: 14,
    level: "C1",
    pillar: "Academic Lexicon (Từ vựng học thuật)",
    question: "Từ nào mang nghĩa 'nhìn nhận lại quá khứ để chiêm nghiệm'?",
    options: ["Circumspection", "Retrospection", "Introspection", "Inspection"],
    correct: 1,
    linguisticExplanation: "Phân tích hình thái: 'retro-' (về phía sau/quá khứ) + 'spect' (nhìn) + '-ion' (danh từ) = 'Retrospection' (sự hồi tưởng, nhìn lại quá khứ)."
  },
  {
    id: 15,
    level: "C1",
    pillar: "Pragmatics (Kỹ thuật Hedging)",
    question: "Trong bài báo khoa học C1/C2, câu nào thể hiện kỹ thuật Hedging chuẩn mực nhất?",
    options: [
      "This experiment proves without any doubt that our model is perfect.",
      "The results undoubtedly demonstrate that all previous theories are false.",
      "The empirical findings appear to suggest a potential correlation between the variables.",
      "Everyone knows that our hypothesis is undeniably correct."
    ],
    correct: 2,
    linguisticExplanation: "Văn phong học thuật đỉnh cao tránh khẳng định tuyệt đối 100%. Sử dụng các công cụ rào đón (hedges) như 'appear to suggest' và 'potential correlation' để giữ tính khách quan khoa học."
  },

  // --- C2 LEVEL ---
  {
    id: 16,
    level: "C2",
    pillar: "Syntax (Cleft Sentences & Focus)",
    question: "Chọn câu chẻ (Wh-cleft) làm nổi bật tầm quan trọng của ngữ âm học:",
    options: [
      "What language learners require is a systematic mastery of phonological contrasts.",
      "That language learners require is systematic mastery.",
      "Which language learners require is phonology.",
      "Whom language learners require is a linguist."
    ],
    correct: 0,
    linguisticExplanation: "Pseudo-cleft sentence bắt đầu bằng mệnh đề danh ngữ 'What...' (What learners require) + động từ to be 'is' + thành phần trọng tâm cần nhấn mạnh."
  },
  {
    id: 17,
    level: "C2",
    pillar: "Cognitive Semantics (Ngữ nghĩa học nhận thức)",
    question: "Trong thành ngữ 'to weather the storm', cơ chế nhận thức nào đang vận hành?",
    options: [
      "Conceptual Metaphor (Ẩn dụ nhận thức: Khó khăn là bão tố thời tiết)",
      "Phonological Ellipsis (Tỉnh lược âm vị)",
      "Syntactic Reduplication (Lặp lại cú pháp)",
      "Morphological Compounding (Từ ghép hình thái)"
    ],
    correct: 0,
    linguisticExplanation: "Theo lý thuyết Ẩn dụ nhận thức (George Lakoff), tâm trí con người ánh xạ trường nghĩa tự nhiên (bão tố) sang trường nghĩa trải nghiệm trừu tượng (vượt qua khủng hoảng, gian nan)."
  },
  {
    id: 18,
    level: "C2",
    pillar: "Stylistics & Register (Phong cách học)",
    question: "Cặp từ nào phản ánh đúng sự tương phản giữa từ vựng gốc Germanic (đời thường) và gốc La-tinh/Pháp (học thuật cao cấp)?",
    options: [
      "help (Germanic) vs assist (Latinate)",
      "assist (Germanic) vs help (Latinate)",
      "buy (Latinate) vs purchase (Germanic)",
      "start (Latinate) vs commence (Germanic)"
    ],
    correct: 0,
    linguisticExplanation: "Lịch sử Anh ngữ chứng kiến lớp từ gốc Anglo-Saxon/Germanic gắn liền với đời sống dân dã ngắn gọn ('help', 'buy', 'start'), trong khi lớp từ vay mượn La-tinh/Norman-French mang sắc thái bác học, trang trọng ('assist', 'purchase', 'commence')."
  }
];
