import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalTeknologiDigital = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan teknologi digital?",
      options: [
        "Teknologi yang menggunakan sistem digital untuk memproses informasi",
        "Teknologi yang hanya menggunakan sistem analog",
        "Teknologi yang berfokus pada perangkat keras komputer",
        "Teknologi yang berhubungan dengan sistem mekanik"
      ],
      correctOption: "Teknologi yang menggunakan sistem digital untuk memproses informasi",
      explanation: "Teknologi digital mengacu pada penggunaan data dalam bentuk digital untuk memproses, menyimpan, dan mentransmisikan informasi."
    },
    {
      question: "Apa yang dimaksud dengan konversi analog ke digital?",
      options: [
        "Proses mengubah sinyal analog menjadi bentuk digital",
        "Proses mengubah sinyal digital menjadi bentuk analog",
        "Proses mempercepat transmisi data",
        "Proses mengubah teks menjadi kode biner"
      ],
      correctOption: "Proses mengubah sinyal analog menjadi bentuk digital",
      explanation: "Konversi analog ke digital (ADC) adalah proses mengubah sinyal analog, seperti suara atau gambar, menjadi bentuk digital yang dapat diproses oleh komputer."
    },
    {
      question: "Apa itu komputer digital?",
      options: [
        "Komputer yang menggunakan sinyal analog untuk memproses informasi",
        "Komputer yang menggunakan sinyal digital untuk memproses informasi",
        "Komputer yang hanya dapat menjalankan satu jenis program",
        "Komputer yang berfungsi hanya untuk perhitungan matematis"
      ],
      correctOption: "Komputer yang menggunakan sinyal digital untuk memprokses informasi",
      explanation: "Komputer digital menggunakan sistem bilangan digital (biner) untuk memproses data, berbeda dengan komputer analog yang menggunakan sinyal kontinu."
    },
    {
      question: "Apa itu bit dalam sistem digital?",
      options: [
        "Satuan terkecil dalam sistem bilangan biner",
        "Satuan terkecil dalam sistem bilangan desimal",
        "Bentuk data dalam format teks",
        "Ukuran penyimpanan data"
      ],
      correctOption: "Satuan terkecil dalam sistem bilangan biner",
      explanation: "Bit (binary digit) adalah unit terkecil dari data dalam komputer dan bisa bernilai 0 atau 1 dalam sistem biner."
    },
    {
      question: "Apa itu byte dalam teknologi digital?",
      options: [
        "Satuan penyimpanan data yang terdiri dari 8 bit",
        "Satuan penyimpanan data yang terdiri dari 16 bit",
        "Satuan untuk mengukur kecepatan transmisi data",
        "Satuan untuk mengukur kapasitas RAM"
      ],
      correctOption: "Satuan penyimpanan data yang terdiri dari 8 bit",
      explanation: "Byte adalah unit penyimpanan data yang terdiri dari 8 bit, dan sering digunakan untuk mengukur kapasitas memori atau penyimpanan."
    },
    {
      question: "Apa yang dimaksud dengan sistem bilangan biner?",
      options: [
        "Sistem bilangan yang hanya menggunakan dua angka, 0 dan 1",
        "Sistem bilangan yang menggunakan angka dari 0 hingga 9",
        "Sistem bilangan yang digunakan untuk perhitungan logaritma",
        "Sistem bilangan yang digunakan dalam aritmatika dasar"
      ],
      correctOption: "Sistem bilangan yang hanya menggunakan dua angka, 0 dan 1",
      explanation: "Sistem bilangan biner adalah sistem yang hanya menggunakan dua angka, yaitu 0 dan 1, dan digunakan dalam sistem digital untuk mewakili data."
    },
    {
      question: "Apa yang dimaksud dengan komputer mikro?",
      options: [
        "Komputer dengan ukuran kecil yang digunakan untuk aplikasi spesifik",
        "Komputer yang hanya berfungsi untuk tugas kalkulasi",
        "Komputer yang menggunakan memori analog",
        "Komputer yang terhubung langsung ke internet"
      ],
      correctOption: "Komputer dengan ukuran kecil yang digunakan untuk aplikasi spesifik",
      explanation: "Komputer mikro adalah jenis komputer dengan ukuran yang kecil dan biasanya digunakan untuk aplikasi spesifik seperti pengendalian perangkat atau perangkat mobile."
    },
    {
      question: "Apa itu prosesor dalam komputer?",
      options: [
        "Sirkuit terpadu yang mengatur dan memproses data dalam komputer",
        "Alat untuk menghubungkan komputer dengan internet",
        "Perangkat untuk menyimpan data secara permanen",
        "Perangkat untuk menampilkan gambar pada layar"
      ],
      correctOption: "Sirkuit terpadu yang mengatur dan memproses data dalam komputer",
      explanation: "Prosesor adalah komponen utama dalam komputer yang berfungsi untuk memproses data dan mengatur instruksi dalam sistem komputer."
    },
    {
      question: "Apa itu memori dalam komputer?",
      options: [
        "Perangkat untuk menyimpan data sementara atau permanen",
        "Perangkat untuk menampilkan gambar",
        "Perangkat untuk menghubungkan perangkat eksternal",
        "Alat untuk mengatur suhu komputer"
      ],
      correctOption: "Perangkat untuk menyimpan data sementara atau permanen",
      explanation: "Memori adalah komponen yang digunakan untuk menyimpan data dalam komputer, baik itu sementara (RAM) atau permanen (hard disk atau SSD)."
    },
    {
      question: "Apa yang dimaksud dengan algoritma dalam teknologi digital?",
      options: [
        "Serangkaian langkah atau prosedur untuk menyelesaikan masalah",
        "Cara untuk menyimpan data dalam bentuk digital",
        "Proses mengubah data analog ke digital",
        "Perangkat keras yang digunakan dalam komputer"
      ],
      correctOption: "Serangkaian langkah atau prosedur untuk menyelesaikan masalah",
      explanation: "Algoritma adalah urutan langkah-langkah yang dirancang untuk menyelesaikan suatu masalah atau tugas tertentu dalam pemrograman komputer."
    },
    {
      question: "Apa itu perangkat keras komputer?",
      options: [
        "Komponen fisik yang membentuk komputer",
        "Sistem operasi yang digunakan dalam komputer",
        "Perangkat lunak yang membantu menjalankan aplikasi",
        "Program yang digunakan untuk mengatur memori"
      ],
      correctOption: "Komponen fisik yang membentuk komputer",
      explanation: "Perangkat keras komputer (hardware) adalah semua komponen fisik yang membentuk sistem komputer, seperti prosesor, RAM, dan hard drive."
    },
    {
      question: "Apa yang dimaksud dengan perangkat lunak komputer?",
      options: [
        "Program atau aplikasi yang menjalankan komputer",
        "Komponen fisik komputer yang dapat disentuh",
        "Sistem untuk menghubungkan komputer dengan jaringan",
        "Perangkat untuk menyimpan data secara permanen"
      ],
      correctOption: "Program atau aplikasi yang menjalankan komputer",
      explanation: "Perangkat lunak komputer (software) adalah program atau aplikasi yang digunakan untuk menjalankan komputer dan melakukan berbagai fungsi."
    },
    {
      question: "Apa yang dimaksud dengan Internet of Things (IoT)?",
      options: [
        "Konsep menghubungkan perangkat fisik ke internet untuk berbagi data",
        "Jaringan komputer yang menghubungkan seluruh dunia",
        "Sistem untuk mentransfer data dengan kecepatan tinggi",
        "Protokol komunikasi untuk perangkat mobile"
      ],
      correctOption: "Konsep menghubungkan perangkat fisik ke internet untuk berbagi data",
      explanation: "Internet of Things (IoT) adalah konsep yang menghubungkan berbagai perangkat fisik ke internet untuk mengumpulkan dan berbagi data."
    },
    {
      question: "Apa itu cloud computing?",
      options: [
        "Layanan yang memungkinkan penyimpanan dan pemrosesan data di server jarak jauh",
        "Perangkat untuk menghubungkan komputer dengan perangkat lain",
        "Sistem untuk mengatur database di komputer",
        "Jaringan komputer lokal untuk berbagi file"
      ],
      correctOption: "Layanan yang memungkinkan penyimpanan dan pemrosesan data di server jarak jauh",
      explanation: "Cloud computing adalah layanan yang menyediakan penyimpanan data dan pemrosesan melalui server yang berada di luar lokasi pengguna, memungkinkan akses data dari mana saja."
    },
    {
      question: "Apa yang dimaksud dengan firewall dalam teknologi digital?",
      options: [
        "Sistem keamanan yang memantau dan membatasi akses jaringan",
        "Perangkat keras untuk meningkatkan kecepatan internet",
        "Program untuk mengatur email",
        "Alat untuk menyimpan data secara offline"
      ],
      correctOption: "Sistem keamanan yang memantau dan membatasi akses jaringan",
      explanation: "Firewall adalah sistem keamanan jaringan yang digunakan untuk memantau dan membatasi akses data antara perangkat dalam jaringan dan jaringan eksternal."
    },
    {
      question: "Apa itu enkripsi dalam dunia digital?",
      options: [
        "Proses mengamankan data dengan mengubahnya menjadi format yang tidak dapat dibaca tanpa kunci tertentu",
        "Proses mempercepat proses pengiriman data",
        "Proses memperbaiki kerusakan pada perangkat keras",
        "Proses mengubah data analog menjadi digital"
      ],
      correctOption: "Proses mengamankan data dengan mengubahnya menjadi format yang tidak dapat dibaca tanpa kunci tertentu",
      explanation: "Enkripsi adalah proses mengamankan data dengan mengubahnya menjadi format yang tidak dapat dibaca tanpa kunci dekripsi yang tepat."
    },
    {
      question: "Apa yang dimaksud dengan big data?",
      options: [
        "Volume data yang sangat besar dan kompleks yang tidak dapat diproses menggunakan perangkat tradisional",
        "Data yang tersimpan di server lokal",
        "Data yang dapat diproses menggunakan perangkat keras sederhana",
        "Data yang hanya tersedia dalam bentuk analog"
      ],
      correctOption: "Volume data yang sangat besar dan kompleks yang tidak dapat diproses menggunakan perangkat tradisional",
      explanation: "Big data merujuk pada data yang sangat besar dan kompleks yang memerlukan alat dan teknologi khusus untuk pemrosesan dan analisis."
    },
    {
      question: "Apa yang dimaksud dengan sistem operasi komputer?",
      options: [
        "Perangkat lunak yang mengatur dan mengelola perangkat keras serta perangkat lunak komputer",
        "Program untuk membuat gambar dan video",
        "Aplikasi untuk mengirimkan data melalui internet",
        "Perangkat untuk meningkatkan keamanan komputer"
      ],
      correctOption: "Perangkat lunak yang mengatur dan mengelola perangkat keras serta perangkat lunak komputer",
      explanation: "Sistem operasi adalah perangkat lunak yang mengatur dan mengelola semua perangkat keras dan perangkat lunak dalam komputer."
    }
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
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true); // Tampilkan pembahasan
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

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
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
};

export default LatihanSoalTeknologiDigital;
