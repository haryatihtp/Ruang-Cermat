import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Sistem Persamaan Linear dan Kuadrat</h1>

      <section>
        <h2>1. Pengertian Sistem Persamaan Linear (SPL)</h2>
        <p>
          Sistem Persamaan Linear (SPL) adalah sekumpulan persamaan linear yang memiliki variabel yang sama, dan tujuan utama dari sistem ini adalah untuk menemukan nilai variabel tersebut yang memenuhi semua persamaan secara bersamaan.
        </p>
        <p>
          Sebuah persamaan linear dua variabel memiliki bentuk umum sebagai berikut:
          <br />
          <i>a₁x + b₁y = c₁</i> 
          <br />
          <i>a₂x + b₂y = c₂</i>
        </p>
        <p>
          Di sini, x dan y adalah variabel yang ingin kita cari, sedangkan a₁, b₁, c₁, a₂, b₂, dan c₂ adalah konstanta. Sistem persamaan linear dua variabel dapat diselesaikan dengan beberapa metode.
        </p>
        <p>
          Pada umumnya, sistem persamaan linear memiliki dua jenis solusi: 
          <ul>
            <li><strong>Solusi tunggal (satu titik)</strong>: Jika kedua garis yang digambarkan oleh persamaan tersebut berpotongan di satu titik.</li>
            <li><strong>Tak hingga solusi</strong>: Jika kedua garis tersebut saling tumpang tindih (garis sejajar).</li>
            <li><strong>Tak ada solusi</strong>: Jika kedua garis tersebut sejajar dan tidak pernah bertemu.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>2. Metode Penyelesaian Sistem Persamaan Linear</h2>
        <p>
          Ada beberapa metode yang digunakan untuk menyelesaikan SPL dua variabel. Berikut adalah beberapa metode yang umum digunakan:
        </p>

        <h3>a. Metode Substitusi</h3>
        <p>
          Metode substitusi melibatkan pemecahan salah satu persamaan untuk satu variabel, kemudian nilai variabel tersebut disubstitusikan ke dalam persamaan yang lain.
        </p>
        <p>
          Contoh:
          <br />
          Misalkan kita diberikan sistem persamaan:
          <br />
          <i>x + y = 6</i>
          <br />
          <i>2x - y = 3</i>
          <br />
          Langkah pertama adalah menyelesaikan persamaan pertama untuk x:
          <br />
          <i>x = 6 - y</i>
          <br />
          Kemudian kita substitusikan x = 6 - y ke dalam persamaan kedua:
          <br />
          <i>2(6 - y) - y = 3</i>
          <br />
          Setelah diselesaikan, kita akan mendapatkan nilai y, dan kemudian nilai x dapat ditemukan.
        </p>

        <h3>b. Metode Eliminasi</h3>
        <p>
          Dalam metode eliminasi, kita mengeliminasi satu variabel dengan menjumlahkan atau mengurangkan kedua persamaan sehingga satu variabel dapat hilang. Metode ini efektif ketika koefisien variabel sudah sama.
        </p>
        <p>
          Contoh:
          <br />
          Misalkan kita diberikan sistem persamaan:
          <br />
          <i>x + y = 6</i>
          <br />
          <i>2x - y = 3</i>
          <br />
          Kita dapat menjumlahkan kedua persamaan untuk mengeliminasi y:
          <br />
          <i>(x + y) + (2x - y) = 6 + 3</i>
          <br />
          Sehingga diperoleh 3x = 9, yang kemudian diselesaikan untuk mendapatkan x. Setelah itu, kita substitusikan x ke dalam salah satu persamaan untuk mencari y.
        </p>

        <h3>c. Metode Matriks (Metode Gauss-Jordan)</h3>
        <p>
          Metode ini menggunakan matriks untuk menyelesaikan SPL. Sistem persamaan linear diubah menjadi bentuk matriks augmented dan kemudian dilakukan eliminasi Gauss-Jordan untuk menemukan solusi.
        </p>
      </section>

      <section>
        <h2>3. Pengertian Sistem Persamaan Kuadrat (SPK)</h2>
        <p>
          Sistem Persamaan Kuadrat (SPK) adalah sistem yang terdiri dari persamaan linear dan persamaan kuadrat. Sistem ini digunakan untuk menemukan nilai variabel yang memenuhi kedua jenis persamaan secara bersamaan. 
        </p>
        <p>
          Sistem persamaan kuadrat dua variabel umumnya memiliki bentuk:
          <br />
          <i>a₁x + b₁y = c₁</i>
          <br />
          <i>ax² + by² = c</i>
        </p>
        <p>
          Dalam hal ini, x dan y adalah variabel yang ingin kita cari, dan persamaan kedua adalah persamaan kuadrat. Tujuan utama adalah mencari nilai x dan y yang memenuhi kedua persamaan secara bersamaan.
        </p>
        <p>
          SPK dapat memiliki beberapa jenis solusi, yaitu:
          <ul>
            <li><strong>Solusi nyata</strong>: Jika terdapat titik potong nyata antara persamaan linear dan kuadrat.</li>
            <li><strong>Solusi tidak nyata</strong>: Jika persamaan kuadrat tidak memotong persamaan linear, atau jika solusi kuadrat berupa bilangan imajiner.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>4. Metode Penyelesaian Sistem Persamaan Kuadrat</h2>
        <p>
          Sistem persamaan kuadrat dapat diselesaikan dengan menggunakan metode substitusi dan eliminasi, seperti pada SPL. Berikut adalah penjelasan masing-masing metode.
        </p>

        <h3>a. Metode Substitusi</h3>
        <p>
          Pada metode ini, kita menyelesaikan salah satu persamaan untuk satu variabel, lalu menggantikan variabel tersebut dalam persamaan lainnya.
        </p>
        <p>
          Contoh:
          <br />
          Misalkan diberikan sistem persamaan kuadrat:
          <br />
          <i>x + y = 5</i>
          <br />
          <i>x² + y² = 25</i>
          <br />
          Langkah pertama adalah menyelesaikan persamaan pertama untuk x:
          <br />
          <i>x = 5 - y</i>
          <br />
          Kemudian substitusikan x = 5 - y ke dalam persamaan kuadrat:
          <br />
          <i>(5 - y)² + y² = 25</i>
          <br />
          Setelah diselesaikan, kita akan mendapatkan nilai y, dan kemudian nilai x dapat ditemukan.
        </p>

        <h3>b. Metode Eliminasi</h3>
        <p>
          Dalam metode eliminasi, kita mengeliminasi satu variabel antara persamaan linear dan persamaan kuadrat untuk menemukan solusi.
        </p>
      </section>

      <section>
        <h2>5. Contoh Soal Sistem Persamaan Linear dan Kuadrat</h2>
        <p>
          Berikut adalah contoh soal latihan untuk menguji pemahaman Anda tentang sistem persamaan linear dan kuadrat:
        </p>
        <ul>
          <li>
            <i>Selesaikan sistem persamaan linear berikut:</i>
            <br />
            <i>3x + 4y = 12</i>
            <br />
            <i>2x - y = 4</i>
          </li>
          <li>
            <i>Selesaikan sistem persamaan kuadrat berikut:</i>
            <br />
            <i>x + y = 7</i>
            <br />
            <i>x² + y² = 49</i>
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Pentingnya Memahami Sistem Persamaan Linear dan Kuadrat</h2>
        <p>
          Memahami sistem persamaan linear dan kuadrat sangat penting dalam berbagai bidang, seperti:
          <ul>
            <li><strong>Ekonomi:</strong> Untuk menganalisis masalah alokasi sumber daya atau peramalan ekonomi.</li>
            <li><strong>Fisika:</strong> Untuk memodelkan berbagai fenomena, seperti gerakan benda dan perubahan energi.</li>
            <li><strong>Teknik:</strong> Untuk merancang dan mengoptimalkan sistem teknik yang melibatkan hubungan antar variabel.</li>
            <li><strong>Ilmu komputer:</strong> Dalam algoritma dan analisis kompleksitas komputasi.</li>
          </ul>
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;