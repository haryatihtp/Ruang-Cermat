import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanGeometri = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  { pertanyaan: "Jika 2^x = 16, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "4", penjelasan: "Karena 2^4 = 16, maka nilai x adalah 4." },
  { pertanyaan: "Berapakah nilai log_2(32)?", opsi: ["4", "5", "6", "7"], jawaban: "5", penjelasan: "Karena 2^5 = 32, maka log_2(32) = 5." },
  { pertanyaan: "Jika 8^x = 64, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "2", penjelasan: "Karena 8^2 = 64, maka nilai x adalah 2." },
  { pertanyaan: "Berapakah nilai log_10(1000)?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 10^3 = 1000, maka log_10(1000) = 3." },
  { pertanyaan: "Jika log_2(x) = 3, maka nilai x adalah?", opsi: ["6", "8", "12", "16"], jawaban: "8", penjelasan: "Karena 2^3 = 8, maka nilai x adalah 8." },
  { pertanyaan: "Jika 5^x = 125, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 5^3 = 125, maka nilai x adalah 3." },
  { pertanyaan: "Berapakah nilai log_5(25)?", opsi: ["2", "3", "4", "5"], jawaban: "2", penjelasan: "Karena 5^2 = 25, maka log_5(25) = 2." },
  { pertanyaan: "Jika log_3(81) = x, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "4", penjelasan: "Karena 3^4 = 81, maka nilai x adalah 4." },
  { pertanyaan: "Berapakah nilai log_4(64)?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 4^3 = 64, maka log_4(64) = 3." },
  { pertanyaan: "Jika 2^(2x) = 64, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 2^(2*3) = 64, maka nilai x adalah 3." }
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
