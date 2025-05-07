import React, { useState, useRef } from "react";
import "../css/Bing12SF.css";

const FuturePerfect = () => {
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
    answer1: "will have finished",
    answer2: "will have read",
    answer3: "will have been",
    answer4: "Will have studied",
    answer5: "will have been working",
    answer6: "will have been playing",
    answer7: "He will have been in the Hospital.",
    answer8: "Will my father have slept?",
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

  // Mengecek jika tombol submit bisa ditekan
  const isSubmitDisabled = () => {
    const allAnswersFilled = 
      answer1Ref.current?.value.trim() &&
      answer2Ref.current?.value.trim() &&
      answer3Ref.current?.value.trim() &&
      answer4Ref.current?.value.trim() &&
      answer5Ref.current?.value.trim() &&
      answer6Ref.current?.value.trim() &&
      answer7Ref.current?.value.trim() &&
      answer8Ref.current?.value.trim();

    console.log('All answers filled:', allAnswersFilled);  // Debugging log
    return !allAnswersFilled;
  };

  
  const adverbData = [
    { english: "By 5 p.m.", indonesian: "Menjelang jam 5 sore" },
    { english: "By Afternoon", indonesian: "Menjelang siang" },
    { english: "By Next Week", indonesian: "Menjelang minggu depan" },
    { english: "By Sunday", indonesian: "Menjelang hari Minggu" },
    { english: "By Tomorrow", indonesian: "Menjelang besok" },
    { english: "By Next Month", indonesian: "Menjelang bulan depan" },
  ];


  return (
    <div className="container">
      <header className="header">
        <h2>Future Perfect Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>Did You Know?</h3>
          <p>
          Future Perfect Tense is a tense or change of a verb to state an event or state something that is predicted to have happened, even completed in the future. So, when it is discussed, there is an action that has not been completed or has not happened at all.
          If reported by Grammarly, the future perfect tense can also be interpreted as a tense that talks about an action that will be completed between the present and some point in the future
          </p>
        </div>
      </section>

      <div className="rumus-container">
        <h1>Rumus Future Perfect Tense</h1>
        <h2>Kalimat Nominal dalam Future Perfect Tense</h2>
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
              <td>Subject + will/shall + Have + Been + Complement</td>
            </tr>
            <tr>
              <td>(-) Negative/Negatif</td>
              <td>Subject + will/shall + not + Have + Been + Complement</td>
            </tr>
            <tr>
              <td>(?) Interrogative/Tanya</td>
              <td>Will/shall + Subject  + Have + Been + Complement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rumus-container">
        <h2>Kalimat Verbal dalam Future Perfect Tense</h2>
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
              <td>Subject + will/shall + Have + Verb 3 + Complement</td>
            </tr>
            <tr>
              <td>(-) Negative/Negatif</td>
              <td>Subject + will/shall + not + Have + Verb 3 + Complement</td>
            </tr>
            <tr>
              <td>(?) Interrogative/Tanya</td>
              <td>Will/shall + Subject  + Have + Verb 3 + Complement</td>
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
          <h3>Examples of Future Perfect Tense Sentences</h3>
          <h4>Kalimat nominal</h4>
          <p><strong>Examples of positive sentences</strong></p>
          <p>They will have been at your house when the pizza comes.
          (Mereka akan berada di rumahmu ketika pizza datang.)</p>
          <p><strong>Examples of negative sentences </strong></p>
          <p> Mr. Joe will not have been in the office by this evening.
          (Pak Joe tidak akan ada di kantor malam ini.)</p>
          <p><strong>Examples of interrogative sentences</strong></p>
          <p>Will they have been here tonight?
          (Apakah mereka akan sudah ada di sini malam ini?)</p>
        </div>
      </section>

      <section className="section characteristics">
        <div className="icon">🎧</div>
        <div className="content">
          <h4>Kalimat verbal</h4>
          <p><strong>Examples of positive sentences</strong></p>
          <p> Randy will have finished his homework at 8 p.m. (Randy akan menyelesaikan PR pada pukul 8 malam.)</p>
          <p><strong>Examples of negative sentences </strong></p>
          <p>  I’ll not have finished the report by tomorrow morning. (Saya tidak akan menyelesaikan tugas besok pagi.)</p>
          <p><strong>Examples of interrogative sentences</strong></p>
          <p>Will you have eaten when she comes to your house by tomorrow afternoon? (Apakah kamu akan sudah makan ketika dia datang ke rumahmu menjelang siang?)</p>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>When to Use Future Perfect Tense</h3>
          <p>Actually, you can make the future perfect tense and simple future tense to be used interchangeably. Why? Because you won't find any noticeable difference in meaning, unless there is a word "before" that clarifies the sequence of events. Consider the example sentence: </p>
          <p>- Simple future tense:</p>
          <p>Rama will leave before you get there.
          (Rama akan pergi sebelum kamu sampai di sana.)</p>
          <p>- Future perfect tense:</p>
          <p>Rama will have left before you get there.
          (Rama akan (sudah) pergi sebelum kamu sampai di sana.)</p>
        
          <p>If you don't include the preposition "before" or "by the time" to explain the sequence of events, then the use of the future perfect tense will be more appropriate. Example sentences: </p>
          <p>At eight o’clock Rama will leave.  Artinya, Rama akan menunggu sampai jam 8 untuk pergi.</p>
        </div>
      </section>

      <section className="activity-section">
        <h2>Activity</h2>
        <p>Do the following questions as an exercise on the future perfect tense.</p>
        <div className="word-list">
          <div className="word-card">
            <h3 className="word-title nailed">Question 1</h3>
            <p className="word-meaning">
              They ... their study by evening.
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
              Merry ... the book before you ask her.
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
              By the end of this month, I ... back from Singapore.
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
              By this time next week, Jennifer ... in Oxford University for 3 years.
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
              She ... in this company for ten years by the end of next month.
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
              By the time we get there, the concert ... for an hour.
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
              He is in the Hospital. <br /> Transform into the Future Perfect Tense
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
              My father will have been sleeping. <br /> Transform into the Future Perfect Tense Question Form
            </p>
            <input
              type="text"
              ref={answer8Ref}
              placeholder="Your answer"
            />
          </div>

          <button onClick={handleSubmit} disabled={isSubmitDisabled()}>Submit Answers</button>
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

export default FuturePerfect;