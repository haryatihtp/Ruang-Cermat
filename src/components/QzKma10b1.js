import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const KuisReaksiRedoksKelas10 = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1.Pernyataan berikut yang benar tentang reaksi redoks adalah", options: ["Oksidasi adalah pelepasan elektron dan reduksi adalah penyerapan elektron", " Oksidasi adalah proses di mana bilangan oksidasi suatu unsur berkurang", "Reduksi adalah proses di mana bilangan oksidasi suatu unsur bertambah", "Dalam reaksi redoks, hanya terjadi perubahan bilangan oksidasi tanpa perpindahan elektron"], answer: "Oksidasi adalah pelepasan elektron dan reduksi adalah penyerapan elektron0" },
    { question: "2.Apa peran utama bilangan oksidasi dalam analisis reaksi redoks?", options: ["Menentukan energi reaksi", "Menentukan unsur yang teroksidasi dan tereduksi", "Mengidentifikasi ikatan kovalen polar", "Menjelaskan struktur molekul"], answer: "Menentukan unsur yang teroksidasi dan tereduksi" },
    { question: "3.Manakah dari pernyataan berikut yang benar mengenai agen pengoksidasi?", options: ["Agen pengoksidasi selalu mengalami oksidasi", "Agen pengoksidasi adalah zat yang kehilangan elektron", "Agen pengoksidasi selalu mengalami reduksi", "Agen pengoksidasi tidak terlibat dalam reaksi redoks"], answer: "Agen pengoksidasi selalu mengalami reduksi" },
    { question: "4.Dalam proses elektrolisis, reaksi yang terjadi pada katoda selalu berupa:", options: ["Oksidasi", "Reduksi", "Pelepasan ion positif", "Pelepasan ion negatif"], answer: "Reduksi" },
    { question: "5.Manakah yang merupakan ciri-ciri reaksi redoks?", options: ["Tidak ada perubahan bilangan oksidasi", "Tidak ada perpindahan elektron.", "Terjadi perubahan bilangan oksidasi pada satu atau lebih unsur", " Selalu menghasilkan energi dalam bentuk panas"], answer: "Terjadi perubahan bilangan oksidasi pada satu atau lebih unsur" },
    { question: "6.Apa yang dimaksud dengan reaksi disproposionasi?", options: [" Reaksi di mana satu zat mengalami oksidasi dan zat lain mengalami reduksi", "Reaksi di mana satu zat mengalami oksidasi dan reduksi secara bersamaan.", "Reaksi di mana tidak ada perubahan bilangan oksidasi", " Reaksi antara ion positif dan ion negatif."], answer: "Reaksi di mana satu zat mengalami oksidasi dan reduksi secara bersamaan." },
    { question: "7.Mengapa oksigen sering dianggap sebagai agen pengoksidasi yang kuat?", options: ["Karena memiliki elektronegativitas yang rendah", " Karena memiliki kecenderungan untuk menerima elektron", "Karena selalu mengalami oksidasi.", "Karena selalu memiliki bilangan oksidasi -1."], answer: " Karena memiliki kecenderungan untuk menerima elektron" },
    { question: "8.Pernyataan berikut benar mengenai reaksi redoks adalah", options: ["Pernyataan berikut benar mengenai reaksi redoks adalah", "Semua reaksi redoks melibatkan transfer proton.", "Semua reaksi redoks melibatkan perubahan bilangan oksidasi", "Semua reaksi redoks berlangsung dalam larutan"], answer: "Semua reaksi redoks melibatkan perubahan bilangan oksidasi" },
    { question: "9.Dalam reaksi redoks, agen pereduksi adalah:", options: [" Zat yang mengalami oksidasi.", "Zat yang mengalami reduksi.", "Zat yang tidak berubah dalam reaksi", "Zat yang mencegah terjadinya oksidasi"], answer: " Zat yang mengalami oksidasi." },
    { question: "10.Manakah dari berikut ini yang merupakan sifat umum agen pengoksidasi??", options: ["Memberikan elektron ke zat lain.", "Mengalami reduksi selama reaksi.", "Mengalami peningkatan bilangan oksidasi.", "Selalu berupa ion negatif."], answer: " Mengalami reduksi selama reaksi" },
    { question: "11.Dalam reaksi redoks, apa yang terjadi jika suatu unsur mengalami oksidasi? ", options: ["Bilangan oksidasinya berkurang", "Bilangan oksidasinya tetap2", "Transpor elektron", "Fermentasi"], answer: "Transpor elektron" },
    { question: "12.Manakah dari pernyataan berikut yang benar tentang elektrokimia?", options: ["Semua reaksi elektrokimia adalah reaksi redoks", "Elektrokimia hanya melibatkan reaksi reduksi.", "Elektrokimia tidak melibatkan perpindahan elektron", "Elektrokimia tidak memerlukan larutan elektrolit."], answer: "Semua reaksi elektrokimia adalah reaksi redoks" },
    { question: "13.Bilangan oksidasi maksimum yang dapat dicapai oleh sulfur adalah", options: ["+4", "+6", "-2", "+2"], answer: "+6" },
    { question: "14.Apa yang terjadi pada bilangan oksidasi dalam reaksi reduksi?", options: ["Bilangan oksidasi bertambah.", "Bilangan oksidasi berkurang.", "Bilangan oksidasi tetap", "Tidak ada perubahan bilangan oksidasi."], answer: "Bilangan oksidasi berkurang." },
    { question: "15.Manakah dari pernyataan berikut yang benar mengenai reaksi redoks?", options: ["Unsur bebas tidak pernah mengalami perubahan bilangan oksidasi", "Dalam reaksi redoks, selalu ada satu unsur yang mengalami oksidasi dan satu yang mengalami reduksi.", "Dalam reaksi redoks, selalu ada satu unsur yang mengalami oksidasi dan satu yang mengalami reduksi.", "Dalam reaksi redoks, selalu ada satu unsur yang mengalami oksidasi dan satu yang mengalami reduksi."], answer: "Dalam reaksi redoks, selalu ada satu unsur yang mengalami oksidasi dan satu yang mengalami reduksi." },
    { question: "16.Dalam reaksi redoks, elektron berpindah dari", options: ["Agen pereduksi ke agen pengoksidasi.", "Agen pengoksidasi ke agen pereduksi.", "Unsur netral ke ion bermuatan positif.", "Unsur netral ke unsur bebas lainnya."], answer: "Agen pereduksi ke agen pengoksidasi." },
    { question: "17.Mengapa Fe dapat bertindak sebagai agen pengoksidasi maupun agen pereduksi dalam reaksi redoks?", options: ["karena Fe memiliki elektro valensi yagng tidak terikat", "karena Fe meiliki lebih dari satu bilangan oksidasi", "karena Fe selalu dalam keadaan unsur bebas", "karena Fe memiliki energi ionisasi yang tinggi"], answer: "karena Fe memiliki lebih dari satu bilangan oksidasi" },
    { question: "18.Mengapa logam aktif seperti natrium mudah teroksidasi dalam reaksi redoks?", options: ["Karena logam aktif memiliki bilangan oksidasi yang tinggi", "Karena logam aktif memiliki energi ionisasi yang rendah", "Karena logam aktif memiliki afinitas elektron yang tinggi", "Karena logam aktif selalu membentuk ikatan kovalen."], answer: "Karena logam aktif memiliki energi ionisasi yang rendah" },
    { question: "19.Manakah dari pernyataan berikut yang benar mengenai bilangan oksidasi hidrogen?", options: ["Hidrogen selalu memiliki bilangan oksidasi +1", "Hidrogen memiliki bilangan oksidasi -1 dalam hidrida logam", "Hidrogen memiliki bilangan oksidasi -1 dalam hidrida logam", "Hidrogen tidak berperan dalam reaksi redoks."], answer: "Hidrogen memiliki bilangan oksidasi -1 dalam hidrida logam." },
    { question: "20.Manakah dari berikut ini yang benar tentang reaksi autoredoks?", options: ["Reaksi autoredoks melibatkan dua zat berbeda.", "Reaksi autoredoks hanya melibatkan agen pereduksi.", "Reaksi autoredoks terjadi ketika suatu zat bertindak sebagai agen pengoksidasi dan agen pereduksi.", "Reaksi autoredoks tidak melibatkan perubahan bilangan oksidasi"],  answer: "Reaksi autoredoks terjadi ketika suatu zat bertindak sebagai agen pengoksidasi dan agen pereduksi." }
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
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Try Out Kimia Kelas 10</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
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

export default KuisReaksiRedoksKelas10;
