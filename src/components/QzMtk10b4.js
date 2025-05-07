import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Jika x² + 5x + 6 = 0, berapa akar-akarnya?",
      options: ["x = -2 dan x = -3", "x = 2 dan x = -3", "x = -1 dan x = -6", "x = 3 dan x = -2"],
      answer: "x = -2 dan x = -3"
    },
    {
      question: "2. Tentukan nilai diskriminan dari persamaan kuadrat 2x² - 4x + 1 = 0.",
      options: ["4", "0", "8", "-4"],
      answer: "0"
    },
    {
      question: "3. Apakah bentuk grafik dari y = x² + 4x + 3 memotong sumbu x?",
      options: ["Memotong di dua titik", "Tidak memotong", "Hanya menyentuh", "Tidak dapat ditentukan"],
      answer: "Memotong di dua titik"
    },
    {
      question: "4. Tentukan nilai maksimum atau minimum dari fungsi y = -x² + 6x - 8.",
      options: ["Minimum: -8", "Maksimum: 1", "Maksimum: 1", "Maksimum: 1"],
      answer: "Maksimum: 1"
    },
    {
      question: "5. Jika x² + px + 12 = 0 memiliki akar 3 dan -4, berapa nilai p?",
      options: ["7", "-7", "1", "-1"],
      answer: "1"
    },
    {
      question: "6. Diketahui persamaan kuadrat x² - 6x + 9 = 0. Berapa jumlah dan hasil kali akar-akarnya?",
      options: ["Jumlah = 6, Hasil kali = 9", "Jumlah = -6, Hasil kali = -9", "Jumlah = 6, Hasil kali = -9", "Jumlah = -6, Hasil kali = 9"],
      answer: "Jumlah = 6, Hasil kali = 9"
    },
    {
      question: "7. Tentukan nilai x yang memenuhi persamaan x² - 4 = 0.",
      options: ["x = ±2", "x = ±4", "x = ±3", "x = ±5"],
      answer: "x = ±2"
    },
    {
      question: "8. Jika grafik fungsi y = x² + 2x + 1 hanya menyentuh sumbu x, berapa koordinat titik sentuhnya?",
      options: ["(-1, 0)", "(1, 0)", "(-2, 0)", "(0, 1)"],
      answer: "(-1, 0)"
    },
    {
      question: "9. Diketahui grafik fungsi kuadrat y = ax² + bx + c membuka ke bawah. Berapa nilai tanda dari a?",
      options: ["a > 0", "a < 0", "a = 0", "Tidak dapat ditentukan"],
      answer: "a < 0"
    },
    {
      question: "10. Hitung koordinat puncak dari fungsi y = x² - 4x + 3.",
      options: ["(2, -1)", "(2, 1)", "(-2, -1)", "(-2, 1)"],
      answer: "(2, -1)"
    },
    {
      question: "11. Tentukan akar-akar dari persamaan kuadrat x² - 10x + 25 = 0.",
      options: ["x = 5", "x = -5", "x = 10", "x = -10"],
      answer: "x = 5"
    },
    {
      question: "12. Hitung nilai diskriminan dari persamaan kuadrat 3x² - 2x + 1 = 0.",
      options: ["1", "4", "-4", "-1"],
      answer: "-4"
    },
    {
      question: "13. Tentukan jumlah dan hasil kali akar-akarnya dari persamaan x² - 4x + 3 = 0.",
      options: ["Jumlah = 4, Hasil kali = 3", "Jumlah = -4, Hasil kali = 3", "Jumlah = 4, Hasil kali = -3", "Jumlah = -4, Hasil kali = -3"],
      answer: "Jumlah = 4, Hasil kali = 3"
    },
    {
      question: "14. Jika persamaan kuadrat x² + 6x + 8 = 0 memiliki akar 2 dan -4, tentukan nilai dari c.",
      options: ["8", "6", "2", "4"],
      answer: "8"
    },
    {
      question: "15. Tentukan persamaan kuadrat yang akar-akarnya adalah 3 dan -7.",
      options: ["x² - 4x - 21 = 0", "x² + 4x - 21 = 0", "x² - 4x + 21 = 0", "x² + 4x + 21 = 0"],
      answer: "x² - 4x - 21 = 0"
    },
    {
      question: "16. Diketahui bahwa akar-akar persamaan kuadrat adalah x = 2 dan x = -3. Tentukan persamaan kuadratnya.",
      options: ["x² - 4x - 6 = 0", "x² + 4x - 6 = 0", "x² - 4x + 6 = 0", "x² + 4x + 6 = 0"],
      answer: "x² - 4x - 6 = 0"
    },
    {
      question: "17. Tentukan nilai a dari persamaan kuadrat ax² + 2x + 3 = 0, jika akar-akarnya adalah 1 dan -3.",
      options: ["a = -1", "a = 1", "a = -3", "a = 3"],
      answer: "a = 1"
    },
    {
      question: "18. Tentukan akar-akar dari persamaan 2x² - 4x + 1 = 0.",
      options: ["x = 1 dan x = -1/2", "x = 1 dan x = 1/2", "x = -1 dan x = 1", "x = -1/2 dan x = 1/2"],
      answer: "x = 1 dan x = 1/2"
    },
    {
      question: "19. Tentukan nilai dari x² + 4x - 5 = 0.",
      options: ["x = 1 dan x = -5", "x = -1 dan x = 5", "x = 1 dan x = 5", "x = -1 dan x = -5"],
      answer: "x = 1 dan x = -5"
    },
    {
      question: "20. Tentukan nilai diskriminan dari persamaan kuadrat x² - 6x + 9 = 0.",
      options: ["0", "1", "2", "9"],
      answer: "0"
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
