import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Mtk12b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Aturan Pencacahan</h1>

      <section>
        <h2>1. Pengertian Aturan Pencacahan</h2>
        <p>
          Kaidah pencacahan berfungsi untuk membantu kita menghitung jumlah kemungkinan atau pola-pola tertentu dengan cara yang lebih sistematis. 
          Kaidah pencacahan bisa diterapkan di banyak kasus, mulai dari masalah kombinatorik, probabilitas, hingga statistik.
        </p>
        <p>
          Intinya kaidah pencacahan adalah cabang matematika yang membahas cara menghitung banyaknya susunan atau kombinasi suatu objek tanpa harus merinci semua kemungkinan susunannya.
        </p>
        <p>
          Bayangkan, jika kamu diminta untuk membuka kunci dengan 10 ribu kemungkinan, pasti akan membutuhkan waktu dan ketelitian yang lama kan? 
          Nah, untuk itulah materi kaidah pencacahan membantu untuk mencari kemungkinannya dalam waktu singkat.
        </p>
      </section>

      <section>
        <h2>2. Penerapan dalam Kehidupan Sehari-hari</h2>
        <h3>a. Memilih Pakaian untuk Bekerja</h3>
        <p>
          Misalnya, seseorang memiliki 5 kemeja dan 3 celana. Aturan pencacahan dapat digunakan untuk menghitung jumlah kombinasi pakaian yang dapat dipakai. 
          Dengan 5 pilihan kemeja dan 3 pilihan celana, total kombinasi adalah 5 × 3 = 15.
        </p>

        <h3>b. Menyusun Jadwal Olahraga Mingguan</h3>
        <p>
          Seorang pelajar ingin berolahraga 3 kali dalam seminggu, dengan pilihan olahraga seperti lari, berenang, dan bersepeda. Jika setiap olahraga hanya dilakukan sekali per minggu, maka aturan pencacahan digunakan untuk menghitung jumlah cara menyusun jadwal olahraga. 
          Dengan 3 olahraga yang berbeda dan 3 hari yang dipilih, total kombinasi penjadwalan adalah 3! = 6.
        </p>

        <h3>c. Memesan Makanan di Restoran</h3>
        <p>
          Di restoran, terdapat 4 pilihan hidangan utama, 3 minuman, dan 2 pilihan pencuci mulut. Jika seseorang ingin memesan satu hidangan utama, satu minuman, dan satu pencuci mulut, aturan pencacahan digunakan untuk menghitung jumlah kombinasi. Dengan 4 × 3 × 2 = 24 kemungkinan, pelanggan memiliki 24 cara berbeda untuk memilih menu lengkap.
        </p>
      </section>

      <section>
        <h2>3. Rumus Kaidah Pencacahan</h2>
        <h3>a. Penjumlahan</h3>
        <p>
          Digunakan untuk menghitung banyak kemungkinan yang ada dari beberapa kasus yang bisa dipilih atau dikombinasikan secara eksklusif. 
          Contoh: Jika kita punya 3 pilihan buku dan 4 pilihan film, maka banyak kemungkinannya adalah 3 + 4 = 7.
        </p>

        <h3>b. Perkalian</h3>
        <p>
          Digunakan jika kita punya beberapa kasus yang bisa dipilih, dikombinasikan secara bersamaan, atau saling tergantung satu sama lain.
          Contoh: Jika kita punya 3 pilihan baju dan 2 pilihan celana, maka banyak kemungkinan penampilan kita adalah 3 × 2 = 6.
        </p>
      </section>

      <section>
        <h2>4. Faktorial</h2>
        <p>
          Faktorial adalah operasi matematika yang digunakan untuk menghitung banyak kemungkinan susunan atau kombinasi dari beberapa objek yang tidak boleh diulang atau tidak boleh dipilih kembali. 
          Faktorial dituliskan dengan tanda seru (!). Contoh: 4! = 4 × 3 × 2 × 1 = 24.
        </p>
        <img src="../Image/ap1.png" alt="Membran Sel" className="section-image" />
      </section>

      <section>
        <h2>5. Permutasi</h2>
        <p>
          Permutasi adalah menghitung banyaknya susunan terurut dari objek-objek yang berbeda. 
          Contoh: Jika ada 3 objek, permutasi menghitung cara untuk mengatur objek-objek tersebut dalam urutan tertentu.
        </p>
        <img src="../Image/ap2.png" alt="Membran Sel" className="section-image" />
      </section>

      <section>
        <h2>6. Kombinasi</h2>
        <p>
          Kombinasi digunakan untuk menghitung banyaknya cara memilih objek-objek tertentu dari sekelompok objek tanpa memperhatikan urutannya. 
          Contoh: Dari 5 siswa, pilih 2 untuk menjadi ketua dan wakil ketua. Hasilnya dihitung dengan kombinasi.
        </p>
        <img src="../Image/ap3.png" alt="Membran Sel" className="section-image" />
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br />
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlMtk12b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/matematika/kelas-12")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Mtk12b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;
