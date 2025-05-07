import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Tentukan Mr dari urea (CO(NH2)2)! (Ar C = 12; O = 16; N = 14; H = 1)", options: ["A. 60", "B. 61", "C. 62", "D. 59"], answer: "A" },
    { question: "2. Tentukan rumus empiris dari senyawa yang mengandung 59% natrium dan 41% belerang!", options: ["A. NaS", "B. Na2S", "C. NaS2", "D. Na3S"], answer: "B" },
    { question: "3. Tentukan rumus empiris dari senyawa yang mengandung 66,3% klor, 26,2% nitrogen, 7,5% hidrogen!", options: ["A. NH4Cl", "B. NCl", "C. N2H4Cl", "D. NCl2"], answer: "A" },
    { question: "4. Tentukanlah jumlah atom besi yang terdapat dalam 0,5 mol besi!", options: ["A. 3,01 x 10^23", "B. 6,02 x 10^23", "C. 1,51 x 10^23", "D. 1,00 x 10^24"], answer: "A" },
    { question: "5. Hitunglah jumlah masing-masing atom yang terdapat di dalam 2 mol H2O.", options: ["A. 24,08 x 10^23 atom H", "B. 12,04 x 10^23 atom O", "C. Keduanya benar", "D. Keduanya salah"], answer: "C" },
    { question: "6. Berapa mol karbon monoksida yang mengandung 6,02 x 10^21 molekul!", options: ["A. 0,01 mol", "B. 0,02 mol", "C. 0,03 mol", "D. 0,04 mol"], answer: "A" },
    { question: "7. Berapakah massa dari 2 mol glukosa (C6H12O6)?", options: ["A. 360 gram", "B. 180 gram", "C. 720 gram", "D. 540 gram"], answer: "A" },
    { question: "8. Hitung Ar dari X jika 0,2 mol unsur X mempunyai massa 8 gram.", options: ["A. 40", "B. 20", "C. 60", "D. 80"], answer: "A" },
    { question: "9. Berapa volume 3 mol gas hidrogen pada STP?", options: ["A. 67,2 L", "B. 22,4 L", "C. 33,6 L", "D. 44,8 L"], answer: "A" },
    { question: "10. Berapa mol gas CO2 yang mempunyai volume 5600 mL?", options: ["A. 0,25 mol", "B. 0,50 mol", "C. 0,75 mol", "D. 1,00 mol"], answer: "A" },
    { question: "11. Hitung volume 5 mol gas pada tekanan 152 mmHg dan temperature 27°C!", options: ["A. 615 L", "B. 500 L", "C. 400 L", "D. 300 L"], answer: "A" },
    { question: "12. Jika Mg yang bereaksi adalah 2 mol, hitunglah mol HCl yang bereaksi!", options: ["A. 4 mol", "B. 2 mol", "C. 6 mol", "D. 8 mol"], answer: "A" },
    { question: "13. Jika pada reaksi dihasilkan 88 gram gas CO2, hitunglah massa C4H10 yang bereaksi!", options: ["A. 29 gram", "B. 30 gram", "C. 28 gram", "D. 27 gram"], answer: "A" },
    { question: "14. Hitung massa masing-masing unsur dalam 20 gram Fe2(SO4)3. Ar Fe = 56, S = 32, O = 16; Mr Fe2(SO4)3 = 400.", options: ["A. 5,6 gram Fe", "B. 4,8 gram S", "C. 9,6 gram O", "D. Semua benar"], answer: "D" },
    { question: "15. Jumlah partikel dalam 0,25 mol N2 sama dengan jumlah partikel dalam ...", options: ["A. 1,25 mol O2", "B. 1 mol P4", "C. 0,75 mol C4H10", "D. 0,5 mol Na", "E. 0,25 mol CO2"], answer: "E" },
    { question: "16. Banyaknya atom yang terkandung dalam 9,2 gram natrium (Na = 23) adalah ...", options: ["A. 1,2 x 10^23", "B. 2,2 x 10^23", "C. 2,3 x 10^23", "D. 2,4 x 10^23", "E. 2,5 x 10^23"], answer: "D" },
    { question: "17. Suatu senyawa dengan rumus C12H22O11 mengandung 72 gram karbon dan .... gram oksigen.", options: ["A. 1", "B. 12", "C. 66", "D. 72", "E. 88"], answer: "E" },
    { question: "18. Senyawa berikut yang mengandung jumlah molekul paling banyak adalah ...", options: ["A. 10,0 g C2H6 (Mr = 30)", "B. 11,0 g CO2 (Mr = 44)", "C. 12,0 g NO2 (Mr = 46)", "D. 17,0 g Cl2 (Mr = 71)", "E. 20,0 g C6H6 (Mr = 78)"], answer: "A" },
    { question: "19. Diketahui massa atom relatif Fe = 56, S = 32, dan O = 16. Massa besi yang terdapat dalam 4 gram Fe2(SO4)3 adalah ... gram", options: ["A. 4,00", "B. 1,12", "C. 0,56", "D. 0,28", "E. 0,01"], answer: "B" },
    { question: "20. Dalam praktikum, sekelompok siswa membakar secara sempurna 46 gram senyawa karbon yang terdiri atas unsur C, H, dan O. Pembakaran tersebut menghasilkan 88 gram CO2 dan 54 gram uap air (Ar H = 1, C = 12, O = 16). Rumus empiris senyawa yang dibakar adalah …", options: ["A. CH2O", "B. CH3O", "C. C2H6O", "D. C2H6O2", "E. C3H8O"], answer: "C" },
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
      <h1>Tryout Kimia</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          {/* <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          /> */}
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;