import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk12b4.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">

      <h1>Bab 6: Materi Geometri Bidang Datar & Bangun Ruang
      </h1>
      <section>
      <h2>1. Pengertian Bangun Datar</h2>
      <p>Bangun datar adalah bentuk geometri yang hanya memiliki dua dimensi, yaitu panjang dan lebar. Beberapa contoh bangun datar yang sering kita temui antara lain segitiga, persegi, lingkaran, dan lain-lain.</p>
                </section>
      <section>
        <h2>2. Segitiga</h2>
        <p>Segitiga merupakan bangun datar dengan tiga sisi dan tiga sudut. Terdapat beberapa jenis segitiga seperti segitiga sama sisi, sama kaki, dan sembarang.</p>
            <p><strong>Luas:</strong> 1/2 × alas × tinggi</p>
            <p><strong>Keliling:</strong> a + b + c</p>
            <img src="../Image/gsegitiga.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>3. Persegi</h2>
          <p>Persegi adalah bangun datar dengan empat sisi yang sama panjang dan empat sudut siku-siku.</p>
            <p><strong>Luas:</strong> sisi × sisi</p>
            <p><strong>Keliling:</strong> 4 × sisi</p>
            <img src="../Image/gpersegi.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>4. Lingkaran</h2>
          <p>Lingkaran adalah bangun datar yang terdiri dari semua titik yang berjarak sama dari sebuah titik pusat.</p>
            <p><strong>Luas:</strong> π × r²</p>
            <p><strong>Keliling:</strong> 2 × π × r</p>
            <img src="../Image/glingkaran.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>5. Persegi Panjang</h2>
          <p>Persegi panjang adalah bangun datar dengan dua pasang sisi sejajar yang panjangnya sama.</p>
            <p><strong>Luas:</strong> panjang × lebar</p>
            <p><strong>Keliling:</strong> 2 × (panjang + lebar)</p>
            <img src="../Image/gpersegipanjang.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>5. Trapesium</h2>
          <p>Trapesium adalah bangun datar dengan satu pasang sisi yang sejajar. Sisi yang sejajar disebut sisi alas.</p>
            <p><strong>Luas:</strong> 1/2 × (alas + atas) × tinggi</p>
            <p><strong>Keliling:</strong> a + b + c + d</p>
            <img src="../Image/g.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>7. Jajar Genjang</h2>
          <p>Jajargenjang adalah bangun datar dengan dua pasang sisi sejajar. Sisi yang berseberangan memiliki panjang yang sama.</p>
            <p><strong>Luas:</strong> alas × tinggi</p>
            <p><strong>Keliling:</strong> 2 × (alas + sisi miring)</p>
            <img src="../Image/gjajargenjang.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>8. Belah Ketupat</h2>
          <p>Belah ketupat adalah bangun datar dengan empat sisi yang sama panjang, tetapi sudut-sudutnya tidak selalu siku-siku.</p>
            <p><strong>Luas:</strong> 1/2 × diagonal1 × diagonal2</p>
            <p><strong>Keliling:</strong> 4 × sisi</p>
            <img src="../Image/gbelahketupat.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
        <h2>Pengertian Bangun Ruang</h2>
        <p>
        Bangun ruang adalah bentuk geometri yang memiliki tiga dimensi, yaitu panjang, lebar, dan tinggi. Bangun ruang memiliki volume dan luas permukaan. Contoh bangun ruang meliputi kubus, balok, kerucut, bola, dan lainnya..</p>
      </section>

      <section>
      <h2>1. Kubus</h2>
          <p>Kubus adalah bangun ruang dengan 6 sisi yang berbentuk persegi dan semua sisi memiliki panjang yang sama.</p>
            <p><strong>Luas Permukaan:</strong> 6 × s²</p>
            <p><strong>Volume:</strong> s³</p>
            <img src="../Image/gkubus.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>2. Balok</h2>
          <p>Balok adalah bangun ruang yang memiliki 6 sisi berbentuk persegi panjang, dengan panjang, lebar, dan tinggi yang berbeda.</p>
            <p><strong>Luas Permukaan:</strong> 2 × (panjang × lebar + panjang × tinggi + lebar × tinggi)</p>
            <p><strong>Volume:</strong> panjang × lebar × tinggi</p>
      </section>
      <section>
      <h2>3. Prisma Segitiga</h2>
          <p>Prisma segitiga adalah bangun ruang yang memiliki dua sisi segitiga yang sama besar dan sisi lainnya berupa persegi panjang.</p>
         
            <p><strong>Luas Permukaan:</strong> 2 × (1/2 × alas × tinggi) + keliling alas × tinggi</p>
            <p><strong>Volume:</strong> 1/2 × alas × tinggi × panjang</p>gi
            <p><strong>Keliling:</strong> a + b + c</p>
            <img src="../Image/gprisma.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>4. Kerucut</h2>
          <p>Kerucut adalah bangun ruang yang memiliki alas berbentuk lingkaran dan satu sisi melengkung yang menghubungkan titik pusat alas dengan ujung kerucut.</p>
            <p><strong>Luas Permukaan:</strong> π × r × (r + s)</p>
            <p><strong>Volume:</strong> 1/3 × π × r² × t</p>
            <img src="../Image/gkerucut.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>
      <section>
      <h2>5. Bola</h2>
          <p>Bola adalah bangun ruang yang memiliki semua titik di permukaannya berjarak sama dari pusat bola.</p>
         
            <p><strong>Luas Permukaan:</strong> 4 × π × r²</p>
            <p><strong>Volume:</strong> 4/3 × π × r³</p>
            <img src="../Image/gbola.png" alt="Struktur Penyerapan Makanan" className="section-image" />
      </section>


      
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk12b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>
         
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b5")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
    
  );
};

export default Bab6;
