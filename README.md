# LINGUISTICS ENGLISH AI
### Nền tảng Tự học Tiếng Anh Toàn diện dưới Lăng kính Ngôn ngữ học & Trí tuệ Nhân tạo
> **Dành cho người tự học từ Căn bản (A1) đến Tinh thông (C2)**

---

## 🏛️ Triết lý Giáo dục & Nền tảng Ngôn ngữ học (Linguistic Foundation)

Khác với các ứng dụng học tiếng Anh thông thường chỉ bắt người học ghi nhớ máy móc các danh sách từ vựng rời rạc hay làm bài tập ngữ pháp chọn đáp án A/B/C/D, **Linguistics English AI** được thiết kế bởi **nhà ngôn ngữ học** dựa trên các quy luật khoa học về **Thụ đắc Ngôn ngữ thứ hai (Second Language Acquisition - SLA)**:

### 1. Âm vị học ứng dụng (Applied Phonetics & Phonology)
* **Bản đồ 44 âm IPA tương tác**: Hướng dẫn chính xác vị trí cấu âm (articulatory placement), độ cao của lưỡi, độ tròn môi và độ rung thanh quản (voicing).
* **Cặp âm tối thiểu (Minimal Pairs)**: Huấn luyện thính giác phân biệt các cặp âm người Việt hay nhầm lẫn (*sheep* vs *ship*, *bad* vs *bed*, *think* vs *sink*).
* **Hiện tượng nói tự nhiên (Connected Speech)**: Nối âm (Linking), Nuốt âm (Elision), Biến âm (Assimilation) và sức mạnh của âm trung tính Schwa `/ə/` trong ngôn ngữ có nhịp điệu trọng âm (Stress-timed language).

### 2. Hình thái học & Từ nguyên học (Morphology & Etymology)
* **Quy luật cấu tạo từ**: Giải mã công thức `Tiền tố (Prefix) + Gốc từ (Root) + Hậu tố (Suffix)`.
* **Gốc từ Hy Lạp & La-tinh (Greek & Latin Roots)**: Nắm chắc 1 gốc từ (ví dụ: *spect* = nhìn) giúp suy luận và mở khóa hơn 20 từ vựng học thuật (*inspect, retrospect, circumspect, perspective*).
* **Mạng lưới kết hợp từ tự nhiên (Collocations)**: Phân biệt bản chất nhận thức giữa *Make* (tạo ra sản phẩm mới) và *Do* (thực hiện nhiệm vụ), *Heavy rain* vs *Strong coffee*.
* **Hệ thống thẻ ghi nhớ Spaced Repetition (Thuật toán SM-2)**: Giúp từ vựng học thuật (Academic Word List - AWL) ăn sâu vào trí nhớ dài hạn (Long-term memory).

### 3. Cú pháp học & Ngữ pháp Nhận thức (Cognitive Syntax & Grammar)
* **Ma trận 12 thì tiếng Anh**: Không phải 12 công thức học vẹt, mà là sự giao thoa giữa **Trục Thời gian (Time)** và **Trục Khía cạnh/Thể (Aspect: Simple, Continuous, Perfect, Perfect Continuous)**.
* **5 Mẫu câu nền tảng**: Quy mọi câu phức tạp về 5 mẫu cú pháp cốt lõi (`S-V`, `S-V-O`, `S-V-C`, `S-V-IO-DO`, `S-V-O-OC`).
* **Cú pháp học thuật cao cấp**: Đảo ngữ nhấn mạnh (Syntactic Inversion) và Câu chẻ (Cleft Sentences).

### 4. Ngữ dụng học & Phân tích Diễn ngôn (Pragmatics & Discourse Analysis)
* **Bộ chuyển đổi phong cách (Register Switcher)**: Tự do biến đổi câu nói qua 3 tầng phong cách: *Thân mật (Casual)* ➔ *Công sở (Neutral)* ➔ *Trang trọng / Ngoại giao (Formal C1/C2)*.
* **Kỹ thuật Rào đón học thuật (Hedging)**: Cách dùng *epistemic modals* và phó từ xác suất để bảo vệ lập luận khoa học.
* **Phòng luyện Shadowing & Hội thoại AI**: Tích hợp công nghệ nhận diện giọng nói (Web Speech Recognition) và tổng hợp giọng bản ngữ (Web Speech Synthesis) hỗ trợ cả hai phương ngữ chuẩn: Anh-Mỹ (GA) và Anh-Anh (RP).

