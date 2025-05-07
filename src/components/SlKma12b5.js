import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa rumus molekul benzena?",
      options: ["C6H6", "C6H12", "C6H10", "C6H8"],
      correctOption: "C6H6",
      explanation: "Rumus molekul benzena adalah C6H6, yang menunjukkan bahwa benzena terdiri dari enam atom karbon dan enam atom hidrogen.",
    },
    {
      question: "Benzena termasuk dalam golongan senyawa apa?",
      options: ["Alkohol", "Amina", "Aromatik", "Alkana"],
      correctOption: "Aromatik",
      explanation: "Benzena adalah senyawa aromatik karena memiliki struktur cincin yang stabil dan delokalisasi elektron.",
    },
    {
      question: "Apa yang dimaksud dengan substitusi elektrofilik pada benzena?",
      options: ["Penggantian atom hidrogen dengan elektrofil", "Penambahan atom hidrogen", "Penghilangan atom karbon", "Pembentukan ikatan rangkap"],
      correctOption: "Penggantian atom hidrogen dengan elektrofil",
      explanation: "Substitusi elektrofilik adalah reaksi di mana atom hidrogen pada benzena digantikan oleh elektrofil.",
    },
    {
      question: "Senyawa turunan benzena yang memiliki gugus -OH disebut?",
      options: ["Fenol", "Aseton", "Benzaldehida", "Toluena"],
      correctOption: "Fenol",
      explanation: "Fenol adalah senyawa turunan benzena yang memiliki gugus hidroksil (-OH) yang terikat pada cincin benzena.",
    },
    {
      question: "Apa nama senyawa benzena yang memiliki satu gugus metil (-CH3) terikat?",
      options: ["Toluena", "Benzaldehida", "Anilin", "Kresol"],
      correctOption: "Toluena",
      explanation: "Toluena adalah senyawa benzena yang memiliki satu gugus metil (-CH3) terikat pada cincin benzena.",
    },
    // Tambahkan soal lainnya sesuai kebutuhan
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
    setShowConfirmation(true); // Show confirmation when an option is selected
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
      setShowConfirmation(false); // Hide confirmation
    } else {
      resetSelection(); // Reset selection if user chooses not to see explanation
      setShowConfirmation(false); // Hide confirmation
    }
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

      {selectedOption && !showConfirmation && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlKma12b5;