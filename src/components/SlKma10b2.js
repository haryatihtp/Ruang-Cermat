import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Serbuk magnesium yang massanya 3 gram tepat habis bereaksi dengan sejumlah serbuk belerang menghasilkan senyawa magnesium sulfida yang massanya 7 gram. Massa serbuk belerang yang bereaksi adalah?",
      options: ["10 gram", "4 gram", "7 gram", "3 gram"],
      correctOption: "4 gram",
      explanation: "Soal tersebut didasarkan pada Hukum Kekekalan Massa (Hukum Lavoisier). Hukum kekekalan massa menyatakan bahwa: massa total zat-zat sebelum reaksi akan selalu sama dengan massa total zat-zat hasil reaksi.\n\nmassa serbuk magnesium + massa serbuk belerang = massa magnesium sulfida\n\n3 gram + massa serbuk belerang = 7 gram\n\nmassa serbuk belerang = 7 gram – 3 gram = 4 gram.",
    },
    {
      question: "Kristal iodin yang massanya 10 gram direaksikan dengan 10 gram gas hidrogen. Setelah bereaksi, ternyata didapatkan 2,5 gram gas hidrogen iodida. Massa zat yang tidak bereaksi adalah?",
      options: ["(10 – 2,5) gram.", "(10 + 2,5) gram.", "(10 + 10) – 2,5 gram.", "(10 – 2,5) – 10 gram"],
      correctOption: "(10 + 2,5) gram.",
      explanation:
        "massa kristal iodin + massa gas hidrogen = massa gas hidrogen iodida\n\n10 gram + 10 gram = x + 2,5 gram\n\n x = (10 + 10) – 2,5 gram.",
    },
    {
      question: "Di dalam senyawa CaS, perbandingan massa Ca : S = 5 : 4. Jika 10 gram kalsium direaksikan dengan 9 gram serbuk belerang, maka massa CaS yang dihasilkan sebanyak?",
      options: ["9 gram", "9,5 gram", "10 gram", "19 gram"],
      correctOption: "10 gram",
      explanation:
        "Diketahui:\n\nperbandingan massa Ca : S = 5 : 4\nmassa Ca = 10 gram\nmassa S= 9 gram\n\nDitanyakan: massa CaS = …?\n\nJawaban:\n\nKarena perbandingan massa Ca : S = 5 : 4, maka massa yang bereaksi Ca : S = 10 : 8. Sehingga:\n\nmassa Ca : massa S = massa CaS\n\n10 gram : 8 gram = 18 gram.",
    },
    {
      question: "Gas belerang dioksida direaksikan dengan gas oksigen dengan persamaan reaksi: \nSO2(g) + O2(g) → SO3(g)\n\nBila volume diukur pada suhu dan tekanan yang sama, maka perbandingan volume gas SO2 : O2 : SO3 adalah:",
      options: ["1:1:1", "2:1:1", "1:2:1", "3:2:1"],
      correctOption: "2:1:1",
      explanation:
        "Hukum perbandingan volume atau hukum Gay-Lussac menyatakan bahwa gas-gas yang bereaksi dan volume gas-gas hasil reaksi bila diukur pada suhu dan tekanan sama, berbanding sebagai bilangan bulat dan sederhana.\n\nReaksi setara:\n\n2SO2(g) + O2(g) → 2SO3(g)\n\nJadi, perbandingan volume gas SO2 : O2 : SO3 = 2 : 1 : 2.",
    },
    {
      question: "Jika di dalam senyawa FeS perbandingan massa Fe : S = 7 : 4, maka untuk menghasilkan 4,4 gram senyawa FeS diperlukan Fe dan S berturut-turut sebanyak:",
      options: ["4,0 gram dan 0,4 gram", "2,8 gram dan 1,6 gram", "3,7 gram dan 0,7 gram", "3,0 gram dan 1,4 gram"],
      correctOption: "3,7 gram dan 0,7 gram",
      explanation:
        "Diketahui:\n\nperbandingan massa Fe : S = 7 : 4\nJumlah perbandingan = 7 + 4 = 11\nmassa FeS = 4,4 gram\n\nDitanyakan: massa Fe dan massa S = …?\n\nJawaban:\n\nMassa Fe yang diperlukan = (7/11) x 4,4 gram= 2,8 gram\nmassa S yang diperlukan = (4/11) x 4,4 gram = 1,6 gram",
    },
    {
      question: "Gas propane (C3H8) dibakar sempurna dengan reaksi:\nC3H8(g) + O2(g) → CO2(g) + H2O(g)\n\nUntuk membakar sempurna setiap liter gas propane, dibutuhkan gas oksigen sebanyak ….",
      options: ["1,0 liter", "3,0 liter", "3,5 liter", "4,0 liter","5,0 liter"],
      correctOption: "5,0 liter",
      explanation:
        "Reaksi setara:\n\nC3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g)\n\nPerbandingan volume:\nC3H8 : O2 : CO2 : H2O= 1 : 5 : 3 : 4\n\nUntuk membakar sempurna setiap liter gas propane, maka\n\nvolume O2 = (5/1) x 1 liter = 5 liter.",
    },
    {
      question: "Setiap 1 liter gas nitrogen tepat habis bereaksi dengan 2,5 liter gas oksigen membentuk 1 liter gas oksida nitrogen. Bila volume diukur pada suhu dan tekanan yang sama, maka rumus molekul oksida nitrogen tersebut adalah ….",
      options: ["N2O", "NO", "N2O3", "NO2","N2O5"],
      correctOption: "N2O5",
      explanation:
        "Persamaan reaksi:\n\n2N2 + 5O2 → 2NxOy\n\nJumlah atom N sebelum reaksi = Jumlah atom N sesudah reaksi\n\n4 = 2x\n\nx = 2\n\nJumlah atom O sebelum reaksi = Jumlah atom O sesudah reaksi\n\n10 = 2y\n\ny = 5\n\nJadi, rumus molekul oksida nitrogen tersebut adalah N2O5.",
    },
    {
      question: "Diketahui unsur H dalam H2O sebanyak 4 gram, sedangkan perbandingan unsur H dan O dalam suatu senyawa adalah 1 : 8. Massa unsur O dalam senyawa tersebut adalah …. Gram.",
      options: ["4", "8", "10", "32","4O"],
      correctOption: "32",
      explanation:
        "Diketahui massa hidrogen yang membentuk senyawa sebanyak 4 gram, maka oksigen yang diperlukan yaitu:\n\nmassa oksigen = (8/1) x 4 gram = 32 gram",
    },
    {
      question: "Pembakaran sempurna gas ammonia memerlukan gas oksigen dengan persamaan reaksi:\nNH3(g) + O2(g) → NO2(g) + H2O(g)\n\nDengan menganggap bahwa kadar oksigen di udara 20%, maka volume udara yang diperlukan untuk membakar 4 liter gas ammonia adalah …liter",
      options: ["5", "7", "10", "20","35"],
      correctOption: "35",
      explanation:
        "Persamaan reaksi setara:\n\n4NH3(g) + 7O2(g) → 4NO2(g) + 6H2O(g)\n\nVolume gas oksigen = (7/4) x 4 liter = 7 liter\n\nVolume oksigen = 20% volume udara\n\n7 liter = 0,2 volume udara\n\nvolume udara = 7/0,2 = 35 liter.",
    },
    {
      question: "Di antara senyawa berikut yang mempunyai Mr sama dengan MgSiO3 adalah …. (Ar Mg = 24; Si = 28; O = 16)",
      options: ["Al203", "CaCO3", "CaSO3", "K2CO3","NaNO3"],
      correctOption: "CaCO3",
      explanation:
        "Mr MgSiO3 = Ar Mg + Ar Si + 3Ar O\n\nMr MgSiO3 = 24 + 28 + (3 x 16) = 100\n\nMr Al2O3 = (2 x 27) + (3 x 16) = 102\n\nMr CaCO3 = 40 + 12 + (3 x 16) = 100\n\nMr CaSO3 =  40 + 32 + (3 x 16) = 120\n\nMr K2CO3 = (2 x 39) + 12 + (3 x 16) = 138\n\(2 x 39) + 12 + (3 x 16) = 138",
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

export default LatihanSoal3;
