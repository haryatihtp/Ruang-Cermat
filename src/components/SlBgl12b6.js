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
      question: "Apa yang dimaksud dengan pautan (linkage)?",
      options: [
        { label: "A. Proses pertukaran gen antar kromosom homolog", value: "A" },
        { label: "B. Keadaan di mana gen-gen berada dalam satu kromosom", value: "B", isCorrect: true },
        { label: "C. Penentuan jenis kelamin berdasarkan kromosom X", value: "C" },
        { label: "D. Kejadian gagal berpisah kromosom saat meiosis", value: "D" },
      ],
      explanation:
        "Pautan adalah keadaan di mana terdapat banyak gen dalam satu kromosom, sehingga mereka cenderung diwariskan bersama.",
    },
    {
      question: "Apa yang terjadi pada genotip AaBb saat terjadi pautan?",
      options: [
        { label: "A. Gamet yang terbentuk adalah 4 macam", value: "A" },
        { label: "B. Gamet yang terbentuk adalah 2 macam", value: "B", isCorrect: true },
        { label: "C. Hasil test cross adalah 1:1:1:1", value: "C" },
        { label: "D. Gamet terbentuk secara acak", value: "D" },
      ],
      explanation:
        "Pada genotip AaBb yang mengalami pautan, gamet yang terbentuk hanya 2 macam, yaitu AB dan ab.",
    },
    {
      question: "Apa yang dimaksud dengan pindah silang (crossing over)?",
      options: [
        { label: "A. Proses kromosom homolog saling melilit dan bertukar gen", value: "A", isCorrect: true },
        { label: "B. Penyatuan kromosom homolog saat meiosis", value: "B" },
        { label: "C. Kejadian gagal berpisah kromosom saat meiosis", value: "C" },
        { label: "D. Pembentukan gamet yang tidak seimbang", value: "D" },
      ],
      explanation:
        "Pindah silang adalah peristiwa pertukaran gen karena kromosom homolog saling melilit saat meiosis.",
    },
    {
      question: "Apa yang dimaksud dengan konsep pewarisan sifat menyilang (criss cross inheritance)?",
      options: [
        { label: "A. Pewarisan sifat melalui kromosom autosom", value: "A" },
        { label: "B. Pewarisan sifat melalui kromosom sex dari induk yang berbeda", value: "B", isCorrect: true },
        { label: "C. Pewarisan sifat melalui gen dominan", value: "C" },
        { label: "D. Pewarisan sifat melalui mutasi gen", value: "D" },
      ],
      explanation:
        "Criss cross inheritance adalah pewarisan sifat di mana kromosom X dari induk betina diwariskan ke anak jantan, dan kromosom X dari induk jantan diwariskan ke anak betina.",
    },
    {
      question: "Apa dampak dari kejadian gagal berpisah (non disjunction)?",
      options: [
        { label: "A. Semua kromosom homolog memisah sempurna", value: "A" },
        { label: "B. Terbentuknya gamet dengan jumlah kromosom lebih atau kurang", value: "B", isCorrect: true },
        { label: "C. Pertukaran gen secara acak", value: "C" },
        { label: "D. Pembentukan gamet yang seimbang", value: "D" },
      ],
      explanation:
        "Non disjunction menyebabkan kegagalan kromosom homolog memisahkan diri saat meiosis, menghasilkan gamet dengan jumlah kromosom abnormal.",
    },
    {
      question: "Apa yang menjadi dasar determinasi sex pada Drosophila melanogaster?",
      options: [
        { label: "A. Rasio antara jumlah kromosom X dan pasangan autosom", value: "A", isCorrect: true },
        { label: "B. Rasio antara jumlah kromosom Y dan pasangan autosom", value: "B" },
        { label: "C. Dominasi kromosom Y", value: "C" },
        { label: "D. Kombinasi gen resesif", value: "D" },
      ],
      explanation:
        "Pada Drosophila, penentuan jenis kelamin didasarkan pada rasio antara jumlah kromosom X dan pasangan autosom.",
    },
    {
      question: "Apa yang dimaksud dengan gen lethal dominan?",
      options: [
        { label: "A. Gen yang menyebabkan kematian dalam keadaan homozigot dominan", value: "A", isCorrect: true },
        { label: "B. Gen yang menyebabkan kematian dalam keadaan homozigot resesif", value: "B" },
        { label: "C. Gen yang tidak mempengaruhi kelangsungan hidup", value: "C" },
        { label: "D. Gen yang memodifikasi gen lain", value: "D" },
      ],
      explanation:
        "Gen lethal dominan adalah gen yang menyebabkan kematian individu jika dalam keadaan homozigot dominan.",
    },
    {
      question: "Apa perbedaan antara epistasis dan hipostasis?",
      options: [
        { label: "A. Epistasis adalah gen yang ditutupi, hipostasis adalah gen yang menutupi", value: "A" },
        { label: "B. Epistasis adalah gen yang menutupi, hipostasis adalah gen yang ditutupi", value: "B", isCorrect: true },
        { label: "C. Keduanya adalah gen yang menutupi", value: "C" },
        { label: "D. Keduanya adalah gen yang ditutupi", value: "D" },
      ],
      explanation:
        "Epistasis adalah gen yang menutupi ekspresi gen lain, sedangkan hipostasis adalah gen yang ekspresinya ditutupi.",
    },
    {
      question: "Apa yang dimaksud dengan poligen?",
      options: [
        { label: "A. Pewarisan sifat yang dikendalikan oleh satu gen", value: "A" },
        { label: "B. Pewarisan sifat yang melibatkan banyak gen", value: "B", isCorrect: true },
        { label: "C. Pewarisan sifat yang terjadi pada kromosom sex", value: "C" },
        { label: "D. Pewarisan sifat yang terjadi melalui mutasi gen", value: "D" },
      ],
      explanation:
        "Poligen adalah pewarisan sifat yang melibatkan banyak gen dengan efek aditif, seperti tinggi badan dan warna kulit.",
    },
    {
      question: "Bagaimana rasio fenotip dari persilangan tikus kuning dengan genotip Kk x Kk?",
      options: [
        { label: "A. 1:1", value: "A" },
        { label: "B. 2:1", value: "B", isCorrect: true },
        { label: "C. 3:1", value: "C" },
        { label: "D. 1:2:1", value: "D" },
      ],
      explanation:
        "Rasio fenotip hidup adalah 2 tikus kuning: 1 tikus normal karena tikus homozigot dominan (KK) mengalami kematian.",
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