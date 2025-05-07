import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanTypesofSentences = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Which type of sentence states information or facts?",
    options: [
      "Interrogative Sentence",
      "Imperative Sentence",
      "Declarative Sentence",
      "Exclamatory Sentence"
    ],
    correctOption: "Declarative Sentence",
    explanation: "A declarative sentence is used to state facts or information."
  },
  {
    question: "Which punctuation mark usually ends a declarative sentence?",
    options: [
      "Question mark",
      "Exclamation point",
      "Period",
      "Semicolon"
    ],
    correctOption: "Period",
    explanation: "Declarative sentences typically end with a period."
  },
  {
    question: "Which of the following is an example of an interrogative sentence?",
    options: [
      "The sky is blue.",
      "How are you today?",
      "Please, come here.",
      "Wow, what a beautiful day!"
    ],
    correctOption: "How are you today?",
    explanation: "An interrogative sentence is a question, and it usually starts with a question word like 'how'."
  },
  {
    question: "In an interrogative sentence, what is placed at the beginning of the question?",
    options: [
      "Main verb",
      "Adjective",
      "Auxiliary verb",
      "Noun"
    ],
    correctOption: "Auxiliary verb",
    explanation: "Interrogative sentences often begin with an auxiliary verb like 'does', 'is', or 'can'."
  },
  {
    question: "What type of sentence is this: 'Don’t be afraid'?",
    options: [
      "Declarative Sentence",
      "Imperative Sentence",
      "Exclamatory Sentence",
      "Interrogative Sentence"
    ],
    correctOption: "Imperative Sentence",
    explanation: "An imperative sentence gives a command or instruction, as seen in 'Don’t be afraid'."
  },
  {
    question: "Which sentence expresses a command?",
    options: [
      "Can you help me?",
      "Be careful.",
      "It’s a sunny day.",
      "What a surprise!"
    ],
    correctOption: "Be careful.",
    explanation: "'Be careful.' is a command, which is typical of an imperative sentence."
  },
  {
    question: "'Let’s go to the park' is an example of:",
    options: [
      "A command",
      "A suggestion or invitation",
      "A question",
      "A declaration"
    ],
    correctOption: "A suggestion or invitation",
    explanation: "The phrase 'Let’s go to the park' suggests or invites someone to join an activity."
  },
  {
    question: "What type of sentence is used to express emotions like surprise, joy, or disappointment?",
    options: [
      "Declarative Sentence",
      "Interrogative Sentence",
      "Exclamatory Sentence",
      "Imperative Sentence"
    ],
    correctOption: "Exclamatory Sentence",
    explanation: "Exclamatory sentences are used to convey strong emotions such as surprise, joy, or disappointment."
  },
  {
    question: "Which of the following sentences is exclamatory?",
    options: [
      "How wonderful this place is!",
      "We are going to the beach.",
      "Are you coming with us?",
      "Don’t forget your hat."
    ],
    correctOption: "How wonderful this place is!",
    explanation: "Exclamatory sentences typically express strong emotion and end with an exclamation mark, as in 'How wonderful this place is!'."
  },
  {
    question: "'Does he study English every day?' is an example of:",
    options: [
      "Declarative Sentence",
      "Imperative Sentence",
      "Interrogative Sentence",
      "Exclamatory Sentence"
    ],
    correctOption: "Interrogative Sentence",
    explanation: "'Does he study English every day?' is a question, making it an interrogative sentence."
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

export default LatihanTypesofSentences;