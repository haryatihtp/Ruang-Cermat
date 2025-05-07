import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const soal = [
    {
      pertanyaan: "Jika y = x^2 - 4x + 3, tentukan nilai y saat x = 2.",
      opsi: ["-1", "0", "1", "2"],
      jawaban: "-1",
      penjelasan: "Substitusi x = 2 ke y = x^2 - 4x + 3 menghasilkan y = 4 - 8 + 3 = -1."
    },
    {
      pertanyaan: "Tentukan titik puncak dari y = x^2 - 6x + 5.",
      opsi: ["(3, -4)", "(3, -5)", "(2, 5)", "(2, -4)"],
      jawaban: "(3, -4)",
      penjelasan: "Gunakan x = -b/2a untuk x = 3, substitusi ke fungsi menghasilkan y = -4."
    },
    {
      pertanyaan: "Apakah bentuk grafik dari fungsi kuadrat y = -x^2 + 4x - 3?",
      opsi: ["Parabola terbuka ke atas", "Parabola terbuka ke bawah", "Garis lurus", "Lingkaran"],
      jawaban: "Parabola terbuka ke bawah",
      penjelasan: "Karena koefisien x^2 negatif, parabola terbuka ke bawah."
    },
    {
      pertanyaan: "Jika y = x^2 - 8x + 16, maka nilai diskriminannya adalah?",
      opsi: ["16", "0", "-16", "64"],
      jawaban: "0",
      penjelasan: "Diskriminan Δ = b^2 - 4ac = (-8)^2 - 4(1)(16) = 0."
    },
    {
      pertanyaan: "Jika y = x^2 - 2x - 8, tentukan akar-akarnya.",
      opsi: ["-4 dan 2", "4 dan -2", "2 dan -8", "-2 dan 4"],
      jawaban: "-2 dan 4",
      penjelasan: "Faktorkan (x + 2)(x - 4) = 0 sehingga akar-akarnya adalah -2 dan 4."
    },
    {
      pertanyaan: "Untuk fungsi y = 2x^2 - 12x + 10, tentukan nilai minimum.",
      opsi: ["-8", "0", "-2", "2"],
      jawaban: "-8",
      penjelasan: "Nilai minimum terjadi di x = -b/2a = 3, substitusi menghasilkan y = -8."
    },
    {
      pertanyaan: "Jika y = -x^2 + 6x - 9, maka sumbu simetri fungsi tersebut adalah?",
      opsi: ["x = 3", "x = 2", "x = 1", "x = 6"],
      jawaban: "x = 3",
      penjelasan: "Sumbu simetri adalah x = -b/2a = 3."
    },
    {
      pertanyaan: "Pada grafik y = x^2 + 4x + 3, tentukan titik potong dengan sumbu y.",
      opsi: ["(0, 3)", "(0, 4)", "(0, -3)", "(3, 0)"],
      jawaban: "(0, 3)",
      penjelasan: "Titik potong dengan sumbu y terjadi saat x = 0, sehingga y = 3."
    },
    {
      pertanyaan: "Jika fungsi y = ax^2 + bx + c memiliki nilai a > 0, maka grafiknya adalah?",
      opsi: ["Parabola terbuka ke atas", "Parabola terbuka ke bawah", "Garis lurus", "Tidak diketahui"],
      jawaban: "Parabola terbuka ke atas",
      penjelasan: "Jika a > 0, parabola terbuka ke atas."
    },
    {
      pertanyaan: "Jika fungsi kuadrat memiliki dua akar nyata berbeda, maka nilai diskriminannya adalah?",
      opsi: ["Positif", "Negatif", "Nol", "Tidak diketahui"],
      jawaban: "Positif",
      penjelasan: "Diskriminan positif menunjukkan dua akar nyata berbeda."
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
         <h1 className="latihan-soal1-title">Latihan Soal: Fungsi Kuadrat</h1>
 
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

export default LatihanSoal5;