import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    {
      question: "1. Matematika: Tentukan nilai limit \( \lim_{x \to 0} \frac{e^x - 1}{x} \).",
      options: ["1", "0", "∞", "-1"],
      answer: "1"
    },
    {
      question: "2. Matematika: Tentukan turunan kedua dari fungsi \( f(x) = \sin(x^2) \).",
      options: ["\( 2x \cos(x^2) \)", "\( 2x \cos(x^2) - 2\sin(x^2) \)", "\( 2 \cos(x^2) \)", "\( 2x \sin(x^2) \)"],
      answer: "\( 2x \cos(x^2) \)"
    },
    {
      question: "3. Biologi: Pada proses fotosintesis, apa yang dihasilkan oleh reaksi terang?",
      options: [
        "Oksigen dan ATP",
        "Glukosa",
        "NADPH dan oksigen",
        "Oksigen dan glukosa"
      ],
      answer: "Oksigen dan ATP"
    },
    {
      question: "4. Fisika: Sebuah benda bergerak dengan kecepatan konstan 20 m/s. Tentukan jarak yang ditempuh benda tersebut dalam 10 detik.",
      options: ["100 m", "200 m", "300 m", "400 m"],
      answer: "200 m"
    },
    {
      question: "5. Kimia: Dalam reaksi \( 2N_2O_5 \to 4NO_2 + O_2 \), berapa mol \( NO_2 \) yang terbentuk jika 3 mol \( N_2O_5 \) digunakan?",
      options: ["3 mol", "4 mol", "6 mol", "9 mol"],
      answer: "6 mol"
    },
    {
      question: "6. Bahasa Inggris: Choose the correct sentence: 'By the time you arrive, I ____ my homework.'",
      options: [
        "will finish",
        "have finished",
        "will have finished",
        "had finished"
      ],
      answer: "will have finished"
    },
    {
      question: "7. Ekonomi: Apakah yang dimaksud dengan biaya marginal dalam ekonomi?",
      options: [
        "Biaya tambahan untuk memproduksi satu unit barang tambahan",
        "Biaya tetap untuk memproduksi barang",
        "Biaya yang dikeluarkan pada unit pertama",
        "Biaya total yang dibutuhkan untuk produksi"
      ],
      answer: "Biaya tambahan untuk memproduksi satu unit barang tambahan"
    },
    {
      question: "8. Matematika: Tentukan integral dari \( \int_0^1 (x^2 - 3x + 2) \, dx \).",
      options: ["-0.5", "0", "1", "2"],
      answer: "0"
    },
    {
      question: "9. Biologi: Apa yang dimaksud dengan perbedaan antara mutasi genetik dan mutasi kromosom?",
      options: [
        "Mutasi genetik terjadi pada urutan DNA, sedangkan mutasi kromosom terjadi pada struktur kromosom",
        "Mutasi genetik terjadi pada kromosom, sedangkan mutasi kromosom terjadi pada gen",
        "Mutasi genetik hanya terjadi pada organisme prokariotik, sedangkan mutasi kromosom pada eukariotik",
        "Mutasi genetik bersifat stabil, sedangkan mutasi kromosom tidak stabil"
      ],
      answer: "Mutasi genetik terjadi pada urutan DNA, sedangkan mutasi kromosom terjadi pada struktur kromosom"
    },
    {
      question: "10. Fisika: Sebuah benda bermassa 5 kg dilemparkan vertikal ke atas dengan kecepatan 15 m/s. Hitunglah ketinggian maksimum yang dicapai benda tersebut!",
      options: ["11.25 m", "12.5 m", "13.25 m", "15 m"],
      answer: "11.25 m"
    },
    {
      question: "11. Kimia: Jika 0,1 mol asam klorida (HCl) dilarutkan dalam 1 liter air, tentukan pH larutan tersebut!",
      options: ["1", "2", "3", "4"],
      answer: "1"
    },
    {
      question: "12. Bahasa Inggris: Choose the correct form: 'I ____ the movie last weekend.'",
      options: [
        "watched",
        "will watch",
        "am watching",
        "watch"
      ],
      answer: "watched"
    },
    {
      question: "13. Ekonomi: Jika harga suatu barang meningkat dan jumlah barang yang diminta menurun, maka barang tersebut bersifat ____.",
      options: [
        "Elastis",
        "Inelastis",
        "Mudah digantikan",
        "Tidak elastis"
      ],
      answer: "Elastis"
    },
    {
      question: "14. Matematika: Tentukan turunan pertama dari fungsi \( f(x) = \cos(x^3) \).",
      options: ["\( -3x^2 \sin(x^3) \)", "\( -x^3 \sin(x^3) \)", "\( -3x \cos(x^3) \)", "\( -x^2 \cos(x^3) \)"],
      answer: "\( -3x^2 \sin(x^3) \)"
    },
    {
      question: "15. Biologi: Apa yang dimaksud dengan teori evolusi oleh seleksi alam?",
      options: [
        "Proses dimana individu dengan karakteristik yang lebih baik untuk bertahan hidup akan memiliki peluang lebih besar untuk berkembang biak",
        "Proses dimana spesies baru terbentuk akibat isolasi geografis",
        "Proses pemisahan spesies menjadi beberapa kelompok berdasarkan makanan",
        "Proses seleksi genetik dalam laboratorium"
      ],
      answer: "Proses dimana individu dengan karakteristik yang lebih baik untuk bertahan hidup akan memiliki peluang lebih besar untuk berkembang biak"
    },
    {
      question: "16. Fisika: Sebuah benda bermassa 3 kg bergerak dengan kecepatan 5 m/s. Tentukan energi kinetik benda tersebut!",
      options: ["15 J", "25 J", "35 J", "45 J"],
      answer: "25 J"
    },
    {
      question: "17. Kimia: Dalam reaksi pembakaran etanol \( C_2H_5OH + 3O_2 \to 2CO_2 + 3H_2O \), berapa mol \( CO_2 \) yang dihasilkan jika 4 mol etanol digunakan?",
      options: ["2 mol", "4 mol", "6 mol", "8 mol"],
      answer: "8 mol"
    },
    {
      question: "18. Bahasa Inggris: Choose the correct sentence: 'She ____ in the park when I saw her.'",
      options: [
        "was walking",
        "walked",
        "is walking",
        "has walked"
      ],
      answer: "was walking"
    },
    {
      question: "19. Ekonomi: Jika suatu barang memiliki elastisitas harga permintaan sebesar -0.5, maka barang tersebut termasuk dalam kategori ____.",
      options: [
        "Inelastis",
        "Elastis",
        "Uniter elastis",
        "Tidak elastis"
      ],
      answer: "Inelastis"
    },
    {
      question: "20. Matematika: Tentukan limit dari \( \lim_{x \to \infty} \frac{3x^2 - 4x + 1}{5x^2 + 2x + 1} \).",
      options: ["3/5", "4/5", "1", "∞"],
      answer: "3/5"
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