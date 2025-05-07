import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab8 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan pertumbuhan pada makhluk hidup?",
      options: [
        "Perubahan bentuk tubuh secara permanen",
        "Penambahan ukuran dan volume sel",
        "Proses adaptasi terhadap lingkungan",
        "Perubahan perilaku akibat rangsangan"
      ],
      answer: 1
    },
    {
      question: "Apa faktor utama yang mempengaruhi pertumbuhan tanaman?",
      options: [
        "Cahaya, suhu, dan hormon",
        "Air, tekanan udara, dan warna daun",
        "Hama, pupuk, dan polusi",
        "Jenis tanah, tekanan, dan pH"
      ],
      answer: 0
    },
    {
      question: "Apa peran auksin dalam pertumbuhan tanaman?",
      options: [
        "Menghambat pembelahan sel",
        "Merangsang pemanjangan sel",
        "Meningkatkan proses respirasi",
        "Mengurangi sensitivitas cahaya"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan diferensiasi sel?",
      options: [
        "Perubahan struktur sel untuk fungsi khusus",
        "Pembelahan sel menjadi dua bagian",
        "Peningkatan jumlah sel dalam jaringan",
        "Proses penghapusan sel yang tidak diperlukan"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi hormon giberelin dalam tumbuhan?",
      options: [
        "Merangsang perkecambahan biji",
        "Menghambat pertumbuhan akar",
        "Mengurangi pembentukan bunga",
        "Menghentikan pembelahan sel"
      ],
      answer: 0
    },
    {
      question: "Apa perbedaan utama antara pertumbuhan primer dan sekunder?",
      options: [
        "Pertumbuhan primer terjadi di akar, sekunder di batang",
        "Pertumbuhan primer meningkatkan panjang, sekunder meningkatkan diameter",
        "Pertumbuhan primer hanya terjadi pada tanaman muda, sekunder pada tanaman tua",
        "Pertumbuhan primer membutuhkan cahaya, sekunder tidak"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan fotoperiodisme?",
      options: [
        "Respon tumbuhan terhadap durasi cahaya dan kegelapan",
        "Proses fotosintesis di malam hari",
        "Adaptasi tumbuhan terhadap intensitas cahaya",
        "Pengaruh suhu terhadap pertumbuhan tanaman"
      ],
      answer: 0
    },
    {
      question: "Apa peran hormon sitokinin dalam tumbuhan?",
      options: [
        "Merangsang pembelahan sel",
        "Menghambat pemanjangan akar",
        "Mengatur pembentukan bunga",
        "Mengurangi respirasi"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi selama fase perkembangan embrionik pada tumbuhan?",
      options: [
        "Pembentukan akar dan daun",
        "Pembelahan sel tanpa diferensiasi",
        "Pematangan jaringan reproduksi",
        "Penyesuaian terhadap lingkungan"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan dormansi pada biji?",
      options: [
        "Periode aktivitas metabolik tinggi",
        "Keadaan istirahat untuk mencegah perkecambahan",
        "Proses pembentukan jaringan baru",
        "Adaptasi terhadap kekurangan air"
      ],
      answer: 1
    },
    {
      question: "Apa peran etilen dalam proses pertumbuhan dan perkembangan tumbuhan?",
      options: [
        "Menghambat pematangan buah",
        "Merangsang pematangan buah",
        "Mengurangi jumlah stomata",
        "Menghambat pembentukan akar"
      ],
      answer: 1
    },
    {
      question: "Bagaimana gravitropisme memengaruhi pertumbuhan akar?",
      options: [
        "Akar tumbuh menjauhi gravitasi",
        "Akar tumbuh menuju gravitasi",
        "Akar tidak terpengaruh gravitasi",
        "Akar tumbuh ke arah cahaya"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan perkembangan pada makhluk hidup?",
      options: [
        "Proses penambahan massa",
        "Perubahan struktur dan fungsi menuju kedewasaan",
        "Adaptasi terhadap lingkungan",
        "Proses fotosintesis"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi pada fase vegetatif tanaman?",
      options: [
        "Pembentukan bunga dan buah",
        "Pertumbuhan daun, batang, dan akar",
        "Dormansi biji",
        "Pematangan biji"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan hormon absisat?",
      options: [
        "Hormon yang merangsang pertumbuhan",
        "Hormon yang menghambat pertumbuhan",
        "Hormon yang mempercepat fotosintesis",
        "Hormon yang mengatur pembentukan bunga"
      ],
      answer: 1
    },
    {
      question: "Apa peran cahaya dalam proses fototropisme?",
      options: [
        "Menghambat pertumbuhan batang",
        "Mengarahkan pertumbuhan batang ke arah cahaya",
        "Mengurangi aktivitas fotosintesis",
        "Menghambat pembentukan daun"
      ],
      answer: 1
    },
    {
      question: "Apa perbedaan utama antara tumbuhan monokotil dan dikotil dalam pertumbuhan sekunder?",
      options: [
        "Monokotil memiliki pertumbuhan sekunder yang lebih aktif",
        "Dikotil memiliki kambium untuk pertumbuhan sekunder",
        "Monokotil memiliki pertumbuhan primer lebih cepat",
        "Dikotil tidak memiliki jaringan pengangkut"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi pada fase generatif tanaman?",
      options: [
        "Dormansi biji",
        "Pembentukan bunga, buah, dan biji",
        "Pertumbuhan akar dan batang",
        "Penyesuaian terhadap lingkungan"
      ],
      answer: 1
    },
    {
      question: "Apa fungsi hormon brassinosteroid dalam tumbuhan?",
      options: [
        "Menghambat pemanjangan sel",
        "Meningkatkan ketahanan terhadap stres",
        "Mengurangi fotosintesis",
        "Menghambat pembentukan bunga"
      ],
      answer: 1
    },
    {
      question: "Apa yang dimaksud dengan senescens pada tumbuhan?",
      options: [
        "Proses pembentukan daun baru",
        "Penuaan dan kematian jaringan",
        "Adaptasi terhadap lingkungan",
        "Proses perkecambahan biji"
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
      <h1>Quiz Bab 8: Tumbuh Kembang Makhluk Hidup</h1>

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

export default QuizBab8;