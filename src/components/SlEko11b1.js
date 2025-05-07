import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Kata ekonomi berasal dari oikonomia, yang berarti..",
      options: [
        { label: "A. Manajemen rumah tangga", value: "A", isCorrect: true },
        { label: "B. Rumah tangga", value: "B" },
        { label: "C. Kebutuhan", value: "C" },
        { label: "D. Pengaturan", value: "D" },
      ],
      explanation:
        "Ekonomi berasal dari bahasa Yunani kuno, yaitu oikonomia. Kata ini merupakan gabungan dari dua kata. Oikos yang berarti rumah atau rumah tangga. Nomos yang berarti aturan atau pengelolaan. Jika digabungkan, oikonomia berarti pengaturan rumah tangg atau manajemen rumah tangga",
    },
    {
      question: "Ilmu ekonomi adalah ilmu yang mempelajari pemanfaatan sumber daya yang terbatas guna memenuhi keinginan manusia yang tidak terbatas. Hal tersebut adalah..",
      options: [
        { label: "A. Kelangkaan", value: "A" },
        { label: "B. Motif ekonomi", value: "B" },
        { label: "C. Pengertian ilmu ekonomi", value: "C", isCorrect: true },
        { label: "D. Prinsip ekonomi", value: "D" },
      ],
      explanation:
        "Prinsip ekonomi bisa terlihat mirip karena prinsip ekonomi terkait dengan efisiensi dan pengambilan keputusan yang rasional.",
    },
    {
      question: "Jumlah kebutuhan tidak terbatas tetapi alat pemenuhan kebutuhannya terbatas. Hal ini merupakan konsep dari..",
      options: [
        { label: "A.Kebutuhan", value: "A" },
        { label: "B.Ilmu ekonomi", value: "B" },
        { label: "C.Kelangkaan ", value: "C",isCorrect: true},
        { label: "D.Prinsip ekonomi", value: "D" },
      ],
      explanation:
        "Kelangkaan terjadi ketika kebutuhan manusia yang tidak terbatas tidak dapat dipenuhi seluruhnya karena sumber daya yang tersedia terbatas. Kelangkaan adalah alasan utama mengapa ilmu ekonomi ada. Karena sumber daya (seperti waktu, uang, dan bahan baku) terbatas, manusia harus membuat pilihan dan memprioritaskan kebutuhan mana yang harus dipenuhi terlebih dahulu."
    },
    {
        question: "Kebutuhan akan barang-barang mewah dinamakan kebutuhan..",
        options: [
          { label: "A.Tersier ", value: "A", isCorrect: true },
          { label: "B. Sekunder", value: "B" },
          { label: "C.Primer", value: "C" },
          { label: "D. Sekarang", value: "D" },
        ],
        explanation:
          "Kebutuhan akan barang-barang mewah termasuk dalam kategori kebutuhan tersier."
      },
      {
        question: "Seorang ibu ketika hendak berbelanja membuat catatan kebutuhan apa yang hendak dibeli agar tidak terjadi pemborosan. Hal ini merupakan penerapan dari..",
        options: [
          { label: "A.Prinsip ekonomi ", value: "A", isCorrect: true },
          { label: "B.Motif ekonomi", value: "B" },
          { label: "C.Tindakan ekonomi ", value: "C" },
          { label: "D.Kegiatan ekonomi", value: "D" },
        ],
        explanation:
          "Prinsip ekonomi adalah pedoman untuk melakukan kegiatan ekonomi secara efisien dan rasional, yaitu dengan pengorbanan sekecil-kecilnya untuk memperoleh hasil semaksimal mungkin."
      },
      {
        question: "Ahmad sangat terdorong melakukan pekerjaannya karena ingin mendapatkan penghasilan untuk memenuhi kebutuhannya. Hal ini merupakan penerapan dari..",
        options: [
          { label: "A.Ilmu ekonomi ", value: "A" },
          { label: "B.Motif ekonomi", value: "B", isCorrect: true },
          { label: "C.Prinsip ekonomi", value: "C" },
          { label: "D.Kegiatan ekonomi", value: "D" },
        ],
        explanation:
          "Motif ekonomi adalah alasan atau dorongan yang mendorong seseorang untuk melakukan kegiatan ekonomi. Dalam kasus ini, Ahmad terdorong bekerja karena ingin mendapatkan penghasilan untuk memenuhi kebutuhannya. Ini adalah contoh dari motif ekonomi, yaitu alasan atau tujuan ekonomi di balik tindakannya."
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

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
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
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
          </button>
          <button
            className="nav-button next"
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

export default LatihanSoal1;
