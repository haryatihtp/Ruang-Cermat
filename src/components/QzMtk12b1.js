import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Sebuah data berisi nilai ujian 10 siswa: 50, 60, 70, 80, 90, 100, 110, 120, 130, 140. Hitung standar deviasi dari data tersebut!",
      options: ["25", "28.72", "30", "32.15"],
      answer: "28.72"
    },
    {
      question: "2. Jika rata-rata dari 12 bilangan adalah 50, dan salah satu bilangan dihapus sehingga rata-rata menjadi 48, berapa nilai bilangan yang dihapus?",
      options: ["72", "56", "58", "62"],
      answer: "72"
    },
    {
      question: "3. Hitung variansi dari data berikut: 5, 7, 10, 15, 20!",
      options: ["22", "30", "35", "40"],
      answer: "30"
    },
    {
      question: "4. Dari sebuah data dengan Q1 = 20 dan Q3 = 80, jika ada nilai outlier di atas, berapa batas atas outliernya?",
      options: ["130", "100", "120", "140"],
      answer: "130"
    },
    {
      question: "5. Sebuah kelas memiliki rata-rata tinggi badan 160 cm dengan standar deviasi 8 cm. Jika 95% data mengikuti distribusi normal, hitung rentang tinggi badan 95% siswa!",
      options: ["144-176 cm", "150-170 cm", "152-168 cm", "145-175 cm"],
      answer: "144-176 cm"
    },
    {
      question: "6. Sebuah perusahaan mencatat rata-rata penjualan harian 200 unit dengan standar deviasi 10 unit. Berapa probabilitas penjualan lebih dari 220 unit (dengan asumsi distribusi normal)?",
      options: ["0.023", "0.021", "0.019", "0.018"],
      answer: "0.023"
    },
    {
      question: "7. Diberikan 5 angka: 3, 7, 9, 15, dan 21. Hitung median dan range dari data tersebut!",
      options: ["Median: 9, Range: 18", "Median: 9, Range: 15", "Median: 10, Range: 18", "Median: 10, Range: 15"],
      answer: "Median: 9, Range: 18"
    },
    {
      question: "8. Sebuah distribusi data memiliki rata-rata 70 dan standar deviasi 5. Hitung nilai z-score untuk data bernilai 80.",
      options: ["1.5", "1.8", "2", "2.2"],
      answer: "2"
    },
    {
      question: "9. Dari data berikut: 15, 20, 25, 30, 35. Hitung nilai rata-rata harmonik!",
      options: ["22.56", "24.16", "25.15", "26.14"],
      answer: "24.16"
    },
    {
      question: "10. Hitung kuartil ketiga (Q3) dari data: 10, 15, 20, 25, 30, 35, 40, 45, 50!",
      options: ["35", "37.5", "40", "42.5"],
      answer: "40"
    },
    {
      question: "11. Sebuah data memiliki nilai rata-rata 60 dan standar deviasi 8. Hitung nilai rata-rata kuadrat (mean square) dari data tersebut!",
      options: ["3680", "3700", "3720", "3750"],
      answer: "3680"
    },
    {
      question: "12. Dari data: 8, 10, 12, 14, 16, 18. Hitung rata-rata geometrik!",
      options: ["13", "13.8", "14", "14.5"],
      answer: "13.8"
    },
    {
      question: "13. Diberikan data frekuensi: 2 (4x), 4 (3x), 6 (2x), 8 (1x). Hitung rata-rata tertimbang dari data tersebut!",
      options: ["4.5", "5", "5.2", "5.5"],
      answer: "5"
    },
    {
      question: "14. Dari data berikut: 3, 5, 7, 10, 15. Hitung simpangan rata-rata (mean deviation) terhadap rata-rata hitung!",
      options: ["2.4", "3.2", "3.8", "4"],
      answer: "3.2"
    },
    {
      question: "15. Jika rata-rata ujian adalah 75 dan standar deviasi adalah 10, berapa persentase siswa yang mendapatkan nilai di bawah 65 (asumsi distribusi normal)?",
      options: ["16%", "18%", "14%", "12%"],
      answer: "16%"
    },
    {
      question: "16. Data nilai siswa: 50, 60, 70, 80, 90, 100. Jika semua nilai dinaikkan 10%, berapakah rata-rata baru dari data tersebut?",
      options: ["77", "88", "87", "78"],
      answer: "88"
    },
    {
      question: "17. Diberikan data 7 angka: 5, 10, 15, 20, 25, 30, 35. Hitung simpangan baku (standar deviasi) data tersebut!",
      options: ["10.8", "11", "12", "13"],
      answer: "11"
    },
    {
      question: "18. Suatu distribusi normal memiliki rata-rata 100 dan standar deviasi 15. Berapa probabilitas data berada antara 85 dan 115?",
      options: ["0.682", "0.700", "0.710", "0.750"],
      answer: "0.682"
    },
    {
      question: "19. Dari data berikut: 2, 4, 6, 8, 10. Hitung momen kedua (second moment) terhadap rata-rata!",
      options: ["6", "8", "10", "12"],
      answer: "8"
    },
    {
      question: "20. Sebuah survei mencatat data pendapatan bulanan (dalam juta): 2, 2.5, 3, 3.5, 4, 4.5, 5. Hitung koefisien variasi (CV) dari data tersebut!",
      options: ["12%", "15%", "18%", "20%"],
      answer:"15%"
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
      <h1>Kuis Matematika Kelas XII</h1>
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
