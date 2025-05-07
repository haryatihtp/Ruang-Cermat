import React from "react";
import "../css/Referensi.css";

const references = [
  { id: 1, title: "Matematika kelas 10", link: "https://www.ruangguru.com/blog/c/matematika/matematika-sma-kelas-10" },
  { id: 1, title: "Matematika kelas 10", link: "https://kuadran.co/blog/materi/materi-pelajaran-matematika-kelas-10-kurikulum-merdeka-semester-1-dan-2" },
  { id: 1, title: "Matematika kelas 10", link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-X.pdf" },
  { id: 1, title: "Matematika kelas 10", link: "https://id.scribd.com/document/407881934/Berikut-ini-materi-pelajaran-Matematika-SMA-kelas-10-docx" },
  { id: 2, title: "Matematika kelas 11", link: "https://buku.kemdikbud.go.id/katalog/matematika-untuk-smasmk-kelas-xi" },
  { id: 2, title: "Matematika kelas 11", link: "https://www.quipper.com/id/blog/mapel/matematika/deret-geometri-tak-hingga-matematika-kelas-11/?utm_source=chatgpt.com" },
  { id: 2, title: "Matematika kelas 11", link: "https://www.pijarbelajar.id/blog/rangkuman-materi-matematika-kelas-11?utm_source=chatgpt.com" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.brainacademy.id/blog/teori-peluang-matematika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/materi-kaidah-pencacahan" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/kekongruenan-dan-kesebangunan" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.pijarbelajar.id/blog/materi-statistika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.zenius.net/blog/dimensi-tiga-matematika" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.ruangguru.com/blog/konsep-limit-fungsi-aljabar-dan-sifat-sifatnya" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.ruangguru.com/blog/turunan-fungsi-aljabar" },
  { id: 3, title: "Matematika kelas 12", link: "https://www.quipper.com/id/blog/mapel/matematika/distribusi-binomial/" },
  { id: 4, title: "Fisika kelas 10", link: "https://www.pijarbelajar.id/blog/suhu-dan-kalor-perbedaan-rumus-dan-contoh-soal" },
  { id: 4, title: "Fisika kelas 10", link: "https://www.sampoernaacademy.sch.id/id/hukum-hooke/" },
  { id: 4, title: "Fisika kelas 10", link: "https://www.gramedia.com/literasi/hukum-hooke/" },
  { id: 4, title: "Fisika kelas 10", link: "https://www.zenius.net/blog/materi-fisika-sma-usaha-dan-energi#Contoh_Soal_Usaha_dan_Energi " },
  { id: 5, title: "Fisika kelas 11", link: "https://akupintar.id/belajar/-/online/materi/11-mia/fisika/56771" },
  { id: 5, title: "Fisika kelas 11", link: "https://belajar.kemdikbud.go.id/" },
  { id: 5, title: "Fisika kelas 11", link: "https://blog.smaisakalibrary.my.id/koleksi-digital/e-modul/e-modul-fisika/" },
  { id: 6, title: "Fisika kelas 12", link: "https://akupintar.id/belajar/-/online/materi/12-mia/fisika/56771" },
  { id: 6, title: "Fisika kelas 12", link: "https://tirto.id/soal-pts-fisika-kelas-12-semester-1-gQdp" },
  { id: 6, title: "Fisika kelas 12", link: "https://id.wikipedia.org/wiki/Induksi_elektromagnetik" },
  { id: 6, title: "Fisika kelas 12", link: "https://id.wikipedia.org/wiki/Sumber_energi" },
  { id: 6, title: "Fisika kelas 12", link: "https://id.wikipedia.org/wiki/Fisika_modern" },
  { id: 6, title: "Fisika kelas 12", link: "https://id.wikipedia.org/wiki/Arus_bolak-balik" },
  { id: 6, title: "Fisika kelas 12", link: "https://www.cakrawala.ac.id/berita/apa-itu-teknologi-digital?utm_source=chatgpt.com" },
  { id: 7, title: "Biologi kelas 10", link: "https://www.gramedia.com/literasi/kingdom-plantae/?srsltid=AfmBOoq1CURX1vCFVEpZV0OQxF0fL5G3B4Z5uZz9niZOKASZt6AvlNfN#google_vignette" },
  { id: 7, title: "Biologi kelas 10", link: "https://www.gramedia.com/literasi/materi-kelas-10/#google_vignette" },
  { id: 7, title: "Biologi kelas 10", link: "https://repositori.kemdikbud.go.id/22062/1/X_Biologi_KD-3.7_Final.pdf" },
  { id: 7, title: "Biologi kelas 10", link: "hhttps://www.zenius.net/blog/materi-fungi-jamur-biologi" },
  { id: 7, title: "Biologi kelas 10", link: "hhttps://pahamify.com/blog/pahami-materi/materi-ipa/klasifikasi-kinngdom-fungi-dan-strukturnya/" },
  { id: 7, title: "Biologi kelas 10", link: "hhttps://www.ruangguru.com/blog/ciri-ciri-jamur#:~:text=Zygomycota,-Zygomycota%20merupakan%20jamur&text=Adapun%20ciri%2Dciri%20dari%20klasifikasi,serta%20bagian%20tubuhnya%20membentuk%20rhizoid" },
  { id: 8, title: "Biologi kelas 11", link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Biologi-BS-KLS-XI.pdf" },
  { id: 8, title: "Biologi kelas 11", link: "https://www.gramedia.com/literasi/pertumbuhan-dan-perkembangan-pada-makhluk-hidup/?srsltid=AfmBOoqaKILMySntiRjyLwGYJb59FI0GOjFghXRoPKXHwMa-PBkYxZRs" },
  { id: 8, title: "Biologi kelas 11", link: "https://www.kompas.com/skola/read/2020/09/10/143000269/pertumbuhan-dan-perkembangan-manusia?page=all   " },
  { id: 8, title: "Biologi kelas 11", link: "https://www.kompas.com/skola/read/2022/10/11/130000569/sistem-sirkulasi-darah-manusia-beserta-fungsinya" },
  { id: 9, title: "Biologi kelas 12", link: "https://repositori.kemdikbud.go.id/22100/1/XII_Biologi_KD-3.4_Final.pdf" },
  { id: 9, title: "Biologi kelas 12", link: "https://id.scribd.com/doc/264220080/Pembelahan-Sel-Dan-Pewarisan-Sifat" },
  { id: 9, title: "Biologi kelas 12", link: "https://biologimediacentre.com/pola-pola-hereditas/" },
  { id: 9, title: "Biologi kelas 12", link: "https://www.ruangguru.com/blog/klasifikasi-dan-dampak-mutasi" },
  { id: 9, title: "Biologi kelas 12", link: "https://www.gramedia.com/literasi/mutasi/?srsltid=AfmBOophMAxo1nmZFVEEyNbeP_tbs453aDhTEF84iY3GkBTLFycyiHrH" },
  { id: 9, title: "Biologi kelas 12", link: "https://mamikos.com/info/ringkasan-materi-mutasi-kelas-12-pljr/" },
  { id: 9, title: "Biologi kelas 12", link: "https://m.kumparan.com/amp/berita-terkini/contoh-soal-mutasi-kelas-12-dan-jawabannya-dalam-ilmu-biologi-1zhpYxCvAE9" },
  { id: 9, title: "Biologi kelas 12", link: "https://biologigonz.blogspot.com/2015/12/soal-mutasi-kelas-xii-sma.html" },
  { id: 9, title: "Biologi kelas 12", link: "https://palembang.tribunnews.com/amp/2023/11/08/soal-penilaian-harian-biologi-kelas-12-smama-materi-evolusi-beserta-kunci-jawaban-kurikulum-merdeka" },
  { id: 9, title: "Biologi kelas 12", link: "https://mamikos.com/info/soal-evolusi-kelas-12-pljr/" },
  { id: 9, title: "Biologi kelas 12", link: "https://palembang.tribunnews.com/amp/2024/01/12/soal-penilaian-harian-beserta-kunci-jawaban-biologi-kelas-12-smama-materi-evolusi-kurikulum-2013" },
  { id: 9, title: "Biologi kelas 12", link: "https://www.gramedia.com/literasi/evolusi/?srsltid=AfmBOopxBvrffT173217ek5s7IORUTNqISrKFQPQCux0IakvlVDq8INc" },
  { id: 9, title: "Biologi kelas 12", link: "https://mamikos.com/info/materi-evolusi-kelas-12-pljr/" },
  { id: 10, title: "Bahasa Inggris kelas 10", link: "" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.ef.co.id/englishfirst/kids/blog/tenses-yang-paling-sering-digunakan-dan-contohnya/" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.english-academy.id/blog/16-tenses-dalam-bahasa-inggris-dan-contohnya" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.ruangguru.com/blog/16-tenses-bahasa-inggris" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.englishnesia.id/blog/16-tenses-bahasa-inggris-rumus-contohnya" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.english-academy.id/blog/pengertian-dan-rumus-simple-future-tense" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.english-academy.id/blog/future-perfect-tense" },
  { id: 11, title: "Bahasa Inggris kelas 11", link: "https://www.english-academy.id/blog/future-continuous-tense" },
  { id: 12, title: "Bahasa Inggris kelas 12", link: "" },
  { id: 13, title: "Kimia kelas 10", link: "https://www.ruangguru.com/blog/konsep-reaksi-reduksi-oksidasi-kimia-kelas-10" },
  { id: 13, title: "Kimia kelas 10", link: "https://akupintar.id/info-pintar/-/blogs/reaksi-redoks-reduksi-dan-oksidasi" },
  { id: 13, title: "Kimia kelas 10", link: "https://akupintar.id/info-pintar/-/blogs/perkembangan-model-atom-dalton-thompson-rutherford-bohr-dan-mekanika-kuantum" },
  { id: 13, title: "Kimia kelas 10", link: "https://www.quipper.com/id/blog/mapel/kimia/ikatan-kimia/" },
  { id: 13, title: "Kimia kelas 10", link: "https://www.quipper.com/id/blog/mapel/kimia/tabel-periodik/#:~:text=Tabel%20periodik%20adalah%20tabel%20yang%20berisi%20urutan%20unsur,Ag%20%28perak%29%2C%20Fe%20%28besi%29%2C%20H%20%28hidrogen%29%2C%20dan%20sebagainya." },
  { id: 13, title: "Kimia kelas 10", link: "https://pahamify.com/blog/pahami-materi/materi-ipa/materi-kimia-stoikiometri-utbk/" },
  { id: 14, title: "Kimia kelas 11", link: "https://akupintar.id/belajar/-/online/materi/11-mia/kimia/50414" },
  { id: 14, title: "Kimia kelas 11", link: "https://quizizz.com/admin/quiz/5dd23260f24dfd001bbd47e9/soal-ujian-akhir-semester-ganjil-kimia-kelas-xi?source=quiz_share" },
  { id: 14, title: "Kimia kelas 11", link: "https://id.scribd.com/document/328135872/Soal-Dan-Pembahasan-Kimia-Kelas-Xi-Semester-1" },
  { id: 14, title: "Kimia kelas 11", link: "https://pontianak.tribunnews.com/2023/11/16/50-soal-kimia-kelas-11-ulanganujian-semester-1-tahun-2023-kunci-jawaban-uas-sas-kurikulum-merdeka" },
  { id: 14, title: "Kimia kelas 11", link: "https://quizizz.com/admin/quiz/5e8c02f304d964001bf7ec89/kimia-kelas-11-semester-2" },
  { id: 14, title: "Kimia kelas 11", link: "https://id.scribd.com/document/282902787/Soal-Kimia-Kelas-11-Dan-Pembahasannya" },
  { id: 14, title: "Kimia kelas 11", link: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Kimia-BS-KLS-XI.pdf" },
  { id: 14, title: "Kimia kelas 11", link: "https://bimbelprimanesa.com/kimia-11-sma/" },
  { id: 14, title: "Kimia kelas 11", link: "https://mamikos.com/info/materi-kimia-kelas-11-pljr/" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.ruangguru.com/blog/c/kimia/kimia-sma-kelas-12" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.rumuskimia.net/2017/07/materi-kimia-kelas-12-kurikulum-2013.html?m=1" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.quipper.com/id/blog/kimia-sitemap/" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.pijarbelajar.id/blog/sifat-koligatif-larutan" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.gramedia.com/literasi/sifat-koligatif-larutan-soal/?srsltid=AfmBOoqqNLAi43TxcmS8EjxkOeN6oCY3lzzonYk8oICS4Iv-Bn5Eg6DD" },
  { id: 15, title: "Kimia kelas 12", link: "https://www.pijarbelajar.id/blog/penyetaraan-reaksi-redoks" },
  { id: 15, title: "Kimia kelas 12", link: "https://slideshare.net/slideshow/sifat-koligatif-larutan-kimia-kelas-xii/40446141" },
  { id: 15, title: "Kimia kelas 12", link: "https://mamikos.com/info/materi-kimia-unsur-sma-kelas-12-pljr/" },
  { id: 15, title: "Kimia kelas 12", link: "https://uskpress.usk.ac.id/kimia-unsur-golongan-utama-zarlaida-fitri/" },
  { id: 15, title: "Kimia kelas 12", link: "https://ugmpress.ugm.ac.id/en/product/kimia/buku-ajar-kimia-unsur" },
  { id: 16, title: "Ekonomi kelas 10", link: "https://mamikos.com/info/materi-ekonomi-kelas-10-kurikulum-merdeka-pljr/" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://bpmbkm.uma.ac.id/2021/11/30/konsep-dasar-ilmu-ekonomi-pengertian-tujuan-dan-pembagian/" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://kumparan.com/pengertian-dan-istilah/pengertian-sistem-ekonomi-fungsi-dan-jenis-jenisnya-21Ujx5hzEea" },
  { id: 17, title: "Ekonomi kelas 11", link: "http://prints.umsida.ac.id/6996/1/Naufal%20Rizky%20(191020700112)%20Struktur%20Pasar%20Persaingan%20Sempurna.pdf" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://kumparan.com/berita-terkini/pengertian-permintaan-dalam-konsep-ekonomi-dan-jenisnya-22Fac2orHVo/1x" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://id.wikipedia.org/wiki/Uang" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://www.cnnindonesia.com/ekonomi/20220318211141-104-774738/macam-macam-kebutuhan-manusia-dalam-ilmu-ekonomi" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://www.gramedia.com/literasi/inflasi/" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://www.medcom.id/ekonomi/makro/yKXEP9ZN-mengenal-pertumbuhan-ekonomi-serta-cara-menghitungnya" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://id.wikipedia.org/wiki/Pembangunan_ekonomi" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://www.gramedia.com/literasi/perdagangan-internasional/" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://id.wikipedia.org/wiki/Kebijakan_ekonomi" },
  { id: 17, title: "Ekonomi kelas 11", link: "https://id.wikipedia.org/wiki/Globalisasi_ekonomi" },
];

const Referensi = () => {
  return (
    <div className="referensi-container">
      <h1 className="referensi-title">Referensi Belajar</h1>
      <p className="referensi-description">
        Berikut adalah beberapa referensi belajar yang kami gunakan dan dapat membantu Anda untuk mengembangkan pengetahuan anda
      </p>
      <div className="referensi-list">
        {references.map((ref) => (
          <div key={ref.id} className="referensi-item">
            <a href={ref.link} target="_blank" rel="noopener noreferrer" className="referensi-link">
              {ref.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referensi;
