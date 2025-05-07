import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Apa yang dimaksud dengan pertumbuhan pada makhluk hidup?",
    options: [
      { label: "A. Perubahan posisi makhluk hidup", value: "A" },
      { label: "B. Proses pembelahan sel yang tidak teratur", value: "B" },
      { label: "C. Penambahan ukuran dan massa tubuh makhluk hidup", value: "C", isCorrect: true },
      { label: "D. Perubahan tingkah laku makhluk hidup", value: "D" },
    ],
    explanation: "Pertumbuhan pada makhluk hidup adalah proses penambahan ukuran dan massa tubuh yang terjadi secara teratur dan terukur, biasanya diakibatkan oleh pembelahan sel.",
  },
  {
    question: "Apa yang dimaksud dengan perkembangan pada makhluk hidup?",
    options: [
      { label: "A. Proses perubahan fisik dan fisiologis yang terjadi seiring waktu", value: "A", isCorrect: true },
      { label: "B. Proses bertambahnya ukuran tubuh", value: "B" },
      { label: "C. Proses reproduksi yang terjadi pada makhluk hidup", value: "C" },
      { label: "D. Proses adaptasi terhadap lingkungan", value: "D" },
    ],
    explanation: "Perkembangan pada makhluk hidup merujuk pada proses perubahan fisik dan fisiologis yang terjadi seiring waktu, termasuk perubahan dalam struktur, fungsi, dan tingkah laku.",
  },
  {
    question: "Hormon apa yang berperan penting dalam pertumbuhan tanaman?",
    options: [
      { label: "A. Estrogen", value: "A" },
      { label: "B. Testosteron", value: "B" },
      { label: "C. Auksin", value: "C", isCorrect: true },
      { label: "D. Insulin", value: "D" },
    ],
    explanation: "Auksin adalah hormon tumbuhan yang berperan penting dalam merangsang pertumbuhan, terutama dalam proses pemanjangan sel dan pengaturan pertumbuhan akar dan batang.",
  },
  {
    question: "Apa yang dimaksud dengan metamorfosis?",
    options: [
      { label: "A. Proses pertumbuhan yang terjadi pada tanaman", value: "A" },
      { label: "B. Perubahan bentuk dan struktur tubuh yang signifikan selama siklus hidup", value: "B", isCorrect: true },
      { label: "C. Proses pembelahan sel yang tidak teratur", value: "C" },
      { label: "D. Proses reproduksi pada hewan", value: "D" },
    ],
    explanation: "Metamorfosis adalah proses perubahan bentuk dan struktur tubuh yang signifikan selama siklus hidup suatu organisme, seperti yang terjadi pada kupu-kupu dari telur menjadi larva, pupa, dan akhirnya menjadi kupu-kupu dewasa.",
  },
  {
    question: "Apa yang dapat mempengaruhi tumbuh kembang makhluk hidup?",
    options: [
      { label: "A. Hanya faktor genetik", value: "A" },
      { label: "B. Hanya faktor lingkungan", value: "B" },
      { label: "C. Faktor genetik dan lingkungan", value: "C", isCorrect: true },
      { label: "D. Tidak ada faktor yang mempengaruhi", value: "D" },
    ],
    explanation: "Tumbuh kembang makhluk hidup dipengaruhi oleh kombinasi faktor genetik (yang diwariskan dari orang tua) dan faktor lingkungan (seperti nutrisi, suhu, cahaya, dan kelembapan).",
  },
  {
    question: "Apa yang dimaksud dengan diferensiasi sel?",
    options: [
      { label: "A. Proses sel berkembang menjadi bentuk dan fungsi yang lebih spesifik", value: "A", isCorrect: true },
      { label: "B. Proses pembelahan sel yang menghasilkan dua sel identik", value: "B" },
      { label: "C. Proses penggabungan dua sel menjadi satu", value: "C" },
      { label: "D. Proses sel mengubah bentuk sesuai dengan lingkungan", value: "D" },
    ],
    explanation: "Diferensiasi sel adalah proses di mana sel yang belum terdiferensiasi berubah menjadi sel dengan bentuk dan fungsi yang lebih spesifik, yang memungkinkan mereka untuk melakukan tugas tertentu dalam tubuh.",
  },
  {
    question: "Hormon apa yang berperan dalam proses pembentukan tulang?",
    options: [
      { label: "A. Estrogen", value: "A" },
      { label: "B. Testosteron", value: "B" },
      { label: "C. Hormon pertumbuhan (GH)", value: "C", isCorrect: true },
      { label: "D. Insulin", value: "D" },
    ],
    explanation: "Hormon pertumbuhan (GH) berperan penting dalam proses pembentukan tulang dan pemeliharaan struktur tubuh, serta mempengaruhi pertumbuhan dan perkembangan jaringan tubuh lainnya.",
  },
  {
    question: "Apa yang dimaksud dengan adaptasi pada makhluk hidup?",
    options: [
      { label: "A. Proses perubahan fisik dan perilaku untuk menyesuaikan diri dengan lingkungan", value: "A", isCorrect: true },
      { label: "B. Proses pembelahan sel untuk menghasilkan keturunan", value: "B" },
      { label: "C. Proses pertumbuhan pada tubuh makhluk hidup", value: "C" },
      { label: "D. Proses reproduksi pada makhluk hidup", value: "D" },
    ],
    explanation: "Adaptasi adalah proses perubahan fisik dan perilaku pada makhluk hidup yang memungkinkan mereka untuk menyesuaikan diri dengan lingkungan dan bertahan hidup.",
  },
  {
    question: "Apa yang dimaksud dengan regenerasi pada hewan?",
    options: [
      { label: "A. Proses pertumbuhan kembali bagian tubuh yang hilang atau rusak", value: "A", isCorrect: true },
      { label: "B. Proses pembelahan sel untuk menghasilkan individu baru", value: "B" },
      { label: "C. Proses perubahan bentuk tubuh pada hewan dewasa", value: "C" },
      { label: "D. Proses pembuahan pada hewan", value: "D" },
    ],
    explanation: "Regenerasi adalah proses di mana makhluk hidup, terutama hewan, dapat menghasilkan kembali bagian tubuh yang hilang atau rusak, seperti yang terjadi pada bintang laut yang dapat menumbuhkan kembali lengan yang hilang.",
  },
  {
    question: "Apa yang dimaksud dengan fotosintesis pada tumbuhan?",
    options: [
      { label: "A. Proses respirasi yang menghasilkan energi", value: "A" },
      { label: "B. Proses pemecahan molekul air menjadi oksigen", value: "B" },
      { label: "C. Proses pembuatan makanan dengan bantuan cahaya matahari", value: "C", isCorrect: true },
      { label: "D. Proses penguapan air melalui stomata", value: "D" },
    ],
    explanation: "Fotosintesis adalah proses di mana tumbuhan hijau menggunakan cahaya matahari, karbon dioksida, dan air untuk menghasilkan makanan berupa glukosa dan oksigen sebagai produk sampingannya.",
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
  setShowExplanation(false);
};

const handleDropdownChange = (e) => {
  const selectedNumber = parseInt(e.target.value);
  setCurrentQuestion(selectedNumber);
  resetSelection();
};

const handleExplanationClick = () => {
  if (showExplanation) {
    setShowExplanation(false); // Sembunyikan pembahasan tanpa pesan
  } else if (!selectedOption) {
    setShowConfirmation(true); // Tampilkan pesan jika opsi belum dipilih
  } else {
    setShowExplanation(true); // Langsung tampilkan pembahasan jika opsi sudah dipilih
  }
};

const handleConfirmationResponse = (response) => {
  if (response === "yes") {
    setShowExplanation(true); // Tampilkan pembahasan
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

      <div className="explanation-container">
        <button
          className="explanation-toggle"
          onClick={handleExplanationClick}
        >
          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan"}
        </button>
        {showExplanation && (
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        )}
      </div>
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
}
export default LatihanSoal;