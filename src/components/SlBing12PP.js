import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPresentPerfect = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ completed her assignment just now.",
      options: ["A. has", "B. had", "C. have", "D. having"],
      correctOption: "A. has",
      explanation: "The correct answer is 'A. has' because it describes a recently completed action.",
    },
    {
      question: "We ___ already seen that movie.",
      options: ["A. have", "B. has", "C. had", "D. having"],
      correctOption: "A. have",
      explanation: "The correct answer is 'A. have' because it indicates an action completed at an unspecified time in the past.",
    },
    {
      question: "He ___ visited the museum several times.",
      options: ["A. has", "B. had", "C. have", "D. having"],
      correctOption: "A. has",
      explanation: "The correct answer is 'A. has' because it describes an action with relevance to the present.",
    },
    {
      question: "They ___ never been to Paris before.",
      options: ["A. have", "B. has", "C. had", "D. having"],
      correctOption: "A. have",
      explanation: "The correct answer is 'A. have' because it indicates an experience up to the present.",
    },
    {
      question: "I ___ already finished my breakfast.",
      options: ["A. have", "B. has", "C. had", "D. having"],
      correctOption: "A. have",
      explanation: "The correct answer is 'A. have' because it describes a completed action with relevance to now.",
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

export default KuisPresentPerfect;
