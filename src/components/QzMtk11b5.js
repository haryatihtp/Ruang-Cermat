import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Turunan dari f(x) = 3x^2 + 5x - 2 adalah?",
      options: ["6x + 5", "6x - 5", "3x + 5", "5x - 2"],
      answer: "6x + 5"
    },
    {
      question: "2. Jika f(x) = x^3 - 4x^2 + 2x, berapakah f'(x)?",
      options: ["3x^2 - 8x + 2", "3x^2 - 4x + 2", "x^2 - 8x + 2", "3x^2 - 8x - 2"],
      answer: "3x^2 - 8x + 2"
    },
    {
      question: "3. Hitung turunan pertama dari f(x) = 2x^4 - 3x^3 + 5!",
      options: ["8x^3 - 9x^2", "8x^3 - 3x^2", "4x^3 - 9x^2", "4x^3 - 3x^2"],
      answer: "8x^3 - 9x^2"
    },
    {
      question: "4. Jika y = 5x^2 - 7x + 1, maka dy/dx adalah?",
      options: ["10x - 7", "10x + 7", "5x - 7", "10x - 1"],
      answer: "10x - 7"
    },
    {
      question: "5. Turunan dari f(x) = 7x^3 - 2x + 4 adalah?",
      options: ["21x^2 - 2", "21x^2 + 2", "21x^2 - 1", "14x^2 - 2"],
      answer: "21x^2 - 2"
    },
    {
      question: "6. Hitung turunan pertama dari f(x) = x^5 + 3x^2 - 7!",
      options: ["5x^4 + 6x", "5x^4 + 3x", "6x^4 + 3x", "6x^4 + 6x"],
      answer: "5x^4 + 6x"
    },
    {
      question: "7. Jika y = 4x^3 + 6x^2 - 8, maka dy/dx adalah?",
      options: ["12x^2 + 12x", "12x^2 + 6x", "8x^2 + 12x", "8x^2 + 6x"],
      answer: "12x^2 + 12x"
    },
    {
      question: "8. Turunan dari f(x) = (3x^2 - 4x)(x^3) adalah?",
      options: ["9x^4 - 4x^3", "9x^4 - 12x^2", "9x^4 - 4x^3 - 12x^2", "9x^4 + 4x^3 - 12x^2"],
      answer: "9x^4 - 4x^3 - 12x^2"
    },
    {
      question: "9. Jika f(x) = (2x^2 - 3x)/(x^2), maka f'(x) adalah?",
      options: ["4x - 3", "4x + 3", "4x - 6x^2", "4x + 6x^2"],
      answer: "4x - 3"
    },
    {
      question: "10. Turunan dari f(x) = e^x adalah?",
      options: ["e^x", "e^x - 1", "x * e^x", "ln(x)"],
      answer: "e^x"
    },
    {
      question: "11. Turunan dari y = ln(x) adalah?",
      options: ["1/x", "x", "ln(x) + 1", "1/x + x"],
      answer: "1/x"
    },
    {
      question: "12. Hitung turunan dari f(x) = sin(x) + cos(x)!",
      options: ["cos(x) - sin(x)", "-cos(x) + sin(x)", "sin(x) - cos(x)", "-sin(x) + cos(x)"],
      answer: "cos(x) - sin(x)"
    },
    {
      question: "13. Jika y = tan(x), maka dy/dx adalah?",
      options: ["sec^2(x)", "-sec^2(x)", "tan^2(x)", "1 + tan^2(x)"],
      answer: "sec^2(x)"
    },
    {
      question: "14. Hitung turunan pertama dari f(x) = x^2 * sin(x)!",
      options: ["2x * sin(x) + x^2 * cos(x)", "2x * cos(x) + x^2 * sin(x)", "2x * sin(x) - x^2 * cos(x)", "2x - sin(x) + cos(x)"],
      answer: "2x * sin(x) + x^2 * cos(x)"
    },
    {
      question: "15. Turunan dari y = cos(x^2) adalah?",
      options: ["-2x * sin(x^2)", "2x * cos(x^2)", "-x^2 * sin(x)", "-sin(x^2)"],
      answer: "-2x * sin(x^2)"
    },
    {
      question: "16. Jika f(x) = ln(2x), maka f'(x) adalah?",
      options: ["1/x", "1/(2x)", "1/x + 2", "1/(2x) + 2"],
      answer: "1/x"
    },
    {
      question: "17. Turunan dari f(x) = sqrt(x) adalah?",
      options: ["1/(2sqrt(x))", "1/sqrt(x)", "1/(4sqrt(x))", "2/sqrt(x)"],
      answer: "1/(2sqrt(x))"
    },
    {
      question: "18. Hitung turunan dari f(x) = x * e^x!",
      options: ["x * e^x + e^x", "x * e^x - e^x", "e^x - x", "e^x + x^2"],
      answer: "x * e^x + e^x"
    },
    {
      question: "19. Jika y = x^3 * ln(x), maka dy/dx adalah?",
      options: ["3x^2 * ln(x) + x^2", "3x^2 * ln(x) + x^3", "x^2 * ln(x) + 3x", "3x^2 + ln(x)"],
      answer: "3x^2 * ln(x) + x^2"
    },
    {
      question: "20. Turunan dari f(x) = cos(x)/x adalah?",
      options: ["-sin(x)/x - cos(x)/x^2", "-cos(x)/x^2", "-sin(x)/x^2", "sin(x)/x + cos(x)/x^2"],
      answer: "-sin(x)/x - cos(x)/x^2"
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
