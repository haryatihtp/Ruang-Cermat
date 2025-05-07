import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Pertumbuhan ekonomi dapat diartikan sebagai...",
      options: [
        { label: "A. Menurunnya jumlah tenaga kerja di sektor industri", value: "A" },
        { label: "B. Penurunan pendapatan masyarakat secara umum", value: "B" },
        { label: "C. Kenaikan pendapatan per kapita dalam jangka panjang", value: "C", isCorrect: true },
        { label: "D. Penurunan jumlah produksi barang dan jasa dalam suatu negarap", value: "D" },
      ],
      explanation: "Pertumbuhan ekonomi adalah suatu proses peningkatan pendapatan per kapita yang terjadi secara terus-menerus dalam jangka panjang, yang mencerminkan peningkatan kesejahteraan masyarakat.",
    },
    {
      question: "Indikator yang paling umum digunakan untuk mengukur pertumbuhan ekonomi adalah...",
      options: [
        { label: "A. Produk Domestik Bruto (PDB)", value: "A", isCorrect: true },
        { label: "B. Tingkat Inflasi", value: "B" },
        { label: "C. Proses reproduksi yang terjadi pada makhluk hidup", value: "C" },
        { label: "D. Indeks Harga Konsumen (IHK)", value: "D" },
      ],
      explanation: "Produk Domestik Bruto (PDB) adalah total nilai barang dan jasa yang dihasilkan oleh suatu negara dalam satu periode tertentu. PDB sering digunakan sebagai indikator utama untuk mengukur tingkat pertumbuhan ekonomi suatu negara.",
    },
    {
      question: "Berikut ini adalah faktor yang memengaruhi pertumbuhan ekonomi, kecuali...",
      options: [
        { label: "A. Kemajuan teknologi", value: "A" },
        { label: "B. Sumber daya alam", value: "B" },
        { label: "C. Tingkat inflasi yang tinggi", value: "C", isCorrect: true },
        { label: "D. Sumber daya manusia", value: "D" },
      ],
      explanation: "Faktor-faktor seperti sumber daya manusia, sumber daya alam, dan kemajuan teknologi memengaruhi pertumbuhan ekonomi. Sebaliknya, inflasi yang tinggi justru bisa menghambat pertumbuhan ekonomi karena menurunkan daya beli masyarakat.",
    },
    {
      question: "Pembangunan infrastruktur yang baik dapat mendorong pertumbuhan ekonomi karena...",
      options: [
        { label: "A. Menghambat arus distribusi barang", value: "A" },
        { label: "B. Meningkatkan produktivitas dan efisiensi kegiatan ekonomi", value: "B", isCorrect: true },
        { label: "C. . Menambah pengeluaran pemerintah", value: "C" },
        { label: "D. Menekan jumlah investasi di negara tersebut", value: "D" },
      ],
      explanation: "Pembangunan infrastruktur seperti jalan, jembatan, dan pelabuhan meningkatkan produktifitas dan efisiensi, memudahkan distribusi barang dan jasa, serta menarik investasi yang mendorong pertumbuhan ekonomi.",
    },
    {
      question: "Salah satu ciri dari negara dengan pertumbuhan ekonomi yang tinggi adalah...",
      options: [
        { label: "A. Tingginya angka pengangguran", value: "A" },
        { label: "B. Menurunnya pendapatan per kapita", value: "B" },
        { label: "C. Meningkatnya jumlah produksi barang dan jasa", value: "C", isCorrect: true },
        { label: "D. Menurunnya tingkat investasi asing", value: "D" },
      ],
      explanation: "Negara dengan pertumbuhan ekonomi yang tinggi ditandai dengan meningkatnya jumlah produksi barang dan jasa, yang berdampak pada peningkatan kesejahteraan masyarakat dan pendapatan per kapita.",
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