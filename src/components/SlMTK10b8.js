import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal8 = () => {
  const soal = [
    {
      pertanyaan: "Dalam satu kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil satu bola secara acak, berapa peluang mendapatkan bola merah?",
      opsi: ["5/8", "3/8", "1/2", "1/4"],
      jawaban: "5/8",
      penjelasan: "Jumlah total bola adalah 5 + 3 = 8. Peluang bola merah adalah 5/8."
    },
    {
      pertanyaan: "Sebuah dadu dilempar sekali. Berapa peluang mendapatkan angka genap?",
      opsi: ["1/6", "1/3", "1/2", "2/3"],
      jawaban: "1/2",
      penjelasan: "Angka genap pada dadu adalah 2, 4, dan 6. Jadi peluangnya adalah 3/6 = 1/2."
    },
    {
      pertanyaan: "Sebuah koin dilempar dua kali. Berapa peluang mendapatkan dua gambar?",
      opsi: ["1/4", "1/2", "1/8", "3/4"],
      jawaban: "1/4",
      penjelasan: "Peluang gambar pada satu lemparan adalah 1/2. Untuk dua lemparan: (1/2) * (1/2) = 1/4."
    },
    {
      pertanyaan: "Dalam satu kantong terdapat 4 bola merah, 2 bola biru, dan 4 bola hijau. Jika diambil satu bola, berapa peluang mendapatkan bola biru?",
      opsi: ["1/5", "1/6", "1/4", "1/3"],
      jawaban: "1/5",
      penjelasan: "Jumlah total bola adalah 4 + 2 + 4 = 10. Peluang bola biru adalah 2/10 = 1/5."
    },
    {
      pertanyaan: "Sebuah dadu dilempar sekali. Berapa peluang mendapatkan angka lebih dari 4?",
      opsi: ["1/3", "1/2", "1/6", "2/3"],
      jawaban: "1/3",
      penjelasan: "Angka lebih dari 4 adalah 5 dan 6. Jadi peluangnya adalah 2/6 = 1/3."
    },
    {
      pertanyaan: "Dalam satu kotak terdapat 3 bola merah dan 7 bola biru. Jika diambil satu bola, berapa peluang mendapatkan bola bukan biru?",
      opsi: ["3/10", "7/10", "1/2", "1/3"],
      jawaban: "3/10",
      penjelasan: "Bola bukan biru adalah bola merah. Peluangnya adalah 3/10."
    },
    {
      pertanyaan: "Sebuah koin dilempar tiga kali. Berapa peluang mendapatkan tepat dua sisi angka?",
      opsi: ["1/8", "3/8", "3/4", "1/2"],
      jawaban: "3/8",
      penjelasan: "Ada \u00a03 kemungkinan untuk mendapatkan dua sisi angka: (A,A,G), (A,G,A), (G,A,A). Peluang total adalah 3/8."
    },
    {
      pertanyaan: "Dua dadu dilempar bersamaan. Berapa peluang mendapatkan jumlah angka 7?",
      opsi: ["1/6", "1/3", "1/12", "1/36"],
      jawaban: "1/6",
      penjelasan: "Pasangan angka yang jumlahnya 7 adalah (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total pasangan adalah 6 dari 36, sehingga peluangnya 1/6."
    },
    {
      pertanyaan: "Sebuah kotak berisi 4 kelereng merah, 5 kelereng biru, dan 1 kelereng hijau. Jika diambil satu kelereng, berapa peluang mendapatkan kelereng hijau?",
      opsi: ["1/2", "1/10", "1/5", "1/6"],
      jawaban: "1/10",
      penjelasan: "Jumlah total kelereng adalah 4 + 5 + 1 = 10. Peluang kelereng hijau adalah 1/10."
    },
    {
      pertanyaan: "Berapa peluang mendapatkan kartu as dari satu set kartu remi?",
      opsi: ["1/52", "1/13", "4/52", "1/26"],
      jawaban: "1/13",
      penjelasan: "Dalam satu set kartu remi terdapat 4 kartu as dari total 52 kartu. Peluangnya adalah 4/52 = 1/13."
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
          <h1 className="latihan-soal1-title">Latihan Soal: Peluang Dasar</h1>
  
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

export default LatihanSoal8;