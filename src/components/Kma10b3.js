import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma10b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Stoikiometri</h1>

      <section>
        <h2>1. Pengertian Stoikiometri</h2>
        <p>
        Stoikometri, di dalam ilmu kimia ialah ilmu yang mempelajari hubungan kuantitatif antar reaktan dan produk dalam reaksi kimia. Konsep stoikometri digunakan untuk menghitung massa, volume, dan 
          jumlah mol zat yang terlibat dalam suatu reaksi kimia. Stoikometri berasal dari kata "stoicheion" 
          dalam bahasa Yunani yang berarti mengukur.
        </p>
      </section>

      <section>
        <h2>2. Jenis-jenis Stoikiometri</h2>
        <p>
        Ada tiga macam stoikiometri dalam ilmu Kimia, antara lain stoikiometri reaksi, komposisi (senyawa), dan stoikiometri gas.
        </p>

        <h3>a. Stoikiometri gas</h3>
        <p>
        ialah suatu bentuk khusus, di mana reaktan dan produknya seluruhnya merupakan gas. Di dalam kasus ini, koefisien zat (yang menyatakan perbandingan mol dalam stoikiometri reaksi) sekaligus menyatakan perbandingan volume antara zat-zat yang terlibat.
        Hukum gas ideal memiliki persamaan yakni sebagai berikut :
        PV = nRT
        Keterangan:
        P = tekanan (atm)
        V = volume gas (liter)
        n = jumlah mol (mol)
        R = tetapan gas = 0,082 L atm/mol K
        T = 0 °C = 273 K
        </p>
        <img src="../Image/rumus3.png" alt="Auksin" className="section-image" />

        <h3>b. Stoikiometri Reaksi</h3>
        <p>
        Membahas tentang hubungan kuantitatif antara zat yang terlibat dalam suatu reaksi kimia. Stoikiometri reaksi sering digunakan untuk menyetarakan persamaan reaksi.
        </p>

        <h3>c. Stoikiometri komposisi</h3>
        <p>
        Membahas tentang hubungan kuantitatif massa atau jumlah zat antarunsur dalam suatu senyawa. Dalam penerapannya, stoikiometri ini sering digunakan untuk menggambarkan jumlah zat Nitrogen dan Hidrogen yang bergabung menjadi amonia kompleks (NH3).
        </p>
      </section>

      <section>
        <h2>3. Dasar Stoikiometri Gas Ideal</h2>
        <p>
        Volume molar, di definisikan sebagai volum dari 1 mol entitas (atom, ion, molekul, unit formula) dari materi. Satuan dari volum molar ialah L/mol.
        </p>
      </section>

      <section>
        <h2>Suatu reaksi kimia dapat dikatakan sebagai reaksi stoikometri apabila reaktan dalam reaksi habis seluruhnya.</h2>
        <p>
        Adapun rumus-rumus yang biasa digunakan dalam menyelesaikan materi Kimia Stoikiometri adalah sebagai berikut:
        </p>

        <h3>Keterangan :</h3>
        <p>
        Angka 22,4 L merupakan volume gas ideal dalam keadaan STP (Standard Temperature and Pressure), 
          dengan tekanan gas (P) = 1 atm, dan suhu (T) = 273 K. Sementara angka 6,02 x 10<sup>23</sup> 
          merupakan besaran tetapan Avogadro. Jadi, 1 mol zat apa pun memiliki jumlah partikel yang sama 
          yaitu sebanyak 6,02 x 10<sup>23</sup> partikel.
        </p>
        <img src="../Image/Rumus-Stoikiometri-Kimia.png" alt="Fototropisme" className="section-image" />

        <h3>Rasio Stoikiometri</h3>
        <p>
        Sejumlah stoikiometri (rasio reagen) atau zat yang ditambahkan ke sistem
             dalam rangka membuat reaksi kimia ialah jumlah atau rasio di mana, 
             dengan asumsi bahwa hasil dari reaksi selesai dengan dasar sebagai berikut:
        </p>
      </section>
      <ul>
              <li>
                <strong>Tidak ada sisa-sisa residu</strong>
              </li>
              <li>
                <strong>Semua reagen yang dikonsumsi</strong>
              </li>
              <li>
                <strong>Tidak ada defisit reagen</strong>
              </li>
            </ul>

      <section>
        <h2>Reaksi hanya terjadi pada rasio stoikiometri 
              Stoikiometri bersandar pada hukum seperti hukum perbandingan tetap, 
              hukum perbandingan ganda dan hukum kekekalan massa.</h2>
        <p>
        Hukum kekekalan massa, Menggunakan hukum-hukum fisika seperti hukum kekekalan massa, yang menyatakan massa reaktan sama dengan massa produk, 
                Stoikiometri dipakai untuk mengumpulkan informasi tentang jumlah berbagai unsur yang digunakan di dalam reaksi kimia , 
                dan apakah mereka mengambil bentuk gas, padat atau cairan.
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma10b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma10b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma10b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;