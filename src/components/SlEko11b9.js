import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa tujuan utama dari pembangunan ekonomi?",
      options: [
        { label: "A. Meningkatkan jumlah penduduk", value: "A" },
        { label: "B. Meningkatkan kesejahteraan masyarakat", value: "B", isCorrect: true },
        { label: "C. Meningkatkan inflasi", value: "C" },
        { label: "D. Mengurangi pendapatan per kapita", value: "D" },
      ],
      explanation: "Tujuan utama pembangunan ekonomi adalah meningkatkan kesejahteraan masyarakat melalui peningkatan pendapatan per kapita dan kualitas hidup.",
    },
    {
      question: "Faktor yang mendorong keberhasilan pembangunan ekonomi adalah...",
      options: [
        { label: "A. Infrastruktur yang memadai", value: "A", isCorrect: true },
        { label: "B. Tingginya angka pengangguran", value: "B" },
        { label: "C. Inflasi yang tidak terkendali", value: "C" },
        { label: "D. Ketidakstabilan politik", value: "D" },
      ],
      explanation: "Infrastruktur yang memadai mendukung distribusi barang dan jasa serta menarik investasi, sehingga mendukung pembangunan ekonomi.",
    },
    {
      question: "Salah satu indikator pembangunan ekonomi adalah...",
      options: [
        { label: "A. Menurunnya jumlah produksi", value: "A" },
        { label: "B. Tingginya tingkat pengangguran", value: "B" },
        { label: "C. Meningkatnya pendapatan per kapita", value: "C", isCorrect: true },
        { label: "D. Tingginya angka kemiskinan", value: "D" },
      ],
      explanation: "Meningkatnya pendapatan per kapita adalah salah satu indikator utama keberhasilan pembangunan ekonomi.",
    },
    {
      question: "Apa yang dimaksud dengan perubahan struktur ekonomi dalam pembangunan ekonomi?",
      options: [
        { label: "A. Peningkatan sektor pertanian secara eksklusif", value: "A" },
        { label: "B. Peralihan dari sektor primer ke sektor sekunder dan tersier", value: "B", isCorrect: true },
        { label: "C. Menurunnya sektor industri", value: "C" },
        { label: "D. Fokus hanya pada perdagangan lokal", value: "D" },
      ],
      explanation: "Perubahan struktur ekonomi mengacu pada peralihan kegiatan ekonomi dari sektor primer (pertanian) ke sektor sekunder (industri) dan tersier (jasa).",
    },
    {
      question: "Yang bukan termasuk tantangan dalam pembangunan ekonomi adalah...",
      options: [
        { label: "A. Tingkat pendidikan yang rendah", value: "A" },
        { label: "B. Kurangnya infrastruktur", value: "B" },
        { label: "C. Stabilitas politik", value: "C", isCorrect: true },
        { label: "D. Rendahnya kualitas sumber daya manusia", value: "D" },
      ],
      explanation: "Stabilitas politik justru mendukung pembangunan ekonomi. Tantangan dalam pembangunan ekonomi meliputi rendahnya pendidikan, infrastruktur, dan kualitas SDM.",
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
          <h1 className="latihan-soal1-title">Ekonomi</h1>
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
export default LatihanSoal;