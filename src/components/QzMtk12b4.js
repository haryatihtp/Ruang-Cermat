import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Dari sebuah kotak yang berisi 5 bola merah dan 3 bola biru, diambil satu bola secara acak. Berapakah peluang terambilnya bola merah?",
      options: ["5/8", "3/8", "1/2", "2/3"],
      answer: "5/8"
    },
    {
      question: "2. Sebuah dadu dilempar sekali. Berapakah peluang munculnya bilangan prima?",
      options: ["1/2", "1/3", "2/3", "5/6"],
      answer: "1/2"
    },
    {
      question: "3. Sebuah koin dilempar dua kali. Berapakah peluang munculnya satu gambar dan satu angka?",
      options: ["1/4", "1/3", "1/2", "3/4"],
      answer: "1/2"
    },
    {
      question: "4. Dari sebuah kotak berisi 4 bola merah dan 6 bola putih, diambil dua bola sekaligus. Berapakah peluang kedua bola yang terambil berwarna merah?",
      options: ["1/15", "2/15", "2/45", "1/45"],
      answer: "2/15"
    },
    {
      question: "5. Dalam sebuah kelas terdapat 12 siswa laki-laki dan 8 siswa perempuan. Jika dipilih satu siswa secara acak, berapakah peluang siswa yang terpilih adalah perempuan?",
      options: ["1/2", "2/5", "2/3", "3/5"],
      answer: "2/5"
    },
    {
      question: "6. Sebuah dadu dan sebuah koin dilempar bersamaan. Berapakah peluang muncul angka genap pada dadu dan gambar pada koin?",
      options: ["1/2", "1/4", "1/6", "1/12"],
      answer: "1/4"
    },
    {
      question: "7. Dari sebuah dek kartu remi, diambil satu kartu secara acak. Berapakah peluang terambilnya kartu As?",
      options: ["1/13", "1/26", "1/52", "1/4"],
      answer: "1/13"
    },
    {
      question: "8. Dua buah dadu dilempar bersamaan. Berapakah peluang jumlah kedua dadu adalah 7?",
      options: ["1/12", "1/6", "1/8", "1/36"],
      answer: "1/6"
    },
    {
      question: "9. Sebuah kotak berisi 4 bola merah, 3 bola hijau, dan 5 bola biru. Diambil satu bola secara acak. Berapakah peluang bola yang terambil bukan bola merah?",
      options: ["7/12", "3/12", "4/12", "5/12"],
      answer: "7/12"
    },
    {
      question: "10. Dalam sebuah ujian terdapat 10 soal pilihan ganda dengan 4 pilihan jawaban. Jika seseorang menjawab secara acak, berapakah peluang menjawab benar satu soal?",
      options: ["1/2", "1/4", "1/5", "1/6"],
      answer: "1/4"
    },
    {
      question: "11. Dari sebuah kantong yang berisi 3 kelereng merah, 4 kelereng hijau, dan 5 kelereng biru, diambil dua kelereng sekaligus. Berapakah peluang terambilnya satu kelereng merah dan satu kelereng hijau?",
      options: ["1/11", "2/11", "3/11", "4/11"],
      answer: "4/11"
    },
    {
      question: "12. Dua buah koin dilempar bersamaan. Berapakah peluang muncul dua gambar?",
      options: ["1/2", "1/4", "1/3", "1/8"],
      answer: "1/4"
    },
    {
      question: "13. Sebuah angka dipilih secara acak dari bilangan 1 sampai 20. Berapakah peluang angka yang terpilih adalah kelipatan 3?",
      options: ["1/4", "1/5", "1/3", "1/2"],
      answer: "1/5"
    },
    {
      question: "14. Dari sekumpulan 5 pria dan 4 wanita, dipilih dua orang secara acak. Berapakah peluang terpilihnya satu pria dan satu wanita?",
      options: ["1/3", "5/9", "10/21", "20/36"],
      answer: "20/36"
    },
    {
      question: "15. Sebuah dadu dilempar dua kali. Berapakah peluang muncul angka 6 pada salah satu lemparan?",
      options: ["11/36", "12/36", "13/36", "14/36"],
      answer: "11/36"
    },
    {
      question: "16. Dari sebuah kelompok berisi 10 siswa, 6 siswa dapat bermain gitar. Jika dipilih satu siswa secara acak, berapakah peluang siswa yang dipilih dapat bermain gitar?",
      options: ["1/2", "3/5", "2/3", "4/5"],
      answer: "3/5"
    },
    {
      question: "17. Sebuah tas berisi 5 permen cokelat dan 7 permen mint. Jika diambil dua permen sekaligus, berapakah peluang kedua permen adalah cokelat?",
      options: ["1/22", "2/22", "10/66", "5/66"],
      answer: "10/66"
    },
    {
      question: "18. Dari sebuah dek kartu remi, diambil dua kartu secara acak. Berapakah peluang kedua kartu adalah kartu hati?",
      options: ["1/17", "1/26", "2/51", "13/221"],
      answer: "13/221"
    },
    {
      question: "19. Sebuah bola dipilih dari kantong berisi 8 bola biru, 5 bola merah, dan 7 bola kuning. Berapakah peluang terambil bola biru atau bola merah?",
      options: ["13/20", "14/20", "15/20", "16/20"],
      answer: "13/20"
    },
    {
      question: "20. Sebuah dadu dilempar tiga kali. Berapakah peluang semua angka yang muncul adalah bilangan genap?",
      options: ["1/2", "1/4", "1/8", "1/12"],
      answer: "1/8"
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
