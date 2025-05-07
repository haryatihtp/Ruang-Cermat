import React from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Bgl10b4.css';

const Plantae = () => {
  return (
    <section>
      <h1 className="text-center my-4">Kingdom Plantae</h1>
      <Row className="align-items-center">
        
        <Col md={6}>
          <div>
          <h1>Kingdom Plantae</h1>
      <p>
      Kingdom Plantae atau yang lebih dikenal dengan tumbuhan ialah salah satu
       organisme eukariotik multiseluler dengan dinding sel dan klorofil.
       Klorofil adalah zat hijau daun yang berfungsi dalam proses fotosintesis, 
       sehingga tumbuhan mampu membuat makanannya sendiri (autotroph). 
       Hal inilah yang menjadi pembeda antara Kingdom Plantae dan Kingdom Animalia. 
       Sebagai rajanya tumbuhan, Kingdom Plantae menjadi organisme eukariota multiselulerd 
       yang dapat memperoleh makanan secara autotrof dan segenap besar melalui fotosintesis. 
      </p>
      <p>
        Diluar konteks formal, kata “tumbuhan” mengacu pada organisme yang
        mempunyai ciri-ciri tertentu seperti dapat melakukan fotosintesis,
        menghasilkan selulosa, dan multiseluler. Muncul banyak kritikan mengenai
        fungi termasuk bagian dari Kingdom Plantae, karena fungi mendapatkan
        makanan bukan melalui proses fotosintesis, melainkan dari sisa-sisa
        bahan organik.
      </p>
      <p>
        Dengan begitu beragamnya sel penyusun tumbuhan, jaringan yang ada di
        dalamnya, membuat beragam pula jenis tumbuhan yang ada. Dalam buku *Buku
        Ajar Kultur Jaringan Tumbuhan*, kamu dapat mempelajari mengenai kultur
        jaringan tumbuhan.
      </p>
            <h2 className="paragraf">Ciri-Ciri Kingdom Plantae</h2>
            <ul>
              <li>Multiseluler atau mempunyai banyak sel</li>
              <li>Autotrof, bisa membuat makanan sendiri</li>
              <li>Eukariotik, dengan membran inti sel</li>
              <li>Terdapat dinding sel dari selulosa</li>
              <li>Hidup di daratan lembab atau perairan</li>
            </ul>
          </div>
        </Col>


        <Col md={6}>
          <Card className="shadow">
            <Card.Img
              variant="top"
              src="/images/plantae.jpg"
    
              alt="Tumbuhan"
            />
            <Card.Body>
              <Card.Title className="text-success">
                Kingdom Plantae
              </Card.Title>
              <Card.Text>
                Kingdom Plantae merupakan sumber kehidupan utama, menghasilkan
                oksigen, makanan, dan bahan penting untuk manusia dan hewan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bagian Tambahan */}
      <Row className="mt-5">
        <Col md={12}>
          <h2 className="text-center">Klasifikasi Kingdom Plantae</h2>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className="bg-success text-white">
              Filum Pteridophyta
            </Card.Header>
            <Card.Body>
              <p>
                Tumbuhan paku memiliki jaringan pengangkut sejati dan
                bereproduksi menggunakan spora.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className="bg-success text-white">
              Filum Bryophyta
            </Card.Header>
            <Card.Body>
              <p>
                Tumbuhan lumut tidak memiliki organ sejati seperti akar, batang,
                dan daun, namun tetap memainkan peran penting.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header className="bg-success text-white">
              Filum Spermatophyta
            </Card.Header>
            <Card.Body>
              <p>
                Tumbuhan berbiji yang menjadi dasar tanaman pangan, seperti padi
                dan gandum.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2>Manfaat Kingdom Plantae</h2>
      <p>
      Kingdom Plantae adalah organisme eukariotik multiseluler yang memiliki klorofil dan dinding sel. 
      Terdapat sekitar 400.000 spesies dalam kingdom plantae. Pada rantai makanan kingdom ini berperan sebagai produsen.
       Kingdom plantae sangat bermanfaat bagi kehidupan manusia, mulai dari 
       Tumbuhan paku yang bermanfaat sebagai pupuk hijau pada tanaman padi, dapat dijadikan sebagai bahan sayur-sayuran, 
       dapat dijadikan sebagai tanaman hias dan diproses sebagai obat luka.
      </p>
      <ul>
        <li>
          Sebagai produsen utama dalam ekosistem, menghasilkan oksigen melalui
          fotosintesis
        </li>
        <li>
          Sumber makanan utama manusia, seperti padi, jagung, dan sayur-sayuran
        </li>
        <li>
          Digunakan untuk keperluan industri, seperti bahan kertas, kayu, dan
          kain
        </li>
        <li>
          Sumber bahan obat-obatan tradisional dan modern, seperti Ginkgo biloba
          untuk kesehatan
        </li>
      </ul>
    </section>
  );
};

export default Plantae;