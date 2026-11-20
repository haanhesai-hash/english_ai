/**
 * Kho dữ liệu Hình thái học & Từ nguyên học (Morphology & Etymology)
 * Gốc từ Hy Lạp & La-tinh, Tiền tố, Hậu tố, Mạng lưới Collocations, Academic Word List (AWL).
 * Chú thích 100% bằng tiếng Việt kèm dịch nghĩa câu ví dụ.
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
          posVi: "Động từ",
          example: "Health officials arrived to inspect the food processing factory.",
          exampleVi: "Các thanh tra y tế đã đến để kiểm tra nhà máy chế biến thực phẩm.",
          collocation: "inspect thoroughly / closely (thanh tra kỹ lưỡng)"
        },
        {
          word: "retrospect",
          breakdown: "retro- (về phía sau) + spect (nhìn)",
          meaning: "Sự nhìn lại quá khứ, hồi tưởng",
          pos: "noun",
          posVi: "Danh từ",
          example: "In retrospect, we should have made a different decision.",
          exampleVi: "Khi nhìn lại quá khứ, đáng lẽ chúng ta nên đưa ra một quyết định khác.",
          collocation: "in retrospect (nhìn lại chuyện đã qua)"
        },
        {
          word: "perspective",
          breakdown: "per- (xuyên qua) + spect (nhìn) + -ive (tính chất)",
          meaning: "Góc nhìn, quan điểm, viễn cảnh",
          pos: "noun",
          posVi: "Danh từ",
          example: "Living abroad gives you a totally new perspective on your own culture.",
          exampleVi: "Sống ở nước ngoài mang lại cho bạn một góc nhìn hoàn toàn mới về văn hóa của chính mình.",
          collocation: "from a broader perspective (từ một góc nhìn rộng lớn hơn)"
        },
        {
          word: "circumspect",
          breakdown: "circum- (xung quanh) + spect (nhìn)",
          meaning: "Thận trọng, cẩn trọng (nhìn ngó xung quanh trước khi hành động)",
          pos: "adjective",
          posVi: "Tính từ",
          example: "The officials were very circumspect in their public statements.",
          exampleVi: "Các quan chức đã rất thận trọng trong các phát ngôn công khai của họ.",
          collocation: "circumspect approach (cách tiếp cận cẩn trọng)"
        },
        {
          word: "conspicuous",
          breakdown: "con- (tăng cường) + spic (nhìn) + -uous (đầy rẫy)",
          meaning: "Rõ ràng, dễ thấy, nổi bật đập vào mắt",
          pos: "adjective",
          posVi: "Tính từ",
          example: "The statue was placed in a conspicuous position in the town square.",
          exampleVi: "Bức tượng được đặt ở một vị trí rất dễ thấy đập vào mắt ở quảng trường thị trấn.",
          collocation: "conspicuous absence (sự vắng mặt đáng chú ý)"
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
          pos: "verb",
          posVi: "Động từ",
          example: "Linguists construct models to explain how the brain processes language.",
          exampleVi: "Các nhà ngôn ngữ học xây dựng các mô hình để giải thích cách bộ não xử lý ngôn ngữ.",
          collocation: "construct a hypothesis (xây dựng một giả thuyết)"
        },
        {
          word: "destroy / destruct",
          breakdown: "de- (xuống, đảo ngược) + struct (xây dựng)",
          meaning: "Phá hủy, hủy diệt công trình đã xây dựng",
          pos: "verb",
          posVi: "Động từ",
          example: "The hurricane had enough power to destroy entire coastal towns.",
          exampleVi: "Cơn bão có sức tàn phá đủ mạnh để phá hủy toàn bộ các thị trấn ven biển.",
          collocation: "destructive behavior (hành vi mang tính phá hoại)"
        },
        {
          word: "obstruct",
          breakdown: "ob- (chống lại, cản trở) + struct (xây dựng)",
          meaning: "Làm tắc nghẽn, cản trở (dựng rào cản ngăn lối đi)",
          pos: "verb",
          posVi: "Động từ",
          example: "Protesters tried to obstruct traffic by blocking the highway.",
          exampleVi: "Những người biểu tình đã cố gắng cản trở giao thông bằng cách chặn đường cao tốc.",
          collocation: "obstruct justice (cản trở quá trình thực thi công lý)"
        },
        {
          word: "infrastructure",
          breakdown: "infra- (bên dưới) + structure (cấu trúc)",
          meaning: "Cơ sở hạ tầng (cấu trúc nền tảng bên dưới của xã hội)",
          pos: "noun",
          posVi: "Danh từ",
          example: "The government pledged billions to modernize the national transport infrastructure.",
          exampleVi: "Chính phủ đã cam kết hàng tỷ đô la để hiện đại hóa cơ sở hạ tầng giao thông quốc gia.",
          collocation: "critical infrastructure (hạ tầng trọng yếu quốc gia)"
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
          posVi: "Động từ",
          example: "Economists failed to predict the sudden collapse of the market.",
          exampleVi: "Các nhà kinh tế học đã không thể dự đoán được sự sụp đổ bất ngờ của thị trường.",
          collocation: "accurately predict (dự đoán một cách chính xác)"
        },
        {
          word: "contradict",
          breakdown: "contra- (ngược lại) + dict (nói)",
          meaning: "Mâu thuẫn, cãi lại, phủ nhận (nói ngược lại)",
          pos: "verb",
          posVi: "Động từ",
          example: "His actions directly contradict the principles he claims to believe in.",
          exampleVi: "Hành động của anh ấy mâu thuẫn trực tiếp với những nguyên tắc mà anh ta tuyên bố tin tưởng.",
          collocation: "contradictory evidence (bằng chứng mâu thuẫn trái chiều)"
        },
        {
          word: "dictate",
          breakdown: "dict (nói) + -ate (làm cho)",
          meaning: "Đọc cho viết, ra lệnh, áp đặt",
          pos: "verb",
          posVi: "Động từ",
          example: "Circumstances will dictate our next strategic moves.",
          exampleVi: "Hoàn cảnh thực tế sẽ quyết định và áp đặt các bước đi chiến lược tiếp theo của chúng ta.",
          collocation: "dictate terms (áp đặt các điều khoản)"
        },
        {
          word: "verdict",
          breakdown: "ver- (chân lý, sự thật) + dict (tuyên bố)",
          meaning: "Bản án, lời tuyên án của bồi thẩm đoàn (lời tuyên bố chân lý)",
          pos: "noun",
          posVi: "Danh từ",
          example: "The jury reached a unanimous verdict of not guilty.",
          exampleVi: "Bồi thẩm đoàn đã đạt được một phán quyết đồng thuận là vô tội.",
          collocation: "reach a verdict (đưa ra lời tuyên án)"
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
          posVi: "Tính từ",
          example: "The museum exhibits are arranged in chronological order.",
          exampleVi: "Các hiện vật bảo tàng được sắp xếp theo đúng trình tự thời gian.",
          collocation: "chronological order (thứ tự niên đại thời gian)"
        },
        {
          word: "synchronize",
          breakdown: "syn- (cùng nhau) + chron (thời gian) + -ize (động từ hóa)",
          meaning: "Đồng bộ hóa (xảy ra cùng một thời điểm)",
          pos: "verb",
          posVi: "Động từ",
          example: "Smartphones synchronize data automatically with cloud servers.",
          exampleVi: "Điện thoại thông minh tự động đồng bộ hóa dữ liệu với máy chủ đám mây.",
          collocation: "synchronize data (đồng bộ hóa dữ liệu)"
        },
        {
          word: "chronic",
          breakdown: "chron (thời gian) + -ic (tính chất)",
          meaning: "Mãn tính, kéo dài triền miên (bệnh tật, khó khăn)",
          pos: "adjective",
          posVi: "Tính từ",
          example: "He suffers from chronic lower back pain.",
          exampleVi: "Anh ấy phải chịu đựng chứng đau thắt lưng mãn tính kéo dài dai dẳng.",
          collocation: "chronic illness (bệnh mãn tính)"
        },
        {
          word: "anachronism",
          breakdown: "ana- (lạc, ngược) + chron (thời gian) + -ism (hiện tượng)",
          meaning: "Sự lỗi thời, sự lạc hậu về niên đại trong lịch sử",
          pos: "noun",
          posVi: "Danh từ",
          example: "Having a wristwatch in a medieval film is a glaring anachronism.",
          exampleVi: "Việc xuất hiện chiếc đồng hồ đeo tay trong một bộ phim thời trung cổ là một lỗi lạc niên đại rõ rệt.",
          collocation: "historical anachronism (lỗi lạc hậu niên đại lịch sử)"
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
          meaning: "Chiết xuất, trích xuất (kéo rút ra ngoài)",
          pos: "verb",
          posVi: "Động từ",
          example: "Scientists extract DNA from cell samples for genomic sequencing.",
          exampleVi: "Các nhà khoa học chiết xuất DNA từ mẫu tế bào để giải trình tự gen.",
          collocation: "extract key information (trích xuất thông tin then chốt)"
        },
        {
          word: "abstract",
          breakdown: "ab- (xa rời) + tract (kéo)",
          meaning: "Trừu tượng (bị kéo tách rời khỏi thực tại vật chất)",
          pos: "adjective",
          posVi: "Tính từ",
          example: "Pure mathematics often deals with very abstract concepts.",
          exampleVi: "Toán học thuần túy thường làm việc với những khái niệm rất trừu tượng.",
          collocation: "abstract thinking (tư duy trừu tượng)"
        },
        {
          word: "distract",
          breakdown: "dis- (phân tán) + tract (kéo)",
          meaning: "Làm xao nhãng, phân tâm (kéo sự chú ý đi hướng khác)",
          pos: "verb",
          posVi: "Động từ",
          example: "Turn off social notifications so nothing will distract you while studying.",
          exampleVi: "Hãy tắt thông báo mạng xã hội để không có gì làm bạn phân tâm khi đang học.",
          collocation: "distract attention (làm phân tán sự chú ý)"
        },
        {
          word: "contract",
          breakdown: "con- (cùng nhau) + tract (kéo)",
          meaning: "Co lại (vật lý) / Hợp đồng (kéo các bên lại thỏa thuận)",
          pos: "noun",
          posVi: "Danh từ / Động từ",
          example: "Metals expand when heated and contract when cooled.",
          exampleVi: "Kim loại nở ra khi bị nung nóng và co lại khi bị làm nguội.",
          collocation: "sign a contract (ký kết hợp đồng)"
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
          posVi: "Động từ",
          example: "Solar panels generate clean electrical energy.",
          exampleVi: "Các tấm pin mặt trời sản sinh ra nguồn năng lượng điện sạch.",
          collocation: "generate new ideas (sáng tạo ý tưởng mới)"
        },
        {
          word: "homogeneous",
          breakdown: "homo- (cùng loại) + gen (giống loài) + -ous (đặc tính)",
          meaning: "Đồng nhất, thuần nhất về cấu tạo",
          pos: "adjective",
          posVi: "Tính từ",
          example: "The classroom was far from homogeneous, with students from 15 different nations.",
          exampleVi: "Lớp học không hề đồng nhất, với các học sinh đến từ 15 quốc gia khác nhau.",
          collocation: "homogeneous mixture (hỗn hợp đồng nhất)"
        },
        {
          word: "heterogeneous",
          breakdown: "hetero- (khác loại) + gen (giống loài) + -ous",
          meaning: "Hỗn tạp, đa dạng, dị thể",
          pos: "adjective",
          posVi: "Tính từ",
          example: "A heterogeneous population brings a rich variety of cultural traditions.",
          exampleVi: "Một cộng đồng dân cư đa dạng mang lại sự phong phú về truyền thống văn hóa.",
          collocation: "heterogeneous group (nhóm người đa dạng thành phần)"
        },
        {
          word: "indigenous",
          breakdown: "indi- (bên trong) + gen (sinh ra) + -ous",
          meaning: "Bản địa, thổ sản (sinh ra tự nhiên tại một vùng đất)",
          pos: "adjective",
          posVi: "Tính từ",
          example: "We must preserve the languages of indigenous communities.",
          exampleVi: "Chúng ta phải bảo tồn ngôn ngữ của các cộng đồng dân cư bản địa.",
          collocation: "indigenous culture (văn hóa bản địa)"
        }
      ]
    }
  ],
  affixes: {
    prefixes: [
      { prefix: "re-", meaning: "Lặp lại một lần nữa (again) hoặc lùi lại (back)", examples: ["reconstruct (tái kiến thiết)", "review (ôn tập lại)", "reverse (đảo ngược lại)"] },
      { prefix: "un- / in- / im- / il- / ir-", meaning: "Không, mang tính phủ định trái ngược (not, opposite)", examples: ["unhappy (không vui)", "invisible (vô hình)", "impossible (bất khả thi)", "illogical (phi logic)", "irregular (bất quy tắc)"] },
      { prefix: "dis-", meaning: "Tách rời, loại bỏ, trái ngược (apart, away, reverse)", examples: ["disconnect (ngắt kết nối)", "disagree (không đồng tình)", "displace (thay thế chỗ)"] },
      { prefix: "sub-", meaning: "Bên dưới, cấp độ thấp hơn (under, below)", examples: ["submarine (tàu ngầm dưới biển)", "subconscious (tiềm thức bên dưới)", "subordinate (cấp dưới)"] },
      { prefix: "inter-", meaning: "Ở giữa, qua lại lẫn nhau (between, among)", examples: ["international (quốc tế)", "interactive (tương tác qua lại)", "interconnect (kết nối liên thông)"] },
      { prefix: "trans-", meaning: "Xuyên qua, chuyển đổi (across, beyond, change)", examples: ["transport (vận chuyển qua lại)", "transform (chuyển đổi hình thái)", "translate (dịch thuật ngôn ngữ)"] },
      { prefix: "mis-", meaning: "Sai lầm, không đúng cách (wrongly, badly)", examples: ["misunderstand (hiểu lầm)", "mislead (dẫn dắt sai)", "mispronounce (phát âm sai)"] },
      { prefix: "pre-", meaning: "Trước về thời gian hoặc thứ tự (before)", examples: ["predict (nói trước / dự đoán)", "prehistoric (thời tiền sử)", "preview (xem trước)"] },
      { prefix: "post-", meaning: "Sau về thời gian (after, behind)", examples: ["postgraduate (sau đại học)", "postpone (hoãn lại sau)", "postscript (tái bút PS)"] },
      { prefix: "hyper-", meaning: "Quá mức, vượt trội thái quá (over, excessive)", examples: ["hyperactive (hiếu động quá mức)", "hypertension (cao huyết áp)", "hypersensitive (quá nhạy cảm)"] }
    ],
    suffixes: [
      { suffix: "-tion / -sion", function: "Tạo danh từ chỉ hành động hoặc trạng thái", examples: ["action (hành động)", "decision (sự quyết định)", "conclusion (kết luận)"] },
      { suffix: "-ity", function: "Tạo danh từ chỉ phẩm chất, đặc tính cốt lõi", examples: ["clarity (sự rõ ràng)", "curiosity (tính hiếu kỳ)", "validity (tính hợp lệ)"] },
      { suffix: "-ment", function: "Tạo danh từ chỉ kết quả của một hành động", examples: ["development (sự phát triển)", "government (chính phủ điều hành)", "agreement (sự thỏa thuận)"] },
      { suffix: "-able / -ible", function: "Tạo tính từ có nghĩa là 'có thể làm được'", examples: ["readable (có thể đọc được)", "flexible (linh hoạt)", "accessible (có thể tiếp cận)"] },
      { suffix: "-ize / -ise", function: "Tạo động từ mang nghĩa 'làm cho trở thành'", examples: ["modernize (hiện đại hóa)", "visualize (hình dung hóa)", "criticize (chỉ trích)"] },
      { suffix: "-ify", function: "Tạo động từ chỉ sự chuyển đổi trạng thái", examples: ["clarify (làm cho sáng tỏ)", "simplify (đơn giản hóa)", "purify (thanh lọc làm sạch)"] },
      { suffix: "-ous / -ious", function: "Tạo tính từ mang nghĩa 'tràn đầy, có nhiều'", examples: ["curious (đầy tò mò)", "dangerous (đầy nguy hiểm)", "ambitious (đầy tham vọng)"] },
      { suffix: "-ly", function: "Tạo trạng từ chỉ cách thức thực hiện hành động", examples: ["fluently (một cách lưu loát)", "precisely (một cách chính xác)", "naturally (một cách tự nhiên)"] }
    ]
  },
  collocations: [
    {
      category: "Make vs Do (Hai động từ kết hợp dễ nhầm lẫn nhất của người Việt)",
      linguisticPrinciple: "Quy luật ngôn ngữ học nhận thức: 'MAKE' thường dùng khi TẠO RA một sản phẩm mới, một kết quả trừu tượng hoặc âm thanh mới (hành động sinh sản sáng tạo). 'DO' dùng cho các công việc, nhiệm vụ, nghĩa vụ sẵn có hoặc hành động thường nhật (hành động hướng tới nhiệm vụ).",
      items: [
        { verb: "Make", phrase: "make a decision", meaning: "đưa ra quyết định", note: "Tạo ra một kết luận mới chưa từng có trước đó" },
        { verb: "Make", phrase: "make a mistake", meaning: "phạm sai lầm", note: "Gây ra một lỗi lầm mới" },
        { verb: "Make", phrase: "make an effort", meaning: "nỗ lực, cố gắng", note: "Sản sinh năng lượng để phấn đấu" },
        { verb: "Make", phrase: "make progress", meaning: "tiến bộ", note: "Tạo ra sự cải thiện tích cực" },
        { verb: "Do", phrase: "do homework / research", meaning: "làm bài tập / nghiên cứu", note: "Nhiệm vụ, bài vở đã được giao sẵn" },
        { verb: "Do", phrase: "do business", meaning: "kinh doanh, làm ăn", note: "Hoạt động duy trì giao dịch thương mại" },
        { verb: "Do", phrase: "do someone a favor", meaning: "giúp đỡ ai đó một việc", note: "Thực hiện một hành vi hỗ trợ" },
        { verb: "Do", phrase: "do harm / good", meaning: "gây hại / mang lại điều tốt", note: "Tác động của hành động thực thi" }
      ]
    },
    {
      category: "Strong vs Heavy (Tính từ kết hợp danh từ chuẩn bản ngữ)",
      linguisticPrinciple: "Ngữ nghĩa học nhận thức: 'Heavy' kết hợp với mật độ, khối lượng dồn dập (mưa lớn, giao thông ùn ứ, gánh nặng). 'Strong' kết hợp với cường độ lực, hương vị đậm hoặc niềm tin mãnh liệt.",
      items: [
        { phrase: "heavy rain", wrong: "strong rain", meaning: "mưa to dồn dập", note: "Mật độ hạt mưa dày đặc rơi xuống" },
        { phrase: "strong coffee", wrong: "heavy coffee", meaning: "cà phê đậm vị / đặc", note: "Cường độ hương vị và hàm lượng cafein cao" },
        { phrase: "heavy traffic", wrong: "crowded traffic", meaning: "giao thông ùn tắc nghiêm trọng", note: "Mật độ phương tiện trên đường quá dày đặc" },
        { phrase: "strong belief", wrong: "hard belief", meaning: "niềm tin vững chắc", note: "Cường độ tâm lý và lòng tin kiên định" },
        { phrase: "heavy smoker", wrong: "hard smoker", meaning: "người nghiện thuốc lá nặng", note: "Mật độ tiêu thụ thuốc lá trong ngày lớn" },
        { phrase: "strong evidence", wrong: "powerful evidence", meaning: "bằng chứng thuyết phục vững vàng", note: "Độ vững chắc của lập luận logic" }
      ]
    }
  ],
  awl: [
    {
      word: "analyze",
      pos: "verb",
      posVi: "Động từ",
      ipa: "/ˈæn.əl.aɪz/",
      meaning: "Phân tích, chia tách cấu trúc thành từng thành phần để mổ xẻ",
      family: "analysis (Danh từ: bài phân tích), analyst (Danh từ: chuyên gia phân tích), analytical (Tính từ: có tính phân tích)",
      collocations: ["analyze data (phân tích dữ liệu)", "analyze results (phân tích kết quả)", "analyze critically (phân tích phản biện)"],
      example: "Researchers need to analyze the linguistic corpus to detect patterns of sound changes.",
      exampleVi: "Các nhà nghiên cứu cần phân tích kho ngữ liệu ngôn ngữ học để phát hiện các quy luật biến đổi âm thanh."
    },
    {
      word: "concept",
      pos: "noun",
      posVi: "Danh từ",
      ipa: "/ˈkɒn.sept/",
      meaning: "Khái niệm, ý niệm trừu tượng trong nhận thức của bộ não",
      family: "conceptualize (Động từ: khái niệm hóa), conceptual (Tính từ: thuộc về nhận niệm)",
      collocations: ["fundamental concept (khái niệm nền tảng)", "key concept (ý niệm then chốt)", "grasp a concept (nắm bắt khái niệm)"],
      example: "Cognitive grammar treats tense not as a mathematical formula, but as a mental concept.",
      exampleVi: "Ngữ pháp nhận thức xem thì không phải là một công thức toán học khô khan, mà là một ý niệm tư duy của tâm trí."
    },
    {
      word: "derive",
      pos: "verb",
      posVi: "Động từ",
      ipa: "/dɪˈraɪv/",
      meaning: "Bắt nguồn từ, rút ra từ một nguồn gốc",
      family: "derivation (Danh từ: sự phái sinh từ), derivative (Tính từ: phái sinh)",
      collocations: ["derive from (bắt nguồn từ)", "derive satisfaction (tìm thấy sự thỏa mãn)", "derive meaning (suy ra ý nghĩa)"],
      example: "Thousands of English academic words derive directly from Latin and Greek roots.",
      exampleVi: "Hàng ngàn từ vựng học thuật tiếng Anh bắt nguồn trực tiếp từ các gốc từ La-tinh và Hy Lạp."
    },
    {
      word: "establish",
      pos: "verb",
      posVi: "Động từ",
      ipa: "/ɪˈstæb.lɪʃ/",
      meaning: "Thiết lập, khẳng định vị thế, chứng minh rõ ràng một sự thật",
      family: "establishment (Danh từ: sự thành lập), established (Tính từ: đã được khẳng định)",
      collocations: ["establish a link (thiết lập mối liên hệ)", "establish rapport (xây dựng mối quan hệ tin cậy)", "firmly established (được khẳng định vững chắc)"],
      example: "Linguists have established that babbling in infants follows universal phonetic stages.",
      exampleVi: "Các nhà ngôn ngữ học đã chứng minh rõ ràng rằng tiếng bập bẹ ở trẻ sơ sinh tuân theo các giai đoạn âm vị học phổ quát."
    },
    {
      word: "hypothesis",
      pos: "noun",
      posVi: "Danh từ",
      ipa: "/haɪˈpɒθ.ə.sɪs/",
      meaning: "Giả thuyết khoa học cần được kiểm chứng bằng thực nghiệm",
      family: "hypothesize (Động từ: đưa ra giả thuyết), hypothetical (Tính từ: mang tính giả định)",
      collocations: ["formulate a hypothesis (xây dựng giả thuyết)", "test a hypothesis (kiểm chứng giả thuyết)", "confirm a hypothesis (xác nhận giả thuyết)"],
      example: "Krashen's input hypothesis suggests that language is acquired through comprehensible input.",
      exampleVi: "Giả thuyết đầu vào của Krashen chỉ ra rằng ngôn ngữ được thụ đắc hiệu quả nhất thông qua lượng đầu vào dễ hiểu."
    },
    {
      word: "significant",
      pos: "adjective",
      posVi: "Tính từ",
      ipa: "/sɪɡˈnɪf.ɪ.kənt/",
      meaning: "Có ý nghĩa quan trọng, đáng kể về số lượng hoặc chất lượng",
      family: "significance (Danh từ: tầm quan trọng), significantly (Trạng từ: một cách đáng kể), signify (Động từ: biểu thị)",
      collocations: ["statistically significant (có ý nghĩa thống kê rõ rệt)", "significant difference (sự khác biệt đáng kể)", "significant factor (yếu tố trọng yếu)"],
      example: "There is a significant correlation between phonological awareness and reading fluency.",
      exampleVi: "Có một mối tương quan có ý nghĩa thống kê rõ rệt giữa nhận thức âm vị học và khả năng đọc hiểu lưu loát."
    }
  ]
};
