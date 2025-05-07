import React, { useState } from "react";
import "../css/QuestionPage.css";

const KuisPerfectContinuousTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
       
  const questions = [
    {
        question: "They will have studied English for three years by the time they finish their course.",
        options: ["will have studied", "will have been waiting", "will be waiting", "will wait"],
        correctOption: "will have studied",
        explanation: "Future Perfect Tense is used to describe actions that will be completed before a certain point in the future."
    },
    {
        question: "By the time you finish your dinner, I will have been cleaning the house for two hours.",
        options: ["will clean", "will have cleaned", "will have been cleaning", "will be cleaning"],
        correctOption: "will have been cleaning",
        explanation: "Future Perfect Continuous Tense indicates an action that will have been ongoing for a specific duration by a certain point in the future."
    },
    {
        question: "In two years, they will have been living in this city for 15 years.",
        options: ["shall live", "shall have lived", "shall be living", "shall have been living"],
        correctOption: "shall have been living",
        explanation: "Future Perfect Continuous Tense is used to emphasize the duration of an ongoing action in the future."
    },
    {
        question: "In a few months, shall you have been working on this project for a year?",
        options: ["shall / have been working", "shall / be working", "shall / have worked", "shall / work"],
        correctOption: "shall / have been working",
        explanation: "This question form uses Future Perfect Continuous Tense to inquire about the duration of an ongoing action by a future point."
    },
    {
        question: "In two weeks, will they have been traveling for a month?",
        options: ["will / travel", "will / have traveled", "will / have been traveling", "will / be traveling"],
        correctOption: "will / have been traveling",
        explanation: "Future Perfect Continuous Tense describes an ongoing action that will have lasted for a specific period by a future time."
    },
    {
        question: "By next year, I will have been working at this company for five years.",
        options: ["will have been working", "will be working", "will have worked", "will work"],
        correctOption: "will have been working",
        explanation: "Future Perfect Continuous Tense emphasizes the duration of an action continuing into the future."
    },
    {
        question: "Which sentence is in Future Perfect Continuous Tense?",
        options: [
            "She will be studying English for three hours tomorrow.",
            "She will have been studying English for three hours by the time you arrive.",
            "She has been studying English for three hours.",
            "She will study English tomorrow."
        ],
        correctOption: "She will have been studying English for three hours by the time you arrive.",
        explanation: "The correct sentence describes an action that will have been ongoing for a specific time in the future."
    },
    {
        question: "By the time he retires, he will have been teaching at the university for 40 years.",
        options: ["will teach", "will have been teaching", "will have taught", "will be teaching"],
        correctOption: "will have been teaching",
        explanation: "Future Perfect Continuous Tense highlights the duration of an action leading up to a specific point in the future."
    },
    {
        question: "In December, they will have been building the bridge for two years.",
        options: ["will have been building", "will build", "will be building", "will have built"],
        correctOption: "will have been building",
        explanation: "Future Perfect Continuous Tense is used to emphasize the ongoing nature and duration of an action in the future."
    },
    {
        question: "How long will she have been training for the marathon by the time it starts?",
        options: ["will / be training", "will / have trained", "will / have been training", "will / train"],
        correctOption: "will / have been training",
        explanation: "This question uses Future Perfect Continuous Tense to inquire about the duration of an action by a future time."
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

export default KuisPerfectContinuousTense;
