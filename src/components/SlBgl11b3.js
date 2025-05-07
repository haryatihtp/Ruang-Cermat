import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    "question": "Apa yang dimaksud dengan pengaturan pada tumbuhan?",
    "options": [
      { "label": "A. Proses yang memungkinkan tumbuhan berkembang biak secara seksual.", "value": "A" },
      { "label": "B. Proses yang memungkinkan tumbuhan merespons dan menyesuaikan diri dengan perubahan lingkungan.", "value": "B", "isCorrect": true },
      { "label": "C. Proses fotosintesis yang terjadi pada tumbuhan.", "value": "C" },
      { "label": "D. Proses pengaturan suhu tubuh pada tumbuhan.", "value": "D" }
    ],
    "explanation": "Pengaturan pada tumbuhan melibatkan proses adaptasi terhadap perubahan lingkungan untuk menjaga keseimbangan internal tumbuhan."
  },
  {
    "question": "Apa peran hormon auksin dalam tumbuhan?",
    "options": [
      { "label": "A. Merangsang pembentukan bunga pada tumbuhan.", "value": "A" },
      { "label": "B. Mengatur pemanjangan sel pada ujung batang dan akar.", "value": "B", "isCorrect": true },
      { "label": "C. Menyebabkan penguapan air melalui stomata.", "value": "C" },
      { "label": "D. Meningkatkan pembelahan sel pada tunas lateral.", "value": "D" }
    ],
    "explanation": "Auksin bertanggung jawab dalam mengatur pemanjangan sel, terutama pada ujung batang dan akar, serta berperan dalam fototropisme dan gravitropisme."
  },
  {
    "question": "Apa fungsi utama stomata pada tumbuhan?",
    "options": [
      { "label": "A. Menyimpan cadangan makanan.", "value": "A" },
      { "label": "B. Mengatur pernapasan pada tumbuhan.", "value": "B" },
      { "label": "C. Mengatur pertukaran gas dan transpirasi.", "value": "C", "isCorrect": true },
      { "label": "D. Menghasilkan klorofil untuk fotosintesis.", "value": "D" }
    ],
    "explanation": "Stomata berperan dalam pertukaran gas (CO₂ dan O₂) serta mengatur penguapan air (transpirasi) untuk menjaga keseimbangan air dalam tubuh tumbuhan."
  },
  {
    "question": "Fototropisme pada tumbuhan menyebabkan pertumbuhannya menuju sumber cahaya. Hormon yang paling berperan dalam proses ini adalah:",
    "options": [
      { "label": "A. Giberelin", "value": "A" },
      { "label": "B. Auksin", "value": "B", "isCorrect": true },
      { "label": "C. Sitokinin", "value": "C" },
      { "label": "D. Asam absisat", "value": "D" }
    ],
    "explanation": "Auksin mengatur pertumbuhan sel pada sisi batang yang tidak terkena cahaya, yang menyebabkan tumbuhan tumbuh menuju cahaya (fototropisme positif)."
  },
  {
    "question": "Hormon giberelin berperan dalam perkecambahan biji dengan cara:",
    "options": [
      { "label": "A. Merangsang pembelahan sel pada tunas lateral.", "value": "A" },
      { "label": "B. Mengatur pertumbuhan akar yang lebih cepat.", "value": "B" },
      { "label": "C. Memecah cadangan makanan dalam biji untuk mendukung perkecambahan.", "value": "C", "isCorrect": true },
      { "label": "D. Menghambat proses fotosintesis pada biji.", "value": "D" }
    ],
    "explanation": "Giberelin merangsang perkecambahan biji dengan memecah cadangan makanan dalam biji, memberikan energi untuk pertumbuhan awal."
  },
  {
    "question": "Apa yang dimaksud dengan gravitropisme pada tumbuhan?",
    "options": [
      { "label": "A. Pertumbuhan tumbuhan menuju cahaya.", "value": "A" },
      { "label": "B. Pertumbuhan tumbuhan terhadap gaya gravitasi.", "value": "B", "isCorrect": true },
      { "label": "C. Perubahan bentuk tumbuhan akibat suhu.", "value": "C" },
      { "label": "D. Pergerakan tumbuhan terhadap air.", "value": "D" }
    ],
    "explanation": "Gravitropisme adalah respons tumbuhan terhadap gaya gravitasi, yang menyebabkan akar tumbuh ke bawah dan batang tumbuh ke atas."
  },
  {
    "question": "Hormon sitokinin berfungsi untuk:",
    "options": [
      { "label": "A. Merangsang pembelahan sel.", "value": "A", "isCorrect": true },
      { "label": "B. Mengatur pertumbuhan akar.", "value": "B" },
      { "label": "C. Menghambat pertumbuhan tanaman.", "value": "C" },
      { "label": "D. Meningkatkan proses fotosintesis.", "value": "D" }
    ],
    "explanation": "Sitokinin berfungsi merangsang pembelahan sel dan memperlambat proses penuaan pada tumbuhan."
  },
  {
    "question": "Apa yang terjadi jika tumbuhan tidak dapat menghasilkan hormon etilen?",
    "options": [
      { "label": "A. Tumbuhan tidak dapat tumbuh ke atas.", "value": "A" },
      { "label": "B. Tumbuhan tidak dapat mengalami pematangan buah.", "value": "B", "isCorrect": true },
      { "label": "C. Tumbuhan akan mati.", "value": "C" },
      { "label": "D. Tumbuhan akan tumbuh lebih cepat.", "value": "D" }
    ],
    "explanation": "Etilen adalah hormon yang berperan dalam pematangan buah. Tanpa etilen, buah tidak dapat matang dengan baik."
  },
  {
    "question": "Apa yang dimaksud dengan transpiras pada tumbuhan?",
    "options": [
      { "label": "A. Proses penguapan air melalui stomata.", "value": "A", "isCorrect": true },
      { "label": "B. Proses penyimpanan air dalam akar.", "value": "B" },
      { "label": "C. Proses fotosintesis pada daun.", "value": "C" },
      { "label": "D. Proses pengambilan air dari tanah.", "value": "D" }
    ],
    "explanation": "Transpirasi adalah proses penguapan air melalui stomata yang membantu mengatur suhu dan keseimbangan air pada tumbuhan."
  },
  {
    "question": "Apa yang dimaksud dengan fotosintesis pada tumbuhan?",
    "options": [
      { "label": "A. Proses pengolahan makanan pada tumbuhan dengan bantuan cahaya.", "value": "A", "isCorrect": true },
      { "label": "B. Proses penguapan air melalui stomata.", "value": "B" },
      { "label": "C. Proses pertukaran gas di akar tumbuhan.", "value": "C" },
      { "label": "D. Proses pembuatan energi listrik pada tumbuhan.", "value": "D" }
    ],
    "explanation": "Fotosintesis adalah proses pembuatan makanan pada tumbuhan dengan bantuan cahaya matahari, air, dan karbon dioksida untuk menghasilkan glukosa dan oksigen."
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
export default LatihanSoal3;