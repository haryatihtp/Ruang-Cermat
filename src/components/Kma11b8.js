// HASIL KALI KELARUTAN
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Kma11b7.css";

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab7-container">
      <h1>Bab 8</h1>
      
      <section>
        <h2>KELARUTAN DAN HASIL KALI KELARUTAN</h2>
        <h3>Apa itu Kelarutan?</h3>
        <p>
        Kelarutan adalah kemampuan suatu zat untuk melarut dalam sejumlah pelarut atau bisa dikatakan jika kelarutan menyatakan banyaknya zat terlarut dalam tiap satu liter larutan pada suhu tertentu. Jika suatu zat padat secara terus menerus ditambahkan ke dalam zat pelarut, maka pada suatu saat kita akan mendapati zat tersebut tidak akan larut lagi. 
Itu artinya, pada saat itu sudah mencapai konsentrasi maksimum. Larutan yang sudah mengandung konsentrasi maksimum itu, disebut sebagai larutan jenuh dan harga konsentrasi maksimum itu dinamakan kelarutan. 
        </p>
        <img src="../Image/bab8.1k.jpg" alt="Hormon dalam Reproduksi" className="section-image" />
      </section>
      
      <section>
        <h3>A. Apa itu Hasil Kali Kelarutan?</h3>
        <p>
        Hasil kali kelarutan (Ksp) adalah nilai maksimum dari hasil kali konsentrasi ion-ion yang dapat berada dalam suatu larutan. Ksp menggambarkan kesetimbangan antara zat padat dan ion-ion penyusunnya dalam larutan.
        </p>
        
        <h5>Nilai Ksp dapat digunakan untuk:</h5>
        <p>
          <li>Mengetahui seberapa jauh suatu senyawa dapat larut dalam air sebelum mencapai titik jenuh</li></p>
        <li>Mengetahui apakah suatu senyawa akan mengalami presipitasi atau tetap larut dalam kondisi tertentu</li>
       <li>Meramalkan apakah suatu reaksi menghasilkan endapan atau tidak </li>
        
        <p>
        Nilai Ksp dapat dihitung dengan rumus Ksp = (n-1)ⁿ⁻¹Sⁿ, dengan S adalah kelarutan dan n adalah jumlah ion
        
      </p>
      <h5>Contoh:</h5>
      <p>
Konstanta hasil kali kelarutan CaCO3 adalah:</p>
<p>
CaCO3(aq) qe Ca2+(aq) + CO32-(aq)
        </p>
        <p>
        Ksp CaCO3 = [Ca2+][CO3 2-]
        </p>
        <p>
        Nilai Ksp dapat bervariasi tergantung pada sumber dan suhu. Konstanta hasil kali kelarutan akan berubah bila suhu diubah, dan tetap bila suhu tidak berubah
        </p>
        <img src="../Image/bab8.2k.jpg" alt="Hormon reproduksi" className="section-image" />
      </section>

      <section>
        <h3>B. HUBUNGAN KELARUTAN DENGAN
KONSTANTA HASIL KALI KELARUTAN</h3>
        <p>Nilai konstanta hasil kali kelarutan
        dipengaruhi oleh nilai kelarutan zat </p>
        <p>Hubungan kelarutan dengan Ksp dalam
        berbagai jenis basa dan garam sukar larut:</p>
        <img src="../Image/bab8.3k.png" alt="Kehamilan" className="section-image" />
    <h5>Contoh:</h5>
    <p>
Tentukan kelarutan AgCl jika diketahui Ksp AgCl
adalah 1 x 10-10</p>
<h5>Jawab:</h5>
<p>Ksp AgCl = 10-10 = s2
s AgCl = 10-5 M</p>
<br></br>
<h5>Contoh:</h5>
    <p>
    Diketahui Ksp Fe(OH)2 adalah 1,08 x 10-13
, maka
pH larutan jenuh Fe(OH)2 adalah?
</p>
<h5>Jawab:</h5>
<p>1,08 x 10-13 = 4s3
s = 3 x 10-5 M
[OH-
] = 2s = 2 x 3 x 10-5 = 6 x 10-5 M
pOH = 5 – log6
pH = 9 + log6 pH = 9,7
</p>
      </section>

      <section>
        <h3>C.HUBUNGAN KELARUTAN DENGAN ION
