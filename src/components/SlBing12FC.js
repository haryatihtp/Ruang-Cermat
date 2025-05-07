import React, { useState} from "react";
import "../css/QuestionPage.css";

const  KuisFutureContinuous= () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "In a few minutes, she ... (give) her presentation to the team.",
      options: ["A. will give", "B. will be giving", "C. is giving", "D. gives"],
      correctOption: "B",
      explanation: "The correct answer is 'B. will be giving' because it indicates an action in progress at a specific future time.",
    },
    {
      question: "Tomorrow at noon, I ... (meet) my friends at the park.",
      options: ["A. will meet", "B. am meeting", "C. meet", "D. will be meeting"],
      correctOption: "D",
      explanation: "The correct answer is 'D. will be meeting' as it refers to an ongoing action at a specific future time.",
    },
    {
      question: "They ... help us with the project next week.",
      options: ["A. shall", "B. will", "C. would", "D. are"],
      correctOption: "A",
      explanation: "The correct answer is 'A. shall' as it indicates a formal or emphatic intention.",
    },
    {
      question: "... you be attending the seminar next week?",
      options: ["A. will", "B. shall", "C. do", "D. are"],
      correctOption: "B",
      explanation: "The correct answer is 'B. shall' as it is often used in formal questions about future actions.",
    },
    {
      question: "... I be able to finish the report by tomorrow?",
      options: ["A. can", "B. do", "C. will", "D. shall"],
      correctOption: "C",
      explanation: "The correct answer is 'C. will' as it refers to a future ability.",
    },
    {
      question: "This time tomorrow, I ______ (travel) to Bali.",
      options: ["A. will travel", "B. will have traveled", "C. will be traveling", "D. will have been traveling"],
      correctOption: "C",
      explanation: "The correct answer is 'C. will be traveling' as it describes an ongoing action in the future.",
    },
    {
      question: "At 7 PM tonight, they ______ (have) dinner at the restaurant.",
      options: ["A. will have", "B. will have had", "C. will be having", "D. will have been having"],
      correctOption: "C",
      explanation: "The correct answer is 'C. will be having' as it describes an ongoing action at a specific time in the future.",
    },
    {
      question: "Next week, she ______ (work) on her new project.",
      options: ["A. will work", "B. will have worked", "C. will be working", "D. will have been working"],
      correctOption: "C",
      explanation: "The correct answer is 'C. will be working' as it describes an ongoing action in the future.",
    },
    {
      question: "When you call me, I ______ (watch) a movie.",
      options: ["A. will watch", "B. will be watching", "C. will have watched", "D. will have been watching"],
      correctOption: "B",
      explanation: "The correct answer is 'B. will be watching' as it refers to an ongoing action in the future.",
    },
    {
      question: "By this time tomorrow, he ______ (drive) to his hometown.",
      options: ["A. will drive", "B. will be driving", "C. will have driven", "D. will have been driving"],
      correctOption: "B",
      explanation: "The correct answer is 'B. will be driving' as it indicates an ongoing action at a specific future time.",
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
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true);
    }
    setShowConfirmation(false); 
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Soal Sebelumnya
        </button>
        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Soal Berikutnya &rarr;
        </button>
      </div>

      <div className="interactive-section">
        <div className="dropdown-container">
          <label htmlFor="question-dropdown">Pilih Soal:</label>
          <select
            id="question-dropdown"
            value={currentQuestion}
            onChange={handleDropdownChange}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                Soal {index + 1}
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

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <p>Yakin mau melihat pembahasan sekarang?</p>
            <div className="popup-buttons">
              <button
                className="popup-button no-button"
                onClick={() => handleConfirmationResponse("no")}
              >
                Tidak
              </button>
              <button
                className="popup-button yes-button"
                onClick={() => handleConfirmationResponse("yes")}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KuisFutureContinuous;
