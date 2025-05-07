import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { 
      question: "1. Sebuah larutan memiliki titik didih 101,2°C. Jika diketahui tetapan kenaikan titik didih air (Kb) adalah 0,52°C/m, tentukan molalitas larutan tersebut!", 
      options: ["1 m", "2 m", "2,5 m", "3 m"], 
      answer: "2,5 m" 
    },
    { 
      question: "2. Hitung tekanan osmotik larutan glukosa 0,1 M pada suhu 27°C (R = 0,082 L atm/mol K)!", 
      options: ["2,46 atm", "3,69 atm", "0,82 atm", "1,23 atm"], 
      answer: "2,46 atm" 
    },
    { 
      question: "3. Sebuah larutan elektrolit memiliki penurunan titik beku sebesar 1,86°C. Jika diketahui tetapan penurunan titik beku air (Kf) adalah 1,86°C/m dan faktor van 't Hoff (i) untuk elektrolit tersebut adalah 2, tentukan molalitas larutan!", 
      options: ["0,5 m", "1 m", "1,5 m", "2 m"], 
      answer: "0,5 m" 
    },
    { 
      question: "4. Sebuah larutan NaCl dengan konsentrasi 0,2 m menghasilkan tekanan osmotik sebesar 9,84 atm pada suhu tertentu. Berapakah nilai faktor van 't Hoff (i) untuk larutan tersebut?", 
      options: ["1", "1,8", "2", "2,5"], 
      answer: "2" 
    },
    { 
      question: "5. Jika larutan urea dan larutan CaCl2 memiliki molalitas yang sama, manakah larutan yang memiliki penurunan titik beku lebih besar? (Diketahui urea tidak terionisasi, sedangkan CaCl2 terionisasi sempurna)", 
      options: ["Larutan urea", "Larutan CaCl2", "Keduanya sama", "Tidak bisa ditentukan"], 
      answer: "Larutan CaCl2" 
    },
    { 
      question: "6. Tentukan massa NaCl yang harus dilarutkan dalam 500 gram air agar titik bekunya turun sebesar 3,72°C! (Kf air = 1,86°C/m, NaCl terionisasi sempurna, Ar Na = 23, Ar Cl = 35,5)", 
      options: ["29,25 gram", "58,5 gram", "117 gram", "234 gram"], 
      answer: "58,5 gram" 
    },
    { 
      question: "7. Sebuah larutan dengan massa solut tidak diketahui memiliki tekanan uap lebih rendah sebesar 0,2 atm dibandingkan pelarut murni. Jika tekanan uap pelarut murni adalah 1 atm, berapakah fraksi mol solut dalam larutan tersebut?", 
      options: ["0,1", "0,2", "0,8", "0,9"], 
      answer: "0,2" 
    },
    { 
      question: "8. Sebuah larutan elektrolit dengan massa 10 gram memiliki molalitas 0,5 m. Jika massa molar solut adalah 100 g/mol, tentukan faktor van 't Hoff (i)!", 
      options: ["1", "2", "3", "4"], 
      answer: "2" 
    },
    { 
      question: "9. Larutan A memiliki penurunan tekanan uap lebih besar dibandingkan larutan B. Apa yang dapat disimpulkan dari sifat kedua larutan tersebut?", 
      options: [
        "Larutan A memiliki fraksi mol solut lebih besar",
        "Larutan B memiliki fraksi mol solut lebih besar",
        "Keduanya memiliki fraksi mol solut sama",
        "Tekanan uap pelarut A lebih rendah daripada pelarut B"
      ], 
      answer: "Larutan A memiliki fraksi mol solut lebih besar" 
    },
    { 
      question: "10. Pada larutan CaCl2 dengan molalitas 1 m, faktor van 't Hoff (i) adalah 2,8. Berapakah penurunan titik beku yang terjadi? (Kf air = 1,86°C/m)", 
      options: ["3,72°C", "5,21°C", "1,86°C", "2,8°C"], 
      answer: "5,21°C" 
    },
    { 
      question: "11. Jika baterai galvanik menggunakan Zn dan Cu dengan larutan masing-masing 1 M, bagaimana potensial sel akan berubah jika konsentrasi ion Zn2+ dinaikkan?", 
      options: ["Potensial sel meningkat", "Potensial sel menurun", "Potensial sel tetap", "Tidak bisa ditentukan"], 
      answer: "Potensial sel menurun" 
    },
    { 
      question: "12. Pada elektrolisis larutan NaCl jenuh, gas apa yang terbentuk pada katoda?", 
      options: ["Gas hidrogen", "Gas oksigen", "Gas klorin", "Tidak ada gas"], 
      answer: "Gas hidrogen" 
    },
    { 
      question: "13. Sebuah sel elektrokimia memiliki potensial standar E° sebesar 1,1 V. Apa yang akan terjadi pada potensial sel jika suhu dinaikkan?", 
      options: ["Potensial sel meningkat", "Potensial sel menurun", "Potensial sel tetap", "Bergantung pada entropi reaksi"], 
      answer: "Bergantung pada entropi reaksi" 
    },
    { 
      question: "14. Reaksi mana yang terjadi pada anoda dalam sel volta dengan elektroda Zn dan Cu?", 
      options: ["Zn → Zn2+ + 2e", "Cu → Cu2+ + 2e", "Zn2+ + 2e → Zn", "Cu2+ + 2e → Cu"], 
      answer: "Zn → Zn2+ + 2e" 
    },
    { 
      question: "15. Bagaimana perubahan konsentrasi ion OH- dalam larutan mempengaruhi reaksi elektrolisis air?", 
      options: ["Mempercepat reaksi", "Memperlambat reaksi", "Tidak ada pengaruh", "Mengubah produk reaksi"], 
      answer: "Mempercepat reaksi" 
    },
    { 
      question: "16. Apa fungsi utama larutan garam jembatan garam dalam sel galvanik?", 
      options: ["Menjaga netralitas ion", "Meningkatkan laju reaksi", "Mencegah korosi", "Mengalirkan elektron"], 
      answer: "Menjaga netralitas ion" 
    },
    { 
      question: "17. Jika elektrolisis dilakukan pada larutan AgNO3 menggunakan elektroda inert, apa yang terjadi pada anoda?", 
      options: ["Gas oksigen terbentuk", "Gas hidrogen terbentuk", "Perak diendapkan", "Tidak ada reaksi"], 
      answer: "Gas oksigen terbentuk" 
    },
    { 
      question: "18. Tentukan nilai potensial standar untuk reaksi spontan antara Fe dan Cu dalam larutan 1 M! (E° Cu = 0,34 V, E° Fe = -0,44 V)", 
      options: ["0,78 V", "-0,78 V", "0,10 V", "-0,10 V"], 
      answer: "0,78 V" 
    },
    { 
      question: "19. Sebuah baterai lithium-ion mengalami penurunan kapasitas setelah penggunaan berkali-kali. Apa yang menyebabkan hal ini?", 
      options: ["Korosi elektroda", "Pembentukan lapisan SEI", "Pengurangan ion litium", "Semua benar"], 
      answer: "Semua benar" 
    },
    { 
      question: "20. Pada reaksi elektrolisis larutan KI, apa yang dihasilkan pada katoda?", 
      options: ["Gas hidrogen", "Gas oksigen", "Gas iodin", "Tidak ada gas"], 
      answer: "Gas hidrogen" 
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