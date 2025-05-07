import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 1 + 2 + 3 + ... + n = n(n + 1) / 2",
      options: [
        { label: "A. n(n+1)", value: "A" },
        { label: "B. n(n-1)", value: "B" },
        { label: "C. n(n+1)/2", value: "C", isCorrect: true },
        { label: "D. 2n(n+1)", value: "D" },
      ],
      explanation:
        "Jawaban: Kita dapat membuktikan hal ini dengan menggunakan induksi matematika:\n- Basis: Untuk n = 1, 1 = 1(1+1)/2, yang benar.\n- Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 1 + 2 + ... + k = k(k + 1)/2. Selanjutnya, buktikan untuk n = k + 1:\n1 + 2 + ... + k + (k + 1) = k(k + 1)/2 + (k + 1) = (k + 1)(k + 2)/2. Dengan demikian, rumus ini terbukti untuk semua bilangan bulat positif n.",
    },
    {
      question: "Buktikan bahwa 2^n - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(n-1))",
      options: [
        { label: "A. 2^n", value: "A" },
        { label: "B. 2^(n-1)", value: "B" },
        { label: "C. 2^n - 1", value: "C", isCorrect: true },
        { label: "D. 2^n + 1", value: "D" },
      ],
      explanation:
        "Jawaban: Kita akan membuktikan hal ini dengan induksi matematika:\n- Basis: Untuk n = 1, 2^1 - 1 = 1, dan (2-1) = 1. Jadi, rumus ini benar untuk n = 1.\n- Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 2^k - 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^(k-1)). Buktikan untuk n = k + 1:\n2^(k+1) - 1 = 2 * (2^k - 1) + 1 = (2 - 1)(2 + 2)(2 + 2^2)...(2 + 2^k). Dengan demikian, rumus ini terbukti untuk semua n.",
    },
    {
      question: "Buktikan bahwa n^2 + n adalah hasil perkalian dua bilangan berturut-turut.",
      options: [
        { label: "A. n(n+1)", value: "A", isCorrect: true },
        { label: "B. n(n-1)", value: "B" },
        { label: "C. n^2 + n", value: "C" },
        { label: "D. 2n(n+1)", value: "D" },
      ],
      explanation:
        "Jawaban: Kita dapat memfaktorkan n^2 + n sebagai:\nn^2 + n = n(n + 1).\nDengan demikian, n^2 + n adalah hasil perkalian dua bilangan berturut-turut, yaitu n dan n+1.",
    },
    {
      question: "Buktikan bahwa jumlah deret 1 + 3 + 5 + ... + (2n-1) = n^2",
      options: [
        { label: "A. n(n+1)", value: "A" },
        { label: "B. n^2", value: "B", isCorrect: true },
        { label: "C. 2n^2", value: "C" },
        { label: "D. n(n-1)", value: "D" },
      ],
      explanation:
        "Jawaban: Kita buktikan dengan induksi matematika:\n- Basis: Untuk n = 1, deret ini adalah 1, dan 1^2 = 1, jadi benar.\n- Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 1 + 3 + 5 + ... + (2k-1) = k^2. Buktikan untuk n = k + 1:\n1 + 3 + 5 + ... + (2k-1) + (2(k+1) - 1) = k^2 + (2k + 1) = (k + 1)^2. Dengan demikian, rumus ini terbukti untuk semua bilangan bulat positif n.",
    },
    {
      question: "Buktikan bahwa untuk setiap bilangan bulat positif n, berlaku: 3^n - 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^(n-1))",
      options: [
        { label: "A. 3^n", value: "A" },
        { label: "B. 3^(n-1)", value: "B" },
        { label: "C. 3^n - 1", value: "C", isCorrect: true },
        { label: "D. 3^n + 1", value: "D" },
      ],
      explanation:
        "Jawaban: Kita buktikan dengan induksi matematika:\n- Basis: Untuk n = 1, 3^1 - 1 = 2, dan (3 - 1) = 2. Jadi rumus ini benar untuk n = 1.\n- Langkah induksi: Misalkan rumus ini benar untuk n = k, yaitu 3^k - 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^(k-1)). Buktikan untuk n = k + 1:\n3^(k+1) - 1 = 3 * (3^k - 1) + 1 = (3 - 1)(3 + 3)(3 + 3^2)...(3 + 3^k). Dengan demikian, rumus ini terbukti untuk semua n.",
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
          <h1 className="latihan-soal1-title">Mode Induksi Matematika</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
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
        <h1 className="latihan-soal1-title">Mode Induksi Matematika</h1>
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
                answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""
              }`}
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

export default LatihanSoal3;