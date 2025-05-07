import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl12b1.css';

const Bab1 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 1: Pertumbuhan dan Perkembangan</h1>

      <section>
        <h2>Pengertian</h2>
        <p>
          Pertumbuhan dalam biologi mengacu kepada perubahan fisik berupa pertambahan ukuran, volume, tinggi, dan massa. Ini terjadi karena selama dalam masa pertumbuhan, sel-sel dalam tubuh makhluk hidup bertambah banyak, alhasil jaringan-jaringan dan organ-organ dalam tubuh makhluk hidup pun ikut berubah semakin besar.
          <br/>
          Perubahan tubuh dalam pertumbuhan ini dapat diukur secara kuantitatif. Kita bisa mengukur tinggi dan berat badan kita menggunakan meteran dan timbangan badan. Pertumbuhan memiliki ciri yang sangat khas, yaitu bersifat irreversible alias tidak bisa balik lagi seperti semula. Selain disebabkan pertambahan ukuran sel, pertumbuhan juga terjadi karena pertambahan jumlah sel. Contohnya bayi yang baru lahir misalnya berukuran 45 cm dengan berat badan + 3 kg. Setelah mengalami pertumbuhan, tinggi badan dapat mencapai lebih dari 150 cm dan berat badan lebih dari 30 kg. 
        </p>
        <p>
          Perkembangan adalah proses menuju tercapainya kedewasaan. Pada tingkat seluler, perkembangan dapat berupa diferensiasi sel-sel yang baru membelah membentuk jaringan yang menyusun organ tertentu. Pada  tumbuhan perkembangan ditandai dengan munculnya bunga atau buah. Sedang pada hewan dan manusia ditandai dengan kematangan organ reproduksi sehingga siap untuk menghasilkan keturunan.
          <br/>
          Perkembangan juga menyebabkan perkembangan psikis dari usia bayi, anak-anak, dan menjadi dewasa. Berbeda dengan pertumbuhan, perkembangan tidak bisa dilihat dengan mata telanjang atau diukur dan ditimbang. Ini karena perkembangan dalam biologi mengacu kepada proses menuju kedewasaan. Karena tidak bisa diukur dan ditimbang, perkembangan cuma bisa diukur secara kualitatif.
        </p>
        <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/8/938dd698-0111-4ce6-a50f-c28f1e42f263.jpg" alt="Pertumbuhan dan Perkembangan" className="section-image" />
      </section>

      <section>
        <h2>Pertumbuhan dan Perkembangan pada Hewan</h2>
        <p>
          Pertumbuhan dan perkembangan pada hewan terjadi di seluruh bagian tubuh, berbeda dengan tumbuhan yang terjadi hanya pada bagian tertentu saja, yaitu di daerah meristem.
        </p>

        <p>
          Pertumbuhan dan perkembangan pada hewan diawali sejak terbentuknya zigot dari proses pembuahan dan terus terjadi hingga hewan mencapai usia dewasa. Dengan demikian pertumbuhan dan perkembangan pada hewan dapat dibagi menjadi dua bagian yaitu fase embrionik dan fase pascaembrionik.
        </p>

        <p>
          Fase embrionik adalah pertumbuhan dan perkembangan yang dimulai dari zigot sampai terbentuknya embrio sebelum lahir atau menetas. Sedangkan fase pascaembrionik merupakan pertumbuhan dan perkembangan yang dimulai sejak lahir atau menetas hingga hewan itu dewasa.
        </p>
        <img src="https://i0.wp.com/karedok.net/wp-content/uploads/metamorfosis-serangga.png?resize=1497%2C1118&ssl=1" alt="Pertumbuhan dan Perkembangan pada Hewan" className="section-image" />
      </section>

      <section>
        <h2>Pertumbuhan dan Perkembangan Tumbuhan</h2>
        <p>
          Dimulai sejak perkecambahan biji. Kecambah kemudian berkembang menjadi tumbuhan kecil yang sempurna. Setelah tumbuh hingga mencapai ukuran dan usia tertentu, tumbuhan akan berkembang membentuk bunga dan buah atau biji sebagai alat perkembangbiakannya.
        </p>

        <p>
          Pertumbuhan pada tumbuhan terjadi di daerah meristematis (titik tumbuh), yaitu bagian yang mengandung jaringan meristem. Jaringan ini terletak di ujung batang, ujung akar, dan kambium.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iwAF647X0FGWoJUjMPSL5PbsrmTqtnQ2-Q&s" alt="Pertumbuhan dan Perkembangan Tumbuhan" className="section-image" />

        <p>
          Aktivitas jaringan meristem yang terletak di ujung batan atau akar menghasilkan pola pertumbuhan yang berbeda bila dibandingkan dengan jaringan meristem di kambium. Oleh karena itu pertumbuhan pada tumbuhan dapat dibedakan menjadi dua macam, yaitu pertumbuhan primer dan pertumbuhan sekunder.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qflTCWocfbQ?si=vm150T3Xas_6s__f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
      
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl12b1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi/biologi/kelas-12")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl12b2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab1;