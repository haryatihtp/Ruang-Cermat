import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab4 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: Persamaan Kuadrat</h1>

      <section>
        <h2>1. Pengertian Persamaan Kuadrat</h2>
        <p>
          Persamaan kuadrat adalah persamaan polinomial dengan derajat dua, yaitu persamaan yang memiliki variabel berpangkat dua. Bentuk umum persamaan kuadrat adalah:
        </p>
        <p>
          <i>ax² + bx + c = 0</i>, dengan a ≠ 0, di mana:
          <ul>
            <li><strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> adalah konstanta,</li>
            <li><strong>x</strong> adalah variabel yang ingin dicari nilainya,</li>
            <li>Persamaan ini memiliki dua solusi, yang bisa berupa dua bilangan real, satu bilangan real, atau dua bilangan kompleks tergantung pada diskriminan.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>2. Bentuk Umum Persamaan Kuadrat</h2>
        <p>
          Bentuk umum dari persamaan kuadrat adalah sebagai berikut:
          <br />
          <i>ax² + bx + c = 0</i>
        </p>
        <ul>
          <li><strong>a</strong> adalah koefisien yang mengalikan x²,</li>
          <li><strong>b</strong> adalah koefisien yang mengalikan x,</li>
          <li><strong>c</strong> adalah konstanta atau bilangan tetap,</li>
          <li>Dengan catatan, <strong>a ≠ 0</strong>, karena jika a = 0, maka persamaan tersebut menjadi linear.</li>
        </ul>
      </section>

      <section>
        <h2>3. Solusi Persamaan Kuadrat</h2>
        <p>
          Solusi dari persamaan kuadrat dapat ditemukan dengan beberapa metode. Salah satu cara yang paling umum digunakan adalah dengan rumus kuadrat (formula kuadrat).
        </p>
        <h3>a. Rumus Kuadrat</h3>
        <p>
          Rumus kuadrat digunakan untuk menemukan akar-akar persamaan kuadrat. Rumus ini diberikan oleh:
          <br />
          <i>x = (-b ± √(b² - 4ac)) / 2a</i>
        </p>
        <p>
          Di sini:
          <ul>
            <li><strong>b² - 4ac</strong> adalah diskriminan (Δ), yang menentukan jenis solusi yang diperoleh:</li>
            <ul>
              <li>Jika Δ lebih besar dari 0, maka persamaan kuadrat memiliki dua solusi real yang berbeda.</li>
              <li>Jika Δ = 0, maka persamaan kuadrat memiliki satu solusi real ganda (berbeda tetapi sama).</li>
              <li>Jika Δ lebih kecil dari 0, maka persamaan kuadrat memiliki dua solusi kompleks.</li>
            </ul>
          </ul>
        </p>
        <h3>b. Penyelesaian Berdasarkan Diskriminan</h3>
        <p>
          Diskriminan (Δ) adalah bagian dari rumus kuadrat yang berada di dalam akar, yaitu <i>b² - 4ac</i>. Nilai diskriminan ini sangat penting untuk menentukan jenis solusi:
          <ul>
            <li><strong>Jika Δ lebih besar dari 0</strong>, persamaan kuadrat memiliki dua solusi real yang berbeda.</li>
            <li><strong>Jika Δ = 0</strong>, persamaan kuadrat memiliki satu solusi real yang ganda (keduanya sama).</li>
            <li><strong>Jika Δ lebih kecil dari 0</strong>, persamaan kuadrat memiliki dua solusi kompleks (bilangan imajiner).</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>4. Contoh Penyelesaian Persamaan Kuadrat</h2>
        <p>Berikut adalah beberapa contoh penyelesaian persamaan kuadrat:</p>
        <h3>a. Contoh 1: Δ lebih besar dari 0</h3>
        <p>
          Misalkan kita diberikan persamaan kuadrat: <br />
          <i>2x² + 3x - 5 = 0</i>
        </p>
        <p>
          Langkah pertama adalah menghitung diskriminan:
          <br />
          <i>Δ = b² - 4ac = 3² - 4(2)(-5) = 9 + 40 = 49</i>
          <br />
          Karena Δ lebih besar dari 0, persamaan ini memiliki dua solusi real. Menggunakan rumus kuadrat:
          <br />
          <i>x = (-3 ± √49) / 2(2) = (-3 ± 7) / 4</i>
        </p>
        <p>
          Solusi pertama:
          <br />
          <i>x₁ = (-3 + 7) / 4 = 4 / 4 = 1</i>
          <br />
          Solusi kedua:
          <br />
          <i>x₂ = (-3 - 7) / 4 = -10 / 4 = -2.5</i>
        </p>
        <p>
          Jadi, solusi dari persamaan tersebut adalah <i>x₁ = 1</i> dan <i>x₂ = -2.5</i>.
        </p>

        <h3>b. Contoh 2: Δ = 0</h3>
        <p>
          Misalkan kita diberikan persamaan kuadrat: <br />
          <i>x² - 4x + 4 = 0</i>
        </p>
        <p>
          Menghitung diskriminan:
          <br />
          <i>Δ = (-4)² - 4(1)(4) = 16 - 16 = 0</i>
          <br />
          Karena Δ = 0, persamaan ini memiliki satu solusi real ganda. Menggunakan rumus kuadrat:
          <br />
          <i>x = (4 ± √0) / 2(1) = 4 / 2 = 2</i>
        </p>
        <p>
          Jadi, solusi dari persamaan tersebut adalah <i>x = 2</i>.
        </p>

        <h3>c. Contoh 3: Δ lebih kecil dari 0</h3>
        <p>
          Misalkan kita diberikan persamaan kuadrat: <br />
          <i>x² + 2x + 5 = 0</i>
        </p>
        <p>
          Menghitung diskriminan:
          <br />
          <i>Δ = (2)² - 4(1)(5) = 4 - 20 = -16</i>
          <br />
          Karena Δ lebih kecil dari 0, persamaan ini memiliki dua solusi kompleks. Menggunakan rumus kuadrat:
          <br />
          <i>x = (-2 ± √(-16)) / 2(1) = (-2 ± 4i) / 2</i>
        </p>
        <p>
          Solusi pertama:
          <br />
          <i>x₁ = (-2 + 4i) / 2 = -1 + 2i</i>
          <br />
          Solusi kedua:
          <br />
          <i>x₂ = (-2 - 4i) / 2 = -1 - 2i</i>
        </p>
        <p>
          Jadi, solusi dari persamaan tersebut adalah <i>x₁ = -1 + 2i</i> dan <i>x₂ = -1 - 2i</i>.
        </p>
      </section>

      <section>
        <h2>5. Penyelesaian Persamaan Kuadrat dengan Faktorisasi</h2>
        <p>
          Metode lain untuk menyelesaikan persamaan kuadrat adalah dengan faktorisasi. Faktor persamaan kuadrat yang berbentuk <i>ax² + bx + c = 0</i> dicari dengan cara memecahnya menjadi dua faktor yang lebih sederhana.
        </p>
        <h3>Contoh Faktorasi:</h3>
        <p>
          Misalkan diberikan persamaan kuadrat: <br />
          <i>x² + 5x + 6 = 0</i>
        </p>
        <p>
          Langkah pertama adalah mencari dua bilangan yang jika dijumlahkan hasilnya adalah 5, dan jika dikalikan hasilnya adalah 6. Bilangan tersebut adalah 2 dan 3.
        </p>
        <p>
          Sehingga, kita dapat memfaktorkan persamaan tersebut menjadi:
          <br />
          <i>(x + 2)(x + 3) = 0</i>
        </p>
        <p>
          Maka, solusi dari persamaan tersebut adalah <i>x = -2</i> atau <i>x = -3</i>.
        </p>
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
          onClick={() => navigate("/Mtk10b3")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;