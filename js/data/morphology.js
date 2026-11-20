/**
 * Kho dữ liệu Hình thái học & Từ nguyên học (Morphology & Etymology)
 * Gốc từ Hy Lạp & La-tinh, Tiền tố, Hậu tố, Mạng lưới Collocations, Academic Word List (AWL).
 */

export const MORPHOLOGY_DATA = {
  roots: [
    {
      root: "spect / spec / spic",
      origin: "La-tinh (specere)",
      meaning: "Nhìn, xem, quan sát (to look, to see)",
      explanation: "Gốc từ mô tả hành vi thị giác hoặc chiêm nghiệm tư duy. Nắm được gốc từ này giúp mở khóa hơn 30 từ vựng học thuật quan trọng.",
      derivations: [
        {
          word: "inspect",
          breakdown: "in- (vào trong) + spect (nhìn)",
          meaning: "Thanh tra, kiểm tra kỹ lưỡng (nhìn sâu vào bên trong)",
          pos: "verb",
          example: "Health officials arrived to inspect the food processing factory.",
          collocation: "inspect thoroughly / closely"
        },
        {
          word: "retrospect",
          breakdown: "retro- (về phía sau) + spect (nhìn)",
          meaning: "Sự nhìn lại quá khứ, hồi tưởng",
          pos: "noun",
          example: "In retrospect, we should have made a different decision.",
          collocation: "in retrospect"
        },
        {
          word: "perspective",
          breakdown: "per- (xuyên qua) + spect (nhìn) + -ive (tính chất)",
          meaning: "Góc nhìn, quan điểm, viễn cảnh",
          pos: "noun",
          example: "Living abroad gives you a totally new perspective on your own culture.",
          collocation: "from a broader perspective / gain perspective"
        },
        {
          word: "circumspect",
          breakdown: "circum- (xung quanh) + spect (nhìn)",
          meaning: "Thận trọng, cẩn trọng (nhìn ngó xung quanh trước khi hành động)",
          pos: "adjective",
          example: "The officials were very circumspect in their public statements.",
          collocation: "circumspect approach / remain circumspect"
        },
        {
          word: "conspicuous",
          breakdown: "con- (tăng cường) + spic (nhìn) + -uous (đầy rẫy)",
          meaning: "Rõ ràng, dễ thấy, nổi bật đập vào mắt",
          pos: "adjective",
          example: "The statue was placed in a conspicuous position in the town square.",
          collocation: "conspicuous absence / conspicuous consumption"
        }
      ]
    },
    {
      root: "struct / stru",
      origin: "La-tinh (struere)",
      meaning: "Xây dựng, kiến thiết, sắp đặt (to build, to arrange)",
      explanation: "Gốc từ cốt lõi trong ngôn ngữ học, kiến trúc, triết học và kỹ thuật.",
      derivations: [
        {
          word: "construct",
          breakdown: "con- (cùng nhau) + struct (xây dựng)",
          meaning: "Xây dựng, cấu thành một ý niệm hay công trình",
          pos: "verb / noun",
          example: "Linguists construct models to explain how the brain processes language.",
          collocation: "construct a hypothesis / theoretical construct"
        },
        {
          word: "destruct / destroy",
          breakdown: "de- (xuống, đảo ngược) + struct (xây dựng)",
          meaning: "Phá hủy, hủy diệt công trình đã xây dựng",
          pos: "verb",
          example: "The hurricane had enough power to destroy entire coastal towns.",
          collocation: "destructive behavior / mutually assured destruction"
        },
        {
          word: "obstruct",
          breakdown: "ob- (chống lại, cản trở) + struct (xây dựng)",
          meaning: "Làm tắc nghẽn, cản trở (dựng rào cản ngăn lối đi)",
          pos: "verb",
          example: "Protesters tried to obstruct traffic by blocking the highway.",
          collocation: "obstruct justice / obstruct blood flow"
        },
        {
          word: "infrastructure",
          breakdown: "infra- (bên dưới) + structure (cấu trúc)",
          meaning: "Cơ sở hạ tầng (cấu trúc nền tảng bên dưới của xã hội)",
          pos: "noun",
          example: "The government pledged billions to modernize the national transport infrastructure.",
          collocation: "critical infrastructure / transport infrastructure"
        }
      ]
    },
    {
      root: "dict / dic",
      origin: "La-tinh (dicere)",
      meaning: "Nói, tuyên bố, khẳng định (to say, to speak)",
      explanation: "Gốc của các từ vựng chỉ ngôn từ, phán quyết pháp lý và quyền lực phát ngôn.",
      derivations: [
        {
          word: "predict",
          breakdown: "pre- (trước) + dict (nói)",
          meaning: "Dự đoán, tiên tri (nói trước điều gì sẽ xảy ra)",
          pos: "verb",
          example: "Economists failed to predict the sudden collapse of the market.",
          collocation: "predict future trends / accurately predict"
        },
        {
          word: "contradict",
          breakdown: "contra- (ngược lại) + dict (nói)",
          meaning: "Mâu thuẫn, cãi lại, phủ nhận (nói ngược lại)",
          pos: "verb",
          example: "His actions directly contradict the principles he claims to believe in.",
          collocation: "contradict oneself / contradictory evidence"
        },
        {
          word: "dictate",
          breakdown: "dict (nói) + -ate (làm cho)",
          meaning: "Đọc cho viết, ra lệnh, áp đặt",
          pos: "verb",
          example: "Circumstances will dictate our next strategic moves.",
          collocation: "dictate terms / dictate the pace"
        },
        {
          word: "verdict",
          breakdown: "ver- (chân lý, sự thật) + dict (tuyên bố)",
          meaning: "Bản án, lời tuyên án của bồi thẩm đoàn (lời nói chân lý)",
          pos: "noun",
          example: "The jury reached a unanimous verdict of not guilty.",
          collocation: "reach a verdict / deliver a verdict"
        }
      ]
    },
    {
      root: "chron",
      origin: "Hy Lạp (khronos)",
      meaning: "Thời gian (time)",
      explanation: "Gốc từ Hy Lạp xuất hiện phổ biến trong lịch sử, y khoa, công nghệ và khoa học xã hội.",
      derivations: [
        {
          word: "chronological",
          breakdown: "chron (thời gian) + logy (nghiên cứu) + -ical (thuộc về)",
          meaning: "Theo trình tự thời gian từ trước đến sau",
          pos: "adjective",
          example: "The museum exhibits are arranged in chronological order.",
          collocation: "chronological order / chronological sequence"
        },
        {
          word: "synchronize",
          breakdown: "syn- (cùng nhau) + chron (thời gian) + -ize (động từ hóa)",
          meaning: "Đồng bộ hóa (xảy ra cùng một thời điểm)",
          pos: "verb",
          example: "Smartphones synchronize data automatically with cloud servers.",
          collocation: "synchronize watches / synchronized swimming"
        },
        {
          word: "chronic",
          breakdown: "chron (thời gian) + -ic (tính chất)",
          meaning: "Mãn tính, kéo dài triền miên (bệnh tật, khó khăn)",
          pos: "adjective",
          example: "He suffers from chronic lower back pain.",
          collocation: "chronic illness / chronic fatigue"
        },
        {
          word: "anachronism",
          breakdown: "ana- (lạc, ngược) + chron (thời gian) + -ism (hiện tượng)",
          meaning: "Sự lỗi thời, sự lạc hậu về niên đại trong lịch sử",
          pos: "noun",
          example: "Having a wristwatch in a medieval film is a glaring anachronism.",
          collocation: "glaring anachronism / historical anachronism"
        }
      ]
    },
    {
      root: "tract",
      origin: "La-tinh (trahere)",
      meaning: "Kéo, lôi, rút ra (to pull, to drag, to draw)",
      explanation: "Gốc từ diễn tả lực hút, sự kéo về mặt vật lý lẫn tư duy trừu tượng.",
      derivations: [
        {
          word: "extract",
          breakdown: "ex- (ra ngoài) + tract (kéo)",
          meaning: "Chiết xuất, trích xuất (kéo ra ngoài)",
          pos: "verb / noun",
          example: "Scientists extract DNA from cell samples for genomic sequencing.",
          collocation: "extract essential oils / extract key points"
        },
        {
          word: "abstract",
          breakdown: "ab- (xa rời) + tract (kéo)",
          meaning: "Trừu tượng (bị kéo tách rời khỏi thực tại vật chất)",
          pos: "adjective / noun",
          example: "Pure mathematics often deals with very abstract concepts.",
          collocation: "abstract thought / abstract art"
        },
        {
          word: "distract",
          breakdown: "dis- (phân tán) + tract (kéo)",
          meaning: "Làm xao nhãng, phân tâm (kéo sự chú ý đi hướng khác)",
          pos: "verb",
          example: "Turn off social notifications so nothing will distract you while studying.",
          collocation: "distract attention / easily distracted"
        },
        {
          word: "contract",
          breakdown: "con- (cùng nhau) + tract (kéo)",
          meaning: "Co lại (vật lý) / Hợp đồng (kéo các bên lại thỏa thuận)",
          pos: "noun / verb",
          example: "Metals expand when heated and contract when cooled.",
          collocation: "sign a contract / contract a disease"
        }
      ]
    },
    {
      root: "gen",
      origin: "La-tinh / Hy Lạp (genus / genesis)",
      meaning: "Sinh ra, khởi nguồn, giống loài (birth, produce, kind)",
      explanation: "Gốc từ nền tảng của sinh học, di truyền, xã hội học và sáng tạo.",
      derivations: [
        {
          word: "generate",
          breakdown: "gen (sinh ra) + -ate (làm cho)",
          meaning: "Tạo ra, phát sinh (năng lượng, ý tưởng, doanh thu)",
          pos: "verb",
          example: "Solar panels generate clean electrical energy.",
          collocation: "generate revenue / generate electricity"
        },
        {
          word: "homogeneous",
          breakdown: "homo- (cùng loại) + gen (giống loài) + -ous (đặc tính)",
          meaning: "Đồng nhất, thuần nhất về cấu tạo",
          pos: "adjective",
          example: "The classroom was far from homogeneous, with students from 15 different nations.",
          collocation: "homogeneous society / homogeneous mixture"
        },
        {
          word: "heterogeneous",
          breakdown: "hetero- (khác loại) + gen (giống loài) + -ous",
          meaning: "Hỗn tạp, đa dạng, dị thể",
          pos: "adjective",
          example: "A heterogeneous population brings a rich variety of cultural traditions.",
          collocation: "heterogeneous sample / heterogeneous group"
        },
        {
          word: "indigenous",
          breakdown: "indi- (bên trong) + gen (sinh ra) + -ous",
          meaning: "Bản địa, thổ sản (sinh ra tự nhiên tại một vùng đất)",
          pos: "adjective",
          example: "We must preserve the languages of indigenous communities.",
          collocation: "indigenous people / indigenous species"
        }
      ]
    }
  ],
  affixes: {
    prefixes: [
      { prefix: "re-", meaning: "Lại một lần nữa (again) hoặc lùi lại (back)", examples: ["reconstruct", "review", "reverse"] },
      { prefix: "un- / in- / im- / il- / ir-", meaning: "Không, phủ định (not, opposite of)", examples: ["unhappy", "invisible", "impossible", "illogical", "irregular"] },
      { prefix: "dis-", meaning: "Tách rời, loại bỏ, trái ngược (apart, away, reverse)", examples: ["disconnect", "disagree", "displace"] },
      { prefix: "sub-", meaning: "Bên dưới, cấp thấp hơn (under, below)", examples: ["submarine", "subordinate", "subconscious"] },
      { prefix: "inter-", meaning: "Ở giữa, qua lại lẫn nhau (between, among)", examples: ["international", "interactive", "interconnect"] },
      { prefix: "trans-", meaning: "Xuyên qua, chuyển đổi (across, beyond, change)", examples: ["transport", "transform", "translate"] },
      { prefix: "mis-", meaning: "Sai lầm, không đúng (wrongly, badly)", examples: ["misunderstand", "mislead", "mispronounce"] },
      { prefix: "pre-", meaning: "Trước về thời gian hoặc thứ tự (before)", examples: ["predict", "prehistoric", "preview"] },
      { prefix: "post-", meaning: "Sau về thời gian (after, behind)", examples: ["postgraduate", "postpone", "postscript"] },
      { prefix: "hyper-", meaning: "Quá mức, vượt trội (over, excessive)", examples: ["hyperactive", "hypertension", "hypersensitive"] }
    ],
    suffixes: [
      { suffix: "-tion / -sion", function: "Tạo danh từ hành động / trạng thái (Action/State noun)", examples: ["action", "decision", "conclusion"] },
      { suffix: "-ity", function: "Tạo danh từ phẩm chất / đặc tính (Quality noun)", examples: ["clarity", "curiosity", "validity"] },
      { suffix: "-ment", function: "Tạo danh từ kết quả hành động (Result noun)", examples: ["development", "government", "agreement"] },
      { suffix: "-able / -ible", function: "Tạo tính từ 'có thể làm được' (Capable of being)", examples: ["readable", "flexible", "accessible"] },
      { suffix: "-ize / -ise", function: "Tạo động từ 'làm cho trở thành' (To make, cause to be)", examples: ["modernize", "visualize", "criticize"] },
      { suffix: "-ify", function: "Tạo động từ chuyển đổi trạng thái (To make or become)", examples: ["clarify", "simplify", "purify"] },
      { suffix: "-ous / -ious", function: "Tạo tính từ 'có nhiều, tràn đầy' (Full of)", examples: ["curious", "dangerous", "ambitious"] },
      { suffix: "-ly", function: "Tạo trạng từ chỉ cách thức (In a manner of)", examples: ["fluently", "precisely", "naturally"] }
    ]
  },
  collocations: [
    {
      category: "Make vs Do (Hai động từ dễ nhầm lẫn nhất)",
      linguisticPrinciple: "Quy luật ngôn ngữ học: 'MAKE' thường dùng khi TẠO RA một sản phẩm mới, một kết quả trừu tượng hoặc âm thanh (creative/generative action). 'DO' dùng cho các công việc, nghĩa vụ, hành động thường nhật hoặc hành động chung chung (routine/task-oriented action).",
      items: [
        { verb: "Make", phrase: "make a decision", meaning: "đưa ra quyết định", note: "Tạo ra một kết luận mới" },
        { verb: "Make", phrase: "make a mistake", meaning: "phạm sai lầm", note: "Gây ra lỗi" },
        { verb: "Make", phrase: "make an effort", meaning: "nỗ lực, cố gắng", note: "Sản sinh năng lượng cố gắng" },
        { verb: "Make", phrase: "make progress", meaning: "tiến bộ", note: "Tạo ra sự cải thiện" },
        { verb: "Do", phrase: "do homework / research", meaning: "làm bài tập / nghiên cứu", note: "Nhiệm vụ, công việc sẵn có" },
        { verb: "Do", phrase: "do business", meaning: "kinh doanh, làm ăn", note: "Hoạt động duy trì tương tác" },
        { verb: "Do", phrase: "do someone a favor", meaning: "giúp đỡ ai đó một việc", note: "Thực hiện hành động" },
        { verb: "Do", phrase: "do harm / good", meaning: "gây hại / mang lại điều tốt", note: "Tác động của hành động" }
      ]
    },
    {
      category: "Strong vs Heavy (Tính từ kết hợp danh từ)",
      linguisticPrinciple: "Ngữ nghĩa học nhận thức (Cognitive Semantics): 'Heavy' kết hợp với mật độ, khối lượng dồn dập (mưa, giao thông, gánh nặng). 'Strong' kết hợp với cường độ lực, hương vị hoặc niềm tin.",
      items: [
        { phrase: "heavy rain", wrong: "strong rain", meaning: "mưa to dồn dập", note: "Mật độ hạt mưa dày đặc" },
        { phrase: "strong coffee", wrong: "heavy coffee", meaning: "cà phê đậm vị/đặc", note: "Cường độ vị giác/cafein cao" },
        { phrase: "heavy traffic", wrong: "crowded traffic", meaning: "giao thông ùn tắc nghiêm trọng", note: "Mật độ phương tiện dày" },
        { phrase: "strong belief", wrong: "hard belief", meaning: "niềm tin vững chắc", note: "Cường độ tâm lý mạnh" },
        { phrase: "heavy smoker", wrong: "hard smoker", meaning: "người nghiện thuốc lá nặng", note: "Mật độ tiêu thụ cao" },
        { phrase: "strong evidence", wrong: "powerful evidence", meaning: "bằng chứng thuyết phục vững vàng", note: "Độ vững chắc của lập luận" }
      ]
    }
  ],
  awl: [
    {
      word: "analyze",
      pos: "verb",
      ipa: "/ˈæn.əl.aɪz/",
      meaning: "Phân tích, chia tách cấu trúc thành từng thành phần để mổ xẻ",
      family: "analysis (n), analyst (n), analytical (adj), analytically (adv)",
      collocations: ["analyze data", "analyze results", "analyze critically"],
      example: "Researchers need to analyze the linguistic corpus to detect patterns of sound changes."
    },
    {
      word: "concept",
      pos: "noun",
      ipa: "/ˈkɒn.sept/",
      meaning: "Khái niệm, ý niệm trừu tượng trong nhận thức",
      family: "conceptualize (v), conceptual (adj), conceptually (adv)",
      collocations: ["fundamental concept", "key concept", "grasp a concept"],
      example: "Cognitive grammar treats tense not as a mathematical formula, but as a mental concept."
    },
    {
      word: "derive",
      pos: "verb",
      ipa: "/dɪˈraɪv/",
      meaning: "Bắt nguồn từ, rút ra từ một nguồn gốc",
      family: "derivation (n), derivative (adj/n)",
      collocations: ["derive from", "derive satisfaction", "derive meaning"],
      example: "Thousands of English academic words derive directly from Latin and Greek roots."
    },
    {
      word: "establish",
      pos: "verb",
      ipa: "/ɪˈstæb.lɪʃ/",
      meaning: "Thiết lập, khẳng định vị thế, chứng minh rõ ràng",
      family: "establishment (n), established (adj)",
      collocations: ["establish a link", "establish rapport", "firmly established"],
      example: "Linguists have established that babbling in infants follows universal phonetic stages."
    },
    {
      word: "hypothesis",
      pos: "noun",
      ipa: "/haɪˈpɒθ.ə.sɪs/",
      meaning: "Giả thuyết khoa học cần được kiểm chứng",
      family: "hypothesize (v), hypothetical (adj), hypothetically (adv)",
      collocations: ["formulate a hypothesis", "test a hypothesis", "confirm a hypothesis"],
      example: "Krashen's input hypothesis suggests that language is acquired through comprehensible input."
    },
    {
      word: "significant",
      pos: "adjective",
      ipa: "/sɪɡˈnɪf.ɪ.kənt/",
      meaning: "Có ý nghĩa quan trọng, đáng kể về số lượng hoặc chất lượng",
      family: "significance (n), significantly (adv), signify (v)",
      collocations: ["statistically significant", "significant difference", "significant factor"],
      example: "There is a significant correlation between phonological awareness and reading fluency."
    }
  ]
};
