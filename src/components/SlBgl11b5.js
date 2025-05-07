import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
    {
      question: "Apa fungsi utama dari sistem imun manusia?",
      options: [
        { label: "A. Mengatur suhu tubuh", value: "A" },
        { label: "B. Melindungi tubuh dari infeksi penyakit", value: "B", isCorrect: true },
        { label: "C. Menyaring racun dalam tubuh", value: "C" },
        { label: "D. Menghasilkan energi", value: "D" },
      ],
      explanation:
        "Fungsi utama dari sistem imun adalah melindungi tubuh dari infeksi oleh mikroorganisme patogen seperti bakteri, virus, dan jamur.",
    },
    {
      question: "Bagaimana tubuh mengidentifikasi patogen?",
      options: [
        { label: "A. Dengan memproduksi sel darah merah", value: "A" },
        { label: "B. Dengan menggunakan sel-sel imun yang mengenali antigen", value: "B", isCorrect: true },
        { label: "C. Dengan meningkatkan suhu tubuh", value: "C" },
        { label: "D. Dengan memproduksi hormon tertentu", value: "D" },
      ],
      explanation:
        "Tubuh mengidentifikasi patogen melalui sel-sel imun yang mengenali antigen, yang merupakan molekul yang terdapat pada permukaan patogen.",
    },
    {
      question: "Sel darah putih yang berfungsi untuk melawan infeksi adalah …",
      options: [
        { label: "A. Limfosit", value: "A", isCorrect: true },
        { label: "B. Trombosit", value: "B" },
        { label: "C. Eritrosit", value: "C" },
        { label: "D. Sel darah merah", value: "D" },
      ],
      explanation:
        "Limfosit adalah sel darah putih yang berperan penting dalam respon imun tubuh, seperti mengenali dan menghancurkan patogen.",
    },
    {
      question: "Apa yang dimaksud dengan antibodi?",
      options: [
        { label: "A. Protein yang melawan infeksi dengan mengikat antigen", value: "A", isCorrect: true },
        { label: "B. Sel yang menghasilkan energi untuk tubuh", value: "B" },
        { label: "C. Hormon yang mengatur metabolisme tubuh", value: "C" },
        { label: "D. Sel yang mengangkut oksigen", value: "D" },
      ],
      explanation:
        "Antibodi adalah protein yang diproduksi oleh tubuh untuk mengenali dan menetralkan antigen, seperti virus dan bakteri, dalam tubuh.",
    },
    {
      question: "Vaksin bekerja dengan cara...",
      options: [
        { label: "A. Memberikan imunitas dengan cara melatih tubuh mengenali patogen tertentu", value: "A", isCorrect: true },
        { label: "B. Menghancurkan patogen secara langsung", value: "B" },
        { label: "C. Menyembuhkan penyakit secara langsung", value: "C" },
        { label: "D. Mengaktifkan sistem pencernaan tubuh", value: "D" },
      ],
      explanation:
        "Vaksin bekerja dengan cara memperkenalkan tubuh pada patogen yang telah dilemahkan atau dimodifikasi, sehingga tubuh bisa membangun kekebalan terhadap patogen tersebut tanpa menimbulkan penyakit.",
    },
    {
      question: "Apa peran utama dari sel T dalam sistem imun?",
      options: [
        { label: "A. Mengangkut oksigen ke jaringan tubuh", value: "A" },
        { label: "B. Menghasilkan antibodi", value: "B" },
        { label: "C. Menghancurkan sel yang terinfeksi patogen", value: "C", isCorrect: true },
        { label: "D. Menyimpan informasi genetik", value: "D" },
      ],
      explanation:
        "Sel T berperan dalam menghancurkan sel yang telah terinfeksi oleh patogen, serta membantu mengatur respon imun tubuh.",
    },
    {
      question: "Apa yang dimaksud dengan imunitas pasif?",
      options: [
        { label: "A. Imunitas yang diperoleh melalui vaksinasi", value: "A" },
        { label: "B. Imunitas yang diperoleh dari antibodi orang lain", value: "B", isCorrect: true },
        { label: "C. Imunitas yang diperoleh dari olahraga", value: "C" },
        { label: "D. Imunitas yang diperoleh melalui infeksi sebelumnya", value: "D" },
      ],
      explanation:
        "Imunitas pasif adalah jenis imunitas yang diperoleh ketika seseorang menerima antibodi dari sumber luar, seperti melalui ASI atau injeksi antibodi.",
    },
    {
      question: "Apa fungsi dari limfa dalam sistem imun?",
      options: [
        { label: "A. Mengangkut nutrisi ke sel", value: "A" },
        { label: "B. Menyaring patogen dari cairan tubuh", value: "B", isCorrect: true },
        { label: "C. Menghasilkan energi", value: "C" },
        { label: "D. Mengatur suhu tubuh", value: "D" },
      ],
      explanation:
        "Limfa berfungsi menyaring patogen dan partikel asing dari cairan tubuh serta membantu melawan infeksi.",
    },
    {
      question: "Apa yang terjadi saat tubuh mengalami peradangan?",
      options: [
        { label: "A. Suhu tubuh menurun", value: "A" },
        { label: "B. Jaringan tubuh memperbaiki kerusakan", value: "B", isCorrect: true },
        { label: "C. Produksi sel darah merah meningkat", value: "C" },
        { label: "D. Sistem pencernaan aktif", value: "D" },
      ],
      explanation:
        "Peradangan adalah respon alami tubuh untuk melindungi dan memperbaiki jaringan yang rusak akibat infeksi atau cedera.",
    },
    {
      question: "Apa yang dimaksud dengan autoimunitas?",
      options: [
        { label: "A. Kondisi di mana tubuh menyerang sel-sel asing", value: "A" },
        { label: "B. Kondisi di mana tubuh menyerang sel-sel sendiri", value: "B", isCorrect: true },
        { label: "C. Kondisi di mana tubuh tidak merespon infeksi", value: "C" },
        { label: "D. Kondisi di mana tubuh menghasilkan energi berlebih", value: "D" },
      ],
      explanation:
        "Autoimunitas adalah kondisi di mana sistem imun tubuh secara keliru menyerang sel dan jaringan tubuh sendiri.",
    },
    {
      question: "Apa fungsi utama dari antibodi dalam sistem imun manusia?",
      options: [
        { label: "A. Mengangkut oksigen", value: "A" },
        { label: "B. Menetralkan antigen seperti bakteri dan virus", value: "B", isCorrect: true },
        { label: "C. Mengatur tekanan darah", value: "C" },
        { label: "D. Menghasilkan energi untuk tubuh", value: "D" },
      ],
      explanation:
        "Fungsi utama antibodi adalah menetralkan antigen seperti bakteri dan virus, membantu tubuh melawan infeksi.",
    },  
  
];

