import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. Dalam suatu reaksi kesetimbangan, perubahan konsentrasi suatu reaktan dan produk terjadi dalam waktu yang sama. Apa yang dimaksud dengan fenomena ini?", options: ["Kesetimbangan dinamis", "Kesetimbangan statis", "Reaksi berbalik", "Reaksi irreversible"], answer: "Kesetimbangan dinamis" },
  
    { question: "2. Apa yang dimaksud dengan hukum kesetimbangan Le Chatelier?", options: ["Jika suatu sistem kesetimbangan dipengaruhi oleh perubahan faktor eksternal, sistem akan bergeser untuk mengurangi perubahan tersebut", "Kesetimbangan tidak dapat tercapai jika tekanan berubah", "Reaksi kesetimbangan akan berlangsung selamanya", "Katalis tidak mempengaruhi posisi kesetimbangan"], answer: "Jika suatu sistem kesetimbangan dipengaruhi oleh perubahan faktor eksternal, sistem akan bergeser untuk mengurangi perubahan tersebut" },
  
    { question: "3. Apakah yang dimaksud dengan konstanta kesetimbangan (Kc)?", options: ["Rasio antara konsentrasi produk dan reaktan pada kesetimbangan", "Jumlah total molekul dalam reaksi kesetimbangan", "Konsentrasi produk dikalikan dengan suhu reaksi", "Suhu reaksi pada kesetimbangan"], answer: "Rasio antara konsentrasi produk dan reaktan pada kesetimbangan" },
  
    { question: "4. Pada reaksi kesetimbangan yang bergeser ke kanan, apa yang terjadi dengan konsentrasi produk dan reaktan?", options: ["Konsentrasi produk meningkat, konsentrasi reaktan berkurang", "Konsentrasi produk berkurang, konsentrasi reaktan meningkat", "Konsentrasi produk tetap, konsentrasi reaktan tetap", "Konsentrasi produk dan reaktan tetap sama"], answer: "Konsentrasi produk meningkat, konsentrasi reaktan berkurang" },
  
    { question: "5. Apa yang dimaksud dengan kesetimbangan homogen?", options: ["Reaksi kesetimbangan yang semua komponennya berada dalam fase yang sama", "Reaksi kesetimbangan yang terjadi antara dua fase berbeda", "Reaksi yang melibatkan gas dan padatan", "Reaksi yang melibatkan gas dan cairan"], answer: "Reaksi kesetimbangan yang semua komponennya berada dalam fase yang sama" },
  
    { question: "6. Jika konstanta kesetimbangan Kc besar, maka?", options: ["Produk lebih banyak dari reaktan pada kesetimbangan", "Reaktan lebih banyak dari produk pada kesetimbangan", "Kesetimbangan tidak tercapai", "Posisi kesetimbangan berada di tengah"], answer: "Produk lebih banyak dari reaktan pada kesetimbangan" },
  
    { question: "7. Pada kesetimbangan kimia, apa yang terjadi jika suhu dinaikkan pada reaksi endotermik?", options: ["Kesetimbangan bergeser ke kiri", "Kesetimbangan bergeser ke kanan", "Katalisator mempercepat kesetimbangan", "Kesetimbangan tetap tidak berubah"], answer: "Kesetimbangan bergeser ke kanan" },
  
    { question: "8. Apa yang terjadi jika tekanan dinaikkan pada reaksi kesetimbangan yang melibatkan gas?", options: ["Kesetimbangan bergeser ke arah jumlah mol gas yang lebih sedikit", "Kesetimbangan bergeser ke arah jumlah mol gas yang lebih banyak", "Tidak ada perubahan posisi kesetimbangan", "Kesetimbangan akan berhenti"], answer: "Kesetimbangan bergeser ke arah jumlah mol gas yang lebih sedikit" },
  
    { question: "9. Bagaimana pengaruh penambahan katalis terhadap posisi kesetimbangan?", options: ["Tidak mempengaruhi posisi kesetimbangan, hanya mempercepat tercapainya kesetimbangan", "Menggeser posisi kesetimbangan ke kiri", "Menggeser posisi kesetimbangan ke kanan", "Menurunkan nilai Kc"], answer: "Tidak mempengaruhi posisi kesetimbangan, hanya mempercepat tercapainya kesetimbangan" },
  
    { question: "10. Jika sebuah reaksi memiliki Kc yang sangat kecil, apa yang dapat disimpulkan?", options: ["Kesetimbangan berada lebih banyak pada sisi reaktan", "Kesetimbangan berada lebih banyak pada sisi produk", "Reaksi tersebut terjadi secara cepat", "Reaksi tersebut tidak mencapai kesetimbangan"], answer: "Kesetimbangan berada lebih banyak pada sisi reaktan" },
  
    { question: "11. Apa yang dimaksud dengan kesetimbangan heterogen?", options: ["Reaksi kesetimbangan yang komponen-komponennya berada dalam fase yang berbeda", "Reaksi kesetimbangan yang terjadi pada suhu tinggi", "Kesetimbangan yang melibatkan satu komponen saja", "Kesetimbangan dalam fase gas saja"], answer: "Reaksi kesetimbangan yang komponen-komponennya berada dalam fase yang berbeda" },
  
    { question: "12. Dalam reaksi kesetimbangan, apa yang terjadi jika konsentrasi salah satu reaktan ditambah?", options: ["Kesetimbangan bergeser ke arah produk", "Kesetimbangan bergeser ke arah reaktan", "Kesetimbangan tetap tidak berubah", "Tidak ada pengaruh terhadap kesetimbangan"], answer: "Kesetimbangan bergeser ke arah produk" },
  
    { question: "13. Apakah yang dimaksud dengan reaksi berbalik (reversibel)?", options: ["Reaksi yang dapat berlangsung dalam dua arah, produk dapat berubah menjadi reaktan", "Reaksi yang hanya dapat berlangsung dalam satu arah", "Reaksi yang memerlukan suhu tinggi", "Reaksi yang hanya terjadi dalam kondisi tertentu"], answer: "Reaksi yang dapat berlangsung dalam dua arah, produk dapat berubah menjadi reaktan" },
  
    { question: "14. Apa pengaruh penurunan suhu pada reaksi eksotermik dalam kesetimbangan?", options: ["Kesetimbangan bergeser ke kanan", "Kesetimbangan bergeser ke kiri", "Tidak ada perubahan dalam posisi kesetimbangan", "Kesetimbangan berhenti"], answer: "Kesetimbangan bergeser ke kanan" },
  
    { question: "15. Apa yang dimaksud dengan Kp dalam kesetimbangan kimia?", options: ["Konstanta kesetimbangan yang dihitung berdasarkan tekanan", "Konstanta kesetimbangan yang dihitung berdasarkan suhu", "Konstanta kesetimbangan yang dihitung berdasarkan konsentrasi", "Konstanta kesetimbangan yang menghitung perubahan entalpi"], answer: "Konstanta kesetimbangan yang dihitung berdasarkan tekanan" },
  
    { question: "16. Apa yang dimaksud dengan pengaruh volume terhadap posisi kesetimbangan?", options: ["Mengurangi volume akan menggeser kesetimbangan ke sisi yang lebih sedikit mol gas", "Mengurangi volume akan menggeser kesetimbangan ke sisi yang lebih banyak mol gas", "Mengurangi volume tidak mempengaruhi posisi kesetimbangan", "Menambah volume tidak mempengaruhi kesetimbangan"], answer: "Mengurangi volume akan menggeser kesetimbangan ke sisi yang lebih sedikit mol gas" },
  
    { question: "17. Jika volume suatu sistem kesetimbangan gas diperkecil, maka sistem akan bergeser ke...", options: ["Sisi yang menghasilkan lebih banyak gas", "Sisi yang menghasilkan lebih sedikit gas", "Sisi produk", "Sisi reaktan"], answer: "Sisi yang menghasilkan lebih sedikit gas" },
  
    { question: "18. Pada reaksi kesetimbangan, apa yang akan terjadi jika suhu dinaikkan pada reaksi yang bersifat eksotermik?", options: ["Kesetimbangan bergeser ke kiri", "Kesetimbangan bergeser ke kanan", "Kesetimbangan tetap pada posisi yang sama", "Produk akan lebih banyak dari reaktan"], answer: "Kesetimbangan bergeser ke kiri" },
  
    { question: "19. Bagaimana cara menghitung nilai Kc dalam reaksi kesetimbangan?", options: ["Kc dihitung dengan membagi konsentrasi produk dengan konsentrasi reaktan pada kesetimbangan", "Kc dihitung dengan menjumlahkan konsentrasi produk dan reaktan", "Kc dihitung dengan mengalikan konsentrasi produk dan reaktan", "Kc dihitung berdasarkan volume reaktan dan produk"], answer: "Kc dihitung dengan membagi konsentrasi produk dengan konsentrasi reaktan pada kesetimbangan" },
  
    { question: "20. Apa yang dimaksud dengan reaksi kesetimbangan yang mencapai posisi kesetimbangan yang stabil?", options: ["Konsentrasi produk dan reaktan tidak berubah lagi seiring waktu", "Produk terus meningkat tanpa batas", "Reaktan terus berkurang tanpa batas", "Reaksi berhenti total setelah mencapai kesetimbangan"], answer: "Konsentrasi produk dan reaktan tidak berubah lagi seiring waktu" }
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