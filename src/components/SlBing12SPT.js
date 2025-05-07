import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisSimplePast = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "She ___ to school yesterday.",
      options: ["A. go", "B. goes", "C. went", "D. gone"],
      correctOption: "C. went",
      explanation: "The correct answer is 'C. went' because it describes a completed action in the past.",
    },
    {
      question: "We ___ coffee in the morning.",
      options: ["A. drink", "B. drank", "C. drinks", "D. drinking"],
      correctOption: "B. drank",
      explanation: "The correct answer is 'B. drank' because it describes a past action.",
    },
    {
      question: "He always ___ his homework last night.",
      options: ["A. finish", "B. finished", "C. finishes", "D. finishing"],
      correctOption: "B. finished",
      explanation: "The correct answer is 'B. finished' because it describes a completed action in the past.",
    },
    {
      question: "They ___ soccer last weekend.",
      options: ["A. play", "B. played", "C. plays", "D. playing"],
      correctOption: "B. played",
      explanation: "The correct answer is 'B. played' because it describes an action that happened in the past.",
    },
    {
      question: "The sun ___ in the east this morning.",
      options: ["A. rise", "B. rose", "C. rises", "D. rising"],
      correctOption: "B. rose",
      explanation: "The correct answer is 'B. rose' because it describes a past action.",
    },
    {
      question: "We ___ our room last weekend.",
      options: ["A. clean", "B. cleaned", "C. cleaning", "D. cleans"],
      correctOption: "B. cleaned",
      explanation: "The correct answer is 'B. cleaned' because it describes a completed action in the past.",
    },
    {
      question: "He ___ to work by bus yesterday.",
      options: ["A. go", "B. went", "C. going", "D. gone"],
      correctOption: "B. went",
      explanation: "The correct answer is 'B. went' because it describes a past action.",
    },
    {
      question: "They ___ lunch at 12 PM yesterday.",
      options: ["A. have", "B. had", "C. having", "D. has"],
      correctOption: "B. had",
      explanation: "The correct answer is 'B. had' because it describes a past action.",
    },
    {
      question: "Water ___ at 100 degrees Celsius during the experiment.",
      options: ["A. boil", "B. boiled", "C. boiling", "D. boils"],
      correctOption: "B. boiled",
      explanation: "The correct answer is 'B. boiled' because it describes a past action.",
    },
    {
      question: "She ___ to the gym last week.",
      options: ["A. go", "B. went", "C. going", "D. gone"],
      correctOption: "B. went",
      explanation: "The correct answer is 'B. went' because it describes a past action.",
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

export default KuisSimplePast;
