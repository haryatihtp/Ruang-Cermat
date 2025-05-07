import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Hukum Hooke',description: 'Hukum Hooke: Gaya elastis berbanding lurus dengan perubahan panjang pegas.',image: 'https://i.pinimg.com/236x/73/31/c3/7331c37d7cdc6998b75d5f99a5f0c61e.jpg', category: 'Bab 1', link: '/SlFsk10b1' },
      { id: 2, name: 'Hukum Newton', description: '"Gaya menyebabkan percepatan, ada aksi reaksi."',image: 'https://cdn1.katadata.co.id/media/images/thumb/2022/10/20/Rumus_Hukum_Newton-2022_10_20-16_43_31_d15608ce8267a26e8fa08838e31d7142_960x640_thumb.jpg', category: 'Bab 2', link: '//SlFsk10b2' },
      { id: 3, name: 'Usaha', description: 'Usaha adalah gaya kali perpindahan, energi adalah kemampuan melakukan usaha.k', image: 'https://i.pinimg.com/236x/cc/e6/4f/cce64fee10da0d125f31fe4c9c31d1f1.jpg', category: 'Bab 3', link: '/SlFsk10b3' },
      { id: 4, name: 'Gerak Lurus',description: 'Gerak lurus adalah gerak benda pada lintasan garis lurus dengan kecepatan tetap atau berubah.', image: 'https://i.pinimg.com/736x/b8/33/78/b83378d25897ac1e4c3ea888cd7010af.jpg', category: 'Bab 4', link: '/SlFsk10b4' },
      { id: 5, name: 'Gerak Melingkar',description: 'Gerak melingkar adalah gerak benda pada lintasan melingkar dengan kecepatan sudut tertentu.', image: 'https://i.pinimg.com/474x/d5/81/8a/d5818ac6b5230c50436c98c1f183840b.jpg', category: 'Bab 5', link: '/SlFsk10b5' },
      { id: 6, name: 'Fluida',description: 'Fluida adalah zat yang dapat mengalir, baik cairan maupun gas, yang memiliki sifat mudah berubah bentuk sesuai wadahnya.', image: 'https://i.pinimg.com/236x/b7/71/25/b771258426940b788084ab5535cb38a5.jpg', category: 'Bab 6', link: '/SlFsk10b6' },
      { id: 7, name: 'Suhu dan Kalor',description: 'Suhu adalah ukuran derajat panas benda, sedangkan kalor adalah energi panas yang berpindah akibat perbedaan suhu.', image: 'https://i.pinimg.com/236x/de/50/68/de50686e9cb96131f9321057dbec1a0b.jpg', category: 'Bab 7', link: '/SlFsk10b7' },
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
            <h2>Soal Latihan Fisika 10</h2>
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