import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab1 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Sebuah roda memiliki momen inersia sebesar 5 kg·m² dan dipercepat dengan torsi sebesar 10 N·m. Berapa percepatan sudut roda tersebut?",
      options: [
        "1 rad/s²",
        "2 rad/s²",
        "3 rad/s²",
        "4 rad/s²"
      ],
      answer: 1
    },
    {
      question: "Apa yang terjadi pada sebuah benda yang berada dalam keadaan seimbang rotasi?",
      options: [
        "Resultan gaya nol",
        "Resultan torsi nol",
        "Percepatan sudut nol",
        "Kecepatan sudut nol"
      ],
      answer: 1
    },
    {
      question: "Sebuah batang homogen panjang 2 meter dan massa 10 kg diputar pada salah satu ujungnya. Tentukan momen inersia batang tersebut!",
      options: [
        "6.67 kg·m²",
        "3.33 kg·m²",
        "2.67 kg·m²",
        "1.67 kg·m²"
      ],
      answer: 0
    },
    {
      question: "Seorang pelari berlari di atas treadmill yang bergerak dengan kecepatan sudut konstan. Apa yang menyebabkan treadmill tersebut tetap bergerak tanpa percepatan sudut?",
      options: [
        "Resultan gaya nol",
        "Resultan torsi nol",
        "Gaya gesek statis",
        "Gaya normal"
      ],
      answer: 1
    },
    {
      question: "Bagaimana perubahan momen inersia roda jika massanya digeser dari pusat ke tepi roda?",
      options: [
        "Bertambah",
        "Berkurang",
        "Tetap",
        "Tidak terdefinisi"
      ],
      answer: 0
    },
    {
      question: "Sebuah benda diputar dengan percepatan sudut konstan 4 rad/s². Jika momen inersianya 2 kg·m², berapa besar torsinya?",
      options: [
        "6 N·m",
        "8 N·m",
        "12 N·m",
        "16 N·m"
      ],
      answer: 1
    },
    {
      question: "Apa pengaruh massa terhadap titik pusat gravitasi benda homogen?",
      options: [
        "Titik pusat gravitasi mendekati bagian yang lebih ringan",
        "Titik pusat gravitasi mendekati bagian yang lebih berat",
        "Tidak ada pengaruh",
        "Titik pusat gravitasi selalu di tengah"
      ],
      answer: 3
    },
    {
      question: "Sebuah bola bergulir menuruni bidang miring tanpa tergelincir. Apa jenis energi yang terlibat dalam gerakan ini?",
      options: [
        "Energi potensial dan energi kinetik translasi",
        "Energi kinetik translasi dan energi kinetik rotasi",
        "Energi potensial dan energi kinetik rotasi",
        "Energi potensial saja"
      ],
      answer: 1
    },
    {
      question: "Sebuah benda memiliki momen inersia besar. Apa yang dapat disimpulkan tentang gerakan rotasinya?",
      options: [
        "Benda sulit dipercepat",
        "Benda lebih mudah dipercepat",
        "Benda tidak dapat berotasi",
        "Kecepatan sudut benda konstan"
      ],
      answer: 0
    },
    {
      question: "Dua roda dengan momen inersia berbeda dihubungkan oleh tali. Jika tali tidak meluncur, apa yang dapat disimpulkan tentang percepatan sudut kedua roda?",
      options: [
        "Percepatan sudut sama",
        "Percepatan sudut lebih besar pada roda yang lebih kecil",
        "Percepatan sudut lebih besar pada roda yang lebih besar",
        "Tidak dapat ditentukan"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama gaya sentripetal dalam rotasi benda tegar?",
      options: [
        "Menjaga benda tetap berputar",
        "Mencegah benda meluncur keluar lintasan",
        "Mengubah kecepatan sudut benda",
        "Memperbesar momen inersia"
      ],
      answer: 1
    },
    {
      question: "Sebuah balok diletakkan di atas bidang miring licin. Apa yang menentukan titik di mana balok mulai berguling?",
      options: [
        "Sudut kemiringan",
        "Massa balok",
        "Jarak antara pusat massa dan tepi balok",
        "Panjang bidang miring"
      ],
      answer: 0
    },
    {
      question: "Sebuah benda berotasi dengan kecepatan sudut konstan. Berapa besar torsinya?",
      options: [
        "Nol",
        "Sama dengan percepatan sudut",
        "Sama dengan momen inersia",
        "Tidak dapat ditentukan"
      ],
      answer: 0
    },
    {
      question: "Sebuah bola dilepaskan dari atas bidang miring. Apa yang terjadi jika gesekan cukup untuk mencegah tergelincir?",
      options: [
        "Bola bergulir tanpa tergelincir",
        "Bola tetap diam",
        "Bola tergelincir tanpa bergulir",
        "Bola meluncur lebih cepat"
      ],
      answer: 0
    },
    {
      question: "Apa yang dimaksud dengan momen gaya (torsi)?",
      options: [
        "Gaya yang bekerja pada benda",
        "Gaya yang menyebabkan rotasi benda",
        "Hasil kali gaya dengan waktu",
        "Resultan gaya yang seimbang"
      ],
      answer: 1
    },
    {
      question: "Seorang siswa berlari di atas papan datar yang berputar. Apa yang terjadi pada kecepatan sudut papan jika siswa bergerak lebih dekat ke tepi?",
      options: [
        "Bertambah",
        "Berkurang",
        "Tetap",
        "Tidak dapat ditentukan"
      ],
      answer: 1
    },
    {
      question: "Momen inersia ditentukan oleh?",
      options: [
        "Massa benda saja",
        "Distribusi massa terhadap sumbu rotasi",
        "Kecepatan sudut benda",
        "Torsi yang bekerja pada benda"
      ],
      answer: 1
    },
    {
      question: "Sebuah cakram dipercepat oleh gaya konstan. Apa yang memengaruhi percepatan sudutnya?",
      options: [
        "Momen inersia",
        "Kecepatan awal",
        "Radius cakram",
        "Luas permukaan cakram"
      ],
      answer: 0
    },
    {
      question: "Sebuah benda bergerak melingkar dengan kecepatan sudut bertambah. Apa yang terjadi pada percepatan sentripetalnya?",
      options: [
        "Bertambah",
        "Berkurang",
        "Tetap",
        "Tidak terdefinisi"
      ],
      answer: 0
    },
    {
      question: "Apa hubungan antara momen gaya dan percepatan sudut?",
      options: [
        "Seperti gaya dan percepatan dalam gerak lurus",
        "Tidak berhubungan",
        "Berbanding terbalik",
        "Seperti kecepatan dan percepatan"
      ],
      answer: 0
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
      <h1>Quiz Bab 1: Dinamika Rotasi Dan Benda Tegar</h1>

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

export default QuizBab1;