import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal2 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa hasil transformasi koordinat (x, y) setelah diterjemahkan sejauh 3 satuan ke kanan dan 2 satuan ke atas?",
      options: [
        { label: "A. (x+3, y+2)", value: "A", isCorrect: true },
        { label: "B. (x-3, y-2)", value: "B" },
        { label: "C. (x+2, y+3)", value: "C" },
        { label: "D. (x+3, y-2)", value: "D" },
      ],
      explanation: "Transformasi translasi (penerjemahan) menggeser titik sejauh 3 satuan ke kanan dan 2 satuan ke atas. Jadi hasilnya adalah (x+3, y+2).",
    },
    {
      question: "Jika titik A(4, 5) dicerminkan terhadap sumbu X, berapakah koordinat titik hasil refleksinya?",
      options: [
        { label: "A. (4, -5)", value: "A", isCorrect: true },
        { label: "B. (-4, 5)", value: "B" },
        { label: "C. (-4, -5)", value: "C" },
        { label: "D. (5, 4)", value: "D" },
      ],
      explanation: "Refleksi terhadap sumbu X mengubah tanda dari koordinat y. Oleh karena itu, hasil refleksi dari titik A(4, 5) adalah A'(4, -5).",
    },
    {
      question: "Sebuah titik P(3, -2) diputar 90 derajat searah jarum jam terhadap titik asal (0, 0). Apa koordinat titik P setelah rotasi?",
      options: [
        { label: "A. (2, 3)", value: "A" },
        { label: "B. (2, -3)", value: "B" },
        { label: "C. (3, 2)", value: "C" },
        { label: "D. (-2, 3)", value: "D", isCorrect: true },
      ],
      explanation: "Rotasi 90 derajat searah jarum jam mengubah koordinat (x, y) menjadi (y, -x). Jadi, hasil rotasi dari P(3, -2) adalah P'(-2, 3).",
    },
    {
      question: "Pernyataan mana yang benar mengenai dilatasi dengan pusat di titik asal dan faktor skala 2?",
      options: [
        { label: "A. Titik hasil dilatasi memiliki koordinat (2x, 2y)", value: "A", isCorrect: true },
        { label: "B. Titik hasil dilatasi memiliki koordinat (x/2, y/2)", value: "B" },
        { label: "C. Titik hasil dilatasi memiliki koordinat (x+2, y+2)", value: "C" },
        { label: "D. Titik hasil dilatasi tetap pada posisi yang sama", value: "D" },
      ],
      explanation: "Dilatasi dengan faktor skala 2 akan menggandakan jarak setiap titik dari pusat dilatasi. Jadi, koordinat titik setelah dilatasi akan menjadi (2x, 2y).",
    },
    {
      question: "Jika sebuah titik Q(2, 3) mengalami refleksi terhadap garis y = x, berapakah koordinat hasil refleksi titik Q?",
      options: [
        { label: "A. (3, 2)", value: "A", isCorrect: true },
        { label: "B. (2, 3)", value: "B" },
        { label: "C. (-2, -3)", value: "C" },
        { label: "D. (-3, -2)", value: "D" },
      ],
      explanation: "Refleksi terhadap garis y = x menukar posisi koordinat x dan y. Jadi, hasil refleksi dari titik Q(2, 3) adalah Q'(3, 2).",
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
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Transformasi Matematika</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Mode Transformasi Matematika</h1>
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
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal2;