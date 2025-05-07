import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab6 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari sistem rangka pada manusia?",
      options: [
        "Mengatur suhu tubuh",
        "Memberikan dukungan dan perlindungan",
        "Menghasilkan energi",
        "Mengangkut oksigen"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan sendi sinovial?",
      options: [
        "Sendi yang tidak dapat bergerak",
        "Sendi yang memungkinkan gerakan bebas",
        "Sendi yang hanya bergerak satu arah",
        "Sendi yang terbuat dari jaringan tulang rawan"
      ],
      answer: 1
    },
    {
      question: "Apa peran utama dari otot antagonis?",
      options: [
        "Menghasilkan gerakan berlawanan",
        "Mendukung gerakan otot sinergis",
        "Mengatur aliran darah",
        "Menghubungkan tulang dengan ligamen"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi pada otot saat kontraksi?",
      options: [
        "Otot memanjang",
        "Otot menjadi lemah",
        "Otot memendek dan menebal",
        "Otot kehilangan energi"
      ],
      answer: 2
    },
    {
      question: "Apa yang dimaksud dengan osteoporosis?",
      options: [
        "Pengerasan otot",
        "Kerusakan sendi",
        "Penurunan massa tulang",
        "Peradangan pada ligamen"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi utama dari ligamen?",
      options: [
        "Menghubungkan otot ke tulang",
        "Menghubungkan tulang ke tulang",
        "Mendukung jaringan lunak",
        "Mengurangi gesekan antar sendi"
      ],
      answer: 1
    },
    {
      question: "Bagaimana cara kerja otot bisep dan trisep saat lengan ditekuk?",
      options: [
        "Bisep berkontraksi, trisep berelaksasi",
        "Bisep berelaksasi, trisep berkontraksi",
        "Keduanya berkontraksi",
        "Keduanya berelaksasi"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan sendi engsel?",
      options: [
        "Sendi yang memungkinkan gerakan ke segala arah",
        "Sendi yang hanya memungkinkan gerakan satu arah",
        "Sendi yang memungkinkan rotasi penuh",
        "Sendi yang tidak dapat bergerak"
      ],
      answer: 1
    },
    {
      question: "Apa penyebab utama terjadinya dislokasi sendi?",
      options: [
        "Kekurangan kalsium",
        "Cedera atau tekanan berlebih",
        "Infeksi pada tulang",
        "Pengerasan otot"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan tulang rawan hialin?",
      options: [
        "Tulang yang keras dan padat",
        "Tulang yang membentuk sendi",
        "Jaringan tulang rawan yang fleksibel",
        "Tulang yang terdapat pada sumsum"
      ],
      answer: 2
    },
    {
      question: "Apa peran utama dari sumsum tulang?",
      options: [
        "Menyimpan kalsium",
        "Menghasilkan sel darah",
        "Mendukung jaringan otot",
        "Menghubungkan tulang dengan ligamen"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan gerakan abduksi?",
      options: [
        "Gerakan menjauh dari garis tengah tubuh",
        "Gerakan mendekati garis tengah tubuh",
        "Gerakan memutar",
        "Gerakan meluruskan"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi pada otot jika digunakan secara berlebihan tanpa istirahat?",
      options: [
        "Otot menjadi lebih kuat",
        "Otot mengalami kelelahan",
        "Otot menjadi lebih fleksibel",
        "Otot kehilangan massa"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama dari tendon?",
      options: [
        "Menghubungkan tulang ke tulang",
        "Menghubungkan otot ke tulang",
        "Mengurangi gesekan antar sendi",
        "Mendukung jaringan lunak"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan gerakan fleksion?",
      options: [
        "Gerakan meluruskan sendi",
        "Gerakan menekuk sendi",
        "Gerakan memutar sendi",
        "Gerakan menjauh dari garis tengah tubuh"
      ],
      answer: 1
    },
    {
      question: "Apa penyebab utama terjadinya artritis?",
      options: [
        "Infeksi bakteri",
        "Peradangan pada sendi",
        "Cedera otot",
        "Kekurangan kalsium"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan sendi peluru?",
      options: [
        "Sendi yang memungkinkan gerakan satu arah",
        "Sendi yang memungkinkan gerakan ke segala arah",
        "Sendi yang tidak dapat bergerak",
        "Sendi yang hanya memungkinkan rotasi"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi pada tulang saat terjadi fraktur?",
      options: [
        "Tulang mengalami peradangan",
        "Tulang patah atau retak",
        "Tulang kehilangan massa",
        "Tulang menjadi lebih keras"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan gerakan adduksi?",
      options: [
        "Gerakan menjauh dari garis tengah tubuh",
        "Gerakan mendekati garis tengah tubuh",
        "Gerakan memutar",
        "Gerakan meluruskan"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama dari cakram intervertebralis?",
      options: [
        "Menyimpan kalsium",
        "Menghubungkan otot ke tulang",
        "Meredam tekanan antar tulang belakang",
        "Menghasilkan sel darah"
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
      <h1>Quiz Bab 6: Mobilitas pada Manusia</h1>

      {showResult ? (
        <div className="result-container">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>{score >= 15 ? "Luar biasa! Anda memahami materi dengan sangat baik." : "Tetap semangat! Pelajari lagi materi ini untuk memperkuat pemahaman Anda."}</p>
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