import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Tentukan nilai limit ( \\lim_{x \\to 2} (x^2 - 4) \\).",
      options: ["0", "4", "2", "8"],
      answer: "0"
    },
    {
      question: "2. Hitung ( \\lim_{x \\to 3} (2x + 5) \\).",
      options: ["11", "10", "8", "15"],
      answer: "11"
    },
    {
      question: "3. Tentukan nilai limit ( \\lim_{x \\to \\infty} \\frac{2x^2 + 3}{x^2 + 1} \\).",
      options: ["2", "1", "\\infty", "0"],
      answer: "2"
    },
    {
      question: "4. Berapakah ( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\)?",
      options: ["0", "1", "\\infty", "-1"],
      answer: "1"
    },
    {
      question: "5. Tentukan ( \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} \\).",
      options: ["2", "1", "0", "\\infty"],
      answer: "2"
    },
    {
      question: "6. Hitung ( \\lim_{x \\to \\infty} \\frac{3x + 5}{7x - 2} \\).",
      options: ["0", "3/7", "1", "\\infty"],
      answer: "3/7"
    },
    {
      question: "7. Berapakah ( \\lim_{x \\to 0^+} \\ln(x) \\)?",
      options: ["-\\infty", "0", "\\infty", "1"],
      answer: "-\\infty"
    },
    {
      question: "8. Tentukan ( \\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 4}}{x} \\).",
      options: ["1", "0", "\\infty", "2"],
      answer: "1"
    },
    {
      question: "9. Jika ( f(x) = \\frac{x^2 - 9}{x - 3} ), maka ( \\lim_{x \\to 3} f(x) ) adalah?",
      options: ["6", "3", "9", "Tidak terdefinisi"],
      answer: "6"
    },
    {
      question: "10. Hitung ( \\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} \\).",
      options: ["0", "1", "1/2", "\\infty"],
      answer: "1/2"
    },
    {
      question: "11. Tentukan ( \\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2} \\).",
      options: ["8", "12", "16", "24"],
      answer: "12"
    },
    {
      question: "12. Berapakah ( \\lim_{x \\to \\infty} \\frac{2x + 1}{5x - 3} \\)?",
      options: ["0", "2/5", "1", "\\infty"],
      answer: "2/5"
    },
    {
      question: "13. Hitung ( \\lim_{x \\to 0} \\frac{\\tan(x)}{x} \\).",
      options: ["0", "1", "\\infty", "-1"],
      answer: "1"
    },
    {
      question: "14. Tentukan ( \\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1} \\).",
      options: ["0.5", "1", "2", "\\infty"],
      answer: "0.5"
    },
    {
      question: "15. Jika ( f(x) = x^2 - 3x + 2 ), maka ( \\lim_{x \\to \\infty} f(x) ) adalah?",
      options: ["\\infty", "-\\infty", "0", "Tidak terdefinisi"],
      answer: "\\infty"
    },
    {
      question: "16. Berapakah ( \\lim_{x \\to -\\infty} \\frac{4x^3 + 2}{x^3 - 5x + 1} \\)?",
      options: ["4", "1", "0", "\\infty"],
      answer: "4"
    },
    {
      question: "17. Tentukan ( \\lim_{x \\to 0} \\frac{x}{\\sin(x)} \\).",
      options: ["0", "1", "\\infty", "-1"],
      answer: "1"
    },
    {
      question: "18. Berapakah ( \\lim_{x \\to 2} (x^2 - 4x + 4) \\)?",
      options: ["0", "4", "2", "1"],
      answer: "0"
    },
    {
      question: "19. Hitung ( \\lim_{x \\to \\infty} \\frac{x + 2}{\\sqrt{x^2 + 4}} \\).",
      options: ["1", "2", "0", "\\infty"],
      answer: "1"
    },
    {
      question: "20. Tentukan ( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \\).",
      options: ["0", "1", "\\infty", "-1"],
      answer: "1"
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
