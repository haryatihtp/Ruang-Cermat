import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const QzBing12Present= () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the function of the enzyme catalase?", options: ["Break down fat", "Decompose hydrogen peroxide", "Convert starch", "Transport oxygen"], answer: "Decompose hydrogen peroxide" },
    { question: "2. Where does photosynthesis occur?", options: ["Chloroplast", "Cytoplasm", "Ribosome", "Mitochondria"], answer: "Chloroplast" },
    { question: "3. What is the smallest unit of living organisms?", options: ["Cell", "Tissue", "Organ", "Organ system"], answer: "Cell" },
    { question: "4. What is the main product of photosynthesis?", options: ["Glucose and oxygen", "Carbon dioxide", "Water and oxygen", "ATP and NADPH"], answer: "Glucose and oxygen" },
    { question: "5. Where does glycolysis take place?", options: ["Cytoplasm", "Mitochondria", "Chloroplast", "Nucleus"], answer: "Cytoplasm" },
    { question: "6. What is the main function of mitochondria?", options: ["Energy production", "Protein synthesis", "Photosynthesis", "DNA replication"], answer: "Energy production" },
    { question: "7. Which hormone regulates blood sugar levels?", options: ["Insulin", "Adrenaline", "Cortisol", "Thyroxine"], answer: "Insulin" },
    { question: "8. What is the stage of cell division where chromosomes align in the center?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "Metaphase" },
    { question: "9. What is the function of stomata in leaves?", options: ["Regulate gas exchange", "Absorb water", "Transport photosynthesis products", "Protect leaf surface"], answer: "Regulate gas exchange" },
    { question: "10. What organ filters blood in the excretory system?", options: ["Kidney", "Liver", "Heart", "Lungs"], answer: "Kidney" },
    { question: "11. In aerobic respiration, at what stage is oxygen used?", options: ["Krebs cycle", "Glycolysis", "Electron transport chain", "Fermentation"], answer: "Electron transport chain" },
    { question: "12. What is the main component of the cell membrane?", options: ["Phospholipids", "Proteins", "Carbohydrates", "Cholesterol"], answer: "Phospholipids" },
    { question: "13. What is the primary function of hemoglobin in the blood?", options: ["Transport oxygen", "Regulate body temperature", "Control blood sugar", "Fight infections"], answer: "Transport oxygen" },
    { question: "14. What is the end product of alcoholic fermentation?", options: ["Ethanol and carbon dioxide", "Lactic acid", "Water and oxygen", "ATP"], answer: "Ethanol and carbon dioxide" },
    { question: "15. What organism is at the start of the food chain?", options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"], answer: "Producers" },
    { question: "16. What tissue transports photosynthesis products?", options: ["Phloem", "Xylem", "Epidermis", "Parenchyma"], answer: "Phloem" },
    { question: "17. What is the process of water molecule movement through a membrane called?", options: ["Osmosis", "Diffusion", "Endocytosis", "Exocytosis"], answer: "Osmosis" },
    { question: "18. What is the male reproductive organ in flowering plants?", options: ["Stamen", "Carpel", "Anther", "Ovary"], answer: "Stamen" },
    { question: "19. What happens if stomata remain closed for too long in plants?", options: ["Photosynthesis decreases", "Water absorption increases", "Transpiration increases", "Gas exchange increases"], answer: "Photosynthesis decreases" },
    { question: "20. What is meristem tissue?", options: ["Tissue that actively divides", "Protective tissue", "Transport tissue", "Supportive tissue"], answer: "Tissue that actively divides" }
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
 
 export default QzBing12Present;

