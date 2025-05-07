import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Matematika: Tentukan hasil dari \( \lim_{x \to \infty} \frac{5x + 3}{2x - 1} \).",
      options: ["2.5", "5", "3", "0"],
      answer: "2.5"
    },
    {
      question: "2. Biologi: Pada organisme manusia, oksigen dibawa oleh sel darah merah dalam bentuk:",
      options: ["Hemoglobin", "Plasma darah", "Leukosit", "Trombosit"],
      answer: "Hemoglobin"
    },
    {
      question: "3. Fisika: Jika dua buah gaya bekerja pada benda, masing-masing sebesar 5 N dan 3 N, dan sudut antara kedua gaya tersebut adalah 90°, berapakah resultan gaya?",
      options: ["8 N", "15 N", "7 N", "5 N"],
      answer: "7 N"
    },
    {
      question: "4. Kimia: Apakah yang dimaksud dengan reaksi eksoterm?",
      options: [
        "Reaksi yang melepaskan energi dalam bentuk panas",
        "Reaksi yang menyerap energi dari lingkungan",
        "Reaksi yang menghasilkan gas",
        "Reaksi yang mengubah bentuk zat"
      ],
      answer: "Reaksi yang melepaskan energi dalam bentuk panas"
    },
    {
      question: "5. Bahasa Inggris: Choose the correct sentence: 'She ____ to the gym every morning.'",
      options: [
        "go",
        "going",
        "goes",
        "went"
      ],
      answer: "goes"
    },
    {
      question: "6. Ekonomi: Apa yang dimaksud dengan GDP (Gross Domestic Product)?",
      options: [
        "Total nilai barang dan jasa yang diproduksi dalam negeri dalam satu tahun",
        "Total nilai barang yang diekspor dari suatu negara",
        "Pendapatan nasional per kapita",
        "Jumlah uang yang dipinjam oleh pemerintah"
      ],
      answer: "Total nilai barang dan jasa yang diproduksi dalam negeri dalam satu tahun"
    },
    {
      question: "7. Matematika: Tentukan integral \( \int (2x^3 - 5x^2 + 3) \, dx \).",
      options: ["\( \frac{1}{2}x^4 - \frac{5}{3}x^3 + 3x + C \)", "\( 2x^4 - 5x^3 + 3x + C \)", "\( 2x^3 - 5x^2 + 3x + C \)", "\( \frac{2}{3}x^3 - \frac{5}{2}x^2 + 3x + C \)"],
      answer: "\( \frac{1}{2}x^4 - \frac{5}{3}x^3 + 3x + C \)"
    },
    {
      question: "8. Biologi: Apa yang dimaksud dengan sistem endokrin?",
      options: [
        "Sistem yang mengatur hormon dalam tubuh",
        "Sistem peredaran darah",
        "Sistem pencernaan",
        "Sistem pengeluaran"
      ],
      answer: "Sistem yang mengatur hormon dalam tubuh"
    },
    {
      question: "9. Fisika: Sebuah benda bergerak dalam lintasan melingkar dengan kecepatan tetap 20 m/s. Apa yang dimaksud dengan percepatan benda tersebut?",
      options: ["Percepatan sentripetal", "Percepatan linier", "Percepatan gravitasi", "Tidak ada percepatan"],
      answer: "Percepatan sentripetal"
    },
    {
      question: "10. Kimia: Apa yang dimaksud dengan asam lemah?",
      options: [
        "Asam yang hanya sedikit terionisasi dalam air",
        "Asam yang memiliki pH rendah",
        "Asam yang sangat mudah terionisasi",
        "Asam yang menghasilkan banyak gas"
      ],
      answer: "Asam yang hanya sedikit terionisasi dalam air"
    },
    {
      question: "11. Bahasa Inggris: What is the meaning of 'mischievous'?",
      options: ["Good", "Playful", "Harmless", "Troublesome"],
      answer: "Troublesome"
    },
    {
      question: "12. Ekonomi: Apa yang dimaksud dengan inflasi?",
      options: [
        "Penurunan harga barang dan jasa secara umum",
        "Peningkatan harga barang dan jasa secara umum",
        "Peningkatan produksi barang",
        "Penurunan daya beli masyarakat"
      ],
      answer: "Peningkatan harga barang dan jasa secara umum"
    },
    {
      question: "13. Matematika: Tentukan hasil dari \( 3x^2 - 2x + 5 \) jika \( x = 2 \).",
      options: ["7", "10", "11", "8"],
      answer: "7"
    },
    {
      question: "14. Biologi: Bagian tubuh manusia yang berfungsi untuk menyaring zat-zat yang tidak dibutuhkan dalam darah adalah?",
      options: [
        "Ginjal",
        "Hati",
        "Paru-paru",
        "Jantung"
      ],
      answer: "Ginjal"
    },
    {
      question: "15. Fisika: Sebuah benda memiliki massa 10 kg dan bergerak dengan kecepatan 5 m/s. Berapakah energi kinetik benda tersebut?",
      options: ["125 J", "50 J", "25 J", "10 J"],
      answer: "25 J"
    },
    {
      question: "16. Kimia: Zat yang dapat mengubah pH larutan menjadi lebih asam adalah?",
      options: [
        "Asam",
        "Basa",
        "Garam",
        "Air"
      ],
      answer: "Asam"
    },
    {
      question: "17. Bahasa Inggris: Choose the correct form of the verb: 'I ____ to the store yesterday.'",
      options: [
        "go",
        "going",
        "gone",
        "went"
      ],
      answer: "went"
    },
    {
      question: "18. Ekonomi: Apa yang dimaksud dengan permintaan elastis?",
      options: [
        "Permintaan yang sangat sensitif terhadap perubahan harga",
        "Permintaan yang tidak dipengaruhi oleh harga",
        "Permintaan yang tetap meskipun harga berubah",
        "Permintaan yang menurun ketika harga naik"
      ],
      answer: "Permintaan yang sangat sensitif terhadap perubahan harga"
    },
    {
      question: "19. Matematika: Tentukan nilai dari \( \frac{dy}{dx} \) untuk fungsi \( y = x^3 - 4x^2 + 2x \).",
      options: ["\( 3x^2 - 8x + 2 \)", "\( 3x^2 - 4x + 2 \)", "\( 3x^2 - 2x + 2 \)", "\( 2x^3 - 4x^2 + 2 \)"],
      answer: "\( 3x^2 - 8x + 2 \)"
    },
    {
      question: "20. Biologi: Proses pembuatan energi dari makanan dalam tubuh manusia dikenal dengan nama?",
      options: [
        "Respirasi sel",
        "Fotosintesis",
        "Fermentasi",
        "Transpirasi"
      ],
      answer: "Respirasi sel"
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