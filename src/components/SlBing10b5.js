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
    { question: "1. Which sentence is in present continuous tense?", options: ["I play soccer every weekend.", "She is reading a book now.", "They went to the park yesterday.", "He has finished his homework."], correct: 1 },
    { question: "2. What is the correct form of present continuous tense?", options: ["Subject + has/have + verb", "Subject + verb + ing", "Subject + is/are/am + verb + ing", "Subject + will + verb"], correct: 2 },
    { question: "3. Which of the following is an example of present continuous tense?", options: ["They are cooking dinner at the moment.", "She cooked dinner last night.", "He cooks dinner every day.", "We have cooked dinner."], correct: 0 },
    { question: "4. What question is correctly using present continuous tense?", options: ["Are you studying for the test now?", "Do you study for the test now?", "Have you studied for the test?", "Will you study for the test?"], correct: 0 },
    { question: "5. When is the present continuous tense used?", options: ["For actions happening now", "For habits or routines", "For past actions", "For future intentions"], correct: 0 },
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