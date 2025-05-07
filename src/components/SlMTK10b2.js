import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal2 = () => {
  const soal = [
    { pertanyaan: "Berapa jumlah deret aritmatika dari 1 hingga 10?", opsi: ["55", "50", "45", "60"], jawaban: "55", penjelasan: "Jumlah deret aritmatika dihitung dengan rumus S = n/2 (a + l), di mana n=10, a=1, l=10." },
    { pertanyaan: "Berapakah suku ke-10 dari barisan 2, 4, 6, 8, ...?", opsi: ["18", "20", "22", "24"], jawaban: "20", penjelasan: "Suku ke-n dihitung dengan rumus Un = a + (n-1)d, di mana a=2, d=2, n=10." },
    { pertanyaan: "Berapakah jumlah 5 suku pertama dari barisan 3, 6, 9, 12, ...?", opsi: ["45", "48", "50", "42"], jawaban: "45", penjelasan: "Jumlah dihitung dengan S = n/2 (2a + (n-1)d), di mana a=3, d=3, n=5." },
    { pertanyaan: "Jika suku ke-1 adalah 5 dan suku ke-10 adalah 50, berapa beda (d)?", opsi: ["5", "6", "7", "8"], jawaban: "5", penjelasan: "Beda dihitung dengan rumus d = (Un - a) / (n-1), di mana Un=50, a=5, n=10." },
    { pertanyaan: "Berapakah jumlah deret geometri 1 + 2 + 4 + 8 + 16?", opsi: ["31", "32", "30", "33"], jawaban: "31", penjelasan: "Jumlah deret geometri dihitung dengan S = a(r^n - 1) / (r-1), di mana a=1, r=2, n=5." },
    { pertanyaan: "Suku ke-5 dari deret geometri 3, 9, 27, ... adalah?", opsi: ["81", "243", "729", "2187"], jawaban: "243", penjelasan: "Suku ke-n dihitung dengan Un = a * r^(n-1), di mana a=3, r=3, n=5." },
    { pertanyaan: "Berapakah suku pertama dari barisan jika Un = 2n - 1 dan n = 1?", opsi: ["1", "2", "3", "4"], jawaban: "1", penjelasan: "Suku pertama adalah U1 = 2(1) - 1 = 1." },
    { pertanyaan: "Barisan 5, 10, 20, ... adalah barisan?", opsi: ["Aritmatika", "Geometri", "Campuran", "Tak terdefinisi"], jawaban: "Geometri", penjelasan: "Karena setiap suku dibentuk dengan mengalikan rasio tetap, ini adalah barisan geometri." },
    { pertanyaan: "Jika S10 = 55 untuk barisan 1, 2, 3, ..., maka nilai suku terakhir adalah?", opsi: ["10", "11", "12", "13"], jawaban: "10", penjelasan: "Suku terakhir adalah l = 2S/n - a, di mana S=55, n=10, a=1." },
    { pertanyaan: "Berapakah jumlah dari suku pertama hingga suku ke-6 dari deret 1, 4, 9, 16, ...?", opsi: ["91", "96", "86", "81"], jawaban: "91", penjelasan: "Jumlah dihitung dengan menjumlahkan kuadrat bilangan 1 hingga 6." }
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
          <h1 className="latihan-soal1-title">Latihan Soal: Barisan dan Deret</h1>
  
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
  
export default LatihanSoal2;