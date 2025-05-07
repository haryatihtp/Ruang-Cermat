import React from 'react';
import '../css/Klasifikasi.css';

const Basidiomycota = () => {
  return (
    <div className="basidiomycota-materi">
      <h1>Basidiomycota </h1>
      
      <section className="pengertian">
        <h2>Pengertian</h2>
        <p>
        Basidiomycota adalah jamur yang berukuran makroskopis, bereproduksi aseksual
        dengan membentuk spora di atas sel yang disebut basidium. Basidiomycota pada umumnya mudah 
        dikenali karena memiliki bentuk seperti payung dan  pada divisi ini, Sebagian besar jenis 
        jamurnya hidup sebagai parasite meskipun ada juga yang saprofit.  Reproduksi seksusal dilakukan
         dengan membentuk spora konidia.
        </p>
      </section>

      <section className="ciri-ciri">
        <h2>Ciri-Ciri</h2>
        <ul>
          <li>Multiseluler.</li>
          <li>Mengandung inti haploid.</li>
          <li>Memilki keturunan diploid lebih singkat.</li>
          <li>Memiliki basidiokarp.</li>
          <li>Badan buah berbentuk seperti payung atau kuping.</li>
          <li>Beberapa jenis dapat dijadikan sumber makanan</li>
          <li>Melakukan reproduksi secara seksual (generatif) dan aseksual (vegetatif). .</li>
        </ul>
      </section>

      <section className="contoh">
        <h2>Contoh Basidiomycota</h2>
        <ul>
          <li><strong>Auricularia polytricha </strong>: jamur kuping.</li>
          <li><strong>Volvariella volvaceae </strong>: jamur merang.</li>
          <li><strong>Puccinia arachidis  </strong>: jamur parasite pada tanaman kacang.</li>
          <li><strong>Amanita muscariaa  </strong>: jamur yang beracun .</li>
        </ul>
      </section>

      <section className="reproduksi">
        <h2>Reproduksi</h2>
        <p>
        Dimulai dengan peleburan dua, haploid, hifa tipe kawin (+ dan -) untuk membentuk hifa dikariotik. Hifa dikariotik ini mampu menghasilkan tubuh buah atau jamur insang di bawah kondisi lingkungan yang menguntungkan. Kemudian, basidia terbentuk di permukaan insang.
        </p>
      </section>

      <section className="peran">
        <h2>Peran dalam Ekosistem</h2>
        <p>
        Jamur Basidiomycota memiliki peran penting dalam ekosistem. Mereka berperan sebagai dekomposer, memecah bahan organik kompleks menjadi komponen yang lebih sederhana dan menghasilkan nutrisi yang dapat digunakan oleh organisme lain.
        infeksi bakteri adalah contoh ascomycota
        </p>
      </section>
    </div>
  );
};

export default Basidiomycota;
