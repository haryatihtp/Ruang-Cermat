import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal6 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Integrasi dari x² adalah:",
      options: [
        { label: "A. (1/3)x³ + C", value: "A", isCorrect: true },
        { label: "B. (1/2)x³ + C", value: "B" },
        { label: "C. x³ + C", value: "C" },
        { label: "D. (1/4)x³ + C", value: "D" },
      ],
      explanation:
        "Integrasi dari x² adalah (1/3)x³ + C, dengan C adalah konstanta integrasi.",
    },
    {
      question: "Apa hasil dari ∫(3x² - 2x + 1) dx?",
      options: [
        { label: "A. x³ - x² + x + C", value: "A", isCorrect: true },
        { label: "B. x³ - x² + C", value: "B" },
        { label: "C. (3/4)x³ - (1/2)x² + x + C", value: "C" },
        { label: "D. x³ - 2x + C", value: "D" },
      ],
      explanation:
        "Untuk integral ∫(3x² - 2x + 1) dx, hasilnya adalah x³ - x² + x + C.",
    },
    {
      question: "Integrasi dari sin(x) adalah:",
      options: [
        { label: "A. -cos(x) + C", value: "A", isCorrect: true },
        { label: "B. cos(x) + C", value: "B" },
        { label: "C. -sin(x) + C", value: "C" },
        { label: "D. sin(x) + C", value: "D" },
      ],
      explanation: "Integral dari sin(x) adalah -cos(x) + C.",
    },
    {
      question: "Apa hasil dari ∫(x³ + 2x) dx?",
      options: [
        { label: "A. (1/4)x⁴ + x² + C", value: "A", isCorrect: true },
        { label: "B. (1/3)x³ + x² + C", value: "B" },
        { label: "C. (1/4)x⁴ + x²", value: "C" },
        { label: "D. x⁴ + x² + C", value: "D" },
      ],
      explanation:
        "Untuk integral ∫(x³ + 2x) dx, hasilnya adalah (1/4)x⁴ + x² + C.",
    },
    {
      question: "Integrasi dari e^x adalah:",
      options: [
        { label: "A. e^x + C", value: "A", isCorrect: true },
        { label: "B. e^x", value: "B" },
        { label: "C. e^x + 1", value: "C" },
        { label: "D. x * e^x + C", value: "D" },
      ],
      explanation: "Integral dari e^x adalah e^x + C.",
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
          <h1 className="latihan-soal1-title">Mode Integral</h1>
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
        <h1 className="latihan-soal1-title">Mode Integral</h1>
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
export default LatihanSoal6;