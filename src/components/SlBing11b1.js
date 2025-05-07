import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSentenceStructure = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "The main elements in the basic structure of an English sentence are:",
    options: [
      "Phrase, Clause, Sentence",
      "Subject, Predicate, Object",
      "Simple Sentence, Complex Sentence",
      "Noun Phrase, Verb Phrase"
    ],
    correctOption: "Subject, Predicate, Object",
    explanation: "The structure of an English sentence revolves around three main components: Subject, Predicate, and Object. These elements form the foundation of a meaningful sentence."
  },
  {
    question: "In the sentence 'She reads a book', what functions as the object?",
    options: ["She", "Reads", "A book", "There is no object"],
    correctOption: "A book",
    explanation: "In the sentence, 'a book' is the object because it is the thing being read, receiving the action of the verb 'reads'."
  },
  {
    question: "Which of the following is an example of a Noun Phrase?",
    options: [
      "Has eaten",
      "A very clever student",
      "We get up",
      "He returned"
    ],
    correctOption: "A very clever student",
    explanation: "'A very clever student' is a noun phrase because it contains a noun ('student') and modifiers ('a very clever')."
  },
  {
    question: "What is the main feature of a Clause compared to a Phrase?",
    options: [
      "It consists of verbs and adjectives",
      "It does not contain a subject",
      "It contains both a subject and a predicate",
      "It is only used in complex sentences"
    ],
    correctOption: "It contains both a subject and a predicate",
    explanation: "A clause is distinct from a phrase as it contains both a subject and a predicate, forming a complete or semi-complete idea."
  },
  {
    question: "Which of the following is an example of a Subordinate Clause?",
    options: [
      "The cat snarled and scratched",
      "My grandfather works",
      "Whom you saw yesterday",
      "The book proved of use"
    ],
    correctOption: "Whom you saw yesterday",
    explanation: "'Whom you saw yesterday' is a subordinate clause because it cannot stand alone and depends on a main clause for context."
  },
  {
    question: "Which of the following is a Simple Sentence?",
    options: [
      "She speaks well.",
      "That is the girl whom you saw yesterday.",
      "He said that it was time to go.",
      "We know that they succeed."
    ],
    correctOption: "She speaks well.",
    explanation: "'She speaks well.' is a simple sentence as it contains a single subject ('she') and predicate ('speaks well')."
  },
  {
    question: "An Adjective Phrase is used to:",
    options: [
      "Describe a verb",
      "Describe a noun",
      "Describe an adverb",
      "Connect two clauses"
    ],
    correctOption: "Describe a noun",
    explanation: "An adjective phrase describes or gives more information about a noun, such as 'a very interesting book'."
  },
  {
    question: "What is the difference between a Main Clause and a Subordinate Clause?",
    options: [
      "Main clauses cannot stand alone.",
      "Subordinate clauses cannot stand alone.",
      "Main clauses do not have a subject.",
      "Subordinate clauses do not have a predicate."
    ],
    correctOption: "Subordinate clauses cannot stand alone.",
    explanation: "A subordinate clause cannot stand alone as a complete sentence because it depends on a main clause for meaning."
  },
  {
    question: "Which of the following is a Verb Phrase?",
    options: [
      "The handsome boy over there",
      "Shall go",
      "A very clever student",
      "With a black cover"
    ],
    correctOption: "Shall go",
    explanation: "'Shall go' is a verb phrase because it consists of a main verb ('go') and a helping verb ('shall')."
  },
  {
    question: "Which of the following is true about Complex Sentences?",
    options: [
      "They consist of one subject and one predicate.",
      "They have a main clause and at least one subordinate clause.",
      "They always include a compound subject.",
      "They are the same as simple sentences."
    ],
    correctOption: "They have a main clause and at least one subordinate clause.",
    explanation: "A complex sentence has one main clause and at least one subordinate clause, such as 'Because it was raining, I stayed home.'"
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

export default LatihanSentenceStructure;