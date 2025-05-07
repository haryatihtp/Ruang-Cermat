import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Sebuah benda bermassa 2 kg didorong dengan gaya sebesar 10 N hingga berpindah sejauh 5 m. Berapakah usaha yang dilakukan pada benda tersebut?",
      options: ["10 J", "20 J", "50 J", "100 J"],
      correctOption: "50 J",
      explanation: "Usaha dihitung dengan rumus W = F × d. Jadi, W = 10 × 5 = 50 J.",
    },
    {
      question: "Seorang anak mendorong meja sejauh 3 m dengan gaya 15 N yang membentuk sudut 30° terhadap arah perpindahan. Berapakah usaha yang dilakukan?",
      options: ["22,5 J", "39 J", "45 J", "90 J"],
      correctOption: "39 J",
      explanation: "Usaha W = F × d × cos θ. Jadi, W = 15 × 3 × cos 30° = 39 J.",
    },
    {
      question: "Sebuah bola dilempar ke atas dengan gaya 100 N dan bergerak sejauh 2 m. Berapakah usaha yang dilakukan pada bola?",
      options: ["100 J", "150 J", "200 J", "250 J"],
      correctOption: "200 J",
      explanation: "Usaha dihitung dengan W = F × d. Jadi, W = 100 × 2 = 200 J.",
    },
    {
      question: "Sebuah mesin melakukan usaha sebesar 300 J dalam waktu 10 detik. Berapakah daya yang dihasilkan mesin tersebut?",
      options: ["30 W", "50 W", "300 W", "100 W"],
      correctOption: "30 W",
      explanation: "Daya dihitung dengan P = W / t. Jadi, P = 300 / 10 = 30 W.",
    },
    {
      question: "Sebuah benda bermassa 5 kg jatuh bebas dari ketinggian 4 m. Berapakah usaha yang dilakukan oleh gaya gravitasi (g = 10 m/s²)?",
      options: ["100 J", "150 J", "200 J", "250 J"],
      correctOption: "200 J",
      explanation: "Usaha gravitasi W = m × g × h. Jadi, W = 5 × 10 × 4 = 200 J.",
    },
    {
      question: "Berapakah usaha yang dilakukan jika sebuah gaya 50 N menggerakkan benda sejauh 10 m tetapi gaya tersebut tegak lurus terhadap perpindahan?",
      options: ["0 J", "50 J", "100 J", "500 J"],
      correctOption: "0 J",
      explanation: "Usaha W = F × d × cos θ. Jika gaya tegak lurus, cos 90° = 0, sehingga W = 0 J.",
    },
    {
      question: "Sebuah benda bermassa 10 kg ditarik sejauh 5 m di atas bidang datar dengan gaya 50 N yang sejajar dengan bidang. Berapakah usaha yang dilakukan?",
      options: ["50 J", "150 J", "250 J", "500 J"],
      correctOption: "250 J",
      explanation: "Usaha W = F × d. Jadi, W = 50 × 5 = 250 J.",
    },
    {
      question: "Sebuah gaya 30 N bekerja pada benda untuk memindahkannya sejauh 4 m. Jika sudut antara gaya dan perpindahan adalah 60°, berapakah usaha yang dilakukan?",
      options: ["60 J", "120 J", "240 J", "480 J"],
      correctOption: "60 J",
      explanation: "Usaha W = F × d × cos θ. Jadi, W = 30 × 4 × cos 60° = 60 J.",
    },
    {
      question: "Sebuah benda bermassa 3 kg dipindahkan sejauh 5 m di atas bidang miring dengan gaya 25 N yang membentuk sudut 45° terhadap perpindahan. Berapakah usaha yang dilakukan?",
      options: ["88 J", "125 J", "150 J", "250 J"],
      correctOption: "88 J",
      explanation: "Usaha W = F × d × cos θ. Jadi, W = 25 × 5 × cos 45° ≈ 88 J.",
    },
    {
      question: "Sebuah mesin melakukan usaha sebesar 1200 J selama 2 menit. Berapakah daya yang dihasilkan mesin tersebut?",
      options: ["10 W", "50 W", "100 W", "120 W"],
      correctOption: "10 W",
      explanation: "Daya dihitung dengan P = W / t. Jadi, P = 1200 / 120 = 10 W.",
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
    </div>
  );
};

export default LatihanSoal3;