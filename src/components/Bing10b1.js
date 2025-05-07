import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab1 = () => {
  const navigate = useNavigate();

  return (
    <div className="descriptive-text-container">
      <h1>Chapter 1: Understanding Descriptive Text</h1>

      <section>
        <h2>1. What is Descriptive Text?</h2>
        <p>
          Descriptive text is a type of writing that aims to provide a vivid and detailed 
          portrayal of a person, place, object, or event. It uses sensory details and 
          figurative language to create a clear image in the reader's mind, allowing them 
          to experience the subject through words.
        </p>
        <p>
          The primary purpose of descriptive text is to enable the reader to visualize 
          and understand the subject matter as if they were experiencing it firsthand.
        </p>
        <img src="/images/descriptive-text.gif" alt="Descriptive Text Example" className="section-image" />
      </section>

      <section>
        <h2>2. Structure of Descriptive Text</h2>
        <p>
          Descriptive text typically follows a specific structure to effectively convey 
          information about the subject. The two main components of descriptive text are 
          the identification (or introduction) and the description.
        </p>

        <h3>a. Identification</h3>
        <p>
          The identification part introduces the subject of the description. It usually 
          appears at the beginning of the text and provides a general overview or statement 
          about what is being described.
        </p>
        <img src="/images/identification.jpg" alt="Identification in Descriptive Text" className="section-image" />

        <h3>b. Description</h3>
        <p>
          The description forms the main body of the text. It provides specific details 
          about the subject, including its features, characteristics, qualities, and parts. 
          This section uses vivid language to paint a clear picture in the reader's mind.
        </p>
        <img src="/images/description.jpg" alt="Description in Descriptive Text" className="section-image" />
      </section>

      <section>
        <h2>3. Language Features of Descriptive Text</h2>
        <p>
          Descriptive text employs various language features to create a rich and 
          engaging portrayal. Some key features include:
        </p>

        <h3>a. Specific Nouns</h3>
        <p>
          Descriptive texts use specific nouns to clearly identify the subject being 
          described, such as "oak tree" instead of just "tree," or "mansion" instead of "house."
        </p>
        <img src="/images/specific-nouns.jpg" alt="Specific Nouns in Descriptive Text" className="section-image" />

        <h3>b. Vivid Adjectives</h3>
        <p>
          Adjectives play a crucial role in descriptive writing. They provide details about 
          size, color, shape, texture, and other qualities of the subject, helping to create 
          a more vivid image.
        </p>
        <img src="/images/vivid-adjectives.jpg" alt="Vivid Adjectives in Descriptive Text" className="section-image" />

        <h3>c. Figurative Language</h3>
        <p>
          Descriptive texts often use figurative language such as similes, metaphors, 
          and personification to create more engaging and imaginative descriptions.
        </p>
        <img src="/images/figurative-language.jpg" alt="Figurative Language in Descriptive Text" className="section-image" />
      </section>

      <section>
        <h2>4. Types of Descriptive Text</h2>
        <p>
          Descriptive text can be categorized based on the subject being described. 
          Common types include:
        </p>

        <h3>a. Description of a Person</h3>
        <p>
          This type focuses on describing an individual's physical appearance, personality 
          traits, habits, and other characteristics that make them unique.
        </p>
        <img src="/images/person-description.jpg" alt="Description of a Person" className="section-image" />

        <h3>b. Description of a Place</h3>
        <p>
          This involves describing a location, such as a city, landmark, or natural 
          setting, often including details about its appearance, atmosphere, and significance.
        </p>
        <img src="/images/place-description.jpg" alt="Description of a Place" className="section-image" />

        <h3>c. Description of an Object</h3>
        <p>
          This type of descriptive text focuses on detailing the physical attributes, 
          functions, and sometimes the history or significance of a particular object.
        </p>
        <img src="/images/object-description.jpg" alt="Description of an Object" className="section-image" />
      </section>

      <section>
        <h2>5. Writing Process for Descriptive Text</h2>
        <p>
          Creating an effective descriptive text involves several steps:
        </p>
        <ul>
          <li>
            <strong>Choosing a Subject:</strong> Select a specific person, place, or thing to describe.
          </li>
          <li>
            <strong>Brainstorming:</strong> Generate ideas and gather details about the subject.
          </li>
          <li>
            <strong>Organizing:</strong> Arrange the details in a logical order, often moving from general to specific.
          </li>
          <li>
            <strong>Drafting:</strong> Write the initial version of the text, focusing on vivid and specific details.
          </li>
          <li>
            <strong>Revising:</strong> Review and improve the text, enhancing the use of descriptive language and ensuring coherence.
          </li>
          <li>
            <strong>Editing:</strong> Check for and correct any grammatical or spelling errors.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Common Challenges in Writing Descriptive Text</h2>
        <p>
          Writers often face several challenges when crafting descriptive texts:
        </p>
        <ul>
          <li>
            <strong>Overuse of Adjectives:</strong> Using too many adjectives can make the text feel cluttered and hard to read.
          </li>
          <li>
            <strong>Lack of Specificity:</strong> Vague or general descriptions fail to create a clear image in the reader's mind.
          </li>
          <li>
            <strong>Poor Organization:</strong> Failing to structure the description logically can confuse the reader.
          </li>
          <li>
            <strong>Neglecting Sensory Details:</strong> Forgetting to include details that appeal to different senses can make the description less immersive.
          </li>
        </ul>
        <img src="/images/writing-challenges.jpg" alt="Challenges in Descriptive Writing" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Ready to test your understanding of descriptive text? <br/>
        Let's start the practice questions!"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing10b1"}
        >
          Start Practicing Now
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/#")}
        >
          Home
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b2")}
        >
          Next Chapter: Simple Present Tense
        </button>
      </div>
    </div>
  );
};

export default Bab1;