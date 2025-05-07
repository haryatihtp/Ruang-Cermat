import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPastPerfectContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ studying for the exam before the bell rang.",
      options: ["A. has been", "B. had been", "C. have been", "D. having been"],
      correctOption: "B. had been",
      explanation: "The correct answer is 'B. had been' because it describes an action that was ongoing in the past before another action.",
    },
    {
      question: "We ___ working on that project before it was canceled.",
      options: ["A. have been", "B. had been", "C. was being", "D. having been"],
      correctOption: "B. had been",
      explanation: "The correct answer is 'B. had been' because it indicates a continuous action that was happening before another event in the past.",
    },
    {
      question: "He ___ playing the piano for two hours before he stopped.",
      options: ["A. has been", "B. had been", "C. have been", "D. having been"],
      correctOption: "B. had been",
      explanation: "The correct answer is 'B. had been' because it describes an action that was ongoing until a specific point in the past.",
    },
    {
      question: "They ___ waiting for the bus for an hour before it arrived.",
      options: ["A. have been", "B. had been", "C. were being", "D. having been"],
      correctOption: "B. had been",
      explanation: "The correct answer is 'B. had been' because it indicates a duration of an action that ended in the past.",
    },
    {
      question: "I ___ reading that book for a week before I finished it.",
      options: ["A. have been", "B. had been", "C. was being", "D. having been"],
      correctOption: "B. had been",
      explanation: "The correct answer is 'B. had been' because it describes an action that was ongoing in the past before another action.",
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

export default KuisPastPerfectContinuous;
