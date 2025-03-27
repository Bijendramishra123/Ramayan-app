import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Kaand.css";

const uttarKaandSlokas = [
  {
    doha: "रघुकुल रीति सदा चली आई, प्राण जाए पर वचन न जाई।",
    meaning: "रघुकुल की यह रीति सदैव से चली आ रही है कि प्राण भले ही चले जाएँ, लेकिन वचन नहीं टलता।",
  },
  {
    doha: "राम नाम मनि दीप धरु जीह देहरी द्वार। तुलसी भीतर बाहेरहुँ जौं चाहसि उजियार।।",
    meaning: "राम का नाम मणि दीपक के समान है, जो मन के अंदर और बाहर दोनों ओर उजाला करता है।",
  }
];

const UttarKaand = () => {
  return (
    <Container className="kaand-container">
      <h1 className="kaand-title">उत्तर कांड</h1>
      <div className="sloka-section">
        {uttarKaandSlokas.map((sloka, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{sloka.doha}</p>
            <p className="sloka-meaning">{sloka.meaning}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UttarKaand;
