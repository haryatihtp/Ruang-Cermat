import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal4 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan program linear?",
      options: [
        { label: "A. Sistem persamaan linier yang tidak memiliki solusi", value: "A" },
        { label: "B. Proses pencarian nilai optimal dari fungsi tujuan dengan batasan-batasan linear", value: "B", isCorrect: true },
        { label: "C. Fungsi yang terdiri dari bilangan bulat", value: "C" },
        { label: "D. Sistem persamaan yang memiliki banyak solusi", value: "D" },
      ],
      explanation:
        "Program linear adalah cabang matematika yang membahas masalah pencarian nilai optimal dari suatu fungsi tujuan yang dibatasi oleh sejumlah ketidaksamaan atau persamaan linear.",
    },
    {
      question: "Manakah yang termasuk dalam batasan dari masalah program linear?",
      options: [
        { label: "A. Fungsi tujuan", value: "A" },
        { label: "B. Variabel keputusan", value: "B" },
        { label: "C. Ketidaksamaan atau persamaan linear", value: "C", isCorrect: true },
        { label: "D. Nilai optimal", value: "D" },
      ],
      explanation:
        "Batasan dalam masalah program linear biasanya berupa ketidaksamaan atau persamaan linear yang membatasi ruang solusi untuk fungsi tujuan.",
    },
    {
      question: "Dalam metode grafik, titik-titik yang membentuk area feasible adalah?",
      options: [
        { label: "A. Solusi optimal", value: "A" },
        { label: "B. Titik potong dari batasan", value: "B", isCorrect: true },
        { label: "C. Titik koordinat asal", value: "C" },
        { label: "D. Semua titik dalam ruang koordinat", value: "D" },
      ],
      explanation:
        "Dalam metode grafik, area feasible terbentuk oleh titik-titik yang merupakan hasil dari interseksi batasan-batasan linear. Titik-titik ini menggambarkan solusi yang memenuhi seluruh batasan.",
    },
    {
      question: "Fungsi tujuan dalam program linear biasanya berbentuk?",
      options: [
        { label: "A. Persamaan linear", value: "A" },
        { label: "B. Ketidaksamaan linear", value: "B" },
        { label: "C. Fungsi polinomial", value: "C" },
        { label: "D. Fungsi linear yang ingin dimaksimalkan atau diminimalkan", value: "D", isCorrect: true },
      ],
      explanation:
        "Fungsi tujuan dalam program linear biasanya merupakan fungsi linear yang ingin dimaksimalkan (misalnya keuntungan) atau diminimalkan (misalnya biaya).",
    },
    {
      question: "Jika suatu masalah program linear memiliki lebih dari satu solusi optimal, maka solusi tersebut akan berada pada?",
      options: [
        { label: "A. Titik potong batasan yang lebih tinggi", value: "A" },
        { label: "B. Semua titik pada garis batasan yang sejajar dengan fungsi tujuan", value: "B", isCorrect: true },
        { label: "C. Titik yang tidak berada dalam area feasible", value: "C" },
        { label: "D. Titik koordinat asal", value: "D" },
      ],
      explanation:
        "Jika ada lebih dari satu solusi optimal dalam program linear, solusi tersebut akan berada pada seluruh titik sepanjang garis batasan yang sejajar dengan garis fungsi tujuan.",
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
          <h1 className="latihan-soal1-title">Mode Program Linear</h1>
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
        <h1 className="latihan-soal1-title">Mode Program Linear</h1>
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

export default LatihanSoal4;