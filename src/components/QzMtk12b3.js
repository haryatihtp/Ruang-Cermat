import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const alertShown = useRef(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      if (!alertShown.current) {
        alert("Anda harus login terlebih dahulu!");
        alertShown.current = true;
      }
      navigate("/login");
    }
  }, [navigate]);

  const questions = [
    {
      question: "1. Sebuah persegi panjang memiliki panjang 12 cm dan lebar 8 cm. Berapakah luasnya?",
      options: ["96 cm²", "100 cm²", "120 cm²", "150 cm²"],
      answer: "96 cm²"
    },
    {
      question: "2. Hitung keliling sebuah lingkaran dengan diameter 14 cm. (Gunakan π ≈ 3,14)",
      options: ["44 cm", "43,96 cm", "45 cm", "48 cm"],
      answer: "44 cm"
    },
    {
      question: "3. Sebuah segitiga siku-siku memiliki alas 6 cm dan tinggi 8 cm. Berapakah panjang sisi miringnya?",
      options: ["9 cm", "10 cm", "12 cm", "14 cm"],
      answer: "10 cm"
    },
    {
      question: "4. Hitung volume sebuah balok dengan panjang 10 cm, lebar 5 cm, dan tinggi 4 cm.",
      options: ["100 cm³", "200 cm³", "400 cm³", "600 cm³"],
      answer: "200 cm³"
    },
    {
      question: "5. Sebuah limas segitiga memiliki alas berbentuk segitiga dengan luas 30 cm² dan tinggi limas 12 cm. Berapakah volume limas tersebut?",
      options: ["90 cm³", "120 cm³", "180 cm³", "360 cm³"],
      answer: "120 cm³"
    },
    {
      question: "6. Sebuah prisma segitiga memiliki alas segitiga dengan panjang 6 cm, tinggi 4 cm, dan tinggi prisma 10 cm. Hitung volumenya.",
      options: ["120 cm³", "240 cm³", "360 cm³", "480 cm³"],
      answer: "120 cm³"
    },
    {
      question: "7. Sebuah lingkaran memiliki luas 154 cm². Berapakah jari-jarinya? (Gunakan π ≈ 3,14)",
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "7 cm"
    },
    {
      question: "8. Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Hitung luas permukaan tabung. (Gunakan π ≈ 3,14)",
      options: ["748 cm²", "748,4 cm²", "770 cm²", "772 cm²"],
      answer: "748 cm²"
    },
    {
      question: "9. Sebuah bola memiliki jari-jari 7 cm. Berapakah volumenya? (Gunakan π ≈ 3,14)",
      options: ["1436 cm³", "1436,76 cm³", "1437 cm³", "1438 cm³"],
      answer: "1436 cm³"
    },
    {
      question: "10. Sebuah kerucut memiliki jari-jari 3 cm dan tinggi 4 cm. Hitung volumenya. (Gunakan π ≈ 3,14)",
      options: ["37,68 cm³", "38 cm³", "38,94 cm³", "39 cm³"],
      answer: "37,68 cm³"
    },
    {
      question: "11. Sebuah belah ketupat memiliki diagonal 8 cm dan 6 cm. Berapakah luasnya?",
      options: ["24 cm²", "48 cm²", "36 cm²", "40 cm²"],
      answer: "24 cm²"
    },
    {
      question: "12. Sebuah kubus memiliki panjang sisi 5 cm. Hitung luas permukaannya.",
      options: ["125 cm²", "150 cm²", "300 cm²", "150 cm²"],
      answer: "150 cm²"
    },
    {
      question: "13. Sebuah bola memiliki luas permukaan 616 cm². Berapakah jari-jarinya? (Gunakan π ≈ 3,14)",
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "7 cm"
    },
    {
      question: "14. Sebuah trapezium memiliki panjang sisi sejajar 10 cm dan 6 cm, serta tinggi 8 cm. Hitung luasnya.",
      options: ["48 cm²", "64 cm²", "72 cm²", "80 cm²"],
      answer: "64 cm²"
    },
    {
      question: "15. Sebuah prisma segi enam beraturan memiliki panjang sisi alas 6 cm dan tinggi prisma 10 cm. Hitung volumenya. (Gunakan √3 ≈ 1,73)",
      options: ["930 cm³", "936 cm³", "938 cm³", "940 cm³"],
      answer: "936 cm³"
    },
    {
      question: "16. Sebuah tabung memiliki tinggi 20 cm dan jari-jari 7 cm. Hitung volume tabung tersebut. (Gunakan π ≈ 3,14)",
      options: ["3080 cm³", "3080,4 cm³", "3085 cm³", "3090 cm³"],
      answer: "3080 cm³"
    },
    {
      question: "17. Sebuah kerucut memiliki luas alas 78,5 cm² dan tinggi 12 cm. Berapakah volumenya?",
      options: ["314 cm³", "314,5 cm³", "315 cm³", "316 cm³"],
      answer: "314 cm³"
    },
    {
      question: "18. Sebuah persegi memiliki keliling 48 cm. Berapakah panjang sisinya?",
      options: ["10 cm", "11 cm", "12 cm", "13 cm"],
      answer: "12 cm"
    },
    {
      question: "19. Sebuah bola memiliki volume 904,32 cm³. Berapakah jari-jarinya? (Gunakan π ≈ 3,14)",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "6 cm"
    },
    {
      question: "20. Sebuah kubus memiliki luas permukaan 216 cm². Berapakah panjang sisinya?",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "6 cm"
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
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    }
  };

  if (!isAuthenticated) {
    return <p>Memuat halaman, harap tunggu...</p>;
  }

  return (
    <div className="app">
      <h1>Tryout Matematika: Bangun Ruang dan Geometri</h1>
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
