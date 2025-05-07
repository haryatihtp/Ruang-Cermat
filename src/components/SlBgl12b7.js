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
      question: "1. Pengertian evolusi adalah",
      options: [
        { label: "A. Penciptaan semua bentuk kehidupan.", value: "A" },
        { label: "B. Kemampuan organisme untuk beradaptasi dalam waktu singkat.", value: "B" },
        { label: "C. Perubahan genetik dalam populasi organisme seiring waktu.", value: "C", isCorrect: true },
        { label: "D. Proses replikasi DNA.", value: "D" },
      ],
      explanation: "Evolusi berarti perubahan pada sifat-sifat terwariskan suatu populasi organisme dari satu generasi ke generasi berikutnya.",
    },
    {
      question: "Siapa yang dikenal sebagai orang yang mengembangkan teori evolusi berdasarkan seleksi alam?",
      options: [
        { label: "A. Albert Einstein", value: "A" },
        { label: "B. Charles Darwin", value: "B", isCorrect: true },
        { label: "C. Isaac Newton", value: "C" },
        { label: "D. Gregor Mendel", value: "D" },
      ],
      explanation: "Darwin menilai bahwa evolusi terjadi melalui proses seleksi alam. Makhluk hidup yang mampu menyesuaikan diri dengan alam dapat bertahan hidup. Sementara makhluk hidup yang tidak dapat menyesuaikanm diri dengan alam tidak akan bertahan hidup atau mati. ",
    },
    {
      question: "Apa yang dimaksud dengan seleksi alam?",
      options: [
        { label: "A. Proses di mana individu dengan sifat-sifat yang menguntungkan lebih mungkin bertahan hidup dan berkembang biak.", value: "A", isCorrect: true },
        { label: "Proses ketika organisme memilih makanan mereka.", value: "B" },
        { label: "C. Proses ketika manusia memilih pasangan hidup.", value: "C" },
        { label: "D. Proses di mana organisme berevolusi menjadi spesies yang berbeda.", value: "D" },
      ],
      explanation: "Seleksi alam merupakan sebuah proses yang menyebabkan sifat terwaris yang berguna untuk keberlangsungan hidup dan reproduksi organisme menjadi lebih umum dalam suatu populasi - dan sebaliknya, sifat yang merugikan menjadi lebih berkurang.",
    },
    {
      question: "Apa yang dinyatakan oleh Plato?",
      options: [
        { label: "A. semua bentuk kehidupan disusun menurut suatu skala atau tangga yang kompleksitasnya meningkat ke atas.", value: "A" },
        { label: "B. evolusi akan mengubah dunia yang organismenya sudah ideal dan beradaptasi sempurna dengan lingkungan.", value: "B", isCorrect: true },
        { label: "C. bagian tubuh yang digunakan dan tidak digunakan oleh makhluk hidup.", value: "C" },
        { label: "D. perubahan sel-sel tubuh akibat pengaruh lingkungan tidak diwariskan pada keturunannya.", value: "D" },
      ],
      explanation: "Plato menyatakan percaya pada dunia, yakni dunia yang ideal dan abadi serta dunia maya (khayal) yang tidak sempurna. Kedua dunia tersebut dapat dipahami dengan menggunakan indera manusia. Dikatakan evolusi akan mengubah dunia yang organismenya sudah ideal dan beradaptasi sempurna dengan lingkungan.",
    },
    {
      question: "Apa itu Hanyutan Genetik?",
      options: [
        { label: "A. Proses kombinasi gen yang baru juga dihasilkan oleh rekombinasi genetika.", value: "A" },
        { label: "B. Gen yang diwariskan kepada keturunan suatu makhluk hidup dan menjadi bervariasi dalam suatu populasi.", value: "B" },
        { label: "C. Proses bebas yang menghasilkan perubahan acak pada frekuensi sifat suatu populasi.", value: "C", isCorrect: true },
        { label: "D. Proses kombinasi perubahan kecil sifat yang terjadi secara terus menerus dan acak ini dengan seleksi alam.", value: "D" },
      ],
      explanation: "hanyutan genetik (Bahasa Inggris: Genetic Drift) merupakan sebuah proses bebas yang menghasilkan perubahan acak pada frekuensi sifat suatu populasi. Hanyutan genetik dihasilkan oleh probabilitas apakah suatu sifat akan diwariskan ketika suatu individu bertahan hidup dan bereproduksi.",
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
