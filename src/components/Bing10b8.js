import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Chapter 8: Report Text</h1>

      <section>
        <h2>1. Definition of Report Text</h2>
        <p>
          A report text is a type of informative writing that systematically describes and explains a specific topic, phenomenon, or subject. Its primary purpose is to provide factual, objective information to inform and educate readers.
        </p>
        <p>
          Key Purposes:
        </p>
        <p>
          To provide comprehensive information about a specific topic, to describe natural, social, or scientific phenomena, to present factual and objective information, and to analyze and explain complex subjects.
        </p>
      </section>

      <section>
        <h2>2. Structure of Report Text</h2>
        <h3>a. General Classification</h3>
        <p>
          Introduces the topic or subject being discussed and provides a broad overview of the subject.
        </p>
        <h3>b. Description</h3>
        <p>
          Offers detailed information about specific aspects of the topic and breaks down characteristics, functions, or behaviors.
        </p>
      </section>

      <section>
        <h2>3. Characteristics of Report Text</h2>
        <h3>a. Key Features</h3>
        <p>
          Objective and factual presentation, logical and systematic organization, focus on information and analysis, and use of technical or specialized vocabulary.
        </p>
        <h3>b. Language Features</h3>
        <p>
          Present tense, technical and precise language, formal tone, and objective and impersonal style.
        </p>
      </section>

      <section>
        <h2>4. Examples of Report Text</h2>
        <p>
          Common Types: Scientific research papers, wildlife and nature documentations, technical manuals, and environmental impact reports.
        </p>
        <h3>Sample Report Text</h3>
        <p><strong>Title:</strong> The Honeybee Ecosystem</p>
        <p><strong>General Classification:</strong> Honeybees are critical pollinators in global ecosystems, belonging to the Apidae family.</p>
        <p><strong>Description:</strong> These insects live in complex social structures with distinct roles. Worker bees collect nectar, maintain the hive, and protect the colony. Queens are responsible for reproduction, while drones mate with queens from other colonies.</p>
      </section>

      <div className="bottom-container">
        <h2>"Ready to test your skill about report text? <br/>
        Let's start your practice!"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing10b8"}
        >
          Start Practicing Now
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b7")}
        >
          Previous: Exposition Text
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/#")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Bab8;