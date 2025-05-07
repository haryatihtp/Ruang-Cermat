import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [

    {
       question: "Sebuah mobil bermassa 1000 kg bergerak dengan kecepatan 20 m/s. Berapa energi kinetik mobil tersebut?",
       options: [" 200.000 J", " 400.000 J", " 500.000 J", "800.000 J"],
       correctOption: " 500.000 J", 
       explanation:
           "Gunakan rumus energi kinetik: EK = 0,5 × m × v². Dengan m = 1000 kg dan v = 20 m/s, maka EK = 0,5 × 1000 × 20² = 400.000 J. Jawaban yang benar adalah B.",
    },
    {
        question: "Sebuah benda bermassa 2 kg diikat pada tali dan diayunkan dengan panjang tali 1 meter. Berapa percepatan sentripetalnya jika kecepatannya 4 m/s?",
        options: [" 8 m/s²", "10 m/s²", "12 m/s²", "16 m/s²"],
        correctOption: " 10 m/s²", 
        explanation:
             "Gunakan rumus percepatan sentripetal: a = v² / r. Dengan v = 4 m/s dan r = 1 m, maka a = 4² / 1 = 16 m/s². Jawaban yang benar adalah D.",
    },
    {
        question: "Dua bola masing-masing bermassa 1 kg dan 3 kg berada dalam keadaan diam dan bertabrakan secara elastis. Jika bola 1 bergerak dengan kecepatan 4 m/s setelah tumbukan, berapa kecepatan bola 2? (Sistem tertutup)",
        options: [" 2 m/s", " 4 m/s", " 6 m/s", " 8 m/s"],
        correctOption: " 8 m/s",
        explanation:
            "Gunakan hukum kekekalan momentum: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'. Dengan m₁ = 1 kg, m₂ = 3 kg, v₁ = 0, v₂ = 0, dan v₁' = 4 m/s, maka 0 = (1 × 4) + (3 × v₂'). Jadi v₂' = -4 / 3 = 4 m/s (dalam arah sebaliknya). Jawaban yang benar adalah B.", 
    },
    {
        question: "Sebuah benda bermassa 4 kg dipanaskan hingga menyerap energi sebesar 8000 J. Jika kalor jenis benda tersebut adalah 2000 J/kg·°C, berapa kenaikan suhunya?",
        options: [" 1°C", " 2°C", "3°C", " 4°C"],
        correctOption: " 1°C",
        explanation:
            "Gunakan rumus Q = m × c × ΔT. Dengan Q = 8000 J, m = 4 kg, dan c = 2000 J/kg·°C, maka ΔT = Q / (m × c) = 8000 / (4 × 2000) = 2°C. Jawaban yang benar adalah B.",
    },
    {
        question: "Sebuah benda bermassa 2 kg digerakkan ke atas dengan gaya 50 N selama 3 detik. Jika percepatan gravitasi adalah 10 m/s², berapa besar usaha yang dilakukan gaya tersebut?",
        options: [" 150 J", " 300 J", " 450 J", " 600 J"],
        correctOption: " 450 J", 
        explanation:
            "Usaha dilakukan oleh gaya total. Gaya total = 50 N - (m × g) = 50 - (2 × 10) = 30 N. Usaha = F × s. Karena s = v × t = (a × t²) / 2, percepatan = 30/2 = 15 m/s². Maka usaha = 600 J. Jawaban adalah D.",
    },
    {
        question: "Sebuah benda bermassa 10 kg berada dalam keadaan diam. Jika sebuah gaya sebesar 40 N bekerja pada benda selama 5 detik, berapa kecepatan akhirnya?",
        options: [" 10 m/s", " 15 m/s", " 20 m/s", " 25 m/s"],
        correctOption: " 15 m/s", 
        explanation:
             "Gunakan rumus impuls: F × t = m × Δv. Dengan F = 40 N, t = 5 s, dan m = 10 kg, maka Δv = (F × t) / m = (40 × 5) / 10 = 20 m/s. Jawaban yang benar adalah C.",
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

export default LatihanSoal5  ;