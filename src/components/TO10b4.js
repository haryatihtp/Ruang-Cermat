import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();


  const questions = [
    // Matematika
    {
      question: "1. Tentukan nilai dari \( 5x + 3 = 2x + 18 \).",
      options: ["x = 5", "x = 3", "x = 4", "x = 6"],
      answer: "x = 5"
    },
    {
      question: "2. Jika \( a = 3 \) dan \( b = 4 \), berapakah panjang sisi miring segitiga dengan panjang sisi siku-siku \( a \) dan \( b \)?",
      options: ["5", "6", "7", "8"],
      answer: "5"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan fotosintesis?",
      options: [
        "Proses pembentukan sel pada tumbuhan",
        "Proses pembentukan energi pada tumbuhan menggunakan cahaya matahari",
        "Proses penguraian makanan dalam tubuh",
        "Proses pernapasan pada tumbuhan"
      ],
      answer: "Proses pembentukan energi pada tumbuhan menggunakan cahaya matahari"
    },
    {
      question: "4. Bagian sel yang berfungsi sebagai pusat pengatur kegiatan sel adalah?",
      options: ["Mitokondria", "Nukleus", "Ribosom", "Membran sel"],
      answer: "Nukleus"
    },
    // Fisika
    {
      question: "5. Sebuah benda bergerak dengan percepatan 2 m/s² selama 5 detik. Berapa kecepatan benda setelah 5 detik?",
      options: ["10 m/s", "8 m/s", "6 m/s", "12 m/s"],
      answer: "10 m/s"
    },
    {
      question: "6. Sebuah benda jatuh bebas dari ketinggian 20 m. Berapa waktu yang dibutuhkan untuk mencapai tanah? (dengan percepatan gravitasi 10 m/s²)",
      options: ["2 s", "3 s", "4 s", "5 s"],
      answer: "2 s"
    },
    // Kimia
    {
      question: "7. Reaksi antara asam dan basa akan menghasilkan?",
      options: ["Garam", "Air", "Gas", "Semua benar"],
      answer: "Semua benar"
    },
    {
      question: "8. Proses pemisahan campuran dengan cara menyaring disebut?",
      options: ["Distilasi", "Filtrasi", "Kristalisasi", "Evaporasi"],
      answer: "Filtrasi"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct answer: She ____ to the market every Saturday.",
      options: ["goes", "went", "going", "gone"],
      answer: "goes"
    },
    {
      question: "10. Choose the correct sentence: ",
      options: [
        "She enjoy studying English.",
        "She enjoys studying English.",
        "She enjoying studying English.",
        "She is enjoying study English."
      ],
      answer: "She enjoys studying English."
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan ekonomi mikro?",
      options: [
        "Studi tentang perekonomian secara keseluruhan",
        "Studi tentang perekonomian pada tingkat rumah tangga dan perusahaan",
        "Studi tentang kebijakan moneter negara",
        "Studi tentang distribusi pendapatan negara"
      ],
      answer: "Studi tentang perekonomian pada tingkat rumah tangga dan perusahaan"
    },
    {
      question: "12. Salah satu faktor produksi yang diperlukan dalam proses produksi adalah?",
      options: ["Modal", "Bahan baku", "Tenaga kerja", "Semua benar"],
      answer: "Semua benar"
    },
    // Matematika
    {
      question: "13. Jika \( x^2 - 4x + 3 = 0 \), tentukan nilai \( x \).",
      options: ["1, 3", "1, -3", "3, -1", "-1, 3"],
      answer: "1, 3"
    },
    {
      question: "14. Tentukan integral dari \( \int (2x + 3) dx \).",
      options: ["\( x^2 + 3x + C \)", "\( x^2 + 3x \)", "\( 2x^2 + 3x + C \)", "\( 2x^2 + 3x \)"],
      answer: "\( x^2 + 3x + C \)"
    },
    // Biologi
    {
      question: "15. Proses pembentukan gamet pada manusia disebut?",
      options: ["Mitosis", "Meiosis", "Fagositosis", "Difusi"],
      answer: "Meiosis"
    },
    {
      question: "16. Organ tubuh manusia yang berfungsi untuk menyaring darah adalah?",
      options: ["Hati", "Ginjal", "Lambung", "Paru-paru"],
      answer: "Ginjal"
    },
    // Fisika
    {
      question: "17. Sebuah benda memiliki massa 10 kg dan kecepatan 4 m/s. Berapakah energi kinetiknya?",
      options: ["80 J", "40 J", "160 J", "20 J"],
      answer: "80 J"
    },
    {
      question: "18. Kecepatan gelombang cahaya di udara adalah?",
      options: ["300.000 km/s", "150.000 km/s", "150.000 m/s", "300.000 m/s"],
      answer: "300.000 km/s"
    },
    // Kimia
    {
      question: "19. Apa yang dimaksud dengan reaksi endothermik?",
      options: [
        "Reaksi yang melepaskan energi",
        "Reaksi yang menyerap energi",
        "Reaksi yang menghasilkan gas",
        "Reaksi yang membentuk senyawa baru"
      ],
      answer: "Reaksi yang menyerap energi"
    },
    {
      question: "20. Reaksi antara asam dan logam akan menghasilkan?",
      options: ["Gas hidrogen", "Garam", "Oksigen", "Air"],
      answer: "Gas hidrogen"
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