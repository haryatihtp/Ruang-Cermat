import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b4.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      
      <h1>Bab 5: Sentence Connectors in English</h1>
      <section>
        <p>
          Sentence connectors, or conjunctions, play a crucial role in linking ideas within a sentence or between sentences. These words or phrases help to improve the flow and coherence of the text. There are several types of sentence connectors based on their function, including coordinating conjunctions, subordinating conjunctions, and correlative conjunctions.
        </p>

        <h2>A. Coordinating Conjunctions</h2>
        <p>
          Coordinating conjunctions are used to connect words, phrases, or clauses that are of equal importance. The most common coordinating conjunctions are: "and," "but," "or," "nor," "for," "so," and "yet."
        </p>
        <h3>1. "And"</h3>
        <p>
          "And" is used to add one idea to another. It indicates that two ideas are related or should be considered together.
          <br />
          Example: I like English, and I also enjoy learning French.
        </p>

        <h3>2. "But"</h3>
        <p>
          "But" is used to introduce a contrast or contradiction. It shows that the ideas are opposite in some way.
          <br />
          Example: She wanted to go to the party, but she was too tired.
        </p>

        <h3>3. "Or"</h3>
        <p>
          "Or" is used to offer alternatives or choices.
          <br />
          Example: Do you prefer coffee or tea?
        </p>

        <h2>B. Subordinating Conjunctions</h2>
        <p>
          Subordinating conjunctions are used to connect a dependent clause (a clause that cannot stand alone) with an independent clause (a complete sentence). Some common subordinating conjunctions include "because," "although," "if," "since," and "while."
        </p>
        <h3>1. "Because"</h3>
        <p>
          "Because" introduces a reason or cause.
          <br />
          Example: I stayed at home because it was raining.
        </p>

        <h3>2. "Although"</h3>
        <p>
          "Although" is used to introduce a contrast or unexpected situation.
          <br />
          Example: Although it was raining, we went hiking.
        </p>

        <h2>C. Correlative Conjunctions</h2>
        <p>
          Correlative conjunctions are pairs of conjunctions that work together to connect balanced elements. Some common correlative conjunctions include "either...or," "neither...nor," and "both...and."
        </p>
        <h3>1. "Either...or"</h3>
        <p>
          "Either...or" is used to present two alternatives.
          <br />
          Example: You can either have tea or coffee.
        </p>

        <h3>2. "Both...and"</h3>
        <p>
          "Both...and" is used to show that two things are true or present at the same time.
          <br />
          Example: She is both intelligent and hardworking.
        </p>
      </section>

      <section>
        <h2>D. Examples of Sentence Connectors in Complex Sentences</h2>
        <p>
          Complex sentences often include sentence connectors to show the relationship between the main clause and the subordinate clause. These connectors help to clarify the meaning and improve the readability of the sentence.
        </p>

        <h3>1. "Because" in a Complex Sentence</h3>
        <p>
          Example: She didn't come to school because she was feeling sick.
        </p>

        <h3>2. "Although" in a Complex Sentence</h3>
        <p>
          Example: Although he studied hard, he did not pass the exam.
        </p>
      </section>
      <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b5"}
        >
          Start Practice
        </button>
      </div>

      {/* Page Navigation */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b4")}
        >
          Back to Previous Chapter
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b6")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab5;