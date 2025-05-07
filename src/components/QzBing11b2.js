import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze the following sentence: 'While the students were preparing for their final exams in the library, a sudden power outage occurred, causing everyone to panic.' What type of sentence is this?", options: ["Complex sentence", "Compound-complex sentence", "Simple sentence", "Compound sentence"], answer: "Complex sentence" },
    { question: "2. In the sentence 'The ancient ruins stood majestically on the hilltop, and tourists from all over the world came to marvel at their beauty, which had endured for centuries.' What classification best describes this structure?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "3. Examine this sentence: 'Not only did the heavy rain flood the streets, but it also caused severe damage to the infrastructure.' What type of sentence pattern is demonstrated here?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Complex-compound sentence"], answer: "Compound sentence" },
    { question: "4. Consider the sentence: 'The new environmental policy, which was implemented last month, has significantly reduced plastic waste in our city.' What type of sentence is this?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "5. In the sentence 'Because the traffic was extremely heavy this morning, many students arrived late to school, but the teacher understood their situation.' What type of sentence structure is shown?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "6. Analyze: 'The talented musician performed brilliantly at the concert.' What type of sentence is this?", options: ["Simple sentence", "Complex sentence", "Compound sentence", "Compound-complex sentence"], answer: "Simple sentence" },
    { question: "7. What type of sentence is exemplified in: 'Although he studied hard for the test, he still found it challenging, and his friends felt the same way.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "8. In the sentence 'The company invested in new technology, trained their employees, and improved their services.' What classification best describes this structure?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-complex sentence"], answer: "Compound sentence" },
    { question: "9. Examine: 'When the fire alarm rang, the students quickly evacuated the building.' What type of sentence is this?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "10. What type of sentence structure is shown in: 'The experiment failed because the temperature was not properly controlled, yet the researchers gained valuable insights from their mistakes.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "11. Analyze the structure: 'Since the pandemic began, many businesses have adapted to remote work, and productivity has surprisingly increased, which has led to new workplace policies.' What type of sentence is this?", options: ["Compound-complex sentence", "Complex sentence", "Compound sentence", "Simple sentence"], answer: "Compound-complex sentence" },
    { question: "12. In the sentence 'The historical documentary revealed new information about ancient civilizations, but some scholars disputed its accuracy.' What type of sentence is demonstrated?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-complex sentence"], answer: "Compound sentence" },
    { question: "13. What type of sentence is: 'The renewable energy project, which was funded by international investors, has created numerous job opportunities in the region.'?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "14. Examine: 'Although the weather forecast predicted rain, the outdoor event was successful, and everyone enjoyed themselves.' What classification fits this sentence?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "15. In the sentence 'The innovative startup developed groundbreaking technology.' What type of sentence structure is used?", options: ["Simple sentence", "Complex sentence", "Compound sentence", "Compound-complex sentence"], answer: "Simple sentence" },
    { question: "16. What type of sentence is shown in: 'While the chef prepared the main course, the sous chef arranged the appetizers, and the waiters set up the dining room.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "17. Analyze: 'The research team collected data, analyzed the results, and published their findings.' What type of sentence is this?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-complex sentence"], answer: "Compound sentence" },
    { question: "18. What type of sentence structure is used in: 'Because the internet connection was unstable, the virtual meeting had to be rescheduled.'?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "19. In the sentence 'The art exhibition showcased local talent, attracted international attention, and promoted cultural exchange.' What classification best describes this structure?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-complex sentence"], answer: "Compound sentence" },
    { question: "20. Examine: 'While the city council debated the proposal, citizens voiced their concerns, but the final decision was postponed.' What type of sentence is this?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" }
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

  const handleLogout = () => {
    navigate("/kuis/bahasa-inggris/kelas-11");
  };

  return (
    <div className="app">
      <h1>Kuis B.Inggris Kelas XI</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;
