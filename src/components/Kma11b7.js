// LARUTAN PENYANGGA
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/Kma11b7.css";


const Bab8 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab8-container">
      <h1>Bab 7: LARUTAN PENYANGGA</h1>
      
      <section>
        <h2>A. Apa itu Larutan Penyangga</h2>
 <p>
 larutan penyangga adalah larutan yang yang mampu mempertahankan pH-nya saat ditambahkan asam, basa, maupun air. Larutan buffer menjadi salah satu produk yang dihasilkan dari reaksi asam dan basa.
Larutan buffer terbentuk dari interaksi antara asam atau basa lemah dengan garamnya (konjugasinya). Jika Sobat Pijar ingin mengingat kembali tentang asam/basa konjugasi, hal tersebut dijelaskan dalam pengertian asam dan basa oleh Bronsted-Lowry.
Asam konjugasi adalah basa yang sudah mengikat 1 ion H+ sedangkan basa konjugasi adalah asam yang sudah melepaskan 1 ion H+.
           </p>
        <img src="../Image/bab7.1k.jpg" alt="Dua Tipe Perkecambahan" className="section-image" />
     </section>

      <section>
        <h2>B. Jenis larutan Penyangga</h2>
        <h4>1. Larutan Basa</h4>
        <p>Larutan basa adalah zat yang jika dilarutkan ke dalam air akan menghasilkan ion hidroksida (OH). Basa memiliki sifat kaustik, artinya dapat merusak kulit dan terasa licin serta rasanya pahit.
            Sedangkan jika PH-nya di atas 7 , maka larutan tersebut sifatnya basa.</p>     
   
        <img src="../Image/bab7.3k.webp" alt="Manusia" className="section-image" />
        <h4>2. Larutan Asam</h4>
        <p>Larutan asam didefinisikan sebagai cairan yang mengandung konsentrasi ion hidrogen yang tinggi , yang umumnya digunakan dalam proses industri seperti pengawetan asam, pembersihan, dan penghilangan kerak.
            Jika nilai PH-nya dibawah 7 maka larutan tersebut sifatnya asam.
         </p>     
   
        <img src="../Image/bab7.3.1k.webp" alt="Manusia" className="section-image" />
      </section>

      <section>
        <h2>C. Prinsip Kerja</h2>
<p> Larutan penyangga mampu mempertahankan pH saat ditambah asam, basa, dan air. Selain itu, penyangga terdiri dari campuran 2 zat yaitu asam/basa lemah dengan konjugasinya.
Dalam melaksanakan fungsinya untuk mempertahankan pH, larutan penyangga bekerja sebagai sistem. Setiap terjadi penambahan asam ataupun basa yang berusaha mengubah pH larutan tersebut, maka salah satu penyusun larutan ini akan bekerja untuk menjaga pH-nya.
</p>
        <img src="../Image/bab7.4k.jpg" alt="Mangga" className="section-image" />
<p>Supaya bisa lebih memahami prinsip kerja ini, perhatikan contoh yang ada berikut ini, ya! <br></br>
✮ Misalnya terdapat sebuah sistem penyangga yang terdiri atas asam lemah CH3COOH dan basa konjugasinya yaitu CH3COO-. Sistem penyangga ini akan membentuk suatu reaksi kesetimbangan seperti berikut:
Jika larutan tersebut ditambahkan asam (ion H+), maka sesuai dengan prinsip kesetimbangan reaksi akan bergeser ke kiri sehingga jumlah H+ yang membawa sifat asam bisa ditekan, dengan begitu larutan bisa menjaga agar pH-nya tidak turun.
</p><p>Sedangkan jika basa ditambahkan ke larutan tersebut, maka ion OH- akan bereaksi dengan H+ sehingga kesetimbangan akan bergeser ke arah kanan. Dengan kata lain, jumlah ion H+ yang berkurang diseimbangkan oleh CH3COOH sehingga pH-nya tidak naik.
             </p>
      </section>

      <section>
        <h2>D. Rumus</h2>
        <img src="../Image/bab7.6k.png" alt="Hormon" className="section-image" />
 </section>
 <section>
        <h2>E. Peran Larutan Penyangga</h2>
<p> Di dalam kehidupan sehari-hari, larutan penyangga memiliki peran yang sangat banyak mulai dari dalam tubuh hingga dalam dunia industri hingga farmasi. Berikut ini adalah beberapa peran dari larutan buffer!</p>
<li>Sebagai penyangga pH darah agar tidak mengalami keasaman atau kebasaan yang dapat menyebabkan penyakit atau kondisi tubuh yang tidak normal.</li>
<li>Sebagai pengatur pH pada lambung agar enzim yang ada di dalamnya bisa bekerja dengan optimal untuk mencerna makanan.</li>
<li>Menjaga pH limbah industri agar saat dibuang tidak membahayakan bagi lingkungan dan ekosistem.</li>
<li>Menjaga pH dari obat agar sesuai dengan pH di bagian tubuh tertentu misalnya obat mata yang menggunakan penyangga agar pH-nya sesuai dengan kondisi mata manusia.</li>
              
        <img src="../Image/bab7.7k.jpg" alt="Mangga" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma11b7"}
        >
          Mulai Latihan Soal
        </button>
      </div>
         
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b6")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b8")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab8;