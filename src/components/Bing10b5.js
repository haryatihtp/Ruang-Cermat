import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Chapter 5: Narrative Text</h1>

      <section>
        <h2>1. What is Narrative Text?</h2>
        <p>
          A narrative text is a type of writing that tells a story. It involves the use of characters, a plot, a setting, and a clear sequence of events to engage and entertain the reader. The primary purpose of narrative text is to entertain, but it can also inform or teach moral lessons.
        </p>
        <p>
          The primary purpose of To entertain and engage the audience through storytelling, to convey a message or moral through the story, to reflect cultural values and traditions and to inspire imagination and creativity.
        </p>
      </section>

      <section>
        <h2>2. Structure of Narrative Text</h2>
        <h3>a. Orientation</h3>
        <p>
          Introduces the characters, setting, and background of the story and provides the context needed to understand the events that following.
        </p>
        <h3>b. Complication</h3>
        <p>
          Presents a problem, conflict, or challenge faced by the characters and builds tension and keeps the audience engaged.
        </p>
        <h3>c. Resolution</h3>
        <p>
          Shows how the problem or conflict is resolved and often provides a moral or lessons.
        </p>
      </section>

      <section>
        <h2>3. Characteristics of Narrative Text</h2>
        <h3>a. Key Features</h3>
        <p>
          Chronological sequence of events.
          Focus on characters and their development.
          Use of descriptive language to create imagery.
          Dialogue to bring characters to life.
        </p>
        <h3>b. Language Features</h3>
        <p>
          Use of past tense.
          Action verbs to depict events.
          Direct and indirect speech.
          Descriptive adjectives and adverbs.
        </p>
      </section>

      <section>
        <h2>4. Examples of Narrative Text</h2>
        <p>
          Common Types: Fairy tales (e.g., *Cinderella*), Myths and legends (e.g., *The Odyssey*), and short stories and novels.
        </p>
        <h3>Sample Narrative:</h3>
        <p><strong>Title:</strong> The Brave Little Rabbit</p>
        <p><strong>Orientation:</strong> Once upon a time, in a dense forest, there lived a little rabbit named Ruby.</p>
        <p><strong>Complication:</strong> One day, Ruby encountered a fierce wolf that threatened her family. She needed to outsmart him.</p>
        <p><strong>Resolution:</strong> Using her wit, Ruby tricked the wolf into falling into a deep pit, saving her family and becoming the hero of the forest.</p>
        <p><strong>Moral:</strong> Courage and intelligence can overcome even the greatest challenges.</p>
      </section>

      <div className="bottom-container">
        <h2>
          "Ready to test your skill about narrative text?<br/>Let's start your practice!"
        </h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing10b5"}
        >
          Start Practicing Now
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b4")}
        >
          Previous: Greeting and Introduction
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b6")}
        >
          Next Chapter: Procedural Text
        </button>
      </div>
    </div>
  );
};

export default Bab5;