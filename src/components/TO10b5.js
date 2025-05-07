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
      question: "1. Tentukan nilai dari \( 4x - 5 = 3x + 7 \).",
      options: ["x = 2", "x = -2", "x = 12", "x = 1"],
      answer: "x = 12"
    },
    {
      question: "2. Tentukan hasil dari \( (a + 5)(a - 3) \).",
      options: ["\( a^2 + 2a - 15 \)", "\( a^2 + 2a + 15 \)", "\( a^2 - 2a - 15 \)", "\( a^2 - 2a + 15 \)"],
      answer: "\( a^2 + 2a - 15 \)"
    },
    // Biologi
    {
      question: "3. Pada sistem pencernaan manusia, proses penguraian makanan menjadi zat yang lebih sederhana terjadi di?",
      options: ["Mulut", "Lambung", "Usus halus", "Rektum"],
      answer: "Usus halus"
    },
    {
      question: "4. Sel yang berfungsi untuk membawa oksigen ke seluruh tubuh adalah?",
      options: ["Sel darah putih", "Sel darah merah", "Plasma darah", "Trombosit"],
      answer: "Sel darah merah"
    },
    // Fisika
    {
      question: "5. Sebuah benda yang massanya 10 kg bergerak dengan kecepatan 4 m/s. Berapa energi kinetiknya?",
      options: ["80 J", "40 J", "20 J", "160 J"],
      answer: "80 J"
    },
    {
      question: "6. Jika sebuah benda dengan massa 8 kg diberi gaya sebesar 24 N, berapa percepatan benda tersebut?",
      options: ["3 m/s²", "2 m/s²", "1 m/s²", "4 m/s²"],
      answer: "3 m/s²"
    },
    // Kimia
    {
      question: "7. Senyawa NaCl adalah contoh dari senyawa?",
      options: ["Asam", "Basa", "Garam", "Air"],
      answer: "Garam"
    },
    {
      question: "8. Proses perubahan gas menjadi cair disebut?",
      options: ["Peleburan", "Penyubliman", "Kondensasi", "Penguapan"],
      answer: "Kondensasi"
    },
    // Bahasa Inggris
    {
      question: "9. Fill in the blank: \"They ____ in the library every afternoon.\"",
      options: ["studies", "study", "studied", "studying"],
      answer: "study"
    },
    {
      question: "10. Choose the correct form: \"She ____ to school every day.\"",
      options: ["go", "going", "goes", "gone"],
      answer: "goes"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan elastisitas permintaan?",
      options: [
        "Perubahan jumlah barang yang diminta akibat perubahan harga",
        "Perubahan harga akibat perubahan permintaan",
        "Jumlah barang yang tersedia di pasar",
        "Jumlah barang yang diproduksi oleh produsen"
      ],
      answer: "Perubahan jumlah barang yang diminta akibat perubahan harga"
    },
    {
      question: "12. Dalam hukum permintaan, jika harga barang naik, maka permintaan barang akan?",
      options: ["Naik", "Turun", "Tetap", "Tidak dapat diprediksi"],
      answer: "Turun"
    },
    // Matematika
    {
      question: "13. Tentukan hasil dari \( 2x^2 - 3x + 5 \) ketika \( x = 3 \).",
      options: ["14", "10", "18", "12"],
      answer: "14"
    },
    {
      question: "14. Tentukan determinan dari matriks \( \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \).",
      options: ["-2", "0", "2", "4"],
      answer: "-2"
    },
    // Biologi
    {
      question: "15. Apa yang dimaksud dengan homeostasis?",
      options: [
        "Proses reproduksi pada makhluk hidup",
        "Kemampuan tubuh untuk menjaga keseimbangan internal",
        "Proses penguraian makanan dalam tubuh",
        "Perubahan bentuk pada makhluk hidup"
      ],
      answer: "Kemampuan tubuh untuk menjaga keseimbangan internal"
    },
    {
      question: "16. Struktur DNA yang berfungsi untuk menyandi informasi genetik adalah?",
      options: ["Nukleotida", "Asam amino", "Karbohidrat", "Protein"],
      answer: "Nukleotida"
    },
    // Fisika
    {
      question: "17. Gaya gravitasi pada permukaan bumi menarik benda dengan besar?",
      options: ["10 N", "9,8 m/s²", "100 m/s²", "9 m/s²"],
      answer: "9,8 m/s²"
    },
    {
      question: "18. Sebuah benda bergerak dengan kecepatan konstan 12 m/s. Berapakah jarak yang ditempuh dalam 6 detik?",
      options: ["72 m", "60 m", "48 m", "36 m"],
      answer: "72 m"
    },
    // Kimia
    {
      question: "19. Rumus molekul air adalah?",
      options: ["H₂O", "O₂H", "H₂O₂", "HO₂"],
      answer: "H₂O"
    },
    {
      question: "20. Gas yang tidak berwarna, tidak berbau, dan diperlukan oleh makhluk hidup untuk bernapas adalah?",
      options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Metana"],
      answer: "Oksigen"
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