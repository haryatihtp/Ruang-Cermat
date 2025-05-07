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
      question: "1. Diketahui persamaan garis y = 3x + 4 dan garis y = -2x + 6. Tentukan titik potong kedua garis tersebut.",
      options: ["(1, 7)", "(2, 10)", "(1, 3)", "(2, 4)"],
      answer: "(1, 7)"
    },
    {
      question: "2. Tentukan nilai dari \( \int_1^3 (2x^2 - 3x + 1) \, dx \).",
      options: ["6", "7", "8", "9"],
      answer: "6"
    },
    {
      question: "3. Tentukan nilai dari limit \( \lim_{x \to 1} \frac{x^2 - 1}{x - 1} \).",
      options: ["2", "1", "3", "∞"],
      answer: "2"
    },
    {
      question: "4. Tentukan turunan kedua dari fungsi \( f(x) = 4x^3 - 2x^2 + x - 5 \).",
      options: ["24x - 4", "12x^2 - 4x + 1", "12x^2 - 4x", "12x^2 + 2x - 5"],
      answer: "12x^2 - 4x"
    },
    {
      question: "5. Tentukan integral tak tentu dari \( \int (3x^2 - 4x + 5) \, dx \).",
      options: ["x^3 - 2x^2 + 5x + C", "x^3 - 2x^2 + 5x - C", "x^3 - 4x^2 + 5x + C", "x^3 - 4x^2 + 5x - C"],
      answer: "x^3 - 2x^2 + 5x + C"
    },
    // Biologi
    {
      question: "6. Apa yang terjadi pada tahap anafase dalam mitosis?",
      options: [
        "Kromosom terbelah dan bergerak ke kutub yang berlawanan",
        "Kromosom mengumpul di tengah sel",
        "Sel membelah menjadi dua",
        "Kromosom terpilah menjadi dua bagian"
      ],
      answer: "Kromosom terbelah dan bergerak ke kutub yang berlawanan"
    },
    {
      question: "7. Apa yang dimaksud dengan osmosis?",
      options: [
        "Perpindahan air dari konsentrasi tinggi ke konsentrasi rendah melalui membran semipermeabel",
        "Perpindahan zat terlarut dari konsentrasi tinggi ke rendah",
        "Proses pembentukan ATP dalam mitokondria",
        "Pemisahan bahan organik dalam tanaman"
      ],
      answer: "Perpindahan air dari konsentrasi tinggi ke konsentrasi rendah melalui membran semipermeabel"
    },
    {
      question: "8. Pada proses fotosintesis, gas apa yang dibutuhkan oleh tanaman untuk menghasilkan glukosa?",
      options: ["Karbon dioksida", "Oksigen", "Nitrogen", "Hidrogen"],
      answer: "Karbon dioksida"
    },
    {
      question: "9. Apa yang dimaksud dengan replikasi DNA?",
      options: [
        "Proses pembentukan RNA dari DNA",
        "Proses pembelahan sel menjadi dua",
        "Proses pembentukan dua salinan identik dari DNA",
        "Proses sintesis protein dari RNA"
      ],
      answer: "Proses pembentukan dua salinan identik dari DNA"
    },
    {
      question: "10. Apa fungsi utama dari ribosom?",
      options: [
        "Menentukan sifat genetik",
        "Membantu dalam sintesis protein",
        "Memecah senyawa organik",
        "Menghasilkan energi dalam bentuk ATP"
      ],
      answer: "Membantu dalam sintesis protein"
    },
    // Fisika
    {
      question: "11. Sebuah bola dijatuhkan bebas dari ketinggian 20 m. Hitung waktu yang diperlukan untuk mencapai tanah (g = 10 m/s²).",
      options: ["2 detik", "4 detik", "5 detik", "6 detik"],
      answer: "2 detik"
    },
    {
      question: "12. Sebuah benda bermassa 10 kg bergerak dengan kecepatan 5 m/s. Hitung energi kinetik benda tersebut.",
      options: ["125 J", "250 J", "50 J", "75 J"],
      answer: "125 J"
    },
    {
      question: "13. Hitung gaya gravitasi yang bekerja pada benda bermassa 2 kg yang berada di permukaan bumi (g = 9,8 m/s²).",
      options: ["9,8 N", "19,6 N", "20 N", "5 N"],
      answer: "19,6 N"
    },
    {
      question: "14. Sebuah benda bergerak dengan kecepatan 20 m/s selama 4 detik. Hitung jarak yang ditempuh benda tersebut.",
      options: ["60 m", "80 m", "100 m", "120 m"],
      answer: "80 m"
    },
    {
      question: "15. Hitung tekanan yang diberikan oleh gaya 200 N pada luas penampang 4 m².",
      options: ["50 Pa", "200 Pa", "50 N/m²", "500 Pa"],
      answer: "50 Pa"
    },
    // Kimia
    {
      question: "16. Dalam reaksi penguraian kalium klorat (KClO₃), berapa mol oksigen yang dihasilkan dari 2 mol KClO₃?",
      options: ["2 mol", "4 mol", "1 mol", "3 mol"],
      answer: "3 mol"
    },
    {
      question: "17. Reaksi berikut adalah reaksi kesetimbangan: \( N_2 (g) + 3H_2 (g) \rightleftharpoons 2NH_3 (g) \). Jika konsentrasi \( N_2 \) dan \( H_2 \) berkurang, apa yang terjadi pada kesetimbangan?",
      options: [
        "Kesetimbangan bergeser ke kiri",
        "Kesetimbangan bergeser ke kanan",
        "Kesetimbangan tidak berubah",
        "Reaksi berhenti"
      ],
      answer: "Kesetimbangan bergeser ke kanan"
    },
    {
      question: "18. Berapa banyak mol HCl yang diperlukan untuk menetralkan 1 mol NaOH?",
      options: ["1 mol", "2 mol", "3 mol", "4 mol"],
      answer: "1 mol"
    },
    {
      question: "19. Tentukan pH dari larutan yang memiliki konsentrasi ion H+ sebesar \( 1 \times 10^{-4} \) M.",
      options: ["4", "5", "6", "7"],
      answer: "4"
    },
    {
      question: "20. Dalam reaksi antara asam asetat (CH₃COOH) dan air, produk utama yang terbentuk adalah:",
      options: ["CH₃COOH", "CH₃COO⁻ dan H⁺", "CH₃COOH dan H₂O", "CH₃COO⁻ dan H₂O"],
      answer: "CH₃COO⁻ dan H⁺"
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