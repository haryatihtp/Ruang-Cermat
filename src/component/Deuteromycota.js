import React from 'react';
import '../css/Klasifikasi.css';

const Deuteromycota = () => {
  return (
    <div className="deuteromycota-materi">
      <h1>Basidiomycota </h1>
      
      <section className="pengertian">
        <h2>Pengertian</h2>
        <p>
        Deuteromycota atau jamur tidak sempurna, disebut demikian karena jamur ini  tidak memiliki fase reproduksi seksual yang jelas. 
        Deuteromycotina beranggotakan jamur-jamur yang belum diketahui cara reproduksi seksualnya. Jamur Monilia merupakan contoh jamur yang sebelumnya digolongkan ke dalam Deuteromycotina.
        Akan tetapi, setelah diketahui cara reproduksi seksualnya, jamur ini kemudian dipindahkan ke dalam divisi Ascomycotina. Namanya juga diubah menjadi Neurospora. 
        </p>
      </section>

      <section className="ciri-ciri">
        <h2>Ciri-Ciri</h2>
        <ul>
          <li>Memiliki hifa bersekat dengan dinding sel dari bahan kitin.</li>
          <li>Multiseluler dan uniseluler.</li>
          <li>Reproduksi vegetatif dengan membentuk konidiaspora.</li>
          <li>Jarang membentuk tubuh buah.</li>
          <li>Sebagian besar bersifat mikroskopis.</li>
          <li>Hidup sebagai saprofit atau parasite</li>
          <li>Dapat menyebabkan penyakit pada manusia</li>
        </ul>
      </section>

      <section className="contoh">
        <h2>Contoh Deuteromycota</h2>
        <ul>
          <li><strong>Helminthosprium Oryzae </strong>: Jamur ini adalah parasit yang ada pada padi. Jamur inilah yang mengakibatkan munculnya penyakit pada padi yaitu Penyakit Bercak Coklat.</li>
          <li><strong>Sclerotium Rolfsii </strong>: Jamur Sclerotium rolfsii merupakan salah satu jamur patogen yang dapat menyebabkan beberapa penyakit mematikan pada tanaman diantaranya busuk batang, layu dan rebah kecambah. </li>
          <li><strong>Tinea Versicolor  </strong>: Jamur panu. Ini merupakan infeksi jamur pada kulit yang ditandai dengan bercak berwarna terang maupun gelap. Panu muncul akibat infeksi jamur Malassezia yang ditemukan pada permukaan kulit.</li>
          <li><strong>Epidermophyton  </strong>: Jamur kulit. Epidermophyton floccosum adalah jenis jamur yang umumnya menyebabkan gangguan pada kulit dan kuku manusia. </li>
        </ul>
      </section>

      <section className="reproduksi">
        <h2>Reproduksi</h2>
        <p>
        Deuteromycota atau jamur tak sempurna adalah jamur yang belum diketahui cara reproduksi seksualnya. Deuteromycota bereproduksi aseksual dengan spora vegetatif.
        </p>
      </section>

      <section className="peran">
        <h2>Peran Deuteromycota dalam Ekosistem</h2>
        <ul>
        <li>Pengurai Materi Organik: Membantu memecah materi organik mati menjadi senyawa yang lebih sederhana, mendaur ulang nutrisi untuk digunakan oleh tumbuhan lain.</li>
        <li>Keseimbangan Ekosistem: Berperan dalam menjaga keseimbangan ekosistem dengan menguraikan zat organik dan mendukung siklus nutrisi.</li>
        <li>Pengendalian Populasi: Sebagai parasit, membantu mengendalikan populasi organisme lain, mempengaruhi keseimbangan ekosistem.</li>
        </ul>
      </section>
    </div>
  );
};

export default Deuteromycota;
