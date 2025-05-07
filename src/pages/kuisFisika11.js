import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'DINAMIKA ROTASI DAN BENDA TEGAR',description: 'Dinamika rotasi mempelajari gerak putar, sementara benda tegar tidak berubah bentuk saat diberi gaya.',image: 'https://i.pinimg.com/236x/07/32/5d/07325dc7d1b245d41a9af11ce91e78d8.jpg', category: 'Bab 1', link: '/QzFsk11b1' },
      { id: 2, name: 'Elastisitas Bahan',description: 'Elastisitas Bahan: Kemampuan bahan kembali bentuk.', image: 'https://i.pinimg.com/474x/0d/fd/2b/0dfd2b67c99789fbf28dcce47b7aa610.jpg', category: 'Bab 2', link: '/QzFsk11b2' },
      { id: 3, name: 'Fluida Statis', description: 'Fluida Statis: Fluida diam, tekanan seragam.', image: 'https://i.pinimg.com/474x/98/27/1f/98271f317b127d0a6ebb53b892287da2.jpg', category: 'Bab 3', link: '/QzFsk11b3' },
      { id: 4, name: 'Fluida dinamis', description: 'Fluida Dinamis: Fluida bergerak, aliran dan energi.',image: 'https://i.pinimg.com/474x/38/74/aa/3874aa4fde49d4d3ed9b1659f1f358c8.jpg', category: 'Bab 4', link: '/QzFsk11b4' },
      { id: 5, name: 'Suhu dan Kalor', description: 'Suhu dan Kalor: Panas, energi, dan perpindahan kalor.',image: 'https://i.pinimg.com/474x/a4/1b/78/a41b78e761c2b0bb8fddc935c640f18a.jpg', category: 'Bab 5', link: '/QzFsk11b5' },
      { id: 6, name: 'Teori Kinetik Gas', description: 'Teori Kinetik Gas: Gerak partikel, tekanan, dan suhu.',image: 'https://i.pinimg.com/736x/89/ae/ea/89aeea116fa6a5979e5fd60dc9cb9344.jpg', category: 'Bab 6', link: '/QzFsk11b6' },
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
            <h2>Kuis Fisika 11</h2>
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