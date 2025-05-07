import React, {useState, useRef} from "react";
import "../css/Bing12SF.css";

const FuturePerfectContinuous = () => {
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
    answer1: "will have been living",
    answer2: "will have been writing",
    answer3: "will have been playing",
    answer4: "Will have been using",
    answer5: "Talking",
    answer6: "have been",
    answer7: "Teaching",
    answer8: "Will have been brrowing",
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
    { english: "When", indonesian: "Ketika" },
    { english: "Since", indonesian: "Sejak" },
    { english: "Before", indonesian: "Sebelum" },
    { english: "For", indonesian: "Selama" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h2>Future Perfect Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>Did You Know?</h3>
          <p>
          Future perfect continuous tense is a form of sentence to express an action, action, or event that is going on until a certain point in the future.
          In this case, a person will express an action that is happening in the future, but it will still continue until the future. This tense is also commonly known as the future perfect progressive.
          </p>
        </div>
      </section>

      <div className="rumus-container">
        <h1>Rumus Future Perfect Continuous Tense</h1>
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
              <td>Subject + will/shall + Have + Been + verb-ing + Complement</td>
            </tr>
            <tr>
              <td>(-) Negative/Negatif</td>
              <td>Subject + will/shall + not + Have + Been + verb-ing +  Complement</td>
            </tr>
            <tr>
              <td>(?) Interrogative/Tanya</td>
              <td>Will/shall + Subject  + Have + Been + verb-ing + Complement</td>
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
          <h3>Examples of Future Perfect Continuous Tense Sentences</h3>
          <p><strong>Examples of positive sentences</strong></p>
          <p>- In August, I will have been working as a Digital Marketer for three years.
          (Pada bulan Agustus, saya akan telah bekerja sebagai Digital Marketer selama tiga tahun.)</p>
          <p>- Novsi will have been living in Cairo for three years by next month.
          (Novsi akan telah tinggal di Kairo selama tiga tahun bulan depan.)</p>
          <p><strong>Examples of negative sentences </strong></p>
          <p>- My mother will not have been teaching in 80 Jakarta Senior High School for a few weeks before he moves to Bali.
          (Ibuku belum sempat mengajar di SMA 80 Jakarta selama beberapa minggu sebelum dia pindah ke Bali.)</p>
          <p>- Dimas will not have been studying Korean for a month before she moves to Korea.
          (Dimas belum sempat/belum mencapai belajar bahasa Korea selama sebulan sebelum dia pindah ke Korea.)</p>
          <p><strong>Examples of interrogative sentences</strong></p>
          <p>- Will you have been working for two hours when I arrive?
          (Apakah Anda sudah bekerja selama dua jam ketika saya tiba?)</p>
          <p>- Will Novsi and Dimas have been dating for a year by next month?
            (Apakah Novsi dan Dimas berkencan selama setahun pada bulan depan?)
          </p>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>Future Perfect Continuous Tense Function</h3>
          <p>If you have read the entire explanation above, of course you can easily understand the function of this one tense, which is to state an event that will occur and last for a certain amount of time in the future.
             Example sentences: </p>
          <p>-I will have been living in Jakarta for one year by next year.
          (Saya akan telah tinggal di Jakarta selama satu tahun pada tahun depan.)</p>
          <p>- Azka will have been visiting his brother for a week by the end of this year.
          (Azka akan telah mengunjungi saudaranya selama seminggu pada akhir tahun ini.)</p>
        </div>
      </section>

      <section className="activity-section">
        <h2>Activity</h2>
        <p>Do the following questions as an exercise on the future continuous tense.</p>
        <div className="word-list">
          <div className="word-card">
            <h3 className="word-title nailed">Question 1</h3>
            <p className="word-meaning">
            I ... in this city for a year by next summer.
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
            She ... her book for a month by the end of this week.
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
            They ... this game for three hours by the time they take a break.
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
            I _ this computer for five years by the time I buy a new one.
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
            They will have been ... for over an hour b the time Dimas arrives.
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
            Paulus will ... teaching at the university for more than a year by the time he leaves for asia
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
            1 will have been ... here  for five years this year
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
            Will your neighbor ... your car for three days?
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

export default FuturePerfectContinuous;