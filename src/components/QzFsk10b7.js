import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah benda bermassa 2 kg menerima kalor sebesar 8000 J sehingga suhunya naik dari 20°C menjadi 40°C. Berapa kalor jenis benda tersebut?",
      options: ["200 J/kg°C", "400 J/kg°C", "600 J/kg°C", "800 J/kg°C"],
      answer: "200 J/kg°C"
    },
    {
      question: "2. Sebuah logam bermassa 500 gram memerlukan kalor sebesar 10.000 J untuk menaikkan suhunya sebesar 20°C. Berapa kalor jenis logam tersebut?",
      options: ["100 J/kg°C", "200 J/kg°C", "400 J/kg°C", "800 J/kg°C"],
      answer: "400 J/kg°C"
    },
    {
      question: "3. Sebuah es bermassa 2 kg mencair seluruhnya pada suhu 0°C dengan membutuhkan kalor sebesar 668.000 J. Berapa kalor lebur es?",
      options: ["334.000 J/kg", "336.000 J/kg", "338.000 J/kg", "340.000 J/kg"],
      answer: "334.000 J/kg"
    },
    {
      question: "4. Sebuah benda bermassa 3 kg memiliki kalor jenis 600 J/kg°C. Jika suhunya naik sebesar 10°C, berapa kalor yang diperlukan?",
      options: ["18.000 J", "20.000 J", "22.000 J", "24.000 J"],
      answer: "18.000 J"
    },
    {
      question: "5. Sebuah air bermassa 1 kg memerlukan kalor 100.000 J untuk menaikkan suhunya dari 20°C menjadi 45°C. Berapa kalor jenis air tersebut?",
      options: ["4000 J/kg°C", "4200 J/kg°C", "4400 J/kg°C", "4600 J/kg°C"],
      answer: "4200 J/kg°C"
    },
    {
      question: "6. Sebuah benda bermassa 0,5 kg menerima kalor sebesar 500 J sehingga suhunya naik dari 20°C menjadi 22°C. Berapa kalor jenis benda tersebut?",
      options: ["250 J/kg°C", "500 J/kg°C", "750 J/kg°C", "1000 J/kg°C"],
      answer: "500 J/kg°C"
    },
    {
      question: "7. Sebuah benda menerima kalor sebesar 800 J untuk menaikkan suhunya sebesar 4°C. Jika kalor jenis benda tersebut 200 J/kg°C, berapa massa benda tersebut?",
      options: ["0,5 kg", "1 kg", "1,5 kg", "2 kg"],
      answer: "1 kg"
    },
    {
      question: "8. Sebuah air bermassa 2 kg kehilangan kalor sebesar 16.800 J sehingga suhunya turun 2°C. Berapa kalor jenis air tersebut?",
      options: ["4200 J/kg°C", "4000 J/kg°C", "3800 J/kg°C", "3600 J/kg°C"],
      answer: "4200 J/kg°C"
    },
    {
      question: "9. Sebuah logam bermassa 1 kg dipanaskan hingga suhu naik sebesar 50°C dengan menyerap kalor sebesar 10.000 J. Berapa kalor jenis logam tersebut?",
      options: ["100 J/kg°C", "200 J/kg°C", "300 J/kg°C", "400 J/kg°C"],
      answer: "200 J/kg°C"
    },
    {
      question: "10. Sebuah benda memiliki kalor jenis 420 J/kg°C dan menerima kalor sebesar 1260 J. Jika massanya 1 kg, berapa kenaikan suhu benda tersebut?",
      options: ["2°C", "3°C", "4°C", "5°C"],
      answer: "3°C"
    },
    {
      question: "11. Sebuah es bermassa 2 kg mencair sepenuhnya pada suhu 0°C dengan kalor lebur es 334.000 J/kg. Berapa kalor yang diperlukan?",
      options: ["668.000 J", "670.000 J", "672.000 J", "674.000 J"],
      answer: "668.000 J"
    },
    {
      question: "12. Sebuah air bermassa 1 kg berubah menjadi uap sepenuhnya pada suhu 100°C dengan membutuhkan kalor sebesar 2.260.000 J. Berapa kalor uap air?",
      options: ["2.250.000 J/kg", "2.260.000 J/kg", "2.270.000 J/kg", "2.280.000 J/kg"],
      answer: "2.260.000 J/kg"
    },
    {
      question: "13. Sebuah benda menerima kalor sebesar 900 J sehingga suhunya naik dari 30°C menjadi 40°C. Jika kalor jenis benda tersebut adalah 300 J/kg°C, berapa massa benda tersebut?",
      options: ["1 kg", "2 kg", "3 kg", "4 kg"],
      answer: "3 kg"
    },
    {
      question: "14. Sebuah benda menerima kalor sebesar 600 J untuk menaikkan suhunya sebesar 5°C. Jika massa benda 0,5 kg, berapa kalor jenis benda tersebut?",
      options: ["200 J/kg°C", "400 J/kg°C", "600 J/kg°C", "800 J/kg°C"],
      answer: "400 J/kg°C"
    },
    {
      question: "15. Sebuah logam bermassa 4 kg memiliki kalor jenis 250 J/kg°C. Jika suhunya naik dari 10°C menjadi 30°C, berapa kalor yang diperlukan?",
      options: ["10.000 J", "15.000 J", "20.000 J", "25.000 J"],
      answer: "20.000 J"
    },
    {
      question: "16. Sebuah benda kehilangan kalor sebesar 12.600 J sehingga suhunya turun dari 70°C menjadi 40°C. Jika massa benda 3 kg, berapa kalor jenisnya?",
      options: ["200 J/kg°C", "300 J/kg°C", "400 J/kg°C", "500 J/kg°C"],
      answer: "200 J/kg°C"
    },
    {
      question: "17. Sebuah benda bermassa 2 kg memiliki kalor jenis 300 J/kg°C. Berapa kalor yang diperlukan untuk menaikkan suhunya sebesar 25°C?",
      options: ["10.000 J", "12.500 J", "15.000 J", "20.000 J"],
      answer: "15.000 J"
    },
    {
      question: "18. Sebuah benda menerima kalor sebesar 4800 J sehingga suhunya naik dari 20°C menjadi 40°C. Jika kalor jenis benda tersebut 240 J/kg°C, berapa massa benda tersebut?",
      options: ["0,5 kg", "1 kg", "1,5 kg", "2 kg"],
      answer: "1 kg"
    },
    {
      question: "19. Sebuah es bermassa 3 kg mencair seluruhnya pada suhu 0°C. Jika kalor lebur es adalah 334.000 J/kg, berapa kalor yang diperlukan?",
      options: ["1.002.000 J", "1.004.000 J", "1.006.000 J", "1.008.000 J"],
      answer: "1.002.000 J"
    },
    {
      question: "20. Sebuah air bermassa 2 kg membutuhkan kalor sebesar 8.400 J untuk menaikkan suhunya sebesar 1°C. Berapa kalor jenis air tersebut?",
      options: ["4100 J/kg°C", "4200 J/kg°C", "4300 J/kg°C", "4400 J/kg°C"],
      answer: "4200 J/kg°C"
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
