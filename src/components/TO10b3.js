import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    // Matematika
    {
      question: "1. Tentukan nilai dari (3x + 4) - (2x - 5).",
      options: ["x + 9", "x - 1", "5x + 9", "5x - 1"],
      answer: "x + 9"
    },
    {
      question: "2. Tentukan akar-akar dari persamaan kuadrat x^2 - 6x + 8 = 0.",
      options: ["2, 4", "1, 8", "3, 4", "2, 6"],
      answer: "2, 4"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan metabolisme pada tubuh manusia?",
      options: [
        "Proses pencernaan makanan",
        "Proses pembentukan energi dari makanan",
        "Proses peredaran darah",
        "Proses pembuangan limbah dari tubuh"
      ],
      answer: "Proses pembentukan energi dari makanan"
    },
    {
      question: "4. Apa fungsi dari mitokondria dalam sel?",
      options: [
        "Tempat sintesis protein",
        "Penyimpanan energi",
        "Penghasil energi",
        "Tempat pemecahan glukosa"
      ],
      answer: "Penghasil energi"
    },
    // Fisika
    {
      question: "5. Sebuah benda massanya 5 kg bergerak dengan kecepatan 3 m/s. Tentukan energi kinetiknya.",
      options: ["15 J", "30 J", "45 J", "60 J"],
      answer: "45 J"
    },
    {
      question: "6. Jika sebuah benda dilempar vertikal ke atas dengan kecepatan awal 20 m/s, berapa waktu yang diperlukan untuk mencapai titik tertinggi? (g = 10 m/s²)",
      options: ["2 s", "4 s", "5 s", "10 s"],
      answer: "2 s"
    },
    // Kimia
    {
      question: "7. Apa yang dimaksud dengan pH pada larutan?",
      options: [
        "Ukuran keasaman atau kebasaan suatu larutan",
        "Suhu larutan",
        "Kekuatan larutan",
        "Jumlah ion dalam larutan"
      ],
      answer: "Ukuran keasaman atau kebasaan suatu larutan"
    },
    {
      question: "8. Senyawa yang memiliki rumus kimia H2SO4 disebut?",
      options: ["Asam klorida", "Asam sulfat", "Asam asetat", "Asam nitrat"],
      answer: "Asam sulfat"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'I ____ to the store tomorrow.'",
      options: ["go", "went", "will go", "going"],
      answer: "will go"
    },
    {
      question: "10. Fill in the blank: 'They are studying ____ the library right now.'",
      options: ["in", "at", "on", "by"],
      answer: "in"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan biaya tetap dalam ekonomi?",
      options: [
        "Biaya yang tidak berubah meskipun jumlah produksi berubah",
        "Biaya yang berubah seiring dengan jumlah produksi",
        "Biaya yang terkait dengan tenaga kerja",
        "Biaya yang digunakan untuk membeli bahan baku"
      ],
      answer: "Biaya yang tidak berubah meskipun jumlah produksi berubah"
    },
    {
      question: "12. Apa tujuan dari kebijakan moneter?",
      options: [
        "Menjaga stabilitas harga",
        "Meningkatkan jumlah tenaga kerja",
        "Mengatur perdagangan internasional",
        "Menurunkan harga barang"
      ],
      answer: "Menjaga stabilitas harga"
    },
    // Matematika
    {
      question: "13. Tentukan integral dari ∫ 5x^2 dx.",
      options: ["5/3 x^3 + C", "5x^3 + C", "5/2 x^3 + C", "5x^2 + C"],
      answer: "5/3 x^3 + C"
    },
    {
      question: "14. Tentukan turunan dari fungsi f(x) = 4x^3 - 5x^2 + 3.",
      options: ["12x^2 - 10x", "12x^2 - 5x", "12x^2 + 5x", "3x^2 - 5x"],
      answer: "12x^2 - 10x"
    },
    // Biologi
    {
      question: "15. Fungsi klorofil pada tumbuhan adalah?",
      options: [
        "Membantu dalam proses fotosintesis",
        "Menghasilkan energi",
        "Mengikat nitrogen",
        "Menyerap air dari tanah"
      ],
      answer: "Membantu dalam proses fotosintesis"
    },
    {
      question: "16. Zat yang dihasilkan oleh sel darah putih untuk melawan infeksi adalah?",
      options: ["Antibodi", "Enzim", "Hormon", "Hemoglobin"],
      answer: "Antibodi"
    },
    // Fisika
    {
      question: "17. Kecepatan suara di udara pada suhu 20°C adalah?",
      options: ["300 m/s", "340 m/s", "150 m/s", "1000 m/s"],
      answer: "340 m/s"
    },
    {
      question: "18. Gaya yang bekerja pada sebuah benda yang jatuh bebas adalah?",
      options: ["Gaya gravitasi", "Gaya normal", "Gaya gesekan", "Gaya elektromagnetik"],
      answer: "Gaya gravitasi"
    },
    // Kimia
    {
      question: "19. Pada reaksi pembakaran, energi yang dihasilkan adalah?",
      options: ["Energi mekanik", "Energi panas", "Energi listrik", "Energi kimia"],
      answer: "Energi panas"
    },
    {
      question: "20. Proses pemisahan campuran gas dengan cara menggunakan perbedaan titik didih disebut?",
      options: ["Distilasi", "Filtrasi", "Dekantasi", "Kromatografi"],
      answer: "Distilasi"
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
            question={questions[currentQuestion]} 
            onAnswerSelected={handleAnswer} 
          />
        </>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Tryout;
