import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Fsk11p1.jpg';
import tm2 from '../images/Fsk11p2.jpg';
import tm3 from '../images/Fsk11p3.jpg';
import tm4 from '../images/Fsk11p4.jpg';
import tm5 from '../images/Fsk11p5.jpg';
import tm6 from '../images/Fsk11p6.jpg';
import tm7 from '../images/Fsk11p7.jpg';
import tm8 from '../images/Fsk11p8.jpg';
import tm9 from '../images/Fsk11p9.jpg';
import tm10 from '../images/Fsk11p10.jpg';
import tm11 from '../images/Fsk11p11.jpg';
import tm12 from '../images/Fsk11p12.jpg';
import tm13 from '../images/Fsk11p13.jpg';
import tm14 from '../images/Fsk11p14.jpg';
import tm15 from '../images/Fsk11p15.jpg';
import tm16 from '../images/Fsk11p16.jpg';

const teamData = [
  { id: 1, name: "Arjuna Melix Sihombing", img: tm1, about: "Hidup untuk bernafas dan bernafas untuk hidup itulah diriku Arjuna Melix Sihombing" },
  { id: 2, name: "Elisabeth Putri Panggabean", img: tm5, about: "Aku orang nya introvert tidak terlalu suka berteman dengan banyak orang karna aku lebih suka menyendiri ini adalah aku Elisabeth Putri Panggabean aku suka nonton drama Korea,dan aku juga suka nonton sinetron" },
  { id: 3, name: "Mangatur Jeremi Silitonga", img: tm9, about: "Perkenalkan saya Mangatur Jeremi Silitonga, dengan hobi saya adalah menggambar hal hal unik yang ada di imajinasi saya, saya suka mendengarkan musik dan tertarik dalam bidang software" },
  { id: 4, name: "Esthefany Christin Sipahutar", img: tm13, about: "Annyeong chinguyaa! Aku Esthefany Christin Sipahutar, biasa dipanggil Esteh. Aku penggemar berat darkor and k-pop lohh hehehe, aku suka banget sama kyungsoo kalian harus tau dia segreen flag apah huhuhu mana cakep lagi, selain suka K-pop and drakor aku juga hobby banget sama yang namanya baking. Setiap orang punya cerita seru, kan? Aku suka ngejar mimpi meski jalannya kadang nggak mudah, persis kayak Han Ji-pyeong di Start-Up. Kalau kamu juga suka drakor, yuk ngobrol bareng soal drama atau OST yang bikin hati meleleh. Let’s make life as seru as episode drakor yang nggak pernah bosen!" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
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
