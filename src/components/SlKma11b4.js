import React, { useState } from "react";
import "./../css/QuestionPage.css";

const LatihanSoal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan kesetimbangan kimia?",
      options: [
        "A. Keadaan di mana semua reaktan telah habis bereaksi",
        "B. Keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik",
        "C. Keadaan di mana reaksi berhenti sepenuhnya",
        "D. Keadaan di mana hanya reaktan yang tersisa",
      ],
      correctOption: "B",
      explanation:
        "Kesetimbangan kimia adalah keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik, sehingga konsentrasi reaktan dan produk tetap konstan.",
    },
    {
      question: "Apa pengaruh kenaikan tekanan pada reaksi kesetimbangan gas?",
      options: [
        "A. Reaksi bergeser ke arah jumlah mol gas yang lebih besar",
        "B. Reaksi bergeser ke arah jumlah mol gas yang lebih kecil",
        "C. Tidak ada pengaruh",
        "D. Bergantung pada suhu reaksi",
      ],
      correctOption: "B",
      explanation:
        "Kenaikan tekanan menyebabkan reaksi bergeser ke arah yang memiliki jumlah mol gas lebih kecil untuk mengurangi tekanan.",
    },
    {
      question: "Apa yang dimaksud dengan hukum kekekalan massa?",
      options: [
        "A. Massa hanya bisa bertambah selama reaksi berlangsung",
        "B. Massa tetap konstan selama reaksi kimia",
        "C. Massa tidak ada hubungannya dengan reaksi kimia",
        "D. Massa dapat berubah selama reaksi kimia",
      ],
      correctOption: "B",
      explanation:
        "Hukum kekekalan massa menyatakan bahwa massa tidak dapat diciptakan atau dihancurkan dalam suatu reaksi kimia. Massa total reaktan sama dengan massa total produk.",
    },
    {
      question: "Apa yang terjadi jika suhu diturunkan pada reaksi kesetimbangan eksotermik?",
      options: [
        "A. Reaksi bergeser ke arah reaktan",
        "B. Reaksi bergeser ke arah produk",
        "C. Tidak ada perubahan",
        "D. Reaksi berhenti",
      ],
      correctOption: "B",
      explanation:
        "Pada reaksi eksotermik, penurunan suhu akan menggeser kesetimbangan ke arah produk untuk menghasilkan lebih banyak panas.",
    },
    {
      question: "Apa yang dimaksud dengan reaksi redoks?",
      options: [
        "A. Reaksi di mana hanya reaktan yang terlibat",
        "B. Reaksi yang melibatkan transfer elektron antara zat yang terlibat",
        "C. Reaksi yang hanya terjadi di dalam larutan",
        "D. Reaksi yang melibatkan pembentukan gas",
      ],
      correctOption: "B",
      explanation:
        "Reaksi redoks adalah reaksi kimia di mana terjadi transfer elektron antara zat yang terlibat, dengan satu zat tereduksi dan zat lainnya teroksidasi.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      resetSelection();
    } else {
      setIsFinished(true); // Finish the quiz when all questions are answered
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
    if (option === questions[currentQuestion - 1].correctOption) {
      setScore(score + 1);
    }
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
      setShowConfirmation(true); // Show explanation popup
    }
    setShowConfirmation(false); // Hide confirmation popup
  };

  if (isFinished) {
    return (
      <div className="question-page">
        <div className="question-container">
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button
            className="oval-button next-button"
            onClick={() => {
              setScore(0);
              setCurrentQuestion(1);
              setIsFinished(false);
            }}
          >
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

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

export default LatihanSoal;
