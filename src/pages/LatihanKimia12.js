import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const LatihanKimia12= () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Sifat Koligatif Larutan',description:'Sifat Koligatif Larutan: Bergantung jumlah, bukan jenis partikel',image: 'https://i.pinimg.com/474x/db/df/33/dbdf33b95d2f93f9dcef7f998e364be9.jpg', category: 'Bab 1', link: '/SlKma12b1' },
      { id: 2, name: 'Reaksi Redoks dan Elektrokimia', description:'Reaksi Redoks dan Elektrokimia: Transfer elektron, listrik dari reaksi.',image: 'https://i.pinimg.com/736x/6f/b4/ff/6fb4ff274b6afc4d0140c6a4ab0990a9.jpg', category: 'Bab 2', link: '/SlKma12b2' },
      { id: 3, name: 'Kimia Unsur',description:'Kimia Unsur: Sifat dan reaksi berbagai unsur.', image: 'https://i.pinimg.com/474x/a7/8f/95/a78f95d06a7b0c9d8289db16737ee31b.jpg', category: 'Bab 3', link: '/SlKma12b3' },
      { id: 4, name: 'Senyawa Karbon', description:'Senyawa Karbon: Molekul berbasis rantai karbon-hidrogen.',image: 'https://i.pinimg.com/474x/d3/04/58/d3045889f86dc64a0e7d1212d9e6a3f6.jpg', category: 'Bab 4', link: '/SlKma12b4' },
      { id: 5, name: 'Benzena dan Turunannya', description:'Benzena dan Turunannya: Senyawa aromatik, struktur cincin stabil.',image: 'https://i.pinimg.com/474x/b0/d7/e3/b0d7e36b20644268f6ab333273918844.jpg', category: 'Bab 5', link: '/SlKma12b5' },
      { id: 6, name: 'Makromolekul',description:'Makromolekul: Molekul besar seperti protein, polimer.', image: 'https://i.pinimg.com/474x/b4/ec/2e/b4ec2ec0f1039c9f7e23a11ab7030761.jpg', category: 'Bab 6', link: '/SlKma12b6' }, ];

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
            <h2>Soal Latihan Kimia 12</h2>
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

export default LatihanKimia12;