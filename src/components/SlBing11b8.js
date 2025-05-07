import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanAdverbs = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Which type of adverb is used to indicate when an action is performed?",
    options: ["Adverb of Place", "Adverb of Manner", "Adverb of Time", "Adverb of Frequency"],
    correctOption: "Adverb of Time",
    explanation: "An adverb of time answers the question 'When?' and indicates the timing of an action, such as 'yesterday' or 'tomorrow.'"
  },
  {
    question: "Which of the following is an example of an adverb of time?",
    options: ["Quickly", "In the park", "Tomorrow", "Carefully"],
    correctOption: "Tomorrow",
    explanation: "'Tomorrow' is an adverb of time because it specifies when an action will happen."
  },
  {
    question: "What is the formula for using an adverb of place?",
    options: [
      "Subject + Verb + Adverb of Place",
      "Subject + Adverb of Place + Verb",
      "Adverb of Place + Subject + Verb",
      "Subject + Verb-ing + Adverb of Place"
    ],
    correctOption: "Subject + Verb + Adverb of Place",
    explanation: "The typical sentence structure is Subject + Verb + Adverb of Place, as in 'She is working here.'"
  },
  {
    question: "Which sentence correctly uses an adverb of place?",
    options: [
      "She left her bag on the table.",
      "She called me yesterday.",
      "She speaks fluently.",
      "He completed the project carefully."
    ],
    correctOption: "She left her bag on the table.",
    explanation: "'On the table' is an adverbial phrase indicating the place where the action happened."
  },
  {
    question: "Which type of adverb answers the question 'How?'?",
    options: [
      "Adverb of Time",
      "Adverb of Place",
      "Adverb of Manner",
      "Adverb of Frequency"
    ],
    correctOption: "Adverb of Manner",
    explanation: "An adverb of manner describes how an action is performed, e.g., 'She sang beautifully.'"
  },
  {
    question: "Identify the adverb in the sentence: 'The children are playing in the garden.'",
    options: ["The children", "Playing", "In the garden", "Are"],
    correctOption: "In the garden",
    explanation: "'In the garden' is an adverbial phrase that tells where the action is taking place."
  },
  {
    question: "Which sentence contains an adverb of manner?",
    options: [
      "She danced beautifully.",
      "The meeting is at 5 PM.",
      "They are in the library.",
      "I will visit you tomorrow."
    ],
    correctOption: "She danced beautifully.",
    explanation: "'Beautifully' is an adverb of manner because it describes how the action was performed."
  },
  {
    question: "Where can an adverb of time be placed in a sentence?",
    options: [
      "Only at the beginning",
      "Only at the end",
      "At the beginning, middle, or end",
      "Only in the middle"
    ],
    correctOption: "At the beginning, middle, or end",
    explanation: "Adverbs of time can appear at the beginning ('Tomorrow, I will go'), middle ('I am always late'), or end ('I will go tomorrow')."
  },
  {
    question: "What is the adverb of manner in the sentence: 'He completed the project carefully'?",
    options: ["Completed", "Carefully", "Project", "He"],
    correctOption: "Carefully",
    explanation: "'Carefully' is an adverb of manner describing how the project was completed."
  },
  {
    question: "Which sentence demonstrates the correct use of an adverb of time?",
    options: [
      "She speaks fluently.",
      "The children are in the garden.",
      "I called him yesterday.",
      "She left her bag on the table."
    ],
    correctOption: "I called him yesterday.",
    explanation: "'Yesterday' is an adverb of time, indicating when the action of calling occurred."
  }
];


const handleNextQuestion = () => {
  if (currentQuestion < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
    resetSelection();
  }
};

const handlePreviousQuestion = () => {
  if (currentQuestion > 1) {
    setCurrentQuestion(currentQuestion - 1);
    resetSelection();
  }
};

const handleOptionSelect = (option) => {
  setSelectedOption(option);
};

const resetSelection = () => {
  setSelectedOption(null);
  setShowExplanation(false);
};

const handleDropdownChange = (e) => {
  const selectedNumber = parseInt(e.target.value);
  setCurrentQuestion(selectedNumber);
  resetSelection();
};

const handleExplanationClick = () => {
  if (showExplanation) {
    setShowExplanation(false); // Sembunyikan pembahasan tanpa pesan
  } else if (!selectedOption) {
    setShowConfirmation(true); // Tampilkan pesan jika opsi belum dipilih
  } else {
    setShowExplanation(true); // Langsung tampilkan pembahasan jika opsi sudah dipilih
  }
};

const handleConfirmationResponse = (response) => {
  if (response === "yes") {
    setShowExplanation(true); // Tampilkan pembahasan
  }
  setShowConfirmation(false); // Hilangkan pesan
};

return (
  <div className="question-page">
    <div className="question-container">
      <button
        className="oval-button previous-button"
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1}
      >
        &larr; Previous Questions
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

    <div className="interactive-section">
      <div className="dropdown-container">
        <label htmlFor="question-dropdown">Select Question:</label>
        <select
          id="question-dropdown"
          value={currentQuestion}
          onChange={handleDropdownChange}
        >
          {questions.map((_, index) => (
            <option key={index} value={index + 1}>
              Question {index + 1}
            </option>
          ))}
        </select>
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

      <div className="explanation-container">
        <button
          className="explanation-toggle"
          onClick={handleExplanationClick}
        >
          {showExplanation ? "Hide Explanation" : "View Explanation"}
        </button>
        {showExplanation && (
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        )}
      </div>
    </div>

    {showConfirmation && (
      <div className="confirmation-popup">
        <div className="popup-content">
          <p>Are you sure you want to view the explanation now?</p>
          <div className="popup-buttons">
            <button
              className="popup-button no-button"
              onClick={() => handleConfirmationResponse("no")}
            >
              No
            </button>
            <button
              className="popup-button yes-button"
              onClick={() => handleConfirmationResponse("yes")}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default LatihanAdverbs;