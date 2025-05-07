import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanClassificationofSentences = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "What is the focus of an active sentence?",
    options: [
      "The subject and the action they perform",
      "The object receiving the action",
      "The auxiliary verb used",
      "The by-phrase"
    ],
    correctOption: "The subject and the action they perform",
    explanation: "Active sentences emphasize the subject and the action they perform."
  },
  {
    question: "In a passive sentence, the focus is on:",
    options: [
      "The subject performing the action",
      "The object receiving the action",
      "The type of verb used",
      "The tense of the verb"
    ],
    correctOption: "The object receiving the action",
    explanation: "Passive sentences focus on the object receiving the action rather than the subject performing it."
  },
  {
    question: "Which sentence is in the active voice?",
    options: [
      "The homework was done by her.",
      "The snake was killed by Roy.",
      "Roy killed a snake.",
      "The song was sung beautifully."
    ],
    correctOption: "Roy killed a snake.",
    explanation: "Active voice occurs when the subject performs the action, as in 'Roy killed a snake.'"
  },
  {
    question: "What is the passive form of 'He helps his friend'?",
    options: [
      "His friend helps him.",
      "His friend is helped by him.",
      "His friend helped him.",
      "His friend is being helped."
    ],
    correctOption: "His friend is helped by him.",
    explanation: "In passive voice, the object 'his friend' becomes the subject: 'His friend is helped by him.'"
  },
  {
    question: "In the sentence 'A book was written by her,' which part indicates the doer of the action?",
    options: [
      "A book",
      "Was written",
      "By her",
      "The verb"
    ],
    correctOption: "By her",
    explanation: "'By her' specifies the doer of the action in a passive sentence."
  },
  {
    question: "Which sentence is passive?",
    options: [
      "The dog barked loudly.",
      "The cake was baked by Sarah.",
      "She is reading a book.",
      "They play football every Sunday."
    ],
    correctOption: "The cake was baked by Sarah.",
    explanation: "Passive voice is used in 'The cake was baked by Sarah,' where the object becomes the focus."
  },
  {
    question: "What happens to the subject in an active-to-passive transformation?",
    options: [
      "It becomes the object.",
      "It is omitted.",
      "It remains the same.",
      "It becomes the focus."
    ],
    correctOption: "It becomes the object.",
    explanation: "In passive sentences, the subject of the active sentence becomes the object, often introduced by 'by'."
  },
  {
    question: "Choose the correct transformation: 'Leon calls Armed.'",
    options: [
      "Armed is called by Leon.",
      "Armed calls Leon.",
      "Leon is called by Armed.",
      "Leon is calling Armed."
    ],
    correctOption: "Armed is called by Leon.",
    explanation: "In passive voice, the object 'Armed' becomes the subject: 'Armed is called by Leon.'"
  },
  {
    question: "Identify the active sentence:",
    options: [
      "The car was repaired by the mechanic.",
      "The mechanic repaired the car.",
      "The car is being repaired by the mechanic.",
      "The car has been repaired by the mechanic."
    ],
    correctOption: "The mechanic repaired the car.",
    explanation: "Active sentences have the subject performing the action, as in 'The mechanic repaired the car.'"
  },
  {
    question: "What is the auxiliary verb in the sentence 'The homework is being done by the students'?",
    options: [
      "Is being",
      "Done",
      "Homework",
      "Students"
    ],
    correctOption: "Is being",
    explanation: "The auxiliary verb 'is being' helps form the passive voice in this sentence."
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

export default LatihanClassificationofSentences;