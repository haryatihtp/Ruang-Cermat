import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Fungsi utama uang sebagai alat tukar berarti...",
      options: [
        { label: "A. Uang digunakan untuk menciptakan modal usaha", value: "A" },
        {
          label: "B. Uang digunakan untuk membayar transaksi jual-beli",
          value: "B",
          isCorrect: true,
        },
        { label: "C. Uang digunakan untuk menyimpan kekayaan", value: "C" },
        { label: "D. Uang digunakan untuk menilai suatu barang", value: "D" },
      ],
      explanation:
        "Salah satu fungsi utama uang adalah sebagai alat tukar. Dengan adanya uang, transaksi jual-beli dapat dilakukan dengan lebih mudah dibandingkan sistem barter.",
    },
    {
      question: "Yang bukan termasuk jenis uang berdasarkan lembaga yang mengeluarkannya adalah...",
      options: [
        { label: "A. Uang kartal", value: "A" },
        { label: "B. Uang fiat", value: "B", isCorrect: true },
        { label: "C. Uang giral", value: "C" },
        { label: "D. Uang logam", value: "D" },
      ],
      explanation:
        "enis uang berdasarkan lembaga yang mengeluarkannya terbagi menjadi uang kartal (dikeluarkan oleh bank sentral) dan uang giral (dikeluarkan oleh bank umum). Sementara itu, uang fiat adalah uang yang nilainya ditentukan oleh pemerintah, bukan lembaga penerbit.",
    },
    {
      question:
        "Bank yang tugas utamanya mencetak dan mengedarkan uang adalah...",
      options: [
        { label: "A. Bank Swasta", value: "A" },
        { label: "B. Bank Sentral", value: "B", isCorrect: true },
        { label: "C. Bank Perkreditan Rakyat (BPR)", value: "C" },
        { label: "D. Bank Umum", value: "D" },
      ],
      explanation:
        "Bank sentral, seperti Bank Indonesia, bertugas mencetak, mengedarkan, dan mengatur jumlah uang yang beredar di masyarakat untuk menjaga stabilitas ekonomi.",
    },
    {
      question: "Salah satu fungsi bank umum adalah...",
      options: [
        { label: "A. Mengawasi sistem pembayaran", value: "A" },
        { label: "B. Mengatur kebijakan moneter", value: "B" },
        { label: "C. Menyediakan layanan kredit untuk masyarakat", value: "C", isCorrect: true },
        { label: "D. Mencetak uang", value: "D" },
      ],
      explanation:
        "Bank umum memiliki berbagai fungsi, salah satunya adalah menyediakan fasilitas kredit kepada masyarakat, baik untuk keperluan usaha maupun konsumsi.",
    },
    {
      question:
        "Apa yang dimaksud dengan uang giral?",
      options: [
        { label: "A. Uang elektronik yang digunakan untuk pembayaran digital", value: "A" },
        { label: "B. Uang dalam bentuk saldo rekening di bank yang dapat digunakan untuk pembayaran melalui cek atau transfer", value: "B", isCorrect: true },
        { label: "C. Uang yang hanya bisa digunakan di luar negeri", value: "C" },
        { label: "D. Uang kertas dan logam yang dikeluarkan bank sentral", value: "D" },
      ],
      explanation:
        "ang giral adalah uang yang berada dalam bentuk saldo rekening di bank. Uang ini bisa digunakan untuk pembayaran melalui cek, bilyet giro, atau transfer.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] !== undefined);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };


  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>
            Skor Anda: {score}/{questions.length}
          </p> 
          <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
          Ulangi Latihan
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Ekonomi</h1>
        <div className="latihan-soal1-question">
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex] !== undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] !== undefined && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
        <button
  className="latihan-soal1-nav-button prev"
  onClick={goToPreviousQuestion}
  disabled={currentQuestionIndex === 0}
>
  ← Soal Sebelumnya
</button>
<button
  className="latihan-soal1-nav-button next"
  onClick={
    currentQuestionIndex === questions.length - 1
      ? handleFinishQuiz
      : goToNextQuestion
  }
>
  {currentQuestionIndex === questions.length - 1
    ? "Selesai"
    : "Soal Selanjutnya →"}
</button>

        </div>
      </div>
    </div>
  );
};
export default LatihanSoal;