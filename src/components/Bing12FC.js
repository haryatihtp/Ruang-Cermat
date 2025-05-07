import React, {useState, useRef} from "react";
import "../css/Bing12SF.css";

const FutureContinuous = () => {
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
    answer1: "will be having",
    answer2: "will you be doing",
    answer3: "will be taking",
    answer4: "Will you be doing",
    answer5: "will have been dancing",
    answer6: "will have been playing",
    answer7: "will be attending",
    answer8: "will be studying",
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

    setFeedback(newFeedback); 
  };


  const adverbData = [
    { english: "Tomorrow", indonesian: "Besok" },
    { english: "The day after tomorrow", indonesian: "Besok lusa" },
    { english: "Next week", indonesian: "Minggu depan" },
    { english: "A month later", indonesian: "Bulan depan" },
    { english: "Next year", indonesian: "Tahun depan" },
    { english: "Soon", indonesian: "Segera" },
    { english: "Tonight", indonesian: "Malam ini" },
    { english: "Later", indonesian: "Nanti" },
    { english: "By and By", indonesian: "Sebentar lagi" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h2>Future Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>Did You Know?</h3>
          <p>
            The simple future tense is one of the simple tenses used to talk about a future condition of the or Tense to express future action. In addition, there is also a continuous tense that functions to declare the action that is taking place in a certain time.
          </p>
        </div>
      </section>

      <div className="rumus-container">
        <h1>Rumus Future Continuous Tense</h1>
        <table>
          <thead>
            <tr>
              <th>Pola Kalimat</th>
              <th>Rumus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(+) Positive/Positif</td>
              <td>Subject + will/shall + be + Verb-ing + Complement</td>
            </tr>
            <tr>
              <td>(-) Negative/Negatif</td>
              <td>Subject + will/shall + not + be + Verb-ing + Complement</td>
            </tr>
            <tr>
              <td>(?) Interrogative/Tanya</td>
              <td>Will/shall + Subject + be + Verb-ing + Complement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="adverb-section">
        <h2>Adverb of Time dalam Simple Future Tense</h2>
        <table className="adverb-table">
          <thead>
            <tr>
              <th>Adverb of Time</th>
              <th>Artinya</th>
            </tr>
          </thead>
          <tbody>
            {adverbData.map((row, index) => (
              <tr key={index}>
                <td>{row.english}</td>
                <td>{row.indonesian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="section characteristics">
        <div className="icon">🎧</div>
        <div className="content">
          <h3>Examples of Future Continuous Tense Sentences</h3>
          <p><strong>Examples of positive sentences</strong></p>
          <p>- Rama will be running in a marathon race this Saturday morning. (Rama akan mengikuti lomba lari marathon Sabtu pagi ini.)</p>
          <p>- He will be staying at the office at 4 o’clock this afternoon. (Dia akan tinggal di kantor jam 4 sore ini.)</p>
          <p>- I will be doing an exam at this time tomorrow. (Aku akan sedang mengikuti ujian besok pada jam ini.)</p>
          <p><strong>Examples of negative sentences </strong></p>
          <p>- I won’t be sleeping at this time tomorrow. (Aku tidak akan tidur jam segini besok.)</p>
          <p>- Bima will not be playing games for a month. (Bima tidak akan bermain game selama sebulan.)</p>
          <p>- My brother will not be practicing football tonight at eight o’clock. (Adikku tidak akan sedang berlatih sepak bola pada malam ini pukul 08.00.)</p>
          <p><strong>Examples of interrogative sentences</strong></p>
          <p>- Will you be coming to Susi’s birthday party tomorrow night? (Apakah kamu akan datang ke pesta ulang tahun Susi besok malam?)</p>
          <p>- Will he be sleeping in this room? (Apakah dia akan tidur di kamar ini?)</p>
          <p>- Will they be calling you tomorrow night? (Apakah mereka akan menelpon kamu besok malam?)</p>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>Functions and Uses of Future Continuous Tense</h3>
          <p><strong>1. Events in progress at a particular time in the future </strong></p>
          <p>In the first function, the future continuous tense is certainly used to express an activity that will be carried out or is being carried out at a specific time in the future. To indicate the specific time, you must use the time caption as a complement at the end of the sentence. Here's an example sentence: </p>
          <p>My mom will be calling you at 8 o’clock tomorrow morning. (Ibuku akan menelpon kamu pada besok jam 8 pagi.)</p>
          <p><strong>2. Interrupted action in the future </strong></p>
          <p>The future continuous tense can be used to state that there is an action with a long duration in the future that will be intervened by a shorter action in the future. This intervention can be real or it can be just a matter of time. See an example of usage in the following sentence:</p>
          <p>I will be waiting for you when your plane arrives. (Saya akan menunggumu saat pesawatmu tiba.)</p>
          <p><strong>3. Make polite enquiries about someone’s plans without wishing to influence those plans </strong></p>
          <p>This form is also often used to ask about a person's plans or intentions. Usually this question is asked without the intention of influencing the plan of the person. Example sentences:</p>
          <p>Will Rani be watching the football tonight? (Apakah Rani akan menonton pertandingan sepak bola nanti malam?)</p>
          <p><strong>4. Future continuous is used to predict the future</strong></p>
          <p>Future continuous can also be used to guess and predict events that will come in the future. Examples are as follows:</p>
          <p>Don’t go round there now, the baby will be sleeping! (Jangan pergi kesana sekarang, bayinya akan tidur!)</p>
          <p><strong>5. Current events are still continuing in the future </strong></p>
          <p>The function of this sentence is more or less the same as prediction, but it refers to an event that is currently happening, or expecting the event to happen in the future. In addition, this function usually uses the additional word still after the subject. An example sentence is:</p>
          <p>In an hour I’ll still be ironing my clothes. (Dalam satu jam aku masih akan menyetrika pakaianku.)</p>
        </div>
      </section>

      <section className="activity-section">
  <h2>Activity</h2>
  <p>Do the following questions as an exercise on the future continuous tense.</p>
  <div className="word-list">
    <div className="word-card">
      <h3 className="word-title nailed">Question 1</h3>
      <p className="word-meaning">
        At 9 pm tonight, I ___ dinner with my family.
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
        What ___ you ___ when I call you later?
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
        At this time tomorrow, she ___ the exam.
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
        ___ you ___ the laundry when I get home?
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
        When you arrive at the party, I _______ for two hours.
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
        By the time we get there, the concert ___ for an hour.
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
        I _______ the meeting when you call me tomorrow.
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
        At 10 p.m. tonight, what will you be doing?
      </p>
      <input
        type="text"
        ref={answer8Ref}
        placeholder="Your answer"
      />
    </div>

    <button 
      onClick={handleSubmit} 
      disabled={
        !(
          (answer1Ref.current && answer1Ref.current.value) &&
          (answer2Ref.current && answer2Ref.current.value) &&
          (answer3Ref.current && answer3Ref.current.value) &&
          (answer4Ref.current && answer4Ref.current.value) &&
          (answer5Ref.current && answer5Ref.current.value) &&
          (answer6Ref.current && answer6Ref.current.value) &&
          (answer7Ref.current && answer7Ref.current.value) &&
          (answer8Ref.current && answer8Ref.current.value)
        )
      }
    >
      Submit Answers
    </button>
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

export default FutureContinuous;