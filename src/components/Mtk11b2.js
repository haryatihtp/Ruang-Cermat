import React from "react";
import { useNavigate } from "react-router-dom";
// import './bab2.css';

const Bab2 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab2-container">
      <h1>Bab 2: Transformasi Geometri</h1>

      <section>
        <h2>1. Pengertian Transformasi Geometri</h2>
        <p>
          Transformasi geometri adalah perubahan posisi atau bentuk objek dalam bidang datar. Dalam matematika, transformasi digunakan untuk memanipulasi objek-objek geometris dengan cara tertentu, seperti memindahkan, merotasi, atau mengubah ukurannya. 
          Ada beberapa jenis transformasi geometri yang digunakan untuk memetakan objek dari satu posisi ke posisi lain.
        </p>
      </section>

      <section>
        <h2>2. Jenis-Jenis Transformasi Geometri</h2>
        <p>
          Terdapat berbagai jenis transformasi geometri yang umum digunakan dalam matematika. Beberapa di antaranya adalah:
        </p>

        <h3>a. Translasi (Pergeseran)</h3>
        <p>
          Translasi adalah transformasi yang memindahkan setiap titik objek sejauh jarak tertentu dalam arah tertentu tanpa mengubah bentuk atau ukuran objek. Semua titik objek bergerak dengan cara yang sama.
        </p>

        <h3>b. Rotasi</h3>
        <p>
          Rotasi adalah transformasi yang memutar objek pada titik pusat tertentu dengan sudut putaran tertentu. Semua titik objek bergerak dengan jarak yang sama dari titik pusat rotasi.
        </p>

        <h3>c. Refleksi (Pemantulan)</h3>
        <p>
          Refleksi adalah transformasi yang memantulkan objek terhadap suatu garis (garis refleksi). Setiap titik objek dipantulkan pada posisi yang sama dengan jarak yang sama terhadap garis refleksi.
        </p>

        <h3>d. Dilatasi (Perbesaran atau Pengecilan)</h3>
        <p>
          Dilatasi adalah transformasi yang mengubah ukuran objek, baik memperbesar maupun memperkecilnya, dengan mempertahankan bentuk objek tersebut. Perubahan ukuran ini bergantung pada faktor skala yang diberikan.
        </p>
      </section>

      <section>
        <h2>3. Sifat-Sifat Transformasi Geometri</h2>
        <p>
          Setiap jenis transformasi memiliki sifat-sifat tertentu, seperti kesamaan bentuk dan ukuran, serta posisi relatif objek sebelum dan setelah transformasi. Beberapa sifat transformasi antara lain:
        </p>
        <ul>
          <li>
            <strong>Kekekalan Jarak:</strong> Transformasi seperti translasi, rotasi, dan refleksi menjaga jarak antara titik-titik pada objek, sehingga objek tetap memiliki ukuran yang sama setelah transformasi.
          </li>
          <li>
            <strong>Kekekalan Sudut:</strong> Transformasi ini mempertahankan besar sudut antara garis atau sisi pada objek, seperti yang terjadi pada rotasi dan refleksi.
          </li>
          <li>
            <strong>Kekekalan Pararelisme:</strong> Transformasi seperti translasi dan rotasi mempertahankan garis-garis yang sejajar tetap sejajar setelah transformasi.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Matriks Transformasi</h2>
        <p>
          Matriks digunakan untuk menggambarkan dan memanipulasi transformasi geometri. Dalam transformasi, setiap jenis transformasi dapat diwakili oleh matriks tertentu. Matriks transformasi ini digunakan untuk menghitung posisi titik setelah transformasi dilakukan.
        </p>

        <h3>a. Matriks Translasi</h3>
        <p>
          Translasi dalam bidang dua dimensi dapat diwakili dengan matriks 3x3. Matriks translasi digunakan untuk memindahkan titik objek dengan menambahkan nilai translasi pada koordinat x dan y.
        </p>

        <h3>b. Matriks Rotasi</h3>
        <p>
          Rotasi dalam bidang dua dimensi dapat diwakili dengan matriks rotasi, yang bergantung pada sudut rotasi dan posisi titik pusat rotasi. Matriks ini digunakan untuk memutar objek pada titik pusat dengan sudut tertentu.
        </p>
      </section>

      <section>
        <h2>5. Aplikasi Transformasi Geometri</h2>
        <p>
          Transformasi geometri memiliki banyak aplikasi dalam berbagai bidang, seperti:
        </p>
        <ul>
          <li>
            <strong>Grafika Komputer:</strong> Transformasi digunakan untuk memanipulasi objek dalam komputer, seperti memutar, memperbesar, atau menggeser gambar.
          </li>
          <li>
            <strong>Desain Arsitektur:</strong> Dalam arsitektur, transformasi digunakan untuk merancang bangunan dan struktur dengan berbagai rotasi dan refleksi.
          </li>
          <li>
            <strong>Robotika:</strong> Dalam perencanaan gerak robot, transformasi digunakan untuk menghitung pergerakan dan posisi robot dalam ruang tiga dimensi.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Kelainan pada Transformasi Geometri</h2>
        <p>
          Beberapa kelainan yang dapat terjadi dalam transformasi geometri meliputi kesalahan dalam perhitungan sudut atau faktor skala, yang dapat mengubah hasil akhir dari transformasi.
        </p>
        <ul>
          <li>
            <strong>Kesalahan dalam Matriks Transformasi:</strong> Kesalahan dalam penggunaan matriks untuk transformasi dapat menyebabkan posisi objek yang tidak sesuai.
          </li>
          <li>
            <strong>Perubahan Tidak Proporsional:</strong> Kesalahan dalam faktor skala pada dilatasi dapat menyebabkan perubahan ukuran objek yang tidak proporsional.
          </li>
        </ul>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b2"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      {/* Navigasi Halaman */}
      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b1")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk11b3")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab2;