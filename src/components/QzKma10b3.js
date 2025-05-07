import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Kalium isoelektronik dengan klor (nomor atom K=19, Cl=17)", options: ["A. Salah", "B. Benar", "C. Tidak ada jawaban", "D. D"], answer: "D" },
    { question: "2. Konfigurasi elektron unsur X dengan nomor atom 24 adalah….", options: ["A. [Ar] 3d2 4s2", "B. [Ar] 3d5 4s1", "C. [Ar] 3d10 4s1", "D. [Ar] 3d24s24p3", "E. [Ar] 3d2 4s24p2"], answer: "B" },
    { question: "3. Suatu unsur Y mempunyai massa=56,85 dan mempunyai massa neutron =30,85. Konfigurasi elektron Y adalah….", options: ["A. [Xe]6s2", "B. [Ar]4s23d10", "C. [Ar]3d64s2", "D. [Ar]4s23d8", "E. [Ar]4s23d10"], answer: "C" },
    { question: "4. Elektron dengan bilangan kuantum yang tidak diizinkan ialah….", options: ["A. n=3, l=0, m=0, s=-1/2", "B. n=3, l=1, m=+1, s=+1/2", "C. n=3, l=2, m=-1, s=-1/2", "D. n=3, l=1, m=+2, s=+1/2", "E. n=3, l=2, m=+2, s=-1/2"], answer: "D" },
    { question: "5. Jika nomor atom dalam satu golongan makin kecil, maka yang bertambah besar adalah ....", options: ["A. Jari-jari atom", "B. massa atom", "C. Jumlah elektron valensi", "D. Energi ionisasi", "E. Sifat logam"], answer: "D" },
    { question: "6. Konfigurasi elektron untuk ion X4- adalah 1s2 2s2 2p4 maka atom X termasuk golongan/perioda ....", options: ["A. VIA/2", "B. VIIA/2", "C. IVA/2", "D. IIA/2", "E. IIIA/2"], answer: "C" },
    { question: "7. Diketahui unsur-unsur : 17P, 20Q, 25R, 29S, 35T. Pasangan unsur yang terletak pada blok d adalah ....", options: ["A. P dan Q", "B. R dan S", "C. Q dan S", "D. P dan R", "E. R dan T"], answer: "B" },
    { question: "8. Raksa terletak pada periode keenam golongan IIB. Elektron terakhir atom raksa memiliki bilangan kuantum ...", options: ["A. n=5, l=0, m=0, s=-1/2", "B. n=5, l=2, m=+2, s=+1/2", "C. n=6, l=0, m=0, s=-1/2", "D. n=6, l=0, m=0, s=+1/2", "E. n=6, l=2, m=+2, s=-1/2"], answer: "A" },
    { question: "9. Unsur V,W,X,Y,Z berturut-turut mempunyai nomor atom 2,3,8,13,16. Pasangan unsur yang berada dalam satu golongan adalah ....", options: ["A. W dan Z", "B. X dan Y", "C. U dan X", "D. X dan Z", "E. V dan Y"], answer: "D" },
    { question: "10. Unsur yang jari-jari atomnya terbesar adalah ....", options: ["A. 11 Na", "B. 13 Al", "C. 14 Si", "D. 17 Cl", "E. 12 Mg"], answer: "A" },
    { question: "11. Unsur kalsium (Z = 20) yang mempunyai konfigurasi elektron 1s2 2s2 2p6 3s2 3p6 4s2, terletak pada ....", options: ["A. Periode 2, golongan IVA", "B. Periode 3, golongan IIA", "C. Periode 3, golongan VIA", "D. Periode 4, golongan IIA", "E. Periode 4, golongan VIA"], answer: "D" },
    { question: "12. Keelektronegatifan unsur-unsur adalah sebagai berikut. F=4,0 ; O=3,5 ; Br=2,8 ; Cl=3,0 ; As=2,0 ; Se=2,4 ; N=3,2 ; P=2,1. Keelektronegatifan unsur belerang adalah ....", options: ["A. 2,0", "B. 2,2", "C. 2,5", "D. 3,1", "E. 3,3"], answer: "C" },
    { question: "13. Unsur yang terletak pada periode kelima golongan IIIB mempunyai konfigurasi elektron ....", options: ["A. 5s2 5p1", "B. 5s2 4d3", "C. 5s2 4d10", "D. 5s2 5d3", "E. 5s2 4d4"], answer: "C" },
    { question: "14. Konfigurasi suatu unsur : 1s2 2s2 2p6 3s2 3p6 4s1. Tingkat oksidasi tertinggi dari unsur di atas adalah ...", options: ["A. +2", "B. +5", "C. +7", "D. -3", "E. +6"], answer: "E" },
    { question: "15. Unsur-unsur dibawah ini berada dalam satu golongan dan sistem periodik, kecuali ...", options: ["A. Arsen", "B. Nitrogen", "C. Selenium", "D. Fosfor", "E. Bismut"], answer: "C" },
    { question: "16. Unsur X dengan nomor atom 52 tidak dapat membentuk senyawa atau ion ...", options: ["A. X2-", "B. H2X", "C. XH3", "D. XO2-", "E. XO2"], answer: "C" },
    { question: "17. Unsur transisi dalam mulai dijumpai pada periode ....", options: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"], answer: "B" },
    { question: "18. Di antara unsur-unsur 4A, 12B, 18C dan 16D yang terletak dalam golongan yang sama pada sistem periodik adalah ...", options: ["A. A dan B", "B. A dan C", "C. B dan C", "D. B dan D", "E. A dan D"], answer: "A" },
    { question: "19. Menurut persamaan reaksi: L(s) + H2SO4(aq) → L2SO4(aq) + H2(g). Jika atom L mengandung 14 neutron, maka atom L terletak pada golongan dan periode ...", options: ["A. IA/3", "B. IIA/3", "C. IIIA/3", "D. IIIA/4", "E. VA/4"], answer: "C" },
    { question: "20. Unsur yang paling elektronegatif adalah …", options: ["A. 18Ar", "B. 17Cl", "C. 16S", "D. 15P", "E. 14Si"], answer: "B" },
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
      <h1>Tryout Biologi Kelas XI</h1>
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