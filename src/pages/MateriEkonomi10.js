import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Masalah Ekonomi Dasar',image: 'https://i.pinimg.com/236x/56/08/e2/5608e2eeff5815aae2538bb0e7307e9a.jpg', category: 'Bab 1', link: '/Eko10b1' },
      { id: 2, name: 'Kebijakan Moneter', image: 'https://i.pinimg.com/236x/66/b8/ec/66b8ec5ddd6b5b2b105b8ad6985f4e9d.jpg', category: 'Bab 2', link: '/Eko10b2' },
      { id: 3, name: 'Perdagangan Internasional', description: 'Medan Magnetik', image: 'https://i.pinimg.com/236x/59/8c/a7/598ca77457c7a331051431952fa72ab1.jpg', category: 'Bab 3', link: '/Eko10b3' },
      { id: 4, name: 'Permintaan dan Penawaran', image: 'https://i.pinimg.com/236x/2d/b5/e6/2db5e665af3ac6a9181f9fd9d75b6da5.jpg', category: 'Bab 4', link: '/Eko10b4' },
      { id: 5, name: 'Siklus Ekonomi', image: 'https://i.pinimg.com/236x/79/1c/6a/791c6a92c0813bf564daf7277f3599ed.jpg', category: 'Bab 5', link: '/Eko10b5' },
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
            <h2>Materi Ekonomi 10</h2>
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