import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanTypesofClauses = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "What is a main clause?",
    options: [
      "A clause that depends on another clause",
      "A clause that can stand alone with complete meaning",
      "A group of words without a verb",
      "A clause that only modifies nouns"
    ],
    correctOption: "A clause that can stand alone with complete meaning",
    explanation: "A main clause is independent and can function as a complete sentence."
  },
  {
    question: "Which of the following is an example of a main clause?",
    options: [
      "Although I enjoy reading novels",
      "That is the girl",
      "Whom you saw yesterday",
      "If she goes to the party"
    ],
    correctOption: "That is the girl",
    explanation: "'That is the girl' is a complete sentence and can stand alone, making it a main clause."
  },
  {
    question: "What is a dependent clause?",
    options: [
      "A clause that can stand alone",
      "A clause that needs a main clause to complete its meaning",
      "A phrase that modifies a verb",
      "A complete sentence"
    ],
    correctOption: "A clause that needs a main clause to complete its meaning",
    explanation: "A dependent clause relies on a main clause to form a complete sentence."
  },
  {
    question: "Which sentence contains both a main clause and a dependent clause?",
    options: [
      "That is the girl.",
      "Whom you saw yesterday.",
      "That is the girl whom you saw yesterday.",
      "I enjoy reading novels."
    ],
    correctOption: "That is the girl whom you saw yesterday.",
    explanation: "'That is the girl' is the main clause, and 'whom you saw yesterday' is the dependent clause."
  },
  {
    question: "In the sentence 'Although I enjoy reading novels, I don’t have much free time,' which part is the dependent clause?",
    options: [
      "Although I enjoy reading novels",
      "I don’t have much free time",
      "Novels",
      "Both A and B"
    ],
    correctOption: "Although I enjoy reading novels",
    explanation: "'Although I enjoy reading novels' cannot stand alone and is a dependent clause."
  },
  {
    question: "What is another name for a dependent clause?",
    options: [
      "Main clause",
      "Subordinate clause",
      "Independent clause",
      "Noun clause"
    ],
    correctOption: "Subordinate clause",
    explanation: "A dependent clause is also known as a subordinate clause because it depends on a main clause."
  },
  {
    question: "Which of the following cannot stand alone as a complete sentence?",
    options: [
      "I like watching movies.",
      "Because she was late.",
      "They went to the park.",
      "We enjoy traveling."
    ],
    correctOption: "Because she was late.",
    explanation: "'Because she was late' is incomplete and needs a main clause to form a complete sentence."
  },
  {
    question: "In the sentence 'That is the girl whom you saw yesterday,' what is 'whom you saw yesterday'?",
    options: [
      "Main clause",
      "Dependent clause",
      "Phrase",
      "Compound sentence"
    ],
    correctOption: "Dependent clause",
    explanation: "'Whom you saw yesterday' provides additional information and depends on the main clause."
  },
  {
    question: "What is the function of a dependent clause in a sentence?",
    options: [
      "To convey the main information",
      "To stand alone as a simple sentence",
      "To provide additional information to the main clause",
      "To replace the main clause"
    ],
    correctOption: "To provide additional information to the main clause",
    explanation: "Dependent clauses give additional details or context to the main clause."
  },
  {
    question: "Which sentence demonstrates the use of a dependent clause?",
    options: [
      "I enjoy reading novels.",
      "Although I was tired, I completed my homework.",
      "She walks to school every day.",
      "That is my car."
    ],
    correctOption: "Although I was tired, I completed my homework.",
    explanation: "'Although I was tired' is a dependent clause, while 'I completed my homework' is the main clause."
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

export default LatihanTypesofClauses;