import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bing111.jpg';
import tm2 from '../images/Bing112.jpg';
import tm3 from '../images/Bing113.jpg';
import tm4 from '../images/Bing114.jpg';
import tm5 from '../images/Bing115.jpg';
import tm6 from '../images/Bing116.jpg';
import tm7 from '../images/Bing117.jpg';
import tm8 from '../images/Bing118.jpg';
import tm9 from '../images/Bing119.jpg';
import tm10 from '../images/Bing1110.jpg';
import tm11 from '../images/Bing1111.jpg';
import tm12 from '../images/Bing1112.jpg';

const teamData = [
  { id: 1, name: "NICKY ROTIN SULUH MANULLANG", img: tm1, about: "Hay Guys cukup singkat aja perkenalkan saya nicky manullang kata orang sih aku orang nya cool atau bisa dibilang dingin, namun itu salah, nah sedikit lagi aku itu sukanya nyanyi walau ngak enak enak amat suaranyabya intinya bisalah buat orang jadi marah, dan kata mama aku itu baik, pintar, ramah, sopan dan satu lagi ganteng. Itu mata mama guah." },
  { id: 2, name: "ANGIE SOLITA SITORUS", img: tm5, about: "Kata orang aku pendiam tapi sebenarnya bukan begitu aku kalau udah dekat sama orang, aku bakal banyak  bicara itu lah aku Angie Solita Sitorus." },
  { id: 3, name: "YOEL LASOVA HUTABARAT", img: tm9, about: "Saya Seorang pria gagal mencapai cita-cita sebagai abdi negara, yang dimana saya terpaksa menciptakan jalan lain yaitu berkuliah di it del,dan saya berharap ketika saya lulus saya dapat mencapai cita-cita saya menjadi seorang yang berguna di bidang militer" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
];

const DprBing11 = () => {
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

export default DprBing11;
