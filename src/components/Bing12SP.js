import React, { useState, useRef } from "react";

const SimplePresentTense = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();

  const correctAnswers = {
    answer1: "walks",
    answer2: "do not play",
    answer3: "do you like",
  };

  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
    };

    // Check if any answer is empty
    if (!answers.answer1 || !answers.answer2 || !answers.answer3) {
      setError("All questions must be answered!");
      return;
    }

    setError("");

    const newFeedback = [];

    for (let key in answers) {
      if (answers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
        newFeedback.push(`${key}: Correct`);
      } else {
        newFeedback.push(`${key}: Incorrect (Correct answer: ${correctAnswers[key]})`);
      }
    }

    setFeedback(newFeedback);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Simple Present Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">📘</div>
        <div className="content">
          <h3>What is Simple Present Tense?</h3>
          <p>
            The Simple Present Tense is used to describe habitual actions, facts, or general truths. It is one of the most basic tenses in English grammar.
          </p>
        </div>
      </section>

      <div className="container">
        <h1>Simple Present Tense Formula</h1>
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
              <td>Subject + Verb (Base Form) + Object</td>
              <td>She walks to school.</td>
            </tr>
            <tr>
              <td>Negative</td>
              <td>Subject + Do/Does + Not + Verb (Base Form) + Object</td>
              <td>They do not play basketball.</td>
            </tr>
            <tr>
              <td>Question</td>
              <td>Do/Does + Subject + Verb (Base Form) + Object?</td>
              <td>Do you like ice cream?</td>
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
            <p>She __________ (walk) to school every day.</p>
            <input type="text" ref={answer1Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 2</h3>
            <p>They __________ (not/play) basketball on weekdays.</p>
            <input type="text" ref={answer2Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 3</h3>
            <p>__________ you __________ (like) ice cream?</p>
            <input type="text" ref={answer3Ref} placeholder="Your answer" />
          </div>

          <button onClick={handleSubmit}>Submit Answers</button>
          {error && <p className="error">{error}</p>}
        </div>

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

export default SimplePresentTense;