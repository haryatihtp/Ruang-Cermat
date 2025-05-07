import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Pengantar Ekonomi',description : "Memahami konsep dasar ekonomi.",image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvFGslaVYbEa8R6zGOQCDmTXzKlDtJd5oqw&s', category: 'Bab 1', link: '/SlEko11b1' },
      { id: 2, name: 'Kebutuhan dan Kelangkaan',description : "Pelajari bagaimana kelangkaan memengaruhi kebutuhan manusia.", image: 'https://www.quipper.com/id/blog/wp-content/uploads/2021/10/Kelangkaan-dan-Kebutuhan-Manusia-1.webp', category: 'Bab 2', link: '/SlEko11b2' },
      { id: 3, name: 'Sistem Ekonomi',description : "Mengenal berbagai jenis sistem ekonomi yang digunakan.", image: 'https://img.inews.co.id/media/600/files/inews_new/2022/09/15/ilustrasi_sistem_ekonomi.jpg', category: 'Bab 3', link: '/SlEko11b3' },
      { id: 4, name: 'Permintaan dan Penawaran',description : "Analisis faktor yang memengaruhi harga pasar.", image: 'https://cdn0-production-images-kly.akamaized.net/m2O935cnlhab1zHY9UvpAwYzk5U=/0x629:7500x4856/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4348826/original/099805100_1678163171-20827466_Small_business_owner_shaking_hands_with_money_lender.jpg', category: 'Bab 4', link: '/SlEko11b4' },
      { id: 5, name: 'Pasar Persaingan',description : "Memahami konsep pasar persaingan sempurna dan tidak sempurna.", image: 'https://asset.kompas.com/crops/jYANqcjpso8V2UcSJus8rK4dCgQ=/0x9:730x496/1200x800/data/photo/2022/01/03/61d2d2b63611a.jpg', category: 'Bab 5', link: '/SlEko11b5' },
      { id: 6, name: 'Uang dan Perbankan',description : "Pahami fungsi uang dan peran bank dalam ekonomi.", image: 'https://media.istockphoto.com/id/682621178/id/foto/konsep-keuangan-tumpukan-uang-dengan-gedung-bank-ilustrasi-3d.jpg?s=170667a&w=0&k=20&c=ZTBFGhXEgR2EWsJWnKyNOSjF0fqRqBoMIbw1tq32py0=', category: 'Bab 6', link: '/SlEko11b6' },
      { id: 7, name: 'Inflasi',description : "Pelajari penyebab dan dampak inflasi.", image: 'https://png.pngtree.com/png-clipart/20220404/original/pngtree-inflation-ilustration-design-png-image_7499594.png', category: 'Bab 7', link: '/SlEko11b7' },
      { id: 8, name: 'Pertumbuhan Ekonomi',description : "Memahami bagaimana ekonomi berkembang dari waktu ke waktu.", image : 'https://pojokbandung.com/wp-content/uploads/2024/02/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg', category: 'Bab 8', link: '/SlEko11b8' },
      { id: 9, name: 'Pembangunan Ekonomi',description : "Mengupas pembangunan ekonomi secara mendalam.", image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/28/5139933-194353019.jpg', category: 'Bab 9', link: '/SlEko11b9' },
      { id: 10, name: 'Perdagangan Internasional',description : "Pelajari dampak perdagangan antarnegara.", image: 'https://cdn1-production-images-kly.akamaized.net/dcE4pohxJdxiBV2H5zOUxZiBDMU=/0x140:3000x1831/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4254992/original/005792000_1670557222-19962385_6206720.jpg', category: 'Bab 10', link: '/SlEko11b10' },
      { id: 11, name: 'Kebijakan Ekonomi',description : "Mengenal kebijakan ekonomi pemerintah.", image: 'https://feb.umsu.ac.id/wp-content/uploads/2023/05/pembangunan-ekonomi-750x375.png', category: 'Bab 11', link: '/SlEko11b11' },
      { id: 12, name: 'Globalisasi Ekonomi',description : "Memahami peran teknologi dalam ekonomi modern.", image : 'https://asset.kompas.com/crops/-x4SpqijBmemB-SNiagyh0qCpCA=/63x30:739x481/750x500/data/photo/2022/09/24/632ebaeb35015.jpg', category: 'Bab 12', link: '/SlEko11b12' },
     ];

    setBiologies(mockBiologies);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.biologi-biology-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-biology-section">
        <div className="container">
          <div className="section-header">
            <h2>Soal Latihan Ekonomi 11</h2>
          </div>
          <div className="biology-grid">
            {biologies.map((biology) => (
              <div key={biology.id} className="biologi-biology-card">
                <div className="card-image">
                  <img src={biology.image} alt={biology.name} />
                  <div className="card-category">{biology.category}</div>
                </div>
                <div className="card-content">
                  <h3>{biology.name}</h3>
                  <p>{biology.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(biology.link)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materi;