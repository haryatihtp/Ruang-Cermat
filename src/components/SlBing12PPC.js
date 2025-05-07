import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPresentPerfectContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ studying for the exam for three hours.",
      options: ["A. has been", "B. had been", "C. have been", "D. having been"],
      correctOption: "A. has been",
      explanation: "The correct answer is 'A. has been' because it describes an action that started in the past and is still continuing.",
    },
    {
      question: "We ___ working on this project since last month.",
      options: ["A. have been", "B. has been", "C. had been", "D. having been"],
      correctOption: "A. have been",
      explanation: "The correct answer is 'A. have been' because it indicates a continuous action starting in the past and continuing up to now.",
    },
    {
      question: "He ___ playing the piano for two hours.",
      options: ["A. has been", "B. have been", "C. had been", "D. having been"],
      correctOption: "A. has been",
      explanation: "The correct answer is 'A. has been' because it describes a continuous activity.",
    },
    {
      question: "They ___ waiting for the bus since morning.",
      options: ["A. have been", "B. has been", "C. had been", "D. having been"],
      correctOption: "A. have been",
      explanation: "The correct answer is 'A. have been' because it indicates a duration of an ongoing action.",
    },
    {
      question: "I ___ reading this book for a week now.",
      options: ["A. have been", "B. has been", "C. had been", "D. having been"],
      correctOption: "A. have been",
      explanation: "The correct answer is 'A. have been' because it describes an ongoing action that started in the past.",
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
          &larr; Previous Question
        </button>
        <div className="question-box">
          <h2>Question {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Next Question &rarr;
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

export default KuisPresentPerfectContinuous;
