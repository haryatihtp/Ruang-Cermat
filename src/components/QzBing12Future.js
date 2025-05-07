import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const QzBing12Future= () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. I _____ (help) you with your homework later", options: ["help", "will help", "am helping", "helped"], answer: "will help" },
    { question: "2. They _____ (not/attend) the seminar tomorrow", options: ["don’t attend", " won’t attend", " didn’t attend", "aren’t attendinga"], answer: " won’t attend" },
    { question: "3. What _____ you _____ (do) after this class?", options: ["do, do", " did, do", "will, do", "are, doing"], answer: "will, do" },
    { question: "4. By next year, we _____ (move) to a new city.", options: ["will move", " moved", "move", "are moving"], answer: "will move" },
    { question: "5. The students _____ (not/understand) the lesson unless the teacher explains it again.", options: [" don’t understand", "won’t understand", "didn’t understand", "aren’t understanding"], answer: "won’t understand" },
    { question: "6. By this time tomorrow, they _____ (practice) for the upcoming tournament.", options: ["will practice", "will be practicing", "practiced", "are practicing"], answer: "will be practicing" },
    { question: "7. While you are sleeping tonight, I _____ (finish) the report for the meeting.", options: ["will finish", "will be finishing", "finished", "am finishing"], answer: "will be finishing" },
    { question: "8. At 10 PM tomorrow, we _____ (not/travel) to the airport because our flight was rescheduled.", options: ["will not be traveling", "will not travel", "did not travel", "are not traveling"], answer: "will not be traveling" },
    { question: "9. _____ you _____ (wait) for me at the station when my train arrives?", options: ["Will, wait", " Are, waiting", "Will, be waiting", "Were, waiting"], answer: "Will, be waiting" },
    { question: "10. The chef _____ (prepare) the main course while the guests are arriving.", options: ["will be preparing", "will prepare", " prepared", "is preparing"], answer: "will be preparing" },
    { question: "11.By the time you arrive at the station, the train ______ (leave) already.", options: ["will have left, help", "had left", " has left", " will leave"], answer: "will have left" },
    { question: "12. By the end of this year, I ______ (complete) my training program.", options: ["have completed", " completed", "will have completed", " will complete"], answer: "will have completed" },
    { question: "13. By the time you wake up, I ______ (leave) for work.", options: ["will leave", " will have left", " had left", "leave"], answer: "  will have left" },
    { question: "14. In two months, they ______ (build) the new shopping mall.", options: ["built", " have built", "will build", " will have built"], answer: " will have built" },
    { question: "15. By next week, we ______ (finish) our research paper.", options: ["have finished", "finish", "will have finished", "will finish"], answer: "will have finished" },
    { question: "16. By the time she finishes her PhD, she ______ (research) in this field for over six years.", options: [" will have researched", "will have been researching", "will research", "will be researching"], answer: "will have been researching" },
    { question: "17. When you return from your trip, I ______ (prepare) for my new job for weeks.", options: ["will have been preparing", "will have prepared", " will prepare", "will be preparing"], answer: " will have been preparing" },
    { question: "18. By the time the meeting ends, we ______ (discuss) the proposal for three hours.", options: ["will be discussing", "will discuss", "will have been discussing", " will have discussed"], answer: "will have been discussing" },
    { question: "19. When the train finally arrives, I ______ (wait) on the platform for almost two hours", options: ["will have been waiting", "will have waited", "will be waiting", "iwill wait"], answer: "will have been waiting" },
    { question: "20. By 9 PM, the students ______ (study) for their exams for the entire evening.", options: ["will have studied", "will be studying", "will study", " will have been studying"], answer: " will have been studying" }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [showResult, setShowResult] = useState(false);
 
   const handleAnswer = (selectedOption) => {
     if (selectedOption === questions[currentQuestion].answer) {
       setScore(score + 1);
     }
     const nextQuestion = currentQuestion + 1;
     if (nextQuestion < questions.length) {
       setCurrentQuestion(nextQuestion);
     } else {
       setShowResult(true);
     }
   };
 
   const handleLogout = () => {
     navigate("/kuis/bahasa-inggris/kelas-12");
   };
 
   return (
     <div className="app">
       <h1>Kuis B.Inggris Kelas XII</h1>
       {showResult ? (
         <div className="result">
           <h2>Skor Anda: {score} / {questions.length}</h2>
           <p>Terima kasih telah mengikuti tryout!</p>
         </div>
       ) : (
         <div className="question-container">
           <h2>{questions[currentQuestion].question}</h2>
           <div className="options">
             {questions[currentQuestion].options.map((option, index) => (
               <button
                 key={index}
                 onClick={() => handleAnswer(option)}
                 className="option-button"
               >
                 {option}
               </button>
             ))}
           </div>
         </div>
       )}
       <button onClick={handleLogout} className="logout-button">Logout</button>
     </div>
   );
 };
 
 export default QzBing12Future;

