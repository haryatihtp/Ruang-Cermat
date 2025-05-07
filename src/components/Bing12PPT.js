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
    answer1: "had read",
    answer2: "had perfomed",
    answer3: "had solved",
    answer4: "had expected",
    answer5: "had met",
    answer6: "had finished",
    answer7: "had not",
    answer8: "had closed",
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
        <h2>Past Perfect Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is past perfect Tense?</h3>
          <p>
          The past perfect tense is slightly different in its structure and use in a sentence from the simple past tense and the past continuous tense.
          The past perfect tense clearly states that one action took place before another action in the past. It can also be said that the past perfect tense represents a past action that took place in the past.
          Now, take a look at the definitions of the past perfect tense given by various dictionaries.
          </p>
        </div>
      </section>

      <div className="container">
      <h1>📖 Past Perfect Tense tense formula</h1>
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
            Subject + had + past pasticiple + the rest of the secntece
            </td>
            <td>- I had completed my assignment before everyone else even started<br/>
            - I had eaten at that restaurant many times before it closed.<br/>
            - I had always liked gentle men</td>
          </tr>
          <tr>
            <td>(-) Negative</td>
            <td>
            Subject + had + not + past participle + the rest of the sentence              
            </td>
           <td>- I had not completed my assignment.<br/>
           - By the end of the meeting, they still hadn’t decided on a plan.<br/>
           - Aaron was tired because he had not eaten all day.
           </td>
          </tr>
          <tr>
            <td>(?) Interrogative</td>
            <td>
            Had + subject + past participle + the rest of the sentence <br/>
            <b>negative interrogative: </b><br/>
            Had + subject + not + past participle + the rest of the sentence <br/> (or) <br/>
            Hadn’t + subject + past participle + the rest of the sentence
            </td>
            <td>- Hadn’t you completed your assignment before everyone else even started?<br/>
            - Had the bus left by the time you arrived? <br/>
            - Where had the pirates hidden the treasure?</td>
          </tr>
        </tbody>
      </table>
    </div>

    <section className="section info-section">
      <div className="icon">🧠</div>
      <div className="content">
        <h3>Using the Past Perfect Tense – Points to Remember</h3>
        <p>The past perfect tense is similar to the present perfect tense in its structure. Like the present perfect tense, the past perfect tense also employs a helping verb (had) and the past participle of the main verb.
          The only difference is that the past perfect tense uses the same helping verb ‘had’ irrespective of the first, second or third pronoun being used as the subject.
          Past participles of regular verbs are usually the same as the past form, whereas most irregular verbs take different spellings when used in the past form and the past participle form. 
          If you know the past participles correctly, you will not find any difficulty with understanding or employing the past perfect tense in your writing and speech.</p>
      </div>
    </section>

    <section className="section info-section">
      <div className="icon">🌟</div>
      <div className="content">
        <h3>Uses of the Past Perfect Tense</h3>
        <p>The past perfect tense can be used to provide information about the following scenarios: <br/>
        • To indicate the order of more than one past event. <br/>
        • To denote the time until a certain point in the past.<br/>
        • To inform that an action was incomplete and not done at a specific time in the past when a simple past action took place.</p>
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
          Alice ... (read) all the Harry Potter novels by the time she was fifteen years old.
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
          When we were in college, we ... (perform) this song live.
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
          I ...  (complete – negative) my work when my parents arrived.
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
          The thieves ... (expect) to find the diamonds in the vault.
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
          My mom told me that we ...  (meet) Priyanka already but I don’t think so.
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
          They went to watch a movie after they ... (finish) their homework.
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
          ... she published her first poem by the time she was eight? (negative)
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
          The place ... (close) by the time we got there.
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