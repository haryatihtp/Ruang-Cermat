import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk10b6.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab6-container">
      <h1>Bab 6:Fluida</h1>
      <section>
        <h2>1. Fluida Statis</h2>
        <h3>Pengertian Fluida Statis</h3>
        <p>
            Fluida statis merujuk kepada fluida yang berada dalam keadaan diam atau fase tidak bergerak, fluida yang
            dalam kondisi bergerak tetapi dengan tidak ada perbedaan kecepatan antara partikel-partikelnya. Dengan
            kata lain, partikel-partikel dalam fluida ini bergerak dengan kecepatan seragam dan tidak menyebabkan gaya
            geser. Fluida dalam keadaan statis memiliki karakteristik di mana semua gaya yang bekerja padanya
            seimbang, sehingga tidak ada gerakan relatif di dalam fluida tersebut.
        </p>
      </section>
      <section>
        <h2>2. Rumus Tekanan Hidrostatis</h2>
        <p>
            Fluida statis dan tekanan hidrostatis memiliki hubungan yang sangat erat. Fluida statis mengacu pada fluida
            yang tidak bergerak atau dalam keadaan diam. Sedangkan tekanan hidrostatis adalah tekanan yang dialami oleh
            luida yang berada dalam keadaan diam, akibat gaya yang diberikan oleh berat fluida itu sendiri.
        </p>
        <p> 
            P = ρ × g × h 
        </p>
        <p> Dimana: 
        <ul>
          <li>P: Tekanan (Pa)</li>
          <li>ρ: Massa jenis fluida (kg/m³)</li>
          <li>g: Percepatan gravitasi (9.8 m/s²)</li>
          <li>h: Kedalaman (m)</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>3. Hukum-Hukum Fluida Statis</h2>

        <h3>a. Hukum Pascal </h3>
        <p>
        Hukum Pascal menyatakan bahwa tekanan yang diberikan pada suatu fluida dalam ruang
        tertutup akan diteruskan secara merata ke segala arah.
        </p>
        <img src="../Image/pascalh.png" alt="Rumus Hukum Pascal" className="img-fluid mt-3 rounded shadow-lg" />

        <h3>b. Hukum Archimedes</h3>
        <p>
        Hukum Archimedes menyatakan bahwa setiap benda yang tercelup dalam fluida akan mengalami gaya angkat
        yang besarnya sama dengan berat fluida yang dipindahkan.
        </p>
        <img src="../Image/rumus archimedes.png" alt="Rumus Hukum Archimedes" className="img-fluid mt-3 rounded shadow-lg" />

        <h3>c.  Hukum Stevin </h3>
        <p>
        Hukum Stevin menjelaskan bahwa tekanan pada suatu titik dalam fluida yang diam bergantung pada
        kedalaman, massa jenis fluida, dan percepatan gravitasi.
        </p>
        <img src="../Image/Stevin.png" alt="Rumus Hukum Stevin" className="img-fluid mt-3 rounded shadow-lg" />
      </section>
      <section>
      <h2>4. Fluida Dinamis</h2>
        <h3>Pengertian Fluida Dinamis</h3>
        <p>
        Fluida dinamis berkaitan dengan analisis perilaku fluida yang bergerak, seperti aliran udara, air, dan gas. Hal ini mencakup
        pengukuran kecepatan aliran, tekanan, dan turbulensi, serta penerapan hukum-hukum fisika untuk menjelaskan aliran fluida.
        </p>
      </section>
      <section>
        <h2>5. Formula dan Rumus Debit Fluida Dinamis</h2>
        <p>
        Salah satu hukum utama dalam fluida dinamis adalah Hukum Bernoulli, yang menyatakan bahwa dalam aliran fluida yang ideal,
        total energi (energi tekanan, energi kinetik, dan energi potensial) tetap konstan di sepanjang aliran fluida.
        </p>
        <p> 
            Rumus Debit Fluida Dinamis
        </p>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUP5J7ccfO3xZf_x0x7nXrfBGDgE1bJrruI3ieXG9rYbiVUkCwXVmAO0DnMvf_cJIsMqFP6RmCVACl4FqDvGkqbRH4CG-mvJKl2wfG-llFc0jUFzg_WRc_VvQ3QDK6iITMdmuBlJkWUrqY/s1600/1.png"
          alt="Rumus"
        />
        <p> 
            Formula (Hukum Bernoulli Kontinuitas)
        </p>
        <img
          src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Rumus%20Bernoulli-1.jpg"
          alt="Rumus"
        />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b5")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;