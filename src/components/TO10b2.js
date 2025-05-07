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
      question: "1. Tentukan nilai dari \( x \) pada persamaan \( 2x - 5 = 11 \).",
      options: ["x = 8", "x = 6", "x = 5", "x = 4"],
      answer: "x = 8"
    },
    {
      question: "2. Hitung nilai dari \( (3x^2 + 2x) \) ketika \( x = 4 \).",
      options: ["50", "60", "70", "80"],
      answer: "50"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan osmosis?",
      options: [
        "Perpindahan molekul air dari konsentrasi rendah ke tinggi melalui membran semipermeabel",
        "Proses pemecahan senyawa organik dalam sel",
        "Proses transportasi molekul melalui pembuluh darah",
        "Perpindahan molekul air melalui membran sel secara pasif"
      ],
      answer: "Perpindahan molekul air dari konsentrasi rendah ke tinggi melalui membran semipermeabel"
    },
    {
      question: "4. Pada sistem pernapasan manusia, gas apa yang dikeluarkan saat menghembuskan napas?",
      options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Metana"],
      answer: "Karbon dioksida"
    },
    // Fisika
    {
      question: "5. Sebuah benda bergerak dengan kecepatan 20 m/s selama 10 detik. Berapa jarak yang ditempuh benda tersebut?",
      options: ["100 m", "200 m", "300 m", "400 m"],
      answer: "200 m"
    },
    {
      question: "6. Sebuah benda memiliki massa 10 kg dan bergerak dengan kecepatan 4 m/s. Tentukan energi kinetiknya.",
      options: ["80 J", "40 J", "20 J", "10 J"],
      answer: "80 J"
    },
    // Kimia
    {
      question: "7. Senyawa yang memiliki rumus kimia \( NaCl \) adalah?",
      options: ["Asam klorida", "Garam dapur", "Kalium klorida", "Sodium hidroksida"],
      answer: "Garam dapur"
    },
    {
      question: "8. Proses kimia yang menghasilkan gas hidrogen adalah reaksi antara asam dan?",
      options: ["Logam alkali", "Logam alkali tanah", "Logam transisi", "Nonlogam"],
      answer: "Logam alkali"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct answer: I ____ to visit my grandmother next week.",
      options: ["am going", "go", "will go", "going"],
      answer: "will go"
    },
    {
      question: "10. Choose the correct answer: She ____ a book when I called her.",
      options: ["read", "was reading", "reads", "reading"],
      answer: "was reading"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan permintaan dalam ekonomi?",
      options: [
        "Jumlah barang yang tersedia di pasar",
        "Jumlah barang yang ingin dibeli pada harga tertentu",
        "Jumlah uang yang dibutuhkan untuk membeli barang",
        "Jumlah barang yang diproduksi"
      ],
      answer: "Jumlah barang yang ingin dibeli pada harga tertentu"
    },
    {
      question: "12. Fungsi dari pasar persaingan sempurna adalah?",
      options: [
        "Menentukan harga barang dengan bebas",
        "Menjaga kestabilan harga barang",
        "Mengatur harga barang dari pemerintah",
        "Membatasi produksi barang"
      ],
      answer: "Menentukan harga barang dengan bebas"
    },
    // Matematika
    {
      question: "13. Tentukan integral dari \( \int 6x dx \).",
      options: ["\( 3x^2 + C \)", "\( 6x^2 + C \)", "\( 6x + C \)", "\( 3x^3 + C \)"],
      answer: "\( 3x^2 + C \)"
    },
    {
      question: "14. Tentukan turunan dari \( f(x) = 3x^2 - 4x + 1 \).",
      options: ["\( 6x - 4 \)", "\( 3x - 4 \)", "\( 6x + 4 \)", "\( 6x - 1 \)"],
      answer: "\( 6x - 4 \)"
    },
    // Biologi
    {
      question: "15. Apa yang dimaksud dengan seleksi alam?",
      options: [
        "Proses pemilihan individu yang memiliki ciri-ciri yang menguntungkan bagi kelangsungan hidup",
        "Proses perubahan genetik pada organisme",
        "Proses penyebaran spesies ke tempat baru",
        "Proses pembentukan spesies baru"
      ],
      answer: "Proses pemilihan individu yang memiliki ciri-ciri yang menguntungkan bagi kelangsungan hidup"
    },
    {
      question: "16. Apa yang dimaksud dengan adaptasi pada hewan?",
      options: [
        "Perubahan morfologi atau fisiologi untuk bertahan hidup di lingkungan tertentu",
        "Proses evolusi spesies",
        "Peningkatan jumlah individu dalam suatu spesies",
        "Proses migrasi hewan ke daerah yang lebih baik"
      ],
      answer: "Perubahan morfologi atau fisiologi untuk bertahan hidup di lingkungan tertentu"
    },
    // Fisika
    {
      question: "17. Hukum Newton yang menyatakan bahwa gaya yang diberikan pada benda akan menghasilkan percepatan berbanding lurus dengan massa benda disebut hukum?",
      options: ["Hukum I", "Hukum II", "Hukum III", "Hukum gravitasi"],
      answer: "Hukum II"
    },
    {
      question: "18. Kecepatan gelombang cahaya di ruang hampa adalah?",
      options: ["300.000 m/s", "3.000.000 m/s", "300.000 km/s", "30.000 km/s"],
      answer: "300.000 km/s"
    },
    // Kimia
    {
      question: "19. Proses perubahan kimia yang menyerap energi disebut?",
      options: ["Eksotermik", "Endotermik", "Katalisis", "Sublimasi"],
      answer: "Endotermik"
    },
    {
      question: "20. Reaksi antara asam dan basa yang menghasilkan garam dan air disebut?",
      options: ["Reaksi redoks", "Reaksi pengendapan", "Reaksi asam-basa", "Reaksi pembakaran"],
      answer: "Reaksi asam-basa"
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