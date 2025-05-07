import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan sifat koligatif larutan?",
      options: [
        "Sifat larutan yang hanya bergantung pada jenis zat terlarut",
        "Sifat larutan yang hanya bergantung pada jumlah partikel zat terlarut",
        "Sifat larutan yang bergantung pada volume larutan",
        "Sifat larutan yang bergantung pada tekanan larutan"
      ],
      correctOption: "Sifat larutan yang hanya bergantung pada jumlah partikel zat terlarut",
      explanation: "Sifat koligatif larutan adalah sifat larutan yang bergantung pada jumlah partikel zat terlarut, bukan jenisnya.",
    },
    {
      question: "Berikut ini yang termasuk sifat koligatif larutan adalah?",
      options: [
        "Massa jenis",
        "Tekanan osmotik",
        "Warna larutan",
        "Kelarutan"
      ],
      correctOption: "Tekanan osmotik",
      explanation: "Tekanan osmotik merupakan salah satu sifat koligatif larutan selain penurunan tekanan uap, penurunan titik beku, dan kenaikan titik didih.",
    },
    {
      question: "Penurunan tekanan uap jenuh larutan disebabkan oleh?",
      options: [
        "Penurunan suhu larutan",
        "Adanya zat terlarut yang menghalangi pelarutan",
        "Partikel zat terlarut yang menghalangi penguapan partikel pelarut",
        "Peningkatan suhu larutan"
      ],
      correctOption: "Partikel zat terlarut yang menghalangi penguapan partikel pelarut",
      explanation: "Penurunan tekanan uap jenuh terjadi karena partikel zat terlarut menghalangi partikel pelarut untuk menguap.",
    },
    {
      question: "Apa hubungan antara molalitas larutan dan penurunan titik beku?",
      options: [
        "Semakin kecil molalitas, semakin besar penurunan titik beku",
        "Semakin besar molalitas, semakin besar penurunan titik beku",
        "Molalitas tidak memengaruhi titik beku",
        "Molalitas hanya memengaruhi tekanan uap"
      ],
      correctOption: "Semakin besar molalitas, semakin besar penurunan titik beku",
      explanation: "Penurunan titik beku larutan sebanding dengan molalitas larutan, sesuai dengan rumus ∆Tf = Kf × m.",
    },
    {
      question: "Rumus untuk menghitung tekanan osmotik adalah?",
      options: [
        "π = M × R × T",
        "π = m × R × T",
        "π = P × V × T",
        "π = n × R × T"
      ],
      correctOption: "π = M × R × T",
      explanation: "Tekanan osmotik (π) dihitung menggunakan rumus π = M × R × T, di mana M adalah molaritas, R adalah konstanta gas, dan T adalah suhu dalam Kelvin.",
    },
    {
      question: "Kenaikan titik didih larutan dipengaruhi oleh?",
      options: [
        "Jumlah partikel zat terlarut",
        "Jenis pelarut",
        "Warna larutan",
        "Kecepatan pengadukan"
      ],
      correctOption: "Jumlah partikel zat terlarut",
      explanation: "Kenaikan titik didih larutan merupakan sifat koligatif yang dipengaruhi oleh jumlah partikel zat terlarut dalam larutan.",
    },
    {
      question: "Apa yang dimaksud dengan faktor van 't Hoff?",
      options: [
        "Rasio antara massa pelarut dan massa larutan",
        "Jumlah partikel zat terlarut dalam larutan",
        "Faktor yang menunjukkan jumlah partikel hasil ionisasi atau disosiasi zat terlarut",
        "Faktor yang menunjukkan molaritas larutan"
      ],
      correctOption: "Faktor yang menunjukkan jumlah partikel hasil ionisasi atau disosiasi zat terlarut",
      explanation: "Faktor van 't Hoff digunakan untuk menghitung jumlah partikel sebenarnya dalam larutan elektrolit.",
    },
    {
      question: "Jika suatu larutan memiliki molaritas 0,5 M dan suhu 300 K, tekanan osmotiknya adalah? (Gunakan R = 0,0821 atm·L/mol·K)",
      options: [
        "12,315 atm",
        "10,215 atm",
        "8,215 atm",
        "15,315 atm"
      ],
      correctOption: "12,315 atm",
      explanation: "Tekanan osmotik dihitung menggunakan rumus π = M × R × T = 0,5 × 0,0821 × 300 = 12,315 atm.",
    },
    {
      question: "Penurunan tekanan uap larutan non-elektrolit ditentukan oleh?",
      options: [
        "Jenis pelarut",
        "Fraksi mol zat terlarut",
        "Suhu larutan",
        "Jenis zat terlarut"
      ],
      correctOption: "Fraksi mol zat terlarut",
      explanation: "Penurunan tekanan uap larutan non-elektrolit sebanding dengan fraksi mol zat terlarut, sesuai dengan hukum Raoult.",
    },
    {
      question: "Larutan NaCl 1 M memiliki sifat koligatif lebih tinggi dibandingkan larutan urea 1 M karena?",
      options: [
        "NaCl memiliki massa molar lebih kecil",
        "NaCl mengalami disosiasi menjadi dua partikel",
        "Urea memiliki massa jenis lebih tinggi",
        "NaCl memiliki tekanan uap lebih rendah"
      ],
      correctOption: "NaCl mengalami disosiasi menjadi dua partikel",
      explanation: "NaCl sebagai elektrolit mengalami disosiasi menjadi ion Na+ dan Cl-, sehingga jumlah partikel dalam larutan lebih banyak dibandingkan urea.",
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
    setShowConfirmation(true);
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
      setShowConfirmation(false);
    } else {
      resetSelection();
      setShowConfirmation(false);
    }
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

      {selectedOption && !showConfirmation && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlKma12b1;
