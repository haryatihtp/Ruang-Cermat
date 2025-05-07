import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css'; 

const Bab1 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab1-container">
      <h1>Bab 1 : Eksponen dan Logaritma</h1>

      <section>
        <h2>1. Pengertian Eksponen</h2>
        <p>
          Eksponen adalah operasi matematika yang menunjukkan seberapa banyak suatu bilangan (basis) dikalikan dengan dirinya sendiri. 
          Notasi eksponen ditulis dalam bentuk a^n, yang berarti a dikali dengan dirinya sendiri sebanyak n kali.
        </p>
        <p>
          Contohnya, 2^3 berarti 2 dikalikan dengan dirinya sendiri tiga kali, yaitu 2 × 2 × 2 = 8.
        </p>
      </section>

      <section>
        <h2>2. Sifat-Sifat Eksponen</h2>
        <p>Beberapa sifat eksponen yang perlu diketahui:</p>
        <ul>
          <li>Produk dengan basis sama: a^m × a^n = a^(m+n)</li>
          <li>Perbandingan dengan basis sama: a^m ÷ a^n = a^(m-n)</li>
          <li>Eksponen nol: a^0 = 1 (selama a ≠ 0)</li>
          <li>Eksponen negatif: a^(-n) = 1/a^n</li>
        </ul>
      </section>

      <section>
        <h2>3. Pengertian Logaritma</h2>
        <p>
          Logaritma adalah operasi matematika yang merupakan kebalikan dari eksponen. 
          Jika a^b = c, maka logaritma c dengan basis a adalah b, yang ditulis sebagai log_a(c) = b.
        </p>
        <p>Contohnya, log_2(8) = 3 karena 2^3 = 8.</p>
      </section>

      <section>
        <h2>4. Sifat-Sifat Logaritma</h2>
        <p>Beberapa sifat logaritma yang perlu diketahui:</p>
        <ul>
          <li>Logaritma produk: log_a(xy) = log_a(x) + log_a(y)</li>
          <li>Logaritma pembagian: log_a(x/y) = log_a(x) - log_a(y)</li>
          <li>Logaritma eksponen: log_a(x^n) = n × log_a(x)</li>
          <li>Logaritma dengan basis sama: log_a(a) = 1</li>
        </ul>
      </section>

      <section>
        <h2>5. Hubungan antara Eksponen dan Logaritma</h2>
        <p>
          Eksponen dan logaritma saling berhubungan erat. Logaritma digunakan untuk menyelesaikan masalah yang melibatkan eksponen, terutama ketika kita ingin mencari eksponen yang tidak diketahui.
        </p>
        <p>
          Contohnya, untuk mengetahui berapa kali 2 harus dikalikan dengan dirinya sendiri untuk menghasilkan 8, kita dapat menulisnya sebagai log_2(8) = 3.
        </p>
      </section>

      <section>
        <h2>6. Aplikasi Eksponen dan Logaritma dalam Kehidupan Sehari-hari</h2>
        <p>
          Eksponen dan logaritma digunakan dalam berbagai bidang, seperti perhitungan bunga majemuk, skala Richter untuk mengukur kekuatan gempa, dan pertumbuhan populasi.
        </p>
      </section>

      <div className="bottom-container">
        <h2>Yuk, uji pemahamanmu dengan latihan soal! Siap mulai?</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/bab1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;
