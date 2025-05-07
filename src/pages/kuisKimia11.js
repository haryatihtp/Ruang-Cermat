import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Hidrokarbon dan minyak bumi',description:'Hidrokarbon dan Minyak Bumi: Senyawa karbon, bahan bakar utama.',image: 'https://i.pinimg.com/474x/23/eb/cf/23ebcf11d3438495d96ac9f129e99490.jpg', category: 'Bab 1', link: '/QzKma11b1' },
      { id: 2, name: 'hukum termokimia', description:'Hukum Termokimia: Energi perubahan dalam reaksi kimia.',image: 'https://i.pinimg.com/474x/17/a8/55/17a85519af1fa01d573633b271e0fa7a.jpg', category: 'Bab 2', link: '/QzKma11b2' },
      { id: 3, name: 'laju reaksi',description:'Laju Reaksi: Kecepatan perubahan zat dalam reaksi.',image: 'https://i.pinimg.com/474x/97/f3/78/97f37849f5273d692f3442ee7bd3efe6.jpg', category: 'Bab 3', link: '/QzKma11b3' },
      { id: 4, name: ' kesetimbangan kimia', description:'Kesetimbangan Kimia: Kondisi reaksi maju dan balik seimbang.',image: 'https://i.pinimg.com/474x/e0/d3/68/e0d368d0da7b6b865f3eef7feb9b4e73.jpg', category: 'Bab 4', link: '/QzKma11b4' },
      { id: 5, name: 'larutan asam dan basa',description:'Larutan Asam dan Basa: pH, reaksi ion H+ dan OH-.', image: 'https://i.pinimg.com/736x/c5/39/46/c53946de25d266e727e15b2affa3b1d9.jpg', category: 'Bab 5', link: '/QzKma11b5' },
      { id: 6, name: 'hidrolisis garam',description:'Hidrolisis Garam: Reaksi garam dengan air menghasilkan ion.', image: 'https://i.pinimg.com/474x/b6/dd/2d/b6dd2d529ef9a0cd91bc00298b7fa9d5.jpg', category: 'Bab 6', link: '/QzKma11b6' },
      { id: 7, name: 'larutan penyangga', description:'Larutan Penyangga: Menstabilkan pH terhadap perubahan kecil.',image: 'https://i.pinimg.com/474x/e3/ce/f1/e3cef17de28f8d37de6c957179ed469a.jpg', category: 'Bab 7', link: '/QzKma11b7' },
      { id: 8, name: 'kelarutan dan hasil kali kelarutan', description:'Kelarutan dan Hasil Kali Kelarutan: Batas zat larut dalam larutan.',image : 'https://i.pinimg.com/474x/99/be/7e/99be7ea5f9b41b6d1445b9c87ba52912.jpg', category: 'Bab 8', link: '/QzKma11b8' },
      { id: 9, name: 'koloid',description:'Koloid: Campuran dengan partikel tersuspensi stabil.', image : 'https://i.pinimg.com/474x/73/f6/cf/73f6cf738251a56a75d6aa150aba4dd9.jpg', category: 'Bab 9', link: '/QzKma11b9' },
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

export default Materi;