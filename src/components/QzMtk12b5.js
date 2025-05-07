import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Berapa banyak bilangan yang dapat dibentuk dari angka 1, 2, 3, dan 4 jika setiap angka hanya boleh digunakan satu kali?",
      options: ["16", "24", "20", "12"],
      answer: "24"
    },
    {
      question: "2. Dalam sebuah rapat, terdapat 6 orang. Berapa banyak cara duduk melingkar yang dapat dilakukan?",
      options: ["120", "720", "60", "24"],
      answer: "120"
    },
    {
      question: "3. Berapa banyak susunan huruf yang dapat dibuat dari kata 'MATEMATIKA'?",
      options: ["30240", "15120", "7560", "3780"],
      answer: "15120"
    },
    {
      question: "4. Dari 10 siswa, dipilih 3 siswa untuk menjadi ketua, wakil ketua, dan sekretaris. Berapakah banyak susunan yang mungkin?",
      options: ["720", "120", "504", "360"],
      answer: "720"
    },
    {
      question: "5. Sebuah tim berisi 8 orang ingin memilih 4 orang untuk bermain. Berapa banyak cara memilih tim tersebut?",
      options: ["70", "56", "28", "24"],
      answer: "70"
    },
    {
      question: "6. Dari 7 huruf yang berbeda, berapa banyak cara menyusun 4 huruf jika susunannya diperhatikan?",
      options: ["840", "720", "5040", "210"],
      answer: "840"
    },
    {
      question: "7. Dari 8 siswa, dipilih 5 siswa untuk bergabung dalam kelompok studi. Berapa banyak cara memilih kelompok tersebut?",
      options: ["56", "70", "120", "168"],
      answer: "56"
    },
    {
      question: "8. Sebuah restoran memiliki 5 makanan pembuka dan 4 makanan penutup. Berapa banyak kombinasi yang bisa dipilih untuk satu makanan pembuka dan satu makanan penutup?",
      options: ["20", "9", "12", "25"],
      answer: "20"
    },
    {
      question: "9. Dalam sebuah perlombaan, terdapat 10 peserta. Berapa banyak cara memilih juara 1, 2, dan 3 jika urutan diperhatikan?",
      options: ["120", "210", "720", "504"],
      answer: "720"
    },
    {
      question: "10. Berapa banyak bilangan ganjil tiga angka yang dapat dibentuk dari angka 1, 2, 3, 4, dan 5 tanpa pengulangan angka?",
      options: ["36", "60", "40", "20"],
      answer: "60"
    },
    {
      question: "11. Dari 6 buku berbeda, berapa banyak cara memilih 3 buku jika urutan buku tidak diperhatikan?",
      options: ["20", "120", "15", "60"],
      answer: "20"
    },
    {
      question: "12. Berapa banyak bilangan genap dua angka yang dapat dibentuk dari angka 1, 2, 3, dan 4 tanpa pengulangan angka?",
      options: ["6", "8", "12", "16"],
      answer: "8"
    },
    {
      question: "13. Dari 5 pria dan 4 wanita, berapa banyak cara memilih 2 pria dan 2 wanita untuk sebuah tim?",
      options: ["90", "60", "120", "45"],
      answer: "90"
    },
    {
      question: "14. Sebuah kelas terdiri dari 12 siswa. Berapa banyak cara memilih 3 siswa untuk mengerjakan tugas kelompok?",
      options: ["220", "132", "44", "24"],
      answer: "220"
    },
    {
      question: "15. Dalam permainan kartu, 13 kartu dipilih dari 52 kartu. Berapa banyak kombinasi yang bisa dibentuk?",
      options: ["2598960", "1048576", "2704156", "131072"],
      answer: "2598960"
    },
    {
      question: "16. Dari 9 bola yang berbeda warna, berapa banyak cara menyusun 4 bola jika urutan diperhatikan?",
      options: ["3024", "126", "72", "504"],
      answer: "3024"
    },
    {
      question: "17. Berapa banyak bilangan empat angka yang dapat dibentuk dari angka 1, 2, 3, 4, dan 5 tanpa pengulangan angka?",
      options: ["120", "60", "360", "240"],
      answer: "120"
    },
    {
      question: "18. Sebuah kelas memiliki 10 siswa. Berapa banyak cara memilih seorang ketua dan wakil ketua jika urutan diperhatikan?",
      options: ["45", "90", "72", "100"],
      answer: "90"
    },
    {
      question: "19. Berapa banyak cara menyusun 3 huruf dari kata 'BELAJAR' jika huruf tidak boleh berulang?",
      options: ["35", "210", "120", "42"],
      answer: "210"
    },
    {
      question: "20. Dari 8 anggota tim, berapa banyak cara memilih ketua dan wakil ketua jika urutan diperhatikan?",
      options: ["56", "42", "72", "64"],
      answer: "56"
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
      <h1>Tryout Kimia Kelas XI: Hukum Termokimia</h1>
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
