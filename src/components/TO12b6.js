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
      question: "1. Tentukan nilai dari \( \lim_{x \to 0} \frac{\sin(3x)}{x} \).",
      options: ["3", "1", "0", "∞"],
      answer: "3"
    },
    {
      question: "2. Tentukan hasil dari integral \( \int_0^2 (x^3 - 2x^2 + 3x - 4) \, dx \).",
      options: ["-4", "6", "8", "10"],
      answer: "6"
    },
    {
      question: "3. Diketahui fungsi \( f(x) = 2x^3 - 5x^2 + 4x - 1 \), tentukan turunan pertama dari fungsi tersebut.",
      options: ["6x^2 - 10x + 4", "6x^2 - 5x + 4", "6x^2 - 10x + 1", "6x^2 - 5x - 4"],
      answer: "6x^2 - 10x + 4"
    },
    {
      question: "4. Tentukan integral tak tentu dari \( \int (4x^3 - 3x^2 + 2x - 1) \, dx \).",
      options: ["x^4 - x^3 + x^2 - x + C", "x^4 - x^3 + x^2 + x + C", "x^4 - 2x^3 + x^2 - x + C", "x^4 - 2x^3 + 2x^2 - x + C"],
      answer: "x^4 - x^3 + x^2 - x + C"
    },
    {
      question: "5. Tentukan limit dari \( \lim_{x \to 2} \frac{x^2 - 4}{x - 2} \).",
      options: ["4", "2", "8", "0"],
      answer: "4"
    },
    // Biologi
    {
      question: "6. Proses fermentasi menghasilkan produk utama berupa:",
      options: ["Alkohol dan asam laktat", "Oksigen dan glukosa", "Oksigen dan ATP", "Asam amino dan protein"],
      answer: "Alkohol dan asam laktat"
    },
    {
      question: "7. DNA mengandung basa nitrogen berupa adenin (A), timin (T), sitosin (C), dan guanin (G). Pada replikasi, basa adenin (A) akan berpasangan dengan:",
      options: ["Timin (T)", "Sitosin (C)", "Guanin (G)", "Adenin (A)"],
      answer: "Timin (T)"
    },
    {
      question: "8. Bagaimana cara kerja enzim dalam tubuh manusia?",
      options: [
        "Enzim mempercepat reaksi kimia dengan menurunkan energi aktivasi",
        "Enzim menghambat reaksi kimia dengan meningkatkan energi aktivasi",
        "Enzim hanya berfungsi pada suhu tinggi",
        "Enzim merubah sifat fisik makanan"
      ],
      answer: "Enzim mempercepat reaksi kimia dengan menurunkan energi aktivasi"
    },
    {
      question: "9. Apa yang dimaksud dengan mutasi gen?",
      options: [
        "Perubahan dalam urutan basa DNA",
        "Penyusunan kembali kromosom",
        "Pergeseran posisi gen dalam kromosom",
        "Perubahan jumlah kromosom"
      ],
      answer: "Perubahan dalam urutan basa DNA"
    },
    {
      question: "10. Hormon yang berfungsi mengatur metabolisme tubuh adalah:",
      options: ["Insulin", "Adrenalin", "Tiroksin", "Testosteron"],
      answer: "Tiroksin"
    },
    // Fisika
    {
      question: "11. Sebuah benda yang massanya 5 kg bergerak dengan kecepatan 10 m/s. Hitunglah momentum benda tersebut.",
      options: ["50 kg·m/s", "500 kg·m/s", "5 kg·m/s", "10 kg·m/s"],
      answer: "50 kg·m/s"
    },
    {
      question: "12. Sebuah benda bergerak dengan kecepatan 20 m/s selama 4 detik. Hitunglah jarak yang ditempuh benda tersebut.",
      options: ["60 m", "80 m", "100 m", "120 m"],
      answer: "80 m"
    },
    {
      question: "13. Sebuah mobil bergerak dengan kecepatan konstan 60 km/jam. Berapa lama waktu yang dibutuhkan untuk menempuh jarak 120 km?",
      options: ["1 jam", "2 jam", "3 jam", "4 jam"],
      answer: "2 jam"
    },
    {
      question: "14. Hitunglah energi kinetik sebuah benda yang memiliki massa 3 kg dan bergerak dengan kecepatan 4 m/s.",
      options: ["12 J", "24 J", "36 J", "48 J"],
      answer: "24 J"
    },
    {
      question: "15. Jika sebuah bola dilemparkan ke atas dengan kecepatan 15 m/s, berapa waktu yang diperlukan bola untuk mencapai titik tertinggi?",
      options: ["1 detik", "1,5 detik", "2 detik", "3 detik"],
      answer: "1,5 detik"
    },
    // Kimia
    {
      question: "16. Reaksi antara asam klorida (HCl) dan natrium hidroksida (NaOH) menghasilkan produk utama berupa:",
      options: [
        "NaCl dan air",
        "H2 dan NaOH",
        "HCl dan H2O",
        "NaCl dan H2"
      ],
      answer: "NaCl dan air"
    },
    {
      question: "17. Berapa banyak mol H⁺ yang terkandung dalam 1 liter larutan dengan pH 3?",
      options: ["1 x 10^-3 M", "1 x 10^-2 M", "1 x 10^-4 M", "1 x 10^-5 M"],
      answer: "1 x 10^-3 M"
    },
    {
      question: "18. Berapa volume gas yang dihasilkan pada reaksi penguraian 1 mol NaHCO3 (s) pada suhu dan tekanan standar?",
      options: ["22,4 L", "44,8 L", "11,2 L", "5,6 L"],
      answer: "22,4 L"
    },
    {
      question: "19. Sebuah larutan asam klorida (HCl) memiliki konsentrasi 0,5 M. Berapa banyak mol HCl dalam 2 liter larutan tersebut?",
      options: ["0,5 mol", "1 mol", "2 mol", "4 mol"],
      answer: "1 mol"
    },
    {
      question: "20. Reaksi antara magnesium (Mg) dan asam klorida (HCl) menghasilkan gas hidrogen (H2). Jika 0,5 mol Mg digunakan, berapa banyak mol gas hidrogen yang dihasilkan?",
      options: ["0,5 mol", "1 mol", "2 mol", "3 mol"],
      answer: "1 mol"
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