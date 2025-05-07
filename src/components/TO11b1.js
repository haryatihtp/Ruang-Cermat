import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    {
      question: "1. Matematika: Tentukan hasil dari \( \int_0^1 (2x^3 - 3x^2 + 1) \, dx \).",
      options: ["1", "2", "3", "0"],
      answer: "1"
    },
    {
      question: "2. Biologi: Apa yang dimaksud dengan mitosis?",
      options: [
        "Proses pembelahan sel yang menghasilkan 2 sel anak dengan jumlah kromosom yang sama",
        "Proses pembelahan sel yang menghasilkan 4 sel anak",
        "Proses penggabungan dua sel",
        "Proses perubahan bentuk sel"
      ],
      answer: "Proses pembelahan sel yang menghasilkan 2 sel anak dengan jumlah kromosom yang sama"
    },
    {
      question: "3. Fisika: Sebuah benda bermassa 2 kg bergerak dengan kecepatan 5 m/s. Berapakah energi kinetiknya?",
      options: ["25 Joule", "50 Joule", "10 Joule", "5 Joule"],
      answer: "25 Joule"
    },
    {
      question: "4. Kimia: Senyawa yang memiliki ikatan ion adalah:",
      options: [
        "NaCl",
        "H2O",
        "CO2",
        "NH3"
      ],
      answer: "NaCl"
    },
    {
      question: "5. Bahasa Inggris: What is the correct past tense of the verb 'go'?",
      options: ["Going", "Goes", "Went", "Gone"],
      answer: "Went"
    },
    {
      question: "6. Ekonomi: Apa yang dimaksud dengan elastisitas permintaan?",
      options: [
        "Perubahan harga yang menyebabkan perubahan dalam jumlah barang yang diminta",
        "Perubahan harga barang karena adanya permintaan",
        "Hubungan antara penawaran dan permintaan",
        "Harga barang yang dipengaruhi oleh pengeluaran pemerintah"
      ],
      answer: "Perubahan harga yang menyebabkan perubahan dalam jumlah barang yang diminta"
    },
    {
      question: "7. Matematika: Hitunglah limit \( \lim_{x \\to 0} \\frac{\\sin(x)}{x} \\).",
      options: ["0", "1", "\\infty", "-1"],
      answer: "1"
    },
    {
      question: "8. Biologi: Apa yang dimaksud dengan fotosintesis?",
      options: [
        "Proses pembuatan makanan oleh tumbuhan menggunakan sinar matahari",
        "Proses penguraian makanan oleh sel",
        "Proses pengendalian kadar air dalam tubuh",
        "Proses pembelahan sel"
      ],
      answer: "Proses pembuatan makanan oleh tumbuhan menggunakan sinar matahari"
    },
    {
      question: "9. Fisika: Hukum Newton yang menyatakan bahwa benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya disebut hukum?",
      options: ["Hukum I Newton", "Hukum II Newton", "Hukum III Newton", "Hukum Gravitasi"],
      answer: "Hukum I Newton"
    },
    {
      question: "10. Kimia: Apa yang terjadi pada reaksi reduksi?",
      options: [
        "Penambahan oksigen",
        "Pengurangan oksigen",
        "Penambahan hidrogen",
        "Pengurangan hidrogen"
      ],
      answer: "Penambahan hidrogen"
    },
    {
      question: "11. Bahasa Inggris: Choose the correct sentence: 'She _____ to the store yesterday.'",
      options: [
        "go",
        "gone",
        "went",
        "going"
      ],
      answer: "went"
    },
    {
      question: "12. Ekonomi: Dalam teori ekonomi, faktor produksi yang tidak dapat diperbaharui disebut?",
      options: ["Tanah", "Tenaga kerja", "Modal", "Wirausaha"],
      answer: "Tanah"
    },
    {
      question: "13. Matematika: Tentukan nilai dari \( \\sum_{i=1}^{5} 2i \).",
      options: ["15", "10", "20", "25"],
      answer: "30"
    },
    {
      question: "14. Biologi: Apa yang dimaksud dengan adaptasi?",
      options: [
        "Perubahan bentuk tubuh untuk bertahan hidup",
        "Proses pembuatan makanan",
        "Pengeluaran energi oleh sel",
        "Proses penyerapan air oleh akar"
      ],
      answer: "Perubahan bentuk tubuh untuk bertahan hidup"
    },
    {
      question: "15. Fisika: Sebuah benda memiliki massa 10 kg dan kecepatan 2 m/s. Berapakah momentumnya?",
      options: ["20 kg.m/s", "10 kg.m/s", "5 kg.m/s", "15 kg.m/s"],
      answer: "20 kg.m/s"
    },
    {
      question: "16. Kimia: Apa jenis ikatan yang terjadi antara dua atom yang memiliki perbedaan elektronegativitas tinggi?",
      options: [
        "Ikatan kovalen polar",
        "Ikatan kovalen nonpolar",
        "Ikatan ion",
        "Ikatan logam"
      ],
      answer: "Ikatan ion"
    },
    {
      question: "17. Bahasa Inggris: What is the opposite of 'difficult'?",
      options: ["Easy", "Hard", "Tough", "Complicated"],
      answer: "Easy"
    },
    {
      question: "18. Ekonomi: Apakah yang dimaksud dengan inflasi?",
      options: [
        "Peningkatan harga barang dan jasa secara umum",
        "Penurunan harga barang dan jasa",
        "Pertumbuhan ekonomi yang pesat",
        "Peningkatan pendapatan nasional"
      ],
      answer: "Peningkatan harga barang dan jasa secara umum"
    },
    {
      question: "19. Matematika: Tentukan akar-akar persamaan kuadrat \( x^2 - 5x + 6 = 0 \).",
      options: ["1 dan 6", "2 dan 3", "3 dan 2", "4 dan 5"],
      answer: "2 dan 3"
    },
    {
      question: "20. Biologi: Apa yang dimaksud dengan homeostasis?",
      options: [
        "Pengaturan suhu tubuh",
        "Proses fotosintesis",
        "Perubahan bentuk tubuh",
        "Proses pencernaan"
      ],
      answer: "Pengaturan suhu tubuh"
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