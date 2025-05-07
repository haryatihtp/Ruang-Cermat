import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Apa yang dimaksud dengan hidrokarbon?", options: ["Zat yang hanya mengandung hidrogen dan oksigen", "Zat yang hanya mengandung karbon dan hidrogen", "Zat yang mengandung karbon, hidrogen, dan nitrogen", "Zat yang mengandung karbon, hidrogen, oksigen, dan belerang"], answer: "Zat yang hanya mengandung karbon dan hidrogen" },
  
    { question: "2. Apa perbedaan antara alkan dan alkena?", options: ["Alkan mengandung ikatan rangkap, sedangkan alkena tidak", "Alkan hanya mengandung ikatan tunggal, sedangkan alkena mengandung ikatan rangkap", "Alkena hanya mengandung ikatan tunggal", "Alkena adalah senyawa aromatik, sedangkan alkan bukan"], answer: "Alkan hanya mengandung ikatan tunggal, sedangkan alkena mengandung ikatan rangkap" },
  
    { question: "3. Apa yang dimaksud dengan fraksinasi minyak bumi?", options: ["Proses pemisahan komponen minyak bumi berdasarkan titik didih", "Proses mengubah minyak bumi menjadi gas", "Proses pengolahan minyak bumi menjadi bahan bakar", "Proses pemurnian minyak bumi dari kotoran"], answer: "Proses pemisahan komponen minyak bumi berdasarkan titik didih" },
  
    { question: "4. Apa yang menjadi produk utama dari fraksinasi minyak bumi?", options: ["Gas, bensin, dan diesel", "Gas, kerosene, dan aspal", "Bensin, plastik, dan metana", "Gas alam, minyak mentah, dan karbon"], answer: "Gas, bensin, dan diesel" },
  
    { question: "5. Apa yang dimaksud dengan hidrokarbon aromatik?", options: ["Hidrokarbon yang hanya mengandung ikatan tunggal", "Hidrokarbon yang mengandung ikatan rangkap", "Hidrokarbon yang memiliki cincin benzena", "Hidrokarbon yang mengandung gugus karboksil"], answer: "Hidrokarbon yang memiliki cincin benzena" },
  
    { question: "6. Mengapa minyak bumi tidak dapat langsung digunakan tanpa pemrosesan?", options: ["Karena memiliki komponen yang tidak berguna dan berbahaya", "Karena hanya mengandung gas", "Karena memiliki sifat mudah terbakar", "Karena kandungan airnya terlalu tinggi"], answer: "Karena memiliki komponen yang tidak berguna dan berbahaya" },
  
    { question: "7. Bagaimana cara minyak bumi diekstraksi dari bawah tanah?", options: ["Dengan pengeboran menggunakan alat khusus", "Dengan proses pemanasan untuk menguapkan minyak", "Dengan proses elektrolisis", "Dengan menyaring air tanah"], answer: "Dengan pengeboran menggunakan alat khusus" },
  
    { question: "8. Apa yang dimaksud dengan cracking dalam pengolahan hidrokarbon?", options: ["Proses pemecahan molekul besar menjadi molekul lebih kecil", "Proses penggabungan molekul kecil menjadi molekul besar", "Proses pemurnian hidrokarbon", "Proses pengendapan hidrokarbon"], answer: "Proses pemecahan molekul besar menjadi molekul lebih kecil" },
  
    { question: "9. Bagaimana perubahan struktur kimia pada proses pemurnian minyak bumi?", options: ["Molekul besar dipecah menjadi molekul kecil yang lebih berguna", "Molekul kecil digabungkan untuk membentuk molekul besar", "Minyak bumi dipisahkan berdasarkan densitasnya", "Tidak ada perubahan kimia, hanya pemisahan fisik"], answer: "Molekul besar dipecah menjadi molekul kecil yang lebih berguna" },
  
    { question: "10. Apa yang dimaksud dengan fraksi aspal?", options: ["Fraksi dengan titik didih tertinggi yang mengandung bitumen", "Fraksi dengan titik didih terendah yang mengandung gas", "Fraksi dengan titik didih sedang yang mengandung bensin", "Fraksi yang mengandung gas alam"], answer: "Fraksi dengan titik didih tertinggi yang mengandung bitumen" },
  
    { question: "11. Apa yang dimaksud dengan gas alam?", options: ["Sumber energi yang mengandung sebagian besar metana", "Sumber energi yang hanya mengandung hidrogen", "Sumber energi yang hanya mengandung propana", "Sumber energi yang hanya mengandung karbon dioksida"], answer: "Sumber energi yang mengandung sebagian besar metana" },
  
    { question: "12. Apa yang terjadi pada minyak mentah setelah diproses di kilang minyak?", options: ["Minyak dipecah menjadi berbagai produk dengan berbagai titik didih", "Minyak mentah disaring untuk menghilangkan air", "Minyak mentah langsung digunakan tanpa perubahan", "Minyak mentah dicampur dengan gas alam"], answer: "Minyak dipecah menjadi berbagai produk dengan berbagai titik didih" },
  
    { question: "13. Manakah dari berikut ini yang bukan merupakan produk yang dihasilkan dari minyak bumi?", options: ["Plastik", "Karet", "Gas karbon", "Bensin"], answer: "Gas karbon" },
  
    { question: "14. Apa yang dimaksud dengan minyak bumi non-konvensional?", options: ["Minyak bumi yang diperoleh dengan teknologi canggih dan sulit diakses", "Minyak bumi yang berasal dari sumber-sumber alami yang mudah diakses", "Minyak bumi yang hanya terdiri dari gas", "Minyak bumi yang tidak memiliki kandungan hidrokarbon"], answer: "Minyak bumi yang diperoleh dengan teknologi canggih dan sulit diakses" },
  
    { question: "15. Apa yang menjadi tantangan utama dalam eksplorasi minyak bumi?", options: ["Biaya pengeboran yang sangat tinggi dan risiko kecelakaan", "Keberadaan gas yang lebih banyak", "Kurangnya teknologi pengeboran yang efisien", "Keterbatasan sumber daya manusia yang terlatih"], answer: "Biaya pengeboran yang sangat tinggi dan risiko kecelakaan" },
  
    { question: "16. Apa yang dimaksud dengan minyak bumi terbarukan?", options: ["Minyak bumi yang dapat diproduksi kembali dalam waktu singkat", "Minyak bumi yang terbuat dari bahan organik yang dapat diperbaharui", "Minyak bumi yang diperoleh dari proses alami", "Minyak bumi yang digunakan sebagai bahan bakar kendaraan"], answer: "Minyak bumi yang dapat diproduksi kembali dalam waktu singkat" },
  
    { question: "17. Mengapa hidrokarbon jenuh cenderung lebih stabil dibandingkan hidrokarbon tak jenuh?", options: ["Karena memiliki ikatan tunggal yang kuat", "Karena memiliki ikatan rangkap yang lebih rapuh", "Karena hidrokarbon tak jenuh lebih reaktif", "Karena hidrokarbon jenuh mengandung lebih banyak energi"], answer: "Karena memiliki ikatan tunggal yang kuat" },
  
    { question: "18. Apa yang dimaksud dengan minyak bumi sintetis?", options: ["Minyak bumi yang dibuat melalui proses kimia dari sumber bukan minyak bumi", "Minyak bumi yang dibuat dari bahan bakar fosil", "Minyak bumi yang diproduksi menggunakan metode pengeboran biasa", "Minyak bumi yang sudah diproses untuk menghasilkan energi listrik"], answer: "Minyak bumi yang dibuat melalui proses kimia dari sumber bukan minyak bumi" },
  
    { question: "19. Dalam pengolahan minyak bumi, apa fungsi dari katalis?", options: ["Mempercepat reaksi kimia tanpa berubah dalam proses", "Menurunkan titik didih minyak", "Mengurangi volume minyak yang dihasilkan", "Meningkatkan kepadatan minyak bumi"], answer: "Mempercepat reaksi kimia tanpa berubah dalam proses" },
  
    { question: "20. Apa yang dimaksud dengan geologi minyak bumi?", options: ["Ilmu yang mempelajari formasi dan penyebaran minyak bumi di bawah permukaan bumi", "Ilmu yang mempelajari proses pengeboran minyak bumi", "Ilmu yang mempelajari pencemaran lingkungan akibat minyak bumi", "Ilmu yang mempelajari potensi energi surya"], answer: "Ilmu yang mempelajari formasi dan penyebaran minyak bumi di bawah permukaan bumi" }
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