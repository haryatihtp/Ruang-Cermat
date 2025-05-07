import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Matematika: Tentukan nilai dari \( \lim_{x \to 0} \frac{\ln(1 + x)}{x} \).",
      options: ["1", "0", "∞", "-1"],
      answer: "1"
    },
    {
      question: "2. Matematika: Tentukan nilai dari \( \int_1^2 \frac{dx}{x^2 + 1} \).",
      options: ["\( \frac{\pi}{4} \)", "\( \frac{\pi}{2} \)", "1", "2"],
      answer: "\( \frac{\pi}{4} \)"
    },
    {
      question: "3. Biologi: Apa yang dimaksud dengan transduksi dalam biologi sel?",
      options: [
        "Proses perubahan sinyal eksternal menjadi sinyal internal dalam sel",
        "Proses pembelahan sel",
        "Proses sintesis protein",
        "Proses transportasi molekul melalui membran sel"
      ],
      answer: "Proses perubahan sinyal eksternal menjadi sinyal internal dalam sel"
    },
    {
      question: "4. Fisika: Sebuah benda bergerak dengan percepatan konstan 2 m/s². Jika kecepatan awalnya 5 m/s, berapa jarak yang ditempuh benda tersebut setelah 4 detik?",
      options: ["30 m", "40 m", "50 m", "60 m"],
      answer: "50 m"
    },
    {
      question: "5. Kimia: Dalam reaksi redoks, jika \( MnO_4^- \) direduksi menjadi \( Mn^{2+} \), berapa perubahan bilangan oksidasi Mn?",
      options: ["-2", "-3", "+5", "+7"],
      answer: "+5"
    },
    {
      question: "6. Bahasa Inggris: Choose the correct sentence: 'Had I known you were coming, I ____ the house.'",
      options: [
        "would have cleaned",
        "will clean",
        "would clean",
        "cleaned"
      ],
      answer: "would have cleaned"
    },
    {
      question: "7. Ekonomi: Dalam pasar oligopoli, apa yang terjadi jika satu perusahaan menurunkan harga?",
      options: [
        "Perusahaan lain cenderung mengikuti penurunan harga",
        "Permintaan akan menurun secara drastis",
        "Harga akan semakin stabil",
        "Konsumen tidak akan tertarik dengan harga yang lebih rendah"
      ],
      answer: "Perusahaan lain cenderung mengikuti penurunan harga"
    },
    {
      question: "8. Matematika: Tentukan nilai dari \( \int_0^\infty e^{-x} \, dx \).",
      options: ["1", "2", "∞", "0"],
      answer: "1"
    },
    {
      question: "9. Biologi: Apa yang dimaksud dengan homeostasis dalam tubuh manusia?",
      options: [
        "Proses menjaga kestabilan lingkungan internal tubuh",
        "Proses pencernaan makanan",
        "Proses pembentukan energi",
        "Proses pengaturan suhu tubuh"
      ],
      answer: "Proses menjaga kestabilan lingkungan internal tubuh"
    },
    {
      question: "10. Fisika: Sebuah benda bergerak melingkar dengan jari-jari 5 m dan kecepatan tangensial 10 m/s. Hitunglah percepatan sentripetal benda tersebut!",
      options: ["20 m/s²", "10 m/s²", "50 m/s²", "25 m/s²"],
      answer: "20 m/s²"
    },
    {
      question: "11. Kimia: Dalam reaksi \( 2SO_2 + O_2 \to 2SO_3 \), jika 3 mol \( O_2 \) digunakan, berapa mol \( SO_3 \) yang terbentuk?",
      options: ["2 mol", "3 mol", "4 mol", "6 mol"],
      answer: "6 mol"
    },
    {
      question: "12. Bahasa Inggris: Choose the correct form: 'If she ____ the truth, she would have told us.'",
      options: [
        "knows",
        "knew",
        "know",
        "known"
      ],
      answer: "knew"
    },
    {
      question: "13. Ekonomi: Jika suatu perusahaan memiliki biaya tetap \( 500 \) dan biaya variabel \( 5Q \), tentukan biaya total (TC) jika jumlah produksi (Q) adalah 10.",
      options: [
        "550",
        "500",
        "600",
        "700"
      ],
      answer: "550"
    },
    {
      question: "14. Matematika: Tentukan limit berikut: \( \lim_{x \to 0} \frac{x - \sin x}{x^3} \).",
      options: ["0", "1", "-1", "∞"],
      answer: "0"
    },
    {
      question: "15. Biologi: Apa yang dimaksud dengan mutasi genetik?",
      options: [
        "Perubahan pada urutan DNA",
        "Perubahan pada struktur sel",
        "Perubahan pada organ tubuh",
        "Perubahan pada ekspresi gen"
      ],
      answer: "Perubahan pada urutan DNA"
    },
    {
      question: "16. Fisika: Sebuah benda berada pada ketinggian 100 m di atas permukaan tanah. Hitunglah energi potensial gravitasi benda tersebut jika massa benda adalah 10 kg!",
      options: ["1000 J", "500 J", "100 J", "200 J"],
      answer: "1000 J"
    },
    {
      question: "17. Kimia: Jika \( K_a \) suatu asam adalah 1 × 10^-5, tentukan pH dari larutan asam tersebut dengan konsentrasi 0,1 M!",
      options: [
        "5",
        "3",
        "4",
        "2"
      ],
      answer: "5"
    },
    {
      question: "18. Bahasa Inggris: Choose the correct sentence: 'He ____ to the office when I called him.'",
      options: [
        "was going",
        "is going",
        "had gone",
        "going"
      ],
      answer: "was going"
    },
    {
      question: "19. Ekonomi: Apakah yang dimaksud dengan elastisitas harga permintaan (Ed)?",
      options: [
        "Perubahan dalam jumlah barang yang diminta terhadap perubahan harga",
        "Perubahan harga barang yang diminta terhadap jumlah barang",
        "Perubahan dalam biaya produksi terhadap jumlah barang yang diminta",
        "Perubahan dalam harga barang terhadap biaya produksi"
      ],
      answer: "Perubahan dalam jumlah barang yang diminta terhadap perubahan harga"
    },
    {
      question: "20. Matematika: Tentukan nilai dari \( \int_0^\infty x^2 e^{-x} \, dx \).",
      options: ["2", "1", "3", "∞"],
      answer: "2"
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