import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalSumberEnergi = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan energi terbarukan?",
      options: [
        "Energi yang dapat diperbaharui dan tidak habis digunakan",
        "Energi yang berasal dari bahan bakar fosil",
        "Energi yang berasal dari bahan baku yang tidak dapat diperbaharui",
        "Energi yang dapat diperoleh hanya dalam kondisi tertentu"
      ],
      correctOption: "Energi yang dapat diperbaharui dan tidak habis digunakan",
      explanation: "Energi terbarukan adalah energi yang berasal dari sumber daya alam yang dapat diperbaharui, seperti sinar matahari, angin, dan air."
    },
    {
      question: "Contoh sumber energi terbarukan adalah?",
      options: [
        "Minyak bumi",
        "Angin",
        "Gas alam",
        "Batubara"
      ],
      correctOption: "Angin",
      explanation: "Energi angin adalah contoh energi terbarukan yang dapat digunakan untuk menghasilkan listrik menggunakan turbin angin."
    },
    {
      question: "Sumber energi yang berasal dari panas bumi disebut?",
      options: [
        "Energi geotermal",
        "Energi matahari",
        "Energi angin",
        "Energi hidro"
      ],
      correctOption: "Energi geotermal",
      explanation: "Energi geotermal adalah energi yang diperoleh dari panas yang terkandung di dalam bumi dan dapat dimanfaatkan untuk menghasilkan listrik."
    },
    {
      question: "Apa yang dimaksud dengan energi fosil?",
      options: [
        "Energi yang berasal dari bahan bakar yang berasal dari proses alamiah bertahun-tahun",
        "Energi yang berasal dari angin",
        "Energi yang berasal dari air",
        "Energi yang berasal dari matahari"
      ],
      correctOption: "Energi yang berasal dari bahan bakar yang berasal dari proses alamiah bertahun-tahun",
      explanation: "Energi fosil berasal dari bahan bakar seperti batu bara, minyak bumi, dan gas alam yang terbentuk selama jutaan tahun dari sisa organisme purba."
    },
    {
      question: "Energi apa yang digunakan pada pembangkit listrik tenaga air?",
      options: [
        "Energi angin",
        "Energi kinetik air",
        "Energi listrik",
        "Energi kimia"
      ],
      correctOption: "Energi kinetik air",
      explanation: "Pembangkit listrik tenaga air menggunakan energi kinetik dari aliran air untuk menghasilkan listrik melalui turbin."
    },
    {
      question: "Sumber energi yang dapat dimanfaatkan dengan menggunakan panel surya adalah?",
      options: [
        "Energi panas bumi",
        "Energi angin",
        "Energi matahari",
        "Energi gelombang laut"
      ],
      correctOption: "Energi matahari",
      explanation: "Energi matahari dapat dimanfaatkan dengan menggunakan panel surya untuk menghasilkan listrik."
    },
    {
      question: "Apakah kelebihan dari energi terbarukan dibandingkan energi fosil?",
      options: [
        "Energi terbarukan lebih murah dan tidak terbatas",
        "Energi terbarukan lebih mudah diakses dan tersedia sepanjang waktu",
        "Energi terbarukan ramah lingkungan dan tidak mencemari udara",
        "Energi terbarukan lebih efisien dalam menghasilkan listrik"
      ],
      correctOption: "Energi terbarukan ramah lingkungan dan tidak mencemari udara",
      explanation: "Energi terbarukan tidak menghasilkan polusi dan dampak negatif terhadap lingkungan dibandingkan dengan energi fosil."
    },
    {
      question: "Apa yang dimaksud dengan energi nuklir?",
      options: [
        "Energi yang diperoleh dari reaksi pembakaran bahan bakar",
        "Energi yang dihasilkan melalui reaksi inti atom",
        "Energi yang berasal dari pergerakan air",
        "Energi yang diperoleh dari perubahan kimia"
      ],
      correctOption: "Energi yang dihasilkan melalui reaksi inti atom",
      explanation: "Energi nuklir adalah energi yang diperoleh dari reaksi fisika yang melibatkan inti atom, seperti pembelahan nuklir."
    },
    {
      question: "Salah satu dampak negatif dari penggunaan energi fosil adalah?",
      options: [
        "Pengurangan emisi gas rumah kaca",
        "Kerusakan ozon",
        "Pencemaran udara dan perubahan iklim",
        "Pemanasan bumi yang stabil"
      ],
      correctOption: "Pencemaran udara dan perubahan iklim",
      explanation: "Penggunaan energi fosil menghasilkan emisi gas rumah kaca yang memperburuk kualitas udara dan menyebabkan perubahan iklim."
    },
    {
      question: "Apa yang dimaksud dengan energi biomassa?",
      options: [
        "Energi yang dihasilkan dari pemrosesan air",
        "Energi yang berasal dari tanaman dan limbah organik",
        "Energi yang berasal dari pembakaran batu bara",
        "Energi yang dihasilkan dari pembelahan atom"
      ],
      correctOption: "Energi yang berasal dari tanaman dan limbah organik",
      explanation: "Energi biomassa berasal dari pembakaran bahan organik, seperti tanaman dan limbah organik, untuk menghasilkan energi."
    },
    {
      question: "Pembangkit listrik tenaga angin menggunakan apa untuk menghasilkan listrik?",
      options: [
        "Sinar matahari",
        "Gerakan angin",
        "Gelombang laut",
        "Air"
      ],
      correctOption: "Gerakan angin",
      explanation: "Pembangkit listrik tenaga angin memanfaatkan energi kinetik dari angin untuk menggerakkan turbin dan menghasilkan listrik."
    },
    {
      question: "Energi yang berasal dari gelombang laut disebut?",
      options: [
        "Energi ombak",
        "Energi laut",
        "Energi hidro",
        "Energi air"
      ],
      correctOption: "Energi ombak",
      explanation: "Energi ombak adalah energi yang berasal dari pergerakan gelombang laut yang dapat dimanfaatkan untuk menghasilkan listrik."
    },
    {
      question: "Salah satu kelebihan energi nuklir adalah?",
      options: [
        "Dapat menghasilkan energi dalam jumlah besar dengan sedikit bahan bakar",
        "Mudah ditemukan di seluruh dunia",
        "Tidak menghasilkan limbah berbahaya",
        "Memiliki biaya operasional yang rendah"
      ],
      correctOption: "Dapat menghasilkan energi dalam jumlah besar dengan sedikit bahan bakar",
      explanation: "Energi nuklir dapat menghasilkan energi yang sangat besar hanya dengan sedikit bahan bakar dibandingkan dengan energi fosil."
    },
    {
      question: "Bagaimana cara kerja pembangkit listrik tenaga surya?",
      options: [
        "Menggunakan reaksi kimia untuk menghasilkan listrik",
        "Mengubah energi panas matahari menjadi energi mekanik",
        "Menggunakan panel fotovoltaik untuk mengubah energi matahari menjadi listrik",
        "Menggunakan energi panas bumi"
      ],
      correctOption: "Menggunakan panel fotovoltaik untuk mengubah energi matahari menjadi listrik",
      explanation: "Pembangkit listrik tenaga surya menggunakan panel fotovoltaik untuk mengubah energi matahari menjadi listrik."
    },
    {
      question: "Apa yang dimaksud dengan energi hidroelektrik?",
      options: [
        "Energi yang dihasilkan dari aliran udara",
        "Energi yang dihasilkan dari aliran air",
        "Energi yang dihasilkan dari pembakaran biomassa",
        "Energi yang dihasilkan dari sinar matahari"
      ],
      correctOption: "Energi yang dihasilkan dari aliran air",
      explanation: "Energi hidroelektrik adalah energi yang dihasilkan dengan memanfaatkan aliran air untuk memutar turbin yang menghasilkan listrik."
    },
    {
      question: "Mengapa energi terbarukan dianggap lebih ramah lingkungan?",
      options: [
        "Karena tidak menghasilkan emisi gas rumah kaca",
        "Karena lebih murah dari energi fosil",
        "Karena lebih efisien",
        "Karena lebih mudah ditemukan"
      ],
      correctOption: "Karena tidak menghasilkan emisi gas rumah kaca",
      explanation: "Energi terbarukan tidak menghasilkan emisi yang berbahaya bagi lingkungan, seperti yang terjadi pada energi fosil."
    },
    {
      question: "Sumber energi yang digunakan dalam pembangkit listrik tenaga angin adalah?",
      options: [
        "Angin",
        "Air",
        "Batu bara",
        "Gas"
      ],
      correctOption: "Angin",
      explanation: "Pembangkit listrik tenaga angin menggunakan energi kinetik dari angin untuk menghasilkan listrik."
    },
    {
      question: "Salah satu contoh energi terbarukan adalah?",
      options: [
        "Gas alam",
        "Batubara",
        "Energi surya",
        "Minyak bumi"
      ],
      correctOption: "Energi surya",
      explanation: "Energi surya adalah energi yang berasal dari matahari dan termasuk dalam kategori energi terbarukan."
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

export default LatihanSoalSumberEnergi;
