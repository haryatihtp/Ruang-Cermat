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
      question: "Enzim bekerja dengan menurunkan:",
      options: [
        { label: "A. Energi reaksi", value: "A" },
        { label: "B. Energi aktivasi", value: "B", isCorrect: true },
        { label: "C. Suhu reaksi", value: "C" },
        { label: "D. Kecepatan reaksi", value: "D" },
      ],
      explanation: "Enzim adalah biokatalis yang mempercepat reaksi kimia dengan menurunkan energi aktivasi, yaitu energi minimum yang diperlukan untuk memulai suatu reaksi kimia. Enzim tidak mengubah energi total reaksi, tetapi hanya mempercepat jalannya reaksi.",
    },
    {
      question: "Enzim yang berperan dalam pemecahan amilum menjadi maltosa adalah:",
      options: [
        { label: "A. Lipase", value: "A", isCorrect: true },
        { label: "B. Amilase", value: "B" },
        { label: "C. Protease", value: "C" },
        { label: "D. Maltase", value: "D" },
      ],
      explanation: "Amilase adalah enzim yang mengkatalisis pemecahan amilum (polisakarida) menjadi maltosa (disakarida). Enzim ini ditemukan dalam saliva (amilase saliva) dan pankreas (amilase pankreas).",
    },
    {
      question: "Berikut ini yang bukan merupakan sifat enzim adalah:",
      options: [
        { label: "A. Bekerja spesifik pada substrat tertentu", value: "A" },
        { label: "B. Tidak habis digunakan setelah reaksi", value: "B" },
        { label: "C. Mempercepat reaksi tanpa energi", value: "C", isCorrect: true },
        { label: "D. Dipengaruhi oleh suhu dan pH", value: "D" },
      ],
      explanation: "Enzim mempercepat reaksi tetapi tetap membutuhkan energi, meskipun energi aktivasi yang diperlukan lebih rendah dibandingkan tanpa enzim. Selain itu, enzim memiliki sifat spesifik, tidak habis setelah reaksi, dan aktivitasnya dipengaruhi oleh suhu serta pH.",
    },
    {
      question: "Dalam metabolisme, proses pemecahan molekul kompleks menjadi molekul yang lebih sederhana disebut:",
      options: [
        { label: "A. Katabolisme ", value: "A" },
        { label: "B. Anabolisme", value: "B" },
        { label: "C.Fotosintesis ", value: "C", isCorrect: true },
        { label: "D.Fermentasi", value: "D" },
      ],
      explanation: "Katabolisme adalah proses pemecahan molekul kompleks, seperti glukosa atau protein, menjadi molekul sederhana dengan pelepasan energi. Contohnya adalah respirasi seluler.",
    },
    
        {
          question: "Enzim bekerja dengan cara:",
          options: [
            { label: "A.Mengubah produk reaksi ", value: "A" },
            { label: "B.Berikatan dengan substrat pada sisi aktif", value: "B", isCorrect: true },
            { label: "C.Memperlambat laju reaksi ", value: "C" },
            { label: "D.SMenghilangkan energi dari sistem", value: "D" },
          ],
          explanation: "Enzim memiliki sisi aktif yang spesifik di mana substrat akan berikatan. Proses ini membentuk kompleks enzim-substrat yang membantu mempercepat terjadinya reaksi kimia. Setelah reaksi selesai, produk dilepaskan dan enzim dapat digunakan kembali.",
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