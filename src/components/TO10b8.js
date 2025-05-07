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
      question: "1. Tentukan hasil dari \( 7x - 3 = 25 \) ketika \( x = 4 \).",
      options: ["25", "28", "32", "35"],
      answer: "25"
    },
    {
      question: "2. Tentukan nilai dari \( \log_2 32 \).",
      options: ["5", "6", "4", "3"],
      answer: "5"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan proses fotosintesis?",
      options: [
        "Proses pembentukan energi dengan menggunakan cahaya",
        "Proses pembentukan energi dengan menggunakan oksigen",
        "Proses pembentukan energi dengan menggunakan karbon dioksida",
        "Proses penguraian bahan organik oleh mikroorganisme"
      ],
      answer: "Proses pembentukan energi dengan menggunakan cahaya"
    },
    {
      question: "4. Bagian sel yang berfungsi mengatur aktivitas sel adalah?",
      options: [
        "Membran sel",
        "Nukleus",
        "Mitokondria",
        "Ribosom"
      ],
      answer: "Nukleus"
    },
    // Fisika
    {
      question: "5. Jika sebuah benda bergerak dengan kecepatan 12 m/s dan waktu yang ditempuh 6 detik, berapa jarak yang ditempuh?",
      options: ["72 m", "60 m", "108 m", "100 m"],
      answer: "72 m"
    },
    {
      question: "6. Sebuah benda massanya 3 kg bergerak dengan kecepatan 5 m/s. Tentukan energi kinetiknya.",
      options: ["45 J", "75 J", "100 J", "50 J"],
      answer: "45 J"
    },
    // Kimia
    {
      question: "7. Rumus molekul gas ideal adalah?",
      options: [
        "PV = nRT",
        "PV = nR",
        "P = nRT",
        "V = nRT"
      ],
      answer: "PV = nRT"
    },
    {
      question: "8. Proses kimia yang menghasilkan pembentukan ion-ion dari molekul-molekul yang larut dalam air disebut?",
      options: [
        "Disosiasi",
        "Ionisasi",
        "Reaksi redoks",
        "Reaksi asam-basa"
      ],
      answer: "Ionisasi"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct form: 'He ____ a new book at the moment.'",
      options: ["is reading", "read", "reads", "was reading"],
      answer: "is reading"
    },
    {
      question: "10. Fill in the blank: 'We ____ to the beach tomorrow.'",
      options: ["go", "going", "will go", "goes"],
      answer: "will go"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan inflasi?",
      options: [
        "Penurunan harga barang",
        "Kenaikan harga barang secara umum",
        "Kenaikan produksi barang",
        "Penurunan jumlah uang yang beredar"
      ],
      answer: "Kenaikan harga barang secara umum"
    },
    {
      question: "12. Apa yang dimaksud dengan pengangguran friksional?",
      options: [
        "Pengangguran yang disebabkan oleh pergeseran antara permintaan dan penawaran tenaga kerja",
        "Pengangguran yang disebabkan oleh penurunan produksi",
        "Pengangguran yang disebabkan oleh perubahan musim",
        "Pengangguran yang terjadi karena seseorang tidak ingin bekerja"
      ],
      answer: "Pengangguran yang disebabkan oleh pergeseran antara permintaan dan penawaran tenaga kerja"
    },
    // Matematika
    {
      question: "13. Tentukan hasil dari \( (3x^2 - 5x + 2) \) untuk \( x = 2 \).",
      options: ["6", "4", "2", "8"],
      answer: "6"
    },
    {
      question: "14. Tentukan hasil dari \( \sqrt{49} + 6 \).",
      options: ["13", "11", "12", "14"],
      answer: "13"
    },
    // Biologi
    {
      question: "15. Apa yang dimaksud dengan mutasi gen?",
      options: [
        "Perubahan dalam urutan basa DNA",
        "Perubahan dalam jumlah kromosom",
        "Perubahan bentuk tubuh",
        "Perubahan dalam jumlah sel"
      ],
      answer: "Perubahan dalam urutan basa DNA"
    },
    {
      question: "16. Apa fungsi dari vakuola pada sel tumbuhan?",
      options: [
        "Untuk menyimpan air dan zat makanan",
        "Untuk menghasilkan energi",
        "Untuk mengontrol metabolisme sel",
        "Untuk menghasilkan klorofil"
      ],
      answer: "Untuk menyimpan air dan zat makanan"
    },
    // Fisika
    {
      question: "17. Sebuah benda bergerak dengan percepatan 2 m/s². Tentukan kecepatan benda setelah 5 detik jika kecepatan awalnya 0 m/s.",
      options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
      answer: "10 m/s"
    },
    {
      question: "18. Hukum Newton yang menyatakan bahwa untuk setiap aksi terdapat reaksi yang sama besar dan berlawanan arah disebut hukum?",
      options: ["Hukum I", "Hukum II", "Hukum III", "Hukum gravitasi"],
      answer: "Hukum III"
    },
    // Kimia
    {
      question: "19. Rumus untuk menentukan konsentrasi molar larutan adalah?",
      options: [
        "M = n / V",
        "M = V / n",
        "M = pV",
        "M = nT"
      ],
      answer: "M = n / V"
    },
    {
      question: "20. Reaksi yang melibatkan pemindahan elektron disebut?",
      options: [
        "Reaksi asam-basa",
        "Reaksi redoks",
        "Reaksi pengendapan",
        "Reaksi ionisasi"
      ],
      answer: "Reaksi redoks"
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