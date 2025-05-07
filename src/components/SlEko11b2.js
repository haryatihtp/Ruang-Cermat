import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal2 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Ketika harga kopi naik, permintaan teh meningkat. Fenomena ini disebut..",
      options: [
        { label: "A. Kelangkaan", value: "A" },
        { label: "B. Barang substitusi", value: "B", isCorrect: true },
        { label: "C. Barang komplementer", value: "C" },
        { label: "D. Prinsip ekonomi", value: "D" },
      ],
      explanation: "Barang substitusi adalah barang yang dapat menggantikan barang lain. Ketika harga kopi naik, konsumen beralih ke teh karena teh bisa menjadi pengganti kopi.",
    },
    {
      question: "Kebijakan pemerintah untuk meningkatkan jumlah uang beredar guna mendorong pertumbuhan ekonomi disebut...",
      options: [
        { label: "A. Kebijakan proteksionisme", value: "A", isCorrect: true },
        { label: "B.  Kebijakan moneter ekspansif", value: "B" },
        { label: "C. Kebijakan suku bunga tinggi", value: "C" },
        { label: "D. Kebijakan perdagangan bebas", value: "D" },
      ],
      explanation: "Kebijakan moneter ekspansif dilakukan dengan cara meningkatkan jumlah uang beredar untuk mendorong pertumbuhan ekonomi, biasanya dengan menurunkan suku bunga.",
    },
    {
      question: "Data yang menunjukkan bahwa tingkat pengangguran di Indonesia naik 5% pada tahun 2023 merupakan bagian dari...",
      options: [
        { label: "A. Ekonomi makro", value: "A" },
        { label: "B. Ekonomi normatif", value: "B" },
        { label: "C. Ekonomi mikro", value: "C", isCorrect: true },
        { label: "D. Ekonomi terapan", value: "D" },
      ],
      explanation: "Ekonomi deskriptif hanya menggambarkan fakta atau data ekonomi yang terjadi tanpa menganalisis lebih dalam.",
    },
    {
      question: "Pemerintah seharusnya menurunkan pajak untuk meningkatkan daya beli masyarakat.” Pernyataan ini termasuk...",
      options: [
        { label: "A. Ekonomi mikro ", value: "A" },
        { label: "B. Ekonomi terapan", value: "B" },
        { label: "C. Ekonomi normatif", value: "C", isCorrect: true },
        { label: "D.Ekonomi normatif", value: "D" },
      ],
      explanation: "Ekonomi normatif melibatkan pendapat dan rekomendasi tentang kebijakan ekonomi yang ideal.",
    },
    
        {
          question: "Sebuah studi menunjukkan bahwa kenaikan pajak bahan bakar mempengaruhi biaya transportasi dan harga barang. Studi ini termasuk dalam...",
          options: [
            { label: "A.Ekonomi deskriptif", value: "A" },
            { label: "B.Ekonomi terapan ", value: "B", isCorrect: true },
            { label: "C.Ekonomi makro ", value: "C" },
            { label: "D.Ekonomi normatif", value: "D" },
          ],
          explanation: "Ekonomi terapan memanfaatkan teori ekonomi untuk menganalisis dan menyelesaikan masalah nyata.",
        },
    ]

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setIsAnswered(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
        <div className="latihan-soal1-question">
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="latihan-soal1-nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          > 
            ← Soal Sebelumnya
          </button>
          <button
            className="latihan-soal1-nav-button next"
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal2;



