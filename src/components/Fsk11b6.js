import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b6.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab6-container">
      <h1>TEORI KINETIK GAS</h1>

      <section>
        <h2>Pendahuluan</h2>
       <p>
        Teori kinetik gas menjelaskan sifat gas berdasarkan gerakan pertikel-partikelnya.
        Gas dianggap terdiri dari partikel kecil yang bergerak secara acak dan terus-menerus.
                </p>
      </section>

      <section>
        <strong>Pengertian Gas Ideal </strong>
                <p>Gas ideal adalah gas yang secara tepat memenuhi persamaan pV = nRT. Sebagai 
                   gambaran tentang keadaan gas ideal, kita tinjau sifat-sifat gas ideal diantaranya 
                   adalah: 
                </p>
                <p>1. Gas ideal terdiri dari partikel-partikel yang amat besar jumlahnya, yang tersebar 
                   merata di seluruh bagian jumlahnya, dan bergerak secara acak ke segala arah 
                   dengan kelajuan tetap
                </p>
                <p>2. Jarak antara partikel gas jauh lebih besar dari dibanding ukuran partikel
                </p>
                <p>3. tidak ada gaya di antara partikel-partikel tersebut kecuali jika bertumbukan 
                   (tumbukan dianggap lenting sempurna dan partikel dianggap bulat, licin, dan pejal), 
                   dan berlangsung sangat singkat</p>
                <p>4. Volume partikel gas sangat kecil dibandingkan dengan wadah yang ditempatinya 
                   sehingga ukurannya dapat diabaikan </p>
                <p>5. Hukum Newton tentang gerak berlaku</p>

                <strong>Persamaan Keadaan Gas Ideal </strong>
                <p>Hukum Boyle-Gay Lussac berlaku untuk gas ideal di dalam ruang tertutup, 
                   persamaannya dapat dituliskan sebagai berikut  :  </p>

        <img src="../Image/modul6.f.png" alt="Gas" className="section-image" />

        <img src="../Image/modul6.1.png" alt="gas" className="section-image" />
        <p>Maka : </p>
        <p>Persamaan PV = nRT dapat dinyatakan sebagai berikut, </p>

          <img src="../Image/modul6.2.png" alt="gas ideal" className="section-image" />

          <img src="../Image/modul6.3.png" alt="gas ideal" className="section-image" />

          <p>Dari persamaan PV = nRT , dengan mensubstitusikan n = m/M , persamaan keadaan  gas ideal menjadi :</p>

          <img src="../Image/modul6_4.png" alt="gas ideal" className="section-image" />

          <strong> Keterangan : </strong>                           
                <p>m = massa total gas (kg) </p>                          
                <p>M = massa molekul gas (kg/kmol = gr/mol) </p>
                <p>Na = bilangan Avogadro (6,02 x 1023 partikel/mol)</p>
                <p>P1 = tekanan gas mula-mula (Pa = N/m2)  </p>
                <p>P2 = tekanan gas akhir </p>
                <p>V1 = volume gas mula-mula (m3)  </p>
                <p>T1 = suhu gas mula-mula (K) </p>
                <p>R = tetap umum gas = tetapan molar gas
                     = 8314 J/kmolK = 8,314 J/molK = 0,082 liter.atm/molK</p>
                <p>N = banyak partikel </p>
                <p>n = jumlah mol (mol)</p>
                <p>P = tekanan gas ideal (Pa) </p>
                <p>V = volume gas (m3)</p>
                <p>V2 = volume gas akhir </p>
                <p>T2 = suhu gas akhir (K) </p>
                <p>ρ = massa jenis gas (kg/m3) </p>

                <strong>Tekanan Gas Ideal</strong>
                <p>Berdasarkan teori kinetik, molekul-molekul gas ideal bergerak secara acak sesuai 
                   Hukum Gerak Newton dan bertumbukan dengan molekul lain maupun dengan dinding 
                   bejana tempat gas berada secara elastis sempurna.  
                </p>

                <img src="../Image/modul6_5.png" alt="gas ideal" className="section-image" />

                <p>P = tekanan gas (Pa) </p>
                <p>2 v = kuadrat kelajuan rata-rata molekul gas</p>
                <p>N/V = kerapatan partikel,  </p>
                <p>N = jumlah molekul (partikel),  </p>
                <p>V = volume wadah </p>
                <p>ρ = massa jenis (kg m-3)  </p>
                <p>m0= massa satu molekul gas (kg),  </p>
      </section>

      <section>
        <h2>Konsep Dasar</h2>
        <ul>
                    <li>
                        <strong> Energi Kinetik:</strong> Energi partikel gas yang bergerak, berbanding lurus dengan suhu mutlaknya.
                    </li>
                    <li>
                        <strong>Tekanan Gas:</strong> Diakibatkan oleh tumbukan partikel gas dengan dinding wadah.
                    </li>
                    <li>
                        <strong>Hukum Gas Ideal:</strong> Menjelaskan hubungan antara tekanan, volume, suhu, dan jumlah mol gas.
                    </li>
        </ul>  
      </section>

      <section>
      <h2>Contoh Aplikasi</h2>
        <p>
        Teori kinetik gas digunakan untuk memahami perilaku gas dalam mesin pembakaran internak, pendingin udara, balon udara, dan studi termodinamika.
        </p>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk11b6"}
        >

          Mulai Latihan Soal
        </button>
      </div>

   {/* Navigasi Halaman */}
   <div className="navigation-container">
   <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b5")}
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

export default Bab6;