import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Chapter 7: Exposition Text</h1>

      <section>
        <h2>1. Definition of Exposition Text</h2>
        <p>
          Exposition text is a type of writing designed to explain, describe, or inform readers about a specific topic. Its primary goal is to provide clear, factual information and enhance the reader's understanding of a subject.
        </p>
        <p>
          Key Purposes:
        </p>
        <p>
          To provide detailed information about a topic, to explain complex concepts or processes, to educate readers through objective information, and to analyze and clarify ideas systematically.
        </p>
      </section>

      <section>
        <h2>2. Structure of Exposition Text</h2>
        <h3>a. General Statement</h3>
        <p>
          Introduces the main topic or subject and provides an overview of what will be explained.
        </p>
        <h3>b. Explanation</h3>
        <p>
          Presents detailed information about the topic and breaks down complex ideas into understandable parts.
        </p>
        <h3>c. Clarification</h3>
        <p>
          Provides further insights or examples and ensures complete understanding of the topic.
        </p>
      </section>

      <section>
        <h2>3. Characteristics of Exposition Text</h2>
        <h3>a. Key Features</h3>
        <p>
          Objective and factual presentation, logical and systematic organization, clear and precise language, and focus on informing rather than entertaining.
        </p>
        <h3>b. Language Features</h3>
        <p>
          Technical and specific vocabulary, passive voice and impersonal tone, cause and effect explanations, and comparative and analytica language.
        </p>
      </section>

      <section>
        <h2>4. Examples of Exposition Text</h2>
        <p>
          Common Types: Scientific articles and reports, encyclopedic entries, textbook explanations, process descriptions.
        </p>
        <h3>Sample Exposition Text</h3>
        <p><strong>Title:</strong> Photosynthesis: A Vital Process</p>
        <p><strong>General Statement:</strong> Photosynthesis is a complex biochemical process crucial for life on Earth.</p>
        <p><strong>Explanation:</strong> Plants convert sunlight, water, and carbon dioxide into glucose and oxygen through a series of chemical reactions in their chloroplasts.</p>
        <p><strong>Clarification:</strong> This process not only provides energy for plants but also produces oxygen as a byproduct, essential for most life forms.</p>
      </section>

      <div className="bottom-container">
        <h2>"Ready to test your skill about exposition text? <br/>
        Let's start your practice!"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing10b7"}
        >
          Start Practicing Now
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b6")}
        >
          Previous: Procedural Text
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b8")}
        >
          Next Chapter: Report Text
        </button>
      </div>
    </div>
  );
};

export default Bab7;