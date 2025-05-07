import React from 'react';
import '../css/Team.css';
import tm1 from '../images/Kma121.JPG';
import tm2 from '../images/Kma122.jpg';
import tm3 from '../images/Kma123.jpg';
import tm4 from '../images/Kma124.jpg';
import tm5 from '../images/Kma125.jpg';
import tm6 from '../images/Kma126.jpg';
import tm7 from '../images/Kma127.jpg';
import tm8 from '../images/Kma128.jpg';
import tm9 from '../images/Kma129.JPG';
import tm10 from '../images/Kma1210.jpg';
import tm11 from '../images/Kma1211.jpg';
import tm12 from '../images/Kma1212.jpg';
import tm13 from '../images/Kma1213.jpg';
import tm14 from '../images/Kma1214.jpg';
import tm15 from '../images/Kma1215.jpg';
import tm16 from '../images/Kma1216.jpg';

const teamData = [
  { id: 1, name: "DAVID GIAN FILBERT SINURAT", img: tm1, about: "Aku bernama David. Aku dikenal sebagai sosok yang hangat dan selalu siap membantu orang di sekitarnya (asekkk). Selain sifatku yang ramah, aku juga memiliki dua hobi yang menjadi pelarian dari rutinitas: bermain tenis meja dan ngoding Kode yang gak jelas wkwk. Aku juga  punya harapan yang ingin kukabulkan yaitu bisa kerja di perusahaan besar yakalii menunggu kamu yang tak pasti-pasti." },
  { id: 2, name: "RAMADHANI SIHOTANG", img: tm5, about: "Namaku Ramadhani, seluruh aspek dalam kehidupanku overall biasa aja sih." },
  { id: 3, name: "ARIMBI ANGELICA SITOHANG", img: tm9, about: "Hi aku Arimbi Angelica Sitohang. Aku orangnya suka SKSD, kadang aku tau kalo orang itu ga suka sama ku, tapi tetap ku SKSD-in. Aku orangnya sering marah-marah walau kadang ga keliatan. Hal yang paling ku suka di Dunia ini adalah tidur. " },
  { id: 4, name: "BINTANG JESISCA TANJUNG", img: tm13, about: "Perkenalkan nama ku Bintang Jesisca Tanjung, aku orang nya bawa chill aja brayy, aku menghargai setiap orang yang baik terhadap ku, yang memberi feedbacknya yang sesuai juga dengan apa yang aku beri juga, aku orangnya keras kepalaa abiss(maklum brayy anak terakhir hehehww), tapi aku keras kepala yang ga bisa dikasarin, dengar nada tinggi sikit langsung ngerasa gedubrakk bwangett, aku juga orang nya gampang di bawa berbau" },
];

const myTeamImages = [
  [tm2, tm3, tm4],
  [tm6, tm7, tm8],
  [tm10, tm11, tm12],
  [tm14, tm15, tm16],
];

const DprKma12 = () => {
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

export default DprKma12;
