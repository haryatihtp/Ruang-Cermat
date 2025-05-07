import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";
import Timer from "./Timer";
import Question from "./Question";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Matematika: Hitunglah integral berikut: \( \int_1^3 (x^2 - 4x + 3) \, dx \).",
      options: ["3", "5", "7", "9"],
      answer: "3"
    },
    {
      question: "2. Biologi: Proses pencernaan makanan pertama kali terjadi di bagian tubuh manusia yang disebut?",
      options: ["Mulut", "Lambung", "Usus halus", "Usus besar"],
      answer: "Mulut"
    },
    {
      question: "3. Fisika: Sebuah benda jatuh bebas dari ketinggian 20 meter. Berapa lama waktu yang dibutuhkan untuk mencapai tanah? (Percepatan gravitasi g = 10 m/s²)",
      options: ["2 detik", "4 detik", "1 detik", "5 detik"],
      answer: "2 detik"
    },
    {
      question: "4. Kimia: Apa yang terjadi ketika asam kuat seperti HCl dicampur dengan basa kuat seperti NaOH?",
      options: [
        "Terjadi reaksi netralisasi menghasilkan garam dan air",
        "Terjadi reaksi pembakaran",
        "Terjadi reaksi pengendapan",
        "Terjadi reaksi reduksi"
      ],
      answer: "Terjadi reaksi netralisasi menghasilkan garam dan air"
    },
    {
      question: "5. Bahasa Inggris: Choose the correct sentence: 'She ____ to the library every day.'",
      options: [
        "goes",
        "going",
        "gone",
        "went"
      ],
      answer: "goes"
    },
    {
      question: "6. Ekonomi: Apa yang dimaksud dengan biaya tetap dalam ekonomi?",
      options: [
        "Biaya yang tidak berubah meskipun jumlah produksi meningkat atau menurun",
        "Biaya yang berubah seiring dengan jumlah produksi",
        "Biaya yang selalu meningkat",
        "Biaya yang terjadi hanya dalam jangka panjang"
      ],
      answer: "Biaya yang tidak berubah meskipun jumlah produksi meningkat atau menurun"
    },
    {
      question: "7. Matematika: Tentukan hasil dari \( (x - 3)(x + 2) \).",
      options: ["\( x^2 - x - 6 \)", "\( x^2 - x + 6 \)", "\( x^2 - 5x - 6 \)", "\( x^2 - 5x + 6 \)"],
      answer: "\( x^2 - x - 6 \)"
    },
    {
      question: "8. Biologi: Apa yang dimaksud dengan homeostasis dalam tubuh manusia?",
      options: [
        "Proses untuk menjaga kestabilan suhu tubuh dan kondisi internal lainnya",
        "Proses produksi energi dalam sel",
        "Proses pencernaan makanan",
        "Proses penyaringan darah oleh ginjal"
      ],
      answer: "Proses untuk menjaga kestabilan suhu tubuh dan kondisi internal lainnya"
    },
    {
      question: "9. Fisika: Sebuah benda bergerak dengan kecepatan 10 m/s. Jika massa benda tersebut adalah 5 kg, berapakah momentum benda tersebut?",
      options: ["50 kg.m/s", "5 kg.m/s", "100 kg.m/s", "25 kg.m/s"],
      answer: "50 kg.m/s"
    },
    {
      question: "10. Kimia: Dalam reaksi redoks, yang mana yang mengalami oksidasi?",
      options: [
        "Zat yang kehilangan elektron",
        "Zat yang menerima elektron",
        "Zat yang teroksidasi",
        "Zat yang berubah menjadi gas"
      ],
      answer: "Zat yang kehilangan elektron"
    },
    {
      question: "11. Bahasa Inggris: What is the meaning of the word 'reliable'?",
      options: ["Untrustworthy", "Honest", "Dependable", "Unreliable"],
      answer: "Dependable"
    },
    {
      question: "12. Ekonomi: Apa yang dimaksud dengan pasar oligopoli?",
      options: [
        "Pasar yang hanya memiliki beberapa penjual besar",
        "Pasar yang terdiri dari banyak pembeli dan penjual",
        "Pasar yang dimonopoli oleh satu perusahaan",
        "Pasar yang sangat terpecah-pecah"
      ],
      answer: "Pasar yang hanya memiliki beberapa penjual besar"
    },
    {
      question: "13. Matematika: Tentukan nilai dari \( \frac{d}{dx} (3x^2 - 2x + 1) \).",
      options: ["\( 6x - 2 \)", "\( 6x + 2 \)", "\( 3x - 2 \)", "\( 6x - 1 \)"],
      answer: "\( 6x - 2 \)"
    },
    {
      question: "14. Biologi: Apa fungsi dari klorofil dalam fotosintesis?",
      options: [
        "Menyerap cahaya untuk proses fotosintesis",
        "Menstabilkan suhu tubuh",
        "Membantu pencernaan",
        "Menghasilkan oksigen"
      ],
      answer: "Menyerap cahaya untuk proses fotosintesis"
    },
    {
      question: "15. Fisika: Jika gaya yang bekerja pada benda adalah 20 N dan benda tersebut bergerak sejauh 5 meter, berapakah usaha yang dilakukan?",
      options: ["100 J", "50 J", "10 J", "200 J"],
      answer: "100 J"
    },
    {
      question: "16. Kimia: Dalam reaksi asam-basa, apa yang dimaksud dengan pH?",
      options: [
        "Ukuran konsentrasi ion hidrogen dalam larutan",
        "Ukuran konsentrasi garam dalam larutan",
        "Ukuran suhu larutan",
        "Ukuran konsentrasi oksigen dalam larutan"
      ],
      answer: "Ukuran konsentrasi ion hidrogen dalam larutan"
    },
    {
      question: "17. Bahasa Inggris: Choose the correct form of the verb: 'They ____ to the park tomorrow.'",
      options: [
        "go",
        "goes",
        "going",
        "will go"
      ],
      answer: "will go"
    },
    {
      question: "18. Ekonomi: Apa yang dimaksud dengan permintaan inelastis?",
      options: [
        "Permintaan yang tidak berubah meskipun harga berubah",
        "Permintaan yang sangat peka terhadap perubahan harga",
        "Permintaan yang bergantung pada iklan",
        "Permintaan yang meningkat jika harga turun"
      ],
      answer: "Permintaan yang tidak berubah meskipun harga berubah"
    },
    {
      question: "19. Matematika: Tentukan hasil dari \( \log_2 32 \).",
      options: ["5", "6", "4", "3"],
      answer: "5"
    },
    {
      question: "20. Biologi: Apa yang dimaksud dengan osmosis?",
      options: [
        "Perpindahan air melalui membran semipermeabel dari konsentrasi rendah ke tinggi",
        "Proses penyaringan zat dalam ginjal",
        "Perpindahan ion dalam sel",
        "Penyatuan dua sel"
      ],
      answer: "Perpindahan air melalui membran semipermeabel dari konsentrasi rendah ke tinggi"
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