import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 6: Peluang</h1>
      <section>
        <h2>A. Pengertian Peluang</h2>
        <h3>1. Apa Itu Peluang?</h3>
        <p>
          Peluang adalah ukuran dari kemungkinan terjadinya suatu peristiwa dalam suatu ruang sampel tertentu. Dalam matematika, peluang memberikan gambaran tentang seberapa besar kemungkinan suatu peristiwa dapat terjadi. Peluang dapat dihitung dan disajikan dalam bentuk angka antara 0 dan 1, di mana 0 berarti peristiwa tersebut tidak mungkin terjadi, dan 1 berarti peristiwa tersebut pasti terjadi. 
        </p>

        <h3>2. Ruang Sampel</h3>
        <p>
          Ruang sampel (S) adalah himpunan dari semua kemungkinan hasil yang dapat terjadi dalam sebuah eksperimen acak. Sebagai contoh, jika kita melempar sebuah dadu, ruang sampelnya adalah 1, 2, 3, 4, 5, 6 karena itu adalah hasil yang mungkin muncul. 
        </p>

        <h3>3. Definisi Peluang</h3>
        <p>
          Peluang dari suatu peristiwa A, dilambangkan dengan P(A), dapat dihitung menggunakan rumus:
          <br />
          P(A) = (Jumlah Kejadian yang Diinginkan) / (Jumlah Kejadian yang Mungkin)
          <br />
          Sebagai contoh, dalam pelemparan dadu, kita ingin menghitung peluang munculnya angka 3. Maka, peluangnya adalah:
          <br />
          P(3) = 1 / 6 = 0.167, karena ada 1 cara munculnya angka 3 dan 6 kemungkinan hasil yang mungkin terjadi.
        </p>

        <h3>4. Jenis-Jenis Peluang</h3>
        <ul>
          <li><strong>Peluang Kejadian Sederhana:</strong> Peluang terjadinya satu peristiwa tunggal dalam ruang sampel yang terbatas. Contoh: peluang munculnya angka genap pada pelemparan dadu.</li>
          <li><strong>Peluang Kejadian Majemuk:</strong> Peluang yang melibatkan lebih dari satu peristiwa. Peluang ini dapat berupa peristiwa gabungan, saling bebas, atau saling bergantung.</li>
          <li><strong>Peluang Bersyarat:</strong> Peluang terjadinya suatu peristiwa dengan mempertimbangkan peristiwa lain yang sudah terjadi sebelumnya. Contoh: Peluang mengambil bola merah setelah mengambil bola biru tanpa pengembalian.</li>
        </ul>

        <h2>B. Aturan-Aturan Dasar dalam Peluang</h2>
        <h3>1. Aturan Penjumlahan</h3>
        <p>
          Aturan penjumlahan digunakan untuk menghitung peluang terjadinya salah satu dari dua atau lebih peristiwa yang saling bebas. Jika A dan B adalah dua peristiwa yang tidak saling bergantung, maka peluang gabungan A atau B dapat dihitung dengan rumus:
          <br />
          P(A atau B) = P(A) + P(B) - P(A dan B)
          <br />
          Contoh: Jika kita melempar dadu dan ingin menghitung peluang munculnya angka 2 atau angka 4, maka:
          <br />
          P(2 atau 4) = P(2) + P(4) - P(2 dan 4) = 1/6 + 1/6 = 2/6 = 1/3
        </p>

        <h3>2. Aturan Perkalian</h3>
        <p>
          Aturan perkalian digunakan untuk menghitung peluang terjadinya dua peristiwa secara bersamaan. Jika A dan B adalah dua peristiwa yang saling bergantung, maka peluang terjadinya kedua peristiwa tersebut adalah:
          <br />
          P(A dan B) = P(A) × P(B | A)
          <br />
          Di mana P(B | A) adalah peluang B terjadi setelah A terjadi. Jika A dan B tidak bergantung satu sama lain, maka rumusnya menjadi:
          <br />
          P(A dan B) = P(A) × P(B)
        </p>

        <h3>3. Peluang Komplementer</h3>
        <p>
          Peluang komplementer adalah peluang terjadinya peristiwa yang berlawanan dengan peristiwa yang dimaksud. Jika P(A) adalah peluang terjadinya A, maka peluang komplementernya adalah:
          <br />
          P(A') = 1 - P(A)
          <br />
          Misalnya, jika peluang hujan pada suatu hari adalah 0.7, maka peluang tidak hujan adalah:
          <br />
          P(tidak hujan) = 1 - P(hujan) = 1 - 0.7 = 0.3
        </p>

        <h3>4. Peluang Dalam Kejadian Bergantung dan Tidak Bergantung</h3>
        <p>
          Pada kejadian yang saling bergantung, kejadian satu memengaruhi kejadian lainnya. Sebagai contoh, jika kita menarik bola dari kotak tanpa pengembalian, maka kejadian pertama mempengaruhi kemungkinan kejadian kedua. Untuk kejadian saling bebas, peluang satu peristiwa tidak memengaruhi peristiwa lainnya. Misalnya, melempar dua koin adalah kejadian yang saling bebas.
        </p>

        <h2>C. Aplikasi Peluang dalam Kehidupan Sehari-Hari</h2>
        <p>
          Peluang tidak hanya digunakan dalam teori matematika, tetapi juga sangat berguna dalam kehidupan sehari-hari dan berbagai bidang ilmu lainnya. Berikut adalah beberapa contoh aplikasi peluang:
          <ul>
            <li><strong>Perjudian:</strong> Dalam permainan dadu, kartu, atau mesin slot, peluang digunakan untuk menghitung kemungkinan kemenangan.</li>
            <li><strong>Cuaca:</strong> Ramalan cuaca menggunakan probabilitas untuk memprediksi kemungkinan terjadinya hujan, salju, atau cuaca cerah pada suatu hari.</li>
            <li><strong>Asuransi:</strong> Perusahaan asuransi menggunakan peluang untuk menentukan premi dan menghitung risiko terjadinya klaim, seperti kecelakaan atau penyakit.</li>
            <li><strong>Ekonomi:</strong> Dalam ekonomi, peluang digunakan untuk menganalisis dan meramalkan kemungkinan peristiwa yang dapat mempengaruhi pasar keuangan atau ekonomi makro, seperti inflasi atau resesi.</li>
            <li><strong>Kesehatan:</strong> Dalam bidang medis, peluang digunakan untuk menganalisis risiko penyakit dan menentukan probabilitas keberhasilan pengobatan atau prosedur medis tertentu.</li>
          </ul>
        </p>

        <h2>D. Contoh Soal Peluang</h2>
        <h3>1. Menyelesaikan Soal Peluang Sederhana</h3>
        <p>
          Soal: Sebuah dadu dilemparkan sekali. Tentukan peluang munculnya angka 4.
        </p>
        <p>
          Ruang sampel = 1, 2, 3, 4, 5, 6 <br />
          P(4) = 1 / 6 = 0.167
        </p>

        <h3>2. Menyelesaikan Soal Peluang Gabungan</h3>
        <p>
          Soal: Sebuah kartu diambil secara acak dari sebuah dek kartu (52 kartu). Tentukan peluang kartu yang diambil adalah kartu hati atau kartu gambar.
        </p>
        <p>
          Kartu hati = 13 kartu, kartu gambar = 12 kartu (3 gambar per warna) <br />
          P(hati atau gambar) = P(hati) + P(gambar) = 13 / 52 + 12 / 52 = 25 / 52 = 0.4808
        </p>

        <h3>3. Menyelesaikan Soal Peluang Bersyarat</h3>
        <p>
          Soal: Dari sebuah kotak berisi 5 bola merah dan 7 bola biru. Jika dua bola diambil tanpa pengembalian, tentukan peluang bola pertama merah dan bola kedua biru.
        </p>
        <p>
          P(bola pertama merah) = 5 / 12 <br />
          P(bola kedua biru | bola pertama merah) = 7 / 11 <br />
          P(bola pertama merah dan bola kedua biru) = (5 / 12) × (7 / 11) = 35 / 132 = 0.265
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/latihansoal6"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b7")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab8;