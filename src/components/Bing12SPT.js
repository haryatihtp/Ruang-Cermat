import React, {useState, useRef} from "react";
import "../css/Bing12SPT.css";

const SimplePast = () => {
  const questionRefs = useRef([]);
  const correctAnswers = [
    { answer: "wrote"},
    { answer: "was gave"},
    { answer: "sang" },
    { answer: "climbed" },
    { answer: "did he speak"},
    { answer: "did the girls dance" },
    { answer: "did not read" },
    { answer: "began" },
    { answer: "walked" },
    { answer: "did not watch" },
  ];

  const [answers, setAnswers] = useState(Array(correctAnswers.length).fill(""));
  const [errors, setErrors] = useState(Array(correctAnswers.length).fill(false));
  const [feedback, setFeedback] = useState(Array(correctAnswers.length).fill({ isCorrect: null, explanation: "" }));
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    const newErrors = [...errors];
    newErrors[index] = value.trim() === "";
    setErrors(newErrors);
  };

  const handleSubmit = () => {
    const newErrors = answers.map((answer) => answer.trim() === "");
    setErrors(newErrors);

    if (newErrors.some((error) => error)) {
      setFeedback(Array(correctAnswers.length).fill({ isCorrect: null, explanation: "" }));
      setScore(null);
      return;
    }

    const newFeedback = answers.map((answer, index) => {
      const isCorrect =
        answer.trim().toLowerCase() === correctAnswers[index].answer.toLowerCase();
      return {
        isCorrect,
        explanation: isCorrect ? "Correct!" : correctAnswers[index].explanation
      };
    });

    const totalScore = newFeedback.reduce((acc, item) => acc + (item.isCorrect ? 10 : 0), 0);

    setFeedback(newFeedback);
    setScore(totalScore);
  };
  return (
    <div className="container">
      <header className="header">
        <h2>Simple Past Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is the Simple Past Tense?</h3>
          <p>
          The simple past tense is a verb tense used to talk about something that happened or existed before the present. It communicates that the action or state of the verb occurred at a specific time in the past and then was completed. That specific time can be implicit or explicit.
          </p>
        </div>
      </section>

      <section className="section info-section">
  <div className="icon">💡</div>
  <div className="content">
    <h3>When to use the simple past tense?</h3>
    <p><b>1. To talk about an act that already happened</b></p>
    <p>The simple past tense usually communicates that the activity described by a verb both began and ended at a definite time in the past:</p>
    <p style={{ marginTop: '10px' }}>
      <i>Example: Paulus <b><i>admired</i></b> the way the light <b><i>glinted</i></b> off her medal.</i>
    </p>
    <p style={{ marginTop: '10px' }}>
      It is the marked beginning and ending of the action that makes the simple past different from the past continuous tense, which is used to talk about past events that happened over a period of time or in an ongoing way.
    </p>

    <p><b>2. To talk about a past state of being</b></p>
    <p>You can also use the simple past to talk about a past state of being, such as the way someone felt about something. This is often expressed with the simple past tense of the verb to be and an adjective, a noun, or a prepositional phrase. Here are some examples:</p>
    <p style={{ marginTop: '10px' }}>
      <i>-Paulus <b><i>was</i></b> proud of his achievements in the Mathematics Olympiad.</i><br/>
      <i>-The concert <b><i>was</i></b> the higlight of her week </i><br/>
      <i>-she <b><i>was</i></b> at her best the whole time </i>
    </p>

    <p><b>3. With adverbs and adverb phrases for past time</b></p>
    <p>The simple past tense is frequently used with adverbs and adverbial phrases that modify the verb by identifying specifically when in the past its action occurred. Here are the example:</p>
    <p style={{ marginTop: '10px' }}>
    <i>-The package <b>asrrived yesterday</b></i> <br/>
    <i>-<b>Last moth</b>, Paulus met his childhood friends at his birthday party</i><br/>
    <i>-i last <b>saw</b> Christine <b>in March</b></i>
    </p>
  </div>
</section>

<section className="section info-section">
      <div className="icon">💡</div>
      <div className="content">
        <h3>How to form the simple past tense</h3>
        <p>The correct verb form in the simple past tense varies based on whether it is regular or irregular</p>
        <p><b>1. Forming the simple past tense of regular verbs</b></p>
        <p style={{ marginTop: '10px' }}>
          Most verbs in the English language follow the same pattern in how they are conjugated (i.e., how they change form to show time with tense, as well as to show their other properties). These rule-following verbs are called regular verbs. To form the simple past tense of regular verbs, you add -ed to the root form of the verb. If the root form ends in e, you drop that e before adding the -ed:
        </p>
        <div className="table-container">
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>play</td>
                <td>played</td>
              </tr>
              <tr>
                <td>type</td>
                <td>typed</td>
              </tr>
              <tr>
                <td>listen</td>
                <td>listened</td>
              </tr>
              <tr>
                <td>push</td>
                <td>pushed</td>
              </tr>
              <tr>
                <td>love</td>
                <td>loved</td>
              </tr>
              <tr>
                <td>cook</td>
                <td>cooked</td>
              </tr>
            </tbody>
          </table>
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>walk</td>
                <td>walked</td>
              </tr>
              <tr>
                <td>clean</td>
                <td>cleaned</td>
              </tr>
              <tr>
                <td>smile</td>
                <td>smiled</td>
              </tr>
              <tr>
                <td>jump</td>
                <td>jumped</td>
              </tr>
              <tr>
                <td>talk</td>
                <td>talked</td>
              </tr>
              <tr>
                <td>call</td>
                <td>called</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '10px' }}>
          Example:<br/>
          -<i>Novsiana <b><i>played</i></b> the guitar at the party.</i><br/>
          -<i>I <b><i>typed</i></b> my search tearm into the search window.</i><br/>
          -<i>Veronika<b> <i>cooked</i></b> a birthday cake at the kitchen</i><br/>
          -<i>My brother<b> <i>called</i></b> her kitty because she's cute</i><br/>
        </p>

        <p><b>2. Forming the simple past tense of irregular verbs</b></p>
        <p style={{ marginTop: '10px' }}>
        Irregular verbs do not follow the simple pattern of adding -ed or -d to their root to form the simple past tense. There are nearly 200 common examples of these verbs in English, and they are conjugated in many different ways. Let’s look at some patterns irregular verbs can follow to form the simple past tense, with example sentences.
        </p>
        <div className="table-container">
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>put</td>
                <td>put</td>
              </tr>
              <tr>
                <td>cut</td>
                <td>cut</td>
              </tr>
              <tr>
                <td>set</td>
                <td>set</td>
              </tr>
              <tr>
                <td>cost</td>
                <td>cost</td>
              </tr>
              <tr>
                <td>hit</td>
                <td>hit</td>
              </tr>
              <tr>
                <td>begin</td>
                <td>began</td>
              </tr>
            </tbody>
          </table>
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>become</td>
                <td>became</td>
              </tr>
              <tr>
                <td>buy</td>
                <td>bought</td>
              </tr>
              <tr>
                <td>bring</td>
                <td>brought</td>
              </tr>
              <tr>
                <td>catch</td>
                <td>caught</td>
              </tr>
              <tr>
                <td>break</td>
                <td>broke</td>
              </tr>
              <tr>
                <td>do</td>
                <td>did</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '10px' }}>
          Example:<br/>
          -<i>i just <b><i>put</i></b> that chair there yesterday.</i><br/>
          -<i>Last week, Widya <b><i>went </i></b> to the salon, the owner <b>cut</b> her hair</i><br/>
          -<i>We<b> <i>were</i></b> in collegue together</i><br/>
          -<i>They<b> <i>taught</i></b> in adjacent classroom</i><br/>
        </p>

      </div>
    </section>
      <div className="container">
      <h1>Simple Past Tense Formula</h1>
      <table>
        <thead>
          <tr>
            <th>Sentence patterns</th>
            <th>Formula</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(+) Positive </td>
            <td>
              Subject + V2 + Object <br />
              Subject + was/were + Complement
            </td>
            <td>- I met my wife 9 years ago<br/>
            - She was very beautiful<br/>
            - I loved her more than anything
            </td>
          </tr>
          <tr>
            <td>(-) Negative</td>
            <td>
              Subject + did not + V1 + Object <br />
              Subject + was/were + not + Complement
            </td>
            <td>- I did not met my wife 9 years ago<br/>
            - She was not beautiful<br/>
            - I didn't love her</td>
          </tr>
          <tr>
            <td>(?) Interrogative</td>
            <td>
              Did + Subject + V1 + Object <br />
              Was/Were + Subject + Complement
            </td>
            <td>- Did i met your wife 9 years ago?<br/>
            - Was she beautiful? <br/>
            - did you love her, dad?
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Activity: Complete the sentences below</h3>
<div className="questions-container">
{correctAnswers.map((question, index) => (
  <div key={index} className={`question-box ${errors[index] ? "error" : ""}`}>
    <h4>Question {index + 1}</h4>
    <p>{` ${
      index === 0
        ? "My mom ...(write) a letter to aunt tina in Japan yesterday"
        : index === 1
        ? "This morning, the rain ... harder and harder. (get)"
        : index === 2
        ? "Halimah...(give) some me some stationery as my birthday present this morning"
        : index === 3
        ? "The children ... (sing) together in the choir competition last sunday (catch)"
        : index === 4
        ? "my dad and i... (climb) Papandayan mount together three moths ago "
        : index === 5
        ? "(he speak) politely to his elder brother just now"
        : index === 6
        ? "(the girls dance) beautifully on the main stage last night"
        : index === 7
        ? "The students (not read) the text to discuss yesterday's lesson"
        : index === 8
        ? "Kristina ... (not watch) the movie last night"
        : "Yesterday i saw Mei...(walk) beac"
    }`}</p>
    <input
      type="text"
      placeholder="Your answer"
      value={answers[index]}
      onChange={(e) => handleChange(index, e.target.value)}
      ref={(el) => (questionRefs.current[index] = el)}
    />
    {errors[index] && <p className="validation-error">This field is required!</p>}
    {feedback[index].isCorrect !== null && (
      <p className={`feedback ${feedback[index].isCorrect ? "correct" : "incorrect"}`}>
        {feedback[index].explanation}
      </p>
    )}
  </div>
))}
</div>

<button className="submit-button" onClick={handleSubmit}>
Submit Answers
</button>

{score !== null && (
<div className="result-section">
  <h3>Your Score: {score} / {correctAnswers.length * 10}</h3>
</div>
)}
<p>Ingin lebih banyak latihan? Ayo melatih diri dengan kuis</p>
    <div class="button-container">
      <a href="/kuis" class="styled-button">Quiz</a>
    </div>
</div>
);
};

export default SimplePast;