import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalArusBolakBalik = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan arus bolak-balik (AC)?",
      options: [
        "Arus yang mengalir searah",
        "Arus yang arah dan besarannya berubah secara periodik",
        "Arus yang hanya mengalir dalam waktu singkat",
        "Arus yang tidak membutuhkan penghantar"
      ],
      correctOption: "Arus yang arah dan besarannya berubah secara periodik",
      explanation: "Arus bolak-balik (AC) adalah arus listrik yang arah dan besarannya berubah-ubah secara periodik."
    },
    {
      question: "Apa yang dimaksud dengan frekuensi dalam arus bolak-balik?",
      options: [
        "Jumlah elektron yang bergerak dalam satu detik",
        "Jumlah gelombang arus yang terjadi dalam satu detik",
        "Kecepatan arus dalam penghantar",
        "Waktu yang dibutuhkan arus untuk menyelesaikan satu siklus"
      ],
      correctOption: "Jumlah gelombang arus yang terjadi dalam satu detik",
      explanation: "Frekuensi dalam arus bolak-balik adalah jumlah siklus gelombang yang terjadi dalam satu detik, biasanya diukur dalam Hertz (Hz)."
    },
    {
      question: "Apa yang dimaksud dengan amplitudo dalam arus bolak-balik?",
      options: [
        "Tinggi maksimum gelombang arus",
        "Waktu yang dibutuhkan untuk satu siklus",
        "Jumlah elektron yang mengalir per detik",
        "Panjang gelombang arus"
      ],
      correctOption: "Tinggi maksimum gelombang arus",
      explanation: "Amplitudo adalah nilai maksimum dari gelombang arus bolak-balik yang menunjukkan puncak tertinggi."
    },
    {
      question: "Satuan apa yang digunakan untuk mengukur frekuensi arus bolak-balik?",
      options: ["Volt", "Ohm", "Ampere", "Hertz"],
      correctOption: "Hertz",
      explanation: "Frekuensi arus bolak-balik diukur dalam Hertz (Hz), yang menunjukkan jumlah siklus per detik."
    },
    {
      question: "Apa fungsi transformator pada arus bolak-balik?",
      options: [
        "Mengubah arus AC menjadi DC",
        "Mengubah tegangan AC menjadi lebih besar atau lebih kecil",
        "Mengurangi hambatan listrik",
        "Menstabilkan arus listrik"
      ],
      correctOption: "Mengubah tegangan AC menjadi lebih besar atau lebih kecil",
      explanation: "Transformator digunakan untuk mengubah tegangan arus bolak-balik (AC) menjadi lebih besar (step-up) atau lebih kecil (step-down)."
    },
    {
      question: "Bagaimana bentuk gelombang arus bolak-balik pada osiloskop?",
      options: ["Garis lurus", "Gelombang sinus", "Gelombang persegi", "Gelombang segitiga"],
      correctOption: "Gelombang sinus",
      explanation: "Bentuk gelombang arus bolak-balik yang ideal pada osiloskop adalah gelombang sinus."
    },
    {
      question: "Apa yang dimaksud dengan impedansi pada rangkaian arus bolak-balik?",
      options: [
        "Hambatan total dalam rangkaian AC",
        "Jumlah arus yang mengalir",
        "Jumlah elektron dalam penghantar",
        "Tegangan maksimum pada rangkaian"
      ],
      correctOption: "Hambatan total dalam rangkaian AC",
      explanation: "Impedansi adalah hambatan total dalam rangkaian arus bolak-balik, termasuk resistansi dan reaktansi."
    },
    {
      question: "Apa yang dimaksud dengan faktor daya (power factor)?",
      options: [
        "Perbandingan antara daya aktif dan daya semu",
        "Jumlah arus yang digunakan dalam rangkaian",
        "Kecepatan elektron dalam penghantar",
        "Jumlah energi yang hilang dalam rangkaian"
      ],
      correctOption: "Perbandingan antara daya aktif dan daya semu",
      explanation: "Faktor daya adalah perbandingan antara daya aktif (daya nyata) dan daya semu dalam rangkaian AC."
    },
    {
      question: "Apa yang terjadi jika frekuensi arus bolak-balik meningkat?",
      options: [
        "Impedansi rangkaian menurun",
        "Reaktansi kapasitif menurun",
        "Reaktansi induktif meningkat",
        "Tegangan keluaran selalu meningkat"
      ],
      correctOption: "Reaktansi induktif meningkat",
      explanation: "Jika frekuensi arus bolak-balik meningkat, reaktansi induktif juga meningkat karena berbanding lurus dengan frekuensi."
    },
    {
      question: "Apa yang dimaksud dengan reaktansi induktif?",
      options: [
        "Hambatan yang disebabkan oleh resistor",
        "Hambatan yang disebabkan oleh kapasitor",
        "Hambatan yang disebabkan oleh induktor",
        "Hambatan total dalam rangkaian"
      ],
      correctOption: "Hambatan yang disebabkan oleh induktor",
      explanation: "Reaktansi induktif adalah hambatan terhadap perubahan arus yang disebabkan oleh induktor dalam rangkaian AC."
    },
    {
      question: "Apa yang dimaksud dengan reaktansi kapasitif?",
      options: [
        "Hambatan yang disebabkan oleh kapasitor",
        "Hambatan yang disebabkan oleh resistor",
        "Hambatan total dalam rangkaian",
        "Hambatan yang disebabkan oleh induktor"
      ],
      correctOption: "Hambatan yang disebabkan oleh kapasitor",
      explanation: "Reaktansi kapasitif adalah hambatan terhadap perubahan tegangan yang disebabkan oleh kapasitor dalam rangkaian AC."
    },
    {
      question: "Apa yang terjadi jika tegangan AC diubah menggunakan transformator step-up?",
      options: [
        "Tegangan naik, arus turun",
        "Tegangan turun, arus naik",
        "Tegangan dan arus tetap",
        "Tegangan naik, arus naik"
      ],
      correctOption: "Tegangan naik, arus turun",
      explanation: "Transformator step-up meningkatkan tegangan dan menurunkan arus untuk menjaga daya tetap konstan."
    },
    {
      question: "Apa hubungan antara daya, tegangan, dan arus dalam arus bolak-balik?",
      options: [
        "P = V x I",
        "P = V/I",
        "P = I^2 / R",
        "P = V^2 / I"
      ],
      correctOption: "P = V x I",
      explanation: "Dalam rangkaian AC, daya dihitung sebagai hasil kali tegangan (V) dan arus (I)."
    },
    {
      question: "Apa yang dimaksud dengan daya reaktif dalam rangkaian AC?",
      options: [
        "Daya yang hilang dalam rangkaian",
        "Daya yang tidak menghasilkan kerja nyata",
        "Daya yang digunakan oleh resistor",
        "Daya total dalam rangkaian"
      ],
      correctOption: "Daya yang tidak menghasilkan kerja nyata",
      explanation: "Daya reaktif adalah daya yang tidak menghasilkan kerja nyata, biasanya disebabkan oleh induktor dan kapasitor."
    },
    {
      question: "Apa fungsi kapasitor dalam rangkaian arus bolak-balik?",
      options: [
        "Menyimpan energi dalam bentuk medan listrik",
        "Mengubah arus AC menjadi DC",
        "Mengurangi tegangan",
        "Mengalirkan arus"
      ],
      correctOption: "Menyimpan energi dalam bentuk medan listrik",
      explanation: "Kapasitor berfungsi menyimpan energi dalam bentuk medan listrik dan dapat memengaruhi reaktansi dalam rangkaian AC."
    },
    {
      question: "Apa fungsi induktor dalam rangkaian arus bolak-balik?",
      options: [
        "Menyimpan energi dalam bentuk medan magnet",
        "Mengurangi hambatan",
        "Menstabilkan arus",
        "Mengalirkan tegangan"
      ],
      correctOption: "Menyimpan energi dalam bentuk medan magnet",
      explanation: "Induktor menyimpan energi dalam bentuk medan magnet dan memberikan reaktansi induktif dalam rangkaian AC."
    },
    {
      question: "Apa hubungan fase antara tegangan dan arus pada rangkaian resistif murni?",
      options: [
        "Arus mendahului tegangan 90°",
        "Arus tertinggal dari tegangan 90°",
        "Arus dan tegangan sefase",
        "Arus mendahului tegangan 45°"
      ],
      correctOption: "Arus dan tegangan sefase",
      explanation: "Pada rangkaian resistif murni, arus dan tegangan berada dalam fase yang sama (sefase)."
    },
    {
      question: "Apa hubungan fase antara tegangan dan arus pada rangkaian induktif murni?",
      options: [
        "Arus mendahului tegangan 90°",
        "Arus tertinggal dari tegangan 90°",
        "Arus dan tegangan sefase",
        "Arus mendahului tegangan 45°"
      ],
      correctOption: "Arus tertinggal dari tegangan 90°",
      explanation: "Pada rangkaian induktif murni, arus tertinggal dari tegangan sebesar 90°."
    },
    {
      question: "Apa hubungan fase antara tegangan dan arus pada rangkaian kapasitif murni?",
      options: [
        "Arus mendahului tegangan 90°",
        "Arus tertinggal dari tegangan 90°",
        "Arus dan tegangan sefase",
        "Arus mendahului tegangan 45°"
      ],
      correctOption: "Arus mendahului tegangan 90°",
      explanation: "Pada rangkaian kapasitif murni, arus mendahului tegangan sebesar 90°."
    },
    {
      question: "Apa yang dimaksud dengan panjang gelombang dalam arus bolak-balik?",
      options: [
        "Jarak antara dua puncak gelombang",
        "Jumlah siklus dalam satu detik",
        "Waktu yang diperlukan untuk satu siklus",
        "Tegangan maksimum dalam gelombang"
      ],
      correctOption: "Jarak antara dua puncak gelombang",
      explanation: "Panjang gelombang adalah jarak antara dua puncak gelombang yang berurutan pada arus bolak-balik."
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

export default LatihanSoalArusBolakBalik;
