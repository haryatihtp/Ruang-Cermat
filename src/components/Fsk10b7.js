import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk10b7.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab7-container">
      <h1>Bab 7: Suhu dan Kalor</h1>

      <section>
        <h2>1. Pengertian Suhu</h2>
        <p>
        Dalam ilmu fisika, suhu adalah salah satu besaran dalam fisika yang menyatakan keadaan derajat dari suatu benda. 
        Dalam ilmu fisika, perhitungan suhu ini bisa dilakukan dengan bantuan alat ukur suhu, yaitu termometer. Termometer sendiri ada beberapa macam, yaitu termometer suhu. 
        Lalu, satuan suhu sendiri bisa tandai dengan skala Celcius, Fahrenheit, dan Kelvin.
        </p>
      </section>

      <section>
        <h2>2. Pengertian Kalor</h2>
        <p>
        Kalor merupakan salah satu bentuk dari energi yang dapat berpindah dari suatu benda yang memiliki suhu tinggi ke benda dengan suhu yang rendah jika kedua suhu tersebut saling bercampur.
        <br />
        Dalam kalor, terdapat istilah kalor jenis (c), yaitu banyaknya kalor yang diperlukan atau dilepaskan untuk menaikkan atau menurunkan suhu satu satuan massa zat tersebut. 
        Selain kalor jenis, terdapat kapasitas kalor yang merupakan banyaknya kalor yang diperlukan atau dilepaskan untuk mengubah suhu benda sebesar satu satuan suhu.
        Nah, satuan kalor sendiri adalah Joule, Kalor, atau Kalori.
        </p>
      </section>

      <section>
        <h2>3. Perpindahan Suhu dan Kalor dalam Keseharian</h2>

        <h3>a. Konduksi</h3>
        <p>
        Konduksi merupakan hantaran kalor dari satu benda ke benda lain tanpa adanya perpindahan partikel atau zat. 
        Dalam proses konduksi ini, terdapat 2 jenis benda yang dapat menghantarkan kalor, yaitu konduktor dan isolator.
        <br />
        Beberapa bentuk konduktor yang dapat ditemukan dalam keseharian adalah besi, timah, baja, alumunium, emas, perak, dan sebagainya. 
        Kemudian, beberapa bentuk isolator yang dapat kita temukan adalah kayu, styrofoam, bata, air, dan sebagainya.
        </p>

        <h3>b. Konveksi</h3>
        <p>
        Konveksi merupakan hantaran kalor dari satu benda ke benda lainnya yang disertai dengan perpindahan partikel zat.
        <br />
        Contoh perpindahan kalor konveksi dalam keseharian bisa kamu lihat pada saat memasak air. Air panas yang ada di bawah memiliki kerapatan rendah sehingga naik, sementara air dingin yang memiliki kerapatan tinggi akan turun. Peristiwa ini adalah konveksi.
        </p>

        <h3>c. Radiasi</h3>
        <p>
        Radiasi merupakan salah satu cara perpindahan kalor tanpa menggunakan materi lain atau melalui ruang hampa. 
        Contohnya adalah perpindahan kalor dari matahari ke bumi.
        </p>
      </section>

      <section>
        <h2>4. Rumus Suhu</h2>

        <h3>a. Rumus Konversi Suhu dan Perbandingan</h3>
        <img
          src="https://www.advernesia.com/wp-content/uploads/2018/11/Tabel-Rumus-Konversi-Suhu-Temperatur.png"
          alt="Perbandingan Suhu"
        />
        <h3>b. Rumus Suhu Akhir Campuran</h3>
        <p>
          (Tc=(m1 T1 + m2 T2) / (m1+m2)). 
        </p>
        <p>
        <ul>
          <li>Tc = suhu campuran</li>
          <li>m1, m2 = massa larutan 1 dan 2</li>
          <li>T1, T2 = suhu larutan 1 dan 2</li>
        </ul> 
        </p>
      </section>

      <section>
        <h2>5. Rumus Kalor</h2>

        <h3>a.Rumus Kalor Jenis</h3>
        <p>
          c = Q / m . ΔT
        </p>
        <p>
        <ul>
          <li>Q = kalor (J)</li>
          <li>c = kalor jenis (J/kg K)</li>
          <li>m = massa benda (kg)</li>
          <li>ΔT = perubahan suhu (K)</li>
        </ul>
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b7"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b6")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab7;