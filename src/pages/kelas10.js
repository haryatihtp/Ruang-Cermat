import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Try Out 1', category: 'Bab 1', link: '/TO10b1' },
      { id: 2, name: 'Try Out 2', category: 'Bab 2', link: '/TO10b2' },
      { id: 3, name: 'Try Out 3', category: 'Bab 3', link: '/TO10b3' },
      { id: 4, name: 'Try Out 4', category: 'Bab 4', link: '/TO10b4' },
      { id: 5, name: 'Try Out 5', category: 'Bab 5', link: '/TO10b5' },
      { id: 6, name: 'Try Out 6', category: 'Bab 6', link: '/TO10b6' },
      { id: 7, name: 'Try Out 7', category: 'Bab 7', link: '/TO10b7' },
      { id: 8, name: 'Try Out 8', category: 'Bab 8', link: '/TO10b8' },
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
            <h2>Materi Matematika 12</h2>
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