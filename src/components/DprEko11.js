import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Eko111.jpg';
import tm2 from '../images/Eko112.jpg';
import tm3 from '../images/Eko113.jpg';
import tm4 from '../images/Eko114.jpg';
import tm5 from '../images/Eko115.jpg';
import tm6 from '../images/Eko116.jpg';
import tm7 from '../images/Eko117.jpg';
import tm8 from '../images/Eko118.jpg';
import tm9 from '../images/Eko119.jpg';
import tm10 from '../images/Eko1110.jpg';
import tm11 from '../images/Eko1111.jpg';
import tm12 from '../images/Eko1112.jpg';

const teamData = [
  { id: 1, name: "JESLEY BRILLIAN SINAGA", img: tm1, about: "Nama aku Jesley Brillian Sinaga, biasa dipanggil Jesli. Hobby-ku olahraga, Sangat sering tertawa, Mungkin agak pemalu, tapi lebih suka bersikap apa adanya." },
  { id: 2, name: "STEEVEN GENEROUS SIMARANGKIR", img: tm5, about: "Saya orangnya formal dan tidak toxic. selalu bercanda ria dimanapun kapanpun tanpa tahu tempat dan kondisi. Sesuai dengan rumor yang telah tersebar, saya orangnya freak. Walaupun tatapan saya kadang mematikan dan sinis tidak karuan, saya orangnya baik dan ramah pake banget (maybe). Dengan segala esensi diatas terpadulah sifat freak dan berbagai kegiatan yang saya sukai yaitu bermain bola basket. Saya suka warna hitam dan putih seperti pantofel hitam dan air putih." },
  { id: 3, name: "SONIA AGATHA SIAHAAN", img: tm9, about: "I'm a quiet person dan aku malas mengurus masalah oranglain. Aku suka desain, segala hiasan, ide untuk hias call me, terutama lettering. Desain website atau mendesain hidupmu menjadi berwarna? Yap, it's me: Sonia Agatha Siahaan dengan nim 41424061. I like listening music. tanpa musik hidup tdk seperti dj, dari kelompok mata pelajaran Ekonomi kelas 11" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
];

const DprEko11 = () => {
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

export default DprEko11;
