import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 6: Trigonometri</h1>
      <section>
        <h2>A. Pengertian Trigonometri</h2>
        <h3>1. Apa Itu Trigonometri?</h3>
        <p>
          Trigonometri adalah cabang matematika yang mempelajari hubungan antara sisi-sisi dan sudut-sudut dalam segitiga. Trigonometri sangat berguna dalam berbagai bidang seperti fisika, rekayasa, dan navigasi. Konsep utama dalam trigonometri adalah fungsi trigonometri yang menghubungkan sudut dengan rasio sisi segitiga.
        </p>

        <h3>2. Fungsi Trigonometri Dasar</h3>
        <p>
          Fungsi trigonometri dasar adalah fungsi yang menghubungkan sudut segitiga dengan perbandingan panjang sisi-sisinya. Fungsi dasar tersebut adalah:
        </p>
        <h4>a. Sinus (sin)</h4>
        <p>
          Fungsi sinus dari suatu sudut dalam segitiga siku-siku didefinisikan sebagai perbandingan antara panjang sisi yang berhadapan dengan sudut tersebut (sisi depan) dan panjang sisi miring (hipotenusa). 
          <br />
          Sinus θ = (sisi depan) / (hipotenusa)
        </p>

        <h4>b. Kosinus (cos)</h4>
        <p>
          Fungsi kosinus dari suatu sudut didefinisikan sebagai perbandingan antara panjang sisi yang berdekatan dengan sudut tersebut (sisi samping) dan panjang sisi miring (hipotenusa).
          <br />
          Kosinus θ = (sisi samping) / (hipotenusa)
        </p>

        <h4>c. Tangen (tan)</h4>
        <p>
          Fungsi tangen dari suatu sudut didefinisikan sebagai perbandingan antara panjang sisi yang berhadapan dengan sudut tersebut dan panjang sisi yang berdekatan dengan sudut tersebut.
          <br />
          Tangen θ = (sisi depan) / (sisi samping)
        </p>

        <h4>d. Kosekan (csc)</h4>
        <p>
          Fungsi kosekan adalah kebalikan dari sinus. 
          <br />
          Kosekan θ = 1 / Sinus θ
        </p>

        <h4>e. Sekan (sec)</h4>
        <p>
          Fungsi sekan adalah kebalikan dari kosinus.
          <br />
          Sekan θ = 1 / Kosinus θ
        </p>

        <h4>f. Kotonen (cot)</h4>
        <p>
          Fungsi kotangen adalah kebalikan dari tangen.
          <br />
          Kotangen θ = 1 / Tangen θ
        </p>

        <h3>3. Sifat-Sifat Fungsi Trigonometri</h3>
        <p>
          Fungsi trigonometri memiliki sifat-sifat yang sangat berguna dalam perhitungan, di antaranya:
        </p>
        <ul>
          <li>
            <strong>Identitas Pythagoras:</strong> Sin²θ + Cos²θ = 1
          </li>
          <li>
            <strong>Identitas Sudut Ganda:</strong> Sin(2θ) = 2sin(θ)cos(θ) dan Cos(2θ) = cos²(θ) - sin²(θ)
          </li>
          <li>
            <strong>Identitas Sudut Setengah:</strong> Sin(θ/2) = ±√((1 - cos(θ)) / 2)
          </li>
        </ul>

        <h2>B. Menyelesaikan Soal Trigonometri</h2>
        <p>
          Dalam menyelesaikan soal trigonometri, kita sering kali dihadapkan pada soal yang meminta kita untuk menghitung nilai fungsi trigonometri suatu sudut atau untuk menyelesaikan persamaan trigonometri.
        </p>
        
        <h3>1. Menyelesaikan Persamaan Trigonometri</h3>
        <p>
          Untuk menyelesaikan persamaan trigonometri, kita perlu menggunakan identitas trigonometri dan menggantikan nilai-nilai tertentu untuk mendapatkan solusi.
        </p>
        <h4>Contoh: Menyelesaikan Persamaan sin(θ) = 0.5</h4>
        <p>
          Untuk mencari nilai θ, kita gunakan invers sinus:
          <br />
          θ = sin⁻¹(0.5) = 30° atau θ = 150° (karena sin(150°) = 0.5).
        </p>

        <h3>2. Menyelesaikan Soal Trigonometri dalam Segitiga Siku-Siku</h3>
        <p>
          Dalam segitiga siku-siku, kita sering kali diberikan dua sisi atau satu sisi dan satu sudut. Dengan menggunakan fungsi trigonometri dasar (sin, cos, tan), kita dapat menghitung sisi yang tidak diketahui atau sudut yang tidak diketahui.
        </p>
        <h4>Contoh: Dalam segitiga siku-siku dengan sisi depan 3 dan sisi samping 4, tentukan hipotenusanya!</h4>
        <p>
          Menggunakan teorema Pythagoras, kita dapat menghitung panjang sisi miring (hipotenusa):
          <br />
          hipotenusa² = 3² + 4²
          <br />
          hipotenusa = √(9 + 16) = √25 = 5
        </p>

        <h2>C. Aplikasi Trigonometri dalam Kehidupan Sehari-Hari</h2>
        <p>
          Trigonometri memiliki berbagai aplikasi dalam kehidupan sehari-hari dan ilmu pengetahuan:
          <ul>
            <li><strong>Fisika:</strong> Trigonometri digunakan dalam analisis gerak, gelombang, dan banyak konsep fisika lainnya.</li>
            <li><strong>Arsitektur:</strong> Dalam merancang bangunan dan struktur, trigonometri digunakan untuk menghitung sudut dan panjang sisi.</li>
            <li><strong>Navigasi:</strong> Trigonometri digunakan dalam navigasi dan perhitungan jarak antara dua titik di permukaan bumi.</li>
            <li><strong>Engineering:</strong> Trigonometri digunakan untuk menganalisis gaya dalam struktur dan mesin, serta dalam desain elektronik.</li>
          </ul>
        </p>

        <h2>D. Teknik-Teknik dalam Mengerjakan Soal Trigonometri</h2>
        <h3>1. Menggunakan Identitas Trigonometri</h3>
        <p>
          Dalam banyak soal trigonometri, kita dapat menyederhanakan persamaan atau menghitung nilai fungsi trigonometri dengan menggunakan identitas trigonometri.
        </p>

        <h3>2. Menggunakan Grafik Fungsi Trigonometri</h3>
        <p>
          Grafik fungsi trigonometri sangat membantu dalam visualisasi hubungan antara sudut dan nilai fungsi trigonometri. Grafik sin, cos, dan tan memiliki pola periodik yang dapat dipahami dengan mudah.
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
          onClick={() => navigate("/Mtk10b6")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b8")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab7;