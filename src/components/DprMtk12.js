import React from 'react';
import '../css/Team.css';
import tm1 from '../images/tm1.jpg';
import tm2 from '../images/tm2.jpg';
import tm3 from '../images/tm3.jpg';
import tm4 from '../images/tm4.jpg';
import tm5 from '../images/tm5.jpg';
import tm6 from '../images/tm6.jpg';
import tm7 from '../images/tm7.jpg';
import tm8 from '../images/tm8.jpg';
import tm9 from '../images/tm9.jpg';
import tm10 from '../images/tm10.jpg';
import tm11 from '../images/tm11.jpg';
import tm12 from '../images/tm12.jpg';
import tm13 from '../images/tm13.jpg';
import tm14 from '../images/tm14.jpg';
import tm15 from '../images/tm15.jpg';
import tm16 from '../images/tm16.jpg';

const teamData = [
  { id: 1, name: "HIZKIA CRISTIAN SIAHAAN", img: tm1, about: "Aku orang yang kalau ngomong itu kadang kasar, nada suara ku tinggi, kata kata ku juga cukup bikin orang sakit hati, tapi tenang,, sebenarnya aku orang yang baik hati, itu lah aku Hizkia Cristian Siahaan aku suka nonton mukbang seafood, aku juga suka nonton komedi Korean." },
  { id: 2, name: "JONATAN RAJA BASA SIMAMORA", img: tm5, about: "Nama saya Jonathan Simamora,Panggil aja nathan Saya adalah mahasiswa It del akt 2024 Tidak terpikir sebelumnya ternyata bisa sampai sejauh ini saya bertahan sehingga dapat berpartisipasi dalam pembuatan web Ruang Belajar ini syukur saya panjatkan kepada tuhan atas kehendaknya kami dapat membangun web ini dengan sungguh" },
  { id: 3, name: "JESICA ROULI TUA NAPITUPULU", img: tm9, about: "Nama saya Jesica Rouli Tua Napitupulu, saya lahir di balige 10 maret 2006 usia saya saat ini 18 tahun saat ini saya sedang menempuh pendidikan di institusi teknologi del. Hobi saya yaitu membaca dan menonton film. Buku yang saya rekomendasikan adalah serial bumi karya tere liye dan series yang saya rekomendasikan adalah Harry Potter dan Stranger Things" },
  { id: 4, name: "Johanna Tampubolon", img: tm13, about: "Saya memiliki minat di bidang teknologi dan saya disini berniat untuk mengembangkan pengetahuan saya lebih. Melalui website ini, saya berharap bisa memberikan manfaat bagi Anda. Terima kasih telah mengunjungi!" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprMtk12 = () => {
  return (
    <div className="container">
      {teamData.map((teamMember, index) => (
        <div key={teamMember.id} className="team-section">
          <main className="main-section">
            <div className="left-section">
              <h3>{teamMember.name}</h3>
              <img
                src={teamMember.img}
                alt={`Profile of ${teamMember.name}`}
                className="profile-image"
              />
            </div>
            <div className="right-section">
              <h2 className="section-title">About Me</h2>
              <p className="description">{teamMember.about}</p>
            </div>
          </main>
          <section className="my-team">
            <div className="team-gallery">
              {myTeamImages[index] &&
                myTeamImages[index].map((image, i) => (
                  <img key={i} src={image} alt={`Team Member ${i + 1}`} className="team-image" />
                ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default DprMtk12;
