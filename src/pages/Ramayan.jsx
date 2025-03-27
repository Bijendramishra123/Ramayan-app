import React, { useState, useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/Ramayan.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMeaning((prev) => !prev);
      if (showMeaning) {
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
                <FaBookOpen className="kaand-icon" />
                <Nav.Link
                  onClick={() => navigate(kaand.path)} // ✅ Navigate on click
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
            title="रामायण वीडियो"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ramayan;
