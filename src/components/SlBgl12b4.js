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
      question: "Proses pembelahan sel yang menghasilkan dua sel anak identik dengan sel induk disebut:",
      options: [
        { label: "A. Amitosis", value: "A" },
        {
          label: "B. Mitosis",
          value: "B",
          isCorrect: true,
        },
        { label: "C. Meiosis", value: "C" },
        { label: "D. Sitokinesis", value: "D" },
      ],
      explanation:
        "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama dengan sel induk. Proses ini terjadi pada sel somatik dan bertujuan untuk pertumbuhan, perbaikan jaringan, dan regenerasi.",
    },
    {
      question: "Tahap dalam mitosis di mana kromosom berjajar di bidang ekuator adalah:",
      options: [
        { label: "A. Profase", value: "A" },
        { label: "B. Metafase", value: "B", isCorrect: true },
        { label: "C. Anafase", value: "C" },
        { label: "D. Telofase", value: "D" },
      ],
      explanation:
        "Metafase adalah tahap kedua dalam mitosis, di mana kromosom yang telah terkondensasi berjajar di tengah sel (bidang ekuator) dan berikatan dengan serat spindle melalui sentromer.",
    },
    {
      question:
        "Berikut ini yang merupakan perbedaan utama antara mitosis dan meiosis adalah:",
      options: [
        { label: "A. Mitosis terjadi pada sel kelamin, sedangkan meiosis pada sel tubuh", value: "A" },
        { label: "B. Mitosis menghasilkan 2 sel, meiosis menghasilkan 4 sel", value: "B", isCorrect: true },
        { label: "C. Mitosis mengurangi jumlah kromosom, meiosis mempertahankan jumlah kromosom", value: "C" },
        { label: "D. Meiosis tidak mengalami tahap pembelahan", value: "D" },
      ],
      explanation:
        "Mitosis menghasilkan dua sel anak identik dengan kromosom yang sama dengan sel induk. Meiosis, sebaliknya, menghasilkan empat sel anak dengan jumlah kromosom separuh dari sel induk, karena terjadi dua kali pembelahan (meiosis I dan meiosis II).",
    },
    {
      question: "Pada tahap meiosis, proses pindah silang (crossing over) terjadi pada:",
      options: [
        { label: "A. Anafase II", value: "A" },
        { label: "B. Metafase I", value: "B" },
        { label: "C. Profase I", value: "C", isCorrect: true },
        { label: "D. Telofase I", value: "D" },
      ],
      explanation:
        "Pindah silang (crossing over) terjadi pada tahap profase I meiosis. Pada tahap ini, kromosom homolog saling bertukar segmen genetik di tempat yang disebut kiasma, menghasilkan variasi genetik pada sel anak.",
    },
    {
      question:
        "Tahapan dalam mitosis yang ditandai dengan pemisahan kromatid menjadi kromosom adalah:",
      options: [
        { label: "A. Profase", value: "A" },
        { label: "B. Anafase", value: "B", isCorrect: true },
        { label: "C. Metafase", value: "C" },
        { label: "D. Telofase", value: "D" },
      ],
      explanation:
        "Anafase adalah tahap mitosis di mana kromatid kakak yang sebelumnya berpasangan dipisahkan oleh serat spindle dan bergerak ke kutub yang berlawanan. Setiap kromatid menjadi kromosom individu.",
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
export default LatihanSoal;