import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah mobil bergerak dengan kecepatan 20 m/s selama 5 detik. Berapa jarak yang ditempuh mobil tersebut?",
      options: ["100 m", "150 m", "200 m", "250 m"],
      answer: "100 m"
    },
    {
      question: "2. Sebuah mobil bergerak dengan percepatan 2 m/s². Jika kecepatan awalnya 10 m/s, berapa kecepatan akhirnya setelah 4 detik?",
      options: ["14 m/s", "18 m/s", "20 m/s", "22 m/s"],
      answer: "18 m/s"
    },
    {
      question: "3. Sebuah benda bergerak dengan kecepatan konstan selama 10 detik. Berapa jarak yang ditempuh benda tersebut jika kecepatannya 5 m/s?",
      options: ["40 m", "50 m", "60 m", "70 m"],
      answer: "50 m"
    },
    {
      question: "4. Sebuah mobil bergerak dengan kecepatan 30 m/s dan kemudian diberi percepatan 3 m/s² selama 6 detik. Berapa jarak yang ditempuh?",
      options: ["150 m", "180 m", "200 m", "210 m"],
      answer: "210 m"
    },
    {
      question: "5. Dalam grafik kecepatan terhadap waktu, garis lurus yang menanjak menunjukkan ...",
      options: ["kecepatan konstan", "percepatan konstan", "kecepatan semakin berkurang", "percepatan semakin berkurang"],
      answer: "percepatan konstan"
    },
    {
      question: "6. Sebuah sepeda motor bergerak dengan kecepatan 15 m/s dan berhenti setelah 5 detik. Berapakah percepatan sepeda motor tersebut?",
      options: ["-3 m/s²", "-2 m/s²", "-1 m/s²", "-4 m/s²"],
      answer: "-3 m/s²"
    },
    {
      question: "7. Jika sebuah benda bergerak dengan kecepatan konstan 20 m/s, maka percepatan benda tersebut adalah ...",
      options: ["0 m/s²", "1 m/s²", "10 m/s²", "20 m/s²"],
      answer: "0 m/s²"
    },
    {
      question: "8. Sebuah benda bergerak dengan percepatan 5 m/s² selama 3 detik. Berapa kecepatan akhir benda tersebut jika kecepatan awalnya 0 m/s?",
      options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
      answer: "15 m/s"
    },
    {
      question: "9. Jika benda bergerak dengan kecepatan awal 10 m/s dan percepatan 2 m/s², berapa jarak yang ditempuh dalam 4 detik?",
      options: ["30 m", "40 m", "50 m", "60 m"],
      answer: "40 m"
    },
    {
      question: "10. Sebuah mobil bergerak dengan kecepatan 40 m/s dan memiliki percepatan -2 m/s². Berapa lama waktu yang dibutuhkan mobil untuk berhenti?",
      options: ["10 detik", "20 detik", "15 detik", "25 detik"],
      answer: "20 detik"
    },
    {
      question: "11. Jika kecepatan suatu benda bertambah secara terus-menerus, maka benda tersebut mengalami ...",
      options: ["percepatan positif", "percepatan negatif", "kecepatan konstan", "kecepatan berkurang"],
      answer: "percepatan positif"
    },
    {
      question: "12. Sebuah mobil bergerak dengan kecepatan awal 0 m/s dan percepatan 3 m/s². Berapa jarak yang ditempuh setelah 4 detik?",
      options: ["24 m", "30 m", "36 m", "40 m"],
      answer: "24 m"
    },
    {
      question: "13. Sebuah benda bergerak dengan kecepatan awal 10 m/s dan mempercepat dengan 2 m/s². Berapa kecepatan benda setelah 5 detik?",
      options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"],
      answer: "20 m/s"
    },
    {
      question: "14. Sebuah benda bergerak dengan kecepatan awal 5 m/s dan mengalami percepatan 2 m/s². Berapa jarak yang ditempuh dalam waktu 3 detik?",
      options: ["22 m", "24 m", "26 m", "28 m"],
      answer: "24 m"
    },
    {
      question: "15. Sebuah benda bergerak dengan kecepatan awal 12 m/s dan bergerak selama 4 detik. Berapa jarak yang ditempuh jika percepatannya 1 m/s²?",
      options: ["52 m", "56 m", "60 m", "64 m"],
      answer: "56 m"
    },
    {
      question: "16. Sebuah mobil berhenti setelah 10 detik dengan percepatan -1 m/s². Jika kecepatan awal mobil 15 m/s, berapa jarak yang ditempuh mobil?",
      options: ["75 m", "80 m", "85 m", "90 m"],
      answer: "75 m"
    },
    {
      question: "17. Jika suatu benda bergerak dengan percepatan 0 m/s², maka geraknya adalah ...",
      options: ["gerak lurus beraturan", "gerak lurus dipercepat", "gerak lurus diperlambat", "gerak melingkar"],
      answer: "gerak lurus beraturan"
    },
    {
      question: "18. Sebuah benda bergerak dengan kecepatan awal 4 m/s dan mengalami percepatan 3 m/s². Berapa kecepatan benda setelah 6 detik?",
      options: ["22 m/s", "26 m/s", "28 m/s", "32 m/s"],
      answer: "22 m/s"
    },
    {
      question: "19. Sebuah benda bergerak dengan kecepatan 25 m/s dan melambat dengan percepatan 2 m/s². Berapa lama waktu yang dibutuhkan benda untuk berhenti?",
      options: ["10 detik", "12 detik", "15 detik", "20 detik"],
      answer: "12 detik"
    },
    {
      question: "20. Sebuah benda bergerak dengan kecepatan 50 m/s dan mengalami percepatan -5 m/s². Berapa jarak yang ditempuh benda sampai berhenti?",
      options: ["100 m", "200 m", "300 m", "400 m"],
      answer: "500 m"
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
      <h1>Kuis Fisika Kelas X</h1>
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
