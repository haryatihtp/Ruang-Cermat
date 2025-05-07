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
      question: "Apa yang dimaksud dengan hidrolisis garam?",
      options: [
        "A. Reaksi garam dengan basa",
        "B. Reaksi garam dengan air",
        "C. Reaksi garam dengan asam",
        "D. Reaksi garam dengan logam",
      ],
      correctOption: "B",
      explanation:
        "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-.",
    },
    {
      question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
      options: [
        "A. Asam",
        "B. Basa",
        "C. Netral",
        "D. Tidak bereaksi",
      ],
      correctOption: "B",
      explanation:
        "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan.",
    },
    {
      question: "Garam apa yang akan membentuk larutan asam setelah dilarutkan dalam air?",
      options: [
        "A. NaCl",
        "B. CH3COONa",
        "C. NH4Cl",
        "D. Na2SO4",
      ],
      correctOption: "C",
      explanation:
        "NH4Cl merupakan garam dari asam lemah (NH4OH) dan basa kuat (HCl), sehingga larutannya bersifat asam.",
    },
    {
      question: "Apa yang akan terjadi jika larutan Na2CO3 dicampurkan dengan air?",
      options: [
        "A. Larutan akan menjadi netral",
        "B. Larutan akan bersifat asam",
        "C. Larutan akan bersifat basa",
        "D. Tidak ada reaksi",
      ],
      correctOption: "C",
      explanation:
        "Na2CO3 adalah garam dari asam lemah (H2CO3) dan basa kuat (NaOH), sehingga larutannya bersifat basa.",
    },
    {
      question: "Mengapa garam dari asam kuat dan basa kuat tidak menyebabkan hidrolisis?",
      options: [
        "A. Asam kuat sepenuhnya terionisasi",
        "B. Basa kuat tidak terionisasi",
        "C. Reaksi hidrolisis tidak terjadi pada pH netral",
        "D. Asam dan basa tidak bereaksi satu sama lain",
      ],
      correctOption: "C",
      explanation:
        "Asam kuat dan basa kuat menghasilkan larutan yang netral, sehingga tidak terjadi hidrolisis dan tidak ada perubahan pH.",
    },

    {
      question: "Apa yang dimaksud dengan hidrolisis garam yang menyebabkan pembentukan ion H+?",
      options: [
        "A. Garam yang berasal dari asam kuat dan basa kuat",
        "B. Garam yang berasal dari asam lemah dan basa kuat",
        "C. Garam yang berasal dari asam kuat dan basa lemah",
        "D. Garam yang berasal dari asam lemah dan basa lemah",
      ],
      correctOption: "C",
      explanation:
        "Garam dari asam kuat dan basa lemah akan terhidrolisis menghasilkan ion H+, membuat larutan bersifat asam.",
    },
    {
      question: "Garam dari asam lemah dan basa lemah akan menghasilkan larutan dengan pH yang bersifat?",
      options: [
        "A. Asam",
        "B. Basa",
        "C. Netral",
        "D. Tergantung pada konsentrasi",
      ],
      correctOption: "D",
      explanation:
        "Garam dari asam lemah dan basa lemah dapat menghasilkan larutan yang pH-nya tergantung pada kekuatan asam dan basa serta konsentrasi garam.",
    },
    {
      question: "Bagaimana cara menentukan apakah larutan garam bersifat asam atau basa?",
      options: [
        "A. Menambah air ke larutan",
        "B. Mengukur pH larutan",
        "C. Menggunakan indikator universal",
        "D. Semua jawaban benar",
      ],
      correctOption: "B",
      explanation:
        "Untuk mengetahui sifat larutan, kita dapat mengukur pH larutan tersebut. pH yang lebih rendah dari 7 menunjukkan sifat asam, sedangkan pH lebih tinggi dari 7 menunjukkan sifat basa.",
    },
    {
      question: "Apa yang terjadi jika larutan Na2SO4 dilarutkan dalam air?",
      options: [
        "A. Larutan akan bersifat netral",
        "B. Larutan akan bersifat asam",
        "C. Larutan akan bersifat basa",
        "D. Tidak bereaksi",
      ],
      correctOption: "A",
      explanation:
        "Na2SO4 adalah garam dari asam kuat (H2SO4) dan basa kuat (NaOH), sehingga larutannya bersifat netral.",
    },
    {
      question: "Pada larutan garam apa yang terjadi jika garam dari asam lemah dan basa lemah terlarut?",
      options: [
        "A. Tidak terjadi hidrolisis",
        "B. Terjadi hidrolisis yang menghasilkan ion H+ dan OH-",
        "C. Terjadi reaksi pembentukan garam baru",
        "D. pH larutan tetap netral",
      ],
      correctOption: "B",
      explanation:
        "Pada garam yang berasal dari asam lemah dan basa lemah, keduanya akan terhidrolisis menghasilkan ion H+ dan OH-, yang mempengaruhi pH larutan.",
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