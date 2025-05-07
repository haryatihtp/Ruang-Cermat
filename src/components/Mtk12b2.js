import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk12b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Distribusi Binomial</h1>

      <section>
        <h2>1. Pengertian Distribusi Binomial</h2>
        <p>
          Distribusi binomial adalah salah satu jenis distribusi probabilitas diskrit. 
          Distribusi ini menggambarkan peluang suatu peristiwa terjadi dalam sejumlah percobaan 
          yang memiliki dua kemungkinan hasil, yaitu sukses atau gagal.
        </p>
        <p>
          Karakteristik Distribusi Binomial: Percobaan bernilai dua: Setiap percobaan hanya memiliki 
          dua hasil, yaitu sukses (dengan probabilitas 𝑝) dan gagal (dengan probabilitas 𝑞 = 1 − 𝑝).
        </p>
        <p>
          Rumus Distribusi Binomial: 
          <strong>𝑃(𝑋 = 𝑘) = (𝑛𝑘) ⋅ 𝑝^𝑘 ⋅ (1 − 𝑝)^(𝑛 − 𝑘)</strong>
        </p>
      </section>

      <section>
        <h2>2. Rumus Dasar dan Komponen</h2>
        <p>
          Distribusi Binomial digunakan untuk menghitung peluang suatu peristiwa tertentu terjadi dalam sejumlah 
          percobaan yang memiliki dua kemungkinan hasil. Komponen penting:
        </p>
        <ul>
          <li><strong>Jumlah percobaan (𝑛):</strong> Banyaknya percobaan atau uji coba yang dilakukan.</li>
          <li><strong>Keberhasilan (𝑝):</strong> Probabilitas suatu peristiwa terjadi (sukses) dalam satu percobaan.</li>
          <li><strong>Kegagalan (𝑞):</strong> Probabilitas suatu peristiwa tidak terjadi, dihitung sebagai 𝑞 = 1 − 𝑝.</li>
        </ul>
      </section>

      <section>
        <h2>3. Penerapan dalam Kehidupan Sehari-hari</h2>
        <p>Berikut adalah beberapa contoh penerapan distribusi binomial:</p>
        <ul>
          <li><strong>Melempar Koin:</strong> Dalam 10 kali lemparan koin, peluang kepala muncul 5 kali dapat dihitung menggunakan rumus binomial.</li>
          <li><strong>Soal Ujian Pilihan Ganda:</strong> Contoh peluang menjawab benar sejumlah soal dalam ujian pilihan ganda.</li>
          <li><strong>Peluang Menang Undian:</strong> Dalam undian dengan peluang menang 10%, hitung peluang menang dengan jumlah tiket tertentu.</li>
          <li><strong>Kesehatan:</strong> Contoh peluang seseorang terbebas dari penyakit dalam populasi tertentu.</li>
        </ul>
      </section>

      <section>
        <h2>4. Produksi Barang di Pabrik</h2>
        <p>
          Contoh: Sebuah mesin menghasilkan barang dengan probabilitas cacat sebesar 5%. Jika 50 barang diambil secara acak, 
          peluang hanya 2 barang cacat dapat dihitung dengan rumus distribusi binomial.
        </p>
      </section>

      <section>
        <h2>5. Pentingnya Distribusi Binomial</h2>
        <p>
          Distribusi binomial sangat berguna dalam menganalisis situasi nyata, terutama ketika ingin memahami peluang terjadinya peristiwa tertentu.
          Hal ini membantu dalam pengambilan keputusan berdasarkan data probabilitas.
        </p>
      </section>

      <section>
        <h2>6. Rumus dan Penjelasan Distribusi Binomial</h2>
        <p>
          Distribusi binomial digunakan untuk menghitung probabilitas sejumlah keberhasilan dalam rangkaian percobaan independen 
          yang masing-masing memiliki dua kemungkinan hasil. (misalnya sukses atau
            gagal){" "}
        </p>
        <img src="../Image/Binomial1.png" alt="Rumus dan Penjelasan" className="section-image" />
      </section>

      <section>
        <h2>7. Fungsi Distribusi Probabilitas Binomial</h2>
        <p>
          Fungsi distribusi binomial menghitung probabilitas dengan mempertimbangkan bahwa setiap percobaan bersifat independen 
          (hasil satu percobaan tidak memengaruhi hasil lainnya). 
          Hal ini berguna untuk memprediksi berbagai kejadian, seperti hasil tes atau keberhasilan produk di pasar, hasil tes, atau eksperimen dengan dua
          kemungkinan hasil (misalnya sukses atau gagal, hidup atau mati).
        </p>
        <img src="../Image/Binomial2.png" alt="Fungsi Distribusi Binomial" className="section-image" />
      </section>

      <section>
        <h2>8. Rumus Lengkap Distribusi Binomial</h2>
        <p>
        Adalah salah satu alat
            probabilitas yang sangat berguna dalam mengukur peluang suatu
            kejadian dengan dua hasil (sukses/gagal) dalam sejumlah percobaan.
            Rumus lengkap ini memungkinkan kita menghitung peluang untuk
            berbagai kondisi, baik individu, kumulatif, maupun mendekati
            distribusi Poisson.
        </p>
        <img src="../Image/Binomial3.png" alt="Peluang Distribusi Binomial" className="section-image" />
      </section>

      <section>
        <h2>9. Peluang Distribusi Binomial</h2>
        <p>
          Rumus distribusi binomial digunakan untuk menghitung peluang suatu peristiwa terjadi 
          𝑋 kali dalam 𝑁 percobaan independen, dengan dua kemungkinan hasil (sukses atau gagal).
        </p>
        <img src="../Image/Binomial4.png" alt="Peluang Distribusi Binomial" className="section-image" />
      </section>

      <section>
        <h2>10. Percobaan Rumus</h2>
        <p>
        bagaimana menghitung peluang dalam suatu percobaan yang mengikuti
            distribusi binomial. Konsep ini sangat berguna dalam berbagai
            bidang, seperti statistika, ilmu komputer, dan bahkan dalam
            kehidupan sehari-hari.
        </p>
        <img src="../Image/Binomial5.png" alt="Peluang Distribusi Binomial" className="section-image" />
      </section>

      <section>
        <h2>11. Distribusi Binomial</h2>
        <p>
        salah satu konsep penting dalam statistika yang digunakan untuk
            memodelkan situasi di mana kita melakukan sejumlah percobaan yang
            identik dan independen, dan setiap percobaan hanya memiliki dua
            kemungkinan hasil: sukses atau gagal.
        </p>
        <img src="../Image/Binomial6.png" alt="Peluang Distribusi Binomial" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/> Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk12b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;
