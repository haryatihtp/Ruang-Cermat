import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Eko11b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Sistem Ekonomi</h1>

      <section>
        <h2>1. Pengertian Sistem Ekonomi</h2>
        <p>
          Sistem ekonomi adalah cara suatu negara atau masyarakat mengatur dan mengelola sumber dayanya untuk menghasilkan dan mendistribusikan barang dan jasa. Sistem ekonomi menentukan bagaimana keputusan ekonomi dibuat, siapa yang membuat keputusan tersebut, dan bagaimana kekayaan serta sumber daya didistribusikan.
        </p>
      </section>

      <section>
        <h2>2. Jenis-Jenis Sistem Ekonomi</h2>
        
        <h3>a. Sistem Ekonomi Tradisional</h3>
        <p>
          Ciri-ciri:
          <ul>
            <li>Berbasis pada kebiasaan, adat istiadat, dan tradisi.</li>
            <li>Produksi barang dan jasa dilakukan dengan cara-cara tradisional.</li>
            <li>Pertukaran barang (barter) tanpa menggunakan uang.</li>
          </ul>
          Kelebihan: Stabil dan tahan lama karena berdasarkan tradisi.
          Kekurangan: Kurang efisien dan tidak berkembang pesat.
        </p>

        <h3>b. Sistem Ekonomi Komando (Terpusat)</h3>
        <p>
          Ciri-ciri:
          <ul>
            <li>Pemerintah memiliki kontrol penuh atas ekonomi.</li>
            <li>Pemerintah menentukan apa, bagaimana, dan untuk siapa barang diproduksi.</li>
          </ul>
          Kelebihan: Pemerataan distribusi kekayaan dan sumber daya.
          Kekurangan: Kurangnya insentif bagi inovasi dan efisiensi.
        </p>

        <h3>c. Sistem Ekonomi Pasar</h3>
        <p>
          Ciri-ciri:
          <ul>
            <li>Keputusan ekonomi dibuat oleh individu dan perusahaan berdasarkan mekanisme pasar.</li>
            <li>Harga barang dan jasa ditentukan oleh penawaran dan permintaan.</li>
            <li>Kepemilikan pribadi atas sumber daya dan produksi.</li>
          </ul>
          Kelebihan: Efisiensi tinggi, inovasi, dan kebebasan memilih.
          Kekurangan: Ketimpangan ekonomi dan kurangnya kontrol terhadap penyalahgunaan kekuatan pasar.
        </p>

        <h3>d. Sistem Ekonomi Campuran</h3>
        <p>
          Ciri-ciri:
          <ul>
            <li>Kombinasi dari sistem ekonomi pasar dan komando.</li>
            <li>Pemerintah dan sektor swasta berbagi peran dalam membuat keputusan ekonomi.</li>
          </ul>
          Kelebihan: Menggabungkan keuntungan dari kedua sistem, fleksibilitas, dan keadilan.
          Kekurangan: Bisa menjadi kompleks dan sulit diatur.
        </p>
      </section>

      <section>
        <h2>3. Fungsi Sistem Ekonomi</h2>
        <p>
          Sistem ekonomi berfungsi untuk:
          <ul>
            <li>Mengalokasikan Sumber Daya: Memutuskan bagaimana sumber daya seperti tanah, tenaga kerja, dan modal digunakan.</li>
            <li>Mengatur Produksi: Menentukan barang dan jasa apa yang akan diproduksi, berapa banyak, dan bagaimana cara produksinya.</li>
            <li>Distribusi Barang dan Jasa: Memastikan barang dan jasa sampai ke konsumen yang memerlukannya.</li>
            <li>Stabilitas Ekonomi: Mengelola inflasi, pengangguran, dan pertumbuhan ekonomi untuk memastikan stabilitas.</li>
            <li>Inovasi dan Pertumbuhan: Mendorong inovasi, penelitian, dan perkembangan teknologi untuk meningkatkan kemakmuran.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>4. Peran Pemerintah dalam Sistem Ekonomi</h2>
        <p>
          Pemerintah memainkan peran penting dalam hampir semua sistem ekonomi, terutama dalam:
          <ul>
            <li>Regulasi dan Pengawasan: Mengatur pasar untuk mencegah monopoli dan penyalahgunaan kekuatan pasar.</li>
            <li>Penyediaan Barang Publik: Menyediakan barang dan jasa yang tidak disediakan oleh sektor swasta, seperti pendidikan, kesehatan, dan infrastruktur.</li>
            <li>Redistribusi Pendapatan: Melalui pajak dan subsidi untuk mengurangi ketimpangan ekonomi.</li>
            <li>Stabilisasi Ekonomi: Melalui kebijakan fiskal dan moneter untuk mengatasi inflasi, pengangguran, dan resesi ekonomi.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>5. Perkembangan Sistem Ekonomi di Berbagai Negara</h2>
        <ul>
          <li><strong>Amerika Serikat:</strong> Menerapkan sistem ekonomi pasar dengan sedikit campur tangan pemerintah.</li>
          <li><strong>Cina:</strong> Kombinasi antara ekonomi terpusat dan pasar, dikenal sebagai "sosialisme dengan karakteristik Tiongkok".</li>
          <li><strong>Jerman:</strong> Sistem ekonomi campuran dengan keseimbangan antara pasar bebas dan regulasi pemerintah yang kuat.</li>
          <li><strong>Indonesia:</strong> Menggunakan sistem ekonomi campuran, dengan peran penting pemerintah dalam ekonomi namun juga memberi ruang bagi swasta.</li>
        </ul>
      </section>

      <section>
        <h2>6. Tantangan Sistem Ekonomi Modern</h2>
        <ul>
          <li>Globalisasi: Integrasi ekonomi global membawa tantangan dan peluang baru.</li>
          <li>Teknologi: Perkembangan teknologi mengubah cara produksi dan distribusi barang dan jasa.</li>
          <li>Ketimpangan Ekonomi: Menjaga keseimbangan antara pertumbuhan ekonomi dan distribusi yang adil.</li>
          <li>Sustainabilitas: Mengatasi masalah lingkungan dan memastikan pertumbuhan ekonomi yang berkelanjutan.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlEko11b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>
      
      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;