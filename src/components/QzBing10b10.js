import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();  const questions = [
    { question: "1. Which sentence is in the simple present tense?", options: ["She writes a letter every day.", "He wrote a letter yesterday.", "They are writing a letter now.", "I will write a letter tomorrow."], answer: "She writes a letter every day." },
    { question: "2. What is the correct form of the verb for She ___ (go) to school every day?", options: ["goes", "go", "went", "going"], answer: "goes" },
    { question: "3. Which sentence is incorrect?", options: ["He walks to the park every morning.", "They don't like spicy food.", "She do her homework every night.", "I always wake up early."], answer: "She do her homework every night." },
    { question: "4. Choose the negative form: He speaks English fluently.", options: ["He doesn't speak English fluently.", "He don't speak English fluently.", "He didn't speak English fluently.", "He isn't speak English fluently"], answer: "He doesn't speak English fluently." },
    { question: "5. Simple present tense is used to express:", options: ["Past actions.", "Future plans.", "Daily habits.", "Actions happening now."], answer: "Daily habits." },
    { question: "6. Which of the following is correct?", options: ["I play tennis every day.", "I plays tennis every day.", "I playing tennis every day.", "I played tennis every day."], answer: "I play tennis every day." },
    { question: "7. What is the third person singular form of the verb 'to have'?", options: ["Has", "Have", "Had", "Haves"], answer: "Has" },
    { question: "8. Which sentence is correct?", options: ["She don't like chocolate.", "She doesn't like chocolate.", "She didn't like chocolate.", "She doesn't likes chocolate."], answer: "She doesn't like chocolate." },
    { question: "9. Choose the correct sentence.", options: ["They reads books every weekend.", "They read books every weekend.", "They reading books every weekend.", "They are read books every weekend."], answer: "They read books every weekend." },
    { question: "10. Which of the following sentences uses the correct form of the verb?", options: ["He study at the library.", "He studies at the library.", "He studying at the library.", "He studied at the library."], answer: "He studies at the library." },
    { question: "11. How would you modify the sentence 'She play the piano every day' to be grammatically correct?", options: ["She plays the piano every day.", "She playing the piano every day.", "She played the piano every day.", "She will play the piano every day."], answer: "She plays the piano every day." },
    { question: "12. Which of the following questions is in the simple present tense?", options: ["Does he go to the gym every day?", "Is he going to the gym every day?", "He goes to the gym every day?", "He is going to the gym every day."], answer: "Does he go to the gym every day?" },
    { question: "13. Why is 'The Earth revolves around the Sun' an example of the simple present tense?", options: ["It expresses a general truth.", "It refers to an event in the past.", "It expresses a future event.", "It refers to an ongoing action."], answer: "It expresses a general truth." },
    { question: "14. Which sentence shows an exception to the simple present tense rule for third-person singular?", options: ["She eat lunch at 1 p.m.", "He eats lunch at 1 p.m.", "It rains every afternoon.", "They play football every weekend."], answer: "She eat lunch at 1 p.m." },
    { question: "15. How does the simple present tense contribute to the clarity of instructions?", options: ["By stating a condition for action.", "By making actions seem ongoing.", "By stating facts or regular occurrences.", "By describing future events."], answer: "By stating facts or regular occurrences." },
    { question: "16. Which of the following uses the simple present tense to describe a habit?", options: ["I drink coffee every morning.", "I will drink coffee every morning.", "I am drinking coffee every morning.", "I drank coffee every morning."], answer: "I drink coffee every morning." },
    { question: "17. What is the effect of using 'do not' in negative sentences in the simple present tense?", options: ["It shows that the action is happening right now.", "It shows that the action happens frequently.", "It shows that the action does not happen regularly.", "It shows a future event."], answer: "It shows that the action does not happen regularly." },
    { question: "18. Why is the sentence 'He does not like broccoli' in the simple present tense?", options: ["Because it describes a general dislike.", "Because it refers to an action in the past.", "Because it is a planned future event.", "Because it describes a current ongoing action."], answer: "Because it describes a general dislike." },
    { question: "19. How does the use of the simple present tense in 'I study every day' affect the understanding of the action?", options: ["It indicates a continuous action.", "It expresses a past action.", "It expresses a future possibility.", "It expresses a routine or habit."], answer: "It expresses a routine or habit." },
    { question: "20. How can the simple present tense be used to express instructions or directions?", options: ["By using past tense verbs.", "By using modal verbs.", "By using the base form of verbs.", "By using future tense verbs."], answer: "By using the base form of verbs." }
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