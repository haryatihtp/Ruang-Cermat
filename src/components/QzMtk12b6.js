import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Jika ( f(x) = x^3 - 4x^2 + 6x - 2 ), berapakah turunan pertama \( f'(x) \)?",
      options: ["( 3x^2 - 8x + 6 )", "( 3x^2 - 8x )", "\( 2x - 4 \)", "\( 3x^2 + 4x - 6 \)"],
      answer: "( 3x^2 - 8x + 6 )"
    },
    {
      question: "2. Tentukan turunan pertama dari \( f(x) = 5x^4 - 3x^3 + 2x^2 - x + 7 \).",
      options: ["\( 20x^3 - 9x^2 + 4x - 1 \)", "\( 20x^3 - 9x^2 + 2x \)", "\( 20x^2 - 9x^2 + 4x - 7 \)", "\( 5x^3 - 3x^2 + x \)"],
      answer: "\( 20x^3 - 9x^2 + 4x - 1 \)"
    },
    {
      question: "3. Jika \( y = x^2 \sin(x) \), berapakah turunan \( y' \) menggunakan aturan hasil kali?",
      options: ["\( 2x \sin(x) + x^2 \cos(x) \)", "\( 2x \cos(x) + x^2 \sin(x) \)", "\( x \sin(x) + x \cos(x) \)", "\( 2x \sin(x) - x^2 \cos(x) \)"],
      answer: "\( 2x \sin(x) + x^2 \cos(x) \)"
    },
    {
      question: "4. Tentukan turunan pertama dari \( f(x) = \\frac{3x^2 + 5}{x} \).",
      options: ["\( \\frac{6x}{x^2} - \\frac{5}{x^2} \)", "\( \\frac{6x - 5}{x^2} \)", "\( 6x + 5x \)", "\( \\frac{6x^2 - 5}{x} \)"],
      answer: "\( \\frac{6x - 5}{x^2} \)"
    },
    {
      question: "5. Berapakah turunan pertama dari \( f(x) = \\ln(x^2 + 1) \)?",
      options: ["\( \\frac{2x}{x^2 + 1} \)", "\( \\frac{1}{x^2 + 1} \)", "\( \\frac{x}{x^2 + 1} \)", "\( \\frac{2x}{\\ln(x^2 + 1)} \)"],
      answer: "\( \\frac{2x}{x^2 + 1} \)"
    },
    {
      question: "6. Jika \( f(x) = \\sqrt{x^3 + 2} \), berapakah turunan pertama \( f'(x) \)?",
      options: ["\( \\frac{3x^2}{2\\sqrt{x^3 + 2}} \)", "\( \\frac{3x}{2\\sqrt{x^3 + 2}} \)", "\( \\sqrt{3x^2 + 2} \)", "\( \\frac{3}{\\sqrt{x^3 + 2}} \)"],
      answer: "\( \\frac{3x^2}{2\\sqrt{x^3 + 2}} \)"
    },
    {
      question: "7. Tentukan turunan pertama dari \( f(x) = e^{2x} \).",
      options: ["\( 2e^{2x} \)", "\( e^{2x} \)", "\( 2xe^{2x} \)", "\( 2e^{x} \)"],
      answer: "\( 2e^{2x} \)"
    },
    {
      question: "8. Jika \( y = x^3 + 3x^2 + 5x + 2 \), berapakah \( y'' \) (turunan kedua)?",
      options: ["\( 6x + 6 \)", "\( 6x^2 + 6x \)", "\( 6x + 3 \)", "\( 3x + 6 \)"],
      answer: "\( 6x + 6 \)"
    },
    {
      question: "9. Tentukan turunan pertama dari \( f(x) = \\sin(2x) \).",
      options: ["\( 2\\cos(2x) \)", "\( \\cos(2x) \)", "\( \\sin(2x) \)", "\( 2\\sin(2x) \)"],
      answer: "\( 2\\cos(2x) \)"
    },
    {
      question: "10. Berapakah turunan pertama dari \( f(x) = \\frac{x}{x^2 + 1} \)?",
      options: ["\( \\frac{1 - x^2}{(x^2 + 1)^2} \)", "\( \\frac{1 - 2x^2}{(x^2 + 1)^2} \)", "\( \\frac{2x}{x^2 + 1} \)", "\( \\frac{1}{x^2 + 1} \)"],
      answer: "\( \\frac{1 - x^2}{(x^2 + 1)^2} \)"
    },
    {
      question: "11. Jika \( y = \\ln(x) + \\frac{1}{x} \), tentukan turunan \( y' \).",
      options: ["\( \\frac{1}{x} - \\frac{1}{x^2} \)", "\( \\frac{1}{x} + \\frac{1}{x^2} \)", "\( \\ln(x^2) \)", "\( \\frac{x - 1}{x^2} \)"],
      answer: "\( \\frac{1}{x} + \\frac{1}{x^2} \)"
    },
    {
      question: "12. Jika \( f(x) = x^2e^x \), tentukan turunan pertama \( f'(x) \) menggunakan aturan hasil kali.",
      options: ["( 2xe^x + x^2e^x )", "( 2xe^x - x^2e^x )", "( e^x(x + 2x^2) )", "( 2x^2e^x )"],
      answer: "\( 2xe^x + x^2e^x \)"
    },
    {
      question: "13. Tentukan turunan pertama dari ( f(x) = \\cos(3x) ).",
      options: ["\( -3\\sin(3x) \)", "\( 3\\cos(3x) \)", "\( \\sin(3x) \)", "\( -\\cos(3x) \)"],
      answer: "\( -3\\sin(3x) \)"
    },
    {
      question: "14. Berapakah turunan pertama dari \( f(x) = \\tan(x) \)?",
      options: ["\( \\sec^2(x) \)", "\( \\csc^2(x) \)", "\( \\sin^2(x) \)", "\( \\cos^2(x) \)"],
      answer: "\( \\sec^2(x) \)"
    },
    {
      question: "15. Jika \( f(x) = \\frac{1}{x^2 + 1} \), berapakah turunan pertama \( f'(x) \)?",
      options: ["\( \\frac{-2x}{(x^2 + 1)^2} \)", "\( \\frac{2x}{(x^2 + 1)^2} \)", "\( \\frac{-1}{(x^2 + 1)^2} \)", "\( \\frac{-x}{x^2 + 1} \)"],
      answer: "\( \\frac{-2x}{(x^2 + 1)^2} \)"
    },
    {
      question: "16. Tentukan turunan pertama dari \( f(x) = \\arcsin(x) \).",
      options: ["\( \\frac{1}{\\sqrt{1 - x^2}} \)", "\( \\frac{-1}{\\sqrt{1 - x^2}} \)", "\( \\sqrt{1 - x^2} \)", "\( 1 - x^2 \)"],
      answer: "\( \\frac{1}{\\sqrt{1 - x^2}} \)"
    },
    {
      question: "17. Tentukan turunan pertama dari \( f(x) = x^2 + 2x \\ln(x) \).",
      options: ["\( 2x + 2 \\ln(x) + 2 \)", "\( 2x + 2 \\ln(x) \)", "\( x + 2 \\ln(x) \)", "\( 2x + \\ln(x) + 2 \)"],
      answer: "\( 2x + 2 \\ln(x) + 2 \)"
    },
    {
      question: "18. Jika \( f(x) = \\ln(\\sqrt{x}) \), berapakah \( f'(x) \)?",
      options: ["\( \\frac{1}{2x} \)", "\( \\frac{2}{x} \)", "\( \\ln(x) \)", "\( \\frac{1}{x^2} \)"],
      answer: "\( \\frac{1}{2x} \)"
    },
    {
      question: "19. Tentukan turunan pertama dari \( f(x) = \\frac{\\sin(x)}{x^2} \).",
      options: ["\( \\frac{x^2 \\cos(x) - 2x \\sin(x)}{x^4} \)", "\( \\frac{x^2 \\sin(x) - 2x \\cos(x)}{x^4} \)", "\( \\frac{2 \\cos(x) - \\sin(x)}{x^2} \)", "\( \\frac{\\sin(x) - x^2 \\cos(x)}{x^4} \)"],
      answer: "\( \\frac{x^2 \\cos(x) - 2x \\sin(x)}{x^4} \)"
    },
    {
      question: "20. Tentukan turunan pertama dari \( f(x) = e^{x^2} \).",
      options: ["\( 2xe^{x^2} \)", "\( x e^{x^2} \)", "\( 2x e^{x} \)", "\( 2e^{x} \)"],
      answer: "\( 2xe^{x^2} \)"
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