---

## 🚀 Cách Cài đặt & Khởi chạy Nhanh

Ứng dụng được xây dựng theo kiến trúc **Zero-Dependency** (không cần cài thêm bất kỳ gói `npm` nặng nề nào, tránh hoàn toàn xung đột đồng bộ Google Drive).

### Cách 1: Khởi chạy bằng Máy chủ Node.js (Khuyên dùng)
Trong thư mục dự án, mở Terminal (PowerShell hoặc Command Prompt) và chạy:

```bash
npm start
```
hoặc:
```bash
node server.mjs
```

Sau đó mở trình duyệt và truy cập:
👉 **`http://localhost:3000`**

### Cách 2: Mở trực tiếp không cần Server
Bạn có thể nhấp đúp trực tiếp vào tệp `index.html` để mở trong trình duyệt Chrome, Edge, Safari hoặc Firefox.

---

## 📂 Cấu trúc Thư mục Dự án

```
ĐÀO TẠO TIẾNG ANH Ai/
├── index.html                  # Giao diện chính ứng dụng web (HTML5, Tailwind CSS, Lucide)
├── server.mjs                  # Máy chủ tĩnh Node.js siêu nhẹ (Zero npm dependencies)
├── package.json                # Cấu hình dự án
├── README.md                   # Tài liệu hướng dẫn phương pháp ngôn ngữ học
├── css/
│   └── styles.css              # Tùy biến kiểu dáng, 3D Flashcard flip, sóng âm audio
└── js/
    ├── app.js                  # Điều phối ứng dụng, Router & giao diện động
    ├── speech.js               # Động cơ Web Speech API (TTS giọng đọc & STT nhận diện giọng nói)
    ├── storage.js              # Quản lý LocalStorage, Chuỗi ngày (Streak) & Thuật toán SM-2
    └── data/
        ├── roadmap.js          # Lộ trình chuẩn hóa 6 cấp độ CEFR A1 -> C2
        ├── ipa.js              # 44 ký hiệu IPA, cấu âm, Minimal Pairs & Connected Speech
        ├── morphology.js       # Gốc từ Hy Lạp / La-tinh, Tiền tố, Hậu tố & Collocations
        ├── grammar.js          # Ma trận 12 thì, Trục thời gian, 5 mẫu câu & Cú pháp nâng cao
        ├── pragmatics.js       # Register Switcher, Kỹ thuật Hedging & Kịch bản thực tế
        └── tests.js            # Bài thi chẩn đoán trình độ 18 câu hỏi chuyên sâu
```

---

## 🎯 Hướng dẫn Lộ trình Học tập Khuyến nghị

1. **Bước 1: Làm bài thi chẩn đoán (Diagnostic Placement Test)**:
   - Vào mục **"Thi chẩn đoán trình độ"** để làm bài test 18 câu mổ xẻ 4 khía cạnh ngôn ngữ học. Hệ thống sẽ xác định trình độ xuất phát và đưa ra lộ trình phù hợp.
2. **Bước 2: Xây dựng nền tảng thính giác tại Phòng Lab Ngữ âm IPA**:
   - Dành 1 - 2 tuần đầu tiên làm chủ 44 âm vị, đặc biệt chú ý sự khác biệt giữa nguyên âm căng và chùng trong mục *Minimal Pairs*.
3. **Bước 3: Mở rộng vốn từ vựng bằng Gốc từ & Hình thái học**:
   - Thay vì học từng từ riêng lẻ, học theo *Gốc từ (Roots)* và ôn tập thẻ ghi nhớ *Spaced Repetition (SM-2)* mỗi ngày để duy trì chuỗi Streak.
4. **Bước 4: Nắm vững Cú pháp Nhận thức**:
   - Quan sát trục thời gian trực quan của 12 thì để hiểu bản chất của *Aspect (Khía cạnh)* thay vì dịch từng chữ qua tiếng Việt.
5. **Bước 5: Luyện phản xạ & Ngữ điệu với Shadowing Studio**:
   - Sử dụng micro trên máy tính để đọc câu mẫu; AI sẽ phân tích tỷ lệ trùng khớp âm vị và đưa ra nhận xét tức thì.

---

*Phát triển với sự tận tâm dành cho cộng đồng tự học tiếng Anh theo phương pháp khoa học chuẩn ngôn ngữ học.*
