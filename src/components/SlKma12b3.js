import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Unsur transisi memiliki sifat unik yang membedakannya dari unsur lainnya. Salah satu sifat tersebut adalah kemampuan membentuk kompleks berwarna. Apa penyebab utama terbentuknya warna pada senyawa kompleks unsur transisi?",
      options: [
        "Adanya elektron dalam subkulit s yang tereksitasi",
        "Adanya transisi elektron pada subkulit d yang terbelah akibat pengaruh medan ligan",
        "Adanya ikatan ionik antara ligan dan logam",
        "Adanya transisi elektron antar orbital p dan d"
      ],
      correctOption: "Adanya transisi elektron pada subkulit d yang terbelah akibat pengaruh medan ligan",
      explanation: "Senyawa kompleks unsur transisi berwarna karena adanya transisi elektron dalam orbital d yang terbelah akibat interaksi dengan medan ligan (efek medan kristal).",
    },
    {
      question: "Senyawa feromagnetik seperti Fe3O4 memiliki sifat magnet yang kuat. Sifat ini berkaitan dengan elektron pada atom Fe. Apa penyebab utama sifat feromagnetik ini?",
      options: [
        "Semua elektron dalam atom Fe berpasangan",
        "Elektron tidak berpasangan dalam orbital d menciptakan momen magnetik yang teratur",
        "Elektron pada orbital p menciptakan medan magnet",
        "Adanya transisi elektron antar orbital s dan p"
      ],
      correctOption: "Elektron tidak berpasangan dalam orbital d menciptakan momen magnetik yang teratur",
      explanation: "Sifat feromagnetik muncul karena elektron tidak berpasangan dalam orbital d saling sejajar, menciptakan momen magnetik yang kuat."
    },
    {
      question: "Salah satu metode produksi logam adalah proses elektrolisis. Pada ekstraksi aluminium, digunakan kriolit untuk mencairkan bauksit. Apa fungsi utama kriolit dalam proses ini?",
      options: [
        "Mengurangi titik leleh bauksit",
        "Meningkatkan reaktivitas bauksit",
        "Mencegah oksidasi aluminium",
        "Meningkatkan kemurnian aluminium"
      ],
      correctOption: "Mengurangi titik leleh bauksit",
      explanation: "Kriolit digunakan untuk menurunkan titik leleh bauksit, sehingga proses elektrolisis dapat dilakukan pada suhu yang lebih rendah."
    },
    {
      question: "Gas klorin dapat diproduksi melalui elektrolisis larutan NaCl. Pada anoda terjadi reaksi oksidasi ion Cl-. Mengapa gas klorin dihasilkan, bukan oksigen dari air?",
      options: [
        "Ion Cl- lebih mudah direduksi dibandingkan air",
        "Ion Cl- memiliki potensial reduksi lebih tinggi dibandingkan air",
        "Ion Cl- lebih mudah dioksidasi dibandingkan air",
        "Ion Cl- memiliki afinitas elektron lebih rendah dibandingkan air"
      ],
      correctOption: "Ion Cl- lebih mudah dioksidasi dibandingkan air",
      explanation: "Gas klorin dihasilkan karena ion Cl- lebih mudah dioksidasi menjadi gas Cl2 dibandingkan air yang menghasilkan oksigen."
    },
    {
      question: "Senyawa mangan, seperti KMnO4, sering digunakan sebagai oksidator dalam reaksi kimia. Dalam lingkungan asam, MnO4- direduksi menjadi ion Mn2+. Apa yang terjadi pada bilangan oksidasi mangan selama reaksi ini?",
      options: [
        "Bilangan oksidasi mangan bertambah dari +7 ke +2",
        "Bilangan oksidasi mangan berkurang dari +7 ke +2",
        "Bilangan oksidasi mangan tetap +7",
        "Bilangan oksidasi mangan bertambah dari +2 ke +7"
      ],
      correctOption: "Bilangan oksidasi mangan berkurang dari +7 ke +2",
      explanation: "Dalam reaksi tersebut, bilangan oksidasi mangan pada MnO4- berkurang dari +7 menjadi +2 karena mengalami reduksi."
    },
    {
      question: "Dalam proses pembuatan baja, ditambahkan karbon pada besi cair. Mengapa penambahan karbon diperlukan dalam proses ini?",
      options: [
        "Untuk meningkatkan titik leleh besi",
        "Untuk mengurangi kerapuhan besi",
        "Untuk meningkatkan kekerasan dan kekuatan baja",
        "Untuk mencegah korosi pada baja"
      ],
      correctOption: "Untuk meningkatkan kekerasan dan kekuatan baja",
      explanation: "Karbon ditambahkan untuk meningkatkan kekerasan dan kekuatan baja dengan membentuk struktur mikrokristalin yang lebih kuat."
    },
    {
      question: "Air keras (hard water) mengandung ion Ca2+ dan Mg2+ yang sulit dihilangkan dengan sabun biasa. Apa prinsip kerja zeolit dalam menghilangkan ion-ion tersebut?",
      options: [
        "Zeolit mengikat ion-ion tersebut secara kovalen",
        "Zeolit bertindak sebagai katalis dalam reaksi pengendapan",
        "Zeolit menggantikan ion Ca2+ dan Mg2+ dengan ion Na+ melalui pertukaran ion",
        "Zeolit melarutkan ion-ion tersebut melalui reaksi asam-basa"
      ],
      correctOption: "Zeolit menggantikan ion Ca2+ dan Mg2+ dengan ion Na+ melalui pertukaran ion",
      explanation: "Zeolit bekerja melalui mekanisme pertukaran ion, di mana ion Ca2+ dan Mg2+ digantikan oleh ion Na+."
    },
    {
      question: "Salah satu sifat kimia logam alkali adalah reaktivitasnya yang tinggi dengan air. Mengapa logam alkali semakin reaktif ke bawah golongan?",
      options: [
        "Energi ionisasi meningkat ke bawah golongan",
        "Jari-jari atom bertambah besar, sehingga lebih mudah melepaskan elektron",
        "Elektron valensi lebih stabil ke bawah golongan",
        "Logam alkali ke bawah golongan memiliki titik leleh yang lebih tinggi"
      ],
      correctOption: "Jari-jari atom bertambah besar, sehingga lebih mudah melepaskan elektron",
      explanation: "Reaktivitas logam alkali meningkat ke bawah golongan karena jari-jari atom bertambah besar, sehingga gaya tarik inti terhadap elektron valensi melemah."
    },
    {
      question: "Unsur logam transisi sering digunakan sebagai katalis dalam reaksi kimia. Apa yang membuat unsur logam transisi efektif sebagai katalis?",
      options: [
        "Logam transisi memiliki elektron valensi yang selalu penuh",
        "Logam transisi dapat membentuk senyawa kovalen polar",
        "Logam transisi memiliki orbital d kosong yang dapat menampung elektron reaktan",
        "Logam transisi bersifat netral dalam semua reaksi kimia"
      ],
      correctOption: "Logam transisi memiliki orbital d kosong yang dapat menampung elektron reaktan",
      explanation: "Unsur logam transisi efektif sebagai katalis karena memiliki orbital d kosong yang dapat digunakan untuk menstabilkan keadaan transisi reaktan."
    },
    {
      question: "Senyawa seperti K2Cr2O7 sering digunakan dalam titrasi redoks. Mengapa K2Cr2O7 lebih disukai dibandingkan oksidator lain seperti KMnO4 dalam titrasi tertentu?",
      options: [
        "K2Cr2O7 lebih stabil dan tidak mudah terurai dibandingkan KMnO4",
        "K2Cr2O7 lebih mudah larut dalam air dibandingkan KMnO4",
        "K2Cr2O7 menghasilkan warna larutan yang lebih gelap",
        "K2Cr2O7 memiliki massa molar yang lebih rendah"
      ],
      correctOption: "K2Cr2O7 lebih stabil dan tidak mudah terurai dibandingkan KMnO4",
      explanation: "K2Cr2O7 lebih stabil dibandingkan KMnO4, sehingga lebih mudah digunakan dalam titrasi dengan hasil yang akurat."
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

export default SlKma12b3;