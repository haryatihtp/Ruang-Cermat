import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanModals = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Which modal verb is used to express ability or permission?",
    options: ["May", "Can", "Must", "Should"],
    correctOption: "Can",
    explanation: "'Can' is used to express both ability (e.g., 'I can swim') and permission (e.g., 'You can go now')."
  },
  {
    question: "What is the formula for using 'must'?",
    options: [
      "Subject + must + Verb 1",
      "Subject + must + Verb 2",
      "Subject + must + to + Verb 1",
      "Subject + must + be + Verb-ing"
    ],
    correctOption: "Subject + must + Verb 1",
    explanation: "The correct formula for 'must' is: Subject + must + Verb 1 (base form). For example, 'You must study.'"
  },
  {
    question: "Which sentence uses 'may' correctly?",
    options: [
      "She may swims well.",
      "It may rain this evening.",
      "May she to come in?",
      "They may going to the park."
    ],
    correctOption: "It may rain this evening.",
    explanation: "'May' is followed by the base form of the verb, as in 'It may rain this evening.'"
  },
  {
    question: "What is the function of 'should'?",
    options: [
      "To express obligation",
      "To express ability",
      "To give advice or recommendation",
      "To express a low possibility"
    ],
    correctOption: "To give advice or recommendation",
    explanation: "'Should' is often used to give advice or make recommendations, e.g., 'You should exercise regularly.'"
  },
  {
    question: "Identify the modal verb in this sentence: 'You must wear a helmet while riding a bike.'",
    options: ["Must", "Wear", "Helmet", "Riding"],
    correctOption: "Must",
    explanation: "The modal verb in this sentence is 'must,' which expresses obligation."
  },
  {
    question: "Which modal verb indicates a polite request?",
    options: ["Can", "Could", "Should", "Will"],
    correctOption: "Could",
    explanation: "'Could' is often used to make polite requests, e.g., 'Could you pass the salt, please?'"
  },
  {
    question: "Choose the sentence that uses 'will' correctly:",
    options: [
      "She will to call you tomorrow.",
      "It will be a sunny day.",
      "They will going to the museum.",
      "He will plays the guitar."
    ],
    correctOption: "It will be a sunny day.",
    explanation: "The sentence 'It will be a sunny day' uses 'will' correctly to make a future prediction."
  },
  {
    question: "What does 'might' indicate?",
    options: [
      "A strong obligation",
      "A low possibility",
      "An ability in the past",
      "A future prediction"
    ],
    correctOption: "A low possibility",
    explanation: "'Might' expresses a low possibility, e.g., 'It might rain later.'"
  },
  {
    question: "In which sentence does 'could' express past ability?",
    options: [
      "Could you help me, please?",
      "He could play the piano when he was five.",
      "Could you lend me your book?",
      "She could come to the party later."
    ],
    correctOption: "He could play the piano when he was five.",
    explanation: "'Could' expresses past ability in the sentence 'He could play the piano when he was five.'"
  },
  {
    question: "Which modal verb is used to express a habit in the past?",
    options: ["Could", "Would", "Might", "Should"],
    correctOption: "Would",
    explanation: "'Would' is used to express habitual actions in the past, e.g., 'He would always tell us stories.'"
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

export default LatihanModals;