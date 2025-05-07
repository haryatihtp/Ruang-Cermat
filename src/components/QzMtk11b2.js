import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah titik P(3, 2) diputar sebesar 90 derajat searah jarum jam terhadap titik asal. Di mana posisi titik P setelah transformasi?",
      options: ["(2, -3)", "(-2, 3)", "(-3, -2)", "(3, -2)"],
      answer: "(2, -3)"
    },
    {
      question: "2. Sebuah segitiga dengan titik A(0, 0), B(4, 0), dan C(4, 3) direfleksikan terhadap garis y = x. Apa koordinat baru dari titik B?",
      options: ["(4, 0)", "(0, 4)", "(3, 4)", "(4, -3)"],
      answer: "(0, 4)"
    },
    {
      question: "3. Dilakukan transformasi translasi T(x, y) -> (x + 3, y - 2) pada titik Q(-1, 5). Dimanakah posisi titik Q setelah translasi?",
      options: ["(2, 3)", "(4, 3)", "(-4, 7)", "(2, -3)"],
      answer: "(2, 3)"
    },
    {
      question: "4. Sebuah persegi panjang memiliki koordinat (0, 0), (4, 0), (4, 2), dan (0, 2). Jika dilakukan pembesaran dengan faktor skala 2, berapa panjang diagonal persegi panjang yang baru?",
      options: ["8", "6", "4", "2"],
      answer: "8"
    },
    {
      question: "5. Sebuah titik R(6, -2) direfleksikan terhadap sumbu y. Dimana posisi titik R setelah transformasi?",
      options: ["(6, 2)", "(-6, -2)", "(6, -2)", "(-6, 2)"],
      answer: "(-6, -2)"
    },
    {
      question: "6. Diberikan sebuah vektor AB = (2, 3). Setelah rotasi 180 derajat terhadap titik asal, apa koordinat vektor AB yang baru?",
      options: ["(2, -3)", "(-2, -3)", "(-2, 3)", "(3, -2)"],
      answer: "(-2, -3)"
    },
    {
      question: "7. Sebuah segitiga dengan titik A(2, 1), B(4, 1), dan C(3, 3) dilatasi dengan pusat (0, 0) dan faktor skala 3. Apa koordinat baru dari titik A?",
      options: ["(6, 3)", "(3, 2)", "(2, 3)", "(5, 3)"],
      answer: "(6, 3)"
    },
    {
      question: "8. Jika sebuah titik P(x, y) dicerminkan terhadap garis x = 2 dan menghasilkan P'(4, 5), berapakah koordinat awal titik P?",
      options: ["(0, 5)", "(2, 5)", "(4, 5)", "(6, 5)"],
      answer: "(0, 5)"
    },
    {
      question: "9. Diberikan titik A(2, 2). Jika titik ini digeser sejauh 5 satuan ke kanan dan 3 satuan ke bawah, berapakah koordinat akhir titik A?",
      options: ["(7, -1)", "(3, -1)", "(7, 5)", "(5, -3)"],
      answer: "(7, -1)"
    },
    {
      question: "10. Sebuah segitiga memiliki koordinat A(1, 1), B(3, 1), dan C(2, 3). Dilakukan refleksi terhadap garis y = 0. Apa koordinat baru dari titik C?",
      options: ["(2, -3)", "(-2, 3)", "(3, -2)", "(2, 3)"],
      answer: "(2, -3)"
    },
    {
      question: "11. Titik B(4, 6) diputar sebesar 270 derajat berlawanan arah jarum jam terhadap titik asal. Di mana posisi titik B setelah transformasi?",
      options: ["(6, -4)", "(-6, 4)", "(4, 6)", "(-4, -6)"],
      answer: "(-6, 4)"
    },
    {
      question: "12. Sebuah persegi panjang dengan koordinat (0, 0), (4, 0), (4, 2), (0, 2) direfleksikan terhadap sumbu x. Apa koordinat baru dari titik (4, 2)?",
      options: ["(4, -2)", "(-4, -2)", "(2, 4)", "(0, -4)"],
      answer: "(4, -2)"
    },
    {
      question: "13. Diberikan sebuah titik P(7, -4). Setelah diterapkan transformasi translasi T(x, y) -> (x - 3, y + 5), apa koordinat titik P?",
      options: ["(4, 1)", "(7, -4)", "(10, 1)", "(5, -9)"],
      answer: "(4, 1)"
    },
    {
      question: "14. Sebuah segitiga direfleksikan terhadap garis x = 3. Jika koordinat titik A adalah (5, 7), berapa koordinat bayangan titik A?",
      options: ["(1, 7)", "(5, 3)", "(7, 7)", "(5, 5)"],
      answer: "(1, 7)"
    },
    {
      question: "15. Sebuah segitiga dengan titik A(0, 0), B(2, 0), dan C(1, 2) dilakukan rotasi sebesar 90 derajat berlawanan arah jarum jam terhadap titik asal. Apa koordinat baru titik C?",
      options: ["(2, 1)", "(-2, 1)", "(-1, 2)", "(-2, -1)"],
      answer: "(-2, 1)"
    },
    {
      question: "16. Sebuah titik (3, -5) dilakukan dilatasi dengan pusat (0, 0) dan faktor skala -2. Apa koordinat baru titik tersebut?",
      options: ["(-6, 10)", "(-6, -10)", "(6, -10)", "(6, 10)"],
      answer: "(-6, 10)"
    },
    {
      question: "17. Sebuah persegi panjang direfleksikan terhadap garis y = x. Jika titik awalnya adalah (1, 4), apa koordinat hasil refleksi?",
      options: ["(4, 1)", "(1, 4)", "(-4, -1)", "(-1, 4)"],
      answer: "(4, 1)"
    },
    {
      question: "18. Jika segitiga A(0, 0), B(4, 0), C(2, 3) dilatasi dengan faktor skala 0.5, berapakah koordinat baru dari titik C?",
      options: ["(1, 1.5)", "(2, 3)", "(1, 3)", "(0.5, 1.5)"],
      answer: "(1, 1.5)"
    },
    {
      question: "19. Sebuah titik P(-2, 6) diputar sebesar 90 derajat searah jarum jam terhadap titik asal. Apa koordinat baru titik P?",
      options: ["(6, 2)", "(-6, -2)", "(-2, 6)", "(6, -2)"],
      answer: "(6, 2)"
    },
    {
      question: "20. Titik R(5, -3) digeser sejauh 3 satuan ke kiri dan 7 satuan ke atas. Dimanakah posisi akhir titik R?",
      options: ["(2, 4)", "(8, -10)", "(2, -3)", "(0, 0)"],
      answer: "(2, 4)"
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
