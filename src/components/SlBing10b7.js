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
    { question: "1. What is the main purpose of a recount text?", options: ["To persuade someone.", "To entertain the readers.", "To tell past events.", "To describe something."], answer: "To tell past events" },
    { question: "2. What tense is commonly used in recount texts?", options: ["Present tense.", "Past tense.", "Future tense.", "Present continuous tense."], answer: "Past tense" },
    { question: "3. Which of the following is a generic structure of a recount text?", options: ["Orientation, complication, resolution.", "Orientation, events, re-orientation.", "Identification, description.", "Thesis, arguments, conclusion."], answer: "Orientation, events, re-orientation" },
    { question: "4. Identify the example of a recount text title:", options: ["My Best Friend", "The Story of My Holiday", "How to Bake a Cake", "The Wonders of Nature"], answer: "The Story of My Holiday" },
    { question: "5. Which sentence is likely found in a recount text?", options: ["The cake is very delicious.", "First, boil the water.", "Last month, I visited Bali.", "Do you like playing soccer?"], answer: "Last month, I visited Bali" },
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