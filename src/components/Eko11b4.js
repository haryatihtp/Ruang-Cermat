import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Eko11b4.css';

const Bab4 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">
      <h1>Bab 4: Permintaan dan Penawaran</h1>

      <section>
        <h2>1. Pengertian Permintaan</h2>
        <p>
          Permintaan adalah jumlah barang atau jasa yang diinginkan oleh konsumen pada berbagai tingkat harga dalam suatu periode waktu tertentu. Permintaan didasarkan pada kemampuan dan keinginan konsumen untuk membeli barang atau jasa.
        </p>

        <h3>Faktor-Faktor yang Mempengaruhi Permintaan:</h3>
        <ul>
          <li>Harga Barang Itu Sendiri: Ketika harga barang naik, biasanya permintaan akan menurun, dan sebaliknya.</li>
          <li>Pendapatan Konsumen: Peningkatan pendapatan konsumen cenderung meningkatkan permintaan, sedangkan penurunan pendapatan akan menurunkannya.</li>
          <li>Harga Barang Substitusi: Jika harga barang substitusi (pengganti) naik, permintaan untuk barang tersebut akan meningkat.</li>
          <li>Selera dan Preferensi: Perubahan selera dan preferensi konsumen dapat mempengaruhi permintaan.</li>
          <li>Harapan Harga di Masa Depan: Jika konsumen mengharapkan harga barang naik di masa depan, mereka cenderung membeli lebih banyak sekarang.</li>
        </ul>
      </section>

      <section>
        <h2>2. Pengertian Penawaran</h2>
        <p>
          Penawaran adalah jumlah barang atau jasa yang tersedia untuk dijual oleh produsen pada berbagai tingkat harga dalam suatu periode waktu tertentu. Penawaran mencerminkan keinginan dan kemampuan produsen untuk menjual barang atau jasa pada berbagai tingkat harga.
        </p>

        <h3>Faktor-Faktor yang Mempengaruhi Penawaran:</h3>
        <ul>
          <li>Harga Barang Itu Sendiri: Ketika harga barang naik, biasanya penawaran akan meningkat, dan sebaliknya.</li>
          <li>Biaya Produksi: Peningkatan biaya produksi akan mengurangi penawaran, sementara penurunan biaya produksi akan meningkatkannya.</li>
          <li>Teknologi: Kemajuan teknologi dapat meningkatkan efisiensi produksi dan meningkatkan penawaran.</li>
          <li>Harga Barang Pengganti: Jika harga barang pengganti naik, produsen mungkin akan mengalihkan produksi ke barang yang lebih menguntungkan.</li>
          <li>Harapan Harga di Masa Depan: Jika produsen mengharapkan harga barang naik di masa depan, mereka mungkin menahan stok untuk dijual nanti.</li>
        </ul>
      </section>

      <section>
        <h2>3. Hukum Permintaan dan Hukum Penawaran</h2>
        <p>
          <strong>Hukum Permintaan:</strong> Jika harga suatu barang naik, jumlah yang diminta akan turun, dan jika harga turun, jumlah yang diminta akan naik, ceteris paribus (dengan asumsi faktor-faktor lain tetap).
        </p>
        <p>
          <strong>Hukum Penawaran:</strong> Jika harga suatu barang naik, jumlah yang ditawarkan akan naik, dan jika harga turun, jumlah yang ditawarkan akan turun, ceteris paribus.
        </p>
      </section>

      <section>
        <h2>4. Keseimbangan Pasar</h2>
        <p>
          Keseimbangan pasar terjadi ketika jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan pada suatu tingkat harga tertentu. Titik keseimbangan ini ditentukan oleh perpotongan kurva permintaan dan kurva penawaran.
        </p>

        <h3>Perubahan Keseimbangan:</h3>
        <ul>
          <li><strong>Kenaikan Permintaan:</strong> Jika permintaan naik sementara penawaran tetap, harga keseimbangan akan naik dan jumlah keseimbangan akan meningkat.</li>
          <li><strong>Penurunan Permintaan:</strong> Jika permintaan turun sementara penawaran tetap, harga keseimbangan akan turun dan jumlah keseimbangan akan berkurang.</li>
          <li><strong>Kenaikan Penawaran:</strong> Jika penawaran naik sementara permintaan tetap, harga keseimbangan akan turun dan jumlah keseimbangan akan meningkat.</li>
          <li><strong>Penurunan Penawaran:</strong> Jika penawaran turun sementara permintaan tetap, harga keseimbangan akan naik dan jumlah keseimbangan akan berkurang.</li>
        </ul>
      </section>

      <section>
        <h2>5. Elastisitas Permintaan dan Penawaran</h2>
        <h3>Elastisitas Permintaan:</h3>
        <p>
          Mengukur seberapa sensitif jumlah yang diminta terhadap perubahan harga.
        </p>
        <ul>
          <li><strong>Permintaan Elastis:</strong> Perubahan kecil pada harga menyebabkan perubahan besar pada jumlah yang diminta.</li>
          <li><strong>Permintaan Inelastis:</strong> Perubahan harga menyebabkan perubahan kecil pada jumlah yang diminta.</li>
        </ul>

        <h3>Elastisitas Penawaran:</h3>
        <p>
          Mengukur seberapa sensitif jumlah yang ditawarkan terhadap perubahan harga.
        </p>
        <ul>
          <li><strong>Penawaran Elastis:</strong> Perubahan kecil pada harga menyebabkan perubahan besar pada jumlah yang ditawarkan.</li>
          <li><strong>Penawaran Inelastis:</strong> Perubahan harga menyebabkan perubahan kecil pada jumlah yang ditawarkan.</li>
        </ul>
      </section>

      <section>
        <h2>6. Aplikasi Permintaan dan Penawaran</h2>
        <p>
          Pemahaman tentang permintaan dan penawaran sangat penting dalam pengambilan keputusan ekonomi. Misalnya:
        </p>
        <ul>
          <li><strong>Pemerintah:</strong> Menggunakan konsep ini untuk menetapkan kebijakan harga dan subsidi.</li>
          <li><strong>Perusahaan:</strong> Menggunakan analisis permintaan dan penawaran untuk strategi penetapan harga dan produksi.</li>
          <li><strong>Konsumen:</strong> Menggunakan pemahaman ini untuk membuat keputusan pembelian.</li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button
          className="btn-latihan"
          onClick={() => window.location.href = "/SlEko11b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button
          className="btn-navigate"
          onClick={() => navigate("/Eko11b3")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button
          className="btn-navigate"
          onClick={() => navigate("/Eko11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab4;