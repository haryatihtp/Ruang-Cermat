import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk10b5.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>Bab 5: Gerak Melingkar</h1>

      <section>
        <h2>1. Pengertian Gerak Melingkar</h2>
        <p>
        Gerak melingkar adalah gerak suatu benda yang lintasannya berupa
        lingkaran. Contohnya adalah gerakan Bulan mengelilingi Bumi atau roda
        kendaraan berputar. Juga bianglala yang berputar pada putarannya.
        </p>
        <img
          src="https://media.baamboozle.com/uploads/images/571859/1657145747_7011852.gif"
          alt="Bianglala"
        />
      </section>

      <section>
        <h2>2. Frekuensi dan Periode</h2>
        <p>
          <b>Frekuensi (f):</b> Banyaknya putaran dalam satu detik. <br />
          <b>Periode (T):</b> Waktu untuk menyelesaikan satu putaran penuh.
        </p>
        <img
          src="https://irmavina28blog.wordpress.com/wp-content/uploads/2015/05/frekuensi-periode.jpg"
          alt="Rumus"
        />
        <p>
          Rumus mencari Periode: <b>T = 1/f</b>.
        </p>
        <p>
          Rumus mencari Frekuensi: <b>f = 1/T</b>.
        </p>
      </section>

      <section>
        <h2>3. Kecepatan dan Percepatan</h2>
        <p>
          Kecepatan dalam gerak melingkar dapat berupa kecepatan sudut
          (<b>ω</b>) atau kecepatan linear (<b>v</b>).
        </p>
        <p>
          <b>Formula:</b> <br />
          Kecepatan sudut: <b>ω = 2π/T</b> atau <b>ω = 2πf</b>. <br />
          Kecepatan linear: <b>v = rω</b>.
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b5"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b4")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;