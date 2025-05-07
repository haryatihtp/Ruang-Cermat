import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab3 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan tekanan hidrostatik?",
        options: [
            "Tekanan yang dihasilkan oleh gas",
            "Tekanan yang dihasilkan oleh cairan diam",
            "Tekanan udara di atmosfer",
            "Tekanan dalam benda padat"
        ],
        answer: 1
    },
    {
        question: "Rumus tekanan hidrostatik adalah?",
        options: [
            "ρgh",
            "F/A",
            "mg",
            "1/2ρv²"
        ],
        answer: 0
    },
    {
        question: "Satuan tekanan dalam SI adalah?",
        options: [
            "Pascal (Pa)",
            "Newton (N)",
            "Joule (J)",
            "Watt (W)"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan hukum Archimedes?",
        options: [
            "Benda yang tenggelam di dalam fluida mengalami tekanan ke bawah",
            "Benda dalam fluida akan mengapung jika massa jenisnya lebih kecil dari fluida",
            "Benda dalam fluida mengalami gaya angkat yang sama dengan berat fluida yang dipindahkan",
            "Tekanan di fluida meningkat seiring dengan kedalaman"
        ],
        answer: 2
    },
    {
        question: "Benda akan tenggelam dalam fluida jika?",
        options: [
            "Massa jenis benda lebih kecil dari fluida",
            "Massa jenis benda sama dengan fluida",
            "Massa jenis benda lebih besar dari fluida",
            "Tidak ada hubungan antara massa jenis dan tenggelamnya benda"
        ],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan prinsip Pascal?",
        options: [
            "Tekanan pada fluida berubah secara linier dengan kedalaman",
            "Tekanan yang diberikan pada fluida diam diteruskan ke semua arah tanpa perubahan",
            "Tekanan hanya bekerja pada permukaan benda",
            "Fluida hanya memberikan gaya ke bawah"
        ],
        answer: 1
    },
    {
        question: "Manakah contoh penerapan prinsip Pascal?",
        options: [
            "Barometer",
            "Hidrometer",
            "Dongkrak hidrolik",
            "Pipa Venturi"
        ],
        answer: 2
    },
    {
        question: "Sebuah benda dengan massa jenis 500 kg/m³ dimasukkan ke dalam air (massa jenis air = 1000 kg/m³). Apa yang akan terjadi pada benda tersebut?",
        options: [
            "Benda akan tenggelam",
            "Benda akan mengapung",
            "Benda akan tetap diam di tengah fluida",
            "Tidak dapat ditentukan"
        ],
        answer: 1
    },
    {
        question: "Berat jenis adalah?",
        options: [
            "Gaya per satuan luas",
            "Berat per satuan volume",
            "Massa per satuan volume",
            "Energi per satuan massa"
        ],
        answer: 1
    },
    {
        question: "Apa hubungan tekanan fluida dengan kedalaman?",
        options: [
            "Tekanan berkurang seiring kedalaman",
            "Tekanan meningkat seiring kedalaman",
            "Tekanan tidak berubah dengan kedalaman",
            "Tekanan hanya bergantung pada luas permukaan fluida"
        ],
        answer: 1
    },
    {
        question: "Hukum Archimedes berlaku untuk?",
        options: [
            "Benda yang sepenuhnya tenggelam di fluida",
            "Benda yang sebagian tenggelam di fluida",
            "Benda yang mengapung di permukaan fluida",
            "Semua jawaban benar"
        ],
        answer: 3
    },
    {
        question: "Jika luas penampang kecil sebuah dongkrak hidrolik adalah 2 m² dan luas penampang besarnya adalah 10 m², maka gaya yang dihasilkan di penampang besar adalah?",
        options: [
            "5 kali gaya di penampang kecil",
            "10 kali gaya di penampang kecil",
            "2 kali gaya di penampang kecil",
            "Tetap sama dengan gaya di penampang kecil"
        ],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan tekanan absolut?",
        options: [
            "Tekanan total pada suatu titik dalam fluida",
            "Tekanan yang diukur relatif terhadap tekanan atmosfer",
            "Tekanan yang hanya bekerja di permukaan fluida",
            "Tekanan yang sama dengan tekanan hidrostatik"
        ],
        answer: 0
    },
    {
        question: "Alat yang digunakan untuk mengukur tekanan atmosfer adalah?",
        options: [
            "Manometer",
            "Barometer",
            "Termometer",
            "Anemometer"
        ],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan gaya apung?",
        options: [
            "Gaya yang mendorong benda ke bawah dalam fluida",
            "Gaya yang mendorong benda ke atas dalam fluida",
            "Gaya yang menyebabkan benda tenggelam",
            "Gaya gravitasi pada benda dalam fluida"
        ],
        answer: 1
    },
    {
        question: "Jika sebuah benda dengan volume 0,02 m³ mengapung di air, berapakah gaya apung yang bekerja pada benda tersebut? (massa jenis air = 1000 kg/m³, g = 10 m/s²)",
        options: [
            "20 N",
            "200 N",
            "2 N",
            "2000 N"
        ],
        answer: 3
    },
    {
        question: "Hidrometer digunakan untuk mengukur?",
        options: [
            "Tekanan fluida",
            "Kedalaman fluida",
            "Massa jenis fluida",
            "Energi fluida"
        ],
        answer: 2
    },
    {
        question: "Tekanan pada fluida statis dalam bejana tertutup tidak bergantung pada?",
        options: [
            "Kedalaman fluida",
            "Jenis fluida",
            "Luas permukaan bejana",
            "Massa jenis fluida"
        ],
        answer: 2
    },
    {
        question: "Jika tekanan atmosfer adalah 101325 Pa, tekanan absolut pada kedalaman 10 m di air adalah? (massa jenis air = 1000 kg/m³, g = 10 m/s²)",
        options: [
            "101325 Pa",
            "200000 Pa",
            "201325 Pa",
            "10000 Pa"
        ],
        answer: 2
    },
    {
        question: "Alat yang digunakan untuk mengukur tekanan fluida dalam pipa adalah?",
        options: [
            "Manometer",
            "Barometer",
            "Hidrometer",
            "Termometer"
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
      <h1>Quiz Bab 3: Fluida Statis</h1>

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