import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl11b3.css';

const Bab3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab3-container">
      <h1>Bab 3: Proses Pengaturan pada Tumbuhan</h1>

      <section>
        <h2>1. Pengertian Pengaturan pada Tumbuhan</h2>
        <p>
          Pengaturan pada tumbuhan merujuk pada serangkaian proses yang memungkinkan tumbuhan untuk merespons dan menyesuaikan diri dengan perubahan lingkungan. Proses ini melibatkan berbagai mekanisme yang menjaga keseimbangan internal tumbuhan, serta memungkinkan tumbuhan untuk bertahan hidup dan berkembang.
        </p>
      </section>

      <section>
        <h2>2. Pengaturan Pertumbuhan Tumbuhan</h2>
        <p>
          Tumbuhan mengatur pertumbuhannya melalui berbagai hormon yang memengaruhi perkembangan sel dan jaringan. Proses pengaturan ini penting agar tumbuhan dapat tumbuh dan berkembang dengan baik meskipun ada perubahan di lingkungan sekitar.
        </p>

        <h3>a. Hormon Auksin</h3>
        <p>
          Auksin adalah hormon tumbuhan yang berperan dalam mengatur pertumbuhan sel, terutama pada ujung batang dan akar. Auksin dapat memicu pemanjangan sel dan berperan penting dalam fototropisme dan gravitropisme.
        </p>
        <img src="/image/bab3.1.png" alt="Auksin" className="section-image" />

        <h3>b. Giberelin</h3>
        <p>
          Giberelin berfungsi untuk merangsang pertumbuhan batang, pembungaan, serta perkecambahan biji. Hormon ini juga membantu meningkatkan panjang sel.
        </p>
        <img src="/image/bab3.2.png" alt="Giberelin" className="section-image" />

        <h3>c. Sitokinin</h3>
        <p>
          Sitokinin berperan dalam merangsang pembelahan sel dan membantu pertumbuhan akar dan tunas lateral. Hormon ini juga terlibat dalam pembentukan bunga dan buah.
        </p>
        <img src="bab3.3.jpg" alt="Sitokinin" className="section-image" />
      </section>

      <section>
        <h2>3. Pengaturan Stomata</h2>
        <p>
          Stomata adalah pori-pori kecil yang terdapat pada daun tumbuhan, yang berfungsi untuk pertukaran gas (karbondioksida dan oksigen) serta pengaturan transpirasi (penguapan air). Pengaturan pembukaan dan penutupan stomata sangat penting untuk mengurangi kehilangan air berlebih serta mendukung fotosintesis.
        </p>
        <img src="/image/bab3.4.jpg" alt="Stomata" className="section-image" />
      </section>

      <section>
        <h2>4. Fototropisme dan Gravitropisme</h2>
        <p>
          Fototropisme adalah respons tumbuhan terhadap cahaya, sedangkan gravitropisme adalah respons terhadap gaya gravitasi. Kedua proses ini mengatur pertumbuhan tumbuhan agar dapat memaksimalkan penyerapan cahaya dan nutrisi yang dibutuhkan untuk fotosintesis.
        </p>

        <h3>a. Fototropisme</h3>
        <p>
          Pada fototropisme positif, tumbuhan tumbuh menuju sumber cahaya untuk meningkatkan efisiensi fotosintesis. Hal ini dipengaruhi oleh hormon auksin yang mengatur pertumbuhan sel pada sisi yang tidak terkena cahaya.
        </p>
        <img src="/image/bab3.5.jpg" alt="Fototropisme" className="section-image" />

        <h3>b. Gravitropisme</h3>
        <p>
          Gravitropisme mengatur arah pertumbuhan tumbuhan terhadap gravitasi. Akar tumbuh ke bawah (gravitropisme positif) untuk mencari air dan nutrisi, sementara batang tumbuh ke atas (gravitropisme negatif) untuk mencapai cahaya.
        </p>
        <img src="/image/bab3.6.jpg" alt="Gravitropisme" className="section-image" />
      </section>

      <section>
        <h2>5. Pengaturan Transpirasi</h2>
        <p>
          Transpirasi adalah proses penguapan air dari tumbuhan, terutama melalui stomata pada daun. Pengaturan transpirasi sangat penting untuk menjaga keseimbangan air dalam tubuh tumbuhan, terutama dalam kondisi lingkungan yang panas atau kekurangan air.
        </p>
        <img src="/image/bab3.7.jpg" alt="Transpirasi" className="section-image" />
      </section>

      <section>
        <h2>6. Pengaturan Reproduksi pada Tumbuhan</h2>
        <p>
          Tumbuhan memiliki mekanisme pengaturan yang mengontrol proses reproduksi. Proses ini melibatkan berbagai hormon yang mengatur pembentukan bunga, pembuahan, dan perkecambahan biji.
        </p>

        <h3>a. Pembentukan Bunga</h3>
        <p>
          Pembentukan bunga dipengaruhi oleh hormon fitohormon yang merangsang pembentukan bunga pada tanaman. Beberapa hormon yang terlibat adalah auksin dan giberelin.
        </p>
        <img src="/image/bab3.8.jpg" alt="Pembentukan Bunga" className="section-image" />

        <h3>b. Pembuahan dan Perkecambahan</h3>
        <p>
          Setelah pembuahan, biji mulai berkembang dan berkecambah menjadi tumbuhan baru. Proses ini juga dipengaruhi oleh hormon seperti giberelin yang merangsang perkecambahan.
        </p>
        <img src="/image/bab3.9.PNG" alt="Pembuahan dan Perkecambahan" className="section-image" />
      </section>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBgl11b3"}
        >
          Mulai Latihan Soal
        </button>
      </div>
       {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b2")}
        >
          Kembali ke Bab Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Bgl11b4")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab3;