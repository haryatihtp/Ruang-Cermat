import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma10b4.css';

const Bab4 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: Ikatan Kimia</h1>

      <section>
        <h2>Pengertian Ikatan Kimia</h2>
        <p>
          Teori tentang ikatan kimia lahir dari gagasan Gilbert N. Lewis.
          Dalam artikelnya yang dirilis tahun 1916, Lewis meneliti terkait
          kesulitan golongan gas mulia (VIIIA) membentuk suatu ikatan
          kimia. Diduga, gas mulia memiliki keunikan dalam konfigurasi
          elektronnya yang dapat mencegah persenyawaan dengan unsur lain.
        </p>
        <img src="../Image/ikatan kimia.jpg" alt="Struktur Pembuluh Darah" className="section-image" />
        <ul>
          <li>Beberapa unsur tidak tersusun dari atom melainkan molekul.</li>
          <li>Atom-atom dari unsur yang sama dapat memiliki massa yang
          berbeda.
          </li>
          <li>Masih ada partikel subatomik yang menyusun atom seperti
          proton, neutron, dan elektron.
          </li>
        </ul>

        <h3>Sifat - sifat Ikatan Kimia</h3>
        <p>
        Memahami sifat-sifat ikatan kimia sangat penting untuk memahami 
        bagaimana unsur-unsur yang berbeda berinteraksi dan bergabung. 
        Umumnya, ikatan kimia dapat bervariasi dalam hal panjang, 
        kekuatan, polaritas, dan lainnya.
        </p>
        <p>
        Panjang ikatan adalah jarak fisik antara dua atom yang 
        berikatan-semakin pendek ikatannya, semakin kuat ikatannya.
        Kekuatan ikatan mengacu pada jumlah energi yang dibutuhkan untuk memutus 
        ikatan kimia-ikatan yang lebih kuat membutuhkan lebih banyak energi. 
        Dan polaritas menggambarkan distribusi elektron yang tidak merata dalam 
        suatu ikatan, yang menentukan daya tariknya terhadap partikel lain. 
        </p>
        <p>
        Selain sifat-sifat ini, ikatan kimia juga dapat diklasifikasikan ke 
        dalam tiga jenis utama: ionik, kovalen, dan logam. Penting untuk mengetahui
        perbedaan ini agar Anda dapat menganalisis berbagai jenis struktur ikatan 
        dalam kimia secara akurat.
        </p>
        <ul>
          <li>
            <strong>Ionik:</strong> Ikatan ionik terjadi ketika elektron dari satu atom ditransfer ke atom lain, 
                   membentuk ion bermuatan positif (kation) dan negatif (anion). Gaya elektrostatik 
                   antara ion-ion tersebut menciptakan ikatan yang kuat.
          </li>
          <li>
            <strong>Contoh: </strong> Natrium klorida (NaCl). Natrium (Na) kehilangan satu elektron menjadi Na⁺, 
            sementara klorin (Cl) menerima elektron menjadi Cl⁻.
          </li>
          <li>
            <strong>Kovalen:</strong> Ikatan kovalen terjadi ketika dua atom berbagi satu atau lebih pasangan elektron 
                    untuk mencapai kestabilan (biasanya memenuhi aturan oktet). Ikatan ini biasanya terjadi 
                    antara atom-atom non-logam.
          </li>
          <li>
            <strong>Contoh: </strong> Molekul air (H₂O), di mana 1oksigen berbagi elektron dengan dua atom hidrogen.
          </li>
          <li>
            <strong>Logam:</strong> Ikatan logam terjadi antara atom-atom logam, di mana elektron valensi "berkelana" bebas 
                    di antara inti-inti atom dalam struktur logam. Elektron-elektron ini membentuk lautan elektron 
                    yang mengikat ion-ion logam bersama-sama.
          </li>
          <li>
            <strong>Contoh: </strong> Logam tembaga (Cu) dan besi (Fe).
          </li>
        </ul>
      </section>

      <section>
        <h2>Jenis - jenis Ikatan Kimia</h2>
        <p>
        Ikatan kimia dapat dibagi menjadi beberapa jenis berdasarkan cara
              atom-atom berbagi atau mentransfer elektron. Berikut adalah tiga
              jenis utama ikatan kimia:
        </p>
        <ul>
          <li>
            <strong>Ikatan Ionik:</strong> Ikatan yang terjadi ketika atom
                  satu elemen menyerahkan elektron kepada atom lain, biasanya
                  antara logam dan non-logam.
          </li>
          <li>
            <strong>Ikatan Kovalen:</strong> Ikatan di mana pasangan atom
                  berbagi elektron untuk mencapai kestabilan, umumnya terjadi
                  antara non-logam.
          </li>
          <li>
            <strong>Ikatan Logam:</strong> Ikatan yang terjadi dalam logam,
                  di mana elektron-elektron bebas bergerak di antara ion positif
                  logam, menciptakan "lautan elektron."
          </li>
        </ul>
        <img src="../Image/Ikatan kovalen.png" alt="Ikatan kovalen" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma10b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma10b3")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma10b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;