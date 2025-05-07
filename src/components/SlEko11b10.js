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
      question: "Apa yang dimaksud dengan ekonomi digital?",
      options: [
        { label: "A. Perdagangan yang hanya dilakukan secara tatap muka", value: "A" },
        {
          label: "B. Aktivitas ekonomi yang memanfaatkan teknologi digital",
          value: "B",
          isCorrect: true,
        },
        { label: "C. Sistem ekonomi tradisional yang tidak menggunakan internet", value: "C" },
        { label: "D. Sistem ekonomi yang hanya menggunakan mata uang fisik", value: "D" },
      ],
      explanation:
        "Ekonomi digital adalah sistem ekonomi di mana aktivitas perdagangan, produksi, dan konsumsi dilakukan dengan memanfaatkan teknologi informasi dan komunikasi seperti internet, platform digital, dan aplikasi e-commerce.",
    },
    {
      question: "Contoh kegiatan ekonomi digital adalah...",
      options: [
        { label: "A. Membeli barang di pasar tradisional", value: "A" },
        { label: "B. Membayar dengan uang tunai di toko fisik", value: "B", isCorrect: true },
        { label: "C. Jumlah impor yang meningkat tajam", value: "C" },
        { label: "D. TMenjual barang langsung di pasar tanpa teknologi", value: "D" },
      ],
      explanation:
        "Berbelanja melalui aplikasi e-commerce seperti Shopee, Tokopedia, atau Bukalapak adalah contoh nyata dari aktivitas ekonomi digital, di mana teknologi digunakan untuk mempermudah proses jual beli.",
    },
    {
      question:
        "Salah satu keuntungan ekonomi digital bagi konsumen adalah...",
      options: [
        { label: "A. Pembelian hanya dapat dilakukan di waktu tertentu", value: "A" },
        { label: "B. Pilihan produk yang terbatas", value: "B", isCorrect: true },
        { label: "C. Kemudahan akses dan efisiensi waktu", value: "C" },
        { label: "D. Harga barang lebih mahal", value: "D" },
      ],
      explanation:
        "Ekonomi digital memungkinkan konsumen untuk membeli barang atau jasa kapan saja dan dari mana saja dengan cepat dan efisien, tanpa harus pergi ke toko fisik.",
    },
    {
      question: "Apa tantangan utama dalam ekonomi digital di Indonesia?",
      options: [
        { label: "A. Tingginya angka kemiskinan", value: "A" },
        { label: "B. Tingkat literasi digital yang rendah di beberapa daerah", value: "B" },
        { label: "C. Tingkat literasi digital yang rendah di beberapa daerah", value: "C", isCorrect: true },
        { label: "D.Selalu adanya koneksi internet yang cepat dan stabil", value: "D" },
      ],
      explanation:
        "Salah satu tantangan utama dalam ekonomi digital di Indonesia adalah tingkat literasi digital yang belum merata, terutama di daerah terpencil. Hal ini dapat menghambat pemanfaatan teknologi secara maksimal dalam kegiatan ekonomi.",
    },
    {
      question:
        "Contoh perusahaan yang berperan dalam ekonomi digital adalah...",
      options: [
        { label: "A. Perusahaan konstruksi", value: "A" },
        { label: "B. Perusahaan e-commerce seperti Tokopedia dan Shopee", value: "B", isCorrect: true },
        { label: "C. Perusahaan perkebunan tradisional", value: "C" },
        { label: "D.Perusahaan manufaktur tanpa teknologi", value: "D" },
      ],
      explanation:
        "Tokopedia dan Shopee adalah contoh perusahaan yang bergerak di bidang e-commerce, yang merupakan bagian dari ekonomi digital karena menggunakan platform online untuk memfasilitasi transaksi jual-beli.",
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