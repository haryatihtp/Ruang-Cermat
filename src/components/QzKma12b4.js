import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Senyawa karbon manakah yang termasuk dalam golongan hidrokarbon aromatik?",
      options: ["Metana", "Etena", "Benzena", "Propanol"],
      answer: "Benzena",
    },
    {
      question: "2. Reaksi mana yang dapat digunakan untuk membedakan antara alkena dan alkana?",
      options: [
        "Reaksi dengan bromin dalam larutan CCl4",
        "Reaksi dengan air",
        "Reaksi pembakaran",
        "Reaksi hidrogenasi"
      ],
      answer: "Reaksi dengan bromin dalam larutan CCl4",
    },
    {
      question: "3. Senyawa karbon dengan rumus molekul C2H2 memiliki nama IUPAC apa?",
      options: ["Etana", "Etena", "Etuna", "Etanol"],
      answer: "Etuna",
    },
    {
      question: "4. Senyawa karbon mana yang memiliki ikatan rangkap tiga?",
      options: ["Propuna", "Propanol", "Propena", "Propana"],
      answer: "Propuna",
    },
    {
      question: "5. Reaksi substitusi pada senyawa karbon terutama terjadi pada jenis senyawa apa?",
      options: ["Alkana", "Alkena", "Alkuna", "Amina"],
      answer: "Alkana",
    },
    {
      question: "6. Polimer manakah yang terbentuk dari monomer etena?",
      options: ["Polietena", "Polipropilena", "Polistirena", "PVC"],
      answer: "Polietena",
    },
    {
      question: "7. Apakah nama senyawa karbon dengan rumus struktur CH3-CH=CH2?",
      options: ["Propena", "Propana", "Propuna", "Propanol"],
      answer: "Propena",
    },
    {
      question: "8. Reaksi hidrolisis senyawa ester menghasilkan apa?",
      options: [
        "Asam karboksilat dan alkohol",
        "Ketona dan alkohol",
        "Alkana dan air",
        "Eter dan alkohol"
      ],
      answer: "Asam karboksilat dan alkohol",
    },
    {
      question: "9. Senyawa karbon yang memiliki gugus fungsi -OH disebut apa?",
      options: ["Alkohol", "Eter", "Aldehida", "Ketona"],
      answer: "Alkohol",
    },
    {
      question: "10. Apakah nama IUPAC senyawa karbon dengan rumus CH3COCH3?",
      options: ["Propanal", "Propanon", "Propanol", "Propana"],
      answer: "Propanon",
    },
    {
      question: "11. Manakah yang merupakan contoh senyawa organik tak jenuh?",
      options: ["Etena", "Metana", "Propanal", "Etanol"],
      answer: "Etena",
    },
    {
      question: "12. Apakah nama IUPAC senyawa yang memiliki gugus fungsi -CHO?",
      options: ["Aldehida", "Ketona", "Asam karboksilat", "Alkohol"],
      answer: "Aldehida",
    },
    {
      question: "13. Senyawa karbon yang mengandung cincin benzena disebut apa?",
      options: ["Aromatik", "Alifatik", "Alkana", "Eter"],
      answer: "Aromatik",
    },
    {
      question: "14. Reaksi eliminasi pada alkohol dapat menghasilkan senyawa apa?",
      options: ["Alkena", "Alkana", "Amina", "Eter"],
      answer: "Alkena",
    },
    {
      question: "15. Apakah nama polimer yang terbentuk dari monomer vinil klorida?",
      options: ["PVC", "Polietena", "Polipropilena", "Polistirena"],
      answer: "PVC",
    },
    {
      question: "16. Gugus fungsi apa yang dimiliki oleh senyawa etanoat?",
      options: ["Asam karboksilat", "Alkohol", "Ketona", "Eter"],
      answer: "Asam karboksilat",
    },
    {
      question: "17. Apakah produk utama dari reaksi pembakaran sempurna metana?",
      options: ["Karbon dioksida dan air", "Karbon monoksida", "Karbon dioksida dan oksigen", "Karbon dioksida dan etanol"],
      answer: "Karbon dioksida dan air",
    },
    {
      question: "18. Senyawa karbon manakah yang merupakan contoh dari asam karboksilat?",
      options: ["Asam asetat", "Etanol", "Metana", "Etena"],
      answer: "Asam asetat",
    },
    {
      question: "19. Reaksi adisi terutama terjadi pada senyawa karbon jenis apa?",
      options: ["Alkena dan alkuna", "Alkana dan alkena", "Alkana dan aromatik", "Aromatik dan ester"],
      answer: "Alkena dan alkuna",
    },
    {
      question: "20. Apa nama senyawa karbon dengan rumus molekul C3H8O?",
      options: ["Propanol", "Propanal", "Propena", "Propanon"],
      answer: "Propanol",
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
      <h1>Kuis Kimia Kelas XII</h1>
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