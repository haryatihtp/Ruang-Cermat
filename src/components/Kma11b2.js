import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b2.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 2: Termokimia</h1>

      <section>
        <h2>1. Pengertian Termokimia</h2>
        <img src="../Image/bab2.1k.jpg" alt="Hidro Alifatik" className="section-image" />
        <p>
        Termokimia adalah cabang ilmu kimia yang mempelajari tentang perubahan kalor (panas) yang menyertai reaksi kimia dan perubahan fisika. Termokimia merupakan bagian dari termodinamika yang lebih luas, yang mempelajari tentang hubungan antara panas dan bentuk energi lainnya.
        </p>
        <p>
        Konsep-konsep Dasar dalam Termokimia: 
        <li><strong>Sistem dan Lingkungan</strong></li>
        <li><strong>Energi</strong></li>
        <li><strong>Kalor (q)</strong></li> 
        <li><strong>Entalpi (H)</strong></li>
        </p>
      </section>

      <section>
        <h2>2. Jenis-jenis Perubahan Entalpi Standar</h2>

        <h3>ΔH<sub>f</sub>° (Entalpi Pembentukan Standar)</h3>
        <p>Perubahan entalpi yang terjadi pada pembentukan 1 mol senyawa dari unsur-unsurnya dalam keadaan standar (298 K dan 1 atm).</p>
        
        <h3>ΔH<sub>d</sub>° (Entalpi Penguraian Standar)</h3>
        <p>Perubahan entalpi yang terjadi pada penguraian 1 mol senyawa menjadi unsur-unsurnya dalam keadaan standar. Nilainya berlawanan dengan ΔH<sub>f</sub>°.</p>

        <h3>ΔH<sub>c</sub>°  (Entalpi Pembakaran Standar)</h3>
        <p>Perubahan entalpi yang terjadi pada pembakaran sempurna 1 mol zat dengan oksigen dalam keadaan standar. Selalu bernilai negatif (eksoterm).</p>
      </section>

      <section>
        <h2>3. Kalorimetri</h2>
        <p>
        Kalorimetri adalah teknik eksperimen untuk mengukur jumlah kalor yang dipertukarkan antara sistem dan lingkungan.
        </p>
        <p>Alat yang digunakan disebut kalorimeter. Ada dua jenis kalorimeter yang umum digunakan:</p>

        <li><strong>Kalorimeter Bom</strong> : Digunakan untuk mengukur kalor reaksi pembakaran pada volume tetap. Kalorimeter ini terdiri dari wadah baja yang kuat (bom) yang berisi sampel dan oksigen berlebih. </li>
        <img src="../Image/bab2.3k.jpg" alt="Pengolahan" className="section-image" />

        <li><strong>Kalorimeter Sederhana</strong> : Digunakan untuk mengukur kalor reaksi dalam larutan pada tekanan tetap. Kalorimeter ini biasanya terdiri dari dua gelas styrofoam yang dimasukkan satu sama lain untuk mengurangi perpindahan panas ke lingkungan.</li>
        
        <img src="../Image/bab2.4k.jpg" alt="Pengolahan" className="section-image" />
      </section>

      <section>
        <h2>4. Energi Ikatan</h2>
        <p>
        Energi ikatan adalah energi yang dibutuhkan untuk memutuskan 1 mol ikatan kimia tertentu dalam fase gas. Energi ikatan selalu bernilai positif (endoterm).
        </p>
        <ul>
          <li>
            <strong>Menghitung ΔH Reaksi Menggunakan Energi Ikatan:</strong> 
            <p>ΔH<sub>reaksi</sub> = Σ Energi Ikatan yang Diputuskan - Σ Energi Ikatan yang Terbentuk</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Aplikasi Termokimia dalam Kehidupan Sehari-hari</h2>
        <ul>
          <li>
            <strong>Pembakaran Bahan Bakar</strong> 
            <p>Menghasilkan gas-gas seperti CO, CO<sub>2</sub>, SO<sub>2</sub>, dan NO<sub>x</sub> yang mencemari udara dan menyebabkan masalah kesehatan.</p>
          </li>
          <li>
            <strong>Makanan</strong> 
            <p>CO<sub>2</sub>  Metabolisme makanan menghasilkan energi bagi tubuh.</p>
          </li>
          <li>
            <strong>Reaksi Kimia Industri</strong> 
            <p> Banyak proses industri yang melibatkan reaksi eksoterm atau endoterm.</p>
          </li>

          <li>
            <strong>Pemanas dan Pendingin</strong> 
            <p> Prinsip termokimia digunakan dalam sistem pemanas dan pendingin ruangan..</p>
          </li>
        </ul>
        <img src="../Image/bab2.5k.jpg" alt="Damapk" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b1")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;