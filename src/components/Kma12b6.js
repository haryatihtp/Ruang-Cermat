import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Kma12b6.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="makromolekul-container">
      <h1>Bab 6: Materi Makromolekul Secara Lengkap</h1>

      <section>
        <h2>1. Pengertian Makromolekul</h2>
        <p>
          Makromolekul adalah molekul besar yang terdiri dari banyak atom. 
          Dalam biologi, makromolekul meliputi karbohidrat, protein, dan lemak, 
          yang memiliki peran penting dalam struktur dan fungsi sel.
        </p>
        <p>
          Makromolekul ini terbentuk dari monomer yang bergabung melalui ikatan 
          kimia untuk membentuk struktur yang lebih kompleks.
        </p>
      </section>

      <section>
        <h2>2. Karbohidrat</h2>
        <p>
          Karbohidrat adalah makromolekul yang terdiri dari karbon, hidrogen, 
          dan oksigen. Karbohidrat berfungsi sebagai sumber energi utama bagi 
          tubuh.
        </p>

        <h3>a. Monosakarida</h3>
        <p>
          Monosakarida adalah bentuk paling sederhana dari karbohidrat, 
          seperti glukosa dan fruktosa.
        </p>

        <h3>b. Oligosakarida</h3>
        <p>
          Oligosakarida terdiri dari dua atau lebih monosakarida yang 
          terikat bersama.
        </p>

        <h3>c. Polisakarida</h3>
        <p>
          Polisakarida adalah karbohidrat kompleks yang terdiri dari banyak 
          monosakarida, seperti pati dan selulosa.
        </p>
      </section>

      <section>
        <h2>3. Protein</h2>
        <p>
          Protein adalah makromolekul yang terdiri dari asam amino. 
          Protein berfungsi dalam berbagai proses biologis, termasuk 
          enzimatik dan struktural.
        </p>

        <h3>a. Asam Amino</h3>
        <p>
          Asam amino adalah monomer penyusun protein yang memiliki 
          sifat amfoter.
        </p>
      </section>

      <section>
        <h2>4. Lemak</h2>
        <p>
          Lemak adalah senyawa organik yang terdiri dari gliserol dan asam 
          lemak. Lemak berfungsi sebagai penyimpan energi dan pelindung 
          organ tubuh.
        </p>

        <h3>a. Lemak Jenuh</h3>
        <p>
          Lemak jenuh adalah lemak yang tidak memiliki ikatan ganda dalam 
          rantai karbonnya.
        </p>

        <h3>b. Lemak Tidak Jenuh</h3>
        <p>
          Lemak tidak jenuh memiliki satu atau lebih ikatan ganda dalam 
          rantai karbonnya.
        </p>
      </section>

      <section>
        <h2>5. Uji Makromolekul</h2>
        <p>
          Uji makromolekul dilakukan untuk mendeteksi keberadaan 
          karbohidrat, protein, dan lemak dalam sampel.
        </p>
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlKma12b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma12b5")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Kma12b1")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;