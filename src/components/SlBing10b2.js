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
    { question: "1. What is the proper response to 'Nice to meet you'?", options: ["See you later", "Nice to meet you too", "I'm fine, thank you", "Goodbye"], answer: "Nice to meet you too" },
    { question: "2. Which of the following expressions is suitable for introducing yourself?", options: ["How are you?", "I'm sorry, I don't know you", "Hello, my name is Anna", "See you later"], answer: "Hello, my name is Anna" },
    { question: "3. When meeting someone for the first time, you might say:", options: ["Long time no see!", "Good to see you again!", "Hi, my name is Mike", "What are you doing here?"], answer: "Hi, my name is Mike" },
    { question: "4. Which is NOT a greeting?", options: ["Good morning", "How are you?", "What's your name?", "Goodbye"], answer: "Goodbye" },
    { question: "5. In a formal setting, how should you greet someone?", options: ["Yo, what's up?", "Hey there!", "Good afternoon, nice to meet you", "Later, dude"], answer: "Good afternoon, nice to meet you" },
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