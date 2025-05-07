import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Mengapa larutan penyangga dapat mempertahankan pH meskipun ada penambahan asam atau basa?", options: ["Karena larutan penyangga mengandung asam kuat", "Karena larutan penyangga mengandung asam lemah dan basa konjugat", "Karena larutan penyangga mengandung garam dan air", "Karena larutan penyangga mengandung air dan gas"], answer: "Karena larutan penyangga mengandung asam lemah dan basa konjugat" },
  
    { question: "2. Apa yang terjadi jika larutan penyangga ditambahkan asam?", options: ["Asam akan bereaksi dengan basa konjugat dalam larutan", "Asam akan bereaksi dengan air", "Asam akan menurunkan pH", "Asam akan mengubah komposisi ion-ion dalam larutan"], answer: "Asam akan bereaksi dengan basa konjugat dalam larutan" },
  
    { question: "3. Jika pH larutan penyangga berada di bawah 7, apa yang dapat kita simpulkan tentang komponen penyusunnya?", options: ["Larutan penyangga mengandung asam kuat dan basa konjugat", "Larutan penyangga mengandung asam lemah dan basa konjugat", "Larutan penyangga mengandung basa lemah dan asam konjugat", "Larutan penyangga mengandung asam kuat dan air"], answer: "Larutan penyangga mengandung asam lemah dan basa konjugat" },
  
    { question: "4. Apa yang dimaksud dengan kapasitas penyangga dalam suatu larutan?", options: ["Jumlah ion yang tersedia untuk bereaksi dengan asam atau basa", "Jumlah air yang terkandung dalam larutan", "Kemampuan larutan untuk menurunkan pH", "Jumlah molekul asam lemah dalam larutan"], answer: "Jumlah ion yang tersedia untuk bereaksi dengan asam atau basa" },
  
    { question: "5. Bagaimana pengaruh penambahan basa terhadap larutan penyangga yang sudah terbentuk?", options: ["Basa akan bereaksi dengan asam lemah dan mengurangi konsentrasi H+", "Basa akan menambah konsentrasi H+", "Basa akan mengubah sifat asam konjugat dalam larutan", "Basa akan menyebabkan pH larutan menjadi asam"], answer: "Basa akan bereaksi dengan asam lemah dan mengurangi konsentrasi H+" },
  
    { question: "6. Mengapa larutan penyangga efektif dalam mempertahankan pH pada rentang tertentu?", options: ["Karena komponen asam dan basa konjugat dalam larutan seimbang", "Karena larutan penyangga mengandung garam", "Karena asam lemah mengionisasi sepenuhnya", "Karena hanya basa lemah yang ada dalam larutan"], answer: "Karena komponen asam dan basa konjugat dalam larutan seimbang" },
  
    { question: "7. Jika larutan penyangga yang mengandung asam asetat (CH3COOH) dan natrium asetat (CH3COONa) ditambahkan dengan basa kuat, apa yang terjadi?", options: ["Ion OH- akan bereaksi dengan asam asetat, menghasilkan air dan ion asetat", "Ion OH- akan bereaksi dengan ion CH3COO-", "Ion OH- akan bereaksi dengan air", "Basa kuat akan menetralisir asam dalam larutan"], answer: "Ion OH- akan bereaksi dengan asam asetat, menghasilkan air dan ion asetat" },
  
    { question: "8. Bagaimana pengaruh penambahan asam terhadap kapasitas penyangga suatu larutan?", options: ["Kapasitas penyangga akan meningkat", "Kapasitas penyangga akan menurun", "Kapasitas penyangga tetap konstan", "Kapasitas penyangga tidak terpengaruh"], answer: "Kapasitas penyangga akan menurun" },
  
    { question: "9. Dalam larutan penyangga, apa yang terjadi jika konsentrasi asam lemah lebih tinggi daripada basa konjugat?", options: ["pH larutan akan menurun", "pH larutan akan meningkat", "pH larutan akan tetap konstan", "pH larutan akan tergantung pada suhu"], answer: "pH larutan akan menurun" },
  
    { question: "10. Bagaimana cara menghitung pH dari larutan penyangga menggunakan rumus Henderon-Hasselbalch?", options: ["pH = pKa + log([A-]/[HA])", "pH = pKa + log([HA]/[A-])", "pH = pKa - log([A-]/[HA])", "pH = pKa + log([H+]/[A-])"], answer: "pH = pKa + log([A-]/[HA])" },
  
    { question: "11. Apa yang terjadi jika larutan penyangga dicampur dengan garam yang memiliki pasangan asam-basa konjugat?", options: ["Komponen-komponen tersebut akan meningkatkan kapasitas penyangga", "Komponen-komponen tersebut akan menurunkan kapasitas penyangga", "Larutan akan mengalami penurunan pH", "Larutan akan menjadi lebih netral"], answer: "Komponen-komponen tersebut akan meningkatkan kapasitas penyangga" },
  
    { question: "12. Jika pH larutan penyangga terlalu tinggi, apa yang dapat dilakukan untuk menurunkan pH?", options: ["Menambahkan lebih banyak basa konjugat", "Menambahkan lebih banyak asam lemah", "Menambahkan air", "Menambahkan garam netral"], answer: "Menambahkan lebih banyak asam lemah" },
  
    { question: "13. Mengapa larutan penyangga penting dalam sistem biologis?", options: ["Karena dapat menjaga pH tubuh agar tetap stabil", "Karena dapat meningkatkan pH darah", "Karena dapat menetralisir asam dalam tubuh", "Karena dapat mengurangi jumlah ion H+"], answer: "Karena dapat menjaga pH tubuh agar tetap stabil" },
  
    { question: "14. Dalam larutan penyangga, apa peran basa konjugat?", options: ["Basa konjugat menerima ion H+ untuk menstabilkan pH", "Basa konjugat memberikan ion OH- untuk menurunkan pH", "Basa konjugat mengikat ion H+ untuk meningkatkan pH", "Basa konjugat tidak berpengaruh pada pH"], answer: "Basa konjugat menerima ion H+ untuk menstabilkan pH" },
  
    { question: "15. Jika sebuah larutan penyangga mengandung 0,1 M asam asetat dan 0,1 M natrium asetat, berapa pH larutan tersebut jika pKa asam asetat adalah 4,76?", options: ["4,76", "7", "5,76", "3,76"], answer: "4,76" },
  
    { question: "16. Apa yang akan terjadi pada pH larutan penyangga jika konsentrasi asam lemah berkurang?", options: ["pH larutan akan meningkat", "pH larutan akan menurun", "pH larutan tidak berubah", "pH larutan akan tetap netral"], answer: "pH larutan akan meningkat" },
  
    { question: "17. Apa perbedaan utama antara larutan penyangga asam dan larutan penyangga basa?", options: ["Penyangga asam mengandung basa konjugat, sedangkan penyangga basa mengandung asam konjugat", "Penyangga asam mengandung asam konjugat, sedangkan penyangga basa mengandung basa konjugat", "Penyangga asam mengandung ion H+, sedangkan penyangga basa mengandung ion OH-", "Tidak ada perbedaan, keduanya memiliki kapasitas penyangga yang sama"], answer: "Penyangga asam mengandung asam konjugat, sedangkan penyangga basa mengandung basa konjugat" },
  
    { question: "18. Dalam larutan penyangga, apa yang terjadi jika terjadi penambahan asam kuat?", options: ["Asam kuat akan menurunkan pH secara drastis", "Basa konjugat dalam larutan akan bereaksi dengan ion H+ untuk menstabilkan pH", "Asam kuat tidak akan mempengaruhi pH", "Ion H+ akan bereaksi dengan air menghasilkan OH-"], answer: "Basa konjugat dalam larutan akan bereaksi dengan ion H+ untuk menstabilkan pH" },
  
    { question: "19. Bagaimana cara meningkatkan kapasitas penyangga larutan?", options: ["Dengan menambah konsentrasi asam lemah dan basa konjugat", "Dengan menambah jumlah air", "Dengan menambah konsentrasi basa lemah", "Dengan menambah konsentrasi ion OH-"], answer: "Dengan menambah konsentrasi asam lemah dan basa konjugat" },
  
    { question: "20. Dalam larutan penyangga, apa yang terjadi jika konsentrasi basa konjugat lebih tinggi daripada asam lemah?", options: ["pH larutan akan meningkat", "pH larutan akan menurun", "pH larutan akan tetap konstan", "pH larutan akan bergantung pada suhu"], answer: "pH larutan akan meningkat" }
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