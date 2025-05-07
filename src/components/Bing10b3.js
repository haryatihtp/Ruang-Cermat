import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab3 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-container">
      <h1>Chapter 3: Informal Letters</h1>

      <section>
        <h2>1. What are Informal Letters?</h2>
        <p>
          Informal letters are personal communications typically sent to friends, family members, 
          or acquaintances. They are characterized by a casual tone, personal anecdotes, and a 
          less rigid structure compared to formal letters.
        </p>
        <img src="/images/informal-letter.jpg" alt="Example of an informal letter" className="section-image" />
      </section>

      <section>
        <h2>2. Structure of an Informal Letter</h2>
        <h3>a. Heading</h3>
        <p>Your address and the date (usually in the top right corner)</p>

        <h3>b. Greeting</h3>
        <p>A friendly salutation, such as "Dear [Name]," "Hi [Name]," or "Hello [Name]"</p>

        <h3>c. Introduction</h3>
        <p>A casual opening paragraph, often asking how the recipient is doing</p>

        <h3>d. Body</h3>
        <p>The main content of your letter, usually divided into paragraphs</p>

        <h3>e. Conclusion</h3>
        <p>A brief closing paragraph</p>

        <h3>f. Complimentary Close</h3>
        <p>A friendly sign-off, such as "Best wishes," "Take care," or "Love,"</p>

        <h3>g. Signature</h3>
        <p>Your name or nickname</p>

        <img src="/images/letter-structure.jpg" alt="Structure of an informal letter" className="section-image" />
      </section>

      <section>
        <h2>3. Language and Tone in Informal Letters</h2>
        <p>
          Informal letters use casual language and a friendly tone. Key features include:
        </p>
        <ul>
          <li>Contractions (e.g., "I'm," "don't," "we've")</li>
          <li>Colloquial expressions and idioms</li>
          <li>Personal anecdotes and experiences</li>
          <li>Questions for the recipient</li>
          <li>Emotive language to express feelings</li>
        </ul>
        <img src="/images/informal-language.jpg" alt="Examples of informal language" className="section-image" />
      </section>

      <section>
        <h2>4. Common Topics in Informal Letters</h2>
        <p>
          Informal letters often cover personal topics such as:
        </p>
        <ul>
          <li>Recent events in your life</li>
          <li>Shared memories or experiences</li>
          <li>Future plans or invitations</li>
          <li>Asking for advice or offering support</li>
          <li>Expressing gratitude or congratulations</li>
        </ul>
      </section>

      <section>
        <h2>5. Tips for Writing Effective Informal Letters</h2>
        <ul>
          <li>Be personal and friendly in your tone</li>
          <li>Use the recipient's name or nickname</li>
          <li>Share interesting details about your life</li>
          <li>Ask questions to show interest in the recipient</li>
          <li>Use humor where appropriate</li>
          <li>Be sincere and authentic in your writing</li>
        </ul>
      </section>

      <section>
        <h2>6. Example of an Informal Letter</h2>
        <pre className="letter-example">
          {`123 Main Street
Anytown, USA 12345
June 15, 2023

Dear Sarah,

How's it going? I hope this letter finds you well and enjoying the summer weather!

I wanted to drop you a line to catch up and share some exciting news. You won't believe what happened last week – I finally got that promotion at work! Remember how nervous I was about the interview? Well, all that preparation paid off.

How's your new apartment? Have you finished unpacking yet? I'd love to see it sometime. Maybe we could plan a weekend get-together soon? It's been ages since we've had a proper catch-up.

Oh, before I forget – Mom asked me to remind you about the family reunion next month. She's hoping you can make it. Let me know if you need any help with travel arrangements.

Anyway, I should wrap this up. My dog is giving me the "it's time for a walk" look. Write back when you can and tell me all about what's new in your world!

Take care,
Alex`}
        </pre>
      </section>

      <div className="bottom-container">
        <h2>"Ready to write your own informal letter? <br/>
        Let's practice!"</h2>
        <button 
          className="btn-practice"
          onClick={() => window.location.href = "/SlBing10b3"}
        >
          Start Practicing Now
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b2")}
        >
          Previous: Simple Present Tense
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b4")}
        >
          Next: Greeting and Introduction
        </button>
      </div>
    </div>
  );
};

export default Bab3;