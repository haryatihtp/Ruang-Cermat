import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma12b2.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 2: Reaksi Redoks dan Elektrokimia</h1>
      <section>
        <h2>1.  Pengenalan Reaksi Redoks </h2>
        <p>
          Reaksi redoks (reduksi-oksidasi) adalah reaksi kimia yang melibatkan perpindahan elektron dari satu zat ke zat lain. 
          Dalam reaksi redoks, terdapat dua proses utama:
        </p>
        <ul>
          <li><strong>Oksidasi:</strong> Proses kehilangan elektron.</li>
          <li><strong>Reduksi:</strong> Proses penambahan elektron.</li>
        </ul><br/>
        <img 
          src="https://th.bing.com/th/id/OIP.uoZ3AYDiXX97X2sZotl3wgHaEN?w=1916&h=1090&rs=1&pid=ImgDetMain" 
          alt="Gambar Reaksi Redoks" 
          className="section-image" 
        /> <br/>
        <p>
          Zat yang mengalami oksidasi disebut agen pereduksi, sedangkan zat yang mengalami reduksi disebut agen pengoksidasi.
        </p>
        <img 
          src="https://fatek.umsu.ac.id/wp-content/uploads/2023/08/reaksi-redoks-pengertian-fungsi-ciri-dan-contoh.png" 
          alt="Diagram Reaksi Redoks" 
          className="section-image" 
        /><br/>
      </section>

      <section>
        <h2>2. Konsep Elektrokimia</h2>
        <p>
          Elektrokimia adalah cabang ilmu kimia yang mempelajari hubungan antara reaksi kimia dan listrik. 
          Sel elektrokimia adalah perangkat yang dapat menghasilkan listrik dari reaksi kimia atau menggunakan listrik untuk menyebabkan reaksi kimia.
        </p><br/>
        <p>Sel elektrokimia terdiri dari dua jenis utama:</p>
        <ul>
          <li><strong>Sel Galvani (Volta):</strong> Menghasilkan listrik dari reaksi redoks spontan.</li>
          <li><strong>Sel Elektrolisis:</strong> Menggunakan listrik untuk mendorong reaksi redoks non-spontan.</li>
        </ul><br/>

        <h3>A. Sel Galvani (Sel Volta) </h3>
        <p>
          Sel galvani mengubah energi kimia menjadi energi listrik. Contoh umum dari sel galvani adalah baterai. 
          Pada sel galvani, reaksi redoks spontan terjadi antara dua elektroda, yaitu anoda dan katoda:
        </p>
        <ul>
          <li><strong>Anoda:</strong> Elektroda di mana terjadi oksidasi.</li>
          <li><strong>Katoda:</strong> Elektroda di mana terjadi reduksi.</li>
        </ul><br/>
        <p><em>Contoh reaksi:</em> Pada sel seng-tembaga, seng teroksidasi dan tembaga tereduksi.</p>
        <p>
          Zn(s) → Zn²⁺(aq) + 2e⁻ (oksidasi di anoda) <br />
          Cu²⁺(aq) + 2e⁻ → Cu(s) (reduksi di katoda)
        </p><br/>

        <h3>B. Sel Elektrolisis</h3>
        <p>
          Sel elektrolisis menggunakan arus listrik untuk memicu reaksi kimia non-spontan. 
          Salah satu contoh penerapan elektrolisis adalah pemurnian logam dan produksi gas seperti hidrogen dan oksigen dari air.
        </p><br/>
        <p>
          <em>Contoh reaksi:</em> Elektrolisis air menghasilkan gas hidrogen dan oksigen.
        </p>
        <p>
        2H₂O(l) → 2H₂(g) + O₂(g)
        </p><br/>
      </section>

      <section>
        <h2>3. Aplikasi Sel Elektrokimia</h2>
        <ul>
          <li><b>Elektrolisis:</b> Selain pemurnian logam dan produksi gas, elektrolisis juga digunakan dalam pelapisan logam (electroplating), produksi aluminium, dan pengolahan limbah.</li>
          <li><b>Baterai Sekunder:</b> Baterai sekunder seperti baterai nikel-kadmium dan baterai lithium-ion dapat diisi ulang karena reaksi redoks yang terjadi bersifat reversibel.</li>
          <li><b>Sel Bahan Bakar:</b> Sel bahan bakar mengubah energi kimia dari bahan bakar (seperti hidrogen) menjadi energi listrik secara langsung, dengan efisiensi yang tinggi dan tanpa menghasilkan emisi berbahaya.</li>
        </ul><br/>
      </section>

      <section>
        <h2>4. Faktor yang Mempengaruhi Potensi Sel</h2>
        <p>Potensi sel adalah ukuran kecenderungan suatu sel elektrokimia untuk melakukan kerja listrik. Faktor-faktor yang mempengaruhi potensi sel antara lain:</p>
        <ul>
          <li><b>Jenis elektroda:</b> Jenis logam yang digunakan sebagai elektroda akan mempengaruhi potensi standar reduksi.</li>
          <li><b>Konsentrasi ion:</b> Semakin tinggi konsentrasi ion, semakin besar potensi sel.</li>
          <li><b>Suhu:</b> Suhu juga dapat mempengaruhi potensi sel.</li>
        </ul><br/>
      </section>

      <section>
        <h2>5. Diagram Sel</h2>
          <p>
            Diagram sel adalah representasi singkat dari susunan sebuah sel elektrokimia. Diagram ini mencakup notasi yang menggambarkan berbagai elemen dalam sel, seperti elektroda, fase, konsentrasi, dan arah aliran elektron. Diagram sel membantu mempermudah pemahaman proses elektrokimia secara keseluruhan.
          </p><br/>
            <h3>A. Komponen Diagram Sel</h3>
              <p>
                 Diagram sel memiliki beberapa komponen utama:
                <ul>
                  <li><b>Anoda:</b> Elektroda tempat terjadinya oksidasi.</li>
                  <li><b>Katoda:</b> Elektroda tempat terjadinya reduksi.</li>
                  <li><b>Garis Tunggal (|):</b> Menunjukkan perbedaan fase antara zat dalam sistem.</li>
                  <li><b>Garis Ganda (||):</b> Menunjukkan jembatan garam atau pemisahan antara anoda dan katoda.</li>
               </ul>
              </p><br/>
            <h3>B. Contoh Diagram Sel</h3>
              <p>
                Diagram sel untuk reaksi Zn dengan Cu dalam sel galvanik:
              <br/>
              Zn(s) | Zn<sup>2+</sup>(aq, 1M) || Cu<sup>2+</sup>(aq, 1M) | Cu(s)
              <br/>
              <i>Keterangan:</i> Elektron mengalir dari Zn (anoda) ke Cu (katoda) melalui rangkaian eksternal.
              </p><br/>
      </section>

      <section >
        <h2>6. Aturan Penentuan Bilangan Oksidasi</h2>
        <p>Bilangan oksidasi (biloks) digunakan untuk menentukan unsur yang teroksidasi dan tereduksi.</p>
        <ul>
          <li>Unsur bebas (unsur murni) memiliki biloks 0.</li>
          <li>Ion monoatomik memiliki biloks sesuai muatannya.</li>
          <li>Biloks oksigen dalam senyawa biasanya -2, kecuali pada peroksida (-1) dan senyawa dengan fluor.</li>
          <li>Biloks hidrogen dalam senyawa biasanya +1, kecuali dalam hidrida logam (-1).</li>
          <li>Jumlah biloks dalam senyawa netral adalah 0, dan pada ion sama dengan muatannya.</li>
        </ul><br/>
      </section>

      <section>
        <h2>7. Pemanfaatan Reaksi Redoks dalam Kehidupan Sehari-hari</h2>
        <p>Reaksi redoks memiliki peran penting dalam berbagai aspek kehidupan kita, seperti:</p>
        <ul>
          <li><b>Baterai:</b> Baterai dalam berbagai perangkat elektronik, mulai dari ponsel hingga mobil listrik, bekerja berdasarkan prinsip reaksi redoks.</li>
          <li><b>Korosi:</b> Proses perkaratan besi adalah contoh reaksi redoks yang merugikan.</li>
          <li><b>Fotosintesis:</b> Tumbuhan menggunakan reaksi redoks untuk mengubah air dan karbon dioksida menjadi glukosa dan oksigen.</li>
          <li><b>Respirasi Sel:</b> Proses pembakaran makanan dalam tubuh kita juga melibatkan reaksi redoks.</li>
          <li><b>Industri:</b> Reaksi redoks digunakan dalam produksi berbagai bahan kimia, logam, dan produk lainnya.</li>
        </ul><br/>
      </section>

      <section>
        <h2>8. Korosi dan Pencegahannya</h2>
        <p>Korosi adalah proses degradasi logam akibat reaksi redoks dengan lingkungan. Beberapa metode pencegahan korosi antara lain:</p>
        <ul>
          <li><b>Pelapisan</b> : Melapisi permukaan logam dengan cat, minyak, atau logam lain yang lebih tahan korosi.</li>
          <li><b>Proteksi katodik:</b>  Menghubungkan logam yang akan dilindungi dengan logam yang lebih aktif secara elektrokimia.</li>
          <li><b>Inhibitor korosi:</b>  Menambahkan zat kimia yang dapat menghambat reaksi korosi</li>
        </ul><br/>
      </section>

      <section>
        <h2>9. Jenis Reaksi Redoks : </h2>
        <p>Reaksi redoks memiliki beberapa jenis yaitu : </p><br/>
        <h4>Berdasarkan Jenis Reaksi</h4>
        <ul>
          <li>Reaksi Kombinasi : Dua atau lebih zat bergabung membentuk satu senyawa baru.</li>
          <li>Reaksi Penguraian : Satu senyawa diuraikan menjadi dua atau lebih zat.</li>
          <li>Reaksi Disproporsionasi : Satu unsur dalam suatu senyawa mengalami oksidasi dan reduksi sekaligus.</li>
          <li>Reaksi Pemindahan Elektron : Elektron berpindah dari reduktor ke oksidator.</li>
        </ul><br/>
        <h3>Berdasarkan Medium Reaksi</h3>
        <ul>
          <li> Medium Asam </li>
          <li> Medium Basa </li>
        </ul><br/>
      </section>

      <section>
        <h2>10. Langkah Menyetarakan Reaksi Redoks</h2><br/>
        <h3>A. Metode Bilangan Oksidasi</h3><br/>
        <p> Berikut adalah langkah-langkah untuk menyetarakan rekasi redoks menggunakan metode bilangan oksidasi:</p>
        <ul>
          <li>Tentukan biloks semua unsur</li>
          <li>Identifikasi zat yang mengalami oksidasi dan reduksi</li>
          <li>Setarakan jumlah elektron yang dilepas dan diterima</li>
          <li>Lengkapi reaksi dengan ion-ion atau molekul lain yang diperlukan</li>
        </ul><br/>
        <h3>B. Metode Setengah Reaksi</h3><br/>
        <p>Berikut adalah langkah-langkah untuk menyetarakan rekasi redoks menggunakan metode setengah reaksi:</p>
        <ul>
          <li>Pisahkan reaksi menjadi setengah reaksi oksidasi dan reduksi</li>
          <li>Setarakan atom-atom selain H dan O</li>
          <li>Setarakan O dengan menambahkan H20 dan H dengan H (di medium asam)</li>
          <li>Setarakan muatan dengan menambahkan elektron</li>
          <li>Gabungkan kedua setengah reaksi</li>
        </ul><br/>
      </section>

      <h2>Contoh Soal Latihan Variatif</h2>
      <h3>1. Mengenali Jenis Sel Elektrokimia Berdasarkan Diagram Sel</h3>

      <section className="contoh-soal">
        <p><strong>Soal:</strong> Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)</p>
        <p>Tentukan</p>
        <ul>
          <li>Anoda dan katoda</li>
          <li>Reaksi yang terjadi pada masing-masing elektroda</li>
          <li>Arah aliran elektron</li>
          <li>Jenis sel (galvani atau elektrolisis)</li>
        </ul>
        <p><b>Mengenali Bagian-Bagian Sel</b></p>
        <p>Diagram sel yang kamu kasih itu menunjukkan sebuah sel volta (atau sel galvani). Nah, untuk ngebedain mana anoda dan katoda, kita bisa lihat dari notasi selnya:</p>
        <ul>
          <li><b>Anoda:</b> Bagian yang ditulis di sebelah kiri garis ganda (||). Dalam kasus ini, anoda adalah Zn(s).</li>
          <li><b>Katoda:</b> Bagian yang ditulis di sebelah kanan garis ganda (||). Jadi, katoda adalah Cu(s).</li>
        </ul>
        <p><b>Reaksi yang Terjadi</b></p>
        <ul>
          <li><b>Anoda (Zn):</b> Di sini terjadi oksidasi, artinya Zn melepaskan elektron dan berubah jadi ion Zn²⁺. Reaksi lengkapnya: Zn(s) → Zn²⁺(aq) + 2e⁻</li>
          <li><b>Katoda (Cu):</b> Di sini terjadi reduksi, artinya ion Cu²⁺ menangkap elektron dan berubah jadi logam Cu. Reaksi lengkapnya: Cu²⁺(aq) + 2e⁻ → Cu(s)</li>
        </ul>
        <p><b>Arah Aliran Elektron</b></p>
        <p>Elektron selalu mengalir dari anoda ke katoda. Jadi, dalam sel ini, elektron mengalir dari elektroda Zn menuju elektroda Cu melalui kawat penghantar di luar sel.</p>
        <p><b>Jenis Sel</b></p>
        <p>Seperti yang udah kita sebut tadi, sel ini adalah sel volta atau sel galvani. Sel volta adalah jenis sel elektrokimia yang mengubah energi kimia menjadi energi listrik. Ciri khasnya adalah reaksi redoks yang terjadi di dalam sel berlangsung secara spontan.</p>
        <p><b>Penjelasan Sederhana</b></p>
        <p>Bayangkan sel ini seperti sebuah baterai. Zn (yang jadi anoda) itu kayak sumber energi yang mau ngasih elektronnya. Elektron-elektron ini kemudian mengalir melalui kawat penghantar menuju Cu (yang jadi katoda). Saat sampai di katoda, elektron-elektron ini diterima oleh ion Cu²⁺ dan terjadilah reaksi pembentukan logam Cu. Nah, aliran elektron inilah yang menghasilkan arus listrik.</p>
        <p><b>Kenapa disebut sel volta?</b></p>
        <p>Nama "volta" diambil dari nama ilmuwan Italia, Alessandro Volta, yang pertama kali menemukan sel listrik ini.</p>
        <p><b>Jadi, kesimpulannya:</b></p>
        <p>Diagram sel Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) menggambarkan sebuah sel volta di mana:</p>
        <ul>
          <li>Zn adalah anoda dan mengalami oksidasi.</li>
          <li>Cu adalah katoda dan mengalami reduksi.</li>
          <li>Elektron mengalir dari Zn ke Cu.</li>
        </ul>
        <p><b>Penting untuk diingat:</b></p>
        <p>Garis ganda (||) pada diagram sel mewakili jembatan garam. Jembatan garam ini berfungsi untuk menjaga netralitas muatan di dalam sel dengan cara memungkinkan ion-ion bergerak bebas antara kedua setengah sel.</p>
      </section><br/>

      <h3>2. Menghitung Potensi Sel Menggunakan Data Potensial Standar Reduksi</h3>

      <section className="contoh-soal">
        <p><strong>Soal:</strong> Sebuah sel elektrokimia terdiri dari elektroda seng dan tembaga. Diketahui potensial sel standar adalah 1,10 V. Jika potensial reduksi standar untuk tembaga adalah +0,34 V, tentukan potensial reduksi standar untuk seng.</p>
        <p>Memahami Konsep</p>
        <p>Kita sudah tahu dari soal sebelumnya bahwa sel yang kita bahas adalah sel volta, di mana reaksi redoks terjadi secara spontan. Potensial sel (E°sel) adalah ukuran seberapa besar gaya dorong untuk reaksi redoks berlangsung.</p>
        <p><b>Data yang Kita Tahu</b></p>
        <ul>
          <li>E°sel = 1,10 V (potensial sel standar) </li>
          <li> E°Cu²⁺/Cu = +0,34 V (potensial reduksi standar untuk tembaga)</li>
        </ul>
        <p><b>Yang Ditanya</b></p>
        <ul>
          <li>E°Zn²⁺/Zn = ? (potensial reduksi standar untuk seng)</li>
        </ul>
        <p><strong>Cara Menghitung:</strong></p>
        <p>Untuk menghitung potensial reduksi standar untuk seng, kita bisa menggunakan rumus:</p>
        <p>E°sel = E°katoda - E°anoda</p>
        <p>Dalam sel kita, tembaga bertindak sebagai katoda (tempat reduksi terjadi) dan seng bertindak sebagai anoda (tempat oksidasi terjadi).</p>
        <p>Kita sudah tahu nilai E°sel dan E°katoda. Jadi, kita bisa mencari nilai E°anoda (yaitu E°Zn²⁺/Zn).</p>
        <p>1,10 V = +0,34 V - E°Zn²⁺/Zn</p>
        <p>Sekarang, kita tinggal memindahkan ruas untuk mencari nilai E°Zn²⁺/Zn:</p>
        <p>E°Zn²⁺/Zn = +0,34 V - 1,10 V</p>
        <p>E°Zn²⁺/Zn = -0,76 V</p>
        <p><b>Jadi, potensial reduksi standar untuk seng (Zn²⁺/Zn) adalah -0,76 V.</b></p>
        <p><b>Penjelasan Sederhana</b></p>
        <p>Bayangkan potensial reduksi standar sebagai ukuran "keinginan" suatu zat untuk menangkap elektron. Semakin positif nilainya, semakin besar keinginan zat tersebut untuk menangkap elektron (berarti mudah tereduksi). Sebaliknya, semakin negatif nilainya, semakin kecil keinginan zat tersebut untuk menangkap elektron (berarti mudah teroksidasi).</p>
        <p>Dalam sel kita, tembaga memiliki potensial reduksi yang lebih positif dibandingkan seng. Artinya, tembaga lebih "suka" menangkap elektron daripada seng. Karena itu, seng akan lebih mudah melepaskan elektron (teroksidasi) dan bertindak sebagai anoda.</p>
        <p><b>Kesimpulan</b></p>
        <p>Dengan mengetahui potensial sel standar dan potensial reduksi standar salah satu elektroda, kita dapat menghitung potensial reduksi standar elektroda lainnya. Hal ini sangat berguna untuk memprediksi apakah suatu reaksi redoks akan berlangsung secara spontan atau tidak.</p>
        <p><b>Catatan:</b></p>
        <ul>
          <li>Tanda negatif pada potensial reduksi standar seng menunjukkan bahwa seng lebih mudah teroksidasi daripada tereduksi.</li>
          <li>Nilai potensial reduksi standar ini bisa kita temukan dalam tabel potensial reduksi standar.</li>
        </ul>
      </section>

      <h3>3. Menganalisis Pengaruh Perubahan Konsentrasi atau Suhu terhadap Potensi Sel</h3>

      <section className="contoh-soal">
        <p><strong>Soal:</strong> Bagaimana perubahan konsentrasi ion Cu²⁺ dalam sel Cu-Zn akan mempengaruhi potensi sel? Jelaskan!</p>
        <p><strong>Bayangkan sel Cu-Zn seperti sebuah perlombaan lari estafet:</strong></p>
        <ul>
          <li><b>Elektron:</b> adalah pelari estafet yang membawa energi.</li>
          <li><b>Elektroda Cu dan Zn:</b> adalah tempat start dan finish.</li>
          <li><b>Larutan CuSO₄ dan ZnSO₄:</b> adalah lintasan lari yang berisi penonton (ion-ion).</li>
        </ul><br/>
        <p><strong>Konsentrasi ion Cu²⁺ itu seperti jumlah penonton di garis finish.</strong></p>
        <ul>
          <li>Jika konsentrasi ion Cu²⁺ tinggi, artinya ada banyak banget penonton di garis finish. Para elektron yang sudah capek lari dari elektroda Zn jadi semangat lagi karena melihat banyak penonton. Mereka langsung buru-buru nyebrang ke elektroda Cu. Akibatnya, potensi sel jadi lebih besar.</li>
          <li>Sebaliknya, kalau konsentrasi ion Cu²⁺ rendah, penonton di garis finish jadi sedikit. Elektron-elektron jadi malas nyebrang karena nggak ada yang menyambut. Akibatnya, potensi sel jadi lebih kecil.</li>
        </ul>
        <p><strong>Kenapa bisa begitu?</strong></p>
        <p>Ini karena elektron itu suka tempat yang sepi. Kalau di tempat tujuan (elektroda Cu) sudah terlalu ramai (konsentrasi ion Cu²⁺ tinggi), mereka jadi nggak semangat buat pindah. Tapi kalau di tempat tujuan masih sepi (konsentrasi ion Cu²⁺ rendah), mereka jadi semangat buat pindah.</p>
        <p><strong>Intinya:</strong></p>
        <p>Semakin tinggi konsentrasi ion Cu²⁺, semakin besar potensi sel. Sebaliknya, semakin rendah konsentrasi ion Cu²⁺, semakin kecil potensi sel.</p>
        <p><strong>Contoh dalam kehidupan sehari-hari:</strong></p>
        <p>Bayangkan kamu lagi main tarik tambang. Kalau tim lawan (ion Cu²⁺) jumlahnya banyak dan semangat, kamu jadi susah narik. Tapi kalau tim lawan jumlahnya sedikit dan lemas, kamu jadi lebih gampang narik.</p>
        <p><strong>Kesimpulan:</strong></p>
        <p>Perubahan konsentrasi ion Cu²⁺ punya pengaruh yang signifikan terhadap potensi sel. Ini karena konsentrasi ion mempengaruhi semangat elektron untuk berpindah dari satu elektroda ke elektroda lainnya.</p>
      </section>
 
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma12b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>
      
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma12b1")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma12b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;