import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Analyze the sentence: 'Despite the heavy rain, the outdoor event continued successfully; moreover, attendance exceeded expectations.' Which sentence connector best demonstrates the progression of ideas?", options: ["Moreover - showing addition", "However - showing contrast", "Therefore - showing result", "Meanwhile - showing time"], answer: "Moreover - showing addition" },
    { question: "2. In academic writing, which sentence connector would best join these ideas? 'Renewable energy sources are becoming more affordable. _____, many countries still hesitate to fully adopt them due to infrastructure costs.'", options: ["Nevertheless", "Furthermore", "Similarly", "Subsequently"], answer: "Nevertheless" },
    { question: "3. Examine this text: 'The research showed concerning results. _____, immediate action was required. _____, a new protocol was implemented.' Which pair of connectors best maintains logical flow?", options: ["Consequently... Furthermore", "However... Meanwhile", "Therefore... Nevertheless", "Similarly... Moreover"], answer: "Consequently... Furthermore" },
    { question: "4. 'The company invested in new technology; _____, productivity increased by 50%; _____, employee satisfaction improved.' Which connector pair best shows the cause-effect relationship?", options: ["As a result... additionally", "However... moreover", "Meanwhile... furthermore", "Similarly... therefore"], answer: "As a result... additionally" },
    { question: "5. Analyze: 'The government implemented strict regulations. _____, environmental pollution decreased significantly.' Which connector best emphasizes the cause-effect relationship while maintaining academic tone?", options: ["Consequently", "Besides", "Similarly", "Meanwhile"], answer: "Consequently" },
    { question: "6. In the passage: 'Online learning platforms offer flexibility. _____, they require strong self-discipline. _____, technical issues can pose challenges.' Which connector combination best shows contrast and addition?", options: ["However... Furthermore", "Similarly... Moreover", "Therefore... Besides", "Meanwhile... Consequently"], answer: "However... Furthermore" },
    { question: "7. 'The experiment yielded unexpected results; _____, the researchers had to revise their hypothesis.' Which connector best maintains academic sophistication while showing logical consequence?", options: ["Thus", "Also", "Meanwhile", "Similarly"], answer: "Thus" },
    { question: "8. Which sentence connector would best join these contrasting ideas? 'The new policy aimed to improve efficiency. _____, it created unforeseen complications in the workflow.'", options: ["Nonetheless", "Furthermore", "Similarly", "Subsequently"], answer: "Nonetheless" },
    { question: "9. 'The company implemented sustainable practices. _____, they reduced waste. _____, they improved their public image.' Which logical connectors best show the sequence of positive outcomes?", options: ["First... Subsequently", "However... Moreover", "Meanwhile... Therefore", "Similarly... Thus"], answer: "First... Subsequently" },
    { question: "10. Analyze: 'The research methodology was flawed. _____, the results cannot be considered reliable.' Which connector best emphasizes the logical conclusion?", options: ["Therefore", "Furthermore", "Meanwhile", "Similarly"], answer: "Therefore" },
    { question: "11. In academic writing, which connector best joins these ideas? 'The study had a small sample size. _____, the findings may not be generalizable to larger populations.'", options: ["Consequently", "Furthermore", "Similarly", "Meanwhile"], answer: "Consequently" },
    { question: "12. 'The implementation was successful; _____, it required significant resources; _____, the benefits outweighed the costs.' Which connector pair best shows contrast and conclusion?", options: ["However... nevertheless", "Similarly... therefore", "Meanwhile... thus", "Furthermore... consequently"], answer: "However... nevertheless" },
    { question: "13. Which connector best joins these ideas while maintaining academic tone? 'The experiment showed promising results. _____, further research is needed to confirm the findings.'", options: ["Nevertheless", "Similarly", "Meanwhile", "Likewise"], answer: "Nevertheless" },
    { question: "14. 'The company faced financial challenges. _____, they maintained their commitment to quality. _____, customer satisfaction remained high.' Which logical sequence best fits?", options: ["Nevertheless... Moreover", "Similarly... Therefore", "Meanwhile... Thus", "However... Subsequently"], answer: "Nevertheless... Moreover" },
    { question: "15. Analyze: 'The new technology improved efficiency. _____, it reduced operational costs. _____, employee satisfaction increased.' Which connector pair best shows addition and result?", options: ["Furthermore... Consequently", "However... Moreover", "Meanwhile... Therefore", "Similarly... Thus"], answer: "Furthermore... Consequently" },
    { question: "16. Which connector would best join these contrasting ideas in academic writing? 'The solution seemed promising. _____, unexpected complications arose during implementation.'", options: ["However", "Furthermore", "Similarly", "Meanwhile"], answer: "However" },
    { question: "17. 'The research revealed important findings. _____, it raised new questions. _____, additional studies were proposed.' Which connector combination best shows logical progression?", options: ["Moreover... Subsequently", "However... Similarly", "Meanwhile... Therefore", "Thus... Furthermore"], answer: "Moreover... Subsequently" },
    { question: "18. In formal writing, which connector best joins these ideas? 'The project exceeded its timeline. _____, it stayed within budget constraints.'", options: ["Nevertheless", "Similarly", "Meanwhile", "Likewise"], answer: "Nevertheless" },
    { question: "19. 'The implementation had initial challenges. _____, the team adapted quickly. _____, the project succeeded.' Which connector pair best shows progression and result?", options: ["However... Ultimately", "Similarly... Therefore", "Meanwhile... Thus", "Furthermore... Moreover"], answer: "However... Ultimately" },
    { question: "20. Analyze: 'The study's methodology was robust. _____, its findings significantly contributed to the field. _____, new research directions emerged.' Which logical sequence best fits?", options: ["Consequently... Furthermore", "However... Moreover", "Meanwhile... Therefore", "Similarly... Thus"], answer: "Consequently... Furthermore" }
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
