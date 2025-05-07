import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Hidrokarbon dan Minyak Bumi</h1>

      <section>
        <h2>1. Pengertian Hidrokarbon</h2>
        <p>
        Hidrokarbon adalah senyawa kimia organik yang hanya terdiri dari atom karbon (C) dan hidrogen (H). Senyawa ini merupakan komponen utama penyusun minyak bumi dan gas alam.
        </p>
        <p>
        Berdasarkan strukturnya, hidrokarbon dibedakan menjadi dua golongan besar: 
        <h3>a. Hidrokarbon Alifatik</h3>
        </p>
        <p>
        <img src="../Image/bab1.1k.jpg" alt="Hidro Alifatik" className="section-image" />
      <h3>b. Hidrokarbon Aromatik</h3>
      </p>
      <img src="../Image/bab1.2k.jpg" alt="Hidro Aromatik" className="section-image" />
      </section>

      <section>
        <h2>2. Minyak Bumi</h2>
        <p>
        Minyak bumi adalah campuran kompleks hidrokarbon yang terbentuk secara alami dari sisa-sisa organisme purba yang terendapkan selama jutaan tahun. Selain hidrokarbon, minyak bumi juga mengandung sejumlah kecil senyawa lain seperti belerang, nitrogen, dan oksigen.
        </p>

        <h3>Proses Pembentukan Minyak Bumi</h3>
        <p>
          Membran sel adalah lapisan tipis yang membungkus seluruh bagian sel. Membran ini berfungsi sebagai penghalang yang mengatur keluar masuknya zat dari dan ke dalam sel. Membran sel terdiri dari lapisan fosfolipid yang memiliki sifat hidrofobik dan hidrofilik.
        </p>
        <img src="../Image/bab1.3k.webp" alt="Membran Sel" className="section-image" />
      </section>

      <section>
        <h2>3. Pengolahan Minyak Bumi</h2>
        <p>
        Minyak bumi mentah (crude oil) tidak dapat langsung digunakan, tetapi harus diolah terlebih dahulu melalui proses distilasi fraksionasi. Proses ini memisahkan komponen-komponen minyak bumi berdasarkan perbedaan titik didihnya. Fraksi-fraksi yang dihasilkan antara lain:
        </p>

        <li><strong>Gas</strong> : Metana, etana, propana, butana (digunakan sebagai bahan bakar gas).</li>
        <li><strong>Bensin</strong> : Digunakan sebagai bahan bakar kendaraan bermotor.</li>
        <li><strong>Minyak Tanah</strong> : Digunakan sebagai bahan bakar pesawat jet dan lampu penerangan.</li>
        <li><strong>Solar</strong> : Digunakan sebagai bahan bakar kendaraan diesel dan mesin industri.</li>
        <li><strong>Residu</strong> : Aspal dan lilin.</li>
        <img src="../Image/bab1.4k.jpg" alt="Pengolahan" className="section-image" />
      </section>

      <section>
        <h2>4. Reaksi-Reaksi pada Hidrokarbon</h2>
        <p>
        Hidrokarbon dapat mengalami berbagai reaksi kimia, di antaranya:
        </p>
        <ul>
          <li>
            <strong>Oksidasi:</strong> Reaksi dengan oksigen yang menghasilkan energi, karbon dioksida (CO<sub>2</sub>), dan air (H<sub>2</sub>O),.
          </li>
          <li>
            <strong>Substitusi:</strong> Reaksi penggantian atom hidrogen dengan atom halogen. Reaksi ini umumnya terjadi pada alkana.
          </li>
          <li>
            <strong>Adisi:</strong> Reaksi penambahan atom atau gugus atom pada ikatan rangkap. Reaksi ini umumnya terjadi pada alkena dan alkuna.
          </li>
          <li>
            <strong>Polimerisasi:</strong> Reaksi penggabungan molekul-molekul kecil (monomer) menjadi molekul besar (polimer)
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Dampak Lingkungan dan Upaya Pengurangan</h2>
        <p>
        Pembakaran bahan bakar fosil (termasuk hidrokarbon) memberikan dampak negatif terhadap lingkungan, antara lain:
        </p>
        <ul>
          <li>
            <strong>Pencemaran Udara:</strong> Menghasilkan gas-gas seperti CO, CO<sub>2</sub>, SO<sub>2</sub>, dan NO<sub>x</sub> yang mencemari udara dan menyebabkan masalah kesehatan.
          </li>
          <li>
            <strong>Pemanasan Global:</strong> CO<sub>2</sub> merupakan gas rumah kaca yang menyebabkan peningkatan suhu bumi.
          </li>
          <li>
            <strong>Hujan Asam:</strong> SO<sub>2</sub> dan NO<sub>x</sub> dapat bereaksi dengan air di atmosfer membentuk asam sulfat dan asam nitrat yang menyebabkan hujan asam.
          </li>
        </ul>
        <img src="../Image/bab1.5k.png" alt="Damapk" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma11b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/kimia/kelas-11")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;