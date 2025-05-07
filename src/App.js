import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Referensi from './pages/Referensi';
import Kontak from './pages/Contact';
import Developer from './pages/Developer';

// Import page kelas dari berbagai mata pelajaran
import Kelas11 from './pages/Kelas11';
import Kelas12 from './pages/Kelas12';
import Kelas10 from './pages/kelas10';
import TO10b1 from './components/TO10b1';
import TO10b2 from './components/TO10b2';
import TO10b3 from './components/TO10b3';
import TO10b4 from './components/TO10b4';
import TO10b5 from './components/TO10b5';
import TO10b6 from './components/TO10b6';
import TO10b7 from './components/TO10b7';
import TO10b8 from './components/TO10b8';
import TO11b1 from './components/TO11b1';
import TO11b2 from './components/TO11b2';
import TO11b3 from './components/TO11b3';
import TO11b4 from './components/TO11b4';
import TO11b5 from './components/TO11b5';
import TO11b6 from './components/TO11b6';
import TO11b7 from './components/TO11b7';
import TO11b8 from './components/TO11b8';
import TO12b1 from './components/TO12b1';
import TO12b2 from './components/TO12b2';
import TO12b3 from './components/TO12b3';
import TO12b4 from './components/TO12b4';
import TO12b5 from './components/TO12b5';
import TO12b6 from './components/TO12b6';
import TO12b7 from './components/TO12b7';
import TO12b8 from './components/TO12b8';
import MatematikaKelas10 from './pages/MateriMTK10';
import MatematikaKelas11 from './pages/MateriMTK11';
import MatematikaKelas12 from './pages/MateriMTK12';
import BiologiKelas10 from './pages/MateriBiologi10';
import BiologiKelas11 from './pages/MateriBiologi11';
import BiologiKelas12 from './pages/MateriBiologi12';
import FisikaKelas10 from './pages/MateriFisika10';
import FisikaKelas11 from './pages/MateriFisika11';
import FisikaKelas12 from './pages/MateriFisika12';
import KimiaKelas10 from './pages/MateriKimia10';
import KimiaKelas11 from './pages/MateriKimia11';
import KimiaKelas12 from './pages/MateriKimia12';
import BahasaInggrisKelas10 from './pages/MateriBing10';
import BahasaInggrisKelas11 from './pages/MateriBing11';
import BahasaInggrisKelas12 from './pages/MateriBing12';
import EkonomiKelas10 from './pages/MateriEkonomi10';
import EkonomiKelas11 from './pages/MateriEkonomi11';
import SlMatematikaKelas10 from './pages/LatihanMTK10';
import SlMatematikaKelas11 from './pages/LatihanMTK11';
import SlMatematikaKelas12 from './pages/LatihanMTK12';
import SlBiologiKelas10 from './pages/LatihanBiologi10';
import SlBiologiKelas11 from './pages/LatihanBiologi11';
import SlBiologiKelas12 from './pages/LatihanBiologi12';
import SlFisikaKelas10 from './pages/LatihanFisika10';
import SlFisikaKelas11 from './pages/LatihanFisika11';
import SlFisikaKelas12 from './pages/LatihanFisika12';
import SlKimiaKelas10 from './pages/LatihanKimia10';
import SlKimiaKelas11 from './pages/LatihanKimia11';
import SlKimiaKelas12 from './pages/LatihanKimia12';
import SlBahasaInggrisKelas10 from './pages/LatihanBing10';
import SlBahasaInggrisKelas11 from './pages/LatihanBing11';
import SlBahasaInggrisKelas12 from './pages/LatihanBing12';
import SlEkonomiKelas10 from './pages/LatihanEkonomi10';
import SlEkonomiKelas11 from './pages/LatihanEkonomi11';
import QzMatematikaKelas10 from './pages/kuisMTK10';
import QzMatematikaKelas11 from './pages/kuisMTK11';
import QzMatematikaKelas12 from './pages/kuisMTK12';
import QzBiologiKelas10 from './pages/kuisBiologi10';
import QzBiologiKelas11 from './pages/kuisBiologi11';
import QzBiologiKelas12 from './pages/kuisBiologi12';
import QzFisikaKelas10 from './pages/kuisFisika10';
import QzFisikaKelas11 from './pages/kuisFisika11';
import QzFisikaKelas12 from './pages/kuisFisika12';
import QzKimiaKelas10 from './pages/kuisKimia10';
import QzKimiaKelas11 from './pages/kuisKimia11';
import QzKimiaKelas12 from './pages/kuisKimia12';
import QzBahasaInggrisKelas10 from './pages/kuisBing10';
import QzBahasaInggrisKelas11 from './pages/kuisBing11';
import QzBahasaInggrisKelas12 from './pages/kuisBing12';
import QzEkonomiKelas10 from './pages/kuisEkonomi10';
import QzEkonomiKelas11 from './pages/kuisEkonomi11';

