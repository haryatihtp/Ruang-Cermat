import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Present Simple', image: 'https://i.pinimg.com/236x/7f/03/82/7f0382c5eb1b7bc3192ad87b78f50857.jpg', category: 'Tense 1', link: '/SlBing12b11' },
      { id: 2, name: 'Past Simple', image: 'https://i.pinimg.com/236x/6a/e8/f2/6ae8f2da2ad726f3a42fbae4ed437f3a.jpg', category: 'Tense 2', link: '/SlBing12b12' },
      { id: 3, name: 'Future Simple', image: 'https://i.pinimg.com/236x/a1/e9/c4/a1e9c48547d34726e441674bfa047798.jpg', category: 'Tense 3', link: '/SlBing12b10' },
      { id: 4, name: 'Present Continuous', image: 'https://i.pinimg.com/236x/37/b9/ee/37b9ee71b48493a5a8ba99fc63ea3194.jpg', category: 'Tense 4', link: '/SlBing12b4' },
      { id: 5, name: 'Past Continuous', image: 'https://i.pinimg.com/236x/1e/f2/2b/1ef22b5039356ff9ce3123ab87b27cb4.jpg', category: 'Tense 5', link: '/SlBing12b5' },
      { id: 6, name: 'Future Continuous', image: 'https://i.pinimg.com/236x/cd/c3/38/cdc338f3b83d8d0e8f73fcbd9e42ac77.jpg', category: 'Tense 6', link: '/SlBing12b1' },
      { id: 7, name: 'Present Perfect', image: 'https://i.pinimg.com/236x/06/2c/36/062c36c5a447d78d353aa0c6b292f5c7.jpg', category: 'Tense 7', link: '/SlBing12b6' },
      { id: 8, name: 'Past Perfect', image: 'https://i.pinimg.com/236x/3c/76/6c/3c766c1b4a371ae077c03d709c8e3f96.jpg', category: 'Tense 8', link: '/SlBing12b9' },
      { id: 9, name: 'Future Perfect', image: 'https://i.pinimg.com/236x/37/b9/ee/37b9ee71b48493a5a8ba99fc63ea3194.jpg', category: 'Tense 9', link: '/SlBing12b2' },
      { id: 10, name: 'Present Perfect Continuous', image: 'https://i.pinimg.com/236x/6a/e8/f2/6ae8f2da2ad726f3a42fbae4ed437f3a.jpg', category: 'Tense 10', link: '/SlBing12b7' },
      { id: 11, name: 'Past Perfect Continuous', image: 'https://i.pinimg.com/236x/cd/c3/38/cdc338f3b83d8d0e8f73fcbd9e42ac77.jpg', category: 'Tense 11', link: '/SlBing12b8' },
      { id: 12, name: 'Future Perfect Continuous', image: 'https://i.pinimg.com/236x/3c/76/6c/3c766c1b4a371ae077c03d709c8e3f96.jpg', category: 'Tense 12', link: '/SlBing12b3' },
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
            <h2>Soal Latihan Bahasa Inggris 12</h2>
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