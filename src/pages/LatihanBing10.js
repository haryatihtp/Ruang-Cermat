import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Descriptive Text',description:'Menyapa dan memperkenalkan diri singkat.',image: 'https://asset.kompas.com/crops/HE4LCWiESa-Xmp9NrBRiNXd_Bcw=/0x75:1748x1240/750x500/data/photo/2021/11/23/619cbf67028b5.png', category: 'Bab 1', link: '/SlBing10b1' },
      { id: 2, name: 'Simple Present Tense',description:'Menggambarkan objek secara detail.', image: 'https://tse3.mm.bing.net/th?id=OIP.axHXqa7Yo1y_PIp7UO8sDwHaEK&pid=Api&P=0&h=180', category: 'Bab 2', link: '/SlBing10b2' },
      { id: 3, name: 'Informal Letters',description:'Menyatakan fakta atau kebiasaan rutin.', image: 'https://tse3.mm.bing.net/th?id=OIP.9ufSVGjNqFUNF2GW45gbbgHaEK&pid=Api&P=0&h=180', category: 'Bab 3', link: '/SlBing10b3' },
      { id: 4, name: 'Greeting and Introduction',description:'Surat pribadi dengan bahasa santai.', image: 'https://tse1.mm.bing.net/th?id=OIP.sG4uL_vpFuD6bdArtKoB6AHaFP&pid=Api&P=0&h=180', category: 'Bab 4', link: '/SlBing10b4' },
      { id: 5, name: 'Narrative Text', description:'Cerita berurutan dengan pesan moral.',image: 'https://asset.kompas.com/crops/Kcc13x3XOXncXeQZxgf1XmDw1ec=/0x56:1440x1016/750x500/data/photo/2023/05/08/6458ae9127b15.png', category: 'Bab 5', link: '/SlBing10b5' },
      { id: 6, name: 'Procedural Text',description:'Langkah-langkah membuat atau melakukan sesuatu.', image: 'https://tse1.mm.bing.net/th?id=OIP.4iIbSsvhGIryyZv7uQQqtAHaFI&pid=Api&P=0&h=180', category: 'Bab 6', link: '/SlBing10b6' },
      { id: 7, name: 'Exposition Text',description:'Pendapat logis mendukung argumen tertentu.', image: 'https://tse3.mm.bing.net/th?id=OIP.a6eyXW5jF8uU_8Yf0ddsLAHaFj&pid=Api&P=0&h=180', category: 'Bab 7', link: '/SlBing10b7' },
      { id: 8, name: 'Report Text',description:'Menyampaikan informasi berdasarkan fakta.', image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfDSVVCUHv25VYiDWp2Xj0trCzM5nNNP_kg&s', category: 'Bab 8', link: '/SlBing10b8' },
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
            <h2>Soal Latihan Bahasa Inggris 10</h2>
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