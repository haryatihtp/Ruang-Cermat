import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan larutan penyangga?",
      options: [
        "Larutan yang pH-nya berubah drastis saat ditambah air",
        "Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa",
        "Larutan yang dapat mempercepat reaksi kimia",
        "Larutan yang hanya mengandung air dan garam"
      ],
      correctOption: "Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa",
      explanation: "Larutan penyangga dapat mempertahankan pH-nya meskipun ditambahkan sedikit asam atau basa."
    },
    {
      question: "Komponen utama larutan penyangga adalah?",
      options: [
        "Air dan garam",
        "Asam lemah dan basa kuat",
        "Asam lemah dan garamnya, atau basa lemah dan garamnya",
        "Asam kuat dan basa kuat"
      ],
      correctOption: "Asam lemah dan garamnya, atau basa lemah dan garamnya",
      explanation: "Larutan penyangga terdiri dari asam lemah dan garamnya, atau basa lemah dan garamnya."
    },
    {
      question: "pH larutan penyangga asam dapat dihitung menggunakan rumus?",
      options: [
        "pH = -log[H+]",
        "pH = pKa + log([garam]/[asam])",
        "pH = pKa - log([garam]/[asam])",
        "pH = -log[OH-]"
      ],
      correctOption: "pH = pKa + log([garam]/[asam])",
      explanation: "pH larutan penyangga asam dihitung dengan rumus pH = pKa + log([garam]/[asam])."
    },
    {
      question: "Larutan yang termasuk larutan penyangga basa adalah?",
      options: [
        "HCl dan NaCl",
        "CH3COOH dan CH3COONa",
        "NH3 dan NH4Cl",
        "HNO3 dan NaNO3"
      ],
      correctOption: "NH3 dan NH4Cl",
      explanation: "NH3 dan NH4Cl merupakan larutan penyangga basa karena terdiri dari basa lemah dan garamnya."
    },
    {
      question: "Apa fungsi larutan penyangga dalam tubuh manusia?",
      options: [
        "Meningkatkan kecepatan reaksi metabolisme",
        "Menjaga kestabilan pH darah",
        "Menguraikan zat-zat makanan",
        "Menghancurkan racun dalam tubuh"
      ],
      correctOption: "Menjaga kestabilan pH darah",
      explanation: "Larutan penyangga menjaga kestabilan pH darah agar tetap sekitar 7,4."
    },
    {
      question: "Larutan penyangga dapat mengatur pH pada rentang pH?",
      options: [
        "0-7",
        "7-14",
        "4-7",
        "3-12"
      ],
      correctOption: "3-12",
      explanation: "Larutan penyangga dapat mengatur pH pada rentang 3-12 tergantung pada komponen asam-basa yang digunakan."
    },
    {
      question: "Apa yang terjadi jika larutan penyangga ditambahkan dengan asam kuat?",
      options: [
        "pH tidak berubah",
        "pH akan turun sedikit",
        "pH akan meningkat",
        "pH akan berubah drastis"
      ],
      correctOption: "pH akan turun sedikit",
      explanation: "Larutan penyangga akan sedikit menurunkan pH ketika ditambahkan asam kuat, tetapi pH tetap relatif stabil."
    },
    {
      question: "Larutan penyangga dapat digunakan untuk?",
      options: [
        "Mempercepat reaksi kimia",
        "Menjaga kestabilan pH dalam reaksi biologi",
        "Mengurangi suhu reaksi",
        "Meningkatkan konsentrasi ion H+"
      ],
      correctOption: "Menjaga kestabilan pH dalam reaksi biologi",
      explanation: "Larutan penyangga membantu menjaga kestabilan pH dalam reaksi biologi, seperti proses metabolisme."
    },
    {
      question: "Larutan penyangga dapat dipersiapkan dengan mencampurkan?",
      options: [
        "Asam kuat dengan basa kuat",
        "Asam lemah dengan basa lemah",
        "Asam lemah dengan garamnya",
        "Basa kuat dengan garam"
      ],
      correctOption: "Asam lemah dengan garamnya",
      explanation: "Larutan penyangga dapat dipersiapkan dengan mencampurkan asam lemah dengan garamnya atau basa lemah dengan garamnya."
    },
    {
      question: "pH larutan penyangga dapat berubah jika?",
      options: [
        "Ditambahkan banyak asam atau basa",
        "Didinginkan",
        "Ditambah air",
        "Ditingkatkan konsentrasi garam"
      ],
      correctOption: "Ditambahkan banyak asam atau basa",
      explanation: "pH larutan penyangga akan berubah jika ditambahkan banyak asam atau basa, melebihi kapasitas penyangga."
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

export default LatihanSoal;