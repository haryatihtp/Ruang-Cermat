import React, { useState, useRef } from "react";

const PresentPerfectContinuousTense = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();

  const correctAnswers = {
    answer1: "has been running",
    answer2: "have been studying",
    answer3: "has she been working",
  };

  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
    };

    // Check if all answers are provided
    if (Object.values(answers).some((value) => value === "")) {
      setError("All questions must be answered before submission.");
      setFeedback([]);
      return;
    }

    setError("");

    const newFeedback = Object.entries(answers).map(([key, value]) => {
      if (value.toLowerCase() === correctAnswers[key].toLowerCase()) {
        return `${key}: Correct`;
      }
      return `${key}: Incorrect (Correct answer: ${correctAnswers[key]})`;
    });

    setFeedback(newFeedback);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Present Perfect Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">📘</div>
        <div className="content">
          <h3>What is Present Perfect Continuous Tense?</h3>
          <p>
            The Present Perfect Continuous Tense is used to describe actions
            that started in the past and are still continuing or have recently
            stopped. It is formed using "has/have been" + verb + -ing.
          </p>
        </div>
      </section>

      <div className="container">
        <h1>Present Perfect Continuous Tense Formula</h1>
        <table>
          <thead>
            <tr>
              <th>Sentence Type</th>
              <th>Formula</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Positive</td>
              <td>Subject + Has/Have + Been + Verb (-ing) + Object</td>
              <td>He has been running for two hours.</td>
            </tr>
            <tr>
              <td>Negative</td>
              <td>Subject + Has/Have + Not + Been + Verb (-ing) + Object</td>
              <td>They have not been playing football.</td>
            </tr>
            <tr>
              <td>Question</td>
              <td>Has/Have + Subject + Been + Verb (-ing) + Object?</td>
              <td>Have they been working on the project?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="activity-section">
        <h2>Practice Exercise</h2>
        <p>Fill in the blanks with the correct form of the verb in parentheses:</p>
        <div className="word-list">
          <div className="word-card">
            <h3 className="word-title">Question 1</h3>
            <p>He __________ (run) for two hours.</p>
            <input type="text" ref={answer1Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 2</h3>
            <p>We __________ (study) since morning.</p>
            <input type="text" ref={answer2Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 3</h3>
            <p>__________ she __________ (work) on the project all day?</p>
            <input type="text" ref={answer3Ref} placeholder="Your answer" />
          </div>

          <button onClick={handleSubmit}>Submit Answers</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="feedback">
          {feedback.length > 0 && (
            <ul>
              {feedback.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default PresentPerfectContinuousTense;