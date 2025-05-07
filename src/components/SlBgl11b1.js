import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
  
      "question": "Apa yang dimaksud dengan teori sel dalam biologi?",
      "options": ["A. Semua makhluk hidup tersusun dari sel", "B. Sel adalah unit fungsional terkecil dari organisme", "C. Semua sel berasal dari sel sebelumnya", "D. Semua jawaban benar"],
      "correctOption": "D. Semua jawaban benar",
      "explanation": "Teori Sel menyatakan bahwa sel adalah unit struktural dan fungsional dasar dari makhluk hidup. Semua makhluk hidup tersusun dari satu atau lebih sel, dan semua fungsi kehidupan terjadi dalam sel."
    },
    {
      "question": "Apa fungsi utama dari membran sel dalam suatu sel?",
      "options": ["A. Mengatur keluar masuknya zat", "B. Menyimpan materi genetik", "C. Menyintesis protein", "D. Menghasilkan energi"],
      "correctOption": "A. Mengatur keluar masuknya zat",
      "explanation": "Membran sel berfungsi sebagai penghalang yang mengatur pergerakan zat-zat ke dalam dan keluar dari sel."
    },
    {
      "question": "Dimana sel-sel spermatzoa dimatangkan?",
      "options": ["A. Tubuli seminiferi", "B. Ductus deferens", "C. Epididymis", "D. Ductus afferens"],
      "correctOption": "C. Epididymis",
      "explanation": "Sel-sel spermatzoa diproduksi di dalam tubulus seminiferus testis dan kemudian dipindahkan ke epididymis untuk proses pematangan."
    },
    {
      "question": "Proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama seperti sel induknya adalah...",
      "options": ["A. Mitosis", "B. Meiosis", "C. Pembelahan Biner", "D. Fagositosis"],
      "correctOption": "A. Mitosis",
      "explanation": "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang identik dengan sel induknya. Mitosis terdiri dari beberapa tahap yaitu profase, metafase, anafase, dan telofase."
    },
    {
      "question": "Jika sel kekurangan fungsi mitokondria, bagaimana hal tersebut mempengaruhi sel dan organisme secara keseluruhan?",
      "options": ["A. Sel tidak dapat memproduksi energi (ATP) yang cukup, mengganggu fungsi metabolisme sel", "B. Sel tidak dapat menghasilkan protein dengan efisien", "C. Sel tidak dapat melakukan pembelahan sel", "D. Sel kehilangan kemampuan untuk mengatur keluar masuknya zat"],
      "correctOption": "A. Sel tidak dapat memproduksi energi (ATP) yang cukup, mengganggu fungsi metabolisme sel",
      "explanation": "Mitokondria berfungsi sebagai 'pembangkit tenaga' sel, memproduksi ATP melalui respirasi sel. Tanpa mitokondria yang berfungsi dengan baik, sel tidak dapat menghasilkan energi yang diperlukan untuk aktivitas metabolisme, yang akhirnya akan mempengaruhi kelangsungan hidup sel dan organisme secara keseluruhan."
    },
    {
      "question": "Dalam proses meiosis, terjadi pengurangan jumlah kromosom menjadi setengahnya. Apa tujuan utama dari proses ini dalam reproduksi seksual?",
      "options": ["A. Untuk menghasilkan sel-sel dengan jumlah kromosom yang sama dengan sel induk", "B. Untuk memastikan variasi genetik pada keturunan", "C. Untuk mempercepat pembentukan sel-sel germinal", "D. Untuk memperbaiki kerusakan DNA dalam sel germinal"],
      "correctOption": "B. Untuk memastikan variasi genetik pada keturunan",
      "explanation": "Meiosis menghasilkan sel-sel germinal (sel telur dan sperma) dengan jumlah kromosom setengah dari sel induknya, yang memungkinkan terjadinya rekombinasi genetik dan memastikan variasi genetik pada keturunan. Proses ini penting untuk mempertahankan keanekaragaman genetik dalam populasi."
    },
    {
      "question": "Apa fungsi dari ribosom dalam sel?",
      "options": ["A. Sintesis protein", "B. Menghasilkan energi", "C. Mengatur pergerakan zat dalam sel", "D. Menyimpan materi genetik"],
      "correctOption": "A. Sintesis protein",
      "explanation": "Ribosom berfungsi dalam sintesis protein dengan membaca informasi yang ada pada mRNA dan menghubungkan asam amino untuk membentuk protein."
    },
    {
      "question": "Apa yang dimaksud dengan apoptosis?",
      "options": ["A. Pembelahan sel", "B. Proses kematian sel terprogram", "C. Pembentukan jaringan baru", "D. Proses pembentukan energi dalam sel"],
      "correctOption": "B. Proses kematian sel terprogram",
      "explanation": "Apoptosis adalah proses kematian sel terprogram yang penting dalam pengaturan jumlah sel dan menghilangkan sel-sel yang rusak atau tidak dibutuhkan."
    },
    {
      "question": "Apa peran dari kloroplas dalam sel tumbuhan?",
      "options": ["A. Menghasilkan energi", "B. Menyintesis protein", "C. Tempat fotosintesis", "D. Mengatur pergerakan zat"],
      "correctOption": "C. Tempat fotosintesis",
      "explanation": "Kloroplas berfungsi dalam proses fotosintesis, di mana energi cahaya diubah menjadi energi kimia dalam bentuk glukosa."
    },
    {
      "question": "Apa yang dimaksud dengan diferensiasi sel?",
      "options": ["A. Proses pembelahan sel", "B. Proses perubahan sel menjadi bentuk dan fungsi yang lebih spesifik", "C. Proses pembentukan energi", "D. Proses pembentukan jaringan baru"],
      "correctOption": "B. Proses perubahan sel menjadi bentuk dan fungsi yang lebih spesifik",
      "explanation": "Diferensiasi sel adalah proses di mana sel-sel tidak berdiferensiasi menjadi tipe sel yang lebih spesifik dengan fungsi tertentu dalam tubuh."
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
};

export default LatihanSoal1;
