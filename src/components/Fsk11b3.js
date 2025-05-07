import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: FLUIDA STATIS</h1>

      <section>
        <h2>Pendahuluan</h2>
        <p>
            Fluida statis mempelajari fluida yang berada dalam keadaan diam dan gaya yang bekerja pada fluida tersebut.
            Konsep ini penting untuk memahami tekanan pada fluida, hukum pascal, dan prinsip Archimedes.
        </p>
     </section>

     <section>
     <strong>1. Konsep Fluida  </strong>
                <p>Pada waktu di sekolah tingkat pertama, telah dikenalkan ada tiga jenis wujud zat, 
                   yaitu: zat padat, zat cair dan gas. Fluida adalah zat yang dapat mengalir dan 
                   memberikan sedikit hambatan terhadap perubahan bentuk ketika ditekan. Fluida 
                   secara umum dibagi menjadi dua macam, yaitu fluida tak bergerak (hidrostatis) 
                   dan fluida bergerak (hidrodinamis). Pada modul ini kita akan fokus pada 
                   pembahasan fluida yang tidak bergerak (hidrostatis) atau fluida statis. </p>
                
                <strong>2. Tekanan </strong>
                <p>Tekanan didefinisikan sebagai gaya yang bekerja tegak lurus pada suatu bidang 
                   dibagi dengan luas bidang itu. Dan secara matematis dirumuskan sebagai berikut: </p>
                   
                   <img src="../Image/modul3.png"alt="rumus" className="section-image"></img>

                 <p>Keterangan: </p>
                 <p>P = tekanan ( Pascal= N/m2) </p>
                 <p>F = Gaya (N) </p>
                 <p>A = Luas permukaan (m2)</p>

                 <strong>3. Tekanan Hidrostatis </strong>
                 <p>Makin tinggi zat cair dalam wadah, maka makin berat zat cair itu, sehingga makin 
                    besar tekanan yang dikerjakan zat cair pada dasar wadah. Dengan kata lain pada 
                    posisi yang semakin dalam dari permukaan, maka tekanan hidrostatis yang 
                    dirasakan semakin besar. </p>
                    <img src="../Image/modul3.1.png" alt="contoh" className="section-image"></img>
                 <p>Dan tekanan hidrostatis tersebut dirumuskan sebagai berikut:</p>
                 
                 <img src="../Image/modul3.2.png" alt="rumus" className="section-image"></img>

                 <p>Keterangan: </p>
                 <p> Ph = tekanan hidrostatis ( Pa) </p>
                 <p> ρf  = massa jenis fluida (kg/m3 ) </p>
                 <p> g = percepatan gravitasi (m/s2) </p>
  

                 <strong>4. Hukum Hidrostatika  </strong>
                 <p>“semua titik yang terletak pada kedalaman yang sama maka tekanan 
                 hidrostatikanya sama.” </p>

                 <img src="../Image/modul3.3.png" alt="contoh" className="section-image"></img>
                 
                 <p>Jadi semua titik yang terletak pada bidang datar didalam satu jenis zat cair 
                    memiliki tekanan yang sama, ini dikenal dengan hukum pokok hidrostatika dan 
                    tekanan ini disebut dengan tekanan hidrostatis.</p>

                <p>  Phidrostatis  di titik A  = P hidrostatis di titik B </p>


                <strong>5. Hukum Pascal dan Penerapannya </strong>
                 <p>Prinsip Pascal  mengatakan bahwa tekanan yang diberikan kepada zat cair dalam 
                    ruang tertutup diteruskan sama besar ke segala arah,  
                    Sebagai contoh sederhana aplikasi dari hukum Pascal adalah dongkrak hidrolik. </p>

                    <img src="../Image/modul3.4.png" alt="contoh" className="section-image"></img>

                 <p>Perhatikan gambar mekanisme hidrolik diatas. Karena cairan tidak dapat 
                    ditambahkan ataupun keluar dari sistem tertutup, maka volume cairan yang 
                    terdorong di sebelah kiri akan mendorong piston (silinder pejal) di sebelah kanan 
                    ke arah atas.</p>
                <p>Dengan menggunakan prinsip Pascal, berlaku hubungan, secara matematis: </p>
                <img src="../Image/modul3.5.png" alt="rumus" className="section-image"></img>

                 <p>Keterangan: </p>
                 <p>P1  = tekanan pada penampang 1 (Pa) </p>
                 <p>P2  = tekanan pada penampang 2 (Pa)</p>
                 <p>F1  = gaya pada penampang 1 (N)</p>
                 <p>F2  = gaya pada penampang 2 (N) </p>
                 <p>A1  = luas penampang 1(m2) </p>
                 <p>A2  = luas penampang 2 (m2) </p>

                 <p>Penerapan dalam kehidupan sehari-hari, yang menggunakan prinsip hukum 
                    Pascal antara lain dongkrak hidrolik, pompa hidrolik ban sepeda, mesin hidrolik 
                    pengangkat mobil, mesin pengepres hidrolik, dan rim piringan hidrolik. </p>

                <strong>6. Hukum Archimedes </strong>
                 <p>ukum Archimedes berbunyi, "Sebuah benda yang tercelup sebagian atau 
                    seluruhnya ke dalam fluida akan mengalami gaya ke atas atau gaya apung yang 
                    besarnya sama dengan berat fluida yang dipindahkannya". 
                    Gaya apung ini merupakan selisih dari gaya berat benda di udara dengan gaya 
                    berat benda di dalam fluida </p>
                    <img src="../Image/modul3.6.png" alt="rumus" className="section-image"></img>

                 <p>FA =  gaya ke atas = gaya apung (N) </p>
                 <p>Wu = gaya berat benda di udara (N) </p>
                 <p>Wf = gaya berat benda di fluida (N) </p>

                 <p>secara matematis</p>
                 <img src="../Image/modul3.7.png" alt="rumus" className="section-image"></img>

                 <p>Keterangan: </p>
                 <p>FA =  gaya ke atas = gaya apung (N) </p>
                 <p>ρf  =  massa jenis fluida (kg/m3) </p>
                 <p>Vbf  = Volume benda yang tercelup dalam fluida (m3) </p>
                 <p>g   = percepatan gravitasi (m/s2) </p>

                 <p><strong>Mengapung </strong></p>

                 <img src="../Image/modul3.8.png" alt="contoh" className="section-image"></img>
                 
                 <p>Jika benda dicelupkan ke dalam fluida, benda muncul sebagian ke permukaan 
                    air, karena berat benda lebih kecil dari gaya apung (Fa &lt; W). Ini adalah konsep 
                    mengapung.Dari konsep tersebut, dapat dirumuskan hubungan antara massa 
                    jenis benda dengan massa jenis fluida:Jika benda dicelupkan ke dalam fluida, benda muncul sebagian ke permukaan 
                    air, karena berat benda lebih kecil dari gaya apung (Fa &lt; W). Ini adalah konsep 
                    mengapung. Dari konsep tersebut, dapat dirumuskan hubungan antara massa 
                    jenis benda dengan massa jenis fluida:</p>
                
                    <img src="../Image/modul3.9.png" alt="rumus" className="section-image"></img>

                 <p>ρb   = massa jenis benda ( kgm-3) </p>
                 <p>Vbf = Volume benda yang tercelup (m3) </p>
                 <p>Vb   = Volume benda (m3) </p>
                 <p>ρf     =  massa jenis fluida ( kgm-3) </p>

                 <p><strong>Melayang</strong></p>
                 <img src="../Image/modul3.10.png" alt="contoh" className="section-image"></img>
                 <p>Jika benda dicelupkan seluruhnya kedalam fluida (air), maka gaya apung (Fa) 
                 sama dengan berat benda  W (Fa = W).</p>

                 <p><strong>Tenggelam</strong></p>
                 <img src="../Image/modul3.11.png" alt="contoh" className="section-image"></img>

                 <p> Jika benda dicelupkan seluruhnya kedalam fluida (air), maka gaya apung ( F 
                     a) lebih kecil dari berat benda W (Fa &lt; W). Sehingga benda bergerak kebawah 
                     menuju dasar wadah air. Ini adalah konsep tenggelam. </p>
     </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk113"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b2")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;