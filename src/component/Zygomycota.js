import React from 'react';
import '../css/Klasifikasi.css';

const Zygomycota = () => {
  return (
    <div className="zygomycota-materi">
      <h1>Zygomycota (Jamur Zigot)</h1>
      
      <section className="pengertian">
        <h2>Pengertian</h2>
        <p>
        Fungi ini dinamakan sebagai fungi Zygomycota karena fungi ini membentuk spora istirahat 
        berdinding tebal yang disebut dengan zigospora. Fungi Zygomycota merupakan fungi yang memiliki 
        hifa tidak bersekat dan menghasilkan zigospora sebagai spora seksual. Zygomycota tinggal dan berhabitat 
        di darat, tanah, makanan membusuk ataupun pada sisa organisme mati.
          Zygomycota adalah salah satu divisi dari kingdom Fungi yang dikenal sebagai jamur zigot.
          Jamur ini biasanya hidup sebagai saprofit yang tumbuh pada bahan organik mati, tetapi 
          beberapa juga dapat menjadi parasit pada tumbuhan dan hewan.
        </p>
      </section>

      <section className="ciri-ciri">
        <h2>Ciri-Ciri</h2>
        <ul>
          <li>Mempunyai hifa yang tidak bersekat (senositik).</li>
          <li>Dinding sel mengandung kitin dan tidak memiliki zoospora sehingga spora memiliki sel-sel yang berdinding.</li>
          <li>Berkembang biak dengan cara seksual dan aseksual.</li>
          <li>Berukuran mikroskopis dan tidak memiliki tubuh buah yang besar.</li>
          <li>Berhabitat didarat, tanah dan hidup dengan saprofit</li>
          <li>Dapat berkembang biak melalui reproduksi seksual dengan membentuk Zigospora</li>
          <li>Dapat berkembang biak melalui reproduksi asesksual dengan membentuk sporangiospore</li>
          <li>Bagian tubuhnya membentuk rhizoid</li>
        </ul>
      </section>

      <section className="contoh">
        <h2>Contoh Zygomycota</h2>
        <ul>
          <li><strong>Rhizopus stolonifer</strong>: Jamur roti, sering ditemukan pada roti yang berjamur.</li>
          <li><strong>Mucor mucedo</strong>: Tumbuh pada sisa-sisa makanan dan buah-buahan.</li>
          <li><strong>Pilobolus</strong>: Jamur yang hidup pada kotoran hewan dan memiliki mekanisme penyebaran spora yang unik.</li>
          <li><strong>Rhizopus Oryzae</strong>: Salah satu jamur yang berperan dalam proses fermentasi tradisional untuk pembuatan tempe. Pada fermentasi tempe terdapat interaksi jamur dan bakteri.</li>
        </ul>
      </section>

      <section className="reproduksi">
        <h2>Reproduksi</h2>
        <p>
          Zygomycota bereproduksi secara seksual melalui pembentukan zigospora, yaitu spora yang terbentuk 
          dari penyatuan dua hifa berbeda jenis. Mereka juga bereproduksi secara aseksual dengan membentuk sporangiospora.
        </p>
      </section>

      <section className="peran">
        <h2>Peran dalam Ekosistem</h2>
        <p>
          Zygomycota memiliki peran penting dalam ekosistem, terutama sebagai dekomposer. 
          Mereka membantu menguraikan bahan organik mati menjadi nutrisi yang bisa diserap oleh tumbuhan. 
          Beberapa jenis juga digunakan dalam industri makanan dan farmasi.
        </p>
      </section>
    </div>
  );
};

export default Zygomycota;
