import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Hormon apa yang bertanggung jawab untuk merangsang ovulasi pada wanita?",
    options: [
      { label: "A. Estrogen", value: "A" },
      { label: "B. Progesteron", value: "B" },
      { label: "C. Luteinizing Hormone (LH)", value: "C", isCorrect: true },
      { label: "D. Follicle Stimulating Hormone (FSH)", value: "D" },
    ],
    explanation: "Luteinizing Hormone (LH) adalah hormon yang berperan penting dalam merangsang ovulasi, yaitu pelepasan sel telur dari ovarium.",
  },
  {
    question: "Hormon yang dihasilkan oleh testis dan berfungsi untuk memproduksi sperma adalah?",
    options: [
      { label: "A. Estrogen", value: "A" },
      { label: "B. Testosteron", value: "B", isCorrect: true },
      { label: "C. Progesteron", value: "C" },
      { label: "D. Luteinizing Hormone (LH)", value: "D" },
    ],
    explanation: "Testosteron adalah hormon yang dihasilkan oleh testis dan berperan dalam perkembangan dan pematangan sperma, serta pengembangan karakteristik seksual pria.",
  },
  {
    question: "Apa fungsi dari hormon estrogen dalam siklus menstruasi?",
    options: [
      { label: "A. Mempromosikan pertumbuhan folikel dan mempersiapkan endometrium", value: "A", isCorrect: true },
      { label: "B. Menstabilkan kadar progesteron", value: "B" },
      { label: "C. Menghambat ovulasi", value: "C" },
      { label: "D. Menyebabkan menstruasi", value: "D" },
    ],
    explanation: "Estrogen berfungsi untuk mempromosikan pertumbuhan folikel ovarium dan mempersiapkan lapisan endometrium untuk kemungkinan implantasi sel telur yang dibuahi.",
  },
  {
    question: "Hormon mana yang dihasilkan oleh korpus luteum dan berperan penting dalam mempertahankan kehamilan?",
    options: [
      { label: "A. Estrogen", value: "A" },
      { label: "B. Progesteron", value: "B", isCorrect: true },
      { label: "C. Luteinizing Hormone (LH)", value: "C" },
      { label: "D. Follicle Stimulating Hormone (FSH)", value: "D" },
    ],
    explanation: "Progesteron dihasilkan oleh korpus luteum setelah ovulasi dan berperan penting dalam mempertahankan kehamilan dengan mempersiapkan dan menjaga lapisan endometrium.",
  },
  {
    question: "Apa yang terjadi jika kadar hormon progesteron menurun drastis pada wanita hamil?",
    options: [
      { label: "A. Kehamilan akan berlanjut dengan baik", value: "A" },
      { label: "B. Terjadi ovulasi", value: "B" },
      { label: "C. Terjadi keguguran", value: "C", isCorrect: true },
      { label: "D. Tidak ada perubahan yang signifikan", value: "D" },
    ],
    explanation: "Penurunan kadar progesteron yang drastis dapat menyebabkan keguguran, karena hormon ini penting untuk mempertahankan kehamilan dengan menjaga lapisan endometrium.",
  },
  {
    question: "Hormon apa yang berperan dalam peningkatan kadar glukosa dalam darah?",
    options: [
      { label: "A. Insulin", value: "A" },
      { label: "B. Glukagon", value: "B", isCorrect: true },
      { label: "C. Adrenalin", value: "C" },
      { label: "D. Kortisol", value: "D" },
    ],
    explanation: "Glukagon adalah hormon yang diproduksi oleh pankreas dan berfungsi untuk meningkatkan kadar glukosa dalam darah dengan merangsang hati untuk melepaskan glukosa.",
  },
  {
    question: "Apa fungsi utama hormon insulin dalam tubuh manusia?",
    options: [
      { label: "A. Mengatur metabolisme lemak", value: "A" },
      { label: "B. Mengatur kadar glukosa dalam darah", value: "B", isCorrect: true },
      { label: "C. Meningkatkan tekanan darah", value: "C" },
      { label: "D. Menstabilkan suhu tubuh", value: "D" },
    ],
    explanation: "Insulin adalah hormon yang diproduksi oleh pankreas dan berfungsi untuk menurunkan kadar glukosa dalam darah dengan memfasilitasi masuknya glukosa ke dalam sel-sel tubuh.",
  },
  {
    question: "Hormon mana yang berfungsi untuk meningkatkan metabolisme tubuh dan meningkatkan suhu tubuh?",
    options: [
      { label: "A. Thyroxine", value: "A", isCorrect: true },
      { label: "B. Adrenalin", value: "B" },
      { label: "C. Insulin", value: "C" },
      { label: "D. Progesteron", value: "D" },
    ],
    explanation: "Thyroxine adalah hormon yang diproduksi oleh kelenjar tiroid dan berfungsi untuk meningkatkan metabolisme tubuh, termasuk meningkatkan suhu tubuh.",
  },
  {
    question: "Hormon yang diproduksi oleh kelenjar adrenal dan berperan dalam respons stres adalah?",
    options: [
      { label: "A. Kortisol", value: "A", isCorrect: true },
      { label: "B. Adrenalin", value: "B" },
      { label: "C. Insulin", value: "C" },
      { label: "D. Prolaktin", value: "D" },
    ],
    explanation: "Kortisol adalah hormon yang diproduksi oleh kelenjar adrenal dan berperan penting dalam respons tubuh terhadap stres dengan meningkatkan kadar glukosa darah dan menekan peradangan.",
  },
  {
    question: "Hormon apa yang berperan dalam proses kontraksi rahim saat persalinan?",
    options: [
      { label: "A. Prolaktin", value: "A" },
      { label: "B. Oksitosin", value: "B", isCorrect: true },
      { label: "C. Kortisol", value: "C" },
      { label: "D. Adrenalin", value: "D" },
    ],
    explanation: "Oksitosin adalah hormon yang dihasilkan oleh kelenjar hipofisis posterior dan berperan penting dalam proses kontraksi rahim saat persalinan serta dalam produksi ASI.",
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