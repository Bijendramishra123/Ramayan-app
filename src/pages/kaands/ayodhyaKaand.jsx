import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const ayodhyaKaandSlokas = [
  {
    doha: "बंदउँ सीता राम पद, जिन्हहि परम प्रिय खग मृग नारि।",
    meaning: "मैं श्री सीता-राम के चरणों की वंदना करता हूँ, जिन्हें पशु-पक्षी और स्त्रियाँ अत्यंत प्रिय हैं।",
  },
  {
    doha: "राम सिया राम सिया राम जय जय राम।",
    meaning: "भगवान राम और माता सीता की जय हो।",
  }
];

const AyodhyaKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">अयोध्या कांड</h1>
      <div className="sloka-section">
        {ayodhyaKaandSlokas.map((sloka, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{sloka.doha}</p>
            <p className="sloka-meaning">{sloka.meaning}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AyodhyaKaand;
