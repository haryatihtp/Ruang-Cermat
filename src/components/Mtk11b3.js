import React from "react";
import { useNavigate } from "react-router-dom";


const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Induksi Matematika</h1>

      <section>
        <h2>1. Pengertian Induksi Matematika</h2>
        <p>
          Induksi matematika adalah suatu metode pembuktian yang digunakan untuk membuktikan suatu pernyataan atau rumus yang berlaku untuk semua bilangan bulat positif. Proses induksi matematika dilakukan dalam dua langkah yaitu langkah dasar dan langkah induksi.
        </p>
      </section>

      <section>
        <h2>2. Langkah-Langkah Induksi Matematika</h2>
        <p>
          Pembuktian dengan induksi matematika terdiri dari dua langkah utama:
        </p>

        <h3>a. Langkah Dasar</h3>
        <p>
          Langkah pertama adalah membuktikan pernyataan yang ingin dibuktikan untuk nilai terkecil, biasanya untuk n = 1. Ini adalah dasar dari induksi matematika.
        </p>

        <h3>b. Langkah Induksi</h3>
        <p>
          Langkah kedua adalah mengasumsikan bahwa pernyataan tersebut benar untuk n = k, dan kemudian membuktikan bahwa pernyataan tersebut juga benar untuk n = k + 1.
        </p>
      </section>

      <section>
        <h2>3. Contoh Pembuktian Induksi Matematika</h2>
        <p>
          Misalnya, kita ingin membuktikan bahwa jumlah deret bilangan bulat pertama dapat dihitung dengan rumus:
          <br />
          <i>1 + 2 + 3 + ... + n = n(n + 1) / 2</i>
        </p>
        
        <h3>a. Langkah Dasar</h3>
        <p>
          Untuk n = 1, pernyataan tersebut menjadi:
          <br />
          <i>1 = 1(1 + 1) / 2 = 1</i>
          Yang jelas benar.
        </p>

        <h3>b. Langkah Induksi</h3>
        <p>
          Asumsikan pernyataan ini benar untuk n = k, yaitu:
          <br />
          <i>1 + 2 + 3 + ... + k = k(k + 1) / 2</i>
          Selanjutnya, kita harus membuktikan bahwa:
          <br />
          <i>1 + 2 + 3 + ... + k + (k + 1) = (k + 1)(k + 2) / 2</i>
        </p>
      </section>

      <section>
        <h2>4. Contoh Soal Induksi Matematika</h2>
        <p>
          Berikut adalah soal latihan untuk menguji pemahaman Anda tentang induksi matematika. Cobalah untuk membuktikan rumus berikut dengan induksi matematika:
        </p>
        <ul>
          <li>
            <i>1 + 3 + 5 + ... + (2n - 1) = n²</i>
          </li>
          <li>
            <i>2 + 4 + 6 + ... + 2n = n(n + 1)</i>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Pentingnya Induksi Matematika</h2>
        <p>
          Induksi matematika sangat penting dalam pembuktian rumus atau pernyataan yang berlaku untuk semua bilangan bulat positif. Teknik ini banyak digunakan dalam berbagai topik matematika, seperti teori bilangan, aljabar, dan analisis.
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
          onClick={() => navigate("/Mtk11b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;