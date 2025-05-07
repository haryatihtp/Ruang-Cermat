import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab8 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan gelombang berjalan?",
        options: [
            "Gelombang yang energinya tidak berpindah",
            "Gelombang yang merambat dengan pola tetap dan membawa energi",
            "Gelombang yang terpantul kembali ke sumber",
            "Gelombang yang tidak memiliki amplitudo"
        ],
        answer: 1
    },
    {
        question: "Rumus umum gelombang berjalan adalah?",
        options: [
            "y(x,t) = A sin(kx - ωt)",
            "y(x,t) = A cos(kx + ωt)",
            "y(x,t) = A sin(kx + ωt)",
            "y(x,t) = A cos(kx - ωt)"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan gelombang stasioner?",
        options: [
            "Gelombang yang bergerak dalam satu arah",
            "Gelombang hasil superposisi dua gelombang berlawanan arah",
            "Gelombang yang amplitudonya tetap",
            "Gelombang yang tidak memiliki frekuensi"
        ],
        answer: 1
    },
    {
        question: "Pada gelombang stasioner, titik dengan amplitudo nol disebut?",
        options: [
            "Perut",
            "Simpul",
            "Puncak",
            "Lembah"
        ],
        answer: 1
    },
    {
        question: "Pada gelombang stasioner, titik dengan amplitudo maksimum disebut?",
        options: [
            "Perut",
            "Simpul",
            "Puncak",
            "Lembah"
        ],
        answer: 0
    },
    {
        question: "Gelombang stasioner dapat terbentuk akibat?",
        options: [
            "Interferensi dua gelombang searah",
            "Interferensi dua gelombang dengan frekuensi berbeda",
            "Interferensi dua gelombang berlawanan arah",
            "Interferensi gelombang berjalan dengan gelombang elektromagnetik"
        ],
        answer: 2
    },
    {
        question: "Gelombang stasioner memiliki pola?",
        options: [
            "Puncak dan lembah yang terus berubah",
            "Puncak dan lembah yang tetap di tempat",
            "Puncak dan lembah yang merambat",
            "Tidak memiliki puncak dan lembah"
        ],
        answer: 1
    },
    {
        question: "Rumus gelombang stasioner pada tali tertutup di kedua ujungnya adalah?",
        options: [
            "y(x,t) = 2A sin(kx) cos(ωt)",
            "y(x,t) = A sin(kx + ωt)",
            "y(x,t) = 2A cos(kx) sin(ωt)",
            "y(x,t) = A sin(kx - ωt)"
        ],
        answer: 0
    },
    {
        question: "Gelombang berjalan memiliki energi yang?",
        options: [
            "Tidak berpindah tempat",
            "Berpindah bersama dengan gelombang",
            "Tetap di tempat",
            "Berkurang dengan jarak"
        ],
        answer: 1
    },
    {
        question: "Apa yang mempengaruhi kecepatan gelombang berjalan?",
        options: [
            "Frekuensi dan panjang gelombang",
            "Sifat medium tempat gelombang merambat",
            "Amplitudo gelombang",
            "Energi gelombang"
        ],
        answer: 1
    },
    {
        question: "Panjang gelombang stasioner pada tali tertutup di kedua ujungnya untuk mode dasar adalah?",
        options: [
            "2L",
            "L",
            "L/2",
            "L/4"
        ],
        answer: 0
    },
    {
        question: "Apa hubungan antara panjang gelombang (λ) dan frekuensi (f) pada gelombang berjalan?",
        options: [
            "λ = v / f",
            "λ = f / v",
            "λ = v × f",
            "λ = f² / v"
        ],
        answer: 0
    },
    {
        question: "Frekuensi gelombang stasioner ditentukan oleh?",
        options: [
            "Kecepatan gelombang dan panjang tali",
            "Amplitudo gelombang",
            "Perut gelombang",
            "Simpul gelombang"
        ],
        answer: 0
    },
    {
        question: "Pada gelombang stasioner, jarak antara dua simpul berturut-turut adalah?",
        options: [
            "λ",
            "λ / 2",
            "λ / 4",
            "2λ"
        ],
        answer: 1
    },
    {
        question: "Pada gelombang berjalan, kecepatan rambat gelombang adalah?",
        options: [
            "v = λ × f",
            "v = λ / f",
            "v = f / λ",
            "v = λ² × f"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan bilangan gelombang (k)?",
        options: [
            "Jumlah panjang gelombang per satuan waktu",
            "Jumlah gelombang dalam satu meter",
            "Bilangan fase gelombang",
            "2π dibagi panjang gelombang"
        ],
        answer: 3
    },
    {
        question: "Rumus bilangan gelombang (k) adalah?",
        options: [
            "k = 2π / λ",
            "k = λ / 2π",
            "k = λ × 2π",
            "k = 2λ / π"
        ],
        answer: 0
    },
    {
        question: "Gelombang stasioner dengan frekuensi harmonik kedua memiliki jumlah simpul sebanyak?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 3
    },
    {
        question: "Panjang gelombang harmonik ketiga pada tali tertutup adalah?",
        options: [
            "2L / 3",
            "L / 3",
            "3L / 2",
            "L"
        ],
        answer: 0
    },
    {
        question: "Pada gelombang berjalan, perubahan fase antara dua titik yang berjarak satu panjang gelombang adalah?",
        options: [
            "π",
            "2π",
            "π / 2",
            "3π"
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
      <h1>Quiz Bab 8: Gelombang Berjalan Dan Gelombang Stasioner</h1>

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

export default QuizBab8;