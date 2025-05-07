import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b4.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 6: Tenses dalam Bahasa Inggris</h1>
      <section>
        <h2>A. Pengertian Tenses</h2>
        <h3>1. Apa itu Tenses?</h3>
        <p>
          Tenses adalah bentuk kata kerja yang menunjukkan waktu terjadinya suatu tindakan atau keadaan. Dalam bahasa Inggris, tenses digunakan untuk menggambarkan kejadian atau tindakan dalam waktu yang berbeda: masa lalu, sekarang, atau masa depan.
        </p>

        <h3>2. Jenis-Jenis Tenses</h3>
        <h4>a. Present Tense</h4>
        <p>
          Present tense digunakan untuk menyatakan kejadian atau tindakan yang sedang berlangsung atau kebiasaan yang terjadi pada saat ini.
        </p>
        <ul>
          <li>Contoh: I work every day. (Saya bekerja setiap hari.)</li>
          <li>Contoh: She is studying now. (Dia sedang belajar sekarang.)</li>
        </ul>

        <h4>b. Past Tense</h4>
        <p>
          Past tense digunakan untuk menyatakan kejadian atau tindakan yang sudah terjadi di masa lalu.
        </p>
        <ul>
          <li>Contoh: I worked yesterday. (Saya bekerja kemarin.)</li>
          <li>Contoh: She was reading when I called her. (Dia sedang membaca ketika saya meneleponnya.)</li>
        </ul>

        <h4>c. Future Tense</h4>
        <p>
          Future tense digunakan untuk menyatakan kejadian atau tindakan yang akan terjadi di masa depan.
        </p>
        <ul>
          <li>Contoh: I will work tomorrow. (Saya akan bekerja besok.)</li>
          <li>Contoh: She will be studying at 8 PM. (Dia akan sedang belajar pada pukul 8 malam.)</li>
        </ul>

        <h2>B. Penggunaan Tenses dalam Kalimat</h2>
        <h3>1. Simple Present Tense</h3>
        <p>
          Simple present tense digunakan untuk menyatakan fakta atau kebiasaan yang terjadi secara berulang.
        </p>
        <ul>
          <li>Contoh: The sun rises in the east. (Matahari terbit di timur.)</li>
          <li>Contoh: I drink coffee every morning. (Saya minum kopi setiap pagi.)</li>
        </ul>

        <h3>2. Present Continuous Tense</h3>
        <p>
          Present continuous tense digunakan untuk menyatakan kejadian yang sedang berlangsung pada saat berbicara.
        </p>
        <ul>
          <li>Contoh: I am reading a book. (Saya sedang membaca buku.)</li>
          <li>Contoh: She is watching TV. (Dia sedang menonton TV.)</li>
        </ul>

        <h3>3. Simple Past Tense</h3>
        <p>
          Simple past tense digunakan untuk menyatakan kejadian atau tindakan yang telah selesai di masa lalu.
        </p>
        <ul>
          <li>Contoh: I visited the museum yesterday. (Saya mengunjungi museum kemarin.)</li>
          <li>Contoh: They traveled to Bali last year. (Mereka bepergian ke Bali tahun lalu.)</li>
        </ul>

        <h3>4. Past Continuous Tense</h3>
        <p>
          Past continuous tense digunakan untuk menyatakan kejadian yang sedang berlangsung di masa lalu pada waktu tertentu.
        </p>
        <ul>
          <li>Contoh: I was reading when she called me. (Saya sedang membaca ketika dia menelepon saya.)</li>
          <li>Contoh: They were playing football at 3 PM. (Mereka sedang bermain sepak bola pada pukul 3 sore.)</li>
        </ul>

        <h3>5. Future Simple Tense</h3>
        <p>
          Future simple tense digunakan untuk menyatakan kejadian atau tindakan yang akan terjadi di masa depan.
        </p>
        <ul>
          <li>Contoh: I will visit my grandmother tomorrow. (Saya akan mengunjungi nenek saya besok.)</li>
          <li>Contoh: They will travel to Japan next year. (Mereka akan bepergian ke Jepang tahun depan.)</li>
        </ul>

        <h3>6. Future Continuous Tense</h3>
        <p>
          Future continuous tense digunakan untuk menyatakan kejadian yang akan sedang berlangsung di masa depan.
        </p>
        <ul>
          <li>Contoh: I will be working at 10 AM tomorrow. (Saya akan sedang bekerja pada pukul 10 pagi besok.)</li>
          <li>Contoh: They will be studying at this time tomorrow. (Mereka akan sedang belajar pada waktu ini besok.)</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b6"}
        >
          Start Practice
        </button>
      </div>

      {/* Page Navigation */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b5")}
        >
          Back to Previous Chapter
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bing11b7")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab6;