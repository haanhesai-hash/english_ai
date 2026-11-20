/**
 * Kho dữ liệu Ngữ âm học ứng dụng (Applied Phonetics & Phonology)
 * 44 Âm vị IPA, Vị trí cấu âm, Cặp âm tối thiểu (Minimal Pairs), Nối âm & Biến âm.
 */

export const IPA_DATA = {
  vowels: {
    monophthongs: [
      {
        symbol: "iː",
        name: "Nguyên âm dài /iː/",
        type: "Nguyên âm đơn dài (Close Front Unrounded)",
        examples: ["sheep", "feel", "machine", "meet"],
        mouth: "Khóe miệng mở rộng như đang mỉm cười, lưỡi đưa lên cao và ra phía trước. Kéo dài hơi, dây thanh rung.",
        vnMistake: "Thường phát âm ngắn cụt giống âm 'i' tiếng Việt, làm nhầm với /ɪ/ (sheep -> ship).",
        sampleWord: "sheep",
        phonetic: "/ʃiːp/"
      },
      {
        symbol: "ɪ",
        name: "Nguyên âm ngắn /ɪ/",
        type: "Nguyên âm đơn ngắn (Near-close Near-front Unrounded)",
        examples: ["ship", "fit", "give", "sit"],
        mouth: "Khóe miệng hơi mở, thả lỏng hơn /iː/. Lưỡi hơi thấp hơn /iː/. Âm phát ra dứt khoát, bật ngắn.",
        vnMistake: "Hay nhầm với âm /iː/ (kéo dài quá) hoặc biến thành âm 'ê'/'i' lửng lơ.",
        sampleWord: "ship",
        phonetic: "/ʃɪp/"
      },
      {
        symbol: "ʊ",
        name: "Nguyên âm ngắn /ʊ/",
        type: "Nguyên âm đơn ngắn (Near-close Near-back Rounded)",
        examples: ["good", "book", "foot", "put"],
        mouth: "Môi hơi tròn nhẹ, thả lỏng cơ miệng. Lưỡi hơi nâng về phía sau. Âm phát ra rất nhanh và trầm.",
        vnMistake: "Hay chu môi quá chặt và đọc thành âm 'u' tiếng Việt (giống /uː/).",
        sampleWord: "good",
        phonetic: "/ɡʊd/"
      },
      {
        symbol: "uː",
        name: "Nguyên âm dài /uː/",
        type: "Nguyên âm đơn dài (Close Back Rounded)",
        examples: ["shoot", "blue", "food", "moon"],
        mouth: "Môi chu tròn hẳn ra phía trước tạo thành vòng nhỏ hẹp. Thân lưỡi co về sau chạm vòm họng mềm, kéo dài âm.",
        vnMistake: "Không chu môi đủ độ hoặc phát âm quá ngắn.",
        sampleWord: "shoot",
        phonetic: "/ʃuːt/"
      },
      {
        symbol: "e",
        name: "Nguyên âm ngắn /e/",
        type: "Nguyên âm đơn ngắn (Open-mid Front Unrounded)",
        examples: ["bed", "men", "send", "head"],
        mouth: "Miệng mở tự nhiên rộng hơn âm /ɪ/. Lưỡi ở vị trí trung bình, phát âm dứt khoát.",
        vnMistake: "Phát âm thành 'e' bẹt tiếng Việt hoặc biến thành /æ/.",
        sampleWord: "bed",
        phonetic: "/bed/"
      },
      {
        symbol: "ə",
        name: "Âm vị trung tính Schwa /ə/",
        type: "Nguyên âm trung tính tối thượng (Mid-central Unrounded)",
        examples: ["teacher", "ago", "banana", "support"],
        mouth: "Âm quan trọng nhất trong ngữ điệu tiếng Anh. Toàn bộ cơ miệng, môi, lưỡi hoàn toàn thả lỏng ở trạng thái nghỉ. Bật âm nhẹ, siêu ngắn.",
        vnMistake: "Thường phát âm rõ thành âm 'ơ' mạnh hoặc cố đọc rõ từng âm tiết bị nhược hóa.",
        sampleWord: "teacher",
        phonetic: "/ˈtiː.tʃər/"
      },
      {
        symbol: "ɜː",
        name: "Nguyên âm dài /ɜː/",
        type: "Nguyên âm đơn dài (Open-mid Central Unrounded)",
        examples: ["bird", "girl", "nurse", "word"],
        mouth: "Môi mở vừa phải, lưỡi đặt ở trung tâm khoang miệng, kéo dài hơi. (Trong Anh-Mỹ có thể cong đầu lưỡi tạo tính chất rhotic).",
        vnMistake: "Đọc thành âm 'ơ' hoặc 'oa' không kéo dài và thiếu độ sâu trong vòm họng.",
        sampleWord: "bird",
        phonetic: "/bɜːd/"
      },
      {
        symbol: "ɔː",
        name: "Nguyên âm dài /ɔː/",
        type: "Nguyên âm đơn dài (Open-mid Back Rounded)",
        examples: ["door", "saw", "call", "walk"],
        mouth: "Môi tròn, hướng ra ngoài. Lưỡi hạ thấp và thụt sâu về phía sau cuống họng. Kéo dài âm trầm ấm.",
        vnMistake: "Hay đọc thành âm 'o' ngắn tiếng Việt hoặc không tròn môi.",
        sampleWord: "door",
        phonetic: "/dɔːr/"
      },
      {
        symbol: "æ",
        name: "Nguyên âm bẹt /æ/",
        type: "Nguyên âm đơn mở trước (Near-open Front Unrounded)",
        examples: ["cat", "bad", "apple", "man"],
        mouth: "Hạ quai hàm xuống rất sâu, miệng mở rộng về 4 phía. Đầu lưỡi chạm chân răng hàm dưới.",
        vnMistake: "Chỉ mở miệng ngang đọc thành 'e' (bad -> bed) hoặc đọc nửa vời thành 'a'.",
        sampleWord: "cat",
        phonetic: "/kæt/"
      },
      {
        symbol: "ʌ",
        name: "Nguyên âm ngắn /ʌ/",
        type: "Nguyên âm đơn ngắn (Open-mid Back Unrounded)",
        examples: ["cup", "sun", "love", "blood"],
        mouth: "Miệng mở hơi rộng hơn âm /ə/, môi thư giãn không tròn. Thân lưỡi hơi lùi về sau, phát âm dứt khoát.",
        vnMistake: "Đọc thành âm 'á' tiếng Việt có dấu sắc hoặc đọc nặng như 'a'.",
        sampleWord: "cup",
        phonetic: "/kʌp/"
      },
      {
        symbol: "ɑː",
        name: "Nguyên âm dài /ɑː/",
        type: "Nguyên âm đơn dài (Open Back Unrounded)",
        examples: ["car", "father", "heart", "hard"],
        mouth: "Miệng mở rộng sâu theo chiều dọc như khi bác sĩ khám họng nói 'Aaa'. Lưỡi hạ thấp tối đa sát đáy miệng.",
        vnMistake: "Phát âm nông ở đầu môi thành âm 'a' ngắn tiếng Việt.",
        sampleWord: "car",
        phonetic: "/kɑːr/"
      },
      {
        symbol: "ɒ",
        name: "Nguyên âm ngắn /ɒ/",
        type: "Nguyên âm đơn ngắn (Open Back Rounded)",
        examples: ["not", "hot", "clock", "box"],
        mouth: "Môi hơi tròn, hàm dưới hạ thấp, phát âm dứt khoát ngắn gọn (Đặc trưng Anh-Anh RP).",
        vnMistake: "Trong tiếng Anh-Mỹ âm này thường hòa nhập với /ɑː/ (father-bother merger).",
        sampleWord: "hot",
        phonetic: "/hɒt/"
      }
    ],
    diphthongs: [
      {
        symbol: "eɪ",
        name: "Nguyên âm đôi /eɪ/",
        examples: ["face", "day", "make", "pain"],
        mouth: "Bắt đầu từ âm /e/ mở vừa, sau đó trượt mượt mà lên âm /ɪ/ với khóe miệng hơi khép lại mỉm cười.",
        sampleWord: "face",
        phonetic: "/feɪs/"
      },
      {
        symbol: "aɪ",
        name: "Nguyên âm đôi /aɪ/",
        examples: ["fly", "time", "high", "buy"],
        mouth: "Bắt đầu từ âm mở rộng /a/, sau đó di chuyển nâng hàm lên âm /ɪ/.",
        sampleWord: "fly",
        phonetic: "/flaɪ/"
      },
      {
        symbol: "ɔɪ",
        name: "Nguyên âm đôi /ɔɪ/",
        examples: ["boy", "voice", "coin", "enjoy"],
        mouth: "Bắt đầu từ âm tròn môi /ɔː/, sau đó nhả môi trượt lên âm /ɪ/.",
        sampleWord: "boy",
        phonetic: "/bɔɪ/"
      },
      {
        symbol: "ɪə",
        name: "Nguyên âm đôi /ɪə/",
        examples: ["hear", "near", "dear", "clear"],
        mouth: "Bắt đầu từ âm /ɪ/, trượt về âm trung tính thả lỏng /ə/.",
        sampleWord: "near",
        phonetic: "/nɪər/"
      },
      {
        symbol: "eə",
        name: "Nguyên âm đôi /eə/",
        examples: ["hair", "care", "square", "fair"],
        mouth: "Bắt đầu từ âm /e/, nhẹ nhàng mở rộng và thả lỏng chuyển về /ə/.",
        sampleWord: "hair",
        phonetic: "/heər/"
      },
      {
        symbol: "ʊə",
        name: "Nguyên âm đôi /ʊə/",
        examples: ["tour", "cure", "pure", "poor"],
        mouth: "Bắt đầu từ âm hơi tròn /ʊ/, thả lỏng trượt về âm /ə/.",
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
        mouth: "Bắt đầu từ âm mở rộng /a/, sau đó thu hẹp môi lại trượt về /ʊ/.",
        sampleWord: "now",
        phonetic: "/naʊ/"
      }
    ]
  },
  consonants: [
    {
      symbol: "p",
      voiced: false,
      manner: "Tắc vô thanh (Voiceless Bilabial Plosive)",
      examples: ["pen", "top", "happy", "stop"],
      mouth: "Hai môi mím chặt chặn luồng hơi, sau đó mở môi đột ngột bật hơi mạnh (aspiration). Dây thanh KHÔNG rung.",
      sampleWord: "pen",
      phonetic: "/pen/"
    },
    {
      symbol: "b",
      voiced: true,
      manner: "Tắc hữu thanh (Voiced Bilabial Plosive)",
      examples: ["book", "baby", "job", "club"],
      mouth: "Vị trí môi giống /p/ nhưng không bật hơi mạnh mà dây thanh RUNG rõ rệt.",
      sampleWord: "book",
      phonetic: "/bʊk/"
    },
    {
      symbol: "t",
      voiced: false,
      manner: "Tắc chân răng vô thanh (Voiceless Alveolar Plosive)",
      examples: ["tea", "time", "cat", "water"],
      mouth: "Đầu lưỡi chạm mạnh vào nướu răng trên chặn hơi, hạ đầu lưỡi bật hơi mạnh. Không rung dây thanh.",
      sampleWord: "tea",
      phonetic: "/tiː/"
    },
    {
      symbol: "d",
      voiced: true,
      manner: "Tắc chân răng hữu thanh (Voiced Alveolar Plosive)",
      examples: ["day", "door", "red", "bad"],
      mouth: "Đầu lưỡi chạm nướu răng trên như /t/, nhưng dây thanh RUNG mạnh, không bật hơi phù qua môi.",
      sampleWord: "day",
      phonetic: "/deɪ/"
    },
    {
      symbol: "k",
      voiced: false,
      manner: "Tắc vòm mềm vô thanh (Voiceless Velar Plosive)",
      examples: ["cat", "key", "back", "school"],
      mouth: "Cuống lưỡi nâng lên chạm vòm họng mềm chặn khí, hạ cuống lưỡi bật hơi mạnh.",
      sampleWord: "cat",
      phonetic: "/kæt/"
    },
    {
      symbol: "ɡ",
      voiced: true,
      manner: "Tắc vòm mềm hữu thanh (Voiced Velar Plosive)",
      examples: ["go", "give", "bag", "big"],
      mouth: "Vị trí như /k/ nhưng tạo độ rung sâu ở thanh quản cuống họng.",
      sampleWord: "go",
      phonetic: "/ɡəʊ/"
    },
    {
      symbol: "f",
      voiced: false,
      manner: "Xát môi - răng vô thanh (Voiceless Labiodental Fricative)",
      examples: ["fish", "life", "phone", "laugh"],
      mouth: "Răng cửa hàm trên chạm nhẹ lên môi dưới, đẩy luồng hơi liên tục qua kẽ răng. Không rung dây thanh.",
      sampleWord: "fish",
      phonetic: "/fɪʃ/"
    },
    {
      symbol: "v",
      voiced: true,
      manner: "Xát môi - răng hữu thanh (Voiced Labiodental Fricative)",
      examples: ["voice", "very", "live", "travel"],
      mouth: "Răng cửa trên chạm môi dưới như /f/, nhưng dây thanh RUNG tạo ra âm thanh rung rè liên tục.",
      sampleWord: "voice",
      phonetic: "/vɔɪs/"
    },
    {
      symbol: "θ",
      voiced: false,
      manner: "Xát răng vô thanh (Voiceless Dental Fricative - Âm TH thè thổi)",
      examples: ["think", "thank", "bath", "mouth"],
      mouth: "Đầu lưỡi đặt giữa 2 hàm răng (nhô nhẹ ra ngoài), thổi luồng hơi trượt qua mặt lưỡi. Tuyệt đối KHÔNG cắn chặt.",
      sampleWord: "think",
      phonetic: "/θɪŋk/"
    },
    {
      symbol: "ð",
      voiced: true,
      manner: "Xát răng hữu thanh (Voiced Dental Fricative - Âm TH rung)",
      examples: ["this", "mother", "they", "breathe"],
      mouth: "Đầu lưỡi đặt giữa 2 hàm răng như /θ/ nhưng cho dây thanh RUNG liên tục (tạo độ rung tê ở đầu lưỡi).",
      sampleWord: "this",
      phonetic: "/ðɪs/"
    },
    {
      symbol: "s",
      voiced: false,
      manner: "Xát rãnh răng vô thanh (Voiceless Alveolar Fricative)",
      examples: ["see", "sun", "nice", "city"],
      mouth: "Hai hàm răng khép nhẹ, đầu lưỡi sát chân răng trên, đẩy luồng khí sắc bén như tiếng rắn rít.",
      sampleWord: "see",
      phonetic: "/siː/"
    },
    {
      symbol: "z",
      voiced: true,
      manner: "Xát rãnh răng hữu thanh (Voiced Alveolar Fricative)",
      examples: ["zoo", "lazy", "rise", "buzz"],
      mouth: "Khẩu hình giống hệt /s/ nhưng rung dây thanh mạnh như tiếng ong vo ve.",
      sampleWord: "zoo",
      phonetic: "/zuː/"
    },
    {
      symbol: "ʃ",
      voiced: false,
      manner: "Xát sau chân răng vô thanh (Voiceless Postalveolar Fricative - SH)",
      examples: ["she", "sugar", "wash", "action"],
      mouth: "Môi chu tròn hướng ra ngoài, thân lưỡi nâng sát vòm họng trên, đẩy hơi dài êm như tiếng suỵt 'shhh'.",
      sampleWord: "she",
      phonetic: "/ʃiː/"
    },
    {
      symbol: "ʒ",
      voiced: true,
      manner: "Xát sau chân răng hữu thanh (Voiced Postalveolar Fricative)",
      examples: ["vision", "measure", "pleasure", "genre"],
      mouth: "Khẩu hình giống /ʃ/ (chu môi) nhưng tạo độ RUNG trầm từ thanh quản.",
      sampleWord: "vision",
      phonetic: "/ˈvɪʒ.ən/"
    },
    {
      symbol: "tʃ",
      voiced: false,
      manner: "Tắc xát vô thanh (Voiceless Postalveolar Affricate - CH)",
      examples: ["chair", "church", "watch", "nature"],
      mouth: "Bắt đầu chặn hơi ở vị trí /t/ rồi bật nhanh sang âm xát /ʃ/ với môi chu ra. Bật dứt khoát.",
      sampleWord: "chair",
      phonetic: "/tʃeər/"
    },
    {
      symbol: "dʒ",
      voiced: true,
      manner: "Tắc xát hữu thanh (Voiced Postalveolar Affricate - J/G)",
      examples: ["job", "juice", "bridge", "page"],
      mouth: "Bắt đầu chặn hơi ở vị trí /d/ rồi bật nhanh sang âm /ʒ/ đồng thời rung mạnh dây thanh quản.",
      sampleWord: "job",
      phonetic: "/dʒɒb/"
    },
    {
      symbol: "m",
      voiced: true,
      manner: "Mũi hai môi (Voiced Bilabial Nasal)",
      examples: ["man", "make", "home", "time"],
      mouth: "Hai môi khép chặt, hạ vòm khẩu cái mềm để luồng hơi thoát hoàn toàn qua mũi, thanh quản rung.",
      sampleWord: "man",
      phonetic: "/mæn/"
    },
    {
      symbol: "n",
      voiced: true,
      manner: "Mũi chân răng (Voiced Alveolar Nasal)",
      examples: ["no", "new", "sun", "rain"],
      mouth: "Đầu lưỡi chạm áp chặt vào nướu răng trên chặn khoang miệng, hơi thoát qua khoang mũi.",
      sampleWord: "no",
      phonetic: "/nəʊ/"
    },
    {
      symbol: "ŋ",
      voiced: true,
      manner: "Mũi vòm mềm (Voiced Velar Nasal - NG)",
      examples: ["sing", "long", "think", "english"],
      mouth: "Cuống lưỡi nâng lên chạm vòm họng mềm chặn miệng, hơi thoát ra đường mũi.",
      sampleWord: "sing",
      phonetic: "/sɪŋ/"
    },
    {
      symbol: "h",
      voiced: false,
      manner: "Xát thanh môn (Voiceless Glottal Fricative)",
      examples: ["hat", "house", "hello", "who"],
      mouth: "Miệng mở tự nhiên theo nguyên âm đứng sau, đẩy một luồng khí nhẹ nhàng từ sâu đáy họng.",
      sampleWord: "hat",
      phonetic: "/hæt/"
    },
    {
      symbol: "l",
      voiced: true,
      manner: "Tiếp cận bên chân răng (Voiced Alveolar Lateral)",
      examples: ["light", "love", "feel", "call"],
      mouth: "Light L (đầu từ): đầu lưỡi chạm nướu răng trên, hơi thoát hai bên sườn lưỡi. Dark L (cuối từ): cuống lưỡi hơi nâng.",
      sampleWord: "light",
      phonetic: "/laɪt/"
    },
    {
      symbol: "r",
      voiced: true,
      manner: "Tiếp cận sau chân răng (Voiced Postalveolar Approximant)",
      examples: ["red", "run", "car", "right"],
      mouth: "Đầu lưỡi cong nhẹ về phía vòm họng nhưng KHÔNG chạm vào bất kỳ bề mặt nào, môi hơi chu nhẹ.",
      sampleWord: "red",
      phonetic: "/red/"
    },
    {
      symbol: "w",
      voiced: true,
      manner: "Tiếp cận môi - vòm mềm (Voiced Labial-velar Approximant)",
      examples: ["we", "water", "win", "one"],
      mouth: "Môi chu tròn căng như thổi sáo, sau đó nhả nhanh sang nguyên âm đứng sau.",
      sampleWord: "we",
      phonetic: "/wiː/"
    },
    {
      symbol: "j",
      voiced: true,
      manner: "Tiếp cận vòm cứng (Voiced Palatal Approximant - Y)",
      examples: ["yes", "yellow", "university", "view"],
      mouth: "Thân lưỡi nâng cao sát vòm miệng cứng như đang bắt đầu âm /iː/, rồi lướt nhanh sang âm sau.",
      sampleWord: "yes",
      phonetic: "/jes/"
    }
  ],
  minimalPairs: [
    {
      id: "pair-1",
      name: "/iː/ vs /ɪ/",
      contrast: "Nguyên âm dài căng (Tense) vs Nguyên âm ngắn chùng (Lax)",
      wordA: "sheep",
      ipaA: "/ʃiːp/",
      meaningA: "con cừu",
      wordB: "ship",
      ipaB: "/ʃɪp/",
      meaningB: "con tàu thủy",
      linguisticNote: "Người Việt thường không phân biệt độ căng cơ (tenseness) và độ dài của âm. /iː/ cần mỉm cười căng môi, còn /ɪ/ cơ miệng thư giãn và bật ngắn dứt khoát."
    },
    {
      id: "pair-2",
      name: "/æ/ vs /e/",
      contrast: "Nguyên âm bẹt mở rộng (Open) vs Nguyên âm trung bình (Mid)",
      wordA: "bad",
      ipaA: "/bæd/",
      meaningA: "tồi tệ, xấu",
      wordB: "bed",
      ipaB: "/bed/",
      meaningB: "cái giường",
      linguisticNote: "Âm /æ/ đòi hỏi hạ hàm dưới tối đa. Nếu không hạ hàm đủ, người nghe bản ngữ sẽ nghe 'bad' thành 'bed' hoặc 'man' thành 'men'."
    },
    {
      id: "pair-3",
      name: "/θ/ vs /s/",
      contrast: "Xát răng thè lưỡi (Dental) vs Xát rãnh răng khép miệng (Alveolar)",
      wordA: "think",
      ipaA: "/θɪŋk/",
      meaningA: "suy nghĩ",
      wordB: "sink",
      ipaB: "/sɪŋk/",
      meaningB: "chìm / bồn rửa",
      linguisticNote: "Tiếng Việt không có âm xát giữa 2 hàm răng /θ/. Người học thường vô thức thay thế bằng âm /s/ hoặc âm /t/, biến 'I think' thành 'I sink' (tôi chìm)!"
    },
    {
      id: "pair-4",
      name: "/ð/ vs /d/",
      contrast: "Xát răng hữu thanh vs Tắc chân răng hữu thanh",
      wordA: "they",
      ipaA: "/ðeɪ/",
      meaningA: "họ, chúng nó",
      wordB: "day",
      ipaB: "/deɪ/",
      meaningB: "ngày",
      linguisticNote: "/ð/ bắt buộc đầu lưỡi nhô ra giữa 2 hàm răng và thanh quản rung. Nếu thụt lưỡi vào nướu trên sẽ tạo thành âm tắc /d/."
    },
    {
      id: "pair-5",
      name: "/p/ vs /b/",
      contrast: "Vô thanh bật hơi (Aspirated) vs Hữu thanh rung thanh quản",
      wordA: "pat",
      ipaA: "/pæt/",
      meaningA: "vỗ nhẹ",
      wordB: "bat",
      ipaB: "/bæt/",
      meaningB: "con dơi / gậy bóng chày",
      linguisticNote: "Âm /p/ ở đầu từ trong tiếng Anh có hiện tượng bật hơi (Aspiration [pʰ]) rất mạnh làm rung tờ giấy trước mặt. /b/ thì rung dây thanh không bật gió."
    },
    {
      id: "pair-6",
      name: "/v/ vs /w/",
      contrast: "Xát môi - răng (Labiodental) vs Bán nguyên âm môi chu (Bilabial)",
      wordA: "vest",
      ipaA: "/vest/",
      meaningA: "áo gile",
      wordB: "west",
      ipaB: "/west/",
      meaningB: "hướng tây",
      linguisticNote: "/v/ cần răng trên chạm môi dưới và rung. /w/ tuyệt đối không cho răng chạm môi mà chu tròn 2 môi rồi mở ra."
    },
    {
      id: "pair-7",
      name: "/ʃ/ vs /s/",
      contrast: "Sau chân răng chu môi vs Chân răng khép miệng",
      wordA: "she",
      ipaA: "/ʃiː/",
      meaningA: "cô ấy",
      wordB: "see",
      ipaB: "/siː/",
      meaningB: "nhìn thấy",
      linguisticNote: "Âm /ʃ/ phải chu môi tròn ra phía trước. Rất nhiều người học phát âm 'She sees sea shells' mà không phân biệt được hai âm này."
    },
    {
      id: "pair-8",
      name: "/tʃ/ vs /dʒ/",
      contrast: "Tắc xát vô thanh vs Tắc xát hữu thanh",
      wordA: "cheap",
      ipaA: "/tʃiːp/",
      meaningA: "rẻ tiền",
      wordB: "jeep",
      ipaB: "/dʒiːp/",
      meaningB: "xe jeep",
      linguisticNote: "/tʃ/ bật hơi vô thanh dứt khoát. /dʒ/ cần kích hoạt độ rung sâu từ dây thanh quản ngay thời điểm tiếp xúc."
    }
  ],
  connectedSpeech: [
    {
      id: "linking",
      title: "1. Nối âm (Linking / Catenation)",
      description: "Tiếng Anh là ngôn ngữ đa âm và liên tục (connected speech). Khi một từ kết thúc bằng phụ âm và từ sau bắt đầu bằng nguyên âm, âm cuối sẽ nối mượt mà sang từ tiếp theo.",
      rules: [
        {
          name: "Consonant to Vowel (Phụ âm sang Nguyên âm)",
          formula: "Phụ âm cuối + Nguyên âm đầu -> Một cụm âm liền mạch",
          examples: [
            { text: "an apple", spoken: "/əˈnæpl/", note: "Âm /n/ nối sang /æ/" },
            { text: "hold on", spoken: "/həʊlˈdɒn/", note: "Âm /d/ nối sang /ɒ/" },
            { text: "turn off", spoken: "/tɜːˈnɒf/", note: "Âm /n/ nối sang /ɒ/" }
          ]
        },
        {
          name: "Vowel to Vowel (Nguyên âm sang Nguyên âm - Intrusive sounds)",
          formula: "Chèn âm lướt /j/ hoặc /w/ tự nhiên giữa 2 nguyên âm",
          examples: [
            { text: "go out", spoken: "/ɡəʊ ˈwaʊt/", note: "Chèn bán âm /w/ sau âm tròn môi" },
            { text: "see it", spoken: "/siː ˈjɪt/", note: "Chèn bán âm /j/ sau âm mỉm cười /iː/" }
          ]
        }
      ]
    },
    {
      id: "elision",
      title: "2. Nuốt âm (Elision)",
      description: "Sự biến mất của một âm (thường là /t/ hoặc /d/) khi đứng giữa hai phụ âm khác để tối ưu hóa năng lượng của cơ quan phát âm.",
      rules: [
        {
          name: "Nuốt âm /t/ và /d/ trong cụm phụ âm",
          formula: "Phụ âm + /t/ hoặc /d/ + Phụ âm tiếp theo -> Bỏ /t/ hoặc /d/",
          examples: [
            { text: "next door", spoken: "/neks dɔːr/", note: "Bỏ âm /t/, không phát âm /nekst dɔːr/" },
            { text: "last night", spoken: "/lɑːs naɪt/", note: "Bỏ âm /t/ ở cuối từ 'last'" },
            { text: "hold tight", spoken: "/həʊl taɪt/", note: "Bỏ âm /d/ ở cuối từ 'hold'" }
          ]
        }
      ]
    },
    {
      id: "assimilation",
      title: "3. Đồng hóa / Biến âm (Assimilation)",
      description: "Khi hai âm đứng cạnh nhau, một âm bị biến đổi đặc tính cấu âm (vị trí, cách thức) để tương thích với âm kế cận.",
      rules: [
        {
          name: "Đồng hóa vị trí môi (Labial Assimilation)",
          formula: "/t/, /d/, /n/ + /p/, /b/, /m/ -> biến thành /p/, /b/, /m/",
          examples: [
            { text: "good boy", spoken: "/ɡʊb bɔɪ/", note: "/d/ biến thành /b/ trước /b/" },
            { text: "ten men", spoken: "/tem men/", note: "/n/ biến thành /m/ trước /m/" }
          ]
        },
        {
          name: "Hòa âm ngạc hóa (Coalescence)",
          formula: "/t/ + /j/ -> /tʃ/, /d/ + /j/ -> /dʒ/",
          examples: [
            { text: "don't you", spoken: "/dəʊntʃuː/", note: "Biến thành âm /tʃ/" },
            { text: "did you", spoken: "/dɪdʒuː/", note: "Biến thành âm /dʒ/" }
          ]
        }
      ]
    },
    {
      id: "weakforms",
      title: "4. Nhược hóa & Âm Schwa /ə/ (Weak Forms & Rhythm)",
      description: "Tiếng Anh là ngôn ngữ có nhịp điệu dựa trên trọng âm (Stress-timed language), khác với tiếng Việt là ngôn ngữ đẳng thời theo âm tiết (Syllable-timed). Từ mang thông tin (Content words) được nhấn mạnh, còn từ chức năng (Function words) bị co ngắn lại và chuyển thành âm Schwa /ə/.",
      rules: [
        {
          name: "Từ chức năng dạng yếu (Weak Forms)",
          formula: "Các trợ từ, giới từ, liên từ khi nói nhanh chuyển thành dạng yếu",
          examples: [
            { text: "I can swim", spoken: "/aɪ kən swɪm/", note: "'can' đọc thành /kən/ (không đọc /kæn/)" },
            { text: "a cup of tea", spoken: "/ə kʌp əv tiː/", note: "'of' đọc thành /əv/ hoặc /ə/" },
            { text: "fish and chips", spoken: "/fɪʃ ən tʃɪps/", note: "'and' nhược hóa thành /ən/ hoặc /n/" }
          ]
        }
      ]
    }
  ]
};
