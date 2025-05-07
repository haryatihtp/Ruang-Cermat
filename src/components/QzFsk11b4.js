import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab4 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan aliran fluida laminar?",
        options: [
            "Aliran fluida yang tidak teratur dan kacau",
            "Aliran fluida yang bergerak secara paralel dengan kecepatan konstan",
            "Aliran fluida yang berputar-putar",
            "Aliran fluida yang cepat dan turbulen"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan aliran turbulen?",
        options: [
            "Aliran fluida yang teratur dengan kecepatan konstan",
            "Aliran fluida yang tidak teratur dan kacau",
            "Aliran fluida yang bergerak dengan kecepatan sangat lambat",
            "Aliran fluida yang sepenuhnya terhenti"
        ],
        answer: 1
    },
    {
        question: "Rumus hukum kontinuitas untuk aliran fluida adalah?",
        options: [
            "A₁v₁ = A₂v₂",
            "P = ρgh",
            "F = ma",
            "F/A = P"
        ],
        answer: 0
    },
    {
        question: "Jika area saluran fluida menyempit, apa yang terjadi dengan kecepatan fluida?",
        options: [
            "Kecepatan fluida berkurang",
            "Kecepatan fluida tetap",
            "Kecepatan fluida meningkat",
            "Tidak ada perubahan"
        ],
        answer: 2
    },
    {
        question: "Hukum Bernoulli menyatakan bahwa pada aliran fluida yang ideal, tekanan dan kecepatan berhubungan dengan cara?",
        options: [
            "Semakin tinggi kecepatan fluida, semakin rendah tekanannya",
            "Semakin tinggi kecepatan fluida, semakin tinggi tekanannya",
            "Tekanan dan kecepatan selalu sebanding",
            "Kecepatan tidak mempengaruhi tekanan"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan viskositas fluida?",
        options: [
            "Kemampuan fluida untuk mengalir",
            "Gaya yang menyebabkan fluida mengalir",
            "Resistansi fluida terhadap perubahan bentuk",
            "Tekanan yang diberikan fluida"
        ],
        answer: 2
    },
    {
        question: "Hukum Bernoulli berlaku untuk?",
        options: [
            "Aliran fluida yang tidak stabil",
            "Aliran fluida ideal",
            "Aliran fluida dengan gesekan",
            "Aliran fluida dengan turbulen"
        ],
        answer: 1
    },
    {
        question: "Hukum kontinuitas dalam aliran fluida menyatakan bahwa?",
        options: [
            "Aliran fluida memiliki volume yang konstan",
            "Kecepatan fluida selalu meningkat seiring waktu",
            "Luas penampang tidak berpengaruh terhadap aliran",
            "Fluida mengalir dengan kecepatan konstan di seluruh saluran"
        ],
        answer: 0
    },
    {
        question: "Bagaimana hubungan antara tekanan dan kecepatan dalam hukum Bernoulli?",
        options: [
            "Tekanan bertambah ketika kecepatan fluida meningkat",
            "Tekanan berkurang ketika kecepatan fluida meningkat",
            "Tekanan dan kecepatan selalu sebanding",
            "Tekanan tidak dipengaruhi oleh kecepatan"
        ],
        answer: 1
    },
    {
        question: "Apa yang terjadi pada fluida yang mengalir di dalam pipa dengan perubahan diameter secara bertahap?",
        options: [
            "Kecepatan fluida tetap sama di seluruh bagian pipa",
            "Fluida tidak dapat mengalir",
            "Kecepatan fluida berubah sesuai dengan diameter pipa",
            "Fluida mengalir hanya di bagian pipa yang lebih kecil"
        ],
        answer: 2
    },
    {
        question: "Kecepatan fluida dalam saluran pipa besar adalah 3 m/s dan luas penampang pipa adalah 2 m². Berapa kecepatan fluida dalam saluran pipa kecil dengan luas penampang 1 m²?",
        options: [
            "6 m/s",
            "1.5 m/s",
            "3 m/s",
            "4 m/s"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan angka Reynolds?",
        options: [
            "Ukuran aliran turbulen dalam fluida",
            "Rasio antara gaya viskositas dan gaya inersia",
            "Rasio antara gaya gravitasi dan gaya tekanan",
            "Pengukuran kecepatan fluida"
        ],
        answer: 1
    },
    {
        question: "Jika angka Reynolds lebih besar dari 4000, maka aliran fluida cenderung?",
        options: [
            "Laminar",
            "Turbulen",
            "Tidak dapat diprediksi",
            "Ideal"
        ],
        answer: 1
    },
    {
        question: "Berapa nilai angka Reynolds yang menunjukkan transisi dari aliran laminar ke turbulen?",
        options: [
            "2000",
            "4000",
            "10000",
            "5000"
        ],
        answer: 0
    },
    {
        question: "Jika kecepatan fluida meningkat, apa yang terjadi pada tekanan dalam pipa tersebut?",
        options: [
            "Tekanan meningkat",
            "Tekanan berkurang",
            "Tekanan tetap",
            "Tekanan berubah secara acak"
        ],
        answer: 1
    },
    {
        question: "Jika dua fluida dengan viskositas berbeda mengalir di dalam pipa yang sama, maka?",
        options: [
            "Fluida dengan viskositas lebih tinggi akan mengalir lebih cepat",
            "Fluida dengan viskositas lebih rendah akan mengalir lebih cepat",
            "Fluida dengan viskositas lebih tinggi akan mengalir lebih lambat",
            "Kedua fluida akan mengalir dengan kecepatan yang sama"
        ],
        answer: 2
    },
    {
        question: "Dalam aplikasi pipa Venturi, apa yang terjadi ketika pipa menyempit?",
        options: [
            "Kecepatan fluida berkurang",
            "Kecepatan fluida meningkat",
            "Tekanan meningkat",
            "Tidak ada perubahan"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan aliran ideal?",
        options: [
            "Aliran fluida dengan gesekan minimal atau tidak ada",
            "Aliran fluida dengan gesekan tinggi",
            "Aliran fluida yang mengarah ke atas",
            "Aliran fluida yang turbulen"
        ],
        answer: 0
    },
    {
        question: "Salah satu contoh penerapan hukum Bernoulli adalah?",
        options: [
            "Penggunaan payung",
            "Penggunaan pesawat terbang",
            "Penggunaan mobil",
            "Penggunaan sepeda"
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
      <h1>Quiz Bab 4: Fluida Dinamis</h1>

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