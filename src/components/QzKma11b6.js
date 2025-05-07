import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Mengapa garam yang berasal dari asam kuat dan basa kuat tidak mengalami hidrolisis?", options: ["Karena ion-ionnya tidak berinteraksi dengan air", "Karena garam ini terdisosiasi sepenuhnya", "Karena pH larutan tetap netral", "Karena garam ini mengandung ion OH-"], answer: "Karena pH larutan tetap netral" },
  
    { question: "2. Jika garam natrium asetat (CH3COONa) dilarutkan dalam air, apa yang akan terjadi pada pH larutan tersebut?", options: ["Larutan akan bersifat asam", "Larutan akan bersifat netral", "Larutan akan bersifat basa", "Larutan akan terurai menjadi gas"], answer: "Larutan akan bersifat basa" },
  
    { question: "3. Apa yang terjadi jika larutan garam ammonium klorida (NH4Cl) dicampur dengan air?", options: ["Ion NH4+ akan melepaskan ion H+", "Ion NH4+ akan melepaskan ion OH-", "Ion Cl- akan berinteraksi dengan air", "Larutan akan tetap netral"], answer: "Ion NH4+ akan melepaskan ion H+" },
  
    { question: "4. Pada hidrolisis garam, apa yang dimaksud dengan reaksi antara ion garam dengan air?", options: ["Reaksi ionisasi", "Reaksi netralisasi", "Reaksi asam-basa", "Reaksi redoks"], answer: "Reaksi asam-basa" },
  
    { question: "5. Mengapa larutan dari garam seperti NaCN bersifat basa?", options: ["Karena ion CN- bereaksi dengan air menghasilkan OH-", "Karena ion Na+ bersifat asam", "Karena CN- tidak bereaksi dengan air", "Karena Na+ bersifat netral dan tidak bereaksi dengan air"], answer: "Karena ion CN- bereaksi dengan air menghasilkan OH-" },
  
    { question: "6. Bagaimana pH larutan garam dari asam lemah dan basa lemah?", options: ["pH akan tergantung pada kekuatan asam dan basa", "pH selalu netral", "pH akan lebih rendah dari 7", "pH akan selalu lebih tinggi dari 7"], answer: "pH akan tergantung pada kekuatan asam dan basa" },
  
    { question: "7. Apa yang akan terjadi jika garam dari asam kuat dan basa lemah dilarutkan dalam air?", options: ["Larutan akan bersifat asam", "Larutan akan bersifat basa", "Larutan akan bersifat netral", "Larutan tidak terdisosiasi dalam air"], answer: "Larutan akan bersifat asam" },
  
    { question: "8. Garam dari asam lemah dan basa kuat mengarah ke pH larutan yang bersifat?", options: ["Basa", "Asam", "Netral", "Tergantung pada konsentrasi garam"], answer: "Basa" },
  
    { question: "9. Apa yang dimaksud dengan hidrolisis garam?", options: ["Reaksi garam dengan air menghasilkan asam atau basa", "Reaksi garam dengan asam menghasilkan basa", "Reaksi garam dengan basa menghasilkan asam", "Proses garam mengendap dalam air"], answer: "Reaksi garam dengan air menghasilkan asam atau basa" },
  
    { question: "10. Mengapa garam ammonium nitrat (NH4NO3) bersifat asam dalam larutan?", options: ["Karena NH4+ adalah asam lemah yang melepaskan ion H+", "Karena NO3- menghasilkan ion OH- dalam larutan", "Karena NH4NO3 tidak terdisosiasi dalam air", "Karena NH4NO3 adalah garam dari basa kuat dan asam kuat"], answer: "Karena NH4+ adalah asam lemah yang melepaskan ion H+" },
  
    { question: "11. Bagaimana cara menentukan apakah garam akan mengalami hidrolisis?", options: ["Dengan mengetahui apakah garam berasal dari asam kuat dan basa kuat", "Dengan mengetahui pH larutan setelah garam dilarutkan", "Dengan mengetahui jenis ion yang terbentuk", "Dengan mengukur suhu larutan"], answer: "Dengan mengetahui jenis ion yang terbentuk" },
  
    { question: "12. Garam apa yang tidak akan mengalami hidrolisis?", options: ["NaCl", "K2SO4", "NH4Cl", "NaCH3COO"], answer: "NaCl" },
  
    { question: "13. Dalam larutan hidrolisis garam, apa yang dimaksud dengan konstanta hidrolisis?", options: ["Konstanta yang menunjukkan kecenderungan ion garam untuk bereaksi dengan air", "Konstanta yang menunjukkan kekuatan asam", "Konstanta yang menunjukkan kekuatan basa", "Konstanta yang menunjukkan kekuatan ion OH- dalam air"], answer: "Konstanta yang menunjukkan kecenderungan ion garam untuk bereaksi dengan air" },
  
    { question: "14. Apa yang dimaksud dengan hidrolisis basa dalam larutan garam?", options: ["Basa bereaksi dengan air menghasilkan ion OH-", "Basa bereaksi dengan air menghasilkan ion H+", "Basa terionisasi dalam air", "Basa menghasilkan gas dalam larutan"], answer: "Basa bereaksi dengan air menghasilkan ion OH-" },
  
    { question: "15. Bagaimana pengaruh hidrolisis terhadap pH larutan garam dari asam lemah dan basa kuat?", options: ["pH larutan akan meningkat", "pH larutan akan menurun", "pH larutan akan tetap konstan", "pH larutan akan tergantung pada jenis asam dan basa"], answer: "pH larutan akan meningkat" },
  
    { question: "16. Apa yang terjadi pada larutan garam yang berasal dari asam kuat dan basa lemah?", options: ["Larutan akan memiliki pH asam", "Larutan akan memiliki pH basa", "Larutan akan memiliki pH netral", "Larutan akan tetap tidak terdisosiasi"], answer: "Larutan akan memiliki pH asam" },
  
    { question: "17. Apa yang akan terjadi jika garam natrium hidroksida (NaOH) dilarutkan dalam air?", options: ["Larutan akan bersifat basa", "Larutan akan bersifat asam", "Larutan akan bersifat netral", "Larutan akan terurai menjadi gas"], answer: "Larutan akan bersifat basa" },
  
    { question: "18. Bagaimana hubungan antara nilai pKa dan pH pada larutan hidrolisis garam?", options: ["Semakin kecil pKa, semakin asam larutan", "Semakin besar pKa, semakin basa larutan", "Nilai pKa tidak mempengaruhi pH", "Semakin besar pKa, semakin asam larutan"], answer: "Semakin kecil pKa, semakin asam larutan" },
  
    { question: "19. Jika pH larutan garam adalah 3, dapatkah kita menyimpulkan bahwa garam tersebut berasal dari asam kuat?", options: ["Tidak, karena pH yang sangat rendah menunjukkan adanya asam lemah", "Tidak, karena asam kuat hanya menghasilkan pH netral", "Ya, karena asam kuat menghasilkan pH rendah", "Ya, karena garam asam kuat selalu memiliki pH rendah"], answer: "Ya, karena asam kuat menghasilkan pH rendah" },
  
    { question: "20. Dalam reaksi hidrolisis garam, apa yang menjadi faktor penentu utama apakah larutan akan bersifat asam atau basa?", options: ["Jenis asam dan basa yang membentuk garam", "Konsentrasi garam dalam larutan", "Suhu larutan", "Jenis air yang digunakan"], answer: "Jenis asam dan basa yang membentuk garam" }
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