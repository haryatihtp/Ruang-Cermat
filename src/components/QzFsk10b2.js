import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah benda dengan massa 5 kg dipercepat sebesar 2 m/s². Berapa gaya total yang bekerja pada benda tersebut?",
      options: ["10 N", "15 N", "20 N", "25 N"],
      answer: "10 N"
    },
    {
      question: "2. Sebuah benda bermassa 10 kg berada di atas meja licin. Jika gaya sebesar 50 N bekerja pada benda, berapa percepatannya?",
      options: ["5 m/s²", "4 m/s²", "6 m/s²", "7 m/s²"],
      answer: "5 m/s²"
    },
    {
      question: "3. Hukum Newton kedua menyatakan hubungan antara ...",
      options: ["gaya, massa, dan percepatan", "massa dan berat", "kecepatan dan percepatan", "waktu dan gaya"],
      answer: "gaya, massa, dan percepatan"
    },
    {
      question: "4. Sebuah gaya 30 N bekerja pada benda bermassa 6 kg. Berapa percepatannya?",
      options: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
      answer: "5 m/s²"
    },
    {
      question: "5. Dalam hukum Newton pertama, benda yang diam akan tetap diam kecuali ...",
      options: ["diberi gaya", "massa bertambah", "kecepatan berkurang", "waktunya habis"],
      answer: "diberi gaya"
    },
    {
      question: "6. Sebuah benda dengan massa 8 kg bergerak dengan percepatan 3 m/s². Berapa gaya total yang bekerja pada benda tersebut?",
      options: ["20 N", "24 N", "30 N", "32 N"],
      answer: "24 N"
    },
    {
      question: "7. Jika gaya total yang bekerja pada benda adalah nol, maka benda tersebut ...",
      options: ["tetap diam atau bergerak lurus beraturan", "berakselerasi", "bergerak melingkar", "kecepatannya meningkat"],
      answer: "tetap diam atau bergerak lurus beraturan"
    },
    {
      question: "8. Sebuah benda bermassa 10 kg jatuh bebas. Jika percepatan gravitasi 9,8 m/s², berapa berat benda tersebut?",
      options: ["98 N", "100 N", "95 N", "92 N"],
      answer: "98 N"
    },
    {
      question: "9. Dalam hukum Newton ketiga, gaya aksi dan reaksi memiliki besar yang sama tetapi ...",
      options: ["arahnya berlawanan", "waktunya berbeda", "arahnya sama", "berada pada benda yang sama"],
      answer: "arahnya berlawanan"
    },
    {
      question: "10. Sebuah benda bermassa 2 kg ditarik dengan gaya 10 N pada permukaan datar tanpa gesekan. Berapa percepatan benda tersebut?",
      options: ["4 m/s²", "5 m/s²", "6 m/s²", "3 m/s²"],
      answer: "5 m/s²"
    },
    {
      question: "11. Apa yang terjadi jika gaya aksi dan reaksi bekerja pada benda yang sama?",
      options: ["Benda tidak bergerak", "Benda bergerak dengan percepatan", "Benda bertambah berat", "Benda mengalami deformasi"],
      answer: "Benda tidak bergerak"
    },
    {
      question: "12. Sebuah benda bermassa 3 kg bergerak dengan percepatan 4 m/s². Berapa gaya yang bekerja pada benda tersebut?",
      options: ["10 N", "12 N", "15 N", "12 N"],
      answer: "12 N"
    },
    {
      question: "13. Sebuah gaya 25 N bekerja pada benda bermassa 5 kg di atas lantai licin. Berapa percepatan benda tersebut?",
      options: ["4 m/s²", "5 m/s²", "6 m/s²", "7 m/s²"],
      answer: "5 m/s²"
    },
    {
      question: "14. Hukum Newton ketiga dikenal juga sebagai hukum ...",
      options: ["aksi-reaksi", "ineria", "percepatan", "gravitasi"],
      answer: "aksi-reaksi"
    },
    {
      question: "15. Sebuah benda bermassa 12 kg bergerak dengan percepatan 2 m/s². Berapa gaya total yang bekerja pada benda?",
      options: ["20 N", "22 N", "24 N", "26 N"],
      answer: "24 N"
    },
    {
      question: "16. Jika sebuah benda dengan massa 5 kg berada dalam keadaan diam, maka gaya total yang bekerja padanya adalah ...",
      options: ["nol", "5 N", "10 N", "15 N"],
      answer: "nol"
    },
    {
      question: "17. Sebuah benda bermassa 4 kg dipercepat dengan gaya 16 N. Berapa percepatan benda tersebut?",
      options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
      answer: "4 m/s²"
    },
    {
      question: "18. Jika gaya yang bekerja pada benda bertambah, maka percepatannya akan ...",
      options: ["bertambah", "berkurang", "tetap", "nol"],
      answer: "bertambah"
    },
    {
      question: "19. Sebuah benda bermassa 6 kg ditarik dengan gaya 18 N. Berapa percepatan benda tersebut?",
      options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
      answer: "3 m/s²"
    },
    {
      question: "20. Jika sebuah benda bermassa 10 kg dikenai gaya 50 N, berapa percepatannya?",
      options: ["4 m/s²", "5 m/s²", "6 m/s²", "7 m/s²"],
      answer: "5 m/s²"
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
