import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Mengapa kelarutan suatu senyawa tergantung pada suhu?", options: ["Karena suhu mempengaruhi energi kinetik partikel dalam larutan", "Karena suhu mengubah pH larutan", "Karena suhu mempengaruhi viskositas larutan", "Karena suhu mengubah tekanan gas"], answer: "Karena suhu mempengaruhi energi kinetik partikel dalam larutan" },
  
    { question: "2. Jika Ksp untuk senyawa AB2 adalah 4x10^-10, apa yang dapat kita simpulkan tentang kelarutannya?", options: ["Senyawa ini sangat mudah larut", "Senyawa ini hampir tidak larut", "Senyawa ini memiliki kelarutan sedang", "Senyawa ini memiliki kelarutan tinggi pada suhu rendah"], answer: "Senyawa ini hampir tidak larut" },
  
    { question: "3. Bagaimana pengaruh penambahan ion-ion pengotor terhadap kelarutan senyawa?", options: ["Ion pengotor dapat meningkatkan kelarutan senyawa", "Ion pengotor dapat menurunkan kelarutan senyawa", "Ion pengotor tidak mempengaruhi kelarutan senyawa", "Ion pengotor akan menyebabkan senyawa terpecah"], answer: "Ion pengotor dapat menurunkan kelarutan senyawa" },
  
    { question: "4. Apakah yang dimaksud dengan hasil kali kelarutan (Ksp) dari suatu senyawa?", options: ["Ksp adalah nilai yang menggambarkan kelarutan senyawa dalam air pada suhu tertentu", "Ksp adalah perbandingan antara jumlah ion positif dan negatif dalam larutan", "Ksp adalah pH larutan yang mengandung senyawa", "Ksp adalah konsentrasi ion dalam bentuk padatan"], answer: "Ksp adalah nilai yang menggambarkan kelarutan senyawa dalam air pada suhu tertentu" },
  
    { question: "5. Bagaimana cara menghitung kelarutan senyawa dengan menggunakan Ksp?", options: ["Dengan mengetahui Ksp dan persamaan reaksi ionisasi senyawa", "Dengan mengetahui pH larutan", "Dengan mengetahui suhu larutan", "Dengan mengetahui konsentrasi ion dalam larutan"], answer: "Dengan mengetahui Ksp dan persamaan reaksi ionisasi senyawa" },
  
    { question: "6. Dalam larutan yang jenuh, jika ada penambahan sedikit senyawa yang lebih banyak larut, apa yang akan terjadi?", options: ["Larutan akan menjadi lebih jenuh", "Larutan akan mendekati keadaan kesetimbangan baru", "Larutan akan mengendap", "Larutan tidak akan berubah"], answer: "Larutan akan mendekati keadaan kesetimbangan baru" },
  
    { question: "7. Jika Ksp untuk senyawa MX2 adalah 9.0 x 10^-6, berapakah kelarutannya dalam mol/L?", options: ["3.0 x 10^-3", "9.0 x 10^-6", "3.0 x 10^-2", "3.0 x 10^-4"], answer: "3.0 x 10^-3" },
  
    { question: "8. Apa yang dimaksud dengan larutan jenuh?", options: ["Larutan yang mengandung senyawa yang larut pada konsentrasi maksimum", "Larutan yang mengandung senyawa pada konsentrasi minimum", "Larutan yang tidak mengandung senyawa terlarut", "Larutan yang mengandung senyawa dalam bentuk padatan"], answer: "Larutan yang mengandung senyawa yang larut pada konsentrasi maksimum" },
  
    { question: "9. Jika Ksp untuk senyawa AB adalah 1.0 x 10^-10, apakah yang bisa disimpulkan mengenai kelarutannya?", options: ["Senyawa ini sangat mudah larut", "Senyawa ini sedikit larut", "Senyawa ini sangat tidak larut", "Senyawa ini mudah larut pada suhu tinggi"], answer: "Senyawa ini sangat tidak larut" },
  
    { question: "10. Mengapa hasil kali kelarutan (Ksp) penting dalam menentukan kelarutan senyawa?", options: ["Karena Ksp menggambarkan kelarutan senyawa dalam pelarut", "Karena Ksp menunjukkan kestabilan senyawa dalam larutan", "Karena Ksp menggambarkan konsentrasi ion di luar larutan", "Karena Ksp menunjukkan jumlah senyawa dalam bentuk padatan"], answer: "Karena Ksp menggambarkan kelarutan senyawa dalam pelarut" },
  
    { question: "11. Jika dua senyawa memiliki Ksp yang sama, bagaimana cara mengetahui senyawa mana yang lebih larut?", options: ["Senyawa dengan Ksp yang lebih tinggi akan lebih larut", "Kelarutan senyawa tidak hanya tergantung pada Ksp", "Kelarutan senyawa dengan Ksp lebih rendah akan lebih tinggi", "Tidak ada hubungan antara Ksp dan kelarutan"], answer: "Kelarutan senyawa tidak hanya tergantung pada Ksp" },
  
    { question: "12. Bagaimana pengaruh pH terhadap kelarutan senyawa yang membentuk garam amonium?", options: ["Kelarutan senyawa akan meningkat dengan menurunnya pH", "Kelarutan senyawa akan meningkat dengan meningkatnya pH", "Kelarutan senyawa tidak terpengaruh oleh pH", "Kelarutan senyawa akan tetap konstan pada pH 7"], answer: "Kelarutan senyawa akan meningkat dengan menurunnya pH" },
  
    { question: "13. Jika kita memiliki senyawa X2Y yang memiliki Ksp sebesar 1.0 x 10^-12, berapa kelarutan senyawa tersebut dalam mol/L?", options: ["1.0 x 10^-4", "1.0 x 10^-6", "1.0 x 10^-12", "1.0 x 10^-3"], answer: "1.0 x 10^-4" },
  
    { question: "14. Apa yang terjadi pada kelarutan senyawa jika konsentrasi ion pengotor meningkat?", options: ["Kelarutan senyawa akan menurun", "Kelarutan senyawa akan meningkat", "Kelarutan senyawa akan tetap konstan", "Kelarutan senyawa akan bergantung pada suhu"], answer: "Kelarutan senyawa akan menurun" },
  
    { question: "15. Mengapa larutan jenuh bisa terbentuk dalam sistem kimia?", options: ["Karena larutan mencapai keadaan kesetimbangan antara senyawa yang larut dan senyawa yang mengendap", "Karena suhu dalam sistem sangat tinggi", "Karena adanya ion-ion tambahan dalam larutan", "Karena adanya perubahan suhu dalam sistem"], answer: "Karena larutan mencapai keadaan kesetimbangan antara senyawa yang larut dan senyawa yang mengendap" },
  
    { question: "16. Apa yang dimaksud dengan pengaruh ion bersama dalam kelarutan?", options: ["Ion yang sudah ada dalam larutan akan mengurangi kelarutan senyawa baru", "Ion yang sudah ada dalam larutan akan meningkatkan kelarutan senyawa baru", "Ion yang ada dalam larutan tidak mempengaruhi kelarutan", "Ion yang ada hanya mempengaruhi pH larutan"], answer: "Ion yang sudah ada dalam larutan akan mengurangi kelarutan senyawa baru" },
  
    { question: "17. Bagaimana cara meningkatkan kelarutan senyawa yang sangat sedikit larut?", options: ["Dengan menambah suhu atau menggunakan pelarut yang sesuai", "Dengan mengurangi suhu atau menambah volume pelarut", "Dengan menambah ion pengotor", "Dengan mengurangi jumlah ion dalam larutan"], answer: "Dengan menambah suhu atau menggunakan pelarut yang sesuai" },
  
    { question: "18. Jika kelarutan senyawa X2Y dalam air adalah 2.0 x 10^-3 M, apa yang dapat kita simpulkan tentang Ksp-nya?", options: ["Ksp untuk senyawa X2Y akan lebih besar daripada 2.0 x 10^-3", "Ksp untuk senyawa X2Y akan lebih kecil daripada 2.0 x 10^-3", "Ksp untuk senyawa X2Y akan sama dengan 2.0 x 10^-3", "Tidak ada hubungan antara kelarutan dan Ksp"], answer: "Ksp untuk senyawa X2Y akan lebih besar daripada 2.0 x 10^-3" },
  
    { question: "19. Apa yang dimaksud dengan kondisi supersaturasi dalam larutan?", options: ["Larutan yang mengandung lebih banyak zat terlarut daripada yang dapat larut pada suhu tertentu", "Larutan yang tidak mengandung zat terlarut", "Larutan yang mengandung ion dalam jumlah yang sangat sedikit", "Larutan yang mengandung lebih sedikit zat terlarut daripada yang dapat larut"], answer: "Larutan yang mengandung lebih banyak zat terlarut daripada yang dapat larut pada suhu tertentu" },
  
    { question: "20. Jika Ksp senyawa Z2O adalah 1.0 x 10^-8, berapa konsentrasi ion Z+ yang terdapat dalam larutan jenuh senyawa tersebut?", options: ["1.0 x 10^-4", "1.0 x 10^-8", "1.0 x 10^-2", "1.0 x 10^-6"], answer: "1.0 x 10^-4" }
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