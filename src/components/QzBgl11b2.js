import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab2 = () => {
  const questions = [
    {
      question: "Apa itu transportasi pasif?",
      options: [
        "Pergerakan zat melintasi membran tanpa energi",
        "Pergerakan zat melawan gradien konsentrasi",
        "Proses pembentukan vesikel",
        "Penggunaan ATP untuk mengangkut zat"
      ],
      answer: 0
    },
    {
      question: "Apa contoh transportasi aktif?",
      options: [
        "Difusi",
        "Osmosis",
        "Pompa natrium-kalium",
        "Fasilitasi difusi"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi dalam proses osmosis?",
      options: [
        "Pergerakan air melalui membran semipermeabel",
        "Pergerakan molekul dari konsentrasi tinggi ke rendah",
        "Pengangkutan molekul besar ke dalam sel",
        "Penggunaan protein pembawa"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi membran semipermeabel?",
      options: [
        "Memungkinkan semua molekul masuk dan keluar",
        "Mengontrol zat yang masuk dan keluar",
        "Menghasilkan energi bagi sel",
        "Melindungi sel dari virus"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan fasilitasi difusi?",
      options: [
        "Pergerakan air melalui membran",
        "Pergerakan zat dengan bantuan protein pembawa",
        "Pergerakan molekul kecil melalui membran",
        "Pergerakan molekul melawan gradien konsentrasi"
      ],
      answer: 1
    },
    {
      question: "Apa contoh molekul yang berdifusi langsung melalui membran sel?",
      options: [
        "Oksigen dan karbon dioksida",
        "Ion natrium dan kalium",
        "Glukosa dan protein",
        "Air dan lipid"
      ],
      answer: 0
    },
    {
      question: "Apa perbedaan utama antara transportasi aktif dan pasif?",
      options: [
        "Transportasi aktif memerlukan energi, transportasi pasif tidak",
        "Transportasi aktif bergerak mengikuti gradien konsentrasi",
        "Transportasi pasif memerlukan energi ATP",
        "Transportasi aktif tidak memerlukan protein pembawa"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan pompa natrium-kalium?",
      options: [
        "Proses difusi ion melalui membran",
        "Pergerakan ion natrium dan kalium melawan gradien konsentrasi",
        "Pengangkutan molekul besar ke dalam sel",
        "Pengeluaran limbah dari sel"
      ],
      answer: 1
    },
    {
      question: "Apa tujuan utama transportasi aktif?",
      options: [
        "Menyamakan konsentrasi zat di dalam dan luar sel",
        "Memindahkan zat melawan gradien konsentrasi",
        "Menghasilkan energi untuk sel",
        "Meningkatkan suhu sel"
      ],
      answer: 1
    },
    {
      question: "Apa faktor yang mempengaruhi kecepatan osmosis?",
      options: [
        "Ukuran molekul",
        "Perbedaan konsentrasi",
        "Keberadaan protein pembawa",
        "Semua jawaban benar"
      ],
      answer: 3
    },
    {
      question: "Apa yang dimaksud dengan endositosis?",
      options: [
        "Proses pengeluaran zat dari sel",
        "Proses pengambilan zat ke dalam sel",
        "Pergerakan molekul air melalui membran",
        "Transportasi zat dengan bantuan protein"
      ],
      answer: 1
    },
    {
      question: "Apa peran protein pembawa dalam membran sel?",
      options: [
        "Memungkinkan semua molekul masuk",
        "Menghambat pergerakan molekul besar",
        "Membantu transportasi zat tertentu",
        "Menghasilkan energi untuk transportasi"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi pada sel dalam larutan hipotonik?",
      options: [
        "Sel kehilangan air dan mengerut",
        "Sel menyerap air dan membengkak",
        "Tidak ada perubahan pada sel",
        "Sel pecah karena tekanan osmotik"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama membran sel?",
      options: [
        "Menghasilkan energi",
        "Mengontrol zat yang masuk dan keluar sel",
        "Membentuk dinding pelindung",
        "Mengangkut oksigen"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan eksositosis?",
      options: [
        "Proses pengeluaran zat dari sel",
        "Proses pengambilan zat ke dalam sel",
        "Transportasi molekul melalui protein pembawa",
        "Pergerakan air melalui membran"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan gradien konsentrasi?",
      options: [
        "Konsentrasi zat yang sama di seluruh bagian",
        "Perbedaan konsentrasi zat di dua sisi membran",
        "Pergerakan molekul melawan konsentrasi",
        "Tidak adanya konsentrasi zat"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi pada larutan hipertonik?",
      options: [
        "Sel menyerap air dan membengkak",
        "Sel kehilangan air dan mengerut",
        "Tidak ada perubahan pada sel",
        "Sel menjadi lebih aktif"
      ],
      answer: 1
    },
    {
      question: "Apa peran ATP dalam transportasi aktif?",
      options: [
        "Mengontrol masuknya molekul kecil",
        "Menyediakan energi untuk memindahkan zat melawan gradien",
        "Menghasilkan gradien konsentrasi",
        "Mempermudah transportasi pasif"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan kelainan osmosis?",
      options: [
        "Gangguan pada keseimbangan cairan dalam tubuh",
        "Mutasi pada protein pembawa",
        "Ketidakmampuan sel untuk menyerap zat besar",
        "Ketidakseimbangan ion dalam sel"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan membran selektif permeabel?",
      options: [
        "Memungkinkan semua molekul melintas",
        "Hanya memungkinkan molekul tertentu melintas",
        "Membatasi pergerakan semua molekul",
        "Menghasilkan energi untuk sel"
      ],
      answer: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
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
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Bab 2: Pergerakan Zat melalui Membran Sel</h1>
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