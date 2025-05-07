import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const QzBing12Past= () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. By the time I arrived, they ___ (finish) the meeting.", options: ["had finished", "finished", "have finished", "was finishing"], answer: "had finished" },
    { question: "2. She ___ (leave) before I could speak to her.", options: ["left", "was leaving", "had left", "have left"], answer: "had left" },
    { question: "3. By the time we got to the station, the train ___ (depart).", options: ["departed", "have departed", "was departing", "had departed"], answer: "had departed" },
    { question: "4. I ___ (never, see) such a beautiful sunset before.", options: ["was never seeing", "never saw", "had never seen", "have never seen"], answer: "had never seen" },
    { question: "5. She ___ (already, finish) her homework when I called her.", options: ["finished already", "had already finished", "has already finished", "was already finishing"], answer: "had already finished" },
    { question: "6. They ___ (just, arrive) when the ceremony began.", options: ["arrived just", "have just arrived", "was just arriving", "had just arrived"], answer: "had just arrived" },
    { question: "7. I ___ (work) for that company for five years before I left.", options: ["worked", "have worked", "had worked", "was working"], answer: "had worked" },
    { question: "8. By the time the movie started, we ___ (already, eat).", options: ["ate already", "have already eaten", "were already eating", "had already eaten"], answer: "had already eaten" },
    { question: "9. He ___ (read) the book before he watched the movie.", options: ["read", "has read", "was reading", "had read"], answer: "had read" },
    { question: "10. We ___ (wait) for over an hour before the bus finally arrived.", options: ["waited", "have waited", "were waiting", "had waited"], answer: "had waited" },
    { question: "11. While I ___ (study), the phone rang.", options: ["studied", "was studying", "study", "had studied"], answer: "was studying" },
    { question: "12. They ___ (play) football when it started to rain.", options: ["played", "were playing", "play", "had played"], answer: "were playing" },
    { question: "13. At 8 o'clock, he ___ (sleep).", options: ["slept", "was sleeping", "sleep", "had slept"], answer: "was sleeping" },
    { question: "14. She ___ (cook) dinner when we arrived.", options: ["cooked", "was cooking", "cook", "had cooked"], answer: "was cooking" },
    { question: "15. By the time you called, I ___ (leave) already.", options: ["left", "was leaving", "had left", "have left"], answer: "had left" },
    { question: "16. We ___ (live) here since 2005.", options: ["lived", "were living", "live", "had lived"], answer: "had lived" },
    { question: "17. When I saw him, he ___ (cry).", options: ["cried", "was crying", "cries", "had cried"], answer: "was crying" },
    { question: "18. She ___ (study) for two hours before she took a break.", options: ["studied", "was studying", "study", "had studied"], answer: "had studied" },
    { question: "19. He ___ (play) games when I entered the room.", options: ["played", "was playing", "plays", "had played"], answer: "was playing" },
    { question: "20. We ___ (watch) TV when they arrived.", options: ["watched", "were watching", "watch", "had watched"], answer: "were watching" },
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
 
 export default QzBing12Past;

