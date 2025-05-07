import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Pemuliaan tanaman untuk mendapatkan bibit ungul dengan cara memindahkan gen tertentu dari spesies lain dengan perantara mikroorganisme dikenal sebagai?",
      options: [
        { label: "A. Fermentasi", value: "A" },
        { label: "B. DNA", value: "B" },
        { label: "C. Transplantasi", value: "C", isCorrect: true },
        { label: "D. Radiasi induksi", value: "D" },
      ],
      explanation: "Pemuliaan tanaman untuk mendapatkan bibit unggul dengan cara memindahkan gen tertentu dari suatu spesies lain dengan perantara mikroorganisme dikenal sebagai transplantasi gen atau rekombinasi gen. Transplantasi yang sering digunakan adalah memakai teknik plasmid, dengan gunting enzim berupa enzim Endonuklease Restriksi dan lemnya enzim ligase.",
    },
    {
      question: "Salah satu cara pemanfaatan bioteknologi dalam bidang kedokteran adalah menyambungkan?",
      options: [
        { label: "A. Gen yang memproduksi insulin ke dalam DNA bakteri", value: "A", isCorrect: true },
        { label: "B. DNA bakteri ke dalam pankreas manusia", value: "B" },
        { label: "C. DNA manusia ke kromosom bakteri dan menimbulkan virus", value: "C" },
        { label: "D. Gen virus ke dalam gen bakteri", value: "D" },
      ],
      explanation: "Pemanfaatan bioteknologi dalam bidang kedokteran telah banyak ditemukan, salah satunya yakni berwujud rekayasa genetik. Beberapa rekayasa gen tersebut diantaranya adalah gen yang memproduksi insulin ke dalam DNA bakteri, sehingga bakteri itu yang menghasilkan hormon insulin dan penderita kencing manis atau diabetes dapat memperoleh hormon insulin kembali. Teknik ini dikenal sebagai teknik plasmid dengan merekayasa penyambungan sekuen DNA plasmid dengan DNA yang diinginkan. Kemudian plasmid yang terangkai menjadi gabungan DNA rekombinan dimasukkan kembali ke bakteri atau sebaliknya, tergantung tujuannya.",
    },
    {
      question: "Penerapan bioteknologi untuk mendapatkan varietas-varietas unggul akan menjurus pada?",
      options: [
        { label: "A. Meningkatnya jenis hama tanaman", value: "A" },
        { label: "B. Meningkatnya keanekaragaman ekologi", value: "B" },
        { label: "C. Meningkatnya keanekaragaman genetik", value: "C", isCorrect: true },
        { label: "D. Menurunkan kualitas lingkungan", value: "D" },
      ],
      explanation: "Penerapan bioteknologi untuk mendapatkan varietas unggul akan menjurus pada meningkatnya keanekaragaman genetik. Meliputi jenis padi, pelita I, pelita II, barito, cisadane dan sebagainya. Dari hasil yang unggul ini dapat diperbanyak melalui kultur jaringan sehingga keunggulan produk yang dihasilkan sama.",
    },
    {
      question: "Pengaruh rekayasa genetik terhadap sumber daya protein hewani adalah?",
      options: [
        { label: "A. Biaya pemeliharaan hewan meningkat tajam", value: "A" },
        { label: "B. Meningkatnya variasi pada hewan", value: "B", isCorrect: true },
        { label: "C. Daya tahan hewan terhadap virus meningkat", value: "C" },
        { label: "D. Meningkatnya populasi hewan", value: "D" },
      ],
      explanation: "Pengaruh rekayasa genetik terhadap sumber daya protein hewani adalah untuk meningkatkan daya tahan hewan terhadap virus. Kini telah ditemukan interferon hasil teknologi hibridoma yang bisa membuat interferon untuk memusnahkan virus.",
    },
    {
      question: "Penerapan teknologi rekayasa genetika pada manusia pertama kali adalah pada penderita?",
      options: [
        { label: "A. Disentri", value: "A" },
        { label: "B. Asma", value: "B" },
        { label: "C. Diabetes", value: "C", isCorrect: true },
        { label: "D. Paru-paru basah", value: "D" },
      ],
      explanation: "Penerapan teknologi rekayasa genetika pada manusia pertama kali adalah pada penderita diabetes dengan cara menyambungkan gen yang memproduksi insulin ke dalam DNA bakteri dalam bioteknologi modern teknik plasmid.",
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
