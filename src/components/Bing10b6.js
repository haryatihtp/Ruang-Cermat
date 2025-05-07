import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b1.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Chapter 6: Procedural Text</h1>

      <section>
        <h2>1. Definition of Procedural Text</h2>
        <p>
          Procedural text is a type of writing that provides clear, step-by-step instructions on how to do something or complete a specific task. Its primary purpose is to guide the reader through a process systematically and precisely.
        </p>
        <p>
          Key Purposes:
        </p>
        <p>
        To provide clear, sequential instructions.
        To explain how to complete a specific task.
        To ensure the reader can successfully follow the process.
        To break down complex tasks into manageable steps.
        </p>
      </section>

      <section>
        <h2>2. Structure of Procedural Text</h2>
        <h3>a. Goal/Aim</h3>
        <p>
          Clearly states the purpose of the procedure and provides context for the tasks.
        </p>
        <h3>b. Materials/Ingredients</h3>
        <p>
          Lists everything needed to complete the task and helps readers prepare in advance.
        </p>
        <h3>c. Step-by-Step Instructions</h3>
        <p>
          Provides clear, sequential steps, and uses imperative verbs.
        </p>
      </section>

      <section>
        <h2>3. Characteristics of Procedural Text</h2>
        <h3>a. Key Features</h3>
        <p>
          Clear and direct language, logical sequence of steps, precise and concise instructions, and focus on practical guidance.
        </p>
        <h3>b. Language Features</h3>
        <p>
          Imperative verbs (e.g., mix, pour, heat), numbered or bulleted steps, technical or specific vocabulary, and time markers and sequence words.
        </p>
      </section>

      <section>
        <h2>4. Examples of Procedural Text</h2>
        <p>
          Common Types: Recipes, DIY instructions, user manuals, and science experiment protocols.
        </p>
        <h3>Sample Procedural Text: How to Make Pancakes</h3>
        <p><strong>Goal:</strong> Create delicious homemade pancakes</p>
        <p><strong>Materials:</strong>
          - 1 cup flour
          - 2 tbsp sugar
          - 2 tsp baking powder
          - 1 egg
          - 3/4 cup milk
          - 2 tbsp melted butter
        </p>
        <p><strong>Steps:</strong>
          1. Mix dry ingredients in a bowl
          2. Whisk egg, milk, and melted butter in another bowl
          3. Combine wet and dry ingredients
          4. Heat pan and add butter
          5. Pour batter and cook until bubbles form
          6. Flip and cook other side until golden
        </p>
      </section>

      <div className="bottom-container">
        <h2>
          "Ready to test your skill about procedural text?<br/>Let's start Practicing!"
        </h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing10b6"}
        >
          Start Practicing Now
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b5")}
        >
          Previous: Narrative Text
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing10b7")}
        >
          Next Chapter: Exposition Text
        </button>
      </div>
    </div>
  );
};

export default Bab6;