import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b4.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: FLUIDA DINAMIS</h1>

      <section>
        <h2>Pendahuluan</h2>
        <strong>DEBIT ALIRAN DAN AZAS KONTINUITAS</strong>
        <p>
            Fluida dinamis mempelajari fluida yang sedang bergerak. Topik ini penting dalam analisis aliran fluida seperti dalam pipa, sungai, dan sistem hidrolik.
        </p>
     </section>

     <section>
     <strong>
        1. Pengertian dan jenis Fluida 
    </strong>
                <p>Fluida  sangat dekat dan ada dalam kehidupan kita sehari-hari, Fluida didefinisan 
                   sebagai Suatu zat yang bisa mengalami perubahan perubahan bentuk secara 
                   kontinyu/terus menerus bila terkena tekanan atau  gaya geser walaupun relatif kecil 
                   atau  biasa disebut zar mengalir 
                   Fluida dibedakan menjadi 2 jenis:</p>
                   <p> a. Fluida Statis : Fluida yang tidak bergerak </p>
                   <p> b. Fluida Dinamis : Fluida yang bergerak  </p>
                   <p>Fluida Dinamis adalah fluida yang bergerak, dengan ciri ciri sebagai berikut : </p>
                   <p>1. Fluida dianggap tidak kompresibel </p>
                   <p>2. Fluida dianggap bergerak tanpa gesekan walaupun ada gerakan materi (tidak   
                      mempunyai kekentalan ) </p>
                   <p>3. Alira fluida adalah aliran stasioner, yaitu kecepatan dan arah gerak partikel 
                      fluida melalui suatu titik tertentu selalu tetap</p>
                   <p>4. Tak tergantung waktu (tunak) artinya kecepatannya konstan pada titik 
                      tertentu dan membentuk aliran laminer  </p>

                    <b>Jenis Aliran Fluida </b>
                    <p>Jenis aliran fluida dibedakan menjadi 2 jenis </p>
                    <p>a. Aliran laminer </p>
                    <p>yaitu aliran fluida dalam pipa sejajar dengan dinding pipa tanpa adanya  
                       komponen radial. </p>

                       <img src="../Image/modul4.png" alt="contoh" className="section-image"></img>

                    <p> b. Aliran turbulen </p>
                    <p> yaitu aliran fluida dalam pipa tidak beraturan/tidak sejajar dengan pipa. </p>

                    <img src="../Image/modul4.1.png" alt="contoh" className="section-image"></img>

                    <strong> 2. Debit Fluida </strong>
                    <p>Pada fluida yang bergerak memiliki besaran yang dinamakan debit. Debit adalah laju 
                       aliran air. Besarnya debit menyatakan banyaknnya volume air yang mengalir setiap 
                       detik. </p>

                       <img src="../Image/modul4.2.png"   alt="rumus" className="section-image"></img>

                 <p>Keterangan: </p>
                 <p>Q  = Debit (m3/s)</p>
                 <p>V  = volume (m3)</p>
                 <p>t   = waktu (s)</p>

                 <strong>3. Azas Kontinuitas </strong>

                 <p>Amati gambar berikut !</p>

                 <img src="../Image/modul4.3.png" alt="contoh" className="section-image"></img>

                <p>Pada saat kita menyiram tanaman dengan menggunakan selang dan  jarak 
                   tanaman  jauh dari ujung selang maka yang kita lakukan adalah memencet ujung 
                   selang supaya luas permukaan ujung selang menjadi semakin kecil. Akibatnya 
                   kecepatan air yang memancar semakin besar. disebabkan debit air yang masuk 
                   harus sama dengan debit air yang keluar.</p>
                <p>Azas Kontinuitas </p>
                <p>fluida yang tak termampatkan dan mengalir dalam keadaan tunak, maka    
                   laju aliran volume di setiap waktu sama besar </p>
                    <img src="../Image/modul4.4.png" alt="contoh" className="section-image"></img>
                <p>Bila aliran  fluida melewati pipa yang berbeda penampangnya maka fluida akan 
                   mengalami desakan perubahan luas penampangnya yang dilewatinya. Asumsikan 
                   bahwa fluida tidak kompresibel, maka delam selang waktu yang sama jumlah fluida 
                   yang mengalir melalui penampang harus sama dengan jumlah fluida yang mengalir 
                   melalui penampang. </p>
                <p>Volume fluida pada penampang A1 sama dengan volume fluida penampang A2, maka 
                   debit fluida di penampang A1 sama dengan debit fluida di penampang A2 .</p>
                   <img src="../Image/modul4.5.png" alt="rumus" className="section-image"></img>
                 <p>Jika </p>
                 <p> l1  = panjang pipa yang dilewati fluida saat penampangnya A1 </p>
                 <p> l2  = panjang pipa yang dilewati fluida saat penampangnya A2  </p>
                 <p> v1  = kecepatan aliran fluida di penampang 1 (m/s)  </p>
                 <p> v2  = kecepatan aliran fluida di penampang 2 (m/s ).  </p>
                 <p> A1  = luas penampang 1 </p>
                 <p> A2  = luas penampang 2 </p>

                 <p> 
                 Persamaan diatas dikenal dengan Persamaan Kontinuitas. </p>
                 
                 <img src="../Image/modul4.6.png" alt="rumus" className="section-image"></img>

                <strong>4. Azas  Bernaulli </strong>
                <p>Perhatikan Gambar berikut! </p>

                <img src="../Image/modul4.7.png" alt="contoh" className="section-image"></img>

                <p>Terlihat dalam gambar, seorang petugas pemedam kebakarn hutan sedang berusaha 
                   memadamkan api yang membakar lahan  dengan menggunakan selang yang sangat 
                   panjang serta berusaha menempatkan posisi selang sedemikian rupa sehingga dapat 
                   menjangkau titik api yang ingin dia padamkan </p>

                   <img src="../Image/modul4.8.png" alt="contoh" className="section-image"></img>

                <p>Kita ketahui bahwa kelajuan fluida paling besar terjadi pada pipa yang sempit, sesuai 
                   dengan azas kontinuitas yang telah kita pelajari sebelumnya. bagaimanakah dengan 
                   tekanannya? </p>
                <p>W total  = Δ Ek </p>
                <p>W1 - W2 + W3 = Ek2 – Ek1</p>
                <p>dimana W3 adalah kerja yang dilakukan oleh gravitasi.</p>

                <img src="../Image/modul4.9.png" alt="rumus" className="section-image"></img>
                <p>nilai W2 negatif, disebabkan gaya yang dialami fluida oleh P2 berlawanan arah 
                   terhadap laju fluida. </p>
                   <img src="../Image/modul4.10.png" alt="rumus" className="section-image"></img>
                   <img src="../Image/modul4.11.png" alt="rumus" className="section-image"></img>
                <p>dengan asumsi bahwa volume fluida yang dipindahkan oleh W1 dan W2 adalah 
                   sama, maka  
                   Persamaan di atas selanjutnya dibagi oleh  
                   sehingga didapatkan persamaan</p>
                
                   <img src="../Image/modul4.12.png" alt="rumus" className="section-image"></img>
                <p>Persamaan di atas dikenal dengan persamaan Bernoulli. Persamaan Bernoulli 
                   dapat dinyatakan juga dengan </p>
                
                   <img src="../Image/modul4.13.png" alt="rumus" className="section-image"></img>

                <p>P adalah tekanan (Pascal) </p>
                <p>ρ adalah massa jenis fluida (kg/m3) </p>
                <p>v adalah kecepatan fluida (m/s) </p>
                <p>g adalah percepatan gravitasi (g = 9,8 m/s2) </p>
                <p>h adalah ketinggian (m)</p>
     </section>

     <section>
                <h2>Konsep Dasar</h2>
                <ul>
                    <li>
                        <strong> Persamaan Kontinuitas:</strong> Menyatakan bahwa laju aliran massa fluida tetap konstan pada setiap titik dalam sistem tertutup.
                    </li>
                    <li>
                        <strong>Hukum Bernoulli:</strong> Energi total per satuan volume fluida yang bergerak tetap konstan sepanjang garis aliran.
                    </li>
                </ul>     
            </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk11b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b3")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;