import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab2 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan modulus elastisitas (Young's modulus)?",
        options: [
            "Perbandingan antara tegangan dan regangan",
            "Gaya yang diperlukan untuk memecahkan bahan",
            "Batas maksimum deformasi bahan",
            "Energi yang tersimpan dalam bahan saat diregangkan"
        ],
        answer: 0
    },
    {
        question: "Satuan modulus elastisitas dalam SI adalah?",
        options: [
            "Newton",
            "Pascal",
            "Joule",
            "Meter per detik"
        ],
        answer: 1
    },
    {
        question: "Hukum Hooke menyatakan hubungan antara?",
        options: [
            "Gaya dan perpindahan",
            "Tegangan dan regangan",
            "Gaya dan massa",
            "Energi dan deformasi"
        ],
        answer: 1
    },
    {
        question: "Tegangan dalam bahan dihitung sebagai?",
        options: [
            "Gaya per satuan luas",
            "Gaya per satuan volume",
            "Perubahan panjang per panjang awal",
            "Energi per satuan massa"
        ],
        answer: 0
    },
    {
        question: "Regangan adalah?",
        options: [
            "Perubahan panjang per panjang awal",
            "Gaya per satuan luas",
            "Energi per satuan volume",
            "Perubahan luas per luas awal"
        ],
        answer: 0
    },
    {
        question: "Bahan yang memiliki modulus elastisitas tinggi cenderung?",
        options: [
            "Lentur",
            "Kaku",
            "Mudah patah",
            "Elastis"
        ],
        answer: 1
    },
    {
        question: "Batas elastis adalah?",
        options: [
            "Gaya maksimum yang dapat diterima bahan tanpa berubah bentuk secara permanen",
            "Batas deformasi maksimum sebelum patah",
            "Panjang maksimum sebelum bahan putus",
            "Energi maksimum yang tersimpan dalam bahan"
        ],
        answer: 0
    },
    {
        question: "Jika gaya yang diberikan pada pegas bertambah dua kali lipat, maka regangannya akan?",
        options: [
            "Tetap sama",
            "Bertambah dua kali lipat",
            "Berkurang setengahnya",
            "Bertambah empat kali lipat"
        ],
        answer: 1
    },
    {
        question: "Apa yang terjadi jika bahan bekerja di luar batas elastisnya?",
        options: [
            "Bahan akan kembali ke bentuk semula",
            "Bahan akan patah",
            "Bahan mengalami deformasi permanen",
            "Bahan menghasilkan energi"
        ],
        answer: 2
    },
    {
        question: "Energi potensial elastis pada pegas dihitung menggunakan rumus?",
        options: [
            "1/2 kx²",
            "kx",
            "1/2 mv²",
            "Fx"
        ],
        answer: 0
    },
    {
        question: "Bahan dengan sifat elastis yang baik cenderung?",
        options: [
            "Menyerap lebih banyak energi sebelum patah",
            "Mudah retak",
            "Memiliki modulus elastisitas rendah",
            "Tidak dapat kembali ke bentuk semula setelah diregangkan"
        ],
        answer: 0
    },
    {
        question: "Modulus elastisitas bergantung pada?",
        options: [
            "Jenis bahan",
            "Volume bahan",
            "Panjang bahan",
            "Bentuk bahan"
        ],
        answer: 0
    },
    {
        question: "Jika sebuah batang logam mengalami regangan 0,01 dengan tegangan 200 MPa, modulus elastisitasnya adalah?",
        options: [
            "20 GPa",
            "200 MPa",
            "2 GPa",
            "20 MPa"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan kekuatan tarik bahan?",
        options: [
            "Tegangan maksimum yang dapat diterima bahan sebelum patah",
            "Energi maksimum yang diserap bahan sebelum patah",
            "Regangan maksimum bahan",
            "Tegangan pada batas elastis bahan"
        ],
        answer: 0
    },
    {
        question: "Jika panjang awal sebuah batang adalah 2 m dan perubahan panjangnya 0,02 m, maka regangannya adalah?",
        options: [
            "1%",
            "2%",
            "0,01",
            "0,02"
        ],
        answer: 0
    },
    {
        question: "Apa yang terjadi pada modulus elastisitas jika suhu bahan meningkat?",
        options: [
            "Meningkat",
            "Menurun",
            "Tetap sama",
            "Berubah acak"
        ],
        answer: 1
    },
    {
        question: "Dalam hukum Hooke, konstanta pegas \(k\) diukur dalam satuan?",
        options: [
            "Newton",
            "Newton per meter",
            "Pascal",
            "Joule"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan deformasi plastis?",
        options: [
            "Perubahan bentuk yang bersifat sementara",
            "Perubahan bentuk yang bersifat permanen",
            "Peningkatan panjang akibat regangan",
            "Pemulihan bentuk setelah tegangan dilepas"
        ],
        answer: 1
    },
    {
        question: "Sebuah pegas dengan konstanta \(k = 100 \, \mathrm{N/m}\) diregangkan sejauh 0,1 m. Energi potensial elastisnya adalah?",
        options: [
            "0,5 J",
            "1 J",
            "2 J",
            "5 J"
        ],
        answer: 0
    },
    {
        question: "Sifat bahan yang mampu menahan tegangan tarik tanpa patah disebut?",
        options: [
            "Elastisitas",
            "Duktalitas",
            "Kekuatan tarik",
            "Kerapatan"
        ],
        answer: 2
    }
];


  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Bab 2: Elastisitas Bahan</h1>

      {showResult ? (
        <div className="result-container">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>{score >= 15 ? "Luar biasa! Anda memahami materi dengan baik." : "Tetap semangat! Pelajari lagi materi ini untuk memperkuat pemahaman Anda."}</p>
          <button onClick={resetQuiz}>Ulangi Kuis</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                className="btn-option" 
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <p>Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizBab2;