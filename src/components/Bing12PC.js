import React, { useState, useRef } from "react";

const PresentContinuousTense = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();

  const correctAnswers = {
    answer1: "is running",
    answer2: "are not eating",
    answer3: "are they watching",
  };

  const [feedback, setFeedback] = useState([]);

  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
    };

    // Check if all answers are provided
    if (!answers.answer1 || !answers.answer2 || !answers.answer3) {
      alert("Please answer all questions before submitting.");
      return;
    }

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
        <h2>Present Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">📘</div>
        <div className="content">
          <h3>What is Present Continuous Tense?</h3>
          <p>
            The Present Continuous Tense is used to describe actions that are happening right now or for actions that are ongoing. It is formed using the verb "to be" (am/is/are) + verb + -ing.
          </p>
        </div>
      </section>

      <div className="container">
        <h1>Present Continuous Tense Formula</h1>
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
              <td>Subject + Am/Is/Are + Verb (-ing) + Object</td>
              <td>She is reading a book.</td>
            </tr>
            <tr>
              <td>Negative</td>
              <td>Subject + Am/Is/Are + Not + Verb (-ing) + Object</td>
              <td>They are not playing soccer.</td>
            </tr>
            <tr>
              <td>Question</td>
              <td>Am/Is/Are + Subject + Verb (-ing) + Object?</td>
              <td>Are you coming to the party?</td>
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
            <p>He __________ (run) in the park right now.</p>
            <input type="text" ref={answer1Ref} placeholder="Your answer" required />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 2</h3>
            <p>They __________ (not/eat) dinner at the moment.</p>
            <input type="text" ref={answer2Ref} placeholder="Your answer" required />
          </div>

          <div className="word-card">
            <h3 className="word-title">Question 3</h3>
            <p>__________ they __________ (watch) TV right now?</p>
            <input type="text" ref={answer3Ref} placeholder="Your answer" required />
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

export default PresentContinuousTense;