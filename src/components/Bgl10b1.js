import React, { useState } from 'react';
import '../css/Bgl10b1.css';
import { Accordion, Card, Button, Badge } from 'react-bootstrap';

function Keanekaragaman() {
  const [activeTab, setActiveTab] = useState('global');

  return (
    <div className="biodiversity-container">
      <div className="hero-section">
        <div className="container">
          <h1 className="display-4 text-white">Keanekaragaman Hayati</h1>
          <p className="lead text-white">Memahami Kompleksitas Kehidupan di Bumi</p>
          <div className="hero-badges">
            <Badge bg="primary" className="mx-2">100+ Spesies</Badge>
            <Badge bg="success" className="mx-2">34 Provinsi</Badge>
            <Badge bg="warning" className="mx-2">5 Ekosistem Utama</Badge>
          </div>
        </div>
      </div>

      <div className="content-section detailed-material">
        <div className="text-content">
          <h2>Uraian Materi Keanekaragaman Hayati</h2>
          <div className="material-section">
            <h3>Definisi Keanekaragaman Hayati</h3>
            <p>
              Keanekaragaman hayati adalah keanekaragaman pada makhluk hidup 
              yang menunjukkan adanya variasi bentuk, penampilan, ukuran, 
              serta ciri-ciri lainnya. Istilah lain yang digunakan adalah 
              biodiversitas (biodiversity), yang meliputi keseluruhan berbagai 
              variasi pada tingkat gen, jenis, dan ekosistem di suatu daerah.
            </p>
          </div>
          <div className="material-section">
            <h3>Faktor Pembentuk Keanekaragaman</h3>
            <p>
              Keanekaragaman terjadi karena pengaruh dua faktor utama:
            </p>
            <ul>
              <li>
                <strong>Faktor Genetik:</strong> Perbedaan susunan dan 
                urutan gen pada setiap individu
              </li>
              <li>
                <strong>Faktor Lingkungan:</strong> Kondisi eksternal 
                yang memengaruhi ekspresi gen
              </li>
            </ul>
            <p>
              Sifat yang muncul pada setiap individu merupakan interaksi 
              antara gen dengan lingkungan. Dua individu dengan struktur 
              dan urutan gen identik belum tentu memiliki bentuk yang sama 
              karena pengaruh lingkungan.
            </p>
          </div>
          <div className="material-section">
            <h3>Contoh Pengaruh Lingkungan</h3>
            <p>
              Perbedaan jumlah sel darah merah pada manusia di dataran 
              tinggi dan pantai merupakan bukti nyata pengaruh lingkungan:
            </p>
            <ul>
              <li>
                Orang di pegunungan memiliki sel darah merah lebih banyak
              </li>
              <li>
                Hal ini disebabkan oleh rendahnya kadar oksigen di pegunungan
              </li>
              <li>
                Sel darah merah tambahan membantu mengangkut oksigen 
                lebih efisien
              </li>
            </ul>
          </div>
          <div className="material-section">
            <h3>Definisi Spesies</h3>
            <p>
              Spesies diartikan sebagai individu yang memiliki:
            </p>
            <ul>
              <li>Persamaan morfologis</li>
              <li>Persamaan anatomis</li>
              <li>Persamaan fisiologis</li>
              <li>Kemampuan kawin dengan sesamanya</li>
              <li>Menghasilkan keturunan subur (fertile)</li>
            </ul>
          </div>
          <div className="material-section">
            <h3>Tipe-Tipe Ekosistem Perairan (Akuatik)</h3>
            <p>
              Ekosistem perairan memiliki komponen abiotik yang sebagian 
              besar terdiri dari air. Berikut pembagian organisme dalam 
              ekosistem perairan:
            </p>
            <ol>
              <li>
                <strong>Plankton</strong>
                <ul>
                  <li>Fitoplankton</li>
                  <li>Zooplankton</li>
                  <li>Bergerak pasif karena arus air</li>
                  <li>Contoh: ganggang uniseluler, protozoa</li>
                </ul>
              </li>
              <li>
                <strong>Nekton</strong>
                <ul>
                  <li>Organisme bergerak aktif (berenang)</li>
                  <li>Contoh: ikan, katak</li>
                </ul>
              </li>
              <li>
                <strong>Neuston</strong>
                <ul>
                  <li>Organisme yang mengapung di permukaan air</li>
                  <li>Contoh: serangga air, teratai, eceng gondok, ganggang</li>
                </ul>
              </li>
              <li>
                <strong>Bentos</strong>
                <ul>
                  <li>Organisme yang berada di dasar perairan</li>
                  <li>Contoh: udang, kepiting, cacing, ganggang</li>
                </ul>
              </li>
              <li>
                <strong>Perifiton</strong>
                <ul>
                  <li>Organisme yang melekat pada organisme lain</li>
                  <li>Contoh: ganggang, siput</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="content-section tech-conservation">
        <div className="text-content">
          <h2>Teknologi Mutakhir dalam Konservasi</h2>
          <div className="tech-tabs">
            <button 
              className={activeTab === 'global' ? 'active' : ''}
              onClick={() => setActiveTab('global')}
            >
              Teknologi Global
            </button>
            <button 
              className={activeTab === 'lokal' ? 'active' : ''}
              onClick={() => setActiveTab('lokal')}
            >
              Teknologi Lokal
            </button>
          </div>

          {activeTab === 'global' && (
            <div className="tech-content">
              <h3>Teknologi Konservasi Global</h3>
              <ul>
                <li>
                  <strong>Drone Pemantauan Hutan</strong>
                  <p>Teknologi pemetaan dan pemantauan hutan secara real-time</p>
                </li>
                <li>
                  <strong>Genetik Digital</strong>
                  <p>Pemetaan genom untuk konservasi spesies terancam punah</p>
                </li>
                <li>
                  <strong>Satelit Lingkungan</strong>
                  <p>Pemantauan perubahan ekosistem dari luar angkasa</p>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'lokal' && (
            <div className="tech-content">
              <h3>Teknologi Konservasi Lokal Indonesia</h3>
              <ul>
                <li>
                  <strong>Sistem Informasi Geografis Berbasis Masyarakat</strong>
                  <p>Pemetaan wilayah konservasi oleh masyarakat lokal</p>
                </li>
                <li>
                  <strong>Teknologi Restorasi Terumbu Karang</strong>
                  <p>Metode transplantasi karang berbasis teknologi</p>
                </li>
                <li>
                  <strong>Pengembangan Bank Benih Lokal</strong>
                  <p>Pelestarian varietas tanaman asli Indonesia</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="content-section scientific-research">
        <div className="text-content">
          <h2>Riset Terkini Keanekaragaman Hayati</h2>
          <div className="research-grid">
            <div className="research-card">
              <h3>Mikroorganisme Ekstrem</h3>
              <p>Penemuan bakteri yang dapat bertahan di kondisi tersulit</p>
            </div>
            <div className="research-card">
              <h3>Genom Spesies Langka</h3>
              <p>Pemetaan DNA spesies terancam punah</p>
            </div>
            <div className="research-card">
              <h3>Ekologi Molekuler</h3>
              <p>Studi interaksi genetik antarspesies</p>
            </div>
            <div className="research-card">
              <h3>Bioteknologi Konservasi</h3>
              <p>Pengembangan metode penyelamatan spesies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section download-materials">
        <div className="container">
          <h2 className="text-center mb-4">Unduh Materi Keanekaragaman Hayati</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Header>Materi Dasar</Card.Header>
                <Card.Body>
                  <Card.Title>Pengantar Keanekaragaman Hayati</Card.Title>
                  <Card.Text>
                    Dokumen PDF berisi materi dasar tentang konsep keanekaragaman hayati
                  </Card.Text>
                  <Button variant="primary" href="./materi3/materi.pdf" download>
                    Unduh PDF
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Header>Materi Lanjutan</Card.Header>
                <Card.Body>
                  <Card.Title>Ekosistem dan Konservasi</Card.Title>
                  <Card.Text>
                    Panduan komprehensif tentang ekosistem dan upaya konservasi
                  </Card.Text>
                  <Button variant="success" href="./materi3/materi.pdf" download>
                    Unduh PDF
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Header>Presentasi</Card.Header>
                <Card.Body>
                  <Card.Title>Slide Presentasi</Card.Title>
                  <Card.Text>
                    Slide presentasi lengkap untuk dipelajari atau dibagikan
                  </Card.Text>
                  <Button variant="info" href="./materi2/materi.pdf" download>
                    Unduh Presentasi
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="text-center mt-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Informasi Unduhan</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Semua materi yang disediakan untuk download bersifat gratis 
                    dan dapat digunakan untuk kepentingan edukasi. Mohon 
                    mencantumkan sumber apabila menggunakan materi ini.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keanekaragaman;
