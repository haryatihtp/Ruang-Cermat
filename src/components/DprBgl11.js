import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Bgl111.jpg';
import tm2 from '../images/Bgl112.jpg';
import tm3 from '../images/Bgl113.jpg';
import tm4 from '../images/Bgl114.jpg';
import tm5 from '../images/Bgl115.jpg';
import tm6 from '../images/Bgl116.jpg';
import tm7 from '../images/Bgl117.jpg';
import tm8 from '../images/Bgl118.jpg';
import tm9 from '../images/Bgl119.jpg';
import tm10 from '../images/Bgl1110.jpg';
import tm11 from '../images/Bgl1111.jpg';
import tm12 from '../images/Bgl1112.jpg';
import tm13 from '../images/Bgl1113.jpg';
import tm14 from '../images/Bgl1114.jpg';
import tm15 from '../images/Bgl1115.jpg';
import tm16 from '../images/Bgl1116.jpg';

const teamData = [
  { id: 1, name: "MAROJAHAN CHRISTIAN COKIRAY HUTAHAEAN", img: tm1, about: "Hai namaku Marojahan Christian Cokiray Hutahaean! Aku suka beradu dalam bertinju, berpanco, menembak. Aku berjiwa solid dan berespect tinggi, Hal yang kusuka adalah bermain biliard, game online, jalan-jalan, mendengar musik, dan yang paling Kusuka Nongkrong bercerita yang hal dilakukan bersama-sama, ohh ya, infokan permabaran terdekat dan tempat nongkrong bercerita untuk melepas pikiran, ayo my bruda, kita bantai kerasnya kehidupan ini." },
  { id: 2, name: "INTAN SONIA SIREGAR", img: tm5, about: "Aku, orangnya selalu berusaha memberikan yang terbaik dalam segala hal. Meski jalannya kadang nggak mulus, aku percaya setiap usaha pasti ada hasilnya. aku juga punya sisi santai suka duduk sambil dengerin musik favorit saat ngerjain tugas. Tapi aku juga punya kekurangan, aku orangnya agak teledor dan suka lupa, apalagi kalau lagi banyak yang dipikirin. Dan kalau membuat kesalahan, aku pasti kepikiran terus, kadang sampai susah move on. Dalam pertemanan, aku cenderung canggung dan hati-hati saat pertama kenal. Tapi kalau sudah dekat, aku jadi orang yang terbuka dan perhatian, bahkan nggak ragu memberikan apa pun yang aku punya untuk orang-orang terdekatku. Itulah aku, Intan Sonia Siregar" },
  { id: 3, name: "GRACESYA ANGELINA SIMANJUNTAK", img: tm9, about: "Aku orang yang simpel, nggak suka ribet, dan selalu merasa hidup lebih ringan kalau dinikmati  wkwkw dengan bernyanyi atau mendengarkan musik. Musik itu kayak penghibur, yang bikin aku tenang atau semangat, tergantung lagunya. Apalagi kalo lagi Taylor Swift yang All too well wkwkw" },
  { id: 4, name: "CRISMAN OLIVER SIAGIAN", img: tm13, about: "Nama ku Crisman Siagian! Aku orangnya ramah dan asyik diajak ngobrol, meski awalnya terkesan sedikit introvert. Tapi tunggu sampai kita kenal lebih dekat, aku jamin kamu bakal nemuin sisi seruku yang nggak ada habisnya!" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprBgl11 = () => {
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

export default DprBgl11;
