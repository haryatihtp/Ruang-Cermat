import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Fsk12p1.jpg';
import tm2 from '../images/Fsk12p2.jpg';
import tm3 from '../images/Fsk12p3.jpg';
import tm4 from '../images/Fsk12p4.jpg';
import tm5 from '../images/Fsk12p5.jpg';
import tm6 from '../images/Fsk12p6.jpg';
import tm7 from '../images/Fsk12p7.jpg';
import tm8 from '../images/Fsk12p8.jpg';
import tm9 from '../images/Fsk12p9.jpg';
import tm10 from '../images/Fsk12p10.jpg';
import tm11 from '../images/Fsk12p11.jpg';
import tm12 from '../images/Fsk12p12.jpg';
import tm13 from '../images/Fsk12p13.jpg';
import tm14 from '../images/Fsk12p14.jpg';
import tm15 from '../images/Fsk12p15.jpg';
import tm16 from '../images/Fsk12p16.jpg';

const teamData = [
  { id: 1, name: "Stevani Rointan Nadeak", img: tm10,about: "Aku adalah orang yang sangat mencintai musik. Saat aku mendengarkan musik aku langsung menyanyi." },
  { id: 2, name: "Jamot Togu Suryadi Sigiro", img: tm1,about: "Hi !, Perkenalkan namaku Jamot Togu Suryadi Sigiro Dari prodi DIV TRPL dengan NIM 41424017.Aku adalah orang yang mudah marah dan juga suka ngomong kasar,tapi sebenarnya aku punya hati yang baik dan suka membantu teman.aku suka membaca manga,manhwa dan manhua,karakter fiksi kesukaanku adalah Sun wukong,son Goku,Kamen Rider Decade,Van Helsing dan karakter sejarah Favoritku adalah LUBU FENGXIAN" },
  { id: 3, name: "Lastri Anna Hutagalung", img: tm5,about: "Halo, saya Lastri Anna Hutagalung. Saya adalah pribadi yang menemukan semangat dalam hal-hal sederhana, seperti menikmati makanan manis favorit saya dan mendengarkan musik di waktu luang. Saya juga sangat menyukai anjing—makhluk menggemaskan dan setia." },
  { id: 4, name: "Epelina Oktavia Pangaribuan", img: tm13, about: "Hobi mendengarkan musik dan film Korea. Memiliki pribadi yang disiplin,pemberani dan suka berbagi!" },
];

const myTeamImages = [
  [tm9,tm11,tm12],
  [tm2,tm3,tm4],
  [tm6,tm7,tm8],
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
