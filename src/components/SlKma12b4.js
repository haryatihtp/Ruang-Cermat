import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Mengapa senyawa karbon memiliki keragaman struktur yang sangat banyak?",
      options: [
        "Karena karbon memiliki kemampuan berikatan tunggal saja",
        "Karena karbon memiliki 4 elektron valensi dan dapat membentuk rantai panjang",
        "Karena karbon hanya dapat berikatan dengan oksigen",
        "Karena karbon memiliki massa atom yang rendah"
      ],
      correctOption: "Karena karbon memiliki 4 elektron valensi dan dapat membentuk rantai panjang",
      explanation: "Karbon memiliki 4 elektron valensi sehingga dapat membentuk ikatan kovalen dengan atom lain dan membentuk rantai panjang, bercabang, atau siklik."
    },
    {
      question: "Senyawa manakah yang termasuk dalam turunan alkana?",
      options: [
        "Metanol",
        "Butena",
        "Benzena",
        "Asam etanoat"
      ],
      correctOption: "Metanol",
      explanation: "Metanol adalah turunan alkana karena berasal dari penggantian satu atom hidrogen pada alkana dengan gugus -OH."
    },
    {
      question: "Apa peran katalis dalam reaksi pembentukan senyawa karbon?",
      options: [
        "Mengurangi energi aktivasi reaksi",
        "Menambah jumlah produk reaksi",
        "Mengubah senyawa karbon menjadi senyawa anorganik",
        "Mengubah reaksi eksoterm menjadi endoterm"
      ],
      correctOption: "Mengurangi energi aktivasi reaksi",
      explanation: "Katalis bekerja dengan menurunkan energi aktivasi, sehingga reaksi berlangsung lebih cepat tanpa memengaruhi jumlah produk yang dihasilkan."
    },
    {
      question: "Bagaimana perbedaan sifat fisik antara senyawa hidrokarbon jenuh dan tak jenuh?",
      options: [
        "Hidrokarbon jenuh memiliki titik didih lebih tinggi dibandingkan hidrokarbon tak jenuh",
        "Hidrokarbon tak jenuh lebih mudah bereaksi dibandingkan hidrokarbon jenuh",
        "Hidrokarbon tak jenuh memiliki massa molar lebih kecil dibandingkan hidrokarbon jenuh",
        "Hidrokarbon jenuh lebih larut dalam air dibandingkan hidrokarbon tak jenuh"
      ],
      correctOption: "Hidrokarbon tak jenuh lebih mudah bereaksi dibandingkan hidrokarbon jenuh",
      explanation: "Ikatan rangkap dalam hidrokarbon tak jenuh membuatnya lebih reaktif dibandingkan hidrokarbon jenuh yang hanya memiliki ikatan tunggal."
    },
    {
      question: "Apa yang akan terjadi jika alkena direaksikan dengan bromin dalam larutan karbon tetraklorida?",
      options: [
        "Terbentuk endapan merah",
        "Warna larutan berubah menjadi bening",
        "Tidak ada reaksi yang terjadi",
        "Larutan berubah menjadi biru"
      ],
      correctOption: "Warna larutan berubah menjadi bening",
      explanation: "Alkena bereaksi dengan bromin melalui reaksi adisi, menghilangkan warna cokelat kemerahan dari bromin."
    },
    {
      question: "Apa fungsi dari ozonolisis dalam analisis struktur hidrokarbon?",
      options: [
        "Mengubah hidrokarbon menjadi alkohol",
        "Membantu menentukan posisi ikatan rangkap",
        "Menurunkan massa molekul hidrokarbon",
        "Mengubah hidrokarbon menjadi karboksilat"
      ],
      correctOption: "Membantu menentukan posisi ikatan rangkap",
      explanation: "Ozonolisis memecah ikatan rangkap dalam hidrokarbon, menghasilkan senyawa karbonil yang membantu mengidentifikasi posisi ikatan rangkap."
    },
    {
      question: "Senyawa manakah yang dapat membentuk ikatan hidrogen antar molekul?",
      options: [
        "Metana",
        "Etanol",
        "Propana",
        "Butana"
      ],
      correctOption: "Etanol",
      explanation: "Etanol memiliki gugus -OH yang dapat membentuk ikatan hidrogen antar molekul, berbeda dengan senyawa hidrokarbon nonpolar."
    },
    {
      question: "Apa hasil utama reaksi pembakaran sempurna dari alkana?",
      options: [
        "Karbon monoksida dan air",
        "Karbon dioksida dan air",
        "Karbon monoksida dan oksigen",
        "Karbon dioksida dan oksigen"
      ],
      correctOption: "Karbon dioksida dan air",
      explanation: "Pembakaran sempurna alkana menghasilkan karbon dioksida dan air karena semua atom karbon teroksidasi menjadi CO2."
    },
    {
      question: "Mengapa alkohol memiliki titik didih lebih tinggi dibandingkan alkana dengan jumlah atom karbon yang sama?",
      options: [
        "Karena alkohol memiliki massa molekul lebih besar",
        "Karena alkohol membentuk ikatan hidrogen antar molekul",
        "Karena alkohol lebih polar dibandingkan alkana",
        "Karena alkohol memiliki ikatan rangkap"
      ],
      correctOption: "Karena alkohol membentuk ikatan hidrogen antar molekul",
      explanation: "Ikatan hidrogen antar molekul alkohol menyebabkan gaya tarik antarmolekul lebih kuat, sehingga titik didihnya lebih tinggi."
    },
    {
      question: "Bagaimana cara membedakan antara alkana dan alkena dengan uji kimia sederhana?",
      options: [
        "Menggunakan larutan KMnO4",
        "Membakar kedua senyawa dan membandingkan nyalanya",
        "Melarutkan kedua senyawa dalam air",
        "Mengukur titik didih kedua senyawa"
      ],
      correctOption: "Menggunakan larutan KMnO4",
      explanation: "Alkena dapat mendekolorisasi larutan KMnO4, sedangkan alkana tidak bereaksi dengan KMnO4."
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

export default SlKma12b4;