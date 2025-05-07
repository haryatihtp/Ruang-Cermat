import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Matematika: Tentukan nilai dari \( \lim_{x \to 0} \frac{\sin(x)}{x} \).",
      options: ["1", "0", "∞", "-1"],
      answer: "1"
    },
    {
      question: "2. Matematika: Tentukan turunan pertama dari fungsi \( f(x) = \ln(x^2 + 1) \).",
      options: ["\( \frac{2x}{x^2 + 1} \)", "\( \frac{2}{x^2 + 1} \)", "\( \frac{x}{x^2 + 1} \)", "\( \frac{2x}{x^2 - 1} \)"],
      answer: "\( \frac{2x}{x^2 + 1} \)"
    },
    {
      question: "3. Biologi: Apa yang dimaksud dengan fenotipe dalam biologi?",
      options: [
        "Ekspresi fisik atau karakteristik yang diturunkan dari genotipe",
        "Proses perubahan genetik",
        "Bagian dari genetik yang tidak terlihat",
        "Hasil dari mutasi genetik"
      ],
      answer: "Ekspresi fisik atau karakteristik yang diturunkan dari genotipe"
    },
    {
      question: "4. Fisika: Sebuah benda bergerak dengan percepatan konstan 3 m/s². Jika kecepatan awalnya 4 m/s, berapa jarak yang ditempuh benda tersebut setelah 5 detik?",
      options: ["50 m", "60 m", "80 m", "90 m"],
      answer: "80 m"
    },
    {
      question: "5. Kimia: Dalam reaksi \( 2KClO_3 \to 2KCl + 3O_2 \), berapa mol \( O_2 \) yang terbentuk jika 4 mol \( KClO_3 \) digunakan?",
      options: ["3 mol", "4 mol", "6 mol", "8 mol"],
      answer: "6 mol"
    },
    {
      question: "6. Bahasa Inggris: Choose the correct sentence: 'If I ____ you, I would help you with your project.'",
      options: [
        "was",
        "am",
        "were",
        "be"
      ],
      answer: "were"
    },
    {
      question: "7. Ekonomi: Apakah yang dimaksud dengan teori marginal dalam ekonomi?",
      options: [
        "Analisis mengenai perubahan total dari suatu variabel ketika ada perubahan kecil pada variabel lainnya",
        "Proses penghitungan keuntungan total",
        "Teori yang menjelaskan distribusi barang",
        "Model yang menggambarkan pergeseran permintaan"
      ],
      answer: "Analisis mengenai perubahan total dari suatu variabel ketika ada perubahan kecil pada variabel lainnya"
    },
    {
      question: "8. Matematika: Tentukan integral dari \( \int_1^3 (2x^2 - 3x + 1) \, dx \).",
      options: ["6", "7", "8", "9"],
      answer: "6"
    },
    {
      question: "9. Biologi: Apa fungsi utama mitokondria dalam sel?",
      options: [
        "Produksi energi dalam bentuk ATP",
        "Penyimpanan informasi genetik",
        "Sintesis protein",
        "Transportasi molekul"
      ],
      answer: "Produksi energi dalam bentuk ATP"
    },
    {
      question: "10. Fisika: Sebuah benda bermassa 2 kg bergerak dengan kecepatan 4 m/s. Tentukan energi kinetik benda tersebut!",
      options: ["16 J", "32 J", "8 J", "4 J"],
      answer: "16 J"
    },
    {
      question: "11. Kimia: Apa yang terjadi pada reaksi asam-basa menurut teori Bronsted-Lowry?",
      options: [
        "Asam adalah donor proton, basa adalah akseptor proton",
        "Asam adalah penerima elektron, basa adalah pemberi elektron",
        "Asam adalah donor elektron, basa adalah akseptor elektron",
        "Asam adalah senyawa yang mengandung hidrogen"
      ],
      answer: "Asam adalah donor proton, basa adalah akseptor proton"
    },
    {
      question: "12. Bahasa Inggris: Choose the correct sentence: 'I wish I ____ more time to finish my homework.'",
      options: [
        "have",
        "had",
        "will have",
        "having"
      ],
      answer: "had"
    },
    {
      question: "13. Ekonomi: Jika elastisitas harga permintaan (Ed) suatu barang adalah -1, bagaimana perubahan permintaan jika harga barang naik 10%?",
      options: [
        "Permintaan akan berkurang sebesar 10%",
        "Permintaan akan berkurang sebesar 20%",
        "Permintaan akan meningkat sebesar 10%",
        "Permintaan tetap"
      ],
      answer: "Permintaan akan berkurang sebesar 10%"
    },
    {
      question: "14. Matematika: Tentukan turunan dari \( f(x) = e^{x^2} \).",
      options: ["\( 2x e^{x^2} \)", "\( e^{x^2} \)", "\( 2x e^{x} \)", "\( 2x e^{x^2} \)"],
      answer: "\( 2x e^{x^2} \)"
    },
    {
      question: "15. Biologi: Apa yang dimaksud dengan spesiasi dalam biologi?",
      options: [
        "Proses terbentuknya spesies baru",
        "Proses pengendalian populasi",
        "Proses adaptasi organisme",
        "Proses pembelahan sel"
      ],
      answer: "Proses terbentuknya spesies baru"
    },
    {
      question: "16. Fisika: Sebuah bola dilempar vertikal ke atas dengan kecepatan awal 10 m/s. Tentukan ketinggian maksimum yang dicapai bola!",
      options: ["5 m", "10 m", "20 m", "50 m"],
      answer: "5 m"
    },
    {
      question: "17. Kimia: Dalam reaksi \( H_2 + Cl_2 \to 2HCl \), jika 5 mol \( H_2 \) digunakan, berapa mol \( HCl \) yang terbentuk?",
      options: ["5 mol", "10 mol", "15 mol", "20 mol"],
      answer: "10 mol"
    },
    {
      question: "18. Bahasa Inggris: Choose the correct form: 'The book ____ on the table.'",
      options: [
        "lies",
        "is lying",
        "has lain",
        "lying"
      ],
      answer: "is lying"
    },
    {
      question: "19. Ekonomi: Dalam pasar monopoli, apakah yang terjadi jika perusahaan menurunkan harga?",
      options: [
        "Permintaan akan meningkat, tetapi dengan risiko penurunan keuntungan",
        "Permintaan akan menurun",
        "Harga akan tetap stabil",
        "Perusahaan akan kehilangan pelanggan"
      ],
      answer: "Permintaan akan meningkat, tetapi dengan risiko penurunan keuntungan"
    },
    {
      question: "20. Matematika: Tentukan limit dari \( \lim_{x \to \infty} \frac{5x^2 + 3x}{2x^2 + x + 1} \).",
      options: ["5/2", "3/2", "5", "∞"],
      answer: "5/2"
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