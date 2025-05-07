import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalArusSearah = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Apa satuan dari arus listrik?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      correctOption: "Ampere",
      explanation: "Satuan arus listrik adalah Ampere (A).",
    },
    {
      question: "Hukum Ohm menyatakan hubungan antara?",
      options: ["Arus, Tegangan, dan Resistansi", "Daya dan Energi", "Medan Listrik dan Magnet", "Hambatan dan Kapasitansi"],
      correctOption: "Arus, Tegangan, dan Resistansi",
      explanation: "Hukum Ohm menyatakan bahwa V = I x R, yaitu hubungan antara tegangan (V), arus (I), dan resistansi (R).",
    },
    {
      question: "Apa rumus daya listrik dalam rangkaian arus searah?",
      options: ["P = V/I", "P = I^2 x R", "P = V^2 x R", "P = V x I"],
      correctOption: "P = V x I",
      explanation: "Daya listrik dalam arus searah dihitung menggunakan rumus P = V x I.",
    },
    {
      question: "Resistor memiliki hambatan 10 Ohm dan arus 2 A mengalir melaluinya. Berapakah tegangan pada resistor?",
      options: ["5 V", "10 V", "20 V", "40 V"],
      correctOption: "20 V",
      explanation: "Menurut Hukum Ohm, V = I x R. Jadi, V = 2 x 10 = 20 V.",
    },
    {
      question: "Apa fungsi dari baterai dalam rangkaian arus searah?",
      options: ["Mengalirkan arus AC", "Mengubah energi listrik ke energi kimia", "Menyediakan sumber tegangan tetap", "Menyimpan energi potensial listrik"],
      correctOption: "Menyediakan sumber tegangan tetap",
      explanation: "Baterai menyediakan sumber tegangan tetap untuk menggerakkan arus searah.",
    },
    {
      question: "Apakah simbol untuk resistansi dalam rangkaian listrik?",
      options: ["R", "V", "I", "P"],
      correctOption: "R",
      explanation: "Resistansi dilambangkan dengan huruf 'R'.",
    },
    {
      question: "Jika daya sebuah alat adalah 60 W dan tegangan 12 V, berapakah arus yang mengalir?",
      options: ["2 A", "5 A", "6 A", "7 A"],
      correctOption: "5 A",
      explanation: "Arus dihitung menggunakan P = V x I. Jadi, I = P/V = 60/12 = 5 A.",
    },
    {
      question: "Apa yang terjadi dengan arus ketika resistansi bertambah, jika tegangan tetap konstan?",
      options: ["Arus meningkat", "Arus berkurang", "Arus tetap", "Tidak ada perubahan"],
      correctOption: "Arus berkurang",
      explanation: "Menurut Hukum Ohm, I = V/R. Jika R bertambah, I akan berkurang.",
    },
    {
      question: "Apa nama alat yang digunakan untuk mengukur arus?",
      options: ["Voltmeter", "Ohmmeter", "Ammeter", "Galvanometer"],
      correctOption: "Ammeter",
      explanation: "Ammeter adalah alat yang digunakan untuk mengukur arus listrik.",
    },
    {
      question: "Tegangan 24 V diterapkan pada rangkaian dengan resistansi 6 Ohm. Berapakah arus yang mengalir?",
      options: ["2 A", "4 A", "6 A", "8 A"],
      correctOption: "4 A",
      explanation: "Menggunakan Hukum Ohm, I = V/R. Jadi, I = 24/6 = 4 A.",
    },
    {
      question: "Rangkaian arus searah yang memiliki lebih dari satu jalur disebut?",
      options: ["Rangkaian Seri", "Rangkaian Paralel", "Rangkaian Campuran", "Rangkaian Terbuka"],
      correctOption: "Rangkaian Paralel",
      explanation: "Rangkaian paralel memiliki lebih dari satu jalur untuk aliran arus.",
    },
    {
      question: "Apakah yang dimaksud dengan rangkaian tertutup?",
      options: ["Rangkaian tanpa arus", "Rangkaian dengan jalur lengkap untuk arus", "Rangkaian dengan hambatan besar", "Rangkaian dengan baterai mati"],
      correctOption: "Rangkaian dengan jalur lengkap untuk arus",
      explanation: "Rangkaian tertutup adalah rangkaian yang memungkinkan arus listrik mengalir melalui jalur yang lengkap.",
    },
    {
      question: "Jika hambatan total dalam rangkaian seri adalah 30 Ohm dan tegangan adalah 60 V, berapakah arus yang mengalir?",
      options: ["1 A", "2 A", "3 A", "4 A"],
      correctOption: "2 A",
      explanation: "Menggunakan Hukum Ohm, I = V/R. Jadi, I = 60/30 = 2 A.",
    },
    {
      question: "Apa satuan untuk daya listrik?",
      options: ["Joule", "Watt", "Ohm", "Ampere"],
      correctOption: "Watt",
      explanation: "Satuan daya listrik adalah Watt (W).",
    },
    {
      question: "Dua resistor masing-masing 4 Ohm dan 6 Ohm dihubungkan secara seri. Berapakah hambatan totalnya?",
      options: ["10 Ohm", "2.4 Ohm", "24 Ohm", "12 Ohm"],
      correctOption: "10 Ohm",
      explanation: "Pada rangkaian seri, hambatan total adalah penjumlahan resistansi. Jadi, Rtotal = 4 + 6 = 10 Ohm.",
    },
    {
      question: "Apakah fungsi sekering dalam rangkaian listrik?",
      options: ["Menghemat daya", "Membatasi arus berlebih", "Meningkatkan tegangan", "Menyimpan energi"],
      correctOption: "Membatasi arus berlebih",
      explanation: "Sekering melindungi rangkaian dari kerusakan dengan memutus arus jika melebihi batas tertentu.",
    },
    {
      question: "Jika tegangan pada resistor adalah 50 V dan arus yang mengalir adalah 5 A, berapakah hambatannya?",
      options: ["5 Ohm", "10 Ohm", "15 Ohm", "25 Ohm"],
      correctOption: "10 Ohm",
      explanation: "Menggunakan Hukum Ohm, R = V/I. Jadi, R = 50/5 = 10 Ohm.",
    },
    {
      question: "Resistor 12 Ohm dan 8 Ohm dihubungkan paralel. Berapakah hambatan totalnya?",
      options: ["4.8 Ohm", "6 Ohm", "10 Ohm", "20 Ohm"],
      correctOption: "4.8 Ohm",
      explanation: "Pada rangkaian paralel, 1/Rtotal = 1/R1 + 1/R2. Jadi, Rtotal = 1/(1/12 + 1/8) = 4.8 Ohm.",
    },
    {
      question: "Apa hubungan antara daya, tegangan, dan arus?",
      options: ["P = V/I", "P = V x I", "P = I^2/V", "P = V^2 x I"],
      correctOption: "P = V x I",
      explanation: "Rumus daya listrik adalah P = V x I.",
    },
    {
      question: "Energi listrik dihitung dengan?",
      options: ["W = V x I x t", "W = V/I", "W = V x t", "W = I x t"],
      correctOption: "W = V x I x t",
      explanation: "Energi listrik dihitung menggunakan W = V x I x t.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Sebelumnya
        </button>

        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>

        <button
          className="oval-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Berikutnya &rarr;
        </button>
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
          <p>{questions[currentQuestion - 1].explanation}</p>
        </div>
      )}
    </div>
  );
};

export default LatihanSoalArusSearah;
