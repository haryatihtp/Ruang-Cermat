import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalBinomial = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question:
      "Dalam 10 kali lemparan koin, berapa peluang kepala muncul sebanyak 5 kali jika peluang muncul kepala pada satu lemparan adalah 0.5?",
    options: ["0.2461", "0.3024", "0.5000", "0.6000"],
    correctOption: "0.2461",
    explanation:
      "Gunakan rumus binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k). Kombinasi C(10, 5) = 252. P(X=5) = 252 * (0.5)^5 * (0.5)^5 = 0.2461.",
  },
  {
    question:
      "Dalam ujian pilihan ganda dengan 20 soal, berapa peluang siswa menjawab benar 15 soal jika peluang benar untuk setiap soal adalah 0.75?",
    options: ["0.2023", "0.1032", "0.1234", "0.0877"],
    correctOption: "0.2023",
    explanation:
      "Dengan rumus binomial: C(20, 15) * 0.75^15 * 0.25^5. Kombinasi C(20, 15) = 15504. Peluang = 15504 * (0.75)^15 * (0.25)^5 = 0.2023.",
  },
  {
    question:
      "Dalam 5 kali bermain game, berapa peluang menang 3 kali jika peluang menang setiap game adalah 0.4?",
    options: ["0.2304", "0.3456", "0.2765", "0.3379"],
    correctOption: "0.2304",
    explanation:
      "Menggunakan rumus binomial: P(X=3) = C(5, 3) * (0.4)^3 * (0.6)^2. Kombinasi C(5, 3) = 10. Peluang = 10 * (0.4)^3 * (0.6)^2 = 0.2304.",
  },
  {
    question:
      "Dalam 12 kali percobaan, berapa peluang sukses sebanyak 7 kali jika peluang sukses dalam setiap percobaan adalah 0.3?",
    options: ["0.0478", "0.0836", "0.0912", "0.1024"],
    correctOption: "0.0478",
    explanation:
      "Menggunakan rumus binomial: P(X=7) = C(12, 7) * (0.3)^7 * (0.7)^5. Kombinasi C(12, 7) = 792. Peluang = 792 * (0.3)^7 * (0.7)^5 = 0.0478.",
  },
  {
    question:
      "Dalam 15 kali lemparan dadu bersisi enam, berapa peluang angka 6 muncul tepat 5 kali?",
    options: ["0.2316", "0.2152", "0.2258", "0.1923"],
    correctOption: "0.2316",
    explanation:
      "Gunakan rumus binomial: P(X=5) = C(15, 5) * (1/6)^5 * (5/6)^10. Kombinasi C(15, 5) = 3003. Peluang = 3003 * (1/6)^5 * (5/6)^10 = 0.2316.",
  },
  {
    question:
      "Dalam ujian dengan 30 soal, jika peluang menjawab benar tiap soal adalah 0.8, berapa peluang siswa menjawab benar 25 soal?",
    options: ["0.1328", "0.1689", "0.2024", "0.1153"],
    correctOption: "0.1689",
    explanation:
      "Menggunakan rumus binomial: C(30, 25) * 0.8^25 * 0.2^5. Kombinasi C(30, 25) = 142506. Peluang = 142506 * (0.8)^25 * (0.2)^5 = 0.1689.",
  },
  {
    question:
      "Dalam 8 kali percobaan, berapa peluang sukses minimal 6 kali jika peluang sukses setiap percobaan adalah 0.7?",
    options: ["0.3192", "0.4745", "0.5720", "0.4563"],
    correctOption: "0.3192",
    explanation:
      "P(sukses ≥ 6) = P(6) + P(7) + P(8). Hitung menggunakan rumus binomial: P(X=6) + P(X=7) + P(X=8) = 0.3192.",
  },
  {
    question:
      "Dalam eksperimen dengan 5 dadu dilempar, berapa peluang semua dadu menunjukkan angka berbeda?",
    options: ["0.0926", "0.1234", "0.1348", "0.1728"],
    correctOption: "0.0926",
    explanation:
      "Total kemungkinan = 6^5. Kemungkinan semua dadu berbeda dihitung: 6 × 5 × 4 × 3 × 2. Peluang = (6 × 5 × 4 × 3 × 2) / 6^5 = 0.0926.",
  },
  {
    question:
      "Dalam 10 kali lemparan koin tidak seimbang (peluang kepala = 0.3), berapa peluang kepala muncul lebih dari 7 kali?",
    options: ["0.0017", "0.0043", "0.0087", "0.0121"],
    correctOption: "0.0017",
    explanation:
      "P(kepala > 7) = P(8) + P(9) + P(10). Hitung menggunakan rumus binomial: P(X=8) + P(X=9) + P(X=10) = 0.0017.",
  },
  {
    question:
      "Dalam lotere dengan 50 bola bernomor, 10 bola diambil tanpa pengembalian. Berapa peluang semua bola yang diambil bernomor ganjil?",
    options: ["0.0006", "0.0012", "0.0024", "0.0036"],
    correctOption: "0.0006",
    explanation:
      "Ada 25 bola ganjil. Peluang pertama ganjil = 25/50, kedua = 24/49, dan seterusnya. Total peluang = (25/50) × (24/49) × ... × (16/41) = 0.0006.",
  },
  ];
  

