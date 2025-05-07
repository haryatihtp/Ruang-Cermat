import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b3.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Laju Reaksi</h1>

      <section>
        <h2>1. Pengertian Laju Reaksi</h2>
        <img src="../Image/bab3.1k.webp" alt="Hidro Alifatik" className="section-image" />
        <p>
        Laju reaksi adalah perubahan konsentrasi reaktan atau produk per satuan waktu. Dengan kata lain, laju reaksi mengukur seberapa cepat suatu reaksi kimia berlangsung. Reaksi yang berlangsung cepat memiliki laju reaksi yang tinggi, sedangkan reaksi yang berlangsung lambat memiliki laju reaksi yang rendah.
        </p>
        <li><strong>Reaktan</strong> : Zat yang bereaksi dalam reaksi kimia.</li>
        <li><strong>Produk</strong> : Zat yang dihasilkan dari reaksi kimia.</li>

        <h3>Satuan Laju Reaksi:</h3>
        <p>Satuan laju reaksi umumnya dinyatakan dalam molar per detik (M/s atau mol/L/s). Namun, satuan lain juga dapat digunakan, tergantung pada konteksnya, misalnya:</p>
        <li>g/s (gram per detik)</li>
        <li>mL/s (militer per detik)</li>

        <h3>Faktor-faktor yang Mempengaruhi Laju Reaksi </h3>
        <li><strong>Konsentrasi Reaktan:</strong> Semakin tinggi konsentrasi reaktan, semakin cepat laju reaksinya.</li>
        <li><strong>Luas Permukaan Sentuh:</strong> Semakin besar luas permukaan sentuh reaktan, semakin cepat laju reaksinya.</li>
        <li><strong>Suhu:</strong> Semakin tinggi suhu, semakin cepat laju reaksinya.</li>
        <li><strong>Katalis:</strong> Katalis adalah zat yang dapat mempercepat laju reaksi tanpa ikut bereaksi.</li>
        <li><strong>Tekanan</strong> Semakin tinggi tekanan, semakin cepat laju reaksinya.</li>
        <img src="../Image/bab3.2k.jpg" alt="Hidro Alifatik" className="section-image" />
      </section>

      <section>
        <h2>Persamaan Laju Reaksi</h2>
        <p>
        Persamaan laju reaksi adalah persamaan matematika yang menghubungkan laju reaksi dengan konsentrasi reaktan. Bentuk umum persamaan laju reaksi adalah:
        </p>

        <h3><strong>v = k[A]^m[B]^n</strong></h3>
        <p>dimana:
        <li>v = laju reaksi</li>
        <li>k = konstanta laju reaksi</li>
        <li>[A] dan [B] = konsentrasi reaktan A dan B</li>
        <li>m dan n = orde reaksi terhadap reaktan A dan B</li>
        </p>
        
      </section>

      <section>
        <h2>2. Teori Tumbukan</h2>
        <p>
        Teori tumbukan menjelaskan bahwa reaksi kimia terjadi akibat tumbukan antarpartikel reaktan. Namun, tidak semua tumbukan menghasilkan reaksi.</p>
        <p>Tumbukan yang efektif adalah tumbukan yang memenuhi dua syarat:
        </p>

        <li><strong>Orientasi yang tepat:</strong> : Partikel harus bertumbukan dengan orientasi yang tepat agar dapat membentuk produk.</li>
        <li><strong>Energi yang cukup:</strong> : Partikel memiliki energi kinetik cukup untuk memutuskan ikatan lama dan membentuk ikatan.</li>
        
        <img src="../Image/bab3.3k.jpg" alt="Pengolahan" className="section-image" />
      </section>

      <section>
        <h2>3. Energi Aktivasi</h2>
        <p>
        Energi aktivasi (Ea) adalah energi minimum yang dibutuhkan untuk terjadinya reaksi. Semakin rendah energi aktivasi, semakin mudah reaksi terjadi dan semakin cepat laju reaksinya.
        </p>
        <p><strong>Analogi Energi Aktivasi</strong></p>
        <ul>
          <li>
            <strong>Korek Api:</strong>  Untuk menyalakan korek api, Anda perlu menggeseknya. Gesekan ini memberikan energi aktivasi yang cukup untuk memulai reaksi pembakaran.
          </li>
        <img src="../Image/bab3.4k.jpg" alt="Pengolahan" className="section-image" />
          <li>
            <strong>Bola di Lembah:</strong> Bayangkan sebuah bola berada di dasar lembah. Untuk memindahkan bola ke lembah lain yang dipisahkan oleh bukit, Anda perlu memberikan energi untuk mendorong bola melewati puncak bukit.
          </li>
        <img src="../Image/bab3.5k.jpg" alt="Pengolahan" className="section-image" />
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma11b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b2")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;