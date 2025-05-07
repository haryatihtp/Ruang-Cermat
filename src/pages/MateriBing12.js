import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Future Continuous Tense',description:'Aktivitas berlangsung di masa depan.',image: 'https://i.pinimg.com/236x/ea/e9/e1/eae9e1bbfad22a5aa5f8c76cdb46d025.jpg', category: 'Bab 1', link: '/Bing12b1' },
      { id: 2, name: 'Future Perfect Tense', description:'Aktivitas selesai sebelum waktu tertentu.',image: 'https://i.pinimg.com/236x/2a/4f/43/2a4f433de2282c0f61ad310aaa58f65a.jpg', category: 'Bab 2', link: '/Bing12b2' },
      { id: 3, name: 'Medan Magnetik', description: 'Medan Magnetik', image: 'https://i.pinimg.com/736x/ae/35/b2/ae35b287ff4d3c71abf2c2358f4d34dd.jpg', category: 'Bab 3', link: '//Bing12b3' },
      { id: 4, name: 'Present Continuous Tense', description:'Aktivitas berlangsung saat ini.',image: 'https://i.pinimg.com/236x/27/12/17/2712173c09d4380cd4e77839c6733ef0.jpg', category: 'Bab 4', link: '/Bing12b4' },
      { id: 5, name: 'Past Continuous Tense', description:'Aktivitas berlangsung di masa lampau.',image: 'https://i.pinimg.com/236x/eb/ec/31/ebec311c1857e21451467c7716d359d7.jpg', category: 'Bab 5', link: '/Bing12b5' },
      { id: 6, name: 'Present Perfect Tense', description:'Aktivitas selesai, berdampak saat ini.',image: 'https://i.pinimg.com/236x/7c/9f/91/7c9f91d13cc66599dab6a472d86e8d33.jpg', category: 'Bab 6', link: '/Bing12b6' },
      { id: 7, name: 'Present Perfect Continuous Tense',description:'Aktivitas berlangsung, dimulai sebelumnya.', image:'https://i.pinimg.com/236x/9d/25/97/9d25978609f5ad8fd93d118259fa9388.jpg', category: 'Bab 7', link: '/Bing12b7' },
      { id: 8, name: 'Past Perfect Continuous Tense',description:'Aktivitas berlangsung sebelum masa lampau.', image : 'https://i.pinimg.com/236x/72/25/b2/7225b27bb96ea336a23a619d512166f6.jpg', category: 'Bab 8', link: '/Bing12b8' },
      { id: 9, name: 'Past Perfect Tense',description:'Aktivitas selesai sebelum masa lampau.', image: 'https://i.pinimg.com/236x/92/64/03/9264030cbb2bf4d9197c780cebd5b376.jpg', category: 'Bab 9', link: '/Bing12b9' },
      { id: 10, name: 'Simple Future Tense', description:'Aktivitas akan terjadi di masa depan.',image:'https://i.pinimg.com/236x/35/62/b7/3562b7313a84e954f91d3e7fdefa3bf9.jpg', category: 'Bab 10', link: '/Bing12b10' },
      { id:11, name: 'Simple Present Tense',description:'Fakta atau kebiasaan rutin saat ini.', image:'https://i.pinimg.com/236x/a1/15/81/a1158196cf7c9ba06c74b0e56958f690.jpg', category: 'Bab 11', link: '/Bing12b11' },
      { id: 12, name: 'Simple Past Tense',description:'Aktivitas terjadi di masa lampau.', image : 'https://i.pinimg.com/236x/5b/99/92/5b999217c9fd3b8f337ce3b68e2ebd4c.jpg', category: 'Bab 12', link: '/Bing12b12' },
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
            <h2>Materi Bahasa Inggris 12</h2>
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