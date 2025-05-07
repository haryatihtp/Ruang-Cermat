import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Bing11b4.css";

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab7-container">
      <h1>Bab 7: Modals dalam Bahasa Inggris</h1>
      
      <section>
        <h2>Pengenalan tentang Modals</h2>
        <p>
          Dalam bahasa Inggris, modals adalah kata kerja bantu yang digunakan untuk menyatakan kemauan, 
          kemungkinan, izin, atau kewajiban. Modals biasanya diikuti oleh bentuk dasar kata kerja tanpa "to".
          Contoh modals yang sering digunakan adalah <strong>can, could, will, would, shall, should, may, might, must, dan ought to</strong>.
        </p>
      </section>
      
      <section>
        <h3>A. Jenis-Jenis Modals</h3>
        <p>
          Ada beberapa jenis modal yang digunakan dalam bahasa Inggris. Berikut adalah penjelasan tentang beberapa jenis modal:
        </p>
        <ul>
          <li><strong>Can:</strong> Digunakan untuk menyatakan kemampuan atau kemungkinan.
            <br /> Contoh: "I <strong>can</strong> speak English."
          </li>
          <li><strong>Could:</strong> Bentuk lampau dari "can" yang menunjukkan kemampuan di masa lalu atau kemungkinan yang lebih lemah.
            <br /> Contoh: "I <strong>could</strong> speak English when I was younger."
          </li>
          <li><strong>Will:</strong> Digunakan untuk menyatakan keinginan atau prediksi.
            <br /> Contoh: "I <strong>will</strong> go to the market tomorrow."
          </li>
          <li><strong>Would:</strong> Bentuk lampau dari "will", digunakan untuk menyatakan keinginan atau kebiasaan di masa lalu.
            <br /> Contoh: "I <strong>would</strong> like a cup of tea."
          </li>
          <li><strong>May:</strong> Digunakan untuk meminta izin atau menunjukkan kemungkinan.
            <br /> Contoh: "You <strong>may</strong> leave now."
          </li>
          <li><strong>Must:</strong> Digunakan untuk menunjukkan kewajiban atau kebutuhan yang kuat.
            <br /> Contoh: "You <strong>must</strong> finish your homework."
          </li>
        </ul>
      </section>

      <section>
        <h3>B. Penggunaan Modals dalam Kalimat</h3>
        <p>
          Modals digunakan untuk memberi makna tambahan pada kalimat. Berikut adalah beberapa contoh kalimat dengan modals:
        </p>
        <ul>
          <li><strong>Can:</strong> "She <strong>can</strong> play the piano very well."
          </li>
          <li><strong>Could:</strong> "Could you please help me with this task?"
          </li>
          <li><strong>Will:</strong> "They <strong>will</strong> attend the meeting tomorrow."
          </li>
          <li><strong>Would:</strong> "I <strong>would</strong> love to go on a trip next month."
          </li>
          <li><strong>May:</strong> "You <strong>may</strong> start your exam now."
          </li>
          <li><strong>Must:</strong> "You <strong>must</strong> be here on time."
          </li>
        </ul>
      </section>

      <section>
        <h3>C. Perbedaan antara Modals</h3>
        <p>
          Meskipun banyak modals yang mirip, mereka memiliki nuansa makna yang berbeda. Berikut adalah perbedaan antara beberapa modals:
        </p>
        <ul>
          <li><strong>Can vs May:</strong> "Can" sering digunakan untuk menyatakan kemampuan, sementara "May" digunakan untuk meminta izin.
            <br /> Contoh: "Can I go to the bathroom?" (Kemampuan) vs "May I go to the bathroom?" (Permintaan izin)
          </li>
          <li><strong>Must vs Have to:</strong> "Must" menunjukkan kewajiban yang kuat, sementara "Have to" lebih bersifat objektif.
            <br /> Contoh: "You <strong>must</strong> wear a uniform." vs "I <strong>have to</strong> finish this report."
          </li>
          <li><strong>Shall vs Will:</strong> "Shall" lebih formal dan digunakan untuk menawarkan atau meminta saran, sementara "Will" lebih sering digunakan dalam percakapan sehari-hari.
            <br /> Contoh: "I <strong>shall</strong> return the book tomorrow." vs "I <strong>will</strong> return the book tomorrow."
          </li>
        </ul>
      </section>

      <section>
        <h3>D. Latihan Soal Modals</h3>
        <p>
          Berikut adalah latihan soal untuk melatih penggunaan modals dalam kalimat:
        </p>
        <ul>
          <li>Choose the correct modal: "You __ study harder for the exam." (must, can, will)</li>
          <li>Fill in the blanks: "She __ speak French fluently." (can, may, must)</li>
        </ul>
        <p>
          Jawaban akan diberikan setelah Anda klik tombol berikut!
        </p>
      </section>

      <div className="bottom-container">
        <h2>"Let's test your understanding with practice questions! <br/>
        Ready to start?"</h2>
        <button
          className="btn-latihan"
          onClick={() => window.location.href = "/SlBing11b7"}
        >
          Start Practice
        </button>
      </div>

      <div className="navigation-container">
        <button
          className="btn-navigate"
          onClick={() => navigate("/Bing11b6")}
        >
          Back to Previous Chapter
        </button>
        <button
          className="btn-navigate"
          onClick={() => navigate("/Bing11b8")}
        >
          Proceed to Next Chapter
        </button>
      </div>
    </div>
  );
};

export default Bab7;