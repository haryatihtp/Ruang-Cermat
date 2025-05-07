import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Which sentence is in present continuous tense?", options: ["I play soccer every weekend.", "She is reading a book now.", "They went to the park yesterday.", "He has finished his homework."], correct: 1 },
    { question: "2. What is the correct form of present continuous tense?", options: ["Subject + has/have + verb", "Subject + verb + ing", "Subject + is/are/am + verb + ing", "Subject + will + verb"], correct: 2 },
    { question: "3. Which of the following is an example of present continuous tense?", options: ["They are cooking dinner at the moment.", "She cooked dinner last night.", "He cooks dinner every day.", "We have cooked dinner."], correct: 0 },
    { question: "4. What question is correctly using present continuous tense?", options: ["Are you studying for the test now?", "Do you study for the test now?", "Have you studied for the test?", "Will you study for the test?"], correct: 0 },
    { question: "5. When is the present continuous tense used?", options: ["For actions happening now", "For habits or routines", "For past actions", "For future intentions"], correct: 0 },
    { question: "6. Why is the sentence 'She is walking to the market every morning' incorrect?", options: ["Because 'is walking' is not present continuous.", "Because 'every morning' indicates a habitual action, not a continuous one.", "Because 'walking' cannot be used with 'is'.", "Because 'to the market' is incorrect syntax."], answer: "Because 'every morning' indicates a habitual action, not a continuous one." },
    { question: "7. Which scenario requires the use of present continuous tense?", options: ["Describing your daily routine.", "Talking about an action happening right now.", "Explaining a historical event.", "Making general statements about facts."], answer: "Talking about an action happening right now." },
    { question: "8. Analyze this sentence: 'He is always complaining about the weather.' What does the use of present continuous indicate?", options: ["A temporary action.", "A habitual action with annoyance.", "An action in the past.", "A future intention."], answer: "A habitual action with annoyance." },
    { question: "9. How would you correct the sentence 'We are go to the cinema tonight'?", options: ["Change 'are go' to 'are going'.", "Remove 'are' and just use 'go'.", "Change 'cinema' to 'cinemas'.", "Add 'will' before 'go'."], answer: "Change 'are go' to 'are going'." },
    { question: "10. Evaluate this situation: 'During the meeting, she was typing on her laptop.' Is present continuous appropriate here?", options: ["Yes, because the action was ongoing in the past.", "No, it should be present simple.", "Yes, because it's a future action.", "No, it should be past perfect."], answer: "Yes, because the action was ongoing in the past." },
    { question: "11. What is the negative form of present continuous tense?", options: ["Subject + is/are/am + not + verb + ing", "Subject + do/does + not + verb", "Subject + will + not + verb", "Subject + has/have + not + verb"], answer: "Subject + is/are/am + not + verb + ing" },
    { question: "12. Identify the error: 'He are playing soccer.'", options: ["'are' should be 'is'.", "'playing' should be 'plays'.", "'He' should be 'They'.", "No error."], answer: "'are' should be 'is'." },
    { question: "13. Choose the correct question: 'What ___ you ___ right now?'", options: ["are; do", "do; do", "are; doing", "is; doing"], answer: "are; doing" },
    { question: "14. Which sentence shows an action in progress?", options: ["They swim every morning.", "He is swimming in the pool now.", "We swam yesterday.", "She will swim later."], answer: "He is swimming in the pool now." },
    { question: "15. What is the correct structure for present continuous tense?", options: ["Subject + is/are/am + base verb", "Subject + base verb + ing", "Subject + is/are/am + verb + ing", "Subject + verb + ed"], answer: "Subject + is/are/am + verb + ing" },
    { question: "16. Complete the sentence: 'She ___ (read) a book right now.'", options: ["is reading", "reads", "read", "has read"], answer: "is reading" },
    { question: "17. Identify the correct sentence:", options: ["We are eats lunch.", "We are eating lunch.", "We eating lunch.", "We eat lunch now."], answer: "We are eating lunch." },
    { question: "18. What is the question form of present continuous tense?", options: ["Are/Is + subject + verb + ing?", "Do/Does + subject + verb?", "Will + subject + verb?", "Subject + verb + ing?"], answer: "Are/Is + subject + verb + ing?" },
    { question: "19. Why do we use present continuous tense?", options: ["To describe actions happening right now.", "To describe future intentions.", "To describe temporary situations.", "All of the above."], answer: "All of the above." },
    { question: "20. Correct this sentence: 'They is playing football.'", options: ["Change 'is' to 'are'.", "Change 'playing' to 'plays'.", "Add 'not' after 'is'.", "Remove 'is'."], answer: "Change 'is' to 'are'." }
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