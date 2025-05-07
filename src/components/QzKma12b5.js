import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "1. Apakah nama IUPAC dari senyawa aromatik dengan rumus C6H5CH3?",
      options: ["Benzena", "Toluena", "Fenol", "Anilin"],
      answer: "Toluena",
    },
    {
      question: "2. Manakah senyawa yang menunjukkan reaksi substitusi elektrofilik aromatik?",
      options: [
        "Benzena",
        "Etena",
        "Metana",
        "Butana"
      ],
      answer: "Benzena",
    },
    {
      question: "3. Apa produk utama dari nitrasi benzena menggunakan campuran asam nitrat pekat dan asam sulfat pekat?",
      options: ["Nitrobenzena", "Benzena sulfonat", "Fenol", "Toluena"],
      answer: "Nitrobenzena",
    },
    {
      question: "4. Reaksi Friedel-Crafts alkilasi benzena menghasilkan apa?",
      options: ["Alkilbenzena", "Nitrobenzena", "Fenol", "Anilin"],
      answer: "Alkilbenzena",
    },
    {
      question: "5. Senyawa mana yang dapat digunakan sebagai katalis dalam reaksi Friedel-Crafts?",
      options: ["AlCl3", "NaOH", "HCl", "KOH"],
      answer: "AlCl3",
    },
    {
      question: "6. Apakah nama senyawa dengan rumus C6H5OH?",
      options: ["Fenol", "Anilin", "Toluena", "Benzaldehida"],
      answer: "Fenol",
    },
    {
      question: "7. Senyawa benzena dengan gugus -NO2 disebut apa?",
      options: ["Nitrobenzena", "Benzena sulfonat", "Fenol", "Anilin"],
      answer: "Nitrobenzena",
    },
    {
      question: "8. Manakah reaksi yang menggambarkan sifat aromatik benzena?",
      options: [
        "Reaksi adisi",
        "Reaksi substitusi",
        "Reaksi polimerisasi",
        "Reaksi oksidasi"
      ],
      answer: "Reaksi substitusi",
    },
    {
      question: "9. Apakah produk utama dari sulfonasi benzena?",
      options: ["Benzena sulfonat", "Nitrobenzena", "Fenol", "Toluena"],
      answer: "Benzena sulfonat",
    },
    {
      question: "10. Apa nama senyawa aromatik dengan gugus -CH=CH2 terikat pada cincin benzena?",
      options: ["Stirena", "Toluena", "Xilena", "Fenol"],
      answer: "Stirena",
    },
    {
      question: "11. Apa sifat khas dari senyawa aromatik yang membedakannya dari alifatik?",
      options: ["Delokalisasi elektron pi", "Kerapatan energi rendah", "Reaksi pembakaran cepat", "Kelarutan tinggi dalam air"],
      answer: "Delokalisasi elektron pi",
    },
    {
      question: "12. Apakah nama senyawa aromatik dengan dua gugus metil pada cincin benzena?",
      options: ["Xilena", "Toluena", "Fenol", "Stirena"],
      answer: "Xilena",
    },
    {
      question: "13. Senyawa benzena dengan gugus fungsi -CHO disebut apa?",
      options: ["Benzaldehida", "Benzena sulfonat", "Toluena", "Anilin"],
      answer: "Benzaldehida",
    },
    {
      question: "14. Apa perbedaan utama antara benzena dan naftalena?",
      options: [
        "Naftalena memiliki dua cincin aromatik",
        "Benzena bersifat non-aromatik",
        "Naftalena tidak bereaksi dengan bromin",
        "Naftalena hanya mengalami reaksi oksidasi"
      ],
      answer: "Naftalena memiliki dua cincin aromatik",
    },
    {
      question: "15. Manakah contoh dari senyawa aromatik polisiklik?",
      options: ["Naftalena", "Benzena", "Toluena", "Xilena"],
      answer: "Naftalena",
    },
    {
      question: "16. Apa nama senyawa benzena dengan gugus -NH2?",
      options: ["Anilin", "Fenol", "Toluena", "Nitrobenzena"],
      answer: "Anilin",
    },
    {
      question: "17. Apa produk utama dari oksidasi katalitik toluena?",
      options: ["Asam benzoat", "Fenol", "Anilin", "Xilena"],
      answer: "Asam benzoat",
    },
    {
      question: "18. Senyawa benzena dengan gugus -COOH disebut apa?",
      options: ["Asam benzoat", "Benzaldehida", "Toluena", "Anilin"],
      answer: "Asam benzoat",
    },
    {
      question: "19. Apa kegunaan utama benzena dalam industri kimia?",
      options: ["Sebagai pelarut organik", "Sebagai bahan bakar", "Sebagai antioksidan", "Sebagai katalis"],
      answer: "Sebagai pelarut organik",
    },
    {
      question: "20. Reaksi polimerisasi stirena menghasilkan apa?",
      options: ["Polistirena", "Polietena", "Polipropilena", "PVC"],
      answer: "Polistirena",
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