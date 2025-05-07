import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPresentContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question: "Right now, she ___ her homework. (do)",
      options: ["A. is doing", "B. does", "C. did", "D. will do"],
      correctOption: "A. is doing",
      explanation: "The correct answer is 'A. is doing' because it describes an ongoing action at the moment.",
    },
    {
      question: "Look! The baby ___ to walk. (try)",
      options: ["A. tries", "B. is trying", "C. has tried", "D. will try"],
      correctOption: "B. is trying",
      explanation: "The correct answer is 'B. is trying' because it describes an ongoing action.",
    },
    {
      question: "We ___ dinner together at the moment. (have)",
      options: ["A. are having", "B. had", "C. have", "D. will have"],
      correctOption: "A. are having",
      explanation: "The correct answer is 'A. are having' because it shows a current ongoing action.",
    },
    {
      question: "Listen! The birds ___ beautifully. (sing)",
      options: ["A. sing", "B. are singing", "C. sang", "D. sings"],
      correctOption: "B. are singing",
      explanation: "The correct answer is 'B. are singing' because it describes an action happening right now.",
    },
    {
      question: "The children ___ soccer in the park right now. (play)",
      options: ["A. play", "B. played", "C. are playing", "D. will play"],
      correctOption: "C. are playing",
      explanation: "The correct answer is 'C. are playing' because it describes an ongoing activity.",
    },
    {
      question: "I ___ a letter to my friend at the moment. (write)",
      options: ["A. write", "B. wrote", "C. am writing", "D. writes"],
      correctOption: "C. am writing",
      explanation: "The correct answer is 'C. am writing' because it describes what is happening now.",
    },
    {
      question: "She ___ her favorite TV show right now. (watch)",
      options: ["A. watches", "B. watched", "C. is watching", "D. has watched"],
      correctOption: "C. is watching",
      explanation: "The correct answer is 'C. is watching' because it describes a current activity.",
    },
    {
      question: "Look! The cat ___ on the sofa. (sleep)",
      options: ["A. is sleeping", "B. sleeps", "C. slept", "D. sleep"],
      correctOption: "A. is sleeping",
      explanation: "The correct answer is 'A. is sleeping' because it describes an action in progress.",
    },
    {
      question: "They ___ for the bus at the moment. (wait)",
      options: ["A. wait", "B. are waiting", "C. waited", "D. waits"],
      correctOption: "B. are waiting",
      explanation: "The correct answer is 'B. are waiting' because it describes an ongoing action.",
    },
    {
      question: "I ___ a new recipe for dinner tonight. (try)",
      options: ["A. try", "B. am trying", "C. have tried", "D. will try"],
      correctOption: "B. am trying",
      explanation: "The correct answer is 'B. am trying' because it describes a current activity.",
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

export default KuisPresentContinuous;
