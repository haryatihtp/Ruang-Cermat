import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Jika titik A(2, 3) mengalami translasi dengan vektor (3, -2), maka posisi titik A' adalah?",
      options: ["(5, 1)", "(5, 5)", "(3, 1)", "(3, 5)"],
      answer: "(5, 1)"
    },
    {
      question: "2. Jika sebuah titik P(x, y) mengalami rotasi 90 derajat berlawanan arah jarum jam terhadap titik asal, maka koordinat titik P' adalah?",
      options: ["(-y, x)", "(y, -x)", "(x, -y)", "(-x, y)"],
      answer: "(-y, x)"
    },
    {
      question: "3. Sebuah titik T(4, -2) dipantulkan terhadap sumbu x. Koordinat titik T' setelah pemantulan adalah?",
      options: ["(4, 2)", "(-4, -2)", "(4, 2)", "(4, -2)"],
      answer: "(4, 2)"
    },
    {
      question: "4. Jika titik P(3, 4) dipindahkan ke titik P' setelah dilaksanakan refleksi terhadap garis y = x, maka koordinat titik P' adalah?",
      options: ["(4, 3)", "(3, -4)", "(4, 3)", "(-4, 3)"],
      answer: "(4, 3)"
    },
    {
      question: "5. Sebuah titik P(2, 5) mengalami dilatasi dengan faktor skala 2 terhadap titik asal. Tentukan koordinat titik P' setelah dilatasi.",
      options: ["(4, 10)", "(2, 5)", "(1, 2)", "(4, 4)"],
      answer: "(4, 10)"
    },
    {
      question: "6. Tentukan hasil transformasi dari titik A(3, 2) setelah rotasi 180 derajat terhadap titik asal.",
      options: ["(-3, -2)", "(3, -2)", "(-3, 2)", "(2, 3)"],
      answer: "(-3, -2)"
    },
    {
      question: "7. Jika titik B(1, 2) mengalami translasi dengan vektor (3, 4), maka koordinat titik B' adalah?",
      options: ["(4, 6)", "(3, 6)", "(1, 6)", "(4, 2)"],
      answer: "(4, 6)"
    },
    {
      question: "8. Jika titik A(-3, -4) dipantulkan terhadap sumbu y, maka koordinat titik A' setelah pemantulan adalah?",
      options: ["(3, -4)", "(-3, 4)", "(3, 4)", "(-3, -4)"],
      answer: "(3, -4)"
    },
    {
      question: "9. Sebuah titik M(2, 3) mengalami rotasi 90 derajat searah jarum jam. Koordinat titik M' setelah rotasi adalah?",
      options: ["(3, -2)", "(-3, 2)", "(2, -3)", "(-2, 3)"],
      answer: "(3, -2)"
    },
    {
      question: "10. Sebuah titik N(-2, 5) mengalami dilatasi dengan faktor skala 0.5 terhadap titik asal. Tentukan koordinat titik N' setelah dilatasi.",
      options: ["(-1, 2.5)", "(1, 2.5)", "(-2, 2.5)", "(-1, 5)"],
      answer: "(-1, 2.5)"
    },
    {
      question: "11. Jika titik Q(4, -6) dipantulkan terhadap garis y = -x, maka koordinat titik Q' setelah pemantulan adalah?",
      options: ["(6, -4)", "(-6, 4)", "(-4, 6)", "(4, -6)"],
      answer: "(6, -4)"
    },
    {
      question: "12. Tentukan koordinat titik yang dihasilkan dari refleksi titik R(-5, -7) terhadap garis y = x.",
      options: ["(-7, -5)", "(-5, 7)", "(7, -5)", "(7, 5)"],
      answer: "(-7, -5)"
    },
    {
      question: "13. Sebuah titik P(5, -2) mengalami translasi dengan vektor (-3, 1). Koordinat titik P' setelah translasi adalah?",
      options: ["(2, -1)", "(8, -1)", "(2, -3)", "(8, -3)"],
      answer: "(2, -1)"
    },
    {
      question: "14. Jika titik C(1, 4) mengalami rotasi 180 derajat terhadap titik asal, maka titik C' memiliki koordinat?",
      options: ["(-1, -4)", "(1, -4)", "(4, 1)", "(-4, 1)"],
      answer: "(-1, -4)"
    },
    {
      question: "15. Sebuah titik Q(-3, 2) mengalami dilatasi dengan faktor skala 3 terhadap titik asal. Koordinat titik Q' setelah dilatasi adalah?",
      options: ["(-9, 6)", "(9, -6)", "(-9, -6)", "(9, 6)"],
      answer: "(-9, 6)"
    },
    {
      question: "16. Sebuah titik R(4, 3) dipantulkan terhadap sumbu x. Koordinat titik R' setelah pemantulan adalah?",
      options: ["(4, -3)", "(-4, 3)", "(4, 3)", "(-4, -3)"],
      answer: "(4, -3)"
    },
    {
      question: "17. Jika titik T(-1, -2) dipindahkan oleh translasi dengan vektor (2, 3), maka koordinat titik T' adalah?",
      options: ["(1, 1)", "(1, -1)", "(1, -5)", "(-1, 1)"],
      answer: "(1, 1)"
    },
    {
      question: "18. Tentukan koordinat titik P setelah rotasi 270 derajat terhadap titik asal dari titik P(4, -3).",
      options: ["(3, 4)", "(-4, -3)", "(4, 3)", "(-3, -4)"],
      answer: "(-3, 4)"
    },
    {
      question: "19. Jika titik S(3, -5) dipantulkan terhadap garis y = -x, maka koordinat titik S' setelah pemantulan adalah?",
      options: ["(5, 3)", "(-5, -3)", "(3, 5)", "(-3, 5)"],
      answer: "(5, 3)"
    },
    {
      question: "20. Sebuah titik A(-4, 2) dipindahkan oleh dilatasi dengan faktor 0.25 terhadap titik asal. Koordinat titik A' setelah dilatasi adalah?",
      options: ["(-1, 0.5)", "(1, -0.5)", "(-1, 0.5)", "(1, 0.5)"],
      answer: "(-1, 0.5)"
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
