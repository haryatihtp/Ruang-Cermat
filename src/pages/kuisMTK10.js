import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Eksponen dan Logaritma' ,description: 'Eksponen dan logaritma membahas perpangkatan dan inversnya dalam matematika.',image: 'https://cdn.pixabay.com/photo/2020/10/22/10/05/formula-5675604_640.jpg', category: 'Bab 1', link: '/QzMtk10b1' },
      { id: 2, name: 'Barisan dan Deret', description: 'Barisan dan deret mempelajari pola bilangan dan jumlahnya dalam matematika.', image: 'https://cdn.pixabay.com/photo/2023/01/10/03/57/digits-7708860_640.jpg', category: 'Bab 2', link: '/QzMtk10b2' },
      { id: 3, name: 'Sistem Persamaan Linear dan Kuadrat', description: 'Sistem persamaan linear dan kuadrat membahas solusi persamaan garis dan parabola.', image: 'https://cdn.pixabay.com/photo/2021/11/20/06/22/stationery-6810985_640.jpg', category: 'Bab 3', link: '/QzMtk10b3' },
      { id: 4, name: 'Persamaan Kuadrat', description: 'Persamaan kuadrat mempelajari solusi dari persamaan berpangkat dua.', image: 'https://cdn.pixabay.com/photo/2020/09/29/12/53/laptop-5612751_640.jpg', category: 'Bab 4', link: '/QzMtk10b4' },
      { id: 5, name: 'Fungsi Kuadrat',  description: 'Fungsi kuadrat menggambarkan hubungan matematis berbentuk parabola.',image: 'https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506_640.jpg', category: 'Bab 5', link: '/QzMtk10b5' },
      { id: 6, name: 'Transformasi Geometri', description: 'Transformasi geometri mempelajari perubahan posisi, bentuk, atau ukuran objek pada bidang.', image: 'https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_640.jpg', category: 'Bab 6', link: '/QzMtk10b6' },
      { id: 7, name: 'Trigonometri',  description: 'Trigonometri mempelajari hubungan sudut dan panjang sisi dalam segitiga.',image: 'https://cdn.pixabay.com/photo/2019/02/24/11/17/ruler-4017378_640.jpg', category: 'Bab 7', link: '/QzMtk10b7' },
      { id: 8, name: 'Peluang',  description: 'Peluang mempelajari kemungkinan terjadinya suatu peristiwa.',image : 'https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497_640.jpg', category: 'Bab 8', link: '/QzMtk10b8' },
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
            <h2>Kuis Matermatika 10</h2>
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