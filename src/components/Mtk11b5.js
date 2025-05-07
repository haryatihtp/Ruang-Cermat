import React from "react";
import { useNavigate } from "react-router-dom";
// import './bab4.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      
      <h1>Bab 5: Turunan dalam Matematika</h1>
      <section>
      <p>
        Turunan merupakan konsep dasar dalam kalkulus yang mengukur laju perubahan suatu fungsi terhadap variabel independennya. Dalam konteks matematika kelas 11, kita akan membahas pengertian turunan, aturan dasar dalam menghitung turunan, serta aplikasinya dalam berbagai soal dan masalah.
      </p>

      <h2>A. Pengertian Turunan</h2>
      <p>
        Turunan suatu fungsi pada suatu titik menggambarkan laju perubahan fungsi tersebut pada titik tersebut. Secara geometris, turunan di suatu titik menunjukkan kemiringan garis singgung pada grafik fungsi di titik itu. Turunan sering kali digunakan untuk memodelkan berbagai fenomena seperti kecepatan, percepatan, dan perubahan lainnya.
      </p>

      <h2>B. Aturan-Aturan Turunan</h2>
      <h3>1. Aturan Pangkat</h3>
      <p>
        Salah satu aturan dasar dalam menghitung turunan adalah aturan pangkat. Jika f(x) = x^n, maka turunannya adalah f'(x) = n * x^(n-1). Aturan ini berlaku untuk setiap bilangan real n.
      </p>

      <h3>2. Aturan Penjumlahan dan Pengurangan</h3>
      <p>
        Jika f(x) dan g(x) adalah dua fungsi yang dapat diturunkan, maka turunan dari f(x) + g(x) adalah f'(x) + g'(x). Demikian juga untuk pengurangan, turunan dari f(x) - g(x) adalah f'(x) - g'(x).
      </p>

      <h3>3. Aturan Perkalian</h3>
      <p>
        Jika f(x) dan g(x) adalah dua fungsi yang dapat diturunkan, maka turunan dari f(x) * g(x) dapat dihitung menggunakan aturan perkalian, yaitu:
        <br />
        (f(x) * g(x))' = f'(x) * g(x) + f(x) * g'(x).
      </p>

      <h3>4. Aturan Pembagian</h3>
      <p>
        Jika f(x) dan g(x) adalah dua fungsi yang dapat diturunkan, maka turunan dari f(x) / g(x) dapat dihitung dengan menggunakan aturan pembagian, yaitu:
        <br />
        (f(x) / g(x))' = (f'(x) * g(x) - f(x) * g'(x)) / (g(x))^2.
      </p>

      <h3>5. Aturan Rantai</h3>
      <p>
        Aturan rantai digunakan ketika kita ingin menghitung turunan dari fungsi komposit, yaitu fungsi yang merupakan komposisi dari dua fungsi lain. Jika f(x) = h(g(x)), maka turunan dari f(x) adalah:
        <br />
        f'(x) = h'(g(x)) * g'(x).
      </p>
      </section>

      <section>
        <h2>C. Aplikasi Turunan</h2>
        <p>
          Turunan memiliki banyak aplikasi dalam kehidupan sehari-hari dan ilmu pengetahuan. Beberapa aplikasi utamanya termasuk:
          <ul>
            <li><strong>Kecepatan:</strong> Turunan posisi terhadap waktu memberikan kecepatan. Jika posisi suatu benda diukur sebagai fungsi waktu, maka turunannya memberikan kecepatan benda tersebut.</li>
            <li><strong>Percepatan:</strong> Turunan kecepatan terhadap waktu memberikan percepatan. Ini menggambarkan bagaimana kecepatan benda berubah seiring waktu.</li>
            <li><strong>Optimasi:</strong> Turunan digunakan untuk mencari titik maksimum atau minimum suatu fungsi, yang berguna dalam masalah optimasi seperti menentukan biaya minimum atau keuntungan maksimum.</li>
            <li><strong>Garis Singgung:</strong> Turunan memberikan kemiringan dari garis singgung pada grafik fungsi, yang dapat digunakan untuk menggambarkan perubahan suatu sistem secara lebih akurat.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>D. Teknik-Teknik dalam Menghitung Turunan</h2>
        <h3>1. Turunan dari Fungsi Trigonometri</h3>
        <p>
          Beberapa fungsi trigonometri yang sering digunakan dan turunannya adalah:
          <ul>
            <li>Jika f(x) = sin(x), maka f'(x) = cos(x).</li>
            <li>Jika f(x) = cos(x), maka f'(x) = -sin(x).</li>
            <li>Jika f(x) = tan(x), maka f'(x) = sec²(x).</li>
          </ul>
        </p>

        <h3>2. Turunan dari Fungsi Eksponensial dan Logaritma</h3>
        <p>
          Turunan fungsi eksponensial dan logaritma juga sangat penting dalam kalkulus. Beberapa aturan dasar adalah:
          <ul>
            <li>Jika f(x) = e^x, maka f'(x) = e^x.</li>
            <li>Jika f(x) = ln(x), maka f'(x) = 1/x.</li>
          </ul>
        </p>

        <h3>3. Teknik Diferensiasi Implicit</h3>
        <p>
          Teknik diferensiasi implisit digunakan untuk menghitung turunan dari fungsi yang tidak dapat dipisahkan secara eksplisit. Misalnya, jika kita memiliki persamaan x² + y² = 1, kita dapat mengambil turunan dari kedua sisi persamaan terhadap x menggunakan aturan rantai untuk mendapatkan turunan y terhadap x.
        </p>
      </section>

      <section>
        <h2>E. Soal Latihan</h2>
        <p>
          Untuk lebih memahami konsep turunan, mari kita kerjakan beberapa soal latihan:
          <ul>
            <li>Hitung turunan dari fungsi f(x) = 3x² - 5x + 7.</li>
            <li>Hitung turunan dari fungsi g(x) = sin(x) * cos(x).</li>
            <li>Hitung turunan dari fungsi h(x) = ln(x² + 1).</li>
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
          onClick={() => navigate("/Mtk11b4")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;