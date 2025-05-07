import React, { useState, useRef } from "react";

const PresentPerfectTense = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();

  const correctAnswers = {
    answer1: "has visited",
    answer2: "have not finished",
    answer3: "have/seen",
  };

  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
    };

    if (!answers.answer1 || !answers.answer2 || !answers.answer3) {
      setError("All questions must be answered.");
      setFeedback([]);
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
        <h2>Present Perfect Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">📘</div>
        <div className="content">
          <h3>What is Present Perfect Tense?</h3>
          <p>
            The Present Perfect Tense is used to describe actions that occurred at an unspecified time in the past or actions that started in the past and continue to the present. It is formed using the verb "to have" (has/have) + past participle of the verb.
          </p>
        </div>
      </section>

      <div className="container">
        <h1>Present Perfect Tense Formula</h1>
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
              <td>Subject + Has/Have + Past Participle + Object</td>
              <td>She has visited Paris.</td>
            </tr>
            <tr>
              <td>Negative</td>
              <td>Subject + Has/Have + Not + Past Participle + Object</td>
              <td>We have not finished our homework.</td>
            </tr>
            <tr>
              <td>Question</td>
              <td>Has/Have + Subject + Past Participle + Object?</td>
              <td>Have they seen the movie?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="activity-section">
        <h2>Practice Exercise</h2>
        <p>Fill in the blanks with the correct form of the verb in parentheses:</p>
        {error && <p className="error-message">{error}</p>}
        <div className="word-list">
          <div className="word-card">
            <h3 className="word-title">Question 1</h3>
            <p>She __________ (visit) Paris several times.</p>
            <input type="text" ref={answer1Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 2</h3>
            <p>We __________ (not/finish) our homework yet.</p>
            <input type="text" ref={answer2Ref} placeholder="Your answer" />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 3</h3>
            <p>__________ they __________ (see) the movie already?</p>
            <input type="text" ref={answer3Ref} placeholder="Your answer" />
          </div>

          <button onClick={handleSubmit}>Submit Answers</button>
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

export default PresentPerfectTense;