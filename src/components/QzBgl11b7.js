import React, { useState } from "react";
import "../css/TryOut.css";

const QuizBab7 = () => {

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa peran utama hormon FSH (Follicle Stimulating Hormone) pada wanita?",
      options: [
        "Merangsang ovulasi",
        "Merangsang perkembangan folikel di ovarium",
        "Menghambat produksi hormon estrogen",
        "Mengatur siklus menstruasi"
      ],
      answer: 1
    },
    {
      question: "Hormon apa yang bertanggung jawab atas pelepasan sel telur selama ovulasi?",
      options: [
        "Progesteron",
        "Estrogen",
        "LH (Luteinizing Hormone)",
        "Prolaktin"
      ],
      answer: 2
    },
    {
      question: "Apa fungsi utama hormon progesteron selama kehamilan?",
      options: [
        "Merangsang kontraksi uterus",
        "Meningkatkan produksi ASI",
        "Menjaga lapisan endometrium agar tetap mendukung kehamilan",
        "Menghambat perkembangan folikel baru"
      ],
      answer: 2
    },
    {
      question: "Hormon apa yang berperan dalam pembentukan ciri-ciri seksual sekunder pada pria?",
      options: [
        "Testosteron",
        "FSH",
        "LH",
        "Progesteron"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi jika kadar hormon estrogen menurun secara signifikan pada wanita?",
      options: [
        "Menopause",
        "Ovulasi meningkat",
        "Kehamilan spontan",
        "Produksi ASI terhenti"
      ],
      answer: 0
    },
    {
      question: "Hormon apa yang merangsang produksi ASI setelah melahirkan?",
      options: [
        "Prolaktin",
        "Oksitosin",
        "Estrogen",
        "Progesteron"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama hormon oksitosin selama persalinan?",
      options: [
        "Menghambat kontraksi uterus",
        "Merangsang kontraksi uterus",
        "Meningkatkan produksi hormon LH",
        "Mengatur kadar hormon estrogen"
      ],
      answer: 1
    },
    {
      question: "Hormon apa yang mengatur perkembangan kelenjar susu selama kehamilan?",
      options: [
        "Progesteron dan estrogen",
        "FSH dan LH",
        "Prolaktin dan oksitosin",
        "Testosteron dan estrogen"
      ],
      answer: 0
    },
    {
      question: "Apa peran hormon GnRH (Gonadotropin-Releasing Hormone)?",
      options: [
        "Mengatur produksi hormon FSH dan LH",
        "Menghambat ovulasi",
        "Meningkatkan produksi progesteron",
        "Mengatur produksi ASI"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi jika kadar hormon LH pada pria terlalu rendah?",
      options: [
        "Produksi testosteron menurun",
        "Produksi sperma meningkat",
        "Siklus menstruasi terganggu",
        "Kadar estrogen meningkat"
      ],
      answer: 0
    },
    {
      question: "Hormon apa yang memicu pelepasan ASI selama menyusui?",
      options: [
        "Oksitosin",
        "Progesteron",
        "Estrogen",
        "Prolaktin"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama hormon estrogen pada siklus menstruasi?",
      options: [
        "Merangsang pelepasan sel telur",
        "Merangsang pertumbuhan lapisan endometrium",
        "Menghambat produksi hormon LH",
        "Mengatur kontraksi uterus"
      ],
      answer: 1
    },
    {
      question: "Hormon apa yang bertanggung jawab atas pembentukan plasenta selama kehamilan?",
      options: [
        "Progesteron",
        "Estrogen",
        "hCG (Human Chorionic Gonadotropin)",
        "Prolaktin"
      ],
      answer: 2
    },
    {
      question: "Apa yang terjadi jika kadar hormon progesteron terlalu rendah selama kehamilan?",
      options: [
        "Kehamilan akan berlanjut normal",
        "Risiko keguguran meningkat",
        "Produksi ASI akan meningkat",
        "Ovulasi akan terjadi"
      ],
      answer: 1
    },
    {
      question: "Hormon apa yang memicu pubertas pada pria dan wanita?",
      options: [
        "GnRH",
        "Prolaktin",
        "Oksitosin",
        "Progesteron"
      ],
      answer: 0
    },
    {
      question: "Apa peran hormon testosteron pada wanita?",
      options: [
        "Mengatur siklus menstruasi",
        "Meningkatkan libido dan kekuatan otot",
        "Mengatur produksi ASI",
        "Merangsang ovulasi"
      ],
      answer: 1
    },
    {
      question: "Hormon apa yang bertanggung jawab atas perubahan mood selama siklus menstruasi?",
      options: [
        "Estrogen dan progesteron",
        "FSH dan LH",
        "Prolaktin dan oksitosin",
        "Testosteron dan hCG"
      ],
      answer: 0
    },
    {
      question: "Apa fungsi utama hormon hCG selama kehamilan?",
      options: [
        "Menjaga produksi progesteron dari korpus luteum",
        "Merangsang kontraksi uterus",
        "Mengatur perkembangan kelenjar susu",
        "Menghambat ovulasi"
      ],
      answer: 0
    },
    {
      question: "Hormon apa yang bertanggung jawab atas pembentukan sperma pada pria?",
      options: [
        "FSH dan testosteron",
        "LH dan progesteron",
        "Estrogen dan oksitosin",
        "GnRH dan prolaktin"
      ],
      answer: 0
    },
    {
      question: "Apa yang terjadi jika kadar hormon prolaktin terlalu tinggi pada pria?",
      options: [
        "Produksi testosteron meningkat",
        "Produksi sperma menurun",
        "Kadar estrogen menurun",
        "Produksi ASI akan terjadi"
      ],
      answer: 1
    }
  ];

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Bab 7: Hormon dalam Reproduksi Manusia</h1>

      {showResult ? (
        <div className="result-container">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>{score >= 15 ? "Luar biasa! Anda memahami materi dengan baik." : "Tetap semangat! Pelajari lagi materi ini untuk memperkuat pemahaman Anda."}</p>
          <button onClick={resetQuiz}>Ulangi Kuis</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                className="btn-option" 
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <p>Pertanyaan {currentQuestion + 1} dari {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizBab7;