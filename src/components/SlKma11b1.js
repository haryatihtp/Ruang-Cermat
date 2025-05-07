import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
question:"Apa jenis hidrokarbon yang hanya memiliki ikatan tunggal antar atom karbon?",
        options: ["Alkana", "Alkena", "Alkuna", "Aren"],
      correctOption: "Alkana",
      explanation: "Alkana hanya memiliki ikatan tunggal antar atom karbon.",
    },
    {
        question: "Minyak bumi terutama terdiri dari senyawa apa?",
        options: ["Karbohidrat", "Asam Amino", "Hidrokarbon", "Protein"],
      correctOption: "Hidrokarbon",
      explanation: "Minyak bumi sebagian besar terdiri dari hidrokarbon.",
    },
    {
        question: "Apa nama proses yang digunakan untuk memisahkan komponen minyak bumi?",
        options: ["Fermentasi", "Hidrolisisi", "Destilasi Fraksional", "Polimerasi"],
      correctOption: "Destilasi Fraksional",
      explanation: "Destilasi fraksional memisahkan komponen minyak bumi berdasarkan titik didih.",
    },
    {
        question: "Apa produk utama dari pembakaran sempurna hidrokarbon?",
        options: ["Karbon dioksida dan air", "Karbon Monoksida dan Air", "Hidrogen dan Karbon", "Metana dan Oksigen"],
      correctOption: "Karbon dioksida dan air",
      explanation: "Pembakaran sempurna menghasilkan karbon dioksida dan air.",
    },
    {
        question: "Apa jenis reaksi yang terjadi pada pembakaran hidrokarbon?",
        options: ["Reduksi", "Eksoterm", "Endoterm", "Netralisasi"],
      correctOption: "Eksoterm",
      explanation: "Reaksi pembakaran hidrokarbon bersifat eksoterm karena menghasilkan energi panas.",
      },
    {
        question: "Apa nama senyawa hidrokarbon yang memiliki cincin benzena sebagai bagian dari strukturnya?",
        options: ["Alkana", "Alkena", "Aren", "Alkohol","Alkuna"],
      correctOption: "Aren",
      explanation: "Aren adalah hidrokarbon aromatik yang memiliki cincin benzena.",
      },
    {
        question: "Apa nama senyawa hidrokarbon yang mengandung ikatan rangkap dua?",
        options: ["Alkana", "Alkena", "Aren", "Alkohol","Alkuna"],
      correctOption: "Alkena",
      explanation: "Alkena adalah senyawa hidrokarbon yang memiliki ikatan rangkap dua antara atom karbon.",
      },
    {
        question: "Apa yang dimaksud dengan fraksi minyak bumi?",
        options: ["Bagian minyak bumi yang dipisahkan berdasarkan titik didih","Gas yang dihasilkan dalam pembakaran minyak bumi","Senyawa kimia yang ditemukan dalam minyak bumi","Proses pengolahan minyak bumi"],
      correctOption: "Bagian minyak bumi yang dipisahkan berdasarkan titik didih",
      explanation: "Fraksi minyak bumi adalah komponen-komponen yang dipisahkan berdasarkan perbedaan titik didih melalui proses distilasi.",
      },
    {
        question: "Hidrokarbon jenis apakah yang memiliki ikatan rangkap tiga antar atom karbon?",
        options: ["Alkana", "Alkena", "Aren", "Alkohol","Alkuna"],
      correctOption: "Alkuna",
      explanation: "Alkuna adalah senyawa hidrokarbon yang memiliki ikatan rangkap tiga antara atom karbon.",
   },
    {
        question: "Bagaimana cara pengolahan minyak bumi menjadi produk yang dapat digunakan?",
        options: ["Distilasi Fraksional", "Polimerasi", "Pembakaran", "Fermentasi","Penguapan"],
      correctOption: "Distilasi Fraksional",
      explanation: "Pengolahan minyak bumi dilakukan dengan distilasi fraksional untuk memisahkan komponen-komponennya.",
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

export default LatihanSoal3;
