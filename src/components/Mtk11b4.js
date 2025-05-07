import React from "react";
import { useNavigate } from "react-router-dom";
// import './bab4.css';

const Bab4 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: Pemrograman Linear</h1>

      <section>
        <h2>1. Pengertian Pemrograman Linear</h2>
        <p>
          Pemrograman linear adalah suatu metode dalam matematika terapan untuk mencari nilai optimal (maksimum atau minimum) dari suatu fungsi objektif yang melibatkan variabel-variabel yang terikat pada beberapa kendala linear. Pemrograman linear sering digunakan dalam berbagai bidang seperti ekonomi, industri, dan lainnya.
        </p>
      </section>

      <section>
        <h2>2. Bentuk Umum Pemrograman Linear</h2>
        <p>
          Suatu masalah pemrograman linear dapat dinyatakan dalam bentuk umum sebagai berikut:
        </p>
        <ul>
          <li>
            Fungsi objektif: <br />
            <i>Maximize/Minimize: Z = c1 * x1 + c2 * x2 + ... + cn * xn</i>
          </li>
          <li>
            Kendala: <br />
            <i>a11 * x1 + a12 * x2 + ... + a1n * xn ≤ b1</i>
            <br />
            <i>a21 * x1 + a22 * x2 + ... + a2n * xn ≤ b2</i>
            <br />
            ...
            <br />
            <i>am1 * x1 + am2 * x2 + ... + amn * xn ≤ bm</i>
          </li>
          <li>
            Variabel keputusan: <br />
            <i>x1, x2, ..., xn ≥ 0</i>
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Fungsi Objektif</h2>
        <p>
          Fungsi objektif adalah fungsi yang ingin kita maksimalkan atau minimalkan. Dalam konteks ekonomi, fungsi objektif sering kali berupa keuntungan atau biaya. Misalnya, jika kita ingin memaksimalkan keuntungan dari dua produk, fungsi objektifnya bisa berupa:
          <br />
          <i>Z = 50 * x1 + 40 * x2</i>
          Di mana <i>x1</i> adalah jumlah produk pertama yang diproduksi dan <i>x2</i> adalah jumlah produk kedua.
        </p>
      </section>

      <section>
        <h2>4. Kendala-Kendala dalam Pemrograman Linear</h2>
        <p>
          Kendala-kendala adalah batasan atau syarat-syarat yang harus dipenuhi dalam suatu masalah pemrograman linear. Kendala ini bisa berupa batasan waktu, sumber daya, atau kapasitas produksi. Kendala dapat berupa ketidaksamaan atau persamaan linear.
        </p>
        <ul>
          <li>
            Misalnya, jika waktu yang tersedia untuk produksi adalah 100 jam, maka kendala waktu bisa berupa:
            <br />
            <i>2 * x1 + 3 * x2 ≤ 100</i>
          </li>
          <li>
            Atau, jika kapasitas bahan baku terbatas, kendalanya bisa berupa:
            <br />
            <i>x1 + x2 ≤ 50</i>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Penyelesaian Masalah Pemrograman Linear</h2>
        <p>
          Ada beberapa metode untuk menyelesaikan masalah pemrograman linear, salah satunya adalah metode grafik, yang cocok digunakan untuk masalah dengan dua variabel. Metode lain yang lebih umum digunakan adalah metode simpleks, yang digunakan untuk masalah dengan lebih dari dua variabel.
        </p>
        <h3>a. Metode Grafik</h3>
        <p>
          Metode grafik digunakan untuk menyelesaikan masalah pemrograman linear dengan dua variabel. Langkah-langkahnya adalah:
          <ol>
            <li>Gambarlah grafik kendala-kendala yang ada.</li>
            <li>Tentukan daerah feasible (daerah yang memenuhi semua kendala).</li>
            <li>Carilah titik pojok (corner point) dari daerah feasible tersebut.</li>
            <li>Evaluasi nilai fungsi objektif di setiap titik pojok untuk mencari nilai maksimum atau minimum.</li>
          </ol>
        </p>
        <h3>b. Metode Simpleks</h3>
        <p>
          Metode simpleks adalah metode yang digunakan untuk menyelesaikan masalah pemrograman linear dengan lebih dari dua variabel. Metode ini berfokus pada perhitungan aljabar untuk mencari solusi optimal secara iteratif.
        </p>
      </section>

      <section>
        <h2>6. Contoh Soal Pemrograman Linear</h2>
        <p>
          Berikut adalah contoh soal pemrograman linear:
        </p>
        <pre>
          Max Z = 50 * x1 + 40 * x2
          Subyek pada:
          2 * x1 + 3 * x2 ≤ 100
          x1 + x2 ≤ 50
          x1, x2 ≥ 0
        </pre>
        <p>
          Penyelesaian soal ini dapat dilakukan dengan metode grafik atau simpleks.
        </p>
      </section>

      <section>
        <h2>B. Aplikasi Pemrograman Linear</h2>
        <p>
          Pemrograman linear memiliki banyak aplikasi dalam berbagai bidang, seperti:
        </p>
        <ul>
          <li>Perencanaan produksi dan optimasi sumber daya di industri manufaktur.</li>
          <li>Pengelolaan keuangan dan investasi.</li>
          <li>Perencanaan transportasi dan distribusi barang.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b3")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;