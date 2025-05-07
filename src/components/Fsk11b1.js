import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: DINAMIKA ROTASI DAN BENDA TEGAR</h1>

      <section>
        <h2>Pendahuluan</h2>
        <p>
            Dinamika rotasi adalah ilmu yang mempelajari tentang gerak rotasi (berputar) 
            dengan memperhatikan aspek penyebabnya, yaitu momen gaya. Momen gaya atau 
            yang lebih dikenal dengan torsi ini akan menyebabkan terjadinya percepatan 
            sudut. Suatu benda dikatakan melakukan gerak rotasi (berputar) jika semua bagian 
            benda bergerak mengelilingi poros atau sumbu putar. Sumbu putar benda terletak 
            pada salah satu bagian dari benda tersebut.
        </p>
        <p>
            Benda tegar merupakan benda yang tidak mengalami perubahan bentuk akibat 
            pengaruh gaya, sehingga dalam melakukan pergerakan, benda tersebut tidak 
            mengalami perubahan bentuk dan volume benda. Benda tegar dapat melakukan gerak 
            translasi dan rotasi.
        </p>
      </section>

      <section>
        <h2>1. Konsep Dasar</h2>
        <p>
        Momen gaya atau torsi (τ) merupakan besaran vektor yang mengakibatkan 
        benda berotasi atau berputar.
        </p>
        <img src="../Image/modul1.jpg" alt="contoh" className="section-image"></img>

        <p>
        Berdasarkan Gambar di atas, orang memberikan gaya kepada kunci sehingga 
        kunci dapat memutar baut. Baut berfungsi sebagai sumbu rotasi, sedangkan 
        perpanjangan garis gaya disebut garis kerja gaya. Jika gaya (F) yang diberikan 
        tangan (garis kerja gaya) tegak lurus terhadap lengan kunci, maka lengan kunci 
        ini berfungsi sebagai lengan gaya. Namun, jika gaya yang diberikan tidak tegak 
        lurus lengan kunci, maka lengan gaya merupakan jarak yang tegak lurus dari 
        sumbu rotasi dengan garis kerja gaya (r). 
        </p>

        <p>
            Untuk memahami komnsep Momen Gaya /Torsi (τ), Perhatikan beberapa 
            kejadian berikut ! 
        </p>
        <img src="../Image/modul1.1.png" alt="contoh" className="section-image"></img>
        <p>
            Gambar di atas, Untuk memutar baut, 
            kedudukan tangan seperti gambar (c) lebih mudah dilakukan daripada 
            kedudukan tangan pada gambar (b) dan (a). Sementara kedudukan tangan 
            seperti gambar (b) lebih mudah dilakukan daripada seperti gambar (a). Gaya (F) 
            yang diperlukan untuk memutar baut pada kedudukan (c) lebih kecil dari gaya 
            yang diperlukan pada gambar (b) atau (a). Berdasarkan fakta ini, besar gaya 
            putar atau momen gaya tidak hanya ditentukan oleh besar gaya, tetapi juga 
            panjang lengan gaya (r). Hubungan ketiga faktor ini, diberikan dengan 
            persamaan berikut. 
        </p>
        
        <b><p>𝝉 = 𝑟 x 𝐹      atau       𝝉 = 𝑟  𝐹 𝑠𝑖𝑛 𝜃 </p></b>

        <p>Dimana : 
                          τ    =  Momen Gaya (Nm) 
                          F    =  Gaya yang bekerja (N) 
                          r    =   Lengan Momen (m)  
                          θ   =   sudut yang terbentuk antara garis kerja gaya F terhadap lengan momen r
        </p>

        <p>
            Seperti halnya gaya F, torsi τ juga termasuk besaran vektor, yang memiliki 
            besar dan arah. Bedanya, arah torsi hanya dua, searah atau berlawanan arah 
            jarum jam. Kedua arah torsi ini cukup dibedakan dengan memberikan tanda 
            positif (berlawanan dengan perputaran arah jarum jam), atau negatif (searah
            dengan perputaran arah jarum jam). Supaya konsisten dengan aturan 
            matematika maupun aturan arah pada momentum sudut dan gaya Lorentz. 
        </p>
    </section>

    <section>
        <h2>2. Momen Inersia</h2>
        <p>
            Momen inersia (I) merupakan besaran yang menyatakan ukuran 
            kecenderungan benda untuk tetap mempertahankan keadaannya
            ukuran kemampuan benda untuk mempertahankan kecepatan sudut 
            rotasinya. Benda yang sukar berputar atau benda yang sulit dihentikan saat 
            berputar memiliki momen inersia yang besar, dan sebaliknya. 
            Momen inersia didefnisikan sebagai hasil kali antara massa partikel dan 
            kuadrat jarak partikel dari sumbu rotasi. Secara matematis, momen inersia 
            dapat dirumuskan sebagai berikut.
        </p>
        <b>l = 𝑚.𝑟2 </b>
        <p>Dimana : 
