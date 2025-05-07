import React, { useState } from "react";
import "../css/QuestionPage.css";

const Latihansoal7 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
      {
        question: "Berapakah kalor yang diperlukan untuk menaikkan suhu 1 kg air dari 20°C menjadi 80°C? Diketahui kalor jenis air adalah 4200 J/kg°C.",
        options: ["168.000 J", "210.000 J", "252.000 J", "300.000 J"],
        correctOption: "252.000 J",
        explanation: "Kalor dihitung dengan Q = m . c . ΔT. Jadi, Q = 1 x 4200 x (80 - 20) = 252.000 J.",
      },
      {
        question: "Sebuah benda bermassa 2 kg memiliki kalor jenis 900 J/kg°C. Jika suhu benda naik dari 30°C menjadi 50°C, berapakah kalor yang diserap?",
        options: ["18.000 J", "36.000 J", "45.000 J", "54.000 J"],
        correctOption: "36.000 J",
        explanation: "Q = m . c . ΔT. Jadi, Q = 2 x 900 x (50 - 30) = 36.000 J.",
      },
      {
        question: "Sebuah benda menerima kalor sebesar 12.600 J sehingga suhunya naik dari 20°C menjadi 50°C. Jika massa benda 1 kg, berapakah kalor jenisnya?",
        options: ["420 J/kg°C", "4200 J/kg°C", "630 J/kg°C", "1260 J/kg°C"],
        correctOption: "420 J/kg°C",
        explanation: "Kalor jenis dihitung dengan c = Q / (m . ΔT). Jadi, c = 12.600 / (1 x 30) = 420 J/kg°C.",
      },
      {
        question: "Jika 200 gram air bersuhu 90°C dicampur dengan 300 gram air bersuhu 30°C, berapakah suhu akhir campuran? (Kalor jenis air = 4200 J/kg°C)",
        options: ["50°C", "60°C", "70°C", "80°C"],
        correctOption: "60°C",
        explanation: "Gunakan prinsip keseimbangan kalor: Qlepas = Qterima. Setelah dihitung, suhu akhirnya adalah 60°C.",
      },
      {
        question: "Berapakah kalor yang dilepas oleh 100 gram air yang didinginkan dari 100°C menjadi 50°C? Kalor jenis air = 4200 J/kg°C.",
        options: ["2100 J", "21.000 J", "42.000 J", "210.000 J"],
        correctOption: "21.000 J",
        explanation: "Q = m . c . ΔT. Jadi, Q = 0,1 x 4200 x (100 - 50) = 21.000 J.",
      },
      {
        question: "Sebuah es bermassa 2 kg pada suhu -10°C dipanaskan hingga mencair seluruhnya pada 0°C. Berapakah kalor yang dibutuhkan? (Kalor jenis es = 2100 J/kg°C, kalor lebur es = 334.000 J/kg)",
        options: ["420.000 J", "688.000 J", "754.000 J", "920.000 J"],
        correctOption: "754.000 J",
        explanation: "Total kalor = kalor pemanasan + kalor lebur. Jadi, Q = (2 x 2100 x 10) + (2 x 334.000) = 754.000 J.",
      },
      {
        question: "Berapakah suhu akhir campuran antara 0,5 kg air bersuhu 80°C dan 0,3 kg es pada 0°C? (Kalor lebur es = 334.000 J/kg, kalor jenis air = 4200 J/kg°C)",
        options: ["0°C", "20°C", "40°C", "60°C"],
        correctOption: "20°C",
        explanation: "Gunakan prinsip keseimbangan kalor: Qlepas air = Qlebur es + Qair. Setelah dihitung, suhu akhirnya adalah 20°C.",
      },
      {
        question: "Jika 1 kg besi dengan kalor jenis 450 J/kg°C didinginkan dari 200°C menjadi 25°C, berapakah kalor yang dilepaskan?",
        options: ["78.750 J", "87.500 J", "100.000 J", "125.000 J"],
        correctOption: "78.750 J",
        explanation: "Q = m . c . ΔT. Jadi, Q = 1 x 450 x (200 - 25) = 78.750 J.",
      },
      {
        question: "Sebuah aluminium bermassa 2 kg menerima kalor 18.000 J sehingga suhunya naik dari 25°C menjadi 50°C. Berapakah kalor jenis aluminium tersebut?",
        options: ["300 J/kg°C", "360 J/kg°C", "400 J/kg°C", "450 J/kg°C"],
        correctOption: "360 J/kg°C",
        explanation: "c = Q / (m . ΔT). Jadi, c = 18.000 / (2 x 25) = 360 J/kg°C.",
      },
      {
        question: "Sebuah es bermassa 0,2 kg pada suhu 0°C mencair seluruhnya. Berapakah kalor yang diperlukan? (Kalor lebur es = 334.000 J/kg)",
        options: ["33.400 J", "66.800 J", "88.000 J", "134.000 J"],
        correctOption: "66.800 J",
        explanation: "Q = m . L. Jadi, Q = 0,2 x 334.000 = 66.800 J.",
      },
      {
        question: "Berapakah kalor yang dibutuhkan untuk memanaskan 2 kg air dari 20°C ke 80°C? (Kalor jenis air = 4200 J/kg·°C)",
        options: ["252 kJ", "336 kJ", "420 kJ", "504 kJ"],
        correctOption: "504 kJ",
        explanation: "Kalor dihitung dengan Q = m·c·ΔT. Jadi, Q = 2·4200·(80-20) = 504.000 J = 504 kJ.",
      },
      {
        question: "Sebongkah es dengan massa 0,5 kg dan suhu 0°C akan mencair seluruhnya. Berapa kalor yang dibutuhkan? (Kalor lebur es = 334.000 J/kg)",
        options: ["167 kJ", "1670 kJ", "334 kJ", "3340 kJ"],
        correctOption: "167 kJ",
        explanation: "Kalor dihitung dengan Q = m·L. Jadi, Q = 0,5·334.000 = 167.000 J = 167 kJ.",
      },
      {
        question: "Sebuah benda dengan massa 1 kg membutuhkan 25.000 J untuk menaikkan suhu dari 30°C ke 80°C. Berapakah kalor jenis benda tersebut?",
        options: ["250 J/kg·°C", "500 J/kg·°C", "750 J/kg·°C", "1000 J/kg·°C"],
        correctOption: "500 J/kg·°C",
        explanation: "Kalor jenis dihitung dengan c = Q / (m·ΔT). Jadi, c = 25.000 / (1·50) = 500 J/kg·°C.",
      },
      {
        question: "Dua zat dengan massa dan kalor jenis yang sama menerima kalor yang sama. Zat A mengalami kenaikan suhu 10°C, sedangkan zat B mengalami kenaikan suhu 15°C. Apa yang dapat disimpulkan?",
        options: ["Zat A memiliki kalor jenis lebih besar", "Zat B memiliki kalor jenis lebih besar", "Zat B memiliki massa lebih besar", "Zat A dan Zat B identik"],
        correctOption: "Zat A memiliki kalor jenis lebih besar",
        explanation: "Kalor jenis berbanding terbalik dengan kenaikan suhu untuk massa dan kalor sama.",
      },
      {
        question: "Berapa besar kalor yang diperlukan untuk mengubah 2 kg air pada suhu 100°C menjadi uap air sepenuhnya? (Kalor uap air = 2.260.000 J/kg)",
        options: ["452 kJ", "904 kJ", "2260 kJ", "4520 kJ"],
        correctOption: "4520 kJ",
        explanation: "Kalor dihitung dengan Q = m·L. Jadi, Q = 2·2.260.000 = 4.520.000 J = 4520 kJ.",
      },
      {
        question: "Berapa suhu akhir campuran jika 1 kg air bersuhu 80°C dicampur dengan 2 kg air bersuhu 30°C? (Kalor jenis air = 4200 J/kg·°C)",
        options: ["46°C", "50°C", "53°C", "60°C"],
        correctOption: "50°C",
        explanation: "Gunakan hukum kekekalan energi kalor: m1·c·(T1-T) = m2·c·(T-T2). Jadi, T = (m1·T1 + m2·T2) / (m1 + m2).",
      },
      {
        question: "Sebuah zat dengan massa 0,5 kg menerima kalor sebesar 4200 J dan mengalami kenaikan suhu 20°C. Berapakah kalor jenis zat tersebut?",
        options: ["210 J/kg·°C", "420 J/kg·°C", "630 J/kg·°C", "840 J/kg·°C"],
        correctOption: "420 J/kg·°C",
        explanation: "Kalor jenis dihitung dengan c = Q / (m·ΔT). Jadi, c = 4200 / (0,5·20) = 420 J/kg·°C.",
      },
      {
        question: "Berapakah suhu akhir campuran jika 0,5 kg es pada 0°C dicampur dengan 1 kg air pada 50°C? (Kalor lebur es = 334.000 J/kg, kalor jenis air = 4200 J/kg·°C)",
        options: ["0°C", "10°C", "20°C", "30°C"],
        correctOption: "10°C",
        explanation: "Gunakan hukum kekekalan energi kalor, mempertimbangkan perubahan wujud es menjadi air.",
      },
      {
        question: "Berapa kapasitas kalor sebuah benda jika membutuhkan 8400 J untuk menaikkan suhu sebesar 40°C?",
        options: ["210 J/°C", "420 J/°C", "630 J/°C", "840 J/°C"],
        correctOption: "210 J/°C",
        explanation: "Kapasitas kalor dihitung dengan C = Q / ΔT. Jadi, C = 8400 / 40 = 210 J/°C.",
      },
      {
        question: "Berapa massa zat yang memerlukan 12.600 J untuk meningkatkan suhu dari 20°C ke 50°C? (Kalor jenis zat = 420 J/kg·°C)",
        options: ["1 kg", "2 kg", "3 kg", "4 kg"],
        correctOption: "1 kg",
        explanation: "Massa dihitung dengan m = Q / (c·ΔT). Jadi, m = 12.600 / (420·30) = 1 kg.",
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

export default Latihansoal7;