import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalTeoriAtom = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Siapa penemu teori atom modern?",
      options: [
        { label: "A. Dalton", value: "A", isCorrect: true },
        { label: "B. Thomson", value: "B" },
        { label: "C. Rutherford", value: "C" },
        { label: "D. Bohr", value: "D" },
      ],
      explanation:
        "John Dalton memperkenalkan teori atom modern pada tahun 1803.",
    },
    {
      question: "Apa partikel penyusun atom?",
      options: [
        { label: "A. Elekron, Proton, Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron dan Proton saja", value: "B" },
        { label: "C. Neutron saja", value: "C", value: "C" },
        { label: "D. Proton saja", value: "D" },
      ],
      explanation:
        "Atom terdiri dari elektron, proton, dan neutron.",
    },
    {
      question: "Apa nama model atom yang dikembangkan oleh Rutherford?",
      options: [
        { label: "A. Model Roti Kismis ", value: "A" },
        { label: "B. Model Planetary", value: "B", isCorrect: true},
        { label: "C. Model Gelombang", value: "C", },
        { label: "D. Model Atom Bohr", value: "D" },
      ],
      explanation:
        "Model Rutherford menggambarkan atom seperti tata surya (model planetary)."
    },
    {
      question: "Dalam model atom Rutherford, inti atom memiliki sifat?",
      options: [
        { label: "A. Berukuran besar dan bermuatan negatif", value: "A" },
        { label: "B. Berukuran kecil dan bermuatan positif", value: "B", isCorrect: true},
        { label: "C. Berukuran besar dan bermuatan positif", value: "C", },
        { label: "D. Berukuran kecil dan netral", value: "D" },
      ],
      explanation:
        "Rutherford melalui eksperimen hamburan sinar alfa menemukan bahwa inti atom berukuran sangat kecil dibandingkan atom secara keseluruhan dan bermuatan positif. Sebagian besar massa atom terkonsentrasi di inti."
    },
    {
      question: "Partikel subatomik yang tidak bermuatan disebut?",
      options: [
        { label: "A. Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron", value: "B" },
        { label: "C. Proton", value: "C", value: "C" },
        { label: "D. Nukleon", value: "D" },
      ],
      explanation:
        "Neutron adalah partikel subatomik yang terdapat dalam inti atom bersama proton. Neutron tidak memiliki muatan listrik, tetapi memiliki massa hampir sama dengan proton.",
    },
    {
      question: "Partikel subatomik yang tidak bermuatan disebut?",
      options: [
        { label: "A. Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron", value: "B" },
        { label: "C. Proton", value: "C" },
        { label: "D. Nukleon", value: "D" },
      ],
      explanation:
        "Neutron adalah partikel subatomik yang terdapat dalam inti atom bersama proton. Neutron tidak memiliki muatan listrik, tetapi memiliki massa hampir sama dengan proton.",
    },
    {
      question: "Siapa yang pertama kali mengusulkan bahwa materi terdiri dari partikel kecil bernama atom?",
      options: [
        { label: "A. John Dalton", value: "A", isCorrect: false },
        { label: "B. Demokritus", value: "B", isCorrect: true },
        { label: "C. J.J. Thomson", value: "C" },
        { label: "D. Ernest Rutherford", value: "D" },
      ],
      explanation:
        "Demokritus adalah filsuf Yunani kuno yang pertama kali mengusulkan gagasan bahwa semua materi terdiri dari partikel kecil tak terpisahkan yang disebut atom.",
    },
    {
      question: "Apa nama model atom yang menyatakan bahwa elektron tersebar dalam atom seperti kismis dalam roti?",
      options: [
        { label: "A. Model atom Bohr", value: "A" },
        { label: "B. Model atom Rutherford", value: "B" },
        { label: "C. Model atom Dalton", value: "C" },
        { label: "D. Model atom Thomson", value: "D", isCorrect: true },
      ],
      explanation:
        "Model atom Thomson dikenal sebagai model 'roti kismis', di mana elektron diasumsikan tersebar dalam atom seperti kismis yang tersebar dalam roti.",
    },
    {
      question: "Dalam eksperimen hamburan sinar alfa, Rutherford menemukan bahwa?",
      options: [
        { label: "A. Atom berbentuk seperti roti kismis", value: "A" },
        { label: "B. Sebagian besar massa atom terkonsentrasi di inti kecil", value: "B", isCorrect: true },
        { label: "C. Elektron bergerak dalam lintasan berbentuk lingkaran di sekitar inti", value: "C" },
        { label: "D. Proton dan neutron tersebar merata dalam atom", value: "D" },
      ],
      explanation:
        "Eksperimen hamburan sinar alfa Rutherford menunjukkan bahwa sebagian besar massa atom terkonsentrasi di inti kecil yang sangat padat, sementara sebagian besar atom adalah ruang kosong.",
    },
    {
      question: "Model atom Bohr menggambarkan elektron bergerak dalam?",
      options: [
        { label: "A. Orbit berbentuk lingkaran dengan energi tetap", value: "A", isCorrect: true },
        { label: "B. Lintasan acak di sekitar inti", value: "B" },
        { label: "C. Ruang kosong di dalam atom", value: "C" },
        { label: "D. Orbit berbentuk elips dengan energi berubah", value: "D" },
      ],
      explanation:
        "Model atom Bohr menjelaskan bahwa elektron bergerak dalam orbit melingkar dengan energi tetap di sekitar inti atom, dan elektron dapat berpindah lintasan dengan menyerap atau memancarkan energi.",
    }
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

export default LatihanSoalTeoriAtom;





