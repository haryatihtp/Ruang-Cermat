import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab5 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan suhu?",
        options: [
            "Jumlah panas yang dimiliki oleh suatu benda",
            "Derajat panas atau dinginnya suatu benda",
            "Energi total dari molekul dalam suatu benda",
            "Jumlah kalor yang dibutuhkan untuk memanaskan benda"
        ],
        answer: 1
    },
    {
        question: "Apa satuan suhu dalam Sistem Internasional (SI)?",
        options: [
            "Celsius (°C)",
            "Fahrenheit (°F)",
            "Kelvin (K)",
            "Reamur (°Re)"
        ],
        answer: 2
    },
    {
        question: "Kalor adalah?",
        options: [
            "Energi yang berpindah karena perbedaan suhu",
            "Jumlah molekul dalam suatu benda",
            "Kecepatan gerak molekul",
            "Tekanan yang diterapkan pada benda"
        ],
        answer: 0
    },
    {
        question: "Hukum Termodinamika Pertama menyatakan bahwa?",
        options: [
            "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat berubah bentuk",
            "Suhu benda tetap konstan selama proses pemanasan",
            "Kalor hanya dapat berpindah dari benda panas ke benda dingin",
            "Semua benda akan memuai saat dipanaskan"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan kapasitas kalor?",
        options: [
            "Jumlah kalor yang diperlukan untuk menaikkan suhu 1 kg zat sebesar 1°C",
            "Jumlah kalor yang dilepaskan saat benda didinginkan",
            "Jumlah kalor yang diperlukan untuk mengubah wujud zat",
            "Jumlah kalor yang diperlukan untuk menaikkan suhu suatu benda sebesar 1°C"
        ],
        answer: 3
    },
    {
        question: "Rumus kalor yang diserap atau dilepas adalah?",
        options: [
            "Q = mcΔT",
            "Q = mgh",
            "Q = PV",
            "Q = F/A"
        ],
        answer: 0
    },
    {
        question: "Jika massa suatu benda adalah 2 kg, kalor jenisnya 4200 J/kg°C, dan suhunya naik 5°C, berapa kalor yang diserap?",
        options: [
            "4200 J",
            "42000 J",
            "8400 J",
            "84000 J"
        ],
        answer: 3
    },
    {
        question: "Apa yang dimaksud dengan kalor jenis?",
        options: [
            "Jumlah kalor yang diperlukan untuk menaikkan suhu 1 gram zat sebesar 1°C",
            "Jumlah kalor yang dilepaskan saat benda didinginkan",
            "Jumlah kalor yang diperlukan untuk mengubah wujud zat",
            "Jumlah kalor yang dilepaskan benda saat memuai"
        ],
        answer: 0
    },
    {
        question: "Proses perpindahan panas melalui zat tanpa disertai perpindahan partikel zat disebut?",
        options: [
            "Konduksi",
            "Konveksi",
            "Radiasi",
            "Evaporasi"
        ],
        answer: 0
    },
    {
        question: "Proses perpindahan panas melalui zat dengan disertai perpindahan partikel zat disebut?",
        options: [
            "Konduksi",
            "Konveksi",
            "Radiasi",
            "Kondensasi"
        ],
        answer: 1
    },
    {
        question: "Contoh perpindahan panas secara radiasi adalah?",
        options: [
            "Panci panas di atas kompor",
            "Air yang mendidih",
            "Sinar matahari ke bumi",
            "Kabel logam yang dipanaskan"
        ],
        answer: 2
    },
    {
        question: "Jika suatu zat berpindah dari wujud cair ke gas, proses ini disebut?",
        options: [
            "Kondensasi",
            "Evaporasi",
            "Sublimasi",
            "Deposisi"
        ],
        answer: 1
    },
    {
        question: "Panas laten adalah?",
        options: [
            "Panas yang dilepaskan oleh suatu benda",
            "Panas yang diperlukan untuk mengubah wujud zat tanpa mengubah suhu",
            "Panas yang dihasilkan oleh benda hitam sempurna",
            "Panas yang dihantarkan oleh logam"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan titik lebur?",
        options: [
            "Suhu saat zat berubah dari cair menjadi gas",
            "Suhu saat zat berubah dari padat menjadi cair",
            "Suhu saat zat mulai mendidih",
            "Suhu saat zat mulai mengembun"
        ],
        answer: 1
    },
    {
        question: "Kalor jenis air adalah 4200 J/kg°C. Berapa kalor yang diperlukan untuk menaikkan suhu 1 kg air sebesar 10°C?",
        options: [
            "4200 J",
            "42000 J",
            "21000 J",
            "84000 J"
        ],
        answer: 1
    },
    {
        question: "Mengapa logam merupakan konduktor panas yang baik?",
        options: [
            "Logam memiliki massa yang besar",
            "Logam memiliki banyak elektron bebas",
            "Logam mudah memuai",
            "Logam memiliki suhu tinggi"
        ],
        answer: 1
    },
    {
        question: "Proses mendidih terjadi pada suhu?",
        options: [
            "0°C",
            "100°C",
            "Tergantung tekanan",
            "Tergantung jenis zat"
        ],
        answer: 2
    },
    {
        question: "Ketika es mencair, energi yang diserap digunakan untuk?",
        options: [
            "Meningkatkan suhu es",
            "Meningkatkan suhu air",
            "Mengubah wujud dari padat ke cair",
            "Mengurangi energi kinetik molekul"
        ],
        answer: 2
    },
    {
        question: "Apa yang terjadi pada suhu suatu zat saat mengalami perubahan wujud?",
        options: [
            "Suhu meningkat",
            "Suhu berkurang",
            "Suhu tetap",
            "Suhu berubah secara acak"
        ],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan titik didih?",
        options: [
            "Suhu saat zat mulai mencair",
            "Suhu saat zat berubah dari cair menjadi gas",
            "Suhu saat zat mengembun",
            "Suhu saat zat berubah menjadi padat"
        ],
        answer: 1
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
      <h1>Quiz Bab 5: Suhu Dan Kalor</h1>

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

export default QuizBab5;