import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bing101.jpg';
import tm2 from '../images/Bing102.jpg';
import tm3 from '../images/Bing103.jpg';
import tm4 from '../images/Bing104.jpg';
import tm5 from '../images/Bing105.jpg';
import tm6 from '../images/Bing106.jpg';
import tm7 from '../images/Bing107.jpg';
import tm8 from '../images/Bing108.jpg';
import tm9 from '../images/Bing109.jpg';
import tm10 from '../images/Bing1010.jpg';
import tm11 from '../images/Bing1011.jpg';
import tm12 from '../images/Bing1012.jpg';
import tm13 from '../images/Bing1013.jpg';
import tm14 from '../images/Bing1014.jpg';
import tm15 from '../images/Bing1015.jpg';
import tm16 from '../images/Bing1016.jpg';

const teamData = [
  { id: 1, name: "SARAH AMELYA ZALUKHU", img: tm1, about: "Haloo aku sarah.. singkat saja saya cewe dan suka makan , saya orangnya pendiam tp ceria dan cill bgt bro, saya selalu mensyukuri hal-hal kecil contohnya bisa liat dia. jangan lupa bersyukur teman><" },
  { id: 2, name: "TRISTAN PANDRIS PASARIBU", img: tm5, about: "Halo, kenalin aku Tristan Pandris Pasaribu biasa dipanggil Tann. Aku orangnya bisa dibilang lumayan ambis dan rajin, aku bercita cita menjadi seorang developer yang dikenal akan karyanya. Oh iya aku penggemar One Piece kalo ada yang nonton." },
  { id: 3, name: "ANDREY KURNIA BAHTIAR SILALAHI", img: tm9, about: "Hai, namaku Andrey Silalahi, tapi teman-teman sering memanggilku Andrey. Aku punya tiga hal yang bikin hari-hariku penuh warna: bermain game, memancing, dan menikmati dentuman musik rock and roll yang membakar semangat! Orang bilang aku ini jahil, tapi itu semua karena aku percaya persahabatan sejati dibangun dari tawa, kejahilan kecil, dan momen tak terlupakan. Selain musik, aku juga cinta dunia programming. Bagiku, coding itu seperti membuat simfoni—harus rapi, selaras, dan keren. <br/> Mimpiku? Menjadi seorang fullstack programmer yang bisa menciptakan software yang dapat di gunakan musisi seperti sound efect. Jadi, yuk, kita bikin sesuatu yang seru bersama!" },
  { id: 4, name: "MARKUS YOGO SEPTIAN SARAGI", img: tm13, about: "Halo semua, kenalin aku Markus Saragi. aku punya nama panggilan yang aku sering jadiin personal branding yaitu markyzxa. Aku suka musik, ngoding, dan bermain game. Apa, anime favorit? 86 dong pastinya." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprBing10 = () => {
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

export default DprBing10;
