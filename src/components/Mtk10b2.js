import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Barisan dan Deret</h1>

      <section>
        <h2>1. Pengertian Barisan dan Deret</h2>
        <p>
          Barisan adalah suatu urutan angka atau objek yang disusun secara teratur, 
          di mana setiap elemen dalam barisan memiliki suatu aturan atau pola tertentu. 
          Deret adalah jumlah atau hasil penjumlahan dari beberapa suku dalam barisan. 
          Secara umum, barisan dan deret sangat penting dalam matematika, terutama dalam 
          analisis dan perhitungan.
        </p>
      </section>

      <section>
        <h2>2. Jenis-Jenis Barisan</h2>
        <p>
          Barisan dapat dibagi menjadi beberapa jenis, berdasarkan pola atau aturan yang berlaku. 
          Berikut adalah beberapa jenis barisan yang sering digunakan:
        </p>

        <h3>a. Barisan Aritmetika</h3>
        <p>
          Barisan aritmetika adalah barisan angka yang memiliki selisih tetap antar suku-sukunya. 
          Selisih ini disebut beda barisan (d). Formula umum barisan aritmetika adalah:
        </p>
        <p>
          <em>Un = a + (n-1) × d</em>
        </p>
        <ul>
          <li><strong>a</strong> = suku pertama</li>
          <li><strong>d</strong> = beda barisan</li>
          <li><strong>n</strong> = posisi suku dalam barisan</li>
          <li><strong>Un</strong> = suku ke-n dalam barisan</li>
        </ul>

        <h3>b. Barisan Geometri</h3>
        <p>
          Barisan geometri adalah barisan angka yang memiliki rasio tetap antar suku-sukunya. 
          Rasio ini disebut rasio barisan (r). Formula umum barisan geometri adalah:
        </p>
        <p>
          <em>Un = a × r^(n-1)</em>
        </p>
        <ul>
          <li><strong>a</strong> = suku pertama</li>
          <li><strong>r</strong> = rasio barisan</li>
          <li><strong>n</strong> = posisi suku dalam barisan</li>
          <li><strong>Un</strong> = suku ke-n dalam barisan</li>
        </ul>
      </section>

      <section>
        <h2>3. Jenis-Jenis Deret</h2>
        <p>
          Deret adalah jumlah dari beberapa suku dalam barisan. Berdasarkan jenis barisan, 
          terdapat dua jenis deret yang umum digunakan:
        </p>

        <h3>a. Deret Aritmetika</h3>
        <p>
          Deret aritmetika adalah jumlah dari beberapa suku dalam barisan aritmetika. Formula 
          jumlah deret aritmetika adalah:
        </p>
        <p>
          <em>Sn = n/2 × (2a + (n-1) × d)</em>
        </p>
        <ul>
          <li><strong>Sn</strong> = jumlah deret hingga suku ke-n</li>
          <li><strong>a</strong> = suku pertama</li>
          <li><strong>d</strong> = beda barisan</li>
          <li><strong>n</strong> = jumlah suku dalam deret</li>
        </ul>

        <h3>b. Deret Geometri</h3>
        <p>
          Deret geometri adalah jumlah dari beberapa suku dalam barisan geometri. Jika rasio 
          barisan <strong>r</strong> tidak sama dengan 1, maka formula jumlah deret geometri adalah:
        </p>
        <p>
          <em>Sn = a × (1 - r^n) / (1 - r)</em>, untuk |r| lebih kecil dari 1
        </p>
        <p>
          Jika rasio <strong>r</strong> sama dengan 1, maka deretnya tidak berubah dan jumlahnya 
          menjadi <em>Sn = n × a</em>.
        </p>
      </section>

      <section>
        <h2>4. Sifat-Sifat Barisan dan Deret</h2>
        <p>
          Beberapa sifat penting yang perlu diketahui dalam barisan dan deret antara lain:
        </p>
        <ul>
          <li>
            <strong>Kekonsistenan Pola:</strong> Pada barisan aritmetika dan geometri, pola selisih atau 
            rasio antar suku tetap konsisten.
          </li>
          <li>
            <strong>Penjumlahan Suku:</strong> Deret memberikan hasil penjumlahan dari suku-suku barisan. 
            Penting untuk menghitung jumlah deret dalam berbagai konteks.
          </li>
          <li>
            <strong>Konvergensi dan Divergensi:</strong> Deret geometri dengan rasio |r| lebih kecil dari 1 memiliki jumlah 
            terbatas (konvergen), sedangkan jika |r| ≥ 1, deret akan terus berkembang tanpa batas (divergen).
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Aplikasi Barisan dan Deret</h2>
        <p>
          Barisan dan deret memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti:
        </p>
        <ul>
          <li>
            <strong>Keuangan:</strong> Penghitungan bunga majemuk dan tabungan sering melibatkan barisan geometri.
          </li>
          <li>
            <strong>Fisika:</strong> Dalam fisika, barisan digunakan untuk model fenomena yang melibatkan perubahan bertahap, seperti proses peluruhan radioaktif.
          </li>
          <li>
            <strong>Desain:</strong> Deret dapat digunakan dalam perhitungan pola desain atau seni, misalnya dalam desain geometris.
          </li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;