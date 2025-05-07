import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Rangkaian Arus Bolak-Balik (AC)</h1>

      <section>
        <h2>1. Pengertian Arus Bolak-Balik</h2>
        <p>
          Arus bolak-balik (Alternating Current atau AC) adalah arus listrik yang 
          arah alirannya berubah-ubah secara periodik. Arus ini banyak digunakan dalam 
          distribusi listrik karena lebih efisien untuk ditransmisikan dalam jarak jauh.
        </p>
      </section>

      <section>
        <h2>2. Karakteristik Arus Bolak-Balik</h2>
        <p>
          Beberapa karakteristik utama arus bolak-balik meliputi:
        </p>
        <ul>
          <li><strong>Frekuensi:</strong> Jumlah siklus per detik yang biasanya diukur dalam Hertz (Hz).</li>
          <li><strong>Amplitudo:</strong> Nilai maksimum arus atau tegangan.</li>
          <li><strong>Fase:</strong> Posisi relatif gelombang pada waktu tertentu.</li>
          <li><strong>Bentuk Gelombang:</strong> Biasanya berupa gelombang sinusoidal.</li>
        </ul>
        <img src="../Image/arus_bolak_balik.png" alt="Gelombang Arus Bolak-Balik" className="section-image" />
      </section>

      <section>
        <h2>3. Rangkaian AC</h2>
        <p>
          Dalam rangkaian arus bolak-balik, komponen listrik seperti resistor, induktor, 
          dan kapasitor mempengaruhi arus dan tegangan secara berbeda.
        </p>

        <h3>a. Resistor dalam Rangkaian AC</h3>
        <p>
          Dalam rangkaian AC, resistor menyebabkan arus dan tegangan berada dalam fase yang sama. 
          Hukum Ohm tetap berlaku: <span className="formula">V = I * R</span>.
        </p>

        <h3>b. Induktor dalam Rangkaian AC</h3>
        <p>
          Induktor menyebabkan tegangan mendahului arus sebesar 90 derajat. 
          Impedansi induktor dihitung dengan rumus: <span className="formula">Z<sub>L</sub> = \( \omega L \)</span>, 
          di mana \( \omega \) adalah frekuensi sudut dan \( L \) adalah induktansi.
        </p>
        <img src="../Image/induktor.png" alt="Induktor dalam AC" className="section-image" />

        <h3>c. Kapasitor dalam Rangkaian AC</h3>
        <p>
          Kapasitor menyebabkan arus mendahului tegangan sebesar 90 derajat. 
          Impedansi kapasitor dihitung dengan rumus: <span className="formula">Z<sub>C</sub> = 1 / (\( \omega C \))</span>, 
          di mana \( C \) adalah kapasitansi.
        </p>
        <img src="../Image/kapasitor.png" alt="Kapasitor dalam AC" className="section-image" />
      </section>

      <section>
        <h2>4. Rangkaian Seri dan Paralel AC</h2>
        <p>
          Dalam rangkaian AC, komponen seperti resistor, induktor, dan kapasitor dapat dihubungkan 
          secara seri atau paralel, menghasilkan impedansi total yang berbeda.
        </p>

        <h3>a. Rangkaian Seri</h3>
        <p>
          Impedansi total dalam rangkaian seri dihitung sebagai jumlah vektor impedansi setiap komponen:
        </p>
        <p className="formula">Z<sub>total</sub> = Z<sub>R</sub> + Z<sub>L</sub> + Z<sub>C</sub></p>
        <img src="../Image/rangkaian_seri.png" alt="Rangkaian Seri AC" className="section-image" />

        <h3>b. Rangkaian Paralel</h3>
        <p>
          Impedansi total dalam rangkaian paralel dihitung dengan rumus:
        </p>
        <p className="formula">1 / Z<sub>total</sub> = 1 / Z<sub>R</sub> + 1 / Z<sub>L</sub> + 1 / Z<sub>C</sub></p>
        <img src="../Image/rangkaian_paralel.png" alt="Rangkaian Paralel AC" className="section-image" />
      </section>

      <section>
        <h2>5. Daya dalam Rangkaian AC</h2>
        <p>
          Daya dalam rangkaian AC dibagi menjadi tiga jenis:
        </p>
        <ul>
          <li><strong>Daya Aktif (P):</strong> Daya yang benar-benar digunakan, dihitung dengan rumus: <span className="formula">P = V * I * cos(\( \phi \))</span>.</li>
          <li><strong>Daya Reaktif (Q):</strong> Daya yang tersimpan dalam komponen induktif atau kapasitif, dihitung dengan rumus: <span className="formula">Q = V * I * sin(\( \phi \))</span>.</li>
          <li><strong>Daya Semu (S):</strong> Kombinasi daya aktif dan reaktif, dihitung dengan rumus: <span className="formula">S = V * I</span>.</li>
        </ul>
        <img src="../Image/power_ac.jpg" alt="Daya dalam Rangkaian AC" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Uji Pemahamanmu dengan Latihan Soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
}; 

export default Bab2;