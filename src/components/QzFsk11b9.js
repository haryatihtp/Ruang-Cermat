import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab9 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan gelombang bunyi?",
        options: [
            "Gelombang elektromagnetik yang merambat melalui ruang hampa",
            "Gelombang longitudinal yang merambat melalui medium",
            "Gelombang transversal dengan frekuensi tinggi",
            "Gelombang yang tidak membutuhkan medium untuk merambat"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan gelombang cahaya?",
        options: [
            "Gelombang mekanik yang membutuhkan medium",
            "Gelombang longitudinal yang merambat di udara",
            "Gelombang elektromagnetik yang dapat merambat di ruang hampa",
            "Gelombang yang hanya terlihat di bawah cahaya matahari"
        ],
        answer: 2
    },
    {
        question: "Kecepatan bunyi di udara pada suhu 20°C adalah?",
        options: [
            "343 m/s",
            "300 m/s",
            "400 m/s",
            "320 m/s"
        ],
        answer: 0
    },
    {
        question: "Frekuensi bunyi yang dapat didengar oleh manusia berkisar antara?",
        options: [
            "1 Hz - 10 Hz",
            "20 Hz - 20.000 Hz",
            "30 Hz - 50.000 Hz",
            "50 Hz - 100.000 Hz"
        ],
        answer: 1
    },
    {
        question: "Panjang gelombang bunyi dalam medium udara ditentukan oleh?",
        options: [
            "Kecepatan bunyi dan amplitudo",
            "Kecepatan bunyi dan frekuensi",
            "Amplitudo dan frekuensi",
            "Fase dan amplitudo"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan intensitas bunyi?",
        options: [
            "Frekuensi bunyi per satuan waktu",
            "Energi bunyi yang sampai di suatu area per satuan waktu",
            "Kecepatan rambat gelombang bunyi",
            "Jumlah panjang gelombang per detik"
        ],
        answer: 1
    },
    {
        question: "Fenomena doppler terjadi akibat?",
        options: [
            "Perubahan amplitudo gelombang",
            "Perubahan kecepatan gelombang",
            "Perubahan panjang gelombang karena gerakan sumber atau pendengar",
            "Perubahan medium perambatan gelombang"
        ],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan resonansi pada bunyi?",
        options: [
            "Pemantulan gelombang bunyi",
            "Superposisi dua gelombang bunyi",
            "Peningkatan amplitudo bunyi akibat kesamaan frekuensi alami suatu benda",
            "Penyebaran bunyi ke segala arah"
        ],
        answer: 2
    },
    {
        question: "Cahaya termasuk dalam gelombang?",
        options: [
            "Mekanik dan longitudinal",
            "Elektromagnetik dan transversal",
            "Elektromagnetik dan longitudinal",
            "Mekanik dan transversal"
        ],
        answer: 1
    },
    {
        question: "Kecepatan cahaya di ruang hampa adalah?",
        options: [
            "3 × 10⁸ m/s",
            "3 × 10⁷ m/s",
            "3 × 10⁹ m/s",
            "3 × 10⁶ m/s"
        ],
        answer: 0
    },
    {
        question: "Fenomena pemantulan cahaya memenuhi hukum?",
        options: [
            "Hukum Snellius",
            "Hukum Doppler",
            "Hukum Kirchhoff",
            "Hukum Newton"
        ],
        answer: 0
    },
    {
        question: "Fenomena pembiasan cahaya terjadi karena?",
        options: [
            "Perubahan arah cahaya akibat bertemu dengan permukaan kasar",
            "Cahaya mengenai penghalang transparan",
            "Perubahan kecepatan cahaya saat melewati medium dengan kerapatan berbeda",
            "Cahaya merambat di ruang hampa"
        ],
        answer: 2
    },
    {
        question: "Warna cahaya yang memiliki panjang gelombang paling panjang adalah?",
        options: [
            "Merah",
            "Hijau",
            "Biru",
            "Ungu"
        ],
        answer: 0
    },
    {
        question: "Fenomena pelangi terjadi karena?",
        options: [
            "Pemantulan cahaya di atmosfer",
            "Pembiasan dan dispersi cahaya di tetesan air hujan",
            "Interferensi cahaya di permukaan tanah",
            "Resonansi gelombang elektromagnetik"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan polarisasi cahaya?",
        options: [
            "Perubahan arah gelombang longitudinal",
            "Perubahan arah gelombang transversal menjadi terarah",
            "Perubahan warna cahaya menjadi satu warna",
            "Perubahan kecepatan cahaya akibat medium"
        ],
        answer: 1
    },
    {
        question: "Fenomena difraksi cahaya adalah?",
        options: [
            "Pembelokan cahaya di sekitar penghalang kecil",
            "Pemantulan cahaya di permukaan kasar",
            "Penyatuan dua cahaya menjadi satu arah",
            "Pemecahan cahaya menjadi spektrum"
        ],
        answer: 0
    },
    {
        question: "Hukum Planck menyatakan bahwa energi cahaya berbanding lurus dengan?",
        options: [
            "Kecepatan cahaya",
            "Frekuensi gelombang",
            "Panjang gelombang",
            "Amplitudo gelombang"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan interferensi cahaya?",
        options: [
            "Perubahan arah gelombang cahaya",
            "Gabungan dua gelombang cahaya sehingga menghasilkan pola terang dan gelap",
            "Pecahnya cahaya menjadi berbagai warna",
            "Pemantulan cahaya di permukaan licin"
        ],
        answer: 1
    },
    {
        question: "Cahaya tampak memiliki panjang gelombang antara?",
        options: [
            "100 nm - 400 nm",
            "400 nm - 700 nm",
            "700 nm - 1000 nm",
            "1000 nm - 1500 nm"
        ],
        answer: 1
    },
    {
        question: "Gelombang bunyi termasuk dalam gelombang?",
        options: [
            "Transversal",
            "Longitudinal",
            "Elektromagnetik",
            "Non-mekanik"
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
      <h1>Quiz Bab 9: Gelombang Bunyi Dan Cahaya</h1>

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

export default QuizBab9;