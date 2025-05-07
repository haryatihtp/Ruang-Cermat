import React, { useState } from "react";
import "./../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang terjadi jika larutan asam kuat dicampurkan dengan larutan basa kuat?",
      options: [
        "A. Terjadi reaksi netralisasi dengan pembentukan garam dan air",
        "B. Terjadi peningkatan pH yang signifikan",
        "C. Larutan tetap bersifat asam",
        "D. Larutan tetap bersifat basa"
      ],
      correctOption: "A",
      explanation:
        "Ketika larutan asam kuat dicampurkan dengan basa kuat, akan terjadi reaksi netralisasi membentuk garam dan air, serta pH menjadi netral.",
    },
    {
      question: "Mengapa pH larutan asam lemah lebih sulit diukur dibandingkan dengan asam kuat?",
      options: [
        "A. Asam lemah terdisosiasi sangat sedikit di dalam air",
        "B. Asam lemah memiliki konduktivitas listrik yang lebih tinggi",
        "C. Asam lemah lebih stabil dalam larutan",
        "D. Asam lemah mengandung ion OH-"
      ],
      correctOption: "A",
      explanation:
        "Asam lemah hanya terdisosiasi sebagian dalam air, sehingga jumlah ion H+ yang dihasilkan sangat sedikit dan membuat pengukuran pH lebih sulit.",
    },
    {
      question: "Bagaimana cara menetralkan larutan asam lemah menggunakan basa?",
      options: [
        "A. Menambah jumlah basa secara berlebihan",
        "B. Menambah jumlah basa hingga pH mencapai 7",
        "C. Menambah sedikit basa dan mengukur perubahan pH secara bertahap",
        "D. Menggunakan indikator untuk mengetahui titik akhir"
      ],
      correctOption: "C",
      explanation:
        "Untuk menetralkan larutan asam lemah, kita menambah sedikit basa dan mengukur perubahan pH secara bertahap untuk mencapai titik ekivalen.",
    },
    {
      question: "Pernyataan mana yang benar mengenai larutan buffer?",
      options: [
        "A. Buffer hanya bekerja pada pH rendah",
        "B. Buffer mengatur pH dengan mengubah konsentrasi H+ secara drastis",
        "C. Buffer dapat mempertahankan pH meskipun asam atau basa ditambahkan",
        "D. Buffer tidak dapat mengatasi penambahan asam kuat"
      ],
      correctOption: "C",
      explanation:
        "Larutan buffer bekerja dengan mempertahankan pH meskipun asam atau basa ditambahkan, karena adanya keseimbangan antara asam dan basa konjugatnya.",
    },
    {
      question: "Apa yang dimaksud dengan 'pKa' dalam konteks larutan asam?",
      options: [
        "A. pH larutan asam ketika konsentrasi asam dan basa konjugatnya sama",
        "B. pH minimum yang dapat dicapai oleh larutan asam",
        "C. Kecepatan disosiasi asam",
        "D. Temperatur pada saat disosiasi asam terjadi"
      ],
      correctOption: "A",
      explanation:
        "pKa adalah pH di mana konsentrasi asam dan basa konjugatnya sama, dan ini memberikan indikasi kekuatan asam.",
    },
    {
      question: "Bagaimana cara menentukan apakah suatu larutan bersifat asam atau basa menggunakan indikator?",
      options: [
        "A. Menggunakan indikator yang berubah warna pada pH yang berbeda",
        "B. Menggunakan indikator yang hanya berubah pada pH 7",
        "C. Menambahkan indikator hingga warna larutan berubah menjadi merah",
        "D. Menambah air ke larutan untuk mengurangi efek pH"
      ],
      correctOption: "A",
      explanation:
        "Indikator bekerja dengan berubah warna pada pH yang berbeda. Warna yang dihasilkan menunjukkan sifat asam atau basa dari larutan.",
    },
    {
      question: "Manakah dari berikut ini yang bukan karakteristik larutan asam lemah?",
      options: [
        "A. Hanya sebagian terdisosiasi dalam air",
        "B. Dapat mempengaruhi pH larutan lebih sedikit",
        "C. Memiliki nilai pKa yang tinggi",
        "D. Mudah menghasilkan ion H+",
      ],
      correctOption: "D",
      explanation:
        "Asam lemah tidak menghasilkan banyak ion H+ karena terdisosiasi hanya sebagian dalam larutan, berbeda dengan asam kuat yang mudah menghasilkan ion H+.",
    },
    {
      question: "Apa yang terjadi pada pH larutan yang mengandung asam kuat dan basa lemah?",
      options: [
        "A. Larutan bersifat asam karena asam kuat terdisosiasi sepenuhnya",
        "B. Larutan bersifat netral karena terjadi reaksi netralisasi",
        "C. Larutan bersifat basa karena basa lemah mengikat H+",
        "D. pH tetap tidak berubah",
      ],
      correctOption: "A",
      explanation:
        "Larutan yang mengandung asam kuat dan basa lemah akan bersifat asam karena asam kuat akan terdisosiasi sepenuhnya dan menghasilkan banyak ion H+.",
    },
    {
      question: "Bagaimana cara menghitung pH larutan yang mengandung asam lemah?",
      options: [
        "A. pH = pKa + log([asam]/[garam])",
        "B. pH = -log[H+]",
        "C. pH = pKa - log([garam]/[asam])",
        "D. pH = log[H+]",
      ],
      correctOption: "A",
      explanation:
        "Untuk larutan asam lemah, pH dapat dihitung menggunakan rumus pH = pKa + log([asam]/[garam]), yang mengacu pada hubungan antara konsentrasi asam dan basa konjugat.",
    },
    {
      question: "Jika pH larutan berada pada nilai 3, maka larutan tersebut dapat dikategorikan sebagai?",
      options: [
        "A. Sangat basa",
        "B. Netral",
        "C. Sangat asam",
        "D. Asam sedang",
      ],
      correctOption: "C",
      explanation:
        "pH 3 menunjukkan bahwa larutan tersebut sangat asam, karena pH asam terletak di bawah 7.",
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
              {selectedOption === questions[currentQuestion - 1].correctOption
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${questions[currentQuestion - 1].correctOption}`}
            </p>
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

export default LatihanSoal5;
