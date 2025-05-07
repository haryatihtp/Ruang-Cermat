import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl11b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Sel dan Strukturnya</h1>

      <section>
        <h2>1. Pengertian Sel</h2>
        <p>
          Sel adalah unit struktural dan fungsional dasar dari makhluk hidup. 
          Setiap organisme hidup terdiri dari satu atau lebih sel. Sel merupakan 
          tempat terjadinya berbagai proses kehidupan seperti metabolisme, pembelahan, 
          dan reaksi biokimia yang mendukung kelangsungan hidup organisme tersebut.
        </p>
        <p>
          Berdasarkan jumlahnya, sel dibagi menjadi dua tipe: sel prokariotik (tanpa inti sel yang jelas) dan sel eukariotik (memiliki inti sel yang jelas). 
        </p>
        <img src="/image/bab1.animasi.gif" alt="Membran Sel" className="section-image" />
      </section>

      <section>
        <h2>2. Struktur Sel</h2>
        <p>
          Sel terdiri dari beberapa komponen yang masing-masing memiliki fungsi yang berbeda. 
          Struktur sel terbagi menjadi dua bagian utama, yaitu bagian luar (membran sel) dan bagian dalam (organela).
        </p>

        <h3>a. Membran Sel</h3>
        <p>
          Membran sel adalah lapisan tipis yang membungkus seluruh bagian sel. Membran ini berfungsi sebagai penghalang yang mengatur keluar masuknya zat dari dan ke dalam sel. Membran sel terdiri dari lapisan fosfolipid yang memiliki sifat hidrofobik dan hidrofilik.
        </p>
        <img src="/image/bab1.1.jpg" alt="Membran Sel" className="section-image" />

        <h3>b. Nukleus (Inti Sel)</h3>
        <p>
          Nukleus adalah organel yang mengontrol aktivitas sel, seperti sintesis protein dan pembelahan sel. Nukleus memiliki dua membran yang membatasi isinya dan berisi materi genetik dalam bentuk DNA.
        </p>
        <img src="/image/bab1.2.jpg" alt="Nukleus" className="section-image" />

        <h3>c. Sitoplasma</h3>
        <p>
          Sitoplasma adalah cairan kental yang mengisi ruang antara membran sel dan inti sel. Di dalam sitoplasma terdapat berbagai organel yang terlibat dalam proses metabolisme dan produksi energi.
        </p>
        <img src="/image/bab1.3.jpg" alt="Sitoplasma" className="section-image" />
      </section>

      <section>
        <h2>3. Organela Sel</h2>
        <p>
          Organela sel adalah struktur yang terletak di dalam sitoplasma dan memiliki fungsi tertentu dalam mendukung kehidupan sel. Beberapa organela sel yang penting antara lain mitokondria, ribosom, retikulum endoplasma, dan badan golgi.
        </p>

        <h3>a. Mitokondria</h3>
        <p>
          Mitokondria sering disebut sebagai "pembangkit tenaga" sel karena fungsinya dalam menghasilkan energi sel berupa ATP (adenosin trifosfat) melalui proses respirasi sel.
        </p>
        <img src="/image/bab1.4.jpg" alt="Mitokondria" className="section-image" />

        <h3>b. Ribosom</h3>
        <p>
          Ribosom adalah organela yang berfungsi untuk sintesis protein. Ribosom dapat ditemukan bebas di dalam sitoplasma atau menempel pada retikulum endoplasma.
        </p>
        <img src="/image/bab1.5.jpg" alt="Ribosom" className="section-image" />

        <h3>c. Retikulum Endoplasma</h3>
        <p>
          Retikulum endoplasma adalah jaringan membran yang berfungsi untuk sintesis protein dan lipid. Retikulum endoplasma terbagi menjadi dua jenis: retikulum endoplasma kasar yang memiliki ribosom pada permukaannya dan retikulum endoplasma halus yang tidak memiliki ribosom.
        </p>
        <img src="/image/bab1.6.jpg" alt="Retikulum Endoplasma" className="section-image" />
      </section>

      <section>
        <h2>4. Pembelahan Sel</h2>
        <p>
          Pembelahan sel adalah proses dimana sel induk membelah diri untuk menghasilkan dua sel anak. Ada dua jenis pembelahan sel: mitosis dan meiosis.
        </p>

        <h3>a. Mitosis</h3>
        <p>
          Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama dengan sel induk. Proses ini terdiri dari beberapa tahap: profase, metafase, anafase, dan telofase.
        </p>
        <img src="/image/bab1.7.jpg" alt="Mitosis" className="section-image" />

        <h3>b. Meiosis</h3>
        <p>
          Meiosis adalah pembelahan sel yang menghasilkan empat sel anak dengan jumlah kromosom yang setengah dari jumlah kromosom sel induk. Meiosis terjadi pada sel germinal (sel telur dan sperma).
        </p>
        <img src="/image/bab1.8.jpg" alt="Meiosis" className="section-image" />
      </section>

      <section>
        <h2>5. Fungsi Sel dalam Kehidupan Organisme</h2>
        <p>
          Sel memiliki berbagai fungsi penting untuk keberlangsungan hidup organisme. Beberapa fungsi utama sel antara lain:
        </p>
        <ul>
          <li>
            <strong>Metabolisme:</strong> Sel melakukan proses kimiawi yang menghasilkan energi dan bahan-bahan yang diperlukan untuk kelangsungan hidup.
          </li>
          <li>
            <strong>Reproduksi:</strong> Sel membelah diri untuk memperbanyak jumlah sel dan memastikan kelangsungan spesies.
          </li>
          <li>
            <strong>Transportasi:</strong> Sel mengangkut zat-zat yang diperlukan, seperti oksigen, nutrisi, dan produk limbah.
          </li>
          <li>
            <strong>Respons terhadap Lingkungan:</strong> Sel dapat merespons perubahan di lingkungan sekitar untuk menjaga kestabilan tubuh (homeostasis).
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Kelainan pada Sel</h2>
        <p>
          Beberapa kelainan yang dapat terjadi pada sel, baik akibat faktor internal maupun eksternal, antara lain:
        </p>
        <ul>
          <li>
            <strong>Mutasi Genetik:</strong> Perubahan pada urutan DNA yang dapat menyebabkan kelainan pada fungsi sel, seperti kanker.
          </li>
          <li>
            <strong>Infeksi Virus:</strong> Beberapa virus dapat menginfeksi sel dan merusaknya, seperti virus HIV yang menyerang sel darah putih.
          </li>
          <li>
            <strong>Penyakit Metabolik:</strong> Gangguan metabolisme sel yang menyebabkan ketidakmampuan sel dalam menghasilkan energi atau bahan-bahan penting.
          </li>
        </ul>
        <img src="/image/bab1.9.jpg" alt="Kelainan Sel" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl11b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/biologi/kelas-11")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;