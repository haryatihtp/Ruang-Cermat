import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Present Tense', image: 'https://i.pinimg.com/236x/7f/03/82/7f0382c5eb1b7bc3192ad87b78f50857.jpg', category: 'Tense 1', link: '/QzBing12Present' },
      { id: 2, name: 'Past Tense', image: 'https://i.pinimg.com/236x/6a/e8/f2/6ae8f2da2ad726f3a42fbae4ed437f3a.jpg', category: 'Tense 2', link: '/QzBing12Past' },
      { id: 3, name: 'Future Tense', image: 'https://i.pinimg.com/236x/a1/e9/c4/a1e9c48547d34726e441674bfa047798.jpg', category: 'Tense 3', link: '/QzBing12Future' },
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
            <h2>Quiz Bahasa Inggris 12</h2>
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