import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate(); 

  const questions = [
    { question: "1. What is the main difference between formal and informal letters?", options: ["Informal letters have no greetings.", "Informal letters use casual language.", "Informal letters are used for business.", "Informal letters are very short."], answer: "Informal letters use casual language." },
    { question: "2. Which phrase is suitable for an informal letter?", options: ["I am writing to inform you...", "Best regards,", "Hi, how have you been?", "Sincerely yours,"], answer: "Hi, how have you been?" },
    { question: "3. What is the purpose of an informal letter?", options: ["To apply for a job.", "To communicate with friends or family.", "To report an incident.", "To complain about a product."], answer: "To communicate with friends or family." },
    { question: "4. Which part is NOT typically found in an informal letter?", options: ["Greetings.", "Salutation.", "Thesis statement.", "Closing."], answer: "Thesis statement." },
    { question: "5. Identify the correct closing for an informal letter:", options: ["Yours faithfully,", "With warm wishes,", "Best regards,", "Sincerely,"], answer: "With warm wishes," },
    { question: "6. Why is casual language important in an informal letter?", options: ["To maintain a professional tone.", "To create a friendly and personal connection.", "To ensure proper grammar is used.", "To make it easier to archive."], answer: "To create a friendly and personal connection." },
    { question: "7. Which of the following would be a suitable opening for an informal letter?", options: ["I am writing to express my concerns...", "I hope this letter finds you well.", "Please find attached...", "I am writing on behalf of..."], answer: "I hope this letter finds you well." },
    { question: "8. When writing to a friend, how can you make the letter more engaging?", options: ["Use a lot of formal expressions.", "Ask about their well-being and share personal stories.", "Keep the letter very short and to the point.", "Avoid using any personal details."], answer: "Ask about their well-being and share personal stories." },
    { question: "9. Which sentence best describes an informal letter?", options: ["It follows a strict format and is used in professional settings.", "It is a casual letter written to friends or family.", "It always contains technical jargon.", "It is a legal document used in court."], answer: "It is a casual letter written to friends or family." },
    { question: "10. What should you avoid in an informal letter?", options: ["Sharing personal experiences.", "Using complex vocabulary unnecessarily.", "Writing in a friendly tone.", "Asking questions about their well-being."], answer: "Using complex vocabulary unnecessarily." },
    { question: "11. Analyze the tone of this sentence: 'Hey Sam, guess what happened yesterday?' What does it convey?", options: ["Formal and distant.", "Excited and curious.", "Bored and uninterested.", "Neutral and objective."], answer: "Excited and curious." },
    { question: "12. Your friend has moved to a new city. How would you structure an informal letter to make them feel welcome?", options: ["Use bullet points and keep it short.", "Share personal updates and ask about their experiences.", "Focus only on your own updates.", "Use formal language to sound polite."], answer: "Share personal updates and ask about their experiences." },
    { question: "13. Why is it important to ask questions in an informal letter?", options: ["To make the letter look longer.", "To show interest in the recipient's life.", "To fill space in the letter.", "To avoid sharing your own updates."], answer: "To show interest in the recipient's life." },
    { question: "14. Evaluate this statement: 'Using emojis in an informal letter is always inappropriate.' Is this true or false?", options: ["True, because it is unprofessional.", "False, because it depends on the context and relationship.", "True, because emojis are only for texting.", "False, because emojis make every letter better."], answer: "False, because it depends on the context and relationship." },
    { question: "15. If your friend has written a sad update, how should you respond in an informal letter?", options: ["Ignore the sad update and share happy news.", "Express empathy and offer support.", "Change the topic to avoid discomfort.", "Focus on giving detailed advice without empathy."], answer: "Express empathy and offer support." },
    { question: "16. Your cousin wrote to you about their new job. What would be an engaging response in your informal letter?", options: ["I hope you enjoy your job. Anyway, I watched a movie yesterday.", "Congrats on your job! Tell me more about it. What do you like most so far?", "Good for you. I don't have much to say.", "Wow, a job. Nice."], answer: "Congrats on your job! Tell me more about it. What do you like most so far?" },
    { question: "17. Which strategy can make an informal letter feel more personal?", options: ["Use a template to write it.", "Mention shared memories and inside jokes.", "Avoid any personal references.", "Keep the letter very general."], answer: "Mention shared memories and inside jokes." },
    { question: "18. How can you maintain a natural flow in an informal letter?", options: ["Stick to one topic without transitions.", "Switch topics abruptly.", "Use conversational language and smooth transitions.", "Avoid using any questions or comments."] , answer: "Use conversational language and smooth transitions." },
    { question: "19. Your friend mentioned missing home. How would you address this in your informal letter?", options: ["Remind them to focus on their work and ignore homesickness.", "Share comforting advice and acknowledge their feelings.", "Avoid discussing the topic.", "Tell them to stop being emotional."], answer: "Share comforting advice and acknowledge their feelings." },
    { question: "20. What is the role of humor in an informal letter?", options: ["To confuse the reader.", "To lighten the tone and make it enjoyable.", "To make the letter appear unprofessional.", "To show superiority to the recipient."], answer: "To lighten the tone and make it enjoyable." }
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