import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalredoks = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Reaksi manakah yang tidak dapat berlangsung dalam keadaan standar?",
      options: [
        { label: "A.Fe+2 + Xn -> Fe + Zn+2 ", value: "A" },
        {
          label: "B.Zn+2 + Pb -> Pb+2 + Z",
          value: "B",
          isCorrect: true,
        },
        { label: "C.Pb+2 + Fe -> Pb + Fe+2 ", value: "C" },
        { label: "D.Sn+2 + Zn -> Sn + Zn+2", value: "D" },
      ],
      explanation:
        "Untuk mengetahui jawabannya, buatlah urutan dari Eo kecil ke Eo besar dan reaksi yang terjadi harus searah anak panah. Urutan Zn -> Fe -> Sn -> Pb. Dari keempat reaksi tersebut, reaksi yang berlawanan arah dengan anak panah adalah reaksi keempat saja. Jadi, jawabannya adalah D.",
    },
    {
      question: "Manakah reaksi berikut yang bukan termasuk reaksi redoks?",
      options: [
        { label: "A.Zn + 2 H2SO4 -> ZnSO4 + H2 ", value: "A" },
        { label: "B.2 CrO22- + 2H+ -> Cr2O72- + H2O ", value: "B", isCorrect: true },
        { label: "C.CU2 + Ni -> Cu + Ni2+", value: "C" },
        { label: "D.C3H8 + 5 O2 -> 3 CO2 + 4 H2O", value: "D" },
      ],
      explanation:
        "Pada pilihan A, C, dan D semuanya terdapat atomik (biloks nol) yang membentuk senyawanya. Ada biloks positif dan negatif yang menandakan adanya perubahan yang berarti reaksi redoks.Sementara pada pilihan B, biloks pada CrO42- sebesar +6 dan pada Cr2O72- sebesar +6 tidak ada perubahan biloks sehingga bukan termasuk reaksi redoks. Maka, jawabannya adalah B.",
    },
    {
      question:
        "Apa yang dimaksud dengan reaksi redoks?",
      options: [
        { label: "A. Reaksi yang menghasilkan gas", value: "A" },
        { label: "B.Reaksi yang melibatkan transfer elektron ", value: "B", isCorrect: true },
        { label: "C.Reaksi yang memerlukan katalis ", value: "C" },
        { label: "D.Reaksi pembakaran sederhana", value: "D" },
      ],
      explanation:
        "Reaksi redoks adalah reaksi yang melibatkan perpindahan elektron, di mana oksidasi dan reduksi terjadi secara bersamaan.",
    },
    {
      question: "Di antara larutan-larutan berikut, larutan yang termasuk dalam larutan basa adalah",
      options: [
        { label: "A.C2H5OH ", value: "A" },
        { label: "B.CH3COOH", value: "B" },
        { label: "C.NaOH HCl", value: "C", isCorrect: true },
        { label: "D.HCl ", value: "D" },
      ],
      explanation:
        "Menurut Arrhenius basa adalah spesi yang dapat melepaskan ion OH- dalam air.Reaksi ionisasi NaOH: NaOH (aq) → Na+(aq) + OH-(aq)",
    },
    {
      question:
        "Pada reaksi 2Mg + O₂ → 2MgO, apa yang teroksidasi?",
      options: [
        { label: "A.O₂", value: "A" },
        { label: "B.Mg", value: "B", isCorrect: true },
        { label: "C.MgO ", value: "C" },
        { label: "D. Tidak ada", value: "D" },
      ],
      explanation:
        "Dalam reaksi tersebut, magnesium (Mg) kehilangan elektron sehingga mengalami oksidasi.",
    },
    {
      question:
        "Apa definisi dari reaksi redoks?",
      options: [
        { label: "A.Reaksi yang hanya melibatkan transfer proton.", value: "A" },
        { label: "B.Reaksi yang melibatkan transfer elektron antara zat-zat yang bereaksi", value: "B", isCorrect: true },
        { label: "C.Reaksi yang menghasilkan senyawa organik", value: "C" },
        { label: "D. Reaksi yang hanya terjadi dalam larutan basa ", value: "D" },
      ],
      explanation:
        "Reaksi redoks adalah reaksi kimia yang melibatkan transfer elektron antara dua zat. Dalam reaksi ini, satu zat mengalami oksidasi (kehilangan elektron), sedangkan zat lain mengalami reduksi (menerima elektron).",
    },
    {
      question:
        "Manakah pernyataan berikut yang benar tentang oksidasi?",
      options: [
        { label: "A.Oksidasi adalah proses pelepasan proton", value: "A" },
        { label: "B.Oksidasi adalah proses pelepasan elektron.", value: "B", isCorrect: true },
        { label: "C.Oksidasi adalah proses penambahan elektron", value: "C" },
        { label: "D.Oksidasi adalah reaksi antara asam dan basa. ", value: "D" },
      ],
      explanation:
        "Oksidasi didefinisikan sebagai proses di mana suatu zat kehilangan elektron. Dalam istilah bilangan oksidasi, oksidasi juga diartikan sebagai kenaikan bilangan oksidasi suatu atom.",
    },
    {
      question:
        "Dalam konteks reaksi redoks, apa yang dimaksud dengan oksidator?",
      options: [
        { label: "A.Zat yang kehilangan elektron", value: "A" },
        { label: "B.Zat yang memberikan elektron.", value: "B",  },
        { label: "C.Zat yang menerima elektron. ", value: "C", isCorrect: true},
        { label: "D.Zat yang tidak mengalami perubahan bilangan oksidasi ", value: "D" },
      ],
      explanation:
        "Oksidator adalah zat yang menyebabkan zat lain teroksidasi dengan cara menerima elektron. Oleh karena itu, oksidator sendiri mengalami reduksi dalam reaksi redoks.",
    },
    {
      question:
        "Apa yang terjadi pada bilangan oksidasi suatu unsur selama proses reduksi?",
      options: [
        { label: "A.Bilangan oksidasi meningka", value: "A" },
        { label: "B.Bilangan oksidasi meningka", value: "B", isCorrect: true },
        { label: "C.Bilangan oksidasi tetap. ", value: "C" },
        { label: "D. Bilangan oksidasi berubah-ubah.", value: "D" },
      ],
      explanation:
        "Reduksi adalah proses di mana suatu unsur menerima elektron, sehingga bilangan oksidasinya berkurang (menjadi lebih negatif).",
    },
    {
      question:
        "Apa yang dimaksud dengan reduktor dalam reaksi redoks?",
      options: [
        { label: "A.Zat yang menyebabkan zat lain tereduksi dengan melepaskan elektron.", value: "A", isCorrect: true },
        { label: "B.Zat yang menerima elektron dari zat lain.", value: "B" },
        { label: "C. Zat yang menyebabkan kenaikan bilangan oksidasi zat lain.", value: "C" },
        { label: "D.Zat yang tidak mengalami perubahan bilangan oksidasi.", value: "D" },
      ],
      explanation:
        "Reduktor adalah zat yang menyebabkan zat lain tereduksi dengan cara melepaskan elektronnya. Dalam proses tersebut, reduktor sendiri mengalami oksidasi.",
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
          <h1 className="latihan-soal1-title">Reaksi Redoks</h1>
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
        <h1 className="latihan-soal1-title">Reaksi Redoks</h1>
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
export default LatihanSoalredoks;