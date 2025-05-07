import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal7 = () => {
  const soal = [
    {
      pertanyaan: "Jika sin(30°) = x, maka nilai x adalah?",
      opsi: ["1/2", "√3/2", "1", "0"],
      jawaban: "1/2",
      penjelasan: "Nilai sin(30°) dalam trigonometri adalah 1/2."
    },
    {
      pertanyaan: "Berapakah nilai cos(60°)?",
      opsi: ["1/2", "√3/2", "1", "0"],
      jawaban: "1/2",
      penjelasan: "Nilai cos(60°) dalam trigonometri adalah 1/2."
    },
    {
      pertanyaan: "Tentukan nilai tan(45°).",
      opsi: ["0", "1", "√2", "∞"],
      jawaban: "1",
      penjelasan: "Nilai tan(45°) dalam trigonometri adalah 1."
    },
    {
      pertanyaan: "Jika cos(x) = 0, pada kuadran berapa x berada?",
      opsi: ["I dan II", "II dan III", "III dan IV", "I dan IV"],
      jawaban: "II dan III",
      penjelasan: "Cosinus bernilai 0 di sudut 90° dan 270°, yang terletak di kuadran II dan III."
    },
    {
      pertanyaan: "Berapakah nilai sin(90°)?",
      opsi: ["0", "1", "1/2", "√3/2"],
      jawaban: "1",
      penjelasan: "Nilai sin(90°) adalah 1."
    },
    {
      pertanyaan: "Jika tan(x) tidak terdefinisi, maka x adalah?",
      opsi: ["0°", "90°", "45°", "180°"],
      jawaban: "90°",
      penjelasan: "Tan(x) tidak terdefinisi ketika x = 90° atau kelipatan ganjil dari 90°."
    },
    {
      pertanyaan: "Tentukan nilai cot(30°).",
      opsi: ["√3", "1/√3", "1", "0"],
      jawaban: "√3",
      penjelasan: "Nilai cot(30°) adalah kebalikan dari tan(30°), yaitu √3."
    },
    {
      pertanyaan: "Berapakah nilai sec(60°)?",
      opsi: ["2", "2/√3", "√3", "1"],
      jawaban: "2",
      penjelasan: "Nilai sec(60°) adalah kebalikan dari cos(60°), yaitu 2."
    },
    {
      pertanyaan: "Jika sin(x) = 1, maka nilai x adalah?",
      opsi: ["0°", "90°", "180°", "270°"],
      jawaban: "90°",
      penjelasan: "Sinus bernilai 1 ketika x = 90°."
    },
    {
      pertanyaan: "Pada segitiga siku-siku dengan sudut 30°, panjang sisi depan adalah 3, tentukan panjang sisi miring.",
      opsi: ["3", "6", "4.5", "√3"],
      jawaban: "6",
      penjelasan: "Dalam segitiga siku-siku dengan sudut 30°, sisi miring adalah dua kali sisi depan."
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
          <h1 className="latihan-soal1-title">Latihan Soal: Trigonometri</h1>
  
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

export default LatihanSoal7;