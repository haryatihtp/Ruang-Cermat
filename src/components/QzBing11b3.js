import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Read this scenario: 'A student finds a wallet in the school corridor.' What would be the most ethical course of action the student should take?", options: ["The student must immediately submit it to the lost and found office", "The student might keep it if no one claims it", "The student could try to find the owner first", "The student should ignore it"], answer: "The student must immediately submit it to the lost and found office" },
    { question: "2. In a scientific research context: 'Scientists discover unusual patterns in climate data.' What modal expression best describes their level of certainty?", options: ["The findings must be indicating climate change", "The data might suggest a new pattern", "The results could be interpreted differently", "The research should be continued"], answer: "The data might suggest a new pattern" },
    { question: "3. Consider this environmental issue: 'Plastic waste in oceans is increasing.' What modal expression best conveys the urgency of action?", options: ["Governments must implement strict regulations immediately", "People might want to reduce plastic use", "Companies could develop alternatives", "We should consider recycling more"], answer: "Governments must implement strict regulations immediately" },
    { question: "4. In a medical emergency scenario: 'A person shows symptoms of a heart attack.' What modal verb best expresses the necessary action?", options: ["Someone must call an ambulance immediately", "We might need to check their pulse", "They could rest for a while", "People should stay calm"], answer: "Someone must call an ambulance immediately" },
    { question: "5. Analyze this social situation: 'A friend shares confidential information with you.' What would be the most appropriate response?", options: ["You must keep it completely confidential", "You might tell one trusted person", "You could share it if necessary", "You should decide later"], answer: "You must keep it completely confidential" },
    { question: "6. In a professional context: 'An employee discovers a security breach.' What modal expression best describes their obligation?", options: ["They must report it to management immediately", "They might want to investigate first", "They could inform their colleagues", "They should wait and see"], answer: "They must report it to management immediately" },
    { question: "7. Consider this academic scenario: 'A student suspects another student of cheating.' What would be the most ethical action?", options: ["The student must inform the teacher directly", "The student might talk to the suspected cheater first", "The student could ignore it", "The student should discuss it with friends"], answer: "The student must inform the teacher directly" },
    { question: "8. In a technological context: 'A company discovers a flaw in their product.' What modal verb best expresses their responsibility?", options: ["They must recall all affected products", "They might need to investigate further", "They could issue a warning", "They should consider options"], answer: "They must recall all affected products" },
    { question: "9. Analyze this environmental scenario: 'A factory is polluting a river.' What modal expression best describes the necessary action?", options: ["Authorities must shut down the factory immediately", "They might need to investigate first", "They could issue a warning", "They should monitor the situation"], answer: "Authorities must shut down the factory immediately" },
    { question: "10. In a safety context: 'A building shows signs of structural damage.' What modal verb best expresses the required action?", options: ["The building must be evacuated immediately", "Engineers might need to inspect it", "People could use alternative entrances", "Management should make a plan"], answer: "The building must be evacuated immediately" },
    { question: "11. Consider this ethical dilemma: 'You witness cyberbullying on social media.' What would be the most appropriate response?", options: ["You must report it to the platform administrators", "You might want to confront the bully", "You could ignore it", "You should tell your friends"], answer: "You must report it to the platform administrators" },
    { question: "12. In a research context: 'Scientists observe unexpected results.' What modal expression best describes their next step?", options: ["They must verify their findings through repeated tests", "They might have made a mistake", "They could publish immediately", "They should wait for more data"], answer: "They must verify their findings through repeated tests" },
    { question: "13. Analyze this workplace scenario: 'An employee notices unsafe working conditions.' What modal verb best expresses their duty?", options: ["They must report it to safety officials", "They might want to fix it themselves", "They could inform colleagues", "They should avoid that area"], answer: "They must report it to safety officials" },
    { question: "14. In a healthcare context: 'A nurse observes a doctor making a potential mistake.' What would be the most appropriate action?", options: ["The nurse must intervene immediately", "The nurse might want to discuss it later", "The nurse could ignore it", "The nurse should consult others"], answer: "The nurse must intervene immediately" },
    { question: "15. Consider this educational scenario: 'A student struggles with mental health issues.' What modal expression best describes the school's responsibility?", options: ["The school must provide immediate support", "Teachers might need to adjust deadlines", "Counselors could be available", "Parents should be notified"], answer: "The school must provide immediate support" },
    { question: "16. In a public safety context: 'A person notices suspicious behavior.' What modal verb best expresses civic duty?", options: ["Citizens must report suspicious activities", "People might want to investigate", "Someone could inform others", "We should stay alert"], answer: "Citizens must report suspicious activities" },
    { question: "17. Analyze this environmental case: 'A community faces water shortage.' What modal expression best describes the necessary action?", options: ["Authorities must implement water conservation measures", "People might need to reduce usage", "Companies could help", "Everyone should be concerned"], answer: "Authorities must implement water conservation measures" },
    { question: "18. In a digital security context: 'A user receives suspicious emails.' What would be the most appropriate response?", options: ["Users must never click suspicious links", "People might want to verify the sender", "They could delete without reading", "Everyone should be careful"], answer: "Users must never click suspicious links" },
    { question: "19. Consider this social responsibility scenario: 'A person witnesses discrimination.' What modal verb best expresses moral obligation?", options: ["Witnesses must speak up against discrimination", "People might want to intervene", "Someone could report it", "We should feel concerned"], answer: "Witnesses must speak up against discrimination" },
    { question: "20. In a professional ethics context: 'An accountant finds financial irregularities.' What modal expression best describes their professional duty?", options: ["They must report all irregularities immediately", "They might need more evidence", "They could consult colleagues", "They should investigate further"], answer: "They must report all irregularities immediately" }
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
