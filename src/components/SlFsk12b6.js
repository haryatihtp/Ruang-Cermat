import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalFisikaModern = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan relativitas khusus?",
        options: [
          "Teori yang menyatakan bahwa hukum fisika berlaku sama di semua kerangka acuan inersia",
          "Teori yang menghubungkan antara energi dan massa",
          "Teori yang menjelaskan gaya gravitasi antara benda",
          "Teori yang mengatur hubungan antara waktu dan jarak"
        ],
        correctOption: "Teori yang menyatakan bahwa hukum fisika berlaku sama di semua kerangka acuan inersia",
        explanation: "Relativitas khusus adalah teori yang dikemukakan oleh Albert Einstein yang menyatakan bahwa hukum fisika berlaku sama di semua kerangka acuan inersia."
      },
      {
        question: "Apa yang dimaksud dengan efek fotolistrik?",
        options: [
          "Pelepasan elektron dari permukaan logam akibat cahaya yang jatuh",
          "Pembiasan cahaya pada permukaan cermin",
          "Pembentukan spektrum cahaya oleh benda panas",
          "Penyerapan energi oleh elektron dalam atom"
        ],
        correctOption: "Pelepasan elektron dari permukaan logam akibat cahaya yang jatuh",
        explanation: "Efek fotolistrik adalah fenomena pelepasan elektron dari permukaan logam ketika terkena cahaya dengan frekuensi tertentu."
      },
      {
        question: "Siapa yang pertama kali mengemukakan teori relativitas umum?",
        options: ["Albert Einstein", "Max Planck", "Niels Bohr", "Isaac Newton"],
        correctOption: "Albert Einstein",
        explanation: "Albert Einstein mengemukakan teori relativitas umum yang menjelaskan gravitasi sebagai kelengkungan ruang-waktu."
      },
      {
        question: "Apa yang dimaksud dengan konsep dualitas gelombang-partikel?",
        options: [
          "Partikel dapat berperilaku seperti gelombang dan gelombang dapat berperilaku seperti partikel",
          "Partikel selalu bergerak seperti gelombang",
          "Gelombang selalu memiliki sifat partikel",
          "Partikel tidak dapat dipengaruhi oleh gelombang"
        ],
        correctOption: "Partikel dapat berperilaku seperti gelombang dan gelombang dapat berperilaku seperti partikel",
        explanation: "Konsep dualitas gelombang-partikel, yang dikemukakan oleh Louis de Broglie, menyatakan bahwa partikel dapat berperilaku seperti gelombang dan gelombang dapat berperilaku seperti partikel."
      },
      {
        question: "Apa yang dimaksud dengan prinsip ketidakpastian Heisenberg?",
        options: [
          "Ketidakmampuan untuk mengetahui posisi dan momentum partikel dengan akurat secara bersamaan",
          "Kesulitan dalam mengukur energi dalam sistem kuantum",
          "Ketidakmampuan untuk mendeteksi gelombang elektromagnetik",
          "Ketidakpastian dalam pemahaman gravitasi"
        ],
        correctOption: "Ketidakmampuan untuk mengetahui posisi dan momentum partikel dengan akurat secara bersamaan",
        explanation: "Prinsip ketidakpastian Heisenberg menyatakan bahwa tidak mungkin mengetahui posisi dan momentum suatu partikel dengan akurat pada saat yang bersamaan."
      },
      {
        question: "Apa yang dimaksud dengan model atom Bohr?",
        options: [
          "Model atom yang menjelaskan elektron bergerak dalam orbit tetap di sekitar inti atom",
          "Model atom yang menjelaskan elektron terdistribusi merata di seluruh atom",
          "Model atom yang tidak menganggap adanya inti",
          "Model atom yang menggambarkan elektron sebagai partikel keras"
        ],
        correctOption: "Model atom yang menjelaskan elektron bergerak dalam orbit tetap di sekitar inti atom",
        explanation: "Model atom Bohr menjelaskan bahwa elektron bergerak dalam orbit tertentu di sekitar inti atom dan hanya dapat berada dalam tingkat energi tertentu."
      },
      {
        question: "Apa yang dimaksud dengan partikel higgs?",
        options: [
          "Partikel yang memberikan massa kepada partikel lain melalui interaksi dengan medan Higgs",
          "Partikel yang mengatur gaya gravitasi",
          "Partikel yang mempercepat partikel subatom",
          "Partikel yang menciptakan energi gelap"
        ],
        correctOption: "Partikel yang memberikan massa kepada partikel lain melalui interaksi dengan medan Higgs",
        explanation: "Partikel Higgs adalah partikel yang terkait dengan medan Higgs, yang memberikan massa pada partikel lain melalui interaksi."
      },
      {
        question: "Apa yang dimaksud dengan efek Doppler dalam konteks fisika modern?",
        options: [
          "Perubahan frekuensi gelombang ketika sumber gelombang bergerak relatif terhadap pengamat",
          "Perubahan kecepatan gelombang akibat perubahan suhu",
          "Perubahan arah cahaya karena pengaruh medan magnet",
          "Perubahan intensitas cahaya dalam medan gravitasi"
        ],
        correctOption: "Perubahan frekuensi gelombang ketika sumber gelombang bergerak relatif terhadap pengamat",
        explanation: "Efek Doppler adalah perubahan frekuensi atau panjang gelombang gelombang (seperti suara atau cahaya) yang terjadi ketika sumber gelombang bergerak relatif terhadap pengamat."
      },
      {
        question: "Apa yang dimaksud dengan prinsip eksklusi Pauli?",
        options: [
          "Dua fermion tidak dapat berada dalam keadaan kuantum yang sama secara bersamaan",
          "Dua partikel dapat berada dalam keadaan kuantum yang sama jika memiliki energi yang berbeda",
          "Partikel tidak dapat bergerak lebih cepat dari kecepatan cahaya",
          "Partikel hanya dapat berada di satu tempat pada satu waktu"
        ],
        correctOption: "Dua fermion tidak dapat berada dalam keadaan kuantum yang sama secara bersamaan",
        explanation: "Prinsip eksklusi Pauli menyatakan bahwa dua fermion (seperti elektron) tidak dapat memiliki keadaan kuantum yang sama dalam sebuah sistem."
      },
      {
        question: "Apa yang dimaksud dengan kuantum cahaya?",
        options: [
          "Cahaya terdiri dari partikel-partikel kecil yang disebut foton",
          "Cahaya bergerak dalam bentuk gelombang kontinu",
          "Cahaya dapat dihentikan sepenuhnya dalam ruang vakum",
          "Cahaya tidak terpengaruh oleh medan magnet"
        ],
        correctOption: "Cahaya terdiri dari partikel-partikel kecil yang disebut foton",
        explanation: "Kuantum cahaya, atau foton, adalah partikel cahaya yang memiliki sifat ganda, yaitu sebagai gelombang dan partikel."
      },
      {
        question: "Apa yang dimaksud dengan teori relativitas umum?",
        options: [
          "Teori yang menjelaskan gravitasi sebagai kelengkungan ruang-waktu",
          "Teori yang menjelaskan hubungan antara waktu dan energi",
          "Teori yang menjelaskan bahwa benda bergerak dengan kecepatan tetap",
          "Teori yang menjelaskan mekanisme terjadinya gaya elektromagnetik"
        ],
        correctOption: "Teori yang menjelaskan gravitasi sebagai kelengkungan ruang-waktu",
        explanation: "Teori relativitas umum, yang dikemukakan oleh Albert Einstein, menjelaskan gravitasi sebagai kelengkungan ruang-waktu yang dipengaruhi oleh massa dan energi."
      },
      {
        question: "Apa yang dimaksud dengan foton?",
        options: [
          "Partikel yang membawa energi cahaya",
          "Partikel yang mempercepat reaksi nuklir",
          "Partikel yang membawa gaya gravitasi",
          "Partikel yang membentuk medan listrik"
        ],
        correctOption: "Partikel yang membawa energi cahaya",
        explanation: "Foton adalah partikel elementer yang membawa energi cahaya dan tidak memiliki massa diam."
      },
      {
        question: "Siapa yang mengembangkan teori kuantum mekanika?",
        options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Werner Heisenberg"],
        correctOption: "Max Planck",
        explanation: "Max Planck mengembangkan teori kuantum mekanika dengan usulan bahwa energi dipancarkan dalam kuanta yang disebut dengan foton."
      },
      {
        question: "Apa yang dimaksud dengan energi potensial dalam teori relativitas?",
        options: [
          "Energi yang terkait dengan posisi benda dalam medan gravitasi",
          "Energi yang diserap oleh partikel dalam reaksi nuklir",
          "Energi yang terjadi karena pergerakan partikel",
          "Energi yang timbul akibat interaksi elektromagnetik"
        ],
        correctOption: "Energi yang terkait dengan posisi benda dalam medan gravitasi",
        explanation: "Energi potensial dalam teori relativitas mencakup energi yang terkait dengan posisi benda dalam medan gravitasi yang mengubah ruang-waktu."
      },
      {
        question: "Apa yang dimaksud dengan medan Higgs?",
        options: [
          "Medan yang memberikan massa kepada partikel melalui interaksi",
          "Medan yang menciptakan gaya gravitasi",
          "Medan yang mengontrol gerakan partikel",
          "Medan yang menghubungkan energi dan materi"
        ],
        correctOption: "Medan yang memberikan massa kepada partikel melalui interaksi",
        explanation: "Medan Higgs adalah medan yang ada di seluruh alam semesta yang memberikan massa kepada partikel melalui interaksi dengan partikel Higgs."
      },
      {
        question: "Apa yang dimaksud dengan prinsip superposisi dalam fisika kuantum?",
        options: [
          "Partikel dapat berada dalam lebih dari satu keadaan kuantum pada saat yang bersamaan",
          "Partikel hanya dapat berada dalam satu keadaan kuantum pada satu waktu",
          "Energi selalu terjaga pada partikel yang bergerak",
          "Kecepatan cahaya tidak dapat dipengaruhi oleh medan gravitasi"
        ],
        correctOption: "Partikel dapat berada dalam lebih dari satu keadaan kuantum pada saat yang bersamaan",
        explanation: "Prinsip superposisi dalam fisika kuantum menyatakan bahwa partikel dapat berada dalam lebih dari satu keadaan kuantum pada saat yang bersamaan."
      },
      {
        question: "Apa yang dimaksud dengan gelombang elektromagnetik?",
        options: [
          "Gelombang yang membawa energi melalui medan listrik dan magnet",
          "Gelombang yang hanya bergerak dalam ruang vakum",
          "Gelombang yang mempengaruhi medan gravitasi",
          "Gelombang yang hanya dapat dipantulkan oleh benda keras"
        ],
        correctOption: "Gelombang yang membawa energi melalui medan listrik dan magnet",
        explanation: "Gelombang elektromagnetik adalah gelombang yang membawa energi melalui medan listrik dan magnet, termasuk cahaya, gelombang radio, dan sinar-X."
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

export default LatihanSoalFisikaModern;
