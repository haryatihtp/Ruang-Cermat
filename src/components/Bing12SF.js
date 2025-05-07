import React, {useState, useRef} from "react";
import '../css/Bing12SF.css';

const SimpleFuture = () => {
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
    answer1: "Arrive",
    answer2: "Win",
    answer3: "Continuing",
    answer4: "Be here",
    answer5: "will not snitch",
    answer6: "will forget",
    answer7: "will take",
    answer8: "will tell",
  };

  const [feedback, setFeedback] = useState([]);

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
        <h2>Simple Future Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>Did You Know?</h3>
          <p>
          Simple future tense is a form of tense to indicate an event that has not yet started and has just occurred in the future or in the future.
          So, this tense refers to the action that will be taken after now. In addition to expressing this, you can also use the simple future tense to express a prediction and desire.
          </p>
        </div>
      </section>

      <div className="container">
      <h1>Rumus Simple Future Tense</h1>
      <table>
        <thead>
          <tr>
            <th>Pola Kalimat</th>
            <th>Rumus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(+) Affirmative/Positif</td>
            <td>
              Subject + will/shall + V1 + Object <br />
              Subject + to be (am/is/are) + going to + V1
            </td>
          </tr>
          <tr>
            <td>(-) Negative/Negatif</td>
            <td>
              Subject + will/shall + not + V1 + Object <br />
              Subject + to be (am/is/are) + not + going to + V1
            </td>
          </tr>
          <tr>
            <td>(?) Interrogative/Tanya</td>
            <td>
              Will/shall + Subject + V1 + Object <br />
              To be (am/is/are) + Subject + going to + V1
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      <section className="section characteristics">
        <div className="icon">🎧</div>
        <div className="content">
          <h3>Use of will/shall</h3>
          <p><strong>1. Stating an event that will occur in the future</strong></p>
          <p>For this part, you can use the positive sentence formula with the will modal as the main function of the simple future tense. Examples of sentences include:</p>
          <p>Beni will go to Turkey next month. (Beni akan berangkat ke Turki bulan depan.)</p>
          <p>They will take the school examination tomorrow morning. (Mereka akan mengambil ujian besok pagi.)</p>
          <p><strong>2. Expressing a decision to do something without a plan </strong></p>
          <p>Not all activities we do are always planned. For example, you are sitting and relaxing, then suddenly at the next minute you have to open the door for guests is also part of the simple future tense. Example sentences:</p>
          <p>A: Hello, is anyone home? The door is locked. (Halo, apakah ada orang di rumah? Pintunya terkunci.)</p>
          <p>B: Wait a minute, I’ll open the door for you. (Tunggu sebentar, aku akan membukakan pintunya untukmu.)</p>
          <p><strong>3. Expressing an emotion or feeling</strong></p>
          <p>In this sentence, it will show the feelings that will appear in the future. Here are examples of its use:</p>
          <p>My mom will love her new hermes bag. (Ibuku akan menyukai tas hermes barunya.)</p>
          <p>I will love you just the way you are (Aku akan mencintaimu apa adanya.)</p>
          <p><strong>4. Predicting future events</strong></p>
          <p>Predictions in this case can be related to weather or circumstances. Example:</p>
          <p>It will rain tomorrow. (Besok akan hujan.)</p>
          <p><strong>5. Expressing willingness and unwillingness</strong></p>
          <p>Yes, this function is almost the same as point number 2. But, try to differentiate it from the following example:</p>
          <p>I will carry your suitcase for you. (Saya akan membawakan kopermu.)</p>
          <p><strong>6. Inviting/inviting others</strong></p>
          <p>You must have heard the following sentence, "Will you marry me?" which is usually expressed by a man or woman to their partner to invite them to marry. In this case, of course the capital you use is will.</p>
          <p><strong>7. Expressing promises</strong></p>
          <p>A promise is a long-term sentence that means it is related to the future. Example:</p>
          <p>I won’t tell anyone your secret. (Aku tidak akan memberitahu rahasiamu pada siapapun.)</p>
          <p><strong>8. Expressing threats</strong></p>
          <p>Yes! In addition to promises, threats are also something that may happen in the future. You can see the following examples:</p>
          <p>If you do that again, I’ll tell Mum. (Jika kamu melakukan hal itu lagi, aku akan memberitahu Ibu.)</p>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>Use of Shall</h3>
          <p><strong>1. Showing a desire and a dislike</strong></p>
          <p>I am going to his birthday party next month. (Aku akan pergi ke pesta ulang tahunnya bulan depan.)</p>
          <p><strong>2. Expressing predictions based on evidence</strong></p>
          <p>Different from function number four in the use of will, to be going to is used if there is a disclosure of evidence in the sentence. Example:</p>
          <p>Look at those grey clouds. It’s definitely going to rain. (Lihatlah awan kelabu itu, pasti akan hujan.) </p>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>Use of Be going to</h3>
          <p><strong>1. Expressing a desire but only as an intention</strong></p>
          <p>I am going to his birthday party next month. (Aku akan pergi ke pesta ulang tahunnya bulan depan.)</p>
          <p><strong>2. State an offer to others</strong></p>
          <p>For this function, shall will change its meaning to "must" or "must". Example:</p>
          <p>Shall I give you some money? (Perlukah aku memberimu sejumlah uang?) </p>
          <p><strong>3. Asking for advice or instructions</strong></p>
          <p>The modal that you can use in the simple future tense when asking for advice from others is shall with an interrogative sentence form. Example:</p>
          <p>What shall I buy for dinner? (Apa yang harus aku beli untuk makan malam?)</p>
        </div>
      </section>

      <section className="activity-section">
        <h2>Activity</h2>
        <p>Do the following questions as an exercise on the future continuous tense.</p>
        <div className="word-list">
          <div className="word-card">
            <h3 className="word-title nailed">Question 1</h3>
            <p className="word-meaning">
            Addy and his brother will ___ (Arrive)at 10 o’clock. We need to hurry right now. 
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
            My father thinks the prime minister will ___ (win)in 2024’s election.
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
            She is a good kid. She will be ___ (Continuing)her father’s order. 
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
            Aaron and his brother will not ___ (be here)next month. They will fly to Boston this afternoon and stay there for several months. 
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
            I ___ (snitch)if you tell me your little secret. 
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
            People ___ (forget)about this accident a year from now.
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
            The first-year students ___ (take)an additional course next week.
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
            Stop playing around, or I ___ (tell)your mother to punish you
            </p>
            <input
              type="text"
              ref={answer8Ref}
              placeholder="Your answer"
            />
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

export default SimpleFuture;