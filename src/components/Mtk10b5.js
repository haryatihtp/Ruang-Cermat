import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>Bab 5: Fungsi Kuadrat</h1>

      <section>
        <h2>A. Pengertian Fungsi Kuadrat</h2>
        <p>
          Fungsi kuadrat adalah suatu fungsi polinomial dengan bentuk umum:
          <br />
          <i>f(x) = ax² + bx + c</i>
          <br />
          Di mana <i>a</i>, <i>b</i>, dan <i>c</i> adalah konstanta dan <i>a ≠ 0</i>. Fungsi kuadrat memiliki grafik berbentuk parabola, yang bisa membuka ke atas atau ke bawah, tergantung pada nilai <i>a</i>. Jika <i>a lebih besar dari 0</i>, parabola membuka ke atas, dan jika <i>a lebih kecil dari 0</i>, parabola membuka ke bawah.
        </p>
      </section>

      <section>
        <h2>B. Sifat-Sifat Fungsi Kuadrat</h2>
        <h3>1. Grafik Fungsi Kuadrat</h3>
        <p>
          Grafik fungsi kuadrat adalah parabola. Berikut adalah beberapa sifat dari grafik fungsi kuadrat:
          <ul>
            <li>Jika <i>a lebih besar dari 0</i>, parabola membuka ke atas, dan jika <i>a lebih kecil dari 0</i>, parabola membuka ke bawah.</li>
            <li>Simetri: Parabola simetris terhadap garis vertikal yang melalui titik puncaknya, yang disebut dengan sumbu simetri.</li>
            <li>Titik Puncak: Titik puncak parabola adalah titik maksimum atau minimum dari fungsi tersebut.</li>
            <li>Titik Potong Sumbu X: Titik di mana grafik memotong sumbu X, yang dapat ditemukan dengan menghitung akar-akar persamaan kuadrat.</li>
            <li>Titik Potong Sumbu Y: Titik di mana grafik memotong sumbu Y, yang terjadi ketika x = 0, yaitu nilai dari <i>f(0) = c</i>.</li>
          </ul>
        </p>

        <h3>2. Bentuk-Bentuk Fungsi Kuadrat</h3>
        <p>
          Fungsi kuadrat dapat ditulis dalam beberapa bentuk yang berbeda:
          <ul>
            <li><strong>Bentuk Umum:</strong> <i>f(x) = ax² + bx + c</i>.</li>
            <li><strong>Bentuk Kanonik:</strong> <i>f(x) = a(x - p)² + q</i>, di mana <i>(p, q)</i> adalah titik puncak parabola. Bentuk ini sangat berguna untuk menentukan posisi puncak parabola dengan mudah.</li>
            <li><strong>Bentuk Faktor:</strong> <i>f(x) = a(x - r₁)(x - r₂)</i>, di mana <i>r₁</i> dan <i>r₂</i> adalah akar-akar persamaan kuadrat, atau titik-titik potong dengan sumbu X.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>C. Menyelesaikan Persamaan Kuadrat</h2>
        <h3>1. Metode Penyelesaian Persamaan Kuadrat</h3>
        <p>
          Untuk menyelesaikan persamaan kuadrat, kita dapat menggunakan beberapa metode, yaitu:
          <ul>
            <li><strong>Faktorasi:</strong> Mencari dua bilangan yang hasil perkaliannya sama dengan c dan jumlahnya sama dengan b dalam persamaan <i>ax² + bx + c = 0</i>.</li>
            <li><strong>Metode Pemfaktoran Kuadrat Sempurna:</strong> Jika persamaan tidak dapat difaktorkan langsung, kita dapat mengubahnya menjadi kuadrat sempurna.</li>
            <li><strong>Formula Kuadrat:</strong> Menggunakan rumus kuadrat yang diperoleh dari penyelesaian umum persamaan kuadrat, yaitu:
              <br />
              <i>x = (-b ± √(b² - 4ac)) / 2a</i>
            </li>
          </ul>
        </p>

        <h3>2. Menyelesaikan dengan Rumus Kuadrat</h3>
        <p>
          Persamaan kuadrat dapat diselesaikan dengan rumus kuadrat. Misalnya, jika kita memiliki persamaan:
          <br />
          <i>2x² + 3x - 5 = 0</i>
          Maka, kita dapat menyelesaikannya menggunakan rumus kuadrat:
          <br />
          <i>x = (-3 ± √(3² - 4(2)(-5))) / (2 * 2)</i>
          <br />
          Langkah-langkahnya adalah menghitung diskriminan (b² - 4ac) terlebih dahulu, lalu mencari akar-akarnya.
        </p>
      </section>

      <section>
        <h2>D. Aplikasi Fungsi Kuadrat dalam Kehidupan Sehari-Hari</h2>
        <p>
          Fungsi kuadrat sering kali digunakan dalam berbagai situasi kehidupan nyata, antara lain:
          <ul>
            <li><strong>Peluncuran Benda:</strong> Fungsi kuadrat digunakan untuk menggambarkan gerak parabola benda yang dilemparkan atau diproyeksikan ke udara.</li>
            <li><strong>Optimasi:</strong> Fungsi kuadrat digunakan dalam masalah optimasi, seperti untuk menentukan titik maksimum atau minimum dalam berbagai konteks, misalnya dalam ekonomi atau perencanaan produksi.</li>
            <li><strong>Perhitungan Luas dan Volume:</strong> Beberapa soal dalam geometri memerlukan penggunaan fungsi kuadrat untuk menghitung luas dan volume bangun ruang atau bidang tertentu.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>E. Soal Latihan Fungsi Kuadrat</h2>
        <p>
          Coba selesaikan soal-soal berikut untuk menguji pemahaman Anda tentang fungsi kuadrat:
          <ul>
            <li>Hitung akar-akar dari persamaan kuadrat: <i>x² + 5x + 6 = 0</i></li>
            <li>Ubah persamaan kuadrat <i>2x² + 8x + 6 = 0</i> ke dalam bentuk kanonik.</li>
            <li>Tentukan titik puncak dari fungsi kuadrat: <i>f(x) = x² - 4x + 3</i></li>
          </ul>
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b5"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;