import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze the sentence structure: 'Although renewable energy sources are becoming more affordable, many countries still rely heavily on fossil fuels.' What type of complex sentence pattern is demonstrated here?", options: ["Compound sentence with coordinating conjunction", "Complex sentence with concessive clause", "Simple sentence with compound predicate", "Compound-complex sentence with multiple clauses"], answer: "Complex sentence with concessive clause" },
    { question: "2. In the sentence 'Not only did the technological advancement revolutionize communication, but it also transformed global business operations,' what sophisticated sentence pattern is employed?", options: ["Correlative conjunction pattern", "Inverted conditional structure", "Basic compound sentence", "Simple sentence with modifiers"], answer: "Correlative conjunction pattern" },
    { question: "3. Examine this sentence: 'The research paper, which incorporated multiple peer-reviewed studies, challenged existing theories about climate change.' What makes this sentence structure effective in academic writing?", options: ["The use of embedded relative clause", "The presence of parallel structure", "The inclusion of coordinating conjunction", "The application of inverted syntax"], answer: "The use of embedded relative clause" },
    { question: "4. Consider the sentence: 'Having analyzed the market trends, the company implemented innovative strategies, which resulted in unprecedented growth.' What complex grammatical structure is illustrated here?", options: ["Participle phrase with dependent clause", "Simple sentence with compound object", "Compound sentence with semicolon", "Complex sentence with noun clause"], answer: "Participle phrase with dependent clause" },
    { question: "5. In the sentence 'The more sustainable practices businesses adopt, the better their long-term environmental impact becomes,' what advanced comparative structure is demonstrated?", options: ["Correlative comparative structure", "Basic comparison pattern", "Simple comparative form", "Compound comparative phrase"], answer: "Correlative comparative structure" },
    { question: "6. Analyze: 'Despite facing numerous challenges, the team persevered through the project, while maintaining high quality standards.' What combination of sentence elements makes this structure sophisticated?", options: ["Concessive phrase with compound predicate", "Simple sentence with multiple objects", "Complex sentence with time clause", "Compound sentence with contrast"], answer: "Concessive phrase with compound predicate" },
    { question: "7. What structural pattern is exemplified in: 'Had the government implemented stricter regulations earlier, the environmental crisis might have been mitigated.'?", options: ["Inverted conditional perfect", "Basic past perfect tense", "Simple conditional structure", "Present perfect continuous"], answer: "Inverted conditional perfect" },
    { question: "8. In the sentence 'Social media platforms, evolving rapidly in response to user demands, continuously reshape modern communication patterns,' what advanced sentence structure is used?", options: ["Participial phrase as modifier", "Basic compound sentence", "Simple sentence with adjectives", "Complex sentence with noun clause"], answer: "Participial phrase as modifier" },
    { question: "9. Examine: 'So profound was the impact of artificial intelligence that it transformed multiple sectors of the economy.' What sophisticated syntax is demonstrated here?", options: ["Inverted emphasis structure", "Basic cause-effect pattern", "Simple past tense construction", "Compound sentence pattern"], answer: "Inverted emphasis structure" },
    { question: "10. What complex sentence structure is shown in: 'Whatever challenges emerge in the global market, successful companies must adapt their strategies accordingly.'?", options: ["Nominal clause as subject", "Basic conditional sentence", "Simple future tense", "Compound sentence with coordination"], answer: "Nominal clause as subject" },
    { question: "11. Analyze the structure: 'The more extensively researchers investigated the phenomenon, the more complex it proved to be.' What advanced pattern is illustrated?", options: ["Double comparative construction", "Simple comparative form", "Basic cause-effect pattern", "Compound sentence structure"], answer: "Double comparative construction" },
    { question: "12. In the sentence 'Not until the data was thoroughly analyzed did the researchers understand its significance,' what sophisticated structural pattern is used?", options: ["Negative inversion structure", "Basic past tense pattern", "Simple negative form", "Compound sentence with negation"], answer: "Negative inversion structure" },
    { question: "13. What complex structure is demonstrated in: 'Such was the magnitude of the discovery that it necessitated a complete revision of existing theories.'?", options: ["Emphatic inversion with such", "Basic cause-effect pattern", "Simple past tense form", "Compound sentence structure"], answer: "Emphatic inversion with such" },
    { question: "14. Examine: 'The technology, innovative though it was, failed to address the fundamental issues facing the industry.' What sophisticated pattern is shown here?", options: ["Concessive clause with inversion", "Simple contrast structure", "Basic past tense pattern", "Compound sentence form"], answer: "Concessive clause with inversion" },
    { question: "15. In the sentence 'Rarely had the organization faced such significant challenges before implementing the new system,' what advanced structural pattern is used?", options: ["Negative adverbial inversion", "Simple past perfect tense", "Basic negative structure", "Compound sentence pattern"], answer: "Negative adverbial inversion" },
    { question: "16. What complex structure is shown in: 'The project's success, dependent as it was on multiple factors, demonstrated the importance of comprehensive planning.'?", options: ["Dependent clause with inversion", "Simple modifying phrase", "Basic past tense structure", "Compound sentence pattern"], answer: "Dependent clause with inversion" },
    { question: "17. Analyze: 'No sooner had the company launched its new product than competitors began developing similar solutions.' What sophisticated pattern is illustrated?", options: ["Correlative temporal structure", "Simple past perfect tense", "Basic time sequence", "Compound sentence form"], answer: "Correlative temporal structure" },
    { question: "18. What advanced structure is used in: 'Only by understanding the underlying principles can researchers develop effective solutions.'?", options: ["Conditional inversion with only", "Basic conditional form", "Simple present tense", "Compound sentence structure"], answer: "Conditional inversion with only" },
    { question: "19. In the sentence 'So complex were the market dynamics that even experienced analysts struggled to predict trends,' what sophisticated pattern is demonstrated?", options: ["Intensifier inversion structure", "Basic cause-effect pattern", "Simple past tense form", "Compound sentence with so"], answer: "Intensifier inversion structure" },
    { question: "20. Examine: 'Little did the team realize that their innovation would revolutionize the entire industry.' What advanced structural pattern is shown here?", options: ["Negative adverbial inversion", "Simple past tense pattern", "Basic negative structure", "Compound sentence form"], answer: "Negative adverbial inversion" }
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
