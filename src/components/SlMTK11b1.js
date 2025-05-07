import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa hasil dari penjumlahan dua matriks berikut?\n\nA = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]",
      options: [
        { label: "A. [[6, 8], [10, 12]]", value: "A", isCorrect: true },
        { label: "B. [[1, 2], [3, 4]]", value: "B" },
        { label: "C. [[5, 6], [7, 8]]", value: "C" },
        { label: "D. [[0, 0], [0, 0]]", value: "D" },
      ],
      explanation:
        "Penjumlahan matriks dilakukan dengan menjumlahkan elemen-elemen yang bersesuaian. Hasil dari A + B adalah [[1+5, 2+6], [3+7, 4+8]] = [[6, 8], [10, 12]].",
    },
    {
      question: "Apa hasil perkalian skalar dari matriks berikut dengan skalar 2?\n\nA = [[3, 4], [5, 6]]",
      options: [
        { label: "A. [[6, 8], [10, 12]]", value: "A", isCorrect: true },
        { label: "B. [[3, 4], [5, 6]]", value: "B" },
        { label: "C. [[1, 2], [3, 4]]", value: "C" },
        { label: "D. [[0, 0], [0, 0]]", value: "D" },
      ],
      explanation:
        "Perkalian skalar matriks dilakukan dengan mengalikan setiap elemen matriks dengan skalar. 2 * A = 2 * [[3, 4], [5, 6]] = [[6, 8], [10, 12]].",
    },
    {
      question: "Diketahui matriks A = [[2, 3], [4, 5]], B = [[1, 0], [0, 1]]. Berapakah hasil perkalian A x B?",
      options: [
        { label: "A. [[2, 3], [4, 5]]", value: "A", isCorrect: true },
        { label: "B. [[1, 0], [0, 1]]", value: "B" },
        { label: "C. [[3, 5], [7, 9]]", value: "C" },
        { label: "D. [[2, 1], [4, 3]]", value: "D" },
      ],
      explanation:
        "Perkalian matriks A dan B dilakukan dengan cara mengalikan elemen-elemen baris dari A dengan elemen-elemen kolom dari B. Hasil dari A x B = [[2, 3], [4, 5]] karena B adalah matriks identitas.",
    },
    {
      question: "Apakah hasil determinan dari matriks berikut?\n\nA = [[1, 2], [3, 4]]",
      options: [
        { label: "A. -2", value: "A", isCorrect: true },
        { label: "B. 2", value: "B" },
        { label: "C. 0", value: "C" },
        { label: "D. 5", value: "D" },
      ],
      explanation:
        "Determinannya dihitung dengan rumus det(A) = (1 * 4) - (2 * 3) = 4 - 6 = -2.",
    },
    {
      question: "Jika matriks A = [[a, b], [c, d]] dan determinannya adalah 5, berapakah nilai dari ad - bc?",
      options: [
        { label: "A. 5", value: "A", isCorrect: true },
        { label: "B. -5", value: "B" },
        { label: "C. 0", value: "C" },
        { label: "D. 10", value: "D" },
      ],
      explanation:
        "Determinannya dihitung dengan rumus det(A) = ad - bc. Jika diketahui determinan A = 5, maka ad - bc = 5.",
    },
    {
      question: "Berapa invers dari matriks berikut?\n\nA = [[4, 7], [2, 6]]",
      options: [
        { label: "A. [[6, -7], [-2, 4]]", value: "A", isCorrect: true },
        { label: "B. [[7, 4], [6, 2]]", value: "B" },
        { label: "C. [[4, 6], [2, 7]]", value: "C" },
        { label: "D. [[2, 4], [1, 3]]", value: "D" },
      ],
      explanation:
        "Matriks invers A dihitung dengan rumus A^-1 = (1/det(A)) * adj(A). Determinan dari A adalah det(A) = (4 * 6) - (7 * 2) = 24 - 14 = 10, sehingga invers A adalah [[6, -7], [-2, 4]].",
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
          <h1 className="latihan-soal1-title">Mode Matriks</h1>
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
        <h1 className="latihan-soal1-title">Mode Matriks</h1>
        <div className="latihan-soal1-question">
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
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
          </button>
          <button
            className="nav-button next"
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

export default LatihanSoal1;