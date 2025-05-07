import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Kromosom pada manusia mulai terbentuk pertama kali pada tahap pembelahan sel?",
      options: [
        { label: "A. Interfase.", value: "A" },
        { label: "B. Profase.", value: "B", isCorrect: true },
        { label: "C. Metafase.", value: "C" },
        { label: "D. Anafase.", value: "D" },
      ],
      explanation: "Kromosom pada manusia mulai terbentuk pertama kali pada tahap pembelahan sel, yaitu profase yang berasal dari pemendekan benang kromotin",
    },
    {
      question: "Bentuk kromosom yang dilengkapi dengan dua lengan simetris disebut?",
      options: [
        { label: "A. Submetasentrik.", value: "A" },
        { label: "B. Metasentrik.", value: "B", isCorrect: true },
        { label: "C. Akrosentik.", value: "C" },
        { label: "D. Telosentrik.", value: "D" },
      ],
      explanation: "Bentuk kromosom yang dilengkapi dengan dua lengan simetris disebut metasentrik.",
    },
    {
      question: "Pada rantai anti sense DNA terdapat urutan basa nitrogen: CGA – CCC – GTA, dengan demikian urutan basa nitrogen pada rantai sense?",
      options: [
        { label: "A.CAA – CGG – CAT. ", value: "A"},
        { label: "B.GCT – GGG – GTA. ", value: "B" },
        { label: "C.GCT – GGG – CAT. ", value: "C" , isCorrect: true },
        { label: "D. TGA – GGG – CAT.", value: "D" },
      ],
      explanation: "Pada rantai anti-sense DNA terdapat urutan basa nitrogen: CGA – CCC – GTA, dengan demikian urutan basa nitrogen pada rantai sense: GCT – GGG – CAT."
    },
    {
      question: "Pasangan basa nitrogen yang benar pada DNA adalah?",
      options: [
        { label: "A.Adenin = guanin ", value: "A" },
        { label: "B.Adenin = thimin", value: "B" , isCorrect: true},
        { label: "C.Adenin = urasil", value: "C" },
        { label: "D.Guanin = thimin", value: "D" },
      ],
      explanation: "Pasangan basa nitrogen yang benar pada DNA adalah Adenin = Thimin dan Sitosin = Guanin.",
    },
    {
      question: "Proses transkipsi yang dilakukan oleh RNAd berlangsung di?",
      options: [
        { label: "A.Ribosoma. ", value: "A" },
        { label: "B.Mitokondria. ", value: "B" },
        { label: "C.Nukleus. ", value: "C", isCorrect: true },
        { label: "D.Retikulum endoplasma.", value: "D" },
      ],
      explanation: "Proses transkipsi yang dilakukan oleh RNAd berlangsung di nukleus.",
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
          <p>Skor Anda: {score}/{questions.length}</p>
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
                answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""
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

export default LatihanSoal3;
