import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Sel',description:'Sel adalah unit dasar kehidupan yang menyusun semua makhluk hidup.',image: 'https://i.pinimg.com/474x/03/e5/05/03e5059f8a150eeebd85db2711f5c514.jpg', category: 'Bab 1', link: '/Bgl11b1' },
      { id: 2, name: 'Pergerakan zat melalui membran sel', description:'Pergerakan sel melalui membran sel melibatkan transportasi aktif dan pasif untuk mengatur masuk keluarnya molekul.',image: 'https://i.pinimg.com/474x/67/31/de/6731dee81aa2c36bdb382f75bd14b435.jpg', category: 'Bab 2', link: '/Bgl11b2' },
      { id: 3, name: 'proses pengaturan pada tumbuhan',description:'Proses pengaturan pada tumbuhan untuk mengatur pertumbuhan pada lingkungan.',image: 'https://i.pinimg.com/474x/51/7d/a7/517da7cdbe895bb2a0b0b82adc291159.jpg', category: 'Bab 3', link: '/Bgl11b3' },
      { id: 4, name: 'transport dan pertukaran zat pada manusia', description:'Transport dan pertukaran zat untuk mengangkut oksigen dan membuang karbon dioksida.',image: 'https://i.pinimg.com/474x/bb/64/27/bb6427958a87b188d9642b0d2c1ece35.jpg', category: 'Bab 4', link: '/Bgl11b4' },
      { id: 5, name: 'sistem pertahanan tubuh terhadap penyakit', description:'Sistem pertahanan tubuh melawan penyakit  untuk mengenali serta menghancurkan patogen.',image: 'https://i.pinimg.com/474x/dc/2e/68/dc2e685b4a45551fb2cb04a8ecd1dedf.jpg', category: 'Bab 5', link: '/Bgl11b5' },
      { id: 6, name: 'mobilitas pada manusia', description:'Mobilitas pada manusia merujuk pada kemampuan tubuh bergerak.',image: 'https://i.pinimg.com/474x/b8/85/7e/b8857e56b18a5635ae2fb43d32fd9814.jpg', category: 'Bab 6', link: '/Bgl11b6' },
      { id: 7, name: 'hormon dalam reproduksi manusia',description:'Hormon dalam reproduksi manusia mengatur perkembangan seksual, siklus menstruasi, dan proses pembuahan.', image: 'https://i.pinimg.com/736x/7e/c0/4a/7ec04a04c6a06a855c92d0cddf1dbc35.jpg', category: 'Bab 7', link: '/Bgl11b7' },
      { id: 8, name: 'tumbuh kembang makhluk hidup', description:'Tumbuh kembang makhluk hidup melibatkan proses pertumbuhan yang diatur oleh genetik dan lingkungan.',image : 'https://i.pinimg.com/474x/50/f7/3a/50f73afc8aef892e1c897c8a8cdcc7b9.jpg',category: 'Bab 8', link: '/Bgl11b8' },
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
            <h2>Materi Biologi 11</h2>
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