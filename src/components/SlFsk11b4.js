import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
 
  {
    question: "Berapa besar daya yang dihasilkan oleh sebuah mesin yang melakukan usaha 300 J dalam waktu 5 detik?",
    options:  [" 50 W", " 60 W", " 75 W", " 100 W"],
    correctOption: " 75 W",
    explanation:
           "Gunakan rumus daya: P = W / t. Dengan W = 300 J dan t = 5 s, maka P = 300 / 5 = 100 W. Jawaban yang benar adalah D.",
},
{
     question: "Sebuah benda bermassa 2 kg bergerak melingkar dengan jari-jari lintasan 0,5 m dan kecepatan 4 m/s. Berapa besar gaya sentripetal yang bekerja pada benda?",
     options:  [" 16 N", " 32 N", " 8 N", " 4 N"],
     correctOption: " 4 N",
     explanation:
           "Gunakan rumus gaya sentripetal: F = m × v² / r. Dengan m = 2 kg, v = 4 m/s, dan r = 0,5 m, maka F = 2 × 4² / 0,5 = 32 N. Jawaban yang benar adalah B.",
},
{
     question: "Sebuah muatan +2 μC dan +3 μC dipisahkan sejauh 0,2 meter. Berapa besar gaya listrik yang bekerja di antara kedua muatan? (k = 9 × 10⁹ Nm²/C²)",
     options: [" 1,35 N", " 2,7 N", " 3,6 N", " 4,5 N"],
     correctOption: " 1,35 N", 
     explanation:
         "Gunakan hukum Coulomb: F = k × |q₁ × q₂| / r². Dengan q₁ = 2 × 10⁻⁶ C, q₂ = 3 × 10⁻⁶ C, dan r = 0,2 m, maka F = 9 × 10⁹ × (2 × 10⁻⁶ × 3 × 10⁻⁶) / 0,2² = 3,6 N. Jawaban yang benar adalah C.",
},
{
     question: "Berapa besar momentum sebuah benda bermassa 4 kg yang bergerak dengan kecepatan 5 m/s?",
     options: [" 10 kg·m/s", " 15 kg·m/s", " 20 kg·m/s", " 25 kg·m/s"],
     correctOption: " 10 kg·m/s",
     explanation:
         "Gunakan rumus momentum: p = m × v. Dengan m = 4 kg dan v = 5 m/s, maka p = 4 × 5 = 20 kg·m/s. Jawaban yang benar adalah C.",
 },
 {
      question: "Sebuah benda bermassa 5 kg digantung pada tali yang panjangnya 2 meter. Berapa periode ayunan sederhana jika benda tersebut digerakkan? (g = 10 m/s²)",
      options: [" 2,83 s", "3,14 s", " 1,26 s", " 2,0 s"],
      correctOption: " 3,14 s",
      explanation:
            "Gunakan rumus periode ayunan: T = 2π × √(l / g). Dengan l = 2 m dan g = 10 m/s², maka T = 2π × √(2 / 10) ≈ 2,83 s. Jawaban yang benar adalah A.",
 },
{
     question: "Sebuah benda memiliki massa 10 kg dan percepatan gravitasi di tempat tersebut adalah 9,8 m/s². Berapa berat benda tersebut?",
     options: [" 88 N", " 96 N", " 98 N", " 100 N"],
     correctOption: " 98 N", 
     explanation:
           "Gunakan rumus berat: W = m × g. Dengan m = 10 kg dan g = 9,8 m/s², maka W = 10 × 9,8 = 98 N. Jawaban yang benar adalah C.",
},
{
    question: "Sebuah benda bermassa 6 kg digerakkan oleh gaya sebesar 18 N pada bidang datar tanpa gesekan. Berapa percepatan benda tersebut?",
    options: [" 2 m/s²", "3 m/s²", " 4 m/s²", " 5 m/s²"],
    correctOption: " 2 m/s²",
    explanation:
        "Gunakan hukum II Newton: F = m × a. Dengan massa (m) = 6 kg dan gaya (F) = 18 N, maka percepatan (a) = F / m = 18 / 6 = 3 m/s². Jawaban yang benar adalah B.",
},
{
   question: "Sebuah bola bermassa 0,5 kg jatuh bebas dari ketinggian 20 m. Berapa energi kinetiknya sesaat sebelum menyentuh tanah? (g = 10 m/s²)",
   options: [" 50 J", " 100 J", " 150 J", "200 J"],
   correctOption:  " 200 J",
   explanation:
       "Energi kinetik pada saat jatuh sepenuhnya berasal dari energi potensial: EK = EP = m × g × h. Dengan m = 0,5 kg, g = 10 m/s², dan h = 20 m, maka EK = 0,5 × 10 × 20 = 100 J. Jawaban yang benar adalah B.",
},
{
   question: "Sebuah pegas memiliki konstanta 200 N/m. Jika pegas direnggangkan sejauh 0,1 m, berapa energi potensial elastis yang tersimpan?",
   options: [" 0,5 J", " 1 J", " 2 J", " 4 J"],
   correctOption: " 1 J",
   explanation:
       "Gunakan rumus energi potensial elastis: EP = 0,5 × k × x². Dengan k = 200 N/m dan x = 0,1 m, maka EP = 0,5 × 200 × (0,1)² = 1 J. Jawaban yang benar adalah B.",
},
{
   question: "Sebuah benda bermassa 3 kg bergerak melingkar dengan kecepatan 6 m/s pada lintasan berjari-jari 2 meter. Berapa gaya sentripetal yang bekerja pada benda?",
   options: [" 36 N", " 54 N", " 72 N", " 81 N"],
   correctOption: " 72 N",
   explanation:
       "Gunakan rumus gaya sentripetal: F = m × v² / r. Dengan m = 3 kg, v = 6 m/s, dan r = 2 m, maka F = 3 × 6² / 2 = 54 N. Jawaban yang benar adalah B.",
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

export default LatihanSoal4;