import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const lankaKaandSlokas = [
  {
    doha: "राम सिया राम सिया राम जय जय राम।",
    meaning: "भगवान श्रीराम और माता सीता की जय हो।",
  },
  {
    doha: "संकट कटै मिटै सब पीरा, जो सुमिरै हनुमत बलबीरा।",
    meaning: "जो भी हनुमान जी का स्मरण करता है, उसके सभी संकट और पीड़ाएँ समाप्त हो जाती हैं।",
  }
];

const LankaKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">लंका कांड</h1>
      <div className="sloka-section">
        {lankaKaandSlokas.map((sloka, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{sloka.doha}</p>
            <p className="sloka-meaning">{sloka.meaning}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LankaKaand;
