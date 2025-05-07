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
      question: "Apa yang dimaksud dengan kebijakan ekonomi?",
      options: [
        { label: "A. Kebijakan yang dikeluarkan untuk meningkatkan produksi nasional", value: "A" },
        { label: "B. Kebijakan yang mengatur pengeluaran negara", value: "B" },
        { label: "C. Keputusan yang diambil pemerintah untuk mempengaruhi perekonomian negara", value: "C", isCorrect: true },
        { label: "D. Kebijakan untuk mengurangi pajak perusahaan", value: "D" },
      ],
      explanation: "Kebijakan ekonomi adalah keputusan yang diambil oleh pemerintah untuk mempengaruhi perekonomian negara, baik dalam hal pengeluaran, pajak, maupun kebijakan moneter.",
    },
    {
      question: "Tujuan utama kebijakan fiskal adalah...",
      options: [
        { label: "A. Menjaga stabilitas harga barang", value: "A" },
        { label: "B. Mengatur peredaran uang di masyarakat", value: "B" },
        { label: "C. Meningkatkan pendapatan negara melalui pajak", value: "C", isCorrect: true },
        { label: "D. Mengurangi pengangguran di sektor informal", value: "D" },
      ],
      explanation: "Kebijakan fiskal bertujuan untuk mengatur pendapatan dan pengeluaran pemerintah, termasuk meningkatkan pendapatan negara melalui pajak.",
    },
    {
      question: "Kebijakan moneter berfungsi untuk...",
      options: [
        { label: "A. Menurunkan pajak untuk perusahaan", value: "A" },
        { label: "B. Menjaga kestabilan mata uang dan harga barang", value: "B", isCorrect: true },
        { label: "C. Mengatur pengeluaran anggaran negara", value: "C" },
        { label: "D. Meningkatkan investasi domestik", value: "D" },
      ],
      explanation: "Kebijakan moneter bertujuan untuk menjaga kestabilan harga dan mengendalikan jumlah uang yang beredar di masyarakat, yang mempengaruhi tingkat inflasi.",
    },
    {
      question: "Apa yang dimaksud dengan devaluasi mata uang?",
      options: [
        { label: "A. Penurunan nilai mata uang negara terhadap mata uang asing", value: "A", isCorrect: true },
        { label: "B. Pengurangan jumlah uang yang beredar di negara", value: "B" },
        { label: "C. Kebijakan untuk menaikkan suku bunga bank", value: "C" },
        { label: "D. Penurunan tarif pajak untuk produk ekspor", value: "D" },
      ],
      explanation: "Devaluasi mata uang adalah penurunan nilai mata uang negara terhadap mata uang asing yang dapat mempengaruhi keseimbangan perdagangan.",
    },
    {
      question: "Kebijakan proteksionisme dalam ekonomi bertujuan untuk...",
      options: [
        { label: "A. Mengurangi ketergantungan pada impor dengan melindungi produk domestik", value: "A", isCorrect: true },
        { label: "B. Meningkatkan investasi asing langsung", value: "B" },
        { label: "C. Meningkatkan jumlah ekspor ke luar negeri", value: "C" },
        { label: "D. Menurunkan tarif pajak untuk impor", value: "D" },
      ],
      explanation: "Proteksionisme adalah kebijakan ekonomi yang bertujuan untuk melindungi industri dalam negeri dengan cara membatasi impor melalui tarif atau kuota.",
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