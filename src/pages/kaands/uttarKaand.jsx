import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import "../../styles/uttarKaand.css";

const uttarKaandSlokas = [
  {
    doha: "केकीकण्ठाभनीलं सुरवरविलसद्विप्रपादाब्जचिह्नं \nशोभाढ्यं पीतवस्त्रं सरसिजनयनं सर्वदा सुप्रसन्नम्‌। \nपाणौ नाराचचापं कपिनिकरयुतं बन्धुना सेव्यमानं। \nनौमीड्यं जानकीशं रघुवरमनिशं पुष्पकारूढरामम्‌॥1॥",
    meaning: "मोर के कण्ठ की आभा के समान (हरिताभ) नीलवर्ण, देवताओं में श्रेष्ठ, ब्राह्मण (भृगुजी) के चरणकमल के चिह्न से सुशोभित...",
  },
  {
    doha: "कोसलेन्द्रपदकन्जमंजुलौ कोमलावजमहेशवन्दितौ। \nजानकीकरसरोजलालितौ चिन्तकस्य मनभृंगसंगिनौ॥2॥",
    meaning: "कोसलपुरी के स्वामी श्री रामचंद्रजी के सुंदर और कोमल दोनों चरणकमल ब्रह्माजी और शिवजी द्वारा वन्दित हैं...",
  },
  {
    doha: "कुन्दइन्दुदरगौरसुन्दरं अम्बिकापतिमभीष्टसिद्धिदम्‌। \nकारुणीककलकन्जलोचनं नौमि शंकरमनंगमोचनम्‌॥3॥",
    meaning: "कुन्द के फूल, चंद्रमा और शंख के समान सुंदर गौरवर्ण, जगज्जननी श्री पार्वतीजी के पति...",
  },
  {
    doha: "रहा एक दिन अवधि कर अति आरत पुर लोग। \nजहँ तहँ सोचहिं नारि नर कृस तन राम बियोग॥",
    meaning: "श्री रामजी के लौटने की अवधि का एक ही दिन बाकी रह गया, अतएव नगर के लोग बहुत आतुर (अधीर) हो रहे हैं। राम के वियोग में दुबले हुए स्त्री-पुरुष जहाँ-तहाँ सोच (विचार) कर रहे हैं।",
  },
  {
    doha: "सगुन होहिं सुंदर सकल मन प्रसन्न सब केर। \nप्रभु आगवन जनाव जनु नगर रम्य चहुँ फेर॥",
    meaning: "इतने में सब सुंदर शकुन होने लगे और सबके मन प्रसन्न हो गए। नगर भी चारों ओर से रमणीक हो गया। मानो ये सब के सब चिह्न प्रभु के (शुभ) आगमन को जना रहे हैं।",
  },
  {
    doha: "राम बिरह सागर महँ भरत मगन मन होत। \nबिप्र रूप धरि पवनसुत आइ गयउ जनु पोत॥",
    meaning: "श्री रामजी के विरह समुद्र में भरतजी का मन डूब रहा था, उसी समय पवनपुत्र हनुमान्‌जी ब्राह्मण का रूप धरकर इस प्रकार आ गए, मानो (उन्हें डूबने से बचाने के लिए) नाव आ गई हो।",
  },
  {
    doha: "हरषित गुर परिजन अनुज भूसुर बृंद समेत। \nचले भरत मन प्रेम अति सन्मुख कृपानिकेत॥",
    meaning: "गुरु वशिष्ठजी, कुटुम्बी, छोटे भाई शत्रुघ्न तथा ब्राह्मणों के समूह के साथ हर्षित होकर भरतजी अत्यंत प्रेमपूर्ण मन से कृपाधाम श्री रामजी की अगवानी के लिए चले।",
  },
  {
    doha: "बहुतक चढ़ीं अटारिन्ह निरखहिं गगन बिमान। \nदेखि मधुर सुर हरषित करहिं सुमंगल गान॥3 ख॥",
    meaning: "बहुत सी स्त्रियाँ अटारियों पर चढ़ीं आकाश में विमान देख रही हैं और उसे देखकर हर्षित होकर मीठे स्वर से सुंदर मंगल गीत गा रही हैं।",
  },
  {
    doha: "राका ससि रघुपति पुर सिंधु देखि हरषान। \nबढ़्‌यो कोलाहल करत जनु नारि तरंग समान॥3 ग॥",
    meaning: "श्री रघुनाथजी पूर्णिमा के चंद्रमा हैं तथा अवधपुर समुद्र है, जो उस पूर्णचंद्र को देखकर हर्षित हो रहा है और शोर करता हुआ बढ़ रहा है (इधर-उधर दौड़ती हुई) स्त्रियाँ उसकी तरंगों के समान लगती हैं।",
  },
  {
    doha: "इहाँ भानुकुल कमल दिवाकर। कपिन्ह देखावत नगर मनोहर॥ \nसुनु कपीस अंगद लंकेसा। पावन पुरी रुचिर यह देसा॥1॥",
    meaning: "यहाँ (विमान पर से) सूर्य कुल रूपी कमल को प्रफुल्लित करने वाले सूर्य श्री रामजी वानरों को मनोहर नगर दिखला रहे हैं। (वे कहते हैं-) हे सुग्रीव! हे अंगद! हे लंकापति विभीषण! सुनो। यह पुरी पवित्र है और यह देश सुंदर है।",
  },
  {
    doha: "जद्यपि सब बैकुंठ बखाना। बेद पुरान बिदित जगु जाना॥ \nअवधपुरी सम प्रिय नहिं सोऊ। यह प्रसंग जानइ कोउ कोऊ॥2॥",
    meaning: "यद्यपि सबने वैकुण्ठ की बड़ाई की है- यह वेद-पुराणों में प्रसिद्ध है और जगत्‌ जानता है, परंतु अवधपुरी के समान मुझे वह भी प्रिय नहीं है। यह बात (भेद) कई-कोई (बिरले ही) जानते हैं।",
  },
  {
    doha: "जन्मभूमि मम पुरी सुहावनि। उत्तर दिसि बह सरजू पावनि॥ \nजा मज्जन ते बिनहिं प्रयासा। मम समीप नर पावहिं बासा॥3॥",
    meaning: "यह सुहावनी पुरी मेरी जन्मभूमि है। इसके उत्तर दिशा में जीवों को पवित्र करने वाली सरयू नदी बहती है, जिसमें स्नान करने से मनुष्य बिना ही परिश्रम मेरे समीप निवास (सामीप्य मुक्ति) पा जाते हैं।",
  },
  {
    doha: "अति प्रिय मोहि इहाँ के बासी। मम धामदा पुरी सुख रासी॥ \nहरषे सब कपि सुनि प्रभु बानी। धन्य अवध जो राम बखानी॥4॥",
    meaning: "यहाँ के निवासी मुझे बहुत ही प्रिय हैं। यह पुरी सुख की राशि और मेरे परमधाम को देने वाली है। प्रभु की वाणी सुनकर सब वानर हर्षित हुए (और कहने लगे कि) जिस अवध की स्वयं श्री रामजी ने बड़ाई की, वह (अवश्य ही) धन्य है।",
  },
];

const UttarKaand = () => {
  const slokaRefs = useRef([]);

  useEffect(() => {
    const revealOnLoad = () => {
      slokaRefs.current.forEach((el) => {
        if (el) {
          el.classList.add("show");
        }
      });
    };
    revealOnLoad(); // Show all on load for fast visibility
  }, []);

  return (
    <Container className="kaand-container">
      <div className="background-frame">
        <h1 className="kaand-title">
          उत्तर कांड <span className="sub-title">(सप्तम सोपान-मंगलाचरण)</span>
        </h1>
        <div className="sloka-section">
          {uttarKaandSlokas.map((sloka, index) => (
            <div
              key={index}
              ref={(el) => (slokaRefs.current[index] = el)}
              className="sloka-card"
            >
              <FaPencilAlt className="pencil-icon moving-pencil" />
              <p className="sloka-text">{sloka.doha}</p>
              <p className="sloka-meaning">{sloka.meaning}</p>
              <div className="hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default UttarKaand;
