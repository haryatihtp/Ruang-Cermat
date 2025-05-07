import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bing121.jpg';
import tm2 from '../images/Bing122.jpg';
import tm3 from '../images/Bing123.jpg';
import tm4 from '../images/Bing124.jpg';
import tm5 from '../images/Bing125.jpg';
import tm6 from '../images/Bing126.jpg';
import tm7 from '../images/Bing127.jpg';
import tm8 from '../images/Bing128.jpg';
import tm9 from '../images/Bing129.jpg';
import tm10 from '../images/Bing1210.jpg';
import tm11 from '../images/Bing1211.jpg';
import tm12 from '../images/Bing1212.jpg';
import tm13 from '../images/Bing1213.jpg';
import tm14 from '../images/Bing1214.jpg';
import tm15 from '../images/Bing1215.jpg';
import tm16 from '../images/Bing1216.jpg';

const teamData = [
  { id: 1, name: "PAULUS C. K. MANURUNG", img: tm1, about: "Gak suka ribet ga suka menawar banyak itss Paulus Manurung, aku lebih suka to The point." },
  { id: 2, name: "NOVSIANA RIBKA MASNAULI SILALAHI", img: tm5, about: "Aku orangny pemarah, pemalu, nada suaraku tinggi, tapi aslinya aku sangat baikkk. Aku suka nonton drakor, main mobile legend tapi semenjak aku di del aku jadi sangat jarang nonton drakor dan bermain mobile legend. Ini la aku Novsiana sipaling ceria:)" },
  { id: 3, name: "KASIH IMMANUELA BR SAMOSIR", img: tm9, about: "aku adalah mahasiswa yang antusias untuk belajar dan berkembang. aku punya hobi kecil seperti menulis jurnal harian, mendengar musik, dan menonton film fantasi/trilogi. Aku tipikal orang yang ceria, tapi kalau marah/cemberut jadi garang sekali." },
  { id: 4, name: "HARYATI HUTAPEA", img: tm13, about: "Aku orang yang pendiam, baik dan tidak sombong. aku gak suka dengan keributan dan kadang ngegas sama org_-. Aku adalah haryati ,mungkin aku terliat sedikit galak,TAPII aku orang yang baik,dan senang membantu orang sebisa kemampuan ku." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprBing12 = () => {
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

export default DprBing12;
