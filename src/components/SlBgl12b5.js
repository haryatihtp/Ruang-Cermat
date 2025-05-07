import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan pembelahan mitosis?",
      options: [
        { label: "A. Pembelahan sel untuk menghasilkan dua sel anak dengan jumlah kromosom yang setengah dari sel induk", value: "A" },
        { label: "B. Pembelahan sel yang menghasilkan empat sel anak dengan jumlah kromosom setengah dari sel induk", value: "B" },
        { label: "C. Pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama dengan sel induk", value: "C", isCorrect: true },
        { label: "D. Pembelahan sel untuk memperbaiki sel-sel yang rusak", value: "D" },
      ],
      explanation: "Mitosis adalah pembelahan sel yang menghasilkan dua sel anak yang identik dengan sel induk, dengan jumlah kromosom yang sama.",
    },
    {
      question: "Pada fase manakah kromosom berada di tengah sel dan berbaris di bidang ekuator?",
      options: [
        { label: "A. Profase", value: "A" },
        { label: "B. Metafase", value: "B", isCorrect: true },
        { label: "C. Anafase", value: "C" },
        { label: "D. Telofase", value: "D" },
      ],
      explanation: "Pada fase metafase, kromosom berjajar di tengah sel pada bidang ekuator, mempersiapkan diri untuk dipisahkan pada fase berikutnya.",
    },
    {
      question: "Pembelahan sel yang menghasilkan empat sel anak dengan jumlah kromosom setengah dari sel induk adalah?",
      options: [
        { label: "A. Mitosis", value: "A" },
        { label: "B. Meiosis", value: "B", isCorrect: true },
        { label: "C. Kariotipe", value: "C" },
        { label: "D. Fertilisasi", value: "D" },
      ],
      explanation: "Meiosis adalah pembelahan sel yang menghasilkan sel gamet, yaitu sel telur dan sperma, dengan jumlah kromosom setengah dari sel induk.",
    },
    {
      question: "Apa yang dimaksud dengan crossing over dalam proses meiosis?",
      options: [
        { label: "A. Proses pemisahan kromosom homolog", value: "A" },
        { label: "B. Proses pertukaran segmen antara kromosom homolog", value: "B", isCorrect: true },
        { label: "C. Pembentukan sel haploid", value: "C" },
        { label: "D. Penggabungan kromosom setelah pembelahan", value: "D" },
      ],
      explanation: "Crossing over adalah proses pertukaran segmen kromatid antara kromosom homolog yang terjadi pada fase profase I meiosis.",
    },
    {
      question: "Pada pembelahan meiosis, fase yang menghasilkan dua sel haploid disebut?",
      options: [
        { label: "A. Telofase I", value: "A", isCorrect: true },
        { label: "B. Telofase II", value: "B" },
        { label: "C. Profase I", value: "C" },
        { label: "D. Metafase II", value: "D" },
      ],
      explanation: "Pada telofase I, pembelahan pertama meiosis menghasilkan dua sel haploid, yang kemudian akan mengalami meiosis II.",
    },
    {
      question: "Pada pembelahan mitosis, kromosom pada setiap sel anak memiliki jumlah kromosom yang...",
      options: [
        { label: "A. Setengah dari jumlah kromosom sel induk", value: "A" },
        { label: "B. Sama dengan jumlah kromosom sel induk", value: "B", isCorrect: true },
        { label: "C. Lebih banyak dari jumlah kromosom sel induk", value: "C" },
        { label: "D. Tidak teratur", value: "D" },
      ],
      explanation: "Pada mitosis, setiap sel anak memiliki jumlah kromosom yang sama dengan sel induk, sehingga keduanya identik secara genetik.",
    },
    {
      question: "Apa yang dimaksud dengan alel dalam pewarisan sifat?",
      options: [
        { label: "A. Salinan genetik yang diturunkan dari orang tua", value: "A" },
        { label: "B. Bentuk gen yang berbeda pada kromosom yang sama", value: "B", isCorrect: true },
        { label: "C. Gen yang menyebabkan sifat dominan", value: "C" },
        { label: "D. Proses terjadinya pembelahan sel", value: "D" },
      ],
      explanation: "Alel adalah bentuk alternatif dari suatu gen yang berada pada lokus yang sama di kromosom homolog, dan dapat berupa alel dominan atau resesif.",
    },
    {
      question: "Hukum Mendel yang menyatakan bahwa dua alel untuk suatu sifat akan terpisah secara acak selama pembentukan gamet disebut?",
      options: [
        { label: "A. Hukum Asortasi Bebas", value: "A" },
        { label: "B. Hukum Segregasi", value: "B", isCorrect: true },
        { label: "C. Hukum Dominasi", value: "C" },
        { label: "D. Hukum Pemisahan Alel", value: "D" },
      ],
      explanation: "Hukum Segregasi Mendel menyatakan bahwa setiap individu memiliki sepasang alel, dan kedua alel akan terpisah saat gamet terbentuk.",
    },
    {
      question: "Sifat yang hanya akan diekspresikan jika kedua alel pada individu tersebut resesif disebut?",
      options: [
        { label: "A. Sifat dominan", value: "A" },
        { label: "B. Sifat resesif", value: "B", isCorrect: true },
        { label: "C. Sifat kodominan", value: "C" },
        { label: "D. Sifat intermediat", value: "D" },
      ],
      explanation: "Sifat resesif hanya akan diekspresikan jika kedua alel untuk sifat tersebut adalah alel resesif.",
    },
    {
      question: "Bagaimana manusia mewariskan sifat-sifatnya kepada keturunannya?",
      options: [
        { label: "A. Melalui pembelahan mitosis", value: "A" },
        { label: "B. Melalui pembelahan meiosis dan fertilisasi", value: "B", isCorrect: true },
        { label: "C. Dengan menggabungkan dua set kromosom yang sama", value: "C" },
        { label: "D. Dengan proses pertumbuhan", value: "D" },
      ],
      explanation: "Pewarisan sifat pada manusia terjadi melalui meiosis untuk membentuk gamet, yang kemudian bersatu pada fertilisasi untuk membentuk individu baru.",
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
          <p>Skor Anda: {score}/{questions.length} </p>
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
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

export default LatihanSoal5;