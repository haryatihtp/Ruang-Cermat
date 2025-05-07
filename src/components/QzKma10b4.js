import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const KuisIkatanKimiaKelas10 = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Apa yang menyebabkan ikatan ion terbentuk?", options: ["Adanya gaya tarik elektrostatik antara ion positif dan negatif", "Adanya elektron bebas dalam logam", "Adanya pasangan elektron bersama", "Adanya perbedaan polaritas molekul"], answer: "Adanya gaya tarik elektrostatik antara ion positif dan negatif" },
    { question: "2. Apa yang dimaksud dengan ikatan kovalen polar?", options: ["Ikatan dengan pembagian elektron yang tidak merata", "Ikatan antara logam dan bukan logam", "Ikatan dengan elektron bebas", "Ikatan dengan transfer elektron sepenuhnya"], answer: "Ikatan dengan pembagian elektron yang tidak merata" },
    { question: "3. Sifat khas senyawa ionik adalah?", options: ["Titik leleh tinggi", "Tidak larut dalam air", "Menghantarkan listrik dalam bentuk padat", "Tidak memiliki struktur kristal"], answer: "Titik leleh tinggi" },
    { question: "4. Mengapa logam dapat menghantarkan listrik?", options: ["Karena adanya pasangan elektron bersama", "Karena adanya lautan elektron bebas", "Karena adanya ion negatif di dalam logam", "Karena ikatan kovalen di antara atom logam"], answer: "Karena adanya lautan elektron bebas" },
    { question: "5. Ikatan logam ditandai dengan?", options: ["Mobilitas elektron dalam struktur logam", "Transfer elektron dari logam ke bukan logam", "Adanya molekul polar dalam logam", "Penggunaan pasangan elektron bersama"], answer: "Mobilitas elektron dalam struktur logam" },
    { question: "6. Senyawa apa yang memiliki ikatan kovalen non-polar?", options: ["H₂", "NaCl", "H₂O", "NH₃"], answer: "H₂" },
    { question: "7. Apa yang menyebabkan molekul air (H₂O) bersifat polar?", options: ["Elektronegativitas oksigen yang lebih tinggi dibandingkan hidrogen", "Adanya transfer elektron dari hidrogen ke oksigen", "Adanya pasangan elektron bebas pada hidrogen", "Adanya ikatan logam dalam molekul"], answer: "Elektronegativitas oksigen yang lebih tinggi dibandingkan hidrogen" },
    { question: "8. Contoh senyawa yang memiliki ikatan ionik adalah?", options: ["KCl", "H₂", "CH₄", "NH₃"], answer: "KCl" },
    { question: "9. Apa sifat khas dari senyawa kovalen non-polar?", options: ["Tidak larut dalam air", "Menghantarkan listrik dalam bentuk cair", "Memiliki titik didih tinggi", "Larut dalam pelarut polar"], answer: "Tidak larut dalam air" },
    { question: "10. Apa yang membedakan ikatan kovalen dengan ikatan ionik?", options: ["Ikatan kovalen melibatkan penggunaan pasangan elektron bersama, sedangkan ikatan ionik melibatkan transfer elektron", "Ikatan ionik melibatkan penggunaan pasangan elektron bersama, sedangkan ikatan kovalen melibatkan transfer elektron", "Ikatan kovalen melibatkan elektron bebas, sedangkan ikatan ionik melibatkan gaya tarik antar ion", "Ikatan kovalen dan ionik keduanya melibatkan transfer elektron"], answer: "Ikatan kovalen melibatkan penggunaan pasangan elektron bersama, sedangkan ikatan ionik melibatkan transfer elektron" },
    { question: "11. Apa yang dimaksud dengan pasangan elektron bebas?", options: ["Elektron valensi yang tidak terlibat dalam ikatan", "Elektron yang berpindah ke atom lain", "Elektron yang digunakan bersama oleh dua atom", "Elektron yang terdapat dalam inti atom"], answer: "Elektron valensi yang tidak terlibat dalam ikatan" },
    { question: "12. Jenis ikatan apa yang terdapat pada molekul NH₃?", options: ["Ikatan kovalen polar", "Ikatan kovalen non-polar", "Ikatan ionik", "Ikatan logam"], answer: "Ikatan kovalen polar" },
    { question: "13. Apa yang menyebabkan ikatan hidrogen terbentuk?", options: ["Adanya perbedaan elektronegativitas yang besar antara atom", "Adanya transfer elektron antara hidrogen ke oksigen", "Adanya mobilitas elektron bebas", "Adanya gaya tarik antara ion positif dan negatif"], answer: "Adanya perbedaan elektronegativitas yang besar antara atom" },
    { question: "14. Senyawa yang memiliki ikatan ionik biasanya memiliki sifat?", options: ["Titik leleh dan titik didih tinggi", "Larut dalam pelarut non-polar", "Tidak menghantarkan listrik dalam bentuk cair", "Struktur molekul yang fleksibel"], answer: "Titik leleh dan titik didih tinggi" },
    { question: "15. Apa yang terjadi dalam pembentukan ikatan ionik?", options: ["Elektron valensi berpindah dari satu atom ke atom lain", "Elektron bebas mengelilingi inti atom", "Elektron valensi digunakan bersama", "Atom saling berbagi pasangan elektron secara merata"], answer: "Elektron valensi berpindah dari satu atom ke atom lain" },
    { question: "16. Apa sifat khas dari ikatan logam?", options: ["Konduktivitas listrik yang tinggi", "Pasangan elektron tetap", "Transfer elektron antar atom", "Larut dalam air"], answer: "Konduktivitas listrik yang tinggi" },
    { question: "17. Apa yang dimaksud dengan molekul diatomik?", options: ["Molekul yang terdiri dari dua atom", "Molekul yang memiliki dua ikatan", "Molekul dengan dua pasangan elektron bebas", "Molekul dengan dua inti atom"], answer: "Molekul yang terdiri dari dua atom" },
    { question: "18. Mengapa senyawa ionik tidak menghantarkan listrik dalam bentuk padat?", options: ["Ion-ionnya tidak bebas bergerak", "Elektron valensinya tidak terlibat dalam ikatan", "Pasangan elektron bebasnya terlalu banyak", "Ion-ionnya saling menghambat"], answer: "Ion-ionnya tidak bebas bergerak" },
    { question: "19. Jenis ikatan yang terdapat pada garam dapur (NaCl) adalah?", options: ["Ikatan ionik", "Ikatan kovalen polar", "Ikatan logam", "Ikatan kovalen non-polar"], answer: "Ikatan ionik" },
    { question: "20. Apa yang terjadi ketika atom karbon membentuk ikatan kovalen dalam metana (CH₄)?", options: ["Karbon berbagi elektron dengan empat atom hidrogen", "Karbon mentransfer elektron ke hidrogen", "Hidrogen menggunakan pasangan elektron karbon", "Karbon dan hidrogen memiliki ikatan ionik"], answer: "Karbon berbagi elektron dengan empat atom hidrogen" }
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
      <h1>Tryout KIMIA Kelas X (IKATAN KIMIA)</h1>
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

export default KuisIkatanKimiaKelas10;