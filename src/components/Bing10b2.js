import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab2 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-container">
      <h1>Chapter 2: Simple Present Tense</h1>

      <section>
        <h2>1. What is the Simple Present Tense?</h2>
        <p>
          The simple present tense is used to describe actions or situations that are habitual, 
          repeated, or generally true. It's also used for stating facts, describing permanent 
          situations, and expressing feelings.
        </p>
        <img src="/images/simple-present.jpg" alt="Simple Present Tense examples" className="section-image" />
      </section>

      <section>
        <h2>2. Structure of Simple Present Tense</h2>
        <h3>a. Positive Sentences</h3>
        <p>Subject + Verb (base form) + Object</p>
        <p>Example: "She plays tennis every weekend."</p>

        <h3>b. Negative Sentences</h3>
        <p>Subject + do/does + not + Verb (base form) + Object</p>
        <p>Example: "They do not (don't) like spicy food."</p>

        <h3>c. Questions</h3>
        <p>Do/Does + Subject + Verb (base form) + Object?</p>
        <p>Example: "Does he speak French?"</p>

        <img src="/images/simple-present-structure.jpg" alt="Structure of Simple Present Tense" className="section-image" />
      </section>

      <section>
        <h2>3. Uses of Simple Present Tense</h2>
        <ul>
          <li>Habitual actions: "I go to the gym three times a week."</li>
          <li>General truths: "The Earth revolves around the Sun."</li>
          <li>Permanent situations: "She lives in New York."</li>
          <li>Feelings and opinions: "I think this movie is great."</li>
          <li>Scheduled future events: "The train leaves at 9 PM tonight."</li>
        </ul>
      </section>

      <section>
        <h2>4. Verb Conjugation in Simple Present</h2>
        <p>
          For most verbs, we use the base form for all subjects except third-person singular 
          (he, she, it), where we add -s or -es to the verb.
        </p>
        <table className="conjugation-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Verb (to play)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>play</td>
            </tr>
            <tr>
              <td>You</td>
              <td>play</td>
            </tr>
            <tr>
              <td>He/She/It</td>
              <td>plays</td>
            </tr>
            <tr>
              <td>We</td>
              <td>play</td>
            </tr>
            <tr>
              <td>You (plural)</td>
              <td>play</td>
            </tr>
            <tr>
              <td>They</td>
              <td>play</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>5. Special Cases and Irregular Verbs</h2>
        <h3>a. Verbs ending in -o, -ch, -sh, -ss, -x</h3>
        <p>Add -es for third-person singular: go → goes, watch → watches</p>

        <h3>b. Verbs ending in consonant + y</h3>
        <p>Change y to i and add -es: study → studies, try → tries</p>

        <h3>c. Irregular verbs</h3>
        <p>Some verbs have irregular forms in the third-person singular:</p>
        <ul>
          <li>be → is/are</li>
          <li>have → has</li>
          <li>do → does</li>
        </ul>
      </section>

      <section>
        <h2>6. Common Mistakes and Tips</h2>
        <ul>
          <li>Remember to add -s/-es for third-person singular subjects</li>
          <li>Don't use -s/-es with modal verbs (can, must, should)</li>
          <li>Be careful with subject-verb agreement in longer sentences</li>
          <li>Use "do/does" for forming questions and negative sentences</li>
          <li>Practice with different types of verbs to master irregular forms</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Ready to practice using the Simple Present Tense? <br/>
        Let's start with some exercises!"</h2>
        <button 
          className="btn-practice"
          onClick={() => window.location.href = "/SlBing10b2"}
        >
          Start Practicing Now
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b1")}
        >
          Previous: Descriptive Text
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b3")}
        >
          Next Chapter: Informal Letters
        </button>
      </div>
    </div>
  );
};

export default Bab2;