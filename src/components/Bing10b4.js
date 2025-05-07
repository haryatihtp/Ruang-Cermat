import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab4 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-container">
      <h1>Chapter 4: Greeting and Introduction</h1>

      <section>
        <h2>1. What are Greetings and Introductions?</h2>
        <p>
          Greetings and introductions are essential social skills used to initiate conversations 
          and establish rapport with others. They are the first steps in communication and can 
          set the tone for the entire interaction.
        </p>
        <img src="/images/greeting-intro.jpg" alt="People greeting each other" className="section-image" />
      </section>

      <section>
        <h2>2. Types of Greetings</h2>
        <h3>a. Formal Greetings</h3>
        <p>
          Formal greetings are used in professional settings or with people you don't know well.
          Examples include:
        </p>
        <ul>
          <li>"Good morning/afternoon/evening"</li>
          <li>"Hello, how do you do?"</li>
          <li>"It's a pleasure to meet you"</li>
        </ul>

        <h3>b. Informal Greetings</h3>
        <p>
          Informal greetings are used with friends, family, or in casual settings.
          Examples include:
        </p>
        <ul>
          <li>"Hi" or "Hey"</li>
          <li>"What's up?"</li>
          <li>"How's it going?"</li>
        </ul>
        <img src="/images/greeting-types.jpg" alt="Formal and informal greetings" className="section-image" />
      </section>

      <section>
        <h2>3. Introduction Techniques</h2>
        <p>
          When introducing yourself or others, consider the following techniques:
        </p>
        <ul>
          <li>State your name clearly: "Hi, I'm [Your Name]."</li>
          <li>Offer a handshake (in appropriate cultures)</li>
          <li>Make eye contact and smile</li>
          <li>Provide additional information if relevant: "I'm the new marketing manager."</li>
        </ul>
        <img src="/images/introduction-techniques.jpg" alt="People introducing themselves" className="section-image" />
      </section>

      <section>
        <h2>4. Cultural Considerations</h2>
        <p>
          Greetings and introductions can vary significantly across cultures. It's important to be aware of:
        </p>
        <ul>
          <li>Appropriate physical contact (handshakes, bows, etc.)</li>
          <li>Use of titles and honorifics</li>
          <li>Time of day-specific greetings</li>
          <li>Level of formality expected in different settings</li>
        </ul>
        <img src="/images/cultural-greetings.jpg" alt="Different cultural greetings" className="section-image" />
      </section>

      <section>
        <h2>5. Common Phrases for Greetings and Introductions</h2>
        <h3>Greetings:</h3>
        <ul>
          <li>"Hello" / "Hi" / "Hey"</li>
          <li>"Good morning/afternoon/evening"</li>
          <li>"How are you?" / "How's it going?"</li>
          <li>"Nice to meet you" / "Pleased to meet you"</li>
        </ul>
        <h3>Introductions:</h3>
        <ul>
          <li>"My name is..." / "I'm..."</li>
          <li>"Let me introduce myself..."</li>
          <li>"I'd like you to meet..."</li>
          <li>"Have you met...?"</li>
        </ul>
      </section>

      <section>
        <h2>6. Practice Exercises</h2>
        <p>
          To improve your greeting and introduction skills, try these exercises:
        </p>
        <ul>
          <li>Role-play different scenarios with a partner</li>
          <li>Practice introducing yourself in front of a mirror</li>
          <li>Observe and analyze greetings in movies or TV shows</li>
          <li>Try greeting people in a new language</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Ready to practice your greeting and introduction skills? <br/>
        Let's start with some exercises!"</h2>
        <button 
          className="btn-practice"
          onClick={() => window.location.href = "/SlBing10b4"}
        >
          Start Practicing Now
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b3")}
        >
          Previous: Informal Letters
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b5")}
        >
          Next: Narrative Text
        </button>
      </div>
    </div>
  );
};

export default Bab4;