const handleNextQuestion = () => {
  if (currentQuestion < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
    resetSelection();
  }
};

const handlePreviousQuestion = () => {
  if (currentQuestion > 1) {
    setCurrentQuestion(currentQuestion - 1);
    resetSelection();
  }
};

const handleOptionSelect = (option) => {
  setSelectedOption(option);
};

const resetSelection = () => {
  setSelectedOption(null);
  setShowExplanation(false);
};

const handleDropdownChange = (e) => {
  const selectedNumber = parseInt(e.target.value);
  setCurrentQuestion(selectedNumber);
  resetSelection();
};

const handleExplanationClick = () => {
  if (showExplanation) {
    setShowExplanation(false); // Sembunyikan pembahasan tanpa pesan
  } else if (!selectedOption) {
    setShowConfirmation(true); // Tampilkan pesan jika opsi belum dipilih
  } else {
    setShowExplanation(true); // Langsung tampilkan pembahasan jika opsi sudah dipilih
  }
};

const handleConfirmationResponse = (response) => {
  if (response === "yes") {
    setShowExplanation(true); // Tampilkan pembahasan
  }
  setShowConfirmation(false); // Hilangkan pesan
};

return (
  <div className="question-page">
    <div className="question-container">
      <button
        className="oval-button previous-button"
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1}
      >
        &larr; Soal Sebelumnya
      </button>
      <div className="question-box">
        <h2>Soal {currentQuestion}</h2>
        <p>{questions[currentQuestion - 1].question}</p>
      </div>
      <button
        className="oval-button next-button"
        onClick={handleNextQuestion}
        disabled={currentQuestion === questions.length}
      >
        Soal Berikutnya &rarr;
      </button>
    </div>

    <div className="interactive-section">
      <div className="dropdown-container">
        <label htmlFor="question-dropdown">Pilih Soal:</label>
        <select
          id="question-dropdown"
          value={currentQuestion}
          onChange={handleDropdownChange}
        >
          {questions.map((_, index) => (
            <option key={index} value={index + 1}>
              Soal {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="options-container">
        {questions[currentQuestion - 1].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option
                ? option === questions[currentQuestion - 1].correctOption
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="explanation-container">
        <button
          className="explanation-toggle"
          onClick={handleExplanationClick}
        >
          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan"}
        </button>
        {showExplanation && (
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        )}
      </div>
    </div>

    {showConfirmation && (
      <div className="confirmation-popup">
        <div className="popup-content">
          <p>Yakin mau melihat pembahasan sekarang?</p>
          <div className="popup-buttons">
            <button
              className="popup-button no-button"
              onClick={() => handleConfirmationResponse("no")}
            >
              Tidak
            </button>
            <button
              className="popup-button yes-button"
              onClick={() => handleConfirmationResponse("yes")}
            >
              Iya
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
export default LatihanSoal5;