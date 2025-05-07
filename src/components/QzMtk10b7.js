import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Tentukan nilai dari sin(30°)!",
      options: ["0.5", "0.707", "1", "0.25"],
      answer: "0.5"
    },
    {
      question: "2. Hitung nilai cos(45°)!",
      options: ["0.5", "0.707", "1", "0.866"],
      answer: "0.707"
    },
    {
      question: "3. Jika sin(θ) = 0.6, berapakah nilai cos(θ) jika θ berada di kuadran pertama?",
      options: ["0.8", "0.4", "0.6", "0.5"],
      answer: "0.8"
    },
    {
      question: "4. Tentukan nilai tan(60°)!",
      options: ["√3", "1", "√2", "√3/2"],
      answer: "√3"
    },
    {
      question: "5. Hitung nilai sin(90°)!",
      options: ["0", "1", "0.5", "√2"],
      answer: "1"
    },
    {
      question: "6. Jika sin(θ) = 1/2 dan cos(θ) = √3/2, tentukan nilai tan(θ)!",
      options: ["√3/3", "1", "√3", "2"],
      answer: "√3/3"
    },
    {
      question: "7. Tentukan nilai cos(60°)!",
      options: ["1", "0.5", "√3/2", "0.707"],
      answer: "0.5"
    },
    {
      question: "8. Hitung nilai tan(45°)!",
      options: ["1", "0", "√3", "0.707"],
      answer: "1"
    },
    {
      question: "9. Jika sin(θ) = 3/5, berapakah nilai cos(θ) jika θ berada di kuadran pertama?",
      options: ["4/5", "2/5", "3/5", "1/5"],
      answer: "4/5"
    },
    {
      question: "10. Tentukan nilai sin(120°)!",
      options: ["√3/2", "1/2", "-1/2", "-√3/2"],
      answer: "√3/2"
    },
    {
      question: "11. Hitung nilai tan(30°)!",
      options: ["√3/3", "1", "√2", "√3"],
      answer: "√3/3"
    },
    {
      question: "12. Jika cos(θ) = 0.8, tentukan nilai sin(θ) jika θ berada di kuadran pertama.",
      options: ["0.6", "0.4", "0.8", "0.5"],
      answer: "0.6"
    },
    {
      question: "13. Tentukan nilai sin(150°)!",
      options: ["√3/2", "1/2", "-1/2", "0"],
      answer: "1/2"
    },
    {
      question: "14. Hitung nilai cos(120°)!",
      options: ["1/2", "-1/2", "-√3/2", "0"],
      answer: "-1/2"
    },
    {
      question: "15. Jika tan(θ) = 1, tentukan nilai sin(θ) jika θ berada di kuadran pertama!",
      options: ["√2/2", "1/2", "1", "√3/2"],
      answer: "√2/2"
    },
    {
      question: "16. Tentukan nilai tan(90°)!",
      options: ["Tidak terdefinisi", "1", "0", "∞"],
      answer: "Tidak terdefinisi"
    },
    {
      question: "17. Jika sin(θ) = 0.4 dan cos(θ) = √0.84, berapakah nilai tan(θ)?",
      options: ["0.6", "0.5", "1", "√3"],
      answer: "0.6"
    },
    {
      question: "18. Tentukan nilai cos(0°)!",
      options: ["0", "1", "√3/2", "0.5"],
      answer: "1"
    },
    {
      question: "19. Jika sin(θ) = 0.5 dan cos(θ) = √3/2, tentukan nilai tan(θ)!",
      options: ["1/√3", "√3", "1", "√3/2"],
      answer: "1/√3"
    },
    {
      question: "20. Hitung nilai sin(45°) + cos(45°)!",
      options: ["√2", "1", "√3", "0.707"],
      answer: "√2"
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
