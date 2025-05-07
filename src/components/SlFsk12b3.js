import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalMedanMagnetik = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan medan magnet?",
        options: [
          "Wilayah di sekitar magnet di mana gaya magnetik dapat dirasakan",
          "Wilayah di mana arus listrik tidak dapat mengalir",
          "Wilayah di mana terdapat gaya gravitasi",
          "Wilayah di mana terdapat gaya listrik"
        ],
        correctOption: "Wilayah di sekitar magnet di mana gaya magnetik dapat dirasakan",
        explanation: "Medan magnet adalah wilayah di sekitar magnet di mana benda bermuatan magnetik atau arus listrik mengalami gaya magnetik."
      },
      {
        question: "Apa satuan medan magnet dalam SI?",
        options: ["Tesla", "Newton", "Joule", "Ampere"],
        correctOption: "Tesla",
        explanation: "Satuan medan magnet dalam SI adalah Tesla (T)."
      },
      {
        question: "Apa yang dimaksud dengan garis-garis medan magnet?",
        options: [
          "Lintasan elektron dalam penghantar",
          "Garis-garis imajiner yang menunjukkan arah dan kekuatan medan magnet",
          "Garis yang menggambarkan arus listrik",
          "Lintasan partikel bermuatan di medan gravitasi"
        ],
        correctOption: "Garis-garis imajiner yang menunjukkan arah dan kekuatan medan magnet",
        explanation: "Garis medan magnet adalah garis imajiner yang menunjukkan arah dan kekuatan medan magnet di sekitar magnet atau arus listrik."
      },
      {
        question: "Apa yang dimaksud dengan hukum Biot-Savart?",
        options: [
          "Hukum yang menjelaskan hubungan antara gaya dan percepatan",
          "Hukum yang menjelaskan medan magnet akibat arus listrik",
          "Hukum yang menjelaskan hambatan dalam penghantar",
          "Hukum yang menjelaskan energi dalam sistem magnetik"
        ],
        correctOption: "Hukum yang menjelaskan medan magnet akibat arus listrik",
        explanation: "Hukum Biot-Savart menjelaskan medan magnet yang dihasilkan oleh elemen kecil arus listrik."
      },
      {
        question: "Apa yang dimaksud dengan fluks magnetik?",
        options: [
          "Jumlah garis medan magnet yang menembus suatu permukaan",
          "Jumlah energi dalam medan magnet",
          "Jumlah arus listrik yang mengalir",
          "Jumlah gaya magnetik yang dialami benda"
        ],
        correctOption: "Jumlah garis medan magnet yang menembus suatu permukaan",
        explanation: "Fluks magnetik adalah jumlah garis medan magnet yang menembus suatu permukaan."
      },
      {
        question: "Apa yang dimaksud dengan induksi magnetik?",
        options: [
          "Medan magnet yang dihasilkan oleh arus listrik",
          "Proses pembangkitan medan listrik oleh medan magnet",
          "Medan magnet yang dihasilkan oleh gaya gravitasi",
          "Medan magnet yang dihasilkan oleh gaya listrik"
        ],
        correctOption: "Medan magnet yang dihasilkan oleh arus listrik",
        explanation: "Induksi magnetik adalah medan magnet yang dihasilkan oleh arus listrik atau perubahan fluks magnetik."
      },
      {
        question: "Apa yang dimaksud dengan hukum Ampere?",
        options: [
          "Hukum yang menjelaskan hubungan antara medan listrik dan medan magnet",
          "Hukum yang menyatakan hubungan antara arus listrik dan medan magnet",
          "Hukum yang menyatakan hubungan antara gaya dan energi",
          "Hukum yang menjelaskan hubungan antara tegangan dan arus"
        ],
        correctOption: "Hukum yang menyatakan hubungan antara arus listrik dan medan magnet",
        explanation: "Hukum Ampere menyatakan bahwa medan magnet di sekitar penghantar berarus sebanding dengan arus listrik yang mengalir melaluinya."
      },
      {
        question: "Apa yang terjadi jika dua kutub magnet yang sama didekatkan?",
        options: [
          "Saling tarik-menarik",
          "Saling tolak-menolak",
          "Tidak ada interaksi",
          "Melebur menjadi satu"
        ],
        correctOption: "Saling tolak-menolak",
        explanation: "Kutub magnet yang sama (seperti kutub utara dengan utara atau selatan dengan selatan) akan saling tolak-menolak."
      },
      {
        question: "Apa yang dimaksud dengan elektromagnet?",
        options: [
          "Magnet yang dihasilkan oleh aliran arus listrik",
          "Magnet yang terbentuk secara alami",
          "Magnet yang hanya terdapat pada benda logam",
          "Magnet yang tidak memiliki medan magnet"
        ],
        correctOption: "Magnet yang dihasilkan oleh aliran arus listrik",
        explanation: "Elektromagnet adalah magnet yang dihasilkan oleh aliran arus listrik melalui kawat penghantar."
      },
      {
        question: "Apa fungsi kompas dalam medan magnet?",
        options: [
          "Menunjukkan arah medan magnet",
          "Mengukur kekuatan medan magnet",
          "Menghasilkan medan magnet",
          "Meningkatkan kekuatan medan magnet"
        ],
        correctOption: "Menunjukkan arah medan magnet",
        explanation: "Kompas digunakan untuk menunjukkan arah medan magnet. Jarum kompas sejajar dengan garis medan magnet bumi."
      },
      {
        question: "Apa yang terjadi pada benda logam di medan magnet yang kuat?",
        options: [
          "Menjadi magnet sementara",
          "Mengalami ionisasi",
          "Menghasilkan arus listrik",
          "Tidak ada perubahan"
        ],
        correctOption: "Menjadi magnet sementara",
        explanation: "Benda logam dapat menjadi magnet sementara saat berada di medan magnet yang kuat."
      },
      {
        question: "Apa yang dimaksud dengan gaya Lorentz?",
        options: [
          "Gaya yang dialami partikel bermuatan dalam medan magnet",
          "Gaya yang dialami benda diam",
          "Gaya yang dialami benda pada permukaan bumi",
          "Gaya yang dialami partikel bermuatan dalam medan listrik"
        ],
        correctOption: "Gaya yang dialami partikel bermuatan dalam medan magnet",
        explanation: "Gaya Lorentz adalah gaya yang dialami partikel bermuatan saat bergerak dalam medan magnet."
      },
      {
        question: "Apa yang dimaksud dengan kutub magnet?",
        options: [
          "Bagian magnet yang memiliki medan magnet terkuat",
          "Bagian magnet yang tidak memiliki medan magnet",
          "Bagian magnet di mana arus mengalir",
          "Bagian magnet yang hanya bersifat netral"
        ],
        correctOption: "Bagian magnet yang memiliki medan magnet terkuat",
        explanation: "Kutub magnet adalah bagian magnet di mana medan magnet paling kuat, yaitu kutub utara dan kutub selatan."
      },
      {
        question: "Apa hubungan antara medan magnet dan arus listrik?",
        options: [
          "Arus listrik menghasilkan medan magnet",
          "Medan magnet menghilangkan arus listrik",
          "Medan magnet tidak berhubungan dengan arus listrik",
          "Medan magnet hanya terjadi tanpa arus listrik"
        ],
        correctOption: "Arus listrik menghasilkan medan magnet",
        explanation: "Arus listrik yang mengalir melalui penghantar menghasilkan medan magnet di sekitarnya."
      },
      {
        question: "Apa yang dimaksud dengan induksi elektromagnetik?",
        options: [
          "Proses menghasilkan arus listrik oleh perubahan medan magnet",
          "Proses menghasilkan medan magnet oleh arus listrik",
          "Proses menghilangkan arus listrik dalam penghantar",
          "Proses mengurangi medan magnet"
        ],
        correctOption: "Proses menghasilkan arus listrik oleh perubahan medan magnet",
        explanation: "Induksi elektromagnetik adalah proses menghasilkan arus listrik dalam penghantar akibat perubahan medan magnet di sekitarnya."
      },
      {
        question: "Apa yang dimaksud dengan medan magnet bumi?",
        options: [
          "Medan magnet alami yang dihasilkan oleh inti bumi",
          "Medan magnet buatan yang dihasilkan oleh manusia",
          "Medan magnet yang hanya ada di kutub bumi",
          "Medan magnet yang hanya ada di atmosfer"
        ],
        correctOption: "Medan magnet alami yang dihasilkan oleh inti bumi",
        explanation: "Medan magnet bumi adalah medan magnet alami yang dihasilkan oleh pergerakan cairan logam di inti bumi."
      },
      {
        question: "Apa yang terjadi jika penghantar lurus dialiri arus listrik?",
        options: [
          "Menghasilkan medan magnet berbentuk lingkaran",
          "Menghasilkan medan magnet berbentuk garis lurus",
          "Menghasilkan medan magnet berbentuk spiral",
          "Tidak menghasilkan medan magnet"
        ],
        correctOption: "Menghasilkan medan magnet berbentuk lingkaran",
        explanation: "Penghantar lurus yang dialiri arus listrik menghasilkan medan magnet berbentuk lingkaran di sekitar penghantar."
      },
      {
        question: "Apa yang dimaksud dengan arah medan magnet?",
        options: [
          "Arah dari kutub utara ke kutub selatan magnet",
          "Arah dari kutub selatan ke kutub utara magnet",
          "Arah arus listrik dalam penghantar",
          "Arah gaya yang dialami partikel"
        ],
        correctOption: "Arah dari kutub utara ke kutub selatan magnet",
        explanation: "Arah medan magnet secara konvensional ditentukan dari kutub utara ke kutub selatan magnet."
      },
      {
        question: "Apa yang dimaksud dengan permeabilitas magnetik?",
        options: [
          "Kemampuan suatu bahan untuk menghantarkan medan magnet",
          "Kemampuan suatu bahan untuk menghantarkan listrik",
          "Kemampuan suatu bahan untuk menyimpan energi",
          "Kemampuan suatu bahan untuk menghambat arus listrik"
        ],
        correctOption: "Kemampuan suatu bahan untuk menghantarkan medan magnet",
        explanation: "Permeabilitas magnetik adalah ukuran kemampuan suatu bahan untuk menghantarkan medan magnet."
      },
      {
        question: "Apa yang terjadi pada medan magnet jika arus listrik meningkat?",
        options: [
          "Medan magnet semakin kuat",
          "Medan magnet tetap",
          "Medan magnet semakin lemah",
          "Medan magnet menghilang"
        ],
        correctOption: "Medan magnet semakin kuat",
        explanation: "Kekuatan medan magnet sebanding dengan besarnya arus listrik yang mengalir melalui penghantar."
      },
      {
        question: "Apa fungsi solenoida dalam medan magnet?",
        options: [
          "Menghasilkan medan magnet yang kuat dan seragam",
          "Mengurangi kekuatan medan magnet",
          "Mengubah medan magnet menjadi energi listrik",
          "Menghapus medan magnet di sekitarnya"
        ],
        correctOption: "Menghasilkan medan magnet yang kuat dan seragam",
        explanation: "Solenoida adalah kawat yang dililitkan membentuk kumparan yang menghasilkan medan magnet kuat dan seragam saat dialiri arus listrik."
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

export default LatihanSoalMedanMagnetik;
