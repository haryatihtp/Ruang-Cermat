


import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b4.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 5: Induksi Elektromagnetik</h1>

      <section>
        <h2>1. Pengertian Induksi Elektromagnetik</h2>
        <p>
          Induksi elektromagnetik adalah fenomena munculnya gaya gerak listrik (ggl) induksi pada sebuah konduktor ketika terjadi perubahan fluks magnetik yang melaluinya. Fenomena ini ditemukan oleh Michael Faraday pada tahun 1831.
        </p>
        <img src="../Image/ilustrasi.png" alt="Ilustrasi Induksi Elektromagnetik" className="section-image" />
      </section>

      <section>
        <h2>2. Hukum Faraday dan Rumus</h2>
        <p><strong>Hukum Faraday:</strong></p>
        <p>
          Gaya gerak listrik induksi dalam suatu rangkaian tertutup sebanding dengan laju perubahan fluks magnetik yang melaluinya.
        </p>
        <p><strong>Rumus:</strong></p>
        <p><em>&epsilon; = - (&#916;&Phi;) / (&#916;t)</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>&epsilon;: Gaya gerak listrik induksi (Volt)</li>
          <li>&#916;&Phi;: Perubahan fluks magnetik (Weber)</li>
          <li>&#916;t: Waktu perubahan (detik)</li>
        </ul>
        <img src="../Image/hukum_faraday.png" alt="Hukum Faraday" className="section-image" />
      </section>

      <section>
        <h2>3. Hukum Lenz</h2>
        <p>
          Hukum Lenz menyatakan bahwa arah arus induksi yang dihasilkan oleh ggl induksi akan sedemikian rupa sehingga menentang perubahan fluks magnetik yang menyebabkannya.
        </p>
        <p>
          Rumus Hukum Lenz sering digabung dengan Hukum Faraday:
        </p>
        <p><em>&epsilon; = - (&#916;&Phi;) / (&#916;t)</em></p>
        <p><strong>Contoh Aplikasi:</strong> Penggunaan Hukum Lenz dalam rem elektromagnetik atau generator listrik.</p>
      </section>

      <section>
        <h2>4. Aplikasi Induksi Elektromagnetik</h2>
        <p>Induksi elektromagnetik memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti:</p>
        <ul>
          <li><strong>Generator:</strong> Mengubah energi mekanik menjadi energi listrik.</li>
          <li><strong>Transformator:</strong> Mengubah tegangan listrik menjadi lebih tinggi atau lebih rendah.</li>
          <li><strong>Kompor Induksi:</strong> Menggunakan medan magnet untuk memanaskan benda logam.</li>
        </ul>
        <img src="../Image/aplikasi.png" alt="Aplikasi Induksi Elektromagnetik" className="section-image" />
      </section>

      <section>
        <h2>5. Rumus Gaya Lorentz</h2>
        <p>Ketika sebuah konduktor bergerak dalam medan magnet, muncul gaya Lorentz yang menyebabkan aliran arus listrik.</p>
        <p><strong>Rumus:</strong></p>
        <p><em>F = B &middot; I &middot; L &middot; sin(&theta;)</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>F: Gaya Lorentz (Newton)</li>
          <li>B: Induksi magnetik (Tesla)</li>
          <li>I: Kuat arus listrik (Ampere)</li>
          <li>L: Panjang kawat dalam medan magnet (meter)</li>
          <li>&theta;: Sudut antara kawat dan medan magnet</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b5"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b4")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;