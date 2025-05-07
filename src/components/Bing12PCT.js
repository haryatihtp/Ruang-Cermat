import React, { useState, useRef } from "react";
import "../css/Bing12SPT.css";

const SimplePast = () => {
  const questionRefs = useRef([]);
  const correctAnswers = [
    { answer: "painting", explanation: "The correct verb form for the action is 'painting'." },
    { answer: "was getting", explanation: "The correct form for past continuous tense is 'was getting'." },
    { answer: "was giving", explanation: "The past continuous form of 'give' is 'was giving'." },
    { answer: "were catching", explanation: "Plural subject requires 'were catching' in past continuous." },
    { answer: "was wearing", explanation: "Past continuous of 'wear' is 'was wearing'." },
    { answer: "was watering", explanation: "For singular subject, 'was watering' is the correct form." },
    { answer: "was not confusing", explanation: "'Was not confusing' indicates a continuous negative action." },
    { answer: "traveling", explanation: "Past continuous tense for 'travel' is 'traveling'." },
    { answer: "was cooking", explanation: "The correct form for this situation is 'was cooking'." },
    { answer: "were playing", explanation: "'Were playing' matches the plural subject and context." }
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
        <h2>Past Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is the past continuous tense?</h3>
          <p>
          The past continuous tense shows a continuous action that began in the past. 
          It is the past tense version of the present continuous, which also describes ongoing actions. 
          The present and past continuous are very similar, but the past continuous uses was and were, 
          the past tense of to be.
          </p>
        </div>
      </section>

      <div className="container">
      <h1>Past continuous tense formula</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sentence patterns</th>
            <th>Formula</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(+) Positive </td>
            <td>
              Subject + (was/were) + Verb. ing + o
            </td>
            <td>- She was studying when I called her<br/>
            - They were still sitting quietly at the end of the meeting.<br/>
            - He was coming to my house</td>
          </tr>
          <tr>
            <td>(-) Negative</td>
            <td>
              Subject + (was/were) + not + verb. ing + o              
            </td>
           <td>- They were not playing football at 5 p.m.<br/>
           - He wasn’t having coffee with me this time yesterday<br/>
           - The people were not waiting
           </td>
          </tr>
          <tr>
            <td>(?) Interrogative</td>
            <td>
              Tobe (was/were) + subject + verb. ing + o
            </td>
            <td>- Were you watching TV when I arrived?<br/>
            - Wasn't she working when you saw her? <br/>
            - Were they still waiting for you?</td>
          </tr>
        </tbody>
      </table>
    </div>

    <section className="section info-section">
      <div className="icon">🧾</div>
      <div className="content">
        <h3>Verbs you cannot use in the past continuous tense</h3>
        <p>As we explain in our grammar guide, there is a certain type of verb that cannot be used in any continuous tense, including the past continuous tense. These are called stative verbs, also known as state-of-being verbs or, fittingly, non-continuous verbs.</p>
        <p>Stative verbs are less like actions and more like states or feelings. They describe continual states of mind, such as opinions, needs, or awareness. Some of the most common examples of stative verbs include 
        <i> believe, dislike, hate, involve, know, like, love, need, prefer, realize, seem, understand, want, and there's many more</i></p>
        <p>Because stative verbs are inherently continuous, it sounds odd to put them in a continuous tense. Avoid using the above words in the past continuous—you can use them in the simple past instead.</p>
        <p>Incorrect: <i> I was understanding math class until we started fractions</i> <br></br>
           Correct: I <b>understood</b> math class until we started fractions.</p>
      </div>
    </section>

    <section className="section info-section">
      <div className="icon">📖</div>
      <div className="content">
        <h3>5 past continuous tense uses and examples</h3>
        <p><b>1. An action in the past that gets interrupted</b></p>
        <p>One of the most common uses of the past continuous tense shows a past action that was interrupted by another past action.
           These are often complex sentences featuring subordinating conjunctions like <i>when, while, before, after, until, or whenever</i>. <br/>
           Put the action that was interrupted in the past continuous tense and the action that interrupts it in the simple past.</p>
        <p> Examples: <br/>
        <i>- Marta <b>was leaving</b> her apartment when she heard the thunderstorm. <br/>
        - They <b>were sleeping</b> peacefully until the alarm rang. <br/>
        - My parents arrived while I <b>was shopping</b>.</i></p>

        <p><b>2. Ongoing actions at a specified time</b></p>
        <p>When you mention an exact time in the past, use the past continuous tense if the action started before that time and continued afterward.
          If the action begins at the time mentioned, use the simple past instead.</p>
        <p>Examples: <br/>
        <i>- At midnight everyone at the party <b>was</b> still <b>having</b> fun <br/>
        - I <b>was working</b> as a cashier in October <br/>
        - By the age of nine, I <b>was training</b> to be a ninja</i></p>

        <p><b>3. Habitual actions in the past (usually with adverbs like always)</b></p>
        <p>Use the past continuous tense to talk about an action that used to be done frequently in the past but is not done in the present. 
          This form is usually used with adverbs and adverb phrases, specifically ones that suggest the action was done a lot, like <i>all the time, always, constantly, continuously and continually, forever, perpetually, and the entire time</i></p>
        <p>You can also use the main adverbs of frequency (rarely, seldom, sometimes, occasionally, often, frequently, usually).</p>
        <p>Examples:</p>
        <p><i>- As a baby, my brother <b>was always making</b> a mess <br/>
        - My first year of college, <b>I was making</b> spelling mistakes <b>all the time</b> <br/>
        - She <b>was forever trying</b> to impress her crush</i></p>

<p><b>4. Emphasizing how long a past action took</b></p>
<p>You can also use the past continuous tense to emphasize how long an action took and highlight just how much time was spent doing it. This form usually uses adverb phrases that explain the length of time, such as<i> all morning/afternoon/evening, all day/night, all week, for hours/days/weeks/months/years, and the whole time.</i></p>
<p>Examples:</p>
<p><i>- The players <b>were training all year</b> for this match.<br/>
- She<b> was gardening all morning</b> and missed the delivery.<br/>
- I<b> was trying</b> to complete the final level <b>for hours</b>.</i></p>

<p><b>5. Setting the background for a story </b></p>
<p>When telling a story (or writing one), you can use the past continuous tense to “set the scene,” or describe exactly what was happening at the beginning of your story. We use the past continuous tense because these actions were, presumably, already happening before the story began.</p>
<p>Examples:</p>
<p><i>- The birds <b>were singing</b>, and the sun <b>was shining</b>. I knew it would be a good day.</i><br/>
- Everyone at the cafe <b>was enjoying</b> their coffee. Then the stranger appeared.<br/>
- The city <b>was going about its business without knowing the aliens had arrived</b>.</p>
</div>
</section>

<section className="section example-section">
<h3>Contoh Pengisian Soal</h3>
<div className="example-question">
  <p>1. My sister … a cake when I arrived. (bake)</p>
  <p>Jawaban: <b>was baking</b></p>
</div>
<div className="example-question">
  <p>2. They … football at 3 p.m. yesterday. (play)</p>
  <p>Jawaban: <b>were playing</b></p>
</div>
<div className="example-question">
  <p>3. I … in the garden when it started raining. (sit)</p>
  <p>Jawaban: <b>was sitting</b></p>
</div>
</section>

<h3>Activity: Complete the sentences below</h3>
<div className="questions-container">
{correctAnswers.map((question, index) => (
  <div key={index} className={`question-box ${errors[index] ? "error" : ""}`}>
    <h4>Question {index + 1}</h4>
    <p>{` ${
      index === 0
        ? "Were you ... this picture at 8 o’clock yesterday? (paint)"
        : index === 1
        ? "This morning, the rain ... harder and harder. (get)"
        : index === 2
        ? "He ... his book when I called him. (read)"
        : index === 3
        ? "The children ... in the park. (catch)"
        : index === 4
        ? "She ... a red dress at the party. (wear)"
        : index === 5
        ? "He ... the plants when it started raining. (water)"
        : index === 6
        ? "She ... the instructions clearly. (not confuse)"
        : index === 7
        ? "They ... when I saw them. (travel)"
        : index === 8
        ? "The chef ... dinner while we waited. (cook)"
        : "The kids ... soccer in the park. (play)"
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
      <a href="/Kuis" class="styled-button">Quiz</a>
    </div>
</div>
);
};

export default SimplePast;