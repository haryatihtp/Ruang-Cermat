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
      question: "1. Tentukan nilai dari \( \lim_{x \to 0} \frac{\sin(x)}{x} \).",
      options: ["0", "1", "-1", "\\infty"],
      answer: "1"
    },
    {
      question: "2. Tentukan hasil dari \( \sum_{i=1}^{5} 2i \).",
      options: ["30", "35", "40", "45"],
      answer: "30"
    },
    // Biologi
    {
      question: "3. Pada fotosintesis, apa yang terjadi pada molekul air (H2O)?",
      options: [
        "Air dibagi menjadi karbon dioksida dan oksigen.",
        "Air digunakan untuk menghasilkan glukosa.",
        "Air dibagi menjadi oksigen dan ion hidrogen.",
        "Air mengalir melalui akar menuju daun."
      ],
      answer: "Air dibagi menjadi oksigen dan ion hidrogen."
    },
    {
      question: "4. Apa peran ribosom dalam sel?",
      options: [
        "Sintesis protein.",
        "Sintesis energi.",
        "Penyimpanan informasi genetik.",
        "Transpor molekul."
      ],
      answer: "Sintesis protein."
    },
    // Fisika
    {
      question: "5. Sebuah benda bermassa 10 kg bergerak dengan kecepatan 5 m/s. Hitunglah energi kinetiknya.",
      options: ["50 J", "250 J", "500 J", "25 J"],
      answer: "250 J"
    },
    {
      question: "6. Sebuah bola dilemparkan vertikal ke atas dengan kecepatan awal 20 m/s. Hitunglah waktu yang diperlukan bola untuk mencapai ketinggian maksimum. (g = 10 m/s^2)",
      options: ["2 detik", "1 detik", "4 detik", "5 detik"],
      answer: "2 detik"
    },
    // Kimia
    {
      question: "7. Dalam reaksi pembakaran metana, produk yang dihasilkan adalah:",
      options: [
        "CO2 dan H2O",
        "CO dan H2O",
        "CO2 dan O2",
        "CH4 dan O2"
      ],
      answer: "CO2 dan H2O"
    },
    {
      question: "8. Berapakah molaritas larutan yang mengandung 58,5 gram NaCl dalam 500 mL air? (Massa molar NaCl = 58,5 g/mol)",
      options: ["1 M", "2 M", "0.5 M", "0.1 M"],
      answer: "1 M"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'She ____ in the library when I saw her.'",
      options: ["was studying", "studied", "is studying", "studies"],
      answer: "was studying"
    },
    {
      question: "10. Choose the correct passive voice: 'They built a new school last year.'",
      options: [
        "A new school was built by them last year.",
        "A new school is built by them last year.",
        "A new school built by them last year.",
        "A new school was built by them."
      ],
      answer: "A new school was built by them last year."
    },
    // Ekonomi
    {
      question: "11. Jika suatu barang mengalami kenaikan harga sebesar 10% dan elastisitas harga permintaannya adalah -1, berapa persen penurunan jumlah barang yang diminta?",
      options: ["10%", "5%", "1%", "20%"],
      answer: "10%"
    },
    {
      question: "12. Apa yang dimaksud dengan ekonomi mikro?",
      options: [
        "Studi tentang perekonomian secara keseluruhan.",
        "Studi tentang perilaku individu dan perusahaan dalam pengambilan keputusan ekonomi.",
        "Studi tentang hubungan antara negara dan ekonomi global.",
        "Studi tentang pergerakan mata uang internasional."
      ],
      answer: "Studi tentang perilaku individu dan perusahaan dalam pengambilan keputusan ekonomi."
    },
    // Matematika
    {
      question: "13. Hitung nilai dari \( \int_1^3 (2x^2 - 4x + 1) \, dx \).",
      options: ["10", "12", "8", "6"],
      answer: "8"
    },
    {
      question: "14. Tentukan hasil dari \( \sqrt{144} \times 3 + 15 \div 5 \).",
      options: ["42", "50", "48", "45"],
      answer: "48"
    },
    // Biologi
    {
      question: "15. Organisme yang dapat melakukan fotosintesis adalah:",
      options: [
        "Tumbuhan",
        "Manusia",
        "Hewan",
        "Bakteri"
      ],
      answer: "Tumbuhan"
    },
    {
      question: "16. Apa yang dimaksud dengan perbedaan antara mitosis dan meiosis?",
      options: [
        "Mitosis menghasilkan dua sel anak yang identik, sedangkan meiosis menghasilkan empat sel anak dengan setengah jumlah kromosom.",
        "Mitosis terjadi di sel somatik, sedangkan meiosis terjadi di sel kelamin.",
        "Mitosis menghasilkan satu sel anak, sedangkan meiosis menghasilkan dua sel anak.",
        "Mitosis terjadi dalam jaringan tumbuhan, sedangkan meiosis dalam jaringan hewan."
      ],
      answer: "Mitosis menghasilkan dua sel anak yang identik, sedangkan meiosis menghasilkan empat sel anak dengan setengah jumlah kromosom."
    },
    // Fisika
    {
      question: "17. Sebuah benda memiliki momentum sebesar 10 kg·m/s. Jika massa benda tersebut 2 kg, berapa kecepatan benda tersebut?",
      options: ["5 m/s", "2 m/s", "10 m/s", "3 m/s"],
      answer: "5 m/s"
    },
    {
      question: "18. Suhu suatu benda adalah 25°C. Berapa suhu benda tersebut dalam Kelvin?",
      options: ["273 K", "298 K", "310 K", "320 K"],
      answer: "298 K"
    },
    // Kimia
    {
      question: "19. Dalam reaksi asam-basa, ion H+ akan bereaksi dengan ion OH- untuk membentuk:",
      options: [
        "H2O",
        "CO2",
        "NaCl",
        "HCl"
      ],
      answer: "H2O"
    },
    {
      question: "20. Berapa volume gas oksigen yang diperlukan untuk membakar 1 mol metana (CH4) secara sempurna?",
      options: ["1 L", "2 L", "5 L", "4 L"],
      answer: "2 L"
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