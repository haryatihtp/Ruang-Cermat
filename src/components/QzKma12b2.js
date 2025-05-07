import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { 
      question: "1. Dalam sel volta Zn-Cu, jika konsentrasi ion Zn2+ dinaikkan dua kali lipat, bagaimana potensi sel berubah? (E°Zn2+/Zn = -0,76 V; E°Cu2+/Cu = +0,34 V)", 
      options: ["Potensi sel meningkat", "Potensi sel menurun", "Potensi sel tetap", "Tidak dapat ditentukan"], 
      answer: "Potensi sel menurun" 
    },
    { 
      question: "2. Jika aluminium direduksi dalam suatu proses elektrolisis dengan arus 5 ampere selama 3 jam, berapa gram aluminium yang dihasilkan? (Ar Al = 27)", 
      options: ["5,04 gram", "10,08 gram", "15,12 gram", "20,16 gram"], 
      answer: "5,04 gram" 
    },
    { 
      question: "3. Dalam sel elektrolisis NaCl cair, apa produk utama yang dihasilkan pada katoda?", 
      options: ["Na", "Cl2", "H2", "O2"], 
      answer: "Na" 
    },
    { 
      question: "4. Sel volta menggunakan elektroda Fe dan Ag. Jika reaksi yang terjadi adalah Fe → Fe2+ + 2e- dan Ag+ + e- → Ag, tentukan reaksi sel netto.", 
      options: ["Fe + 2Ag+ → Fe2+ + 2Ag", "Fe2+ + 2Ag → Fe + 2Ag+", "Fe + Ag+ → Fe2+ + Ag", "Tidak ada reaksi"], 
      answer: "Fe + 2Ag+ → Fe2+ + 2Ag" 
    },
    { 
      question: "5. Hitung nilai ∆G (dalam kJ) untuk reaksi sel volta dengan E° = 1,10 V. (F = 96500 C/mol)", 
      options: ["-212,3 kJ", "-106,15 kJ", "212,3 kJ", "106,15 kJ"], 
      answer: "-212,3 kJ" 
    },
    { 
      question: "6. Jika elektroda tembaga dicelupkan dalam larutan CuSO4 0,1 M dan 1 M, mana yang menjadi anoda?", 
      options: ["Elektroda dalam larutan 0,1 M", "Elektroda dalam larutan 1 M", "Keduanya menjadi anoda", "Tidak ada anoda"], 
      answer: "Elektroda dalam larutan 0,1 M" 
    },
    { 
      question: "7. Apa alasan utama mengapa logam alkali tidak digunakan sebagai elektroda pada sel volta?", 
      options: ["Reaktivitas tinggi", "Tidak larut dalam air", "Tidak menghasilkan potensial", "Mahal dan sulit diperoleh"], 
      answer: "Reaktivitas tinggi" 
    },
    { 
      question: "8. Dalam reaksi redoks, bagaimana oksidator dan reduktor diidentifikasi?", 
      options: ["Oksidator menerima elektron, reduktor melepas elektron", "Oksidator melepas elektron, reduktor menerima elektron", "Keduanya menerima elektron", "Keduanya melepas elektron"], 
      answer: "Oksidator menerima elektron, reduktor melepas elektron" 
    },
    { 
      question: "9. Berapa mol elektron yang diperlukan untuk mengendapkan 1 mol logam Mg?", 
      options: ["1 mol", "2 mol", "3 mol", "4 mol"], 
      answer: "2 mol" 
    },
    { 
      question: "10. Apa fungsi utama garam jembatan dalam sel galvanik?", 
      options: ["Mengalirkan ion untuk menjaga keseimbangan muatan", "Menyediakan jalur untuk elektron", "Memisahkan larutan anoda dan katoda", "Meningkatkan reaksi kimia"], 
      answer: "Mengalirkan ion untuk menjaga keseimbangan muatan" 
    },
    { 
      question: "11. Dalam elektrolisis air murni, gas apa yang dihasilkan di anoda?", 
      options: ["Oksigen", "Hidrogen", "Nitrogen", "Karbon dioksida"], 
      answer: "Oksigen" 
    },
    { 
      question: "12. Tentukan bilangan oksidasi kromium dalam senyawa K2Cr2O7.", 
      options: ["+3", "+6", "+7", "+12"], 
      answer: "+6" 
    },
    { 
      question: "13. Apa peran air dalam elektrolisis larutan NaCl?", 
      options: ["Sebagai pelarut", "Sebagai oksidator", "Sebagai reduktor", "Sebagai elektrolit"], 
      answer: "Sebagai pelarut" 
    },
    { 
      question: "14. Jika nilai E° untuk reaksi redoks adalah negatif, apa artinya?", 
      options: ["Reaksi tidak spontan", "Reaksi spontan", "Reaksi berada dalam kesetimbangan", "Reaksi menghasilkan energi"], 
      answer: "Reaksi tidak spontan" 
    },
    { 
      question: "15. Pada elektrolisis CuSO4 menggunakan elektroda grafit, apa produk yang dihasilkan di anoda?", 
      options: ["Oksigen", "Hidrogen", "Tembaga", "Sulfur dioksida"], 
      answer: "Oksigen" 
    },
    { 
      question: "16. Apa yang terjadi jika dua elektroda dari logam yang sama digunakan dalam sel volta?", 
      options: ["Tidak ada arus listrik", "Arus listrik besar", "Larutan menjadi jenuh", "Elektroda larut"], 
      answer: "Tidak ada arus listrik" 
    },
    { 
      question: "17. Hitung massa logam perak yang dihasilkan dari elektrolisis larutan AgNO3 dengan arus 2 ampere selama 2 jam. (Ar Ag = 108)", 
      options: ["8,07 gram", "4,03 gram", "12,1 gram", "16,14 gram"], 
      answer: "8,07 gram" 
    },
    { 
      question: "18. Sebuah baterai memiliki E° sebesar 1,5 V. Apa yang terjadi jika baterai tersebut mencapai kesetimbangan?", 
      options: ["E = 0 V", "E > 0 V", "E < 0 V", "E tetap sama"], 
      answer: "E = 0 V" 
    },
    { 
      question: "19. Apa nama diagram yang menunjukkan perubahan energi potensial dalam reaksi redoks?", 
      options: ["Diagram Latimer", "Diagram Frost", "Diagram Ellingham", "Diagram Pourbaix"], 
      answer: "Diagram Frost" 
    },
    { 
      question: "20. Dalam sel bahan bakar hidrogen, apa produk akhir reaksinya?", 
      options: ["Air", "Oksigen", "Hidrogen", "Karbon dioksida"], 
      answer: "Air" 
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