import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalInduksiElektromagnetik = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan induksi elektromagnetik?",
        options: [
          "Proses menghasilkan arus listrik melalui perubahan medan magnet",
          "Proses menghasilkan medan magnet akibat arus listrik",
          "Proses menghasilkan energi dari medan listrik",
          "Proses menghentikan arus listrik"
        ],
        correctOption: "Proses menghasilkan arus listrik melalui perubahan medan magnet",
        explanation: "Induksi elektromagnetik adalah proses menghasilkan arus listrik dalam penghantar akibat perubahan medan magnet di sekitarnya."
      },
      {
        question: "Siapa yang pertama kali menemukan hukum induksi elektromagnetik?",
        options: ["Michael Faraday", "James Clerk Maxwell", "Nikola Tesla", "Hans Christian Ørsted"],
        correctOption: "Michael Faraday",
        explanation: "Hukum induksi elektromagnetik ditemukan oleh Michael Faraday pada tahun 1831."
      },
      {
        question: "Apa yang dimaksud dengan fluks magnetik?",
        options: [
          "Jumlah garis medan magnet yang melewati suatu permukaan",
          "Jumlah arus listrik yang mengalir dalam penghantar",
          "Jumlah energi yang diserap oleh bahan",
          "Jumlah gaya yang dialami oleh partikel bermuatan"
        ],
        correctOption: "Jumlah garis medan magnet yang melewati suatu permukaan",
        explanation: "Fluks magnetik adalah jumlah garis medan magnet yang melalui suatu permukaan tertentu."
      },
      {
        question: "Apa yang dimaksud dengan gaya gerak listrik (GGL) induksi?",
        options: [
          "Perubahan medan magnet yang menyebabkan arus listrik",
          "Arus yang mengalir dalam penghantar",
          "Medan magnet yang ditimbulkan oleh arus listrik",
          "Perubahan resistansi dalam penghantar"
        ],
        correctOption: "Perubahan medan magnet yang menyebabkan arus listrik",
        explanation: "Gaya gerak listrik (GGL) induksi adalah tegangan yang timbul dalam penghantar akibat perubahan medan magnet yang mengelilinginya."
      },
      {
        question: "Apa yang dimaksud dengan hukum Faraday tentang induksi elektromagnetik?",
        options: [
          "GGL induksi sebanding dengan laju perubahan fluks magnet",
          "GGL induksi sebanding dengan arus yang mengalir",
          "Medan magnet berbanding terbalik dengan jarak penghantar",
          "Laju perubahan fluks magnet sebanding dengan energi listrik"
        ],
        correctOption: "GGL induksi sebanding dengan laju perubahan fluks magnet",
        explanation: "Hukum Faraday menyatakan bahwa besar GGL induksi sebanding dengan laju perubahan fluks magnet yang melewati suatu loop penghantar."
      },
      {
        question: "Apa yang dimaksud dengan hukum Lenz?",
        options: [
          "Arah arus induksi berlawanan dengan perubahan medan magnet yang menyebabkan induksi",
          "Arah arus induksi searah dengan perubahan medan magnet",
          "Induksi elektromagnetik tidak dipengaruhi oleh medan magnet",
          "Arus induksi tidak tergantung pada perubahan fluks magnet"
        ],
        correctOption: "Arah arus induksi berlawanan dengan perubahan medan magnet yang menyebabkan induksi",
        explanation: "Hukum Lenz menyatakan bahwa arah arus induksi akan selalu berlawanan dengan perubahan medan magnet yang menyebabkannya."
      },
      {
        question: "Apa yang dimaksud dengan kumparan dalam induksi elektromagnetik?",
        options: [
          "Kawat yang dililitkan berbentuk spiral untuk meningkatkan induksi",
          "Kawat penghantar lurus yang menghasilkan medan magnet",
          "Bahan magnetik yang memperkuat medan magnet",
          "Alat yang mengukur kekuatan medan magnet"
        ],
        correctOption: "Kawat yang dililitkan berbentuk spiral untuk meningkatkan induksi",
        explanation: "Kumparan adalah kawat yang dililitkan berbentuk spiral, digunakan untuk meningkatkan gaya gerak listrik akibat induksi elektromagnetik."
      },
      {
        question: "Apa yang dimaksud dengan induksi elektromagnetik dalam generator?",
        options: [
          "Proses mengubah energi mekanik menjadi energi listrik",
          "Proses mengubah energi listrik menjadi energi panas",
          "Proses mengubah energi kimia menjadi energi listrik",
          "Proses mengubah energi listrik menjadi energi magnet"
        ],
        correctOption: "Proses mengubah energi mekanik menjadi energi listrik",
        explanation: "Dalam generator, induksi elektromagnetik digunakan untuk mengubah energi mekanik (gerakan) menjadi energi listrik."
      },
      {
        question: "Apa yang dimaksud dengan fluks magnetik dalam induksi elektromagnetik?",
        options: [
          "Jumlah garis medan magnet yang menembus suatu area",
          "Jumlah energi listrik yang dihasilkan",
          "Jumlah arus listrik yang mengalir",
          "Jumlah gaya yang dialami oleh kawat penghantar"
        ],
        correctOption: "Jumlah garis medan magnet yang menembus suatu area",
        explanation: "Fluks magnetik adalah ukuran jumlah garis medan magnet yang menembus suatu area."
      },
      {
        question: "Apa yang terjadi pada arus induksi dalam kumparan yang diletakkan dalam medan magnet yang berubah?",
        options: [
          "Arus induksi akan berubah sesuai dengan laju perubahan fluks magnet",
          "Arus induksi akan tetap konstan",
          "Arus induksi tidak terbentuk",
          "Arus induksi akan berkurang tanpa perubahan fluks magnet"
        ],
        correctOption: "Arus induksi akan berubah sesuai dengan laju perubahan fluks magnet",
        explanation: "Arus induksi yang terbentuk dalam kumparan akan berubah seiring dengan perubahan fluks magnet yang melalui kumparan tersebut."
      },
      {
        question: "Apa yang dimaksud dengan induktor?",
        options: [
          "Alat yang menghasilkan medan magnet dalam rangkaian listrik",
          "Alat untuk mengukur fluks magnet",
          "Alat untuk mengubah arus listrik menjadi medan magnet",
          "Alat untuk menyimpan energi dalam bentuk medan magnet"
        ],
        correctOption: "Alat yang menghasilkan medan magnet dalam rangkaian listrik",
        explanation: "Induktor adalah komponen listrik yang digunakan untuk menghasilkan medan magnet ketika arus listrik mengalir melaluinya."
      },
      {
        question: "Apa hubungan antara arus listrik dan medan magnet dalam hukum Ampere?",
        options: [
          "Arus listrik menghasilkan medan magnet yang mengelilingi penghantar",
          "Medan magnet menghambat arus listrik",
          "Arus listrik tidak berhubungan dengan medan magnet",
          "Medan magnet hanya terbentuk tanpa arus listrik"
        ],
        correctOption: "Arus listrik menghasilkan medan magnet yang mengelilingi penghantar",
        explanation: "Hukum Ampere menyatakan bahwa arus listrik yang mengalir melalui penghantar menghasilkan medan magnet di sekitarnya."
      },
      {
        question: "Bagaimana perubahan fluks magnet mempengaruhi arus induksi dalam sirkuit?",
        options: [
          "Semakin besar perubahan fluks magnet, semakin besar arus induksi yang dihasilkan",
          "Perubahan fluks magnet tidak mempengaruhi arus induksi",
          "Arus induksi akan berkurang dengan perubahan fluks magnet",
          "Fluks magnet tidak mempengaruhi arus induksi"
        ],
        correctOption: "Semakin besar perubahan fluks magnet, semakin besar arus induksi yang dihasilkan",
        explanation: "Arus induksi sebanding dengan laju perubahan fluks magnet yang melaluinya. Semakin besar perubahan fluks magnet, semakin besar arus yang dihasilkan."
      },
      {
        question: "Apa yang dimaksud dengan transformator?",
        options: [
          "Alat yang menggunakan prinsip induksi elektromagnetik untuk mengubah tegangan listrik",
          "Alat yang mengubah energi listrik menjadi energi mekanik",
          "Alat yang mengubah energi panas menjadi energi listrik",
          "Alat untuk menyimpan energi listrik"
        ],
        correctOption: "Alat yang menggunakan prinsip induksi elektromagnetik untuk mengubah tegangan listrik",
        explanation: "Transformator bekerja berdasarkan prinsip induksi elektromagnetik untuk mengubah tegangan listrik dari tingkat rendah ke tingkat tinggi, atau sebaliknya."
      },
      {
        question: "Apa yang terjadi pada induksi elektromagnetik jika kecepatan perubahan fluks magnet bertambah?",
        options: [
          "GGL induksi semakin besar",
          "GGL induksi tidak berubah",
          "GGL induksi semakin kecil",
          "GGL induksi terhenti"
        ],
        correctOption: "GGL induksi semakin besar",
        explanation: "Semakin cepat perubahan fluks magnet, semakin besar gaya gerak listrik (GGL) induksi yang dihasilkan."
      },
      {
        question: "Apa yang dimaksud dengan medan magnet pada motor listrik?",
        options: [
          "Medan magnet yang digunakan untuk menghasilkan gerakan rotasi",
          "Medan magnet yang digunakan untuk menahan arus listrik",
          "Medan magnet yang digunakan untuk mengalirkan energi listrik",
          "Medan magnet yang digunakan untuk menghentikan arus"
        ],
        correctOption: "Medan magnet yang digunakan untuk menghasilkan gerakan rotasi",
        explanation: "Motor listrik menghasilkan gerakan rotasi dengan cara mengubah energi listrik menjadi energi mekanik melalui interaksi dengan medan magnet."
      },
      {
        question: "Apa yang dimaksud dengan siklus induksi elektromagnetik?",
        options: [
          "Proses terus-menerus antara pembangkitan medan magnet dan GGL induksi",
          "Proses menghilangkan medan magnet dalam sirkuit",
          "Proses meningkatkan kekuatan arus listrik dalam kumparan",
          "Proses menghentikan aliran arus dalam penghantar"
        ],
        correctOption: "Proses terus-menerus antara pembangkitan medan magnet dan GGL induksi",
        explanation: "Siklus induksi elektromagnetik adalah proses berulang antara pembentukan medan magnet dan gaya gerak listrik yang dihasilkan."
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

export default LatihanSoalInduksiElektromagnetik;
