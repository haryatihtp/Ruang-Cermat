import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Bing11b4.css";

const Bab4 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab4-container">
      <header className="bab4-header">
        <h1>Type of Clauses</h1>
        <p className="bab4-subtitle">Learn about the different types of clauses in English grammar.</p>
      </header>

      
        <section className="bab4-section">
          <h2>Main Clause</h2>
          <p>
            A main clause, also known as an independent clause, is a group of words
            that contains a subject and a predicate and can stand alone as a
            sentence.
          </p>
        </section>

        <section className="bab4-section">
          <h2>Subordinate Clause</h2>
          <p>
            A subordinate clause, also known as a dependent clause, cannot stand
            alone as a sentence. It depends on a main clause to provide meaning.
          </p>
        </section>

        <section className="bab4-section">
          <h2>Adjective Clause</h2>
          <p>
            An adjective clause is a subordinate clause that modifies a noun or
            pronoun. It usually begins with a relative pronoun such as "who," "whom," "whose," "that," or "which."
          </p>
        </section>

        <section className="bab4-section">
          <h2>Adverb Clause</h2>
          <p>
            An adverb clause is a subordinate clause that modifies a verb, an
            adjective, or another adverb. It often begins with a subordinating
            conjunction like "because," "although," or "when."
          </p>
        </section>

        <section className="bab4-section">
          <h2>Noun Clause</h2>
          <p>
            A noun clause is a subordinate clause that acts as a noun. It can
            function as a subject, object, or complement in a sentence.
          </p>
        </section>

        <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b4"}
        >
          Start Practice
        </button>
      </div>

      {/* Page Navigation */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b3")}
        >
          Back to Previous Chapter
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b5")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>

  );
}

export default Bab4;