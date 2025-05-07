import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card } from "react-bootstrap";
import AOS from 'aos';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../css/Eko10.css';

function Eko10b1() {
  const [quizAnswers, setQuizAnswers] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
  });

  const [quizFeedback, setQuizFeedback] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizAnswers({ ...quizAnswers, [name]: value });
  };

  const checkAnswers = (e) => {
    e.preventDefault();
    const correctAnswers = {
      quiz1: "kelangkaan",
      quiz2: "padat modal",
      quiz3: "kapitalis",
    };

    setQuizFeedback({
      quiz1: quizAnswers.quiz1 === correctAnswers.quiz1 ? "Benar!" : "Salah, jawabannya adalah 'Kelangkaan'.",
      quiz2: quizAnswers.quiz2 === correctAnswers.quiz2 ? "Benar!" : "Salah, jawabannya adalah 'Padat Modal'.",
      quiz3: quizAnswers.quiz3 === correctAnswers.quiz3 ? "Benar!" : "Salah, jawabannya adalah 'Kapitalis'.",
    });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container className="app__container my-5">
      <header className="app__header text-center mb-5" style={{ marginTop: "-50px" }} data-aos="fade-up">
        <h1 className="app__header__title display-4">Bab 1: Masalah Ekonomi Dasar</h1>
        <p className="app__header__description lead text-muted" style={{ textAlign: "justify" }} data-aos="fade-up">
          Masalah ekonomi dasar adalah persoalan universal yang dihadapi oleh setiap masyarakat atau individu terkait pengelolaan sumber daya yang terbatas untuk memenuhi kebutuhan yang tak terbatas. Masalah ini terjadi karena adanya kelangkaan (scarcity), yang mengharuskan masyarakat membuat pilihan di antara berbagai alternatif. Masalah ekonomi dasar ini dapat dijelaskan lebih rinci melalui tiga aspek utama, yaitu apa yang harus diproduksi, bagaimana cara memproduksi, dan untuk siapa barang atau jasa tersebut diproduksi.
        </p>
      </header>

      <section className="app__section mb-5" data-aos="fade-right">
        <h2 className="app__section__title">Apa yang Harus Diproduksi?</h2>
        <p className="app__section__content">
          Pertanyaan ini berfokus pada jenis barang dan jasa yang harus diproduksi untuk memenuhi kebutuhan masyarakat.
        </p>
        <p className="app__section__content">
          Sumber daya yang tersedia: Jika tenaga kerja melimpah, metode padat karya lebih disukai. Sebaliknya, jika modal dan teknologi mendukung, metode padat modal akan lebih efisien.
          Teknologi: Perkembangan teknologi memungkinkan produksi lebih efisien, tetapi sering kali membutuhkan investasi besar. Misalnya, robotik dalam industri manufaktur dapat meningkatkan efisiensi, tetapi meminimalkan lapangan kerja.
          Lingkungan: Di era modern, pertimbangan lingkungan menjadi faktor penting. Produksi yang berkelanjutan dan ramah lingkungan semakin ditekankan.
          Pilihan metode ini juga berdampak pada biaya produksi, kualitas barang, dan waktu yang dibutuhkan untuk menghasilkan barang atau jasa.
        </p>
        <img
            src="https://th.bing.com/th/id/OIP.1WFu8g-DJ5zdOsL0_fB4NgAAAA?w=288&h=167&c=7&r=0&o=5&dpr=2&pid=1.7"
            alt="Grafik ilustrasi tentang kebijakan moneter"
            className="img-fluid rounded my-1"
          />
      </section>

      <section className="app__section mb-5" data-aos="fade-left">
        <h2 className="app__section__title">Bagaimana Cara Memproduksi?</h2>
        <p className="app__section__content">
          Setelah menentukan apa yang akan diproduksi, langkah berikutnya adalah menentukan metode produksi yang akan digunakan.
          Jika tenaga kerja melimpah, metode padat karya lebih disukai. Sebaliknya, jika modal dan teknologi mendukung, metode padat modal lebih efisien.
          Kemajuan teknologi memungkinkan produksi yang lebih efisien, meskipun sering membutuhkan investasi besar. Dalam era modern, faktor lingkungan menjadi pertimbangan penting.
          Produksi yang ramah lingkungan dan berkelanjutan semakin ditekankan.
        </p>
        <img
            src="https://th.bing.com/th/id/OIP.LsTgvl-cCZickjLSr_mevQHaE8?w=267&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
            className="img-fluid rounded my-1"
          />
      </section>

      <section className="app__section mb-5" data-aos="fade-up">
        <h2 className="app__section__title">Untuk Siapa Barang atau Jasa Diproduksi?</h2>
        <p className="app__section__content">
          Pertanyaan ini berkaitan dengan bagaimana hasil produksi didistribusikan di masyarakat. Tidak semua orang memiliki kemampuan yang sama untuk mengakses barang dan jasa.
          Dalam sistem kapitalis, barang diproduksi berdasarkan mekanisme pasar, sehingga barang lebih banyak dinikmati oleh mereka yang memiliki daya beli tinggi.
          Dalam sistem sosialis, barang didistribusikan berdasarkan kebutuhan, di mana pemerintah memainkan peran penting dalam menentukan alokasi barang atau jasa.
          Dalam sistem ekonomi campuran, distribusi barang menggabungkan mekanisme pasar dengan intervensi pemerintah.
        </p>
        <img
            src="https://th.bing.com/th/id/OIP.kYIEokEqaioDhV_jHxq26QHaDf?w=322&h=165&c=7&r=0&o=5&dpr=2&pid=1.7"
            className="img-fluid rounded my-1"
          />
      </section>

      <section className="app__section mb-5" data-aos="fade-left">
        <h2 className="app__section__title">Menghadapi Masalah Kelangkaan</h2>
        <p className="app__section__content">
          Kelangkaan adalah inti dari semua masalah ekonomi. Untuk mengatasi kelangkaan, masyarakat dan pemerintah seringkali perlu mengalokasikan sumber daya secara efisien, memilih alternatif terbaik,
          dan mengelola sumber daya dengan bijak. Menggunakan sumber daya dengan cara yang paling produktif, misalnya melalui inovasi teknologi atau peningkatan keterampilan tenaga kerja, menjadi sangat penting.
          Selain itu, mengorbankan produksi barang tertentu untuk memproduksi barang lainnya (konsep biaya peluang) juga menjadi solusi. Dalam hal ini, memastikan bahwa sumber daya yang dapat diperbaharui tetap terjaga dan
          sumber daya yang tidak dapat diperbaharui digunakan dengan hati-hati adalah hal yang wajib dilakukan.
        </p>
      </section>

      <section className="app__section mb-5" data-aos="fade-right">
        <h2 className="app__section__title">Faktor Pendukung Masalah Ekonomi Dasar</h2>
        <p className="app__section__content">
          Pertumbuhan populasi, perubahan preferensi masyarakat, globalisasi, dan krisis ekonomi atau bencana alam adalah beberapa faktor yang mempengaruhi masalah ekonomi dasar.
          Semakin besar populasi, semakin besar pula kebutuhan masyarakat, yang menjadikan masalah kelangkaan lebih kompleks. Selain itu, perubahan gaya hidup dan teknologi memengaruhi barang dan jasa yang dibutuhkan.
          Perdagangan internasional juga menciptakan peluang dan tantangan, terutama dalam hal distribusi dan metode produksi. Faktor eksternal seperti pandemi, resesi, atau bencana alam dapat memperburuk kelangkaan sumber daya.
        </p>
      </section>
      <section className="mb-5"data-aos="fade-up">
        <h2 className="text-center">Video Pembelajaran</h2>
        <p className="mt-3 text-center">
            Kamu dapat mengakses video dibawah ini untuk menambah wawasan kamu mengenai permasalahan ekonomi dasar.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Wz1org27ImY"
              title="Video Pembelajaran"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
      </section>
      <section className="app__section mt-5" data-aos="fade-up">
        <h2 className="app__section__title mb-4 text-center" data-aos="fade-right"><strong>Mini Kuis</strong></h2>
        <Card className="app__card p-4 mb-3 shadow-lg rounded-lg border-0 bg-light">
          <Form onSubmit={checkAnswers}>
            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">1. Apa penyebab utama masalah ekonomi dasar?</Form.Label>
              <Form.Check
                type="radio"
                label="Kelangkaan"
                name="quiz1"
                value="kelangkaan"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Kemajuan Teknologi"
                name="quiz1"
                value="kemajuan teknologi"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Krisis Politik"
                name="quiz1"
                value="krisis politik"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz1 && (
                <p className={`app__form-feedback mt-2 ${quizAnswers.quiz1 === "kelangkaan" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz1 === "kelangkaan" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz1}
                </p>
              )}
            </Form.Group>

            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">2. Jika sebuah negara lebih mengandalkan teknologi tinggi, metode apa yang digunakan?</Form.Label>
              <Form.Check
                type="radio"
                label="Padat Karya"
                name="quiz2"
                value="padat karya"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Padat Modal"
                name="quiz2"
                value="padat modal"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Berbasis Alam"
                name="quiz2"
                value="berbasis alam"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz2 && (
                <p className={`app__form-feedback mt-2 ${quizAnswers.quiz2 === "padat modal" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz2 === "padat modal" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz2}
                </p>
              )}
            </Form.Group>

            <Form.Group className="app__form-group mb-3">
              <Form.Label className="app__form-label">3. Sistem ekonomi apa yang mengutamakan kepemilikan pribadi dan mekanisme pasar bebas?</Form.Label>
              <Form.Check
                type="radio"
                label="Kapitalis"
                name="quiz3"
                value="kapitalis"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Sosialis"
                name="quiz3"
                value="sosialis"
                onChange={handleQuizChange}
              />
              <Form.Check
                type="radio"
                label="Campuran"
                name="quiz3"
                value="campuran"
                onChange={handleQuizChange}
              />
              {quizFeedback.quiz3 && (
                <p className={`app__form-feedback mt-2 ${quizAnswers.quiz3 === "kapitalis" ? "text-success" : "text-danger"}`}>
                  {quizAnswers.quiz3 === "kapitalis" ? <FaCheckCircle /> : <FaTimesCircle />} {quizFeedback.quiz3}
                </p>
              )}
            </Form.Group>

            <Button type="submit" variant="primary" className="app__button">Cek Jawaban</Button>
            <Button type="button" variant="secondary" className="app__button mt-4 mx-auto d-block" onClick={handleBack}>Kembali</Button>
          </Form>
        </Card>
      </section>
    </Container>
  );
}

export default Eko10b1;