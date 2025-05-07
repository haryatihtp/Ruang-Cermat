import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Mtk12b8.css";

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab8-container">
      <h1>Bab 8: Turunan</h1>
      
      <section>
        <h2>1. Turunan</h2>
        <p>Turunan adalah konsep dalam kalkulus yang digunakan untuk mengukur perubahan suatu fungsi terhadap variabelnya. Turunan menggambarkan tingkat perubahan atau kemiringan grafik fungsi pada suatu titik.</p>
        <p>Konsep turunan memiliki banyak aplikasi dalam fisika, ekonomi, teknik, dan berbagai bidang lainnya. Dengan memahami materi ini, siswa akan mampu memecahkan masalah dalam kehidupan nyata yang melibatkan perubahan nilai variabel secara dinamis.</p>
</section>
<section>
        <h2>2. Pengantar Turunan</h2>
        <p>Turunan adalah ukuran perubahan suatu fungsi terhadap variabel bebasnya. Dalam kalkulus, turunan sering digunakan untuk menentukan kemiringan kurva atau tingkat perubahan suatu nilai pada suatu titik tertentu.</p>
          <p><strong>Rumus dasar:</strong> f'(x) = lim h→0 [f(x + h) - f(x)] / h</p>
          <h2>Aturan Penjumlahan dan Pengurangan</h2>
          <p>Turunan dari penjumlahan atau pengurangan dua fungsi adalah jumlah atau selisih dari turunan masing-masing fungsi.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) ± h(x), maka f'(x) = g'(x) ± h'(x).</p>
        
      </section>

      <section>
        <h2>3. Aturan Perkalian (Product Rule)</h2>
        <p>Turunan dari perkalian dua fungsi adalah turunan fungsi pertama dikalikan fungsi kedua, ditambah fungsi pertama dikalikan turunan fungsi kedua.</p>
        <p><strong>Rumus:</strong> Jika f(x) = g(x) × h(x), maka f'(x) = g'(x) × h(x) + g(x) × h'(x).</p>
        <h2>4. Aturan Pembagian (Quotient Rule)</h2>
          <p>Turunan dari pembagian dua fungsi adalah turunan fungsi pembilang dikalikan penyebut, dikurangi pembilang dikalikan turunan penyebut, dibagi kuadrat penyebut.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) / h(x), maka f'(x) = [g'(x) × h(x) - g(x) × h'(x)] / [h(x)]².</p>
      </section>

      <section>
        <h2>5. Aturan Rantai (Chain Rule)</h2>
        <p>Aturan rantai digunakan untuk menghitung turunan dari fungsi komposisi. Turunan fungsi luar dikalikan dengan turunan fungsi dalam.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(h(x)), maka f'(x) = g'(h(x)) × h'(x).</p>
          <h2>6. Turunan Fungsi Eksponen dan Logaritma</h2>
          <p>Turunan fungsi eksponen dan logaritma memiliki formula khusus. Contohnya, turunan eksponen natural dan logaritma natural.</p>
          <ul>
            <li>Jika f(x) = e^x, maka f'(x) = e^x.</li>
            <li>Jika f(x) = ln(x), maka f'(x) = 1/x.</li>
          </ul>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk12b8"}
        >
          Mulai Latihan Soal
        </button>
      </div>
         
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b7")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab8;
