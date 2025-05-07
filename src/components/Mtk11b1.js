import React from "react";
import { useNavigate } from "react-router-dom";
// import './bab1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Matriks</h1>

      <section>
        <h2>1. Pengertian Matriks</h2>
        <p>
          Matriks adalah sekumpulan bilangan yang disusun dalam bentuk baris dan kolom. Matriks digunakan dalam berbagai bidang, seperti matematika, fisika, ekonomi, dan ilmu komputer. Matriks dapat digunakan untuk menyelesaikan sistem persamaan linear, transformasi geometrik, dan berbagai aplikasi lainnya.
        </p>
        <p>
          Sebuah matriks biasanya ditulis dalam bentuk persegi panjang dengan elemen-elemen yang terletak dalam baris dan kolom. Notasi umum untuk matriks adalah huruf besar seperti A, B, C, dan sebagainya.
        </p>
      </section>

      <section>
        <h2>2. Jenis-Jenis Matriks</h2>
        <p>
          Matriks memiliki berbagai jenis tergantung pada jumlah baris dan kolomnya. Berikut adalah beberapa jenis matriks yang umum:
        </p>

        <h3>a. Matriks Baris</h3>
        <p>
          Matriks baris adalah matriks yang hanya terdiri dari satu baris, tetapi memiliki lebih dari satu kolom. Contoh: Matriks 1×n, di mana n adalah jumlah kolom.
        </p>

        <h3>b. Matriks Kolom</h3>
        <p>
          Matriks kolom adalah matriks yang hanya terdiri dari satu kolom, tetapi memiliki lebih dari satu baris. Contoh: Matriks m×1, di mana m adalah jumlah baris.
        </p>

        <h3>c. Matriks Persegi</h3>
        <p>
          Matriks persegi adalah matriks yang jumlah barisnya sama dengan jumlah kolom. Contoh: Matriks 3×3, di mana jumlah baris dan kolomnya keduanya 3.
        </p>
      </section>

      <section>
        <h2>3. Operasi Matriks</h2>
        <p>
          Ada beberapa operasi dasar yang dapat dilakukan pada matriks, seperti penjumlahan, pengurangan, perkalian, dan invers. Berikut adalah penjelasan singkat mengenai beberapa operasi tersebut:
        </p>

        <h3>a. Penjumlahan Matriks</h3>
        <p>
          Penjumlahan matriks hanya dapat dilakukan jika matriks yang dijumlahkan memiliki ukuran yang sama, yaitu jumlah baris dan kolom yang sama. Hasil penjumlahan matriks adalah matriks baru yang elemen-elemennya diperoleh dengan menjumlahkan elemen yang sesuai.
        </p>

        <h3>b. Perkalian Matriks</h3>
        <p>
          Perkalian matriks dilakukan dengan mengalikan baris matriks pertama dengan kolom matriks kedua. Untuk melakukan perkalian matriks, jumlah kolom matriks pertama harus sama dengan jumlah baris matriks kedua.
        </p>

        <h3>c. Matriks Invers</h3>
        <p>
          Matriks invers adalah matriks yang jika dikalikan dengan matriks asal akan menghasilkan matriks identitas. Tidak semua matriks memiliki invers. Matriks yang memiliki invers disebut matriks non-singular.
        </p>
      </section>

      <section>
        <h2>4. Determinan Matriks</h2>
        <p>
          Determinan adalah nilai yang dapat dihitung dari elemen-elemen matriks persegi. Determinan digunakan untuk berbagai aplikasi, salah satunya adalah untuk menentukan apakah suatu matriks memiliki invers atau tidak.
        </p>
        <p>
          Untuk matriks 2×2, determinannya dihitung dengan rumus: <br />
          <strong>det(A) = ad - bc</strong>
        </p>
      </section>

      <section>
        <h2>5. Aplikasi Matriks</h2>
        <p>
          Matriks memiliki banyak aplikasi dalam berbagai bidang, seperti:
        </p>
        <ul>
          <li>
            <strong>Aljabar Linear:</strong> Matriks digunakan untuk menyelesaikan sistem persamaan linear.
          </li>
          <li>
            <strong>Grafik dan Gambar:</strong> Matriks digunakan dalam transformasi geometrik pada grafik komputer dan pengolahan gambar.
          </li>
          <li>
            <strong>Ekonomi:</strong> Matriks digunakan dalam analisis ekonomi dan model matematis.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Kelainan pada Matriks</h2>
        <p>
          Dalam beberapa kasus, matriks dapat mengalami kelainan yang memengaruhi perhitungan atau solusi dari suatu sistem. Beberapa contoh kelainan matriks adalah:
        </p>
        <ul>
          <li>
            <strong>Singular:</strong> Matriks yang tidak memiliki invers karena determinannya sama dengan nol.
          </li>
          <li>
            <strong>Degenerasi:</strong> Matriks yang kehilangan beberapa sifat atau struktur, seperti dalam kasus matriks dengan baris atau kolom yang saling bergantung.
          </li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;