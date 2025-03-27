import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const kishkindhaKaandSlokas = [
  {
    doha: "राम दूत हनुमान कहूँ, भव भंजन नाम।",
    meaning: "हनुमान जी राम के दूत हैं और भवसागर से पार लगाने वाले हैं।",
  },
  {
    doha: "सुनहु सखा मै कथा सुहाई।",
    meaning: "हे मित्र, यह कथा अत्यंत सुहावनी है, इसे सुनो।",
  }
];

const KishkindhaKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">किष्किंधा कांड</h1>
      <div className="sloka-section">
        {kishkindhaKaandSlokas.map((sloka, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{sloka.doha}</p>
            <p className="sloka-meaning">{sloka.meaning}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default KishkindhaKaand;
