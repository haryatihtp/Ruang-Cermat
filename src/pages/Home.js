import React from "react";
import {
  FaCalculator,
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaQuestionCircle,
  FaTeamspeak,
  FaFastBackward,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { FaAward } from "react-icons/fa";

function Home() {
  return (
    <div
      className="bg-light min-vh-100 d-flex flex-column align-items-center text-center"
      style={{
        paddingTop: "5rem",
        overflowX: "hidden",
      }}
    >
      {/* Header Section */}
      <header
        className="mb-5 text-center"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h1
          className="text-primary fw-bold display-4 animated-title"
          style={{ marginBottom: "1rem" }}
        >
          <FaAward size={50} className="me-2 animated-icon" />
          RUANG BELAJAR CERMAT
        </h1>

        <p className="text-muted fs-4 animated-subtitle mb-3">
          Kumpulan Materi dan Soal-Soal
        </p>
        <p
          className="text-dark fs-5 animated-description"
          style={{ lineHeight: "1.6" }}
        >
          Platform belajar materi SMA yang interaktif, seru, dan cerdas!
        </p>
        <hr className="my-4" />
        <p className="text-secondary fs-6">
          Bergabunglah dengan kami untuk pengalaman belajar yang menyenangkan!
        </p>
      </header>
      {/* Feature Section */}
      <section className="text-center">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaChalkboardTeacher size={50} className="text-success mb-3" />
              <h4 className="text-primary">Materi Lengkap</h4>
              <p className="text-muted">
                Temukan berbagai macam materi pelajaran yang disajikan dengan
                cara yang menyenangkan dan interaktif dari kelas 10, 11, dan 12.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaBook size={50} className="text-warning mb-3" />
              <h4 className="text-primary">Kuis Interaktif</h4>
              <p className="text-muted">
                Uji pemahaman Anda dengan beragam kuis interaktif yang dirancang
                untuk meningkatkan kemampuan belajar Anda.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaQuestionCircle size={50} className="text-danger mb-3" />
              <h4 className="text-primary">Soal Latihan Menarik</h4>
              <p className="text-muted">
                Kerjakan soal latihan yang menarik dan menantang untuk
                meningkatkan kemampuan belajar Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
