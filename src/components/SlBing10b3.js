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
    { question: "1. What is the main difference between formal and informal letters?", options: ["Informal letters have no greetings.", "Informal letters use casual language.", "Informal letters are used for business.", "Informal letters are very short."], answer: "Informal letters use casual language." },
    { question: "2. Which phrase is suitable for an informal letter?", options: ["I am writing to inform you...", "Best regards,", "Hi, how have you been?", "Sincerely yours,"], answer: "Hi, how have you been?" },
    { question: "3. What is the purpose of an informal letter?", options: ["To apply for a job.", "To communicate with friends or family.", "To report an incident.", "To complain about a product."], answer: "To communicate with friends or family." },
    { question: "4. Which part is NOT typically found in an informal letter?", options: ["Greetings.", "Salutation.", "Thesis statement.", "Closing."], answer: "Thesis statement." },
    { question: "5. Identify the correct closing for an informal letter:", options: ["Yours faithfully,", "With warm wishes,", "Best regards,", "Sincerely,"], answer: "With warm wishes," },
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