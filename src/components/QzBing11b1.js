import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze the sentence: 'The athlete gracefully executed the complex routine while simultaneously maintaining perfect balance.' How does the adverb modify multiple actions in this context?", options: ["Modifies both execution and balance", "Only modifies execution", "Only modifies balance", "Doesn't modify any action"], answer: "Modifies both execution and balance" },
    { question: "2. In the sentence 'She confidently presented her innovative solution, subsequently answering all questions thoroughly.' What is the relationship between the multiple adverbs used?", options: ["They show sequence and manner", "They only show time", "They show place", "They show frequency"], answer: "They show sequence and manner" },
    { question: "3. Consider: 'The experiment unexpectedly yielded dramatically different results.' How do the adverbs work together to enhance meaning?", options: ["They create layered emphasis", "They contradict each other", "They are redundant", "They weaken the meaning"], answer: "They create layered emphasis" },
    { question: "4. Evaluate: 'Historically, scientists rarely successfully replicated this phenomenon.' What is the significance of the adverb placement in this sentence?", options: ["Creates a chronological and frequency context", "Only shows historical context", "Only shows frequency", "Shows location"], answer: "Creates a chronological and frequency context" },
    { question: "5. In 'The team worked collaboratively yet independently,' how does this paradoxical use of adverbs affect the meaning?", options: ["Shows complex work dynamics", "Creates confusion", "Contradicts the meaning", "Weakens the statement"], answer: "Shows complex work dynamics" },
    { question: "6. Analyze: 'She deliberately spoke softly, effectively commanding everyone's attention.' How do the adverbs create irony?", options: ["Contrasts intention with method", "Shows similar actions", "Indicates time sequence", "Describes location"], answer: "Contrasts intention with method" },
    { question: "7. 'The solution naturally evolved organically.' Why might this combination of adverbs be considered redundant or effective?", options: ["Reinforces the natural process", "Creates unnecessary repetition", "Changes the meaning", "Weakens the statement"], answer: "Reinforces the natural process" },
    { question: "8. How does the placement of adverbs affect meaning: 'Technically speaking, the project successfully failed spectacularly'?", options: ["Creates intentional irony", "Shows only success", "Indicates only failure", "Describes technical aspects"], answer: "Creates intentional irony" },
    { question: "9. In 'Globally, locally sourced products increasingly gain popularity,' how do the contrasting adverbs contribute to the meaning?", options: ["Shows global-local connection", "Only shows location", "Only shows time", "Shows contradiction"], answer: "Shows global-local connection" },
    { question: "10. Analyze: 'The artist intuitively yet methodically approached the canvas.' What is the purpose of these contrasting adverbs?", options: ["Balance creativity and structure", "Show confusion", "Indicate time", "Show location"], answer: "Balance creativity and structure" },
    { question: "11. 'The technology rapidly but efficiently processes data.' How does this combination of adverbs affect the meaning?", options: ["Emphasizes speed and quality", "Shows only speed", "Shows only efficiency", "Creates confusion"], answer: "Emphasizes speed and quality" },
    { question: "12. In 'Previously unsustainably managed resources are now being carefully controlled,' how do the adverbs show transformation?", options: ["Contrasts past and present methods", "Only shows past", "Only shows present", "Doesn't show change"], answer: "Contrasts past and present methods" },
    { question: "13. How do the adverbs function in: 'The solution theoretically works perfectly but practically fails miserably'?", options: ["Highlights theory-practice gap", "Shows only success", "Shows only failure", "Indicates time"], answer: "Highlights theory-practice gap" },
    { question: "14. Analyze: 'She unconsciously yet systematically developed her style.' What complex meaning do these adverbs create?", options: ["Natural and structured development", "Only natural development", "Only structured approach", "Random development"], answer: "Natural and structured development" },
    { question: "15. In 'The program automatically intelligently adapts,' how do these adverbs work together?", options: ["Shows smart automation", "Only shows automation", "Only shows intelligence", "Shows manual process"], answer: "Shows smart automation" },
    { question: "16. 'The team worked remotely yet cohesively.' How do these adverbs challenge traditional workplace assumptions?", options: ["Demonstrates modern effectiveness", "Shows isolation", "Indicates disorder", "Shows physical presence"], answer: "Demonstrates modern effectiveness" },
    { question: "17. Analyze the adverbs in: 'The system consistently but flexibly maintains standards.' What paradox is presented?", options: ["Stability with adaptability", "Only consistency", "Only flexibility", "No clear meaning"], answer: "Stability with adaptability" },
    { question: "18. How do the adverbs function in: 'Environmentally consciously produced goods economically benefit communities'?", options: ["Links sustainability and economics", "Only shows environmental impact", "Only shows economic impact", "Shows no connection"], answer: "Links sustainability and economics" },
    { question: "19. In 'The solution elegantly yet affordably addresses the problem,' what relationship do the adverbs establish?", options: ["Combines quality and practicality", "Shows only elegance", "Shows only cost", "Creates confusion"], answer: "Combines quality and practicality" },
    { question: "20. Examine: 'Traditionally digitally enhanced artwork.' Why is this combination of adverbs significant in modern context?", options: ["Blends old and new approaches", "Only shows tradition", "Only shows technology", "Creates contradiction"], answer: "Blends old and new approaches" }
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
