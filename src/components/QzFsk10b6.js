import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah benda bermassa 2 kg tercelup seluruhnya dalam air sehingga mengalami gaya angkat sebesar 10 N. Berapa massa jenis benda tersebut?",
      options: ["500 kg/m³", "1000 kg/m³", "2000 kg/m³", "2500 kg/m³"],
      answer: "1000 kg/m³"
    },
    {
      question: "2. Sebuah benda mengapung di atas air dengan 75% volumenya tercelup. Jika massa jenis air adalah 1000 kg/m³, berapa massa jenis benda tersebut?",
      options: ["250 kg/m³", "500 kg/m³", "750 kg/m³", "1000 kg/m³"],
      answer: "750 kg/m³"
    },
    {
      question: "3. Sebuah pipa aliran memiliki luas penampang 0,01 m² dan kecepatan aliran fluida 4 m/s. Berapa debit aliran fluida tersebut?",
      options: ["0,02 m³/s", "0,04 m³/s", "0,06 m³/s", "0,08 m³/s"],
      answer: "0,04 m³/s"
    },
    {
      question: "4. Sebuah bejana berisi air memiliki tekanan di dasar sebesar 5000 Pa. Jika massa jenis air adalah 1000 kg/m³, berapa ketinggian air dalam bejana tersebut?",
      options: ["0,5 m", "1 m", "1,5 m", "2 m"],
      answer: "0,5 m"
    },
    {
      question: "5. Sebuah bola bermassa 0,5 kg dan volume 0,001 m³ dicelupkan ke dalam air. Berapa gaya angkat yang dialami bola tersebut?",
      options: ["5 N", "7 N", "10 N", "12 N"],
      answer: "10 N"
    },
    {
      question: "6. Sebuah pipa Venturi memiliki luas penampang kecil 0,005 m² dan luas penampang besar 0,02 m². Jika kecepatan aliran di penampang besar adalah 2 m/s, berapa kecepatan aliran di penampang kecil?",
      options: ["4 m/s", "6 m/s", "8 m/s", "10 m/s"],
      answer: "8 m/s"
    },
    {
      question: "7. Sebuah benda terapung di air dengan berat 30 N. Jika gaya angkat fluida adalah 30 N, apa yang terjadi pada benda tersebut?",
      options: ["Tenggelam", "Melayang", "Mengapung seluruhnya di atas air", "Mengapung sebagian di atas air"],
      answer: "Mengapung sebagian di atas air"
    },
    {
      question: "8. Sebuah piston dengan luas penampang 0,1 m² diberi gaya sebesar 50 N. Berapa tekanan yang dihasilkan pada fluida?",
      options: ["5 Pa", "50 Pa", "500 Pa", "5000 Pa"],
      answer: "500 Pa"
    },
    {
      question: "9. Sebuah benda tenggelam seluruhnya di dalam fluida dengan massa jenis 800 kg/m³. Jika volume benda adalah 0,002 m³, berapa gaya angkat yang dialami benda tersebut?",
      options: ["12,8 N", "16 N", "24 N", "32 N"],
      answer: "16 N"
    },
    {
      question: "10. Sebuah pipa horizontal membawa fluida dengan kecepatan aliran 3 m/s dan tekanan 2000 Pa. Jika kecepatan meningkat menjadi 6 m/s, bagaimana tekanan berubah menurut persamaan Bernoulli?",
      options: ["Bertambah", "Berkurang", "Tetap", "Tidak dapat ditentukan"],
      answer: "Berkurang"
    },
    {
      question: "11. Sebuah benda terapung dengan 60% volumenya tercelup dalam fluida. Jika massa jenis fluida adalah 1200 kg/m³, berapa massa jenis benda tersebut?",
      options: ["720 kg/m³", "800 kg/m³", "960 kg/m³", "1200 kg/m³"],
      answer: "720 kg/m³"
    },
    {
      question: "12. Sebuah tangki air memiliki lubang kecil di dasar dengan luas penampang 0,001 m². Jika tinggi air di tangki adalah 2 m, berapa kecepatan keluarnya air? (g = 10 m/s²)",
      options: ["4 m/s", "5 m/s", "6 m/s", "8 m/s"],
      answer: "6 m/s"
    },
    {
      question: "13. Sebuah benda bermassa 1 kg dicelupkan seluruhnya ke dalam minyak dengan massa jenis 800 kg/m³. Berapa gaya angkat yang dialami benda tersebut?",
      options: ["6,4 N", "7,8 N", "8 N", "10 N"],
      answer: "7,8 N"
    },
    {
      question: "14. Sebuah pipa memiliki luas penampang 0,01 m² dan fluida mengalir dengan kecepatan 2 m/s. Jika tekanan di pipa adalah 1500 Pa, berapa debit alirannya?",
      options: ["0,02 m³/s", "0,03 m³/s", "0,04 m³/s", "0,05 m³/s"],
      answer: "0,02 m³/s"
    },
    {
      question: "15. Sebuah kapal memiliki volume 200 m³ dan terapung di air laut dengan massa jenis 1025 kg/m³. Berapa berat maksimal yang dapat ditampung kapal?",
      options: ["205.000 N", "2.000.000 N", "2.050.000 N", "2.100.000 N"],
      answer: "2.050.000 N"
    },
    {
      question: "16. Sebuah fluida mengalir melalui pipa dengan tekanan awal 1000 Pa. Jika kecepatan fluida meningkat, apa yang terjadi pada tekanan sesuai dengan prinsip Bernoulli?",
      options: ["Tekanan meningkat", "Tekanan berkurang", "Tekanan tetap", "Tidak ada perubahan"],
      answer: "Tekanan berkurang"
    },
    {
      question: "17. Sebuah benda dengan berat 40 N dicelupkan ke fluida sehingga beratnya menjadi 30 N. Berapa besar gaya angkat fluida?",
      options: ["10 N", "20 N", "30 N", "40 N"],
      answer: "10 N"
    },
    {
      question: "18. Sebuah benda memiliki volume 0,005 m³ dan tercelup seluruhnya dalam air. Jika massa jenis air adalah 1000 kg/m³, berapa gaya angkat fluida yang dialami benda tersebut?",
      options: ["25 N", "50 N", "75 N", "100 N"],
      answer: "50 N"
    },
    {
      question: "19. Sebuah fluida mengalir melalui pipa dengan luas penampang 0,02 m² dan kecepatan 3 m/s. Berapa debit fluida yang mengalir?",
      options: ["0,04 m³/s", "0,06 m³/s", "0,08 m³/s", "0,1 m³/s"],
      answer: "0,06 m³/s"
    },
    {
      question: "20. Sebuah benda terapung di air dengan berat 100 N dan gaya angkat 100 N. Berapa bagian volume benda yang tercelup?",
      options: ["25%", "50%", "75%", "100%"],
      answer: "100%"
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
