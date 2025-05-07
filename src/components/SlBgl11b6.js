import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
        "question": "Apa yang dimaksud dengan transportasi zat dalam tubuh manusia?",
        "options": [
          { "label": "A. Proses pencernaan makanan", "value": "A" },
          { "label": "B. Proses pengangkutan zat-zat penting ke seluruh tubuh", "value": "B", "isCorrect": true },
          { "label": "C. Proses penyerapan nutrisi di usus", "value": "C" },
          { "label": "D. Proses ekskresi zat sisa", "value": "D" }
        ],
        "explanation": "Transportasi zat dalam tubuh manusia adalah proses pengangkutan zat-zat penting seperti oksigen, nutrisi, dan hormon ke seluruh bagian tubuh melalui sistem peredaran darah."
      },
      {
        "question": "Apa fungsi utama hemoglobin dalam darah?",
        "options": [
          { "label": "A. Mengangkut karbon dioksida", "value": "A" },
          { "label": "B. Mengangkut oksigen", "value": "B", "isCorrect": true },
          { "label": "C. Mengatur pH darah", "value": "C" },
          { "label": "D. Memproduksi sel darah merah", "value": "D" }
        ],
        "explanation": "Hemoglobin adalah protein yang terdapat dalam sel darah merah dan berfungsi utama untuk mengangkut oksigen dari paru-paru ke seluruh tubuh."
      },
      {
        "question": "Di mana proses pertukaran gas (oksigen dan karbon dioksida) terjadi dalam tubuh manusia?",
        "options": [
          { "label": "A. Di jantung", "value": "A" },
          { "label": "B. Di paru-paru", "value": "B", "isCorrect": true },
          { "label": "C. Di hati", "value": "C" },
          { "label": "D. Di ginjal", "value": "D" }
        ],
        "explanation": "Proses pertukaran gas terjadi di paru-paru, tepatnya di alveolus, di mana oksigen dari udara masuk ke dalam darah dan karbon dioksida dikeluarkan dari darah ke udara."
      },
      {
        "question": "Zat apa yang diangkut oleh sistem limfatik?",
        "options": [
          { "label": "A. Hormon", "value": "A" },
          { "label": "B. Oksigen", "value": "B" },
          { "label": "C. Lemak dan limfa", "value": "C", "isCorrect": true },
          { "label": "D. Karbon dioksida", "value": "D" }
        ],
        "explanation": "Sistem limfatik berfungsi untuk mengangkut lemak yang diserap dari usus serta limfa, yang mengandung sel-sel imun, dari jaringan tubuh kembali ke aliran darah."
      },
      {
        "question": "Apa yang terjadi pada sel-sel tubuh saat kekurangan oksigen?",
        "options": [
          { "label": "A. Sel-sel akan membelah lebih cepat", "value": "A" },
          { "label": "B. Sel-sel akan mengalami kematian", "value": "B", "isCorrect": true },
          { "label": "C. Sel-sel akan berfungsi lebih efisien", "value": "C" },
          { "label": "D. Sel-sel akan menghasilkan energi melalui respirasi aerob", "value": "D" }
        ],
        "explanation": "Kekurangan oksigen pada sel-sel tubuh dapat menyebabkan gangguan fungsi sel dan akhirnya kematian sel, karena sel tidak dapat melakukan respirasi aerob yang diperlukan untuk menghasilkan energi."
      },
      {
        "question": "Apa yang dimaksud dengan sistem peredaran darah manusia?",
        "options": [
          { "label": "A. Sistem yang mengatur suhu tubuh", "value": "A" },
          { "label": "B. Sistem yang mengangkut oksigen dan nutrisi ke seluruh tubuh", "value": "B", "isCorrect": true },
          { "label": "C. Sistem yang mengeluarkan zat sisa dari tubuh", "value": "C" },
          { "label": "D. Sistem yang memproduksi hormon", "value": "D" }
        ],
        "explanation": "Sistem peredaran darah manusia berfungsi untuk mengangkut oksigen, nutrisi, dan zat-zat penting lainnya ke seluruh tubuh serta mengeluarkan produk sampingan seperti karbon dioksida."
      },
      {
        "question": "Bagaimana proses transportasi oksigen dalam darah?",
        "options": [
          { "label": "A. Oksigen diikat oleh hemoglobin dalam darah", "value": "A", "isCorrect": true },
          { "label": "B. Oksigen disalurkan oleh sel darah putih", "value": "B" },
          { "label": "C. Oksigen langsung diserap oleh jaringan tubuh", "value": "C" },
          { "label": "D. Oksigen dibawa oleh sistem limfatik", "value": "D" }
        ],
        "explanation": "Oksigen diikat oleh hemoglobin dalam sel darah merah dan dibawa ke seluruh tubuh untuk disalurkan ke jaringan tubuh yang membutuhkan."
      },
      {
        "question": "Apa yang dimaksud dengan sistem peredaran limfatik?",
        "options": [
          { "label": "A. Sistem yang mengangkut darah ke jantung", "value": "A" },
          { "label": "B. Sistem yang mengangkut limfa dan lemak", "value": "B", "isCorrect": true },
          { "label": "C. Sistem yang mengatur metabolisme tubuh", "value": "C" },
          { "label": "D. Sistem yang mengangkut karbon dioksida", "value": "D" }
        ],
        "explanation": "Sistem peredaran limfatik berfungsi untuk mengangkut limfa yang mengandung sel-sel imun dan lemak yang diserap dari usus."
      },
      {
        "question": "Bagaimana cara tubuh mengatur kadar oksigen dalam darah?",
        "options": [
          { "label": "A. Dengan meningkatkan produksi sel darah merah", "value": "A", "isCorrect": true },
          { "label": "B. Dengan menurunkan jumlah hemoglobin", "value": "B" },
          { "label": "C. Dengan meningkatkan laju pernapasan", "value": "C" },
          { "label": "D. Dengan menurunkan tekanan darah", "value": "D" }
        ],
        "explanation": "Tubuh mengatur kadar oksigen dalam darah dengan cara meningkatkan produksi sel darah merah dan mempercepat pernapasan jika kadar oksigen menurun."
      },
      {
        "question": "Apa yang terjadi jika sistem peredaran darah terganggu?",
        "options": [
          { "label": "A. Tubuh akan mengalami kesulitan dalam transportasi oksigen", "value": "A", "isCorrect": true },
          { "label": "B. Tubuh akan menjadi lebih kuat", "value": "B" },
          { "label": "C. Tubuh akan memiliki lebih banyak energi", "value": "C" },
          { "label": "D. Tubuh akan lebih mudah mencerna makanan", "value": "D" }
        ],
        "explanation": "Jika sistem peredaran darah terganggu, tubuh akan mengalami kesulitan dalam mengangkut oksigen dan nutrisi ke seluruh tubuh, yang dapat menyebabkan gangguan fungsi organ."
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