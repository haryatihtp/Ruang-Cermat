import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanTenses = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
      question: "What is the function of coordinating conjunctions?",
      options: [
          'To connect a main clause with a dependent clause',
          'To connect two clauses that are equal',
          'To introduce a dependent clause',
          'To modify nouns or verbs'
      ],
      correctOption: 'To connect two clauses that are equal',
      explanation: "Coordinating conjunctions link two equal clauses or ideas, such as two independent clauses."
  },
  {
      question: "Which of the following is a coordinating conjunction?",
      options: ['Because', 'When', 'And', 'Although'],
      correctOption: 'And',
      explanation: "'And' is a coordinating conjunction used to join equal parts of a sentence."
  },
  {
      question: "What is the function of subordinating conjunctions?",
      options: [
          'To connect a main clause with a dependent clause',
          'To connect two equal clauses',
          'To express contrast between ideas',
          'To indicate a question'
      ],
      correctOption: 'To connect a main clause with a dependent clause',
      explanation: "Subordinating conjunctions connect a dependent clause to a main clause, establishing a relationship like cause, time, or condition."
  },
  {
      question: "Which sentence contains a coordinating conjunction?",
      options: [
          'I stayed home because it was raining.',
          'I wanted to go outside, but it was raining.',
          'Although it was sunny, I stayed inside.',
          'If it rains, we will cancel the picnic.'
      ],
      correctOption: 'I wanted to go outside, but it was raining.',
      explanation: "'But' is a coordinating conjunction that contrasts two independent clauses."
  },
  {
      question: "Which of the following is a subordinating conjunction?",
      options: ['But', 'Or', 'Although', 'And'],
      correctOption: 'Although',
      explanation: "'Although' is a subordinating conjunction used to introduce a dependent clause expressing contrast."
  },
  {
      question: "What does the subordinating conjunction 'because' indicate?",
      options: [
          'A cause or reason',
          'A time relationship',
          'A contrast',
          'A choice between options'
      ],
      correctOption: 'A cause or reason',
      explanation: "'Because' shows a cause-and-effect relationship between two clauses."
  },
  {
      question: "Identify the subordinating conjunction in this sentence: 'I will go to the park if it stops raining.'",
      options: ['If', 'Go', 'Will', 'Stops'],
      correctOption: 'If',
      explanation: "'If' is a subordinating conjunction that introduces a condition for the action."
  },
  {
      question: "Which sentence correctly uses a subordinating conjunction?",
      options: [
          'I went to the store, and I bought milk.',
          'She didn’t come to the party because she was sick.',
          'We could go to the beach or stay home.',
          'The sun was shining, but it was cold.'
      ],
      correctOption: 'She didn’t come to the party because she was sick.',
      explanation: "'Because' connects the main clause to the dependent clause, explaining the reason."
  },
  {
      question: "What is the coordinating conjunction in this sentence: 'I want to go to the beach, but it is raining.'",
      options: ['Want', 'To', 'But', 'Is'],
      correctOption: 'But',
      explanation: "'But' is a coordinating conjunction used to contrast two ideas."
  },
  {
      question: "How do conjunctions improve sentence structure?",
      options: [
          'By making sentences shorter',
          'By clarifying relationships between ideas',
          'By adding more verbs to a sentence',
          'By separating unrelated ideas'
      ],
      correctOption: 'By clarifying relationships between ideas',
      explanation: "Conjunctions improve coherence by linking ideas and clarifying relationships between them."
  },
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

export default LatihanTenses;