// Import komponen tambahan
import Fisika10b1 from './components/Fsk10b1';
import Fisika10b2 from './components/Fsk10b2';
import Fisika10b3 from './components/Fsk10b3';
import Fisika10b4 from './components/Fsk10b4';
import Fisika10b5 from './components/Fsk10b5';
import Fisika10b6 from './components/Fsk10b6';
import Fisika10b7 from './components/Fsk10b7';
import Fisika11b1 from './components/Fsk11b1';
import Fisika11b2 from './components/Fsk11b2';
import Fisika11b3 from './components/Fsk11b3';
import Fisika11b4 from './components/Fsk11b4';
import Fisika11b5 from './components/Fsk11b5';
import Fisika11b6 from './components/Fsk11b6';
import Fisika12b1 from './components/Fsk12b1';
import Fisika12b2 from './components/Fsk12b2';
import Fisika12b3 from './components/Fsk12b3';
import Fisika12b4 from './components/Fsk12b4';
import Fisika12b5 from './components/Fsk12b5';
import Fisika12b6 from './components/Fsk12b6';
import Fisika12b7 from './components/Fsk12b7';
import Fisika12b8 from './components/Fsk12b8';
import Bgl10b1 from './components/Bgl10b1';
import Bgl10b2 from './components/Bgl10b2';
import Bgl10b3 from './components/Bgl10b3';
import Bgl10b4 from './components/Bgl10b4';
import Bgl10b5 from './components/Bgl10b5';
import Bgl11b1 from './components/Bgl11b1';
import Bgl11b2 from './components/Bgl11b2';
import Bgl11b3 from './components/Bgl11b3';
import Bgl11b4 from './components/Bgl11b4';
import Bgl11b5 from './components/Bgl11b5';
import Bgl11b6 from './components/Bgl11b6';
import Bgl11b7 from './components/Bgl11b7';
import Bgl11b8 from './components/Bgl11b8';
import Bgl12b1 from './components/Bgl12b1';
import Bgl12b2 from './components/Bgl12b2';
import Bgl12b3 from './components/Bgl12b3';
import Bgl12b4 from './components/Bgl12b4';
import Bgl12b5 from './components/Bgl12b5';
import Bgl12b6 from './components/Bgl12b6';
import Bgl12b7 from './components/Bgl12b7';
import Bgl12b8 from './components/Bgl12b8';
import Bgl12b9 from './components/Bgl12b9';
import Eko10b1 from './components/Eko10b1';
import Eko10b2 from './components/Eko10b2';
import Eko10b3 from './components/Eko10b3';
import Eko10b4 from './components/Eko10b4';
import Eko10b5 from './components/Eko10b5';
import Eko11b1 from './components/Eko11b1';
import Eko11b2 from './components/Eko11b2';
import Eko11b3 from './components/Eko11b3';
import Eko11b4 from './components/Eko11b4';
import Eko11b5 from './components/Eko11b5';
import Eko11b6 from './components/Eko11b6';
import Eko11b7 from './components/Eko11b7';
import Eko11b8 from './components/Eko11b8';
import Eko11b9 from './components/Eko11b9';
import Eko11b10 from './components/Eko11b10';
import Eko11b11 from './components/Eko11b11';
import Eko11b12 from './components/Eko11b12';
import Bing10b1 from './components/Bing10b1';
import Bing10b2 from './components/Bing10b2';
import Bing10b3 from './components/Bing10b3';
import Bing10b4 from './components/Bing10b4';
import Bing10b5 from './components/Bing10b5';
import Bing10b6 from './components/Bing10b6';
import Bing10b7 from './components/Bing10b7';
import Bing10b8 from './components/Bing10b8';
import Bing11b1 from './components/Bing11b1';
import Bing11b2 from './components/Bing11b2';
import Bing11b3 from './components/Bing11b3';
import Bing11b4 from './components/Bing11b4';
import Bing11b5 from './components/Bing11b5';
import Bing11b6 from './components/Bing11b6';
import Bing11b7 from './components/Bing11b7';
import Bing11b8 from './components/Bing11b8';
import Bing12b1 from './components/Bing12FC';
import Bing12b2 from './components/Bing12FP';
import Bing12b3 from './components/Bing12FPC';
import Bing12b4 from './components/Bing12PC';
import Bing12b5 from './components/Bing12PCT';
import Bing12b6 from './components/Bing12PP';
import Bing12b7 from './components/Bing12PPC';
import Bing12b8 from './components/Bing12PPCT';
import Bing12b9 from './components/Bing12PPT';
import Bing12b10 from './components/Bing12SF';
import Bing12b11 from './components/Bing12SP';
import Bing12b12 from './components/Bing12SPT';
import Kma10b1 from './components/Kma10b1';
import Kma10b2 from './components/Kma10b2';
import Kma10b3 from './components/Kma10b3';
import Kma10b4 from './components/Kma10b4';
import Kma10b5 from './components/Kma10b5';
import Kma11b1 from './components/Kma11b1';
import Kma11b2 from './components/Kma11b2';
import Kma11b3 from './components/Kma11b3';
import Kma11b4 from './components/Kma11b4';
import Kma11b5 from './components/Kma11b5';
import Kma11b6 from './components/Kma11b6';
import Kma11b7 from './components/Kma11b7';
import Kma11b8 from './components/Kma11b8';
import Kma11b9 from './components/Kma11b9';
import Kma12b1 from './components/Kma12b1';
import Kma12b2 from './components/Kma12b2';
import Kma12b3 from './components/Kma12b3';
import Kma12b4 from './components/Kma12b4';
import Kma12b5 from './components/Kma12b5';
import Kma12b6 from './components/Kma12b6';
import Mtk10b1 from './components/Mtk10b1';
import Mtk10b2 from './components/Mtk10b2';
import Mtk10b3 from './components/Mtk10b3';
import Mtk10b4 from './components/Mtk10b4';
import Mtk10b5 from './components/Mtk10b5';
import Mtk10b6 from './components/Mtk10b6';
import Mtk10b7 from './components/Mtk10b7';
import Mtk10b8 from './components/Mtk10b8';
import Mtk11b1 from './components/Mtk11b1';
import Mtk11b2 from './components/Mtk11b2';
import Mtk11b3 from './components/Mtk11b3';
import Mtk11b4 from './components/Mtk11b4';
import Mtk11b5 from './components/Mtk11b5';
import Mtk11b6 from './components/Mtk11b6';
import Mtk12b1 from './components/Mtk12b1';
import Mtk12b2 from './components/Mtk12b2';
import Mtk12b3 from './components/Mtk12b3';
import Mtk12b4 from './components/Mtk12b4';
import Mtk12b5 from './components/Mtk12b5';
import Mtk12b6 from './components/Mtk12b6';
import Mtk12b7 from './components/Mtk12b7';
import Mtk12b8 from './components/Mtk12b8';

import QzBgl11b1 from './components/QzBgl11b1';
import QzBgl11b2 from './components/QzBgl11b2';
import QzBgl11b3 from './components/QzBgl11b3';
import QzBgl11b4 from './components/QzBgl11b4';
import QzBgl11b5 from './components/QzBgl11b5';
import QzBgl11b6 from './components/QzBgl11b6';
import QzBgl11b7 from './components/QzBgl11b7';
import QzBgl11b8 from './components/QzBgl11b8';
import QzBing10b1 from './components/QzBing10b1';
import QzBing10b2 from './components/QzBing10b2';
import QzBing10b3 from './components/QzBing10b3';
import QzBing10b4 from './components/QzBing10b4';
import QzBing10b5 from './components/QzBing10b5';
import QzBing10b6 from './components/QzBing10b6';
import QzBing10b7 from './components/QzBing10b7';
import QzBing10b8 from './components/QzBing10b8';
import QzBing10b9 from './components/QzBing10b9';
import QzBing10b10 from './components/QzBing10b10';
import QzBing11b1 from './components/QzBing11b1';
import QzBing11b2 from './components/QzBing11b2';
import QzBing11b3 from './components/QzBing11b3';
import QzBing11b4 from './components/QzBing11b4';
import QzBing11b5 from './components/QzBing11b5';
import QzBing11b6 from './components/QzBing11b6';
import QzBing11b7 from './components/QzBing11b7';
import QzBing11b8 from './components/QzBing11b8';
import QzBing12Present from './components/QzBing12Past';
import QzBing12Past from './components/QzBing12Past';
import QzBing12Future from './components/QzBing12Future';
import QzFisika11b1 from './components/QzFsk11b1';
import QzFisika11b2 from './components/QzFsk11b2';
import QzFisika11b3 from './components/QzFsk11b3';
import QzFisika11b4 from './components/QzFsk11b4';
import QzFisika11b5 from './components/QzFsk11b5';
import QzFisika11b6 from './components/QzFsk11b6';
import QzFisika12b1 from './components/QzFsk12b1';
import QzFisika12b2 from './components/QzFsk12b2';
import QzFisika12b3 from './components/QzFsk12b3';
import QzFisika12b4 from './components/QzFsk12b4';
import QzFisika12b5 from './components/QzFsk12b5';
import QzFisika12b6 from './components/QzFsk12b6';
import QzFisika12b7 from './components/QzFsk12b7';
import QzFisika12b8 from './components/QzFsk12b8';
import QzKma10b1 from './components/QzKma10b1';
import QzKma10b2 from './components/QzKma10b2';
import QzKma10b3 from './components/QzKma10b3';
import QzKma10b4 from './components/QzKma10b4';
import QzKma10b5 from './components/QzKma10b5';
import QzKma11b1 from './components/QzKma11b1';
import QzKma11b2 from './components/QzKma11b2';
import QzKma11b3 from './components/QzKma11b3';
import QzKma11b4 from './components/QzKma11b4';
import QzKma11b5 from './components/QzKma11b5';
import QzKma11b6 from './components/QzKma11b6';
import QzKma11b7 from './components/QzKma11b7';
import QzKma12b1 from './components/QzKma12b1';
import QzKma12b2 from './components/QzKma12b2';
import QzKma12b3 from './components/QzKma12b3';
import QzKma12b4 from './components/QzKma12b4';
import QzKma12b5 from './components/QzKma12b5';
import QzKma12b6 from './components/QzKma12b6';
import QzMtk10b1 from './components/QzMtk10b1';
import QzMtk10b2 from './components/QzMtk10b2';
import QzMtk10b3 from './components/QzMtk10b3';
import QzMtk10b4 from './components/QzMtk10b4';
import QzMtk10b5 from './components/QzMtk10b5';
import QzMtk10b6 from './components/QzMtk10b6';
import QzMtk10b7 from './components/QzMtk10b7';
import QzMtk10b8 from './components/QzMtk10b8';
import QzMtk11b1 from './components/QzMtk11b1';
import QzMtk11b2 from './components/QzMtk11b2';
import QzMtk11b3 from './components/QzMtk11b3';
import QzMtk11b4 from './components/QzMtk11b4';
import QzMtk11b5 from './components/QzMtk11b5';
import QzMtk11b6 from './components/QzMtk11b6';
import QzMtk12b1 from './components/QzMtk12b1';
import QzMtk12b2 from './components/QzMtk12b2';
import QzMtk12b3 from './components/QzMtk12b3';
import QzMtk12b4 from './components/QzMtk12b4';
import QzMtk12b5 from './components/QzMtk12b5';
import QzMtk12b6 from './components/QzMtk12b6';
import QzMtk12b7 from './components/QzMtk12b7';
import QzMtk12b8 from './components/QzMtk12b8';

