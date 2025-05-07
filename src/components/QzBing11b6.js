import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Read this narrative: 'When Sarah arrived at the party, she discovered that all her friends had already left.' Which tense combination correctly explains the sequence of events?", options: ["Past Perfect and Simple Past", "Present Perfect and Past Continuous", "Past Continuous and Simple Past", "Simple Past and Present Perfect"], answer: "Past Perfect and Simple Past" },
    { question: "2. Analyze this situation: 'By the time the ambulance arrives, the patient will have been waiting for two hours.' Which tense structure best describes this future scenario?", options: ["Future Perfect Continuous", "Future Perfect", "Future Continuous", "Simple Future"], answer: "Future Perfect Continuous" },
    { question: "3. In the sentence 'The scientists have been conducting this experiment since March, and they still haven't reached a conclusion.' What does the tense usage indicate about the research?", options: ["An ongoing action that started in the past and continues to present", "A completed action in the past", "A future action", "A regular habit"], answer: "An ongoing action that started in the past and continues to present" },
    { question: "4. Consider this news report: 'By next month, the construction company will have completed the new bridge, which they had been building for three years.' Which tense combination shows the correct timeline?", options: ["Future Perfect and Past Perfect Continuous", "Present Perfect and Past Continuous", "Future Continuous and Past Perfect", "Present Perfect Continuous and Simple Past"], answer: "Future Perfect and Past Perfect Continuous" },
    { question: "5. In the context: 'While I was studying for my exam, my friend called, telling me she has been trying to reach me all day.' What do the different tenses reveal about the timing of events?", options: ["Simultaneous past actions and an action continuing to present", "All past actions", "All present actions", "Future and past actions"], answer: "Simultaneous past actions and an action continuing to present" },
    { question: "6. Examine: 'The company had been losing money for years before they finally decided to restructure.' What does the tense usage imply about the company's situation?", options: ["A long-term past action that affected a later decision", "A current ongoing situation", "A future plan", "A regular business practice"], answer: "A long-term past action that affected a later decision" },
    { question: "7. In the sentence 'By the end of this year, I will have been working here for a decade, and I still enjoy every day.' Which aspect of time is being emphasized?", options: ["Duration of an action up to a future point", "Past experience", "Present situation", "Future plans"], answer: "Duration of an action up to a future point" },
    { question: "8. Analyze: 'The patient had been showing symptoms for weeks before the doctors diagnosed the condition, and now they have developed a treatment plan.' What temporal relationship is expressed?", options: ["Past duration, past event, and present result", "All past events", "Present and future events", "Continuous present actions"], answer: "Past duration, past event, and present result" },
    { question: "9. In the context: 'As technology advances, more jobs will have been replaced by automation.' Which perspective of future change is being expressed?", options: ["Completed future actions and their impact", "Current changes", "Past developments", "Ongoing future actions"], answer: "Completed future actions and their impact" },
    { question: "10. Consider: 'She realized she had been practicing the wrong piece when her teacher told her about the actual assignment.' What does the tense structure reveal about the situation?", options: ["A past realization about a previous continuous action", "A present understanding", "A future plan", "A regular habit"], answer: "A past realization about a previous continuous action" },
    { question: "11. In the sentence 'By the time we graduate, we will have been studying English for six years, and we will have completed numerous projects.' What aspect of academic progress is highlighted?", options: ["Cumulative duration and accomplishment", "Current study habits", "Future plans", "Past experiences"], answer: "Cumulative duration and accomplishment" },
    { question: "12. Analyze: 'The environmental changes have been affecting migration patterns, and researchers predict this will have caused significant population shifts by 2030.' Which temporal relationship is shown?", options: ["Present Perfect Continuous leading to Future Perfect", "Simple Present to Future", "Past to Present", "All future events"], answer: "Present Perfect Continuous leading to Future Perfect" },
    { question: "13. In the context: 'Before the power went out, I had been working on my computer for hours, but I hadn't saved my work.' What does the sequence of tenses tell us?", options: ["Duration of past action and its consequence", "Present situation", "Future possibility", "Regular habit"], answer: "Duration of past action and its consequence" },
    { question: "14. Examine: 'Scientists have discovered that the glacier has been melting faster than they had previously calculated.' What temporal perspective is expressed?", options: ["Present Perfect discovery about Present Perfect Continuous situation compared to Past Perfect calculation", "All present actions", "Future predictions", "Past events only"], answer: "Present Perfect discovery about Present Perfect Continuous situation compared to Past Perfect calculation" },
    { question: "15. Consider: 'By next summer, the city will have been implementing the new recycling program for two years, but results have already become visible.' Which aspect of time is emphasized?", options: ["Future Perfect Continuous with Present Perfect results", "Simple future plans", "Past actions", "Present continuous activities"], answer: "Future Perfect Continuous with Present Perfect results" },
    { question: "16. In the sentence 'While we were discussing the project, I realized that we had been approaching it from the wrong angle.' What does the tense usage reveal?", options: ["Moment of realization during past continuous action about previous continuous approach", "Current situation", "Future plans", "Regular occurrence"], answer: "Moment of realization during past continuous action about previous continuous approach" },
    { question: "17. Analyze: 'The company will have invested millions in research before the new product is launched next year.' What type of future planning is expressed?", options: ["Completed future action before another future event", "Present investment", "Past research", "Ongoing future action"], answer: "Completed future action before another future event" },
    { question: "18. In the context: 'She has been training for the marathon since January, and by race day, she will have completed over 500 miles of preparation.' Which time perspective is shown?", options: ["Present Perfect Continuous leading to Future Perfect", "Simple Present to Future", "Past to Present", "All future events"], answer: "Present Perfect Continuous leading to Future Perfect" },
    { question: "19. Consider: 'The artist had been painting the mural for months before she realized she would have to modify her original design.' What does the tense combination indicate?", options: ["Past Perfect Continuous leading to past realization about future necessity", "Present situation", "Future plans", "Regular activity"], answer: "Past Perfect Continuous leading to past realization about future necessity" },
    { question: "20. Examine: 'By the time this technology becomes mainstream, developers will have been perfecting it for over a decade.' What aspect of technological development is emphasized?", options: ["Duration of development up to a future point", "Current development", "Past innovation", "Regular updates"], answer: "Duration of development up to a future point" }
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
