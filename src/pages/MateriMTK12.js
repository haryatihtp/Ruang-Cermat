import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Aturan Pencacahan',description: 'Aturan pencacahan menghitung banyaknya kemungkinan dalam suatu peristiwa.',image: 'https://cdn.pixabay.com/photo/2017/06/27/08/29/pay-2446670_640.jpg', category: 'Bab 1', link: '/Mtk12b1' },
      { id: 2, name: 'Distribusi Binomial', description: 'Distribusi binomial menghitung probabilitas peristiwa dengan dua hasil dalam percobaan tetap.',image: 'https://cdn.pixabay.com/photo/2015/11/03/09/05/calculator-1020044_640.jpg', category: 'Bab 2', link: '/Mtk12b2' },
      { id: 3, name: 'Kongruen dan Kesebangunan', description: 'Kongruen memiliki ukuran dan bentuk sama, kesebangunan memiliki bentuk sama tapi ukuran berbeda.', image: 'https://cdn.pixabay.com/photo/2018/01/29/14/08/counting-3116201_640.jpg', category: 'Bab 3', link: '/Mtk12b3' },
      { id: 4, name: 'Limit Trigonometri', description: 'Limit trigonometri menghitung nilai limit fungsi trigonometri saat variabel mendekati suatu titik.',image: 'https://cdn.pixabay.com/photo/2015/09/13/10/06/pay-937884_640.jpg', category: 'Bab 4', link: '/Mtk12b4' },
      { id: 5, name: 'Peluang', description: 'Peluang adalah ukuran kemungkinan terjadinya suatu peristiwa dalam suatu percobaan atau eksperimen.',image: 'https://cdn.pixabay.com/photo/2024/06/19/20/29/boy-8840728_640.jpg', category: 'Bab 5', link: '/Mtk12b5' },
      { id: 6, name: 'Geometri Bidang Datar & Bangun Ruang',description: 'Geometri bidang datar mempelajari objek dua dimensi, sementara geometri bangun ruang mempelajari objek tiga dimensi.', image: 'https://cdn.pixabay.com/photo/2017/11/01/16/48/cube-2908607_640.jpg', category: 'Bab 6', link: '/Mtk12b6' },
      { id: 7, name: 'Statistika', description: 'Statistika mempelajari pengumpulan, analisis, dan penyajian data.',image: 'https://cdn.pixabay.com/photo/2019/04/14/10/27/book-4126483_640.jpg', category: 'Bab 7', link: '/Mtk12b7' },
      { id: 8, name: 'Turunan', description: 'Turunan mengukur laju perubahan suatu fungsi terhadap variabelnya.',image : 'https://cdn.pixabay.com/photo/2015/11/05/08/20/geometry-1023843_640.jpg', category: 'Bab 8', link: '/Mtk12b8' },
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
            <h2>Materi Matematika 12</h2>
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