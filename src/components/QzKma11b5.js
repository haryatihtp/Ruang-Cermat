import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Mengapa larutan asam dapat mengubah warna indikator universal, tetapi larutan basa tidak mengubah warna dengan cara yang sama?", options: ["Karena asam memiliki pH lebih rendah dan basa memiliki pH lebih tinggi", "Karena asam menghasilkan ion H+ yang dapat bereaksi dengan indikator", "Karena basa tidak dapat bereaksi dengan indikator universal", "Karena hanya larutan asam yang memiliki ion H+"], answer: "Karena asam menghasilkan ion H+ yang dapat bereaksi dengan indikator" },
    
    { question: "2. Apa yang akan terjadi jika asam lemah dan basa kuat dicampurkan dalam larutan?", options: ["Larutan akan menjadi asam", "Larutan akan menjadi basa", "Larutan akan menjadi netral", "Larutan akan menjadi penyangga asam"], answer: "Larutan akan menjadi basa" },
    
    { question: "3. Jika pH suatu larutan adalah 3, berapakah konsentrasi ion H+ dalam larutan tersebut?", options: ["1 × 10^-3 M", "1 × 10^-7 M", "1 × 10^-14 M", "1 M"], answer: "1 × 10^-3 M" },
    
    { question: "4. Bagaimana pengaruh suhu terhadap pH larutan asam kuat?", options: ["Semakin tinggi suhu, pH semakin tinggi", "Semakin tinggi suhu, pH semakin rendah", "Suhu tidak mempengaruhi pH larutan asam kuat", "Semakin rendah suhu, pH semakin tinggi"], answer: "Semakin tinggi suhu, pH semakin rendah" },
    
    { question: "5. Mengapa larutan asam kuat lebih baik mengkonduksi listrik daripada larutan asam lemah?", options: ["Karena asam kuat terdisosiasi sepenuhnya menjadi ion-ion", "Karena asam lemah hanya sedikit terdisosiasi", "Karena asam kuat memiliki konsentrasi ion H+ yang lebih rendah", "Karena asam kuat tidak terdisosiasi dalam air"], answer: "Karena asam kuat terdisosiasi sepenuhnya menjadi ion-ion" },
    
    { question: "6. Jika sebuah asam lemah ditambahkan ke larutan penyangga, bagaimana perubahan pH larutan tersebut?", options: ["pH larutan akan meningkat sedikit", "pH larutan akan menurun sedikit", "pH larutan akan tetap konstan", "pH larutan akan berubah drastis"], answer: "pH larutan akan menurun sedikit" },
    
    { question: "7. Mengapa reaksi antara asam dan basa selalu menghasilkan air dan garam?", options: ["Karena asam dan basa selalu bereaksi membentuk ion H2O dan garam", "Karena itu adalah sifat reaksi asam-basa", "Karena reaksi ini adalah reaksi redoks", "Karena garam dan air adalah hasil utama reaksi asam dan basa"], answer: "Karena itu adalah sifat reaksi asam-basa" },
    
    { question: "8. Apa yang akan terjadi jika jumlah ion H+ lebih besar daripada ion OH- dalam larutan?", options: ["Larutan bersifat asam", "Larutan bersifat basa", "Larutan bersifat netral", "Larutan akan terurai menjadi gas"], answer: "Larutan bersifat asam" },
    
    { question: "9. Bagaimana cara untuk menentukan pH larutan basa dengan menggunakan rumus pOH?", options: ["pH = 14 - pOH", "pH = pOH", "pH = pOH + 7", "pH = pOH - 7"], answer: "pH = 14 - pOH" },
    
    { question: "10. Apa yang menyebabkan perubahan warna pada indikator asam-basa?", options: ["Perubahan konsentrasi ion H+ yang menyebabkan perubahan pH", "Perubahan konsentrasi ion OH- dalam larutan", "Perubahan suhu yang mempengaruhi pH larutan", "Perubahan konsentrasi garam dalam larutan"], answer: "Perubahan konsentrasi ion H+ yang menyebabkan perubahan pH" },
    
    { question: "11. Apa yang terjadi jika pH larutan asam lebih besar daripada pKa suatu asam?", options: ["Asam akan lebih terdisosiasi", "Asam akan kurang terdisosiasi", "Asam akan terionisasi sepenuhnya", "Asam tidak akan terdisosiasi sama sekali"], answer: "Asam akan kurang terdisosiasi" },
    
    { question: "12. Mengapa larutan penyangga efektif dalam menjaga pH larutan tetap stabil?", options: ["Karena memiliki pasangan asam dan basa yang dapat bereaksi dengan ion H+ atau OH-", "Karena mengandung senyawa yang menurunkan pH", "Karena larutan penyangga mengandung ion H+ dalam jumlah besar", "Karena larutan penyangga tidak mengandung ion OH-"], answer: "Karena memiliki pasangan asam dan basa yang dapat bereaksi dengan ion H+ atau OH-" },
    
    { question: "13. Bagaimana cara menghitung pH dari larutan yang mengandung asam lemah?", options: ["Dengan menggunakan rumus pH = -log[H+]", "Dengan menggunakan rumus Ka dan persamaan ionisasi", "Dengan menghitung konsentrasi OH- terlebih dahulu", "Dengan mengukur perubahan warna indikator"], answer: "Dengan menggunakan rumus Ka dan persamaan ionisasi" },
    
    { question: "14. Apa yang dimaksud dengan pKa dalam konteks asam lemah?", options: ["pKa adalah ukuran kekuatan asam yang lebih kecil menunjukkan asam lebih kuat", "pKa adalah ukuran konsentrasi ion OH-", "pKa adalah ukuran pH asam kuat", "pKa adalah ukuran titik asam dalam titrasi"], answer: "pKa adalah ukuran kekuatan asam yang lebih kecil menunjukkan asam lebih kuat" },
    
    { question: "15. Apa yang terjadi pada reaksi netralisasi antara asam kuat dan basa lemah?", options: ["pH larutan akan lebih mendekati pH asam", "pH larutan akan lebih mendekati pH basa", "pH larutan akan tetap 7", "pH larutan akan meningkat drastis"], answer: "pH larutan akan lebih mendekati pH basa" },
    
    { question: "16. Apa hubungan antara pKa dan kekuatan asam?", options: ["Semakin kecil pKa, semakin kuat asam tersebut", "Semakin besar pKa, semakin kuat asam tersebut", "pKa tidak berpengaruh terhadap kekuatan asam", "pKa hanya berlaku untuk asam lemah"], answer: "Semakin kecil pKa, semakin kuat asam tersebut" },
    
    { question: "17. Jika ion H+ dalam larutan bertambah, apa yang terjadi terhadap pH?", options: ["pH akan menurun", "pH akan meningkat", "pH akan tetap konstan", "pH akan berubah secara drastis"], answer: "pH akan menurun" },
    
    { question: "18. Dalam titrasi asam-basa, mengapa pH berubah tajam di dekat titik ekuivalen?", options: ["Karena ion H+ dan OH- bereaksi membentuk air", "Karena adanya penambahan ion H+ yang besar dalam larutan", "Karena ion H+ bereaksi dengan indikator", "Karena garam terbentuk dan mengubah pH secara cepat"], answer: "Karena ion H+ dan OH- bereaksi membentuk air" },
    
    { question: "19. Apa yang terjadi jika ion H+ berlebihan dalam suatu larutan?", options: ["Larutan menjadi asam", "Larutan menjadi basa", "Larutan menjadi netral", "Larutan menjadi garam"], answer: "Larutan menjadi asam" },
    
    { question: "20. Dalam larutan penyangga, apa yang akan terjadi jika terjadi penambahan ion H+?", options: ["Basa dalam larutan akan bereaksi dengan ion H+ untuk mengurangi perubahan pH", "Asam dalam larutan akan bereaksi dengan ion H+ untuk meningkatkan pH", "Basa dalam larutan akan bertambah banyak", "Asam dalam larutan akan bertambah banyak"], answer: "Basa dalam larutan akan bereaksi dengan ion H+ untuk mengurangi perubahan pH" }
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