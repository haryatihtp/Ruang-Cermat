import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Rangkaian Arus Searah (DC)</h1>

      <section>
        <h2>1. Pengertian Arus Searah</h2>
        <p>
          Arus searah (Direct Current atau DC) adalah arus listrik yang mengalir 
          secara satu arah dari satu kutub ke kutub lainnya dalam rangkaian listrik. 
          Arus searah umumnya dihasilkan oleh sumber seperti baterai atau sel surya.
        </p>
        <img src="../Image/diagram_arus_searah.png" alt="Diagram Arus Searah" className="section-image" />
      </section>

      <section>
        <h2>2. Hukum Ohm</h2>
        <p>
          Hukum Ohm menyatakan bahwa besarnya arus listrik yang mengalir melalui 
          sebuah penghantar sebanding dengan tegangan yang diterapkan pada penghantar 
          tersebut dan berbanding terbalik dengan hambatan penghantarnya.
        </p>
        <p>Rumus Hukum Ohm:</p>
        <p className="formula">I = V / R</p>
        <ul>
          <li><strong>I:</strong> Arus listrik (Ampere)</li>
          <li><strong>V:</strong> Tegangan (Volt)</li>
          <li><strong>R:</strong> Hambatan (Ohm)</li>
        </ul>
      </section>

      <section>
        <h2>3. Rangkaian Seri dan Paralel</h2>
        <h3>a. Rangkaian Seri</h3>
        <p>
          Dalam rangkaian seri, komponen-komponen disusun secara berurutan sehingga 
          arus yang mengalir melalui setiap komponen sama besar.
        </p>
        <p>Rumus Hambatan Total Rangkaian Seri:</p>
        <p className="formula">R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...</p>
        <img src="../Image/rangkaian_seri.png" alt="Rangkaian Seri" className="section-image" />

        <h3>b. Rangkaian Paralel</h3>
        <p>
          Dalam rangkaian paralel, komponen-komponen disusun sejajar sehingga 
          tegangan pada setiap komponen sama, tetapi arusnya dapat berbeda.
        </p>
        <p>Rumus Hambatan Total Rangkaian Paralel:</p>
        <p className="formula">
          1 / R<sub>total</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + 1 / R<sub>3</sub> + ...
        </p>
        <img src="../Image/rangkaian_paralel.png" alt="Rangkaian Paralel" className="section-image" />
      </section>

      <section>
        <h2>4. Daya Listrik</h2>
        <p>
          Daya listrik adalah laju energi listrik yang digunakan oleh suatu perangkat. 
          Daya listrik dapat dihitung menggunakan rumus:
        </p>
        <p className="formula">P = V * I</p>
        <ul>
          <li><strong>P:</strong> Daya listrik (Watt)</li>
          <li><strong>V:</strong> Tegangan (Volt)</li>
          <li><strong>I:</strong> Arus listrik (Ampere)</li>
        </ul>
        <p>
          Jika hambatan diketahui, rumus daya dapat ditulis ulang sebagai:
        </p>
        <p className="formula">P = I<sup>2</sup> * R atau P = V<sup>2</sup> / R</p>
      </section>

      <section>
        <h2>5. Energi Listrik</h2>
        <p>
          Energi listrik adalah total energi yang dikonsumsi oleh perangkat listrik 
          dalam jangka waktu tertentu. Rumus untuk menghitung energi listrik adalah:
        </p>
        <p className="formula">E = P * t</p>
        <ul>
          <li><strong>E:</strong> Energi listrik (Joule atau kWh)</li>
          <li><strong>P:</strong> Daya listrik (Watt)</li>
          <li><strong>t:</strong> Waktu (detik atau jam)</li>
        </ul>
        <img src="../Image/diagram_energi.png" alt="Energi Listrik" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Uji Pemahamanmu dengan Latihan Soal! <br/> Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/#")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;