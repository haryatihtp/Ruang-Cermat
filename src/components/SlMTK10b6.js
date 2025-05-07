import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal6 = () => {
  const soal = [
    {
      pertanyaan: "Sebuah titik A(2, 3) direfleksikan terhadap sumbu x. Tentukan koordinat hasil refleksi.",
      opsi: ["(2, 3)", "(-2, 3)", "(2, -3)", "(-2, -3)"],
      jawaban: "(2, -3)",
      penjelasan: "Refleksi terhadap sumbu x mengubah y menjadi negatif, sehingga hasilnya (2, -3)."
    },
    {
      pertanyaan: "Sebuah titik B(-4, 1) direfleksikan terhadap sumbu y. Tentukan koordinat hasil refleksi.",
      opsi: ["(4, 1)", "(-4, -1)", "(-4, 1)", "(4, -1)"],
      jawaban: "(4, 1)",
      penjelasan: "Refleksi terhadap sumbu y mengubah x menjadi negatif dari aslinya."
    },
    {
      pertanyaan: "Titik P(1, 2) diputar sebesar 90° searah jarum jam terhadap titik asal. Tentukan koordinat hasilnya.",
      opsi: ["(-2, 1)", "(2, -1)", "(-1, -2)", "(1, 2)"],
      jawaban: "(2, -1)",
      penjelasan: "Rotasi 90° searah jarum jam mengubah koordinat menjadi (y, -x)."
    },
    {
      pertanyaan: "Titik Q(-3, 4) dilatasi dengan faktor skala 2 terhadap titik asal. Tentukan koordinat hasilnya.",
      opsi: ["(-6, 8)", "(-1.5, 2)", "(-3, 4)", "(-9, 12)"],
      jawaban: "(-6, 8)",
      penjelasan: "Dilatasi dengan faktor 2 menggandakan nilai x dan y menjadi (-6, 8)."
    },
    {
      pertanyaan: "Jika segitiga ABC direfleksikan terhadap garis y = x, apa yang terjadi pada koordinatnya?",
      opsi: ["x dan y saling bertukar", "x menjadi negatif", "y menjadi negatif", "Tidak berubah"],
      jawaban: "x dan y saling bertukar",
      penjelasan: "Refleksi terhadap garis y = x menukar posisi x dan y."
    },
    {
      pertanyaan: "Titik R(5, -2) digeser 3 satuan ke kanan dan 4 satuan ke atas. Tentukan koordinat hasilnya.",
      opsi: ["(8, 2)", "(2, -6)", "(8, -2)", "(5, 2)"],
      jawaban: "(8, 2)",
      penjelasan: "Perpindahan 3 ke kanan menambah x dan 4 ke atas menambah y menjadi (8, 2)."
    },
    {
      pertanyaan: "Tentukan hasil rotasi titik S(2, 1) sebesar 180° terhadap titik asal.",
      opsi: ["(-2, -1)", "(1, 2)", "(2, -1)", "(-1, -2)"],
      jawaban: "(-2, -1)",
      penjelasan: "Rotasi 180° mengubah koordinat menjadi (-x, -y)."
    },
    {
      pertanyaan: "Sebuah titik T(3, -4) direfleksikan terhadap garis y = -x. Tentukan koordinat hasilnya.",
      opsi: ["(4, -3)", "(-4, 3)", "(4, 3)", "(-3, -4)"],
      jawaban: "(-4, 3)",
      penjelasan: "Refleksi terhadap garis y = -x menukar x dan y dengan tanda yang berlawanan."
    },
    {
      pertanyaan: "Titik U(0, -3) dilatasi dengan faktor skala 0,5 terhadap titik asal. Tentukan koordinat hasilnya.",
      opsi: ["(0, -1.5)", "(0, -6)", "(0.5, -3)", "(0, 3)"],
      jawaban: "(0, -1.5)",
      penjelasan: "Dilatasi dengan faktor 0,5 membagi koordinat dengan 2 menjadi (0, -1.5)."
    },
    {
      pertanyaan: "Rotasi 270° berlawanan arah jarum jam terhadap titik asal akan menghasilkan?",
      opsi: ["(y, -x)", "(-y, x)", "(-x, -y)", "(x, y)"],
      jawaban: "(y, -x)",
      penjelasan: "Rotasi 270° berlawanan arah jarum jam sama dengan rotasi 90° searah jarum jam."
    }
  ];

   const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [result, setResult] = useState({});
  
    const handleAnswer = (index, opsi) => {
      const isCorrect = opsi === soal[index].jawaban;
      setSelectedAnswers({ ...selectedAnswers, [index]: opsi });
      setResult({ ...result, [index]: isCorrect ? 'Benar' : 'Salah' });
    };
  
    const handleNext = () => {
      if (currentIndex < soal.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Latihan Soal: Transformasi Geometri</h1>
  
          <div className="latihan-soal1-question">
            <p>{currentIndex + 1}. {soal[currentIndex].pertanyaan}</p>
            <div className="latihan-soal1-answers">
              {soal[currentIndex].opsi.map((opsi, i) => (
                <button
                  key={i}
                  className={`latihan-soal1-answer-button ${selectedAnswers[currentIndex] === opsi ? 'latihan-soal1-selected-answer' : ''}`}
                  onClick={() => handleAnswer(currentIndex, opsi)}
                  disabled={selectedAnswers[currentIndex] !== undefined} // Disable after answering
                >
                  {opsi}
                </button>
              ))}
            </div>
            {selectedAnswers[currentIndex] && (
              <p className={`jawaban ${result[currentIndex] === 'Benar' ? 'correct' : 'incorrect'}`}>
                {result[currentIndex] === 'Benar' ? "Jawaban Benar" : "Jawaban Salah"}
              </p>
            )}
            <p className={`penjelasan ${selectedAnswers[currentIndex] ? "show-penjelasan" : ""}`}>
              <strong>Penjelasan:</strong> {soal[currentIndex].penjelasan}
            </p>
          </div>
  
          <div className="latihan-soal1-navigation-buttons">
            <button
              className="latihan-soal1-answer-button"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Soal Sebelumnya
            </button>
            <button
              className="latihan-soal1-answer-button"
              onClick={handleNext}
              disabled={currentIndex === soal.length - 1}
            >
              Soal Selanjutnya
            </button>
          </div>
        </div>
      </div>
    );
  };

export default LatihanSoal6;