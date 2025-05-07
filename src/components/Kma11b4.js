import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b4.css';

const Bab4 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab4-container">
      <h1>Bab 4: Kesetimbangan Kimia</h1>

      <section>
        <h2>1. Pengertian Kesetimbangan Kimia</h2>
        <p>
          Reaksi kesetimbangan kimia adalah suatu keadaan dalam reaksi
          kimia ketika konsentrasi produk dan reaktan tidak berubah dari 
          waktu ke waktu. Kesetimbangan ini tercapai ketika laju reaksi ke 
          kanan (reaksi maju) sama dengan laju reaksi ke kiri (reaksi balik) dalam waktu bersamaan. 
        </p>
        <p>
          Sebagai contoh, kita ibaratkan dengan perpindahan penduduk suatu desa 
          ke desa lain. Kesetimbangan tercapai jika pada waktu bersamaan, jumlah 
          penduduk yang pindah dari desa A ke desa B sama dengan jumlah penduduk 
          yang pindah dari desa B ke desa A. Dengan begitu, jumlah penduduk di kedua desa tersebut tidak berubah.  
        </p>
        <img src="../Image/bab4.0k.jpg" alt="Animasi Kesetimbangan Kimia" className="section-image" />
      </section>

      <section>
        <h2>2. Faktor yang Mempengaruhi Kesetimbangan Kimia</h2>
        <p>
          Adapun faktor-faktor yang dapat mempengaruhi kesetimbangan kimia adalah volume, 
          tekanan, suhu, dan konsentrasi. Seperti apa perubahan yang terjadi pada reaksi 
          kesetimbangan kimia jika dipengaruhi faktor-faktor tersebut? Berikut penjelasannya. 
        </p>

        <h3>a. Pengaruh volume terhadap kesetimbangan</h3>
        <p>
          Untuk reaksi kesetimbangan yang melibatkan gas, pengurangan volume akan menyebabkan 
          kesetimbangan bergeser ke arah yang jumlah molekulnya lebih sedikit. Sebaliknya, penambahan 
          volume akan menyebabkan kesetimbangan bergeser ke arah yang jumlah molekulnya lebih besar 
          agar kesetimbangan bisa tercapai. 
        </p>
        <img src="../Image/bab4.1k.jpg" alt="Pengaruh Volume terhadap Kesetimbangan" className="section-image" />

        <h3>b. Pengaruh tekanan terhadap kesetimbangan</h3>
        <p>
          Tekanan juga dapat mempengaruhi kesetimbangan kimia. Ketika tekanan dinaikan, maka kesetimbangan 
          akan bergeser ke arah yang jumlah molekulnya lebih kecil. Sebaliknya, ketika tekanan diturunkan, 
          maka kesetimbangan akan bergeser ke arah yang jumlah molekulnya lebih besar. 
        </p>
        <img src="../Image/bab4.2k.jpg" alt="Pengaruh Tekanan terhadap Kesetimbangan" className="section-image" />

        <h3>c. Pengaruh suhu terhadap kesetimbangan</h3>
        <p>
          Menurut prinsip Le Chatelier, jika suhu kesetimbangan dinaikkan, maka kesetimbangan akan bergerak 
          ke arah reaksi endoterm, yaitu reaksi kimia yang menyerap kalor (panas). Sebaliknya, penurunan 
          suhu akan menggeser kesetimbangan ke arah reaksi eksoterm, yaitu reaksi kimia yang menghasilkan kalor (panas). 
        </p>
        <img src="../Image/bab4.3k.jpg" alt="Pengaruh Suhu terhadap Kesetimbangan" className="section-image" />
      </section>

      <section>
        <h2>3. Jenis-jenis Kesetimbangan Kimia</h2>
        <p>
          Berdasarkan wujudnya, kesetimbangan kimia dibedakan menjadi dua jenis, yaitu kesetimbangan homogen dan heterogen. Apakah perbedaan antara dua jenis kesetimbangan kimia tersebut?
        </p>

        <h3>a. Kesetimbangan homogen</h3>
        <p>
          Kesetimbangan homogen adalah reaksi kesetimbangan kimia di mana zat-zat yang terlibat di dalamnya memiliki wujud yang sama. Contoh:
          <br /><br />
          Kesetimbangan antara larutan dengan larutan:<br />
          Fe<sup>3+</sup> (aq) + SCN<sup>–</sup> (aq) ⇋ [Fe(SCN)]<sup>2+</sup> (aq)<br /><br />
          Kesetimbangan antara gas dengan gas:<br />
          N<sub>2</sub> (g) + O<sub>2</sub> (g) ⇋ 2NO (g)
        </p>
        <img src="../Image/bab4.4k.jpg" alt="Kesetimbangan Homogen" className="section-image" />

        <h3>b. Kesetimbangan heterogen</h3>
        <p>
          Kebalikan dari kesetimbangan homogen, kesetimbangan heterogen adalah reaksi kesetimbangan kimia di mana zat-zat yang terlibat di dalamnya memiliki wujud yang berbeda. Contoh:
          <br /><br />
          Kesetimbangan antara zat padat dengan gas:<br />
          CaCO<sub>3</sub> (s) ⇋ CaO (s) + CO<sub>2</sub> (g)<br /><br />
          Kesetimbangan antara gas dengan zat cair:<br />
          CO<sub>2</sub> (g) + H<sub>2</sub> (g) ⇋ CO (g) + H<sub>2</sub>O (l)<br /><br />
          Kesetimbangan antara zat padat dengan larutan:<br />
          BaSO<sub>4</sub> (s) ⇋ Ba<sup>2+</sup> (aq) + SO<sub>4</sub><sup>2-</sup> (aq)<br /><br />
          Kesetimbangan antara gas, zat padat, dan zat cair:<br />
          NaHCO<sub>3</sub> (s) ⇋ Na<sub>2</sub>CO<sub>3</sub> (s) + H<sub>2</sub>O (l) + CO<sub>2</sub> (g)
        </p>
        <img src="../Image/bab4.5k.jpg" alt="Kesetimbangan Heterogen" className="section-image" />
      </section>

      <section>
        <h2>4. Ciri-ciri Kesetimbangan Kimia</h2>
        <p>
          Adapun ciri-ciri dari kesetimbangan kimia adalah sebagai berikut:
        </p>
        <ul>
          <li>Reaksi berlangsung terus-menerus dengan arah yang berlawanan.</li>
          <li>Reaksi terjadi pada ruangan tertutup, suhu, dan tekanan tetap.</li>
          <li>Laju reaksi ke arah hasil reaksi (disebut juga produk dan terletak di sebelah kanan dari persamaan reaksi) dan ke arah pereaksi (disebut juga reaktan dan terletak di sebelah kiri dari persamaan reaksi) adalah sama.</li>
          <li>Tidak terjadi perubahan makroskopis, yaitu perubahan yang dapat diukur atau dilihat.</li>
          <li>Perubahan mikroskopis (perubahan tingkat partikel) tetap berlangsung.</li>
          <li>Semua komponen tetap ada.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => navigate("/SlKma11b4")}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b3")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;