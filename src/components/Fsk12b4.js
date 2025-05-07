import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b4.css';

const Bab4 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: Gelombang Elektromagnetik</h1>

      <section>
        <h2>1. Pengertian Gelombang Elektromagnetik</h2>
        <p>
          Gelombang elektromagnetik adalah gelombang yang terdiri dari medan listrik dan medan magnet yang berosilasi secara tegak lurus satu sama lain dan terhadap arah perambatannya. Gelombang ini tidak memerlukan medium untuk merambat, sehingga dapat bergerak di ruang hampa.
        </p>
        <img src="../Image/gelombang_elektromagnetik.png" alt="Ilustrasi Gelombang Elektromagnetik" className="section-image" />
      </section>

      <section>
        <h2>2. Sifat-Sifat Gelombang Elektromagnetik</h2>
        <ul>
          <li>Merupakan gelombang transversal.</li>
          <li>Merambat di ruang hampa dengan kecepatan cahaya (<em>c</em> = 3 x 10<sup>8</sup> m/s).</li>
          <li>Terdiri dari medan listrik dan medan magnet yang saling tegak lurus.</li>
          <li>Dapat dipantulkan, dibiaskan, dan diinterferensikan.</li>
        </ul>
        <p><strong>Rumus Kecepatan Gelombang Elektromagnetik:</strong></p>
        <p><em>c = λ × f</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li><em>c</em>: Kecepatan cahaya (3 × 10<sup>8</sup> m/s)</li>
          <li><em>λ</em>: Panjang gelombang (meter)</li>
          <li><em>f</em>: Frekuensi (Hz)</li>
        </ul>
        <img src="../Image/gel_elektro.png" alt="Sifat Gelombang Elektromagnetik" className="section-image" />
      </section>

      <section>
        <h2>3. Spektrum Gelombang Elektromagnetik</h2>
        <p>
          Gelombang elektromagnetik memiliki berbagai jenis berdasarkan panjang gelombang dan frekuensinya. Spektrum ini mencakup gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, dan sinar gamma.
        </p>
        <img src="../Image/spektrum.png" alt="Spektrum Gelombang Elektromagnetik" className="section-image" />
        <p>
          <strong>Rumus Panjang Gelombang:</strong>
        </p>
        <p><em>λ = c / f</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li><em>λ</em>: Panjang gelombang (meter)</li>
          <li><em>c</em>: Kecepatan cahaya (3 × 10<sup>8</sup> m/s)</li>
          <li><em>f</em>: Frekuensi (Hz)</li>
        </ul>
        <p>
          <strong>Contoh:</strong>
          <ul>
            <li><strong>Gelombang Radio:</strong> Digunakan dalam komunikasi radio dan televisi.</li>
            <li><strong>Inframerah:</strong> Digunakan dalam remote control dan penginderaan jarak jauh.</li>
            <li><strong>Sinar-X:</strong> Digunakan dalam bidang medis untuk pencitraan internal tubuh.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>4. Aplikasi Gelombang Elektromagnetik</h2>
        <p>
          Gelombang elektromagnetik memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti:
        </p>
        <ul>
          <li><strong>Komunikasi:</strong> Gelombang radio digunakan untuk komunikasi jarak jauh.</li>
          <li><strong>Kesehatan:</strong> Sinar-X digunakan dalam diagnosis medis.</li>
          <li><strong>Energi:</strong> Panel surya memanfaatkan gelombang cahaya untuk menghasilkan listrik.</li>
        </ul>
        <p><strong>Rumus Energi Gelombang:</strong></p>
        <p><em>E = h × f</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li><em>E</em>: Energi gelombang (Joule)</li>
          <li><em>h</em>: Konstanta Planck (6,626 × 10<sup>-34</sup> Js)</li>
          <li><em>f</em>: Frekuensi (Hz)</li>
        </ul>
        <img src="../Image/aplikasi.png" alt="Aplikasi Gelombang Elektromagnetik" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk112b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b3")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;