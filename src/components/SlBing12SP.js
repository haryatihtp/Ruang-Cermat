import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisSimplePresent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ to school every day.",
      options: ["A. go", "B. goes", "C. going", "D. gone"],
      correctOption: "B",
      explanation: "The correct answer is 'B. goes' because the subject is third-person singular.",
    },
    {
      question: "We ___ coffee in the morning.",
      options: ["A. drink", "B. drinks", "C. drinking", "D. drank"],
      correctOption: "A",
      explanation: "The correct answer is 'A. drink' because the subject is plural.",
    },
    {
      question: "He always ___ his homework on time.",
      options: ["A. finish", "B. finishes", "C. finishing", "D. finished"],
      correctOption: "B",
      explanation: "The correct answer is 'B. finishes' because the subject is third-person singular.",
    },
    {
      question: "They ___ soccer every weekend.",
      options: ["A. play", "B. plays", "C. playing", "D. played"],
      correctOption: "A",
      explanation: "The correct answer is 'A. play' because the subject is plural.",
    },
    {
      question: "The sun ___ in the east.",
      options: ["A. rise", "B. rises", "C. rising", "D. rose"],
      correctOption: "B",
      explanation: "The correct answer is 'B. rises' because it is a general truth.",
    },
    {
      question: "We ___ our room every weekend.",
      options: ["A. clean", "B. cleans", "C. cleaning", "D. cleaned"],
      correctOption: "A",
      explanation: "The correct answer is 'A. clean' because the subject is plural.",
    },
    {
      question: "He ___ to work by bus.",
      options: ["A. go", "B. goes", "C. going", "D. gone"],
      correctOption: "B",
      explanation: "The correct answer is 'B. goes' because the subject is third-person singular.",
    },
    {
      question: "They ___ lunch at 12 PM every day.",
      options: ["A. have", "B. has", "C. having", "D. had"],
      correctOption: "A",
      explanation: "The correct answer is 'A. have' because the subject is plural.",
    },
    {
      question: "Water ___ at 100 degrees Celsius.",
      options: ["A. boil", "B. boils", "C. boiling", "D. boiled"],
      correctOption: "B",
      explanation: "The correct answer is 'B. boils' because it is a general truth.",
    },
    {
      question: "She ___ to the gym every week.",
      options: ["A. go", "B. goes", "C. going", "D. gone"],
      correctOption: "B",
      explanation: "The correct answer is 'B. goes' because the subject is third-person singular.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Soal Sebelumnya
        </button>
        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Soal Berikutnya &rarr;
        </button>
      </div>

      <div className="options-container">
        {questions[currentQuestion - 1].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option
                ? option === questions[currentQuestion - 1].correctOption
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default KuisSimplePresent;