import React, { useState } from "react";
import "../css/QuestionPage.css";

const Latihansoal2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Sebuah benda dengan massa 5 kg terletak di atas meja datar dan dalam keadaan diam. Berapakah gaya normal yang bekerja pada benda tersebut? (g = 10 m/s²)",
      options: ["50 N", "100 N", "25 N", "0 N"],
      correctOption: "50 N",
      explanation: "Gaya normal pada benda diam sama dengan beratnya, yaitu N = m . g. Jadi, N = 5 x 10 = 50 N.",
    },
    {
      question: "Sebuah benda bermassa 2 kg didorong dengan gaya 10 N pada permukaan licin. Berapakah percepatan benda tersebut?",
      options: ["5 m/s²", "10 m/s²", "20 m/s²", "2 m/s²"],
      correctOption: "5 m/s²",
      explanation: "Percepatan dihitung dengan a = F / m. Jadi, a = 10 / 2 = 5 m/s².",
    },
    {
      question: "Jika sebuah gaya sebesar 15 N bekerja pada benda bermassa 3 kg, berapakah percepatan benda tersebut?",
      options: ["3 m/s²", "5 m/s²", "15 m/s²", "45 m/s²"],
      correctOption: "5 m/s²",
      explanation: "Percepatan dihitung dengan a = F / m. Jadi, a = 15 / 3 = 5 m/s².",
    },
    {
      question: "Sebuah benda bermassa 10 kg berada dalam keadaan diam. Jika gaya total yang bekerja padanya adalah 0 N, apa yang terjadi pada benda tersebut?",
      options: ["Tetap diam", "Bergerak dengan percepatan", "Bergerak dengan kecepatan konstan", "Melambat"],
      correctOption: "Tetap diam",
      explanation: "Menurut Hukum Newton 1, benda akan tetap diam jika tidak ada gaya total yang bekerja.",
    },
    {
      question: "Dua orang menarik sebuah benda dengan gaya masing-masing 30 N dan 20 N ke arah yang berlawanan. Berapakah gaya resultan yang bekerja pada benda tersebut?",
      options: ["10 N", "50 N", "0 N", "30 N"],
      correctOption: "10 N",
      explanation: "Gaya resultan dihitung dengan R = |F1 - F2|. Jadi, R = |30 - 20| = 10 N.",
    },
    {
      question: "Sebuah benda bermassa 4 kg di atas meja ditarik dengan gaya 12 N. Jika gaya gesek antara benda dan meja adalah 4 N, berapakah percepatan benda tersebut?",
      options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
      correctOption: "2 m/s²",
      explanation: "Percepatan dihitung dengan a = (F - F_gesek) / m. Jadi, a = (12 - 4) / 4 = 2 m/s².",
    },
    {
      question: "Sebuah benda bermassa 6 kg berada dalam lift yang bergerak ke atas dengan percepatan 2 m/s². Berapakah gaya normal yang bekerja pada benda? (g = 10 m/s²)",
      options: ["60 N", "72 N", "80 N", "120 N"],
      correctOption: "72 N",
      explanation: "Gaya normal dihitung dengan N = m(g + a). Jadi, N = 6(10 + 2) = 72 N.",
    },
    {
      question: "Sebuah benda bermassa 10 kg bergerak dengan percepatan 3 m/s². Berapakah gaya total yang bekerja pada benda tersebut?",
      options: ["10 N", "30 N", "3 N", "300 N"],
      correctOption: "30 N",
      explanation: "Gaya total dihitung dengan F = m . a. Jadi, F = 10 x 3 = 30 N.",
    },
    {
      question: "Jika sebuah benda bermassa 5 kg dalam keadaan diam dipercepat hingga 10 m/s², berapakah gaya yang diperlukan?",
      options: ["5 N", "10 N", "50 N", "100 N"],
      correctOption: "50 N",
      explanation: "Gaya dihitung dengan F = m . a. Jadi, F = 5 x 10 = 50 N.",
    },
    {
      question: "Sebuah benda bermassa 8 kg ditarik oleh dua gaya: 40 N ke kanan dan 20 N ke kiri. Berapakah percepatan benda?",
      options: ["2,5 m/s²", "5 m/s²", "10 m/s²", "15 m/s²"],
      correctOption: "2,5 m/s²",
      explanation: "Percepatan dihitung dengan a = F_resultan / m. Jadi, a = (40 - 20) / 8 = 2,5 m/s².",
    },
    {
      question: "Menurut Hukum Newton 3, jika sebuah bola memukul tembok dengan gaya 50 N, berapakah gaya yang diterima bola dari tembok?",
      options: ["50 N", "100 N", "0 N", "25 N"],
      correctOption: "50 N",
      explanation: "Hukum Newton 3 menyatakan bahwa gaya aksi sama besar dan berlawanan arah dengan gaya reaksi.",
    },
    {
      question: "Sebuah benda 5 kg berada di permukaan licin dan diberi gaya horizontal 25 N. Berapakah percepatannya?",
      options: ["5 m/s²", "10 m/s²", "15 m/s²", "20 m/s²"],
      correctOption: "5 m/s²",
      explanation: "Percepatan dihitung dengan a = F / m. Jadi, a = 25 / 5 = 5 m/s².",
    },
    {
      question: "Dua benda masing-masing bermassa 2 kg dan 3 kg saling mendorong. Jika benda pertama memberikan gaya sebesar 10 N ke benda kedua, berapakah gaya reaksi yang diterima benda pertama?",
      options: ["10 N", "5 N", "0 N", "15 N"],
      correctOption: "10 N",
      explanation: "Menurut Hukum Newton 3, gaya aksi sama dengan gaya reaksi tetapi berlawanan arah.",
    },
    {
      question: "Sebuah benda bermassa 10 kg dipercepat hingga 2 m/s². Berapakah gaya yang bekerja pada benda tersebut?",
      options: ["20 N", "50 N", "10 N", "5 N"],
      correctOption: "20 N",
      explanation: "Gaya dihitung dengan F = m . a. Jadi, F = 10 x 2 = 20 N.",
    },
    {
      question: "Sebuah benda ditarik oleh dua gaya: 30 N ke kanan dan 30 N ke kiri. Berapakah percepatan benda?",
      options: ["0 m/s²", "5 m/s²", "10 m/s²", "15 m/s²"],
      correctOption: "0 m/s²",
      explanation: "Gaya total adalah 0, sehingga tidak ada percepatan.",
    },
    {
      question: "Sebuah roket mendorong gas ke belakang dengan gaya 1000 N. Berapakah gaya yang diterima roket ke depan?",
      options: ["0 N", "500 N", "1000 N", "2000 N"],
      correctOption: "1000 N",
      explanation: "Hukum Newton 3 menyatakan bahwa gaya aksi sama dengan gaya reaksi.",
    },
    {
      question: "Jika sebuah mobil bermassa 1000 kg memiliki gaya dorong mesin 4000 N dan gaya gesek 1000 N, berapakah percepatan mobil?",
      options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
      correctOption: "3 m/s²",
      explanation: "Percepatan dihitung dengan a = (F_mesin - F_gesek) / m. Jadi, a = (4000 - 1000) / 1000 = 3 m/s².",
    },
    {
      question: "Sebuah benda bermassa 12 kg ditarik dengan gaya horizontal 48 N pada permukaan licin. Berapakah percepatan benda?",
      options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
      correctOption: "4 m/s²",
      explanation: "Percepatan dihitung dengan a = F / m. Jadi, a = 48 / 12 = 4 m/s².",
    },
    {
      question: "Jika sebuah gaya 20 N bekerja pada benda bermassa 4 kg, berapakah percepatan benda tersebut?",
      options: ["5 m/s²", "4 m/s²", "3 m/s²", "2 m/s²"],
      correctOption: "5 m/s²",
      explanation: "Percepatan dihitung dengan a = F / m. Jadi, a = 20 / 4 = 5 m/s².",
    },
    {
      question: "Sebuah benda bermassa 15 kg dipercepat hingga 2 m/s² oleh gaya F. Berapakah besar gaya tersebut?",
      options: ["15 N", "30 N", "45 N", "60 N"],
      correctOption: "30 N",
      explanation: "Gaya dihitung dengan F = m . a. Jadi, F = 15 x 2 = 30 N.",
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

export default Latihansoal2;