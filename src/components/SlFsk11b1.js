import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
     question: "Hukum Newton I menyatakan bahwa ...",
     options: [
            "Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja",
            "Gaya berbanding lurus dengan percepatan",
            "Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
            "Momentum benda selalu konstan",
        ],
      correctOption: "Benda tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja",
      explanation: "Hukum Newton I atau hukum kelembaman menyatakan bahwa sebuah benda akan tetap diam atau bergerak lurus beraturan kecuali ada gaya total yang bekerja pada benda tersebut.",
    },
    {
      question: "Percepatan gravitasi di permukaan bumi adalah ...",
      options: ["10 m/s²", "8,9 m/s²", "9,8 m/s²", "9 m/s²"],
      correctOption: "9,8 m/s²",
      explanation:
      "Percepatan gravitasi di permukaan bumi adalah 9,8 m/s². Nilai ini sering dibulatkan menjadi 10 m/s² untuk mempermudah perhitungan dalam konteks tertentu.",
    },
    {
      question: "Energi kinetik suatu benda dihitung dengan rumus ...",
      options: ["m g h", "1/2 m v²", "1/2 k x²", "m a s"],
      correctOption: "1/2 m v²",
      explanation:
      "Energi kinetik dihitung dengan rumus 1/2 m v², di mana m adalah massa benda dan v adalah kecepatan benda.",
    },
    {
      question: "Rumus gaya pada sebuah benda adalah ...",
      options: [
          " F = m x a",
          " F = m x v",
          " F = m x g",
          " F = m x h",
      ],
      correctOption:  " F = m x a",
      explanation: 
          "Rumus gaya berdasarkan hukum Newton II adalah F = m x a, di mana F adalah gaya, m adalah massa, dan a adalah percepatan.",
     },
    {
      question: "Sebuah mobil mula-mula diam dan kemudian bergerak dengan percepatan konstan sebesar 2 m/s². Berapa jarak yang ditempuh mobil setelah 5 detik?",
      options:  ["10 m", "25 m", "50 m", "100 m"],
      correctOption: "10 m",
      explanation:
      " jarak yang ditempuh mobil adalah 50 m.",    
    },

    {
      question: "Kecepatan sebuah benda yang bergerak lurus dihitung dengan rumus ...",
      options: [
          " v = s / t",
          " v = a x t",
          " v = m x g",
          " v = F / m",
      ],
      correctOption:   " v = s / t",
      explanation: 
          "Kecepatan benda yang bergerak lurus dihitung dengan rumus v = s / t, di mana s adalah jarak dan t adalah waktu.",
  },

  {
    question: "Benda yang memiliki massa besar memerlukan ... untuk mempercepat geraknya.",
    options: [
        " Gaya yang lebih kecil",
        " Gaya yang lebih besar",
        " Percepatan yang lebih kecil",
        " Energi yang lebih kecil",
    ],
    correctOption:  " Gaya yang lebih besar",
    explanation:
        "Menurut hukum Newton II, gaya yang dibutuhkan untuk mempercepat benda berbanding lurus dengan massa. Benda yang lebih besar memerlukan gaya yang lebih besar untuk mempercepatnya.",
},

{
  question: "Sebuah benda bermassa 2 kg dipercepat oleh gaya sebesar 10 N pada bidang datar.Berapakah percepatan benda tersebut?.",
  options: [" 5 M/S^2", " 10 m/s^2", "2 m/s^2", " 4 m/s^2",],
  correctOption: " 5 M/S^2",
  explanation:
        "Gunakan hukum II Newton: F = m.a. Dengan massa (m) = 2 kg dan gaya (F) = 10 N, maka percepatan (a) = F / m = 10 / 2 = 5 m/s^2. Jawaban yang benar adalah A. 5 m/s^2.",
},
{
    question: "Sebuah benda di jatuhkan bebas dari ketinggian 20 meter.berapa waktu yang diperlukan benda untuk mencapai tanah? (g = 10m/s^2)",
    options: [" 2 s", " 3 s", " 4 s", " 5 s"],
    correctOption: "2 s",
    explanation:
      "Gunakan rumus kinematika: h = 0.5 × g × t². Dengan h = 20 m dan g = 10 m/s², maka t² = (2 × 20) / 10 = 4, sehingga t = √4 = 2 s. Jawaban yang benar adalah A.",
},
{   
     question: "Sebuah bola dilempar ke atas dengan kecepatan awal 15 m/s. Berapa waktu yang diperlukan bola untuk mencapai titik tertinggi? g = 10 m/s².",
     options: [" 1,0 s", " 1,5 s", " 2,0 s", " 2,5 s"],
    correctOption: "1,0 s",
    explanation:
         "Gunakan rumus v = v₀ - g × t. Pada titik tertinggi, v = 0, sehingga t = v₀ / g = 15 / 10 = 1,5 s. Jawaban yang benar adalah B.",
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

export default LatihanSoal1;