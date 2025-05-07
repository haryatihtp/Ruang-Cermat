import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    {
      question: "1. Matematika: Hitunglah limit berikut: \( \lim_{x \to 0} \frac{\sin x}{x} \).",
      options: ["1", "0", "∞", "-1"],
      answer: "1"
    },
    {
      question: "2. Biologi: Apa yang dimaksud dengan sistem imun tubuh manusia?",
      options: [
        "Sistem yang melindungi tubuh dari infeksi",
        "Sistem yang mengatur metabolisme tubuh",
        "Sistem yang bertanggung jawab atas pertumbuhan",
        "Sistem yang mengatur peredaran darah"
      ],
      answer: "Sistem yang melindungi tubuh dari infeksi"
    },
    {
      question: "3. Fisika: Sebuah benda bergerak dengan kecepatan tetap 15 m/s. Jika massa benda tersebut adalah 2 kg, berapakah energi kinetiknya?",
      options: ["450 J", "300 J", "225 J", "150 J"],
      answer: "225 J"
    },
    {
      question: "4. Kimia: Apa yang terjadi pada air ketika suhu mencapai titik didihnya?",
      options: [
        "Air akan berubah menjadi gas",
        "Air akan berubah menjadi padat",
        "Air akan tetap dalam bentuk cair",
        "Air akan mengalami perubahan warna"
      ],
      answer: "Air akan berubah menjadi gas"
    },
    {
      question: "5. Bahasa Inggris: Choose the correct sentence: 'They ____ dinner at 7 p.m. yesterday.'",
      options: [
        "ate",
        "eat",
        "eats",
        "eating"
      ],
      answer: "ate"
    },
    {
      question: "6. Ekonomi: Apa yang dimaksud dengan ekonomi mikro?",
      options: [
        "Studi tentang perilaku individu dan perusahaan dalam perekonomian",
        "Studi tentang perekonomian secara keseluruhan",
        "Studi tentang pasar global",
        "Studi tentang pengelolaan sumber daya alam"
      ],
      answer: "Studi tentang perilaku individu dan perusahaan dalam perekonomian"
    },
    {
      question: "7. Matematika: Tentukan integral dari \( \int (4x^3 - 2x + 7) \, dx \).",
      options: [
        "x^4 - x^2 + 7x + C",
        "x^4 - x^2 + 7x + D",
        "x^4 - 2x + 7 + C",
        "x^4 - 2x^2 + 7x + C"
      ],
      answer: "x^4 - 2x^2 + 7x + C"
    },
    {
      question: "8. Biologi: Apa fungsi dari sel darah putih dalam tubuh manusia?",
      options: [
        "Melawan infeksi dan penyakit",
        "Mengangkut oksigen",
        "Menghantarkan impuls saraf",
        "Menyalurkan nutrisi ke sel tubuh"
      ],
      answer: "Melawan infeksi dan penyakit"
    },
    {
      question: "9. Fisika: Sebuah benda yang massanya 4 kg bergerak dengan kecepatan 3 m/s. Berapakah momentumnya?",
      options: ["12 kg.m/s", "10 kg.m/s", "7 kg.m/s", "15 kg.m/s"],
      answer: "12 kg.m/s"
    },
    {
      question: "10. Kimia: Apa yang dimaksud dengan pH dalam kimia?",
      options: [
        "Ukuran keasaman atau kebasaan suatu larutan",
        "Ukuran berat molekul suatu zat",
        "Ukuran suhu suatu larutan",
        "Ukuran volume larutan"
      ],
      answer: "Ukuran keasaman atau kebasaan suatu larutan"
    },
    {
      question: "11. Bahasa Inggris: Choose the correct word: 'I ____ my homework every day.'",
      options: [
        "do",
        "does",
        "doing",
        "did"
      ],
      answer: "do"
    },
    {
      question: "12. Ekonomi: Apa yang dimaksud dengan surplus dalam ekonomi?",
      options: [
        "Keadaan dimana penawaran lebih besar daripada permintaan",
        "Keadaan dimana permintaan lebih besar daripada penawaran",
        "Keadaan dimana harga barang terlalu rendah",
        "Keadaan dimana barang tidak laku di pasaran"
      ],
      answer: "Keadaan dimana penawaran lebih besar daripada permintaan"
    },
    {
      question: "13. Matematika: Tentukan turunan dari fungsi \( f(x) = 3x^2 - 4x + 1 \).",
      options: [
        "6x - 4",
        "6x - 3",
        "3x - 4",
        "2x - 1"
      ],
      answer: "6x - 4"
    },
    {
      question: "14. Biologi: Apa yang dimaksud dengan mitosis?",
      options: [
        "Proses pembelahan sel untuk menghasilkan dua sel anak yang identik",
        "Proses pembelahan sel untuk menghasilkan sel gamet",
        "Proses pencernaan makanan",
        "Proses respirasi sel"
      ],
      answer: "Proses pembelahan sel untuk menghasilkan dua sel anak yang identik"
    },
    {
      question: "15. Fisika: Sebuah benda yang massanya 3 kg bergerak dengan kecepatan 4 m/s. Hitunglah energi kinetiknya.",
      options: ["24 J", "30 J", "48 J", "36 J"],
      answer: "24 J"
    },
    {
      question: "16. Kimia: Apa yang dimaksud dengan reaksi endoterm?",
      options: [
        "Reaksi yang menyerap energi dari lingkungan",
        "Reaksi yang menghasilkan energi",
        "Reaksi yang menghasilkan gas",
        "Reaksi yang tidak melibatkan perubahan energi"
      ],
      answer: "Reaksi yang menyerap energi dari lingkungan"
    },
    {
      question: "17. Bahasa Inggris: Choose the correct sentence: 'She ____ the letter yesterday.'",
      options: [
        "wrote",
        "writes",
        "writing",
        "write"
      ],
      answer: "wrote"
    },
    {
      question: "18. Ekonomi: Apa yang dimaksud dengan pasar persaingan sempurna?",
      options: [
        "Pasar dengan banyak penjual dan pembeli serta produk yang homogen",
        "Pasar dengan satu penjual yang mendominasi",
        "Pasar dengan beberapa penjual yang memiliki kekuatan pasar",
        "Pasar yang sangat terbatas dengan sedikit penjual"
      ],
      answer: "Pasar dengan banyak penjual dan pembeli serta produk yang homogen"
    },
    {
      question: "19. Matematika: Hitunglah \( \int_0^1 (x^2 + 2x + 1) \, dx \).",
      options: [
        "2",
        "1",
        "3",
        "4"
      ],
      answer: "2"
    },
    {
      question: "20. Biologi: Pada proses respirasi sel, apa yang dihasilkan setelah glukosa terurai?",
      options: [
        "Energi dalam bentuk ATP",
        "Karbon dioksida",
        "Oksigen",
        "Laktat"
      ],
      answer: "Energi dalam bentuk ATP"
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