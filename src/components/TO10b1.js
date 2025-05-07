import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    // Matematika
    {
      question: "1. Tentukan solusi dari persamaan linear 3x + 5 = 20.",
      options: ["x = 5", "x = 10", "x = 15", "x = 3"],
      answer: "x = 5"
    },
    {
      question: "2. Hitunglah nilai dari frac{5}{3} times frac{3}{4}.",
      options: ["frac{15}{12} ", "frac{5}{12}", "frac{15}{7}", "frac{5}{7}"],
      answer: "frac{5}{12}"
    },
    // Biologi
    {
      question: "3. Proses pembentukan gamet dalam tubuh manusia disebut?",
      options: [
        "Mitogenesis",
        "Meiosis",
        "Fagositosis",
        "Mitosis"
      ],
      answer: "Meiosis"
    },
    {
      question: "4. Bagian sel yang berfungsi untuk menghasilkan energi dalam bentuk ATP adalah?",
      options: [
        "Mitokondria",
        "Nukleus",
        "Retikulum endoplasma",
        "Lisosom"
      ],
      answer: "Mitokondria"
    },
    // Fisika
    {
      question: "5. Sebuah benda bergerak dengan kecepatan 10 m/s selama 5 detik. Berapa jarak yang ditempuh oleh benda tersebut?",
      options: ["50 m", "25 m", "100 m", "75 m"],
      answer: "50 m"
    },
    {
      question: "6. Sebuah benda massanya 2 kg, bergerak dengan kecepatan 4 m/s. Berapa energi kinetiknya?",
      options: ["16 J", "32 J", "8 J", "4 J"],
      answer: "16 J"
    },
    // Kimia
    {
      question: "7. Senyawa dengan rumus kimia H_2O adalah?",
      options: ["Asam sulfat", "Air", "Asam klorida", "Amonia"],
      answer: "Air"
    },
    {
      question: "8. Proses yang menghasilkan ion positif dan negatif dalam larutan disebut?",
      options: [
        "Ionisasi",
        "Reaksi pengendapan",
        "Reaksi redoks",
        "Sublimasi"
      ],
      answer: "Ionisasi"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'She ____ to the store yesterday.'",
      options: ["go", "goes", "went", "going"],
      answer: "went"
    },
    {
      question: "10. Fill in the blank: 'I ____ studying for my exam when you called me.'",
      options: ["was", "were", "am", "will be"],
      answer: "was"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan deflasi dalam ekonomi?",
      options: [
        "Penurunan harga barang secara umum",
        "Kenaikan harga barang secara umum",
        "Penurunan jumlah uang yang beredar",
        "Peningkatan jumlah barang yang diproduksi"
      ],
      answer: "Penurunan harga barang secara umum"
    },
    {
      question: "12. Apakah yang dimaksud dengan pendapatan nasional?",
      options: [
        "Jumlah uang yang diterima oleh pemerintah",
        "Jumlah uang yang dibelanjakan oleh masyarakat",
        "Jumlah total barang dan jasa yang diproduksi oleh suatu negara",
        "Jumlah uang yang dimiliki oleh suatu keluarga"
      ],
      answer: "Jumlah total barang dan jasa yang diproduksi oleh suatu negara"
    },
    // Matematika
    {
      question: "13. Tentukan hasil dari (x^2 - 4) / (x - 2) untuk x = 3.",
      options: ["1", "2", "3", "4"],
      answer: "1"
    },
    {
      question: "14. Tentukan hasil dari frac{2}{3} + frac{3}{4}.",
      options: ["frac{17}{12}", "frac{5}{7}", "frac{11}{12}", "frac{9}{7}"],
      answer: "frac{17}{12}"
    },
    // Biologi
    {
      question: "15. Fungsi dari sistem peredaran darah pada manusia adalah?",
      options: [
        "Mengangkut oksigen ke seluruh tubuh",
        "Menghasilkan energi",
        "Menghasilkan hormon",
        "Menjaga suhu tubuh"
      ],
      answer: "Mengangkut oksigen ke seluruh tubuh"
    },
    {
      question: "16. Apa fungsi klorofil pada tumbuhan?",
      options: [
        "Menyerap cahaya untuk fotosintesis",
        "Menghasilkan energi",
        "Menyerap air",
        "Membentuk glukosa"
      ],
      answer: "Menyerap cahaya untuk fotosintesis"
    },
    // Fisika
    {
      question: "17. Hukum Newton yang menyatakan bahwa benda yang diam atau bergerak akan tetap diam atau bergerak dengan kecepatan tetap kecuali ada gaya eksternal yang bekerja disebut hukum?",
      options: ["Hukum I", "Hukum II", "Hukum III", "Hukum gravitasi"],
      answer: "Hukum I"
    },
    {
      question: "18. Kecepatan gelombang bunyi di udara pada suhu 20°C adalah?",
      options: ["300 m/s", "340 m/s", "360 m/s", "400 m/s"],
      answer: "340 m/s"
    },
    // Kimia
    {
      question: "19. Reaksi kimia antara asam dan basa menghasilkan?",
      options: ["Garam dan air", "Gas dan air", "Oksigen dan hidrogen", "Asam dan basa"],
      answer: "Garam dan air"
    },
    {
      question: "20. Reaksi kimia yang menghasilkan energi disebut?",
      options: ["Reaksi eksotermik", "Reaksi endotermik", "Reaksi redoks", "Reaksi pengendapan"],
      answer: "Reaksi eksotermik"
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

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Tryout Bahasa Inggris Kelas X</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          />
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;