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
      question: "8. Diketahui barisan aritmatika dengan \\(a = 21\\) dan \\(d = 4\\). Berapakah suku ke-12 dari barisan tersebut?",
      options: ["61", "65", "69", "73"],
      answer: "65"
    },
    {
      question: "9. Dari sebuah barisan geometri, diketahui \\(a = 5\\) dan \\(r = 2\\). Hitung jumlah 6 suku pertama dari barisan tersebut.",
      options: ["315", "325", "310", "300"],
      answer: "315"
    },
    {
      question: "10. Jika jumlah 5 suku pertama dari deret aritmatika adalah 40, dan \\(a = 4\\), tentukan beda (\\(d\\)).",
      options: ["2", "3", "4", "5"],
      answer: "2"
    },
    {
      question: "11. Diketahui deret geometri dengan \\(S_\\infty = 27\\) dan \\(a = 9\\). Tentukan rasio (\\(r\\)).",
      options: ["\\(\\frac{1}{3}\\)", "\\(\\frac{2}{3}\\)", "0.5", "1"],
      answer: "\\(\\frac{1}{3}\\)"
    },
    {
      question: "12. Suku ketiga dari barisan aritmatika adalah 15, dan suku ketujuh adalah 27. Berapakah suku pertama (\\(a\\))?",
      options: ["3", "5", "6", "9"],
      answer: "6"
    },
    {
      question: "13. Tentukan jumlah 10 suku pertama dari barisan aritmatika dengan \\(a = 2\\) dan \\(d = 3\\).",
      options: ["140", "145", "150", "155"],
      answer: "140"
    },
    {
      question: "14. Suku pertama dari barisan geometri adalah 10 dan suku ke-4 adalah 80. Tentukan rasio (\\(r\\)) barisan tersebut.",
      options: ["2", "3", "4", "5"],
      answer: "2"
    },
    {
      question: "15. Tentukan jumlah suku ke-5 hingga suku ke-10 dari barisan aritmatika dengan \\(a = 3\\) dan \\(d = 2\\).",
      options: ["75", "80", "85", "90"],
      answer: "75"
    },
    {
      question: "16. Berapakah jumlah n suku pertama (\\(S_n\\)) dari deret aritmatika dengan \\(a = 10\\), \\(d = 5\\), dan \\(n = 6\\)?",
      options: ["105", "120", "135", "150"],
      answer: "135"
    },
    {
      question: "17. Diketahui deret geometri \\(a = 16\\) dan \\(r = 0.5\\). Hitung jumlah tak hingga deret tersebut.",
      options: ["24", "32", "48", "64"],
      answer: "32"
    },
    {
      question: "18. Suku pertama dari barisan geometri adalah 3 dan suku ke-4 adalah 24. Tentukan suku ke-6 dari barisan tersebut.",
      options: ["96", "108", "144", "192"],
      answer: "96"
    },
    {
      question: "19. Jika (S_5 = 55) dari barisan aritmatika \\(a = 5\\), hitung beda (\\(d\\)).",
      options: ["2", "3", "4", "5"],
      answer: "3"
    },
    {
      question: "20. Tentukan suku ke-10 dari deret geometri dengan \\(a = 2\\) dan \\(r = 3\\).",
      options: ["59049", "39366", "177146", "19683"],
      answer: "59049"
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
