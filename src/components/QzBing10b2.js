import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the main purpose of a descriptive text?", options: ["To entertain the readers.", "To describe a person, place, or thing.", "To explain how to do something.", "To tell a story."], answer: "To describe a person, place, or thing" },
    { question: "2. Which is an example of a descriptive text title?", options: ["How I Spent My Holiday", "The Beauty of Mount Bromo", "My Future Plan", "How to Make a Paper Boat"], answer: "The Beauty of Mount Bromo" },
    { question: "3. What tense is commonly used in descriptive text?", options: ["Present tense.", "Past tense.", "Future tense.", "Past perfect tense."], answer: "Present tense" },
    { question: "4. Identify the descriptive sentence:", options: ["He went to the park yesterday.", "She is tall and has long black hair.", "They will meet us tomorrow.", "Can you help me?"], answer: "She is tall and has long black hair" },
    { question: "5. The following is NOT a characteristic of a descriptive text:", options: ["Contains detailed information.", "Uses adjectives.", "Describes events in sequence.", "Focuses on one subject."], answer: "Describes events in sequence" },
    { question: "6. Why do authors use sensory details in descriptive texts?", options: ["To create a vivid image in the reader's mind.", "To confuse the reader.", "To make the text more difficult to understand.", "To summarize the text."], answer: "To create a vivid image in the reader's mind" },
    { question: "7. Analyze the sentence: 'The lake glistened under the golden rays of the sun.' What makes this an effective description?", options: ["It uses complex vocabulary.", "It includes sensory details.", "It uses numerical data.", "It is written in past tense."], answer: "It includes sensory details" },
    { question: "8. Which strategy would be most effective to improve a descriptive text?", options: ["Adding more adjectives and sensory details.", "Reducing the word count.", "Using only technical terms.", "Avoiding imagery and metaphors."], answer: "Adding more adjectives and sensory details" },
    { question: "9. Evaluate this statement: 'Descriptive text can only describe physical appearance.' Is this statement true or false? Why?", options: ["True, because descriptive text focuses on looks.", "False, because it can describe emotions and atmosphere too.", "True, because it avoids abstract ideas.", "False, because it only describes facts."], answer: "False, because it can describe emotions and atmosphere too" },
    { question: "10. What is the impact of descriptive text on the reader's understanding?", options: ["It makes the reader feel disconnected.", "It allows the reader to visualize the subject clearly.", "It forces the reader to make guesses.", "It makes the text harder to follow."], answer: "It allows the reader to visualize the subject clearly" },
    { question: "11. Analyze the sentence: 'The ancient castle stood majestically on the hill, its weathered stones telling tales of centuries past.' What techniques make this description engaging?", options: ["Use of imagery and personification.", "Focus on factual details.", "Use of technical language.", "Avoidance of sensory details."], answer: "Use of imagery and personification" },
    { question: "12. Which revision improves the sentence: 'The flower is pretty.'?", options: ["The flower is colorful and has a pleasant fragrance.", "The flower is nice.", "The flower is okay.", "The flower is fine."], answer: "The flower is colorful and has a pleasant fragrance." },
    { question: "13. Why might an author describe the setting in great detail at the beginning of a story?", options: ["To confuse the reader.", "To establish the mood and context.", "To reduce the word count.", "To avoid character development."], answer: "To establish the mood and context" },
    { question: "14. Evaluate this statement: 'Descriptive texts are always objective.' Is this true or false? Why?", options: ["True, because descriptions are factual.", "False, because authors often include subjective interpretations.", "True, because they avoid opinions.", "False, because they only describe physical traits."], answer: "False, because authors often include subjective interpretations." },
    { question: "15. Which sentence best uses sensory details to enhance the description?", options: ["The cake is good.", "The moist chocolate cake melted in my mouth, leaving a rich, velvety aftertaste.", "The cake is okay.", "The cake is brown."], answer: "The moist chocolate cake melted in my mouth, leaving a rich, velvety aftertaste." },
    { question: "16. Analyze the effectiveness of this sentence: 'The forest was dark.' How can it be improved?", options: ["Add sensory details like sounds, smells, and visual imagery.", "Leave it as is.", "Make it shorter.", "Use only technical terms."], answer: "Add sensory details like sounds, smells, and visual imagery." },
    { question: "17. Identify the impact of metaphors in descriptive text:", options: ["They confuse the reader.", "They create deeper connections and vivid imagery.", "They reduce clarity.", "They limit the scope of the description."], answer: "They create deeper connections and vivid imagery." },
    { question: "18. Why is specificity important in descriptive texts?", options: ["It makes the description more engaging and clear.", "It confuses the reader.", "It reduces the overall quality.", "It adds unnecessary details."], answer: "It makes the description more engaging and clear." },
    { question: "19. How does the choice of adjectives impact a descriptive text?", options: ["They clarify the tone and enhance imagery.", "They make the text harder to read.", "They are unnecessary.", "They limit the scope of the text."], answer: "They clarify the tone and enhance imagery." },
    { question: "20. What is the role of contrast in a descriptive text?", options: ["It highlights differences and adds depth.", "It confuses the reader.", "It simplifies the description.", "It avoids vivid imagery."], answer: "It highlights differences and adds depth." },
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