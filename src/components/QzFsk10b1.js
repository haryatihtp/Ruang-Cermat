import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah pegas memiliki konstanta pegas (k) sebesar 200 N/m. Jika pegas ditarik sejauh 0,1 m, berapa besar gaya yang bekerja pada pegas?",
      options: ["20 N", "30 N", "40 N", "50 N"],
      answer: "20 N"
    },
    {
      question: "2. Jika sebuah pegas mengalami perubahan panjang sebesar 5 cm ketika gaya 10 N diberikan, berapa konstanta pegasnya?",
      options: ["100 N/m", "200 N/m", "300 N/m", "400 N/m"],
      answer: "200 N/m"
    },
    {
      question: "3. Hukum Hooke menyatakan hubungan antara gaya dan ...",
      options: ["massa", "perubahan panjang", "kecepatan", "waktu"],
      answer: "perubahan panjang"
    },
    {
      question: "4. Sebuah pegas memiliki konstanta 500 N/m. Jika gaya sebesar 25 N diberikan, berapa perubahan panjang pegas tersebut?",
      options: ["0.02 m", "0.05 m", "0.04 m", "0.06 m"],
      answer: "0.05 m"
    },
    {
      question: "5. Dalam grafik Hukum Hooke, gaya ditampilkan pada sumbu ..., sedangkan perubahan panjang pada sumbu ...",
      options: ["x, y", "y, x", "x, x", "y, y"],
      answer: "y, x"
    },
    {
      question: "6. Sebuah pegas ditarik sejauh 10 cm dan gaya sebesar 20 N dihasilkan. Berapakah konstanta pegasnya dalam satuan N/m?",
      options: ["150", "200", "250", "300"],
      answer: "200"
    },
    {
      question: "7. Jika dua pegas identik dihubungkan secara seri, bagaimana konstanta pegas totalnya dibandingkan dengan satu pegas tunggal?",
      options: ["Sama", "Setengahnya", "Dua kali lipat", "Tiga kali lipat"],
      answer: "Setengahnya"
    },
    {
      question: "8. Sebuah pegas dengan konstanta 100 N/m direntangkan hingga 0.2 m. Berapa energi potensial elastis yang tersimpan dalam pegas tersebut?",
      options: ["2 J", "1 J", "4 J", "0.5 J"],
      answer: "2 J"
    },
    {
      question: "9. Hukum Hooke berlaku pada daerah ...",
      options: ["elastis", "plastis", "rigid", "fraktur"],
      answer: "elastis"
    },
    {
      question: "10. Jika dua pegas dengan konstanta k1 = 200 N/m dan k2 = 300 N/m dihubungkan secara paralel, berapakah konstanta totalnya?",
      options: ["100 N/m", "250 N/m", "500 N/m", "600 N/m"],
      answer: "500 N/m"
    },
    {
      question: "11. Apa yang terjadi jika gaya yang diberikan pada pegas melebihi batas elastisnya?",
      options: ["Pegas kembali ke panjang semula", "Pegas mengalami deformasi permanen", "Pegas menjadi lebih kuat", "Pegas kehilangan massa"],
      answer: "Pegas mengalami deformasi permanen"
    },
    {
      question: "12. Sebuah pegas dengan konstanta 50 N/m direntangkan sejauh 0.1 m. Berapa energi potensial elastisnya?",
      options: ["0.25 J", "0.5 J", "1 J", "1.25 J"],
      answer: "0.25 J"
    },
    {
      question: "13. Sebuah pegas memiliki panjang alami 20 cm. Ketika diberi beban 5 N, panjangnya menjadi 25 cm. Berapakah konstanta pegas tersebut?",
      options: ["50 N/m", "100 N/m", "150 N/m", "200 N/m"],
      answer: "100 N/m"
    },
    {
      question: "14. Jika energi potensial elastis suatu pegas adalah 2 J dan konstanta pegasnya 80 N/m, berapa besar perubahan panjang pegas tersebut?",
      options: ["0.1 m", "0.2 m", "0.25 m", "0.3 m"],
      answer: "0.2 m"
    },
    {
      question: "15. Sebuah pegas dengan konstanta 120 N/m dipadatkan sejauh 0.05 m. Berapa energi potensial elastis yang tersimpan?",
      options: ["0.15 J", "0.20 J", "0.25 J", "0.30 J"],
      answer: "0.15 J"
    },
    {
      question: "16. Sebuah pegas direntangkan sejauh 10 cm dan menghasilkan gaya sebesar 30 N. Jika pegas lain memiliki konstanta dua kali lipat, berapa gaya yang dihasilkan untuk rentangan yang sama?",
      options: ["30 N", "40 N", "50 N", "60 N"],
      answer: "60 N"
    },
    {
      question: "17. Jika energi potensial elastis suatu pegas adalah 1 J dan perubahan panjangnya 0.1 m, berapakah konstanta pegas tersebut?",
      options: ["100 N/m", "200 N/m", "300 N/m", "400 N/m"],
      answer: "200 N/m"
    },
    {
      question: "18. Dua pegas masing-masing memiliki konstanta 100 N/m dan 150 N/m dihubungkan secara seri. Berapakah konstanta totalnya?",
      options: ["60 N/m", "80 N/m", "100 N/m", "120 N/m"],
      answer: "60 N/m"
    },
    {
      question: "19. Sebuah pegas dengan konstanta 250 N/m direntangkan sejauh 0.3 m. Berapa energi potensial elastisnya?",
      options: ["11.25 J", "9 J", "10 J", "12 J"],
      answer: "11.25 J"
    },
    {
      question: "20. Sebuah pegas dengan panjang alami 50 cm direntangkan menjadi 60 cm dengan gaya sebesar 20 N. Berapa konstanta pegasnya?",
      options: ["150 N/m", "200 N/m", "250 N/m", "300 N/m"],
      answer: "200 N/m"
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
