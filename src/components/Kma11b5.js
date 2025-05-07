import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b5.css';

const Bab5 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab5-container">
      <h1>Bab 5: Larutan Asam dan Basa</h1>

      <section>
        <h2>1. Pengertian Asam Basa</h2>
        <p>
          Asam dan basa adalah larutan elektrolit yang dikenal dengan ciri khasnya, seperti asam 
          yang memiliki rasa masam dan basa yang memiliki rasa pahit. Asam dan basa pengertian 
          menurut Kamus Besar Bahasa Indonesia (KBBI), asam adalah zat yang dapat memberikan proton, 
          zat yang dapat membentuk ikatan kovalen dengan menerima sepasang elektron. Sedangkan, basa 
          adalah senyawa yang cenderung menyumbangkan sepasang elektron untuk dipakai bersama-sama dan 
          menerima proton.
        </p>
        <p>
          Sementara itu, istilah asam (acid) berasal dari bahasa Latin, yaitu acetum, yang artinya cuka. 
          Lalu, basa (alkali) berasal dari Arab, yang artinya abu. Basa banyak dijumpai dalam pembuatan sabun, 
          seperti yang kita ketahui di zaman dahulu banyak ibu rumah tangga yang menggunakan abu untuk mencuci piring.
        </p>
        <img src="../Image/bab5.0k.jpg" alt="Animasi Kesetimbangan Kimia" className="section-image" />
      </section>

      <section>
        <h2>2. Teori Asam Basa</h2>
        <p>
          Ilmu pengetahuan yang semakin berkembang, membuat asam basa pun semakin diteliti lebih lanjut. 
          Setidaknya, ada teori asam basa dari tiga ilmuwan populer yang perlu diketahui. Berikut penjelasannya:
        </p>

        <h3>a. Teori Arrhenius</h3>
        <p>
          Asam basa Arrhenius menyatakan bahwa asam adalah zat yang apabila dilarutkan dalam air akan menghasilkan 
          ion H+ dalam larutan dan basa adalah zat yang apabila dilarutkan dalam air akan menghasilkan ion OH– 
          dalam larutan. Dari pengertian tersebut, bisa disebutkan ciri khas asam adalah apabila dalam pelarut air, 
          zat akan mengion menjadi hidrogen dengan muatan positif dan ion yang bermuatan negatif tersebut adalah 
          sisa asam. Lalu, ciri khas basa adalah apabila dalam pelarut air, zat akan mengion menjadi ion hidroksida 
          yang muatannya negatif dan ion bermuatan positif disebut sisa basa. 
        </p>
        <img src="../Image/bab5.1k.jpg" alt="Pengaruh Volume terhadap Kesetimbangan" className="section-image" />

        <h3>b. Teori Bronsted Lowry</h3>
        <p>
          Teori asam basa menurut Bronsted Lowry didefinisikan berdasarkan kemampuan (donor) atau menerima (akseptor) 
          proton (ion H+). Senyawa yang bertindak sebagai asam basa Bronsted Lowry disebut amfoter. Sementara itu, 
          konsep asam basa Bronsted Lowry bisa dijelaskan bahwa asam adalah zat yang punya kecenderungan untuk menyumbang 
          ion H+ pada zat lain dan basa adalah zat yang punya kecenderungan untuk menerima ion H+ dari zat lain. Bronsted 
          Lowry juga mencetuskan teori asam basa konjugasi. Asam konjugasi adalah basa yang memperoleh ion hidrogen, 
          sedangkan basa konjugasi adalah yang tersisa setelah asam memberikan proton dalam sebuah reaksi kimia. 
          Kedua hal tersebut disebut pasangan asam basa konjugasi.
        </p>
        <img src="../Image/bab5.2k.jpg" alt="Pengaruh Tekanan terhadap Kesetimbangan" className="section-image" />

        <h3>c. Teori Asam Basa Lewis</h3>
        <p>
          Asam basa Lewis menjelaskan terkait struktur dan ikatannya. Asam menurut Lewis adalah zat yang punya 
          kecenderungan menerima pasangan elektron basa, sedangkan basa adalah zat yang memberikan pasangan elektron. 
        </p>
        <img src="../Image/bab5.3k.jpg" alt="Pengaruh Suhu terhadap Kesetimbangan" className="section-image" />
      </section>

      <section>
        <h2>3. Klasifikasi Asam Basa</h2>
        <p>
          Asam basa diklasifikasikan menjadi dua, yaitu asam basa kuat dan asam basa lemah. Berikut ini penjelasannya:
        </p>

        <h3>a. Asam Basa Kuat</h3>
        <p>
          Asam kuat adalah asam yang ketika dilarutkan di dalam air bisa melepaskan ion H+ dengan mudah. 
          Larutan tersebut bisa mengalami disosiasi total dalam larutan. Sementara basa kuat adalah senyawa basa 
          yang bila dilarutkan dalam air akan melepaskan ion OH– dengan mudah.
        </p>

        <img src="../Image/bab5.4k.jpg" alt="Klasifikasi Asam Basa" className="section-image" />

        <h3>b. Asam Basa Lemah</h3>
        <p>
          Asam lemah adalah senyawa yang dilarutkan dalam air akan sulit melepaskan ion H+ dan mengalami disosiasi 
          pada larutan. Sedangkan, basa lemah adalah senyawa yang apabila dilarutkan di dalam air akan sulit melepaskan 
          ion OH- dan mengalami disosiasi dalam larutan.
        </p>

        <img src="../Image/bab5.5k.jpg" alt="Klasifikasi Asam Basa" className="section-image" />
      </section>

      <section>
        <h2>4. Indikator Asam Basa</h2>
        <p>
          Indikator asam basa adalah alat atau senyawa yang dipakai untuk mendeteksi senyawa asam dan basa. 
          Umumnya, indikator asam basa akan berubah warna apabila dikenai senyawa asam atau basa. Ada banyak jenis 
          indikator asam basa yang bisa dijumpai, mulai dari buatan dan alami. Berikut jenis-jenis indikator asam basa:
        </p>
        <ul>
          <li>Kertas lakmus merah dan kertas lakmus biru.</li>
          <li>Indikator asam basa alami, misalnya kol ungu, kulit manggis, bunga sepatu, dan lainnya.</li>
          <li>Indikator asam basa berupa larutan: fenolftalein, metil merah, metil jingga, dan bromtimol blue.</li>
          <li>pH meter.</li>
          <li>Indikator universal.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => navigate("/SlKma11b5")}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b4")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b6")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;