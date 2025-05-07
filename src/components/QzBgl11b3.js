import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab3 = () => {
  const questions = [
    {
      question: "Apa yang dimaksud dengan respirasi sel?",
      options: [
        "Proses pembentukan glukosa",
        "Proses pengeluaran energi dalam sel",
        "Proses pembentukan protein",
        "Proses pengangkutan oksigen ke dalam sel"
      ],
      answer: 1
    },
    {
      question: "Di mana proses glikolisis terjadi?",
      options: [
        "Di dalam nukleus",
        "Di sitoplasma",
        "Di mitokondria",
        "Di retikulum endoplasma"
      ],
      answer: 1
    },
    {
      question: "Apa yang dihasilkan dari proses respirasi anaerob?",
      options: [
        "Air dan karbon dioksida",
        "Glukosa dan oksigen",
        "Energi dan asam laktat atau etanol",
        "ATP dan asam amino"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi utama mitokondria?",
      options: [
        "Menurunkan suhu sel",
        "Menjaga bentuk sel",
        "Menghasilkan energi dalam bentuk ATP",
        "Menyimpan informasi genetik"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi selama siklus Krebs?",
      options: [
        "Pembentukan glukosa",
        "Produksi ATP dan pemecahan asam piruvat",
        "Pembentukan protein",
        "Pengeluaran oksigen"
      ],
      answer: 1
    },
    {
      question: "Apa peran NADH dalam respirasi sel?",
      options: [
        "Menjadi sumber energi langsung untuk sel",
        "Mentransfer elektron dalam rantai transpor elektron",
        "Menghasilkan ATP secara langsung",
        "Menjaga keseimbangan ion dalam sel"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan oksidasi dalam respirasi sel?",
      options: [
        "Penyerapan oksigen oleh sel",
        "Pembentukan ATP dari ADP dan Pi",
        "Pelepasan elektron dan proton dari molekul",
        "Pengambilan glukosa ke dalam sel"
      ],
      answer: 2
    },
    {
      question: "Apa yang dihasilkan dari rantai transpor elektron?",
      options: [
        "Glukosa dan oksigen",
        "ATP dan air",
        "Asam laktat dan karbon dioksida",
        "NADH dan FADH2"
      ],
      answer: 1
    },
    {
      question: "Proses apa yang terjadi di mitokondria dalam respirasi aerob?",
      options: [
        "Glikolisis",
        "Siklus Krebs",
        "Fermentasi",
        "Fotosintesis"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan fermentasi?",
      options: [
        "Proses respirasi sel tanpa menggunakan oksigen",
        "Proses pembentukan ATP dengan oksigen",
        "Proses pengangkutan glukosa",
        "Proses sintesis protein"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi dalam proses fotosintesis?",
      options: [
        "Molekul oksigen digunakan untuk menghasilkan energi",
        "Glukosa diubah menjadi ATP",
        "Energi dari cahaya matahari diubah menjadi energi kimia",
        "ATP diubah menjadi energi cahaya"
      ],
      answer: 2
    },
    {
      question: "Apa yang dimaksud dengan oksigen sebagai akseptor akhir dalam rantai transpor elektron?",
      options: [
        "Oksigen digunakan untuk memecah glukosa",
        "Oksigen mengikat elektron dan proton untuk membentuk air",
        "Oksigen menghasilkan ATP",
        "Oksigen mengubah NADH menjadi NAD+"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan ATP?",
      options: [
        "Molekul yang digunakan untuk menyimpan energi dalam sel",
        "Proses produksi energi di dalam mitokondria",
        "Molekul yang digunakan dalam proses pembelahan sel",
        "Zat yang mengatur metabolisme dalam sel"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi jika oksigen tidak tersedia selama respirasi sel?",
      options: [
        "Proses glikolisis berlanjut, menghasilkan ATP dan asam laktat atau etanol",
        "Respirasi sel berhenti sepenuhnya",
        "Mitokondria menghasilkan lebih banyak ATP",
        "Proses fotosintesis dimulai"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan energi potensial dalam konteks respirasi sel?",
      options: [
        "Energi yang tersimpan dalam molekul glukosa",
        "Energi yang digunakan untuk memecah ATP",
        "Energi yang digunakan dalam fotosintesis",
        "Energi yang dihasilkan selama transpor elektron"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan degradasi glikogen?",
      options: [
        "Proses penguraian glikogen menjadi glukosa",
        "Proses sintesis glikogen dari glukosa",
        "Proses pemecahan glukosa menjadi asam laktat",
        "Proses pengambilan glukosa ke dalam sel"
      ],
      answer: 0
    },
    {
      question: "Di mana proses fotosintesis berlangsung?",
      options: [
        "Di dalam mitokondria",
        "Di dalam kloroplas",
        "Di sitoplasma",
        "Di dalam nukleus"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan aktivitas enzimatik?",
      options: [
        "Proses penguraian energi dalam tubuh",
        "Proses pengaturan metabolisme dalam sel",
        "Proses pembentukan molekul organik",
        "Proses pembentukan energi dalam sel"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan NADPH dalam fotosintesis?",
      options: [
        "NADPH adalah molekul yang membawa energi",
        "NADPH adalah molekul yang membawa elektron",
        "NADPH digunakan untuk pembentukan ATP",
        "NADPH mengkatalisis proses glikolisis"
      ],
      answer: 1
    },
    {
      question: "Apa perbedaan utama antara respirasi aerob dan anaerob?",
      options: [
        "Respirasi aerob memerlukan oksigen, sementara anaerob tidak",
        "Respirasi aerob menghasilkan lebih banyak ATP dibandingkan anaerob",
        "Respirasi aerob tidak memerlukan glukosa",
        "Respirasi anaerob hanya terjadi pada tumbuhan"
      ],
      answer: 0
    }
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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Bab 3: Proses Pengaturan pada Tumbuhan</h1>
      {showResult ? (
        <div className="result-container">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>{score >= 15 ? "Luar biasa! Anda memahami materi dengan baik." : "Tetap semangat! Pelajari lagi materi ini untuk memperkuat pemahaman Anda."}</p>
          <button onClick={resetQuiz}>Ulangi Kuis</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                className="btn-option" 
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <p>Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizBab3;