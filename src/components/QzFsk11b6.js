import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab6 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan teori kinetik gas?",
        options: [
            "Teori yang menjelaskan sifat gas berdasarkan gerak molekulnya",
            "Teori yang menjelaskan pengaruh suhu terhadap gas",
            "Teori tentang perubahan wujud zat gas",
            "Teori tentang sifat-sifat bahan cair"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan tekanan gas dalam teori kinetik gas?",
        options: [
            "Jumlah partikel gas dalam satuan volume",
            "Gaya yang dihasilkan oleh tumbukan partikel gas pada dinding wadah",
            "Energi kinetik rata-rata partikel gas",
            "Perubahan volume gas terhadap suhu"
        ],
        answer: 1
    },
    {
        question: "Suhu dalam teori kinetik gas berbanding lurus dengan?",
        options: [
            "Energi kinetik rata-rata partikel gas",
            "Volume gas",
            "Tekanan gas",
            "Jumlah partikel gas"
        ],
        answer: 0
    },
    {
        question: "Apa hubungan antara suhu mutlak (T) dan energi kinetik rata-rata partikel gas?",
        options: [
            "Ek = 3/2 kT",
            "Ek = kT",
            "Ek = PV/nRT",
            "Ek = 1/2 mV²"
        ],
        answer: 0
    },
    {
        question: "Apa satuan konstanta Boltzmann (k) dalam teori kinetik gas?",
        options: [
            "Joule",
            "Joule/K",
            "Joule/K.mol",
            "Joule/K.partikel"
        ],
        answer: 3
    },
    {
        question: "Hukum Boyle menyatakan bahwa?",
        options: [
            "P × V = konstan, jika T tetap",
            "V/T = konstan, jika P tetap",
            "P/T = konstan, jika V tetap",
            "PV/T = konstan"
        ],
        answer: 0
    },
    {
        question: "Rumus gas ideal yang sesuai adalah?",
        options: [
            "PV = nRT",
            "PV/T = nR",
            "P/T = nR/V",
            "P = VRT/n"
        ],
        answer: 0
    },
    {
        question: "Dalam hukum Charles, apa yang tetap konstan?",
        options: [
            "Tekanan gas",
            "Volume gas",
            "Suhu gas",
            "Jumlah partikel gas"
        ],
        answer: 0
    },
    {
        question: "Hukum Avogadro menyatakan bahwa?",
        options: [
            "Gas dengan volume yang sama, pada suhu dan tekanan yang sama, memiliki jumlah molekul yang sama",
            "Tekanan gas berbanding lurus dengan suhu mutlak",
            "Volume gas berbanding lurus dengan suhu mutlak",
            "Tekanan gas berbanding terbalik dengan volume"
        ],
        answer: 0
    },
    {
        question: "Apa itu kecepatan rms (root mean square) partikel gas?",
        options: [
            "Kecepatan rata-rata partikel gas",
            "Kecepatan tertinggi partikel gas",
            "Akar rata-rata kuadrat kecepatan partikel gas",
            "Kecepatan rata-rata molekul gas dalam satu arah"
        ],
        answer: 2
    },
    {
        question: "Apa hubungan kecepatan rms dengan suhu gas?",
        options: [
            "v_rms berbanding lurus dengan T",
            "v_rms berbanding lurus dengan √T",
            "v_rms berbanding terbalik dengan T",
            "v_rms berbanding terbalik dengan √T"
        ],
        answer: 1
    },
    {
        question: "Rumus energi kinetik rata-rata per molekul gas ideal adalah?",
        options: [
            "Ek = 3/2 RT",
            "Ek = 3/2 kT",
            "Ek = 1/2 mV²",
            "Ek = PV/n"
        ],
        answer: 1
    },
    {
        question: "Dalam gas ideal, apa hubungan antara tekanan dan energi kinetik rata-rata?",
        options: [
            "P = 2/3 (n/V) Ek",
            "P = 1/3 (n/V) Ek",
            "P = 3/2 (n/V) Ek",
            "P = (n/V) Ek"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan difusi gas?",
        options: [
            "Perpindahan molekul gas dari konsentrasi rendah ke tinggi",
            "Perpindahan molekul gas dari konsentrasi tinggi ke rendah",
            "Pencampuran molekul gas tanpa tekanan",
            "Perpindahan molekul gas karena gravitasi"
        ],
        answer: 1
    },
    {
        question: "Hukum Graham menyatakan bahwa laju difusi gas berbanding terbalik dengan?",
        options: [
            "Akar massa molar gas",
            "Massa molar gas",
            "Volume gas",
            "Tekanan gas"
        ],
        answer: 0
    },
    {
        question: "Jika gas ideal dipanaskan, apa yang akan terjadi pada molekul gas?",
        options: [
            "Molekul gas bergerak lebih lambat",
            "Energi kinetik rata-rata meningkat",
            "Molekul gas berhenti bergerak",
            "Tekanan gas berkurang"
        ],
        answer: 1
    },
    {
        question: "Jika tekanan gas dijaga tetap dan suhu dinaikkan, apa yang terjadi pada volume gas?",
        options: [
            "Volume meningkat",
            "Volume menurun",
            "Volume tetap",
            "Tidak ada hubungan antara suhu dan volume"
        ],
        answer: 0
    },
    {
        question: "Dalam teori kinetik gas, apa yang dianggap berlaku untuk partikel gas?",
        options: [
            "Berinteraksi melalui gaya tarik",
            "Bergerak acak dan bertumbukan elastis",
            "Memiliki volume yang besar dibandingkan volume wadah",
            "Memiliki kecepatan yang sama"
        ],
        answer: 1
    },
    {
        question: "Apa hubungan antara massa molar gas (M) dan kecepatan rms (v_rms)?",
        options: [
            "v_rms berbanding lurus dengan √M",
            "v_rms berbanding lurus dengan M",
            "v_rms berbanding terbalik dengan √M",
            "v_rms berbanding terbalik dengan M"
        ],
        answer: 2
    },
    {
        question: "Apa yang terjadi pada energi kinetik molekul gas saat suhu dinaikkan?",
        options: [
            "Energi kinetik meningkat",
            "Energi kinetik menurun",
            "Energi kinetik tetap konstan",
            "Energi kinetik berkurang hingga nol"
        ],
        answer: 0
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
      <h1>Quiz Bab 6: Teori Kinetik Gas</h1>

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

export default QuizBab6;