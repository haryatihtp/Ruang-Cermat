import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Buktikan bahwa jumlah bilangan ganjil pertama n adalah n^2 menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "2. Buktikan bahwa jumlah bilangan genap pertama n adalah n(n+1) menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "3. Buktikan bahwa untuk setiap bilangan bulat n >= 1, 1 + 2 + 3 + ... + n = n(n+1)/2 menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "4. Gunakan induksi matematika untuk membuktikan bahwa 2^n > n^2 untuk semua n > 4!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "5. Buktikan bahwa untuk setiap n bilangan asli, 1^2 + 2^2 + 3^2 + ... + n^2 = n(n+1)(2n+1)/6 menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "6. Buktikan bahwa untuk semua n >= 1, 1 + 1/2 + 1/4 + ... + 1/(2^n) = 2 - 1/(2^(n-1)) menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "7. Gunakan induksi matematika untuk membuktikan bahwa 3^n > n^3 untuk semua n >= 4!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "8. Buktikan bahwa jumlah bilangan kubik pertama n adalah (n(n+1)/2)^2 menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "9. Buktikan dengan induksi matematika bahwa untuk semua n bilangan asli, 2 + 4 + 6 + ... + 2n = n(n+1)!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "10. Gunakan induksi matematika untuk membuktikan bahwa n^3 - n selalu habis dibagi 3 untuk semua n bilangan asli!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "11. Gunakan induksi matematika untuk membuktikan bahwa n! > 2^n untuk semua n >= 4!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "12. Buktikan dengan induksi matematika bahwa 5^n - 1 selalu habis dibagi 4 untuk semua n bilangan bulat positif!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "13. Buktikan bahwa untuk semua bilangan asli n, jumlah bilangan segitiga pertama adalah n(n+1)(n+2)/6 menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "14. Gunakan induksi matematika untuk membuktikan bahwa 1^3 + 2^3 + 3^3 + ... + n^3 = (n(n+1)/2)^2!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "15. Buktikan bahwa untuk semua bilangan asli n >= 1, 2^n - 1 habis dibagi 3!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "16. Gunakan induksi matematika untuk membuktikan bahwa (n+1)! > n^n untuk semua n >= 4!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "17. Buktikan dengan induksi matematika bahwa 1 + 3 + 5 + ... + (2n-1) = n^2 untuk semua n >= 1!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "18. Buktikan bahwa n^4 - 4n^2 selalu habis dibagi 3 untuk semua bilangan asli n menggunakan induksi matematika!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "19. Gunakan induksi matematika untuk membuktikan bahwa 1 + 2 + 4 + 8 + ... + 2^(n-1) = 2^n - 1 untuk semua n >= 1!",
      options: ["Benar", "Salah"],
      answer: "Benar"
    },
    {
      question: "20. Buktikan dengan induksi matematika bahwa n^5 - n selalu habis dibagi 5 untuk semua bilangan asli n!",
      options: ["Benar", "Salah"],
      answer: "Benar"
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
