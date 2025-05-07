import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the purpose of a narrative text?", options: ["To entertain or amuse the readers", "To explain how something works", "To provide arguments and opinions", "To describe things in general"], answer: "To entertain or amuse the readers" },
    { question: "2. Which of the following is NOT a part of narrative text structure?", options: ["Orientation", "Complication", "Resolution", "Procedure"], answer: "Procedure" },
    { question: "3. What is commonly found in the orientation of a narrative text?", options: ["Steps to do something", "Introduction of characters and setting", "Conflict resolution", "Writer's argument"], answer: "Introduction of characters and setting" },
    { question: "4. What does the complication in a narrative text describe?", options: ["The introduction of the main characters", "The problem faced by the characters", "The moral lesson of the story", "The steps to solve a problem"], answer: "The problem faced by the characters" },
    { question: "5. Which of the following is an example of narrative text?", options: ["A folk tale", "A manual", "An opinion article", "A news report"], answer: "A folk tale" },
    { question: "6. What is the function of the resolution in a narrative text?", options: ["To introduce the characters", "To explain the problem", "To resolve the conflict", "To provide a background"], answer: "To resolve the conflict" },
    { question: "7. Which of the following sentences indicates a climax in a narrative text?", options: ["The sun rose over the quiet village.", "She finally confronted the thief who stole her purse.", "They decided to plant trees together.", "The team gathered for a celebration."], answer: "She finally confronted the thief who stole her purse." },
    { question: "8. How does a moral lesson often appear in narrative texts?", options: ["Through direct instruction", "Implied through actions and outcomes", "As a list of guidelines", "In a separate conclusion paragraph"], answer: "Implied through actions and outcomes" },
    { question: "9. Identify the typical language feature of narrative text:", options: ["Past tense", "Future tense", "Imperative sentences", "Passive voice"], answer: "Past tense" },
    { question: "10. Which of these is a narrative technique?", options: ["Using dialogue", "Listing facts", "Citing statistics", "Asking rhetorical questions"], answer: "Using dialogue" },
    { question: "11. Why are dialogues important in narrative texts?", options: ["They make the text longer", "They reveal characters' thoughts and feelings", "They are required in every sentence", "They replace descriptions"], answer: "They reveal characters' thoughts and feelings" },
    { question: "12. What is the role of setting in a narrative text?", options: ["To describe the theme", "To establish the time and place of the story", "To explain the resolution", "To provide an argument"], answer: "To establish the time and place of the story" },
    { question: "13. Which of the following demonstrates the use of imagery in narrative text?", options: ["The air was cold and crisp, with snow blanketing the ground.", "He said he was angry.", "This is the main point of the story.", "The experiment was successful."], answer: "The air was cold and crisp, with snow blanketing the ground." },
    { question: "14. How can a writer create suspense in a narrative text?", options: ["Revealing the ending at the beginning", "Including detailed arguments", "Delaying key information", "Using unrelated subplots"], answer: "Delaying key information" },
    { question: "15. What is a flashback in a narrative text?", options: ["A chronological continuation of events", "A sudden resolution", "A scene set in a time earlier than the main story", "A repetitive action"], answer: "A scene set in a time earlier than the main story" },
    { question: "16. Which narrative perspective uses 'I' or 'we'?", options: ["Third-person", "First-person", "Second-person", "Omniscient"], answer: "First-person" },
    { question: "17. How does a twist ending affect a narrative?", options: ["It confuses readers", "It leaves the story unfinished", "It surprises readers with an unexpected conclusion", "It repeats the main conflict"], answer: "It surprises readers with an unexpected conclusion" },
    { question: "18. Which of the following is an example of direct characterization?", options: ["He was a kind and gentle man.", "His actions showed a gentle nature.", "Everyone knew him for his kindness.", "The gentle tone of his voice suggested kindness."], answer: "He was a kind and gentle man." },
    { question: "19. What is the effect of using a cliffhanger in a narrative text?", options: ["It resolves the story", "It creates tension and keeps readers curious", "It introduces new characters", "It provides a happy ending"], answer: "It creates tension and keeps readers curious" },
    { question: "20. How can a moral lesson in a narrative text influence readers?", options: ["It provides an argument", "It offers guidance or a new perspective", "It repeats the conflict", "It removes emotional impact"], answer: "It offers guidance or a new perspective" }
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