import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanGeometri = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Keliling sebuah persegi panjang dengan panjang 8 cm dan lebar 6 cm adalah?",
    options: ["28 cm", "30 cm", "48 cm", "56 cm"],
    correctOption: "28 cm",
    explanation: "Keliling persegi panjang = 2 × (panjang + lebar) = 2 × (8 cm + 6 cm) = 28 cm.",
  },
  {
    question: "Luas jajar genjang dengan alas 10 cm dan tinggi 5 cm adalah?",
    options: ["50 cm²", "40 cm²", "30 cm²", "20 cm²"],
    correctOption: "50 cm²",
    explanation: "Luas jajar genjang = alas × tinggi = 10 cm × 5 cm = 50 cm².",
  },
  {
    question: "Sebuah lingkaran memiliki diameter 10 cm. Berapa panjang jari-jari lingkaran?",
    options: ["5 cm", "10 cm", "7 cm", "15 cm"],
    correctOption: "5 cm",
    explanation: "Jari-jari lingkaran = diameter / 2 = 10 cm / 2 = 5 cm.",
  },
  {
    question: "Luas belah ketupat dengan diagonal 1 = 12 cm dan diagonal 2 = 16 cm adalah?",
    options: ["96 cm²", "72 cm²", "60 cm²", "80 cm²"],
    correctOption: "96 cm²",
    explanation: "Luas belah ketupat = 1/2 × diagonal 1 × diagonal 2 = 1/2 × 12 cm × 16 cm = 96 cm².",
  },
  {
    question: "Keliling sebuah lingkaran dengan diameter 14 cm adalah?",
    options: ["44 cm", "49 cm", "42 cm", "38 cm"],
    correctOption: "44 cm",
    explanation: "Keliling lingkaran = π × diameter = 3.14 × 14 cm = 44 cm.",
  },
  {
    question: "Luas trapesium dengan sisi sejajar 8 cm dan 12 cm serta tinggi 6 cm adalah?",
    options: ["60 cm²", "72 cm²", "84 cm²", "96 cm²"],
    correctOption: "60 cm²",
    explanation: "Luas trapesium = 1/2 × (sisi 1 + sisi 2) × tinggi = 1/2 × (8 cm + 12 cm) × 6 cm = 60 cm².",
  },
  {
    question: "Keliling sebuah segitiga dengan sisi 5 cm, 7 cm, dan 8 cm adalah?",
    options: ["20 cm", "18 cm", "22 cm", "24 cm"],
    correctOption: "20 cm",
    explanation: "Keliling segitiga = sisi 1 + sisi 2 + sisi 3 = 5 cm + 7 cm + 8 cm = 20 cm.",
  },
  {
    question: "Volume kubus dengan panjang sisi 4 cm adalah?",
    options: ["64 cm³", "48 cm³", "32 cm³", "16 cm³"],
    correctOption: "64 cm³",
    explanation: "Volume kubus = sisi³ = 4 cm × 4 cm × 4 cm = 64 cm³.",
  },
  {
    question: "Luas permukaan balok dengan panjang 6 cm, lebar 4 cm, dan tinggi 3 cm adalah?",
    options: ["72 cm²", "48 cm²", "60 cm²", "54 cm²"],
    correctOption: "72 cm²",
    explanation: "Luas permukaan balok = 2 × (panjang × lebar + panjang × tinggi + lebar × tinggi) = 2 × (6 cm × 4 cm + 6 cm × 3 cm + 4 cm × 3 cm) = 72 cm².",
  },
  {
    question: "Volume tabung dengan jari-jari 5 cm dan tinggi 10 cm adalah?",
    options: ["785 cm³", "314 cm³", "157 cm³", "500 cm³"],
    correctOption: "785 cm³",
    explanation: "Volume tabung = π × r² × tinggi = 3.14 × (5 cm)² × 10 cm = 785 cm³.",
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

export default LatihanGeometri;
