import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the purpose of an exposition text?", options: ["To describe objects in detail", "To explain how to do something", "To persuade or argue for an idea", "To narrate a sequence of events"], answer: "To persuade or argue for an idea" },
    { question: "2. What structure is commonly found in an exposition text?", options: ["Introduction, Body, Conclusion", "Goal, Steps, Materials", "Orientation, Complication, Resolution", "Phenomenon, Description"], answer: "Introduction, Body, Conclusion" },
    { question: "3. Which of the following is NOT a characteristic of an exposition text?", options: ["Factual evidence", "Use of arguments", "General statements", "Dialogues"], answer: "Dialogues" },
    { question: "4. What type of language is commonly used in exposition text?", options: ["Descriptive language", "Persuasive language", "Colloquial language", "Imaginative language"], answer: "Persuasive language" },
    { question: "5. Which of the following is an example of an exposition text?", options: ["An editorial in a newspaper", "A user manual", "A legend", "A poem"], answer: "An editorial in a newspaper" },
    { question: "6. Why is it important to provide evidence in an exposition text?", options: ["To lengthen the text.", "To make arguments credible and convincing.", "To confuse the reader.", "To provide entertainment."], answer: "To make arguments credible and convincing" },
    { question: "7. Analyze the statement: 'School uniforms should be mandatory because they promote discipline.' What kind of argument is this?", options: ["An emotional argument", "A logical argument", "An anecdotal argument", "A hypothetical argument"], answer: "A logical argument" },
    { question: "8. Which of the following would weaken the argument: 'Social media has a negative impact on mental health'?", options: ["Studies showing increased anxiety among social media users.", "Reports indicating that social media improves connectivity and support.", "Statistics on the rise of cyberbullying.", "Personal stories about depression caused by online comments."], answer: "Reports indicating that social media improves connectivity and support" },
    { question: "9. Evaluate this statement: 'An exposition text must always take a side on an issue.' Is this true or false? Why?", options: ["True, because it aims to persuade readers.", "False, because some exposition texts can be neutral.", "True, because it cannot be written objectively.", "False, because it only presents data."], answer: "False, because some exposition texts can be neutral" },
    { question: "10. What is the impact of using rhetorical questions in an exposition text?", options: ["It confuses the reader.", "It engages the reader and encourages critical thinking.", "It provides direct answers to the reader.", "It makes the text shorter."], answer: "It engages the reader and encourages critical thinking" },
    { question: "11. How can transitions improve the flow of an exposition text?", options: ["By creating confusion.", "By connecting ideas and arguments logically.", "By adding unnecessary details.", "By reducing the length of the text."], answer: "By connecting ideas and arguments logically" },
    { question: "12. Which of the following is an effective concluding statement in an exposition text?", options: ["To summarize, the evidence supports the idea that exercise benefits mental health.", "In conclusion, let us move on to another topic.", "Therefore, I don't think this is relevant.", "Let's consider a new argument."], answer: "To summarize, the evidence supports the idea that exercise benefits mental health." },
    { question: "13. Identify the technique used: 'Who wouldn't want a better future for their children?'", options: ["Statistical evidence", "Rhetorical question", "Direct command", "Factual statement"], answer: "Rhetorical question" },
    { question: "14. What role do counterarguments play in an exposition text?", options: ["They weaken the main argument.", "They provide balance and strengthen the main argument.", "They make the text confusing.", "They are unnecessary and should be avoided."], answer: "They provide balance and strengthen the main argument." },
    { question: "15. What should be avoided in the introduction of an exposition text?", options: ["A clear thesis statement", "Relevant background information", "Ambiguity and irrelevant details", "An engaging hook"], answer: "Ambiguity and irrelevant details" },
    { question: "16. Analyze the following: 'According to recent studies, eating vegetables daily reduces the risk of chronic diseases.' Why is this statement effective?", options: ["It uses credible evidence.", "It includes a rhetorical question.", "It lacks detail.", "It avoids specific examples."], answer: "It uses credible evidence." },
    { question: "17. Which of the following is NOT a persuasive technique?", options: ["Appealing to emotions", "Providing evidence", "Ignoring counterarguments", "Using clear logic"], answer: "Ignoring counterarguments" },
    { question: "18. How does an exposition text differ from a descriptive text?", options: ["It uses sensory details.", "It presents arguments and evidence.", "It focuses on vivid imagery.", "It avoids taking a stance."], answer: "It presents arguments and evidence." },
    { question: "19. What should be included in the body paragraphs of an exposition text?", options: ["Personal opinions without evidence", "Arguments supported by evidence", "Unrelated anecdotes", "Questions without answers"], answer: "Arguments supported by evidence" },
    { question: "20. Evaluate the effectiveness of this conclusion: 'Thus, climate change is a pressing issue that requires immediate action.'", options: ["It lacks a clear call to action.", "It effectively summarizes the main argument.", "It introduces new evidence.", "It confuses the reader."], answer: "It effectively summarizes the main argument." },
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