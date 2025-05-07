import React, { useState } from "react";
import "../css/QuestionPage.css";

const Latihansoal5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Sebuah benda bergerak melingkar dengan jari-jari lintasan 2 m dan kecepatan sudut 5 rad/s. Berapakah kecepatan linearnya?",
      options: ["10 m/s", "5 m/s", "2.5 m/s", "20 m/s"],
      correctOption: "10 m/s",
      explanation: "Kecepatan linear v = ω x r. Jadi, v = 5 x 2 = 10 m/s.",
    },
    {
      question: "Benda dengan massa 0,5 kg bergerak melingkar dengan jari-jari 3 m dan kecepatan linear 4 m/s. Berapakah gaya sentripetalnya?",
      options: ["8 N", "16 N", "4 N", "24 N"],
      correctOption: "16 N",
      explanation: "Gaya sentripetal F = m x v^2 / r. Jadi, F = 0,5 x 4^2 / 3 = 16/3 ≈ 16 N.",
    },
    {
      question: "Sebuah roda berputar dengan percepatan sudut 2 rad/s^2 selama 5 detik. Jika kecepatan sudut awalnya 3 rad/s, berapakah kecepatan sudut akhirnya?",
      options: ["13 rad/s", "10 rad/s", "8 rad/s", "5 rad/s"],
      correctOption: "13 rad/s",
      explanation: "Kecepatan sudut akhir ω = ω₀ + α x t. Jadi, ω = 3 + 2 x 5 = 13 rad/s.",
    },
    {
      question: "Berapakah frekuensi benda yang berputar dengan periode 0,25 detik?",
      options: ["2 Hz", "4 Hz", "8 Hz", "16 Hz"],
      correctOption: "4 Hz",
      explanation: "Frekuensi f = 1 / T. Jadi, f = 1 / 0,25 = 4 Hz.",
    },
    {
      question: "Benda dengan massa 2 kg bergerak melingkar dengan jari-jari 1 m dan kecepatan sudut 6 rad/s. Berapakah energinya?",
      options: ["36 J", "72 J", "18 J", "54 J"],
      correctOption: "36 J",
      explanation: "Energi kinetik rotasi E = 1/2 m x v^2. Dengan v = r x ω, maka E = 1/2 x 2 x (6 x 1)^2 = 36 J.",
    },
    {
      question: "Roda berputar dengan kecepatan sudut 12 rad/s dan jari-jari 0,5 m. Berapakah percepatan sentripetal pada titik terluar roda?",
      options: ["36 m/s^2", "72 m/s^2", "24 m/s^2", "18 m/s^2"],
      correctOption: "72 m/s^2",
      explanation: "Percepatan sentripetal a = ω^2 x r. Jadi, a = 12^2 x 0,5 = 72 m/s^2.",
    },
    {
      question: "Sebuah benda menyelesaikan 240 putaran dalam 1 menit. Berapakah kecepatan sudutnya dalam rad/s?",
      options: ["8π rad/s", "16π rad/s", "24π rad/s", "32π rad/s"],
      correctOption: "16π rad/s",
      explanation: "Kecepatan sudut ω = 2π x f. Dengan f = 240 / 60 = 4 Hz, maka ω = 2π x 4 = 16π rad/s.",
    },
    {
      question: "Jika sebuah benda bergerak melingkar dengan percepatan sudut 4 rad/s^2 selama 6 detik, berapakah sudut yang ditempuhnya?",
      options: ["36 rad", "72 rad", "144 rad", "288 rad"],
      correctOption: "72 rad",
      explanation: "Sudut  θ  = 1/2 x α  x t^2. Jadi, θ = 1/2 x 4 x 6^2 = 72 rad.",
    },
    {
      question: "Sebuah cakram berputar dengan percepatan sudut 3 rad/s². Jika dalam 5 detik sudut yang ditempuh adalah 75 rad, berapakah kecepatan sudut awal cakram tersebut?",
      options: ["5 rad/s", "10 rad/s", "15 rad/s", "20 rad/s"],
      correctOption: "10 rad/s",
      explanation: "Gunakan θ = ω₀ x t + 1/2 x α x t². Dengan θ = 75, α = 3, dan t = 5, maka ω₀ = 10 rad/s.",
    },
    {
      question: "Benda bergerak melingkar dengan jari-jari 4 m dan kecepatan sudut 2 rad/s. Berapakah periode geraknya?",
      options: ["2π s", "π s", "1/2π s", "1/π s"],
      correctOption: "π s",
      explanation: "Periode T = 2π / ω. Jadi, T = 2π / 2 = π s.",
    },
    {
      question: "Sebuah roda dengan jari-jari 0,25 m berputar dengan frekuensi 6 Hz. Berapakah kecepatan linear pada titik terluar roda?",
      options: ["3π m/s", "6π m/s", "12π m/s", "24π m/s"],
      correctOption: "3π m/s",
      explanation: "v = r x ω. Dengan ω = 2π x f = 12π, maka v = 0,25 x 12π = 3π m/s.",
    },
    {
      question: "Jika sebuah benda menyelesaikan satu putaran dalam 0,5 detik, berapakah kecepatan sudutnya?",
      options: ["4 rad/s", "6 rad/s", "8 rad/s", "12 rad/s"],
      correctOption: "4 rad/s",
      explanation: "ω = 2π / T. Jadi, ω = 2π / 0,5 = 4 rad/s.",
    },
    {
      question: "Sebuah bola bergerak melingkar dengan jari-jari lintasan 2 m dan percepatan sentripetal 8 m/s^2. Berapakah kecepatan linear bola tersebut?",
      options: ["4 m/s", "8 m/s", "16 m/s", "32 m/s"],
      correctOption: "4 m/s",
      explanation: "Percepatan sentripetal a = v^2 / r. Jadi, v =  √(a x r) =  √(8 x 2) = 4 m/s.",
    },
    {
      question: "Jika massa benda 0,4 kg dan gaya sentripetal yang bekerja adalah 8 N, berapakah kecepatan linearnya pada lintasan berjari-jari 2 m?",
      options: ["2 m/s", "4 m/s", "6 m/s", "8 m/s"],
      correctOption: "4 m/s",
      explanation: "F = m x v^2 / r. Dengan F = 8, m = 0,4, dan r = 2, maka v^2 = 16, sehingga v = 4 m/s.",
    },
    {
      question: "Berapakah percepatan sudut jika kecepatan sudut berubah dari 10 rad/s menjadi 30 rad/s dalam 5 detik?",
      options: ["2 rad/s^2", "4 rad/s^2", "5 rad/s^2", "6 rad/s^2"],
      correctOption: "4 rad/s^2",
      explanation: "Percepatan sudut α = (ω_f - ω_i) / t. Jadi, α= (30 - 10) / 5 = 4 rad/s^2.",
    },
    {
      question: "Sebuah benda berputar 10 kali dalam 2 detik. Berapakah kecepatan sudutnya?",
      options:["5π rad/s", "10π rad/s", "20π rad/s", "40π rad/s"],
      correctOption: "10π rad/s",
      explanation: "Kecepatan sudut ω = 2π x f. Dengan f = 10 / 2 = 5 Hz, maka ω = 2π x 5 = 10π rad/s.",
    },
    {
      question: "Sebuah cakram memiliki momen inersia 2 kg·m² dan berputar dengan kecepatan sudut 5 rad/s. Berapakah energi kinetiknya?",
      options: ["10 J", "25 J", "50 J", "100 J"],
      correctOption: "25 J",
      explanation: "Energi kinetik rotasi E = 1/2 x I x ω². Jadi, E = 1/2 x 2 x 5² = 25 J.",
    },
    {
      question: "Sebuah benda memiliki percepatan sudut 2 rad/s^2 dan sudut awal 0 rad. Jika setelah 4 detik, sudut akhirnya adalah 32 rad, berapakah kecepatan sudut awalnya?",
      options: ["6 rad/s", "4 rad/s", "8 rad/s", "10 rad/s"],
      correctOption: "8 rad/s",
      explanation: "Gunakan θ = ω₀ x t + 1/2 α x t². Dengan θ = 32, α = 2, dan t = 4, maka ω₀ = 8 rad/s.",
    },
    {
      question: "Sebuah kipas angin berputar dengan kecepatan sudut 120 rad/s. Jika kipas memiliki 3 bilah dengan panjang masing-masing 0,5 m, berapa kelajuan linear ujung bilah?",
      options: ["30 m/s", "50 m/s", "60 m/s", "75 m/s"],
      correctOption: "60 m/s",
      explanation: "Kelajuan linear dihitung dengan v = r x ω. Jadi, v = 0,5 x 120 = 60 m/s.",
    },
    {
      question: "Sebuah kincir angin memiliki kecepatan sudut 2π rad/s. Jika jari-jari kincir adalah 3 m, berapa kelajuan linear titik pada ujung kincir?",
      options:  ["6π m/s", "9π m/s", "12π m/s", "15π m/s"],
      correctOption: "6π m/s",
      explanation: "Kelajuan linear dihitung dengan  v = r x ω. Jadi, v = 3 x 2π = 6π m/s.",
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

export default Latihansoal5;