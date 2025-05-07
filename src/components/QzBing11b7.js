import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze the following sentence: 'The book that I borrowed from the library yesterday contains valuable information which helps me understand quantum physics.' Identify the types of dependent clauses in this sentence.", options: ["Two adjective clauses", "One noun clause and one adjective clause", "Two noun clauses", "One adverb clause and one adjective clause"], answer: "Two adjective clauses" },
    { question: "2. In the complex sentence 'Whatever you decide to do with your future will impact how others perceive your capabilities.' What types of clauses are underlined?", options: ["Both are noun clauses", "First is adjective clause, second is noun clause", "First is noun clause, second is adverb clause", "Both are adverb clauses"], answer: "Both are noun clauses" },
    { question: "3. Examine this sentence: 'Although scientists have made significant breakthroughs in cancer research, what they discovered about cell mutation remains controversial.' Identify the clause types.", options: ["Adverb clause and noun clause", "Adjective clause and noun clause", "Two adverb clauses", "Noun clause and adjective clause"], answer: "Adverb clause and noun clause" },
    { question: "4. In the sentence 'The way how artificial intelligence processes information depends on how it was initially programmed.' What types of dependent clauses are present?", options: ["Two noun clauses", "Two adverb clauses", "One noun clause and one adverb clause", "One adjective clause and one noun clause"], answer: "Two noun clauses" },
    { question: "5. Analyze: 'Wherever there is technological advancement, which often disrupts traditional methods, society must adapt to changes that innovation brings.' Identify the clause pattern.", options: ["Adverb clause, adjective clause, and adjective clause", "Three adjective clauses", "Two adverb clauses and one adjective clause", "Two adjective clauses and one adverb clause"], answer: "Adverb clause, adjective clause, and adjective clause" },
    { question: "6. In the sentence 'The reason why renewable energy is crucial is that fossil fuels, which have dominated energy production, are depleting rapidly.' What combination of clauses is used?", options: ["Adjective clause, noun clause, and adjective clause", "Three adjective clauses", "Two noun clauses and one adjective clause", "Two adjective clauses and one noun clause"], answer: "Adjective clause, noun clause, and adjective clause" },
    { question: "7. Examine: 'Whether artificial intelligence will benefit humanity depends on how we implement ethical guidelines that protect human rights.' What types of clauses are present?", options: ["Two noun clauses and one adjective clause", "Three noun clauses", "One noun clause and two adjective clauses", "Two adjective clauses and one adverb clause"], answer: "Two noun clauses and one adjective clause" },
    { question: "8. In 'Since the ecosystem where endangered species live is threatened by climate change, scientists are researching how they can preserve biodiversity.' Identify the clause types.", options: ["Adverb clause with embedded adjective clause, and noun clause", "Two adverb clauses and one noun clause", "Two adjective clauses and one noun clause", "Noun clause and two adverb clauses"], answer: "Adverb clause with embedded adjective clause, and noun clause" },
    { question: "9. Analyze: 'What researchers discovered about deep-sea creatures that live in extreme conditions shows why adaptation is crucial for survival.' What combination of clauses is used?", options: ["Noun clause with embedded adjective clause, and noun clause", "Two adjective clauses and one noun clause", "Two noun clauses and one adjective clause", "Adverb clause and two noun clauses"], answer: "Noun clause with embedded adjective clause, and noun clause" },
    { question: "10. In the sentence 'Whoever develops the most efficient solution to environmental problems that plague our planet will receive recognition when the results are verified.' Identify the clause pattern.", options: ["Noun clause, adjective clause, and adverb clause", "Three adjective clauses", "Two noun clauses and one adverb clause", "Two adverb clauses and one adjective clause"], answer: "Noun clause, adjective clause, and adverb clause" },
    { question: "11. Examine: 'The extent to which social media influences how people form their opinions demonstrates why digital literacy is essential.' What types of clauses are present?", options: ["Two noun clauses and one adjective clause", "Three noun clauses", "One adjective clause and two noun clauses", "Two adjective clauses and one noun clause"], answer: "Two noun clauses and one adjective clause" },
    { question: "12. In 'Although many experts disagree on when human consciousness emerges, they acknowledge that understanding the brain, which is incredibly complex, requires further research.' Identify the clause types.", options: ["Adverb clause with embedded noun clause, noun clause, and adjective clause", "Three noun clauses", "Two adverb clauses and one adjective clause", "Two noun clauses and one adverb clause"], answer: "Adverb clause with embedded noun clause, noun clause, and adjective clause" },
    { question: "13. Analyze: 'How quantum computers process information that traditional computers cannot handle reveals why this technology, which is still developing, is revolutionary.' What combination of clauses is used?", options: ["Noun clause with embedded adjective clause, noun clause, and adjective clause", "Three adjective clauses", "Two noun clauses and one adjective clause", "Two adjective clauses and one noun clause"], answer: "Noun clause with embedded adjective clause, noun clause, and adjective clause" },
    { question: "14. In the sentence 'The way how sustainable practices impact ecosystems where biodiversity is threatened shows why conservation efforts are crucial.' Identify the clause pattern.", options: ["Two noun clauses and one adjective clause", "Three adjective clauses", "One noun clause and two adjective clauses", "Two adjective clauses and one noun clause"], answer: "Two noun clauses and one adjective clause" },
    { question: "15. Examine: 'Wherever deforestation occurs, which threatens indigenous species that have evolved over millennia, ecological balance is disrupted.' What types of clauses are present?", options: ["Adverb clause, adjective clause with embedded adjective clause", "Three adjective clauses", "Two adverb clauses and one adjective clause", "One adverb clause and two adjective clauses"], answer: "Adverb clause, adjective clause with embedded adjective clause" },
    { question: "16. In 'Whether space exploration will benefit humanity depends on how we utilize technologies that we develop for cosmic missions.' Identify the clause types.", options: ["Two noun clauses and one adjective clause", "Three noun clauses", "One noun clause and two adjective clauses", "Two adjective clauses and one noun clause"], answer: "Two noun clauses and one adjective clause" },
    { question: "17. Analyze: 'The reason why climate change accelerates faster than predicted is that human activities, which increase greenhouse gases, continue unabated.' What combination of clauses is used?", options: ["Adjective clause, noun clause, and adjective clause", "Three adjective clauses", "Two noun clauses and one adjective clause", "One noun clause and two adjective clauses"], answer: "Adjective clause, noun clause, and adjective clause" },
    { question: "18. In 'Since artificial intelligence systems learn from data that humans generate, understanding how bias affects machine learning is crucial.' Identify the clause pattern.", options: ["Adverb clause with embedded adjective clause, and noun clause", "Two adverb clauses and one noun clause", "Two adjective clauses and one noun clause", "One adverb clause and two noun clauses"], answer: "Adverb clause with embedded adjective clause, and noun clause" },
    { question: "19. Examine: 'What scientists discover about genetic modifications that affect food production influences how society views biotechnology.' What types of clauses are present?", options: ["Noun clause with embedded adjective clause, and noun clause", "Two adjective clauses and one noun clause", "Three noun clauses", "One noun clause and two adjective clauses"], answer: "Noun clause with embedded adjective clause, and noun clause" },
    { question: "20. In the sentence 'Whoever develops solutions for problems that threaten global security must consider how their innovations affect humanity.' Identify the clause pattern.", options: ["Noun clause with embedded adjective clause, and noun clause", "Three noun clauses", "Two adjective clauses and one noun clause", "One noun clause and two adjective clauses"], answer: "Noun clause with embedded adjective clause, and noun clause" }
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
