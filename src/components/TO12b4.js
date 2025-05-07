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
      question: "1. Tentukan limit \( \lim_{x \to 0} \frac{\sin(5x)}{x} \).",
      options: ["5", "1", "0", "∞"],
      answer: "5"
    },
    {
      question: "2. Diketahui \( f(x) = 4x^3 - 3x^2 + 2x - 1 \). Tentukan nilai turunan kedua dari fungsi tersebut pada x = 2.",
      options: ["50", "56", "60", "55"],
      answer: "56"
    },
    // Biologi
    {
      question: "3. Pada proses respirasi seluler, reaksi glikolisis terjadi di:",
      options: [
        "Mitokondria",
        "Sitosol",
        "Retikulum endoplasma",
        "Nukleus"
      ],
      answer: "Sitosol"
    },
    {
      question: "4. Apa fungsi dari mitokondria dalam sel eukariotik?",
      options: [
        "Sintesis protein",
        "Produksi energi dalam bentuk ATP",
        "Penyimpanan informasi genetik",
        "Sintesis asam nukleat"
      ],
      answer: "Produksi energi dalam bentuk ATP"
    },
    // Fisika
    {
      question: "5. Sebuah benda bermassa 5 kg bergerak dengan kecepatan 10 m/s. Hitunglah energi kinetiknya.",
      options: ["50 J", "250 J", "500 J", "25 J"],
      answer: "250 J"
    },
    {
      question: "6. Sebuah bola dilemparkan dengan kecepatan 15 m/s pada sudut 30° terhadap horizontal. Hitunglah jangkauan maksimum bola tersebut. (g = 10 m/s²)",
      options: ["22.5 m", "30 m", "20 m", "45 m"],
      answer: "22.5 m"
    },
    // Kimia
    {
      question: "7. Dalam reaksi pembakaran sempurna metana, jumlah mol oksigen yang diperlukan untuk membakar 1 mol metana adalah:",
      options: ["2 mol", "1 mol", "4 mol", "3 mol"],
      answer: "2 mol"
    },
    {
      question: "8. Jika volume gas bertambah dua kali lipat, pada suhu dan tekanan yang tetap, berapa kali jumlah molekul gas tersebut?",
      options: ["2 kali", "4 kali", "1/2 kali", "Tidak berubah"],
      answer: "2 kali"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'If he ____ harder, he would have passed the exam.'",
      options: ["studied", "study", "had studied", "studies"],
      answer: "had studied"
    },
    {
      question: "10. Which sentence is correct? 'Neither of the students ____ absent today.'",
      options: [
        "is",
        "are",
        "were",
        "be"
      ],
      answer: "is"
    },
    // Ekonomi
    {
      question: "11. Jika elastisitas harga permintaan suatu barang lebih besar dari 1, maka barang tersebut bersifat:",
      options: [
        "Elastis",
        "Inelastis",
        "Unitary",
        "Tidak elastis"
      ],
      answer: "Elastis"
    },
    {
      question: "12. Apa yang dimaksud dengan 'law of demand'?",
      options: [
        "Semakin tinggi harga, semakin sedikit jumlah barang yang diminta.",
        "Semakin rendah harga, semakin sedikit jumlah barang yang diminta.",
        "Harga tidak memengaruhi jumlah barang yang diminta.",
        "Permintaan akan barang tidak terpengaruh oleh pendapatan."
      ],
      answer: "Semakin tinggi harga, semakin sedikit jumlah barang yang diminta."
    },
    // Matematika
    {
      question: "13. Tentukan integral dari \( \int_1^4 (x^2 - 3x + 2) \, dx \).",
      options: ["5", "7", "10", "12"],
      answer: "5"
    },
    {
      question: "14. Tentukan hasil dari limit berikut: \( \lim_{x \to 0} \frac{e^x - 1}{x} \).",
      options: ["0", "1", "∞", "e"],
      answer: "1"
    },
    // Biologi
    {
      question: "15. Sel yang memiliki dinding sel, klorofil, dan plastida adalah:",
      options: [
        "Sel hewan",
        "Sel tumbuhan",
        "Sel bakteri",
        "Sel jamur"
      ],
      answer: "Sel tumbuhan"
    },
    {
      question: "16. Apa yang dimaksud dengan homeostasis dalam tubuh manusia?",
      options: [
        "Proses mengatur suhu tubuh agar tetap stabil.",
        "Proses pencernaan makanan dalam tubuh.",
        "Proses pengangkutan oksigen ke seluruh tubuh.",
        "Proses pemecahan glukosa untuk menghasilkan energi."
      ],
      answer: "Proses mengatur suhu tubuh agar tetap stabil."
    },
    // Fisika
    {
      question: "17. Sebuah benda dengan massa 10 kg bergerak pada kecepatan 20 m/s. Hitunglah momentum benda tersebut.",
      options: ["100 kg·m/s", "200 kg·m/s", "400 kg·m/s", "50 kg·m/s"],
      answer: "200 kg·m/s"
    },
    {
      question: "18. Sebuah mobil bergerak dengan kecepatan 72 km/jam. Hitunglah kecepatan mobil dalam satuan m/s.",
      options: ["18 m/s", "20 m/s", "15 m/s", "25 m/s"],
      answer: "20 m/s"
    },
    // Kimia
    {
      question: "19. Gas ideal memenuhi persamaan:",
      options: [
        "PV = nRT",
        "PV = nVRT",
        "PV = RT",
        "P = nRT"
      ],
      answer: "PV = nRT"
    },
    {
      question: "20. Ketika 1 mol gas ideal mengalami pemuaian isotermik, berapakah perubahan energi dalam sistem?",
      options: [
        "0 J",
        "Positif",
        "Negatif",
        "Tidak dapat ditentukan"
      ],
      answer: "0 J"
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