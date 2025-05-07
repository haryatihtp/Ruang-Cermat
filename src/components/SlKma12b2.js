import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Dalam sel elektrolisis, mengapa elektroda grafit lebih sering digunakan dibandingkan elektroda logam?",
      options: [
        "Grafit memiliki massa jenis lebih kecil",
        "Grafit memiliki konduktivitas listrik yang tinggi",
        "Grafit tidak bereaksi dengan elektrolit",
        "Grafit mudah diperoleh di alam"
      ],
      correctOption: "Grafit tidak bereaksi dengan elektrolit",
      explanation: "Elektroda grafit lebih sering digunakan karena sifatnya yang inert, sehingga tidak bereaksi dengan elektrolit atau produk elektrolisis.",
    },
    {
      question: "Sebuah larutan CuSO4 dielektrolisis menggunakan elektroda inert. Apa produk yang terbentuk di anoda?",
      options: [
        "Gas oksigen",
        "Ion Cu²⁺",
        "Gas hidrogen",
        "Ion SO₄²⁻"
      ],
      correctOption: "Gas oksigen",
      explanation: "Pada elektrolisis CuSO4 dengan elektroda inert, di anoda terjadi oksidasi ion OH⁻ dari air sehingga menghasilkan gas oksigen.",
    },
    {
      question: "Bagaimana hubungan potensial sel dan spontanitas reaksi dalam sel galvanik?",
      options: [
        "Reaksi spontan jika potensial sel negatif",
        "Reaksi spontan jika potensial sel nol",
        "Reaksi spontan jika potensial sel positif",
        "Reaksi spontan jika tidak ada arus listrik"
      ],
      correctOption: "Reaksi spontan jika potensial sel positif",
      explanation: "Potensial sel positif menunjukkan bahwa reaksi redoks dalam sel galvanik terjadi secara spontan.",
    },
    {
      question: "Mengapa Zn digunakan sebagai anoda dalam sel Daniell?",
      options: [
        "Zn memiliki harga potensial reduksi standar lebih kecil",
        "Zn mudah larut dalam larutan CuSO₄",
        "Zn bersifat lebih inert dibandingkan Cu",
        "Zn memiliki konduktivitas listrik yang lebih tinggi"
      ],
      correctOption: "Zn memiliki harga potensial reduksi standar lebih kecil",
      explanation: "Zn digunakan sebagai anoda karena potensial reduksi standarnya lebih kecil daripada Cu, sehingga lebih mudah teroksidasi.",
    },
    {
      question: "Diberikan pasangan redoks berikut: Fe³⁺/Fe²⁺ (+0,77 V) dan Sn⁴⁺/Sn²⁺ (+0,15 V). Apa yang terjadi jika Fe²⁺ dicampur dengan Sn⁴⁺?",
      options: [
        "Fe²⁺ akan teroksidasi menjadi Fe³⁺",
        "Sn⁴⁺ akan tereduksi menjadi Sn",
        "Fe³⁺ akan tereduksi menjadi Fe²⁺",
        "Tidak terjadi reaksi"
      ],
      correctOption: "Fe²⁺ akan teroksidasi menjadi Fe³⁺",
      explanation: "Fe²⁺ memiliki potensial reduksi yang lebih besar dibandingkan Sn⁴⁺, sehingga Fe²⁺ akan teroksidasi menjadi Fe³⁺.",
    },
    {
      question: "Mengapa logam alkali tidak digunakan sebagai elektroda pada sel elektrolisis air?",
      options: [
        "Logam alkali bereaksi dengan air menghasilkan gas hidrogen",
        "Logam alkali tidak menghantarkan listrik",
        "Logam alkali terlalu mahal untuk digunakan",
        "Logam alkali memiliki massa molar tinggi"
      ],
      correctOption: "Logam alkali bereaksi dengan air menghasilkan gas hidrogen",
      explanation: "Logam alkali sangat reaktif dengan air, sehingga tidak cocok digunakan sebagai elektroda pada elektrolisis air.",
    },
    {
      question: "Pada sel galvanik, mengapa jembatan garam diperlukan?",
      options: [
        "Untuk mempercepat reaksi redoks",
        "Untuk menjaga kesetimbangan ion dalam larutan",
        "Untuk meningkatkan potensial sel",
        "Untuk menggantikan elektroda"
      ],
      correctOption: "Untuk menjaga kesetimbangan ion dalam larutan",
      explanation: "Jembatan garam berfungsi menjaga kesetimbangan ion di kedua elektroda dengan mengalirkan ion untuk mencegah penghentian reaksi.",
    },
    {
      question: "Berikut ini yang bukan merupakan aplikasi sel elektrolisis adalah?",
      options: [
        "Penyepuhan logam",
        "Pemurnian logam",
        "Produksi gas klorin",
        "Produksi arus listrik"
      ],
      correctOption: "Produksi arus listrik",
      explanation: "Sel elektrolisis digunakan untuk penyepuhan, pemurnian logam, dan produksi gas seperti klorin, tetapi tidak untuk menghasilkan arus listrik.",
    },
    {
      question: "Dalam proses pemurnian tembaga, mengapa tembaga murni terbentuk di katoda?",
      options: [
        "Tembaga memiliki potensial oksidasi yang besar",
        "Tembaga di katoda mengalami oksidasi",
        "Ion Cu²⁺ mengalami reduksi menjadi Cu",
        "Ion Cu²⁺ dihasilkan di anoda"
      ],
      correctOption: "Ion Cu²⁺ mengalami reduksi menjadi Cu",
      explanation: "Dalam pemurnian tembaga, ion Cu²⁺ dari anoda direduksi menjadi tembaga murni di katoda.",
    },
    {
      question: "Pada elektrolisis larutan NaCl, gas klorin dihasilkan di anoda. Mengapa hal ini terjadi?",
      options: [
        "Ion Na⁺ lebih mudah teroksidasi",
        "Ion Cl⁻ lebih mudah teroksidasi dibandingkan ion OH⁻",
        "Air mengalami elektrolisis lebih cepat",
        "Ion Cl⁻ tidak larut dalam larutan"
      ],
      correctOption: "Ion Cl⁻ lebih mudah teroksidasi dibandingkan ion OH⁻",
      explanation: "Dalam larutan NaCl, ion Cl⁻ lebih mudah teroksidasi di anoda menghasilkan gas klorin dibandingkan ion OH⁻ dari air.",
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
    setShowConfirmation(true);
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
      setShowConfirmation(false);
    } else {
      resetSelection();
      setShowConfirmation(false);
    }
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

      {selectedOption && !showConfirmation && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlKma12b2;