const handleNextQuestion = () => {
  if (currentQuestion < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
    resetSelection();
  }
};

const handlePreviousQuestion = () => {
  if (currentQuestion > 1) {
    setCurrentQuestion(currentQuestion - 1);
    resetSelection();
  }
};

const handleOptionSelect = (option) => {
  setSelectedOption(option);
};

const resetSelection = () => {
  setSelectedOption(null);
  setShowExplanation(false);
};

const handleDropdownChange = (e) => {
  const selectedNumber = parseInt(e.target.value);
  setCurrentQuestion(selectedNumber);
  resetSelection();
};

const handleExplanationClick = () => {
  if (showExplanation) {
    setShowExplanation(false); // Sembunyikan pembahasan tanpa pesan
  } else if (!selectedOption) {
    setShowConfirmation(true); // Tampilkan pesan jika opsi belum dipilih
  } else {
    setShowExplanation(true); // Langsung tampilkan pembahasan jika opsi sudah dipilih
  }
};

const handleConfirmationResponse = (response) => {
  if (response === "yes") {
    setShowExplanation(true); // Tampilkan pembahasan
  }
  setShowConfirmation(false); // Hilangkan pesan
};

return (
  <div className="question-page">
    <div className="question-container">
      <button
        className="oval-button previous-button"
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1}
      >
        &larr; Soal Sebelumnya
      </button>
      <div className="question-box">
        <h2>Soal {currentQuestion}</h2>
        <p>{questions[currentQuestion - 1].question}</p>
      </div>
      <button
        className="oval-button next-button"
        onClick={handleNextQuestion}
        disabled={currentQuestion === questions.length}
      >
        Soal Berikutnya &rarr;
      </button>
    </div>

    <div className="interactive-section">
      <div className="dropdown-container">
        <label htmlFor="question-dropdown">Pilih Soal:</label>
        <select
          id="question-dropdown"
          value={currentQuestion}
          onChange={handleDropdownChange}
        >
          {questions.map((_, index) => (
            <option key={index} value={index + 1}>
              Soal {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="options-container">
        {questions[currentQuestion - 1].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option
                ? option === questions[currentQuestion - 1].correctOption
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="explanation-container">
        <button
          className="explanation-toggle"
          onClick={handleExplanationClick}
        >
          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan"}
        </button>
        {showExplanation && (
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        )}
      </div>
    </div>

    {showConfirmation && (
      <div className="confirmation-popup">
        <div className="popup-content">
          <p>Yakin mau melihat pembahasan sekarang?</p>
          <div className="popup-buttons">
            <button
              className="popup-button no-button"
              onClick={() => handleConfirmationResponse("no")}
            >
              Tidak
            </button>
            <button
              className="popup-button yes-button"
              onClick={() => handleConfirmationResponse("yes")}
            >
              Iya
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};
export default LatihanSoalBinomial;
