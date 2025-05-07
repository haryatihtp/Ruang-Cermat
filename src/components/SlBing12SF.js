import React, { useState} from "react";
import "../css/QuestionPage.css";

function KuisSimpleFuture() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
         const [selectedOption, setSelectedOption] = useState(null);
         const [showConfirmation, setShowConfirmation] = useState(false);
       
         const questions = [
          {
            question: "I expect, they ... me this evening. (phone)",
            options: ["Will not phone", "Will phone", "Would phone", "Are no phone"],
            correctOption: "Will phone",
            explanation: "The correct answer is 'Will phone' because it indicates a prediction or expectation in the future."
          },
          {
            question: "Don't touch this plate, if you touch it, you ... yourself. (burn)",
            options: ["Will not be burn", "Will not burn", "Will be burn", "Will burn"],
            correctOption: "Will burn",
            explanation: "The correct answer is 'Will burn' as it indicates a future result of an action."
          },
          {
            question: "We ... house next month. (make)",
            options: ["Will not make", "Will make", "is making", "Would made"],
            correctOption: "Will make",
            explanation: "The correct answer is 'Will make' because it refers to a future action."
          },
          {
            question: "My sister ... not ... to the concert tonight. (go)",
            options: ["Will go", "Will going", "Did go", "Do go"],
            correctOption: "Will go",
            explanation: "The correct answer is 'Will go' because it is the correct structure for Simple Future Tense."
          },
          {
            question: "... I help you to take dinner?",
            options: ["Is", "Am", "Shall", "Are"],
            correctOption: "Shall",
            explanation: "The correct answer is 'Shall' as it is used in formal offers or suggestions."
          },
          {
            question: "If it rains, we ______ (stay) at home.",
            options: ["will stay", "stays", "stayed", "are staying"],
            correctOption: "will stay",
            explanation: "The correct answer is 'will stay' because it shows a conditional future result."
          },
          {
            question: "I ______ (help) you if you need assistance.",
            options: ["helped", "helping", "will help", "helps"],
            correctOption: "will help",
            explanation: "The correct answer is 'will help' as it indicates a future action."
          },
          {
            question: "They ______ (finish) the project by next week.",
            options: ["finishes", "will finish", "finished", "are finishing"],
            correctOption: "will finish",
            explanation: "The correct answer is 'will finish' because it refers to an action completed in the future."
          },
          {
            question: "I ______ (call) you as soon as I get home.",
            options: ["called", "calling", "calls", "will call"],
            correctOption: "will call",
            explanation: "The correct answer is 'will call' because it indicates a future promise."
          },
          {
            question: "Choose the correct sentence using Simple Future Tense:",
            options: [
              "We will meet you at the park.",
              "We met you at the park.",
              "We are meeting you at the park.",
              "We meet you at the park."
            ],
            correctOption: "We will meet you at the park.",
            explanation: "The correct answer is 'We will meet you at the park.' because it uses the correct structure for Simple Future Tense."
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

export default KuisSimpleFuture;
