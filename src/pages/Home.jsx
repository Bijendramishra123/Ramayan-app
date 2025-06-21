import React, { useState, useEffect, Suspense, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import { FaBookOpen } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  const [currentSlokaIndex, setCurrentSlokaIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // ✅ Memoized chapters and slokas moved inside component
  const chapters = useMemo(() => ([
    { name: "अर्जुनविषादयोग", slokas: 47 },
    { name: "सांख्ययोग", slokas: 72 },
    { name: "कर्मयोग", slokas: 43 },
    { name: "ज्ञानकर्मसंन्यासयोग", slokas: 42 },
    { name: "कर्मसंन्यासयोग", slokas: 29 },
    { name: "आत्मसंयमयोग", slokas: 47 },
    { name: "ज्ञानविज्ञानयोग", slokas: 30 },
    { name: "अक्षरब्रह्मयोग", slokas: 28 },
    { name: "राजविद्याराजगुह्ययोग", slokas: 34 },
    { name: "विभूति योग", slokas: 42 },
    { name: "विश्वरूपदर्शन योग", slokas: 55 },
    { name: "भक्तियोग", slokas: 20 },
    { name: "क्षेत्रक्षेत्रज्ञविभाग योग", slokas: 35 },
    { name: "गुणत्रयविभाग योग", slokas: 27 },
    { name: "पुरुषोत्तम योग", slokas: 20 },
    { name: "दैवासुरसंपद्विभाग योग", slokas: 24 },
    { name: "श्रद्धात्रयविभाग योग", slokas: 28 },
    { name: "मोक्षयोग", slokas: 78 }
  ]), []);

  const slokas = useMemo(() => ([
    { text: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |", meaning: "In the field of dharma, at Kurukshetra, assembled the warriors ready to fight." },
    { text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |", meaning: "You have the right to perform your duty, but not to the fruits of your actions." },
    { text: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय |", meaning: "Perform your duty with equanimity, abandoning attachment." },
    { text: "समत्वं योग उच्यते |", meaning: "Equanimity is called yoga." },
    { text: "श्रद्धावान् लभते ज्ञानम् |", meaning: "A person with faith attains knowledge." },
    { text: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |", meaning: "There is nothing as purifying as knowledge." },
    { text: "वासांसि जीर्णानि यथा विहाय |", meaning: "Just as one discards old clothes and wears new ones, so does the soul change bodies." },
    { text: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते |", meaning: "I am the origin of all; everything emanates from me." },
    { text: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु |", meaning: "Fix your mind on me, be devoted to me, worship me and bow to me." },
    { text: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |", meaning: "Whenever there is a decline in righteousness, I manifest myself." }
  ]), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMeaning((prev) => !prev);
      if (!showMeaning) {
        setCurrentSlokaIndex((prevIndex) => (prevIndex + 1) % slokas.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [showMeaning, slokas.length]);

  return (
    <div className="home-container">
      {/* ✅ Chapter List */}
      <div className="menu-frame">
        <h2 className="kaand-title">श्रीमद्भगवद्गीता</h2>
        <ul className="kaand-list">
          {chapters.map((chapter, index) => (
            <li key={index} className="kaand-item">
              <FaBookOpen className="kaand-icon" />
              <Nav.Link
                onClick={() => setSelectedChapter(chapter)}
                className="kaand-link updated-link"
              >
                {chapter.name} ({chapter.slokas} श्लोक)
              </Nav.Link>
            </li>
          ))}
        </ul>
        {selectedChapter && (
          <p className="selected-chapter">
            {selectedChapter.name} - {selectedChapter.slokas} Slokas
          </p>
        )}
      </div>

      {/* ✅ Sloka Display */}
      <div className="sloka-frame">
        <p className="gita-sloka">{slokas[currentSlokaIndex].text}</p>
        {showMeaning && (
          <p className="gita-meaning">
            {slokas[currentSlokaIndex].meaning}
          </p>
        )}
      </div>

      {/* ✅ Optimized Lazy Carousel */}
      <div className="carousel-frame">
        <Suspense fallback={<p>Loading Carousel...</p>}>
          <Carousel
            controls={false}
            indicators={false}
            interval={3000}
            className="vertical-carousel"
          >
            {Array.from({ length: 9 }, (_, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100 fixed-image"
                  src={`${import.meta.env.BASE_URL}images/slider${i + 1}.jpg`}
                  alt={`Slide ${i + 1}`}
                  loading="lazy"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
