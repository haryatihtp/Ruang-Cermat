import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Eko101.jpg';
import tm2 from '../images/Eko102.jpg';
import tm3 from '../images/Eko103.jpg';
import tm4 from '../images/Eko104.jpg';
import tm5 from '../images/Eko105.jpg';
import tm6 from '../images/Eko106.jpg';
import tm7 from '../images/Eko107.jpg';
import tm8 from '../images/Eko108.jpg';
import tm9 from '../images/Eko109.jpg';
import tm10 from '../images/Eko1010.jpg';
import tm11 from '../images/Eko1011.jpg';
import tm12 from '../images/Eko1012.jpg';
import tm13 from '../images/Eko1013.jpg';
import tm14 from '../images/Eko1014.jpg';
import tm15 from '../images/Eko1015.jpg';
import tm16 from '../images/Eko1016.jpg';

const teamData = [
  { id: 1, name: "ALDI FAHREL NABABAN", img: tm1, about: "Aku orang yang suka main musik, sering banget menghabiskan waktu buat main game, dan nggak bisa lepas dari kopi. Dalam obrolan, aku selalu mencoba pengertian, meskipun kadang nggak semua orang bisa aku pahami sepenuhnya. Tapi tenang aja, itu cuma caraku untuk lebih memahami situasi. Aku Aldi Fahrel Nababan, dan ya, aku orang yang santai tapi selalu mendengarkan." },
  { id: 2, name: "BETHANIA PERMAI SIMANGUNSONG", img: tm5, about: "Aku orangnya gaenakan, tapi kadang org suka seenaknya sama aku. aku gabisa marah ke orang, aku juga orangnya gampang nangis tapii aku gampang happyy juga ko. aku suka coklat, samyang dan suka nonton hororr ><" },
  { id: 3, name: "KRISNA PUTRA IMMANUEL LUMBANTORUAN", img: tm9, about: "Aku Krisna Putra Immanuel, aku orangnya baik hati, rajin menabung, suka bersedekah, rajin beribadah, taat agama, taat orang tua, sayang keluarga, mampu membelah lautan, dan yg terpenting orangnya ganteng." },
  { id: 4, name: "DE PEDRO MONANG PANE", img: tm13, about: "Aku orangnya agak kasar dan emosian tapi tenang, sikap ku itu bisa terjadi hanya karna hal yang tidak baik, aku aslinya asik, soft spoken, dan pastinya ganteng. Aku orangnya suka sepak bola, drakor, dan gitar ataupun musik." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprEko10 = () => {
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

export default DprEko10;
