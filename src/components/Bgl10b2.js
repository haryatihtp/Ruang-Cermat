import React, { useState } from "react";
import '../css/Bgl10b2.css';

function Virus() {
  const [activeSection, setActiveSection] = useState('pengertian');

  const sections = [
    {
      id: 'pengertian',
      title: 'Pengertian Virus',
      content: (
        <div className="section-content">
          <h2>Pengertian Virus</h2>
          <p>Virus adalah organisme mikroskopis yang tidak dapat dilihat dengan mata telanjang. Mereka adalah parasit obligat yang hanya bisa berkembang biak di dalam sel inang.</p>
          <p>Struktur virus terdiri dari materi genetik berupa DNA atau RNA yang dikelilingi oleh lapisan protein yang disebut kapsid. Beberapa virus memiliki selubung lipid yang membantu mereka memasuki sel inang lebih mudah.</p>
          <p>Virus tidak memiliki struktur seluler seperti dinding sel, membran sel, atau organel sel lainnya. Mereka hanya terdiri dari materi genetik dan kapsid, dan tidak dapat melakukan metabolisme sendiri, yang membuat mereka berbeda dari organisme hidup lainnya.</p>
          <p>Virus dapat menginfeksi semua bentuk kehidupan, termasuk hewan, tumbuhan, bakteri, dan arkea. Mereka ditemukan di hampir setiap ekosistem di Bumi dan merupakan entitas biologis paling melimpah.</p>
          <p>Karena virus tidak dapat berkembang biak di luar sel inang, mereka sering dianggap sebagai "peralihan" antara benda hidup dan tidak hidup. Virus hanya menjadi aktif ketika mereka berada di dalam sel inang yang cocok.</p>
          <p>Penelitian terhadap virus telah memberikan wawasan penting tentang biologi molekuler, genetika, dan evolusi. Virus juga memainkan peran penting dalam ekosistem dengan mengendalikan populasi mikroorganisme dan sebagai agen transfer genetik antara organisme.</p>
          <p>Dalam konteks medis, virus dapat menyebabkan berbagai penyakit pada manusia, seperti influenza, HIV, hepatitis, dan COVID-19. Namun, tidak semua virus bersifat patogen, dan beberapa bahkan digunakan dalam pengobatan dan bioteknologi.</p>
          <p>Studi tentang virus, yang disebut virologi, adalah cabang penting dalam mikrobiologi dan biologi molekuler, yang berfokus pada struktur, fungsi, dan cara kerja virus, serta interaksi mereka dengan inang.</p>
        </div>
      )
    },
    {
      id: 'sejarah',
      title: 'Sejarah Penemuan Virus',
      content: (
        <div className="section-content">
          <h2>Sejarah Penemuan Virus</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">1883</div>
              <div className="timeline-content">
                <h3>Adolf Mayer</h3>
                <p>Mengamati penyakit mosaik pada daun tembakau.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1892</div>
              <div className="timeline-content">
                <h3>Dmitri Ivanovsky</h3>
                <p>Menemukan bahwa agen penyebab penyakit mosaik tembakau dapat melewati saringan yang menyaring bakteri.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1935</div>
              <div className="timeline-content">
                <h3>Wendell Stanley</h3>
                <p>Mengkristalkan virus mosaik tembakau (TMV).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1952</div>
              <div className="timeline-content">
                <h3>Hershey dan Chase</h3>
                <p>Membuktikan bahwa DNA adalah materi genetik virus.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">1983</div>
              <div className="timeline-content">
                <h3>Virus HIV Ditemukan</h3>
                <p>Penemuan virus penyebab AIDS yang mengubah cara kita memahami virus dan penyakit menular.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">2003</div>
              <div className="timeline-content">
                <h3>Wabah SARS</h3>
                <p>SARS menunjukkan bagaimana virus dapat menyebar cepat di era globalisasi.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">2019</div>
              <div className="timeline-content">
                <h3>Pandemi COVID-19</h3>
                <p>COVID-19 menunjukkan dampak global dari virus dan pentingnya virologi dalam kesehatan masyarakat.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Bagian lainnya tetap sama seperti sebelumnya
  ];

  return (
    <div className="virus-page">
      <div className="virus-header">
        <h1>Dunia Virus</h1>
        <p>Menjelajahi Mikroorganisme Misterius</p>
      </div>

      <div className="section-navigator">
        {sections.map(section => (
          <button
            key={section.id}
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => setActiveSection(section.id)}
          >
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="main-content">
        {sections.find(section => section.id === activeSection)?.content}
      </div>
    </div>
  );
}

export default Virus;
