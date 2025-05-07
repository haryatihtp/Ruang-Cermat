import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Fsk10p1.jpg';
import tm2 from '../images/Fsk10p2.jpg';
import tm3 from '../images/Fsk10p3.jpg';
import tm4 from '../images/Fsk10p4.jpg';
import tm5 from '../images/Fsk10p5.jpg';
import tm6 from '../images/Fsk10p6.jpg';
import tm7 from '../images/Fsk10p7.jpg';
import tm8 from '../images/Fsk10p8.jpg';
import tm9 from '../images/Fsk10p9.jpg';
import tm10 from '../images/Fsk10p10.jpg';
import tm11 from '../images/Fsk10p11.jpg';
import tm12 from '../images/Fsk10p12.jpg';
import tm13 from '../images/Fsk10p13.jpg';
import tm14 from '../images/Fsk10p14.jpg';
import tm15 from '../images/Fsk10p15.jpg';
import tm16 from '../images/Fsk10p16.jpg';

const teamData = [
  { id: 1, name: "Andika Bartolomeus Purba", img: tm1, about: "Aku orangnya biasa aja, bisa bercanda dan juga bisa serius. Aku suka dunia teknologi yang menurutku sebagai senjata untuk menghadapi zaman. Kebiasaanku belajar hal baru yang belum aku tau. Terkadang aku bosan dan ga niat melakukan aktivitas. Jika aku bosan, Aku pun memutuskan untuk berolahraga di waktu kosong seperti bermain badminton, basket, easy run dll." },
  { id: 2, name: "Rima Mutiara Gultom ", img: tm6, about: "halooo gaizz kenalin aku Rima Mutiara Gultom akuu tuh sukaa banget makeup jugaa sukaa koleksi baju lucuu gitu tapi karenaa aku tinggal di Del jadinyaa akuu tidakk lucuu dan jugaa aku tidak bisaa mengkoleksi baju baju lucuu apalagi makeup,ooiyaa akuu punyaa inspo makeup yaituu nauraa gituu ajaa deh cerita singkat dari akuu" },
  { id: 3, name: "Monalisa Dea Anastasya", img: tm10, about: "Aku itu orangnya ceria, kata teman-teman aku selera humorku itu rendah banget, aku bisa ngetawain hal-hal kecil sampai lama banget. Terus aku juga suka banget memperhatikan hal-hal kecil, aku cukup teliti mengenai benda benda dan kesesuaiannya. Last but not least aku suka barang-barang vintage dan aku suka belajar mengenai sejarah Indonesia yang engga banyak orang tau. Salam hangat dariku, Monalisa Dea Anastasya." },
  { id: 4, name: "Josep Mangasi Silaen", img: tm13, about: "Namaku Josep Mangasi Silaen! Aku orangnya biasa -biasa ajaa, Hidupku memang ga sebaik orang lain, tapi aku percaya setiap apa yang kulakukan itu yang terbaik bagiku. udah dulu yaa, mau balasin chat cewe-cewe duluu." },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm5, tm7, tm8],
  [tm9, tm11, tm12],
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
