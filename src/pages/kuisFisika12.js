import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Rangkain Arus Searah (DC)', description: 'Rangkaian Arus Searah: Arus listrik satu arah tetap.',image: 'https://i.pinimg.com/736x/7c/2c/67/7c2c67684955d720f682d16116ce0fcd.jpg', category: 'Bab 1', link: '/QzFsk12b1' },
      { id: 2, name: 'Arus Bolak-Balik',description: 'Rangkaian Arus Bolak-Balik: Arus berubah arah secara periodik.', image: 'https://i.pinimg.com/474x/0d/fd/2b/0dfd2b67c99789fbf28dcce47b7aa610.jpg', category: 'Bab 2', link: '/QzFsk12b2' },
      { id: 3, name: 'Medan Magnetik', description: 'Medan Magnetik: Gaya magnet di sekitar arus.', image: 'https://i.pinimg.com/474x/98/27/1f/98271f317b127d0a6ebb53b892287da2.jpg', category: 'Bab 3', link: '/QzFsk12b3' },
      { id: 4, name: 'Gelombang Elektromagnetik', description: 'Gelombang Elektromagnetik: Energi dari medan listrik-magnetik.',image: 'https://i.pinimg.com/474x/38/74/aa/3874aa4fde49d4d3ed9b1659f1f358c8.jpg', category: 'Bab 4', link: '/QzFsk12b4' },
      { id: 5, name: 'Induksi Elektromagnetik',description: 'Induksi Magnetik: Medan listrik dari perubahan magnet.', image: 'https://i.pinimg.com/474x/a4/1b/78/a41b78e761c2b0bb8fddc935c640f18a.jpg', category: 'Bab 5', link: '/QzFsk12b5' },
      { id: 6, name: 'Fisika Modern', description: 'Fisika Modern: Konsep kuantum dan relativitas baru.',image: 'https://i.pinimg.com/736x/89/ae/ea/89aeea116fa6a5979e5fd60dc9cb9344.jpg', category: 'Bab 6', link: '/QzFsk12b6' },
      { id: 7, name: 'Teknologi Digital', description: 'Teknologi Digital: Sistem berbasis sinyal biner.',image: 'https://i.pinimg.com/474x/13/74/70/137470180a1cdd04ab71177a98eafcaa.jpg', category: 'Bab 7', link: '/QzFsk12b7' },
      { id: 8, name: 'Sumber Energi',description: 'Sumber Energi: Asal energi untuk kebutuhan manusia.', image : 'https://i.pinimg.com/736x/1f/62/62/1f6262428ab8700cefc54a6fdf92aac2.jpg', category: 'Bab 8', link: '/QzFsk12b8' },
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
            <h2>Kuis Fisika 12</h2>
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