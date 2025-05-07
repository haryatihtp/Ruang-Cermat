import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Hukum Newton III menyatakan bahwa ...",
      options: [
          " Benda tetap diam jika tidak ada gaya yang bekerja",
          " Gaya berbanding lurus dengan percepatan",
          " Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
          " Momentum benda selalu konstan",
      ],
      correctOption:  " Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
      explanation: 
          "Hukum Newton III menyatakan bahwa untuk setiap aksi terdapat reaksi yang sama besar tetapi berlawanan arah.",
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
      question: "Besaran yang termasuk dalam kelompok besaran pokok adalah ...",
      options: [
          " Waktu, panjang, massa",
          " Kecepatan, massa, panjang",
          " Massa, percepatan, waktu",
          " Momentum, panjang, waktu",
      ],
      correctOption: " Kecepatan, massa, panjang",
      explanation: 
          "Besaran pokok meliputi waktu, panjang, massa, arus listrik, suhu, intensitas cahaya, dan jumlah zat.",
  },
  {
      question: "Energi potensial gravitasi dihitung dengan rumus ...",
      options: [
          " E = m x g x h",
          " E = 1/2 m v²",
          " E = k x²",
          " E = m x a x h",
      ],
      correctOption: " E = m x a x h",
      explanation: 
          "Energi potensial gravitasi dihitung dengan rumus E = m x g x h, di mana m adalah massa, g adalah percepatan gravitasi, dan h adalah ketinggian.",
  },
  {
      question: "Kecepatan sebuah benda yang bergerak lurus dihitung dengan rumus ...",
      options: [
          " v = s / t",
          " v = a x t",
          " v = m x g",
          " v = F / m",
      ],
      correctOption:   " v = a x t",
      explanation: 
          "Kecepatan benda yang bergerak lurus dihitung dengan rumus v = s / t, di mana s adalah jarak dan t adalah waktu.",
  },
  {
      question: "Satuan SI untuk arus listrik adalah ...",
      options: [
          " Volt",
          " Ampere",
          " Ohm",
          " Watt",
      ],
      correctOption:  " Ohm",
      explanation: 
          "Satuan SI untuk arus listrik adalah Ampere (A).",
  },
  {
      question: "Dalam hukum Pascal, tekanan pada fluida ...",
      options: [
          "Berbeda di setiap titik",
          "Sama besar ke segala arah",
          "Bergantung pada massa benda",
          "Hanya bekerja ke bawah",
      ],
      correctOption:  "Berbeda di setiap titik",
      explanation: 
          "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada fluida dalam wadah tertutup diteruskan sama besar ke segala arah.",
  },
  {
       question: "Rumus tekanan dalam fisika adalah ...",
       options: [
      " P = F / A",
      " P = F x A",
      " P = m x a",
      " P = m / V",
      ],
      correctOption:  "P = m x a",
       explanation: 
            "Tekanan dihitung dengan rumus P = F / A, di mana P adalah tekanan, F adalah gaya, dan A adalah luas permukaan.",
},
{
  question: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetiknya adalah ...",
  options: [
      " 3 Joule",
      " 6 Joule",
      " 9 Joule",
      " 18 Joule",
  ],
  correctOption:  " 18 Joule",
  explanation: 
      "Energi kinetik dihitung dengan rumus 1/2 m v². Dalam kasus ini, 1/2 x 2 x (3)² = 18 Joule.",
},
{
  question: "Hasil kali massa dan kecepatan disebut ...",
  options: [
      " Momentum",
      " Gaya",
      " Energi kinetik",
      " Daya",
  ],
  correctOption: " Momentum",
  explanation: 
      "Hasil kali massa dan kecepatan disebut momentum, yang dinyatakan dengan p = m x v.",
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