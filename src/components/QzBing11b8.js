import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze this sentence: 'While the students were studying in the library, a power outage occurred, but they continued working by candlelight.' What type of sentence is this?", options: ["Simple sentence", "Compound sentence", "Complex sentence", "Compound-complex sentence"], answer: "Compound-complex sentence" },
    { question: "2. In the sentence 'The ancient temple stands majestically on the hilltop, attracting tourists from around the world,' identify the sentence type and explain why.", options: ["Complex sentence with dependent clause", "Simple sentence with compound predicate", "Compound sentence with two independent clauses", "Complex sentence with relative clause"], answer: "Simple sentence with compound predicate" },
    { question: "3. Which type of sentence is most effectively used in this context: 'Because the storm was approaching rapidly, the fishermen returned to shore, and the beach was quickly evacuated.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "4. Examine this sentence: 'Not only did the new policy improve working conditions, but it also increased productivity.' What type of sentence structure is used here?", options: ["Compound sentence with correlative conjunction", "Complex sentence with adverb clause", "Simple sentence with compound subject", "Complex sentence with noun clause"], answer: "Compound sentence with correlative conjunction" },
    { question: "5. In academic writing, which sentence type would be most appropriate to express this idea: 'Although genetic factors play a role in personality development, environmental influences have a significant impact.'?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "6. Identify the sentence type: 'The movie, which won several awards, captivated audiences worldwide and broke box office records.'", options: ["Complex sentence with relative clause", "Simple sentence with modifiers", "Compound-complex sentence", "Compound sentence"], answer: "Complex sentence with relative clause" },
    { question: "7. What type of sentence would best combine these ideas effectively: 'The experiment failed. The scientists discovered something unexpected. This led to a breakthrough.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "8. Analyze this sentence: 'When the bell rang, the students rushed out of the classroom, but some stayed behind to complete their work.' What type is it?", options: ["Compound-complex sentence", "Complex sentence", "Simple sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "9. Which sentence type creates the most sophisticated expression: 'The artist painted the landscape. She used vibrant colors. The critics praised her work.'?", options: ["Complex sentence with multiple clauses", "Compound sentence with coordinating conjunctions", "Simple sentence with phrases", "Compound-complex sentence"], answer: "Complex sentence with multiple clauses" },
    { question: "10. In the sentence 'Despite the heavy rain, the football match continued, and the fans remained enthusiastic,' what type of sentence structure is demonstrated?", options: ["Compound sentence", "Complex sentence", "Simple sentence", "Compound-complex sentence"], answer: "Compound sentence" },
    { question: "11. Identify the most effective sentence type for combining these ideas: 'The technology was innovative. It had some flaws. The developers worked to fix them.'", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "12. What type of sentence is this: 'Because the internet connection was unstable, the online meeting was postponed until further notice.'?", options: ["Complex sentence", "Simple sentence", "Compound sentence", "Compound-complex sentence"], answer: "Complex sentence" },
    { question: "13. Analyze the effectiveness of this sentence type: 'The chef created the recipe, and the restaurant became famous, which led to multiple franchises.'", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "14. Which sentence type best expresses this idea: 'Although the evidence was circumstantial, the jury reached a verdict, and justice was served.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "15. In the sentence 'The museum houses ancient artifacts, displays modern art, and offers educational programs,' what type of sentence is used?", options: ["Simple sentence with compound predicate", "Complex sentence", "Compound sentence", "Compound-complex sentence"], answer: "Simple sentence with compound predicate" },
    { question: "16. What type of sentence would most effectively combine these ideas: 'The company invested in new technology. The employees needed training. Productivity improved.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "17. Analyze this sentence: 'While the orchestra played, the dancers performed gracefully, which mesmerized the audience.' What type is it?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "18. In formal writing, which sentence type is most appropriate: 'Because environmental concerns are rising, governments must act, and industries must adapt.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" },
    { question: "19. Identify the sentence type: 'The research paper was well-written, thoroughly documented, and professionally presented.'", options: ["Simple sentence with compound predicate", "Complex sentence", "Compound sentence", "Compound-complex sentence"], answer: "Simple sentence with compound predicate" },
    { question: "20. What type of sentence structure is used in: 'Since the project began late, the team worked overtime, but they still met the deadline.'?", options: ["Compound-complex sentence", "Simple sentence", "Complex sentence", "Compound sentence"], answer: "Compound-complex sentence" }
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
