import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Mtk10p1.jpg';
import tm2 from '../images/Mtk10p2.jpg';
import tm3 from '../images/Mtk10p3.jpg';
import tm4 from '../images/Mtk10p4.jpg';
import tm5 from '../images/Mtk10p5.jpg';
import tm6 from '../images/Mtk10p6.jpg';
import tm7 from '../images/Mtk10p7.jpg';
import tm8 from '../images/Mtk10p8.jpg';
import tm9 from '../images/Mtk10p9.jpg';
import tm10 from '../images/Mtk10p10.jpg';
import tm11 from '../images/Mtk10p11.jpg';
import tm12 from '../images/Mtk10p12.jpg';

const teamData = [
  { id: 1, name: "Hugo Henock Morales Simorangkir", img: tm6, about: "Aku orang yang suka main musik, sering banget menghabiskan waktu buat main game, dan nggak bisa lepas dari kopi. Dalam obrolan, aku selalu mencoba pengertian, meskipun kadang nggak semua orang bisa aku pahami sepenuhnya. Tapi tenang aja, itu cuma caraku untuk lebih memahami situasi. Aku Aldi Fahrel Nababan, dan ya, aku orang yang santai tapi selalu mendengarkan." },
  { id: 2, name: "OCTAVIA M. SIDABUTAR", img: tm4, about: "aku orang nya suka nonton drama apalagi nonton drakor,suka jalan-jalan dan mencoba hal-hal baru" },
  { id: 3, name: "Novi Windyani Simanjuntak", img: tm9, about: "Aku orangnya gampang seru diajak ngobrol, suka banget bercanda, tapi jujur, aku juga mudah bosan kalau suasananya monoton. Aku selalu pengen coba hal-hal baru biar gak stuck di situ-situ aja. Kadang-kadang, aku bisa keras kepala kalau lagi yakin sama sesuatu, tapi di balik itu, aku sebenarnya sangat memperhatikan orang-orang yang aku sayang. Itu lah aku, Novi Windyani Simanjuntak. Saya suka menjelajahi tempat baru, menonton film komedi dan drakor , dan nyari inspirasi." },
];

const myTeamImages = [
  [tm5, tm7, tm8],
  [tm2, tm3, tm1],
  [tm10, tm11, tm12],
];

const Team = () => {
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

export default Team;
