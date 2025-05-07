import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab5 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari sistem imun dalam tubuh manusia?",
      options: [
        "Mengatur suhu tubuh",
        "Melawan patogen dan menjaga kesehatan tubuh",
        "Mengangkut oksigen ke seluruh tubuh",
        "Menghasilkan energi dari makanan"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan antigen?",
      options: [
        "Protein yang diproduksi oleh sistem imun",
        "Zat asing yang memicu respons imun",
        "Sel darah putih yang melawan infeksi",
        "Enzim yang membantu pencernaan"
      ],
      answer: 1
    },
    {
      question: "Apa peran utama limfosit B dalam sistem imun?",
      options: [
        "Menghancurkan patogen secara langsung",
        "Memproduksi antibodi untuk melawan antigen",
        "Mengaktifkan sel T pembantu",
        "Menyaring cairan limfatik"
      ],
      answer: 1
    },
    {
      question: "Apa perbedaan utama antara imunitas bawaan dan imunitas adaptif?",
      options: [
        "Imunitas bawaan spesifik, imunitas adaptif tidak",
        "Imunitas bawaan bekerja cepat, imunitas adaptif memerlukan waktu",
        "Imunitas adaptif hanya melawan bakteri, imunitas bawaan melawan virus",
        "Imunitas adaptif hanya ditemukan pada bayi"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama dari makrofag dalam sistem imun?",
      options: [
        "Memproduksi antibodi",
        "Mengaktifkan sel T sitotoksik",
        "Menelan dan menghancurkan patogen",
        "Menyaring darah dari toksin"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi pada tubuh saat respons inflamasi diaktifkan?",
      options: [
        "Suhu tubuh menurun drastis",
        "Pembuluh darah melebar dan area menjadi merah serta bengkak",
        "Sel darah putih berhenti diproduksi",
        "Patogen menyebar lebih cepat"
      ],
      answer: 1
    },
    {
      question: "Apa peran utama sel T pembantu dalam sistem imun?",
      options: [
        "Menghancurkan patogen secara langsung",
        "Mengaktifkan limfosit B dan sel T lainnya",
        "Menghasilkan antigen",
        "Mengangkut oksigen ke jaringan"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan imunisasi aktif?",
      options: [
        "Pemberian antibodi langsung ke tubuh",
        "Stimulasi sistem imun untuk menghasilkan antibodi sendiri",
        "Pemberian antibiotik untuk melawan infeksi",
        "Proses pemindahan darah dari donor"
      ],
      answer: 1
    },
    {
      question: "Bagaimana vaksin bekerja dalam melindungi tubuh dari penyakit?",
      options: [
        "Menghancurkan patogen dalam tubuh",
        "Melatih sistem imun untuk mengenali dan melawan antigen spesifik",
        "Meningkatkan produksi enzim pencernaan",
        "Menghilangkan racun dari darah"
      ],
      answer: 1
    },
    {
      question: "Apa peran utama dari sel memori dalam sistem imun?",
      options: [
        "Menghancurkan patogen secara langsung",
        "Mengingat antigen untuk respons lebih cepat di masa depan",
        "Menghasilkan antigen baru",
        "Mengaktifkan respons inflamasi"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan autoimunitas?",
      options: [
        "Sistem imun menyerang sel atau jaringan tubuh sendiri",
        "Kegagalan sistem imun untuk melawan infeksi",
        "Produksi antibodi yang berlebihan",
        "Kondisi di mana tubuh tidak menghasilkan antigen"
      ],
      answer: 0
    },
    {
      question: "Apa peran utama dari interferon dalam melawan infeksi virus?",
      options: [
        "Menghancurkan sel yang terinfeksi",
        "Menghambat replikasi virus",
        "Mengaktifkan limfosit B",
        "Meningkatkan produksi hemoglobin"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan fagositosis?",
      options: [
        "Proses penghancuran patogen oleh sel darah putih",
        "Produksi antibodi oleh limfosit B",
        "Penyebaran antigen dalam tubuh",
        "Penyerapan nutrisi oleh usus"
      ],
      answer: 0
    },
    {
      question: "Apa yang menyebabkan alergi?",
      options: [
        "Respons imun terhadap zat yang biasanya tidak berbahaya",
        "Infeksi bakteri dalam tubuh",
        "Kekurangan sel darah putih",
        "Produksi antibodi yang terlalu sedikit"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama dari limfosit T sitotoksik?",
      options: [
        "Mengaktifkan respons inflamasi",
        "Menghancurkan sel yang terinfeksi virus atau kanker",
        "Menghasilkan antibodi",
        "Mengangkut oksigen ke jaringan"
      ],
      answer: 1
    },
    {
      question: "Bagaimana antibiotik membantu melawan infeksi?",
      options: [
        "Membunuh bakteri atau menghambat pertumbuhannya",
        "Meningkatkan produksi antibodi",
        "Mengaktifkan sel T sitotoksik",
        "Menghancurkan virus dalam tubuh"
      ],
      answer: 0
    },
    {
      question: "Apa perbedaan utama antara virus dan bakteri?",
      options: [
        "Virus adalah organisme hidup, bakteri tidak",
        "Virus membutuhkan inang untuk bereproduksi, bakteri tidak",
        "Bakteri hanya menyerang manusia, virus menyerang semua organisme",
        "Bakteri lebih kecil dari virus"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan resistensi antibiotik?",
      options: [
        "Ketidakmampuan sistem imun untuk melawan infeksi",
        "Bakteri menjadi kebal terhadap efek antibiotik",
        "Tubuh tidak dapat menghasilkan antibodi",
        "Produksi antigen oleh patogen"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama dari kelenjar getah bening dalam sistem imun?",
      options: [
        "Menghasilkan sel darah merah",
        "Menyaring cairan limfatik dari patogen dan zat asing",
        "Mengontrol suhu tubuh",
        "Menghasilkan energi untuk sel"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan imunisasi pasif?",
      options: [
        "Pemberian antibodi langsung ke tubuh",
        "Stimulasi sistem imun untuk menghasilkan antibodi sendiri",
        "Pemberian vaksin untuk melatih sistem imun",
        "Produksi antigen oleh tubuh"
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
      <h1>Quiz Bab 5: Sistem Pertahanan Tubuh terhadap Penyakit</h1>

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

export default QuizBab5;