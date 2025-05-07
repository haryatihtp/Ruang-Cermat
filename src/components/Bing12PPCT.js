import React, {useState, useRef} from "react";
import "../css/Bing12SPT.css";

const SimplePast = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();
  const answer4Ref = useRef();
  const answer5Ref = useRef();
  const answer6Ref = useRef();
  const answer7Ref = useRef();
  const answer8Ref = useRef();

  // Jawaban yang benar
  const correctAnswers = {
    answer1: "had been working",
    answer2: "had been functioning",
    answer3: "had been singing",
    answer4: "had been barking",
    answer5: "had been asking",
    answer6: "had been living",
    answer7: "had ben running",
    answer8: "had been suggesting",
  };

  // Menyimpan hasil pengecekan jawaban
  const [feedback, setFeedback] = useState([]);

  // Fungsi untuk memeriksa jawaban
  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
      answer4: answer4Ref.current.value.trim(),
      answer5: answer5Ref.current.value.trim(),
      answer6: answer6Ref.current.value.trim(),
      answer7: answer7Ref.current.value.trim(),
      answer8: answer8Ref.current.value.trim(),
    };

    const newFeedback = [];

    // Memeriksa setiap jawaban
    for (let key in answers) {
      if (answers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
        newFeedback.push(`${key}: Correct`);
      } else {
        newFeedback.push(`${key}: Incorrect (Correct answer: ${correctAnswers[key]})`);
      }
    }

    setFeedback(newFeedback); // Mengupdate feedback dengan hasil pemeriksaan
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Past Perfect Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is past perfect continuous tense?</h3>
          <p>
          The past perfect continuous tense is generally used in a sentence to depict an action that started at some time in the past and continued until a specific time in the past.
          It is also called the past perfect progressive tense since it refers to an action that had been progressing until a certain point in the past. Now, have a look at the different definitions of the past perfect continuous tense provided by various dictionaries.
          </p>
        </div>
      </section>

      <div className="container">
      <h1>📖 Past Perfect Continuous Tense Tense formula</h1>
      <table>
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
            Subject + had + been + present participle + the rest of the sentence
            </td>
            <td>- I had been cooking my mom’s favourite dish when she walked into the kitchen.<br/>
            - Grace had been working at the international hospital for five years when he got the promotion.<br/>
            - Martha had been walking three miles a day before she broke her leg.</td>
          </tr>
          <tr>
            <td>(-) Negative</td>
            <td>
            Subject + had + not + been + present participle + the rest of the sentence             
            </td>
           <td>- We hadn't been living there long.<br/>
           - They hadn't been studying very hard.<br/>
           - You had not been waiting there for more than two hours when she finally arrived.
           </td>
          </tr>
          <tr>
            <td>(?) Interrogative</td>
            <td>
            Had + subject + been + present participle + the rest of the sentence<br/>
            <b>negative interrogative: </b><br/>
            Had + subject + not + been + present participle + the rest of the sentence <br/> (or) <br/>
            Hadn’t + subject + been + present participle + the rest of the sentence
            </td>
            <td>- Had the pilot been drinking before the crash?<br/>
            - Had you been waiting there for more than two hours when she finally arrived? <br/>
            - Why had she been crying when you saw her?</td>
          </tr>
        </tbody>
      </table>
    </div>

    <section className="section info-section">
      <div className="icon">🧠</div>
      <div className="content">
        <h3>Rules to be Followed when Using the Past Perfect Continuous Tense</h3>
        <p>Similar to the present perfect continuous tense, the past perfect continuous tense also consists of two helping verbs and a main verb. 
          Among the three verbs that represent the tense, the first helping verb should always be ‘had’ followed by ‘been’, which is in turn followed by the present participle of the main verb. 
          This rule holds true when the sentence is a positive sentence. In case you are employing the tense form in an interrogative sentence, 
          the helping verb ‘had’ comes first followed by the subject which is in turn followed by the the helping verb ‘been’ and the present participle of the main verb.
          For a negative sentence, ‘not’ is placed after the first auxiliary verb ‘had’ and for a negative interrogative sentence, you can either use the contraction ‘hadn’t’ or place ‘not’ after the subject.</p>
      </div>
    </section>

    <section className="section info-section">
      <div className="icon">🌟</div>
      <div className="content">
        <h3>Uses of the Past Perfect Continuous Tense</h3>
        <p>The past perfect continuous tense is used to perform two main functions. They are: <br/>
        • To denote an action that has been the cause of another action or event in the past. <br/>
        • To represent an action that started at some point in the past and continued or progressed till a particular time in the recent past.<br/></p>
      </div>
    </section>

    <section className="activity-section">
      <h2>Activity</h2>
      <p>
      Rewrite the following sentences using past perfect tense.</p>
      <div className="word-list">
        <div className="word-card">
          <h3 className="word-title nailed">Question 1</h3>
          <p className="word-meaning">
          Derrick ... (work) at the hospital for over two years before he left for Spain.
          </p>
          <input
            type="text"
            ref={answer1Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title beauty-pageant">Question 2</h3>
          <p className="word-meaning">
          I don’t think the place ... (function) well for a very long time before it shut down.
          </p>
          <input
            type="text"
            ref={answer2Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title mind-blowing">Question 3</h3>
          <p className="word-meaning">
          Theena ... (sing) for an hour before her mom arrived.
          </p>
          <input
            type="text"
            ref={answer3Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title alarmed">Question 4</h3>
          <p className="word-meaning">
          The dogs ... (bark) continuously until the owner finally came home and fed them.
          </p>
          <input
            type="text"
            ref={answer4Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title recruitment">Question 5</h3>
          <p className="word-meaning">
          My brother ... (ask) me to buy him an Axon helmet for years before I could somehow make some money to buy him one.
          </p>
          <input
            type="text"
            ref={answer5Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title upset">Question 6</h3>
          <p className="word-meaning">
          They ... (live) in New York for four years when they had to leave due to personal reasons.
          </p>
          <input
            type="text"
            ref={answer6Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title mean">Question 7</h3>
          <p className="word-meaning">
          He ... (run) around for hours looking for my dog before I found him with my neighbour at the park.
          </p>
          <input
            type="text"
            ref={answer7Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title not-visible">Question 8</h3>
          <p className="word-meaning">
          My cousins ... (suggest) that we called the police when we found the burglars.
          </p>
          <input
            type="text"
            ref={answer8Ref}
            placeholder="Your answer"
          />
        </div>

        {/* Tombol submit untuk menampilkan hasil */}
        <button onClick={handleSubmit}>Submit Answers</button>
      </div>

      {/* Menampilkan hasil feedback */}
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
    <p>Ingin lebih banyak latihan? Ayo melatih diri dengan kuis</p>
    <div class="button-container">
      <a href="/kuis" class="styled-button">Quiz</a>
    </div>
  </div>
  );
};

export default SimplePast;