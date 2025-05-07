import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Mtk11p1.jpg';
import tm2 from '../images/Mtk11p2.jpg';
import tm3 from '../images/Mtk11p3.jpg';
import tm4 from '../images/Mtk11p4.jpg';
import tm5 from '../images/Mtk11p5.jpg';
import tm6 from '../images/Mtk11p6.jpg';
import tm7 from '../images/Mtk11p7.jpg';
import tm8 from '../images/Mtk11p8.jpg';
import tm9 from '../images/Mtk11p9.jpg';
import tm10 from '../images/Mtk11p10.jpg';
import tm11 from '../images/Mtk11p11.jpg';
import tm12 from '../images/Mtk11p12.jpg';
import tm13 from '../images/Mtk11p13.jpg';
import tm14 from '../images/Mtk11p14.jpg';
import tm15 from '../images/Mtk11p15.jpg';
import tm16 from '../images/Mtk11p16.jpg';

const teamData = [
  { id: 1, name: "Petrus Frans Firdaus Simbolon", img: tm9, about: "aku orang yang cukup perhatian, orang sering memujiku karena aku tampan dan hak itu membuatku semakin peraaya diri, aku memiliki suara yang besar dan sedikit cepat marah tetapi aku orang yang penyayang. itu lah aku Petrus Frans Firdaus Simbolon, mungkin segitu aja ya terimakasih." },
  { id: 2, name: "Yohanna Agatha Bertha Sihombing", img: tm6, about: "Hi !, aku Yohanna Agatha, aku suka gym tapi perut doang kalau tangan ga kuat please, suka kentang! kentangma di apain aja juga enak bro !, gasuka nasi:(, suka tidur tapi kalo berisik gabisa tidur hehe, aku juga humble banget orang nya parah, suka nongkrong, terus suka nonton tapi gatau mau nonton apa, sekian." },
  { id: 3, name: "galde rylin hutasoit", img: tm1, about:  "haloo, aku galde dipanggil cyntia. fun fact 'bout me : ku suka orange tapi sangat amat teramat tidak suka orange(buah)" },
  { id: 4, name: "Rahel Hasian Pardede", img: tm13, about: "Hobi mendengarkan musik dan film Korea. Memiliki pribadi yang disiplin,pemberani dan suka berbagi!" },
];

const myTeamImages = [
  [tm10, tm11, tm12],
  [tm5, tm7, tm8],
  [tm2, tm3, tm4],
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
