import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal9 = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Berikut ini yang merupakan defenisi dari mutasi adalah suatu perubahan pada?",
      options: [
        { label: "A. Gen saja", value: "A" },
        { label: "B. Jumlah autosom", value: "B" },
        { label: "C. Gen dalam kromosom", value: "C", isCorrect: true },
        { label: "D. Sel dan jaringan", value: "D" },
      ],
      explanation: "Mutasi merupakan suatu proses perubahan gen pembawa sifat yang menyebabkan berubahnya sifat individu pembawanya dan diturunkan. Secara sederhana, mutasi dapat diartikan sebagai perubahan gen dalam kromosom.",
    },
    {
      question: "Mutasi yang terjadi karena perubahan jumlah kromosom disebut ploidi. Perubahan itu ada beberapa macam, yakni:",
      options: [
        { label: "A. Euploidi dan Aneuploid.", value: "A", isCorrect: true },
        { label: "B. Tranparansi dan Mutagen", value: "B" },
        { label: "C. Tranversi dan Transisi.Proses reproduksi yang terjadi pada makhluk hidup", value: "C" },
        { label: "D. Insersi dan Delesi.", value: "D" },
      ],
      explanation: "PPloidi memiliki dua macam perubahan, yakni Euploidi dan Aneuploid. Euploidi merupakan mutasi yang melibatkan pengurangan atau penambahan dalam perangkat kromosom (genom). Sedangkan, Aneuploid merupakan mutasi kromosom yang tidak melibatkan perubahan pada seluruh genom, tetapi terjadi hanya pada salah satu kromosom dari genom.",
    },
    {
      question: "Salah satu akibat yang dialami individu jika terjadi mutasi gen adalah?",
      options: [
        { label: "A. Perubahan sifat tampak saja", value: "A" },
        { label: "B. Terjadi perubahan genotif", value: "B" },
        { label: "C. Perubahan genotif dan fenotif individu", value: "C", isCorrect: true },
        { label: "D. Pertukaran genotif sedangkan fenotif tetap", value: "D" },
      ],
      explanation: "Ketika suatu individu mengalami mutasi gen atau mutasi titik, maka tidak hanya genotif yang berubah, tetapi fenotif atau sifat tampaknya juga berubah.",
    },
    {
      question: "Peristiwa mutasi yang terjadi pada suatu individu dapat diwariskan pada keturunannya jika mutasi tersebut terjadi di dalam?",
      options: [
        { label: "A. Sel somatik", value: "A" },
        { label: "B. Sel kelamin", value: "B", isCorrect: true },
        { label: "C. Sel darah", value: "C" },
        { label: "D. Sel plasenta", value: "D" },
      ],
      explanation: "Ketika suatu individu mengalami peristiwa mutasi sehingga terjadi perubahan genotif dan fenotif, maka perubahan sifat yang dialaminya akan diwariskan kepada keturunannya jika peristiwa mutasi tersebut terjadi di dalam sel kelamin (gonad).",
    },
    {
      question: "Berikut adalah penyebab terjadinya mutasi spontan, kecuali?",
      options: [
        { label: "A. Radiasi sinar radioaktif", value: "A" },
        { label: "B. Sinar kosmis", value: "B" },
        { label: "C. Polusi udara", value: "C", isCorrect: true },
        { label: "D. Ionisasi internal", value: "D" },
      ],
      explanation: "Mutasi spontan atau mutasi alami dapat terjadi karena pengaruh beberapa faktor diantaranya radiasi sinar kosmis, ultraviolet, bahan-bahan radioaktif, radiasi dan ionisasi internal, mikroorganisme, dan salah pasangan basa yang terjadi secara kebetulan pada saat replikasi DNA akibat panas yang tidak sesuai.",
    },
  ];

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
      setIsAnswered(answers[currentQuestionIndex + 1] !== undefined);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>
            Skor Anda: {score}/{questions.length}
          </p> 
          <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
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
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex] !== undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] !== undefined && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
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
            onClick={
              currentQuestionIndex === questions.length - 1
                ? handleFinishQuiz
                : goToNextQuestion
            }
          >
            {currentQuestionIndex === questions.length - 1
              ? "Selesai"
              : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal9;
