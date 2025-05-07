import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk11b2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: ELASTISITAS BAHAN</h1>

      <section>
        <h2>Apa Elastisitas itu?</h2>
        <p>
        Kekenyalan	dalam	fisika	diistilahkan	dengan Elastisitas	adalah	suatu	sifat	bahan	
                   yang	dapat	berubah	baik	dalam	ukuran	 maupun	bentuk setelah	mendapat	gaya	
                   luar,	 tetapi	benda	itu	akan	kembali	ke	ukuran dan	bentuk semula	setelah	gaya	
                   luar	itu	ditiadakan.
        </p>
        <p>
        Dalam	 fisika,	 fenomena	 elastisitas	 ini	 perlu	 dinyatakan	 dalam	 suatu	 angka	 agar	
                   dapat	 diketahui	 potensinya	 dan	 dapat	 dimanfaatkan	 secara	 maksimal	 untuk	
                   berbagai	keperluan	alat	maupun	teknologi.
                   Bagaiman	penjelasan	fisikanya?
        </p>
        <p>Elastisitas	 kekenyalan	 suatu	 bahan	 dapat	 dipahami	 melalui	 struktur	 mikronya,	
                   yaitu	berkaitan	dengan	molekul-molekul	penyusun	bahan	itu.	Kebanyakan	bahan	
                   tersusun	atas	atom-atom	atau	molekul-molekul	yang	rapi	menurut	pola-pola	yang	
                   tetap	 yang	 disebut	 struktur	 kekisi dari	 bahan	 itu.	 Atom-atom	 atau	 molekulmolekul	 tersebut	 menempel	 kukuh	 diposisinya	 masing-masing	 pada	 pola-pola	
                   tertentu	karena	dijaga	oleh	gaya	antarmolekul.</p>
                <p>Jadi,	 elastisitas	 bahan	 merupakan	 akibat	 adanya	 gaya-gaya	 antarmolekul	
                   yang	merakit	bahan	tersebut.</p>
                   
        <img src="../Image/modul2.png" alt="contoh" className="section-image"></img>

        <p>Gambar 1.Karet	ditarik	disela-sela	dua	jari	tangan</p>
                <p>Siapkan	sebuah	karet	dan	lakukan	seperti	gambar
                   Rasakan	apa	yang	terjadi	kemudian	jelaskan	menurut	kalimat	sendiri,	apa	yang	
                   anda	rasakan	Ketika	:</p>
                <p>- Posisi	karet	tepat	Ketika	membentuk	posisi	seperti	gambar</p>
                <p>- Jauhkan	jarak	kedua	jari	ke	kanan-kiri	dengan	tetap	mempertahankan	posisi	
                     karet	ditempat	yang	sama,	apa	yang	anda	rasakan?	(semakin	berat/sakit	atau	
                     sama	saja	tidak	semakin	berat/semakin	sakit?)	</p>
                <p>- Tuliskan	alasan	apa	yang	anda	rasakan	dengan	kalimat	anda	sendiri.</p>
                <p>Kesimpulan	:	karet	akan	kembali	ke	ukuran	dan	bentuk	semula,	setelah	kedua	jari	
                   anda	lepaskan	peristiwa	ini	disebut	elastisitas	bahan.</p>
                <p><strong>a. Tegangan	(Stress)</strong></p>

                <img src="../Image/modul2.1.png" alt="contoh" className="section-image"></img>

                <p>Tegangan	menyatakan	perbandingan	antara	gaya	dengan	luasan	yang	
                mendapat	gaya,	bila	dinyatakan	dalam	persamaan	ditulis	sebagai	:</p>

                <img src="../Image/modul2.2.png" alt="rumus" className="section-image"></img>

                <p>Dengan :</p>
                 <p>σ	=	tegangan	(N/m2)</p>
                 <p>F	=	Gaya	(Newton)	dan</p>
                 <p>A	=	Luas	bidang	yang	dikenai	gaya	(m2)</p>

                 <p>Menurut	persamaan	tersebut,	nilai	tegangan	akan	semakin	besar	apabila	:</p>
                 <p>1. Gaya	besar</p>
                 <p>2. Luasan	kecil</p>
                 <p>3. Gaya	besar	dan	luasan	kecil.</p>

                 <strong>b. Regangan	(Strain)</strong>
                 <p>Sebuah	 tabung	 yang	 panjang	 semula	 Lo	 ditarik	 oleh	 gaya	 F	 sehingga	
                    panjangnya	 bertambah	 menjadi	 Lo +	 ∆L.	 Pada	 perubahan	 tersebut	 tabung	
                    mengalami	 regangan,	 yaitu besaran	 yang	 menyatakan	 perbandingan	 antara	
                    perubahan	 panjang	 terhadap	 panjang	 semula,	 untuk	 menghitung	 regangan	
                    dapat	dihitung	dengan	rumus	:</p>

                <img src="../Image/modul2.3.png" alt="rumus" className="section-image"></img>

                <p>Dengan :</p>
                 <p>∆L	:	pertambahan	panjang	(m)</p>
                 <p>Lo  :	panjang	semula	(m)</p>
                 <p>e	:	regangan	(tanpa	satuan)</p>

                 <p>Menurut	 persamaan	 tersebut	 strain tidak	 bersatuan,	 karena	 merupakan	
                    perbandingan	 antara	 dua	 besaran	 pokok	 yang	 sama,	 strain	 merupakan	
                    ukuran	 pertambahan	 panjang	 benda	 ketika	 diberi	 gaya,	 jika	 nilai	 strain	
                    besar,	 artinya	 benda	 itu	 mudah	 bertambah	 panjangnya,	 misalkan	 karet	
                    memiliki	nilai	strain	lebih	besar	dari	pada	pegas	pada	mobil,	karena	karet	
                    ketika	 diberi	 gaya	 kecil	 saja	 akan	 mengalami	 pertambahan	 panjang	 yang	
                    besar.</p>

                <strong>c. Modulus	Elastisistis atau	Modulus	Young</strong>
                <p>Dua	 besaran	 yang	 telah	 kita	 bahas	 diatas,	 yaitu	 tegangan	 dan	 regangan	
                   sebenarnya	 terjadi	 secara	 bersamaan,	 yaitu	 ketika	 benda	 mendapat	 gaya	
                   dalam	 arah	 sejajar	 dengan	 panjang	 benda	 maka	 gaya	 persatuan	 luasnya	
                   menghasilkan	tegangan,	dengan	tegangan	ini	benda	akan	bertambah	panjang	
                   sehingga	jika	pertambahan	panjangnya	dibandingkan	dengan	panjang	semula	
                   maka	diperoleh	nilai	regangan	.	</p>
                <p>Perbandingan	 antara	 besaran	 tegangan	 dan	 besaran	 regangan	 dinyatakan	
                   sebagai	modulus	elastisitas,	yaitu	angka	yang	menunjukkan	ketahanan	bahan	
                   untuk	 mengalami	 deformasi	 (perubahan),	 makin	 besar	 nilai	 modulus	
                   elastisitas	benda,	makin	sulit	benda	 tersebut	mengalami	perubahan.	Secara	
                   perhitungan,	untuk	menentukan	modulus	elastisitas	atau	kadang	disebut	juga	
                   modulus	Young,	digunakan	persamaan	berikut	:</p>
                
                   <img src="../Image/modul2.4.png" alt="rumus" className="section-image"></img>

                   <p>Dengan :</p>
                 <p>σ	= tegangan	(N/m2)</p>
                 <p>e	=	regangan</p>
                 <p>Y	=	modulus	elastisitas	(N/m2	=	Pascal)</p>

                 <p>Atau persamaan lain</p>

                 <img src="../Image/modul2.5.png" alt="rumus" className="section-image"></img>

                 <p>∆L	:	pertambahan	panjang	(m)</p>
                 <p>Lo :	panjang	semula	(m)</p>
                 <p>F	=	Gaya	(Newton)	dan</p>
                 <p>A	=	Luas	bidang	yang	dikenai	gaya	(m2)</p>

                 <p>Berikut	tabel nilai	modulus	elastisitas	beberapa	bahan	untuk	memberi	
                    gambaran	tentang	kualitas	bahan	dalam	hubungannya	dengan	deformasi	
                    (perubahan	bentuk,	dimensi	maupun	posisi) :</p>
                 
                    <img src="../Image/modul2.6.png" alt="tabel" className="section-image"></img>

                    <p>Tabel 1. modulus elastisitas bahan</p>
                 <p>Dari	table	nampak	bahwa	nilai	terkecil	dari modulus	elastisitas	(modulus	
                    Young)	 adalah	 karet,	 yang	 artinya	 karet	 adalah	 bahan	 paling	 mudah	
                    mengalami	perubahan	bentuk diantara	bahan-bahan	yang	dituliskan	pada	
                    table.</p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b1")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk11b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;