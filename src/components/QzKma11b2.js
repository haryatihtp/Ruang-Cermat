import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Bagaimana hubungan antara perubahan entalpi (\u0394H) dan energi bebas Gibbs (\u0394G) dalam suatu reaksi spontan?", options: ["\u0394G = \u0394H + T\u0394S", "\u0394G = \u0394H - T\u0394S", "\u0394G = \u0394H / T\u0394S", "\u0394G = \u0394S - T\u0394H"], answer: "\u0394G = \u0394H - T\u0394S" },
  
    { question: "2. Apa yang dimaksud dengan reaksi eksotermik dan endotermik dalam hukum termokimia?", options: ["Reaksi eksotermik melepaskan panas, sementara reaksi endotermik menyerap panas", "Reaksi eksotermik menyerap panas, sementara reaksi endotermik melepaskan panas", "Reaksi eksotermik tidak melibatkan perubahan panas, sementara reaksi endotermik melepaskan panas", "Reaksi eksotermik dan endotermik keduanya tidak melibatkan perubahan energi"], answer: "Reaksi eksotermik melepaskan panas, sementara reaksi endotermik menyerap panas" },
  
    { question: "3. Jika \u0394H untuk suatu reaksi adalah negatif, maka reaksi tersebut bersifat?", options: ["Eksotermik", "Endotermik", "Isotermik", "Spontan"], answer: "Eksotermik" },
  
    { question: "4. Dalam hukum Hess, perubahan entalpi untuk suatu reaksi tergantung pada?", options: ["Jumlah energi yang dikeluarkan atau diserap selama reaksi", "Jumlah perubahan energi pada suhu dan tekanan konstan", "Suhu tempat reaksi berlangsung", "Jumlah reaksi yang terlibat"], answer: "Jumlah energi yang dikeluarkan atau diserap selama reaksi" },
  
    { question: "5. Hukum pertama termodinamika menyatakan bahwa:", options: ["Energi tidak dapat diciptakan atau dihancurkan, hanya dapat berubah bentuk", "Entalpi total sistem selalu konstan", "Entropi total sistem selalu meningkat", "Energi total sistem adalah nol"], answer: "Energi tidak dapat diciptakan atau dihancurkan, hanya dapat berubah bentuk" },
  
    { question: "6. Apa yang dimaksud dengan entalpi (\u0394H) dalam konteks hukum termokimia?", options: ["Perubahan energi pada tekanan konstan", "Jumlah energi yang dilepaskan dalam reaksi eksotermik", "Perubahan suhu dalam sistem", "Jumlah gas dalam reaksi"], answer: "Perubahan energi pada tekanan konstan" },
  
    { question: "7. Dalam suatu reaksi kimia, jika \u0394H negatif dan \u0394S positif, maka reaksi tersebut bersifat?", options: ["Spontan pada semua suhu", "Spontan hanya pada suhu rendah", "Tidak spontan pada suhu tinggi", "Tidak spontan pada semua suhu"], answer: "Spontan pada semua suhu" },
  
    { question: "8. Apa yang dimaksud dengan reaksi yang mengalami perubahan entalpi (\u0394H) positif?", options: ["Reaksi endotermik", "Reaksi eksotermik", "Reaksi yang menghasilkan panas", "Reaksi yang tidak melibatkan perubahan energi"], answer: "Reaksi endotermik" },
  
    { question: "9. Hukum kedua termodinamika menyatakan bahwa:", options: ["Entropi total sistem selalu meningkat", "Proses spontan hanya terjadi pada suhu tinggi", "Energi total dalam reaksi kimia tetap konstan", "Entalpi sistem cenderung menurun"], answer: "Entropi total sistem selalu meningkat" },
  
    { question: "10. Jika \u0394H untuk suatu reaksi adalah -150 kJ/mol, maka reaksi tersebut bersifat?", options: ["Eksotermik", "Endotermik", "Isotermik", "Tidak dapat ditentukan"], answer: "Eksotermik" },
  
    { question: "11. Apa yang dimaksud dengan entropi (S) dalam hukum termokimia?", options: ["Ukuran ketidakteraturan atau kekacauan dalam sistem", "Jumlah panas yang diterima atau dilepaskan pada tekanan konstan", "Jumlah energi yang dibutuhkan untuk memulai reaksi", "Perubahan entalpi dalam reaksi"], answer: "Ukuran ketidakteraturan atau kekacauan dalam sistem" },
  
    { question: "12. Apa hubungan antara entalpi (\u0394H) dan entropi (\u0394S) dalam menentukan spontanitas suatu reaksi?", options: ["Reaksi cenderung spontan jika \u0394H negatif dan \u0394S positif", "Reaksi selalu spontan jika \u0394H positif", "Reaksi cenderung spontan jika \u0394H positif dan \u0394S negatif", "Reaksi tidak dapat spontan jika \u0394H negatif"], answer: "Reaksi cenderung spontan jika \u0394H negatif dan \u0394S positif" },
  
    { question: "13. Apa yang dimaksud dengan energi bebas Gibbs (\u0394G) dalam hukum termokimia?", options: ["Energi yang tersedia untuk melakukan kerja pada suhu dan tekanan konstan", "Energi yang dilepaskan selama reaksi", "Energi yang diperlukan untuk memulai reaksi", "Energi dalam bentuk panas"], answer: "Energi yang tersedia untuk melakukan kerja pada suhu dan tekanan konstan" },
  
    { question: "14. Dalam reaksi kimia, apa yang dimaksud dengan perubahan entalpi (\u0394H) negatif?", options: ["Energi dilepaskan oleh sistem", "Energi diserap oleh sistem", "Tidak ada perubahan energi", "Energi dilepaskan oleh lingkungan"], answer: "Energi dilepaskan oleh sistem" },
  
    { question: "15. Apakah yang dimaksud dengan hukum Hess?", options: ["Jumlah perubahan entalpi dalam reaksi adalah tetap, tidak tergantung jalur reaksi", "Perubahan entalpi dalam reaksi tergantung pada suhu dan tekanan", "Jumlah energi yang dikeluarkan atau diserap dalam reaksi sama dengan entalpi", "Proses spontan hanya terjadi pada suhu tinggi"], answer: "Jumlah perubahan entalpi dalam reaksi adalah tetap, tidak tergantung jalur reaksi" },
  
    { question: "16. Apa yang dimaksud dengan reaksi isotermik?", options: ["Reaksi yang terjadi pada suhu tetap", "Reaksi yang terjadi pada tekanan tetap", "Reaksi yang tidak mengalami perubahan entalpi", "Reaksi yang tidak melibatkan perubahan energi"], answer: "Reaksi yang terjadi pada suhu tetap" },
  
    { question: "17. Pada suhu tinggi, reaksi dengan perubahan entropi (\u0394S) positif akan cenderung:", options: ["Spontan", "Tidak spontan", "Isotermik", "Endotermik"], answer: "Spontan" },
  
    { question: "18. Jika entalpi (\u0394H) untuk suatu reaksi adalah positif dan entropi (\u0394S) adalah negatif, maka reaksi tersebut akan cenderung:", options: ["Tidak spontan", "Spontan pada suhu tinggi", "Spontan pada suhu rendah", "Isotermik"], answer: "Tidak spontan" },
  
    { question: "19. Apa yang terjadi jika perubahan entalpi (\u0394H) dan perubahan entropi (\u0394S) untuk suatu reaksi adalah nol?", options: ["Reaksi tersebut tidak akan berlangsung secara spontan", "Reaksi tersebut akan spontan pada suhu rendah", "Reaksi tersebut akan spontan pada suhu tinggi", "Reaksi tersebut akan selalu spontan"], answer: "Reaksi tersebut tidak akan berlangsung secara spontan" },
  
    { question: "20. Dalam suatu reaksi kimia, jika \u0394H positif dan \u0394S negatif, maka reaksi tersebut bersifat?", options: ["Tidak spontan pada semua suhu", "Spontan hanya pada suhu tinggi", "Spontan hanya pada suhu rendah", "Spontan pada semua suhu"], answer: "Tidak spontan pada semua suhu" }
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
      <h1>Kuis Kimia Kelas XII</h1>
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