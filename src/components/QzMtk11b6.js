import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Hitung integral dari 2x terhadap x.",
      options: ["x^2 + C", "2x^2 + C", "x^2/2 + C", "2x + C"],
      answer: "x^2 + C"
    },
    {
      question: "2. Hitung integral dari sin(x) terhadap x.",
      options: ["cos(x) + C", "-cos(x) + C", "-sin(x) + C", "tan(x) + C"],
      answer: "-cos(x) + C"
    },
    {
      question: "3. Hitung integral dari 1/x terhadap x.",
      options: ["ln(x) + C", "1/x + C", "e^x + C", "-ln(x) + C"],
      answer: "ln(x) + C"
    },
    {
      question: "4. Hitung integral dari e^x terhadap x.",
      options: ["e^x + C", "xe^x + C", "ln(x) + C", "1/x + C"],
      answer: "e^x + C"
    },
    {
      question: "5. Hitung integral dari 3x^2 terhadap x.",
      options: ["x^3 + C", "x^2 + C", "3x + C", "x^4 + C"],
      answer: "x^3 + C"
    },
    {
      question: "6. Hitung integral dari cos(x) terhadap x.",
      options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
      answer: "sin(x) + C"
    },
    {
      question: "7. Hitung integral dari tan(x) terhadap x.",
      options: ["ln(cos(x)) + C", "-ln(cos(x)) + C", "ln(sin(x)) + C", "-ln(sin(x)) + C"],
      answer: "-ln(cos(x)) + C"
    },
    {
      question: "8. Hitung integral dari x^3 terhadap x.",
      options: ["x^4/4 + C", "x^3/3 + C", "4x + C", "3x^3 + C"],
      answer: "x^4/4 + C"
    },
    {
      question: "9. Hitung integral dari 1/(1 + x^2) terhadap x.",
      options: ["arctan(x) + C", "-arctan(x) + C", "ln(x) + C", "-ln(x) + C"],
      answer: "arctan(x) + C"
    },
    {
      question: "10. Hitung integral dari 1 terhadap x.",
      options: ["x + C", "1/x + C", "ln(x) + C", "x^2 + C"],
      answer: "x + C"
    },
    {
      question: "11. Hitung integral dari sec^2(x) terhadap x.",
      options: ["tan(x) + C", "-tan(x) + C", "sec(x) + C", "-sec(x) + C"],
      answer: "tan(x) + C"
    },
    {
      question: "12. Hitung integral dari 5 terhadap x.",
      options: ["5x + C", "x^5 + C", "5x^2/2 + C", "1/5x + C"],
      answer: "5x + C"
    },
    {
      question: "13. Hitung integral dari 4x terhadap x.",
      options: ["2x^2 + C", "4x^2 + C", "x^4 + C", "x^2 + C"],
      answer: "2x^2 + C"
    },
    {
      question: "14. Hitung integral dari sqrt(x) terhadap x.",
      options: ["2/3 x^(3/2) + C", "x^(3/2) + C", "1/2 x^(3/2) + C", "3/2 x^(1/2) + C"],
      answer: "2/3 x^(3/2) + C"
    },
    {
      question: "15. Hitung integral dari 1/(1 - x^2) terhadap x.",
      options: ["arcsin(x) + C", "-arcsin(x) + C", "arctan(x) + C", "-arctan(x) + C"],
      answer: "arcsin(x) + C"
    },
    {
      question: "16. Hitung integral dari x^2 terhadap x.",
      options: ["x^3/3 + C", "3x^2 + C", "x^2 + C", "x^3 + C"],
      answer: "x^3/3 + C"
    },
    {
      question: "17. Hitung integral dari 1/(cos^2(x)) terhadap x.",
      options: ["tan(x) + C", "-tan(x) + C", "sec(x) + C", "-sec(x) + C"],
      answer: "tan(x) + C"
    },
    {
      question: "18. Hitung integral dari 3/x terhadap x.",
      options: ["3ln(x) + C", "ln(x) + C", "3/x + C", "x^3 + C"],
      answer: "3ln(x) + C"
    },
    {
      question: "19. Hitung integral dari x^4 terhadap x.",
      options: ["x^5/5 + C", "4x^3 + C", "x^5 + C", "5x^4 + C"],
      answer: "x^5/5 + C"
    },
    {
      question: "20. Hitung integral dari -sin(x) terhadap x.",
      options: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "-sin(x) + C"],
      answer: "cos(x) + C"
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
      <h1>Kuis Matematika Kelas XI</h1>
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
