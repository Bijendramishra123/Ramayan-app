import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import BhagavadGita from "./pages/BhagavadGita";
import Ramayan from "./pages/Ramayan";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BalKaand from "./pages/kaands/balKaand";
import AyodhyaKaand from "./pages/kaands/ayodhyaKaand";
import AranyaKaand from "./pages/kaands/aranyaKaand";
import KishkindhaKaand from "./pages/kaands/kishkindhaKaand";
import SundarKaand from "./pages/kaands/sundarKaand";
import LankaKaand from "./pages/kaands/lankaKaand";
import UttarKaand from "./pages/kaands/uttarKaand";
import "./styles/Kaand.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bhagavadgita" element={<BhagavadGita />} />
            <Route path="/ramayan" element={<Ramayan />} />
            <Route path="/contact" element={<Contact />} />
            {/* ✅ सभी कांडों के पेज updated नामों के साथ */}
            <Route path="/bal-kaand" element={<BalKaand />} />
            <Route path="/ayodhya-kaand" element={<AyodhyaKaand />} />
            <Route path="/aranya-kaand" element={<AranyaKaand />} />
            <Route path="/kishkindha-kaand" element={<KishkindhaKaand />} />
            <Route path="/sundar-kaand" element={<SundarKaand />} />
            <Route path="/lanka-kaand" element={<LankaKaand />} />
            <Route path="/uttar-kaand" element={<UttarKaand />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
