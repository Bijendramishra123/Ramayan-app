import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/Ramayan.css";

// ✅ Lazy Load Components for Faster Performance
const FaBookOpen = lazy(() => import("react-icons/fa").then((module) => ({ default: module.FaBookOpen })));

const kaands = [
  { name: "बाल कांड", path: "/bal-kaand" },
  { name: "अयोध्या कांड", path: "/ayodhya-kaand" },
  { name: "अरण्य कांड", path: "/aranya-kaand" },
  { name: "किष्किंधा कांड", path: "/kishkindha-kaand" },
  { name: "सुंदर कांड", path: "/sundar-kaand" },
  { name: "लंकाकांड", path: "/lanka-kaand" },
  { name: "उत्तर कांड", path: "/uttar-kaand" }
];

const dohas = [
  { text: "राम सिया राम सिया राम जय जय राम |", meaning: "श्रीराम और माता सीता की जय हो।" },
  { text: "मनुष्यता सबसे बड़ा धर्म है |", meaning: "इंसानियत ही सबसे बड़ा धर्म है।" },
  { text: "परहित सरिस धरम नहिं भाई |", meaning: "दूसरों की भलाई से बढ़कर कोई धर्म नहीं।" }
];

const Ramayan = () => {
  const [currentDohaIndex, setCurrentDohaIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  // ✅ Optimized Navigation using useCallback
  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  // ✅ Optimized useEffect to Prevent Extra Re-renders
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMeaning((prev) => !prev);
      if (!showMeaning) {
        setCurrentDohaIndex((prevIndex) => (prevIndex + 1) % dohas.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [showMeaning]);

  return (
    <div className="ramayan-container">
      <div className="background-scroll"></div>

      <div className="content-wrapper">
        {/* ✅ बाईं ओर कांड मेनू */}
        <div className="menu-frame">
          <h2 className="kaand-title">रामचरितमानस</h2>
          <ul className="kaand-list">
            {kaands.map((kaand, index) => (
              <li key={index} className="kaand-item">
                <Suspense fallback={<span>📖</span>}>
                  <FaBookOpen className="kaand-icon" />
                </Suspense>
                <Nav.Link
                  onClick={() => handleNavigation(kaand.path)} // ✅ Optimized Navigation
                  className="kaand-link updated-link"
                >
                  {kaand.name}
                </Nav.Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ मध्य में दोहे */}
        <div className="doha-frame">
          <p className="gita-sloka">{dohas[currentDohaIndex].text}</p>
          {showMeaning && <p className="gita-meaning">{dohas[currentDohaIndex].meaning}</p>}
        </div>

        {/* ✅ दाईं ओर वीडियो सेक्शन */}
        <div className="video-frame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/pF3hCLELuqI?si=bQAAQLWZ3iD99Bc0"
            title="रामायण वीडियो | Ramayan Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy" // ✅ Lazy Load Video
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ramayan;
