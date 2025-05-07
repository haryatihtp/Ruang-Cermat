import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk12b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Kongruen dan Kesebangunan</h1>

      <section>
        <h2>1. Pengertian Kongruen dan Kesebangunan</h2>
        <p>
          Kongruen dan kesebangunan adalah konsep dasar dalam geometri yang mempelajari hubungan kesamaan bentuk dan ukuran antara dua bangun datar atau ruang.
        </p>
        <p>
          <strong>Kongruen:</strong> Dua bangun dikatakan kongruen jika memiliki bentuk dan ukuran yang sama persis. Ini berarti panjang sisi-sisi dan besar sudut-sudutnya juga sama.
        </p>
        <p>
          <strong>Kesebangunan:</strong> Dua bangun dikatakan sebangun jika memiliki bentuk yang sama, meskipun ukurannya berbeda. Rasio panjang sisi-sisi yang bersesuaian adalah sama.
        </p>
      </section>

      <section>
        <h2>2. Kongruen</h2>
        <p>
          Kongruen berlaku ketika dua bangun geometri dapat saling menutupi secara sempurna. Biasanya, kongruen ditentukan melalui uji sisi-sisi dan sudut-sudut yang bersesuaian.
        </p>
        <h3>Sifat Kongruen:</h3>
        <ul>
          <li>Memiliki bentuk dan ukuran yang sama.</li>
          <li>Sisi-sisi yang bersesuaian sama panjang.</li>
          <li>Sudut-sudut yang bersesuaian sama besar.</li>
        </ul>
        <h3>Uji Kongruen:</h3>
        <ul>
          <li>Sisi-Sisi-Sisi (SSS): Ketiga sisi pada dua segitiga sama panjang.</li>
          <li>Sisi-Sudut-Sisi (SAS): Dua sisi dan sudut di antara sisi tersebut sama.</li>
          <li>Sudut-Sudut-Sudut (AAA): Tidak cukup untuk kongruen tetapi cukup untuk kesebangunan.</li>
        </ul>
      </section>

      <section>
        <h2>3. Kesebangunan</h2>
        <p>
          <strong>Pengertian Kesebangunan:</strong> Bangun-bangun yang memiliki bentuk sama tetapi berbeda ukuran. Rasio sisi-sisi yang bersesuaian adalah sama.
        </p>
        <p>
          <strong>Contoh Kesebangunan:</strong> Dua segitiga dikatakan sebangun jika sudut-sudut yang bersesuaian sama besar dan sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
        </p>
      </section>

      <section>
        <h2>4. Hubungan Kongruen dan Kesebangunan</h2>
        <p>
          Bangun yang kongruen selalu sebangun, tetapi bangun yang sebangun belum tentu kongruen. Kesebangunan melibatkan perbandingan skala, sedangkan kongruen memerlukan kesamaan ukuran.
        </p>
      </section>

      <section>
        <h2>5. Penerapan Kongruen dan Kesebangunan</h2>
        <p>
          Kedua konsep ini sangat penting dalam pemetaan, desain bangunan, dan analisis struktur geometris dalam matematika.
        </p>
      </section>

      <section>
        <h2>6. Contoh Soal Kongruen</h2>
        <img src="../Image/Kongruen.png" alt="Contoh Soal Kongruen" className="section-image" />
      </section>

      <section>
        <h2>7. Contoh Soal Kesebangunan</h2>
        <img src="../Image/Kesebangunan.png" alt="Contoh Soal Kesebangunan" className="section-image" />
      </section>

      <section>
        <h2>8. Kesimpulan</h2>
        <p>
          <strong>Kongruen:</strong> Dua bangun disebut kongruen jika memiliki bentuk dan ukuran yang sama persis. Artinya, jika satu bangun dipindahkan, diputar, atau dicerminkan, maka bangun tersebut akan sama persis dengan bangun lainnya.
        </p>
        <p>
          <strong>Kesebangunan:</strong> Dua bangun disebut sebangun jika memiliki bentuk yang sama tetapi ukuran yang berbeda. Artinya, ukuran satu bangun merupakan hasil perkalian skala dari bangun lainnya.
        </p>
        <img src="../Image/Perbedaan.png" alt="Kesimpulan" className="section-image" />
      </section>

      <div className="../Image/bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/> Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk12b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;
