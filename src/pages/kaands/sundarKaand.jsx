import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const sundarKaandSlokas = [
  {
    doha: "सिय राम मय सब जग जानी। करहु प्रणाम जोरी जुग पानी।।",
    meaning: "सम्पूर्ण जगत को श्री सीता और श्रीराममय जानकर, दोनों हाथ जोड़कर प्रणाम करना चाहिए।",
  },
  {
    doha: "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।।",
    meaning: "हे हनुमान जी! आप श्रीराम के द्वारपाल हैं, आपकी आज्ञा के बिना कोई प्रवेश नहीं कर सकता।",
  }
];

const SundarKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">सुंदर कांड</h1>
      <div className="sloka-section">
        {sundarKaandSlokas.map((sloka, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{sloka.doha}</p>
            <p className="sloka-meaning">{sloka.meaning}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SundarKaand;
