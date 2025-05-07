import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Kma101.jpg';
import tm2 from '../images/Kma102.jpg';
import tm3 from '../images/Kma103.jpg';
import tm4 from '../images/Kma104.jpg';
import tm5 from '../images/Kma105.jpg';
import tm6 from '../images/Kma106.jpg';
import tm7 from '../images/Kma107.jpg';
import tm8 from '../images/Kma108.jpg';
import tm9 from '../images/Kma109.jpg';
import tm10 from '../images/Kma1010.jpg';
import tm11 from '../images/Kma1011.jpg';
import tm12 from '../images/Kma1012.jpg';
import tm13 from '../images/Kma1013.jpg';
import tm14 from '../images/Kma1014.jpg';
import tm15 from '../images/Kma1015.jpg';
import tm16 from '../images/Kma1016.jpg';

const teamData = [
  { id: 1, name: "MICHAEL GOKMA TUA HUTAJULU", img: tm1, about: "Aku adalah orang yang suka berteman, suka bercanda, dan aku sangat suka belajar pemrograman dengan logika karna itu membantu untuk melatih logikaku." },
  { id: 2, name: "YOHANA NABABAN", img: tm5, about: "Aku Yohana Nababan. Orang yang percaya kalau senyum itu gratis, jadi aku suka banget bikin orang lain ketawa. Tapi jangan tertipu, aku juga bisa jadi orang paling serius kalau lagi ngejar sesuatu yang aku mau. Hidup itu harus seimbang, kan? Kadang bercanda, kadang serius." },
  { id: 3, name: "WIN GRACE SITANGGANG", img: tm9, about: "Haiii perkenalkan saya Win Grace, saya itu orangnya lumayan ceria dan suka menikmati keindahan tumbuhan, terutama bunga dan buah-buahan. Sebagai seorang ambivert, saya fleksibel dalam menyesuaikan diri dengan berbagai situasi. Saya senang membaca novel, terutama karya Tere Liye dan seri 'Why' yang bertema crime science, computer, disease, dan lainnya. Musik juga menjadi bagian besar dari hidup saya, dan saya selalu mendengarkannya untuk menemani aktivitas sehari-hari." },
  { id: 4, name: "GERY FAJAR NUGRAHA NABABAN", img: tm13, about: "Aku orang yang terlihat sombong, tapi aku  memang begitu aku malas bicara orangnya karena, ngapain? dan tidak ingin ikut campur urusan orang lain jadi kalau terlihat apatis ya gitu deh, yaudah lah ya itulah aku. Gery Nababan." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprKma10 = () => {
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

export default DprKma10;
