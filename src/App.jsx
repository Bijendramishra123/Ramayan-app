import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import BhagavadGita from "./pages/BhagavadGita";
import Ramayan from "./pages/Ramayan";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BalKaand from "./pages/kaands/balKaand";
import AyodhyaKaand from "./pages/kaands/ayodhyaKaand";
import AranyaKaand from "./pages/kaands/aranyaKaand"; 
import KishkindhaKaand from "./pages/kaands/kishkindhaKaand";
import SundarKaand from "./pages/kaands/sundarKaand";
import LankaKaand from "./pages/kaands/lankaKaand";
import UttarKaand from "./pages/kaands/uttarKaand";
import "./styles/Kaand.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user); // Convert to boolean
  }, []); // Run only once on mount

  return (
    <Router>
      <div className="app-container">
        {/* Navbar हमेशा दिखेगा और isAuthenticated पास किया जाएगा */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <div className="main-content">
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/bhagavadgita" element={<BhagavadGita />} />
                <Route path="/ramayan" element={<Ramayan />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bal-kaand" element={<BalKaand />} />
                <Route path="/ayodhya-kaand" element={<AyodhyaKaand />} />
                <Route path="/aranya-kaand" element={<AranyaKaand />} />
                <Route path="/kishkindha-kaand" element={<KishkindhaKaand />} />
                <Route path="/sundar-kaand" element={<SundarKaand />} />
                <Route path="/lanka-kaand" element={<LankaKaand />} />
                <Route path="/uttar-kaand" element={<UttarKaand />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </div>

        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
