import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah benda bergerak melingkar dengan jari-jari 2 m dan kecepatan sudut 5 rad/s. Berapa kecepatan linearnya?",
      options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
      answer: "10 m/s"
    },
    {
      question: "2. Sebuah roda berputar dengan kecepatan sudut 6 rad/s. Jika jari-jari roda adalah 0,5 m, berapa kecepatan linearnya?",
      options: ["2 m/s", "3 m/s", "4 m/s", "5 m/s"],
      answer: "3 m/s"
    },
    {
      question: "3. Jika sebuah benda berputar dengan kecepatan sudut 4 rad/s selama 10 detik, berapa sudut yang ditempuh benda tersebut?",
      options: ["20 rad", "30 rad", "40 rad", "50 rad"],
      answer: "40 rad"
    },
    {
      question: "4. Sebuah benda bergerak melingkar dengan jari-jari 3 m dan percepatan sudut 2 rad/s² selama 5 detik. Berapa kecepatan sudut akhirnya?",
      options: ["5 rad/s", "8 rad/s", "10 rad/s", "12 rad/s"],
      answer: "10 rad/s"
    },
    {
      question: "5. Sebuah benda bergerak melingkar dengan periode 2 detik. Berapa frekuensinya?",
      options: ["0,25 Hz", "0,5 Hz", "1 Hz", "2 Hz"],
      answer: "0,5 Hz"
    },
    {
      question: "6. Sebuah benda bergerak melingkar dengan frekuensi 2 Hz. Berapa kecepatan sudutnya?",
      options: ["2 rad/s", "4 rad/s", "6,28 rad/s", "12,56 rad/s"],
      answer: "12,56 rad/s"
    },
    {
      question: "7. Sebuah roda berputar 300 putaran dalam satu menit. Berapa frekuensi putarannya?",
      options: ["2 Hz", "3 Hz", "5 Hz", "6 Hz"],
      answer: "5 Hz"
    },
    {
      question: "8. Jika sebuah benda bergerak melingkar dengan kecepatan sudut 8 rad/s, berapa periode geraknya?",
      options: ["0,125 s", "0,25 s", "0,5 s", "1 s"],
      answer: "0,25 s"
    },
    {
      question: "9. Sebuah benda bergerak melingkar dengan jari-jari 2 m dan percepatan sentripetal 8 m/s². Berapa kecepatan linearnya?",
      options: ["2 m/s", "4 m/s", "6 m/s", "8 m/s"],
      answer: "4 m/s"
    },
    {
      question: "10. Sebuah benda bermassa 2 kg bergerak melingkar dengan kecepatan 5 m/s dan jari-jari lintasan 4 m. Berapa gaya sentripetal yang bekerja pada benda tersebut?",
      options: ["10 N", "12,5 N", "15 N", "20 N"],
      answer: "12,5 N"
    },
    {
      question: "11. Sebuah benda bergerak melingkar dengan jari-jari 0,5 m dan kecepatan sudut 10 rad/s. Berapa percepatan sentripetalnya?",
      options: ["25 m/s²", "50 m/s²", "75 m/s²", "100 m/s²"],
      answer: "50 m/s²"
    },
    {
      question: "12. Sebuah benda berputar dengan frekuensi 2 Hz. Jika jari-jari lintasannya adalah 0,4 m, berapa kecepatan linearnya?",
      options: ["3,14 m/s", "5,02 m/s", "6,28 m/s", "8,14 m/s"],
      answer: "5,02 m/s"
    },
    {
      question: "13. Sebuah roda memiliki kecepatan sudut awal 2 rad/s dan percepatan sudut 1 rad/s². Berapa sudut yang ditempuh dalam 4 detik?",
      options: ["8 rad", "10 rad", "12 rad", "14 rad"],
      answer: "12 rad"
    },
    {
      question: "14. Sebuah benda bergerak melingkar dengan kecepatan sudut konstan 6 rad/s. Berapa sudut yang ditempuh dalam 5 detik?",
      options: ["20 rad", "25 rad", "30 rad", "35 rad"],
      answer: "30 rad"
    },
    {
      question: "15. Sebuah benda bergerak melingkar dengan kecepatan linear 10 m/s dan percepatan sentripetal 20 m/s². Berapa jari-jari lintasannya?",
      options: ["2 m", "4 m", "5 m", "10 m"],
      answer: "5 m"
    },
    {
      question: "16. Sebuah benda bergerak melingkar dengan kecepatan linear 8 m/s dan jari-jari lintasan 2 m. Berapa percepatan sentripetalnya?",
      options: ["16 m/s²", "20 m/s²", "32 m/s²", "40 m/s²"],
      answer: "32 m/s²"
    },
    {
      question: "17. Sebuah roda memiliki jari-jari 1 m dan berputar dengan kecepatan 120 putaran per menit. Berapa kecepatan linearnya?",
      options: ["4 m/s", "8 m/s", "12 m/s", "16 m/s"],
      answer: "12 m/s"
    },
    {
      question: "18. Sebuah benda bergerak melingkar dengan kecepatan sudut 4 rad/s. Jika percepatan sudutnya 2 rad/s², berapa kecepatan sudut setelah 3 detik?",
      options: ["6 rad/s", "8 rad/s", "10 rad/s", "12 rad/s"],
      answer: "10 rad/s"
    },
    {
      question: "19. Sebuah benda berputar dengan frekuensi 1 Hz. Jika jari-jari lintasannya adalah 0,3 m, berapa percepatan sentripetalnya?",
      options: ["1,89 m/s²", "2,97 m/s²", "3,76 m/s²", "5,92 m/s²"],
      answer: "2,97 m/s²"
    },
    {
      question: "20. Sebuah roda berputar dengan percepatan sudut 2 rad/s². Jika awalnya diam, berapa sudut yang ditempuh dalam 5 detik?",
      options: ["20 rad", "25 rad", "30 rad", "35 rad"],
      answer: "25 rad"
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
