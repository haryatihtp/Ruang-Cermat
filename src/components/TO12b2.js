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
      question: "1. Tentukan nilai dari \( \lim_{x \to \infty} \frac{3x^2 + 2x}{5x^2 - x + 4} \).",
      options: ["3/5", "2/5", "1/3", "5/3"],
      answer: "3/5"
    },
    {
      question: "2. Tentukan turunan pertama dari fungsi \( f(x) = 3x^3 - 5x^2 + 2x - 7 \).",
      options: ["9x^2 - 10x + 2", "6x^2 - 5x + 2", "6x^2 - 10x + 2", "9x^2 - 5x + 2"],
      answer: "9x^2 - 10x + 2"
    },
    // Biologi
    {
      question: "3. Dalam replikasi DNA, enzim apa yang bertanggung jawab untuk membuka heliks ganda DNA?",
      options: ["Helikase", "Ligase", "DNA polimerase", "Topoisomerase"],
      answer: "Helikase"
    },
    {
      question: "4. Apa yang terjadi pada jaringan epitel dalam proses mitosis?",
      options: [
        "Sel epitel mati dan digantikan oleh sel baru.",
        "Sel epitel membelah diri untuk membentuk dua sel anak yang identik.",
        "Sel epitel melakukan fagositosis.",
        "Sel epitel berfungsi untuk transportasi."
      ],
      answer: "Sel epitel membelah diri untuk membentuk dua sel anak yang identik."
    },
    // Fisika
    {
      question: "5. Sebuah bola dengan massa 2 kg jatuh bebas dari ketinggian 20 m. Berapa kecepatan bola saat mencapai tanah? (anggap percepatan gravitasi \( g = 10 \, m/s^2 \))",
      options: ["10 m/s", "20 m/s", "14 m/s", "15 m/s"],
      answer: "20 m/s"
    },
    {
      question: "6. Dalam hukum Ohm, jika tegangan pada sebuah resistor adalah 12 V dan tahanannya adalah 4 ohm, berapa arus yang mengalir?",
      options: ["3 A", "12 A", "16 A", "4 A"],
      answer: "3 A"
    },
    // Kimia
    {
      question: "7. Jika 1 mol gas ideal berada pada suhu 300 K dan volume 22,4 L, berapa tekanan gas tersebut? (gunakan hukum gas ideal: \( PV = nRT \), dengan R = 0,0821 L·atm/(mol·K))",
      options: ["1 atm", "2 atm", "3 atm", "4 atm"],
      answer: "1 atm"
    },
    {
      question: "8. Dalam reaksi redoks, agen pereduksi adalah:",
      options: [
        "Zat yang menerima elektron.",
        "Zat yang kehilangan elektron.",
        "Zat yang tidak terlibat dalam reaksi.",
        "Zat yang menghasilkan oksigen."
      ],
      answer: "Zat yang kehilangan elektron."
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'If I ____ enough money, I would travel around the world.'",
      options: ["had", "have", "will have", "would have"],
      answer: "had"
    },
    {
      question: "10. Which of the following sentences is correct?",
      options: ["She has visited the museum yesterday.", "She will visit the museum yesterday.", "She visited the museum yesterday.", "She visits the museum yesterday."],
      answer: "She visited the museum yesterday."
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan elastisitas harga permintaan?",
      options: [
        "Perubahan harga yang mempengaruhi jumlah barang yang diminta.",
        "Perubahan pendapatan yang mempengaruhi jumlah barang yang diminta.",
        "Perubahan jumlah barang yang diminta yang mempengaruhi harga.",
        "Perubahan harga yang mempengaruhi jumlah barang yang ditawarkan."
      ],
      answer: "Perubahan harga yang mempengaruhi jumlah barang yang diminta."
    },
    {
      question: "12. Dalam sistem ekonomi pasar bebas, siapa yang menentukan harga barang?",
      options: [
        "Pemerintah",
        "Produsen",
        "Konsumen",
        "Pasar"
      ],
      answer: "Pasar"
    },
    // Matematika
    {
      question: "13. Hitung nilai dari \( \int_1^2 (x^2 - 4x + 3) \, dx \).",
      options: ["0", "1", "-1", "2"],
      answer: "0"
    },
    {
      question: "14. Tentukan turunan kedua dari fungsi \( f(x) = 5x^4 - 2x^3 + x^2 - 6 \).",
      options: ["60x^2 - 18x + 2", "60x^3 - 18x + 2", "12x^2 - 6x", "12x^3 - 6x"],
      answer: "60x^2 - 18x + 2"
    },
    // Biologi
    {
      question: "15. Bagaimana cara kerja enzim dalam proses pencernaan?",
      options: [
        "Enzim mempercepat reaksi kimia tanpa mengalami perubahan.",
        "Enzim berfungsi untuk menghasilkan energi.",
        "Enzim membentuk jaringan baru.",
        "Enzim mencerna makanan menjadi partikel yang lebih besar."
      ],
      answer: "Enzim mempercepat reaksi kimia tanpa mengalami perubahan."
    },
    {
      question: "16. Apa perbedaan antara sel prokariotik dan eukariotik?",
      options: [
        "Sel prokariotik memiliki inti sel, sedangkan sel eukariotik tidak.",
        "Sel prokariotik tidak memiliki inti sel, sedangkan sel eukariotik memiliki inti sel.",
        "Sel prokariotik lebih besar dari sel eukariotik.",
        "Sel prokariotik memiliki membran nukleus."
      ],
      answer: "Sel prokariotik tidak memiliki inti sel, sedangkan sel eukariotik memiliki inti sel."
    },
    // Fisika
    {
      question: "17. Sebuah mobil bergerak dengan kecepatan 60 km/jam selama 2 jam. Berapa jarak yang ditempuh mobil?",
      options: ["120 km", "240 km", "100 km", "180 km"],
      answer: "120 km"
    },
    {
      question: "18. Sebuah benda bermassa 3 kg bergerak dengan kecepatan 5 m/s. Hitunglah energi kinetiknya.",
      options: ["37,5 J", "45 J", "75 J", "55 J"],
      answer: "37,5 J"
    },
    // Kimia
    {
      question: "19. Dalam reaksi asam-basa, ketika larutan HCl (asam kuat) dicampurkan dengan NaOH (basa kuat), produk yang dihasilkan adalah:",
      options: [
        "H2O dan NaCl",
        "NaOH dan Cl2",
        "H2O dan Cl2",
        "H2 dan NaCl"
      ],
      answer: "H2O dan NaCl"
    },
    {
      question: "20. Berdasarkan hukum massa aksi, kecepatan reaksi kimia tergantung pada:",
      options: [
        "Konsentrasi reaktan",
        "Konsentrasi produk",
        "Katalisator",
        "Energi aktivasi"
      ],
      answer: "Konsentrasi reaktan"
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