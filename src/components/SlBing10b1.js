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
    { question: "1. What is the purpose of an exposition text?", options: ["To describe objects in detail", "To explain how to do something", "To persuade or argue for an idea", "To narrate a sequence of events"], answer: "To persuade or argue for an idea" },
    { question: "2. What structure is commonly found in an exposition text?", options: ["Introduction, Body, Conclusion", "Goal, Steps, Materials", "Orientation, Complication, Resolution", "Phenomenon, Description"], answer: "Introduction, Body, Conclusion" },
    { question: "3. Which of the following is NOT a characteristic of an exposition text?", options: ["Factual evidence", "Use of arguments", "General statements", "Dialogues"], answer: "Dialogues" },
    { question: "4. What type of language is commonly used in exposition text?", options: ["Descriptive language", "Persuasive language", "Colloquial language", "Imaginative language"], answer: "Persuasive language" },
    { question: "5. Which of the following is an example of an exposition text?", options: ["An editorial in a newspaper", "A user manual", "A legend", "A poem"], answer: "An editorial in a newspaper" },
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

export default Tryout;
