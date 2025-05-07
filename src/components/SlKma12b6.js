import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Bagaimana hubungan antara struktur tiga dimensi protein dan fungsinya dalam tubuh?",
      options: [
        "Struktur tiga dimensi protein tidak memengaruhi fungsinya",
        "Struktur tiga dimensi protein sangat memengaruhi fungsinya",
        "Struktur dua dimensi protein lebih penting daripada struktur tiga dimensi",
        "Fungsi protein tidak bergantung pada strukturnya"
      ],
      correctOption: "Struktur tiga dimensi protein sangat memengaruhi fungsinya",
      explanation: "Struktur tiga dimensi protein menentukan bagaimana protein berinteraksi dengan molekul lain, sehingga sangat penting untuk fungsi biologisnya.",
    },
    {
      question: "Apa yang terjadi ketika protein denaturasi?",
      options: [
        "Protein menjadi lebih aktif secara biologis",
        "Struktur tiga dimensi protein rusak, mengubah fungsinya",
        "Protein menjadi lebih stabil",
        "Tidak ada perubahan dalam aktivitas biologis protein"
      ],
      correctOption: "Struktur tiga dimensi protein rusak, mengubah fungsinya",
      explanation: "Denaturasi protein merusak struktur tiga dimensi, yang menyebabkan hilangnya fungsi biologisnya.",
    },
    {
      question: "Mengapa molekul DNA memiliki dua untai?",
      options: [
        "Untuk meningkatkan stabilitas dan memungkinkan replikasi",
        "Untuk mempermudah translasi",
        "Agar dapat mengurangi kesalahan dalam replikasi",
        "Untuk mempercepat transkripsi"
      ],
      correctOption: "Untuk meningkatkan stabilitas dan memungkinkan replikasi",
      explanation: "Molekul DNA memiliki dua untai untuk menciptakan struktur heliks ganda yang stabil, yang memungkinkan mekanisme replikasi dan perbaikan yang efisien.",
    },
    {
      question: "Bagaimana ikatan hidrogen berperan dalam pembentukan struktur tiga dimensi protein?",
      options: [
        "Ikatan hidrogen tidak berperan dalam pembentukan struktur protein",
        "Ikatan hidrogen membantu menjaga struktur sekunder protein seperti heliks alfa dan lembaran beta",
        "Ikatan hidrogen hanya berperan dalam stabilitas DNA",
        "Ikatan hidrogen mempercepat sintesis protein"
      ],
      correctOption: "Ikatan hidrogen membantu menjaga struktur sekunder protein seperti heliks alfa dan lembaran beta",
      explanation: "Ikatan hidrogen membantu menjaga struktur sekunder protein, seperti heliks alfa dan lembaran beta, yang penting untuk fungsinya.",
    },
    {
      question: "Apa yang dimaksud dengan polimerisasi dalam konteks makromolekul?",
      options: [
        "Proses pemecahan makromolekul menjadi unit-unit monomer",
        "Proses pembentukan makromolekul dari unit monomer",
        "Proses pemisahan molekul besar menjadi molekul kecil",
        "Proses pembentukan ikatan kovalen antar molekul kecil"
      ],
      correctOption: "Proses pembentukan makromolekul dari unit monomer",
      explanation: "Polimerisasi adalah proses penyusunan unit-unit monomer untuk membentuk makromolekul yang lebih besar, seperti protein, DNA, dan polimer sintetik.",
    },
    {
      question: "Mengapa enzim disebut sebagai katalis biologi?",
      options: [
        "Karena enzim mempercepat reaksi kimia tanpa terlibat langsung dalam reaksi tersebut",
        "Karena enzim hanya bekerja dalam kondisi suhu tinggi",
        "Karena enzim membutuhkan energi eksternal untuk bekerja",
        "Karena enzim dapat merubah produk reaksi menjadi molekul lain"
      ],
      correctOption: "Karena enzim mempercepat reaksi kimia tanpa terlibat langsung dalam reaksi tersebut",
      explanation: "Enzim mempercepat reaksi kimia dengan menurunkan energi aktivasi tanpa berubah dalam proses reaksi, bertindak sebagai katalis.",
    },
    {
      question: "Apa yang menyebabkan protein menjadi lebih stabil di lingkungan asam atau basa ekstrim?",
      options: [
        "Interaksi hidrofobik antara sisi samping asam amino",
        "Penyusunan ulang ikatan hidrogen",
        "Denaturasi protein",
        "Kehadiran garam"
      ],
      correctOption: "Interaksi hidrofobik antara sisi samping asam amino",
      explanation: "Lingkungan asam atau basa ekstrim dapat menyebabkan perubahan dalam interaksi antara sisi samping asam amino, yang dapat mengubah struktur dan stabilitas protein.",
    },
    {
      question: "Bagaimana cara kerja DNA ligase dalam replikasi DNA?",
      options: [
        "Menghentikan proses replikasi dengan memutuskan ikatan fosfodiester",
        "Menambahkan nukleotida ke rantai DNA",
        "Menghubungkan fragmen-fragmen Okazaki pada strand lagging",
        "Memperbaiki kesalahan dalam rantai DNA"
      ],
      correctOption: "Menghubungkan fragmen-fragmen Okazaki pada strand lagging",
      explanation: "DNA ligase menghubungkan fragmen-fragmen Okazaki pada strand lagging selama replikasi DNA, memastikan kontinuitas rantai DNA.",
    },
    {
      question: "Mengapa ikatan kovalen penting dalam struktur makromolekul seperti protein dan DNA?",
      options: [
        "Karena ikatan kovalen membantu stabilisasi interaksi non-kovalen",
        "Karena ikatan kovalen lebih lemah daripada ikatan hidrogen",
        "Karena ikatan kovalen memberikan kekuatan dan stabilitas struktural",
        "Karena ikatan kovalen mudah diputuskan dalam kondisi ekstrim"
      ],
      correctOption: "Karena ikatan kovalen memberikan kekuatan dan stabilitas struktural",
      explanation: "Ikatan kovalen memberikan kekuatan struktural yang diperlukan untuk stabilitas makromolekul seperti protein dan DNA.",
    },
    {
      question: "Bagaimana struktur heliks ganda pada DNA mendukung mekanisme pewarisan genetik?",
      options: [
        "Dengan memungkinkan replikasi yang akurat melalui pembentukan pasangan basa",
        "Dengan memungkinkan pembacaan urutan asam amino dalam protein",
        "Dengan menyusun gen menjadi sekuens yang lebih kompleks",
        "Dengan mencegah perubahan urutan basa dalam gen"
      ],
      correctOption: "Dengan memungkinkan replikasi yang akurat melalui pembentukan pasangan basa",
      explanation: "Struktur heliks ganda pada DNA memungkinkan pasangan basa untuk saling berinteraksi, sehingga memfasilitasi replikasi yang akurat selama pembelahan sel.",
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
