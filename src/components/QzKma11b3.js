import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Faktor utama yang mempengaruhi laju reaksi dalam teori tumbukan adalah?", options: ["Konsentrasi reaktan", "Jumlah tumbukan antara partikel", "Suhu reaksi", "Semua faktor di atas"], answer: "Semua faktor di atas" },
  
    { question: "2. Mengapa suhu dapat meningkatkan laju reaksi?", options: ["Karena partikel bergerak lebih cepat, meningkatkan kemungkinan tumbukan efektif", "Karena suhu mempengaruhi konsentrasi reaktan", "Karena suhu mempengaruhi energi aktivasi", "Karena suhu menurunkan energi aktivasi"], answer: "Karena partikel bergerak lebih cepat, meningkatkan kemungkinan tumbukan efektif" },
  
    { question: "3. Dalam suatu reaksi kimia, apa yang terjadi jika konsentrasi salah satu reaktan ditingkatkan?", options: ["Laju reaksi akan berkurang", "Laju reaksi akan tetap konstan", "Laju reaksi akan meningkat", "Tidak ada pengaruh terhadap laju reaksi"], answer: "Laju reaksi akan meningkat" },
  
    { question: "4. Bagaimana pengaruh katalis terhadap laju reaksi?", options: ["Katalis meningkatkan energi aktivasi reaksi", "Katalis memperlambat laju reaksi", "Katalis tidak mengubah energi aktivasi, hanya menyediakan jalur reaksi alternatif", "Katalis meningkatkan jumlah reaktan yang terlibat dalam reaksi"], answer: "Katalis tidak mengubah energi aktivasi, hanya menyediakan jalur reaksi alternatif" },
  
    { question: "5. Reaksi yang memiliki energi aktivasi tinggi cenderung memiliki laju reaksi yang...", options: ["Cepat", "Lambat", "Konstan", "Tidak dapat ditentukan"], answer: "Lambat" },
  
    { question: "6. Mengapa konsentrasi reaktan berhubungan langsung dengan laju reaksi?", options: ["Karena semakin tinggi konsentrasi, semakin banyak partikel yang bertumbukan", "Karena semakin tinggi konsentrasi, energi aktivasi semakin tinggi", "Karena konsentrasi mempengaruhi suhu reaksi", "Karena konsentrasi mempengaruhi kecepatan perubahan energi"], answer: "Karena semakin tinggi konsentrasi, semakin banyak partikel yang bertumbukan" },
  
    { question: "7. Jika laju reaksi berbanding lurus dengan konsentrasi reaktan, maka reaksi tersebut termasuk reaksi berorde...", options: ["0", "1", "2", "3"], answer: "1" },
  
    { question: "8. Apa yang dimaksud dengan energi aktivasi dalam konteks laju reaksi?", options: ["Energi minimum yang dibutuhkan agar reaksi dapat terjadi", "Energi yang dilepaskan selama reaksi", "Energi yang diserap selama reaksi", "Energi yang dihasilkan oleh katalis"], answer: "Energi minimum yang dibutuhkan agar reaksi dapat terjadi" },
  
    { question: "9. Jika laju reaksi berkurang setelah katalis ditambahkan, apa kemungkinan penyebabnya?", options: ["Katalis tidak berfungsi dengan baik", "Katalis menghambat reaksi", "Reaksi menjadi endotermik", "Katalis menyebabkan peningkatan energi aktivasi"], answer: "Katalis tidak berfungsi dengan baik" },
  
    { question: "10. Apa yang dimaksud dengan hukum laju reaksi?", options: ["Hubungan antara konsentrasi reaktan dan laju reaksi", "Hubungan antara suhu dan laju reaksi", "Hubungan antara energi aktivasi dan laju reaksi", "Hubungan antara volume dan laju reaksi"], answer: "Hubungan antara konsentrasi reaktan dan laju reaksi" },
  
    { question: "11. Bagaimana pengaruh suhu terhadap energi aktivasi suatu reaksi?", options: ["Suhu tidak mempengaruhi energi aktivasi", "Suhu menurunkan energi aktivasi", "Suhu meningkatkan energi aktivasi", "Suhu mempengaruhi kecepatan tumbukan"], answer: "Suhu menurunkan energi aktivasi" },
  
    { question: "12. Apa yang dimaksud dengan mekanisme reaksi?", options: ["Jalur reaksi yang ditempuh oleh partikel selama reaksi", "Proses pengukuran laju reaksi", "Jumlah energi yang diperlukan untuk memulai reaksi", "Hubungan antara suhu dan laju reaksi"], answer: "Jalur reaksi yang ditempuh oleh partikel selama reaksi" },
  
    { question: "13. Dalam suatu reaksi, bagaimana cara untuk mempercepat laju reaksi tanpa mengubah konsentrasi?", options: ["Dengan meningkatkan suhu", "Dengan menurunkan suhu", "Dengan menurunkan jumlah reaktan", "Dengan mengurangi energi aktivasi"], answer: "Dengan meningkatkan suhu" },
  
    { question: "14. Dalam reaksi gas, bagaimana pengaruh peningkatan tekanan terhadap laju reaksi?", options: ["Laju reaksi akan meningkat karena molekul-molekul gas lebih padat", "Laju reaksi akan berkurang", "Tekanan tidak mempengaruhi laju reaksi", "Laju reaksi akan tetap konstan"], answer: "Laju reaksi akan meningkat karena molekul-molekul gas lebih padat" },
  
    { question: "15. Apa yang dimaksud dengan reaksi urutan kedua?", options: ["Laju reaksi berbanding terbalik dengan konsentrasi reaktan", "Laju reaksi berbanding langsung dengan konsentrasi reaktan", "Laju reaksi berbanding dengan kuadrat konsentrasi reaktan", "Laju reaksi berbanding dengan volume reaktan"], answer: "Laju reaksi berbanding dengan kuadrat konsentrasi reaktan" },
  
    { question: "16. Faktor manakah yang tidak mempengaruhi laju reaksi?", options: ["Bentuk fisik reaktan", "Katalis yang digunakan", "Konsentrasi reaktan", "Jumlah produk"], answer: "Jumlah produk" },
  
    { question: "17. Mengapa reaksi yang melibatkan senyawa padat sering kali lebih lambat dibandingkan dengan senyawa gas atau cair?", options: ["Karena partikel padat bergerak lebih lambat dan jarak antar partikel lebih besar", "Karena padatan lebih mudah bereaksi", "Karena padatan lebih cepat mengubah bentuknya", "Karena padatan lebih mudah terurai"], answer: "Karena partikel padat bergerak lebih lambat dan jarak antar partikel lebih besar" },
  
    { question: "18. Apa yang dimaksud dengan laju reaksi pada reaksi orde satu?", options: ["Laju reaksi berbanding lurus dengan konsentrasi reaktan", "Laju reaksi berbanding dengan kuadrat konsentrasi reaktan", "Laju reaksi tidak bergantung pada konsentrasi reaktan", "Laju reaksi berbanding terbalik dengan konsentrasi reaktan"], answer: "Laju reaksi berbanding lurus dengan konsentrasi reaktan" },
  
    { question: "19. Bagaimana pengaruh peningkatan luas permukaan terhadap laju reaksi?", options: ["Luas permukaan yang lebih besar meningkatkan laju reaksi", "Luas permukaan tidak mempengaruhi laju reaksi", "Luas permukaan yang lebih kecil meningkatkan laju reaksi", "Luas permukaan mengurangi energi aktivasi"], answer: "Luas permukaan yang lebih besar meningkatkan laju reaksi" },
  
    { question: "20. Dalam eksperimen pengukuran laju reaksi, apa yang dapat dilakukan untuk mengurangi pengaruh suhu terhadap hasil?", options: ["Menjaga suhu tetap konstan", "Meningkatkan konsentrasi reaktan", "Menurunkan konsentrasi reaktan", "Menggunakan katalis"], answer: "Menjaga suhu tetap konstan" }
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