import SlFisika10b1 from './components/SlFsk10b1';
import SlFisika10b2 from './components/SlFsk10b2';
import SlFisika10b3 from './components/SlFsk10b3';
import SlFisika10b4 from './components/SlFsk10b4';
import SlFisika10b5 from './components/SlFsk10b5';
import SlFisika10b6 from './components/SlFsk10b6';
import SlFisika10b7 from './components/SlFsk10b7';
import SlFisika11b1 from './components/SlFsk11b1';
import SlFisika11b2 from './components/SlFsk11b2';
import SlFisika11b4 from './components/SlFsk11b4';
import SlFisika11b5 from './components/SlFsk11b5';
import SlFisika11b6 from './components/SlFsk11b6';
import SlFisika12b1 from './components/SlFsk12b1';
import SlFisika12b2 from './components/SlFsk12b2';
import SlFisika12b3 from './components/SlFsk12b3';
import SlFisika12b4 from './components/SlFsk12b4';
import SlFisika12b5 from './components/SlFsk12b5';
import SlFisika12b6 from './components/SlFsk12b6';
import SlFisika12b7 from './components/SlFsk12b7';
import SlFisika12b8 from './components/SlFsk12b8';
// import SlEko10b1 from './components/SlEko10b1';
// import SlEko10b2 from './components/SlEko10b2';
// import SlEko10b3 from './components/SlEko10b3';
// import SlEko10b4 from './components/SlEko10b4';
// import SlEko10b5 from './components/SlEko10b5';
import SlBgl11b1 from './components/SlBgl11b1';
import SlBgl11b2 from './components/SlBgl11b2';
import SlBgl11b3 from './components/SlBgl11b3';
import SlBgl11b4 from './components/SlBgl11b4';
import SlBgl11b5 from './components/SlBgl11b5';
import SlBgl11b6 from './components/SlBgl11b6';
import SlBgl11b7 from './components/SlBgl11b7';
import SlBgl11b8 from './components/SlBgl11b8';
import SlBgl12b1 from './components/SlBgl12b1';
import SlBgl12b2 from './components/SlBgl12b2';
import SlBgl12b3 from './components/SlBgl12b3';
import SlBgl12b4 from './components/SlBgl12b4';
import SlBgl12b5 from './components/SlBgl12b5';
import SlBgl12b6 from './components/SlBgl12b6';
import SlBgl12b7 from './components/SlBgl12b7';
import SlBgl12b8 from './components/SlBgl12b8';
import SlEko11b1 from './components/SlEko11b1';
import SlEko11b2 from './components/SlEko11b2';
import SlEko11b3 from './components/SlEko11b3';
import SlEko11b4 from './components/SlEko11b4';
import SlEko11b5 from './components/SlEko11b5';
import SlEko11b6 from './components/SlEko11b6';
import SlEko11b7 from './components/SlEko11b7';
import SlEko11b8 from './components/SlEko11b8';
import SlEko11b9 from './components/SlEko11b9';
import SlEko11b10 from './components/SlEko11b10';
import SlEko11b11 from './components/SlEko11b11';
import SlEko11b12 from './components/SlEko11b12';
import SlBing10b1 from './components/SlBing10b1';
import SlBing10b2 from './components/SlBing10b2';
import SlBing10b3 from './components/SlBing10b3';
import SlBing10b4 from './components/SlBing10b4';
import SlBing10b5 from './components/SlBing10b5';
import SlBing10b6 from './components/SlBing10b6';
import SlBing10b7 from './components/SlBing10b7';
import SlBing10b8 from './components/SlBing10b8';
import SlBing11b1 from './components/SlBing11b1';
import SlBing11b2 from './components/SlBing11b2';
import SlBing11b3 from './components/SlBing11b3';
import SlBing11b4 from './components/SlBing11b4';
import SlBing11b5 from './components/SlBing11b5';
import SlBing11b6 from './components/Bing11b6';
import SlBing11b7 from './components/SlBing11b7';
import SlBing11b8 from './components/SlBing11b8';
import SlBing12b1 from './components/SlBing12FC';
import SlBing12b2 from './components/SlBing12FP';
import SlBing12b3 from './components/SlBing12FPC';
import SlBing12b4 from './components/SlBing12PC';
import SlBing12b5 from './components/SlBing12PCT';
import SlBing12b6 from './components/SlBing12PP';
import SlBing12b7 from './components/SlBing12PPC';
import SlBing12b8 from './components/SlBing12PPCT';
import SlBing12b9 from './components/SlBing12PPT';
import SlBing12b10 from './components/SlBing12SF';
import SlBing12b11 from './components/SlBing12SP';
import SlBing12b12 from './components/SlBing12SPT';
import SlKma10b1 from './components/SlKma10b1';
import SlKma10b2 from './components/SlKma10b2';
import SlKma10b3 from './components/SlKma10b3';
import SlKma10b4 from './components/SlKma10b4';
import SlKma10b5 from './components/SlKma10b5';
import SlKma11b1 from './components/SlKma11b1';
import SlKma11b2 from './components/SlKma11b2';
import SlKma11b3 from './components/SlKma11b3';
import SlKma11b4 from './components/SlKma11b4';
import SlKma11b5 from './components/SlKma11b5';
import SlKma11b6 from './components/SlKma11b6';
import SlKma11b7 from './components/SlKma11b7';
import SlKma12b1 from './components/SlKma12b1';
import SlKma12b2 from './components/SlKma12b2';
import SlKma12b3 from './components/SlKma12b3';
import SlKma12b4 from './components/SlKma12b4';
import SlKma12b5 from './components/SlKma12b5';
import SlKma12b6 from './components/SlKma12b6';
import SlMtk10b1 from './components/SlMTK10b1';
import SlMtk10b2 from './components/SlMTK10b2';
import SlMtk10b3 from './components/SlMTK10b3';
import SlMtk10b4 from './components/SlMTK10b4';
import SlMtk10b5 from './components/SlMTK10b5';
import SlMtk10b6 from './components/SlMTK10b6';
import SlMtk10b7 from './components/SlMTK10b7';
import SlMtk10b8 from './components/SlMTK10b8';
import SlMtk11b1 from './components/SlMTK11b1';
import SlMtk11b2 from './components/SlMTK11b2';
import SlMtk11b3 from './components/SlMTK11b3';
import SlMtk11b4 from './components/SlMTK11b4';
import SlMtk11b5 from './components/SlMTK11b5';
import SlMtk11b6 from './components/SlMTK11b6';
import SlMtk12b1 from './components/SlMTK12b1';
import SlMtk12b2 from './components/SlMTK12b2';
import SlMtk12b3 from './components/SlMTK12b3';
import SlMtk12b4 from './components/SlMTK12b4';
import SlMtk12b5 from './components/SlMTK12b5';
import SlMtk12b6 from './components/SlMTK12b6';
import SlMtk12b7 from './components/SlMTK12b7';
import SlMtk12b8 from './components/SlMTK12b8';

