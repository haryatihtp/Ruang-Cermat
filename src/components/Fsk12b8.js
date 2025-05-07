import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk12b8.css';

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>Bab 8: Sumber Energi</h1>

      <section>
        <h2>1. Pengertian Sumber Energi</h2>
        <p>
          Sumber energi adalah segala sesuatu yang dapat menghasilkan energi untuk memenuhi kebutuhan hidup manusia. Energi ini bisa berasal dari sumber alam maupun buatan yang dapat digunakan untuk berbagai keperluan, seperti listrik, transportasi, dan industri.
        </p>
        <img src="../Image/sumber_energi.png" alt="Sumber Energi" className="section-image" />
      </section>

      <section>
        <h2>2. Sumber Energi Terbarukan</h2>
        <p><strong>Energi Matahari:</strong></p>
        <p>
          Energi matahari diperoleh dari radiasi matahari yang dapat diubah menjadi energi listrik atau energi panas menggunakan panel surya dan kolektor matahari. Energi ini tidak habis dan ramah lingkungan.
        </p>
        <p><strong>Energi Angin:</strong></p>
        <p>
          Energi angin dihasilkan dari pergerakan udara yang dapat dimanfaatkan untuk menghasilkan energi listrik menggunakan turbin angin.
        </p>
        <p><strong>Energi Biomassa:</strong></p>
        <p>
          Energi biomassa diperoleh dari bahan organik, seperti kayu, limbah pertanian, dan sampah organik yang dapat dibakar atau diolah untuk menghasilkan energi.
        </p>
        <img src="../Image/energi_terbarukan.png" alt="Sumber Energi Terbarukan" className="section-image" />
      </section>

      <section>
        <h2>3. Sumber Energi Tak Terbarukan</h2>
        <p>
          Sumber energi tak terbarukan adalah energi yang berasal dari bahan-bahan alam yang terbatas jumlahnya dan tidak dapat diperbaharui, seperti batu bara, minyak bumi, dan gas alam.
        </p>
        <p><strong>Energi Fosil:</strong></p>
        <p>
          Energi fosil berasal dari sisa-sisa makhluk hidup yang telah terkubur selama jutaan tahun dan kemudian berubah menjadi batu bara, minyak bumi, dan gas alam. Penggunaan energi ini menyebabkan polusi dan berkontribusi terhadap perubahan iklim.
        </p>
        <img src="../Image/energi_tak_terbarukan.png" alt="Sumber Energi Tak Terbarukan" className="section-image" />
      </section>

      <section>
        <h2>4. Proses Pembangkitan Energi Listrik</h2>
        <p>
          Pembangkitan energi listrik dapat dilakukan dengan berbagai cara, baik dari sumber energi terbarukan maupun tak terbarukan. Pada umumnya, energi mekanik yang dihasilkan dari turbin akan diubah menjadi energi listrik melalui generator.
        </p>
        <p><strong>Contoh Proses:</strong></p>
        <ul>
          <li>Pembangkit Listrik Tenaga Uap (PLTU): Menggunakan batu bara atau gas alam untuk menghasilkan uap yang memutar turbin.</li>
          <li>Pembangkit Listrik Tenaga Air (PLTA): Menggunakan energi potensial air untuk memutar turbin yang menghasilkan listrik.</li>
          <li>Pembangkit Listrik Tenaga Angin (PLTA): Menggunakan turbin angin untuk menghasilkan listrik dari energi kinetik angin.</li>
        </ul>
        <img src="../Image/tenaga_listrik.png" alt="Proses Pembangkitan Energi Listrik" className="section-image" />
      </section>

      <section>
        <h2>5. Efisiensi Energi dan Penghematan</h2>
        <p>
          Efisiensi energi adalah upaya untuk menggunakan energi secara lebih hemat dan bijaksana tanpa mengurangi kenyamanan atau produktivitas. Penghematan energi dapat dilakukan dengan cara menggunakan peralatan yang lebih efisien, mengurangi pemborosan, dan memanfaatkan sumber energi terbarukan.
        </p>
        <p><strong>Rumus Efisiensi Energi:</strong></p>
        <p><em>Efisiensi = (Energi yang Berguna / Energi yang Dihabiskan) x 100%</em></p>
        <p><strong>Keterangan:</strong></p>
        <ul>
          <li>Energi yang Berguna: Energi yang dapat dimanfaatkan untuk keperluan tertentu</li>
          <li>Energi yang Dihabiskan: Energi total yang digunakan dalam proses</li>
        </ul>
        <img src="../Image/efisiensi.png" alt="Efisiensi Energi" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk12b8"}
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
          onClick={() => navigate("/Fsk128")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab8;