import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalStatistika = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Rata-rata dari data berikut: 5, 7, 8, 10, 12 adalah?",
      options: ["7", "8", "9", "10"],
      correctOption: "8",
      explanation: "Rata-rata dihitung dengan Σx/n = (5+7+8+10+12)/5 = 42/5 = 8.",
    },
    {
      question: "Modus dari data berikut: 2, 3, 4, 3, 5, 3, 6 adalah?",
      options: ["2", "3", "4", "6"],
      correctOption: "3",
      explanation:
        "Modus adalah data yang paling sering muncul. Pada data ini, angka 3 muncul sebanyak 3 kali, lebih banyak dari yang lain.",
    },
    {
      question: "Median dari data berikut: 12, 14, 15, 16, 20 adalah?",
      options: ["14", "15", "16", "20"],
      correctOption: "15",
      explanation:
        "Median adalah nilai tengah setelah data diurutkan. Data yang diurutkan: 12, 14, 15, 16, 20. Nilai tengahnya adalah 15.",
    },
    {
      question: "Variansi dari data berikut: 2, 4, 6 adalah?",
      options: ["2.67", "4", "6", "8"],
      correctOption: "2.67",
      explanation:
        "Rata-rata = 4. Variansi = [(2-4)² + (4-4)² + (6-4)²] / 3 = (4 + 0 + 4) / 3 = 2.67.",
    },
    {
      question: "Kuartil ketiga dari data: 10, 15, 20, 25, 30, 35 adalah?",
      options: ["25", "27.5", "30", "32.5"],
      correctOption: "30",
      explanation:
        "Kuartil ketiga (Q3) berada di posisi 3/4(n+1). Data diurutkan: 10, 15, 20, 25, 30, 35. Q3 = data ke-5, yaitu 30.",
    },
    {
      question: "Luas permukaan kerucut dengan jari-jari 6 cm dan tinggi 8 cm adalah?",
      options: ["96π cm²", "72π cm²", "84π cm²", "60π cm²"],
      correctOption: "96π cm²",
      explanation: "Luas permukaan kerucut = π × r × (r + s), dengan s adalah panjang garis pelukis. s = √(r² + t²). = π × 6 cm × (6 cm + √(6² + 8²)) ≈ 96π cm².",
    },
    {
      question: "Volume prisma segitiga dengan alas 5 cm, tinggi 6 cm, dan panjang prisma 10 cm adalah?",
      options: ["150 cm³", "300 cm³", "250 cm³", "200 cm³"],
      correctOption: "150 cm³",
      explanation: "Volume prisma = luas alas × panjang = 1/2 × alas × tinggi × panjang = 1/2 × 5 cm × 6 cm × 10 cm = 150 cm³.",
    },
    {
      question: "Luas permukaan limas segi empat dengan panjang sisi alas 6 cm dan tinggi 8 cm adalah?",
      options: ["96 cm²", "80 cm²", "72 cm²", "60 cm²"],
      correctOption: "96 cm²",
      explanation: "Luas permukaan limas = luas alas + 4 × luas segitiga pada sisi tegak. Luas alas = 6 cm × 6 cm = 36 cm². Luas segitiga = 1/2 × alas segitiga × tinggi segitiga ≈ 4 cm² per sisi, jadi total = 96 cm².",
    },
    {
      question: "Volume kerucut dengan jari-jari 4 cm dan tinggi 9 cm adalah?",
      options: ["48π cm³", "36π cm³", "54π cm³", "72π cm³"],
      correctOption: "48π cm³",
      explanation: "Volume kerucut = 1/3 × π × r² × tinggi = 1/3 × 3.14 × (4 cm)² × 9 cm = 48π cm³.",
    },
    {
      question: "Jika segitiga siku-siku memiliki tinggi 4 mc, alas 3cm. berakah sisi miring nya",
      options: ["2 cm", "5 cm", "7 cm³", "9 cm"],
      correctOption: "5 cm",
      explanation: "c^2=a^2+b^2, 𝑐^2=4^2+3^2, c^2=16+9, c^2=25, 𝑐=5",
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
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true); // Tampilkan pembahasan
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

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
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

export default LatihanSoalStatistika;