I  
                l = Momen inersia (kgm2) 
                m = massa partikel (kg)  
                r = jarak partikel dari sumbu pusat rotasi (m) 
                Jika terdapat sejumlah partikel dengan massa masing-masing m1, m2, m3,... 
                dan memiliki jarak r1, r2, r3, ... terhadap poros, maka momen inersia totalnya adalah 
                penjumlahan momen inersia setiap partikel, yaitu sebagai berikut. 
        </p>

        <img src="../Image/modul1.2.png" alt="rumus" className="section-image" />

        <p>Atau secara pengintegralan dapat ditulis dengan persamaan:</p>

        <img src="../Image/modul1.3.png" alt="rumus" className="section-image" />

        <p>
            Berdasarkan konsep momen inersia I yang telah dipaparkan di atas, 
            berikut beberapa persamaan momen inersia benda tegar yang teratur 
            bentuknya dan berotasi pada sumbu tertentu seperti tertera pada gambar 
            tabel berikut: 
        </p>

        <img src="../Image/modul1.4.png" alt="tabel" className="section-image"></img>

        <strong>Menentukan Momen Inersia Benda Tegar dengan prinsip Teorema Sumbu Sejajar</strong>
        
        <p>
            Berdasarkan  tabel di atas,  kita telah  mengetahui bahwa  momen  inersia 
            batang silinder bermassa M dengan panjang L yang porosnya melalui pusat 
            massa (tabel a) adalah 𝐼𝑝𝑚 = 1/12

            ~𝑀𝐿2. Untuk mendapatkan Momen Inersia 
            Batang silinder yang bergerak pada ujung batang maka dapat digunakan 
            dengan prinsip Teorema Sumbu Sejajar dengan persamaan sebagai berikut : 
        </p>
        <img src="../Image/modul1.5.png" alt="tabel" className="section-image"></img>

        <p>Dimana :</p> 
        <p>Is = Momen Inersia titik pusat rotasi 
           (Nm2)</p>
        <p>Ipm = Momen Inersia benda di pusat massa 
            (Nm2)</p>
        <p> M =  Massa benda (kg)</p> 
        <p> d = Jarak antara titik pusat massa ke titik 
            rotasi (m)</p>
        <p>sehingga untuk mendapatkan momen inersia batang silinder yang bergerak pada 
           ujung batang dapat diperoleh :</p>
        <img src="../Image/modul1.6.png" alt="rumus" className="section-image"></img>
        <strong>3.Hubungan antara Momen Gaya (τ), Momen Inersia (I) dan Percepatan 
        Sudut (α)</strong>
        <p>Untuk mendapatkan hubungan antara Momen Gaya (τ), Momen Inersia (I) dan 
           Percepatan Sudut (α), maka kita dapat menganlogikan dengan menerapkan 
           hukum Newton II translasi, yaitu :</p>
        <img src="../Image/modul1.7.png" alt="rumus" className="section-image"></img>
        <p>Diperoleh</p>
        <img src="../Image/modul1.8.png" alt="rumus" className="section-image"></img>
        <p> disebut  Hukum Newton II Gerak rotasi </p>
        <p>Dimana:</p>
        <p>τ =  Momen Gaya (N.m) </p>
        <p>I =  Momen Inersia (kg.m2) </p>
        <p>α =  Percepatan Sudut (rad/s2)  </p>
        <strong>4. Energi Kinetik Rotasi (Ekrot)</strong>
        <p>
            Benda yang berputar pada poros nya memiliki suatu bentuk energi yang disebut 
            energi kinetik rotasi (Ekrot). Persamaan energi kinetik rotasi ini dapat diturunkan 
            dari konsep energi kinetik translasi yaitu :
        </p>

        <img src="../Image/modul1.9.png" alt="rumus" className="section-image"></img>
        <p>Dimana:</p>
        <p>Ekrot =  Energi Kinetik Rotasi (Joule) </p>
        <p>I     =  Momen Inersia benda (kg.m2)  </p>
        <p>ῳ     =  Kecepatan Sudut benda (rad/s)  </p>
        <p><strong>Gerak Menggelinding  </strong></p>
        <img src="../Image/modul1.10.png" alt="contoh" className="section-image"></img>
            <p>
                Pada gambar di atas, suatu benda bergerak menggelinding, maka benda tersebut 
                melakukan gerak translasi (memiliki v) sekaligus gerak rotasi memiliki (ῳ). Oleh 
                karena itu, energi kinetik yang dimiliki benda juga terdiri atas energi kinetik 
                translasi dan rotasi, sehingga diperoleh : 
            </p>
                <img src="../Image/modul1.11.png" alt="rumus" className="section-image"></img>

                <p><strong>Momentum Sudut (L)</strong></p>
                <p>
                    Momentum sudut (L) didefinisikan sebagai perkalian silang antara vektor 
                    momentum linear benda p dan vektor posisi r.  </p>
                <img src="../Image/modul1.12.png" alt="rumus" className="section-image"></img>
                <p>Momentum sudut L persamaannya dapat ditulis :</p>
                <p>L =𝐼.𝜔 </p>
                <p>Dimana:</p>
                <p>L  :  Momentum sudut (kg. m2/s) </p>
                <p>I  :  Momen inersia benda (kg.m2)  </p>
                <p>ῳ  :  Kecepatan sudut (rad/s)  </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk11b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("materi/fisika/kelas-11")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;