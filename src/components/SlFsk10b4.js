import React, { useState } from "react";
import "../css/QuestionPage.css";

const Latihansoal4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Sebuah mobil bergerak dengan kecepatan tetap 15 m/s. Apa jenis gerak yang dilakukan mobil tersebut?",
      options: ["Gerak Lurus Beraturan", "Gerak Lurus Berubah Beraturan", "Gerak Melingkar", "Gerak Vertikal"],
      correctOption: "Gerak Lurus Beraturan",
      explanation: "Gerak dengan kecepatan tetap disebut gerak lurus beraturan (GLB).",
    },
    {
      question: "Benda jatuh bebas dari ketinggian 50 m. Berapa lama waktu yang dibutuhkan benda tersebut sampai mencapai tanah?",
      options: ["3 detik", "5 detik", "7 detik", "10 detik"],
      correctOption: "3 detik",
      explanation: "Waktu untuk benda jatuh bebas dihitung dengan rumus t = √(2h / g), dengan h = 50 m dan g = 10 m/s², maka t = √(2 x 50 / 10) = 3 detik.",
    },
    {
      question: "Sebuah bola dilempar vertikal ke atas dengan kecepatan awal 20 m/s. Berapa waktu yang dibutuhkan bola untuk mencapai ketinggian tertinggi?",
      options: ["2 detik", "3 detik", "5 detik", "7 detik"],
      correctOption: "2 detik",
      explanation: "Waktu untuk mencapai ketinggian tertinggi dihitung dengan rumus v = v₀ - g x t. Dengan v = 0 m/s, v₀ = 20 m/s, dan g = 10 m/s², maka t = 2 detik.",
    },
    {
      question: "Sebuah bola dilempar ke atas dengan kecepatan awal 12 m/s. Berapa tinggi maksimum yang dicapai bola tersebut?",
      options: ["7,2 m", "12 m", "18 m", "25 m"],
      correctOption: "7,2 m",
      explanation: "Tinggi maksimum dicapai ketika kecepatan akhir menjadi 0 m/s. Dengan rumus h = v₀² / (2g), h = 12² / (2 x 10) = 7,2 m.",
    },
    {
      question: "Benda jatuh bebas dari ketinggian 80 m. Berapa kecepatan benda saat mencapai tanah?",
      options: ["20 m/s", "28,3 m/s", "40 m/s", "50 m/s"],
      correctOption: "40 m/s",
      explanation: "Kecepatan saat mencapai tanah dihitung dengan rumus v = √(2gh), dengan g = 10 m/s² dan h = 80 m, maka v = √(2 x 10 x 80) = 40 m/s.",
    },
    {
      question: "Sebuah benda bergerak dengan percepatan 3 m/s² selama 6 detik dari keadaan diam. Berapa kecepatan akhir benda tersebut?",
      options: ["15 m/s", "18 m/s", "20 m/s", "22 m/s"],
      correctOption: "18 m/s",
      explanation: "Kecepatan akhir dihitung dengan rumus v = v₀ + a x t. Dengan v₀ = 0, a = 3 m/s², dan t = 6 detik, maka v = 0 + 3 x 6 = 18 m/s.",
    },
    {
      question: "Sebuah benda bergerak dengan kecepatan 20 m/s dan mengalami percepatan -2 m/s². Berapa waktu yang dibutuhkan benda tersebut untuk berhenti?",
      options: ["5 detik", "10 detik", "15 detik", "20 detik"],
      correctOption: "10 detik",
      explanation: "Waktu yang dibutuhkan untuk berhenti dihitung dengan rumus t = (v - v₀) / a. Dengan v = 0 m/s, v₀ = 20 m/s, dan a = -2 m/s², maka t = (0 - 20) / -2 = 10 detik.",
    },
    {
      question: "Sebuah benda bergerak dengan kecepatan awal 10 m/s dan percepatan 4 m/s² selama 3 detik. Berapa jarak yang ditempuh?",
      options: ["30 m", "40 m", "50 m", "60 m"],
      correctOption: "60 m",
      explanation: "Jarak yang ditempuh dihitung dengan rumus s = v₀ x t + 1/2 x a x t². Dengan v₀ = 10 m/s, a = 4 m/s², dan t = 3 detik, maka s = 10 x 3 + 1/2 x 4 x 3² = 60 m.",
    },
    {
      question: "Sebuah benda bergerak lurus dengan percepatan 5 m/s² dan kecepatan awal 0 m/s. Berapa jarak yang ditempuh dalam 4 detik?",
      options: ["40 m", "50 m", "60 m", "80 m"],
      correctOption: "40 m",
      explanation: "Jarak yang ditempuh dihitung dengan rumus s = v₀ x t + 1/2 x a x t². Dengan v₀ = 0 m/s, a = 5 m/s², dan t = 4 detik, maka s = 0 + 1/2 x 5 x 4² = 40 m.",
    },
    {
      question: "Sebuah bola dilemparkan ke atas dengan kecepatan awal 30 m/s. Berapa waktu yang dibutuhkan bola untuk kembali ke tanah?",
      options: ["3 detik", "6 detik", "9 detik", "12 detik"],
      correctOption: "6 detik",
      explanation: "Waktu total perjalanan bola dihitung dengan rumus t = 2 x v₀ / g, dengan v₀ = 30 m/s dan g = 10 m/s², maka t = 2 x 30 / 10 = 6 detik.",
    },
    {
      question: "Sebuah benda bergerak dengan kecepatan 12 m/s dan mengalami percepatan 3 m/s². Berapa waktu yang dibutuhkan benda tersebut untuk mencapai kecepatan 24 m/s?",
      options: ["3 detik", "4 detik", "5 detik", "6 detik"],
      correctOption: "4 detik",
      explanation: "Waktu yang dibutuhkan dihitung dengan rumus t = (v - v₀) / a. Dengan v = 24 m/s, v₀ = 12 m/s, dan a = 3 m/s², maka t = (24 - 12) / 3 = 4 detik.",
    },
    {
      question: "Sebuah benda bergerak lurus dengan kecepatan awal 20 m/s dan percepatan -2 m/s². Berapa jarak yang ditempuh benda tersebut sebelum berhenti?",
      options: ["100 m", "150 m", "200 m", "250 m"],
      correctOption: "200 m",
      explanation: "Jarak yang ditempuh dihitung dengan rumus s = (v² - v₀²) / 2a. Dengan v = 0, v₀ = 20 m/s, dan a = -2 m/s², maka s = (0 - 20²) / (2 x -2) = 200 m.",
    },
    {
      question: "Benda bergerak dengan percepatan 2 m/s² selama 4 detik dari keadaan diam. Berapa kecepatan akhir benda tersebut?",
      options: ["5 m/s", "6 m/s", "7 m/s", "8 m/s"],
      correctOption: "8 m/s",
      explanation: "Kecepatan akhir dihitung dengan rumus v = v₀ + a x t. Dengan v₀ = 0, a = 2 m/s², dan t = 4 detik, maka v = 0 + 2 x 4 = 8 m/s.",
    },
    {
      question: "Bola dilemparkan vertikal ke atas dengan kecepatan awal 18 m/s. Berapa ketinggian maksimum yang dicapai bola tersebut?",
      options: ["16,2 m", "18 m", "20 m", "22 m"],
      correctOption: "16,2 m",
      explanation: "Tinggi maksimum dihitung dengan rumus h = v₀² / (2g), dengan v₀ = 18 m/s dan g = 10 m/s², maka h = 18² / (2 x 10) = 16,2 m.",
    },
    {
      question: "Sebuah benda bergerak dengan kecepatan 25 m/s dan mengalami percepatan -5 m/s². Berapa waktu yang dibutuhkan untuk berhenti?",
      options: ["4 detik", "5 detik", "6 detik", "7 detik"],
      correctOption: "5 detik",
      explanation: "Waktu yang dibutuhkan untuk berhenti dihitung dengan rumus t = (v - v₀) / a. Dengan v = 0 m/s, v₀ = 25 m/s, dan a = -5 m/s², maka t = (0 - 25) / -5 = 5 detik.",
    },
    {
      question: "Bola dijatuhkan dari ketinggian 100 m. Berapa kecepatan bola saat mencapai tanah?",
      options: ["40 m/s", "45 m/s", "50 m/s", "55 m/s"],
      correctOption: "44,7 m/s",
      explanation: "Kecepatan saat mencapai tanah dihitung dengan rumus v = √(2gh), dengan g = 10 m/s² dan h = 100 m, maka v = √(2 x 10 x 100) = 44,7 m/s.",
    },
    {
      question: "Sebuah benda bergerak dengan percepatan 5 m/s² selama 8 detik. Berapa jarak yang ditempuh benda tersebut?",
      options: ["160 m", "170 m", "180 m", "190 m"],
      correctOption: "160 m",
      explanation: "Jarak yang ditempuh dihitung dengan rumus s = v₀ x t + 1/2 x a x t². Dengan v₀ = 0, a = 5 m/s², dan t = 8 detik, maka s = 0 + 1/2 x 5 x 8² = 160 m.",
    },
    {
      question: "Sebuah benda bergerak dengan kecepatan awal 14 m/s dan percepatan 2 m/s² selama 5 detik. Berapa kecepatan akhir benda tersebut?",
      options: ["18 m/s", "24 m/s", "28 m/s", "30 m/s"],
      correctOption: "24 m/s",
      explanation: "Kecepatan akhir dihitung dengan rumus v = v₀ + a x t. Dengan v₀ = 14 m/s, a = 2 m/s², dan t = 5 detik, maka v = 14 + 2 x 5 = 24 m/s.",
    },
    {
      question: "Sebuah benda jatuh bebas dari ketinggian tanpa kecepatan awal. Apa jenis gerak yang dilakukan benda tersebut?",
      options: ["Gerak Lurus Beraturan", "Gerak Lurus Berubah Beraturan", "Gerak Melingkar", "Gerak Vertikal"],
      correctOption: "Gerak Lurus Berubah Beraturan",
      explanation: "Gerak jatuh bebas termasuk gerak lurus berubah beraturan (GLBB) karena percepatan gravitasi menyebabkan perubahan kecepatan secara teratur."
    },
    {
      question: "Sebuah mobil dipercepat secara konstan dari keadaan diam hingga mencapai kecepatan 20 m/s dalam 10 detik. Apa jenis gerak yang terjadi?",
      options: ["Gerak Lurus Beraturan", "Gerak Lurus Berubah Beraturan", "Gerak Melingkar", "Gerak Vertikal"],
      correctOption: "Gerak Lurus Berubah Beraturan",
      explanation: "Ketika percepatan konstan diterapkan, benda mengalami gerak lurus berubah beraturan (GLBB)."
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
    </div>
  );
};

export default Latihansoal4;