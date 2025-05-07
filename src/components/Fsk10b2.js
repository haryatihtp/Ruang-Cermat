import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk10b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Hukum Newton</h1>

      <section>
        <h2>Pengertian Hukum Newton</h2>
        <p>
         Hukum Newton merupakan dasar dalam memahami gerak dan dinamika benda.
          Dikembangkan oleh Sir Isaac Newton, hukum ini menjelaskan hubungan antara gaya, massa, dan percepatan.
          Terdapat tiga jenis hukum newton yang saling melengkapi.
        </p>
      </section>

      <section>
        <h2>1. Hukum Newton I</h2>
        <p>
          Setiap benda akan tetap dalam keadaan diam atau bergerak lurus beraturan kecuali ada gaya luar yang mengubah keadaannya.
          Inersia atau kelembaman adalah sifat benda yang cenderung mempertahankan keadaannya, baik itu diam maupun bergerak.
        </p>

        <h3>Rumus Inersia</h3>
        <p>
        Berikut merupakan rumus dari hukum inersia yang dapat digunakan.
        </p>
        <img src="../Image/inersia.jpg" alt="Inersia" className="img-fluid mt-3 rounded shadow-lg" />

      </section>

      <section>
        <h2>2. Hukum Newton II</h2>
        <p>
        Hukum Newton Kedua adalah prinsip fundamental dalam fisika yang menjelaskan hubungan antara gaya, massa, dan percepatan suatu benda.
         Hukum ini menyatakan bahwa percepatan yang dialami oleh sebuah benda berbanding lurus dengan gaya total yang bekerja padanya dan berbanding terbalik dengan massanya
        </p>

        <h3>Rumus Percepatan</h3>
        <p>
          Berikut merupakan rumus dari hukum newton kedua (Percepatan).
        </p>
        <img src="../Image/percepatan.jpg" alt="Percepatan" className="img-fluid mt-3 rounded shadow-lg" />
      </section>

      <section>
        <h2>3. Hukum Newton III</h2>
        <p>
        Hukum Newton Ketiga berbunyi: "Setiap aksi selalu memiliki reaksi yang sama besar tetapi berlawanan arah." Hukum ini menjelaskan bahwa gaya selalu terjadi secara berpasangan,
        di mana ketika suatu benda memberikan gaya pada benda lain, benda tersebut akan menerima gaya yang sama besar tetapi arahnya berlawanan.
        </p>

        <h3>Rumus Aksi Reaksi</h3>
        <p>
         Berikut merupakan rumus dari hukum newton ketiga (Hukum Aksi Reaksi).
        </p>
        <img src="../Image/aksireaksi.jpg" alt="Aksi" className="img-fluid mt-3 rounded shadow-lg" />
      </section>

      <section>
        <h2>5. Fungsi hukum Newton dalam kehidupan sehari-hari</h2>
        <ul>
          <li>
            <strong>Memahami Keseimbangan:</strong> Penumpang kendaraan yang tiba-tiba berhenti akan terdorong ke depan karena sifat inersia tubuh. Hal ini menjadi dasar perlunya sabuk pengaman.
          </li>
          <li>
            <strong>Menggerakkan benda:</strong>  Ketika mendorong meja yang berat, gaya yang lebih besar diperlukan untuk menghasilkan percepatan.
          </li>
          <li>
            <strong>Peluncuran Roket:</strong> Gas yang dikeluarkan ke bawah menghasilkan gaya reaksi ke atas yang mendorong roket meluncur.
          </li>
          <li>
            <strong>Berenang:</strong>  Ketika tangan mendorong air ke belakang, air memberikan gaya reaksi ke depan sehingga tubuh bergerak maju.
          </li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b1")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;