import DprMtk10 from './components/DprMtk10';
import DprMtk11 from './components/DprMtk11';
import DprMtk12 from './components/DprMtk12';
import DprFsk10 from './components/DprFsk10';
import DprFsk11 from './components/DprFsk11';
import DprFsk12 from './components/DprFsk12';
import DprBgl10 from './components/DprBgl10';
import DprBgl11 from './components/DprBgl11';
import DprBgl12 from './components/DprBgl12';
import DprKma10 from './components/DprKma10';
import DprKma11 from './components/DprKma11';
import DprKma12 from './components/DprKma12';
import DprBing10 from './components/DprBing10';
import DprBing11 from './components/DprBing11';
import DprBing12 from './components/DprBing12';
import DprEko10 from './components/DprEko10';
import DprEko11 from './components/DprEko11';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referensi" element={<Referensi />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/developer" element={<Developer />} />

        <Route path="/Mtk10" element={<DprMtk10 />} />
        <Route path="/Mtk11" element={<DprMtk11 />} />
        <Route path="/Mtk12" element={<DprMtk12 />} />
        <Route path="/Fsk10" element={<DprFsk10 />} />
        <Route path="/Fsk11" element={<DprFsk11 />} />
        <Route path="/Fsk12" element={<DprFsk12 />} />
        <Route path="/Kma10" element={<DprKma10 />} />
        <Route path="/Kma11" element={<DprKma11 />} />
        <Route path="/Kma12" element={<DprKma12 />} />
        <Route path="/Bgl10" element={<DprBgl10 />} />
        <Route path="/Bgl11" element={<DprBgl11 />} />
        <Route path="/Bgl12" element={<DprBgl12 />} />
        <Route path="/Bing10" element={<DprBing10 />} />
        <Route path="/Bing11" element={<DprBing11 />} />
        <Route path="/Bing12" element={<DprBing12 />} />
        <Route path="/Eko10" element={<DprEko10 />} />
        <Route path="/Eko11" element={<DprEko11 />} />

        <Route path="/TO10b1" element={<TO10b1 />} />
        <Route path="/TO10b2" element={<TO10b2 />} />
        <Route path="/TO10b3" element={<TO10b3 />} />
        <Route path="/TO10b4" element={<TO10b4 />} />
        <Route path="/TO10b5" element={<TO10b5 />} />
        <Route path="/TO10b6" element={<TO10b6 />} />
        <Route path="/TO10b7" element={<TO10b7 />} />
        <Route path="/TO10b8" element={<TO10b8 />} />
        <Route path="/TO11b1" element={<TO11b1 />} />
        <Route path="/TO11b2" element={<TO11b2 />} />
        <Route path="/TO11b3" element={<TO11b3 />} />
        <Route path="/TO11b4" element={<TO11b4 />} />
        <Route path="/TO11b5" element={<TO11b5 />} />
        <Route path="/TO11b6" element={<TO11b6 />} />
        <Route path="/TO11b7" element={<TO11b7 />} />
        <Route path="/TO11b8" element={<TO11b8 />} />
        <Route path="/TO12b1" element={<TO12b1 />} />
        <Route path="/TO12b2" element={<TO12b2 />} />
        <Route path="/TO12b3" element={<TO12b3 />} />
        <Route path="/TO12b4" element={<TO12b4 />} />
        <Route path="/TO12b5" element={<TO12b5 />} />
        <Route path="/TO12b6" element={<TO12b6 />} />
        <Route path="/TO12b7" element={<TO12b7 />} />
        <Route path="/TO12b8" element={<TO12b8 />} />
        
        <Route path="/tryout/kelas-10" element={<Kelas10 />} />
        <Route path="/tryout/kelas-11" element={<Kelas11 />} />
        <Route path="/tryout/kelas-12" element={<Kelas12 />} />
        {/* Rute untuk materi Matematika */}
        <Route path="materi/matematika/kelas-10" element={<MatematikaKelas10 />} />
        <Route path="materi/matematika/kelas-11" element={<MatematikaKelas11 />} />
        <Route path="materi/matematika/kelas-12" element={<MatematikaKelas12 />} />
        {/* Rute untuk materi Biologi */}
        <Route path="materi/biologi/kelas-10" element={<BiologiKelas10 />} />
        <Route path="materi/biologi/kelas-11" element={<BiologiKelas11 />} />
        <Route path="materi/biologi/kelas-12" element={<BiologiKelas12 />} />
        {/* Rute untuk materi Fisika */}
        <Route path="materi/fisika/kelas-10" element={<FisikaKelas10 />} />
        <Route path="materi/fisika/kelas-11" element={<FisikaKelas11 />} />
        <Route path="materi/fisika/kelas-12" element={<FisikaKelas12 />} />
        {/* Rute untuk materi Kimia */}
        <Route path="materi/kimia/kelas-10" element={<KimiaKelas10 />} />
        <Route path="materi/kimia/kelas-11" element={<KimiaKelas11 />} />
        <Route path="materi/kimia/kelas-12" element={<KimiaKelas12 />} />
        {/* Rute untuk materi Bahasa Inggris */}
        <Route path="materi/bahasa-inggris/kelas-10" element={<BahasaInggrisKelas10 />} />
        <Route path="materi/bahasa-inggris/kelas-11" element={<BahasaInggrisKelas11 />} />
        <Route path="materi/bahasa-inggris/kelas-12" element={<BahasaInggrisKelas12 />} />
        {/* Rute untuk materi Ekonomi */}
        <Route path="materi/ekonomi/kelas-10" element={<EkonomiKelas10 />} />
        <Route path="materi/ekonomi/kelas-11" element={<EkonomiKelas11 />} />
    {/* Rute untuk latihan Matematika */}
        <Route path="latihan/matematika/kelas-10" element={<SlMatematikaKelas10 />} />
        <Route path="latihan/matematika/kelas-11" element={<SlMatematikaKelas11 />} />
        <Route path="latihan/matematika/kelas-12" element={<SlMatematikaKelas12 />} />
        {/* Rute untuk latihan Biologi */}
        <Route path="latihan/biologi/kelas-10" element={<SlBiologiKelas10 />} />
        <Route path="latihan/biologi/kelas-11" element={<SlBiologiKelas11 />} />
        <Route path="latihan/biologi/kelas-12" element={<SlBiologiKelas12 />} />
        {/* Rute untuk latihan Fisika */}
        <Route path="latihan/fisika/kelas-10" element={<SlFisikaKelas10 />} />
        <Route path="latihan/fisika/kelas-11" element={<SlFisikaKelas11 />} />
        <Route path="latihan/fisika/kelas-12" element={<SlFisikaKelas12 />} />
        {/* Rute untuk latihan Kimia */}
        <Route path="latihan/kimia/kelas-10" element={<SlKimiaKelas10 />} />
        <Route path="latihan/kimia/kelas-11" element={<SlKimiaKelas11 />} />
        <Route path="latihan/kimia/kelas-12" element={<SlKimiaKelas12 />} />
        {/* Rute untuk latihan Bahasa Inggris */}
        <Route path="latihan/bahasa-inggris/kelas-10" element={<SlBahasaInggrisKelas10 />} />
        <Route path="latihan/bahasa-inggris/kelas-11" element={<SlBahasaInggrisKelas11 />} />
        <Route path="latihan/bahasa-inggris/kelas-12" element={<SlBahasaInggrisKelas12 />} />
        {/* Rute untuk latihan Ekonomi */}
        <Route path="latihan/ekonomi/kelas-10" element={<SlEkonomiKelas10 />} />
        <Route path="latihan/ekonomi/kelas-11" element={<SlEkonomiKelas11 />} />
        {/* Rute untuk kuis Matematika */}
        <Route path="kuis/matematika/kelas-10" element={<QzMatematikaKelas10 />} />
        <Route path="kuis/matematika/kelas-11" element={<QzMatematikaKelas11 />} />
        <Route path="kuis/matematika/kelas-12" element={<QzMatematikaKelas12 />} />
        {/* Rute untuk kuis Biologi */}
        <Route path="kuis/biologi/kelas-10" element={<QzBiologiKelas10 />} />
        <Route path="kuis/biologi/kelas-11" element={<QzBiologiKelas11 />} />
        <Route path="kuis/biologi/kelas-12" element={<QzBiologiKelas12 />} />
        {/* Rute untuk kuis Fisika */}
        <Route path="kuis/fisika/kelas-10" element={<QzFisikaKelas10 />} />
        <Route path="kuis/fisika/kelas-11" element={<QzFisikaKelas11 />} />
        <Route path="kuis/fisika/kelas-12" element={<QzFisikaKelas12 />} />
        {/* Rute untuk kuis Kimia */}
        <Route path="kuis/kimia/kelas-10" element={<QzKimiaKelas10 />} />
        <Route path="kuis/kimia/kelas-11" element={<QzKimiaKelas11 />} />
        <Route path="kuis/kimia/kelas-12" element={<QzKimiaKelas12 />} />
        {/* Rute untuk kuis Bahasa Inggris */}
        <Route path="kuis/bahasa-inggris/kelas-10" element={<QzBahasaInggrisKelas10 />} />
        <Route path="kuis/bahasa-inggris/kelas-11" element={<QzBahasaInggrisKelas11 />} />
        <Route path="kuis/bahasa-inggris/kelas-12" element={<QzBahasaInggrisKelas12 />} />
        {/* Rute untuk kuis Ekonomi */}
        <Route path="kuis/ekonomi/kelas-10" element={<QzEkonomiKelas10 />} />
        <Route path="kuis/ekonomi/kelas-11" element={<QzEkonomiKelas11 />} />
   {/* Rute untuk Materi Fisika 10 */}
        <Route path="/Fsk10b1" element={<Fisika10b1 />} />
        <Route path="/Fsk10b2" element={<Fisika10b2 />} />
        <Route path="/Fsk10b3" element={<Fisika10b3 />} />
        <Route path="/Fsk10b4" element={<Fisika10b4 />} />
        <Route path="/Fsk10b5" element={<Fisika10b5 />} />
        <Route path="/Fsk10b6" element={<Fisika10b6 />} />
        <Route path="/Fsk10b7" element={<Fisika10b7 />} />
        {/* Rute untuk Materi Fisika 11 */}
        <Route path="/Fsk11b1" element={<Fisika11b1 />} />
        <Route path="/Fsk11b2" element={<Fisika11b2 />} />
        <Route path="/Fsk11b3" element={<Fisika11b3 />} />
        <Route path="/Fsk11b4" element={<Fisika11b4 />} />
        <Route path="/Fsk11b5" element={<Fisika11b5 />} />
        <Route path="/Fsk11b6" element={<Fisika11b6 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/Fsk12b1" element={<Fisika12b1 />} />
        <Route path="/Fsk12b2" element={<Fisika12b2 />} />
        <Route path="/Fsk12b3" element={<Fisika12b3 />} />
        <Route path="/Fsk12b4" element={<Fisika12b4 />} />
        <Route path="/Fsk12b5" element={<Fisika12b5 />} />
        <Route path="/Fsk12b6" element={<Fisika12b6 />} />
        <Route path="/Fsk12b7" element={<Fisika12b7 />} />
        <Route path="/Fsk12b8" element={<Fisika12b8 />} />
        {/* Rute untuk Materi Biologi 10 */}
        <Route path="/Bgl10b1" element={<Bgl10b1 />} />
        <Route path="/Bgl10b2" element={<Bgl10b2 />} />
        <Route path="/Bgl10b3" element={<Bgl10b3 />} />
        <Route path="/Bgl10b4" element={<Bgl10b4 />} />
        <Route path="/Bgl10b5" element={<Bgl10b5 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/Bgl11b1" element={<Bgl11b1 />} />
        <Route path="/Bgl11b2" element={<Bgl11b2 />} />
        <Route path="/Bgl11b3" element={<Bgl11b3 />} />
        <Route path="/Bgl11b4" element={<Bgl11b4 />} />
        <Route path="/Bgl11b5" element={<Bgl11b5 />} />
        <Route path="/Bgl11b6" element={<Bgl11b6 />} />
        <Route path="/Bgl11b7" element={<Bgl11b7 />} />
        <Route path="/Bgl11b8" element={<Bgl11b8 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/Bgl12b1" element={<Bgl12b1 />} />
        <Route path="/Bgl12b2" element={<Bgl12b2 />} />
        <Route path="/Bgl12b3" element={<Bgl12b3 />} />
        <Route path="/Bgl12b4" element={<Bgl12b4 />} />
        <Route path="/Bgl12b5" element={<Bgl12b5 />} />
        <Route path="/Bgl12b6" element={<Bgl12b6 />} />
        <Route path="/Bgl12b7" element={<Bgl12b7 />} />
        <Route path="/Bgl12b8" element={<Bgl12b8 />} />
        <Route path="/Bgl12b9" element={<Bgl12b9 />} />
        {/* Rute untuk Materi Ekonomi 10 */}
        <Route path="/Eko10b1" element={<Eko10b1 />} />
        <Route path="/Eko10b2" element={<Eko10b2 />} />
        <Route path="/Eko10b3" element={<Eko10b3 />} />
        <Route path="/Eko10b4" element={<Eko10b4 />} />
        <Route path="/Eko10b5" element={<Eko10b5 />} />
        {/* Rute untuk Materi Ekonomi 11 */}
        <Route path="/Eko11b1" element={<Eko11b1 />} />
        <Route path="/Eko11b2" element={<Eko11b2 />} />
        <Route path="/Eko11b3" element={<Eko11b3 />} />
        <Route path="/Eko11b4" element={<Eko11b4 />} />
        <Route path="/Eko11b5" element={<Eko11b5 />} />
        <Route path="/Eko11b6" element={<Eko11b6 />} />
        <Route path="/Eko11b7" element={<Eko11b7 />} />
        <Route path="/Eko11b8" element={<Eko11b8 />} />
        <Route path="/Eko11b9" element={<Eko11b9 />} />
        <Route path="/Eko11b10" element={<Eko11b10 />} />
        <Route path="/Eko11b11" element={<Eko11b11 />} />
        <Route path="/Eko11b12" element={<Eko11b12 />} />
        {/* Rute untuk Materi Inggris 10 */}
        <Route path="/Bing10b1" element={<Bing10b1 />} />
        <Route path="/Bing10b2" element={<Bing10b2 />} />
        <Route path="/Bing10b3" element={<Bing10b3 />} />
        <Route path="/Bing10b4" element={<Bing10b4 />} />
        <Route path="/Bing10b5" element={<Bing10b5 />} />
        <Route path="/Bing10b6" element={<Bing10b6 />} />
        <Route path="/Bing10b7" element={<Bing10b7 />} />
        <Route path="/Bing10b8" element={<Bing10b8 />} />
        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/Bing11b1" element={<Bing11b1 />} />
        <Route path="/Bing11b2" element={<Bing11b2 />} />
        <Route path="/Bing11b3" element={<Bing11b3 />} />
        <Route path="/Bing11b4" element={<Bing11b4 />} />
        <Route path="/Bing11b5" element={<Bing11b5 />} />
        <Route path="/Bing11b6" element={<Bing11b6 />} />
        <Route path="/Bing11b7" element={<Bing11b7 />} />
        <Route path="/Bing11b8" element={<Bing11b8 />} />
        {/* Rute untuk Materi Inggris 12 */}
        <Route path="/Bing12b1" element={<Bing12b1 />} />
        <Route path="/Bing12b2" element={<Bing12b2 />} />
        <Route path="/Bing12b3" element={<Bing12b3 />} />
        <Route path="/Bing12b4" element={<Bing12b4 />} />
        <Route path="/Bing12b5" element={<Bing12b5 />} />
        <Route path="/Bing12b6" element={<Bing12b6 />} />
        <Route path="/Bing12b7" element={<Bing12b7 />} />
        <Route path="/Bing12b8" element={<Bing12b8 />} />
        <Route path="/Bing12b9" element={<Bing12b9 />} />
        <Route path="/Bing12b10" element={<Bing12b10 />} />
        <Route path="/Bing12b11" element={<Bing12b11 />} />
        <Route path="/Bing12b12" element={<Bing12b12 />} />
        {/* Rute untuk Materi Kimia 10 */}
        <Route path="/Kma10b1" element={<Kma10b1 />} />
        <Route path="/Kma10b2" element={<Kma10b2 />} />
        <Route path="/Kma10b3" element={<Kma10b3 />} />
        <Route path="/Kma10b4" element={<Kma10b4 />} />
        <Route path="/Kma10b5" element={<Kma10b5 />} />
        {/* Rute untuk Materi Kimia 11 */}
        <Route path="/Kma11b1" element={<Kma11b1 />} />
        <Route path="/Kma11b2" element={<Kma11b2 />} />
        <Route path="/Kma11b3" element={<Kma11b3 />} />
        <Route path="/Kma11b4" element={<Kma11b4 />} />
        <Route path="/Kma11b5" element={<Kma11b5 />} />
        <Route path="/Kma11b6" element={<Kma11b6 />} />
        <Route path="/Kma11b7" element={<Kma11b7 />} />
        <Route path="/Kma11b8" element={<Kma11b8 />} />
        <Route path="/Kma11b9" element={<Kma11b9 />} />
        {/* Rute untuk Materi Kimia 12 */}
        <Route path="/Kma12b1" element={<Kma12b1 />} />
        <Route path="/Kma12b2" element={<Kma12b2 />} />
        <Route path="/Kma12b3" element={<Kma12b3 />} />
        <Route path="/Kma12b4" element={<Kma12b4 />} />
        <Route path="/Kma12b5" element={<Kma12b5 />} />
        <Route path="/Kma12b6" element={<Kma12b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/Mtk10b1" element={<Mtk10b1 />} />
        <Route path="/Mtk10b2" element={<Mtk10b2 />} />
        <Route path="/Mtk10b3" element={<Mtk10b3 />} />
        <Route path="/Mtk10b4" element={<Mtk10b4 />} />
        <Route path="/Mtk10b5" element={<Mtk10b5 />} />
        <Route path="/Mtk10b6" element={<Mtk10b6 />} />
        <Route path="/Mtk10b7" element={<Mtk10b7 />} />
        <Route path="/Mtk10b8" element={<Mtk10b8 />} />
        {/* Rute untuk Materi Matematika 11 */}
        <Route path="/Mtk11b1" element={<Mtk11b1 />} />
        <Route path="/Mtk11b2" element={<Mtk11b2 />} />
        <Route path="/Mtk11b3" element={<Mtk11b3 />} />
        <Route path="/Mtk11b4" element={<Mtk11b4 />} />
        <Route path="/Mtk11b5" element={<Mtk11b5 />} />
        <Route path="/Mtk11b6" element={<Mtk11b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/Mtk12b1" element={<Mtk12b1 />} />
        <Route path="/Mtk12b2" element={<Mtk12b2 />} />
        <Route path="/Mtk12b3" element={<Mtk12b3 />} />
        <Route path="/Mtk12b4" element={<Mtk12b4 />} />
        <Route path="/Mtk12b5" element={<Mtk12b5 />} />
        <Route path="/Mtk12b6" element={<Mtk12b6 />} />
        <Route path="/Mtk12b7" element={<Mtk12b7 />} />
        <Route path="/Mtk12b8" element={<Mtk12b8 />} />
        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/SlBing10b1" element={<SlBing10b1 />} />
        <Route path="/SlBing10b2" element={<SlBing10b2 />} />
        <Route path="/SlBing10b3" element={<SlBing10b3 />} />
        <Route path="/SlBing10b4" element={<SlBing10b4 />} />
        <Route path="/SlBing10b5" element={<SlBing10b5 />} />
        <Route path="/SlBing10b6" element={<SlBing10b6 />} />
        <Route path="/SlBing10b7" element={<SlBing10b7 />} />
        <Route path="/SlBing10b8" element={<SlBing10b8 />} />
        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/SlBing11b1" element={<SlBing11b1 />} />
        <Route path="/SlBing11b2" element={<SlBing11b2 />} />
        <Route path="/SlBing11b3" element={<SlBing11b3 />} />
        <Route path="/SlBing11b4" element={<SlBing11b4 />} />
        <Route path="/SlBing11b5" element={<SlBing11b5 />} />
        <Route path="/SlBing11b6" element={<SlBing11b6 />} />
        <Route path="/SlBing11b7" element={<SlBing11b7 />} />
        <Route path="/SlBing11b8" element={<SlBing11b8 />} />
        {/* Rute untuk Materi Inggris 11 */}
        {/* Rute untuk Materi Inggris 12 */}
        <Route path="/SlBing12b1" element={<SlBing12b1 />} />
        <Route path="/SlBing12b2" element={<SlBing12b2 />} />
        <Route path="/SlBing12b3" element={<SlBing12b3 />} />
        <Route path="/SlBing12b4" element={<SlBing12b4 />} />
        <Route path="/SlBing12b5" element={<SlBing12b5 />} />
        <Route path="/SlBing12b6" element={<SlBing12b6 />} />
        <Route path="/SlBing12b7" element={<SlBing12b7 />} />
        <Route path="/SlBing12b8" element={<SlBing12b8 />} />
        <Route path="/SlBing12b9" element={<SlBing12b9 />} />
        <Route path="/SlBing12b10" element={<SlBing12b10 />} />
        <Route path="/SlBing12b11" element={<SlBing12b11 />} />
        <Route path="/SlBing12b12" element={<SlBing12b12 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/SlBgl12b1" element={<SlBgl12b1 />} />
        <Route path="/SlBgl12b2" element={<SlBgl12b2 />} />
        <Route path="/SlBgl12b3" element={<SlBgl12b3 />} />
        <Route path="/SlBgl12b4" element={<SlBgl12b4 />} />
        <Route path="/SlBgl12b5" element={<SlBgl12b5 />} />
        <Route path="/SlBgl12b6" element={<SlBgl12b6 />} />
        <Route path="/SlBgl12b7" element={<SlBgl12b7 />} />
        <Route path="/SlBgl12b8" element={<SlBgl12b8 />} />
        <Route path="/SlBgl12b8" element={<SlBgl12b8 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/SlBgl11b1" element={<SlBgl11b1 />} />
        <Route path="/SlBgl11b2" element={<SlBgl11b2 />} />
        <Route path="/SlBgl11b3" element={<SlBgl11b3 />} />
        <Route path="/SlBgl11b4" element={<SlBgl11b4 />} />
        <Route path="/SlBgl11b5" element={<SlBgl11b5 />} />
        <Route path="/SlBgl11b6" element={<SlBgl11b6 />} />
        <Route path="/SlBgl11b7" element={<SlBgl11b7 />} />
        <Route path="/SlBgl11b8" element={<SlBgl11b8 />} />
        {/* Rute untuk Materi Ekonomi 11 */}
        <Route path="/SlEko11b1" element={<SlEko11b1 />} />
        <Route path="/SlEko11b2" element={<SlEko11b2 />} />
        <Route path="/SlEko11b3" element={<SlEko11b3 />} />
        <Route path="/SlEko11b4" element={<SlEko11b4 />} />
        <Route path="/SlEko11b5" element={<SlEko11b5 />} />
        <Route path="/SlEko11b6" element={<SlEko11b6 />} />
        <Route path="/SlEko11b7" element={<SlEko11b7 />} />
        <Route path="/SlEko11b8" element={<SlEko11b8 />} />
        <Route path="/SlEko11b9" element={<SlEko11b9 />} />
        <Route path="/SlEko11b10" element={<SlEko11b10 />} />
        <Route path="/SlEko11b11" element={<SlEko11b11 />} />
        <Route path="/SlEko11b12" element={<SlEko11b12 />} />
        {/* Rute untuk Materi Fisika 10 */}
        <Route path="/SlFsk10b1" element={<SlFisika10b1 />} />
        <Route path="/SlFsk10b2" element={<SlFisika10b2 />} />
        <Route path="/SlFsk10b3" element={<SlFisika10b3 />} />
        <Route path="/SlFsk10b4" element={<SlFisika10b4 />} />
        <Route path="/SlFsk10b5" element={<SlFisika10b5 />} />
        <Route path="/SlFsk10b6" element={<SlFisika10b6 />} />
        <Route path="/slFsk10b7" element={<SlFisika10b7 />} />
        {/* Rute untuk Materi Fisika 11 */}
        <Route path="/SlFsk11b1" element={<SlFisika11b1 />} />
        <Route path="/SlFsk11b2" element={<SlFisika11b2 />} />
        <Route path="/SlFsk11b3" element={<slFisika11b3 />} />
        <Route path="/SlFsk11b4" element={<SlFisika11b4 />} />
        <Route path="/SlFsk11b5" element={<SlFisika11b5 />} />
        <Route path="/slFsk11b6" element={<SlFisika11b6 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/SlFsk12b1" element={<SlFisika12b1 />} />
        <Route path="/SlFsk12b2" element={<SlFisika12b2 />} />
        <Route path="/SlFsk12b3" element={<SlFisika12b3 />} />
        <Route path="/SlFsk12b4" element={<SlFisika12b4 />} />
        <Route path="/SlFsk12b5" element={<SlFisika12b5 />} />
        <Route path="/SlFsk12b6" element={<SlFisika12b6 />} />
        <Route path="/SlFsk12b7" element={<SlFisika12b7 />} />
        <Route path="/SlFsk12b8" element={<SlFisika12b8 />} />
        {/* Rute untuk Materi Kimia 10 */}
        <Route path="/SlKma10b1" element={<SlKma10b1 />} />
        <Route path="/SlKma10b2" element={<SlKma10b2 />} />
        <Route path="/SlKma10b3" element={<SlKma10b3 />} />
        <Route path="/SlKma10b4" element={<SlKma10b4 />} />
        <Route path="/SlKma10b5" element={<SlKma10b5 />} />
        {/* Rute untuk Materi Kimia 11 */}
        <Route path="/SlKma11b1" element={<SlKma11b1 />} />
        <Route path="/SlKma11b2" element={<SlKma11b2 />} />
        <Route path="/SlKma11b3" element={<SlKma11b3 />} />
        <Route path="/SlKma11b4" element={<SlKma11b4 />} />
        <Route path="/SlKma11b5" element={<SlKma11b5 />} />
        <Route path="/SlKma11b6" element={<SlKma11b6 />} />
        <Route path="/SlKma11b7" element={<SlKma11b7 />} />
        <Route path="/SlKma11b8" element={<SlBgl11b8 />} />
        <Route path="/SlKma11b9" element={<SlKma11b5 />} />
        {/* Rute untuk Materi Kimia 12 */}
        <Route path="/SlKma12b1" element={<SlKma12b1 />} />
        <Route path="/SlKma12b2" element={<SlKma12b2 />} />
        <Route path="/SlKma12b3" element={<SlKma12b3 />} />
        <Route path="/SlKma12b4" element={<SlKma12b4 />} />
        <Route path="/SlKma12b5" element={<SlKma12b5 />} />
        <Route path="/SlKma12b6" element={<SlKma12b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/SlMtk10b1" element={<SlMtk10b1 />} />
        <Route path="/SlMtk10b2" element={<SlMtk10b2 />} />
        <Route path="/SlMtk10b3" element={<SlMtk10b3 />} />
        <Route path="/SlMtk10b4" element={<SlMtk10b4 />} />
        <Route path="/SlMtk10b5" element={<SlMtk10b5 />} />
        <Route path="/SlMtk10b6" element={<SlMtk10b6 />} />
        <Route path="/SlMtk10b7" element={<SlMtk10b7 />} />
        <Route path="/SlMtk10b8" element={<SlMtk10b8 />} />
        {/* Rute untuk Materi Matematika 11 */}
        <Route path="/SlMtk11b1" element={<SlMtk11b1 />} />
        <Route path="/SlMtk11b2" element={<SlMtk11b2 />} />
        <Route path="/SlMtk11b3" element={<SlMtk11b3 />} />
        <Route path="/SlMtk11b4" element={<SlMtk11b4 />} />
        <Route path="/SlMtk11b5" element={<SlMtk11b5 />} />
        <Route path="/SlMtk11b6" element={<SlMtk11b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/SlMTK12b1" element={<SlMtk12b1 />} />
        <Route path="/SlMTK12b2" element={<SlMtk12b2 />} />
        <Route path="/SlMTK12b3" element={<SlMtk12b3 />} />
        <Route path="/SlMTK12b4" element={<SlMtk12b4 />} />
        <Route path="/SlMTK12b5" element={<SlMtk12b5 />} />
        <Route path="/SlMTK12b6" element={<SlMtk12b6 />} />
        <Route path="/SlMTK12b7" element={<SlMtk12b7 />} />
        <Route path="/SlMTK12b8" element={<SlMtk12b8 />} />
                {/* Rute untuk Materi Inggris 11 */}
                <Route path="/SlBing10b1" element={<QzBing10b1 />} />
        <Route path="/QzBing10b2" element={<QzBing10b2 />} />
        <Route path="/QzBing10b3" element={<QzBing10b3 />} />
        <Route path="/QzBing10b4" element={<QzBing10b4 />} />
        <Route path="/QzBing10b5" element={<QzBing10b5 />} />
        <Route path="/QzBing10b6" element={<QzBing10b6 />} />
        <Route path="/QzBing10b7" element={<QzBing10b7 />} />
        <Route path="/QzBing10b8" element={<QzBing10b8 />} />
        <Route path="/QzBing10b9" element={<QzBing10b9 />} />
        <Route path="/QzBing10b10" element={<QzBing10b10 />} />
        {/* Rute untuk Materi Inggris 11*/}
        <Route path="/QzBing11b1" element={<QzBing11b1 />} />
        <Route path="/QzBing11b2" element={<QzBing11b2 />} />
        <Route path="/QzBing11b3" element={<QzBing11b3 />} />
        <Route path="/QzBing11b4" element={<QzBing11b4 />} />
        <Route path="/QzBing11b5" element={<QzBing11b5 />} />
        <Route path="/QzBing11b6" element={<QzBing11b6 />} />
        <Route path="/QzBing11b7" element={<QzBing11b7 />} />
        <Route path="/QzBing11b8" element={<QzBing11b8 />} />

        {/* Rute untuk kuis Inggris 12*/}
        <Route path="/QzBing12Present" element={<QzBing12Present />} />
        <Route path="/QzBing12Past" element={<QzBing12Past />} />
        <Route path="/QzBing12Future" element={<QzBing12Future />} />

        {/* Rute untuk Materi Biologi 11 */}
        {/* <Route path="/QzBgl12b1" element={<QzBgl12b1 />} />
        <Route path="/QzBgl12b2" element={<QzBgl12b2 />} />
        <Route path="/QzBgl12b3" element={<QzBgl12b3 />} />
        <Route path="/QzBgl12b4" element={<QzBgl12b4 />} />
        <Route path="/QzBgl12b5" element={<QzBgl12b5 />} />
        <Route path="/QzBgl12b6" element={<QzBgl12b6 />} />
        <Route path="/QzBgl12b7" element={<QzBgl12b7 />} />
        <Route path="/QzBgl12b8" element={<QzBgl12b8 />} />
        <Route path="/QzBgl12b8" element={<QzBgl12b8 />} /> */}
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/QzBgl11b1" element={<QzBgl11b1 />} />
        <Route path="/QzBgl11b2" element={<QzBgl11b2 />} />
        <Route path="/QzBgl11b3" element={<QzBgl11b3 />} />
        <Route path="/QzBgl11b4" element={<QzBgl11b4 />} />
        <Route path="/QzBgl11b5" element={<QzBgl11b5 />} />
        <Route path="/QzBgl11b6" element={<QzBgl11b6 />} />
        <Route path="/QzBgl11b7" element={<QzBgl11b7 />} />
        <Route path="/QzBgl11b8" element={<QzBgl11b8 />} />
        {/* Rute untuk Materi Ekonomi 11 */}
        {/* <Route path="/QzEko11b1" element={<QzEko11b1 />} />
        <Route path="/QzEko11b2" element={<QzEko11b2 />} />
        <Route path="/QzEko11b3" element={<QzEko11b3 />} />
        <Route path="/QzEko11b4" element={<QzEko11b4 />} />
        <Route path="/QzEko11b5" element={<QzEko11b5 />} />
        <Route path="/QzEko11b6" element={<QzEko11b6 />} />
        <Route path="/QzEko11b7" element={<QzEko11b7 />} />
        <Route path="/QzEko11b8" element={<QzEko11b8 />} />
        <Route path="/QzEko11b9" element={<QzEko11b9 />} />
        <Route path="/QzEko11b10" element={<QzEko11b10 />} />
        <Route path="/QzEko11b11" element={<QzEko11b11 />} />
        <Route path="/QzEko11b12" element={<QzEko11b12 />} /> */}
        {/* Rute untuk Materi Fisika 10 */}
        {/* <Route path="/QzFsk10b1" element={<QzFisika10b1 />} />
        <Route path="/QzFsk10b2" element={<QzFisika10b2 />} />
        <Route path="/QzFsk10b3" element={<QzFisika10b3 />} />
        <Route path="/QzFsk10b4" element={<QzFisika10b4 />} />
        <Route path="/QzFsk10b5" element={<QzFisika10b5 />} />
        <Route path="/QzFsk10b6" element={<QzFisika10b6 />} />
        <Route path="/QzFsk10b7" element={<QzFisika10b7 />} /> */}
        {/* Rute untuk Materi Fisika 11 */}
        <Route path="/QzFsk11b1" element={<QzFisika11b1 />} />
        <Route path="/QzFsk11b2" element={<QzFisika11b2 />} />
        <Route path="/QzFsk11b3" element={<QzFisika11b3 />} />
        <Route path="/QzFsk11b4" element={<QzFisika11b4 />} />
        <Route path="/QzFsk11b5" element={<QzFisika11b5 />} />
        <Route path="/QzFsk11b6" element={<QzFisika11b6 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/QzFsk12b1" element={<QzFisika12b1 />} />
        <Route path="/QzFsk12b2" element={<QzFisika12b2 />} />
        <Route path="/QzFsk12b3" element={<QzFisika12b3 />} />
        <Route path="/QzFsk12b4" element={<QzFisika12b4 />} />
        <Route path="/QzFsk12b5" element={<QzFisika12b5 />} />
        <Route path="/QzFsk12b6" element={<QzFisika12b6 />} />
        <Route path="/QzFsk12b7" element={<QzFisika12b7 />} />
        <Route path="/QzFsk12b8" element={<QzFisika12b8 />} />
        {/* Rute untuk Materi Kimia 10 */}
        <Route path="/QzKma10b1" element={<QzKma10b1 />} />
        <Route path="/QzKma10b2" element={<QzKma10b2 />} />
        <Route path="/QzKma10b3" element={<QzKma10b3 />} />
        <Route path="/QzKma10b4" element={<QzKma10b4 />} />
        <Route path="/QzKma10b5" element={<QzKma10b5 />} />
        {/* Rute untuk Materi Kimia 11 */}
        <Route path="/QzKma11b1" element={<QzKma11b1 />} />
        <Route path="/QzKma11b2" element={<QzKma11b2 />} />
        <Route path="/QzKma11b3" element={<QzKma11b3 />} />
        <Route path="/QzKma11b4" element={<QzKma11b4 />} />
        <Route path="/QzKma11b5" element={<QzKma11b5 />} />
        <Route path="/QzKma11b6" element={<QzKma11b6 />} />
        <Route path="/QzKma11b7" element={<QzKma11b7 />} />
        <Route path="/QzKma11b8" element={<QzBgl11b8 />} />
        <Route path="/QzKma11b9" element={<QzKma11b5 />} />
        {/* Rute untuk Materi Kimia 12 */}
        <Route path="/QzKma12b1" element={<QzKma12b1 />} />
        <Route path="/QzKma12b2" element={<QzKma12b2 />} />
        <Route path="/QzKma12b3" element={<QzKma12b3 />} />
        <Route path="/QzKma12b4" element={<QzKma12b4 />} />
        <Route path="/QzKma12b5" element={<QzKma12b5 />} />
        <Route path="/QzKma12b6" element={<QzKma12b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
         <Route path="/QzMtk10b1" element={<QzMtk10b1 />} />
        <Route path="/QzMtk10b2" element={<QzMtk10b2 />} />
        <Route path="/QzMtk10b3" element={<QzMtk10b3 />} />
        <Route path="/QzMtk10b4" element={<QzMtk10b4 />} />
        <Route path="/QzMtk10b5" element={<QzMtk10b5 />} />
        <Route path="/QzMtk10b6" element={<QzMtk10b6 />} />
        <Route path="/QzMtk10b7" element={<QzMtk10b7 />} />
        <Route path="/QzMtk10b8" element={<QzMtk10b8 />} /> 
        {/* Rute untuk Materi Matematika 11 */}
         <Route path="/QzMtk11b1" element={<QzMtk11b1 />} />
        <Route path="/QzMtk11b2" element={<QzMtk11b2 />} />
        <Route path="/QzMtk11b3" element={<QzMtk11b3 />} />
        <Route path="/QzMtk11b4" element={<QzMtk11b4 />} />
        <Route path="/QzMtk11b5" element={<QzMtk11b5 />} />
        <Route path="/QzMtk11b6" element={<QzMtk11b6 />} /> 
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/QzMTK12b1" element={<QzMtk12b1 />} />
        <Route path="/QzMTK12b2" element={<QzMtk12b2 />} />
        <Route path="/QzMTK12b3" element={<QzMtk12b3 />} />
        <Route path="/QzMTK12b4" element={<QzMtk12b4 />} />
        <Route path="/QzMTK12b5" element={<QzMtk12b5 />} />
        <Route path="/QzMTK12b6" element={<QzMtk12b6 />} />
        <Route path="/QzMTK12b7" element={<QzMtk12b7 />} />
        <Route path="/QzMTK12b8" element={<QzMtk12b8 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
