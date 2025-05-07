import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b5.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab5-container">
      <h1>SUHU DAN KALOR</h1>

      <section>
        <h2>Pendahuluan</h2>
        <p>
        Suhu dan kalor adalah dua konsep penting dalam termodinamika yang saling berkaitan.
        Suhu mengukur tingkat panas suatu benda, sedangkan kalor adalah energi yang berpindah akibat perbedaan suhu.
        </p>
      </section>

      <section>
        <h2>1.Suhu </h2>
        <p>
        Salah satu langkah antisipasi pencegahan terinfeksi virus corona adalah memeriksa suhu 
                   tubuh seperti terlihat pada gambar.  Maka dari itu, di sejumlah tempat umum seperti 
                   pusat perbelanjaan hingga bandara selalu menerapkan pengecekan suhu tubuh. Dari 
                   suhu tubuh itulah, seseorang bisa mengetahui kondisi tubuhnya sedang sehat atau tidak. 
                   Upaya ini merupakan salah satu cara pencegahan penularan covid -19. Sehingga dapat 
                   kita simpulkan betapa pentingnya suhu dalam kehidupan kita sehari hari.  
                   Suhu merupakan derajat panas atau dingin yang dirasakan indera. Alat yang biasa 
                   digunakan untuk pengukur suhu dinamakan termometer.
        </p>

        <h3>a. Termometer </h3>
        <p>
        Termometer merupakan alat yang  sederhana dengan fungsi yang besar.  Ada 
                   bermacam macam termometer mulai dari yang analog sampai yang digital, 
                   mulai dari yang menggunakan air raksa sampai yang menggunakan infra merah.
        </p>
        <img src="../Image/modul5.1.png" alt="Termometer" className="section-image" />

        <h3>b. Skala Suhu </h3>
        <p>
        Terdapat 4 skala suhu  yang digunakan pada termometer dintaranya Celcius 
        (oC), Reamur (oR), Fahrenheit (oH)  dan Kelvin (K)
        </p>
        <img src="../Image/modul5.2.png" alt="Skala Suhu" className="section-image" />

        <p>
        Konversi antara 4 skala tersebut ditunjukkan oleh tabel berikut :
        </p>
        <img src="../Image/modul5.3.png" alt="tabel" className="section-image" />
        <p>
          Skala Celcius dan Fahrenheit banyak kita temukan di kehidupan sehari hari, 
          sedangkan skala suhu yang ditetapkan sebagai Satuan Internasional adalah Kelvin. 
          Berikut gambaran mengkonversi suhu pada 2 termometer yang berbeda secara 
          umum dituliskan:</p>
          <img src="../Image/modul5.4.png" alt="tabel" className="section-image" />
      </section>

      <section>
        <h2>2. Kalor </h2>
        
        <h3>a. Pengaruh Kalor pada zat </h3>     
        <img src="../Image/modul5.5.png" alt="Kalor" className="section-image" />
        <p>
        Gambar diatas menunjukkan air yang sedang dipanaskan hingga mendidih. Saat 
        air dipanaskan ada proses transfer energi dari satu zat ke zat lainnya yang disertai 
        dengan perubahan suhu atau yang di sebut dengan kalor. Kalor yang diterima air 
        ini digunakan untuk menaikkan suhunya sampai mencapai titik didih bahkan 
        untuk merubah wujud dari cair menjadi gas.
        </p>

        <p>1) Kalor Jenis dan Kapasitas Kalor</p>

          <p>Kalor jenis suatu benda didefinisika sebagai jumlah kalor yang diperlukan 
          untuk menaikkan suhu 1 kg suatu zat sebesar 1 K. Kalor jenis ini 
          menunjukkan kemampuan suatu benda untuk menyerap kalor. Semakin 
          besar kalor jenis suatu benda, semakin besar pula kemampuan benda 
          tersebut dalam menyerap kalor.</p>
        <p>Secara matematis </p>
        <img src="../Image/modul5.6.png" alt="Kalor" className="section-image" />

        <p> dengan </p>
                <p>c = kalor jenis suatu zat (J kg-1  oC-1)</p>
                <p>m = massa zat (kg)</p>
                <p>ΔT = perubahan suhu (oK)</p>
                <p>Q= banyak kalor yang diterima atau dilepas (J)</p>

        <img src="../Image/modul5.7.png" alt="Kalor" className="section-image" />

        <p>Kapasitas kalor suatu benda adalah jumlah kalor yang diperlukan atau 
                   dilepaskan jika suhu benda tersebut dinaikkan atau diturunkan 1 K atau 1oC.  
                   Secara matematis dapat dirumuskan sebagai berikut:</p>
                <p>C = 𝑄/ΔT atau C = m.c </p>
                <p>Dengan</p>
                <p>C = kapasitas kalor (JK-1) </p>

        <h3>2) Perubahan Wujud Zat </h3>
        <p>Kalor yang diterima atau dilepaskan suatu zat dapat mengakibatkan pada 
                   perubahan wujud suatu zat. Penerimaan kalor akan meningkatkan suhu 
                   dan dapat mengubah wujud zat dari padat menjadi cair atau cair menjadi 
                   gas. Sedangkan pelepasan kalor dapat menurunkan suhu atau merubah 
                   wujud dari cair menjadi padat atau gas menjadi cair. </p>
                <p>Ketika sedang berubah wujud, walaupun terdapat pelepasan atau 
                   penyerapan kalor tetapi tidak digunakan untuk menaikkan atau 
                   menurunkan suhu. Kalor ini disebut Kalor laten atau L. Kalor laten adalah 
                   kalor yang dibutuhkan benda untuk mengubah wujudnya per satuan 
                   massa. Secara matematis</p>
                <p> L = 𝑄/m</p>
                <p>Dengan </p>
                <p>L = kalor laten ( Jkg-1) </p>
                <p>Q = kalor yang dibutuhkan saat perubahan wujud (J) </p>
                <p>m = massa zat (kg) </p>

        <h3>3) Asas Black</h3>
        <p>Asas Black adalah suatu prinsip dalam termodinamika yang dikemukakan 
                   oleh Joseph Black. Bunyi Asas Black adalah sebagai berikut: </p>
                <p>“Pada pencampuran dua zat, banyaknya kalor yang dilepas zat yang 
                   suhunya lebih tinggi sama dengan banyaknya kalor yang diterima zat 
                   yang suhunya lebih rendah”.</p>
                <p>Energi selalu  kekal sehingga benda yang memiliki temperatur lebih 
                   tinggi akan melepaskan energi sebesar QL dan benda yang memiliki 
                   temperatur lebih rendah akan menerima energi sebesar QT dengan besar 
                   yang sama.</p>
                <p>Secara matematis, pernyataan tersebut dapat ditulis sebagai berikut.</p>
                <p>Q lepas = Q terima</p>
                <p>Keterangan:</p>
                <p>QLepas = jumlah kalor yang dilepaskan oleh zat (Joule)</p>
                <p>QTerima = jumlah kalor yang diterima oleh zat (Joule)</p>
                <p>Besarnya kalor dapat dihitung dengan menggunakan persamaan</p>
                <p>Q = mc∆T. </p>
                <p>Ketika menggunakan persamaan ini, perlu diingat bahwa temperatur naik 
                   berarti zat menerima kalor, dan temperatur turun berarti zat melepaskan 
                   kalor, maka</p>
        <img src="../Image/modul5.8.png" alt=" Black " className="section-image" />

        <p>Keterangan: </p>
                <p>m1 = massa benda 1 yang suhunya tinggi (kg) </p>
                <p>m2 = massa benda 2 yang suhunya rendah (kg) </p>
                <p>c1 = kalor jenis benda 1 (J/kgoC) </p>
                <p>c2 = kalor jenis benda 2 (J/kgoC) </p>
                <p>T1 = suhu mula-mula benda 1 (oC atau K) </p>
                <p>T2 = suhu mula-mula benda 2 (oC atau K) </p>
                <p>Tc = suhu akhir atau suhu campuran (oC atau K) </p>

      </section>

      <section>
        <h2>Konsep Dasar</h2>
        <ul>
                    <li>
                        <strong> Suhu:</strong> Ukuran tingkat panas atau dingin suatu benda, biasanya dinyatakan dalam skala Celcius, Fahrenheit, atau Kelvin.
                    </li>
                    <li>
                        <strong>Kalor:</strong> Energi yang berpindah akibat perbedaan suhu antara dua benda.
                    </li>
                    <li>
                        <strong>Kalor Jenis (c):</strong> Jumlah energi yang diperlukan untuk menaikkan suhu 1 kg zat sebesar 1°C.
                    </li>
                </ul>  
      </section>

      <section>
      <h2>Contoh Aplikasi</h2>
                <p>
                   Konsep suhu dan kalor digunakan dalam pengaturan suhu ruangan (AC atau pemanas), desain alat memasak,
                   pengolahan makanan, serta teknik pendinginan seperti kulkas dan freezer.
                </p>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk11b5"}
        >

          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b4")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;