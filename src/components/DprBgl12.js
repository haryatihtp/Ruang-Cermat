import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bgl121.jpg';
import tm2 from '../images/Bgl122.jpg';
import tm3 from '../images/Bgl123.jpg';
import tm4 from '../images/Bgl124.jpg';
import tm5 from '../images/Bgl125.jpg';
import tm6 from '../images/Bgl126.jpg';
import tm7 from '../images/Bgl127.jpg';
import tm8 from '../images/Bgl128.jpg';
import tm9 from '../images/Bgl129.jpg';
import tm10 from '../images/Bgl1210.jpg';
import tm11 from '../images/Bgl1211.jpg';
import tm12 from '../images/Bgl1212.jpg';
import tm13 from '../images/Bgl1213.jpg';
import tm14 from '../images/Bgl1214.jpg';
import tm15 from '../images/Bgl1215.jpg';
import tm16 from '../images/Bgl1216.jpg';

const teamData = [
  { id: 1, name: "SHINTA ELDO MARPAUNG", img: tm1, about: "Halo, saya Shinta Eldo Marpaung dan saya adalah ketua kelompok Biologi Kelas 12. Saya suka belajar hal-hal baru dan menarik, seperti bahasa, memanah, berenang,  dan lain-lain." },
  { id: 2, name: "NOVA WINDYANA SIMANJUNTAK", img: tm5, about: "Ngikutin alur, tapi sering nyasar." },
  { id: 3, name: "SHANDRA GRACE NAINGGOLAN", img: tm9, about: "Saya orangnya baik hati dan hobi saya menggambar saya suka ngeluh kalo banyak tugas dan saya juga agak malas ya gess tapi tetap semangat dalam menjalani hidup dan juga perkuliahan saya, itulah saya shandra nainggolan" },
  { id: 4, name: "NAHESSON SUGOS NAINGGOLAN", img: tm13, about: "Namaku Nahesson Sugos Nainggolan! Aku orangnya tidak begitu tertarik dengan realita, namun terkadang saya juga sadar bahwa saya punya mimpi besar untuk menjadi orang hebat. Untuk itulah, seiring waktu, saya tergerak untuk mau berubah dan menapak ke jenjang yang lebih tinggi lagi. Sekian sinopsis singkat hidup saya yang mungkin tiada maknany, namun saya yakin ketika kian kita telah bertemu,kau pasti akan melihat sisi asikku yang tiada taranya." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprBgl12 = () => {
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

export default DprBgl12;
