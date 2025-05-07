import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Unsur logam transisi manakah yang memiliki sifat feromagnetik paling kuat?", options: ["Besi (Fe)", "Kobalt (Co)", "Nikel (Ni)", "Mangan (Mn)"], answer: "Besi (Fe)" },
    { question: "2. Apa yang terjadi pada titik didih unsur dalam satu golongan dari atas ke bawah pada tabel periodik?", options: ["Titik didih meningkat", "Titik didih menurun", "Titik didih tetap", "Tidak ada pola"], answer: "Titik didih menurun" },
    { question: "3. Unsur manakah yang memiliki energi ionisasi pertama tertinggi di periode ke-3?", options: ["Klorin (Cl)", "Aluminium (Al)", "Silikon (Si)", "Argon (Ar)"], answer: "Argon (Ar)" },
    { question: "4. Mengapa unsur gas mulia memiliki reaktivitas yang sangat rendah?", options: ["Karena konfigurasi elektronnya stabil", "Karena memiliki elektron valensi tidak penuh", "Karena bersifat logam", "Karena tidak memiliki orbital d"], answer: "Karena konfigurasi elektronnya stabil" },
    { question: "5. Apa nama unsur yang dapat membentuk paduan amalgam?", options: ["Seng (Zn)", "Raksa (Hg)", "Timah (Sn)", "Tembaga (Cu)"], answer: "Raksa (Hg)" },
    { question: "6. Senyawa manakah yang merupakan oksida amfoter?", options: ["Al2O3", "CaO", "SO3", "K2O"], answer: "Al2O3" },
    { question: "7. Dalam proses produksi logam aluminium, bijih bauksit harus terlebih dahulu diolah menjadi apa?", options: ["Aluminium oksida", "Aluminium sulfat", "Aluminium karbonat", "Aluminium hidroksida"], answer: "Aluminium oksida" },
    { question: "8. Manakah dari berikut yang merupakan sifat kimia unsur halogen?", options: ["Beracun dan reaktif", "Bersifat reduktor kuat", "Tidak berwarna", "Tidak larut dalam air"], answer: "Beracun dan reaktif" },
    { question: "9. Apa yang menyebabkan senyawa dari logam transisi sering berwarna?", options: ["Elektron pada orbital d yang tidak penuh", "Adanya ikatan ionik", "Elektron pada orbital s", "Adanya orbital p yang kosong"], answer: "Elektron pada orbital d yang tidak penuh" },
    { question: "10. Unsur manakah yang dapat digunakan sebagai katalis dalam reaksi Haber-Bosch?", options: ["Platina (Pt)", "Besi (Fe)", "Tembaga (Cu)", "Nikel (Ni)"], answer: "Besi (Fe)" },
    { question: "11. Apa alasan utama unsur alkali tanah lebih reaktif daripada logam transisi?", options: ["Elektron valensi lebih sedikit", "Energi ionisasi lebih besar", "Radius atom lebih kecil", "Konfigurasi elektron penuh"], answer: "Elektron valensi lebih sedikit" },
    { question: "12. Unsur radioaktif manakah yang paling sering digunakan sebagai bahan bakar dalam reaktor nuklir?", options: ["Uranium (U)", "Plutonium (Pu)", "Thorium (Th)", "Radium (Ra)"], answer: "Uranium (U)" },
    { question: "13. Senyawa apa yang dihasilkan dari reaksi antara klorin dan air?", options: ["HCl dan HClO", "H2O2 dan HCl", "NaCl dan NaClO", "H2 dan Cl2"], answer: "HCl dan HClO" },
    { question: "14. Unsur apakah yang berada pada blok f dalam tabel periodik?", options: ["Lantanida dan aktinida", "Logam alkali", "Logam transisi", "Gas mulia"], answer: "Lantanida dan aktinida" },
    { question: "15. Senyawa manakah yang merupakan oksida asam?", options: ["CO2", "MgO", "Na2O", "CaO"], answer: "CO2" },
    { question: "16. Apa sifat khusus dari unsur-unsur pada golongan 18 (gas mulia)?", options: ["Tidak reaktif", "Bersifat oksidator kuat", "Bersifat reduktor kuat", "Sangat mudah terbakar"], answer: "Tidak reaktif" },
    { question: "17. Proses apa yang digunakan untuk memurnikan logam seperti tembaga?", options: ["Elektrolisis", "Distilasi", "Kromatografi", "Kristalisasi"], answer: "Elektrolisis" },
    { question: "18. Dalam reaksi redoks, zat yang mengalami oksidasi akan?", options: ["Melepaskan elektron", "Menambah elektron", "Mengalami reduksi", "Menjadi tidak stabil"], answer: "Melepaskan elektron" },
    { question: "19. Apa fungsi dari unsur karbon dalam produksi baja?", options: ["Menguatkan struktur baja", "Meningkatkan reaktivitas", "Menurunkan titik leleh", "Menambah warna"], answer: "Menguatkan struktur baja" },
    { question: "20. Apa yang menyebabkan unsur transisi memiliki berbagai bilangan oksidasi?", options: ["Elektron pada orbital d", "Konfigurasi penuh pada orbital s", "Kestabilan orbital p", "Adanya proton tambahan"], answer: "Elektron pada orbital d" }
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