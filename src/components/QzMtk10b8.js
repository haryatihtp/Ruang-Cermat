import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Dalam sebuah kantong terdapat 3 bola merah, 5 bola biru, dan 2 bola hijau. Jika satu bola diambil secara acak, berapakah peluang mendapatkan bola merah?",
      options: ["3/10", "1/3", "1/2", "3/5"],
      answer: "3/10"
    },
    {
      question: "2. Sebuah dadu dilempar. Berapakah peluang muncul angka genap?",
      options: ["1/2", "1/3", "1/6", "1/4"],
      answer: "1/2"
    },
    {
      question: "3. Dari 10 orang, 3 orang diantaranya memiliki nama dengan huruf depan A. Jika satu orang dipilih secara acak, berapakah peluang nama yang dipilih dimulai dengan huruf A?",
      options: ["3/10", "1/5", "1/3", "1/2"],
      answer: "3/10"
    },
    {
      question: "4. Dalam sebuah kartu remi terdapat 52 kartu. Berapakah peluang untuk mendapatkan kartu spade?",
      options: ["1/4", "1/2", "1/13", "1/52"],
      answer: "1/4"
    },
    {
      question: "5. Dalam sebuah permainan kartu, terdapat 52 kartu yang terdiri dari 13 kartu dari setiap jenis (hati, wajik, sekop, dan keriting). Berapakah peluang untuk menarik kartu yang bukan kartu hati?",
      options: ["39/52", "1/4", "13/52", "1/2"],
      answer: "39/52"
    },
    {
      question: "6. Sebuah dadu dilempar dua kali. Berapakah peluang muncul angka 5 pada lemparan pertama dan angka genap pada lemparan kedua?",
      options: ["1/36", "1/18", "1/12", "1/6"],
      answer: "1/36"
    },
    {
      question: "7. Sebuah kantong berisi 6 bola merah dan 4 bola biru. Jika dua bola diambil secara acak, berapakah peluang keduanya berwarna merah?",
      options: ["3/10", "15/45", "1/5", "3/10"],
      answer: "3/10"
    },
    {
      question: "8. Sebuah dadu dilempar. Berapakah peluang untuk mendapatkan angka lebih besar dari 4?",
      options: ["1/6", "1/3", "1/2", "1/4"],
      answer: "1/3"
    },
    {
      question: "9. Dalam sebuah kotak terdapat 7 bola hijau, 3 bola merah, dan 5 bola biru. Jika dua bola diambil secara acak, berapakah peluang keduanya berwarna biru?",
      options: ["5/30", "1/15", "1/5", "1/3"],
      answer: "1/15"
    },
    {
      question: "10. Dari sebuah kotak yang berisi 5 bola merah, 4 bola biru, dan 1 bola hijau, berapa peluang untuk menarik bola yang berwarna biru?",
      options: ["4/10", "1/2", "1/3", "2/5"],
      answer: "4/10"
    },
    {
      question: "11. Sebuah dadu dilempar dua kali. Berapakah peluang mendapatkan angka 2 pada lemparan pertama dan angka ganjil pada lemparan kedua?",
      options: ["1/18", "1/12", "1/36", "1/6"],
      answer: "1/36"
    },
    {
      question: "12. Dalam sebuah dadu, berapa peluang untuk mendapatkan angka lebih kecil dari 3?",
      options: ["1/3", "1/6", "1/2", "1/4"],
      answer: "1/3"
    },
    {
      question: "13. Dalam suatu kotak terdapat 8 bola merah, 6 bola biru, dan 4 bola hijau. Jika dua bola diambil secara acak, berapa peluang untuk mendapatkan satu bola merah dan satu bola biru?",
      options: ["32/154", "48/154", "12/154", "36/154"],
      answer: "48/154"
    },
    {
      question: "14. Dalam sebuah kotak terdapat 5 bola merah, 3 bola hijau, dan 2 bola biru. Jika satu bola diambil secara acak, berapakah peluang untuk mendapatkan bola hijau?",
      options: ["3/10", "1/2", "1/3", "2/5"],
      answer: "3/10"
    },
    {
      question: "15. Dalam sebuah kantong terdapat 4 bola merah dan 6 bola biru. Jika dua bola diambil secara acak tanpa pengembalian, berapakah peluang kedua bola tersebut berwarna merah?",
      options: ["1/15", "2/15", "3/15", "4/15"],
      answer: "2/15"
    },
    {
      question: "16. Dalam sebuah dadu ada angka 1 hingga 6. Berapakah peluang untuk mendapatkan angka lebih dari 3?",
      options: ["1/2", "2/3", "1/3", "1/6"],
      answer: "1/2"
    },
    {
      question: "17. Jika sebuah dadu dilempar satu kali, berapakah peluang untuk mendapatkan angka yang bukan kelipatan 3?",
      options: ["4/6", "1/3", "1/2", "2/3"],
      answer: "4/6"
    },
    {
      question: "18. Sebuah kantong berisi 5 bola merah dan 5 bola biru. Jika dua bola diambil secara acak, berapakah peluang untuk mendapatkan dua bola merah?",
      options: ["1/5", "1/4", "1/10", "1/2"],
      answer: "1/10"
    },
    {
      question: "19. Dalam sebuah kotak terdapat 3 bola merah, 4 bola biru, dan 5 bola hijau. Jika dua bola diambil secara acak, berapakah peluang mendapatkan bola hijau dan biru?",
      options: ["20/66", "12/66", "15/66", "8/66"],
      answer: "20/66"
    },
    {
      question: "20. Sebuah dadu dilempar dua kali. Berapakah peluang untuk mendapatkan angka genap pada lemparan pertama dan angka lebih dari 3 pada lemparan kedua?",
      options: ["1/9", "1/6", "1/4", "1/8"],
      answer: "1/9"
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