SENAMA DAN PH
</h3>
 <li>
       <strong> Kelarutan zat </strong>dipengaruhi oleh ion penyusun
pelarut.
        </li> 
       <li>
       <strong>Kelarutan zat</strong> pada pelarut yang mengandung
ion senama dengan zat akan memperkecil
kelarutan karena menggeser kesetimbangan.
       </li>
      <h5>Contoh:      </h5>
      <p>Kelarutan AgCl pada NaCl dipengaruhi ion Cl-
      ,
     </p><p> AgCl(s) ➯ Ag+(aq) + Cl–(aq)</p>
     <p>
NaCl(aq) ➯ Na+(aq) + Cl–(aq)
<p>bertambah Kesetimbangan <strong>bergeser ke kiri</strong> karena Clbertambah, sehingga lebih banyak AgCl yang
mengendap dalam NaCl dibanding dalam air.</p>
<li><strong>Nilai kelarutan</strong> ion senama dari zat yang
dilarutkan diabaikan karena nilainya kecil, dan
yang digunakan adalah konsentrasi ion senama
dari pelarut</li>
<h4>Contoh:</h4>
<p>Jika Ksp PbCl2 = 1,7 x 10-5, berapa kelarutan PbCl2dalam HCl 0,1 M?</p>
<p>PbCl2(s) ➯ Pb2+(aq) + 2Cl-(aq)</p>
<p>HCl(aq) ➯ H+(aq) + Cl-(aq)</p>
      </p>
      <p>[Cl-] = 2s + 0,1 ≈ 0,1 (nilai s sangat kecil)</p><p>
 Ksp = [Pb2+][Cl-
]</p><p>
2
1,7 x 10-5 = s x (0,1)
2
s = 1,7 x 10-3 M
</p>
<li><strong>Kelarutan zat</strong> juga dipengaruhi oleh pH larutan,
yaitu dipengaruhi oleh ion OH-
.
</li>
<li><strong>Zat-zat</strong> yang kelarutannya dipengaruhi oleh pH:
</li>
<p>1. Basa mudah larut dalam larutan netral dan
asam</p>
<p>2. Garam dari asam lemah mudah larut dalam
asam kuat.</p>
<p>
3. Garam dari basa lemah mudah larut dalam
basa kuat.
</p>
<br></br>
<p><strong>Kelarutan basa</strong> pada pelarut basa akan
memperkecil kelarutan karena menggeser
kesetimbangan.</p>
<h4>Contoh:</h4>
<p>Kelarutan Fe(OH)2 pada NaOH,</p>
<p>Fe(OH)2(s) ➯ Fe2+(aq) + 2OH–
(aq)</p>
<p>NaOH(aq) ➯ Na+(aq) + OH–(aq)</p>
<p>bertambah
Kesetimbangan bergeser ke kiri karena OHbertambah, sehingga lebih banyak Fe(OH)2 yang
mengendap dalam NaOH dibanding dalam air.</p>
<li><strong>Kelarutan garam </strong>pada pelarut basa akan
memperkecil kelarutan karena reaksi hidrolisis
garam menggeser kesetimbangan.</li>
<h5>Contoh:
</h5>
<p>Kelarutan BaCO3 pada NaOH,</p>
<p>CO3
2-(aq) + H2O(l) ➯ HCO3-(aq) + OH–(aq)</p>
<p>NaOH(aq) ➙ Na+(aq) + OH–(aq)</p>
<p>bertambah
Kesetimbangan bergeser ke kiri karena OHbertambah, sehingga lebih banyak BaCO3 yang
mengendap dalam NaOH dibanding dalam air</p>
<li><strong>Nilai kelarutan</strong> OH- dari zat yang dilarutkan
diabaikan karena nilainya kecil, dan yang
digunakan adalah konsentrasi OH- dari pelarut.
</li>
<h5>Contoh:</h5>
<p>Larutan jenuh Mg(OH)2 memiliki pH 10. Tentukan
kelarutannya dalam larutan dengan pH 12</p>
<p>Mg(OH)2(s) ➯ Mg2+(aq) + 2OH-(aq)</p>
<p>[OH-] Mg(OH)2 = 10-4 M</p>
<p>2s = 10-4
s = 5 x 10-5
(pada air)</p>
<p>Ksp Mg(OH)2 = 4s3 = 4 x (5 x 10-5)3</p>
<p>Ksp Mg(OH)2 = 5 x 10-13</p>
<p>[OH-] pelarut = 0,01 M</p>
<p>[OH-] = 2s + 0,01 ≈ 0,01 (nilai s sangat kecil)</p>
<p> Ksp = [Mg2+][OH-]2</p>
<p> 5 x 10-13 = s x (0,01)2
s = 5 x 10-9 M (pada basa)</p>
        <img src="../Image/bab8.4k.jpg" alt="Kehamilan" className="section-image" />
      </section>

      <section>
        <h3>D. Pengendapan</h3>
      <li><strong>Pengendapan</strong> terjadi pada suatu larutan yang
      telah jenuh.</li>
      <li><strong>Larutan</strong> yang telah jenuh oleh suatu zat masih
