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
      question: "Suatu atom dengan nomor atom 53 dan massa atom 127 mengandung…?",
      options: [
        { label: "A. 53 elektron, 74 proton", value: "A" },
        {
          label: "B. 53 proton, 74 elektron",
          value: "B",
          isCorrect: true,
        },
        { label: "C. 53 elektron, 127 proton", value: "C" },
        { label: "D. 74 neutron, 127 proton", value: "D" },
      ],
      explanation:
        "Atom 53X127 memiliki proton: 53, elektron: 53, dan neutron (127 - 53 = 74).",
    },
    {
      question: "Kalau Atom X yang nomor atomnya 19 dituliskan konfigurasi elektronnya, maka atom itu memiliki ciri-ciri…?",
      options: [
        { label: "A. Elektron valensinya adalah 1 valensinya adalah 1", value: "A" },
        { label: "B. Elektron valensinya adalah 9 valensinya adalah 1", value: "B", isCorrect: true },
        { label: "C. Elektron valensinya adalah 7 valensinya adalah 1", value: "C" },
        { label: "D. Elektron valensinya adalah 7 valensinya adalah 2", value: "D" },
      ],
      explanation:
        "Konfigurasi elektron 19X: 1s2 2s2 2p6 3s2 3p6 4s1. Elektron valensinya adalah: 1, dan valensinya adalah: 1.",
    },
    {
      question:
        "Suatu atom memiliki elektron terakhir dengan bilangan kuantum n=4, l=2, m=-1, s=1/2. Jumlah elektron yang tidak berpasangan dalam atom tersebut adalah….?",
      options: [
        { label: "A. 1", value: "A" },
        { label: "B. 3", value: "B", isCorrect: true },
        { label: "C. 2", value: "C" },
        { label: "D. 5", value: "D" },
      ],
      explanation:
        "n = 4, l = 2, m = -1, s = -1/2. Elektron terluar adalah 4d7. Setelah digambarkan dalam diagram orbital, jumlah elektron yang tidak berpasangan adalah 3.",
    },
    {
      question: "Bilangan kuantum elektron terakhir dari atom logam divalen M adalah n=3, l=2, m=-2, s=-1/2. Bila sebanyak 5,6 gram M tepat bereaksi dengan 0,1 mol asam sulfat, maka jumlah neutron yang terkandung dalam atom M adalah…?",
      options: [
        { label: "A. 65", value: "A" },
        { label: "B. 45", value: "B" },
        { label: "C. 30", value: "C", isCorrect: true },
        { label: "D. 35", value: "D" },
      ],
      explanation:
        "Reaksi: M2+ + H2SO4 → MSO4 + H2 (0,1 mol). Mol M2+ = 0,1. Ar M2+ = massa/mol = 5,6/0,1 = 56 gram/mol. Nomor massa = Ar = 56. Nomor atomnya adalah 26. Neutron: nomor massa - nomor atom = 56 - 26 = 30.",
    },
    {
      question:
        "Ion X-2 mempunyai konfigurasi elektron 2.8.8. Nomor atom unsur X adalah….?",
      options: [
        { label: "A. 17", value: "A" },
        { label: "B. 16", value: "B", isCorrect: true },
        { label: "C. 19", value: "C" },
        { label: "D. 20", value: "D" },
      ],
      explanation:
        "Ion X2-: 2)8)8. Atom X: 2)8)6. Maka nomor atomnya: 16.",
    },
    {
      question: "Bilangan kuantum magnetik menunjukkan….",
      options: [
        { label: "A. arah ruang orbital", value: "A", isCorrect: true },
        { label: "B. tingkat energi kulit", value: "B" },
        { label: "C. subtingkat energi elektron", value: "C" },
        { label: "D. perbedaan arah rotasi elektron", value: "D" },
        { label: "E. kebolehjadian menemukan elektron", value: "E" },
      ],
      explanation:
        "Bilangan kuantum magnetik menunjukkan orientasi orbital dalam ruang atau arah ruang orbital.",
    },
    {
      question:
        "Jumlah elektron tidak berpasangan paling sedikit terdapat pada atom yang susunan elektron kulit terluarnya….",
      options: [
        { label: "A. s2p2", value: "A" },
        { label: "B. s2p3", value: "B" },
        { label: "C. s2p6d5", value: "C" },
        { label: "D. s2p5", value: "D", isCorrect: true },
        { label: "E. s2p6d6", value: "E" },
      ],
      explanation:
        "Elektron tidak berpasangan: s2p2 (2), s2p3 (3), s2p6d5 (5), s2p5 (1), s2p6d6 (4).",
    },
    {
      question:
        "Ion A3- memiliki konfigurasi elektron 3d104s24p6. Nomor atom unsur A adalah…..",
      options: [
        { label: "A. 27", value: "A" },
        { label: "B. 30", value: "B" },
        { label: "C. 33", value: "C", isCorrect: true },
        { label: "D. 36", value: "D" },
        { label: "E. 39", value: "E" },
      ],
      explanation:
        "Ion A3-: [Ar] 3d10 4s2 4p6. Atom A: [Ar] 3d10 4s2 4p3, nomor atomnya adalah 33.",
    },
    {
      question:
        "Jumlah Orbital yang ditempati oleh elektron dalam atom mangan (nomor atom 25) adalah….",
      options: [
        { label: "A. 7", value: "A" },
        { label: "B. 9", value: "B" },
        { label: "C. 11", value: "C" },
        { label: "D. 13", value: "D" },
        { label: "E. 15", value: "E", isCorrect: true },
      ],
      explanation:
        "Konfigurasi elektron mangan: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Total orbital: 15.",
    },
    {
      question:
        "Deret bilangan kuantum yang sesuai untuk elektron 3d adalah….",
      options: [
        { label: "A. n=3, l=2, m=-3, s=+1/2", value: "A" },
        { label: "B. n=3, l=3, m=+2, s=-1/2", value: "B" },
        { label: "C. n=3, l=1, m=0, s=+1/2", value: "C" },
        { label: "D. n=3, l=2, m=-2, s=+1/2", value: "D", isCorrect: true },
        { label: "E. n=3, l=2, m=0, s=+1/2", value: "E" },
      ],
      explanation:
        "Pada elektron valensi 3d, bilangan kuantumnya adalah n=3, l=2, m antara -2 hingga +2, dan s=+1/2 atau -1/2.",
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
    setIsAnswered(false);
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
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
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
                : `Jawaban Benar: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
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
            {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal;



