import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl11b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Pergerakan Zat Menuju Membran Sel</h1>

      <section>
        <h2>1. Pengertian Pergerakan Zat dalam Sel</h2>
        <p>
          Pergerakan zat dalam sel merupakan proses yang penting untuk menjaga kelangsungan hidup sel.
          Zat-zat seperti air, oksigen, nutrisi, dan produk limbah harus bergerak ke dan dari dalam sel melalui membran sel.
          Pergerakan ini dapat berlangsung melalui beberapa mekanisme, baik secara pasif maupun aktif.
        </p>
      </section>

      <section>
        <h2>2. Mekanisme Pergerakan Zat</h2>
        <p>
          Pergerakan zat ke dan dari sel dapat melalui dua mekanisme utama: transportasi pasif dan transportasi aktif.
          Keduanya memainkan peran penting dalam mempertahankan homeostasis dalam sel.
        </p>

        <h3>a. Transportasi Pasif</h3>
        <p>
          Transportasi pasif adalah pergerakan zat melintasi membran sel tanpa memerlukan energi.
          Proses ini bergantung pada perbedaan konsentrasi zat di luar dan di dalam sel.
          Beberapa jenis transportasi pasif antara lain difusi, osmosis, dan fasilitasi difusi.
        </p>

        <h4>1. Difusi</h4>
        <p>
          Difusi adalah pergerakan molekul dari daerah dengan konsentrasi tinggi ke daerah dengan konsentrasi rendah.
          Zat yang dapat berdifusi melalui membran sel, seperti oksigen dan karbon dioksida,
          bergerak mengikuti gradien konsentrasi tanpa memerlukan energi.
        </p>
        <img src="/image/bab2.1.jpg" alt="Difusi" className="section-image" />

        <h4>2. Osmosis</h4>
        <p>
          Osmosis adalah pergerakan molekul air melalui membran semipermeabel dari daerah dengan konsentrasi air tinggi ke daerah dengan konsentrasi air rendah.
          Proses ini penting untuk menjaga keseimbangan cairan dalam sel.
        </p>
        <img src="/image/bab2.2.jpeg" alt="Osmosis" className="section-image" />

        <h4>3. Fasilitasi Difusi</h4>
        <p>
          Fasilitasi difusi terjadi ketika molekul atau ion yang tidak dapat melewati membran sel dengan mudah dibantu oleh protein pembawa atau saluran protein.
          Contohnya adalah transportasi glukosa dan ion natrium.
        </p>
        <img src="/image/bab2.3.jpg" alt="Fasilitasi Difusi" className="section-image" />
      </section>

      <section>
        <h2>3. Transportasi Aktif</h2>
        <p>
          Berbeda dengan transportasi pasif, transportasi aktif memerlukan energi dalam bentuk ATP untuk memindahkan zat melawan gradien konsentrasi.
          Proses ini penting untuk mengangkut zat-zat yang tidak bisa melalui difusi, seperti ion-ion tertentu dan molekul besar.
        </p>

        <h3>a. Pompa Natrium-Kalium</h3>
        <p>
          Pompa natrium-kalium adalah salah satu mekanisme transportasi aktif yang menggerakkan ion natrium keluar dari sel dan ion kalium ke dalam sel,
          meskipun melawan gradien konsentrasi. Proses ini penting untuk menjaga keseimbangan ion dalam sel.
        </p>
        <img src="/image/bab2.4.png" alt="Pompa Natrium-Kalium" className="section-image" />

        <h3>b. Endositosis dan Eksositosis</h3>
        <p>
          Endositosis adalah proses pengambilan zat besar atau molekul tertentu ke dalam sel dengan membentuk kantung membran.
          Sedangkan eksositosis adalah proses pengeluaran zat dari sel dengan menggabungkan vesikel dengan membran sel.
        </p>
        <img src="/image/bab2.5.jpg" alt="Endositosis" className="section-image" />
      </section>

      <section>
        <h2>4. Faktor yang Mempengaruhi Pergerakan Zat</h2>
        <p>
          Beberapa faktor yang mempengaruhi pergerakan zat meliputi:
        </p>
        <ul>
          <li>
            <strong>Ukuran Molekul:</strong> Molekul yang lebih kecil lebih mudah bergerak melintasi membran sel.
          </li>
          <li>
            <strong>Perbedaan Konsentrasi:</strong> Semakin besar perbedaan konsentrasi antara dua sisi membran, semakin cepat pergerakan zat.
          </li>
          <li>
            <strong>Temperatur:</strong> Peningkatan suhu dapat meningkatkan laju pergerakan zat.
          </li>
          <li>
            <strong>Keberadaan Saluran atau Pembawa:</strong>
             Membran sel mengandung protein saluran atau pembawa yang mempengaruhi laju transportasi.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Peran Membran Sel dalam Pergerakan Zat</h2>
        <p>
          Membran sel memainkan peran penting dalam mengatur pergerakan zat masuk dan keluar dari sel.
          Selain sebagai penghalang selektif, membran sel memiliki protein transportasi yang memfasilitasi transportasi aktif dan pasif.
        </p>

        <h3>a. Membran Semipermeabel</h3>
        <p>
          Membran sel bersifat semipermeabel, yang berarti hanya memungkinkan zat tertentu untuk melintas.
          Hal ini memastikan bahwa hanya molekul yang dibutuhkan oleh sel yang dapat memasuki atau meninggalkan sel.
        </p>
        <img src="/image/bab2.6.jpg" alt="Membran Semipermeabel" className="section-image" />
      </section>

      <section>
        <h2>6. Kelainan pada Pergerakan Zat</h2>
        <p>
          Beberapa kelainan yang dapat terjadi dalam pergerakan zat meliputi gangguan pada mekanisme transportasi sel. Beberapa contohnya adalah:
        </p>
        <ul>
          <li>
            <strong>Mutasi pada Protein Transportasi:</strong>
            Perubahan pada protein pembawa atau saluran dapat mengganggu transportasi zat dalam sel, seperti pada penyakit cystic fibrosis.
          </li>
          <li>
            <strong>Gangguan Osmosis:</strong>
            Ketidakseimbangan cairan dalam tubuh dapat disebabkan oleh gangguan pada proses osmosis,
            yang dapat menyebabkan pembengkakan atau dehidrasi sel.
          </li>
          <li>
            <strong>Kelainan pada Endositosis:</strong>
            Gangguan dalam proses endositosis dapat menghambat sel untuk mengambil zat yang diperlukan, seperti pada beberapa infeksi virus.
          </li>
        </ul>
        <img src="/image/bab2.7.jpg" alt="Kelainan Pergerakan Zat" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
}; 

export default Bab2;