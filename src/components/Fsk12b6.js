import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b6.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>Bab 6: Fisika Modern</h1>

      <section>
        <h2>1. Pengertian Fisika Modern</h2>
        <p>
          Fisika modern adalah cabang fisika yang berkembang pada awal abad ke-20 untuk menjelaskan fenomena yang tidak dapat dijelaskan oleh fisika klasik, seperti perilaku partikel subatomik dan kecepatan mendekati kecepatan cahaya.
        </p>
        <img src="../Image/fisika_modern.png" alt="Fisika Modern" className="section-image" />
      </section>

      <section>
        <h2>2. Teori Relativitas Einstein</h2>
        <p><strong>Teori Relativitas Khusus:</strong></p>
        <p>
          Teori ini menjelaskan hubungan antara ruang dan waktu, khususnya pada kecepatan mendekati kecepatan cahaya. Dua postulat utamanya adalah:
        </p>
        <ul>
          <li>Hukum fisika berlaku sama dalam semua kerangka acuan inersial.</li>
          <li>Kecepatan cahaya di ruang vakum adalah konstan untuk semua pengamat.</li>
        </ul>
        <p><strong>Rumus:</strong></p>
        <p><em>E = mc<sup>2</sup></em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>E: Energi (Joule)</li>
          <li>m: Massa (kilogram)</li>
          <li>c: Kecepatan cahaya (3 x 10<sup>8</sup> m/s)</li>
        </ul>
        <img src="../Image/realitivitas.png" alt="Teori Relativitas" className="section-image" />
      </section>

      <section>
        <h2>3. Efek Fotolistrik</h2>
        <p>
          Efek fotolistrik adalah fenomena di mana elektron dilepaskan dari permukaan logam ketika terkena cahaya dengan frekuensi tertentu. Fenomena ini membuktikan sifat partikel cahaya.
        </p>
        <p><strong>Rumus:</strong></p>
        <p><em>E = hf</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>E: Energi foton (Joule)</li>
          <li>h: Konstanta Planck (6,63 x 10<sup>-34</sup> J.s)</li>
          <li>f: Frekuensi cahaya (Hz)</li>
        </ul>
        <img src="../Image/fotolistrik.png" alt="Efek Fotolistrik" className="section-image" />
      </section>

      <section>
        <h2>4. Model Atom</h2>
        <p>
          Model atom modern menjelaskan struktur atom dengan teori kuantum. Elektron berada dalam orbital yang menggambarkan kemungkinan posisi elektron di sekitar inti atom.
        </p>
        <p><strong>Konsep:</strong> Model atom Bohr dan mekanika kuantum.</p>
        <img src="../Image/model_atom.png" alt="Model Atom" className="section-image" />
      </section>

      <section>
        <h2>5. Mekanika Kuantum</h2>
        <p>
          Mekanika kuantum adalah teori yang menjelaskan perilaku partikel pada skala sangat kecil (subatomik). Prinsip ketidakpastian Heisenberg dan fungsi gelombang Schrödinger adalah dua pilar utama mekanika kuantum.
        </p>
        <p><strong>Rumus:</strong></p>
        <p><em>&Delta;x &middot; &Delta;p &geq; h / 4&pi;</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>&Delta;x: Ketidakpastian posisi</li>
          <li>&Delta;p: Ketidakpastian momentum</li>
          <li>h: Konstanta Planck</li>
        </ul>
        <img src="../Image/mekanika_kuantum.png" alt="Mekanika Kuantum" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b5")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;