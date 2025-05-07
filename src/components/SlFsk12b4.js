import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalGelombangElektromagnetik = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan gelombang elektromagnetik?",
      options: [
        "Gelombang yang memerlukan medium untuk merambat",
        "Gelombang yang dapat merambat di ruang hampa",
        "Gelombang yang hanya merambat di air",
        "Gelombang yang tidak dapat merambat"
      ],
      correctOption: "Gelombang yang dapat merambat di ruang hampa",
      explanation: "Gelombang elektromagnetik adalah gelombang yang dapat merambat melalui ruang hampa tanpa memerlukan medium."
    },
    {
      question: "Apa yang membedakan gelombang elektromagnetik dengan gelombang mekanik?",
      options: [
        "Gelombang elektromagnetik memerlukan medium, sedangkan gelombang mekanik tidak",
        "Gelombang elektromagnetik tidak memerlukan medium, sedangkan gelombang mekanik memerlukan medium",
        "Gelombang elektromagnetik hanya merambat di dalam air",
        "Tidak ada perbedaan antara keduanya"
      ],
      correctOption: "Gelombang elektromagnetik tidak memerlukan medium, sedangkan gelombang mekanik memerlukan medium",
      explanation: "Gelombang elektromagnetik dapat merambat di ruang hampa, sementara gelombang mekanik membutuhkan medium seperti udara atau air."
    },
    {
      question: "Apa yang dimaksud dengan panjang gelombang dalam gelombang elektromagnetik?",
      options: [
        "Jarak antara dua puncak berturut-turut",
        "Jarak antara dua titik terendah",
        "Kecepatan gelombang",
        "Kekuatan gelombang"
      ],
      correctOption: "Jarak antara dua puncak berturut-turut",
      explanation: "Panjang gelombang adalah jarak antara dua puncak berturut-turut atau dua titik dengan fase yang sama dalam gelombang."
    },
    {
      question: "Apa yang dimaksud dengan frekuensi dalam gelombang elektromagnetik?",
      options: [
        "Jumlah gelombang yang lewat dalam satu detik",
        "Jumlah puncak gelombang dalam satu menit",
        "Waktu yang dibutuhkan gelombang untuk merambat",
        "Jarak yang ditempuh gelombang dalam satu detik"
      ],
      correctOption: "Jumlah gelombang yang lewat dalam satu detik",
      explanation: "Frekuensi adalah jumlah gelombang yang lewat di titik tertentu dalam satu detik."
    },
    {
      question: "Apa yang dimaksud dengan kecepatan cahaya?",
      options: [
        "Kecepatan gelombang elektromagnetik dalam ruang hampa",
        "Kecepatan partikel yang bergerak dalam gelombang elektromagnetik",
        "Kecepatan gelombang mekanik dalam air",
        "Kecepatan gelombang suara dalam udara"
      ],
      correctOption: "Kecepatan gelombang elektromagnetik dalam ruang hampa",
      explanation: "Kecepatan cahaya adalah kecepatan gelombang elektromagnetik, yang merupakan kecepatan tertinggi dalam ruang hampa, sekitar 3 × 10^8 m/s."
    },
    {
      question: "Apa saja contoh gelombang elektromagnetik?",
      options: [
        "Gelombang radio, cahaya tampak, sinar-X, dan sinar gamma",
        "Gelombang suara, gelombang air, dan cahaya tampak",
        "Gelombang mikro, gelombang seismik, dan sinar UV",
        "Gelombang listrik, gelombang suara, dan sinar inframerah"
      ],
      correctOption: "Gelombang radio, cahaya tampak, sinar-X, dan sinar gamma",
      explanation: "Contoh gelombang elektromagnetik meliputi gelombang radio, cahaya tampak, sinar-X, dan sinar gamma."
    },
    {
      question: "Apa yang dimaksud dengan gelombang radio?",
      options: [
        "Gelombang yang digunakan untuk komunikasi jarak jauh",
        "Gelombang yang hanya merambat di air",
        "Gelombang dengan panjang gelombang pendek",
        "Gelombang yang dapat merambat dalam ruang hampa"
      ],
      correctOption: "Gelombang yang digunakan untuk komunikasi jarak jauh",
      explanation: "Gelombang radio digunakan untuk komunikasi jarak jauh, seperti dalam siaran radio dan televisi."
    },
    {
      question: "Apa yang dimaksud dengan sinar-X?",
      options: [
        "Gelombang elektromagnetik dengan panjang gelombang sangat pendek",
        "Gelombang elektromagnetik dengan panjang gelombang panjang",
        "Gelombang yang digunakan dalam komunikasi radio",
        "Gelombang yang digunakan untuk pemanasan makanan"
      ],
      correctOption: "Gelombang elektromagnetik dengan panjang gelombang sangat pendek",
      explanation: "Sinar-X adalah gelombang elektromagnetik dengan panjang gelombang yang sangat pendek dan banyak digunakan dalam dunia medis untuk pencitraan."
    },
    {
      question: "Apa yang dimaksud dengan radiasi elektromagnetik?",
      options: [
        "Energi yang dipancarkan oleh sumber gelombang elektromagnetik",
        "Gelombang yang hanya dapat merambat di dalam air",
        "Pancaran panas dari permukaan bumi",
        "Radiasi yang berasal dari partikel bermuatan"
      ],
      correctOption: "Energi yang dipancarkan oleh sumber gelombang elektromagnetik",
      explanation: "Radiasi elektromagnetik adalah energi yang dipancarkan oleh sumber gelombang elektromagnetik, seperti matahari yang memancarkan cahaya."
    },
    {
      question: "Apa yang dimaksud dengan spektrum elektromagnetik?",
      options: [
        "Rentang panjang gelombang yang terdiri dari berbagai jenis gelombang elektromagnetik",
        "Rentang waktu yang dibutuhkan oleh gelombang untuk merambat",
        "Rentang energi yang dihasilkan oleh sumber cahaya",
        "Rentang intensitas cahaya yang diterima oleh pengamat"
      ],
      correctOption: "Rentang panjang gelombang yang terdiri dari berbagai jenis gelombang elektromagnetik",
      explanation: "Spektrum elektromagnetik adalah rentang panjang gelombang dari berbagai jenis gelombang elektromagnetik, dari gelombang radio hingga sinar gamma."
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

export default LatihanSoalGelombangElektromagnetik;
