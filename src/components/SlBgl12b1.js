import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa itu pertumbuhan?",
      options: [
        { label: "A. Perubahan fisik berupa pertambahan ukuran, volume, tinggi, dan massa", value: "A", isCorrect: true },
        { label: "B. Proses menuju tercapainya kedewasaan", value: "B" },
        { label: "C. Perkembangan psikis dari usia bayi, anak-anak, dan menjadi dewasa", value: "C" },
        { label: "D. Tidak ada Jawaban yang benar", value: "D" },
      ],
      explanation:
        "Pertumbuhan dalam biologi mengacu kepada perubahan fisik berupa pertambahan ukuran, volume, tinggi, dan massa.",
    },
    {
      question: "Apa itu perkembangan?",
      options: [
        { label: "A. Perubahan fisik berupa pertambahan ukuran, volume, tinggi, dan massa", value: "A" },
        { label: "B. Proses pertambahan ukuran yang tidak dapat kembali ke asal (irreversibel)", value: "B" },
        { label: "C. Proses menuju tercapainya kedewasaan", value: "C", isCorrect: true },
        { label: "D. Semua jawaban benar", value: "D" },
      ],
      explanation:
        "Perkembangan adalah proses menuju tercapainya kedewasaan.",
    },
    {
      question: "Apa yang dimaksud dengan fase embrionik dalam pertumbuhan dan perkembangan hewan?",
      options: [
        { label: "A.Fase dari zigot sampai dewasa", value: "A" },
        { label: "B.Fase setelah lahir atau menetas", value: "B" },
        { label: "C.  Fase dari zigot sampai terbentuknya embrio sebelum lahir atau menetas", value: "C",isCorrect: true},
        { label: "D.Fase setelah mencapai usia dewasa ", value: "D" },
      ],
      explanation:
        "Fase embrionik mencakup perkembangan dari zigot hingga terbentuknya embrio sebelum lahir atau menetas. Pada fase ini terjadi pembelahan sel, diferensiasi, dan pembentukan struktur dasar tubuh."
    },
    {
        question: "Fase pascaembrionik pada hewan dimulai sejak kapan?",
        options: [
          { label: "A.Setelah lahir atau menetas", value: "A", isCorrect: true },
          { label: "B. Setelah zigot terbentuk", value: "B" },
          { label: "C.Setelah embrio terbentuk", value: "C" },
          { label: "D. Setelah mencapai fase dewasa", value: "D" },
        ],
        explanation:
          "Fase pascaembrionik dimulai setelah hewan lahir atau menetas dan berlangsung hingga hewan mencapai usia dewasa. Pada fase ini terjadi pertumbuhan lebih lanjut dan perkembangan organ-organ tubuh."
      },
      {
        question: "Di mana letak jaringan meristem pada tumbuhan?",
        options: [
          { label: "A. Ujung batang, ujung akar, dan kambium", value: "A", isCorrect: true },
          { label: "B.Seluruh permukaan daun", value: "B" },
          { label: "C. Hanya di bagian akar saja", value: "C" },
          { label: "D. Di setiap bagian batang", value: "D" },
        ],
        explanation:
          "Jaringan meristem adalah jaringan yang aktif membelah dan terletak di ujung batang, ujung akar, serta kambium. Jaringan ini berperan penting dalam pertumbuhan tumbuhan."
      },
      {
        question: "Apa yang dihasilkan dari aktivitas jaringan meristem di ujung batang atau akar?",
        options: [
          { label: "A.Pertumbuhan sekunder", value: "A" },
          { label: "B. Pertumbuhan primer", value: "B", isCorrect: true },
          { label: "C. Pembentukan bunga", value: "C" },
          { label: "D. Pembuahan", value: "D" },
        ],
        explanation:
          "Aktivitas jaringan meristem di ujung batang dan akar menghasilkan pertumbuhan primer, yaitu pertumbuhan yang menyebabkan tumbuhan bertambah panjang."
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
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
          </button>
          <button
            className="nav-button next"
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

export default LatihanSoal1;






