import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Bing11b4.css";

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab8-container">
      <h1>Bab 8: Adverbs (Kata Keterangan)</h1>

      <section>
        <h2>A. Pengertian Adverb</h2>
        <p>
          Adverb (kata keterangan) adalah kata yang digunakan untuk memberi keterangan lebih lanjut
          tentang kata kerja (verb), kata sifat (adjective), atau kata keterangan lainnya. Adverb
          memberikan informasi mengenai bagaimana, kapan, di mana, atau seberapa sering suatu
          tindakan dilakukan. Adverb digunakan untuk memberikan penjelasan yang lebih spesifik mengenai
          suatu aksi atau keadaan yang terjadi dalam kalimat.
        </p>
      </section>

      <section>
        <h2>B. Jenis-Jenis Adverb</h2>

        <h3>1. Adverb of Manner</h3>
        <p>
          Adverb of manner memberikan keterangan tentang bagaimana suatu tindakan dilakukan. 
          Contoh: quickly, slowly, carefully, happily, loudly.
          <br />
          <strong>Contoh kalimat:</strong> "She speaks <strong>quickly</strong>."
        </p>

        <h3>2. Adverb of Time</h3>
        <p>
          Adverb of time menjelaskan kapan suatu tindakan terjadi. Contoh: now, yesterday, soon, always,
          never, today, tomorrow.
          <br />
          <strong>Contoh kalimat:</strong> "I will call you <strong>tomorrow</strong>."
        </p>

        <h3>3. Adverb of Place</h3>
        <p>
          Adverb of place menunjukkan di mana suatu tindakan terjadi. Contoh: here, there, everywhere, inside, outside.
          <br />
          <strong>Contoh kalimat:</strong> "She is standing <strong>outside</strong>."
        </p>

        <h3>4. Adverb of Frequency</h3>
        <p>
          Adverb of frequency memberikan keterangan tentang seberapa sering suatu tindakan dilakukan. Contoh: always, usually, often, rarely, never.
          <br />
          <strong>Contoh kalimat:</strong> "I <strong>always</strong> wake up early."
        </p>

        <h3>5. Adverb of Degree</h3>
        <p>
          Adverb of degree menunjukkan seberapa besar atau seberapa intens tindakan atau keadaan yang dijelaskan. Contoh: very, quite, too, enough, extremely.
          <br />
          <strong>Contoh kalimat:</strong> "She is <strong>very</strong> tired."
        </p>
      </section>

      <section>
        <h2>C. Penggunaan Adverb dalam Kalimat</h2>
        <p>
          Adverb dapat diletakkan di berbagai tempat dalam kalimat, tergantung pada jenis adverbnya. 
          Misalnya, adverb of manner biasanya ditempatkan setelah kata kerja utama, sedangkan adverb 
          of time dan place bisa ditempatkan di awal atau akhir kalimat.
        </p>
        <p><strong>Contoh kalimat dengan adverb:</strong></p>
        <ul>
          <li><strong>Adverb of Manner:</strong> "She sings <strong>beautifully</strong>."</li>
          <li><strong>Adverb of Time:</strong> "I will arrive <strong>soon</strong>."</li>
          <li><strong>Adverb of Place:</strong> "They went <strong>everywhere</strong>." </li>
          <li><strong>Adverb of Frequency:</strong> "He <strong>often</strong> visits his friends."</li>
          <li><strong>Adverb of Degree:</strong> "It is <strong>quite</strong> cold today."</li>
        </ul>
      </section>

      <section>
        <h2>D. Perbandingan Adverb</h2>
        <p>
          Beberapa adverb memiliki bentuk perbandingan, seperti adverb of manner yang dapat berubah
          menjadi lebih atau paling. Contoh: slowly → more slowly → most slowly. 
          Adverb of degree juga memiliki bentuk perbandingan, seperti "very" (sangat), "more" (lebih),
          dan "most" (paling).
        </p>
        <p><strong>Contoh Perbandingan Adverb:</strong></p>
        <ul>
          <li><strong>Slowly → More slowly → Most slowly</strong></li>
          <li><strong>Quickly → More quickly → Most quickly</strong></li>
          <li><strong>Carefully → More carefully → Most carefully</strong></li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b8"}
        >
          Start Practice
        </button>
      </div>

      <div className="navigation-container">
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

export default Bab8;