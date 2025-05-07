import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Kimia12 = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Sifat Koligatif',image: 'https://i.pinimg.com/736x/7c/2c/67/7c2c67684955d720f682d16116ce0fcd.jpg', category: 'Bab 1', link: '/QzKma12b1' },
      { id: 2, name: 'Reaksi Redoks dan Elektrokimia', image: 'https://i.pinimg.com/474x/0d/fd/2b/0dfd2b67c99789fbf28dcce47b7aa610.jpg', category: 'Bab 2', link: '/QzKma12b2' },
      { id: 3, name: 'Kimia Unsur', image: 'https://i.pinimg.com/474x/98/27/1f/98271f317b127d0a6ebb53b892287da2.jpg', category: 'Bab 3', link: '/QzKma12b3' },
      { id: 4, name: 'Senyawa Karbon', image: 'https://i.pinimg.com/474x/38/74/aa/3874aa4fde49d4d3ed9b1659f1f358c8.jpg', category: 'Bab 4', link: '/QzKma12b4' },
      { id: 5, name: 'Benzena dan Turunannya', image: 'https://i.pinimg.com/474x/a4/1b/78/a41b78e761c2b0bb8fddc935c640f18a.jpg', category: 'Bab 5', link: '/QzKma12b5' },
      { id: 6, name: 'Makromolekul', image: 'https://i.pinimg.com/736x/89/ae/ea/89aeea116fa6a5979e5fd60dc9cb9344.jpg', category: 'Bab 6', link: '/QzKma12b6' },
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
            <h2>Kuis Kimia 12</h2>
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

export default Kimia12;