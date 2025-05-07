import React from "react";
import { useNavigate } from "react-router-dom";
// import './bab4.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">

      <h1>Bab 6: Integral dalam Matematika</h1>
      <section>
        <h2>A. Pengertian Integral</h2>
        <h3>1. Pengertian Integral</h3>
        <p>
          Integral merupakan konsep dalam kalkulus yang digunakan untuk menghitung 
          luas, volume, dan akumulasi dari suatu fungsi. Dalam integral terdapat dua jenis, 
          yaitu integral tak tentu dan integral tentu. Integral tak tentu adalah integral yang 
          hasilnya berupa fungsi umum, sedangkan integral tentu memiliki nilai tertentu yang dihitung 
          berdasarkan batasan atas dan bawah.
        </p>
        <h4>a. Integral Tak Tentu</h4>
        <p>
          Integral tak tentu adalah integral yang tidak memiliki batasan. Secara matematis, 
          integral tak tentu dari suatu fungsi f(x) dapat ditulis sebagai:
          <br />
          ∫f(x) dx = F(x) + C, di mana F(x) adalah antiderivatif dari f(x), dan C adalah konstanta integrasi.
        </p>
        <h4>b. Integral Tentu</h4>
        <p>
          Integral tentu adalah integral yang memiliki batasan tertentu, yaitu batas bawah dan batas atas.
          Integral tentu digunakan untuk menghitung luas area di bawah grafik fungsi. Secara matematis,
          integral tentu dari f(x) dari a hingga b ditulis sebagai:
          <br />
          ∫[a, b] f(x) dx = F(b) - F(a), di mana F(x) adalah antiderivatif dari f(x).
        </p>
        
        <h2>2. Aturan-aturan dalam Integral</h2>
        <h3>a. Aturan Penjumlahan</h3>
        <p>
          Jika terdapat dua fungsi yang dijumlahkan, maka integralnya dapat dihitung dengan cara:
          <br />
          ∫(f(x) + g(x)) dx = ∫f(x) dx + ∫g(x) dx
        </p>
        <h3>b. Aturan Perkalian dengan Konstanta</h3>
        <p>
          Jika suatu fungsi dikalikan dengan konstanta, maka integralnya adalah:
          <br />
          ∫k * f(x) dx = k * ∫f(x) dx, di mana k adalah konstanta.
        </p>
        <h3>c. Aturan Penggantian Variabel (Substitusi)</h3>
        <p>
          Aturan penggantian variabel digunakan ketika integral mengandung fungsi komposit. 
          Misalnya, jika u = g(x), maka:
          <br />
          ∫f(g(x)) * g'(x) dx = ∫f(u) du
        </p>

        <h2>3. Teknik-teknik Integrasi</h2>
        <h3>a. Integrasi Parsial</h3>
        <p>
          Integrasi parsial digunakan ketika fungsi yang akan diintegralkan merupakan hasil 
          perkalian dua fungsi. Aturan integrasi parsial adalah:
          <br />
          ∫u dv = uv - ∫v du
        </p>
        <h3>b. Substitusi Trigonometri</h3>
        <p>
          Substitusi trigonometri digunakan untuk mengubah bentuk integral yang melibatkan fungsi trigonometri 
          ke bentuk yang lebih sederhana. Misalnya, substitusi untuk bentuk integral seperti:
          <br />
          ∫sin²(x) dx, yang dapat disubstitusi menjadi bentuk yang lebih mudah dihitung.
        </p>

        <h2>4. Contoh Soal Integral</h2>
        <p>
          Berikut adalah contoh soal integral:
          <br />
          Tentukan integral dari f(x) = x² + 3x:
          <br />
          ∫(x² + 3x) dx = (x³ / 3) + (3x² / 2) + C
        </p>
        
        <h2>5. Aplikasi Integral</h2>
        <p>
          Integral banyak digunakan dalam berbagai bidang, seperti:
          <br />
          a. Menghitung luas daerah di bawah kurva.
          <br />
          b. Menghitung volume benda putar.
          <br />
          c. Menghitung panjang lengkung suatu fungsi.
          <br />
          d. Menghitung distribusi probabilitas dalam statistika.
        </p>
      </section>

      <section>
        <h2>B. Kelainan dan Gangguan pada Integral</h2>
        <h3>1. Kesalahan dalam Menghitung Integral</h3>
        <p>
          Beberapa kesalahan yang sering terjadi dalam menghitung integral antara lain:
          <br />
          a. Salah dalam menentukan batasan integral.
          <br />
          b. Tidak memperhatikan aturan substitusi atau integrasi parsial dengan benar.
          <br />
          c. Kelalaian dalam proses simplifikasi hasil integral.
        </p>
        <h3>2. Trik untuk Menghindari Kesalahan</h3>
        <p>
          Untuk menghindari kesalahan dalam menghitung integral, berikut adalah beberapa trik yang dapat diterapkan:
          <br />
          a. Membaca soal dengan teliti untuk memastikan batasan yang benar.
          <br />
          b. Menggunakan aturan integrasi yang tepat sesuai dengan bentuk fungsi.
          <br />
          c. Melakukan pengecekan hasil dengan menggunakan turunan (untuk integral tak tentu).
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b5")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;