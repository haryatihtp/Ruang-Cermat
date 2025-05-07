import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Dalam pemrograman linear, apa tujuan utama dari optimasi?",
      options: ["Memaksimalkan atau meminimalkan fungsi objektif", "Menentukan hasil dengan cepat", "Membuat algoritma lebih efisien", "Mengelola data secara optimal"],
      answer: "Memaksimalkan atau meminimalkan fungsi objektif"
    },
    {
      question: "2. Apa yang dimaksud dengan fungsi objektif dalam pemrograman linear?",
      options: ["Fungsi yang ingin dioptimalkan", "Fungsi yang mendefinisikan batasan", "Fungsi yang tidak memiliki solusi", "Fungsi yang hanya bersifat estimasi"],
      answer: "Fungsi yang ingin dioptimalkan"
    },
    {
      question: "3. Apa yang dimaksud dengan variabel keputusan dalam pemrograman linear?",
      options: ["Variabel yang menentukan solusi", "Variabel acak tanpa nilai pasti", "Variabel yang tidak dapat diubah", "Variabel yang hanya untuk simulasi"],
      answer: "Variabel yang menentukan solusi"
    },
    {
      question: "4. Dalam konteks pemrograman linear, apa yang dimaksud dengan batasan?",
      options: ["Kondisi atau aturan yang membatasi solusi", "Fungsi yang harus selalu maksimum", "Himpunan solusi optimal", "Nilai yang dapat diabaikan"],
      answer: "Kondisi atau aturan yang membatasi solusi"
    },
    {
      question: "5. Apa metode yang sering digunakan untuk menyelesaikan pemrograman linear?",
      options: ["Metode Simplex", "Metode Regresi", "Metode Monte Carlo", "Metode Gauss"],
      answer: "Metode Simplex"
    },
    {
      question: "6. Apa bentuk umum dari batasan dalam pemrograman linear?",
      options: ["Persamaan atau pertidaksamaan linear", "Fungsi eksponensial", "Fungsi logaritma", "Persamaan kuadrat"],
      answer: "Persamaan atau pertidaksamaan linear"
    },
    {
      question: "7. Jika fungsi objektif adalah Z = 3x + 2y, apa nilai Z ketika x = 2 dan y = 3?",
      options: ["12", "13", "10", "9"],
      answer: "12"
    },
    {
      question: "8. Dalam metode grafik, bagaimana menentukan solusi optimal?",
      options: ["Mencari titik sudut area yang feasible", "Menggunakan algoritma iteratif", "Menghitung nilai rata-rata", "Memaksimalkan fungsi batas"],
      answer: "Mencari titik sudut area yang feasible"
    },
    {
      question: "9. Apa itu solusi feasible dalam pemrograman linear?",
      options: ["Solusi yang memenuhi semua batasan", "Solusi terbaik untuk fungsi objektif", "Solusi yang tidak mungkin terjadi", "Solusi yang mendekati nilai optimal"],
      answer: "Solusi yang memenuhi semua batasan"
    },
    {
      question: "10. Jika fungsi batas adalah 2x + y <= 8, apakah titik (2, 2) merupakan solusi feasible?",
      options: ["Ya", "Tidak", "Hanya jika x positif", "Hanya jika y positif"],
      answer: "Ya"
    },
    {
      question: "11. Dalam pemrograman linear, apa arti dari istilah 'region feasible'?",
      options: ["Himpunan semua solusi yang memenuhi batasan", "Himpunan solusi optimal", "Himpunan solusi sementara", "Himpunan solusi yang tidak memenuhi batasan"],
      answer: "Himpunan semua solusi yang memenuhi batasan"
    },
    {
      question: "12. Apa fungsi dari metode Simplex dalam pemrograman linear?",
      options: ["Mencari solusi optimal untuk masalah linear", "Menganalisis data statistik", "Memvalidasi model regresi", "Mengurangi kompleksitas algoritma"],
      answer: "Mencari solusi optimal untuk masalah linear"
    },
    {
      question: "13. Jika fungsi objektif adalah Z = 4x + 5y, dan batasannya adalah x + y <= 6, x >= 0, y >= 0, berapa nilai Z maksimum?",
      options: ["24", "25", "30", "20"],
      answer: "25"
    },
    {
      question: "14. Apa tujuan dari analisis sensitivitas dalam pemrograman linear?",
      options: ["Mengukur pengaruh perubahan parameter pada solusi", "Mengurangi jumlah batasan", "Meningkatkan kecepatan komputasi", "Mencari solusi alternatif"],
      answer: "Mengukur pengaruh perubahan parameter pada solusi"
    },
    {
      question: "15. Dalam pemrograman linear, apa yang dimaksud dengan dualitas?",
      options: ["Hubungan antara masalah primal dan dual", "Solusi dari dua fungsi objektif", "Dua solusi optimal untuk satu masalah", "Fungsi yang tidak memiliki batasan"],
      answer: "Hubungan antara masalah primal dan dual"
    },
    {
      question: "16. Apa perbedaan utama antara pemrograman linear dan pemrograman non-linear?",
      options: ["Fungsi objektif atau batasan berbentuk linear", "Fungsi objektif selalu maksimum", "Hanya ada satu solusi optimal", "Batasan hanya berupa persamaan"],
      answer: "Fungsi objektif atau batasan berbentuk linear"
    },
    {
      question: "17. Apa yang dimaksud dengan slack variable dalam pemrograman linear?",
      options: ["Variabel tambahan untuk mengubah pertidaksamaan menjadi persamaan", "Variabel untuk menghitung error", "Variabel sementara untuk solusi optimal", "Variabel yang digunakan untuk validasi"],
      answer: "Variabel tambahan untuk mengubah pertidaksamaan menjadi persamaan"
    },
    {
      question: "18. Apa peran dari fungsi objektif dalam pemrograman linear?",
      options: ["Menentukan nilai yang harus dioptimalkan", "Mengatur batasan solusi", "Membatasi nilai variabel", "Mengurangi jumlah solusi"],
      answer: "Menentukan nilai yang harus dioptimalkan"
    },
    {
      question: "19. Jika fungsi objektif adalah Z = x + y, dan batasannya adalah x >= 2, y >= 3, berapa nilai Z minimum?",
      options: ["5", "4", "6", "7"],
      answer: "5"
    },
    {
      question: "20. Dalam pemrograman linear, apa arti solusi optimal?",
      options: ["Solusi terbaik yang memenuhi semua batasan", "Solusi yang hanya memenuhi sebagian batasan", "Solusi sementara", "Solusi yang tidak feasible"],
      answer: "Solusi terbaik yang memenuhi semua batasan"
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

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Kuis Matematika Kelas XII</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;
