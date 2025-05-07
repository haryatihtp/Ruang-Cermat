import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Matriks',description: 'Matriks adalah susunan bilangan dalam baris dan kolom.',image: 'https://itbox.id/wp-content/uploads/2022/11/maxresdefault.jpeg', category: 'Bab 1', link: '/QzMtk11b1' },
      { id: 2, name: 'Transformasi Geometri',description: 'Transformasi geometri mempelajari perubahan posisi, bentuk, atau ukuran objek pada bidang.', image: 'https://cdn.pixabay.com/photo/2023/08/20/21/39/menger-8203238_640.png', category: 'Bab 2', link: '/QzMtk11b2' },
      { id: 3, name: 'Induksi Matematika', description: 'Induksi matematika membuktikan pernyataan untuk semua bilangan bulat positif melalui dua langkah: basis dan induksi.', image: 'https://cdn.pixabay.com/photo/2015/10/11/11/20/banner-982162_640.jpg', category: 'Bab 3', link: '/QzMtk11b3' },
      { id: 4, name: 'Pemograman Linear',description: 'Pemrograman linear mengoptimalkan fungsi linear dengan batasan linear.', image: 'https://cdn.pixabay.com/photo/2017/03/27/14/41/black-and-white-2179121_640.jpg', category: 'Bab 4', link: '/QzMtk11b4' },
      { id: 5, name: 'Turunan Dalam Matematika',description: 'Turunan dalam matematika mengukur laju perubahan suatu fungsi terhadap variabelnya.', image: 'https://cdn.pixabay.com/photo/2015/12/22/08/10/board-1103721_640.jpg', category: 'Bab 5', link: '/QzMtk11b5' },
      { id: 6, name: 'Integral',description: 'Integral menghitung luas area di bawah kurva atau akumulasi perubahan fungsi.', image: 'https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_640.jpg', category: 'Bab 6', link: '/QzMtk11b6' },
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
            <h2>Kuis Matematika 11</h2>
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