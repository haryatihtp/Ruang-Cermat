import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();  const questions = [
    { question: "1. What is the purpose of a report text?", options: ["To describe things as they are", "To narrate events in sequence", "To provide arguments and opinions", "To give step-by-step instructions"], correct: 0 },
    { question: "2. What structure is commonly used in report texts?", options: ["Introduction and description", "Goal and steps", "Orientation, complication, resolution", "Issue, argument, conclusion"], correct: 0 },
    { question: "3. Which language feature is common in report texts?", options: ["Imaginative descriptions", "Present tense", "Metaphorical language", "Persuasive arguments"], correct: 1 },
    { question: "4. What is usually described in a report text?", options: ["A general classification and detailed information", "The steps to achieve a goal", "The conflict in a story", "The writer's point of view"], correct: 0 },
    { question: "5. Which of the following is an example of a report text?", options: ["An article about the habits of penguins", "A guide to building a bookshelf", "A fairy tale", "An argumentative essay"], correct: 0 },
    { question: "6. Which of the following would most likely be found in a report text?", options: ["Personal opinions", "Factual information", "Imaginary stories", "Subjective emotions"], correct: 1 },
    { question: "7. What is a common characteristic of language used in report texts?", options: ["Past tense", "Future tense", "Present tense", "Present continuous tense"], correct: 2 },
    { question: "8. How does a report text differ from a recount text?", options: ["A report text describes specific events.", "A recount text focuses on general facts.", "A report text describes facts without personal experience.", "A recount text provides objective information."], correct: 2 },
    { question: "9. Which of the following best describes the structure of a report text?", options: ["Orientation, events, resolution", "General classification, description", "Introduction, discussion, conclusion", "Thesis, arguments, summary"], correct: 1 },
    { question: "10. Which of the following topics is suitable for a report text?", options: ["A report on climate change", "A fictional short story", "An opinion piece on politics", "A diary entry about a vacation"], correct: 0 },
    { question: "11. How does the use of factual information in a report text affect the reader's understanding?", options: ["It helps the reader learn new facts without bias.", "It makes the text less credible.", "It leaves room for imagination and creativity.", "It creates confusion for the reader."], correct: 0 },
    { question: "12. In a report text, why is it important to maintain objectivity?", options: ["To persuade the reader to accept the writer’s opinion.", "To ensure the information is presented clearly and neutrally.", "To entertain the reader with personal stories.", "To include fictional elements for creativity."], correct: 1 },
    { question: "13. How would the choice of structure in a report text influence its effectiveness?", options: ["By making the text longer and more detailed.", "By helping the reader easily follow the information being presented.", "By making the content seem more fictional.", "By preventing the writer from explaining complex ideas."], correct: 1 },
    { question: "14. What is the impact of using present tense in a report text?", options: ["It makes the report seem more timeless and applicable to the present.", "It confuses the reader about the timeline.", "It makes the report sound like a fictional story.", "It limits the description of past events."], correct: 0 },
    { question: "15. If you were to write a report on endangered species, how would you effectively present factual information?", options: ["By using personal opinions and emotions.", "By including accurate data and scientific facts with clear classification.", "By focusing on fictional stories about endangered animals.", "By using a chronological order of events."], correct: 1 },
    { question: "16. How does the language used in a report text help to inform the reader?", options: ["By using simple, informal language.", "By using complex technical terms that are hard to understand.", "By using clear, factual language and supporting evidence.", "By focusing on personal feelings and experiences."], correct: 2 },
    { question: "17. Why is it essential to provide detailed descriptions in a report text?", options: ["To make the text longer.", "To provide a clear understanding of the subject.", "To entertain the reader with exaggerated details.", "To avoid any factual information."], correct: 1 },
    { question: "18. How can the inclusion of visuals (like charts or diagrams) in a report text improve its impact?", options: ["It distracts the reader from the main content.", "It makes the report more visually appealing but less informative.", "It supports the textual information and helps clarify complex ideas.", "It makes the report seem too complicated."], correct: 2 },
    { question: "19. What role does the introduction play in a report text?", options: ["It provides a personal anecdote to engage the reader.", "It introduces the topic and sets the context for the detailed information.", "It offers a conclusion to the topic.", "It presents the writer’s personal opinions on the subject."], correct: 1 },
    { question: "20. How can the structure of a report text be adapted to suit different audiences?", options: ["By using technical jargon for experts and simple language for general readers.", "By including personal stories and anecdotes.", "By focusing only on visual elements without text.", "By using a formal tone for all readers."], correct: 0 }
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
            handleAnswer={handleAnswer}  */}
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;