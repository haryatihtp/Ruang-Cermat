import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Eko11b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Kebutuhan dan Kelangkaan</h1>

      <section>
        <h2>1. Pengertian Kebutuhan</h2>
        <p>
          Kebutuhan adalah keinginan manusia yang harus dipenuhi untuk mempertahankan hidup dan mencapai kesejahteraan. Kebutuhan mencakup berbagai aspek kehidupan, mulai dari kebutuhan dasar seperti makanan dan tempat tinggal hingga kebutuhan akan pendidikan dan hiburan.
        </p>
      </section>

      <section>
        <h2>Jenis-Jenis Kebutuhan</h2>
        <h3>a. Kebutuhan Primer</h3>
        <p>
          Kebutuhan dasar yang harus dipenuhi untuk kelangsungan hidup, seperti makanan, pakaian, dan tempat tinggal.
        </p>
        <h3>b. Kebutuhan Sekunder</h3>
        <p>
          Kebutuhan tambahan yang meningkatkan kenyamanan hidup, seperti pendidikan, transportasi, dan komunikasi.
        </p>
        <h3>c. Kebutuhan Tersier</h3>
        <p>
          Kebutuhan mewah yang mencerminkan status sosial, seperti mobil mewah, perhiasan, dan liburan.
        </p>
      </section>

      <section>
        <h2>2. Pengertian Kelangkaan</h2>
        <p>
          Kelangkaan adalah kondisi dimana sumber daya yang tersedia tidak cukup untuk memenuhi semua kebutuhan dan keinginan manusia. Kelangkaan merupakan masalah pokok dalam ekonomi karena sumber daya yang terbatas harus digunakan seefisien mungkin untuk mencapai kesejahteraan maksimal.
        </p>
      </section>

      <section>
        <h2>Penyebab Kelangkaan</h2>
        <ul>
          <li><strong>Sumber Daya Alam yang Terbatas:</strong> Bahan baku alam seperti minyak, gas, dan mineral yang jumlahnya terbatas.</li>
          <li><strong>Pertumbuhan Penduduk:</strong> Pertambahan jumlah penduduk yang meningkatkan permintaan terhadap barang dan jasa.</li>
          <li><strong>Distribusi Sumber Daya yang Tidak Merata:</strong> Sumber daya yang terkonsentrasi di beberapa wilayah atau tangan individu tertentu.</li>
          <li><strong>Bencana Alam:</strong> Kejadian alam seperti gempa bumi, banjir, atau kekeringan yang dapat mengurangi ketersediaan sumber daya.</li>
        </ul>
      </section>

      <section>
        <h2>3. Hubungan Kebutuhan dan Kelangkaan</h2>
        <p>
          Kebutuhan dan kelangkaan memiliki hubungan yang erat dalam ekonomi. Karena sumber daya yang terbatas, tidak semua kebutuhan dan keinginan manusia dapat dipenuhi. Oleh karena itu, diperlukan keputusan dalam penggunaan sumber daya tersebut.
        </p>
        <h3>Prinsip Dasar:</h3>
        <ul>
          <li><strong>Skala Prioritas:</strong> Mengurutkan kebutuhan berdasarkan tingkat kepentingannya untuk menentukan mana yang harus dipenuhi terlebih dahulu.</li>
          <li><strong>Pilihan Ekonomi:</strong> Keputusan yang diambil individu atau masyarakat dalam menggunakan sumber daya yang terbatas untuk memenuhi kebutuhan.</li>
          <li><strong>Biaya Peluang (Opportunity Cost):</strong> Nilai dari alternatif terbaik yang harus dikorbankan ketika membuat keputusan ekonomi.</li>
        </ul>
      </section>

      <section>
        <h2>4. Contoh Kebutuhan dan Kelangkaan</h2>
        <p>
          <strong>Kebutuhan Pangan:</strong> Makanan adalah kebutuhan primer. Kelangkaan dapat terjadi jika hasil panen menurun akibat cuaca ekstrem, sehingga harga makanan naik.<br />
          <strong>Kebutuhan Energi:</strong> Listrik dan bahan bakar adalah kebutuhan penting bagi masyarakat modern. Kelangkaan sumber daya energi seperti minyak bumi dapat menyebabkan krisis energi dan kenaikan harga.
        </p>
      </section>

      <section>
        <h2>5. Upaya Mengatasi Kelangkaan</h2>
        <ul>
          <li><strong>Konservasi Sumber Daya:</strong> Menggunakan sumber daya alam secara bijaksana dan efisien.</li>
          <li><strong>Inovasi dan Teknologi:</strong> Mengembangkan teknologi baru untuk meningkatkan produksi dan efisiensi.</li>
          <li><strong>Pengelolaan Sumber Daya:</strong> Merencanakan dan mengatur penggunaan sumber daya untuk jangka panjang.</li>
          <li><strong>Pendidikan dan Kesadaran:</strong> Meningkatkan kesadaran masyarakat tentang pentingnya menjaga sumber daya alam.</li>
        </ul>
      </section>

      <section>
        <h2>6. Peran Pemerintah dan Masyarakat</h2>
        <p>
          Pemerintah: Membuat kebijakan untuk mengelola sumber daya, mengatur distribusi, dan mendorong konservasi serta inovasi.<br />
          Masyarakat: Berperan aktif dalam menjaga kelestarian lingkungan, menggunakan sumber daya secara bijak, dan mendukung kebijakan pemerintah.
        </p>
      </section>

      <section>
        <h2>7. Studi Kasus: Kelangkaan Air</h2>
        <p>
          Masalah: Beberapa daerah mengalami kelangkaan air bersih karena penurunan tingkat air tanah, polusi, dan perubahan iklim.<br />
          Solusi: Pengelolaan air yang efektif, teknologi pengolahan air, dan peningkatan kesadaran masyarakat tentang pentingnya menghemat air.
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br /> Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlEko11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;