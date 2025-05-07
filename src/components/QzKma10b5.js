import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const KuisTeoriAtomKelas10 = () => {
  const navigate = useNavigate(); 

  const questions = [
    { question: "1. Dalam eksperimen hamburan sinar alfa, Rutherford menemukan bahwa?", options: ["Atom berbentuk seperti roti kismis", "Sebagian besar massa atom terkonsentrasi di inti kecil", "Elektron bergerak dalam lintasan berbentuk lingkaran di sekitar inti", "Proton dan neutron tersebar merata dalam atom"], answer: "Sebagian besar massa atom terkonsentrasi di inti kecil"},
    { question: "2. Menurut Niels Bohr, elektron dalam atom?", options: ["Berada di inti atom bersama proton", "Bergerak dalam lintasan acak di sekitar inti", "Mengorbit inti dalam jalur tertentu dengan energi tetap", "Tersebar merata dalam atom"], answer: "Mengorbit inti dalam jalur tertentu dengan energi tetap"},
    { question: "3. Siapa yang pertama kali mengusulkan bahwa materi terdiri dari atom yang tidak dapat dibagi?", options: ["John Dalton", "Demokritus", "Ernest Rutherford", "J.J. Thomson"], answer: "Demokritus"},
    { question: "4. Partikel subatomik yang tidak memiliki muatan adalah?", options: ["Proton", "Elektron", "Neutron", "Nukleon"], answer: "Neutron"},
    { question: "5. Model atom Rutherford menjelaskan bahwa?", options: ["Elektron bergerak dalam orbit tertentu dengan energi tetap", "Atom terdiri dari inti padat kecil yang dikelilingi oleh elektron", "Elektron tersebar merata di dalam atom", "Atom tidak memiliki ruang kosong"], answer: "Atom terdiri dari inti padat kecil yang dikelilingi oleh elektron"},
    { question: "6. Dalam teori atom Bohr, elektron berpindah dari orbit rendah ke orbit lebih tinggi dengan cara?", options: ["Menyerap energi", "Memancarkan energi", "Melepaskan foton", "Memindahkan neutron"], answer: "Menyerap energi"},
    { question: "7. Model atom 'roti kismis' dikembangkan oleh?", options: ["Niels Bohr", "Ernest Rutherford", "J.J. Thomson", "John Dalton"], answer: "J.J. Thomson"},
    { question: "8. Apa nama partikel subatomik yang ditemukan oleh J.J. Thomson?", options: ["Proton", "Elektron", "Neutron", "Nukleon"], answer: "Elektron"},
    { question: "9. Apa sifat utama inti atom dalam model atom Rutherford?", options: ["Memiliki massa yang sangat kecil", "Mengandung semua elektron", "Kecil dan padat", "Tersebar merata dalam atom"], answer: "Kecil dan padat"},
    { question: "10. Teori atom Dalton menyatakan bahwa?", options: ["Atom tidak dapat dibagi lebih kecil", "Elektron tersebar di dalam atom", "Atom terdiri dari inti dan elektron", "Elektron mengorbit dalam lintasan tertentu"], answer: "Atom tidak dapat dibagi lebih kecil"},
    { question: "11. Ikatan ion terbentuk ketika?", options: ["Dua atom berbagi elektron secara merata", "Elektron berpindah dari satu atom ke atom lain", "Elektron bergerak bebas di antara inti atom", "Atom berbagi pasangan elektron tetapi tidak merata"], answer: "Elektron berpindah dari satu atom ke atom lain"},
    { question: "12. Jenis ikatan yang terdapat dalam molekul air (H₂O) adalah?", options: ["Ikatan ionik", "Ikatan kovalen polar", "Ikatan logam", "Ikatan kovalen non-polar"], answer: "Ikatan kovalen polar"},
    { question: "13. Apa yang menyebabkan sifat konduktivitas listrik pada logam?", options: ["Ikatan kovalen di antara atom-atom logam", "Mobilitas elektron valensi dalam struktur logam", "Keteraturan ion-ion logam dalam kisi kristal", "Ikatan ionik di antara atom-atom logam"], answer: "Mobilitas elektron valensi dalam struktur logam"},
    { question: "14. Sifat yang tidak dimiliki oleh senyawa ionik adalah?", options: ["Titik leleh tinggi", "Larut dalam air", "Menghantarkan listrik dalam bentuk larutan", "Menghantarkan listrik dalam bentuk padat"], answer: "Menghantarkan listrik dalam bentuk padat"},
    { question: "15. Jenis ikatan yang terdapat dalam molekul CO₂ adalah?", options: ["Ikatan ionik", "Ikatan logam", "Ikatan kovalen non-polar", "Ikatan kovalen polar"], answer: "Ikatan kovalen non-polar"},
    { question: "16. Apa produk utama ikatan logam?", options: ["Struktur rapuh", "Lautan elektron bebas", "Titik didih rendah", "Tidak menghantarkan listrik"], answer: "Lautan elektron bebas"},
    { question: "17. Sifat khas dari senyawa kovalen polar adalah?", options: ["Titik leleh tinggi", "Menghantarkan listrik dalam bentuk padat", "Tidak larut dalam air", "Larut dalam pelarut polar"], answer: "Larut dalam pelarut polar"},
    { question: "18. Apa yang dimaksud dengan ikatan kovalen?", options: ["Transfer elektron dari satu atom ke atom lain", "Penggunaan bersama pasangan elektron", "Mobilitas elektron dalam kisi logam", "Transfer neutron antar atom"], answer: "Penggunaan bersama pasangan elektron"},
    { question: "19. Contoh senyawa dengan ikatan ionik adalah?", options: ["NaCl", "H₂O", "CO₂", "CH₄"], answer: "NaCl"},
    { question: "20. Apa yang menyebabkan terbentuknya ikatan kimia?", options: ["Pelepasan inti atom", "Interaksi antara elektron valensi", "Perpindahan neutron", "Interaksi proton dari dua atom"], answer: "Interaksi antara elektron valensi"}
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
      <h1>Tryout KIMIA Kelas X (TEORI ATOM)</h1>
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

export default KuisTeoriAtomKelas10;