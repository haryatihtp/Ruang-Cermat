import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Eko11b7.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab7-container">
      <h1>Bab 7: Inflasi</h1>

      <section>
        <h2>1. Pengertian Inflasi</h2>
        <p>
          Inflasi adalah proses meningkatnya harga-harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu. Inflasi menyebabkan daya beli uang menurun, sehingga dengan jumlah uang yang sama, kita bisa membeli barang atau jasa yang lebih sedikit dibandingkan sebelumnya.
        </p>
      </section>

      <section>
        <h2>2. Jenis-Jenis Inflasi</h2>
        <h3>a. Berdasarkan Penyebab</h3>
        <ul>
          <li><strong>Demand-Pull Inflation:</strong> Inflasi yang terjadi ketika permintaan agregat dalam perekonomian melebihi kapasitas produksi. Peningkatan permintaan ini mendorong harga-harga naik.</li>
          <li><strong>Cost-Push Inflation:</strong> Inflasi yang disebabkan oleh kenaikan biaya produksi, seperti kenaikan harga bahan baku atau upah pekerja. Produsen menaikkan harga barang untuk menutupi biaya produksi yang lebih tinggi.</li>
          <li><strong>Built-In Inflation:</strong> Inflasi yang dihasilkan dari ekspektasi inflasi di masa depan. Ketika pekerja dan perusahaan mengharapkan inflasi, mereka menyesuaikan upah dan harga, yang pada gilirannya dapat mendorong inflasi aktual.</li>
        </ul>
        
        <h3>b. Berdasarkan Tingkat Keparahan</h3>
        <ul>
          <li><strong>Inflasi Ringan (Creeping Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang rendah dan stabil, biasanya di bawah 3% per tahun.</li>
          <li><strong>Inflasi Sedang (Walking Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang moderat, biasanya antara 3% hingga 10% per tahun.</li>
          <li><strong>Inflasi Tinggi (Galloping Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang sangat tinggi, biasanya lebih dari 10% per tahun.</li>
          <li><strong>Hiperinflasi (Hyperinflation):</strong> Inflasi yang sangat tinggi dan tidak terkendali, dengan kenaikan harga yang bisa mencapai ratusan atau ribuan persen per tahun.</li>
        </ul>
      </section>

      <section>
        <h2>3. Penyebab Inflasi</h2>
        <p>
          Inflasi dapat disebabkan oleh berbagai faktor, termasuk:
          <ul>
            <li>Permintaan yang Berlebihan: Peningkatan permintaan barang dan jasa yang tidak diimbangi oleh peningkatan produksi.</li>
            <li>Kenaikan Biaya Produksi: Peningkatan harga bahan baku, upah, dan energi.</li>
            <li>Kebijakan Moneter: Jumlah uang beredar yang meningkat secara berlebihan.</li>
            <li>Kebijakan Fiskal: Pengeluaran pemerintah yang meningkat tanpa diimbangi oleh pendapatan yang cukup.</li>
            <li>Ekspektasi Inflasi: Ketika masyarakat mengharapkan inflasi di masa depan, mereka mungkin akan bertindak dengan cara yang mempercepat inflasi.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>4. Dampak Inflasi</h2>
        <h3>a. Dampak Positif</h3>
        <ul>
          <li><strong>Mengurangi Beban Utang:</strong> Bagi debitur, inflasi dapat mengurangi nilai riil utang mereka.</li>
          <li><strong>Meningkatkan Investasi:</strong> Harapan inflasi dapat mendorong investasi dalam aset riil seperti properti dan saham.</li>
        </ul>

        <h3>b. Dampak Negatif</h3>
        <ul>
          <li><strong>Penurunan Daya Beli:</strong> Inflasi menyebabkan nilai uang menurun, sehingga konsumen dapat membeli lebih sedikit dengan jumlah uang yang sama.</li>
          <li><strong>Ketidakpastian Ekonomi:</strong> Inflasi yang tinggi dan tidak stabil menciptakan ketidakpastian ekonomi, yang dapat menghambat investasi dan pertumbuhan ekonomi.</li>
          <li><strong>Redistribusi Pendapatan yang Tidak Merata:</strong> Inflasi dapat merugikan penerima pendapatan tetap (seperti pensiunan) dan menguntungkan mereka yang memiliki aset riil.</li>
        </ul>
      </section>

      <section>
        <h2>5. Pengukuran Inflasi</h2>
        <p>
          Inflasi diukur menggunakan indeks harga, yang mencerminkan perubahan harga rata-rata dari sekumpulan barang dan jasa tertentu.
          <ul>
            <li><strong>Indeks Harga Konsumen (IHK):</strong> Mengukur perubahan harga dari barang dan jasa yang dikonsumsi oleh rumah tangga.</li>
            <li><strong>Indeks Harga Produsen (IHP):</strong> Mengukur perubahan harga barang dan jasa pada tingkat produsen.</li>
            <li><strong>Indeks Harga Perdagangan Besar (IHPB):</strong> Mengukur perubahan harga di tingkat grosir atau perdagangan besar.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>6. Kebijakan Pengendalian Inflasi</h2>
        <h3>a. Kebijakan Moneter</h3>
        <ul>
          <li><strong>Kenaikan Suku Bunga:</strong> Meningkatkan suku bunga untuk mengurangi jumlah uang beredar.</li>
          <li><strong>Operasi Pasar Terbuka:</strong> Menjual surat berharga untuk mengurangi likuiditas di pasar.</li>
          <li><strong>Kebijakan Cadangan Wajib:</strong> Meningkatkan cadangan wajib yang harus disimpan oleh bank untuk mengurangi kredit yang diberikan.</li>
        </ul>

        <h3>b. Kebijakan Fiskal</h3>
        <ul>
          <li><strong>Pengurangan Pengeluaran Pemerintah:</strong> Mengurangi pengeluaran pemerintah untuk menurunkan permintaan agregat.</li>
          <li><strong>Peningkatan Pajak:</strong> Meningkatkan pajak untuk mengurangi pendapatan disposable dan, dengan demikian, permintaan.</li>
        </ul>

        <h3>c. Kebijakan Lainnya</h3>
        <ul>
          <li><strong>Kontrol Harga:</strong> Mengendalikan harga barang-barang penting untuk mencegah kenaikan harga yang berlebihan.</li>
          <li><strong>Subsidi:</strong> Memberikan subsidi untuk mengurangi biaya produksi dan menjaga harga tetap rendah.</li>
        </ul>
      </section>

      <section>
        <h2>7. Studi Kasus: Inflasi di Berbagai Negara</h2>
        <ul>
          <li><strong>Hiperinflasi di Zimbabwe:</strong> Pada akhir 2000-an, Zimbabwe mengalami hiperinflasi ekstrem dengan tingkat inflasi mencapai miliaran persen, yang menghancurkan ekonomi dan menyebabkan krisis kemanusiaan.</li>
          <li><strong>Inflasi di Indonesia:</strong> Indonesia pernah mengalami inflasi tinggi pada akhir 1990-an akibat krisis finansial Asia, yang menyebabkan harga-harga melonjak dan ekonomi mengalami kontraksi.</li>
        </ul>
      </section>

      <section>
        <h2>8. Kesimpulan</h2>
        <p>
          Inflasi adalah fenomena ekonomi yang kompleks dengan berbagai penyebab dan dampak. Pengelolaan inflasi memerlukan kebijakan yang tepat dari pemerintah dan bank sentral untuk menjaga stabilitas ekonomi dan kesejahteraan masyarakat. Pemahaman tentang inflasi penting bagi individu dan bisnis untuk membuat keputusan ekonomi yang lebih baik.
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlEko11b7"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b6")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Eko11b8")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab7;