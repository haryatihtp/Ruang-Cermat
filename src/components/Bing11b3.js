import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b3.css';

const Bab3 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab3-container">
      <h1>Bab 3: Classification of Sentences</h1>

      <section>
        <h2>1. Definition of Sentences</h2>
        <p>
          A sentence is a group of words that expresses a complete thought and contains a subject and a predicate. Sentences are used to communicate ideas, ask questions, give commands, or express emotions. The structure and function of sentences can vary depending on the message being conveyed.
        </p>
      </section>

      <section>
        <h2>2. Types of Sentences by Function</h2>
        <p>
          Sentences can be classified based on their purpose or function. Each type serves a specific role in communication. Let’s break down these categories further.
        </p>

        <h3>a. Declarative Sentences</h3>
        <p>
          Declarative sentences are used to make statements or provide information. These sentences express facts or opinions. They typically end with a period (.). For example: "The sky is blue."
        </p>

        <h3>b. Interrogative Sentences</h3>
        <p>
          Interrogative sentences are used to ask questions. They seek information and are always followed by a question mark (?). For example: "What is your name?"
        </p>

        <h3>c. Imperative Sentences</h3>
        <p>
          Imperative sentences are used to give commands, make requests, or offer invitations. These sentences often end with a period, but they can also end with an exclamation mark if the command is strong. For example: "Please close the door." or "Watch out!"
        </p>

        <h3>d. Exclamatory Sentences</h3>
        <p>
          Exclamatory sentences express strong emotions such as surprise, joy, anger, or excitement. They are typically followed by an exclamation mark (!). For example: "What a beautiful day!"
        </p>
      </section>

      <section>
        <h2>3. Types of Sentences by Structure</h2>
        <p>
          Sentences can also be classified based on their structure, which refers to the arrangement of clauses within the sentence. Understanding the structure helps in crafting more complex and varied sentence forms.
        </p>

        <h3>a. Simple Sentences</h3>
        <p>
          A simple sentence consists of one independent clause and expresses a complete thought. It contains a subject and a verb, and it may or may not have additional modifiers. For example: "She sings beautifully."
        </p>

        <h3>b. Compound Sentences</h3>
        <p>
          A compound sentence consists of two or more independent clauses connected by a coordinating conjunction (such as "and," "but," or "or") or a semicolon. For example: "I wanted to go to the park, but it started raining."
        </p>

        <h3>c. Complex Sentences</h3>
        <p>
          A complex sentence contains one independent clause and at least one dependent clause. The dependent clause cannot stand alone and is connected to the independent clause with subordinating conjunctions such as "because," "although," or "when." For example: "I stayed home because it was raining."
        </p>

        <h3>d. Compound-Complex Sentences</h3>
        <p>
          A compound-complex sentence contains two or more independent clauses and at least one dependent clause. These sentences combine the complexity of both compound and complex sentence structures. For example: "I wanted to go to the park, but it started raining, so I decided to stay indoors."
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b3"}
        >
          Start Practice
        </button>
      </div>

      {/* Page Navigation */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b2")}
        >
          Back to Previous Chapter
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b4")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab3;