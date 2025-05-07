import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal6 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [

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
    question: "Hukum Archimedes menyatakan bahwa ...",
    options: [
        " Benda yang terapung memiliki massa jenis yang lebih kecil dari fluida",
        " Benda akan selalu tenggelam dalam fluida",
        " Tekanan fluida selalu sebanding dengan gaya angkat",
        " Benda dalam fluida dipengaruhi gaya angkat sebesar berat fluida yang dipindahkan",
    ],
    correctOption: " Benda dalam fluida dipengaruhi gaya angkat sebesar berat fluida yang dipindahkan",
    explanation:
        "Hukum Archimedes menyatakan bahwa gaya angkat ke atas pada benda dalam fluida sama dengan berat fluida yang dipindahkan.",
},
{
    question: "Momentum sudut suatu benda dapat dihitung dengan rumus ...",
    options: [
        " L = r x p",
        " L = m x v",
        " L = I x ω",
        " L = F x d",
    ],
    correctOption:  " L = I x ω",
    explanation:
        "Momentum sudut dihitung dengan L = I x ω, di mana I adalah momen inersia dan ω adalah kecepatan sudut.",
},
{
    question: "Sebuah cermin cekung memiliki fokus sejauh 10 cm. Jarak fokusnya adalah ...",
    options: [
        " 10 cm",
        " 5 cm",
        " 20 cm",
        " 15 cm",
    ],
    correctOption:   " 10 cm",
    explanation:
        "Jarak fokus cermin cekung adalah setengah dari jari-jari kelengkungan cermin. Dalam soal ini, fokus sudah diberikan sebagai 10 cm.",
},
{
    question: "Hasil kali gaya dan perpindahan disebut ...",
    options: [
        " Daya",
        " Usaha",
        " Energi",
        " Momentum",
    ],
    correctOption:  " Usaha",
    explanation:
        "Hasil kali gaya dan perpindahan disebut usaha, dengan rumus W = F x d x cos(θ).",
},

{
    question: "Frekuensi suatu gelombang dapat dihitung dengan rumus ...",
    options: [
        " f = v / λ",
        " f = T / v",
        " f = 1 / T",
        " f = λ / v",
    ],
    answer:  " f = 1 / T",
    explanation:
        "Frekuensi suatu gelombang dihitung dengan f = 1 / T, di mana T adalah periode gelombang.",
},

{
  question: "Sebuah mobil mula-mula diam dan kemudian bergerak dengan percepatan konstan sebesar 2 m/s². Berapa jarak yang ditempuh mobil setelah 5 detik?",
  options:  ["10 m", "25 m", "50 m", "100 m"],
  correctOption: "10 m",
  explanation:
  " jarak yang ditempuh mobil adalah 50 m.",    
},

{
  question: "Sebuah mobil mula-mula diam dan kemudian bergerak dengan percepatan konstan sebesar 2 m/s². Berapa jarak yang ditempuh mobil setelah 5 detik?",
  options: ["10 m", " 25 m", " 50 m", "100 m"],
  correctOption:"10 m",
  explanation:
       " jarak yang ditempuh mobil adalah 50 m.",     
},
{
  question: "Sebuah benda bermassa 4 kg ditarik dengan gaya 16 N pada bidang datar tanpa gesekan. Hitung percepatan benda tersebut.",
  options: [" 2 m/s²", " 3 m/s²", " 4 m/s²", " 5 m/s²"],
  correctOption: "2 m/s²",
  explanation:
        "Gunakan hukum ll newton F=m.a, a=f/m=16/4=4m/s^2.",
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

export default LatihanSoal6  ;