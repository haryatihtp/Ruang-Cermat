import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Sentence Structure',description:'Susunan subjek, predikat, dan objek.',image: 'https://i.pinimg.com/236x/7f/03/82/7f0382c5eb1b7bc3192ad87b78f50857.jpg', category: 'Bab 1', link: '/Bing11b1' },
      { id: 2, name: 'Types of Sentences', description:' Pernyataan, pertanyaan, perintah, seruan.',image: 'https://i.pinimg.com/236x/6a/e8/f2/6ae8f2da2ad726f3a42fbae4ed437f3a.jpg', category: 'Bab 2', link: '/Bing11b2' },
      { id: 3, name: 'Classification of Sentences', description: ' Struktur: simple, compound, complex.', image: 'https://i.pinimg.com/236x/a1/e9/c4/a1e9c48547d34726e441674bfa047798.jpg', category: 'Bab 3', link: '/Bing11b3' },
      { id: 4, name: 'Type of clauses', description:'Independent dan dependent sebagai penyusun.',image: 'https://i.pinimg.com/236x/37/b9/ee/37b9ee71b48493a5a8ba99fc63ea3194.jpg', category: 'Bab 4', link: '/Bing11b4' },
      { id: 5, name: 'Sentence Connector', description:'Menghubungkan ide antar kalimat',image:'https://i.pinimg.com/236x/1e/f2/2b/1ef22b5039356ff9ce3123ab87b27cb4.jpg', category: 'Bab 5', link: '/Bing11b5' },
      { id: 6, name: 'Tenses', description:'Waktu kejadian: sekarang, lalu, depan.',image: 'https://i.pinimg.com/236x/cd/c3/38/cdc338f3b83d8d0e8f73fcbd9e42ac77.jpg', category: 'Bab 6', link: '/Bing11b6' },
      { id: 7, name: 'Modals',description:' Kata bantu menyatakan kemungkinan, izin.', image:'https://i.pinimg.com/236x/06/2c/36/062c36c5a447d78d353aa0c6b292f5c7.jpg', category: 'Bab 7', link: '/Bing11b7' },
      { id: 8, name: 'Adverbs',description:'Kata keterangan menjelaskan kata kerja.', image : 'https://i.pinimg.com/236x/3c/76/6c/3c766c1b4a371ae077c03d709c8e3f96.jpg', category: 'Bab 8', link: '/Bing11b8' },
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
            <h2>Materi Bahasa Inggris 11</h2>
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