import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa turunan pertama dari fungsi f(x) = 3x^2 + 5x - 7?",
      options: [
        { label: "A. 6x + 5", value: "A", isCorrect: true },
        { label: "B. 6x - 5", value: "B" },
        { label: "C. 3x^2 + 5", value: "C" },
        { label: "D. 6x + 7", value: "D" },
      ],
      explanation:
        "Turunan pertama dari f(x) = 3x^2 + 5x - 7 adalah f'(x) = 6x + 5, berdasarkan aturan turunan fungsi polinomial.",
    },
    {
      question: "Jika f(x) = x^3 - 4x^2 + 2x, berapakah turunan pertama f'(x)?",
      options: [
        { label: "A. 3x^2 - 8x + 2", value: "A", isCorrect: true },
        { label: "B. 3x^2 - 4x + 2", value: "B" },
        { label: "C. x^3 - 4x + 2", value: "C" },
        { label: "D. 3x^2 - 4x - 2", value: "D" },
      ],
      explanation:
        "Turunan pertama dari f(x) = x^3 - 4x^2 + 2x adalah f'(x) = 3x^2 - 8x + 2, menggunakan aturan turunan pangkat.",
    },
    {
      question: "Berapa turunan pertama dari fungsi f(x) = 5x^4 - 2x^3 + x^2?",
      options: [
        { label: "A. 20x^3 - 6x^2 + 2x", value: "A", isCorrect: true },
        { label: "B. 5x^3 - 6x^2 + 2x", value: "B" },
        { label: "C. 20x^3 - 2x^2 + x", value: "C" },
        { label: "D. 20x^4 - 2x^3 + 2x", value: "D" },
      ],
      explanation:
        "Turunan pertama dari f(x) = 5x^4 - 2x^3 + x^2 adalah f'(x) = 20x^3 - 6x^2 + 2x, menggunakan aturan turunan untuk setiap suku.",
    },
    {
      question: "Fungsi g(x) = sin(x) memiliki turunan pertama yang berupa …",
      options: [
        { label: "A. cos(x)", value: "A", isCorrect: true },
        { label: "B. -cos(x)", value: "B" },
        { label: "C. tan(x)", value: "C" },
        { label: "D. -tan(x)", value: "D" },
      ],
      explanation:
        "Turunan dari g(x) = sin(x) adalah g'(x) = cos(x), berdasarkan aturan turunan trigonometri.",
    },
    {
      question: "Jika f(x) = e^x, maka turunan pertama dari f(x) adalah …",
      options: [
        { label: "A. e^x", value: "A", isCorrect: true },
        { label: "B. x^e", value: "B" },
        { label: "C. 1", value: "C" },
        { label: "D. e^(-x)", value: "D" },
      ],
      explanation:
        "Turunan dari f(x) = e^x adalah f'(x) = e^x, karena turunan dari fungsi eksponensial dengan basis e adalah fungsi itu sendiri.",
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
          <h1 className="latihan-soal1-title">Mode Turunan</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length} </p>
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
        <h1 className="latihan-soal1-title">Mode Turunan</h1>
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
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

export default LatihanSoal5;