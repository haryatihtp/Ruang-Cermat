// import React, { useState } from "react";
// import "../css/QuestionPage.css";

// const LatihanSoal = () => {
//   const [answers, setAnswers] = useState([]);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);

//   const questions = [
//     {
//       question: "Apa yang dimaksud dengan perdagangan internasional?",
//       options: [
//         { label: "A. Transaksi jual beli antara negara yang berbeda", value: "A", isCorrect: true },
//         { label: "B. Perdagangan antar kota dalam negara yang sama", value: "B" },
//         { label: "C. Penjualan produk dalam negeri ke luar negeri", value: "C" },
//         { label: "D. Kegiatan ekspor-impor dalam negeri", value: "D" },
//       ],
//       explanation: "Perdagangan internasional adalah transaksi jual beli barang dan jasa antara negara yang berbeda.",
//     },
//     {
//       question: "Negara yang melakukan perdagangan internasional dengan tujuan untuk...",
//       options: [
//         { label: "A. Meningkatkan ketergantungan ekonomi", value: "A" },
//         { label: "B. Memperoleh barang dan jasa yang tidak dapat diproduksi di dalam negeri", value: "B", isCorrect: true },
//         { label: "C. Mengurangi persaingan pasar domestik", value: "C" },
//         { label: "D. Memperbanyak cadangan devisa negara", value: "D" },
//       ],
//       explanation: "Tujuan utama perdagangan internasional adalah untuk memperoleh barang dan jasa yang tidak dapat diproduksi di dalam negeri.",
//     },
//     {
//       question: "Apa yang dimaksud dengan neraca perdagangan?",
//       options: [
//         { label: "A. Selisih antara ekspor dan impor suatu negara", value: "A", isCorrect: true },
//         { label: "B. Penghitungan total transaksi keuangan antar negara", value: "B" },
//         { label: "C. Saldo akun perdagangan internasional", value: "C" },
//         { label: "D. Pembayaran antar negara untuk transaksi perdagangan", value: "D" },
//       ],
//       explanation: "Neraca perdagangan adalah selisih antara nilai ekspor dan impor suatu negara.",
//     },
//     {
//       question: "Penyebab utama terjadinya perdagangan internasional adalah...",
//       options: [
//         { label: "A. Perbedaan teknologi antar negara", value: "A" },
//         { label: "B. Perbedaan sumber daya alam", value: "B", isCorrect: true },
//         { label: "C. Meningkatnya jumlah pengusaha", value: "C" },
//         { label: "D. Perbedaan jumlah penduduk", value: "D" },
//       ],
//       explanation: "Perdagangan internasional terjadi karena adanya perbedaan sumber daya alam antara negara yang satu dengan negara lainnya.",
//     },
//     {
//       question: "Apa yang dimaksud dengan proteksionisme dalam perdagangan internasional?",
//       options: [
//         { label: "A. Pembukaan pasar bebas tanpa hambatan", value: "A" },
//         { label: "B. Kebijakan untuk melindungi industri dalam negeri dari persaingan luar negeri", value: "B", isCorrect: true },
//         { label: "C. Penurunan tarif pajak ekspor", value: "C" },
//         { label: "D. Peningkatan impor barang dari negara lain", value: "D" },
//       ],
//       explanation: "Proteksionisme adalah kebijakan yang bertujuan untuk melindungi industri dalam negeri dari persaingan luar negeri, biasanya melalui tarif dan kuota impor.",
//     },
//   ];
  

//   if (isFinished) {
//     return (
//       <div className="latihan-soal1-container">
//         <div className="latihan-soal1-question-box">
//           <h1 className="latihan-soal1-title">Mode Bionik</h1>
//           <h2>Quiz Selesai!</h2>
//           <p>
//             Skor Anda: {score}/{questions.length}
//           </p> 
//           <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
//           Ulangi Latihan
//         </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="latihan-soal1-container">
//       <div className="latihan-soal1-question-box">
//         <h1 className="latihan-soal1-title">Ekonomi</h1>
//         <div className="latihan-soal1-question">
//           <h2>
//             Soal Nomor {currentQuestionIndex + 1}/{questions.length}
//           </h2>
//         </div>
//         {answers[currentQuestionIndex] !== undefined && (
//           <div className="latihan-soal1-explanation-box">
//             <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
//             <h3>
//               {isCorrect
//                 ? "Jawaban Anda Benar!"
//                 : `Jawaban Benar: $`}
//             </h3>
//           </div>
//         )}
//         <div className="latihan-soal1-navigation-buttons">
//         <button
//   className="latihan-soal1-nav-button prev"
//   disabled={currentQuestionIndex === 0}
// >
//   ← Soal Sebelumnya
// </button>
// <button
//   className="latihan-soal1-nav-button next"
//   onClick={
//     currentQuestionIndex === questions.length - 1
//   }
// >
//   {currentQuestionIndex === questions.length - 1
//     ? "Selesai"
//     : "Soal Selanjutnya →"}
// </button>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default LatihanSoal;