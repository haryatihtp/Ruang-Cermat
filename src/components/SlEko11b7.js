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
      question: "Inflasi dapat diartikan sebagai...",
      options: [
        { label: "A. Stabilitas harga di pasar", value: "A" },
        { label: "B. Kenaikan pendapatan masyarakat", value: "B" },
        { label: "C. Kenaikan harga secara umum dan terus-menerus", value: "C", isCorrect: true },
        { label: "D. Penurunan harga secara terus-menerus)", value: "D" },
      ],
      explanation: "Inflasi adalah kondisi di mana terjadi kenaikan harga-harga secara umum dan terus-menerus dalam suatu periode tertentu, yang menyebabkan daya beli masyarakat menurun.",
    },
    {
      question: "Jenis inflasi yang terjadi karena meningkatnya permintaan masyarakat disebut...",
      options: [
        { label: "A. Stagflasi", value: "A" },
        { label: "B. Demand-pull inflation", value: "B", isCorrect: true },
        { label: "C. Cost-push inflation", value: "C" },
        { label: "D. Imported inflation", value: "D" },
      ],
      explanation: "Demand-pull inflation adalah inflasi yang terjadi ketika permintaan terhadap barang dan jasa meningkat secara drastis, sementara penawaran tetap atau tidak bisa memenuhi permintaan tersebut.",
    },
    {
      question: "Salah satu penyebab inflasi jenis cost-push adalah...",
      options: [
        { label: "A. Kenaikan biaya produksi seperti bahan baku dan upah tenaga kerja", value: "A", isCorrect: true },
        { label: "B. Naiknya permintaan barang secara tiba-tiba", value: "B" },
        { label: "C. Bertambahnya jumlah uang yang beredar", value: "C" },
        { label: "D. Menurunnya jumlah penduduk", value: "D" },
      ],
      explanation: "Cost-push inflation terjadi ketika biaya produksi naik, misalnya karena kenaikan harga bahan baku, upah tenaga kerja, atau pajak. Hal ini mendorong produsen menaikkan harga jual produk.",
    },
    {
      question: "Indeks yang digunakan untuk mengukur inflasi di Indonesia adalah...",
      options: [
        { label: "A. Indeks Pembangunan Manusia (IPM)", value: "A" },
        { label: "B. Indeks Harga Konsumen (IHK)", value: "B", isCorrect: true },
        { label: "C. Indeks Harga Saham Gabungan (IHSG)", value: "C" },
        { label: "D. Indeks Pertumbuhan Ekonomi (IPE)", value: "D" },
      ],
      explanation: "Indeks Harga Konsumen (IHK) digunakan untuk mengukur tingkat perubahan harga dari sekelompok barang dan jasa yang dikonsumsi oleh rumah tangga. IHK menjadi indikator utama untuk menentukan tingkat inflasi.",
    },
    {
      question: "Salah satu dampak negatif inflasi adalah...",
      options: [
        { label: "A. Harga barang menjadi stabil", value: "A" },
        { label: "B. Naiknya tingkat produksi", value: "B" },
        { label: "C. Menurunnya nilai uang", value: "C", isCorrect: true },
        { label: "D. Tidak ada perubahan yang signifikan", value: "D" },
      ],
      explanation: "Inflasi menyebabkan nilai uang menurun. Artinya, dengan jumlah uang yang sama, masyarakat hanya bisa membeli lebih sedikit barang dan jasa dibandingkan sebelumnya.",
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
          <h1 className="latihan-soal1-title">MEkonomi</h1>
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