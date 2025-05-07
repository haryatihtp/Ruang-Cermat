import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    { question: "1. What is the main purpose of a procedural text?", options: ["To entertain the readers", "To describe a general phenomenon", "To explain how to do or make something", "To argue for or against an issue"], answer: "To explain how to do or make something" },
    { question: "2. Which part is NOT included in a procedural text?", options: ["Materials", "Steps", "Resolution", "Goal"], answer: "Resolution" },
    { question: "3. What language feature is commonly used in procedural texts?", options: ["Past tense", "Imperative sentences", "Passive voice", "Descriptive adjectives"], answer: "Imperative sentences" },
    { question: "4. What does the 'steps' section of a procedural text describe?", options: ["The tools required", "The goals to achieve", "The sequence of actions to be followed", "The writer's opinion"], answer: "The sequence of actions to be followed" },
    { question: "5. Which of the following is an example of procedural text?", options: ["A recipe", "A short story", "An essay", "A speech"], answer: "A recipe" },
    { question: "6. Why are imperative sentences commonly used in procedural texts?", options: ["To make the text descriptive", "To instruct the readers clearly", "To narrate a story", "To argue a point"], answer: "To instruct the readers clearly" },
    { question: "7. Analyze the following instruction: 'Boil the water for 5 minutes.' What is its purpose in the context of a recipe?", options: ["To set the timer", "To prepare the water for the next step", "To describe the water", "To explain the boiling process"], answer: "To prepare the water for the next step" },
    { question: "8. In a procedural text, why is it important to include the materials section?", options: ["To describe the steps in detail", "To help readers prepare what is needed", "To entertain the readers", "To explain the background of the procedure"], answer: "To help readers prepare what is needed" },
    { question: "9. Which of the following would improve the clarity of a procedural text?", options: ["Using technical jargon", "Adding step-by-step images", "Including personal opinions", "Using long, complex sentences"], answer: "Adding step-by-step images" },
    { question: "10. Evaluate the following procedural text title: 'How to Bake a Cake.' Is it effective, and why?", options: ["Yes, because it is clear and concise", "No, because it lacks detail", "Yes, because it includes all materials", "No, because it is too short"], answer: "Yes, because it is clear and concise" },
    { question: "11. Why is it necessary to follow the steps in a procedural text in order?", options: ["To maintain clarity", "To achieve the desired outcome", "To reduce word count", "To entertain the reader"], answer: "To achieve the desired outcome" },
    { question: "12. What should you do if a procedural text lacks clarity?", options: ["Ignore the unclear parts", "Seek clarification or additional resources", "Change the goal of the text", "Rearrange the steps randomly"], answer: "Seek clarification or additional resources" },
    { question: "13. How can visuals enhance a procedural text?", options: ["By providing entertainment", "By clarifying complex steps", "By adding humor", "By replacing the materials section"], answer: "By clarifying complex steps" },
    { question: "14. What role does the title play in a procedural text?", options: ["It summarizes the entire text", "It provides detailed steps", "It indicates the goal or purpose", "It lists the required materials"], answer: "It indicates the goal or purpose" },
    { question: "15. Which of the following could be the goal of a procedural text?", options: ["To explain how to change a flat tire", "To argue for climate change", "To narrate a journey", "To describe a sunset"], answer: "To explain how to change a flat tire" },
    { question: "16. Why is chronological order important in procedural texts?", options: ["It ensures steps are followed logically", "It reduces word count", "It makes the text more persuasive", "It helps entertain the reader"], answer: "It ensures steps are followed logically" },
    { question: "17. Which scenario would most likely require a procedural text?", options: ["Writing a story about a holiday", "Providing a manual for assembling furniture", "Explaining the causes of global warming", "Describing the symptoms of a disease"], answer: "Providing a manual for assembling furniture" },
    { question: "18. What is the effect of using precise language in procedural texts?", options: ["It adds humor", "It increases clarity and reduces confusion", "It makes the text persuasive", "It allows for multiple interpretations"], answer: "It increases clarity and reduces confusion" },
    { question: "19. How can the effectiveness of a procedural text be evaluated?", options: ["By measuring the reader's enjoyment", "By checking if the goal is achievable and clear", "By counting the number of steps", "By analyzing its entertainment value"], answer: "By checking if the goal is achievable and clear" },
    { question: "20. What is a potential drawback of omitting materials in a procedural text?", options: ["The text becomes too persuasive", "The reader may be unable to prepare", "The steps become unclear", "The title loses its relevance"], answer: "The reader may be unable to prepare" },
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

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Tryout Bahasa Inggris Kelas X</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          {/* <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          /> */}
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;