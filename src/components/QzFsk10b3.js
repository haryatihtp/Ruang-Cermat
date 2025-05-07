import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Berapa usaha yang dilakukan untuk mengangkat benda bermassa 10 kg setinggi 2 meter? (g = 10 m/s²)",
      options: ["200 J", "150 J", "250 J", "100 J"],
      answer: "200 J"
    },
    {
      question: "2. Sebuah benda dengan massa 5 kg meluncur sejauh 10 meter akibat gaya 20 N. Berapa usaha yang dilakukan oleh gaya tersebut?",
      options: ["200 J", "100 J", "50 J", "400 J"],
      answer: "200 J"
    },
    {
      question: "3. Energi potensial gravitasi sebuah benda bergantung pada ...",
      options: ["massa, percepatan gravitasi, dan ketinggian", "massa dan kecepatan", "percepatan gravitasi dan kecepatan", "massa dan percepatan"],
      answer: "massa, percepatan gravitasi, dan ketinggian"
    },
    {
      question: "4. Sebuah benda dengan massa 2 kg berada pada ketinggian 5 meter. Berapa energi potensialnya? (g = 10 m/s²)",
      options: ["100 J", "50 J", "75 J", "200 J"],
      answer: "100 J"
    },
    {
      question: "5. Apa yang terjadi pada energi kinetik jika kecepatan sebuah benda menjadi dua kali lipat?",
      options: ["Energi kinetik menjadi empat kali lipat", "Energi kinetik menjadi dua kali lipat", "Energi kinetik tidak berubah", "Energi kinetik berkurang setengah"],
      answer: "Energi kinetik menjadi empat kali lipat"
    },
    {
      question: "6. Sebuah benda bermassa 4 kg bergerak dengan kecepatan 3 m/s. Berapa energi kinetiknya?",
      options: ["18 J", "36 J", "24 J", "12 J"],
      answer: "18 J"
    },
    {
      question: "7. Usaha dinyatakan sebagai hasil kali ...",
      options: ["gaya dan perpindahan", "massa dan percepatan", "kecepatan dan waktu", "gaya dan waktu"],
      answer: "gaya dan perpindahan"
    },
    {
      question: "8. Sebuah benda bermassa 10 kg dijatuhkan dari ketinggian 20 meter. Berapa energi potensialnya saat di ketinggian tersebut? (g = 10 m/s²)",
      options: ["2000 J", "1000 J", "1500 J", "500 J"],
      answer: "2000 J"
    },
    {
      question: "9. Dalam hukum kekekalan energi, energi mekanik total suatu sistem ...",
      options: ["tetap", "berkurang", "bertambah", "berubah-ubah"],
      answer: "tetap"
    },
    {
      question: "10. Sebuah pegas dengan konstanta 100 N/m ditekan sejauh 0,2 meter. Berapa energi potensial elastis yang tersimpan dalam pegas?",
      options: ["2 J", "1 J", "0,5 J", "4 J"],
      answer: "2 J"
    },
    {
      question: "11. Jika usaha yang dilakukan pada sebuah benda adalah 50 J dan benda berpindah sejauh 10 meter, berapa besar gaya yang bekerja?",
      options: ["5 N", "10 N", "15 N", "20 N"],
      answer: "5 N"
    },
    {
      question: "12. Sebuah benda bermassa 6 kg bergerak dengan kecepatan 4 m/s. Berapa energi kinetiknya?",
      options: ["48 J", "96 J", "24 J", "72 J"],
      answer: "48 J"
    },
    {
      question: "13. Energi potensial elastis pada pegas bergantung pada ...",
      options: ["konstanta pegas dan perubahan panjang", "massa dan percepatan", "kecepatan dan waktu", "konstanta pegas dan waktu"],
      answer: "konstanta pegas dan perubahan panjang"
    },
    {
      question: "14. Sebuah pegas dengan konstanta 50 N/m ditarik sejauh 0,1 meter. Berapa energi potensial elastisnya?",
      options: ["0,25 J", "0,5 J", "1 J", "0,75 J"],
      answer: "0,25 J"
    },
    {
      question: "15. Sebuah benda bermassa 8 kg bergerak dengan kecepatan 5 m/s. Berapa energi kinetiknya?",
      options: ["100 J", "200 J", "150 J", "250 J"],
      answer: "100 J"
    },
    {
      question: "16. Usaha pada benda dikatakan nol jika ...",
      options: ["gaya tegak lurus terhadap perpindahan", "gaya searah dengan perpindahan", "perpindahan cukup besar", "gaya lebih besar dari perpindahan"],
      answer: "gaya tegak lurus terhadap perpindahan"
    },
    {
      question: "17. Sebuah benda bermassa 3 kg bergerak dengan kecepatan 6 m/s. Berapa energi kinetiknya?",
      options: ["54 J", "108 J", "36 J", "72 J"],
      answer: "54 J"
    },
    {
      question: "18. Jika usaha yang dilakukan pada sebuah benda bertambah, maka energi kinetiknya akan ...",
      options: ["bertambah", "berkurang", "tetap", "nol"],
      answer: "bertambah"
    },
    {
      question: "19. Sebuah benda bermassa 2 kg berada pada ketinggian 10 meter. Berapa energi potensialnya? (g = 10 m/s²)",
      options: ["200 J", "100 J", "50 J", "400 J"],
      answer: "200 J"
    },
    {
      question: "20. Apa yang dimaksud dengan energi mekanik?",
      options: ["Jumlah energi kinetik dan energi potensial", "Energi yang dihasilkan oleh gaya", "Energi akibat kecepatan benda", "Energi akibat perpindahan benda"],
      answer: "Jumlah energi kinetik dan energi potensial"
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
