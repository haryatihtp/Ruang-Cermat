import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab7 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan gelombang mekanik?",
        options: [
            "Gelombang yang membutuhkan medium untuk merambat",
            "Gelombang yang tidak membutuhkan medium untuk merambat",
            "Gelombang elektromagnetik dengan panjang gelombang pendek",
            "Gelombang yang memiliki frekuensi tetap"
        ],
        answer: 0
    },
    {
        question: "Contoh gelombang mekanik adalah?",
        options: [
            "Gelombang cahaya",
            "Gelombang radio",
            "Gelombang suara",
            "Gelombang sinar-X"
        ],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan panjang gelombang?",
        options: [
            "Jarak antara dua puncak atau lembah berturut-turut",
            "Jumlah gelombang dalam satu detik",
            "Jarak yang ditempuh gelombang dalam satu periode",
            "Amplitudo maksimum gelombang"
        ],
        answer: 0
    },
    {
        question: "Rumus kecepatan gelombang adalah?",
        options: [
            "v = f × λ",
            "v = λ / T",
            "v = f / λ",
            "v = T × λ"
        ],
        answer: 0
    },
    {
        question: "Apa yang mempengaruhi kecepatan gelombang mekanik?",
        options: [
            "Frekuensi gelombang",
            "Sifat medium tempat gelombang merambat",
            "Panjang gelombang",
            "Energi gelombang"
        ],
        answer: 1
    },
    {
        question: "Apa hubungan antara frekuensi (f) dan periode (T)?",
        options: [
            "f = 1 / T",
            "f = T",
            "f = T²",
            "f = T / 2"
        ],
        answer: 0
    },
    {
        question: "Gelombang transversal adalah gelombang yang memiliki arah getaran?",
        options: [
            "Sejajar dengan arah perambatan",
            "Tegak lurus terhadap arah perambatan",
            "Melingkar terhadap arah perambatan",
            "Membentuk sudut tetap dengan arah perambatan"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan amplitudo gelombang?",
        options: [
            "Jarak antara dua puncak gelombang",
            "Jumlah gelombang yang melewati titik dalam satu detik",
            "Jarak maksimum dari posisi keseimbangan",
            "Jumlah energi gelombang"
        ],
        answer: 2
    },
    {
        question: "Gelombang longitudinal memiliki arah getaran?",
        options: [
            "Sejajar dengan arah perambatan gelombang",
            "Tegak lurus terhadap arah perambatan gelombang",
            "Melingkar terhadap arah perambatan gelombang",
            "Membentuk sudut tetap dengan arah perambatan gelombang"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan frekuensi gelombang?",
        options: [
            "Jumlah gelombang yang melewati titik tertentu dalam satu detik",
            "Jumlah gelombang yang dihasilkan dalam satu periode",
            "Jumlah gelombang yang berinterferensi",
            "Jumlah puncak gelombang dalam satu panjang gelombang"
        ],
        answer: 0
    },
    {
        question: "Satuan SI dari frekuensi adalah?",
        options: [
            "Hertz (Hz)",
            "Newton (N)",
            "Joule (J)",
            "Watt (W)"
        ],
        answer: 0
    },
    {
        question: "Gelombang mekanik tidak dapat merambat melalui?",
        options: [
            "Air",
            "Udara",
            "Ruang hampa",
            "Logam"
        ],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan interferensi konstruktif?",
        options: [
            "Peningkatan amplitudo akibat penjumlahan dua gelombang yang sefase",
            "Penurunan amplitudo akibat perbedaan fase gelombang",
            "Perpaduan dua gelombang dengan panjang gelombang yang berbeda",
            "Perpaduan dua gelombang yang bergerak berlawanan arah"
        ],
        answer: 0
    },
    {
        question: "Apa yang terjadi pada amplitudo saat terjadi interferensi destruktif?",
        options: [
            "Amplitudo meningkat",
            "Amplitudo menurun",
            "Amplitudo tetap",
            "Amplitudo menjadi nol"
        ],
        answer: 3
    },
    {
        question: "Apa yang dimaksud dengan efek Doppler pada gelombang mekanik?",
        options: [
            "Perubahan frekuensi akibat sumber atau pengamat bergerak",
            "Perubahan panjang gelombang akibat interferensi",
            "Perubahan amplitudo gelombang karena medium",
            "Perubahan kecepatan gelombang karena suhu"
        ],
        answer: 0
    },
    {
        question: "Gelombang stasioner terbentuk akibat?",
        options: [
            "Superposisi gelombang yang merambat searah",
            "Superposisi gelombang yang merambat berlawanan arah",
            "Superposisi gelombang yang memiliki frekuensi berbeda",
            "Superposisi gelombang yang merambat di medium yang berbeda"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan simpul pada gelombang stasioner?",
        options: [
            "Titik dengan amplitudo maksimum",
            "Titik dengan amplitudo minimum (nol)",
            "Titik di mana gelombang bergetar dengan fase yang sama",
            "Titik di mana gelombang bergetar dengan fase berlawanan"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan peredaman gelombang?",
        options: [
            "Penurunan amplitudo gelombang akibat energi hilang ke medium",
            "Penurunan frekuensi gelombang karena interferensi",
            "Penurunan panjang gelombang karena efek Doppler",
            "Penurunan kecepatan gelombang karena perubahan medium"
        ],
        answer: 0
    },
    {
        question: "Kecepatan gelombang pada tali bergantung pada?",
        options: [
            "Tegangan tali dan massa per satuan panjang",
            "Frekuensi dan panjang gelombang",
            "Amplitudo dan panjang tali",
            "Suhu dan tekanan"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan fase gelombang?",
        options: [
            "Posisi relatif dalam siklus gelombang pada waktu tertentu",
            "Jarak antara dua puncak gelombang",
            "Jumlah gelombang dalam satu detik",
            "Kecepatan rambat gelombang dalam medium tertentu"
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
      <h1>Quiz Bab 7: Karakteristik Gelombang mekanik</h1>

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

export default QuizBab7;