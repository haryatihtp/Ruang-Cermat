import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Tentukan persamaan fungsi kuadrat dengan akar-akar x = 2 dan x = -3.",
      options: ["x² + x - 6 = 0", "x² - x - 6 = 0", "x² + 5x - 6 = 0", "x² - 5x + 6 = 0"],
      answer: "x² - x - 6 = 0"
    },
    {
      question: "2. Fungsi kuadrat y = 3x² + 6x - 9 memiliki titik puncak pada titik?",
      options: ["(-1, 0)", "(0, -9)", "(-1, -12)", "(1, -6)"],
      answer: "(-1, -12)"
    },
    {
      question: "3. Tentukan nilai puncak dari fungsi y = -x² + 4x - 3.",
      options: ["-1", "1", "-3", "3"],
      answer: "1"
    },
    {
      question: "4. Diberikan fungsi kuadrat y = x² - 6x + 9. Tentukan akar-akar persamaan tersebut.",
      options: ["x = 3", "x = -3", "x = 6", "x = -6"],
      answer: "x = 3"
    },
    {
      question: "5. Tentukan titik puncak dari fungsi y = x² - 4x + 3.",
      options: ["(2, -1)", "(2, 1)", "(1, 3)", "(1, -3)"],
      answer: "(2, -1)"
    },
    {
      question: "6. Tentukan nilai diskriminan dari fungsi kuadrat x² + 2x + 1.",
      options: ["0", "1", "-1", "4"],
      answer: "0"
    },
    {
      question: "7. Fungsi kuadrat y = -2x² + 4x + 6 memiliki titik puncak pada titik?",
      options: ["(1, 8)", "(1, 6)", "(2, 8)", "(2, 6)"],
      answer: "(1, 8)"
    },
    {
      question: "8. Tentukan nilai puncak dari fungsi y = 2x² - 8x + 5.",
      options: ["1", "2", "3", "4"],
      answer: "1"
    },
    {
      question: "9. Diketahui persamaan fungsi kuadrat y = 2x² - 4x + 1. Tentukan akar-akarnya.",
      options: ["x = 1 dan x = 1/2", "x = -1 dan x = 1/2", "x = 1 dan x = -1/2", "x = -1 dan x = -1/2"],
      answer: "x = 1 dan x = 1/2"
    },
    {
      question: "10. Tentukan bentuk faktorisasi dari fungsi kuadrat y = x² - 4x - 5.",
      options: ["(x - 5)(x + 1)", "(x + 5)(x - 1)", "(x + 5)(x + 1)", "(x - 5)(x - 1)"],
      answer: "(x - 5)(x + 1)"
    },
    {
      question: "11. Tentukan nilai y pada fungsi y = 3x² - 6x + 2, jika x = 2.",
      options: ["4", "8", "10", "6"],
      answer: "4"
    },
    {
      question: "12. Diketahui fungsi kuadrat y = 2x² - 4x + 6, tentukan koordinat titik potong dengan sumbu y.",
      options: ["(0, 6)", "(0, 2)", "(0, 4)", "(0, 0)"],
      answer: "(0, 6)"
    },
    {
      question: "13. Tentukan persamaan fungsi kuadrat yang memiliki titik puncak (1, -4) dan melewati titik (3, -2).",
      options: ["y = x² - 2x - 3", "y = x² - 2x - 4", "y = x² + 2x - 4", "y = x² + 2x - 3"],
      answer: "y = x² - 2x - 3"
    },
    {
      question: "14. Fungsi kuadrat y = -x² + 2x + 3 memiliki titik puncak di titik?",
      options: ["(1, 4)", "(1, 3)", "(1, 2)", "(2, 3)"],
      answer: "(1, 4)"
    },
    {
      question: "15. Fungsi kuadrat y = 4x² - 8x + 3 memiliki titik puncak di titik?",
      options: ["(1, -1)", "(1, 3)", "(2, 3)", "(2, -1)"],
      answer: "(1, -1)"
    },
    {
      question: "16. Tentukan bentuk umum dari fungsi kuadrat yang akar-akarnya adalah 4 dan -2.",
      options: ["y = x² - 2x - 8", "y = x² + 2x - 8", "y = x² - 2x + 8", "y = x² + 2x + 8"],
      answer: "y = x² - 2x - 8"
    },
    {
      question: "17. Tentukan koordinat titik puncak dari fungsi y = -3x² + 6x - 5.",
      options: ["(1, -4)", "(1, -5)", "(2, -4)", "(2, -5)"],
      answer: "(1, -4)"
    },
    {
      question: "18. Fungsi kuadrat y = x² + 4x - 5 memiliki titik potong dengan sumbu x pada titik?",
      options: ["(1, 0)", "(-1, 0)", "(5, 0)", "(-5, 0)"],
      answer: "(-5, 0)"
    },
    {
      question: "19. Fungsi kuadrat y = 2x² + 8x + 6 memiliki titik puncak di titik?",
      options: ["(-2, -2)", "(-2, 2)", "(-4, 2)", "(-4, -2)"],
      answer: "(-2, -2)"
    },
    {
      question: "20. Tentukan persamaan fungsi kuadrat yang memiliki akar-akarnya 1 dan 5.",
      options: ["y = (x - 1)(x + 5)", "y = (x + 1)(x - 5)", "y = (x - 1)(x - 5)", "y = (x + 1)(x + 5)"],
      answer: "y = (x - 1)(x - 5)"
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
      <h1>Kuis Matematika Kelas X</h1>
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
