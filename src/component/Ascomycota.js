import React from 'react';
import '../css/Klasifikasi.css'; 

const Ascomycota = () => {
  return (
    <div className="ascomycota-materi">
      <h1>Ascomycota</h1>
      
      <section className="pengertian">
        <h2>Pengertian</h2>
        <p>
        Ascomycota adalah kelompok fungi yang hifanya bersekat, sehingga di
        tiap sel hifanya berinti satu. Ascomycota Dikenal sebagai jamur kantung, menghasilkan 
        askospora dalam struktur khusus yang disebut askus. Contoh Ascomycota adalah Saccharomyces cerevisiae 
        (fermentasi alkohol) dan Aspergillus flavus (penghasil racun aflatoksin)
        </p>
      </section>

      <section className="ciri-ciri">
        <h2>Ciri-Ciri</h2>
        <ul>
          <li>Dinding selnya tersusun atas zat kitin.</li>
          <li>Memiliki talus Unisel dan multiseluler.</li> 
          <li>Hifa bersekat, membentuk badan buah yang disebut ascokarp.</li>
          <li>Mengandung inti haploid.</li>
          <li>Memiliki keturunan diploid lebih singkat</li>
          <li>Reproduksi vegetatifnya dengan membentuk konidiospora</li>
          <li>Reproduksi generatifnya dengan konjugasi yang menghasilkan askospora.</li>
        </ul>
      </section>

      <section className="contoh">
        <h2>Contoh Ascomycota</h2>
        <ul>
          <li><strong>Saccharomyces cerevisiae </strong>: Jamur roti, jamur yang berfungsi sebagai ragi pada proses pembuatan roti.</li>
          <li><strong>Neurospora crassa </strong>: jamur pembuat oncom.</li>
          <li><strong>Tuber melanosporum </strong>: Atau lebih dikenal dengan jamur truffle yang bisa dimakan dan berharga mahal. .</li>
        </ul>
      </section>

      <section className="reproduksi">
        <h2>Reproduksi</h2>
        <p>
        Ascomycota dapat bereproduksi secara seksual maupun aseksual. 
        Reproduksi seksualnya dengan membentuk askospora di dalam askus, 
        sedang aseksualnya dengan membentuk konidium tunggal atau berantai pada 
        ujung hifa khusus yang disebut konidiofor.
        </p>
      </section>

      <section className="peran">
        <h2>Peran dalam Ekosistem</h2>
        <p>
        Ascomycota sangat bermanfaat bagi manusia sebagai sumber senyawa penting 
        medis, seperti antibiotik, fermentasi roti, minuman beralkohol, dan keju. 
        Spesies penisilin pada keju dan yang memproduksi antibiotik untuk mengobati penyakit 
        infeksi bakteri adalah contoh ascomycota
        </p>
      </section>
    </div>
  );
};

export default Ascomycota;
