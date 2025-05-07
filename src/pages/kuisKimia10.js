import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: ' Teori Atom',description: 'Teori Atom: Struktur materi terdiri dari atom.',image: 'https://i.pinimg.com/474x/3c/b8/9a/3cb89a8248e01a5ec3b849d4175f1b85.jpg', category: 'Bab 1', link: '/QzKma10b1' },
      { id: 2, name: 'Tabel Periodik Unsur ', description: 'Tabel Periodik Unsur: Pengelompokan unsur berdasarkan sifatnya.',image: 'https://i.pinimg.com/736x/fc/5b/6c/fc5b6c3ad50cf16343cb46993bbbde1f.jpg', category: 'Bab 2', link: '/QzKma10b2' },
      { id: 3, name: 'Stoikiometri',description: 'Stoikiometri: Perhitungan kuantitatif dalam reaksi kimia.',image: 'https://i.pinimg.com/474x/e6/ce/3c/e6ce3cc6bff00b696732ab8c21485410.jpg', category: 'Bab 3', link: '/QzKma10b1' },
      { id: 4, name: ' Ikatan Kimia', description: 'Ikatan Kimia: Keterhubungan atom membentuk senyawa.',image: 'https://i.pinimg.com/474x/a4/21/48/a421483065f91372ed5f9112a9b3b19d.jpg', category: 'Bab 4', link: '/QzKma10b4' },
      { id: 5, name: 'Reaksi Redoks', description: 'Reaksi Redoks: Reaksi transfer elektron oksidasi-reduksi.',image: 'https://i.pinimg.com/474x/69/87/fc/6987fc237c342cf5ded6de38b5201cde.jpg', category: 'Bab 5', link: '/QzKma10b5' },
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
            <h2>Kuis Kimia 10</h2>
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