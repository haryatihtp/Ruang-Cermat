import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Ciri utama dari pasar persaingan sempurna adalah...",
      options: [
        { label: "A.  Produk yang diperjualbelikan berbeda-beda", value: "A" },
        { label: "B. Pembeli dan penjual memiliki informasi sempurna tentang pasar", value: "B", isCorrect: true },
        { label: "C. Penjual memiliki kendali penuh terhadap harga", value: "C" },
        { label: "D. Terdapat sedikit penjual dan pembeli", value: "D" },
      ],
      explanation:
        "Salah satu ciri khas pasar persaingan sempurna adalah informasi yang dimiliki pembeli dan penjual bersifat transparan dan lengkap. Hal ini menyebabkan harga pasar ditentukan sepenuhnya oleh mekanisme permintaan dan penawaran.",
    },
    {
      question: "Sebuah petani menjual hasil panennya di pasar persaingan sempurna dengan harga pasar sebesar Rp4.000 per kilogram. Jika petani tersebut menjual 1.000 kilogram beras, berapakah total pendapatannya?",
      options: [
        { label: "A. Rp2.000.000", value: "A" },
        { label: "B. Rp4.000.000", value: "B", isCorrect: true },
        { label: "C. Rp5.000.000", value: "C" },
        { label: "D. Rp4.300.000", value: "D" },
      ],
      explanation:
        "Total pendapatan = Harga per kilogram × Jumlah yang dijual = Rp4.000 × 1.000 kg = Rp4.000.000.",
    },
    {
      question: "Yang bukan merupakan karakteristik pasar persaingan sempurna adalah...",
      options: [
        { label: "A.  Produk bervariasi", value: "A", isCorrect: true },
        { label: "B. Banyak penjual dan pembeli", value: "B" },
        { label: "C. Bebas keluar masuk pasar", value: "C" },
        { label: "D. nformasi pasar sempurna", value: "D" },
      ],
      explanation:
        "Dalam pasar persaingan sempurna, produk yang ditawarkan bersifat seragam (homogen). Jika produknya bervariasi, maka itu bukan ciri pasar persaingan sempurna, melainkan ciri pasar persaingan monopolistik.",
    },
    {
      question: "Dalam pasar persaingan sempurna, peran penjual dalam menentukan harga adalah...",
      options: [
        { label: "A. Protein yang melawan infeksi dengan mengikat antigen", value: "A", isCorrect: true },
        { label: "B. Sel yang menghasilkan energi untuk tubuh", value: "B" },
        { label: "C. Hormon yang mengatur metabolisme tubuh", value: "C" },
        { label: "D. Sel yang mengangkut oksigen", value: "D" },
      ],
      explanation:
        "Antibodi adalah protein yang diproduksi oleh tubuh untuk mengenali dan menetralkan antigen, seperti virus dan bakteri, dalam tubuh.",
    },
    {
      question: "Vaksin bekerja dengan cara...",
      options: [
        { label: "A. Mengendalikan harga produk", value: "A", isCorrect: true },
        { label: "B. Menghancurkan patogen secara langsung", value: "B" },
        { label: "C. Membatasi jumlah produksi untuk menaikkan harga", value: "C" },
        { label: "D. Menetapkan harga sesuka hati", value: "D" },
      ],
      explanation:
        "Dalam pasar persaingan sempurna, penjual bertindak sebagai price taker atau pengikut harga. Harga ditentukan oleh mekanisme pasar (permintaan dan penawaran), sehingga penjual harus menjual produknya sesuai harga pasar yang berlaku.",
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
          <p>Skor Anda: {score}/{questions.length} </p>
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
        <h1 className="latihan-soal1-title">Ekonomi</h1>
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
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

export default LatihanSoal5;