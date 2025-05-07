import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Bgl11b8.css";

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab8-container">
      <h1>Bab 8: Tumbuh Kembang Makhluk Hidup</h1>
      
      <section>
        <h2>A. Fenomena Pertumbuhan dan Perkembangan</h2>

        <h3>1. Pertumbuhan dan Perkembangan pada Tumbuhan</h3>
        <p>
          Pada fenomena yang kalian amati tersebut, dapatkah kalian 
          membedakan pertumbuhan dan perkembangan? Kecambah yang kalian lihat disebut juga plantula atau tanaman 
          kecil. Bagian plumula berkembang menjadi batang, sedangkan 
          radikula menjadi akar. Bagian seperti kacang yang ada pada taoge 
          atau kecambah kacang hijau adalah kotiledon. Kotiledon menyediakan 
          sumber makanan bagi kecambah sampai daun tanaman tumbuh.
        </p>
        <img src="/image/bab8.1.png" alt="Dua Tipe Perkecambahan" className="section-image" />

        <h3>2. Pertumbuhan dan Perkembangan pada Hewan</h3>
        <p>
          Apakah pertumbuhan dan perkembangan hewan sama dengan 
          tumbuhan? Fenomena pertumbuhan dan perkembangan pada hewan 
          diawali sejak terbentuknya zigot dari proses pembuahan hingga 
          hewan menjadi dewasa. Fertilisasi akan menghasilkan sel individu baru yang disebut 
          zygote dan akan melakukan pembelahan diri/pembelahan sel 
          (cleavage) menuju pertumbuhan dan perkembangan menjadi embrio. 
        </p>
        <img src="/image/bab8.2.png" alt="Hewan" className="section-image" />
      </section>

      <section>
        <h2>3. Pertumbuhan dan Perkembangan pada Manusia</h2>
        <p>
          Pertumbuhan pada manusia ditandai dengan bertambahnya ukuran fisik dan struktur 
          tubuh seperti bertambah besarnya organ, berat badan, panjang/
          tinggi badan, lingkar kepala dan indikator anggota tubuh lainnya. 
          Pertumbuhan pada manusia akan berhenti saat dewasa.
        </p>
        <img src="/image/bab8.3.png" alt="Manusia" className="section-image" />
      </section>

      <section>
        <h2>Faktor yang Memengaruhi Pertumbuhan dan Perkembangan Makhluk Hidup</h2>

        <h3>a. Faktor Internal</h3>
        <h4>1. Gen</h4>
        <p>
          Perbedaan-perbedaan yang terlihat dari ragam mangga di Indonesia 
          tersebut dipengaruhi oleh gen. Gen merupakan substansi pembawa 
          sifat yang diturunkan dari induk ke generasi selanjutnya. 
        </p>
        <img src="/image/bab8.4.png" alt="Mangga" className="section-image" />

        <h3>b. Faktor Eksternal</h3>
        <h4>1. Nutrisi</h4>
        <p>
          Daun pisang yang berwarna putih disebabkan tumbuhan  
          kekurangan Fe (zat besi). Fe berperan dalam pembentukan klorofil 
          (zat hijau daun).
        </p>
        <h4>2. Cahaya Matahari</h4>
        <p>
          Tumbuhan membutuhkan cahaya matahari untuk fotosintesis. Cahaya 
          juga berpengaruh terhadap pertumbuhan karena dapat merusak hormon auksin yang terdapat pada ujung batang.
        </p>
        <img src="/image/bab8.5.png" alt="Tumbuhan Segar" className="section-image" />
      </section>

      <section>
        <h2>Faktor yang Memengaruhi Pertumbuhan dan Perkembangan Hewan dan Manusia</h2>

        <h3>a. Faktor Internal</h3>
        <h4>1. Gen</h4>
        <p>
          Gen merupakan faktor yang sangat menentukan pertumbuhan 
          organisme karena gen adalah penentu pola dasar pertumbuhan. 
          Fenotipe seperti tinggi badan, warna kulit, dan bentuk tubuh ditentukan oleh gen.
        </p>
        <h4>2. Hormon</h4>
        <p>
          Hormon yang paling berpengaruh terhadap pertumbuhan mamalia 
          adalah hormon somatotropin atau HGH (Human Growth Hormone).
        </p>
        <img src="/image/bab8.6.png" alt="Hormon" className="section-image" />

        <h3>b. Faktor Eksternal</h3>
        <p>
          Selain faktor genetik, pertumbuhan pada hewan dan manusia 
          sangat dipengaruhi oleh faktor eksternal seperti nutrisi, cahaya, dan suhu.
        </p>
        <img src="/image/bab8.7.png" alt="Faktor Eksternal" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl11b8"}
        >
          Mulai Latihan Soal
        </button>
      </div>
         
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b7")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b8")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab8;