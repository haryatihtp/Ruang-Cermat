import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const soal = [
    {
      pertanyaan: "Jika 2x + y = 7 dan x - y = 1, maka nilai x adalah?",
      opsi: ["1", "2", "3", "4"],
      jawaban: "2",
      penjelasan: "Dengan metode substitusi atau eliminasi, x = 2."
    },
    {
      pertanyaan: "Berapakah nilai y untuk x = 3 dalam persamaan y = 2x - 5?",
      opsi: ["1", "3", "5", "-1"],
      jawaban: "1",
      penjelasan: "Substitusi x = 3 ke dalam persamaan, y = 2(3) - 5 = 1."
    },
    {
      pertanyaan: "Selesaikan sistem persamaan: 3x + 2y = 12 dan x - y = 2. Nilai x adalah?",
      opsi: ["2", "3", "4", "5"],
      jawaban: "4",
      penjelasan: "Gunakan metode eliminasi atau substitusi, diperoleh x = 4."
    },
    {
      pertanyaan: "Berapakah hasil eliminasi dari 2x + 3y = 8 dan x - y = 1?",
      opsi: ["x = 3, y = 2", "x = 2, y = 1", "x = 1, y = 3", "x = 4, y = 2"],
      jawaban: "x = 2, y = 1",
      penjelasan: "Eliminasi menghasilkan solusi x = 2 dan y = 1."
    },
    {
      pertanyaan: "Jika x^2 + y^2 = 25 dan x - y = 3, maka nilai x dan y adalah?",
      opsi: ["x = 4, y = -1", "x = 3, y = 2", "x = 5, y = 0", "x = 2, y = -3"],
      jawaban: "x = 4, y = -1",
      penjelasan: "Dengan substitusi, diperoleh x = 4 dan y = -1."
    },
    {
      pertanyaan: "Tentukan akar-akar persamaan x^2 - 5x + 6 = 0.",
      opsi: ["2 dan 3", "1 dan 6", "3 dan 5", "1 dan 3"],
      jawaban: "2 dan 3",
      penjelasan: "Faktorkan (x-2)(x-3) = 0, sehingga akar-akarnya adalah 2 dan 3."
    },
    {
      pertanyaan: "Jika diskriminan persamaan kuadrat adalah nol, maka?",
      opsi: ["Tidak ada akar real", "Akar-akarnya berbeda", "Akar-akarnya sama", "Akar-akarnya irasional"],
      jawaban: "Akar-akarnya sama",
      penjelasan: "Diskriminan nol menunjukkan persamaan kuadrat memiliki akar kembar."
    },
    {
      pertanyaan: "Jika x^2 + 6x + 9 = 0, akar-akar persamaan tersebut adalah?",
      opsi: ["3 dan -3", "-3 dan -3", "3 dan 3", "-3 dan 0"],
      jawaban: "-3 dan -3",
      penjelasan: "Persamaan dapat difaktorkan menjadi (x+3)(x+3) = 0."
    },
    {
      pertanyaan: "Tentukan nilai maksimum dari y = -x^2 + 4x + 5.",
      opsi: ["5", "6", "9", "10"],
      jawaban: "9",
      penjelasan: "Puncak parabola adalah x = -b/2a = 2. Substitusi x = 2 ke y menghasilkan nilai maksimum 9."
    },
    {
      pertanyaan: "Jika y = x^2 - 4x + 3, tentukan titik puncaknya.",
      opsi: ["(2, -1)", "(1, 3)", "(3, -2)", "(2, 1)"],
      jawaban: "(2, -1)",
      penjelasan: "Puncak parabola x = -b/2a = 2. Substitusi x = 2 menghasilkan y = -1."
    }
  ];

   const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [result, setResult] = useState({});
  
    const handleAnswer = (index, opsi) => {
      const isCorrect = opsi === soal[index].jawaban;
      setSelectedAnswers({ ...selectedAnswers, [index]: opsi });
      setResult({ ...result, [index]: isCorrect ? 'Benar' : 'Salah' });
    };
  
    const handleNext = () => {
      if (currentIndex < soal.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Latihan Soal: Sistem Persamaan Linear dan Kuadrat</h1>
  
          <div className="latihan-soal1-question">
            <p>{currentIndex + 1}. {soal[currentIndex].pertanyaan}</p>
            <div className="latihan-soal1-answers">
              {soal[currentIndex].opsi.map((opsi, i) => (
                <button
                  key={i}
                  className={`latihan-soal1-answer-button ${selectedAnswers[currentIndex] === opsi ? 'latihan-soal1-selected-answer' : ''}`}
                  onClick={() => handleAnswer(currentIndex, opsi)}
                  disabled={selectedAnswers[currentIndex] !== undefined} // Disable after answering
                >
                  {opsi}
                </button>
              ))}
            </div>
            {selectedAnswers[currentIndex] && (
              <p className={`jawaban ${result[currentIndex] === 'Benar' ? 'correct' : 'incorrect'}`}>
                {result[currentIndex] === 'Benar' ? "Jawaban Benar" : "Jawaban Salah"}
              </p>
            )}
            <p className={`penjelasan ${selectedAnswers[currentIndex] ? "show-penjelasan" : ""}`}>
              <strong>Penjelasan:</strong> {soal[currentIndex].penjelasan}
            </p>
          </div>
  
          <div className="latihan-soal1-navigation-buttons">
            <button
              className="latihan-soal1-answer-button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Soal Sebelumnya
            </button>
            <button
              className="latihan-soal1-answer-button"
              onClick={handleNext}
              disabled={currentIndex === soal.length - 1}
            >
              Soal Selanjutnya
            </button>
          </div>
        </div>
      </div>
    );
  };

export default LatihanSoal3;