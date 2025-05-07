import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Jika \\(2x + 3y = 12\\) dan \\(x - y = 2\\), berapa nilai \\(x\\) dan \\(y\\)?",
      options: ["\\(x = 4, y = 2\\)", "\\(x = 3, y = 1\\)", "\\(x = 2, y = 4\\)", "\\(x = 5, y = 2\\)"],
      answer: "\\(x = 4, y = 2\\)"
    },
    {
      question: "2. Diketahui sistem persamaan \\(3x + y = 7\\) dan \\(x - 2y = -1\\). Hitung nilai \\(x\\) dan \\(y\\).",
      options: ["\\(x = 1, y = 2\\)", "\\(x = 2, y = 1\\)", "\\(x = 3, y = -1\\)", "\\(x = -1, y = 3\\)"],
      answer: "\\(x = 2, y = 1\\)"
    },
    {
      question: "3. Dari persamaan kuadrat \\(x^2 - 5x + 6 = 0\\), tentukan akar-akarnya.",
      options: ["\\(x = 2, x = 3\\)", "\\(x = -2, x = -3\\)", "\\(x = 1, x = 6\\)", "\\(x = 3, x = 5\\)"],
      answer: "\\(x = 2, x = 3\\)"
    },
    {
      question: "4. Jika \\(y = x^2 - 4x + 4\\), tentukan nilai minimum fungsi tersebut.",
      options: ["0", "1", "4", "2"],
      answer: "0"
    },
    {
      question: "5. Diketahui sistem persamaan \\(x + y = 10\\) dan \\(xy = 21\\). Hitung nilai \\(x\\) dan \\(y\\).",
      options: ["\\(x = 3, y = 7\\)", "\\(x = 2, y = 8\\)", "\\(x = 1, y = 9\\)", "\\(x = 4, y = 6\\)"],
      answer: "\\(x = 3, y = 7\\)"
    },
    {
      question: "6. Tentukan nilai diskriminan dari persamaan kuadrat \\(2x^2 - 4x + 1 = 0\\).",
      options: ["4", "8", "2", "0"],
      answer: "8"
    },
    {
      question: "7. Jika \\(x^2 + px + 9 = 0\\) memiliki satu akar \\(x = 3\\), berapa nilai \\(p\\)?",
      options: ["-6", "6", "-9", "9"],
      answer: "-6"
    },
    {
      question: "8. Dari sistem persamaan \\(x + 2y = 6\\) dan \\(2x - y = 3\\), tentukan nilai \\(x\\) dan \\(y\\).",
      options: ["\\(x = 3, y = 1\\)", "\\(x = 2, y = 2\\)", "\\(x = 1, y = 2\\)", "\\(x = 4, y = 0\\)"],
      answer: "\\(x = 3, y = 1\\)"
    },
    {
      question: "9. Jika \\(x^2 - 4x + 4 = 0\\), hitung akar-akarnya.",
      options: ["\\(x = 2\\)", "\\(x = -2\\)", "\\(x = 4\\)", "\\(x = 0\\)"],
      answer: "\\(x = 2\\)"
    },
    {
      question: "10. Tentukan koordinat puncak dari fungsi kuadrat \\(y = x^2 - 6x + 8\\).",
      options: ["\\((3, -1)\\)", "\\((2, 1)\\)", "\\((1, -2)\\)", "\\((3, 2)\\)"],
      answer: "\\((3, -1)\\)"
    },
    {
      question: "11. Jika \\(3x + 4y = 18\\) dan \\(x - y = 2\\), hitung nilai \\(x\\) dan \\(y\\).",
      options: ["\\(x = 4, y = 3\\)", "\\(x = 3, y = 2\\)", "\\(x = 5, y = 2\\)", "\\(x = 6, y = 4\\)"],
      answer: "\\(x = 4, y = 3\\)"
    },
    {
      question: "12. Dari persamaan \\(x^2 - 9 = 0\\), hitung akar-akarnya.",
      options: ["\\(x = 3, x = -3\\)", "\\(x = 3, x = 0\\)", "\\(x = -3, x = -9\\)", "\\(x = 9, x = 3\\)"],
      answer: "\\(x = 3, x = -3\\)"
    },
    {
      question: "13. Tentukan nilai maksimum dari fungsi \\(y = -x^2 + 4x + 5\\).",
      options: ["9", "10", "12", "13"],
      answer: "13"
    },
    {
      question: "14. Dari sistem persamaan \\(2x + y = 7\\) dan \\(x - y = 1\\), tentukan nilai \\(x\\) dan \\(y\\).",
      options: ["\\(x = 2, y = 3\\)", "\\(x = 3, y = 2\\)", "\\(x = 1, y = 4\\)", "\\(x = 4, y = 1\\)"],
      answer: "\\(x = 2, y = 3\\)"
    },
    {
      question: "15. Dari fungsi kuadrat \\(y = 2x^2 - 8x + 6\\), hitung nilai minimum fungsi tersebut.",
      options: ["-2", "0", "1", "2"],
      answer: "2"
    },
    {
      question: "16. Jika \\(x^2 + bx + 16 = 0\\) memiliki akar kembar, tentukan nilai \\(b\\).",
      options: ["-8", "8", "-4", "4"],
      answer: "-8"
    },
    {
      question: "17. Tentukan jarak antara akar-akar dari \\(x^2 - 6x + 5 = 0\\).",
      options: ["1", "2", "3", "4"],
      answer: "1"
    },
    {
      question: "18. Dari persamaan \\(x^2 - 2x - 8 = 0\\), tentukan akar-akarnya.",
      options: ["\\(x = 4, x = -2\\)", "\\(x = 2, x = -4\\)", "\\(x = 3, x = -3\\)", "\\(x = -2, x = -4\\)"],
      answer: "\\(x = 4, x = -2\\)"
    },
    {
      question: "19. Tentukan koordinat puncak dari \\(y = -2x^2 + 4x - 1\\).",
      options: ["\\((1, 1)\\)", "\\((1, -1)\\)", "\\((1, 0)\\)", "\\((1, 2)\\)"],
      answer: "\\((1, 1)\\)"
    },
    {
      question: "20. Jika \\(x^2 - 5x + c = 0\\) memiliki satu akar \\(x = 2\\), berapa nilai \\(c\\)?",
      options: ["3", "4", "5", "6"],
      answer: "6"
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
