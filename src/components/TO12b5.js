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
      question: "1. Tentukan hasil dari \( \lim_{x \to 0} \frac{1 - \cos(2x)}{x^2} \).",
      options: ["0", "2", "1", "-1"],
      answer: "2"
    },
    {
      question: "2. Diketahui fungsi \( f(x) = x^2 - 4x + 3 \). Tentukan nilai titik balik (extrema) dari fungsi tersebut.",
      options: ["x = 1", "x = -1", "x = 2", "x = 0"],
      answer: "x = 2"
    },
    // Biologi
    {
      question: "3. Organisme yang memerlukan oksigen untuk bertahan hidup disebut:",
      options: [
        "Anaerob",
        "Aerob",
        "Fakultatif anaerob",
        "Mikroaerofil"
      ],
      answer: "Aerob"
    },
    {
      question: "4. Apa yang dimaksud dengan proses translasi dalam sintesis protein?",
      options: [
        "Pembacaan mRNA untuk membentuk rantai polipeptida",
        "Penyalinan informasi genetik dari DNA ke RNA",
        "Proses penyusunan mRNA",
        "Pembentukan struktur RNA"
      ],
      answer: "Pembacaan mRNA untuk membentuk rantai polipeptida"
    },
    // Fisika
    {
      question: "5. Sebuah mobil bergerak dengan percepatan tetap 2 m/s². Berapa waktu yang diperlukan untuk mencapai kecepatan 20 m/s dari keadaan diam?",
      options: ["10 detik", "5 detik", "2 detik", "20 detik"],
      answer: "10 detik"
    },
    {
      question: "6. Sebuah benda dengan massa 10 kg bergerak dengan kecepatan 5 m/s. Berapa usaha yang dilakukan untuk mempercepat benda tersebut hingga 20 m/s?",
      options: ["150 J", "250 J", "300 J", "500 J"],
      answer: "375 J"
    },
    // Kimia
    {
      question: "7. Pada suhu 300 K, sebuah gas ideal memiliki volume 2 liter. Jika suhu meningkat menjadi 600 K, berapa volume gas tersebut pada suhu baru? (Asumsikan tekanan tetap)",
      options: ["4 liter", "6 liter", "3 liter", "1 liter"],
      answer: "4 liter"
    },
    {
      question: "8. Berapa jumlah mol CO2 yang dihasilkan dari pembakaran 10 gram metana (CH4)? (Massa molar CH4 = 16 g/mol, CO2 = 44 g/mol)",
      options: ["0.25 mol", "0.5 mol", "0.75 mol", "1 mol"],
      answer: "0.5 mol"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'By the time I arrive, they ____ already left.'",
      options: ["have", "had", "will have", "were"],
      answer: "will have"
    },
    {
      question: "10. Choose the correct form of the verb: 'She ____ to the market every Saturday.'",
      options: [
        "goes",
        "went",
        "going",
        "gone"
      ],
      answer: "goes"
    },
    // Ekonomi
    {
      question: "11. Jika sebuah perusahaan mengalami kenaikan biaya produksi, dan elastisitas penawaran adalah 0.5, maka penawaran barang akan:",
      options: [
        "Berubah banyak",
        "Tidak berubah",
        "Meningkat",
        "Menurun sedikit"
      ],
      answer: "Menurun sedikit"
    },
    {
      question: "12. Apa yang dimaksud dengan surplus konsumen?",
      options: [
        "Selisih antara harga yang bersedia dibayar konsumen dengan harga yang sebenarnya dibayar.",
        "Selisih antara harga jual barang dengan harga beli barang.",
        "Selisih antara biaya produksi dan pendapatan perusahaan.",
        "Selisih antara harga barang dan harga pasar."
      ],
      answer: "Selisih antara harga yang bersedia dibayar konsumen dengan harga yang sebenarnya dibayar."
    },
    // Matematika
    {
      question: "13. Tentukan hasil dari integral \( \int_0^2 (3x^2 - 4x + 1) \, dx \).",
      options: ["2", "3", "5", "6"],
      answer: "2"
    },
    {
      question: "14. Tentukan nilai dari \( \lim_{x \to 0} \frac{e^{2x} - 1}{x} \).",
      options: ["0", "2", "1", "∞"],
      answer: "2"
    },
    // Biologi
    {
      question: "15. Bagaimana cara tumbuhan memperoleh energi untuk proses fotosintesis?",
      options: [
        "Dari sinar matahari",
        "Dari akar",
        "Dari oksigen",
        "Dari air"
      ],
      answer: "Dari sinar matahari"
    },
    {
      question: "16. Organisme yang dapat mengubah energi kimia menjadi energi mekanik adalah:",
      options: [
        "Hewan",
        "Tumbuhan",
        "Bakteri",
        "Virus"
      ],
      answer: "Hewan"
    },
    // Fisika
    {
      question: "17. Sebuah benda dengan massa 5 kg bergerak dengan kecepatan 3 m/s. Hitunglah momentum benda tersebut.",
      options: ["15 kg·m/s", "12 kg·m/s", "18 kg·m/s", "8 kg·m/s"],
      answer: "15 kg·m/s"
    },
    {
      question: "18. Hitunglah gaya yang diperlukan untuk memberikan percepatan 2 m/s² pada benda bermassa 10 kg.",
      options: ["10 N", "20 N", "30 N", "5 N"],
      answer: "20 N"
    },
    // Kimia
    {
      question: "19. Dalam reaksi hidrolisis, molekul air berperan sebagai:",
      options: [
        "Penyumbang proton",
        "Penyumbang elektron",
        "Reaktan utama",
        "Produk sampingan"
      ],
      answer: "Penyumbang proton"
    },
    {
      question: "20. Ketika suhu gas meningkat, volume gas juga akan meningkat. Pernyataan ini sesuai dengan hukum:",
      options: [
        "Hukum Boyle",
        "Hukum Charles",
        "Hukum Avogadro",
        "Hukum Dalton"
      ],
      answer: "Hukum Charles"
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