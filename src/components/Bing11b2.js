import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Types of Sentences</h1>

      <section>
        <h2>1. Definition of Types of Sentences</h2>
        <p>
          A sentence is a group of words that expresses a complete thought. Sentences can be categorized into different types based on their structure and purpose.
          Understanding these types helps us to effectively communicate in both written and spoken language.
        </p>
      </section>

      <section>
        <h2>2. Types Based on Structure</h2>
        <p>Sentences can be classified based on their structure into the following:</p>

        <h3>a. Simple Sentence</h3>
        <p>
          A simple sentence contains one independent clause. It expresses a single complete thought. 
          Example: <em>"She reads books."</em>
        </p>

        <h3>b. Compound Sentence</h3>
        <p>
          A compound sentence contains two or more independent clauses joined by a conjunction or a semicolon.
          Example: <em>"She reads books, and he writes stories."</em>
        </p>

        <h3>c. Complex Sentence</h3>
        <p>
          A complex sentence contains one independent clause and one or more dependent clauses.
          Example: <em>"She reads books because she loves learning."</em>
        </p>

        <h3>d. Compound-Complex Sentence</h3>
        <p>
          A compound-complex sentence has at least two independent clauses and one or more dependent clauses.
          Example: <em>"She reads books because she loves learning, and he writes stories."</em>
        </p>
      </section>

      <section>
        <h2>3. Types Based on Purpose</h2>
        <p>Sentences can also be classified based on their purpose:</p>

        <h3>a. Declarative Sentence</h3>
        <p>
          A declarative sentence makes a statement and ends with a period.
          Example: <em>"The sky is blue."</em>
        </p>

        <h3>b. Interrogative Sentence</h3>
        <p>
          An interrogative sentence asks a question and ends with a question mark.
          Example: <em>"What is your name?"</em>
        </p>

        <h3>c. Imperative Sentence</h3>
        <p>
          An imperative sentence gives a command or makes a request.
          Example: <em>"Please open the door."</em>
        </p>

        <h3>d. Exclamatory Sentence</h3>
        <p>
          An exclamatory sentence expresses strong emotion and ends with an exclamation mark.
          Example: <em>"What a beautiful day it is!"</em>
        </p>
      </section>

      <section>
        <h2>4. Practice Questions</h2>
        <p>
          Test your understanding of sentence types by identifying the type of each given sentence.
        </p>
        <ul>
          <li>"I love learning languages." (Type: ______)</li>
          <li>"Why are you late?" (Type: ______)</li>
          <li>"Close the window, please." (Type: ______)</li>
          <li>"Wow! That's amazing!" (Type: ______)</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Ready to test your knowledge with exercises? <br /> Start now!"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b2"}
        >
          Start Exercises
        </button>
      </div>

      {/* Navigation */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b1")}
        >
          Back to Previous Chapter
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b3")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab2;