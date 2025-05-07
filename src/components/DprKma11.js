import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Kma111.jpg';
import tm2 from '../images/Kma112.jpg';
import tm3 from '../images/Kma113.jpg';
import tm4 from '../images/Kma114.jpg';
import tm5 from '../images/Kma115.jpg';
import tm6 from '../images/Kma116.jpg';
import tm7 from '../images/Kma117.jpg';
import tm8 from '../images/Kma118.jpg';
import tm9 from '../images/Kma119.jpg';
import tm10 from '../images/Kma1110.jpg';
import tm11 from '../images/Kma1111.jpg';
import tm12 from '../images/Kma1112.jpg';
import tm13 from '../images/Kma1113.jpg';
import tm14 from '../images/Kma1114.jpg';
import tm15 from '../images/Kma1115.jpg';
import tm16 from '../images/Kma1116.jpg';

const teamData = [
  { id: 1, name: "SAMUEL BONA TUA HUTAGAOL", img: tm1, about: "Aku orangnya baik (keknya), tatapan mata aing kadang tajam tapi dah bawaan lahir, tapi kek diawal, aku baik dan ramah( keknya ) , aku suka nonton film, dengar musik metal, punk, rock, math rock, classic, indie terkadang, suka gym, basket, sama nasi goreng dan beberapa makanan lainnya sama melihara kucing." },
  { id: 2, name: "NEUREE DANIELA GIANIK SIAGIAN", img: tm5, about: "Cheese, anime, game, and books that's all you need in life bud! Life is nice if your death." },
  { id: 3, name: "IMMANUEL PARLIN SIMORANGKIR", img: tm9, about: "Halo perkenalkan nama ku Immanuel Simorangkir dari D4 trpl dengan Nim 41424034, nah disini aku suka banget dengar musik, makan juga suka. kalau di pikir pikir, aku suka banget sama kucing yang kalau bukunya lebat. suara ku juga kadang tinggi kalau ada sesuatu yang kurang pas. Nah ini aku, terimakasih." },
  { id: 4, name: "BINSAR IMMANUEL SIREGAR", img: tm13, about: "Namaku Binsar Immanuel Siregar! Aku orang nya biasaa ajaa,Hidupku mungkin ngga sempurna,tapi aku percaya setiap langkah kecil bisa jadi besar.Udah dulu ya,takutnya makin kenal makin susah lupa." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprKma11 = () => {
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

export default DprKma11;
