import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Hair from './pages/Hair';
import Beards from './pages/Beards';
import Shaves from './pages/Shaves';
import DuoPackages from './pages/DuoPackages';
import GiftCertificates from './pages/GiftCertificates';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="h-full grid grid-rows-[1fr,auto]">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/beards" element={<Beards />} />
        <Route path="/shaves" element={<Shaves />} />
        <Route path="/duo-packages" element={<DuoPackages />} />
        <Route path="/gift-certificates" element={<GiftCertificates />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
