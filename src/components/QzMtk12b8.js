import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Tentukan suku ke-4 dari pengembangan \( (x + 2)^5 \) menggunakan Teorema Binomial.",
      options: [
        "\( 80x^2 \)",
        "\( 160x^2 \)",
        "\( 40x^2 \)",
        "\( 20x^2 \)"
      ],
      answer: "\( 80x^2 \)"
    },
    {
      question: "2. Berapakah jumlah semua koefisien dari pengembangan \( (x - 3)^4 \)?",
      options: ["1", "0", "-1", "16"],
      answer: "16"
    },
    {
      question: "3. Tentukan suku tengah dari \( (2x + 1)^6 \).",
      options: [
        "\( 15x^3 \)",
        "\( 60x^3 \)",
        "\( 20x^3 \)",
        "\( 40x^3 \)"
      ],
      answer: "\( 60x^3 \)"
    },
    {
      question: "4. Hitung koefisien dari \( x^4 \) dalam pengembangan \( (x + 1)^7 \).",
      options: ["35", "21", "7", "14"],
      answer: "35"
    },
    {
      question: "5. Berapakah suku terakhir dari \( (3x - 2)^5 \)?",
      options: [
        "\( -32 \)",
        "\( -64 \)",
        "\( -243 \)",
        "\( 32 \)"
      ],
      answer: "\( -32 \)"
    },
    {
      question: "6. Tentukan jumlah semua koefisien dari pengembangan \( (x + 2)^8 \).",
      options: ["256", "512", "128", "64"],
      answer: "512"
    },
    {
      question: "7. Dalam pengembangan \( (2x - 3)^5 \), hitung koefisien dari \( x^3 \).",
      options: ["-720", "-1080", "-360", "-540"],
      answer: "-1080"
    },
    {
      question: "8. Berapakah suku kedua dalam pengembangan \( (x + 4)^6 \)?",
      options: [
        "\( 96x^5 \)",
        "\( 64x^5 \)",
        "\( 128x^5 \)",
        "\( 192x^5 \)"
      ],
      answer: "\( 96x^5 \)"
    },
    {
      question: "9. Tentukan koefisien dari \( x^2 \) dalam pengembangan \( (x + 3)^4 \).",
      options: ["54", "36", "27", "12"],
      answer: "54"
    },
    {
      question: "10. Dalam pengembangan \( (x - 1)^5 \), hitung suku dengan pangkat tertinggi.",
      options: ["\( x^5 \)", "\( -5x^4 \)", "\( 5x^4 \)", "\( -x^5 \)"],
      answer: "\( x^5 \)"
    },
    {
      question: "11. Tentukan suku ke-5 dari pengembangan \( (x - 2)^6 \).",
      options: [
        "\( 120x^2 \)",
        "\( -240x^2 \)",
        "\( 240x^2 \)",
        "\( -120x^2 \)"
      ],
      answer: "\( -240x^2 \)"
    },
    {
      question: "12. Berapakah jumlah semua koefisien dalam pengembangan \( (x - 2)^7 \)?",
      options: ["1", "-128", "128", "-1"],
      answer: "-128"
    },
    {
      question: "13. Hitung suku ke-3 dari pengembangan \( (2x + 1)^5 \).",
      options: [
        "\( 80x^3 \)",
        "\( 40x^3 \)",
        "\( 60x^3 \)",
        "\( 20x^3 \)"
      ],
      answer: "\( 60x^3 \)"
    },
    {
      question: "14. Dalam pengembangan \( (x + 3)^6 \), tentukan koefisien dari suku dengan pangkat genap.",
      options: ["729", "405", "243", "81"],
      answer: "729"
    },
    {
      question: "15. Berapakah koefisien suku ke-4 dari \( (x + 2)^9 \)?",
      options: ["336", "448", "224", "112"],
      answer: "336"
    },
    {
      question: "16. Dalam pengembangan \( (x - 1)^7 \), hitung nilai suku terakhir.",
      options: ["1", "-1", "-7", "7"],
      answer: "-1"
    },
    {
      question: "17. Hitung jumlah semua koefisien dari \( (2x + 1)^5 \).",
      options: ["32", "64", "16", "8"],
      answer: "32"
    },
    {
      question: "18. Dalam pengembangan \( (x^2 + 1)^5 \), tentukan suku ketiga.",
      options: [
        "\( 20x^6 \)",
        "\( 10x^4 \)",
        "\( 15x^4 \)",
        "\( 30x^4 \)"
      ],
      answer: "\( 10x^4 \)"
    },
    {
      question: "19. Tentukan koefisien dari \( x^3 \) dalam pengembangan \( (x - 4)^5 \).",
      options: ["960", "-960", "-640", "640"],
      answer: "-960"
    },
    {
      question: "20. Dalam pengembangan \( (x + 3)^4 \), tentukan nilai dari suku dengan pangkat terkecil.",
      options: ["1", "3", "27", "81"],
      answer: "81"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="app">
      <h1>Tryout Kimia Kelas XI: Hukum Termokimia</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;
