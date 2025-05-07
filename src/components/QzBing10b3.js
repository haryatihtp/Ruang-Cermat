import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the proper response to 'Nice to meet you'?", options: ["See you later", "Nice to meet you too", "I'm fine, thank you", "Goodbye"], answer: "Nice to meet you too" },
    { question: "2. Which of the following expressions is suitable for introducing yourself?", options: ["How are you?", "I'm sorry, I don't know you", "Hello, my name is Anna", "See you later"], answer: "Hello, my name is Anna" },
    { question: "3. When meeting someone for the first time, you might say:", options: ["Long time no see!", "Good to see you again!", "Hi, my name is Mike", "What are you doing here?"], answer: "Hi, my name is Mike" },
    { question: "4. Which is NOT a greeting?", options: ["Good morning", "How are you?", "What's your name?", "Goodbye"], answer: "Goodbye" },
    { question: "5. In a formal setting, how should you greet someone?", options: ["Yo, what's up?", "Hey there!", "Good afternoon, nice to meet you", "Later, dude"], answer: "Good afternoon, nice to meet you" },
    { question: "6. Why is it important to use formal greetings in a business setting?", options: ["To appear friendly", "To ensure professional communication", "To impress everyone", "To save time"], answer: "To ensure professional communication" },
    { question: "7. Analyze the scenario: Someone says 'Good morning' and you respond with 'Hi, what's up?' Is this response appropriate in a formal context?", options: ["Yes, because it's casual", "No, because it lacks formality", "Yes, because it starts a conversation", "No, because it's too friendly"], answer: "No, because it lacks formality" },
    { question: "8. Which of the following introduces yourself appropriately in a formal interview?", options: ["Hey, I'm Alex, how's it going?", "Hello, my name is Alex. It's a pleasure to meet you.", "What's up, I'm Alex.", "Hi there, Alex here."] , answer: "Hello, my name is Alex. It's a pleasure to meet you." },
    { question: "9. Evaluate this statement: 'Using a person's name in a greeting makes it more personal and engaging.' Is this true or false? Why?", options: ["True, because it shows respect and attentiveness.", "False, because it makes it too casual.", "True, because it saves time.", "False, because it might be awkward."], answer: "True, because it shows respect and attentiveness" },
    { question: "10. What is the impact of using the wrong tone in an introduction?", options: ["It builds better relationships.", "It creates misunderstandings.", "It makes people feel comfortable.", "It has no impact."], answer: "It creates misunderstandings" },
    { question: "11. How should you address a group of people in a formal meeting?", options: ["What's up, guys?", "Ladies and gentlemen", "Hey everyone!", "Yo, team"], answer: "Ladies and gentlemen" },
    { question: "12. Identify the best closing line for an introduction in a formal context:", options: ["Catch you later!", "Looking forward to working with you.", "Bye for now.", "Let's hang out soon!"], answer: "Looking forward to working with you." },
    { question: "13. Which of the following is an effective way to make a first impression?", options: ["Ignoring the person.", "Maintaining eye contact and smiling.", "Talking over them.", "Looking at your phone."], answer: "Maintaining eye contact and smiling." },
    { question: "14. What does 'breaking the ice' mean in introductions?", options: ["Making someone feel comfortable.", "Ignoring awkward moments.", "Speaking in a loud voice.", "Starting a formal speech."], answer: "Making someone feel comfortable." },
    { question: "15. Analyze this scenario: You forgot someone's name after they introduced themselves. How should you handle it?", options: ["Pretend you remember.", "Ask politely for their name again.", "Avoid addressing them.", "Guess their name."], answer: "Ask politely for their name again." },
    { question: "16. What is an appropriate response when someone introduces themselves as 'Mr. Smith'?", options: ["Oh, cool.", "Nice to meet you, Mr. Smith.", "Hey, buddy!", "What's up?"] , answer: "Nice to meet you, Mr. Smith." },
    { question: "17. Which of these greetings is culturally sensitive in a global context?", options: ["What's up, mate?", "Good morning", "Yo, dude!", "Hey, bro!"], answer: "Good morning" },
    { question: "18. What does the phrase 'Pleased to make your acquaintance' convey?", options: ["A formal greeting.", "An informal closing.", "A casual comment.", "A joke."], answer: "A formal greeting." },
    { question: "19. Why is body language important during introductions?", options: ["It distracts the speaker.", "It reinforces the spoken message.", "It makes you seem disinterested.", "It has no impact."], answer: "It reinforces the spoken message." },
    { question: "20. What is the role of tone of voice in greetings and introductions?", options: ["To confuse the listener.", "To convey confidence and respect.", "To reduce clarity.", "To ignore emotions."], answer: "To convey confidence and respect." },
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