
import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Sentence Structure</h1>

      <section>
        <h2>1. What is Sentence Structure?</h2>
        <p>
          Sentence structure refers to the way a sentence is arranged, grammatically. It includes the positioning of the subject, predicate, and object, along with the use of different clauses and phrases to form a complete and meaningful thought.
        </p>
        <p>
          The structure of a sentence determines the clarity of communication and its grammatical correctness. A well-structured sentence ensures that the message is clear and precise. Understanding sentence structure is key to both writing and speaking effectively in any language.
        </p>
        <p>
          Key components of sentence structure include:
          <ul>
            <li><strong>Subject:</strong> The noun or pronoun that the sentence is about.</li>
            <li><strong>Predicate:</strong> The verb or verb phrase that expresses the action or state of being of the subject.</li>
            <li><strong>Object:</strong> The noun or pronoun that receives the action of the verb.</li>
            <li><strong>Clauses:</strong> Groups of words that contain both a subject and a verb. These can be independent or dependent clauses.</li>
            <li><strong>Phrase:</strong> A small group of words that work together to convey an idea, often without a subject and verb combination.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>2. Basic Components of a Sentence</h2>
        <p>
          A well-formed sentence typically contains several key components that contribute to its meaning. These components are:
        </p>

        <h3>a. Subject</h3>
        <p>
          The subject is what the sentence is about. It is typically a noun or pronoun, and it tells us who or what is performing the action or being described in the sentence. For example, in the sentence "The dog barks," "The dog" is the subject.
        </p>
        <p>
          Subjects can also be more complex, involving compound subjects, which are made up of two or more elements. For example: "John and Mary went to the store."
        </p>

        <h3>b. Predicate</h3>
        <p>
          The predicate is the part of the sentence that tells us what the subject does or what happens to the subject. It typically includes a verb or verb phrase. In the sentence "She reads books," "reads books" is the predicate.
        </p>
        <p>
          The predicate can be simple or compound. A simple predicate consists of just one verb, whereas a compound predicate contains more than one verb, often joined by a conjunction. For example: "He runs and jumps."
        </p>

        <h3>c. Object</h3>
        <p>
          The object of a sentence is the noun or pronoun that receives the action of the verb. In the sentence "She kicked the ball," "the ball" is the object.
        </p>
        <p>
          Objects can also be indirect. In the sentence "I gave him a book," "a book" is the direct object and "him" is the indirect object, because the action is directed toward him.
        </p>
      </section>

      <section>
        <h2>3. Types of Sentences</h2>
        <p>
          Sentences can be categorized based on their structure. The main types of sentences include:
        </p>

        <h3>a. Simple Sentences</h3>
        <p>
          A simple sentence consists of one independent clause, which can stand alone as a complete thought. For example: "The sun sets."
        </p>
        <p>
          A simple sentence is often short, but it can also be extended with additional information such as compound subjects or predicates. For example: "The cat and dog slept soundly."
        </p>

        <h3>b. Compound Sentences</h3>
        <p>
          A compound sentence is made up of two or more independent clauses connected by a conjunction (such as "and," "but," "or") or a semicolon. For example: "She went to the store, and he stayed at home."
        </p>
        <p>
          Compound sentences allow writers to join related ideas and add variety to their writing. They can be used to combine simple ideas into a more complex structure.
        </p>

        <h3>c. Complex Sentences</h3>
        <p>
          A complex sentence contains one independent clause and at least one dependent clause. A dependent clause cannot stand alone as a sentence and usually begins with subordinating conjunctions such as "because," "although," or "when." For example: "Although it was raining, we went outside."
        </p>
        <p>
          Complex sentences are useful for showing relationships between different ideas or events, and they can provide additional information or context.
        </p>

        <h3>d. Compound-Complex Sentences</h3>
        <p>
          A compound-complex sentence combines elements of both compound and complex sentences. It contains two or more independent clauses and at least one dependent clause. For example: "She was tired because she had been working all day, but she still went to the party."
        </p>
        <p>
          Compound-complex sentences are great for expressing more detailed and nuanced thoughts, as they combine multiple ideas in a single sentence.
        </p>
      </section>

      <section>
        <h2>4. Common Errors in Sentence Structure</h2>
        <p>
          When constructing sentences, it's easy to make errors that can lead to confusion or grammatical mistakes. Some common sentence structure errors include:
        </p>
        <ul>
          <li>
            <strong>Fragment Sentences:</strong> These are incomplete sentences that lack either a subject or predicate. For example: "Because I was late."
          </li>
          <li>
            <strong>Run-on Sentences:</strong> Two or more independent clauses joined without proper punctuation or conjunctions. For example: "I went to the store I bought milk."
          </li>
          <li>
            <strong>Comma Splices:</strong> Using a comma to join two independent clauses without a conjunction. For example: "She is my friend, she is kind."
          </li>
          <li>
            <strong>Misplaced Modifiers:</strong> A modifier is a word or phrase that provides more detail about another part of the sentence. A misplaced modifier can cause confusion. For example: "She nearly drove the car for six hours." (This implies she did not drive the car for six hours.)
          </li>
        </ul>
        <p>
          To avoid these errors, ensure that each sentence has a clear subject and predicate, and that clauses are properly connected with appropriate punctuation or conjunctions.
        </p>
      </section>

      <section>
        <h2>5. Tips for Constructing Clear Sentences</h2>
        <ul>
          <li>Always start with a clear subject and predicate to make the meaning of your sentence obvious.</li>
          <li>Use appropriate conjunctions and punctuation to join related ideas smoothly.</li>
          <li>Avoid overly complicated sentences. If a sentence is too long, consider breaking it into two simpler sentences.</li>
          <li>Be mindful of the order of words in a sentence to maintain clarity, especially with more complex sentence structures.</li>
          <li>Proofread your sentences to ensure they are grammatically correct and effectively convey the intended meaning.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Ready to test your understanding with practice questions? <br/>
        Let's get started!"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b1"}
        >
          Start Practice
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b1")}
        >
          Back to Previous Page
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b2")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab1;