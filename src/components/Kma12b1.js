import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma12b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Sifat Koligatif Larutan</h1>
      <p>
          Sifat koligatif larutan adalah sifat larutan yang hanya bergantung pada jumlah partikel zat terlarut, 
          bukan pada jenis zat terlarut itu sendiri. Sifat koligatif mencakup:
        </p>
        <ul>
          <li>Penurunan tekanan uap (ΔP)</li>
          <li>Peningkatan titik didih (ΔTb)</li>
          <li>Penurunan titik beku (ΔTf)</li>
          <li>Tekanan osmotik (π)</li>
        </ul>
        <img 
          src="https://th.bing.com/th/id/OIP.KnCHtp5zZylDUYm0xJ3-dQHaFj?w=960&h=720&rs=1&pid=ImgDetMain" 
          alt="Diagram Sifat Koligatif" 
          className="section-image" 
        />

      <section>
        <h2>1. Penurunan Tekanan Uap</h2>
        <p>
          Ketika zat terlarut ditambahkan ke pelarut, tekanan uap pelarut murni akan berkurang. Hal ini dikarenakan 
          partikel zat terlarut menghalangi molekul pelarut untuk menguap.
        </p>
        <p><strong>Rumus:</strong> ΔP = X₂ * P⁰</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔP = Penurunan tekanan uap</li>
          <li>X₂ = Fraksi mol zat terlarut</li>
          <li>P⁰ = Tekanan uap pelarut murni</li>
        </ul>
        <p>
          Ketika kamu mengisi botol minum dengan air panas, botol tersebut juga terisi uap. Tapi, kejadian itu tidak berlangsung lama. RG Squad tahu kenapa? Kejadian itu akibat dari adanya proses penguapan dan penurunan tekanan uap. Untuk memahami fenomenanya, lebih baik kamu simak terlebih dahulu pengertian tekanan uap pada pelarut murni. Selain itu juga pelajari besarnya tekanan uap yang dipengaruhi oleh penambahan zat terlarut ke dalam pelarut murni. Simak terus!
        </p><br/>
        <h3>A. Tekanan uap Pelarut Murni (Po)</h3>
        <br/>
        <div className="image-container">
          <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Penurunan%20tekanan%20uap%201.jpg" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="section-image" 
          />
          <p>Di awal terjadi perpindahan partikel dari fase cair ke gas, namun akhirnya terjadi keseimbangan dengan perpindahan partikel dari fase gas ke fase cair.</p>
        </div>
        <p>
        Coba kamu perhatikan, boleh juga sambil memperagakan ya. Jika pelarut murni dimasukkan ke dalam suatu tempat tertutup, maka akan terjadi perpindahan partikel dari fase cair ke fase gas, dan juga sebaliknya. Jumlah partikel pelarut murni pada fase gas memberikan suatu tekanan yang disebut tekanan uap. Setelah beberapa waktu, jumlah partikel pelarut murni yang melepaskan diri dari fase cair ke fase gas, sama dengan jumlah partikel pelarut murni di fase gas yang terperangkap di permukaan fase cair. Di saat keadaan seperti ini, dapat dikatakan bahwa kesetimbangan dinamis telah tercapai. Secara umum, tekanan uap dapat didefinisikan sebagai berikut:
        </p><br/>
        <h3>B. Tekanan uap larutan</h3>
        <p>Apabila ke dalam pelarut murni di atas ditambahkan sejumlah zat terlarut, apa yang akan terjadi pada nilai tekanan uap larutan?</p>
        <br/>
        <div>
          <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Penurunan%20tekanan%20uap%202.jpg" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="section-image" 
          />
          <p>Proses tekanan uap larutan.</p>
        </div>
        <p>
          Dari penjelasan di atas, bisa lihat bahwa tekanan uap larutan ternyata lebih kecil dibandingkan tekanan uap pelarut murninya. Inilah sebenarnya yang dimaksud dengan penurunan tekanan uap (∆P) larutan.
        </p><br/>
        <p>Dengan demikian, penurunan tekanan uap larutan (∆P) data ditulis sebagai:</p>
        <img 
            src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/mata%20pelajaran%20rgdb.png" 
            alt="Proses Terjadinya Penurunan Tekanan Uap" 
            className="section-image" 
          />
          <p><b>Sekarang teman-teman semua sudah paham kan kenapa botol yang diisi air panas bisa menguap dan tidak lama kemudian uapnya hilang? Mau memahami konsep kimia lainnya? Nonton video disini yuk dan jadikan #BelajarJadiMudah!</b></p>
      </section>

      <section>
        <h2>2. Peningkatan Titik Didih</h2>
        <p>
          Titik didih larutan meningkat saat zat terlarut ditambahkan karena diperlukan lebih banyak energi untuk 
          menguapkan larutan dibandingkan pelarut murni.
        </p>
        <p><strong>Rumus:</strong> ΔTb = Kb * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔTb = Kenaikan titik didih</li>
          <li>Kb = Konstanta pendidihan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
        <img 
          src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/kenaikan%20titik%20didih-1.png" 
          alt="Diagram Sifat Koligatif" 
          className="section-image" 
        />
        <h3>A. Pengertian Kenaikan Titik Didih</h3>
        <p>
          <b>Titik didih adalah suhu pada saat tekanan uap jenuh suatu cairan sama dengan tekanan udara di sekitarnya.</b> Titik didih ini dapat mengalami kenaikan bila ditambahkan zat terlarut ke dalam larutan yang kemudian dikenal dengan istilah kenaikan titik didih.
          Jadi, kenaikan titik didih adalah selisih antara titik didih larutan dengan titik didih pelarut. Dalam kimia, kenaikan titik didih ini dinyatakan dengan simbol ΔTb (Tb berasal dari kata boiling).
        </p><br/>
        <h3>B. Proses Kenaikan Titik Didih</h3>
        <p>Titik didih suatu zat cair akan tercapai jika tekanan uap jenuh zat cair tersebut sama dengan tekanan udara di sekitarnya. Jika air murni dipanaskan pada tekanan 1 atm (760 mmHg), maka air tersebut akan mendidih pada suhu 100°C.</p>
        <br/>
        <p>Lalu, bagaimana jika pada suhu yang sama dilarutkan gula? Apakah titik didihnya masih sama? Tentu berbeda, ya.</p>
        <br/>
        <p>Hal ini dikarenakan, pada suhu yang sama dilarutkan gula akan membuat tekanan uap air menurun atau belum mencapai 760 mmHg. Itu artinya, semakin banyak gula yang dilarutkan, maka semakin banyak penurunan tekanan uapnya.</p>
        <br/>
        <p>Akibatnya, larutan gula belum mendidih pada suhu 100°C. Bagaimana agar larutan gula dapat mendidih?</p>
        <br/>
        <p>Agar larutan gula cepat mendidih, diperlukan suhu yang cukup tinggi sehingga tekanan uap jenuhnya sama dengan tekanan uap di sekitarnya. Sebab, pada kondisi tersebut, tekanan uap telah mencapai 760 mmHg.</p>
        <br/>
        <p>Ini artinya, titik didih larutan lebih tinggi daripada titik didih pelarut murninya. Selisih antara titik didih larutan dengan titik didih pelarut murni disebut kenaikan titik didih ΔTb.</p>
        <br/>

        <h3>C. Rumus Kenaikan Titik Didih</h3>
        <p>Adapun rumus kenaikan titik didih larutan adalah sebagai berikut.</p>
        <p><strong>Rumus:</strong> ΔTb = Tb° - Tb</p>
        <p><b><br/>
        Keterangan :
        </b></p><br/>
        <p>
        ΔTb = kenaikan titik didih larutan
        </p><br/>
        <p>
        Tb° = titik didih pelarut murni (air)
        </p><br/>
        <p>
        Tb = titik didih larutan
        </p><br/>
        <p>
        Kenaikan titik didih hanya tergantung pada jenis pelarut dan molaritas larutan, tidak tergantung pada jenis zat terlarut.
        </p><br/>
        <p>
        Jika ditambahkan zat terlarut yang tidak mudah menguap, misalnya gula, maka dibutuhkan kenaikan titik didih yang cukup besar agar dapat mendidih. Sebaliknya, jika ditambahkan zat terlarut yang mudah menguap, misalnya etanol, maka kenaikan titik didihnya lebih rendah karena larutan dapat mendidih di bawah titik didih air.
        </p><br/>
        <p>
        Untuk larutan encer, hubungan antara kenaikan titik didih dengan molaritas larutan dinyatakan dengan rumus sebagai berikut.
        </p>
        <p><strong>Rumus:</strong> ΔTb = Kb . m</p>
        <p><br/>
        Jika dijabarkan, maka rumus hubungan antara kenaikan titik didih dengan molaritas larutan ini akan terlihat seperti berikut ini.
        </p>
        <p><strong>Rumus:</strong> ΔTb = Kb × <span>massa</span> / <span>Mr</span> × 1000 / P</p>
        <p><b><br/>
        Keterangan :
        </b></p>
        <div>
        <div className="keterangan">
          <ul>
            <li>massa = massa zat terlarut (gram)</li>
            <li>Mr = massa molekul relatif zat terlarut</li>
            <li>P = massa pelarut (gram)</li>
            <li>Kb = tetapan kenaikan titik didih molal (°C m-1)</li>
            <li>m = molalitas larutan (m)</li>
          </ul>
        </div>
      </div>
      <p>
      Perlu diketahui, bahwa pada beberapa jenis pelarut, kenaikan titik didihnya sudah ditetapkan. Dengan begitu, kamu dapat menentukan titik didih suatu larutan, konsentrasi larutan, dan massa molekul relatif dengan lebih mudah. Berikut daftar pelarutnya.
      </p>

      <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Pelarut</th>
            <th>Titik Didih (°C)</th>
            <th>Kb (°C m-1)</th>
          </tr>
        </thead>
      </table>
    </div>

      <h3>D. Penerapan Kenaikan Titik Didih</h3>
      <p>
        Berikut adalah beberapa contoh penerapan kenaikan titik didih dalam kehidupan sehari-hari
      </p>
      <p><b><br/>
      Memasak menggunakan garam
      </b></p>
      <p>
      Menambahkan garam ke dalam masakan ternyata tidak hanya menambah cita rasa masakan saja, Quipperian, tetapi juga dapat meningkatkan titik didih air. Hal ini dikarenakan, garam yang ditambahkan ke dalam air akan terdisosiasi menjadi ion natrium dan klorida. Semakin banyak garam yang ditambahkan, maka semakin tinggi kenaikan titik didih air.
      </p><br/>
      <p>
      Penambahan garam ini akan membuat air mendidih dalam waktu yang cukup lama. Cara ini bermanfaat saat kamu memasak makanan yang membutuhkan waktu lama untuk matang seperti daging. Dengan begitu, air tidak lebih dulu mendidih.
      </p><br/>

      <p><b>
      Susu yang Didihkan
      </b></p>
      <p>
      Pernahkah kamu bertanya-tanya mengapa susu dengan suhu rendah lebih lama mendidih dibandingkan air? Hal ini disebabkan, susu mengandung lemak, protein, dan bahan lainnya yang tidak mudah meluap sehingga dibutuhkan suhu yang tinggi untuk mendidihkan susu. Ingat, semakin sulit zat terlarut menguap, maka semakin tinggi kenaikan didih yang dibutuhkan.
      </p><br/>

      <p><b>
      Mendidihkan air di Pegunungan
      </b></p>
      <p>
      Tahukah kamu, kalau mendidihkan air di pegunungan lebih cepat daripada di dataran rendah? Hal ini dikarenakan, pegunungan termasuk dataran tinggi di mana pada kondisi ini uap air akan lebih cepat menguap karena tekanan udara di pegunungan yang rendah.
      </p><br/>
      <p>
      Alhasil, ketika dididihkan, molekul air akan lebih mudah terlepas ke udara menjadi uap. Itulah mengapa, air lebih cepat mendidih ketika dididihkan di dataran tinggi seperti pegunungan ini.
      </p><br/>
      <p>
      Dengan kata lain, titik didih air di pegunungan lebih rendah daripada di dataran rendah.
      </p><br/>
      </section>

      <section className="contoh-soal-ionisasi">
          <h3>Contoh Soal Kenaikan Titik Didih</h3><br/>
          <p><strong>Soal:</strong> Tentukan kenaikan titik didih larutan gula 0,2 molal jika Kb air = 0,52 °C molal-1</p><br/>
          <p><strong>Penyelesaian:</strong></p><br/>
          <p>
          Bayangin kita lagi bikin teh manis. Kita tahu kalau air murni mendidih di suhu 100°C. Tapi, kalau kita tambahin gula, ternyata airnya jadi lebih lama mendidih. Nah, inilah yang disebut kenaikan titik didih.
          </p><br/>
          <p>
          Kenapa bisa gitu?
          Karena adanya partikel gula yang ngeganggu molekul-molekul air buat menguap. Jadi, buat bikin air gula mendidih, kita butuh suhu yang lebih tinggi dibanding air murni.
          </p><br/>
          <p><strong>Sekarang, kita kembali ke soal:</strong></p><br/>
          <p>
            Kita punya larutan gula dengan konsentrasi 0,2 molal. Artinya, dalam 1 kg air, ada 0,2 mol gula. Kita juga udah dikasih tahu nilai Kb air, yaitu 0,52 °C/molal. Kb ini kayak semacam "konstanta" yang nunjukin seberapa besar kenaikan titik didih suatu pelarut kalau kita larutin 1 mol zat terlarut di dalamnya.
          </p><br/>
          <p><strong>Rumus yang kita pakai:</strong></p><br/>
          <p>
          ΔTb = Kb . m
          </p><br/>
          <p><strong>Yuk kita hitung:</strong></p><br/>
          <p>
          ΔTb = 0,52 °C/molal x 0,2 molal
          </p><br/>
          <p>
          Nah, molal sama molal bisa kita coret, jadi tinggal:
          </p><br/>
          <p>
          ΔTb = 0,104 °C
          </p><br/>
          <p><strong>Artinya apa nih?</strong></p><br/>
          <p>
          Berarti, kalau kita larutin gula sebanyak itu ke dalam air, titik didih larutannya akan naik sebesar 0,104°C. Jadi, kalau air murni mendidih di 100°C, maka larutan gula kita akan mendidih di suhu 100,104°C.
          </p><br/>
        </section>
    


      <section>
        <h2>3. Penurunan Titik Beku</h2>
        <p>
          Titik beku larutan berkurang saat zat terlarut ditambahkan. Ini menyebabkan larutan membeku pada suhu lebih 
          rendah daripada pelarut murni.
        </p>
        <p><strong>Rumus:</strong> ΔTf = Kf * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>ΔTf = penurunan titik beku larutan</li>
          <li>Kf = Konstanta pembekuan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
        <img 
          src="https://www.quipper.com/id/blog/wp-content/uploads/2023/03/ice-cubes-table_144627-8764.webp" 
          alt="Penurunan Titik Beku" 
          className="section-image" 
        />
        <h3>A. Pengertian Penurunan Titik Beku</h3>
        <p>Titik beku adalah suhu dari tekanan tertentu saat terjadi perubahan wujud zat dari cair menjadi padat. Titik beku ini bisa mengalami penurunan atau disebut dengan penurunan titik beku ketika adanya penambahan zat terlarut ke dalam sebuah larutan</p>
        <br/>
        <p>Penurunan titik beku adalah selisih antara titik beku pelarut dengan titik beku larutan. Penurunan titik beku ini termasuk salah satu sifat koligatif larutan. </p>
        <br/>
        <p>Dalam perhitungan kimia, penurunan titik beku disimbolkan dengan ΔTf (f berasal dari kata freeze) atau ΔTb . Peristiwa penurunan titik beku ini sering diterapkan pada negara-negara yang memiliki musim dingin. </p>
        <br/>

        <h3>B. Proses Penurunan Titik Beku</h3>
        <p>Agar lebih mudah memahami proses penurunan titik beku, coba perhatikan saat orang membuat es puter. </p>
        <br/>
        <p>Pada pembuatan es puter, adonan es puter akan ditempatkan pada sebuah wadah yang terendam es batu dan air yang telah diberi garam dapur sambil diputar-putar. Tujuannya adalah agar adonan es puter bisa membeku. </p>
        <br/>
        <p>Proses pembuatan es puter ini sebenarnya sama dengan proses penurunan titik beku. Perlu diketahui, titik beku air murni pada tekanan 760 mmHg adalah 0℃. </p>
        <br/>
        <p>Berhubung, adonan es puter ini bukan lagi berbentuk air murni karena sudah ditambahkan berbagai bahan pembuatan es puter sehingga diperlukan suhu yang lebih dingin untuk membekukannya. </p>
        <br/>
        <p>Dengan kata lain, titik bekunya harus diturunkan lagi. Sebab, jika tekanan uap larutan yang dalam hal ini adalah bahan-bahan pembuat es puter lebih rendah dibandingkan tekanan uap pelarut (air), maka larutan tidak akan membeku pada suhu 0℃. Adonan es puter akan membeku ketika berada pada suhu di bawah 0℃.</p>
        <br/>
        <p>Jadi, intinya proses penurunan titik beku ini terjadi apabila suhu berada di bawah 0℃ untuk air murni, tetapi jika dalam bentuk larutan, contohnya seperti adonan es puter ini, suhu harus berada di bawah 0℃ agar adonan es bisa membeku. </p>
        <br/>
        
        <h3>C. Rumus Penurunan Titik Beku</h3>
        <p>Untuk mengetahui penurunan titik beku larutan, kamu dapat menghitungnya dengan rumus penurunan titik beku berikut ini. </p>
        <br/>
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>ΔTf = penurunan titik beku larutan</p>
        <br/>
        <p>Tf° = titik beku pelarut murni (air)</p>
        <br/>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>Titik beku tidak bergantung pada jenis zat terlarut, tetapi tergantung pada konsentrasi atau jumlah partikel zat terlarut dalam larutan. Semakin besar konsentrasi larutan, maka semakin besar penurunan titik bekunya. Coba perhatikan diagram berikut ini. </p>
        <br/>
        <img 
          src="https://cdn.utakatikotak.com/20170422/20170422_092354diagram-fase-penurunan-titik-beku.jpg" 
          alt="Penurunan Titik Beku" 
          className="section-image" 
        />
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>Tf° = titik beku pelarut murni (air)</p>
        <br/>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>ΔTf = Tf° – Tf = penurunan titik beku larutan</p>
        <br/>
        <p>Dari diagram di atas, dapat diketahui bahwa penurunan titik beku berbanding lurus dengan kemolalan larutan. Hubungan antara titik beku larutan dan kemolalan ini dapat dituliskan pada rumus berikut ini. </p>
        <br/>
        <p>Jika dijabarkan, maka rumus hubungan antara titik beku larutan dan kemolalan ini akan terlihat seperti berikut ini. </p>
        <br/>
        <p><strong>Rumus:</strong> ΔTf = Kf × <span>massa</span> / <span>Mr</span> × 1000 / P</p>
        <p><b><br/>
        Keterangan :
        </b></p>
        <p>Tf = titik beku larutan</p>
        <br/>
        <p>Mr = massa molekul relatif zat terlarut </p>
        <br/>
        <p>P = massa pelarut (gram)</p>
        <br/>
        <p>Kf = tetapan penurunan titik beku molal (℃ m-1)</p>
        <br/>
        <p>m = molalitas larutan (m)</p>
        <br/>
        <p>Beberapa pelarut ada yang sudah ditentukan harga tetapan penurunan titik bekunya (Kf). Berikut daftar pelarutnya. </p>
        <br/>
        <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Pelarut</th>
            <th>Titik Beku (°C)</th>
            <th>Kf (°C m⁻¹)</th>
          </tr>
        </thead>
      </table>
    </div>

        <h3>D. Penerapan Penurunan Titik Beku</h3>
        <p>Penurunan titik beku ini cukup sering digunakan dalam kehidupan sehari-hari. Mulai dari pembuatan makanan hingga kendaraan. </p>
        <br/>
        <p>Berikut adalah beberapa contoh penerapan penurunan titik beku dalam kehidupan sehari-hari. </p>
        <br/>
          <h4>1. Pembuatan es krim</h4>
          <p>Selain es puter, penurunan titik beku juga diterapkan dalam pembuatan es krim. Caranya sama, yaitu dengan menambahkan garam pada es agar suhu menjadi turun. </p>
            <br/>
            <p>Jika suhu tidak diturunkan atau tetap pada besaran 0℃, maka air yang terdapat dalam adonan es krim akan lebih cepat membeku. Alhasil, tekstur es krim pun menjadi keras. </p>
            <br/>
            <p>Namun, jika suhu diturunkan di bawah titik beku air dengan cara menambahkan garam pada es, lalu ditambahkan pengemulsi es krim (whipping cream atau SP) ke dalam adonan, maka akan menghasilkan es krim yang lembut. </p>
         
          <h4>2. Mencairkan salju di jalanan</h4>
          <p>Musim dingin selalu identik dengan salju dan udara dingin. Salju yang turun terlalu lebat ini dapat menyebabkan jalanan tertutup es sehingga membuat kendaraan tidak dapat melintasi jalanan tersebut. </p>
            <br/>
            <p>Salah satu cara mengatasinya adalah dengan mencairkan salju di jalanan tersebut menggunakan garam. Hal ini akan membuat larutan air pada es dan garam memiliki titik beku yang lebih rendah daripada air murni karena penurunan titik beku larutan. </p>
            <br/>
            <p>Air biasanya akan membeku pada suhu 0°C, tetapi ketika ditambahkan garam, suhunya akan turun. Semakin tinggi konsentrasi garam, maka semakin rendah titik beku air. </p>
          <h4>3. Antibeku pada radiator mobil</h4>
          <p>Musim dingin tidak hanya membuat udara menjadi dingin dan jalanan ditutupi salju saja, tapi juga dapat menyebabkan air radiator mobil menjadi lebih cepat beku. Jika dibiarkan saja, maka radiator mobil akan cepat rusak. </p>
            <br/>
            <p>Sebagai tindakan pencegahan, biasanya ditambahkan etilen glikol ke dalam air radiator sehingga titik beku air dalam radiator menurun. Dengan kata lain, air jadi tidak mudah membeku. </p>
          <h4>4. Air laut</h4>
          <p>Ketika musim dingin, air laut tidak membeku secara menyeluruh. Hal ini dikarenakan kandungan garam yang terdapat di dalam air laut sehingga membuat suhu air laut berada di bawah titik beku air murni. </p>
          <br/>
          <section className="contoh-soal-ionisasi">
          <h3>Contoh Soal Penurunan Titik Beku</h3><br/>
          <p><strong>Soal:</strong> Suatu larutan dibuat dengan cara melarutkan 3 gram urea CO(NH2)2 dalam 100 gram air. (Kf air = 1,86 °C/m Ar C = 12, O = 16, N = 14, H = 1). Tentukan penurunan titik bekunya. </p><br/>
          <p><strong>Apa yang diketahui dari soal?</strong></p>
          <div className="keterangan">
            <ul>
              <li>Kita punya urea (bayangin aja kayak pupuk tanaman) yang dilarutkan dalam air.</li>
              <li>Jumlah urea-nya 3 gram, dan airnya 100 gram.</li>
              <li>Kita juga dikasih tahu nilai Kf air (konstanta penurunan titik beku) yang nilainya 1,86 °C/m. Kf ini kayak semacam angka ajaib yang udah ditentukan untuk setiap pelarut.</li>
            </ul>
          </div>
          <p><strong>Apa yang mau kita cari?</strong></p>
          <p>
          Kita mau tahu berapa derajat penurunan titik beku larutan urea kita.
          </p><br/>
          <p><strong>Cara ngerjainnya:</strong></p><br/>
          <p><b>
          1. Hitung Mr urea:
          </b></p>
          <p>Mr itu kayak berat molekul dari suatu zat. Jadi, kita hitung dulu berapa berat molekul urea. Caranya tinggal jumlahkan aja massa atom dari semua unsur yang ada di urea. Udah dihitung di soal, ternyata Mr urea itu 60.</p>
          <p><b><br/>
          2. Hitung penurunan titik beku (ΔTf):
          </b></p>
          <p>Kita punya rumus: ΔTf = Kf x (massa zat terlarut / Mr zat terlarut) x (1000 / massa pelarut)</p>
          <div className="keterangan">
            <ul>
              <li>Kf: Udah dikasih di soal, yaitu 1,86 °C/m.</li>
              <li>massa zat terlarut: Ini adalah massa urea yang kita larutkan, yaitu 3 gram.</li>
              <li>Mr zat terlarut: Ini yang tadi udah kita hitung, yaitu 60.</li>
              <li>massa pelarut: Ini adalah massa airnya, yaitu 100 gram.</li>
            </ul>
          </div>
          <p>Kalau kita masukin semua angka ke rumus, kita dapat hasil ΔTf = 0,93 °C. Artinya, titik beku larutan urea kita turun sebesar 0,93 derajat Celcius dibandingkan dengan titik beku air murni (yang biasanya 0°C).</p>
          <p><b><br/>
          3. Hitung titik beku larutan:
          </b></p>
          <p>Karena titik beku turun 0,93 °C, berarti titik beku larutan urea kita adalah 0°C - 0,93°C = -0,93°C.</p><br/>
          <p><strong>Jadi kesimpulannya:</strong></p>
          <p>
          Kalau kita larutkan 3 gram urea dalam 100 gram air, titik beku larutannya akan menjadi -0,93°C. Artinya, kita perlu suhu yang lebih dingin dari 0°C untuk membekukan larutan ini.
          </p><br/>
        </section>
      </section>

      <section>
        <h2>4. Tekanan Osmotik</h2>
        <p>
          Tekanan osmotik terjadi ketika ada perbedaan konsentrasi antara dua larutan yang dipisahkan oleh membran semi-permeabel. 
          Tekanan ini dihasilkan oleh aliran pelarut melalui membran menuju larutan dengan konsentrasi yang lebih tinggi.
        </p>
        <p><strong>Rumus:</strong> π = MRT</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>π = Tekanan osmotik</li>
          <li>M = Molaritas larutan</li>
          <li>R = Konstanta gas ideal (0.0821 L·atm/K·mol)</li>
          <li>T = Temperatur dalam Kelvin</li>
        </ul>

            <p>
              Tekanan osmotik adalah tekanan yang diperlukan untuk menghentikan aliran pelarut melalui membran semi-permeabel. 
              Ini sangat penting dalam proses biologis dan industri.
            </p>
          
       
          <img 
            src="https://cdn.utakatikotak.com/20200504/20200504_041741tekanan_osmosis.png" 
            alt="Penurunan Titik Beku" 
            className="section-image" 
          />
        
        <h3>A. Apa yang Dimaksud dengan Tekanan Osmotik?</h3>
        <p>Tekanan osmotik adalah sifat ‘koligatif’, seperti penurunan titik beku, yang berarti bergantung pada jumlah partikel dalam larutan tetapi tidak bergantung pada identitas kimianya. </p>
        <br/>
        <p>Tekanan osmotik secara sederhana dapat dijelaskan sebagai tekanan minimum pada larutan untuk mencegah aliran molekul pelarut melalui membran semipermeabel.</p>
        <br/>
        <p>Membran semipermeabel memiliki pori-pori kecil yang memungkinkan pergerakan pelarut antara dua larutan yang berbeda. </p>
        <br/>
        <p>Setiap larutan secara alami akan memiliki tingkat konsentrasi yang berbeda, dan tekanan osmotik yang diperlukan untuk mencegah aliran pelarut akan berbeda pula</p>
        <br/>
        <p>Tekanan osmotik tidak diciptakan oleh larutan tetapi muncul ketika larutan dipisahkan dari pelarut oleh membran semipermeabel.</p>
        <br/>
        <p>Jika tekanan yang diterapkan pada larutan lebih besar dari tekanan osmotik larutan, maka pelarut mulai berpindah dari larutan ke pelarut. Fenomena ini disebut reverse osmosis. Proses ini digunakan untuk pemurnian air laut dan air keras.</p>
        <br/>
        <p>Cara kerja tekanan osmotik dapat digambarkan dengan mudah melalui gambaran dari tiga taabung di bawah ini.</p>
        <br/>
        <p>
        1. Bagian kiri tabung U berisi larutan berair, dan bagian kanan terdiri dari air murni. 
        </p>
        <p>
        2. Di sini, air murni mencoba mengencerkan larutan dengan menembus membran semipermeabel tetapi berat yang ditambahkan oleh air pada tabung kiri menimbulkan tekanan untuk menahan osmosis.
        </p>
        <p>
        3. Ini berlangsung sampai keseimbangan dipertahankan.
        </p>
        <p>
        4. Sekarang untuk mencapai tekanan osmotik, tingkatkan tekanan hidrostatik pada sisi larutan membran. Ini kemudian menekan molekul pelarut lebih dekat, meningkatkan kecenderungan untuk melarikan diri.
        </p>
        <p>
        5. Kecenderungan keluarnya larutan ini dapat ditingkatkan sampai menjadi sama dengan molekul dalam pelarut murni.
        </p>
        <p>
        6. Dan pada titik ini, osmosis akan berhenti. Tekanan osmotik adalah tekanan yang diperlukan untuk mencapai keseimbangan osmotik.
        </p><br/>
        
        <h3>B. Apa Manfaat dari Tekanan Osmotik?</h3>
        <p>Tekanan osmotik memiliki keuntungan untuk mengetahui massa molar dibandingkan sifat koligatif lainnya.</p>
        <br/>
        <p>Hal ini  dikarenakan pengukuran tekanan berada di sekitar suhu kamar dan molaritas digunakan sebagai pengganti molalitas</p>
        <br/>
        <p>Dibandingkan dengan sifat koligatif lainnya, besarnya tekanan osmotik cukup besar bahkan untuk larutan encer.</p>
        <br/>
        <p>Teknik tekanan osmotik untuk penentuan massa molar zat terlarut sangat berguna untuk biomolekul karena umumnya tidak stabil pada suhu yang lebih tinggi dan polimer memiliki kelarutan yang buruk.</p>
        <br/>

        <h3>C. Apa Faktor yang Mempengaruhi Tekanan Osmotik?</h3>
        <p>Faktor-faktor yang mempengaruhi tekanan osmotik adalah konsentrasi dan suhu zat terlarut.</p>
        <br/>
        <p>Konsentrasi zat terlarut adalah jumlah partikel zat terlarut dalam satuan volume larutan yang secara langsung menentukan tekanan osmotik potensialnya.</p>
        <br/>
        <p>Sedangkan pada suhu, tekanan osmotik akan meningkat apabila suhunya juga ikut meningkat</p>
        <br/>

        <h3>D. Seberapa Penting Tekanan Osmotik dalam Tubuh?</h3>
        <p>Tekanan osmotik penting dalam tubuh manusia untuk menjaga cairan dalam tubuh. Ketika kita memiliki asupan air yang cukup, air mengalir melalui aliran darah dan berdifusi ke dalam sel melalui osmosis. </p>
        <br/>
        <p>Namun, jika asupan air kurang, maka air di dalam tubuh kita akan berpindah ke dalam darah sehingga meningkatkan konsentrasi garam dalam tubuh kita. Kondisi ini secara langsung dapat mempengaruhi fungsi sel sehingga menyebabkan dehidrasi. </p>
        <br/>
        <p>Jumlah tekanan osmotik yang tepat terjadi ketika ada asupan air yang cukup, sehingga menghasilkan gaya hidup sehat.</p>
        <br/>
        <p>Contoh lain tekanan osmotik dalam tubuh adalah di tubulus ginjal, penurunan/penurunan tekanan osmotik menyebabkan penurunan produksi hormon antidiuretik (ADH)/Vasopressin. </p>
        <br/>
        <p>Hal ini menurunkan permeabilitas tubulus kontortus distal dan saluran pengumpul terhadap air. Lebih sedikit air yang diserap kembali menghasilkan ekskresi urin encer dalam jumlah besar. </p>
        <br/>
        <p>Penurunan tekanan osmotik seperti itu dapat terjadi karena penyerapan air dalam jumlah besar atau dalam cuaca dingin saat keringat tidak terjadi.</p>
        <br/>

        <h3>E. Contoh Tekanan Osmotik dalam Kehidupan Sehari-hari</h3>
        <p>Apa saja contoh penerapan tekanan osmotik di kehidupan sehari-hari? Berikut ini beberapa contoh yang ada atau sering kamu alami, seperti:</p>
        <br/>
        <p>
        1. Terlalu lama berendam di bak mandi menyebabkan jari-jari mengkerut atau disebut  pruning.
        </p>
        <p>
        2. Percikan garam pada cacing tanah menyebabkan sel-selnya mengalami dehidrasi sehingga membuat cacing terdesak dan muncul ke permukaan.
        </p>
        <p>
        3. Proses pengawetan selai dan jeli yang menggunakan gula dalam jumlah banyak akan membantu membunuh bakteri. Hal ini dikarenakan larutan gula memiliki konsentrasi tinggi. 
        </p><br/>
        <h3>F. Apa rumus tekanan osmotik?</h3><br/>
        <p>
        Tekanan osmotik dapat dihitung dengan menggunakan rumus:
        </p>
        <p><strong>Rumus:</strong>  π = icRT</p>
        <p>
        Rumus ini dapat diterapkan untuk menghitung tekanan osmotik ketika larutan dianggap ideal, yaitu ketika konsentrasi zat terlarut rendah. 
        </p><br/>
        <p>
        Dalam rumus, c adalah konsentrasi molar zat terlarut, yaitu jumlah awal atom, ion, atau molekul yang ada dalam zat terlarut. Khususnya, jumlah partikel menentukan interaksi mereka dalam osmosis. 
        </p><br/>
        <p>
        R adalah tetapan gas ideal. Dalam hal ini, itu juga mengacu pada cairan seperti air. T mengacu pada suhu di Kelvin. 
        </p><br/>
        <p>
        Tekanan osmotik suatu larutan dapat ditingkatkan dengan menaikkan suhunya. Suhu, dalam skenario ini, mengacu pada ukuran energi dalam molekul. 
        </p><br/>
        <p>
        Tekanan osmotik suatu larutan dapat ditingkatkan dengan meningkatkan jumlah molekul zat terlarut. 
        </p><br/>
        <p>
        Maka, untuk menghitung tekanan osmotik larutan dapat menggunakan rumus: <b>π = MRT</b>, di mana M adalah molaritas larutan.
        </p><br/>
        <p>
        Rumus lain untuk menghitung tekanan osmotik adalah <b>π = n/VRT</b> dengan V adalah volume air.
        </p><br/>
      </section>

      <section className="contoh-soal-ionisasi">
          <h3>Contoh soal tekanan osmotik</h3><br/>
          <p><strong>Soal:</strong> Satu mol garam meja dilarutkan ke dalam air dengan volume satu liter. Pada suhu 270C. Tentukan tekanan osmotik larutan tersebut. </p><br/>
          <p>
          <b>Bayangkan kita punya gelas berisi air.</b> Terus, kita tambahin garam dapur (NaCl) ke dalam air itu sampai jumlahnya pas 1 mol. Nah, air dalam gelas ini sekarang jadi larutan garam.
          </p><br/>
          <p><strong>Tekanan Osmotik itu Apa Sih?</strong></p><br/>
          <p>
          Kalau kita bayangin, partikel-partikel garam (ion Na+ dan Cl-) itu kayak anak kecil yang suka berlarian dan nabrak-nabrak dinding gelas. Nah, tekanan yang dihasilkan dari "tabrakan" partikel-partikel ini ke dinding gelas inilah yang disebut tekanan osmotik. Semakin banyak partikel garam, semakin sering mereka nabrak-nabrak, dan semakin besar tekanan osmosanya.
          </p><br/>
          <p><strong>Kenapa Faktor van't Hoff Jadi 2?</strong></p><br/>
          <p>
          Garam dapur (NaCl) itu kalau dilarutkan di air, dia akan pecah jadi dua bagian, yaitu ion Na+ dan ion Cl-. Jadi, setiap molekul NaCl yang kita larutkan, akan menghasilkan 2 partikel yang aktif bikin tekanan osmotik. Makanya, kita kalikan konsentrasi dengan faktor van't Hoff (i) yang nilainya 2.
          </p><br/>
          <p><strong>Rumus Ajaibnya</strong></p><br/>
          <p>
          Ada rumus khusus buat hitung tekanan osmotik, yaitu:
          </p><br/>
          <p>
          π = i x C x R x T
          </p><br/>
          <p>
            <ul>
            <li><b>π:</b> Tekanan osmotik (yang mau kita cari)</li>
            <li><b>i:</b> Faktor van't Hoff (dalam kasus ini, 2 karena NaCl jadi 2 ion)</li>
            <li><b>C:</b> Konsentrasi larutan (dalam mol/liter)</li>
            <li><b>R:</b> Konstanta gas ideal (nilai tetap)</li>
            <li><b>T:</b> Suhu (dalam Kelvin)</li>
            </ul>
          </p><br/>
          <p><strong>Yuk Kita Hitung!</strong></p><br/>
          <p>
          Kita udah tahu semua nilainya:
          </p>
          <p>
            <ul>
            <li>i = 2</li>
            <li>C = 1 mol/liter (karena kita larutkan 1 mol garam dalam 1 liter air)</li>
            <li>R = 0,0821 (konstanta gas ideal)</li>
            <li>T = 27°C = 300 K (ingat, suhu harus dalam Kelvin)</li>
            </ul>
          </p>
          <p>
          Tinggal kita masukin angka-angkanya ke rumus:
          </p><br/>
          <p>
          π = 2 x 1 x 0,0821 x 300
          </p>
          <p>
          π = 49,26 atm
          </p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p><br/>
          <p>
          Tekanan osmotik larutan garam kita itu sebesar 49,26 atmosfer. Angka ini cukup besar, ya! Artinya, partikel-partikel garam itu nabrak-nabrak dinding gelas dengan sangat kuat.
          </p><br/>
        </section>

      <section>
        <h2>5. Efek Ionisasi dalam Larutan Elektrolit</h2>
        <p>
          Pada larutan elektrolit seperti NaCl atau K₂SO₄, zat terlarut akan terionisasi menjadi ion-ion yang bebas. 
          Ini menyebabkan jumlah partikel dalam larutan lebih banyak daripada jumlah mol zat terlarut awalnya. Oleh karena itu, efek sifat koligatif seperti penurunan tekanan uap, peningkatan titik didih, dan penurunan titik beku akan lebih besar.
        </p>
        <p><strong>Rumus penyesuaian:</strong> ΔTf = i * Kf * m</p>
        <p><em>Dimana:</em></p>
        <ul>
          <li>i = Faktor Van 't Hoff (jumlah ion yang terbentuk dalam larutan)</li>
          <li>Kf = Konstanta pembekuan molal</li>
          <li>m = Molalitas larutan</li>
        </ul>
        <img 
            src="https://th.bing.com/th/id/OIP.9L2W4Z1WYXozh4086qHSzwHaHa?rs=1&pid=ImgDetMain" 
            alt="Penurunan Titik Beku" 
            className="section-image" 
        /><br/>

        <h3>A. Reaksi Ionisasi Larutan Elektrolit</h3>
        <h4>1. Reaksi Ionisasi Elektrolit Kuat</h4>
        <p>
        Reaksi ionisasi elektrolit kuat merupakan reaksi berkesudahan. Dalam larutan tidak ada lagi molekul elektrolit yang netral, semua telah diubah menjadi ion-ion. Larutan elektrolit kuat memiliki ciri-ciri sebagai berikut.
        </p><br/>
        <p>1. Larutan elektrolit kuat mempunyai daya hantar listrik yang baik atau kuat.</p>
        <p>2. Dalam larutan terionisasi sempurna (seluruhnya berubah menjadi ion-ion).</p>
        <p>3. Jumlah ion dalam larutan sangat banyak.</p>
        <p>4. Harga derajat ionisasi mendekati 1 (harga α = 1).</p><br/>
        <p>Berikut contoh penulisan reaksi ionisasi elektrolit kuat.</p>
        <br/>
        <p>Asam : HCl → H+ + Cl-</p>
        <br/>
        <p>Basa : Ba(OH)2 → Ba2+ + 2 OH</p>
        <br/>
        <p>Garam : Na2CO3 → 2 Na+ + CO3-</p>
        <br/>
        <h4>2. Reaksi Ionisasi Elektrolit Lemah</h4>
        <p>Reaksi ionisasi elektrolit lemah merupakan reaksi keseimbangan karena elektrolit hanya terionisasi sebagian, sehingga dalam larutan masih ada molekul-molekul elektrolit yang netral. </p>
        <br/>
        <p>Larutan elektrolit lemah memiliki ciri-ciri sebagai berikut.</p>
        <br/>
        <p>1. Larutan elektrolit lemah mempunyai daya hantar listrik lemah.</p>
        <p>2. Dalam larutan terionisasi sebagian (hanya sebagian kecil senyawa yang membentuk ion).</p> 
        <p>3. Jumlah ion dalam larutan sedikit.</p>
        <p>4. Harga derajat ionisasi kurang dari 1 (harga α kecil, yaitu 0 lebih kecil dari α lebih kecil dari 1).</p>
        <br/>
        <p>Berikut contoh penulisan reaksi ionisasi elektrolit lemah.</p>
        <br/>
        <p>Asam : CH3COOH ⇋ CH3COO + H+</p>
        <br/>
        <p>Basa : NH4OH ⇋ NH4+ + OH-</p>
        <br/>
        <p>(SFR)</p>
        <br/>

        <h3>B. Contoh Larutan Elektrolit:</h3>
        <ul>
          <li><b>Garam dapur (NaCl):</b> Ketika dilarutkan dalam air, NaCl akan terionisasi menjadi ion Na+ dan Cl-.</li>
          <li><b>Asam klorida (HCl):</b> HCl akan terionisasi menjadi ion H+ dan Cl-.</li>
          <li><b>Natrium hidroksida (NaOH):</b> NaOH akan terionisasi menjadi ion Na+ dan OH-.</li>
        </ul><br/>

        <h4>1. Efek Ionisasi dalam Larutan Elektrolit</h4>
        <img 
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1642494576/hs8v3kogcanvolvnpybk.jpg" 
            alt="Reaksi Ionisasi Elektrolit Kuat" 
            className="section-image" 
        /><br/>
        <ul>
          <li><b>Konduktivitas:</b> Larutan elektrolit dapat menghantarkan arus listrik karena adanya ion-ion bebas yang bergerak menuju elektroda bermuatan berlawanan.</li>
          <li><b>Sifat Koligatif:</b> Larutan elektrolit memiliki sifat koligatif yang lebih besar dibandingkan larutan non-elektrolit dengan konsentrasi yang sama. Sifat koligatif adalah sifat larutan yang tergantung pada jumlah partikel zat terlarut, bukan pada jenis zat terlarutnya. Contoh sifat koligatif adalah penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmotik.</li>
          <li><b>Reaksi Kimia:</b> Ion-ion dalam larutan elektrolit dapat bereaksi dengan zat lain membentuk senyawa baru.</li>
          <li><b>Pengaruh pH:</b> Ion-ion H+ dan OH- yang dihasilkan dari ionisasi asam dan basa dapat mempengaruhi pH larutan.</li>
        </ul><br/>

        <h4>2. Faktor yang Mempengaruhi Derajat Ionisasi</h4>
        <img 
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1642494602/ewuvlitgvcsxwmbwoz5o.jpg" 
            alt="Reaksi Ionisasi Elektrolit Lemah" 
            className="section-image" 
        /><br/>
        <ul>
          <li><b>Sifat zat terlarut:</b> Zat elektrolit kuat akan terionisasi sempurna, sedangkan zat elektrolit lemah hanya terionisasi sebagian.</li>
          <li><b>Konsentrasi larutan:</b> Semakin encer larutan, semakin besar derajat ionisasinya.</li>
          <li><b>Suhu:</b> Kenaikan suhu umumnya akan meningkatkan derajat ionisasi.</li>
          <li><b>Adanya ion senama:</b> Adanya ion senama akan menghambat proses ionisasi.</li>
        </ul><br/>

        <h4>3. Penerapan dalam Kehidupan Sehari-hari</h4>
        <ul>
          <li><b>Baterai:</b> Larutan elektrolit digunakan sebagai penghantar ion dalam baterai.</li>
          <li><b>Elektrolisis:</b> Proses elektrolisis digunakan untuk melapisi logam, menghasilkan gas, dan memproduksi zat kimia.</li>
          <li><b>Pengolahan air:</b> Proses pengolahan air melibatkan penggunaan elektrolit untuk membunuh mikroorganisme.</li>
          <li><b>Medis:</b> Larutan elektrolit digunakan dalam cairan infus untuk mengganti cairan tubuh yang hilang.</li>
        </ul><br/>
      </section>
      <section className="contoh-soal-ionisasi">
          <h3>Contoh soal efek ionisasi dalam larutan elektrolit</h3><br/>
          <p><strong>Soal:</strong> Hitunglah tekanan osmotik larutan NaCl 0,1 M pada suhu 27°C. Diketahui R = 0,082 L atm/mol K dan NaCl terionisasi sempurna.</p><br/>
          <p><strong>Kenapa harus dihitung?</strong></p><br/>
          <p>
          Mengerti tekanan osmotik itu penting banget, lho! Misalnya, dalam tubuh kita, tekanan osmotik membantu menjaga keseimbangan cairan. Di industri, tekanan osmotik juga digunakan dalam proses pengolahan air laut menjadi air tawar.
          </p><br/>
          <p><strong>Mari kita pecah-pecah soal ini:</strong></p><br/>
          <p><b>
          1. NaCl jadi Na+ dan Cl-:
          </b></p>
          <p>Saat kita larutkan garam dapur dalam air, dia akan pecah jadi ion Na+ (natrium) dan ion Cl- (klorida). Nah, jumlah ion ini yang akan mempengaruhi tekanan osmotik. Makanya kita kasih nilai i (faktor van't Hoff) = 2, artinya setiap molekul NaCl akan menghasilkan 2 partikel yang aktif bikin tekanan.</p>
          <p><b><br/>
          2. Rumus Ajaib:
          </b></p>
          <p>Untuk menghitung tekanan osmotik, kita pakai rumus ini:</p>
          <p>π = i x M x R x T</p>
          <p>
            <ul>
            <li><b>π:</b> Tekanan osmotik (yang mau kita cari)</li>
            <li><b>i:</b> Faktor van't Hoff (dalam kasus ini, 2 karena NaCl jadi 2 ion)</li>
            <li><b>C:</b> Konsentrasi larutan (dalam mol/liter)</li>
            <li><b>R:</b> Konstanta gas ideal (nilai tetap)</li>
            <li><b>T:</b> Suhu (dalam Kelvin)</li>
            </ul>
          </p><br/>
          <p><b>
          3. Masukin Angka:
          </b></p>
          <p>Kita udah tahu semua nilainya:</p>
          <p>
            <ul>
            <li>i = 2</li>
            <li>C = 1 mol/liter (artinya dalam 1 liter air, ada 0,1 mol NaCl)</li>
            <li>R = 0,082 (nilai tetap)</li>
            <li>T = 27°C = 300 K (ingat, suhu harus dalam Kelvin)</li>
            </ul>
          </p>
          <p>Kita masukin angka-angkanya ke rumus:</p>
          <p>π = 2 x 0,1 x 0,082 x 300</p>
          <p>π = 4,92 atm</p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p><br/>
          <p>
          Tekanan osmotik larutan garam kita itu sebesar 49,26 atmosfer. Angka ini cukup besar, ya! Artinya, partikel-partikel garam itu nabrak-nabrak dinding gelas dengan sangat kuat.
          </p><br/>
          <p><b>Bayangkan gelas itu seperti kolam renang kecil, dan partikel-partikel garamnya seperti anak-anak yang lagi berenang.</b> Semakin banyak anak-anak yang berenang dan nabrak-nabrak dinding kolam, semakin besar tekanan yang dirasakan dinding kolam itu.</p><br/>
        </section>
      

      <section>
        <h2>6. Perbedaan Molalitas dan Molaritas</h2>
        <p>
          Molalitas (m) adalah jumlah mol zat terlarut per kilogram pelarut, sementara molaritas (M) adalah jumlah mol zat terlarut per liter larutan. 
          Molalitas lebih bergantung pada massa pelarut, sehingga tidak terpengaruh oleh perubahan suhu, sedangkan molaritas tergantung pada volume larutan, yang dapat berubah dengan suhu.
        </p>
        <img 
            src="https://www.zenius.net/blog/wp-content/uploads/2021/09/Desain-tanpa-judul-5.jpg" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>
        <h3>A. Perbedaan Rumus Molalitas dan Molaritas</h3>
        <ul>
          <li><b>Garam dapur (NaCl):</b> Ketika dilarutkan dalam air, NaCl akan terionisasi menjadi ion Na+ dan Cl-.</li>
          <li><b>Asam klorida (HCl):</b> HCl akan terionisasi menjadi ion H+ dan Cl-.</li>
          <li><b>Natrium hidroksida (NaOH):</b> NaOH akan terionisasi menjadi ion Na+ dan OH-.</li>
        </ul><br/>
        <h4>1. Molalitas(m)</h4>
        <p><b>Defenisi:</b> Jumlah mol zat terlarut dalam 1 kg pelarut.</p>
        <p><b>Rumus:</b></p>
        <p><strong>Rumus:</strong> molalitas (m) = jumlah mol zat terlarut / massa pelarut (kg)</p>
        <p><b>Satuan:</b> mol/kg atau molal</p>
        <p><b>Ciri khas:</b> Tidak dipengaruhi oleh perubahan suhu dan tekanan karena berkaitan dengan massa, bukan volume.</p><br/>
        <h4>2. Molaritas (M) </h4>
        <p><b>Defenisi:</b> Jumlah mol zat terlarut dalam 1 liter larutan.</p>
        <p><b>Rumus:</b></p>
        <p><strong>Rumus : molaritas (M) = jumlah mol zat terlarut / volume larutan (L)</strong></p>
        <p><b>Satuan:</b> mol/L atau molar</p>
        <p><b>Ciri khas:</b> Dipengaruhi oleh perubahan suhu dan tekanan karena volume larutan dapat berubah akibat perubahan suhu dan tekanan.</p>
        <div className="tabel-container">
      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Molalitas (m)</th>
            <th>Molaritas (M)</th>
          </tr>
        </thead>
      </table>
    </div>
    <h3>B. Kapan Menggunakan Masing-masing?</h3>
        <h4>1. Molalitas</h4>
        <p> Lebih sering digunakan dalam sifat koligatif larutan (misalnya penurunan titik beku, kenaikan titik didih) karena tidak dipengaruhi oleh perubahan suhu dan tekanan.</p><br/>
        <p><b>Molalitas</b> fokus pada massa pelarut, sedangkan molaritas fokus pada volume larutan.</p><br/>
        <p><b>Molalitas</b> lebih stabil terhadap perubahan suhu dan tekanan.</p><br/>

        <h4>2. Molaritas</h4>
        <p> Lebih sering digunakan dalam reaksi kimia dan stoikiometri karena berkaitan langsung dengan volume larutan yang terlibat dalam reaksi.</p><br/>
        <p><b>Molaritas</b> lebih mudah digunakan dalam perhitungan stoikiometri.</p><br/>
        </section>
        <section className="contoh-soal-ionisasi">
          <h3>Contoh soal perbedaan Molalitas dan Molaritas</h3><br/>
          <p><strong>Soal:</strong> Misalnya kita punya larutan gula dengan 2 mol gula dilarutkan dalam 500 gram air. Berapa molalitas dan molaritas larutan tersebut?</p><br/>
          <p><strong>Molalitas (Manisnya Teh)</strong></p>
          <p>
          Molalitas itu kayak ukuran seberapa banyak gula yang kamu larutkan dalam air. Semakin banyak gula, semakin manis tehnya. Jadi, molalitas itu kayak ukuran "kemanisan" larutan.
          </p><br/>
          <p><strong>Cara hitungnya gampang banget:</strong></p>
          <ul>
            <li><b>Jumlah gula:</b> Kita punya 2 bungkus gula (2 mol).</li>
            <li><b>Jumlah air:</b> Kita punya 500 gram air, atau sama dengan 0,5 kg.</li>
          </ul><br/>
          <p><strong>Jadi, molalitasnya adalah:</strong></p>
          <p>
          <ul>
            <li>Molalitas = (Jumlah gula) / (Jumlah air dalam kg)</li>
            <li>Molalitas = 2 mol / 0,5 kg = 4 mol/kg</li>
          </ul>
          </p><br/>
          <p>Artinya, dalam setiap 1 kg air, ada 4 mol gula. Makin besar nilai molalitas, berarti larutannya makin manis.</p><br/>
          <p><strong>Molaritas (Berapa Banyak Gelas?)</strong></p>
          <p>
          Molaritas itu beda lagi. Kalau molalitas ngukur seberapa manis, molaritas lebih ke ngukur seberapa banyak larutan yang kita punya. Misalnya, kalau kamu mau bagi-bagi teh manis ke teman-teman, kamu perlu tahu ada berapa gelas teh yang bisa kamu buat.
          </p><br/>
          <p>Cara hitung molaritas butuh informasi tambahan, yaitu volume larutan. Sayangnya, dalam soal ini kita enggak tahu berapa volume teh manis yang kita buat. Jadi, kita enggak bisa hitung molaritasnya.</p><br/>
          <p><strong>Kapan Pakai Molalitas dan Kapan Pakai Molaritas?</strong></p>
          <p>
            <ul>
              <li><b>Molalitas:</b> Kalau kamu lagi belajar tentang sifat-sifat larutan, kayak misalnya titik beku atau titik didih, biasanya yang dipakai adalah molalitas. Soalnya, molalitas enggak peduli sama perubahan volume akibat suhu.</li>
              <li><b>Molaritas:</b> Kalau kamu lagi ngitung-ngitung reaksi kimia atau mau bikin larutan dengan konsentrasi tertentu, biasanya yang dipakai adalah molaritas. Soalnya, molaritas berhubungan langsung dengan volume larutan.</li>
            </ul>
          </p><br/>
          <p><strong>Jadi intinya:</strong></p>
          <p>
            <ul>
              <li><b>Molalitas:</b> Ngeluarin rasa manisnya larutan.</li>
              <li><b>Molaritas:</b> Ngeluarin jumlah larutan yang kita punya.</li>
            </ul>
          </p><br/>
          <p><strong>Jadi, kesimpulannya:</strong></p>
          <p>
          Dalam soal gula kita ini, kita cuma bisa hitung molalitasnya. Kita tahu pasti bahwa dalam setiap 1 kg air ada 4 mol gula. Tapi kita enggak bisa tahu berapa molaritasnya karena kita kurang informasi tentang volume total larutan.
          </p><br/>
        </section>

        <section>
        <h2>7. Pengaruh Suhu terhadap Sifat Koligatif</h2>
        <p>
          Suhu dapat mempengaruhi perubahan sifat koligatif, seperti titik didih dan titik beku. Sebagai contoh, peningkatan suhu menyebabkan peningkatan energi kinetik partikel dalam larutan, yang pada gilirannya dapat mengubah sifat koligatif larutan.
        </p><br/>
        <p>
          Pada suhu yang lebih tinggi, tekanan uap larutan juga akan meningkat, menyebabkan peningkatan titik didih. Sebaliknya, penurunan suhu menyebabkan penurunan titik beku larutan.
        </p><br/>
        <img 
            src="https://th.bing.com/th/id/OIP.G917i4WFCHG0-2Bfb8zMaQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>

        <h3>A. Pendahuluan</h3>
        <p>
          Sifat koligatif larutan adalah sifat larutan yang bergantung pada jumlah partikel zat terlarut dalam larutan, bukan pada jenis zat terlarutnya. Beberapa contoh sifat koligatif adalah penurunan tekanan uap, kenaikan titik didih, penurunan titik beku, dan tekanan osmosis.
        </p><br/>
        <p><b>Pertanyaan yang sering muncul adalah:</b> Bagaimana suhu mempengaruhi sifat-sifat ini?</p><br/>
        <p
        ><strong>Pengertian Suhu dan Sifat Koligatif</strong></p>
        <ul>
          <li><b>Suhu:</b> Ukuran energi kinetik rata-rata partikel dalam suatu sistem. Semakin tinggi suhu, semakin cepat partikel bergerak.
          </li>
          <li><b>Sifat Koligatif:</b> Sifat larutan yang hanya bergantung pada jumlah partikel zat terlarut, bukan jenisnya.</li>
        </ul><br/>
        <h3>B. Hubungan Suhu dan Sifat Koligatif</h3>
        <p>Secara umum, <b>suhu tidak secara langsung mempengaruhi jumlah partikel zat terlarut dalam larutan.</b> Artinya, jika kita menaikkan suhu suatu larutan, jumlah partikel zat terlarutnya tidak akan bertambah secara signifikan.</p><br/>
        <p>Namun, <b>perubahan suhu dapat mempengaruhi kesetimbangan antara zat terlarut dan pelarut.</b> Misalnya, pada suhu yang lebih tinggi, kelarutan beberapa zat padat dalam air dapat meningkat. Hal ini berarti jumlah partikel zat terlarut dalam larutan akan bertambah, sehingga sifat koligatifnya juga akan berubah.</p><br/>
        <p><b>1. Penurunan Tekanan Uap:</b></p>
        <img 
            src="https://asset.kompas.com/crops/yuKtUgCAeONI6VRE5hJnKeBJJ3Q=/40x32:552x373/750x500/data/photo/2023/10/09/6523a5bb1695e.jpg" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>
        <ul>
          <li>Suhu yang lebih tinggi akan meningkatkan energi kinetik partikel pelarut, sehingga lebih banyak partikel yang dapat mengatasi gaya tarik menarik antarpartikel dan berubah menjadi uap.</li>
          <li>Namun, kehadiran zat terlarut akan mengurangi jumlah partikel pelarut yang dapat menguap, sehingga tekanan uap larutan akan lebih rendah dibandingkan dengan pelarut murni.</li>
        </ul><br/>
        <p><b>2. Kenaikan Titik Didih:</b></p>
        <img 
            src="https://th.bing.com/th/id/OIP.0OrU6vAlJ82hrQkNf0R1kQAAAA?rs=1&pid=ImgDetMain" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>
        <ul>
          <li>Untuk mendidih, tekanan uap suatu cairan harus sama dengan tekanan atmosfer.</li>
          <li>Karena zat terlarut menurunkan tekanan uap larutan, maka diperlukan suhu yang lebih tinggi untuk mencapai tekanan uap yang sama dengan tekanan atmosfer.</li>
        </ul><br/>
        <p><b>3. Penurunan Titik Beku:</b></p>
        <img 
            src="https://image.slidesharecdn.com/penurunantitikbeku-130924203821-phpapp02/95/penurunan-titik-beku-6-638.jpg?cb=1380055186" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>
        <ul>
          <li>Zat terlarut mengganggu pembentukan kristal padat dari pelarut, sehingga diperlukan suhu yang lebih rendah untuk membekukan larutan dibandingkan dengan pelarut murni.</li>
        </ul><br/>
        <p><b>4. Tekanan Osmotik:</b></p>
        <img 
            src="https://asset.kompas.com/crops/LA-_87ZRmIoRvxAc91CBh7_Js9U=/82x51:724x480/750x500/data/photo/2021/12/11/61b47ef743c77.jpg" 
            alt="Molaritas dan Molalitas" 
            className="section-image" 
        /><br/>
        <ul>
          <li>Tekanan osmosis dipengaruhi oleh konsentrasi larutan dan suhu. Semakin tinggi suhu, semakin besar energi kinetik partikel pelarut, sehingga tekanan osmosis juga akan meningkat.</li>
        </ul><br/>

        <h3>C. Faktor Lain yang Mempengaruhi Sifat Koligatif</h3>
        <p>Selain suhu, faktor lain yang juga dapat mempengaruhi sifat koligatif adalah:</p><br/>
        <ul>
          <li><b>Jenis zat terlarut:</b> Zat terlarut elektrolit (yang terionisasi dalam larutan) akan memberikan pengaruh yang lebih besar terhadap sifat koligatif dibandingkan dengan zat terlarut non-elektrolit.</li>
          <li><b>Konsentrasi larutan:</b> Semakin tinggi konsentrasi larutan, semakin besar pengaruhnya terhadap sifat koligatif.</li>
          <li><b>Tekanan:</b> Perubahan tekanan dapat mempengaruhi titik didih dan titik beku suatu larutan.</li>
        </ul><br/>

        <h4>Kesimpulan</h4>
        <p>
          Meskipun suhu tidak secara langsung mempengaruhi jumlah partikel zat terlarut dalam larutan, perubahan suhu dapat mempengaruhi kesetimbangan antara zat terlarut dan pelarut, sehingga dapat mengubah sifat koligatif larutan. Selain suhu, faktor lain seperti jenis zat terlarut, konsentrasi, dan tekanan juga berperan penting dalam menentukan sifat koligatif suatu larutan.
        </p><br/>
        <p>
          <b>Penting untuk diingat:</b> Pengaruh suhu terhadap sifat koligatif adalah kompleks dan dipengaruhi oleh berbagai faktor. Untuk memahami lebih dalam, diperlukan pemahaman yang mendalam tentang konsep-konsep dasar dalam kimia larutan.
        </p><br/>
      </section>
      <section className="contoh-soal-ionisasi">
          <h3>Contoh Soal Pengaruh Suhu terhadap Sifat Koligatif</h3>
          <p><strong>Soal:</strong> Diketahui dua larutan glukosa dengan konsentrasi yang sama. Larutan A dipanaskan hingga suhunya menjadi 50°C, sedangkan larutan B dijaga pada suhu 25°C. Manakah larutan yang memiliki tekanan uap jenuh yang lebih tinggi? Jelaskan!</p><br/>
          <p><strong>Penyelesaian:</strong></p>
          <p>
            <b>Bayangkan kamu sedang merebus air.</b> Saat air dipanaskan, kan lama-lama jadi uap air, gitu kan? Nah, uap air itu yang bikin tekanan di dalam panci meningkat. Nah, tekanan uap ini sebenarnya sama kayak tekanan yang dihasilkan oleh partikel-partikel zat cair yang berusaha melompat keluar dari permukaan cairan dan berubah jadi gas.
          </p><br/>
          <p>
            <b>Sekarang, balik ke larutan glukosa kita.</b> Kedua larutan ini kan punya konsentrasi yang sama, artinya jumlah glukosa yang larut dalam airnya sama. Tapi, yang membedakan adalah suhunya.
          </p><br/>
          <p>
            1. <b>Larutan A yang dipanaskan:</b> Bayangkan partikel-partikel air dan glukosa di sini seperti anak-anak yang lagi semangat banget. Karena dipanaskan, mereka jadi punya energi yang lebih besar dan bergerak lebih cepat. Nah, karena energinya besar, mereka lebih gampang buat "loncat" keluar dari permukaan larutan dan berubah jadi uap. Jadi, tekanan uapnya jadi lebih tinggi.
          </p><br/>
          <p>
            2. <b>Larutan B yang dingin:</b> Nah, kalau di larutan B ini, partikel-partikelnya kayak lagi ngantuk. Karena suhunya rendah, energi mereka kecil dan gerakannya jadi lebih lambat. Jadi, mereka susah buat "loncat" keluar dari permukaan larutan. Akibatnya, tekanan uapnya jadi lebih rendah.
          </p><br/>
          <p><strong>Jadi kesimpulannya,</strong>  larutan yang suhunya lebih tinggi (larutan A) akan punya tekanan uap yang lebih tinggi juga. Ini karena partikel-partikel di larutan yang lebih panas punya energi yang lebih besar dan lebih mudah menguap.</p><br/>
          <p><b>Gampangnya, semakin panas suatu larutan, semakin banyak partikel yang bisa "kabur" dari permukaan larutan dan berubah jadi gas. Makanya, tekanannya jadi lebih tinggi.</b></p>
        </section>
      
      
        <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma12b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/kimia/kelas-11")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma12b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;