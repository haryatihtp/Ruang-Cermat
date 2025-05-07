import React, { useState } from 'react';
import '../css/Bgl10b5.css';

function Animalia() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="animalia-wrapper">

      <div className="hero-section3">
        <div className="hero-content">
          <h1 className="hero-title">Kingdom Animalia</h1>
          <p className="hero-subtitle">Menjelajahi Keragaman Dunia Hewan</p>
        </div>
        <div className="hero-overlay"></div>
      </div>

     
      <div className="nav-cards-container">
        <div 
          className={`nav-card ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => setActiveSection('intro')}
        >
          <div className="card-icon">🔍</div>
          <h3>Pengenalan</h3>
        </div>
        <div 
          className={`nav-card ${activeSection === 'characteristics' ? 'active' : ''}`}
          onClick={() => setActiveSection('characteristics')}
        >
          <div className="card-icon">📋</div>
          <h3>Karakteristik</h3>
        </div>
        <div 
          className={`nav-card ${activeSection === 'classification' ? 'active' : ''}`}
          onClick={() => setActiveSection('classification')}
        >
          <div className="card-icon">🔰</div>
          <h3>Klasifikasi</h3>
        </div>
        <div 
          className={`nav-card ${activeSection === 'examples' ? 'active' : ''}`}
          onClick={() => setActiveSection('examples')}
        >
          <div className="card-icon">🦁</div>
          <h3>Contoh Hewan</h3>
        </div>
      </div>

      <div className="main-content">
        {activeSection === 'intro' && (
  <div className="content-section intro-section">
    <div className="section-header">
      <h2>Mengenal Kingdom Animalia</h2>
      <div className="separator"></div>
    </div>
    
    <div className="info-cards">
      <div className="info-card">
        <h3>Definisi dan Ruang Lingkup</h3>
        <p>
          Kingdom Animalia mencakup semua organisme eukariotik multiseluler yang bersifat heterotrof. 
          Anggota kingdom ini memiliki kemampuan untuk bergerak aktif setidaknya pada satu tahap kehidupannya.
          Sel-sel hewan tidak memiliki dinding sel dan kloroplas, yang membedakannya dari tumbuhan.
        </p>
      </div>

      <div className="info-card highlight">
        <h3>Fakta Menarik</h3>
        <ul className="fact-list">
          <li>Lebih dari 2 juta spesies telah teridentifikasi</li>
          <li>Diperkirakan masih ada 8 juta spesies yang belum ditemukan</li>
          <li>Paus Biru adalah hewan terbesar yang pernah ada</li>
          <li>Tardigrada bisa bertahan hidup di luar angkasa</li>
          <li>Beberapa hewan dapat berumur ratusan tahun</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Evolusi dan Sejarah</h3>
        <div className="timeline-content">
          <div className="timeline-item">
            <span className="date">600 juta tahun lalu</span>
            <p>Kemunculan hewan multiseluler pertama</p>
          </div>
          <div className="timeline-item">
            <span className="date">542 juta tahun lalu</span>
            <p>Ledakan Kambrium - munculnya berbagai bentuk kehidupan kompleks</p>
          </div>
          <div className="timeline-item">
            <span className="date">500 juta tahun lalu</span>
            <p>Berkembangnya vertebrata pertama</p>
          </div>
          <div className="timeline-item">
            <span className="date">375 juta tahun lalu</span>
            <p>Hewan pertama beradaptasi di daratan</p>
          </div>
        </div>
      </div>
    </div>

    <div className="ecosystem-roles">
      <h3>Peran dalam Ekosistem</h3>
      <div className="role-grid">
        <div className="role-card">
          <span className="role-icon">🍽</span>
          <h4>Konsumen</h4>
          <p>Berperan dalam rantai makanan sebagai konsumen primer, sekunder, dan tersier</p>
          <ul>
            <li>Herbivora: Pemakan tumbuhan</li>
            <li>Karnivora: Pemakan daging</li>
            <li>Omnivora: Pemakan segala</li>
          </ul>
        </div>

        <div className="role-card">
          <span className="role-icon">🌺</span>
          <h4>Penyerbukan</h4>
          <p>Membantu reproduksi tumbuhan melalui proses polinasi</p>
          <ul>
            <li>Serangga seperti lebah dan kupu-kupu</li>
            <li>Burung kolibri</li>
            <li>Kelelawar buah</li>
          </ul>
        </div>

        <div className="role-card">
          <span className="role-icon">🌱</span>
          <h4>Penyebaran Biji</h4>
          <p>Membantu distribusi biji tumbuhan</p>
          <ul>
            <li>Burung pemakan buah</li>
            <li>Mamalia pengerat</li>
            <li>Primata</li>
          </ul>
        </div>

        <div className="role-card">
          <span className="role-icon">⚖</span>
          <h4>Keseimbangan Ekosistem</h4>
          <p>Menjaga stabilitas populasi organisme</p>
          <ul>
            <li>Predator puncak</li>
            <li>Pengurai</li>
            <li>Spesies kunci</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}


{activeSection === 'characteristics' && (
  <div className="content-section characteristics-section">
    <div className="section-header">
      <h2>Karakteristik Kingdom Animalia</h2>
      <div className="separator"></div>
    </div>


    <div className="characteristic-cards">
      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">🧬</span>
          <h3>Struktur Sel</h3>
        </div>
        <div className="card-content">
          <h4>Komponen Utama:</h4>
          <ul>
            <li>Membran sel fleksibel tanpa dinding sel</li>
            <li>Nukleus dengan materi genetik</li>
            <li>Mitokondria untuk respirasi seluler</li>
            <li>Retikulum endoplasma dan aparatus Golgi</li>
            <li>Lisosom untuk pencernaan intraseluler</li>
          </ul>
        </div>
      </div>

      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">🦠</span>
          <h3>Organisasi Jaringan</h3>
        </div>
        <div className="card-content">
          <h4>Jaringan Utama:</h4>
          <ul>
            <li>Epitel: Pelindung dan sekresi</li>
            <li>Otot: Pergerakan</li>
            <li>Saraf: Koordinasi dan respons</li>
            <li>Ikat: Dukungan struktural</li>
          </ul>
          <p>Jaringan berkelompok membentuk organ dan sistem organ</p>
        </div>
      </div>

      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">🔄</span>
          <h3>Reproduksi</h3>
        </div>
        <div className="card-content">
          <h4>Metode Reproduksi:</h4>
          <ul>
            <li>Seksual:
              <ul>
                <li>Fertilisasi internal/eksternal</li>
                <li>Pembentukan gamet</li>
                <li>Perkembangan embrio</li>
              </ul>
            </li>
            <li>Aseksual:
              <ul>
                <li>Pembelahan biner</li>
                <li>Budding (pertunasan)</li>
                <li>Fragmentasi</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">🧠</span>
          <h3>Sistem Saraf</h3>
        </div>
        <div className="card-content">
          <h4>Komponen dan Fungsi:</h4>
          <ul>
            <li>Sel saraf (neuron)
              <ul>
                <li>Transmisi impuls listrik</li>
                <li>Komunikasi antar sel</li>
              </ul>
            </li>
            <li>Sistem saraf pusat dan tepi</li>
            <li>Reseptor sensorik</li>
            <li>Koordinasi respons</li>
          </ul>
        </div>
      </div>

      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">💨</span>
          <h3>Respirasi</h3>
        </div>
        <div className="card-content">
          <h4>Sistem Respirasi:</h4>
          <ul>
            <li>Insang (hewan air)</li>
            <li>Paru-paru (hewan darat)</li>
            <li>Trakea (serangga)</li>
            <li>Difusi langsung (hewan sederhana)</li>
          </ul>
          <p>Fungsi utama: Pertukaran O₂ dan CO₂</p>
        </div>
      </div>

      <div className="char-card">
        <div className="card-header">
          <span className="char-icon">🍽</span>
          <h3>Sistem Pencernaan</h3>
        </div>
        <div className="card-content">
          <h4>Tipe Pencernaan:</h4>
          <ul>
            <li>Pencernaan intraseluler</li>
            <li>Pencernaan ekstraseluler</li>
            <li>Sistem pencernaan lengkap
              <ul>
                <li>Mulut hingga anus</li>
                <li>Organ aksesori</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)}


{activeSection === 'classification' && (
  <div className="content-section classification-section">
    <div className="section-header">
      <h2>Klasifikasi Kingdom Animalia</h2>
      <div className="separator"></div>
    </div>

    <div className="classification-container">
  
      <div className="classification-group invertebrates">
        <h3>Invertebrata (Hewan Tidak Bertulang Belakang)</h3>
        <div className="animal-types">
          <div className="type-card">
            <img src="/images/porifera.jpg" alt="Porifera" />
            <h4>Porifera (Hewan Berpori)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Multiseluler sederhana</li>
                <li>Memiliki pori-pori (ostia)</li>
                <li>Sesil (menetap)</li>
                <li>Filter feeder</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Spongia officinalis (Spons mandi)</li>
                <li>Euplectella aspergillum (Spons venus)</li>
                <li>Clathrina coriacea</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/cnidaria.jpg" alt="Cnidaria" />
            <h4>Cnidaria (Hewan Berongga)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Memiliki knidosit (sel penyengat)</li>
                <li>Simetri radial</li>
                <li>Diploblastik</li>
                <li>Polip dan medusa</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Aurelia aurita (Ubur-ubur bulan)</li>
                <li>Hydra viridis</li>
                <li>Actinia equina (Anemon laut)</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/platyhelminthes.jpg" alt="Platyhelminthes" />
            <h4>Platyhelminthes (Cacing Pipih)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Bilateral simetris</li>
                <li>Triploblastik</li>
                <li>Aselomata</li>
                <li>Sistem pencernaan tak sempurna</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Taenia solium (Cacing pita)</li>
                <li>Planaria sp.</li>
                <li>Fasciola hepatica (Cacing hati)</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/nematoda.jpg" alt="Nematoda" />
            <h4>Nematoda (Cacing Gilig)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Tubuh silindris</li>
                <li>Pseudoselomata</li>
                <li>Sistem pencernaan lengkap</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Ascaris lumbricoides</li>
                <li>Wuchereria bancrofti</li>
                <li>Ancylostoma duodenale</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/annelida.jpg" alt="Annelida" />
            <h4>Annelida (Cacing Gelang)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Tubuh bersegmen</li>
                <li>Selomata</li>
                <li>Sistem peredaran darah tertutup</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Lumbricus terrestris (Cacing tanah)</li>
                <li>Hirudo medicinalis (Lintah)</li>
                <li>Nereis sp. (Cacing kelor)</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/mollusca.jpg" alt="Mollusca" />
            <h4>Mollusca (Hewan Lunak)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Tubuh lunak</li>
                <li>Memiliki mantel</li>
                <li>Sebagian bercangkang</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Achatina fulica (Bekicot)</li>
                <li>Octopus vulgaris (Gurita)</li>
                <li>Loligo sp. (Cumi-cumi)</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/arthropoda.jpg" alt="Arthropoda" />
            <h4>Arthropoda (Hewan Berbuku-buku)</h4>
            <div className="type-content">
              <h5>Klasifikasi:</h5>
              <ul>
                <li>Crustacea (Udang, kepiting)</li>
                <li>Arachnida (Laba-laba, kalajengking)</li>
                <li>Insecta (Serangga)</li>
                <li>Myriapoda (Kelabang, kaki seribu)</li>
              </ul>
              <h5>Karakteristik Umum:</h5>
              <ul>
                <li>Eksoskeleton dari kitin</li>
                <li>Tubuh bersegmen</li>
                <li>Kaki beruas-ruas</li>
                <li>Mengalami molting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="classification-group vertebrates">
        <h3>Vertebrata (Hewan Bertulang Belakang)</h3>
        <div className="animal-types">
          <div className="type-card">
            <img src="/images/pisces.jpg" alt="Pisces" />
            <h4>Pisces (Ikan)</h4>
            <div className="type-content">
              <h5>Klasifikasi:</h5>
              <ul>
                <li>Chondrichthyes (Ikan bertulang rawan)
                  <ul>
                    <li>Hiu</li>
                    <li>Pari</li>
                  </ul>
                </li>
                <li>Osteichthyes (Ikan bertulang sejati)
                  <ul>
                    <li>Ikan mas</li>
                    <li>Ikan nila</li>
                    <li>Ikan tuna</li>
                  </ul>
                </li>
              </ul>
              <h5>Karakteristik:</h5>
              <ul>
                <li>Bernapas dengan insang</li>
                <li>Memiliki sirip</li>
                <li>Poikilotermik</li>
                <li>Memiliki sisik</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/amphibia.jpeg" alt="Amphibia" />
            <h4>Amphibia</h4>
            <div className="type-content">
              <h5>Ordo:</h5>
              <ul>
                <li>Anura (Katak dan kodok)</li>
                <li>Urodela (Salamander)</li>
                <li>Apoda (Sesilia)</li>
              </ul>
              <h5>Karakteristik:</h5>
              <ul>
                <li>Metamorfosis</li>
                <li>Kulit lembab dan berlendir</li>
                <li>Poikilotermik</li>
                <li>Hidup di darat dan air</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/reptilia.jpeg" alt="Reptilia" />
            <h4>Reptilia</h4>
            <div className="type-content">
              <h5>Kelompok:</h5>
              <ul>
                <li>Squamata (Ular dan kadal)</li>
                <li>Crocodilia (Buaya dan aligator)</li>
                <li>Testudines (Kura-kura dan penyu)</li>
              </ul>
              <h5>Karakteristik:</h5>
              <ul>
                <li>Kulit bersisik kering</li>
                <li>Bernapas dengan paru-paru</li>
                <li>Poikilotermik</li>
                <li>Telur amniota</li>
              </ul>
            </div>
          </div>

          <div className="type-card">
            <img src="/images/aves.jpeg" alt="Aves" />
            <h4>Aves (Burung)</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Tubuh tertutup bulu</li>
                <li>Memiliki sayap</li>
                <li>Homeotermik</li>
                <li>Bernapas dengan paru-paru</li>
                <li>Memiliki paruh</li>
              </ul>
              <h5>Contoh:</h5>
              <ul>
                <li>Burung elang</li>
                <li>Burung merpati</li>
                <li>Burung kakaktua</li>
                <li>Burung unta</li>
              </ul>
            </div>
          </div>
          <div className="type-card">
            <img src="/images/mammalia.jpeg" alt="Mammalia" />
            <h4>Mammalia</h4>
            <div className="type-content">
              <h5>Karakteristik:</h5>
              <ul>
                <li>Memiliki kelenjar susu</li>
                <li>Tubuh berambut</li>
                <li>Homeotermik</li>
                <li>Vivipar (umumnya)</li>
              </ul>
              <h5>Contoh berdasarkan habitat:</h5>
              <ul>
                <li>Darat: Singa, gajah, kuda</li>
                <li>Air: Paus, lumba-lumba</li>
                <li>Udara: Kelelawar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
{activeSection === 'examples' && (
  <div className="content-section examples-section">
    <div className="section-header">
      <h2>Galeri dan Contoh Hewan</h2>
      <div className="separator"></div>
    </div>

    <div className="examples-container">
   
      <section className="example-category">
        <h3>Hewan Langka Indonesia</h3>
        <div className="animal-gallery">
          <div className="animal-showcase">
            <img src="/images/orangutan.jpg" alt="Orangutan" />
            <div className="animal-info">
              <h4>Orangutan (Pongo sp.)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Hutan hujan Sumatra dan Kalimantan</p>
                <p><strong>Status:</strong> Kritis (Critically Endangered)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Primata besar dengan bulu kemerahan</li>
                  <li>Hidup di pohon (arboreal)</li>
                  <li>Sangat cerdas</li>
                  <li>Masa hidup hingga 50 tahun</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animal-showcase">
            <img src="/images/komodo.jpg" alt="Komodo" />
            <div className="animal-info">
              <h4>Komodo (Varanus komodoensis)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Pulau Komodo dan sekitarnya</p>
                <p><strong>Status:</strong> Rentan (Vulnerable)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Kadal terbesar di dunia</li>
                  <li>Predator puncak</li>
                  <li>Memiliki air liur beracun</li>
                  <li>Panjang mencapai 3 meter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="example-category">
        <h3>Hewan Endemik Nusantara</h3>
        <div className="animal-gallery">
          <div className="animal-showcase">
            <img src="/images/anoa.jpg" alt="Anoa" />
            <div className="animal-info">
              <h4>Anoa (Bubalus sp.)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Hutan Sulawesi</p>
                <p><strong>Status:</strong> Terancam (Endangered)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Bovidae terkecil di dunia</li>
                  <li>Bertanduk runcing</li>
                  <li>Pemalu dan soliter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animal-showcase">
            <img src="/images/cendrawasih.jpeg" alt="Cendrawasih" />
            <div className="animal-info">
              <h4>Cendrawasih (Paradisaeidae)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Papua dan sekitarnya</p>
                <p><strong>Status:</strong> Beragam (tergantung spesies)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Bulu indah dan berwarna-warni</li>
                  <li>Dimorfisme seksual yang jelas</li>
                  <li>Ritual kawin yang unik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="example-category">
        <h3>Fauna Laut Indonesia</h3>
        <div className="animal-gallery">
          <div className="animal-showcase">
            <img src="/images/dugong.jpg" alt="Dugong" />
            <div className="animal-info">
              <h4>Dugong (Dugong dugon)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Perairan dangkal Indonesia</p>
                <p><strong>Status:</strong> Rentan (Vulnerable)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Mamalia laut herbivora</li>
                  <li>Hidup di padang lamun</li>
                  <li>Bergerak lambat dan damai</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animal-showcase">
            <img src="/images/hiu-paus.jpg" alt="Hiu Paus" />
            <div className="animal-info">
              <h4>Hiu Paus (Rhincodon typus)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Perairan tropis dan subtropis</p>
                <p><strong>Status:</strong> Terancam (Endangered)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Ikan terbesar di dunia</li>
                  <li>Pemakan plankton</li>
                  <li>Bermigrasi jarak jauh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="example-category">
        <h3>Hewan Malam (Nocturnal)</h3>
        <div className="animal-gallery">
          <div className="animal-showcase">
            <img src="/images/kukang.jpg" alt="Kukang" />
            <div className="animal-info">
              <h4>Kukang (Nycticebus sp.)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Hutan tropis Indonesia</p>
                <p><strong>Status:</strong> Terancam (Endangered)</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Primata nokturnal</li>
                  <li>Pergerakan lambat</li>
                  <li>Memiliki racun di lengannya</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animal-showcase">
            <img src="/images/kelelawar.jpg" alt="Kelelawar" />
            <div className="animal-info">
              <h4>Kelelawar Buah (Pteropus sp.)</h4>
              <div className="info-details">
                <p><strong>Habitat:</strong> Hutan dan area urban</p>
                <p><strong>Peran ekologis:</strong> Penyebar biji dan penyerbuk</p>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Mamalia terbang</li>
                  <li>Navigasi dengan ekolokasi</li>
                  <li>Aktif di malam hari</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default Animalia;