mengalami pelarutan walau sudah ada endapan,
namun laju pelarutan zat tersebut sebanding
dengan laju pengendapan zat.
</li>
<li><strong>Konstanta hasil kali kelarutan</strong> juga dapat
meramalkan pengendapan
</li>
<li><strong>Bila dua larutan dicampurkan</strong>, maka akan
terbentuk basa/garam yang akan
larut/mengendap yang dapat dicek dengan <strong>kuosien reaksi (Qc).</strong></li>
<li><strong>Kuosien reaksi</strong> (Qc) adalah nilai yang bentuk
persamaannya sama dengan tetapan hasil kali
kelarutan (Ksp).</li>
<p>Qc = [Kat+][An-] </p>
<p>AB(s) ➯ A+ + B</p>
<li><strong>Makna nilai kuosien reaksi:</strong></li>
<p>
1. Jika Qc = Ksp, berarti larutan tepat jenuh
(akan mengendap).</p>
<p>2. Jika Qc く Ksp, berarti larutan tidak/belum
mengendap.</p>
<p>3. Jika Qc › Ksp, berarti telah terjadi
pengendapan</p>
<p><strong>Reaksi pengendapan </strong>dari dua larutan
merupakan pengenceran, sehingga nilai
konsentrasi seluruh zat berubah. </p>
<h5>Contoh:</h5>
<p>Basa Mg(OH)2 mempunyai Ksp = 10-15. Apakah
terbentuk endapan Mg(OH)2 jika 50 mL MgSO4
0,01 M dicampur dengan 50 mL NH4OH 0,1 M?
(Kb NH4OH = 10-5)</p>
<h5>Jawab:</h5>
<p>Reaksi 1:</p>
<p>MgSO4(aq) → Mg2+(aq) + SO42-(aq)</p>
<p>n Mg2+ = 50 x 0,01 = 0,5 mmol</p>
<p>[Mg2+] = 0,5 : (50 + 50) = 5 x 10-3 M</p>
<p>Reaksi 2:</p>
<p>NH4OH(aq) → NH4+(aq) + OH-(aq)</p>
<p>n OH- = 50 x 0,1 = 5 mmol</p>
<p>Mb = 5 : (50 + 50) = 0,05 M</p>
<p>[OH-] = √5×10-2×10-5= 7 x 10-4 M</p>
<p>Maka kuosien reaksi:</p>
<p>Qc = [Mg2+][OH-]2</p>
<p>Qc = 5 x 10-3x (7 x 10-4)2</p>
<p>Qc = 2,45 x 10-9</p>
<p>Ternyata Qc › Kc, maka telah terjadi endapan
Mg(OH)2.</p>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma11b8"}
        >
          Mulai Latihan Soal
        </button>
      </div>
      
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b7")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b9")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab7;