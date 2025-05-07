import React, { useState } from "react";
import "./../css/QuestionPage.css";

const LatihanSoal3 = () => {
 const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  

  const questions = [
    {
      question: "Apa faktor yang dapat mempengaruhi laju reaksi?",
      options: ["A. Konsentrasi, suhu, dan katalis", "B. Volume, tekanan, dan suhu", "C. Waktu, suhu, dan warna", "D. Berat molekul, tekanan, dan waktu"],
      correctOption: "A",
      explanation: "Faktor utama yang mempengaruhi laju reaksi adalah konsentrasi, suhu, dan keberadaan katalis."
    },
    {
      question: "Bagaimana cara katalis mempercepat laju reaksi?",
      options: ["A. Dengan meningkatkan suhu reaksi", "B. Dengan menurunkan energi aktivasi reaksi", "C. Dengan meningkatkan konsentrasi reaktan", "D. Dengan menambah energi ke dalam sistem"],
      correctOption: "B",
      explanation: "Katalis mempercepat reaksi dengan menurunkan energi aktivasi, sehingga reaksi lebih mudah terjadi."
    },
    {
      question: "Apa yang terjadi pada laju reaksi jika suhu dinaikkan?",
      options: ["A. Laju reaksi meningkat", "B. Laju reaksi menurun", "C. Tidak ada perubahan", "D. Reaksi berhenti"],
      correctOption: "A",
      explanation: "Peningkatan suhu menyebabkan partikel bergerak lebih cepat, sehingga peluang tumbukan efektif meningkat."
    },
    {
      question: "Dalam grafik energi vs lintasan reaksi, apa peran puncak kurva?",
      options: ["A. Energi potensial awal", "B. Energi aktivasi", "C. Energi kinetik maksimum", "D. Energi produk reaksi"],
      correctOption: "B",
      explanation: "Puncak kurva menunjukkan energi aktivasi, yaitu energi minimum yang diperlukan agar reaksi berlangsung."
    },
    {
      question: "Apa pengaruh luas permukaan pada laju reaksi?",
      options: ["A. Semakin kecil luas permukaan, semakin cepat reaksi", "B. Semakin besar luas permukaan, semakin cepat reaksi", "C. Tidak ada pengaruh", "D. Hanya memengaruhi reaksi endoterm"],
      correctOption: "B",
      explanation: "Luas permukaan yang lebih besar meningkatkan peluang tumbukan antar partikel, sehingga mempercepat laju reaksi."
    },
    {
      question: "Apa pengaruh konsentrasi terhadap laju reaksi?",
      options: ["A. Semakin tinggi konsentrasi, semakin cepat reaksi", "B. Semakin rendah konsentrasi, semakin cepat reaksi", "C. Konsentrasi tidak mempengaruhi laju reaksi", "D. Hanya mempengaruhi reaksi endoterm"],
      correctOption: "A",
      explanation: "Semakin banyak partikel dalam volume tertentu, semakin banyak tumbukan efektif yang terjadi, sehingga laju reaksi meningkat."
    },
    {
      question: "Bagaimana pengaruh tekanan terhadap laju reaksi gas?",
      options: ["A. Menurunkan laju reaksi", "B. Meningkatkan laju reaksi", "C. Tidak mempengaruhi laju reaksi", "D. Mengurangi jumlah produk"],
      correctOption: "B",
      explanation: "Meningkatkan tekanan pada gas memperkecil volume dan meningkatkan frekuensi tumbukan antara partikel, mempercepat reaksi."
    },
    {
      question: "Apa yang dimaksud dengan reaksi orde satu?",
      options: ["A. Laju reaksi berbanding lurus dengan konsentrasi reaktan", "B. Laju reaksi berbanding terbalik dengan konsentrasi reaktan", "C. Laju reaksi tidak tergantung pada konsentrasi reaktan", "D. Laju reaksi tidak berubah dengan suhu"],
      correctOption: "A",
      explanation: "Pada reaksi orde satu, laju reaksi berbanding lurus dengan konsentrasi reaktan yang ada."
    },
    {
      question: "Apa yang terjadi pada laju reaksi jika konsentrasi reaktan sangat tinggi?",
      options: ["A. Laju reaksi sangat cepat", "B. Laju reaksi sangat lambat", "C. Tidak ada perubahan", "D. Reaksi terhambat"],
      correctOption: "A",
      explanation: "Pada konsentrasi yang sangat tinggi, lebih banyak partikel yang bertumbukan, yang mengarah pada peningkatan laju reaksi."
    },
    {
      question: "Apa yang dimaksud dengan reaksi yang mencapai keadaan setimbang?",
      options: ["A. Laju reaksi maju dan mundur sama", "B. Laju reaksi tidak berubah", "C. Reaksi berhenti", "D. Reaksi berlangsung tanpa pengaruh luar"],
      correctOption: "A",
      explanation: "Keadaan setimbang terjadi ketika laju reaksi maju dan mundur menjadi sama, sehingga konsentrasi reaktan dan produk tetap konstan."
    }
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
    setShowConfirmation(true); // Trigger confirmation popup
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
      // Optionally, you can show the explanation here if confirmed
    }
    setShowConfirmation(false); // Close the confirmation popup
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

        {selectedOption && !showConfirmation && (
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
