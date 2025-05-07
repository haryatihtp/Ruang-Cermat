import React, { useState } from "react";
import "../css/TryOut.css";
const QuizBab4 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari darah dalam tubuh manusia?",
      options: [
        "Menghasilkan energi",
        "Mengangkut oksigen dan nutrisi",
        "Mengontrol suhu tubuh",
        "Mencerna makanan"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan hemoglobin?",
      options: [
        "Protein dalam plasma darah",
        "Enzim yang membantu pencernaan",
        "Pigmen darah merah yang mengikat oksigen",
        "Hormon yang mengatur tekanan darah"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi utama dari sistem limfatik?",
      options: [
        "Mengangkut oksigen",
        "Menyaring darah",
        "Mengembalikan cairan jaringan ke darah",
        "Menghasilkan energi"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi pada kapiler darah selama pertukaran zat?",
      options: [
        "Nutrisi dan oksigen berpindah dari darah ke jaringan",
        "Darah mengalir dengan tekanan tinggi",
        "Karbon dioksida diangkut ke arteri",
        "Semua cairan keluar dari pembuluh darah"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan osmosis?",
      options: [
        "Pergerakan molekul dari konsentrasi tinggi ke rendah",
        "Pergerakan air melalui membran semi-permeabel",
        "Transportasi zat menggunakan energi ATP",
        "Proses pengikatan oksigen oleh hemoglobin"
      ],
      answer: 1
    },
    {
      question: "Apa perbedaan utama antara arteri dan vena?",
      options: [
        "Arteri membawa darah ke jantung, vena membawa darah dari jantung",
        "Arteri membawa darah kaya oksigen, vena membawa darah kaya karbon dioksida",
        "Arteri memiliki katup, vena tidak",
        "Arteri lebih kecil dari vena"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan difusi?",
      options: [
        "Pergerakan zat dari konsentrasi tinggi ke rendah",
        "Transportasi zat menggunakan protein membran",
        "Pergerakan air melalui membran semi-permeabel",
        "Proses pembentukan energi dalam sel"
      ],
      answer: 0
    },
    {
      question: "Apa peran utama alveolus dalam paru-paru?",
      options: [
        "Menyaring udara yang masuk",
        "Tempat pertukaran gas antara darah dan udara",
        "Mengatur suhu tubuh",
        "Mengangkut darah ke jantung"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan tekanan osmotik?",
      options: [
        "Tekanan yang mendorong air melalui membran semi-permeabel",
        "Tekanan darah di pembuluh kapiler",
        "Tekanan yang mengatur difusi zat",
        "Tekanan udara dalam alveolus"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi pada eritrosit selama transportasi oksigen?",
      options: [
        "Eritrosit memproduksi oksigen",
        "Hemoglobin dalam eritrosit mengikat oksigen",
        "Eritrosit menghancurkan karbon dioksida",
        "Eritrosit menyaring darah"
      ],
      answer: 1
    },
    {
      question: "Bagaimana karbon dioksida diangkut dalam darah?",
      options: [
        "Sebagian besar larut dalam plasma",
        "Sebagian besar diubah menjadi ion bikarbonat",
        "Diangkut oleh leukosit",
        "Disimpan dalam eritrosit"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi jika tekanan darah terlalu tinggi?",
      options: [
        "Arteri menjadi lebih elastis",
        "Risiko penyakit kardiovaskular meningkat",
        "Difusi zat meningkat",
        "Transportasi oksigen terganggu"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi utama katup dalam sistem peredaran darah?",
      options: [
        "Mengatur tekanan darah",
        "Mencegah aliran balik darah",
        "Mengontrol suhu tubuh",
        "Mengangkut nutrisi"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan filtrasi di ginjal?",
      options: [
        "Proses pembentukan urine",
        "Pemisahan zat berdasarkan ukuran molekul",
        "Pergerakan air melalui membran",
        "Pengikatan oksigen oleh hemoglobin"
      ],
      answer: 1
    },
    {
      question: "Apa yang menyebabkan edema?",
      options: [
        "Peningkatan tekanan osmotik",
        "Penumpukan cairan di jaringan",
        "Kekurangan hemoglobin",
        "Gangguan pada alveolus"
      ],
      answer: 1
    },
    {
      question: "Bagaimana mekanisme kerja sistem transportasi aktif?",
      options: [
        "Molekul bergerak melawan gradien konsentrasi dengan energi ATP",
        "Molekul bergerak mengikuti gradien konsentrasi",
        "Air bergerak melalui membran semi-permeabel",
        "Protein membran memindahkan zat tanpa energi"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi pada anemia?",
      options: [
        "Jumlah leukosit meningkat",
        "Hemoglobin dalam darah berkurang",
        "Tekanan darah meningkat",
        "Transportasi oksigen meningkat"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan ventilasi paru-paru?",
      options: [
        "Proses pertukaran gas dalam alveolus",
        "Proses menghirup dan menghembuskan udara",
        "Transportasi oksigen dalam darah",
        "Pengaturan tekanan osmotik"
      ],
      answer: 1
    },
    {
      question: "Bagaimana pengaruh olahraga terhadap sistem peredaran darah?",
      options: [
        "Meningkatkan elastisitas pembuluh darah",
        "Mengurangi aliran darah ke otot",
        "Menurunkan produksi hemoglobin",
        "Meningkatkan tekanan osmotik"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan tekanan darah sistolik?",
      options: [
        "Tekanan darah saat jantung beristirahat",
        "Tekanan darah saat jantung memompa darah",
        "Tekanan dalam kapiler",
        "Tekanan di vena"
      ],
      answer: 1
    }
  ];

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
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
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Bab 4: Transpor dan Pertukaran Zat pada Manusia</h1>

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

export default QuizBab4;