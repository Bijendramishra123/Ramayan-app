import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const BalKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">बाल कांड</h1>
      <p className="kaand-description">
        बाल कांड में भगवान श्रीराम के जन्म और उनके बाल्यकाल की कथाओं का वर्णन किया गया है।
      </p>
    </Container>
  );
};

export default BalKaand; // ✅ यह लाइन मौजूद होनी चाहिए
