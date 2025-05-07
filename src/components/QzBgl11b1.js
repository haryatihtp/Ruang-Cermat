import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab1 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari membran sel?",
      options: [
        "Mengontrol aktivitas sel",
        "Mengatur keluar masuknya zat",
        "Menghasilkan energi",
        "Tempat sintesis protein"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan sitoplasma?",
      options: [
        "Lapisan fosfolipid yang mengatur transportasi",
        "Cairan kental yang mengisi ruang antara membran dan nukleus",
        "Organel penghasil energi",
        "Struktur yang berisi materi genetik"
      ],
      answer: 1
    },
    {
      question: "Proses pembelahan sel yang menghasilkan dua sel anak disebut?",
      options: [
        "Meiosis",
        "Mutasi",
        "Mitosis",
        "Transportasi"
      ],
      answer: 2
    },
    {
      question: "Mitokondria dikenal sebagai?",
      options: [
        "Organel tempat sintesis protein",
        "Pengatur keluar masuk zat",
        "Pembangkit tenaga sel",
        "Materi genetik sel"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi utama ribosom?",
      options: [
        "Sintesis protein",
        "Mengatur pembelahan sel",
        "Menghasilkan energi",
        "Mengontrol aktivitas genetik"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan nukleus?",
      options: [
        "Struktur yang mengontrol aktivitas sel",
        "Organel penghasil energi",
        "Lapisan yang melindungi sel",
        "Tempat sintesis protein"
      ],
      answer: 0
    },
    {
      question: "Sel prokariotik memiliki ciri?",
      options: [
        "Memiliki inti sel yang jelas",
        "Tidak memiliki inti sel yang jelas",
        "Hanya ditemukan pada tumbuhan",
        "Hanya ditemukan pada hewan"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama dari retikulum endoplasma kasar?",
      options: [
        "Sintesis protein",
        "Menyimpan materi genetik",
        "Menghasilkan energi",
        "Transportasi zat dalam sel"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi pada tahap metafase dalam mitosis?",
      options: [
        "Kromosom berjajar di tengah sel",
        "Kromosom mulai memisah",
        "Membran inti mulai pecah",
        "Sel membelah menjadi dua"
      ],
      answer: 0
    },
    {
      question: "Apa perbedaan utama antara mitosis dan meiosis?",
      options: [
        "Mitosis menghasilkan dua sel anak, meiosis menghasilkan empat sel anak",
        "Mitosis hanya terjadi pada sel germinal",
        "Meiosis tidak melibatkan pembagian kromosom",
        "Mitosis menghasilkan sel anak dengan setengah kromosom induk"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi badan Golgi dalam sel?",
      options: [
        "Menghasilkan energi",
        "Mengatur sintesis protein",
        "Memproses dan mengemas protein",
        "Menyimpan materi genetik"
      ],
      answer: 2
    },
    {
      question: "Apa yang dimaksud dengan mutasi genetik?",
      options: [
        "Perubahan pada urutan DNA",
        "Gangguan metabolisme sel",
        "Infeksi yang merusak sel",
        "Pembelahan sel abnormal"
      ],
      answer: 0
    },
    {
      question: "Sel eukariotik ditemukan pada?",
      options: [
        "Bakteri",
        "Tumbuhan dan hewan",
        "Virus",
        "Protozoa saja"
      ],
      answer: 1
    },
    {
      question: "Organel apa yang berfungsi sebagai tempat sintesis lipid?",
      options: [
        "Retikulum endoplasma kasar",
        "Mitokondria",
        "Retikulum endoplasma halus",
        "Ribosom"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi lisosom?",
      options: [
        "Menghasilkan energi",
        "Mengontrol aktivitas sel",
        "Mencerna materi yang tidak diperlukan",
        "Transportasi zat dalam sel"
      ],
      answer: 2
    },
    {
      question: "Tahap terakhir dalam mitosis adalah?",
      options: [
        "Anafase",
        "Telofase",
        "Metafase",
        "Profase"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan homeostasis sel?",
      options: [
        "Kemampuan sel untuk membelah diri",
        "Proses menjaga kestabilan lingkungan internal sel",
        "Sintesis protein dalam sel",
        "Perubahan struktur DNA"
      ],
      answer: 1
    },
    {
      question: "Kelainan pada sel yang disebabkan oleh virus adalah?",
      options: [
        "Mutasi genetik",
        "Infeksi virus",
        "Penyakit metabolik",
        "Pembelahan abnormal"
      ],
      answer: 1
    },
    {
      question: "Organel apa yang bertugas menghasilkan ATP?",
      options: [
        "Mitokondria",
        "Ribosom",
        "Nukleus",
        "Lisosom"
      ],
      answer: 0
    },
    {
      question: "Proses transportasi aktif memerlukan?",
      options: [
        "Energi dalam bentuk ATP",
        "Gradien konsentrasi",
        "Difusi pasif",
        "Tidak memerlukan energi"
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
      <h1>Quiz Bab 1: Sel dan Strukturnya</h1>

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

export default QuizBab1;