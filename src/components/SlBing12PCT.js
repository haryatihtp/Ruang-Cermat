import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPastContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
const KuisPastContinuousTense = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "She ___ to school when it started raining.",
      options: ["A. was going", "B. went", "C. goes", "D. going"],
      correctOption: "A. was going",
      explanation: "The correct answer is 'A. was going' because it describes an action in progress in the past.",
    },
    {
      question: "We ___ coffee when the phone rang.",
      options: ["A. were drinking", "B. drank", "C. drink", "D. drinking"],
      correctOption: "A. were drinking",
      explanation: "The correct answer is 'A. were drinking' because it describes an ongoing past action.",
    },
    {
      question: "He ___ his homework while watching TV.",
      options: ["A. was finishing", "B. finished", "C. finishes", "D. finishing"],
      correctOption: "A. was finishing",
      explanation: "The correct answer is 'A. was finishing' because it describes an action in progress in the past.",
    },
    {
      question: "They ___ soccer when it started to rain.",
      options: ["A. were playing", "B. played", "C. plays", "D. playing"],
      correctOption: "A. were playing",
      explanation: "The correct answer is 'A. were playing' because it describes an ongoing past action.",
    },
    {
      question: "The sun ___ when we left the house.",
      options: ["A. was rising", "B. rose", "C. rises", "D. rising"],
      correctOption: "A. was rising",
      explanation: "The correct answer is 'A. was rising' because it describes an ongoing past action.",
    },
    {
      question: "We ___ our room when our friends arrived.",
      options: ["A. were cleaning", "B. cleaned", "C. cleaning", "D. cleans"],
      correctOption: "A. were cleaning",
      explanation: "The correct answer is 'A. were cleaning' because it describes an action in progress in the past.",
    },
    {
      question: "He ___ to work by bus when he met his friend.",
      options: ["A. was going", "B. went", "C. going", "D. gone"],
      correctOption: "A. was going",
      explanation: "The correct answer is 'A. was going' because it describes an ongoing past action.",
    },
    {
      question: "They ___ lunch when the guests arrived.",
      options: ["A. were having", "B. had", "C. having", "D. has"],
      correctOption: "A. were having",
      explanation: "The correct answer is 'A. were having' because it describes an ongoing past action.",
    },
    {
      question: "Water ___ while the experiment was being conducted.",
      options: ["A. was boiling", "B. boiled", "C. boiling", "D. boils"],
      correctOption: "A. was boiling",
      explanation: "The correct answer is 'A. was boiling' because it describes an action in progress in the past.",
    },
    {
      question: "She ___ to the gym when the rain started.",
      options: ["A. was going", "B. went", "C. going", "D. gone"],
      correctOption: "A. was going",
      explanation: "The correct answer is 'A. was going' because it describes an ongoing past action.",
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
}; 

export default KuisPastContinuous;
