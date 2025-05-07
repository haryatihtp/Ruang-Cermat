import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan hukum Hess dalam termokimia?",
      options: [
        "A. Energi dalam reaksi kimia tidak dapat diciptakan atau dimusnahkan.",
        "B. Perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir.",
        "C. Panas yang dilepaskan selalu sama dengan energi yang diserap.",
        "D. Reaksi eksoterm lebih stabil dibandingkan reaksi endoterm."
      ],
      correctOption: "B",
      explanation:
        "Hukum Hess menyatakan bahwa perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir, tidak tergantung pada jalannya reaksi."
    },
    {
      question: "Apa satuan yang biasanya digunakan untuk mengukur entalpi reaksi?",
      options: ["A. Joule (J)", "B. Kalori (cal)", "C. Kilojoule (kJ)", "D. Semua benar"],
      correctOption: "D",
      explanation:
        "Entalpi reaksi dapat dinyatakan dalam satuan joule (J), kalori (cal), atau kilojoule (kJ), tergantung konteks pengukurannya."
    },
    {
      question: "Jika suatu reaksi menghasilkan energi 100 kJ, maka reaksi tersebut bersifat?",
      options: ["A. Eksoterm", "B. Endoterm", "C. Netral", "D. Spontan"],
      correctOption: "A",
      explanation: "Reaksi eksoterm menghasilkan energi ke lingkungan, biasanya dalam bentuk panas."
    },
    {
      question: "Proses pembakaran bahan bakar merupakan reaksi yang?",
      options: ["A. Eksoterm", "B. Endoterm", "C. Isoterm", "D. Adiabatik"],
      correctOption: "A",
      explanation: "Pembakaran bahan bakar adalah reaksi eksoterm karena melepaskan panas ke lingkungan."
    },
    {
      question: "Dalam eksperimen termokimia, alat yang digunakan untuk mengukur perubahan panas adalah?",
      options: ["A. Termometer", "B. Barometer", "C. Kalorimeter", "D. Spektrofotometer"],
      correctOption: "C",
      explanation: "Kalorimeter digunakan untuk mengukur perubahan panas dalam eksperimen termokimia."
    },
    {
      question: "Apa yang dimaksud dengan entalpi dalam termokimia?",
      options: [
        "A. Energi yang dibutuhkan untuk mengubah suhu suatu zat",
        "B. Energi yang dilepaskan atau diserap dalam reaksi kimia pada tekanan konstan",
        "C. Panas yang dilepaskan dalam proses pembakaran",
        "D. Proses perubahan fase zat"
      ],
      correctOption: "B",
      explanation:
        "Entalpi adalah energi yang dilepaskan atau diserap dalam reaksi kimia pada tekanan konstan."
    },
    {
      question: "Bagaimana cara menghitung perubahan entalpi reaksi menggunakan hukum Hess?",
      options: [
        "A. Menjumlahkan entalpi reaksi individual",
        "B. Mengurangkan entalpi reaksi individual",
        "C. Menggunakan rumus energi aktivasi",
        "D. Menggunakan hukum kekekalan massa"
      ],
      correctOption: "A",
      explanation:
        "Perubahan entalpi reaksi dapat dihitung dengan menjumlahkan entalpi reaksi individual sesuai hukum Hess."
    },
    {
      question: "Apa yang terjadi pada entalpi dalam reaksi endoterm?",
      options: [
        "A. Entalpi bertambah",
        "B. Entalpi berkurang",
        "C. Entalpi tetap",
        "D. Entalpi tidak berpengaruh"
      ],
      correctOption: "A",
      explanation:
        "Pada reaksi endoterm, energi diserap sehingga entalpi sistem bertambah."
    },
    {
      question: "Apa yang dimaksud dengan reaksi eksoterm?",
      options: [
        "A. Reaksi yang menyerap panas",
        "B. Reaksi yang melepaskan panas",
        "C. Reaksi yang tidak melibatkan panas",
        "D. Reaksi yang tidak terjadi"
      ],
      correctOption: "B",
      explanation:
        "Reaksi eksoterm adalah reaksi yang melepaskan panas ke lingkungan."
    },
    {
      question: "Apa pengaruh tekanan terhadap entalpi pada reaksi gas?",
      options: [
        "A. Tidak berpengaruh",
        "B. Entalpi akan meningkat seiring dengan meningkatnya tekanan",
        "C. Entalpi berkurang jika tekanan meningkat",
        "D. Tekanan hanya berpengaruh pada suhu, bukan entalpi"
      ],
      correctOption: "B",
      explanation:
        "Pada reaksi gas, tekanan dapat mempengaruhi entalpi, khususnya untuk gas yang terlibat dalam reaksi."
    },
    {
      question: "Apa yang dimaksud dengan entalpi pembentukan standar?",
      options: [
        "A. Energi yang dilepaskan saat pembakaran",
        "B. Perubahan entalpi untuk pembentukan satu mol senyawa dari unsur-unsurnya dalam keadaan standar",
        "C. Energi yang diserap dalam proses sublimasi",
        "D. Energi yang dibutuhkan dalam pembentukan ikatan"
      ],
      correctOption: "B",
      explanation:
        "Entalpi pembentukan standar adalah perubahan entalpi untuk pembentukan satu mol senyawa dari unsur-unsurnya dalam keadaan standar."
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

export default LatihanSoal2;
