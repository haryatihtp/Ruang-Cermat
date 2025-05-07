import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal4 = () => {
  const soal = [
    {
      pertanyaan: "Jika persamaan kuadrat x^2 - 4x + 4 = 0, berapakah akar-akarnya?",
      opsi: ["2 dan 2", "-2 dan -2", "2 dan -2", "4 dan -4"],
      jawaban: "2 dan 2",
      penjelasan: "Persamaan kuadrat ini dapat difaktorkan menjadi (x-2)^2 = 0, sehingga akar-akarnya adalah 2 dan 2."
    },
    {
      pertanyaan: "Apa nilai diskriminan dari persamaan kuadrat x^2 + 2x + 1 = 0?",
      opsi: ["0", "1", "-1", "4"],
      jawaban: "0",
      penjelasan: "Diskriminan dihitung dengan b^2 - 4ac. Dalam hal ini, 2^2 - 4(1)(1) = 0."
    },
    {
      pertanyaan: "Jika persamaan kuadrat memiliki akar-akar 3 dan -2, apa bentuk persamaannya?",
      opsi: ["x^2 - x - 6 = 0", "x^2 + x - 6 = 0", "x^2 - x + 6 = 0", "x^2 + x + 6 = 0"],
      jawaban: "x^2 - x - 6 = 0",
      penjelasan: "Persamaan kuadrat dapat dibentuk dari (x-3)(x+2) = 0, yang menjadi x^2 - x - 6 = 0."
    },
    {
      pertanyaan: "Tentukan nilai puncak dari y = x^2 - 6x + 8.",
      opsi: ["(3, -1)", "(3, 0)", "(2, 8)", "(4, -1)"],
      jawaban: "(3, -1)",
      penjelasan: "Titik puncak dihitung dengan x = -b/2a dan y dihitung dengan substitusi nilai x ke persamaan."
    },
    {
      pertanyaan: "Jika y = x^2 + 4x + 4, maka grafiknya memiliki bentuk apa?",
      opsi: ["Parabola membuka ke atas", "Parabola membuka ke bawah", "Garis lurus", "Lingkaran"],
      jawaban: "Parabola membuka ke atas",
      penjelasan: "Karena koefisien x^2 positif, grafik berbentuk parabola membuka ke atas."
    },
    {
      pertanyaan: "Berapakah nilai x yang memenuhi persamaan kuadrat x^2 - 5x + 6 = 0?",
      opsi: ["2 dan 3", "-2 dan -3", "2 dan -3", "-2 dan 3"],
      jawaban: "2 dan 3",
      penjelasan: "Persamaan kuadrat ini dapat difaktorkan menjadi (x-2)(x-3) = 0, sehingga nilai x adalah 2 dan 3."
    },
    {
      pertanyaan: "Apa sifat akar-akar dari persamaan kuadrat x^2 - 4x + 5 = 0?",
      opsi: ["Akar nyata dan berbeda", "Akar nyata dan sama", "Akar tidak nyata", "Akar nol"],
      jawaban: "Akar tidak nyata",
      penjelasan: "Diskriminan dari persamaan ini adalah negatif (16 - 20 = -4), sehingga akar-akarnya tidak nyata."
    },
    {
      pertanyaan: "Jika x^2 + px + 12 = 0 memiliki akar-akar -3 dan -4, berapa nilai p?",
      opsi: ["7", "-7", "12", "-12"],
      jawaban: "7",
      penjelasan: "Jumlah akar adalah -p, sehingga -(-3 + -4) = 7."
    },
    {
      pertanyaan: "Berapakah nilai maksimum dari y = -x^2 + 4x - 3?",
      opsi: ["1", "3", "5", "7"],
      jawaban: "1",
      penjelasan: "Titik maksimum dihitung dari x = -b/2a dan y dihitung dengan substitusi nilai x ke persamaan."
    },
    {
      pertanyaan: "Jika y = x^2 - 4x + c memiliki satu akar nyata, berapa nilai c?",
      opsi: ["4", "5", "6", "3"],
      jawaban: "4",
      penjelasan: "Persamaan memiliki satu akar nyata ketika diskriminannya nol. Dengan b^2 - 4ac = 0, nilai c dapat dihitung."
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
         <h1 className="latihan-soal1-title">Latihan Soal: Persamaan Kuadrat</h1>
 
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

export default LatihanSoal4;