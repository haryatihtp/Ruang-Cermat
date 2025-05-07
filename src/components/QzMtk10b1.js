import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Berapakah hasil dari \\(2^3 \\times 2^4\\)?",
      options: ["\\(2^7\\)", "\\(2^12\\)", "\\(2^1\\)", "\\(2^6\\)"],
      answer: "\\(2^7\\)"
    },
    {
      question: "2. Sederhanakan \\(\\frac{3^5}{3^2}\\).",
      options: ["\\(3^3\\)", "\\(3^7\\)", "\\(3^1\\)", "\\(3^2\\)"],
      answer: "\\(3^3\\)"
    },
    {
      question: "3. Jika \\(5^x = 125\\), maka nilai \\(x\\) adalah:",
      options: ["3", "4", "5", "2"],
      answer: "3"
    },
    {
      question: "4. Bentuk logaritma dari \\(10^3 = 1000\\) adalah:",
      options: ["\\(\\log_{10} 1000 = 3\\)", "\\(\\log_{10} 1000 = 2\\)", "\\(\\log_{10} 1000 = 4\\)", "\\(\\log_{10} 1000 = 1\\)"],
      answer: "\\(\\log_{10} 1000 = 3\\)"
    },
    {
      question: "5. Sederhanakan \\(\\log_2 32\\):",
      options: ["5", "4", "6", "3"],
      answer: "5"
    },
    {
      question: "6. Jika \\(\\log_3 x = 4\\), maka nilai \\(x\\) adalah:",
      options: ["81", "27", "243", "64"],
      answer: "81"
    },
    {
      question: "7. Hitung nilai dari \\(\\log_5 25\\):",
      options: ["2", "3", "4", "1"],
      answer: "2"
    },
    {
      question: "8. Jika \\(\\log_2 8 = x\\), maka nilai \\(x\\) adalah:",
      options: ["3", "2", "4", "5"],
      answer: "3"
    },
    {
      question: "9. Sederhanakan \\(\\log_{10} (100 \\times 1000)\\):",
      options: ["5", "4", "3", "2"],
      answer: "5"
    },
    {
      question: "10. Jika \\(2^{x+2} = 32\\), maka nilai \\(x\\) adalah:",
      options: ["3", "4", "5", "6"],
      answer: "3"
    },
    {
      question: "11. Berapakah nilai dari \\(\\log_4 64\\)?",
      options: ["3", "2", "4", "5"],
      answer: "3"
    },
    {
      question: "12. Sederhanakan \\(\\frac{8^5}{8^3}\\):",
      options: ["\\(8^2\\)", "\\(8^8\\)", "\\(8^1\\)", "\\(8^0\\)"],
      answer: "\\(8^2\\)"
    },
    {
      question: "13. Jika \\(\\log_{7} x = 2\\), maka nilai \\(x\\) adalah:",
      options: ["49", "14", "7", "21"],
      answer: "49"
    },
    {
      question: "14. Sederhanakan \\(\\log_{10} 100 + \\log_{10} 10\\):",
      options: ["3", "2", "4", "5"],
      answer: "3"
    },
    {
      question: "15. Jika \\(\\log_{2} 16 = x\\), maka nilai \\(x\\) adalah:",
      options: ["4", "5", "6", "3"],
      answer: "4"
    },
    {
      question: "16. Hitung nilai \\(\\log_{3} 27 - \\log_{3} 9\\):",
      options: ["1", "2", "0", "3"],
      answer: "1"
    },
    {
      question: "17. Sederhanakan \\(\\log_{5} 125\\):",
      options: ["3", "4", "2", "5"],
      answer: "3"
    },
    {
      question: "18. Jika \\(x = 2^{10}\\), maka nilai \\(\\log_{2} x\\) adalah:",
      options: ["10", "12", "15", "8"],
      answer: "10"
    },
    {
      question: "19. Sederhanakan \\(\\frac{4^6}{4^3}\\):",
      options: ["\\(4^3\\)", "\\(4^2\\)", "\\(4^9\\)", "\\(4^1\\)"],
      answer: "\\(4^3\\)"
    },
    {
      question: "20. Jika \\(3^{x-1} = 27\\), maka nilai \\(x\\) adalah:",
      options: ["4", "5", "3", "2"],
      answer: "4"
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
