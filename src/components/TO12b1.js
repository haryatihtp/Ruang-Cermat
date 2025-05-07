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
      question: "1. Tentukan akar-akar dari persamaan kuadrat \( x^2 - 5x + 6 = 0 \).",
      options: ["x = 2 dan x = 3", "x = 1 dan x = 6", "x = -2 dan x = -3", "x = 0 dan x = 5"],
      answer: "x = 2 dan x = 3"
    },
    {
      question: "2. Hitung nilai integral \( \int_0^2 (x^3 - 2x) dx \).",
      options: ["0", "4", "2", "8"],
      answer: "2"
    },
    // Biologi
    {
      question: "3. Apa yang dimaksud dengan fotosintesis pada tumbuhan?",
      options: [
        "Proses pembentukan makanan dari senyawa anorganik menggunakan energi cahaya.",
        "Proses pernapasan yang menghasilkan energi bagi tumbuhan.",
        "Proses penyerapan air oleh akar.",
        "Proses pencernaan makanan pada tumbuhan."
      ],
      answer: "Proses pembentukan makanan dari senyawa anorganik menggunakan energi cahaya."
    },
    {
      question: "4. Apa fungsi klorofil dalam proses fotosintesis?",
      options: [
        "Mengabsorpsi cahaya untuk mengubahnya menjadi energi kimia.",
        "Membantu proses pernapasan pada tumbuhan.",
        "Menghasilkan oksigen dalam proses fotosintesis.",
        "Menghasilkan karbohidrat pada tumbuhan."
      ],
      answer: "Mengabsorpsi cahaya untuk mengubahnya menjadi energi kimia."
    },
    // Fisika
    {
      question: "5. Sebuah benda dilempar vertikal ke atas dengan kecepatan awal 20 m/s. Berapa ketinggian maksimum yang dicapai?",
      options: ["20 m", "40 m", "30 m", "50 m"],
      answer: "20 m"
    },
    {
      question: "6. Hukum Newton pertama menyatakan bahwa:",
      options: [
        "Suatu benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya.",
        "Suatu benda yang bergerak akan terus bergerak dengan percepatan tetap.",
        "Setiap aksi akan menimbulkan reaksi yang sama besar dan berlawanan arah.",
        "Gaya yang bekerja pada benda sebanding dengan massa benda."
      ],
      answer: "Suatu benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya yang bekerja padanya."
    },
    // Kimia
    {
      question: "7. Reaksi antara hidrogen dan oksigen menghasilkan air, sesuai dengan reaksi kimia: \(2H_2 + O_2 \rightarrow 2H_2O\). Jika 4 mol H2 bereaksi dengan oksigen, berapa mol H2O yang dihasilkan?",
      options: ["4 mol", "2 mol", "8 mol", "6 mol"],
      answer: "4 mol"
    },
    {
      question: "8. pH suatu larutan asam sulfat (H2SO4) adalah 2. Berapa konsentrasi ion H+ dalam larutan tersebut?",
      options: ["10^-2 M", "10^-3 M", "10^-4 M", "10^-5 M"],
      answer: "10^-2 M"
    },
    // Bahasa Inggris
    {
      question: "9. Choose the correct sentence: 'She ____ to the market yesterday.'",
      options: ["go", "went", "going", "gone"],
      answer: "went"
    },
    {
      question: "10. What is the correct form of the word: 'She ____ very well in the competition.'?",
      options: ["did", "do", "done", "does"],
      answer: "did"
    },
    // Ekonomi
    {
      question: "11. Apa yang dimaksud dengan inflasi?",
      options: [
        "Peningkatan harga barang dan jasa secara umum dalam suatu periode waktu.",
        "Penurunan nilai tukar mata uang.",
        "Proses meningkatnya pendapatan per kapita.",
        "Proses pengurangan jumlah uang yang beredar."
      ],
      answer: "Peningkatan harga barang dan jasa secara umum dalam suatu periode waktu."
    },
    {
      question: "12. Fungsi pasar dalam perekonomian adalah untuk:",
      options: [
        "Menyediakan barang dan jasa bagi konsumen.",
        "Mengatur jumlah uang yang beredar.",
        "Menetapkan harga barang dan jasa.",
        "Mengatur jumlah produksi barang."
      ],
      answer: "Menetapkan harga barang dan jasa."
    },
    // Matematika
    {
      question: "13. Hitung determinan matriks \( \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \).",
      options: ["-2", "2", "-1", "0"],
      answer: "-2"
    },
    {
      question: "14. Tentukan nilai limit \( \lim_{x \to 0} \frac{\sin(x)}{x} \).",
      options: ["1", "0", "-1", "\\infty"],
      answer: "1"
    },
    // Biologi
    {
      question: "15. Apa yang dimaksud dengan proses mitosis?",
      options: [
        "Proses pembelahan sel yang menghasilkan dua sel anak yang identik.",
        "Proses pembentukan gamet.",
        "Proses pemecahan glukosa untuk menghasilkan energi.",
        "Proses perbanyakan sel melalui pembelahan."
      ],
      answer: "Proses pembelahan sel yang menghasilkan dua sel anak yang identik."
    },
    {
      question: "16. Organisme yang dapat melakukan fotosintesis adalah:",
      options: [
        "Tumbuhan",
        "Manusia",
        "Hewan",
        "Bakteri"
      ],
      answer: "Tumbuhan"
    },
    // Fisika
    {
      question: "17. Apa yang terjadi pada benda yang bergerak dalam medan gravitasi tanpa hambatan udara?",
      options: [
        "Benda akan mengalami percepatan konstan.",
        "Benda akan bergerak dengan kecepatan tetap.",
        "Benda akan berhenti setelah beberapa saat.",
        "Benda akan terlempar jauh."
      ],
      answer: "Benda akan mengalami percepatan konstan."
    },
    {
      question: "18. Energi potensial gravitasi dihitung dengan rumus: \( E_p = mgh \). Jika massa benda 10 kg dan tinggi 5 m, berapa energi potensialnya?",
      options: ["50 J", "100 J", "200 J", "500 J"],
      answer: "500 J"
    },
    // Kimia
    {
      question: "19. Berdasarkan hukum kekekalan massa, massa total sebelum dan setelah reaksi kimia adalah:",
      options: [
        "Berubah menjadi energi",
        "Tetap",
        "Bertambah",
        "Berkurang"
      ],
      answer: "Tetap"
    },
    {
      question: "20. Manakah yang merupakan contoh reaksi eksotermis?",
      options: [
        "Pembakaran bahan bakar",
        "Pencairan es",
        "Peleburan logam",
        "Reaksi asam-basa"
      ],
      answer: "Pembakaran bahan bakar"
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