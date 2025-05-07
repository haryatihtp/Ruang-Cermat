import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Apa yang dimaksud dengan koloid?", options: ["Campuran dua zat yang tidak dapat saling larut", "Zat yang larut sepenuhnya dalam pelarut", "Campuran yang mengandung partikel yang lebih besar dari molekul tetapi lebih kecil dari partikel yang dapat dilihat dengan mata telanjang", "Campuran zat yang tidak membentuk suspensi"], answer: "Campuran yang mengandung partikel yang lebih besar dari molekul tetapi lebih kecil dari partikel yang dapat dilihat dengan mata telanjang" },
  
    { question: "2. Mengapa koloid disebut sebagai sistem heterogen?", options: ["Karena partikel-partikelnya terdispersi merata", "Karena partikel-partikelnya dapat dilihat dengan mata telanjang", "Karena partikel-partikelnya tidak dapat dilihat dengan mikroskop", "Karena partikel-partikelnya terdiri dari lebih dari satu fase"], answer: "Karena partikel-partikelnya terdiri dari lebih dari satu fase" },
  
    { question: "3. Apa yang dimaksud dengan efek Tyndall?", options: ["Fenomena pembiasan cahaya oleh partikel koloid", "Fenomena pengendapan partikel koloid", "Fenomena pembentukan lapisan pada koloid", "Fenomena pembekuan koloid"], answer: "Fenomena pembiasan cahaya oleh partikel koloid" },
  
    { question: "4. Bagaimana cara membedakan antara larutan dan koloid?", options: ["Larutan memiliki partikel yang lebih kecil dari koloid dan tidak dapat membiasakan cahaya", "Larutan memiliki partikel yang lebih besar dari koloid", "Koloid tidak dapat membiasakan cahaya", "Larutan selalu memiliki warna yang lebih gelap"], answer: "Larutan memiliki partikel yang lebih kecil dari koloid dan tidak dapat membiasakan cahaya" },
  
    { question: "5. Dalam koloid, fase terdispersi adalah?", options: ["Fase padat", "Fase cair", "Fase gas", "Fase yang terdapat dalam jumlah lebih sedikit daripada fase dispersi"], answer: "Fase yang terdapat dalam jumlah lebih sedikit daripada fase dispersi" },
  
    { question: "6. Apa yang menyebabkan kestabilan partikel koloid?", options: ["Muatan listrik pada permukaan partikel", "Ukuran partikel yang besar", "Kecepatan partikel yang tinggi", "Kerapatan partikel yang sangat tinggi"], answer: "Muatan listrik pada permukaan partikel" },
  
    { question: "7. Manakah dari berikut ini yang merupakan contoh koloid jenis aerosol?", options: ["Kabut", "Susu", "Air laut", "Asap"], answer: "Kabut" },
  
    { question: "8. Mengapa koloid dapat mengalami koagulasi?", options: ["Karena perubahan suhu atau penambahan elektrolit mengganggu muatan pada permukaan partikel", "Karena koloid selalu membentuk endapan", "Karena suhu yang sangat tinggi menyebabkan partikel koloid pecah", "Karena koloid mengandung partikel yang sangat besar"], answer: "Karena perubahan suhu atau penambahan elektrolit mengganggu muatan pada permukaan partikel" },
  
    { question: "9. Apa yang dimaksud dengan koloid liofilik?", options: ["Koloid yang memiliki afinitas tinggi terhadap pelarut", "Koloid yang mudah mengendap", "Koloid yang tidak dapat terdispersi dalam pelarut", "Koloid yang memiliki partikel sangat kecil"], answer: "Koloid yang memiliki afinitas tinggi terhadap pelarut" },
  
    { question: "10. Dalam sistem koloid, fase dispersi biasanya berbentuk?", options: ["Cair", "Padat", "Gas", "Semua di atas benar"], answer: "Cair" },
  
    { question: "11. Mengapa koloid lebih stabil dibandingkan suspensi?", options: ["Karena partikel koloid lebih kecil dan terdispersi merata", "Karena partikel koloid lebih besar dan cepat mengendap", "Karena partikel koloid lebih berat", "Karena partikel koloid lebih mudah menguap"], answer: "Karena partikel koloid lebih kecil dan terdispersi merata" },
  
    { question: "12. Bagaimana pengaruh penambahan elektrolit terhadap koloid?", options: ["Elektrolit dapat menyebabkan koloid mengendap atau koagulasi", "Elektrolit tidak berpengaruh pada koloid", "Elektrolit meningkatkan stabilitas koloid", "Elektrolit mengubah fase dispersi dalam koloid"], answer: "Elektrolit dapat menyebabkan koloid mengendap atau koagulasi" },
  
    { question: "13. Apa yang dimaksud dengan koloid liofobik?", options: ["Koloid yang tidak memiliki afinitas terhadap pelarut", "Koloid yang mudah larut dalam pelarut", "Koloid yang stabil dalam pelarut", "Koloid yang membentuk suspensi"], answer: "Koloid yang tidak memiliki afinitas terhadap pelarut" },
  
    { question: "14. Pada koloid, ukuran partikel biasanya berada dalam rentang?", options: ["1 nm - 1000 nm", "10 μm - 100 μm", "0.1 nm - 1 nm", "100 nm - 1000 μm"], answer: "1 nm - 1000 nm" },
  
    { question: "15. Apa yang dimaksud dengan koloid gel?", options: ["Koloid yang memiliki struktur padat atau semi-padat", "Koloid yang terdiri dari partikel padat dalam cairan", "Koloid yang memiliki kemampuan untuk mengalir", "Koloid yang berada dalam bentuk gas"], answer: "Koloid yang memiliki struktur padat atau semi-padat" },
  
    { question: "16. Apa yang terjadi saat koloid mengalami agregasi?", options: ["Partikel-partikel koloid saling bergabung membentuk kelompok besar", "Partikel-partikel koloid terdispersi lebih merata", "Partikel koloid menjadi lebih kecil", "Koloid akan menguap"], answer: "Partikel-partikel koloid saling bergabung membentuk kelompok besar" },
  
    { question: "17. Apa yang dimaksud dengan koloid sol?", options: ["Koloid yang terdiri dari cairan dengan partikel padat terdispersi", "Koloid yang terdiri dari gas dengan partikel padat terdispersi", "Koloid yang memiliki kemampuan mengalir seperti cairan", "Koloid yang terdiri dari partikel cairan dalam gas"], answer: "Koloid yang terdiri dari cairan dengan partikel padat terdispersi" },
  
    { question: "18. Manakah dari berikut ini yang bukan termasuk jenis koloid?", options: ["Larutan jenuh", "Aerosol", "Emulsi", "Sol"], answer: "Larutan jenuh" },
  
    { question: "19. Apa yang dimaksud dengan penyebaran koloid?", options: ["Partikel koloid terdistribusi secara merata dalam pelarut", "Partikel koloid mengendap di bagian bawah bejana", "Partikel koloid berikatan dengan pelarut", "Partikel koloid membentuk lapisan atas"], answer: "Partikel koloid terdistribusi secara merata dalam pelarut" },
  
    { question: "20. Bagaimana cara mengubah koloid menjadi suspensi?", options: ["Dengan menambahkan elektrolit atau meningkatkan suhu", "Dengan menurunkan suhu atau mengurangi tekanan", "Dengan menambah pelarut yang lebih kuat", "Dengan meningkatkan kelarutan koloid"], answer: "Dengan menambahkan elektrolit atau meningkatkan suhu" }
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