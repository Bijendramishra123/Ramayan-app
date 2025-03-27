import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const AranyaKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">अरण्य कांड</h1>
      <p className="kaand-description">
        अरण्य कांड में भगवान श्रीराम, सीता माता और लक्ष्मण जी के वनवास के समय की घटनाओं का वर्णन है।
      </p>
    </Container>
  );
};

export default AranyaKaand; // ✅ यह लाइन जरूरी है
