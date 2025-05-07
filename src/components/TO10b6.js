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
      question: "1. Tentukan solusi dari persamaan \( 3x + 4 = 19 \).",
      options: ["x = 5", "x = 3", "x = 7", "x = 6"],
      answer: "x = 5"
    },
    {
      question: "2. Tentukan nilai dari \( (2a + 3b)^2 \) jika \( a = 2 \) dan \( b = 1 \).",
      options: ["25", "28", "30", "35"],
      answer: "25"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan sistem ekskresi pada manusia?",
      options: ["Proses pembuatan makanan", "Proses pengeluaran sisa metabolisme", "Proses pernapasan", "Proses penyerapan makanan"],
      answer: "Proses pengeluaran sisa metabolisme"
    },
    {
      question: "4. Selama fotosintesis, tumbuhan menggunakan energi dari?",
      options: ["Oksigen", "Cahaya matahari", "Karbon dioksida", "Air"],
      answer: "Cahaya matahari"
    },
    // Fisika
    {
      question: "5. Sebuah benda bermassa 5 kg bergerak dengan kecepatan 3 m/s. Berapakah momentum benda tersebut?",
      options: ["15 kg m/s", "5 kg m/s", "10 kg m/s", "20 kg m/s"],
      answer: "15 kg m/s"
    },
    {
      question: "6. Jika sebuah benda bergerak dengan kecepatan 5 m/s dalam waktu 2 detik, berapakah jarak yang ditempuh?",
      options: ["7 m", "8 m", "10 m", "12 m"],
      answer: "10 m"
    },
    // Kimia
    {
      question: "7. Rumus kimia dari asam sulfur adalah?",
      options: ["HCl", "H₂SO₄", "NaCl", "NaOH"],
      answer: "H₂SO₄"
    },
    {
      question: "8. Proses pengendapan zat padat dari larutan disebut?",
      options: ["Evaporasi", "Kristalisasi", "Distilasi", "Filtrasi"],
      answer: "Kristalisasi"
    },
    // Bahasa Inggris
    {
      question: "9. Fill in the blank: \"They ____ to the movie theater every weekend.\"",
      options: ["go", "goes", "went", "gone"],
      answer: "go"
    },
    {
      question: "10. Choose the correct sentence: ",
      options: [
        "She is more smarter than her sister.",
        "She is smarter than her sister.",
        "She smarter than her sister.",
        "She is most smarter than her sister."
      ],
      answer: "She is smarter than her sister."
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan pasar dalam ilmu ekonomi?",
      options: ["Tempat barang dan jasa diproduksi", "Tempat barang dan jasa dijual dan dibeli", "Tempat tenaga kerja diproduksi", "Tempat produksi barang terjadi"],
      answer: "Tempat barang dan jasa dijual dan dibeli"
    },
    {
      question: "12. Apa yang dimaksud dengan inflasi?",
      options: [
        "Kenaikan harga barang secara umum dalam waktu tertentu",
        "Penurunan harga barang secara umum",
        "Peningkatan produksi barang",
        "Penurunan jumlah uang yang beredar"
      ],
      answer: "Kenaikan harga barang secara umum dalam waktu tertentu"
    },
    // Matematika
    {
      question: "13. Jika \( x^2 - 4 = 0 \), maka nilai \( x \) adalah?",
      options: ["x = 2", "x = -2", "x = ±2", "x = 4"],
      answer: "x = ±2"
    },
    {
      question: "14. Berapakah luas segitiga yang memiliki alas 10 cm dan tinggi 6 cm?",
      options: ["30 cm²", "60 cm²", "20 cm²", "15 cm²"],
      answer: "30 cm²"
    },
    // Biologi
    {
      question: "15. Apa yang dimaksud dengan adaptasi pada makhluk hidup?",
      options: [
        "Perubahan struktur tubuh untuk bertahan hidup",
        "Proses pembentukan sel baru",
        "Perubahan warna tubuh pada hewan",
        "Perubahan pola makan hewan"
      ],
      answer: "Perubahan struktur tubuh untuk bertahan hidup"
    },
    {
      question: "16. Di bawah ini yang merupakan bagian dari sistem pencernaan manusia adalah?",
      options: ["Hati", "Paru-paru", "Ginjal", "Jantung"],
      answer: "Hati"
    },
    // Fisika
    {
      question: "17. Sebuah benda mengalami percepatan 2 m/s² selama 5 detik. Berapakah kecepatan benda setelah 5 detik?",
      options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
      answer: "10 m/s"
    },
    {
      question: "18. Gaya gravitasi pada permukaan bumi memiliki besar?",
      options: ["10 m/s²", "9,8 m/s²", "9 m/s²", "10 m/s"],
      answer: "9,8 m/s²"
    },
    // Kimia
    {
      question: "19. Apa yang terjadi jika asam ditambahkan ke dalam air?",
      options: ["pH akan meningkat", "pH akan menurun", "pH akan tetap", "Tidak ada perubahan pada pH"],
      answer: "pH akan menurun"
    },
    {
      question: "20. Zat yang digunakan untuk mengukur konsentrasi asam atau basa dalam larutan adalah?",
      options: ["Indikator", "Katalisator", "Solvent", "Reagen"],
      answer: "Indikator"
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