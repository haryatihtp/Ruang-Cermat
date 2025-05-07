import React, { useState } from "react";
import "../css/QuestionPage.css";

const Latihansoal6 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
        question: "Sebuah kolam memiliki luas penampang 10 m² dan kedalaman air 2 m. Berapakah tekanan hidrostatik di dasar kolam? (g = 10 m/s², ρ air = 1000 kg/m³)",
        options: ["10.000 Pa", "20.000 Pa", "30.000 Pa", "40.000 Pa"],
        correctOption: "20.000 Pa",
        explanation: "Tekanan hidrostatik dihitung dengan P = ρ g h. Jadi, P = 1000 x 10 x 2 = 20.000 Pa.",
    },
    {
        question: "Jika sebuah balok bermassa 1 kg terapung di air, berapa gaya ke atas yang diberikan oleh air? (g = 10 m/s²)",
        options: ["1 N", "5 N", "10 N", "15 N"],
        correctOption: "10 N",
        explanation: "Gaya ke atas sama dengan berat balok, yaitu F = m x g = 1 x 10 = 10 N.",
    },
    {
        question: "Sebuah pipa memiliki luas penampang 0,01 m² di ujung pertama dan 0,005 m² di ujung kedua. Jika kecepatan fluida di ujung pertama adalah 2 m/s, berapakah kecepatan fluida di ujung kedua?",
        options: ["2 m/s", "4 m/s", "6 m/s", "8 m/s"],
        correctOption: "4 m/s",
        explanation: "Gunakan persamaan kontinuitas: A1v1 = A2v2. Jadi, v2 = (A1 x v1) / A2 = (0,01 x 2) / 0,005 = 4 m/s.",
    },
    {
        question: "Sebuah tabung U berisi air di salah satu sisi dan minyak di sisi lain. Tinggi minyak adalah 20 cm dan tinggi air adalah 10 cm. Jika massa jenis minyak adalah 800 kg/m³, berapakah massa jenis air?",
        options: ["800 kg/m³", "1000 kg/m³", "1200 kg/m³", "1400 kg/m³"],
        correctOption: "1000 kg/m³",
        explanation: "Tekanan di kedua sisi harus sama:  ρ air . g . h air =  ρ minyak . g . h minyak. Jadi,  ρ air =  ρ minyak x (h minyak / h air) = 800 x (20 / 10) = 1000 kg/m³.",
    },
    {
        question: "Berapa besar gaya yang bekerja pada dasar sebuah bejana dengan luas alas 2m²  yang diisi air setinggi 1,5 m? (g = 10 m/s² ,  ρ air = 1000 kg/m³)",
        options: ["30.000 N", "20.000 N", "15.000 N", "10.000 N"],
        correctOption: "30.000 N",
        explanation: "Gaya dihitung dengan F = P x A. P =  ρ g h = 1000 x 10 x 1,5 = 15.000 Pa. Jadi, F = 15.000 x 2 = 30.000 N.",
    },
    {
        question: "Berapakah tekanan total yang dialami penyelam di kedalaman 10 m di bawah permukaan laut? (g = 10 m/s², ρ air = 1000 kg/m³, tekanan atmosfer = 101.000 Pa)",
        options: ["101.000 Pa", "151.000 Pa", "201.000 Pa", "301.000 Pa"],
        correctOption: "201.000 Pa",
        explanation: "Tekanan total = tekanan atmosfer + tekanan hidrostatik. Jadi, P = 101.000 + (1000 x 10 x 10) = 201.000 Pa.",
    },
    {
        question: "Jika sebuah bola dengan volume 0,01 m³ dicelupkan ke dalam air, berapakah gaya ke atas yang dialami bola? (ρ air = 1000 kg/m³, g = 10 m/s²)",
        options: ["10 N", "50 N", "100 N", "150 N"],
        correctOption: "100 N",
        explanation: "Gaya ke atas dihitung dengan F = ρgV. Jadi, F = 1000 x 10 x 0,01 = 100 N.",
    },
    {
        question: "Sebuah torricelli menunjukkan tinggi air raksa 76 cm. Jika massa jenis air raksa adalah 13.600 kg/m³, berapakah tekanan atmosfer dalam satuan Pascal?",
        options: ["101.000 Pa", "102.000 Pa", "103.000 Pa", "104.000 Pa"],
        correctOption: "103.000 Pa",
        explanation: "Tekanan dihitung dengan P = ρgh. Jadi, P = 13.600 x 10 x 0,76 = 103.000 Pa.",
    },
    {
        question: "Jika debit aliran sebuah sungai adalah 5 m³/s dan luas penampang sungai adalah 10 m², berapakah kecepatan aliran air di sungai tersebut?",
        options: ["0,5 m/s", "1 m/s", "1,5 m/s", "2 m/s"],
        correctOption: "0,5 m/s",
        explanation: "Debit dihitung dengan Q = A x v. Jadi, v = Q / A = 5 / 10 = 0,5 m/s.",
    },
    {
        question: "Sebuah bejana berisi dua cairan, minyak dengan massa jenis 800 kg/m³ setinggi 0,3 m di atas air dengan massa jenis 1000 kg/m³ setinggi 0,5 m. Berapakah tekanan total di dasar bejana? (g = 10 m/s²)",
        options: ["11.000 Pa", "7.000 Pa", "5.000 Pa", "9.000 Pa"],
        correctOption: "11.000 Pa",
        explanation: "Tekanan total = (massa jenis minyak x g x tinggi minyak) + (massa jenis air x g x tinggi air). Jadi, P = (800 x 10 x 0,3) + (1000 x 10 x 0,5) = 11.000 Pa.",
    },
    {
        question: "Berapakah debit air yang mengalir melalui pipa dengan luas penampang 0,2 m² dan kecepatan 2 m/s?",
        options: ["0,2 m³/s", "0,4 m³/s", "0,6 m³/s", "0,8 m³/s"],
        correctOption: "0,4 m³/s",
        explanation: "Debit dihitung dengan Q = A x v. Jadi, Q = 0,2 x 2 = 0,4 m³/s.",
    },
    {
        question: "Sebuah kapal memiliki massa 10.000 kg. Berapa volume air yang dipindahkan oleh kapal tersebut agar dapat terapung? (massa jenis air = 1000 kg/m³)",
        options: ["5 m³", "10 m³", "15 m³", "20 m³"],
        correctOption: "10 m³",
        explanation: "Gunakan prinsip Archimedes: massa air = massa kapal. Jadi, V = massa / massa jenis = 10.000 / 1000 = 10 m³.",
    },
    {
        question: "Sebuah tangki memiliki tekanan udara 200.000 Pa di atas cairan. Jika tinggi cairan adalah 5 m dan massa jenis cairan 1.200 kg/m³, berapakah tekanan di dasar tangki? (g = 10 m/s²)",
        options: ["260.000 Pa", "260.500 Pa", "266.000 Pa", "266.500 Pa"],
        correctOption: "260.000 Pa",
        explanation: "Tekanan total = tekanan udara + tekanan cairan. Jadi, P = 200.000 + (1.200 x 10 x 5) = 260.000 Pa.",
    },
    {
        question: "Sebuah fluida mengalir dalam pipa horizontal dengan tekanan awal 150.000 Pa dan kecepatan 2 m/s. Jika kecepatan meningkat menjadi 4 m/s, berapakah tekanan akhirnya? (massa jenis fluida = 1.000 kg/m³)",
        options: ["140.000 Pa", "130.000 Pa", "125.000 Pa", "120.000 Pa"],
        correctOption: "130.000 Pa",
        explanation: "Gunakan persamaan Bernoulli. Perubahan energi kinetik diimbangi perubahan tekanan. Hitungan menunjukkan tekanan akhir adalah 130.000 Pa.",
    },
    {
        question: "Sebuah benda dengan massa 5 kg direndam dalam minyak dengan massa jenis 900 kg/m³. Jika volumenya adalah 0,006 m³, apakah benda akan terapung atau tenggelam?",
        options: ["Terapung", "Tenggelam", "Melayang", "Tidak dapat ditentukan"],
        correctOption: "Terapung",
        explanation: "Benda akan terapung jika gaya ke atas lebih besar atau sama dengan berat benda. Gaya ke atas = massa jenis x g x volume = 900 x 10 x 0,006 = 54 N. Berat benda = massa x g = 5 x 10 = 50 N. Jadi, benda terapung.",
    },
    {
        question: "Jika sebuah fluida ideal mengalir dari pipa besar dengan luas penampang 1 m² ke pipa kecil dengan luas 0,5 m², bagaimana perubahan kecepatannya?",
        options: ["Tidak berubah", "Menjadi dua kali lipat", "Menjadi separuhnya", "Tidak dapat ditentukan"],
        correctOption: "Menjadi dua kali lipat",
        explanation: "Menurut persamaan kontinuitas, kecepatan fluida meningkat saat luas penampang mengecil.",
    },
    {
        question: "Berapakah gaya tekan yang diperlukan untuk mengangkat beban 100 N pada dongkrak hidrolik dengan luas penampang kecil 0,01 m² dan besar 0,1 m²?",
        options: ["1 N", "5 N", "10 N", "50 N"],
        correctOption: "10 N",
        explanation: "Gunakan hukum Pascal: F kecil / A kecil = F besar / A besar. Jadi, F kecil = (F besar x A kecil) / A besar = (100 x 0,01) / 0,1 = 10 N.",
    },
    {
        question: "Sebuah pompa mengalirkan air dari sumur dengan kedalaman 10 m. Berapakah tekanan minimum yang diperlukan untuk memompa air ke permukaan? (massa jenis air = 1000 kg/m³, g = 10 m/s²)",
        options: ["100.000 Pa", "101.000 Pa", "102.000 Pa", "103.000 Pa"],
        correctOption: "100.000 Pa",
        explanation: "Tekanan minimum = massa jenis x g x kedalaman = 1000 x 10 x 10 = 100.000 Pa.",
    },
    {
        question: "Sebuah tangki berisi minyak dengan massa jenis 700 kg/m³ setinggi 2 meter di atas air dengan massa jenis 1000 kg/m³ setinggi 3 meter. Berapakah tekanan total di dasar tangki? (g = 10 m/s²)",
        options: ["31.000 Pa", "36.000 Pa", "41.000 Pa", "50.000 Pa"],
        correctOption: "50.000 Pa",
        explanation: "Tekanan total dihitung dengan P = (massa jenis minyak x g x tinggi minyak) + (massa jenis air x g x tinggi air). Jadi, P = (700 x 10 x 2) + (1000 x 10 x 3) = 14.000 + 30.000 = 50.000 Pa.",
    },
    {
        question: "Sebuah benda dengan massa 3 kg terapung di atas air dengan sepertiga volumenya tercelup. Berapakah massa jenis benda tersebut? (massa jenis air = 1000 kg/m³, g = 10 m/s²)",
        options: ["300 kg/m³", "500 kg/m³", "600 kg/m³", "700 kg/m³"],
        correctOption: "300 kg/m³",
        explanation: "Benda terapung berarti berat benda sama dengan gaya ke atas. Berat benda = massa benda x gravitasi. Gaya ke atas = massa jenis cairan x gravitasi x volume tercelup. Karena benda terapung, massa jenis benda = massa jenis air x fraksi volume tercelup. Jadi, ρ benda = 1000 x (1/3) = 300 kg/m³.",
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

export default Latihansoal6;