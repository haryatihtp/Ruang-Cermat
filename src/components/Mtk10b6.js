import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk10b1.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab4-container">

      <h1>Bab 6: Transformasi Geometri</h1>
      <section>
        <h2>A. Pengertian Transformasi Geometri</h2>
        <h3>1. Pengertian Transformasi Geometri</h3>
        <p>
          Transformasi geometri adalah proses perubahan posisi atau bentuk suatu objek dalam ruang atau bidang dengan menggunakan operasi matematika tertentu. Pada umumnya, transformasi geometri berhubungan dengan perubahan pada koordinat titik-titik yang membentuk objek tersebut.
          Transformasi geometri dapat dibedakan menjadi beberapa jenis, yang masing-masing memiliki efek yang berbeda terhadap objek yang ditransformasikan.
        </p>
        
        <h3>2. Jenis-Jenis Transformasi Geometri</h3>
        <h4>a. Translasi (Perpindahan)</h4>
        <p>
          Translasi adalah transformasi yang memindahkan setiap titik pada objek sejauh jarak tertentu dalam arah tertentu tanpa merubah bentuk atau ukuran objek tersebut. Jika titik P(x, y) ditranslasikan dengan vektor (a, b), maka posisi titik baru P' menjadi:
          <br />
          P'(x', y') = (x + a, y + b)
        </p>

        <h4>b. Refleksi (Pencerminan)</h4>
        <p>
          Refleksi atau pencerminan adalah transformasi yang menghasilkan gambar bayangan objek dengan mencerminkan objek terhadap suatu garis atau bidang. Ada dua jenis refleksi yang umum, yaitu refleksi terhadap garis dan refleksi terhadap titik.
          - Refleksi terhadap garis y = 0 (sumbu-x): P(x, y) menjadi P'(-x, y)
          - Refleksi terhadap garis x = 0 (sumbu-y): P(x, y) menjadi P'(-x, -y)
        </p>

        <h4>c. Rotasi (Putaran)</h4>
        <p>
          Rotasi adalah transformasi yang memutar objek dengan suatu sudut tertentu di sekitar titik tetap (pusat rotasi). Jika objek diputar dengan sudut θ di sekitar titik asal (0,0), maka koordinat titik P(x, y) setelah rotasi menjadi:
          <br />
          P'(x', y') = (x cos θ - y sin θ, x sin θ + y cos θ)
        </p>

        <h4>d. Dilatasi (Perbesaran/Pengecilan)</h4>
        <p>
          Dilatasi adalah transformasi yang mengubah ukuran objek tanpa merubah bentuknya, berdasarkan faktor perbesaran atau pengecilan. Jika titik P(x, y) diperbesar dengan faktor k, maka titik baru P'(x', y') akan menjadi:
          <br />
          P'(x', y') = (k * x, k * y)
          Di mana k adalah faktor skala yang menentukan apakah objek akan diperbesar (k lebih besar dari 1) atau diperkecil (0 lebih kecil dai k lebih kecil dari 1).
        </p>

        <h4>e. Shearing (Shear atau Distorsi)</h4>
        <p>
          Shearing atau distorsi adalah transformasi yang memindahkan objek dengan menggeser titik-titik pada objek sepanjang arah sumbu tertentu. Contoh shearing dalam sumbu-x:
          <br />
          P'(x', y') = (x + ky, y)
          Di mana k adalah faktor shear, dan operasi ini akan menyebabkan perubahan bentuk objek tetapi tidak merubah area objek.
        </p>

        <h2>B. Sifat-Sifat Transformasi Geometri</h2>
        <h3>1. Transformasi Isometri</h3>
        <p>
          Transformasi isometri adalah transformasi yang tidak mengubah jarak antara titik-titik pada objek, sehingga bentuk dan ukuran objek tetap sama. Jenis transformasi yang termasuk dalam kategori isometri adalah translasi, refleksi, dan rotasi.
        </p>

        <h3>2. Transformasi Non-Isometri</h3>
        <p>
          Transformasi non-isometri adalah transformasi yang mengubah jarak dan bentuk objek, yang mengakibatkan perubahan ukuran atau bentuk objek. Dilatasi adalah contoh transformasi non-isometri.
        </p>

        <h3>3. Komposisi Transformasi</h3>
        <p>
          Komposisi transformasi adalah penerapan lebih dari satu transformasi pada objek secara berurutan. Misalnya, jika objek pertama ditranslasikan, kemudian diputar, maka objek tersebut telah mengalami komposisi antara translasi dan rotasi.
          Dalam komposisi, urutan transformasi sangat penting, karena hasil akhir bisa berbeda tergantung urutannya.
        </p>

        <h2>C. Aplikasi Transformasi Geometri</h2>
        <p>
          Transformasi geometri memiliki banyak aplikasi dalam kehidupan sehari-hari dan berbagai bidang ilmu, di antaranya:
          <ul>
            <li><strong>Desain grafis:</strong> Transformasi digunakan untuk merancang logo, grafis, dan elemen visual lainnya dengan mempertimbangkan skala dan orientasi objek.</li>
            <li><strong>Animasi komputer:</strong> Animasi digital menggunakan berbagai transformasi geometri untuk membuat gerakan karakter dan objek dalam ruang tiga dimensi.</li>
            <li><strong>Robotika:</strong> Dalam robotika, transformasi digunakan untuk mengendalikan pergerakan robot dalam ruang tiga dimensi dan memahami posisi objek relatif terhadap robot.</li>
            <li><strong>Geografi:</strong> Transformasi digunakan dalam pemetaan dan proyeksi peta untuk mengubah koordinat geografi ke dalam format kartografi.</li>
          </ul>
        </p>

        <h2>D. Teknik-Teknik dalam Mengerjakan Soal Transformasi Geometri</h2>
        <h3>1. Menyelesaikan Soal Translasi</h3>
        <p>
          Untuk menyelesaikan soal yang melibatkan translasi, kita cukup menambahkan atau mengurangi nilai koordinat titik dengan vektor yang diberikan.
        </p>

        <h3>2. Menyelesaikan Soal Refleksi</h3>
        <p>
          Dalam soal refleksi, kita harus mengidentifikasi garis refleksi dan menerapkan aturan pencerminan terhadap koordinat titik sesuai dengan sumbu yang disebutkan dalam soal.
        </p>

        <h3>3. Menyelesaikan Soal Rotasi</h3>
        <p>
          Untuk soal rotasi, kita perlu menghitung posisi titik setelah diputar dengan sudut tertentu menggunakan rumus rotasi yang sudah disebutkan sebelumnya.
        </p>

        <h2>E. Soal Latihan</h2>
        <p>
          Untuk lebih memahami konsep transformasi geometri, mari kita kerjakan beberapa soal latihan:
          <ul>
            <li>Jika titik P(3, 4) ditranslasikan dengan vektor (2, -3), tentukan posisi titik baru P'!</li>
            <li>Refleksikan titik Q(-2, 5) terhadap garis y = x!</li>
            <li>Putar titik R(1, 1) sebesar 90 derajat terhadap titik asal!</li>
            <li>Perbesar titik S(2, 3) dengan faktor 2!</li>
          </ul>
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk11b6"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b5")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk10b7")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab6;