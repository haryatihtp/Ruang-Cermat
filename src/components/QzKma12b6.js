import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { 
      question: "1. Sebuah polimer memiliki sifat yang dapat terurai secara alami oleh mikroorganisme. Berdasarkan sifat ini, apa kemungkinan aplikasi polimer tersebut dalam kehidupan sehari-hari?", 
      options: ["Kantong plastik belanja", "Pembalut kabel listrik", "Komponen mesin industri", "Pengemas bahan kimia korosif"], 
      answer: "Kantong plastik belanja" 
    },
    { 
      question: "2. Salah satu keuntungan polimer sintetik adalah daya tahannya yang tinggi. Namun, apa dampak lingkungan dari sifat ini dan solusi yang dapat diusulkan?", 
      options: ["Polusi plastik; menggunakan bioplastik", "Degradasi tanah; memanfaatkan plastik lebih banyak", "Eutrofikasi air; meningkatkan produksi plastik", "Pemanasan global; menggunakan plastik sintetis lebih lama"], 
      answer: "Polusi plastik; menggunakan bioplastik" 
    },
    { 
      question: "3. Asam poliaktat (PLA) adalah polimer yang dibuat dari sumber daya terbarukan seperti jagung. Apa kelebihan PLA dibandingkan polimer berbasis minyak bumi?", 
      options: ["Lebih mudah terurai di lingkungan", "Lebih murah diproduksi", "Lebih tahan panas", "Lebih kuat secara mekanik"], 
      answer: "Lebih mudah terurai di lingkungan" 
    },
    { 
      question: "4. Dalam sintesis protein, urutan asam amino menentukan fungsi biologis protein. Jika terjadi mutasi pada urutan ini, apa dampaknya pada sifat protein?", 
      options: ["Fungsi protein dapat berubah", "Protein menjadi lebih stabil", "Protein akan terhidrolisis", "Ikatan hidrogen pada protein meningkat"], 
      answer: "Fungsi protein dapat berubah" 
    },
    { 
      question: "5. Nylon-6,6 adalah polimer yang banyak digunakan dalam industri tekstil. Polimer ini dihasilkan dari reaksi kondensasi antara heksametilendiamina dan asam adipat. Apa molekul kecil yang dihasilkan selama reaksi ini?", 
      options: ["Air", "Amonia", "Karbon dioksida", "Metana"], 
      answer: "Air" 
    },
    { 
      question: "6. Polimer dapat bersifat amorf atau kristalin. Bagaimana struktur kristalin memengaruhi sifat fisik polimer seperti kekuatan tarik dan titik leleh?", 
      options: ["Kekuatan tarik meningkat dan titik leleh lebih tinggi", "Kekuatan tarik menurun dan titik leleh lebih rendah", "Kekuatan tarik tetap dan titik leleh lebih rendah", "Kekuatan tarik meningkat dan titik leleh lebih rendah"], 
      answer: "Kekuatan tarik meningkat dan titik leleh lebih tinggi" 
    },
    { 
      question: "7. Struktur sekunder protein, seperti alfa-heliks, distabilkan oleh jenis interaksi apa?", 
      options: ["Ikatan hidrogen", "Ikatan ionik", "Ikatan kovalen", "Ikatan logam"], 
      answer: "Ikatan hidrogen" 
    },
    { 
      question: "8. Gelatin, yang digunakan dalam makanan, berasal dari kolagen yang terhidrolisis sebagian. Apa dampak suhu tinggi terhadap struktur gelatin?", 
      options: ["Struktur terdenaturasi", "Struktur menjadi lebih stabil", "Ikatan hidrogen meningkat", "Ikatan kovalen menjadi lebih kuat"], 
      answer: "Struktur terdenaturasi" 
    },
    { 
      question: "9. Polimer seperti polipropilena sering digunakan dalam kemasan makanan. Apa alasan utama penggunaan polimer ini dalam kemasan makanan?", 
      options: ["Tahan terhadap air dan bahan kimia", "Mudah terurai di lingkungan", "Memiliki sifat optik yang baik", "Dapat menyerap kelembapan"], 
      answer: "Tahan terhadap air dan bahan kimia" 
    },
    { 
      question: "10. Dalam pembuatan polimer sintetis, seperti polistirena, monomer stirena diubah menjadi polimer melalui mekanisme apa?", 
      options: ["Polimerisasi adisi", "Polimerisasi kondensasi", "Reaksi substitusi", "Reaksi hidrolisis"], 
      answer: "Polimerisasi adisi" 
    },
    { 
      question: "11. Apa yang terjadi pada struktur primer protein jika terkena zat denaturan seperti asam kuat atau suhu ekstrem?", 
      options: ["Struktur primer tetap utuh", "Terjadi hidrolisis ikatan peptida", "Ikatan hidrogen terbentuk", "Struktur menjadi lebih stabil"], 
      answer: "Struktur primer tetap utuh" 
    },
    { 
      question: "12. Kevlar, sebuah polimer tahan panas, banyak digunakan dalam rompi anti peluru. Apa sifat utama yang membuat Kevlar sangat kuat?", 
      options: ["Adanya ikatan hidrogen yang kuat antar rantai polimer", "Adanya ikatan ionik antar rantai polimer", "Adanya ikatan logam dalam struktur polimer", "Adanya ikatan van der Waals yang besar"], 
      answer: "Adanya ikatan hidrogen yang kuat antar rantai polimer" 
    },
    { 
      question: "13. Karet alam memiliki elastisitas tinggi karena struktur polimernya. Apa yang terjadi jika karet alam divulkanisasi?", 
      options: ["Elastisitasnya meningkat karena terbentuk ikatan silang", "Kekerasannya berkurang karena rantai polimer terputus", "Elastisitasnya menurun karena molekul menjadi linier", "Kekuatan tariknya berkurang karena degradasi"], 
      answer: "Elastisitasnya meningkat karena terbentuk ikatan silang" 
    },
    { 
      question: "14. Polyvinyl chloride (PVC) digunakan dalam berbagai aplikasi seperti pipa air. Apa dampak penambahan plasticizer pada sifat PVC?", 
      options: ["PVC menjadi lebih fleksibel", "PVC menjadi lebih kaku", "PVC menjadi lebih rapuh", "PVC menjadi lebih ringan"], 
      answer: "PVC menjadi lebih fleksibel" 
    },
    { 
      question: "15. Monomer glukosa dapat bergabung membentuk polimer seperti selulosa dan pati. Apa perbedaan utama antara struktur selulosa dan pati?", 
      options: ["Selulosa memiliki ikatan beta-glikosidik, pati memiliki ikatan alfa-glikosidik", "Selulosa memiliki ikatan ionik, pati memiliki ikatan kovalen", "Selulosa memiliki rantai bercabang, pati memiliki rantai linier", "Selulosa mengandung nitrogen, pati tidak"], 
      answer: "Selulosa memiliki ikatan beta-glikosidik, pati memiliki ikatan alfa-glikosidik" 
    },
    { 
      question: "16. Plastik polikarbonat digunakan dalam produksi botol air dan kaca anti pecah. Apa yang membuat polimer ini sangat transparan dan tahan lama?", 
      options: ["Struktur amorf dan ikatan kovalen yang kuat", "Struktur kristalin dan ikatan hidrogen", "Struktur bercabang dan ikatan van der Waals", "Struktur linier dan ikatan ionik"], 
      answer: "Struktur amorf dan ikatan kovalen yang kuat" 
    },
    { 
      question: "17. Dalam polimer termoplastik, apa yang terjadi pada rantai polimer saat dipanaskan?", 
      options: ["Rantai polimer menjadi lebih mudah bergerak", "Rantai polimer pecah menjadi monomer", "Rantai polimer menjadi lebih kaku", "Rantai polimer membentuk ikatan silang"], 
      answer: "Rantai polimer menjadi lebih mudah bergerak" 
    },
    { 
      question: "18. Apa yang menyebabkan protein kehilangan fungsinya jika strukturnya terdenaturasi?", 
      options: ["Perubahan pada struktur tiga dimensi protein", "Hilangnya ikatan peptida dalam rantai primer", "Penambahan ikatan hidrogen", "Pengurangan berat molekul protein"], 
      answer: "Perubahan pada struktur tiga dimensi protein" 
    },
    { 
      question: "19. Polimer superabsorben, seperti yang digunakan dalam popok, memiliki kemampuan menyerap air yang tinggi. Apa yang memungkinkan polimer ini menyerap air?", 
      options: ["Adanya gugus ionik yang menarik molekul air", "Struktur kristalin yang kaku", "Rantai bercabang yang rapat", "Adanya gugus hidrofobik yang menolak air"], 
      answer: "Adanya gugus ionik yang menarik molekul air" 
    },
    { 
      question: "20. Polimer komposit digunakan dalam pembuatan pesawat terbang. Apa kelebihan utama dari bahan komposit ini?", 
      options: ["Ringan dan sangat kuat", "Murah dan mudah didaur ulang", "Tahan terhadap pelarut organik", "Fleksibel dan mudah terbakar"], 
      answer: "Ringan dan sangat kuat" 
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
      <h1>Kuis HOTS Makromolekul Kimia Kelas XII</h1>
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