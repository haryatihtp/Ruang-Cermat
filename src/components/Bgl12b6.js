import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl12b4.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">

      <h1>Bab 6: Pola Pola Hereditas</h1>
      <section>
      <h2>A. Pautan </h2>
        <p>
        <img src="bab6.a.png" alt="Struktur Penyerapan Makanan" className="section-image" />
        Pautan/Tautan (linkage) adalah suatu keadaan dimana terdapat banyak gen dalam satu kromosom. Pengertian ini biasanya mengacu pada kromosom tubuh (autosom). Akibatnya bila kromosom memisah dari kromosom homolognya, gen-gen yang berpautan tersebut selalu bersama.
        Semisal suatu genotif AaBb mengalami pautan antar gen dominan dan antar gen resesif, maka A dan B terdapat dalam satu kromosom, sedangkan a dan b terdapat pada kromosom homolognya. Bila terjadi pembelahan meiosis maka gamet yang terbentuk ada dua macam, yaitu AB dan ab.
          Ciri Pautan:
        – semisal pada AaBb, gamet hanya 2 macam
        – jika di test cross hasilnya adalah 1 : 1 
        </p>
        <h2>B. Pindah Silang (crossing over) </h2>
        <p>Pindah silang (crossing over) merupakan peristiwa pertukaran gen karena kromosom homolog saling melilit saat meiosis. 
          Misalkan suatu genotif AaBb mengalami pindah silang saat pembelahan meiosis akan diperoleh gamet sebanyak empat macam, yaitu AB, ab, Ab, dan aB.
          Dua yang pertama (homogamet) disebut kombinasi parental (KP) yang merupakan hasil peristiwa pautan, dan
          dua yang terakhir (heterogamet) disebut kombinasi baru (KB) atau rekombinan (RK) yang merupakan hasil peristiwa pindah silang.
          <img src="bab6.b.png" alt="Struktur Penyerapan Makanan" className="section-image" />
          Prosentase terbentuknya kombinasi baru saat terjadi pindah silang disebut Nilai Pindah Silang (NPS) yang dapat dihitung dengan rumus berikut:
          <img src="bab6.c.png" alt="Struktur Penyerapan Makanan" className="section-image" />
          Ciri Pindah silang:
          – misal pada AaBb, gamet 4 macam
          – jika di test cross hasilnya adalah 1 : 1 : 1 : 1
           </p>
            
        <h2>C. Pautan Sex</h2>
        <p>
        Pautan sex (sex linkage) merupakan suatu keadaan dimana terdapat banyak gen tertentu yang selalu terdapat pada kromosom sex. Adanya pautan sex menyebabkan suatu sifat muncul hanya pada jenis kelamin tertentu. Ada dua jenis pautan sex, yaitu pautan X dan pautan Y.
        <img src="bab6.d.jpg" alt="Struktur Penyerapan Makanan" className="section-image" />
        Dari contoh di atas dapat dilihat bahwa gen yang menyebabkan warna mata pada lalat terdapat pada kromosom X. Mata merah disebabkan gen dominan M, dan mata putih disebabkan gen resesif m. Hasil persilangan pada F, induk jantan yang bermata putih mewariskan gen m pada anak betina, sedangkan induk betina yang bermata merah mewariskan gen M pada anak jantan.
        ingat
        Pada anak jantan, X berasal dari induk betina
        Pada anak betina, X berasal dari kedua induk
        Inilah yang disebut konsep pewarisan sifat menyilang (criss cross inheritance)
        </p>       
      </section>
      <section>
        <h2>D. Gagal Berpisah (non disjunction) </h2>
        <p>Gagal berpisah (non disjunction) merupakan kegagalan kromosom homolog untuk memisahkan diri saat pembelahan meiosis.
           Akibatnya terdapat gamet yang lebih atau kurang jumlah kromosomnya.
          Contohnya persilangan antara Drosophilla melanogaster dimana lalat betina mengalami gagal berpisah. 
          Lalat betina yang mengalami gagal berpisah membentuk tiga macam kemungkinan gamet yaitu X, XX, dan 0.
          Bila lalat jantan yang mengalami gagal berpisah kemungkinan gametnya adalah X, Y, XX, YY, dan 0.</p>

        <h2>E.  Determinasi sex</h2>
        <p>Determinasi sex adalah cara penentuan jenis kelamin pada hewan dan manusia yang dilambangkan dengan huruf tertentu.
        husus pada Drossophila, penentuan jenis kelamin didasarkan pada Index Kelamin yang merupakan rasio antara jumlah kromosom X dengan jumlah pasangan autosom. 
        Bila rasionya lebih besar atau sama dengan setengah, jenis kelaminnya jantan. Bila lebih besar atau sama dengan satu jenis kelaminnya betina. 
        Dan bila lebih besar dari setengah dan lebih kecil dari satu lalat tersebut merupakan lalat intersex.<br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DSgNUZphr40?si=Cm7mIGosW6w1Pj-r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <br/>
        contoh:
        <p>AAXX            IK = 2X/2A   = 1    lalat betina</p>
        <p>AAXY            IK = X/2A     = 0,5 lalat jantan</p>
        <p>AAXXX          IK = 3X/2A   = 1,5   lalat betina</p>
        <p>AAXXY          IK = 2X/2A   = 1    lalat betina</p>
        <p>AAXO           IK = X/2A     = 0,5 lalat jantan</p>
        <p>AAAXX          IK = 2X/3A   = 0,6 lalat intersex</p>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hZ9_PxbDScc?si=j2HS823UhRcGHO_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </p>
        <h2>F. Gen Lethal</h2>
        <p>Gen lethal merupakan gen yang menyebabkan kematian individu yang memilikinya bila dalam keadaan homozigot. Ada dua jenis gen lethal, yaitu lethal dominan dan lethal resesif.
          Lethal dominan menyebabkan kematian dalam keadaan homozigot dominan.
          <p>Contoh: persilangan antara tikus kuning dengan sesamanya</p>
          <p>p    :    tikus kuning         x         tikus kuning</p>
          <p>Kk                                    Kk</p>
          <p>F    :    KK        : tikus kuning (lethal)</p>
          <p>2Kk       : tikus kuning</p>
          <p>kk         : normal</p>  
          Rasio fenotif yang hidup antara tikus kuning : normal = 2 : 1 karena tikus kuning homozigot dominan selalu lethal.
          Lethal resesif menyebabkan kematian dalam keadaan homozigot resesif.
          <p>Contoh: persilangan antara jagung berdaun hijau dengan sesamanya</p>
          <p>p    :    jagung berdaun hijau  x    jagung berdaun hijau</p>
          <p> Hh                                Hh</p>
          <p>F    :    HH    : berdaun hijau</p>
          <p>2Hh   : berdaun hijau</p>
          <p>hh     : berdaun pucat (albino) – lethal</p>  
          Dari pesilangan di atas hanya tiga yang kemungkinannya dapat hidup yaitu yang bergenotif HH dan Hh. 
          Sedangkan yang bergenotif hh mati karena tidak dapat membentuk klorofil.
          </p>
          <h2>G. Epistasis dan Hipostasis</h2>
        <p>Epistasis dan hipostasis adalah interaksi antara gen-gen yang berbeda lokus di mana satu gen dapat menutupi atau memodifikasi ekspresi gen lain. Gen yang menutupi disebut epistasis, sedangkan gen yang ditutupi disebut hipostasis.
          <p>Contoh: warna bulu pada tikus. Tikus dengan genotip B- menghasilkan bulu hitam, bb menghasilkan bulu coklat, sedangkan gen C- diperlukan untuk memproduksi warna. Bila genotip cc ada, bulu menjadi putih (albino).</p>
          <p>p: Bbcc x bbCc</p>
          <p>F: 9 hitam : 3 coklat : 4 albino</p>
          </p>
          <h2>H. Poligen (Pewarisan Multifaktorial)</h2>
        <p>Poligen adalah pewarisan sifat yang melibatkan banyak gen yang memiliki efek kecil dan bersifat aditif. Contoh sifat poligenik adalah tinggi badan dan warna kulit pada manusia.
          <p>Contoh: tinggi tanaman jagung dikendalikan oleh tiga gen (A, B, dan C) dengan efek aditif. Setiap alel dominan menambah tinggi tertentu.        </p>
          <p>Genotip: AABBCC (tinggi maksimum), aabbcc (tinggi minimum).</p>
        </p>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl12b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>
         
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl12b5")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl12b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
    
  );
};

export default Bab6;