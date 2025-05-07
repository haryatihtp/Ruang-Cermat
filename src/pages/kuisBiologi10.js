import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Keanekaragaman Hayati',description:'Keanekaragaman hayati adalah variasi makhluk hidup di bumi yang saling mendukung kehidupan.',image: 'https://i.pinimg.com/474x/f2/24/f0/f224f0ba48016419fd718f4d6b35830e.jpg', category: 'Bab 1', link: '/QzBgl10b1' },
      { id: 2, name: 'Virus', description:'Virus adalah mikroorganisme parasit berukuran sangat kecil yang berkembang biak dalam sel inang hidup.',image: 'https://i.pinimg.com/474x/6d/4c/2d/6d4c2d0ffb7ffdb33280f8bbb96b3fd1.jpg', category: 'Bab 2', link: '/QzBgl10b2' },
      { id: 3, name: 'Fungi',description:'Fungi adalah organisme eukariotik yang tidak berklorofil.',image: 'https://i.pinimg.com/474x/26/a8/ef/26a8efda8b67f8711a85854df95bb759.jpg', category: 'Bab 3', link: '/QzBgl10b3' },
      { id: 4, name: 'Plantae', description:'Plantae adalah kingdom organisme eukariotik berklorofil.',image: 'https://i.pinimg.com/474x/18/c2/92/18c292c28d0ce2474045ac2fd6e94c0e.jpg', category: 'Bab 4', link: '/QzBgl10b4' },
      { id: 5, name: 'Animalia', description:'Animalia adalah kingdom organisme eukariotik multiseluler yang heterotrof.',image: 'https://i.pinimg.com/474x/6f/1a/e4/6f1ae49cb7d34df6b61290fed6c3e55d.jpg', category: 'Bab 5', link: '/QzBgl10b5' },
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
            <h2>Kuis Biologi 10</h2>
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