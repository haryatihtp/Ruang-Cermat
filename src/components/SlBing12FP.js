import React, { useState} from "react";
import "../css/QuestionPage.css";

function KuisFuturePerfect() {
      const [currentQuestion, setCurrentQuestion] = useState(1);
        const [selectedOption, setSelectedOption] = useState(null);
        const [showConfirmation, setShowConfirmation] = useState(false);
      
        const questions = [
          {
            question: "Adam ... up all of the foods by the time we come. (eat)",
            options: ["Will has eat", "Will eaten", "Will have eaten", "Will have eat"],
            correctOption: "Will have eaten",
            explanation: "The correct tense for future perfect is 'will have + past participle'.",
          },
          {
            question: "By this time next week, Jennifer ... in Oxford University for 3 years.",
            options: ["Have studied", "Has studied", "Will study", "Will have studied"],
            correctOption: "Will have studied",
            explanation: "Future perfect tense is used to indicate an action that will have been completed by a certain point in the future.",
          },
          {
            question: "... you ... the book by this time next week?",
            options: ["Will, have returned", "Will, be returning", "Will, return", "Will, have been returning"],
            correctOption: "Will, have returned",
            explanation: "The future perfect tense is formed with 'will have' followed by the past participle.",
          },
          {
            question: "The food ... before the guests come.",
            options: ["Will be prepared", "Is prepared", "Will have been prepared", "Will prepare"],
            correctOption: "Will have been prepared",
            explanation: "Future perfect passive is used to indicate that the action will be completed before a certain time in the future.",
          },
          {
            question: "The show will start at 8 AM. It ... when you come by 1 PM tomorrow",
            options: ["Will finish", "Will have finished", "Will be finishing", "Finish"],
            correctOption: "Will have finished",
            explanation: "Future perfect tense is used to indicate that the action will be completed by a specific time in the future.",
          },
          {
            question: "By this time next year, she ______ (finish) her degree.",
            options: ["Will finish", "Will have finished", "Will be finishing", "Will have been finishing"],
            correctOption: "Will have finished",
            explanation: "Future perfect tense indicates that an action will have been completed by a certain point in the future.",
          },
          {
            question: "By the time you arrive, I ______ (prepare) dinner.",
            options: ["Will have prepared", "Will prepare", "Will be preparing", "Will have been preparing"],
            correctOption: "Will have prepared",
            explanation: "Future perfect tense shows that the action will be completed before a certain time in the future.",
          },
          {
            question: "They ______ (complete) the project before the deadline.",
            options: ["Will complete", "Will have completed", "Will have been completing", "Will be completing"],
            correctOption: "Will have completed",
            explanation: "Future perfect tense is used to indicate an action that will be finished before a specific time.",
          },
          {
            question: "By next month, we ______ (move) into our new house.",
            options: ["Will move", "Will be moving", "Will have moved", "Will have been moving"],
            correctOption: "Will have moved",
            explanation: "Future perfect tense is used to describe an action that will have been completed by a specific time.",
          },
          {
            question: "By the end of this week, he ______ (write) three chapters of his book.",
            options: ["Will write", "Will have written", "Will have been writing", "Will be writing"],
            correctOption: "Will have written",
            explanation: "Future perfect tense is used to indicate an action that will be completed by a specific time.",
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

export default KuisFuturePerfect;
