import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/Fsk10b4.css"; 

const Bab4 = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      title: "Apa Itu Gerak Vertikal ke Bawah?",
      content: (
        <>
          <p>
            <b>Gerak Vertikal ke Bawah</b> adalah gerak benda yang dilempar atau
            dijatuhkan dari ketinggian tertentu dengan kecepatan awal, di mana
            geraknya dipengaruhi oleh gravitasi bumi.
          </p>
          <ul>
            <li>Gerak ini merupakan gerak lurus berubah beraturan (GLBB).</li>
            <li>Benda bergerak semakin cepat ke bawah seiring waktu.</li>
            <li>Kecepatan awal benda memberikan kontribusi pada kecepatan akhirnya.</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Rumus-Rumus Gerak Vertikal ke Bawah",
      content: (
        <>
          <p>Berikut adalah beberapa rumus penting:</p>
          <ul>
            <li><b>Kecepatan Sesaat (v):</b> <code>v = v₀ + g × t</code></li>
            <li><b>Jarak Tempuh (s):</b> <code>s = v₀ × t + 1/2 × g × t²</code></li>
            <li><b>Kecepatan Akhir (v):</b> <code>v² = v₀² + 2 × g × s</code></li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "Ciri-Ciri Gerak Vertikal ke Bawah",
      content: (
        <>
          <p>Gerak vertikal ke bawah memiliki ciri-ciri khusus:</p>
          <ul>
            <li>Percepatan benda selalu konstan, yaitu percepatan gravitasi (g).</li>
            <li>Kecepatan awal benda tidak nol.</li>
            <li>Semakin lama benda jatuh, kecepatannya semakin besar.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
        <div className="bab5-container">
      <h1>Bab 4: Gerak Lurus</h1>
          <h2 className="text-center">Gerak Lurus</h2>
          <section className="mt-10">
            <h3 className="text-2xl font-semibold text-green-600">Rumus Gerak Lurus</h3>
            <p className="text-lg text-gray-700 mb-4">
              Gerak lurus dapat dihitung dengan rumus dasar yang berhubungan dengan kecepatan, waktu, dan percepatan.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 text-xl font-mono">
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>v:</strong> Kecepatan akhir (m/s)</li>
                <li><strong>u:</strong> Kecepatan awal (m/s)</li>
                <li><strong>a:</strong> Percepatan (m/s²)</li>
                <li><strong>t:</strong> Waktu (s)</li>
              </ul>
            </div>
          </section>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2 className="text-center">Gerak Jatuh Bebas</h2>
          <div className="gjb-container text-center">
            <p>
              Contoh bola jatuh bebas: sebuah bola dilepaskan dari ketinggian
              tanpa kecepatan awal, kemudian jatuh hanya dipengaruhi oleh
              gravitasi.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <h2 className="text-center">Gerak Vertikal ke Bawah</h2>
          <Row>
            {cardData.map((card) => (
              <Col md={12} key={card.id} className="mb-4">
                <Card>
                  <Card.Header className="bg-primary text-white">
                    {card.title}
                  </Card.Header>
                  <Card.Body>{card.content}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/SlFsk10b4"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b3")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/Fsk10b5")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </Container>
  );
};

export default Bab4;