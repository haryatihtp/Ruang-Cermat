import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma11b6.css';

const Bab6 = () => {
  const navigate = useNavigate();

  return (
    <div className="bab6-container">
      <h1>Bab 6: Hidrolisis Garam</h1>

      <section>
        <h2>1. Pengertian Hidrolisis</h2>
        <p>
          Hidrolisis berasal dari kata *hydro* yang berarti air dan *lysis* yang berarti peruraian. Dengan demikian, 
          definisi hidrolisis garam adalah reaksi peruraian yang terjadi antara kation dan anion garam dengan air dalam 
          suatu larutan.
        </p>
        <p>
          Hidrolisis garam dapat diartikan sebagai reaksi reversible penguraian garam oleh air. Maka dari itu, hidrolisis 
          garam adalah reaksi antara salah satu ion-ion garam (kation atau anion) dengan air dan membentuk larutan bersifat 
          asam atau basa. Beberapa sifat atau karakteristik dari hidrolisis garam adalah sebagai berikut:
        </p>
        <ul>
          <li>Proses hidrolisis menghasilkan asam dan basa pembentuk garam.</li>
          <li>Kation dan anion dari asam-basa kuat tidak dapat terhidrolisis karena terionisasi sempurna.</li>
          <li>Garam tidak terhidrolisis jika tidak ada kation maupun anion yang bereaksi.</li>
          <li>Garam terhidrolisis sebagian jika salah satu kation atau anion bereaksi.</li>
          <li>Garam terhidrolis sempurna jika kation dan anion bereaksi.</li>
        </ul>
        <img src="../Image/bab6.0k.jpg" alt="Hidrolisis Garam NaCl" className="section-image" />
      </section>

      <section>
        <h2>2. Reaksi Hidrolisis Garam dari Asam Kuat dan Basa Kuat</h2>
        <p>
          Garam yang terbentuk dari asam kuat dan basa kuat tidak akan mengalami proses hidrolisis karena baik kation 
          maupun anionnya tidak bereaksi dengan air. Contoh hidrolisis garam natrium klorida (NaCl) yang terbentuk dari asam 
          kuat dan basa kuat yaitu asam klorida (HCl) dan natrium hidroksida (NaOH).
        </p>
        <img src="../Image/bab6.1k.jpg" alt="Hidrolisis Garam NaCl" className="section-image" />
        <p>
          Dari reaksi hidrolisis di atas, terlihat ion yang terbentuk saat garam NaCl dilarutkan dalam air adalah OH- dan 
          H+. Keduanya akan saling menetralkan dan tidak bereaksi dengan air. Dengan kata lain, garam NaCl hanya terionisasi 
          dan tidak terhidrolisis, sehingga larutan yang dihasilkannya bersifat netral (pH = 7).
        </p>
      </section>

      <section>
        <h2>3. Reaksi Hidrolisis Garam dari Asam Kuat dan Basa Lemah</h2>
        <p>
          Garam dari asam kuat dan basa lemah akan mengalami hidrolisis sebagian. Contoh hidrolisis amonium klorida (NH4Cl) 
          yang terbentuk dari asam kuat dan basa lemah yaitu asam klorida (HCl) dan amonia (NH3). Amonia akan mengalami 
          ionisasi terurai menjadi ion NH4+ dan Cl-.
        </p>
        <img src="../Image/bab6.2k.jpg" alt="Hidrolisis Garam NH4Cl" className="section-image" />
        <p>
          Perlu diingat bahwa ion Cl- dari asam kuat HCl tidak akan terhidrolisis oleh air, maka hanya ion NH4+ yang akan 
          bereaksi dengan air dan meningkatkan konsentrasi ion hidronium. Hidrolisis garam amonium klorida akan menghasilkan 
          larutan asam dengan pH di bawah 7.
        </p>
      </section>

      <section>
        <h2>4. Reaksi Hidrolisis Garam dari Asam Lemah dan Basa Kuat</h2>
        <p>
          Garam dari asam lemah dan basa kuat jika dihidrolisis akan menghasilkan larutan basa. Contoh hidrolisis garam natrium 
          flurida (NaF) yang terbentuk dari asam lemah flurida (HF) dan basa kuat natrium hidroksida (NaOH).
        </p>
        <img src="../Image/bab6.3k.jpg" alt="Hidrolisis Garam NaF" className="section-image" />
        <p>
          Kation Na+ dari basa kuat natrium hidroksida tidak akan terhidrolisis. Anion F- adalah basa konjugasi HF yang akan 
          menerima proton dari air (terhidrolisis). Saat anion (F-) terhidrolisis dengan air, maka terbentuk ion OH- yang 
          membuat larutan bersifat basa dengan pH lebih besar dari 7.
        </p>
      </section>

      <section>
        <h2>5. Reaksi Hidrolisis Garam dari Asam Lemah dan Basa Lemah</h2>
        <p>
          Garam dari asam lemah dan basa lemah dapat terhidrolisis secara sempurna. Namun untuk menentukan sifat larutannya, 
          harus diperhitungkan konsentrasi asam dan basanya. Jika Ka lebih besar dari Kb maka larutan hidrolisis bersifat asam. 
          Jika Kb lebih besar dari Ka, maka larutan hidrolisis bersifat basa. Jika nilai Ka sama dengan Kb, maka larutan bersifat 
          netral.
        </p>
        <img src="../Image/bab6.4k.jpg" alt="Hidrolisis Garam Asam Lemah dan Basa Lemah" className="section-image" />
        <p>
          Contoh hidrolisis garam amonium asetat (CH3COONH4) yang terbentuk dari asam lemah dan basa lemah yaitu asam asetat 
          (CH3COOH) dan ammonium hidroksida (NH4OH). Kedua ion tersebut bisa terhidrolisis oleh air, sehingga derajat ionisasi 
          dan pH-nya dapat dihitung melalui persamaan atau rumus hidrolisis.
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => navigate("/SlKma11b6")}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b5")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma11b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;