
import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b7.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>Bab 7: Teknologi Digital</h1>

      <section>
        <h2>1. Pengertian Teknologi Digital</h2>
        <p>
          Teknologi digital merujuk pada penggunaan perangkat elektronik, sistem komputer, dan data dalam bentuk digital untuk memproses, menyimpan, dan mentransmisikan informasi. Teknologi ini telah merubah hampir setiap aspek kehidupan manusia, dari komunikasi hingga hiburan.
        </p>
        <img src="../Image/teknologi.png" alt="Teknologi Digital" className="section-image" />
      </section>

      <section>
        <h2>2. Komputer dan Sistem Operasi</h2>
        <p><strong>Komputer:</strong></p>
        <p>
          Komputer adalah alat elektronik yang digunakan untuk memproses data dengan cepat dan efisien. Sistem operasinya mengatur sumber daya komputer dan memungkinkan pengguna berinteraksi dengan perangkat keras dan perangkat lunak.
        </p>
        <p><strong>Sistem Operasi:</strong></p>
        <p>
          Sistem operasi adalah perangkat lunak yang mengelola perangkat keras komputer dan menyediakan platform untuk aplikasi lainnya, seperti Windows, macOS, dan Linux.
        </p>
        <img src="../Image/komputer.png" alt="Komputer dan Sistem Operasi" className="section-image" />
      </section>

      <section>
        <h2>3. Internet dan Jaringan Komputer</h2>
        <p>
          Internet adalah jaringan global yang menghubungkan komputer dan perangkat lainnya di seluruh dunia. Teknologi jaringan komputer memungkinkan data ditransmisikan dengan cepat dan efisien antara perangkat yang berbeda.
        </p>
        <p><strong>Rumus Kecepatan Internet:</strong></p>
        <p><em>Kecepatan = Bandwidth x Waktu</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>Kecepatan: Jumlah data yang dapat dipindahkan dalam satu detik (bps)</li>
          <li>Bandwidth: Kapasitas maksimum jalur komunikasi</li>
          <li>Waktu: Durasi pemindahan data</li>
        </ul>
        <img src="../Image/internet.png" alt="Internet dan Jaringan" className="section-image" />
      </section>

      <section>
        <h2>4. Teknologi Cloud Computing</h2>
        <p>
          Cloud computing adalah model layanan komputasi yang menyediakan sumber daya komputer (seperti penyimpanan dan pemrosesan data) melalui internet, memungkinkan pengguna mengakses dan menggunakan perangkat lunak dan data tanpa harus mengelola infrastruktur fisik.
        </p>
        <p><strong>Konsep:</strong> Layanan berbasis cloud seperti penyimpanan data, komputasi awan, dan SaaS (Software as a Service).</p>
        <img src="../Image/computing.png" alt="Cloud Computing" className="section-image" />
      </section>

      <section>
        <h2>5. Keamanan dan Privasi Digital</h2>
        <p>
          Keamanan dan privasi digital melibatkan perlindungan informasi pribadi dan data yang disimpan secara elektronik, serta pencegahan terhadap ancaman cyber seperti peretasan, malware, dan kebocoran data.
        </p>
        <p><strong>Rumus Keamanan Digital:</strong></p>
        <p><em>Keamanan = Enkripsi + Autentikasi + Keamanan Jaringan</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>Enkripsi: Pengamanan data dengan pengodean agar tidak dapat diakses tanpa kunci yang tepat</li>
          <li>Autentikasi: Proses verifikasi identitas pengguna</li>
          <li>Keamanan Jaringan: Perlindungan jaringan komputer dari ancaman eksternal</li>
        </ul>
        <img src="../Image/keamanan.png" alt="Keamanan Digital" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b7"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b6")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk12b8")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab7;