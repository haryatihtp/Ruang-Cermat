import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Tentukan nilai x sehingga 7x ≡ 5 (mod 12).",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: "x = 1"
    },
    {
      question: "2. Jika 4x ≡ 10 (mod 14), berapakah nilai x?",
      options: ["x = 3", "x = 5", "x = 6", "x = 7"],
      answer: "x = 3"
    },
    {
      question: "3. Tentukan nilai n sehingga 9n ≡ 3 (mod 15).",
      options: ["n = 1", "n = 2", "n = 4", "n = 5"],
      answer: "n = 2"
    },
    {
      question: "4. Hitung nilai x yang memenuhi 5x ≡ 1 (mod 11).",
      options: ["x = 2", "x = 3", "x = 5", "x = 7"],
      answer: "x = 9"
    },
    {
      question: "5. Jika 6x ≡ 8 (mod 10), berapakah nilai x?",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: "x = 3"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Tryout Kimia Kelas XI: Hukum Termokimia</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;
