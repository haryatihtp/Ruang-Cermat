import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Fsk10b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1:Hukum Hooke</h1>

      <section>
        <h2>1. Pengertian Hukum Hooke</h2>
        <p>
          Hukum Hooke merupakan suatu hukum atau ketentuan tentang gaya yang ada di dalam bidang ilmu fisika yang terjadi karena adanya sifat elastisitas dari sebuah pegas. 
          Menurut Robert Hooke, seorang ilmuwan yang menemukan Hukum Hooke, benda dibedakan menjadi dua jenis, antara lain benda yang bersifat plastis dan benda yang bersifat elastis. 
          Dimana benda yang bersifat plastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu tidak bisa kembali ke bentuk semula setelah gaya yang diberikan hilang. 
          Sementara untuk benda elastis adalah benda yang mengalami perubahan ketika dikenai gaya dan benda itu bisa kembali ke bentuk semula ketika gaya tersebut dihilangkan.
        </p>
        <p>
          Robert Hooke melakukan sebuah percobaan untuk mengamati hubungan antara perubahan yang terjadi di antara benda elastis dan gaya yang diberikan kepada benda tersebut. 
          Dari percobaan tersebut, Hooke menemukan sebuah hukum tentang hubungan antara gaya dan perubahan gaya pegas yang sekarang dikenal dengan Hukum Hooke. 
          Besar gaya hooke tersebut secara proporsional akan berbanding lurus dengan gaya tariknya.
        </p>

        <h3>a. Rumus Hukum Hooke</h3>
        <p>
        Umumnya: F = k . Δx
        </p>
        <p>Dimana:
          <ul>
            <li>F = Gaya yang diberikan pada pegas (Newton) </li>
            <li>k = Tetapan gaya pegas (Newton/meter)</li>
            <li>Δx = Pertambahan panjang pegas (meter)</li>
          </ul>
          <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span>
        </p>
        
        <h3>b. Mencari k</h3>
        <p>
        Umumnya: k = F/Δx
        </p>
        <p>Dimana:
          <ul>
            <li>F = Gaya yang diberikan pada pegas (Newton) </li>
            <li>Δx = Pertambahan panjang pegas (meter)</li>
          </ul>
          <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span>
        </p>

        <h3>c. Mencari Δx</h3>
        <p>
        Umumnya: Δx = F/k
        </p>
        <p>Dimana:
          <ul>
            <li>F = Gaya yang diberikan pada pegas (Newton) </li>
            <li>k = Tetapan gaya pegas (Newton/meter)</li>
          </ul>
          <span style={{color:'red'}}>Namun ini akan berubah tergantung soalnya.</span>
        </p>
      </section>

      <section>
        <h2>2. Energi Potensial Pegas</h2>
        <p>
        Energi potensial pegas ini merupakan energi yang diperlukan untuk meregangkan pegas. Besar energi potensial yang ada di sebuah pegas bisa dihitung dari grafik hubungan yang bekerja di pegas dengan pertambahan panjang pegas itu sendiri. Energi potensial elastis atau pegas adalah energi yang terdapat pada benda-benda yang memiliki sifat elastis. Energi potensial elastis terjadi karena adanya kecenderungan benda untuk tetap berada pada posisi semula.
        Contohnya: Busur panah yang ditarik memiliki energi potensial elastisitas dalam tali busur, atau ketapel yang ditarik memiliki energi potensial elastisitas dalam tali ketapelnya.
        </p>

        <h3>a. Rumus Energi Potensial Pegas (Ver I)</h3>
        <p> 
        Ep = ½ F . x 
        </p>
        <p> Dimana: 
        <ul>
          <li>Ep = Energi Potensial Pegas (Joule)</li>
          <li>F = Gaya yang dibutuhkan (Newton) </li>
          <li>x = Pertambahan panjang pegas (meter)</li>
          </ul>
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Simple_harmonic_oscillator.gif" alt="Placeholder gif" className="section-image" />

        <h3>b. Rumus Energi Potensial Pegas (Ver II)</h3>
        <p> 
          Ep = ½ (k . x) . x 
        </p>
        <p> Dimana: </p>
        <ul>
          <li>Ep = Energi potensial pegas (Joule)</li>
          <li>k = Tetapan gaya pegas (Newton/meter)</li>
          <li>x = Pertambahan panjang pegas (meter)</li>
        </ul>
        <span className="text-danger">Rumus ini dipakai ketika F tidak diketahui namun k diketahui.</span>
        <img src="https://dutafisika.wordpress.com/wp-content/uploads/2018/04/fk5uac4ir414xqh-animated-large.gif" alt="Placeholder gif" className="section-image" />
      </section>

      <section>
        <h2>3. Besaran Hukum Hooke</h2>

        <h3>a. Tegangan </h3>
        <p>
        Tegangan merupakan suatu kondisi dari suatu benda yang mengalami pertambahan panjang saat suatu benda
        diberikan sebuah gaya di salah satu ujungnya, sementara ujung lainnya ditahan. Berikut ini adalah rumus
        tegangan:
        </p>
        <p>σ = F/A</p>
        <p>Dimana:
          <ul>
            <li>σ = tegangan (Newton/m<sup>2</sup>)</li>
            <li>F = gaya (N)</li>
            <li>A = luas penampang (m<sup>2</sup>)</li>
          </ul>
          </p>

        <h3>b. Regangan</h3>
        <p>
        Regangan merupakan sebuah perbandingan antara pertambahan panjang kawat dalam x meter dan panjang normal
        kawat dalam x meter. Berikut ini adalah rumus regangan:
        </p>
        <p>e = ΔL/Lo</p>
        <p>Dimana:
        <ul>
          <li>e = regangan</li>
          <li>ΔL = pertambahan panjang (meter)</li>
          <li>Lo = panjang mula atau awal (meter)</li>
        </ul>
        </p>

        <h3>c.  Modulus Elastisitas </h3>
        <p>
        Modulus elastisitas adalah perbandingan antara tegangan dan regangan yang dialami bahan. Hal itu
        dirumuskan dengan:
        </p>
        <p>E = σ/e</p>
        <p>Dimana:
          <ul>
            <li>E = Modulus Elastisitas (Newton/meter)</li>
            <li>σ = tegangan (Newton/m<sup>2</sup>)</li>
            <li>e = regangan</li>
          </ul>
        </p>

        <h3>d. Mampatan </h3>
        <p>
        Mampatan merupakan kondisi yang hampir sama dengan regangan. Bedanya hanya berada di arah perpindahan
        molekul benda setelah diberi sebuah gaya tertentu. Mampatan saat diberi gaya, maka molekul benda akan
        terdorong ke dalam.
        </p>

        <h3>e. Hubungan Antara Gaya Tarik dan Modulus Elastisitas </h3>
        <p>
        Hubungan antara gaya tarik dengan modulus elastisitas secara matematis dirumuskan sebagai berikut:
        </p>
        <p>(F/A) / (ΔL/Lo) = (F Lo) / (A ΔL)</p>
        <p>Dimana:
        <ul>
          <li>F = Gaya (N)</li>
          <li>E = Modulus Elastisitas (N/m)</li>
          <li>σ = tegangan (N/m<sup>2</sup>)</li>
          <li>e = regangan</li>
          <li>A = luas penampang (m<sup>2</sup>)</li>
          <li>ΔL = pertambahan panjang (m)</li>
        </ul>
      </p>
      </section>

      <section>
        <h2>4. Susunan Pegas</h2>
        <p>
        Hukum Hooke pada susunan pegas adalah hukum fisika yang menyatakan bahwa pertambahan panjang pegas berbanding lurus dengan gaya tarik yang diberikan, selama gaya tarik tersebut tidak melampaui batas elastisitas bahan.
        Susunan pegas sendiri terbagi menjadi dua jenis, yaitu:
        </p>

        <h3>a. Susunan Pegas Seri</h3>
        <p>Susunan seri ini merupakan kondisi dimana dua pegas mengalami tetapan pegas yang sama dalam sebuah rangkaian seri, maka panjang dari pegas itu akan berubah menjadi 2 kali lipat. Persamaannya adalah:</p>
        <p> Ks = ½ k </p>
        <p> Dimana: 
          <ul>
              <li> Ks = Persamaan Pegas </li>
              <li> k = konstanta pegas (N/m) </li>
          </ul>
        </p>
        <p> Sementara persamaan untuk pegas yang disusun secara seri adalah:</p>
        <p> Ks = k/n </p>
        <p> Dimana: 
          <ul>
            <li> Ks = Persamaan Pegas </li>
            <li> k = konstanta pegas (N/m) </li>
            <li> n = Jumlah pegas</li>
          </ul>
        </p>

        <h3>b. Susunan Pegas Paralel</h3>
        <p> Susunan paralel adalah kondisi ketika pegas disusun paralel maka pegas akan tetap seperti bentuk awal, tetapi luas dari penampangnya berubah menjadi 2x lipat dari semula jika pegas disusun dua buah. Persamaannya adalah:</p>
        <p> Kp = 2k</p>
        <p> Dimana:
          <ul>
            <li> Kp = Persamaan pegas pada susunan paralel </li>
            <li> k = konstanta pegas (N/m) </li>
          </ul>
        </p>
        <p> Sedangkan persamaan juka pegas memiliki tetapan yang sama dan disusun secara paralel persamaannya adalah:</p>
        <p> Kp = nk </p>
        <p> Dimana: 
          <ul>
            <li> Kp = Persamaan pegas pada susunan paralel </li>
            <li> k = konstanta pegas (N/m) </li>
            <li> n = Jumlah pegas </li>
          </ul>
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/fisika/kelas-10")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;