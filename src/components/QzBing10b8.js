import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();  const questions = [
    { question: "1. What is the main purpose of a recount text?", options: ["To persuade someone.", "To entertain the readers.", "To tell past events.", "To describe something."], answer: "To tell past events" },
    { question: "2. What tense is commonly used in recount texts?", options: ["Present tense.", "Past tense.", "Future tense.", "Present continuous tense."], answer: "Past tense" },
    { question: "3. Which of the following is a generic structure of a recount text?", options: ["Orientation, complication, resolution.", "Orientation, events, re-orientation.", "Identification, description.", "Thesis, arguments, conclusion."], answer: "Orientation, events, re-orientation" },
    { question: "4. Identify the example of a recount text title:", options: ["My Best Friend", "The Story of My Holiday", "How to Bake a Cake", "The Wonders of Nature"], answer: "The Story of My Holiday" },
    { question: "5. Which sentence is likely found in a recount text?", options: ["The cake is very delicious.", "First, boil the water.", "Last month, I visited Bali.", "Do you like playing soccer?"], answer: "Last month, I visited Bali" },
    { question: "6. What is the effect of using detailed descriptions in a recount text?", options: ["It makes the text less interesting.", "It helps the reader to visualize the event.", "It confuses the reader.", "It makes the text shorter."], answer: "It helps the reader to visualize the event." },
    { question: "7. How does the use of past tense in recount texts affect the reader's understanding?", options: ["It shows the events are happening now.", "It gives the reader a sense of future.", "It indicates the events have already occurred.", "It makes the events seem unreal."], answer: "It indicates the events have already occurred." },
    { question: "8. Which of the following sentences could best be used as an orientation in a recount text?", options: ["I went to Bali last year.", "I woke up early in the morning.", "First, I made breakfast.", "Then, I went to the beach."], answer: "I went to Bali last year." },
    { question: "9. Why is it important to include a re-orientation in a recount text?", options: ["To conclude the story and give closure.", "To introduce new characters.", "To describe the setting.", "To explain the purpose of the text."], answer: "To conclude the story and give closure." },
    { question: "10. Which of the following is a characteristic of recount text?", options: ["It contains instructions for doing something.", "It includes personal experiences and events.", "It argues a specific point or opinion.", "It describes a process or procedure."], answer: "It includes personal experiences and events." },
    { question: "11. How does the use of chronological order in recount texts enhance the reader's understanding?", options: ["It makes the story more complex.", "It helps the reader follow the sequence of events.", "It introduces confusion in the timeline.", "It makes the text more entertaining."], answer: "It helps the reader follow the sequence of events." },
    { question: "12. Imagine you are writing a recount text about your recent trip. How would you effectively describe the setting to engage the reader?", options: ["Focus on the exact times and dates of events.", "Use vague and general descriptions.", "Include specific sensory details to make the setting vivid.", "Leave the setting out to focus on the events."], answer: "Include specific sensory details to make the setting vivid." },
    { question: "13. How would you modify the structure of a recount text to make it more persuasive?", options: ["By adding more personal opinions and emotions.", "By describing events without any analysis.", "By including arguments to persuade the reader.", "By focusing only on facts without reflection."], answer: "By adding more personal opinions and emotions." },
    { question: "14. What is the role of a conclusion or re-orientation in recount texts?", options: ["To introduce a new point of view.", "To summarize the events and offer reflection.", "To confuse the reader about the story's direction.", "To provide a list of facts."], answer: "To summarize the events and offer reflection." },
    { question: "15. In a recount text, how does the writer's choice of language affect the reader's perception of the event?", options: ["The language has no impact on the perception.", "The language can either make the event seem more dramatic or neutral.", "The language should always be very formal.", "The language should avoid using adjectives or adverbs."], answer: "The language can either make the event seem more dramatic or neutral." },
    { question: "16. If you were writing a recount text about a past event, how would you ensure the events are presented clearly?", options: ["By using abstract language.", "By writing in a non-chronological order.", "By providing clear transitions between each event.", "By skipping over details and focusing on the conclusion."], answer: "By providing clear transitions between each event." },
    { question: "17. In a recount text, why is it essential to include personal reflection or evaluation at the end?", options: ["To make the text more informative.", "To help the reader understand the significance of the events.", "To make the story longer.", "To include more factual details."], answer: "To help the reader understand the significance of the events." },
    { question: "18. How can using dialogue in a recount text affect the reader's experience?", options: ["It makes the text harder to follow.", "It adds realism and emotional depth to the narrative.", "It makes the recount less personal.", "It is irrelevant to the purpose of recount texts."], answer: "It adds realism and emotional depth to the narrative." },
    { question: "19. How would you apply the concept of 'cause and effect' in a recount text?", options: ["By describing events without any context.", "By showing how one event led to another and its consequences.", "By using only personal feelings and emotions.", "By focusing on future events rather than past ones."], answer: "By showing how one event led to another and its consequences." },
    { question: "20. What makes a recount text more engaging for the reader?", options: ["Including only factual details without any emotions.", "Using suspense and varied pacing to keep the reader interested.", "Focusing on one single event with little detail.", "Excluding any personal opinions or reflections."], answer: "Using suspense and varied pacing to keep the reader interested." }
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