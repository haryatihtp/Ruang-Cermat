import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan kelarutan (solubility)?",
      options: [
        "Jumlah maksimum zat yang dapat larut dalam pelarut pada kondisi tertentu",
        "Jumlah zat yang tidak larut dalam pelarut",
        "Kecepatan zat larut dalam air",
        "Kemampuan zat untuk bereaksi dengan pelarut"
      ],
      correctOption: "Jumlah maksimum zat yang dapat larut dalam pelarut pada kondisi tertentu",
      explanation: "Kelarutan adalah jumlah maksimum zat yang dapat larut dalam pelarut tertentu pada suhu dan tekanan tertentu."
    },
    {
      question: "Apa yang dimaksud dengan hasil kali kelarutan (Ksp)?",
      options: [
        "Hasil kali konsentrasi ion-ion dalam larutan jenuh, masing-masing dipangkatkan dengan koefisiennya",
        "Hasil kali konsentrasi ion-ion dalam larutan tak jenuh",
        "Hasil kali massa zat yang larut dan tidak larut",
        "Hasil kali ion-ion dalam larutan yang tidak larut"
      ],
      correctOption: "Hasil kali konsentrasi ion-ion dalam larutan jenuh, masing-masing dipangkatkan dengan koefisiennya",
      explanation: "Ksp adalah hasil kali konsentrasi ion-ion dalam larutan jenuh, dipangkatkan dengan koefisien reaksi ionisasi."
    },
    {
      question: "Jika Ksp suatu senyawa lebih besar, maka kelarutannya akan?",
      options: [
        "Menjadi lebih kecil",
        "Tidak berubah",
        "Menjadi lebih besar",
        "Tidak ada hubungan dengan kelarutan"
      ],
      correctOption: "Menjadi lebih besar",
      explanation: "Semakin besar nilai Ksp, semakin besar kelarutan senyawa tersebut."
    },
    {
      question: "Apa yang terjadi jika ion-ion sejenis ditambahkan ke dalam larutan jenuh?",
      options: [
        "Kelarutan bertambah",
        "Kelarutan berkurang",
        "Kelarutan tetap sama",
        "Konsentrasi ion-ion lain bertambah"
      ],
      correctOption: "Kelarutan berkurang",
      explanation: "Penambahan ion sejenis menyebabkan kelarutan berkurang, dikenal sebagai efek ion sejenis."
    },
    {
      question: "Bagaimana pengaruh pH terhadap kelarutan senyawa yang mengandung ion basa lemah?",
      options: [
        "Kelarutan tidak terpengaruh oleh pH",
        "Kelarutan bertambah pada pH tinggi",
        "Kelarutan bertambah pada pH rendah",
        "Kelarutan berkurang pada pH rendah"
      ],
      correctOption: "Kelarutan bertambah pada pH rendah",
      explanation: "Kelarutan senyawa dengan ion basa lemah bertambah pada pH rendah karena ion H+ bereaksi dengan ion basa lemah, mengurangi konsentrasi ion dalam larutan."
    },
    {
      question: "Apa yang dimaksud dengan efek ion sejenis?",
      options: [
        "Penurunan kelarutan senyawa dalam larutan yang mengandung ion sejenis",
        "Peningkatan kelarutan senyawa dalam larutan yang mengandung ion sejenis",
        "Penambahan ion yang mempercepat reaksi dalam larutan",
        "Peningkatan ion dalam larutan"
      ],
      correctOption: "Penurunan kelarutan senyawa dalam larutan yang mengandung ion sejenis",
      explanation: "Efek ion sejenis terjadi ketika penambahan ion sejenis dalam larutan menyebabkan penurunan kelarutan senyawa tersebut."
    },
    {
      question: "Bagaimana pengaruh suhu terhadap kelarutan senyawa padat dalam cairan?",
      options: [
        "Kelarutan senyawa padat dalam cairan meningkat dengan suhu",
        "Kelarutan senyawa padat dalam cairan menurun dengan suhu",
        "Suhu tidak mempengaruhi kelarutan senyawa padat",
        "Hanya senyawa yang larut dengan cepat yang terpengaruh suhu"
      ],
      correctOption: "Kelarutan senyawa padat dalam cairan meningkat dengan suhu",
      explanation: "Secara umum, kelarutan senyawa padat dalam cairan meningkat seiring dengan meningkatnya suhu."
    },
    {
      question: "Bagaimana Ksp dapat digunakan untuk menghitung kelarutan senyawa?",
      options: [
        "Ksp digunakan untuk menghitung konsentrasi senyawa yang larut",
        "Ksp digunakan untuk menghitung konsentrasi senyawa yang tidak larut",
        "Ksp digunakan untuk menghitung laju reaksi",
        "Ksp digunakan untuk menghitung suhu reaksi"
      ],
      correctOption: "Ksp digunakan untuk menghitung konsentrasi senyawa yang larut",
      explanation: "Ksp dapat digunakan untuk menghitung kelarutan senyawa dengan menggunakan rumus kelarutan (S) yang diperoleh dari Ksp."
    },
    {
      question: "Apa yang dimaksud dengan larutan jenuh?",
      options: [
        "Larutan yang sudah tidak dapat lagi melarutkan zat tambahan",
        "Larutan yang mengandung pelarut lebih banyak",
        "Larutan yang hanya mengandung satu zat terlarut",
        "Larutan yang sudah tidak mengandung zat terlarut"
      ],
      correctOption: "Larutan yang sudah tidak dapat lagi melarutkan zat tambahan",
      explanation: "Larutan jenuh adalah larutan yang sudah tidak dapat lagi melarutkan zat tambahan karena telah mencapai kapasitas kelarutannya."
    },
    {
      question: "Apa yang dimaksud dengan kelarutan maksimum?",
      options: [
        "Jumlah zat yang larut dalam pelarut pada suhu tertentu",
        "Jumlah pelarut yang dapat mengalir dalam sistem",
        "Kadar air dalam pelarut",
        "Volume pelarut yang digunakan"
      ],
      correctOption: "Jumlah zat yang larut dalam pelarut pada suhu tertentu",
      explanation: "Kelarutan maksimum adalah jumlah zat yang dapat larut dalam pelarut pada suhu tertentu dan pada tekanan tetap."
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
export default LatihanSoal3;