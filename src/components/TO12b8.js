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
      question: "1. Tentukan solusi dari persamaan diferensial \( \frac{dy}{dx} = 3x^2 - 4x + 2 \).",
      options: ["x^3 - 2x^2 + 2x + C", "x^3 - 2x^2 + x + C", "x^3 - x^2 + x + C", "x^3 - 2x^2 - x + C"],
      answer: "x^3 - 2x^2 + 2x + C"
    },
    {
      question: "2. Tentukan nilai dari \( \lim_{x \to 0} \frac{\tan(x)}{x} \).",
      options: ["1", "0", "∞", "2"],
      answer: "1"
    },
    {
      question: "3. Diketahui fungsi \( f(x) = e^{2x} + \sin(x) \), tentukan turunan pertama dari fungsi tersebut.",
      options: ["2e^(2x) + cos(x)", "2e^(2x) - cos(x)", "e^(2x) + cos(x)", "e^(2x) - cos(x)"],
      answer: "2e^(2x) + cos(x)"
    },
    {
      question: "4. Tentukan nilai integral \( \int_0^1 (5x^4 - 3x^3 + x - 2) \, dx \).",
      options: ["-1", "0", "1", "2"],
      answer: "0"
    },
    {
      question: "5. Tentukan limit dari \( \lim_{x \to 2} \frac{3x^2 - 12}{x - 2} \).",
      options: ["6", "12", "3", "2"],
      answer: "6"
    },
    // Biologi
    {
      question: "6. Apa yang terjadi pada fase G1 dalam siklus sel?",
      options: ["Replikasi DNA", "Pembelahan sel", "Pertumbuhan sel dan persiapan untuk replikasi DNA", "Pemisahan kromosom"],
      answer: "Pertumbuhan sel dan persiapan untuk replikasi DNA"
    },
    {
      question: "7. Apa yang dimaksud dengan prokariotik?",
      options: [
        "Organisme yang memiliki membran inti",
        "Organisme yang tidak memiliki membran inti",
        "Organisme yang memiliki banyak organel",
        "Organisme yang dapat berkembang biak dengan cara pembelahan biner"
      ],
      answer: "Organisme yang tidak memiliki membran inti"
    },
    {
      question: "8. Dalam respirasi sel, elektron yang terlepas dari glukosa selama glikolisis diterima oleh molekul apa?",
      options: ["NAD+", "Oksigen", "ADP", "ATP"],
      answer: "NAD+"
    },
    {
      question: "9. Apa yang dimaksud dengan fenomena epigenetik?",
      options: [
        "Perubahan dalam urutan DNA",
        "Perubahan ekspresi gen tanpa perubahan urutan DNA",
        "Perubahan kromosom",
        "Perubahan metabolisme sel"
      ],
      answer: "Perubahan ekspresi gen tanpa perubahan urutan DNA"
    },
    {
      question: "10. Apa fungsi utama dari mitokondria?",
      options: [
        "Menyintesis protein",
        "Menyimpan materi genetik",
        "Menghasilkan energi dalam bentuk ATP",
        "Mengatur pembelahan sel"
      ],
      answer: "Menghasilkan energi dalam bentuk ATP"
    },
    // Fisika
    {
      question: "11. Sebuah benda bergerak dalam garis lurus dengan percepatan konstan 2 m/s². Hitunglah jarak yang ditempuh benda setelah 5 detik jika kecepatan awalnya 0.",
      options: ["25 m", "50 m", "10 m", "20 m"],
      answer: "25 m"
    },
    {
      question: "12. Dua bola jatuh bebas dari ketinggian yang sama. Bola pertama terbuat dari logam, sedangkan bola kedua terbuat dari kayu. Manakah yang akan mencapai tanah terlebih dahulu?",
      options: [
        "Bola logam",
        "Bola kayu",
        "Keduanya sekaligus",
        "Tidak dapat dipastikan"
      ],
      answer: "Keduanya sekaligus"
    },
    {
      question: "13. Tentukan gaya gesek yang bekerja pada benda jika gaya normalnya 10 N dan koefisien gesek kinetiknya 0,3.",
      options: ["3 N", "2 N", "1 N", "5 N"],
      answer: "3 N"
    },
    {
      question: "14. Sebuah benda bermassa 2 kg berada di atas permukaan datar yang licin. Jika gaya yang bekerja pada benda tersebut sebesar 10 N, berapa percepatan benda?",
      options: ["5 m/s²", "10 m/s²", "20 m/s²", "2 m/s²"],
      answer: "5 m/s²"
    },
    {
      question: "15. Sebuah mobil bergerak dengan kecepatan 72 km/jam. Tentukan energi kinetik mobil jika massanya 1000 kg.",
      options: ["200000 J", "100000 J", "50000 J", "25000 J"],
      answer: "200000 J"
    },
    // Kimia
    {
      question: "16. Reaksi antara natrium (Na) dengan air menghasilkan gas hidrogen (H2). Jika 2 mol Na bereaksi dengan air, berapa mol gas hidrogen yang dihasilkan?",
      options: ["2 mol", "1 mol", "4 mol", "3 mol"],
      answer: "2 mol"
    },
    {
      question: "17. Tentukan pH dari larutan yang memiliki konsentrasi ion H+ sebesar 1 x 10^-5 M.",
      options: ["5", "7", "9", "10"],
      answer: "5"
    },
    {
      question: "18. Berapa banyak mol oksigen yang dibutuhkan untuk membakar 4 mol metana (CH4) dalam reaksi pembakaran lengkap?",
      options: ["2 mol", "4 mol", "8 mol", "1 mol"],
      answer: "8 mol"
    },
    {
      question: "19. Jika 50 mL larutan NaOH dengan konsentrasi 0,2 M dicampur dengan 50 mL larutan HCl dengan konsentrasi 0,2 M, tentukan pH hasil pencampuran.",
      options: ["7", "6", "4", "3"],
      answer: "7"
    },
    {
      question: "20. Berapa banyak mol asam klorida (HCl) yang dibutuhkan untuk mereaksikan 2 mol magnesium (Mg) dalam reaksi:",
      options: ["2 mol", "4 mol", "1 mol", "3 mol"],
      answer: "4 mol"
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