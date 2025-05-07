import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Diberikan matriks A = [[1, 2], [3, 4]] dan B = [[2, 0], [1, 3]]. Hitung A + B!",
      options: ["[[3, 2], [4, 7]]", "[[3, 2], [3, 7]]", "[[3, 2], [4, 6]]", "[[3, 2], [5, 7]]"],
      answer: "[[3, 2], [4, 7]]"
    },
    {
      question: "2. Tentukan hasil dari perkalian matriks A = [[1, 2], [3, 4]] dengan skalar 3!",
      options: ["[[3, 6], [9, 12]]", "[[2, 6], [6, 12]]", "[[3, 5], [9, 11]]", "[[3, 7], [9, 13]]"],
      answer: "[[3, 6], [9, 12]]"
    },
    {
      question: "3. Diberikan matriks A = [[1, 2, 3], [4, 5, 6]]. Hitung transpose dari matriks A!",
      options: ["[[1, 4], [2, 5], [3, 6]]", "[[1, 5], [2, 6], [3, 4]]", "[[1, 3], [2, 4], [5, 6]]", "[[1, 2], [3, 4], [5, 6]]"],
      answer: "[[1, 4], [2, 5], [3, 6]]"
    },
    {
      question: "4. Jika A = [[2, 3], [1, 4]] dan B = [[1, 0], [5, 2]], hitung A * B!",
      options: ["[[17, 6], [21, 8]]", "[[17, 6], [9, 8]]", "[[13, 6], [21, 8]]", "[[17, 6], [9, 8]]"],
      answer: "[[17, 6], [21, 8]]"
    },
    {
      question: "5. Tentukan determinan dari matriks A = [[3, 2], [5, 4]]!",
      options: ["2", "7", "6", "-2"],
      answer: "2"
    },
    {
      question: "6. Diberikan matriks A = [[2, 1], [3, 2]]. Apakah A merupakan matriks invertibel?",
      options: ["Ya, determinan tidak nol", "Tidak, karena tidak persegi", "Tidak, determinannya nol", "Tidak dapat ditentukan"],
      answer: "Ya, determinan tidak nol"
    },
    {
      question: "7. Jika matriks A = [[1, 2], [3, 4]], hitung invers dari matriks A!",
      options: ["[[-2, 1], [1.5, -0.5]]", "[[2, -1], [-1.5, 0.5]]", "[[2, 1], [-1.5, -0.5]]", "[[-2, -1], [1.5, 0.5]]"],
      answer: "[[-2, 1], [1.5, -0.5]]"
    },
    {
      question: "8. Matriks A = [[2, 0], [0, 3]]. Apakah A merupakan matriks diagonal?",
      options: ["Ya", "Tidak", "Hanya baris pertama", "Hanya kolom kedua"],
      answer: "Ya"
    },
    {
      question: "9. Diberikan matriks A = [[1, 2], [3, 4]]. Hitung trace dari matriks A!",
      options: ["5", "6", "7", "8"],
      answer: "5"
    },
    {
      question: "10. Jika A = [[1, 2], [3, 4]] dan B = [[1, 0], [0, 1]], hitung A * B!",
      options: ["[[1, 2], [3, 4]]", "[[0, 0], [0, 0]]", "[[2, 2], [4, 4]]", "[[3, 3], [5, 5]]"],
      answer: "[[1, 2], [3, 4]]"
    },
    {
      question: "11. Tentukan apakah matriks A = [[0, 1], [1, 0]] adalah matriks simetris!",
      options: ["Ya", "Tidak", "Tergantung nilai elemen", "Tidak dapat ditentukan"],
      answer: "Ya"
    },
    {
      question: "12. Matriks A = [[3, 1], [1, 2]]. Tentukan eigenvalue dari matriks A!",
      options: ["4 dan 1", "2 dan 3", "3 dan 1", "2 dan 4"],
      answer: "4 dan 1"
    },
    {
      question: "13. Jika A = [[1, 2], [2, 4]], tentukan rank dari matriks A!",
      options: ["1", "2", "3", "0"],
      answer: "1"
    },
    {
      question: "14. Matriks A = [[1, 0], [0, 1]]. Apakah A adalah matriks identitas?",
      options: ["Ya", "Tidak", "Hanya baris pertama", "Hanya kolom kedua"],
      answer: "Ya"
    },
    {
      question: "15. Tentukan norma matriks A = [[3, 4]] (vektor baris) menggunakan norma Euclidean!",
      options: ["5", "7", "4", "6"],
      answer: "5"
    },
    {
      question: "16. Matriks A = [[1, 2], [3, 4]]. Apakah matriks A orthogonal?",
      options: ["Tidak", "Ya", "Tergantung determinan", "Tidak dapat ditentukan"],
      answer: "Tidak"
    },
    {
      question: "17. Jika A = [[2, 3], [1, 4]] dan B = [[3, 2], [4, 1]], hitung A - B!",
      options: ["[[-1, 1], [-3, 3]]", "[[-1, 1], [-3, -3]]", "[[1, -1], [3, -3]]", "[[1, 1], [-3, -3]]"],
      answer: "[[-1, 1], [-3, 3]]"
    },
    {
      question: "18. Tentukan hasil dari perkalian matriks identitas I = [[1, 0], [0, 1]] dengan matriks A = [[5, 6], [7, 8]]!",
      options: ["[[5, 6], [7, 8]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]", "[[5, 6], [0, 1]]"],
      answer: "[[5, 6], [7, 8]]"
    },
    {
      question: "19. Apakah matriks A = [[1, 2], [3, 4]] merupakan matriks singular?",
      options: ["Tidak", "Ya", "Hanya jika ditranspose", "Hanya jika dijumlahkan"],
      answer: "Tidak"
    },
    {
      question: "20. Diberikan matriks A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Tentukan apakah A adalah matriks persegi!",
      options: ["Ya", "Tidak", "Tergantung elemen diagonal", "Tidak dapat ditentukan"],
      answer: "Ya"
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
