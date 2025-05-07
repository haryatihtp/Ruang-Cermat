import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan koloid?",
      options: ["Campuran homogen dari dua zat", "Campuran heterogen dengan partikel yang berukuran antara larutan dan suspensi", "Campuran heterogen dengan partikel besar yang mudah terlihat", "Campuran dua zat yang tidak dapat bercampur"],
      correctOption: "Campuran heterogen dengan partikel yang berukuran antara larutan dan suspensi",
      explanation: "Koloid adalah campuran heterogen dengan partikel berukuran antara larutan dan suspensi, biasanya 1-100 nm."
    },
    {
      question: "Manakah dari berikut ini yang termasuk koloid?",
      options: ["Air garam", "Udara", "Susu", "Minyak mentah"],
      correctOption: "Susu",
      explanation: "Susu adalah contoh koloid jenis emulsi karena terdiri dari lemak yang terdispersi dalam air."
    },
    {
      question: "Fenomena apa yang menunjukkan bahwa koloid dapat menyebarkan cahaya?",
      options: ["Efek Doppler", "Efek Tyndall", "Efek Compton", "Efek Fotoelektrik"],
      correctOption: "Efek Tyndall",
      explanation: "Efek Tyndall adalah fenomena di mana koloid menyebarkan cahaya yang melewatinya, membuat berkas cahaya terlihat."
    },
    {
      question: "Apa metode utama untuk memisahkan koloid?",
      options: ["Filtrasi", "Destilasi", "Dialisis", "Sublimasi"],
      correctOption: "Dialisis",
      explanation: "Dialisis adalah metode untuk memisahkan partikel koloid dari ion-ion atau molekul kecil melalui membran semipermeabel."
    },
    {
      question: "Apa fungsi zat pengemulsi dalam koloid?",
      options: ["Mempercepat reaksi kimia", "Membantu mencampurkan dua zat yang tidak bercampur", "Mengendapkan partikel dalam koloid", "Menurunkan tekanan uap campuran"],
      correctOption: "Membantu mencampurkan dua zat yang tidak bercampur",
      explanation: "Zat pengemulsi digunakan untuk membantu mencampurkan dua zat yang tidak bercampur, seperti minyak dan air."
    },
    {
      question: "Apa yang dimaksud dengan aerosols dalam konteks koloid?",
      options: ["Koloid gas dalam gas", "Koloid cair dalam gas", "Koloid padat dalam gas", "Koloid gas dalam padat"],
      correctOption: "Koloid gas dalam gas",
      explanation: "Aerosol adalah koloid yang terdiri dari partikel padat atau cair yang terdispersi dalam gas, seperti kabut atau asap."
    },
    {
      question: "Manakah dari berikut ini yang merupakan contoh koloid jenis sol?",
      options: ["Gelatin", "Susu", "Cat", "Mayones"],
      correctOption: "Cat",
      explanation: "Cat adalah contoh koloid jenis sol, yang terdiri dari partikel padat yang terdispersi dalam cairan."
    },
    {
      question: "Apakah yang dimaksud dengan emulsi?",
      options: ["Koloid gas dalam cairan", "Koloid cair dalam cairan", "Koloid cair dalam padat", "Koloid padat dalam cairan"],
      correctOption: "Koloid cair dalam cairan",
      explanation: "Emulsi adalah koloid yang terdiri dari dua cairan yang tidak dapat bercampur, seperti minyak dalam air."
    },
    {
      question: "Koloid dapat menyebarkan cahaya karena",
      options: ["Ukuran partikel yang sangat kecil", "Ukuran partikel yang besar", "Partikel tidak dapat bergerak", "Partikel sangat besar dan berat"],
      correctOption: "Ukuran partikel yang besar",
      explanation: "Partikel koloid yang berukuran besar dapat menyebarkan cahaya yang melewatinya, yang disebut Efek Tyndall."
    },
    {
      question: "Bagaimana koloid berbeda dengan larutan?",
      options: ["Koloid adalah campuran homogen, sedangkan larutan adalah campuran heterogen", "Koloid memiliki partikel yang lebih besar dan dapat menyebarkan cahaya", "Koloid tidak dapat disaring, sedangkan larutan dapat disaring", "Koloid memiliki partikel yang sangat kecil"],
      correctOption: "Koloid memiliki partikel yang lebih besar dan dapat menyebarkan cahaya",
      explanation: "Koloid memiliki partikel yang lebih besar daripada larutan dan dapat menyebarkan cahaya, sedangkan larutan adalah campuran homogen dengan partikel kecil."
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