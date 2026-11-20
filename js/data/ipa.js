/**
 * Kho dữ liệu Ngữ âm học ứng dụng (Applied Phonetics & Phonology)
 * 44 Âm vị IPA, Vị trí cấu âm, Cặp âm tối thiểu (Minimal Pairs), Nối âm & Biến âm.
 * Chú thích 100% bằng tiếng Việt dành riêng cho người Việt Nam tự học tiếng Anh.
 */

export const IPA_DATA = {
  vowels: {
    monophthongs: [
      {
        symbol: "iː",
        name: "Nguyên âm dài /iː/",
        type: "Nguyên âm đơn dài (Đầu lưỡi nâng cao hướng về phía trước, khóe miệng mở căng mỉm cười)",
        examples: ["sheep", "feel", "machine", "meet"],
        mouth: "Khóe miệng mở rộng sang hai bên như đang mỉm cười tươi. Đầu lưỡi đưa lên cao sát nướu răng trên. Kéo dài luồng hơi đều đặn, dây thanh quản rung.",
        vnMistake: "Người Việt thường phát âm ngắn cụt giống âm 'i' tiếng Việt, khiến người nghe nhầm thành âm /ɪ/ (ví dụ nhầm 'sheep' thành 'ship').",
        sampleWord: "sheep",
        phonetic: "/ʃiːp/"
      },
      {
        symbol: "ɪ",
        name: "Nguyên âm ngắn /ɪ/",
        type: "Nguyên âm đơn ngắn (Cơ miệng thả lỏng, vị trí lưỡi thấp hơn /iː/, phát âm dứt khoát)",
        examples: ["ship", "fit", "give", "sit"],
        mouth: "Khóe miệng hơi mở tự nhiên, các cơ môi hoàn toàn thả lỏng (không căng mỉm cười như /iː/). Lưỡi hơi thấp hơn /iː/. Âm phát ra dứt khoát, bật hơi rất ngắn.",
        vnMistake: "Hay nhầm với âm /iː/ (do kéo dài quá) hoặc phát âm lửng lơ biến thành âm 'ê'/'i' tiếng Việt.",
        sampleWord: "ship",
        phonetic: "/ʃɪp/"
      },
      {
        symbol: "ʊ",
        name: "Nguyên âm ngắn /ʊ/",
        type: "Nguyên âm đơn ngắn (Môi hơi tròn nhẹ, cơ miệng thư giãn, cuống lưỡi nâng nhẹ)",
        examples: ["good", "book", "foot", "put"],
        mouth: "Hai môi hơi tròn nhẹ nhưng thả lỏng, không chu căng. Lưỡi hơi nâng về phía sau khoang miệng. Âm phát ra rất nhanh, dứt khoát và trầm ấm.",
        vnMistake: "Hay chu môi quá chặt và đọc nặng thành âm 'u' tiếng Việt (khiến nhầm thành âm dài /uː/).",
        sampleWord: "good",
        phonetic: "/ɡʊd/"
      },
      {
        symbol: "uː",
        name: "Nguyên âm dài /uː/",
        type: "Nguyên âm đơn dài (Môi chu tròn căng hướng ra ngoài, cuống lưỡi co về sau)",
        examples: ["shoot", "blue", "food", "moon"],
        mouth: "Hai môi chu tròn hẳn ra phía trước tạo thành một vòng tròn nhỏ hẹp. Thân lưỡi co sâu về phía vòm họng mềm, kéo dài âm thanh trầm đều.",
        vnMistake: "Không chu môi đủ độ hoặc phát âm quá ngắn cụt làm mất tính chất nguyên âm dài.",
        sampleWord: "shoot",
        phonetic: "/ʃuːt/"
      },
      {
        symbol: "e",
        name: "Nguyên âm ngắn /e/",
        type: "Nguyên âm đơn ngắn (Miệng mở tự nhiên rộng hơn /ɪ/, lưỡi ở vị trí trung bình)",
        examples: ["bed", "men", "send", "head"],
        mouth: "Khẩu hình mở tự nhiên, rộng hơn âm /ɪ/ nhưng hẹp hơn âm /æ/. Thân lưỡi đặt ở vị trí trung bình trong khoang miệng, phát âm dứt khoát.",
        vnMistake: "Hay phát âm thành âm 'e' bẹt tiếng Việt hoặc mở hàm quá rộng biến thành âm /æ/.",
        sampleWord: "bed",
        phonetic: "/bed/"
      },
      {
        symbol: "ə",
        name: "Âm vị trung tính Schwa /ə/",
        type: "Nguyên âm trung tính tối thượng (Toàn bộ cơ miệng thả lỏng hoàn toàn, âm cực ngắn)",
        examples: ["teacher", "ago", "banana", "support"],
        mouth: "Đây là âm vị xuất hiện nhiều nhất trong tiếng Anh nói tự nhiên! Toàn bộ môi, hàm và lưỡi đều ở trạng thái nghỉ ngơi thả lỏng tuyệt đối. Bật âm siêu nhẹ và siêu ngắn.",
        vnMistake: "Người Việt thường cố đọc rõ từng âm tiết bị nhược hóa hoặc đọc thành âm 'ơ' nặng có dấu trong tiếng Việt.",
        sampleWord: "teacher",
        phonetic: "/ˈtiː.tʃər/"
      },
      {
        symbol: "ɜː",
        name: "Nguyên âm dài /ɜː/",
        type: "Nguyên âm đơn dài (Lưỡi đặt giữa khoang miệng, kéo dài hơi sâu từ đáy họng)",
        examples: ["bird", "girl", "nurse", "word"],
        mouth: "Môi mở vừa phải, lưỡi đặt ở trung tâm khoang miệng, kéo dài luồng hơi trầm từ đáy họng (trong tiếng Anh - Mỹ thường cong nhẹ đầu lưỡi để tạo âm /r/).",
        vnMistake: "Đọc thành âm 'ơ' ngắn cụt hoặc đọc lệch thành 'oa' do khẩu hình miệng không giữ cố định.",
        sampleWord: "bird",
        phonetic: "/bɜːd/"
      },
      {
        symbol: "ɔː",
        name: "Nguyên âm dài /ɔː/",
        type: "Nguyên âm đơn dài (Môi tròn hướng ra ngoài, cuống lưỡi hạ thấp về sau)",
        examples: ["door", "saw", "call", "walk"],
        mouth: "Hai môi tròn, hướng nhẹ ra ngoài. Cuống lưỡi hạ thấp và thụt sâu về phía sau khoang họng. Kéo dài âm thanh trầm và vang.",
        vnMistake: "Hay đọc thành âm 'o' ngắn nông ở đầu môi trong tiếng Việt.",
        sampleWord: "door",
        phonetic: "/dɔːr/"
      },
      {
        symbol: "æ",
        name: "Nguyên âm bẹt mở rộng /æ/",
        type: "Nguyên âm đơn mở trước (Hạ quai hàm dưới sâu tối đa, miệng mở rộng 4 phía)",
        examples: ["cat", "bad", "apple", "man"],
        mouth: "Hạ quai hàm dưới xuống rất sâu, miệng mở rộng hết cỡ sang cả chiều dọc và chiều ngang. Đầu lưỡi chạm nhẹ chân răng hàm dưới.",
        vnMistake: "Chỉ mở miệng ngang đọc thành 'e' (khiến 'bad' bị nghe thành 'bed', 'man' thành 'men') hoặc mở nửa vời thành 'a'.",
        sampleWord: "cat",
        phonetic: "/kæt/"
      },
      {
        symbol: "ʌ",
        name: "Nguyên âm ngắn /ʌ/",
        type: "Nguyên âm đơn ngắn (Miệng mở vừa, cơ môi thả lỏng không tròn, bật dứt khoát)",
        examples: ["cup", "sun", "love", "blood"],
        mouth: "Khẩu hình mở hơi rộng hơn âm trung tính /ə/, hai môi thư giãn không chu tròn. Thân lưỡi hơi lùi về phía sau, phát âm dứt khoát dồn dập.",
        vnMistake: "Đọc thành âm 'á' tiếng Việt có thanh sắc hoặc đọc quá nặng như âm 'a'.",
        sampleWord: "cup",
        phonetic: "/kʌp/"
      },
      {
        symbol: "ɑː",
        name: "Nguyên âm dài /ɑː/",
        type: "Nguyên âm đơn dài (Miệng mở sâu theo chiều dọc, cuống họng mở rộng)",
        examples: ["car", "father", "heart", "hard"],
        mouth: "Miệng mở rộng sâu theo chiều dọc giống như khi bác sĩ yêu cầu mở họng nói 'Aaa'. Lưỡi hạ thấp tối đa sát đáy miệng, luồng hơi sâu từ lồng ngực.",
        vnMistake: "Phát âm quá nông ở đầu môi thành âm 'a' ngắn tiếng Việt.",
        sampleWord: "car",
        phonetic: "/kɑːr/"
      },
      {
        symbol: "ɒ",
        name: "Nguyên âm ngắn /ɒ/",
        type: "Nguyên âm đơn ngắn (Môi hơi tròn nhẹ, hàm hạ thấp, phát âm dứt khoát)",
        examples: ["not", "hot", "clock", "box"],
        mouth: "Hai môi hơi tròn, hàm dưới hạ thấp, phát âm dứt khoát ngắn gọn (Đặc trưng rõ rệt của giọng Anh - Anh RP; trong giọng Mỹ thường hòa với /ɑː/).",
        vnMistake: "Kéo dài âm quá lâu hoặc chu môi quá mức biến thành âm /ɔː/.",
        sampleWord: "hot",
        phonetic: "/hɒt/"
      }
    ],
    diphthongs: [
      {
        symbol: "eɪ",
        name: "Nguyên âm đôi /eɪ/",
        examples: ["face", "day", "make", "pain"],
        mouth: "Bắt đầu từ âm /e/ mở vừa, sau đó trượt mượt mà lên âm /ɪ/ với khóe miệng hơi khép lại mỉm cười nhẹ.",
        sampleWord: "face",
        phonetic: "/feɪs/"
      },
      {
        symbol: "aɪ",
        name: "Nguyên âm đôi /aɪ/",
        examples: ["fly", "time", "high", "buy"],
        mouth: "Bắt đầu từ âm mở rộng /a/, sau đó di chuyển nâng dần hàm dưới lên âm /ɪ/ liền mạch.",
        sampleWord: "fly",
        phonetic: "/flaɪ/"
      },
      {
        symbol: "ɔɪ",
        name: "Nguyên âm đôi /ɔɪ/",
        examples: ["boy", "voice", "coin", "enjoy"],
        mouth: "Bắt đầu từ âm tròn môi /ɔː/, sau đó nhả môi trượt lướt mượt mà lên âm /ɪ/.",
        sampleWord: "boy",
        phonetic: "/bɔɪ/"
      },
      {
        symbol: "ɪə",
        name: "Nguyên âm đôi /ɪə/",
        examples: ["hear", "near", "dear", "clear"],
        mouth: "Bắt đầu từ âm /ɪ/, nhẹ nhàng thả lỏng miệng trượt về âm trung tính /ə/.",
        sampleWord: "near",
        phonetic: "/nɪər/"
      },
      {
        symbol: "eə",
        name: "Nguyên âm đôi /eə/",
        examples: ["hair", "care", "square", "fair"],
        mouth: "Bắt đầu từ âm /e/, nhẹ nhàng mở rộng và thả lỏng chuyển dần về âm /ə/.",
        sampleWord: "hair",
        phonetic: "/heər/"
      },
      {
        symbol: "ʊə",
        name: "Nguyên âm đôi /ʊə/",
        examples: ["tour", "cure", "pure", "poor"],
        mouth: "Bắt đầu từ âm hơi tròn môi /ʊ/, sau đó thả lỏng cơ miệng trượt về âm /ə/.",
        sampleWord: "tour",
        phonetic: "/tʊər/"
      },
      {
        symbol: "əʊ",
        name: "Nguyên âm đôi /əʊ/ (hoặc /oʊ/)",
        examples: ["go", "home", "show", "boat"],
        mouth: "Bắt đầu từ âm trung tính /ə/, sau đó chúm môi nhẹ trượt về phía /ʊ/.",
        sampleWord: "home",
        phonetic: "/həʊm/"
      },
      {
        symbol: "aʊ",
        name: "Nguyên âm đôi /aʊ/",
        examples: ["now", "house", "cow", "sound"],
        mouth: "Bắt đầu từ âm mở rộng /a/, sau đó thu hẹp môi lại trượt về âm /ʊ/ tròn môi.",
        sampleWord: "now",
        phonetic: "/naʊ/"
      }
    ]
  },
  consonants: [
    {
      symbol: "p",
      voiced: false,
      manner: "Âm Tắc hai môi vô thanh (Mím môi bật hơi gió mạnh, không rung thanh quản)",
      examples: ["pen", "top", "happy", "stop"],
      mouth: "Hai môi mím chặt chặn luồng hơi, sau đó mở môi đột ngột bật hơi mạnh ra ngoài. Dây thanh quản KHÔNG rung.",
      sampleWord: "pen",
      phonetic: "/pen/"
    },
    {
      symbol: "b",
      voiced: true,
      manner: "Âm Tắc hai môi hữu thanh (Rung mạnh dây thanh quản, không bật gió)",
      examples: ["book", "baby", "job", "club"],
      mouth: "Vị trí hai môi giống âm /p/ nhưng không bật hơi phù qua môi mà dây thanh quản RUNG rõ rệt.",
      sampleWord: "book",
      phonetic: "/bʊk/"
    },
    {
      symbol: "t",
      voiced: false,
      manner: "Âm Tắc chân răng vô thanh (Đầu lưỡi nén hơi nướu răng trên rồi bật gió)",
      examples: ["tea", "time", "cat", "water"],
      mouth: "Đầu lưỡi chạm mạnh vào nướu răng hàm trên chặn luồng hơi, sau đó hạ đầu lưỡi bật hơi gió dứt khoát. Dây thanh không rung.",
      sampleWord: "tea",
      phonetic: "/tiː/"
    },
    {
      symbol: "d",
      voiced: true,
      manner: "Âm Tắc chân răng hữu thanh (Đầu lưỡi chạm nướu trên và rung thanh quản)",
      examples: ["day", "door", "red", "bad"],
      mouth: "Đầu lưỡi chạm nướu răng trên như /t/, nhưng kích hoạt dây thanh quản RUNG mạnh, không bật gió phù ra.",
      sampleWord: "day",
      phonetic: "/deɪ/"
    },
    {
      symbol: "k",
      voiced: false,
      manner: "Âm Tắc vòm mềm vô thanh (Cuống lưỡi chặn khí rồi bật gió dứt khoát)",
      examples: ["cat", "key", "back", "school"],
      mouth: "Cuống lưỡi nâng lên chạm vòm họng mềm chặn luồng khí, sau đó hạ cuống lưỡi bật hơi mạnh từ cổ họng.",
      sampleWord: "cat",
      phonetic: "/kæt/"
    },
    {
      symbol: "ɡ",
      voiced: true,
      manner: "Âm Tắc vòm mềm hữu thanh (Cuống lưỡi nâng chặn khí và rung sâu thanh quản)",
      examples: ["go", "give", "bag", "big"],
      mouth: "Vị trí khẩu hình giống âm /k/ nhưng tạo độ RUNG trầm sâu từ thanh quản cuống họng.",
      sampleWord: "go",
      phonetic: "/ɡəʊ/"
    },
    {
      symbol: "f",
      voiced: false,
      manner: "Âm Xát môi - răng vô thanh (Răng trên chạm môi dưới, thổi gió qua kẽ răng)",
      examples: ["fish", "life", "phone", "laugh"],
      mouth: "Răng cửa hàm trên chạm nhẹ lên phần trong của môi dưới, đẩy luồng hơi liên tục qua kẽ răng. Không rung dây thanh.",
      sampleWord: "fish",
      phonetic: "/fɪʃ/"
    },
    {
      symbol: "v",
      voiced: true,
      manner: "Âm Xát môi - răng hữu thanh (Răng trên chạm môi dưới và rung thanh quản)",
      examples: ["voice", "very", "live", "travel"],
      mouth: "Răng cửa trên chạm môi dưới như âm /f/, nhưng dây thanh quản RUNG tạo ra âm thanh rung rè liên tục.",
      sampleWord: "voice",
      phonetic: "/vɔɪs/"
    },
    {
      symbol: "θ",
      voiced: false,
      manner: "Âm Xát răng vô thanh (Đầu lưỡi đặt giữa 2 hàm răng, thổi gió trượt qua mặt lưỡi)",
      examples: ["think", "thank", "bath", "mouth"],
      mouth: "Đầu lưỡi đặt giữa 2 hàm răng (nhô nhẹ ra ngoài), thổi luồng hơi gió trượt qua bề mặt lưỡi. Tuyệt đối KHÔNG cắn chặt răng.",
      sampleWord: "think",
      phonetic: "/θɪŋk/"
    },
    {
      symbol: "ð",
      voiced: true,
      manner: "Âm Xát răng hữu thanh (Đầu lưỡi đặt giữa 2 hàm răng, rung tê đầu lưỡi)",
      examples: ["this", "mother", "they", "breathe"],
      mouth: "Đầu lưỡi đặt giữa 2 hàm răng như âm /θ/ nhưng kích hoạt dây thanh quản RUNG liên tục (tạo cảm giác rung tê ở đầu lưỡi).",
      sampleWord: "this",
      phonetic: "/ðɪs/"
    },
    {
      symbol: "s",
      voiced: false,
      manner: "Âm Xát rãnh răng vô thanh (Hai hàm răng khép nhẹ, đẩy luồng khí sắc bén)",
      examples: ["see", "sun", "nice", "city"],
      mouth: "Hai hàm răng khép nhẹ, đầu lưỡi đặt sát chân răng trên, đẩy luồng khí sắc bén ra ngoài như tiếng rắn rít.",
      sampleWord: "see",
      phonetic: "/siː/"
    },
    {
      symbol: "z",
      voiced: true,
      manner: "Âm Xát rãnh răng hữu thanh (Răng khép nhẹ, rung dây thanh như tiếng ong vo ve)",
      examples: ["zoo", "lazy", "rise", "buzz"],
      mouth: "Khẩu hình giống hệt âm /s/ nhưng rung dây thanh quản mạnh tạo âm thanh vo ve liên tục.",
      sampleWord: "zoo",
      phonetic: "/zuː/"
    },
    {
      symbol: "ʃ",
      voiced: false,
      manner: "Âm Xát sau chân răng chu môi (Môi chu tròn hướng ra ngoài, đẩy hơi êm như tiếng suỵt)",
      examples: ["she", "sugar", "wash", "action"],
      mouth: "Hai môi chu tròn hướng ra ngoài, thân lưỡi nâng sát vòm họng trên, đẩy luồng hơi dài êm như tiếng suỵt 'shhh' yêu cầu giữ trật tự.",
      sampleWord: "she",
      phonetic: "/ʃiː/"
    },
    {
      symbol: "ʒ",
      voiced: true,
      manner: "Âm Xát sau chân răng chu môi hữu thanh (Môi chu tròn hướng ra ngoài và rung thanh quản)",
      examples: ["vision", "measure", "pleasure", "genre"],
      mouth: "Khẩu hình giống âm /ʃ/ (chu tròn môi) nhưng kích hoạt độ RUNG trầm vang từ thanh quản.",
      sampleWord: "vision",
      phonetic: "/ˈvɪʒ.ən/"
    },
    {
      symbol: "tʃ",
      voiced: false,
      manner: "Âm Tắc xát vô thanh (Môi chu bật hơi vô thanh dứt khoát CH)",
      examples: ["chair", "church", "watch", "nature"],
      mouth: "Bắt đầu chặn hơi ở vị trí âm /t/ rồi bật nhanh sang âm xát /ʃ/ với hai môi chu tròn ra phía trước. Bật hơi dứt khoát.",
      sampleWord: "chair",
      phonetic: "/tʃeər/"
    },
    {
      symbol: "dʒ",
      voiced: true,
      manner: "Âm Tắc xát hữu thanh (Môi chu bật dứt khoát đồng thời rung mạnh dây thanh J/G)",
      examples: ["job", "juice", "bridge", "page"],
      mouth: "Bắt đầu chặn hơi ở vị trí âm /d/ rồi bật nhanh sang âm /ʒ/ đồng thời kích hoạt độ rung mạnh mẽ từ thanh quản.",
      sampleWord: "job",
      phonetic: "/dʒɒb/"
    },
    {
      symbol: "m",
      voiced: true,
      manner: "Âm Mũi hai môi (Hai môi khép chặt, luồng hơi thoát hoàn toàn qua khoang mũi)",
      examples: ["man", "make", "home", "time"],
      mouth: "Hai môi khép chặt, hạ vòm khẩu cái mềm để luồng hơi thoát hoàn toàn qua mũi, thanh quản rung đều.",
      sampleWord: "man",
      phonetic: "/mæn/"
    },
    {
      symbol: "n",
      voiced: true,
      manner: "Âm Mũi chân răng (Đầu lưỡi chạm nướu trên, luồng hơi thoát qua khoang mũi)",
      examples: ["no", "new", "sun", "rain"],
      mouth: "Đầu lưỡi chạm áp chặt vào nướu răng hàm trên chặn khoang miệng, hơi thoát ra đường mũi, thanh quản rung.",
      sampleWord: "no",
      phonetic: "/nəʊ/"
    },
    {
      symbol: "ŋ",
      voiced: true,
      manner: "Âm Mũi vòm họng mềm (Cuống lưỡi nâng chạm vòm mềm, hơi thoát qua mũi NG)",
      examples: ["sing", "long", "think", "english"],
      mouth: "Cuống lưỡi nâng lên chạm vòm họng mềm chặn miệng, luồng hơi thoát êm qua đường mũi (tương tự vần 'ng' tiếng Việt nhưng sâu hơn).",
      sampleWord: "sing",
      phonetic: "/sɪŋ/"
    },
    {
      symbol: "h",
      voiced: false,
      manner: "Âm Xát thanh môn (Thổi một luồng khí nhẹ nhàng từ sâu đáy họng)",
      examples: ["hat", "house", "hello", "who"],
      mouth: "Miệng mở tự nhiên theo nguyên âm đứng sau, đẩy một luồng khí nhẹ nhàng êm ái từ sâu đáy họng ra ngoài.",
      sampleWord: "hat",
      phonetic: "/hæt/"
    },
    {
      symbol: "l",
      voiced: true,
      manner: "Âm Tiếp cận bên chân răng (Đầu lưỡi chạm nướu trên, hơi thoát hai bên sườn lưỡi)",
      examples: ["light", "love", "feel", "call"],
      mouth: "Đầu từ (Light L): đầu lưỡi chạm nướu răng trên, hơi thoát hai bên sườn lưỡi. Cuối từ (Dark L): cuống lưỡi hơi nâng nhẹ tạo âm trầm.",
      sampleWord: "light",
      phonetic: "/laɪt/"
    },
    {
      symbol: "r",
      voiced: true,
      manner: "Âm Tiếp cận sau chân răng (Đầu lưỡi uốn cong nhẹ không chạm vào bất kỳ bề mặt nào)",
      examples: ["red", "run", "car", "right"],
      mouth: "Đầu lưỡi uốn cong nhẹ về phía sau vòm họng nhưng KHÔNG chạm vào nướu hay vòm miệng, hai môi hơi chu nhẹ.",
      sampleWord: "red",
      phonetic: "/red/"
    },
    {
      symbol: "w",
      voiced: true,
      manner: "Âm Bán nguyên âm môi chu (Hai môi chu tròn như thổi sáo rồi mở nhanh)",
      examples: ["we", "water", "win", "one"],
      mouth: "Hai môi chu tròn căng như khi đang chuẩn bị thổi sáo, sau đó nhả nhanh sang nguyên âm đứng kế tiếp.",
      sampleWord: "we",
      phonetic: "/wiː/"
    },
    {
      symbol: "j",
      voiced: true,
      manner: "Âm Bán nguyên âm vòm cứng (Thân lưỡi nâng cao sát vòm cứng rồi lướt nhanh sang âm sau)",
      examples: ["yes", "yellow", "university", "view"],
      mouth: "Thân lưỡi nâng cao sát vòm miệng cứng như đang bắt đầu phát âm /iː/, rồi lướt rất nhanh sang nguyên âm đứng sau.",
      sampleWord: "yes",
      phonetic: "/jes/"
    }
  ],
  minimalPairs: [
    {
      id: "pair-1",
      name: "/iː/ vs /ɪ/",
      contrast: "Nguyên âm dài căng môi (Tense) vs Nguyên âm ngắn thả lỏng (Lax)",
      wordA: "sheep",
      ipaA: "/ʃiːp/",
      meaningA: "con cừu",
      wordB: "ship",
      ipaB: "/ʃɪp/",
      meaningB: "con tàu thủy",
      linguisticNote: "Người Việt thường không phân biệt độ căng cơ (tenseness) và độ dài của âm. Âm /iː/ bắt buộc khóe miệng phải mỉm cười căng môi, còn âm /ɪ/ cơ miệng hoàn toàn thư giãn và bật ngắn dứt khoát."
    },
    {
      id: "pair-2",
      name: "/æ/ vs /e/",
      contrast: "Nguyên âm bẹt hạ hàm sâu (Open) vs Nguyên âm trung bình (Mid)",
      wordA: "bad",
      ipaA: "/bæd/",
      meaningA: "tồi tệ, xấu",
      wordB: "bed",
      ipaB: "/bed/",
      meaningB: "cái giường",
      linguisticNote: "Âm /æ/ đòi hỏi hạ quai hàm dưới xuống tối đa. Nếu không hạ hàm đủ sâu, người nghe bản ngữ sẽ luôn nghe từ 'bad' thành 'bed' hoặc 'man' thành 'men'."
    },
    {
      id: "pair-3",
      name: "/θ/ vs /s/",
      contrast: "Âm xát răng thè lưỡi thổi gió (Dental) vs Âm xát rãnh răng khép miệng (Alveolar)",
      wordA: "think",
      ipaA: "/θɪŋk/",
      meaningA: "suy nghĩ",
      wordB: "sink",
      ipaB: "/sɪŋk/",
      meaningB: "chìm / bồn rửa",
      linguisticNote: "Tiếng Việt không có âm xát giữa 2 hàm răng /θ/. Người học Việt thường vô thức thay thế bằng âm /s/ hoặc âm /t/, biến 'I think' (tôi nghĩ) thành 'I sink' (tôi chìm)!"
    },
    {
      id: "pair-4",
      name: "/ð/ vs /d/",
      contrast: "Âm xát răng thè lưỡi có rung thanh quản vs Âm tắc chân răng gõ đầu lưỡi",
      wordA: "they",
      ipaA: "/ðeɪ/",
      meaningA: "họ, chúng nó",
      wordB: "day",
      ipaB: "/deɪ/",
      meaningB: "ngày",
      linguisticNote: "Âm /ð/ bắt buộc đầu lưỡi nhô ra giữa 2 hàm răng và dây thanh quản phải rung tê. Nếu thụt đầu lưỡi vào nướu răng trên sẽ bị biến thành âm gõ /d/."
    },
    {
      id: "pair-5",
      name: "/p/ vs /b/",
      contrast: "Âm vô thanh bật luồng hơi gió mạnh (Aspirated) vs Âm hữu thanh rung thanh quản",
      wordA: "pat",
      ipaA: "/pæt/",
      meaningA: "vỗ nhẹ",
      wordB: "bat",
      ipaB: "/bæt/",
      meaningB: "con dơi / gậy bóng chày",
      linguisticNote: "Âm /p/ ở đầu từ trong tiếng Anh có luồng hơi bật ra rất mạnh (làm rung tờ giấy để trước miệng). Âm /b/ thì rung dây thanh quản và không bật gió."
    },
    {
      id: "pair-6",
      name: "/v/ vs /w/",
      contrast: "Âm xát răng trên chạm môi dưới vs Âm bán nguyên âm chu tròn hai môi",
      wordA: "vest",
      ipaA: "/vest/",
      meaningA: "áo gile",
      wordB: "west",
      ipaB: "/west/",
      meaningB: "hướng tây",
      linguisticNote: "Âm /v/ cần răng cửa trên chạm môi dưới và rung. Âm /w/ tuyệt đối không cho răng chạm môi mà chu tròn 2 môi như thổi sáo rồi mở nhanh."
    },
    {
      id: "pair-7",
      name: "/ʃ/ vs /s/",
      contrast: "Âm xát sau chân răng chu tròn môi vs Âm xát chân răng khép miệng rít gió",
      wordA: "she",
      ipaA: "/ʃiː/",
      meaningA: "cô ấy",
      wordB: "see",
      ipaB: "/siː/",
      meaningB: "nhìn thấy",
      linguisticNote: "Âm /ʃ/ bắt buộc hai môi phải chu tròn ra phía trước. Rất nhiều người học phát âm câu 'She sees sea shells' mà không phân biệt được hai âm này."
    },
    {
      id: "pair-8",
      name: "/tʃ/ vs /dʒ/",
      contrast: "Âm tắc xát vô thanh bật hơi CH vs Âm tắc xát hữu thanh rung thanh quản J/G",
      wordA: "cheap",
      ipaA: "/tʃiːp/",
      meaningA: "rẻ tiền",
      wordB: "jeep",
      ipaB: "/dʒiːp/",
      meaningB: "xe jeep",
      linguisticNote: "Âm /tʃ/ bật hơi vô thanh dứt khoát. Âm /dʒ/ cần kích hoạt độ rung sâu từ dây thanh quản ngay tại thời điểm mở lưỡi."
    }
  ],
  connectedSpeech: [
    {
      id: "linking",
      title: "1. Hiện tượng Nối âm tự nhiên (Linking / Catenation)",
      description: "Tiếng Anh là ngôn ngữ có tính liên tục cao. Khi một từ kết thúc bằng phụ âm và từ kế tiếp bắt đầu bằng nguyên âm, âm cuối sẽ tự động nối mượt mà sang từ tiếp theo như một dòng chảy.",
      rules: [
        {
          name: "Phụ âm sang Nguyên âm (Consonant to Vowel)",
          formula: "Phụ âm cuối + Nguyên âm đầu ➔ Một cụm âm liền mạch",
          examples: [
            { text: "an apple", spoken: "/əˈnæpl/", note: "Âm phụ âm /n/ nối liền sang nguyên âm /æ/" },
            { text: "hold on", spoken: "/həʊlˈdɒn/", note: "Âm phụ âm /d/ nối liền sang nguyên âm /ɒ/" },
            { text: "turn off", spoken: "/tɜːˈnɒf/", note: "Âm phụ âm /n/ nối liền sang nguyên âm /ɒ/" }
          ]
        },
        {
          name: "Nguyên âm sang Nguyên âm (Vowel to Vowel - Chèn âm lướt)",
          formula: "Tự động chèn bán âm lướt /j/ hoặc /w/ giữa 2 nguyên âm",
          examples: [
            { text: "go out", spoken: "/ɡəʊ ˈwaʊt/", note: "Tự động chèn bán âm lướt /w/ sau âm tròn môi" },
            { text: "see it", spoken: "/siː ˈjɪt/", note: "Tự động chèn bán âm lướt /j/ sau âm mỉm cười /iː/" }
          ]
        }
      ]
    },
    {
      id: "elision",
      title: "2. Hiện tượng Nuốt âm (Elision)",
      description: "Sự triệt tiêu hoặc biến mất của một âm (phổ biến nhất là âm /t/ hoặc /d/) khi đứng giữa hai phụ âm khác nhằm tối ưu hóa năng lượng của cơ quan phát âm khi nói nhanh.",
      rules: [
        {
          name: "Nuốt âm /t/ và /d/ trong cụm phụ âm",
          formula: "Phụ âm + /t/ hoặc /d/ + Phụ âm tiếp theo ➔ Bỏ hẳn /t/ hoặc /d/",
          examples: [
            { text: "next door", spoken: "/neks dɔːr/", note: "Nuốt bỏ âm /t/, không phát âm /nekst dɔːr/" },
            { text: "last night", spoken: "/lɑːs naɪt/", note: "Nuốt bỏ âm /t/ ở cuối từ 'last'" },
            { text: "hold tight", spoken: "/həʊl taɪt/", note: "Nuốt bỏ âm /d/ ở cuối từ 'hold'" }
          ]
        }
      ]
    },
    {
      id: "assimilation",
      title: "3. Hiện tượng Biến âm / Đồng hóa (Assimilation)",
      description: "Khi hai âm đứng sát cạnh nhau, một âm bị biến đổi đặc tính cấu âm (vị trí hoặc cách thức) để hòa hợp mượt mà với âm kế cận.",
      rules: [
        {
          name: "Đồng hóa vị trí môi (Labial Assimilation)",
          formula: "Âm /t/, /d/, /n/ + đứng trước /p/, /b/, /m/ ➔ biến thành /p/, /b/, /m/",
          examples: [
            { text: "good boy", spoken: "/ɡʊb bɔɪ/", note: "Âm /d/ biến thành âm /b/ trước từ 'boy'" },
            { text: "ten men", spoken: "/tem men/", note: "Âm /n/ biến thành âm /m/ trước từ 'men'" }
          ]
        },
        {
          name: "Hòa âm ngạc hóa (Coalescence)",
          formula: "/t/ + /j/ ➔ /tʃ/, /d/ + /j/ ➔ /dʒ/",
          examples: [
            { text: "don't you", spoken: "/dəʊntʃuː/", note: "Hòa âm biến thành âm tắc xát /tʃ/" },
            { text: "did you", spoken: "/dɪdʒuː/", note: "Hòa âm biến thành âm tắc xát /dʒ/" }
          ]
        }
      ]
    },
    {
      id: "weakforms",
      title: "4. Nhược hóa & Sức mạnh của Âm Schwa /ə/ (Weak Forms & Rhythm)",
      description: "Tiếng Anh là ngôn ngữ có nhịp điệu dựa trên trọng âm (Stress-timed), khác hoàn toàn với tiếng Việt là ngôn ngữ đẳng thời theo từng âm tiết (Syllable-timed). Từ mang thông tin cốt lõi (Content words) được nhấn rõ, còn từ chức năng (Function words) bị co ngắn lại và chuyển thành âm Schwa /ə/.",
      rules: [
        {
          name: "Nhược hóa từ chức năng (Weak Forms)",
          formula: "Các trợ từ, giới từ, liên từ khi nói nhanh đều chuyển về dạng yếu",
          examples: [
            { text: "I can swim", spoken: "/aɪ kən swɪm/", note: "Từ 'can' nhược hóa đọc thành /kən/ (không đọc /kæn/)" },
            { text: "a cup of tea", spoken: "/ə kʌp əv tiː/", note: "Từ 'of' nhược hóa đọc thành /əv/ hoặc /ə/" },
            { text: "fish and chips", spoken: "/fɪʃ ən tʃɪps/", note: "Từ 'and' nhược hóa đọc thành /ən/ hoặc /n/" }
          ]
        }
      ]
    }
  ]
};
