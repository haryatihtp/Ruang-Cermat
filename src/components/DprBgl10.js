import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bgl101.jpg';
import tm2 from '../images/Bgl102.jpg';
import tm3 from '../images/Bgl103.jpg';
import tm4 from '../images/Bgl104.jpg';
import tm5 from '../images/Bgl105.jpg';
import tm6 from '../images/Bgl106.jpg';
import tm7 from '../images/Bgl107.jpg';
import tm8 from '../images/Bgl108.jpg';
import tm9 from '../images/Bgl109.jpg';
import tm10 from '../images/Bgl1010.jpg';
import tm11 from '../images/Bgl1011.jpg';
import tm12 from '../images/Bgl1012.jpg';
import tm13 from '../images/Bgl1013.jpg';
import tm14 from '../images/Bgl1014.jpg';
import tm15 from '../images/Bgl1015.jpg';
import tm16 from '../images/Bgl1016.jpg';

const teamData = [
  { id: 1, name: "FEBRI SILAEN", img: tm1, about: "Suka makan nasi" },
  { id: 2, name: "ROSSEVA APRILIA TAMBA", img: tm5, about: "Halo, aku Rosseva Aprilia Tamba biasa dipanggil Eva, aku punya kemampuan untuk bermain musik dan itu berubah menjadi hobiku. Orang-orang bilang tata bicara dan cara ku bersikap tidak seperti cewek pada hakekatnya, tapi itu sudah jadi hal lumrah yang aku dengar sejak SMA . Aku suka banget sama matcha, baik dalam bentuk minuman ataupun cemilan, matcha adalah andalanku. Cara bicaraku bisa dikatakan agak kasar, dan aku kadang tidak bisa mengontrol emosiku dengan baik, namun aku memiliki teman-teman yang baik dan mau berteman denganku"},
  { id: 3, name: "CHANTIQUE AMORELIA SHETTY NABABAN", img: tm9, about: "Aku heran karena kalau aku ngomong pasti dibilang teman² Chantikk suaramu kuat kali padahal menurutku itu kecil. Gak cuman teman-teman, kakak asuh juga katakan demikian. Terus aku orangnya itu perhatian. Perhatian ke satu prodi, lebih tepatnya yang dekat dengan aku. Sampai aku dijuluki sebagai Mother. Aku punya hobi yaitu memasak, paling suka kalau udh ngumpul di rumah karena dapat memasak." },
  { id: 4, name: "RUBEN KRISTIAN HAMONANGAN TAMBUNAN", img: tm13, about: "Kenalin nama gua Ruben Tambunan asal gua dari Jakarta hobi gua bermain game , gua orangnya baik hati dan tidak sombong kayaknya" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprBgl10 = () => {
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

export default DprBgl10;
