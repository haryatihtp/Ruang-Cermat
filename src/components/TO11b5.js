import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    {
      question: "1. Matematika: Tentukan nilai dari \( \lim_{x \to 0} \frac{e^x - 1}{x} \).",
      options: ["1", "0", "∞", "-1"],
      answer: "1"
    },
    {
      question: "2. Matematika: Tentukan turunan kedua dari fungsi \( f(x) = \ln(x^2 + 1) \).",
      options: [
        " \( \frac{2x}{x^2 + 1} \)",
        " \( \frac{2}{x^2 + 1} \)",
        " \( \frac{2x}{(x^2 + 1)^2} \)",
        " \( \frac{2x^2}{x^2 + 1} \)"
      ],
      answer: " \( \frac{2}{(x^2 + 1)^2} \)"
    },
    {
      question: "3. Biologi: Dalam proses transkripsi DNA menjadi RNA, enzim yang berperan dalam sintesis RNA adalah:",
      options: ["DNA Polimerase", "RNA Polimerase", "Ligase", "Helikase"],
      answer: "RNA Polimerase"
    },
    {
      question: "4. Fisika: Sebuah bola bermassa 0,5 kg dilemparkan dengan kecepatan awal 10 m/s pada sudut elevasi 30°. Tentukan ketinggian maksimum yang dicapai bola tersebut!",
      options: ["2,5 m", "5 m", "10 m", "7,5 m"],
      answer: "2,5 m"
    },
    {
      question: "5. Kimia: Untuk reaksi redoks, jika \( Fe_2O_3 + 3CO \to 2Fe + 3CO_2 \), tentukan jumlah mol \( Fe \) yang terbentuk jika 3 mol \( CO \) bereaksi.",
      options: ["2 mol", "3 mol", "1 mol", "4 mol"],
      answer: "2 mol"
    },
    {
      question: "6. Bahasa Inggris: Choose the correct form of the verb: 'If he ____ more time, he would have finished the project.'",
      options: [
        "has",
        "had",
        "have",
        "having"
      ],
      answer: "had"
    },
    {
      question: "7. Ekonomi: Dalam teori ekonomi, apabila permintaan suatu barang tidak elastis, apa yang terjadi jika harga barang tersebut naik?",
      options: [
        "Jumlah permintaan akan meningkat",
        "Jumlah permintaan akan menurun",
        "Jumlah permintaan tidak berubah",
        "Jumlah permintaan akan sangat menurun"
      ],
      answer: "Jumlah permintaan tidak berubah"
    },
    {
      question: "8. Matematika: Tentukan nilai dari \( \int_1^2 (3x^2 - 4x + 1) \, dx \).",
      options: ["3", "2", "4", "5"],
      answer: "3"
    },
    {
      question: "9. Biologi: Apa yang dimaksud dengan rekombinasi genetik pada proses meiosis?",
      options: [
        "Proses pembentukan gamet",
        "Pertukaran bagian kromosom homolog",
        "Pembelahan sitoplasma",
        "Penyusunan kromosom baru"
      ],
      answer: "Pertukaran bagian kromosom homolog"
    },
    {
      question: "10. Fisika: Sebuah benda bermassa 10 kg dipengaruhi oleh gaya sebesar 20 N. Hitunglah percepatan yang dialami benda tersebut!",
      options: ["2 m/s²", "1 m/s²", "0,5 m/s²", "0,2 m/s²"],
      answer: "2 m/s²"
    },
    {
      question: "11. Kimia: Dalam larutan buffer, pH hanya sedikit terpengaruh oleh penambahan asam atau basa. Apakah yang menentukan kapasitas buffer tersebut?",
      options: [
        "Konsentrasi asam dan basa konjugat",
        "Volume air",
        "Keasaman air",
        "Konsentrasi garam dalam larutan"
      ],
      answer: "Konsentrasi asam dan basa konjugat"
    },
    {
      question: "12. Bahasa Inggris: Choose the correct answer: 'The book ____ on the table is mine.'",
      options: [
        "laying",
        "lying",
        "laid",
        "lay"
      ],
      answer: "lying"
    },
    {
      question: "13. Ekonomi: Dalam teori konsumsi, apa yang dimaksud dengan kurva indiferen?",
      options: [
        "Kurva yang menunjukkan preferensi konsumen antara dua barang",
        "Kurva yang menunjukkan hubungan antara harga dan jumlah barang yang diminta",
        "Kurva yang menunjukkan hubungan antara pendapatan dan pengeluaran",
        "Kurva yang menggambarkan tingkat produksi suatu barang"
      ],
      answer: "Kurva yang menunjukkan preferensi konsumen antara dua barang"
    },
    {
      question: "14. Matematika: Tentukan nilai dari \( \lim_{x \to 1} \frac{x^3 - 1}{x - 1} \).",
      options: ["3", "1", "0", "2"],
      answer: "3"
    },
    {
      question: "15. Biologi: Apa yang terjadi pada saat mitosis pada fase anafase?",
      options: [
        "Kromosom mulai berduplikasi",
        "Kromatid sister dipisahkan menuju kutub yang berlawanan",
        "Membran inti terbentuk kembali",
        "Kromosom terurai menjadi kromatin"
      ],
      answer: "Kromatid sister dipisahkan menuju kutub yang berlawanan"
    },
    {
      question: "16. Fisika: Sebuah mobil bergerak dengan kecepatan 20 m/s dan berhenti setelah 5 detik. Hitunglah percepatan negatif mobil tersebut!",
      options: ["-4 m/s²", "-2 m/s²", "4 m/s²", "2 m/s²"],
      answer: "-4 m/s²"
    },
    {
      question: "17. Kimia: Reaksi oksidasi terjadi apabila atom atau ion kehilangan elektron. Dalam reaksi \( Cu + 2Ag^+ \to Cu^{2+} + 2Ag \), ion yang teroksidasi adalah:",
      options: [
        "Cu",
        "Ag",
        "Cu^2+",
        "Ag^+"
      ],
      answer: "Cu"
    },
    {
      question: "18. Bahasa Inggris: Choose the correct sentence: 'I ____ go to the concert next weekend.'",
      options: [
        "am going to",
        "going to",
        "will go to",
        "go to"
      ],
      answer: "am going to"
    },
    {
      question: "19. Ekonomi: Jika biaya total (TC) adalah \( TC = 50 + 5Q \) dan pendapatan total (TR) adalah \( TR = 10Q \), berapakah laba maksimum yang dapat diperoleh?",
      options: [
        "50",
        "25",
        "10",
        "5"
      ],
      answer: "25"
    },
    {
      question: "20. Matematika: Tentukan nilai dari \( \int_0^1 (5x^4 - 3x^2 + 2) \, dx \).",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      answer: "1"
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