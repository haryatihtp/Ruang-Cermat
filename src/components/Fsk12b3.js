import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Medan Magnetik</h1>

      <section>
        <h2>1. Pengertian Medan Magnetik</h2>
        <p>
          Medan magnetik adalah ruang di sekitar magnet atau arus listrik yang menyebabkan gaya magnetik bekerja pada benda bermuatan listrik atau magnet lainnya. Medan ini sangat penting dalam memahami fenomena elektromagnetik di sekitar kita.
        </p>
      </section>

      <section>
        <h2>2. Sumber Medan Magnetik</h2>
        <p>
          Medan magnetik dapat dihasilkan oleh berbagai sumber, seperti arus listrik dalam kawat, magnet permanen, atau planet seperti Bumi.
        </p>

        <h3>a. Magnet Permanen</h3>
        <p>
          Magnet permanen menghasilkan medan magnetik tetap yang dihasilkan oleh susunan atom-atom magnetik di dalam material.
        </p>
        <img src="../Image/medan_magnetik.png" alt="Magnet Permanen" className="section-image" />

        <h3>b. Arus Listrik</h3>
        <p>
          Arus listrik yang mengalir melalui kawat menghasilkan medan magnetik di sekitarnya. Fenomena ini dijelaskan oleh hukum Biot-Savart.
        </p>
        <img src="../Image/arus_listrik.png" alt="Arus Listrik" className="section-image" />
      </section>

      <section>
        <h2>3. Hukum-hukum Dasar Medan Magnetik</h2>
        <p>
          Beberapa hukum dasar membantu kita memahami dan menghitung medan magnetik.
        </p>

        <h3>a. Hukum Biot-Savart</h3>
        <p>
          Hukum Biot-Savart menyatakan bahwa medan magnetik dihasilkan oleh elemen kecil arus listrik dan dapat dihitung berdasarkan jarak dan besar arus listrik tersebut.
        </p>
        <img src="../Image/biot_savart.png" alt="Hukum Biot-Savart" className="section-image" />

        <h3>b. Hukum Ampere</h3>
        <p>
          Hukum Ampere menjelaskan hubungan antara medan magnetik dan arus listrik total yang melewati sebuah loop tertutup.
        </p>
        <img src="../Image/hukum_ampere.png" alt="Hukum Ampere" className="section-image" />
      </section>

      <section>
        <h2>4. Interaksi Medan Magnetik</h2>
        <p>
          Medan magnetik dapat berinteraksi dengan benda bermuatan listrik atau arus listrik, menghasilkan gaya yang disebut gaya Lorentz.
        </p>

        <h3>a. Gaya Lorentz</h3>
        <p>
          Gaya Lorentz bekerja pada partikel bermuatan listrik yang bergerak dalam medan magnetik, dengan arah gaya yang dapat ditentukan menggunakan aturan tangan kanan.
        </p>
        <img src="../Image/gaya_lorentz.png" alt="Gaya Lorentz" className="section-image" />
      </section>

      <section>
        <h2>5. Aplikasi Medan Magnetik</h2>
        <p>
          Medan magnetik digunakan dalam berbagai aplikasi teknologi modern.
        </p>

        <h3>a. Elektromagnet</h3>
        <p>
          Elektromagnet adalah magnet yang dihasilkan oleh aliran arus listrik melalui kawat melingkar, sering digunakan dalam perangkat seperti motor listrik dan generator.
        </p>
        <img src="../Image/elektromagnetik.jpg" alt="Elektromagnet" className="section-image" />

        <h3>b. Magnet Bumi</h3>
        <p>
          Medan magnetik Bumi melindungi kita dari radiasi matahari dan memandu navigasi melalui kompas.
        </p>
        <img src="../Image/magnet_bumi.png" alt="Magnet Bumi" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;