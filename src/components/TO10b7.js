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
      question: "1. Tentukan nilai dari \( \\frac{2x + 3}{x - 1} \\) ketika \( x = 2 \\).",
      options: ["2", "3", "5", "7"],
      answer: "7"
    },
    {
      question: "2. Sebuah lingkaran memiliki jari-jari 7 cm. Berapakah luas lingkaran tersebut? (Gunakan \( \\pi = 22/7 \\))",
      options: ["154 cm²", "144 cm²", "164 cm²", "140 cm²"],
      answer: "154 cm²"
    },
    // Biologi
    {
      question: "3. Organ yang bertanggung jawab untuk memompa darah ke seluruh tubuh adalah?",
      options: ["Paru-paru", "Jantung", "Liver", "Ginjal"],
      answer: "Jantung"
    },
    {
      question: "4. Apa nama proses pembentukan makanan pada tumbuhan hijau dengan bantuan cahaya matahari?",
      options: ["Respirasi", "Fotosintesis", "Transpirasi", "Fermentasi"],
      answer: "Fotosintesis"
    },
    // Fisika
    {
      question: "5. Sebuah benda dengan massa 2 kg bergerak dengan kecepatan 4 m/s. Berapakah energi kinetiknya?",
      options: ["8 J", "16 J", "32 J", "64 J"],
      answer: "16 J"
    },
    {
      question: "6. Jika percepatan gravitasi adalah 10 m/s², berapakah berat benda dengan massa 5 kg?",
      options: ["50 N", "10 N", "5 N", "100 N"],
      answer: "50 N"
    },
    // Kimia
    {
      question: "7. Senyawa dengan rumus kimia H₂O dikenal sebagai?",
      options: ["Karbon dioksida", "Air", "Ammonia", "Asam klorida"],
      answer: "Air"
    },
    {
      question: "8. Proses pemisahan campuran yang memanfaatkan perbedaan titik didih disebut?",
      options: ["Filtrasi", "Distilasi", "Kristalisasi", "Dekantasi"],
      answer: "Distilasi"
    },
    // Bahasa Inggris
    {
      question: "9. Fill in the blank: \"She ____ to the park every morning.\"",
      options: ["goes", "go", "going", "gone"],
      answer: "goes"
    },
    {
      question: "10. Translate the sentence: \"I am reading a book.\"",
      options: ["Saya sedang makan buku.", "Saya sedang membaca buku.", "Saya membaca buku tadi.", "Saya akan membaca buku."],
      answer: "Saya sedang membaca buku."
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan permintaan dalam ilmu ekonomi?",
      options: [
        "Jumlah barang yang ingin dibeli konsumen pada tingkat harga tertentu.",
        "Jumlah barang yang disediakan produsen.",
        "Keinginan untuk memiliki barang tanpa daya beli.",
        "Produksi barang dan jasa dalam jumlah besar."
      ],
      answer: "Jumlah barang yang ingin dibeli konsumen pada tingkat harga tertentu."
    },
    {
      question: "12. Faktor utama yang memengaruhi penawaran barang adalah?",
      options: ["Harga barang", "Kualitas barang", "Selera konsumen", "Jumlah konsumen"],
      answer: "Harga barang"
    },
    // Matematika
    {
      question: "13. Tentukan hasil dari \( (x + 2)(x - 3) \).",
      options: ["\( x^2 - x - 6 \)", "\( x^2 + x - 6 \)", "\( x^2 - 6x + 6 \)", "\( x^2 + x + 6 \)"],
      answer: "\( x^2 - x - 6 \)"
    },
    {
      question: "14. Jika nilai rata-rata dari 5 data adalah 12, berapakah jumlah total dari data tersebut?",
      options: ["60", "65", "70", "55"],
      answer: "60"
    },
    // Biologi
    {
      question: "15. Sel hewan tidak memiliki struktur berikut ini, kecuali?",
      options: ["Dinding sel", "Vakuola besar", "Kloroplas", "Nukleus"],
      answer: "Nukleus"
    },
    {
      question: "16. Apa fungsi utama mitokondria dalam sel?",
      options: [
        "Menyimpan informasi genetik",
        "Menyintesis protein",
        "Menghasilkan energi",
        "Melindungi inti sel"
      ],
      answer: "Menghasilkan energi"
    },
    // Fisika
    {
      question: "17. Sebuah mobil melaju dengan kecepatan 20 m/s selama 10 detik. Berapakah jarak yang ditempuh mobil tersebut?",
      options: ["100 m", "150 m", "200 m", "250 m"],
      answer: "200 m"
    },
    {
      question: "18. Rumus untuk menghitung tekanan adalah?",
      options: ["P = F/A", "P = m/v", "P = v/t", "P = F × d"],
      answer: "P = F/A"
    },
    // Kimia
    {
      question: "19. Unsur yang merupakan gas mulia adalah?",
      options: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"],
      answer: "Helium"
    },
    {
      question: "20. Larutan yang memiliki pH kurang dari 7 bersifat?",
      options: ["Basa", "Netral", "Asam", "Larut"],
      answer: "Asam"
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