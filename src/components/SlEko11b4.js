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
      question: "Seorang siswa memiliki uang saku sebesar Rp20.000. Ia ingin membeli buku seharga Rp15.000 atau membeli minuman dan makanan ringan seharga Rp20.000. Ia memutuskan untuk membeli buku. Keputusan ini menggambarkan prinsip…",
      options: [
        { label: "A.  Biaya peluang", value: "A" },
        {
          label: "B. Kelangkaan dan pilihan",
          value: "B",
          isCorrect: true,
        },
        { label: "C. Intensif", value: "C" },
        { label: "D. Biaya manfaat", value: "D" },
      ],
      explanation:
        "Karena sumber daya (uang) terbatas, siswa harus memilih di antara dua pilihan. Ini adalah contoh dari prinsip kelangkaan dan pilihan.",
    },
    {
      question: "Seorang pedagang memutuskan untuk membuka tokonya lebih lama di akhir pekan karena banyak pelanggan datang saat itu. Keputusan ini diambil setelah mempertimbangkan potensi pendapatan tambahan dibandingkan dengan biaya operasional yang lebih tinggi. Keputusan ini mencerminkan..",
      options: [
        { label: "A. Prinsip produksi", value: "A" },
        { label: "B. Prinsip biaya manfaat", value: "B", isCorrect: true },
        { label: "C. Prinsip permintaan", value: "C" },
        { label: "D. Prinsip kelangkaan", value: "D" },
      ],
      explanation:
        "Pedagang mempertimbangkan manfaat (pendapatan tambahan) dan biaya (operasional tambahan) untuk mengambil keputusan ekonomi yang optimal.",
    },
    {
      question:
        "Sebuah perusahaan memberikan bonus kepada karyawan yang mencapai target penjualan. Kebijakan ini diterapkan agar karyawan lebih giat bekerja. Kebijakan ini menerapkan prinsip…",
      options: [
        { label: "A.  Prinsip biaya manfaat", value: "A" },
        { label: "B. Di Prinsip insentif", value: "B", isCorrect: true },
        { label: "C. Prinsip biaya peluang", value: "C" },
        { label: "D. Prinsip kelangkaan", value: "D" },
      ],
      explanation:
        "Insentif berupa bonus mendorong karyawan untuk bekerja lebih giat agar mencapai target penjualan.",
    },
    {
      question: "eorang mahasiswa memutuskan untuk bekerja paruh waktu selama kuliah agar dapat membantu biaya pendidikannya. Ia mempertimbangkan antara waktu yang digunakan untuk bekerja dan waktu untuk belajar. Hal ini mencerminkan…",
      options: [
        { label: "A.  Prinsip insentif dan biaya manfaat", value: "A" },
        { label: "B. Prinsip hukum ekonomi dan biaya peluang", value: "B" },
        { label: "C. Prinsip kelangkaan dan biaya peluang", value: "C", isCorrect: true },
        { label: "D. Prinsip kelangkaan dan biaya manfaat", value: "D" },
      ],
      explanation:
        "Mahasiswa menghadapi keterbatasan waktu (kelangkaan) dan harus memilih antara bekerja atau belajar, sehingga mengorbankan satu pilihan (biaya peluang).",
    },
    {
      question:
        "Seorang pengusaha memilih untuk menginvestasikan uangnya pada bisnis restoran daripada menyimpan uang di bank dengan bunga tinggi. Pengorbanan yang harus ditanggung pengusaha tersebut adalah…",
      options: [
        { label: "A. Modal usaha", value: "A" },
        { label: "B. Pendapatan dari bunga bank", value: "B", isCorrect: true },
        { label: "C. Biaya operasional restoran", value: "C" },
        { label: "D. Pendapatan dari bisnis restoran", value: "D" },
      ],
      explanation:
        "Biaya peluang adalah keuntungan yang dikorbankan ketika memilih satu pilihan. Dalam kasus ini, pengusaha mengorbankan pendapatan dari bunga bank untuk berinvestasi di bisnis restoran.",
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