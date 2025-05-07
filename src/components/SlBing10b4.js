import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/QuestionPage.css";

const Tryout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const alertShown = useRef(false);  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      if (!alertShown.current) {  
        alert("Anda harus login terlebih dahulu!");
        alertShown.current = true;  
      }
      navigate("/login");
    }
  }, [navigate]); 

  const questions = [
    { question: "1. What is the purpose of a narrative text?", options: ["To entertain or amuse the readers", "To explain how something works", "To provide arguments and opinions", "To describe things in general"], answer: "To entertain or amuse the readers" },
    { question: "2. Which of the following is NOT a part of narrative text structure?", options: ["Orientation", "Complication", "Resolution", "Procedure"], answer: "Procedure" },
    { question: "3. What is commonly found in the orientation of a narrative text?", options: ["Steps to do something", "Introduction of characters and setting", "Conflict resolution", "Writer's argument"], answer: "Introduction of characters and setting" },
    { question: "4. What does the complication in a narrative text describe?", options: ["The introduction of the main characters", "The problem faced by the characters", "The moral lesson of the story", "The steps to solve a problem"], answer: "The problem faced by the characters" },
    { question: "5. Which of the following is an example of narrative text?", options: ["A folk tale", "A manual", "An opinion article", "A news report"], answer: "A folk tale" },
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

  if (!isAuthenticated) {
    return null;
  }

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