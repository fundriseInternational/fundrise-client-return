import { useState, useRef, useEffect } from "react";

const FAQ = () => {
  const containerRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(-1);
  const [activeSecVid, setActiveSecVid] = useState(-1);
  const [activeThirdVid, setActivThirdVid] = useState(-1);

  // useEffect(() => {
  //     const container = containerRef.current;
  //     const children = container.children;
  //     [...children].forEach((elem, idx) => {
  //         if(idx !== activeFAQ) {
  //             const currentElement = elem.querySelector("video");
  //             currentElement.pause();
  //             currentElement.currentTime = 0;
  //         } else {
  //             const currentVideo = children[vlad].querySelector("video");

  //             if (currentVideo.paused) {
  //                 currentVideo.play();
  //                 setActiveVideo(vlad);
  //                 setActiveSecVid(vlad);
  //                 setActivThirdVid(vlad);
  //             } else if (!currentVideo.paused) {
  //                 currentVideo.pause();
  //                 setActiveVideo(vlad);
  //                 setActiveSecVid(-1);
  //                 setActivThirdVid(vlad);
  //             }
  //         }
  //     });

  //     container.children[activeThirdVid]?.scrollIntoView({ behavior: 'smooth', block: "center"});
  // }, [activeFAQ]);

  const handleFAQToggle = (vlad) => {
    if (activeFAQ === vlad) {
      setActiveFAQ(-1);
    } else {
      setActiveFAQ(vlad);
    }
  };

  return (
    <section id="FAQ" className="FAQ">
      <div className="questionCntn">
        <div className="leftFAQ">
          <h2>Gyakran Ismételt Kérdések</h2>
        </div>
        <div ref={containerRef} className="rightFAQ">
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 0 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(0);
              }}
            >
              <h3>Mi az a kriptográfia?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 0 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 A kriptovaluta egy digitális vagy virtuális valuta, amelyen működik
 elosztott főkönyvi technológia, az úgynevezett <span>blokklánc</span>{" "}
 és <span>kriptográfiát</span> használ a biztonság érdekében. Ez az
 decentralizált és központi banktól függetlenül működik.
 A hagyományos valutákkal ellentétben a kriptovaluták nem rendelkeznek fedezettel
 fizikai áru vagy kormány által, és ezek értéke
 a piaci kereslet és kínálat határozza meg. A kriptovaluták lehetnek
 áruk és szolgáltatások vásárlására, pénzeszközök átutalására és kereskedelmére használják
 piacokon. A népszerű kriptovaluták közé tartozik a <span>Bitcoin</span>,{" "}
 <span>Ethereum</span>, <span>Litecoin</span>,{" "}
 <span>Ripple</span> és <span>Ripple</span>.
 </p>
 <p>
 Sok kriptovaluta, mint például a Bitcoin, a
 a <span>bányászat</span> nevű folyamat, amely megoldást foglal magában
 összetett matematikai egyenletek érvényesítésére és rögzítésére
 tranzakciók blokkláncon. Ezt a mechanizmust úgy is hívják:{" "}
 <span>Munkaigazolás (PoW)</span>. Egy másik konszenzus mechanizmus
 aminek megnőtt a népszerűsége – mivel több energiát jelent
 hatékony — a <span>Tét igazolása (PoS)</span>. Helyett
 bányászat, a PoS a hálózati résztvevők ellenőrzésére támaszkodik
 tranzakciók. Az Ethereum, a második legnagyobb kriptovaluta, amelyet használ
 ez a konszenzus mechanizmus.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 1 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(1);
              }}
            >
              <h3>Mi az a Bitcoin?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 1 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 A Bitcoin egy kriptovaluta, amely egy{" "}
 <span>peer-to-peer (P2P)</span> hálózat. 2009-ben jött létre
 egy ismeretlen személy vagy csoport a(z){" "} álnévvel
 <span>Satoshi Nakamoto</span>. A Bitcoin az első és a legtöbb
 jól ismert kriptovaluta, és jelentős mértékben megnőtt
 népszerűsége és értéke létrehozása óta. A hagyományos fiattal ellentétben
 valuta, amelyet a központi bankok és a kormányok ellenőriznek,
 A Bitcoin minden központi hatóságtól függetlenül működik.
 A tranzakciók ellenőrzése és rögzítése a következő napon történik:{" "}
 <span>blokklánc</span>, amely egy elosztott főkönyv, amely
 állandó és átlátható nyilvántartást vezet mindenről
 tranzakciók.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 2 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(2);
              }}
            >
              <h3>Mi az a ROI?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 2 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
A befektetés megtérülése (ROI) népszerű{" "}
<span>nyereségességi mutató</span>, amely annak értékelésére szolgál, hogy mennyire
sikeres volt a beruházás. A ROI-t százalékban fejezzük ki, és
úgy számítják ki, hogy el kell osztani egy befektetés nettó értékét{" "}
<span>nyereséggel (vagy veszteséggel)</span>, a kezdeti költség vagy ráfordítás alapján. A ROI-t
úgy számítják ki, hogy a beruházás kezdeti költségét levonják
végső értékéből, majd ezt az új számot elosztják a beruházás
költségével, és végül megszorozzák 100-zal.
</p>

<p>
 Egy 20 eurós, 120 euróért eladott termék 65 eurós nyereséget és hozamot eredményez
 400 befektetésre, azaz <span>50%-os</span> ROI:{" "}
 <span>10 000 €</span> = <span>5000 €</span>, így a teljes összeg
 pénzt <span>15 000 EUR-ra</span>.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 3 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(3);
              }}
            >
              <h3>Ki fejlesztette ki a Bitcoint?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 3 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 Az eredeti Bitcoin kódot {" "} tervezte
 <span>Satoshi Nakamoto</span> az MIT nyílt forráskódú hitelesítő adataival.
 2008-ban Nakamoto felvázolta a Bitcoin mögött meghúzódó ötletet a(z){" "}
 <span>Fehér könyv</span>, amely tudományosan leírta, hogyan
 kriptovaluta működne. A Bitcoin az első sikeres
 digitális valuta, amelyet a következőbe vetett bizalommal terveztek:{" "}
 <span>kriptográfia</span> a központi hatóságok felett. Satoshi elment
 a Bitcoin kód a fejlesztők és a közösség kezében
 2010. Eddig több száz fejlesztő tette hozzá a magot
 kódot az évek során.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 4 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(4);
              }}
            >
              <h3>Mi az a Bitcoin bányászat?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 4 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 A Bitcoin bányászata hasonló az aranybányászathoz, de az
 digitális formában. A folyamat során speciális számítógépek oldják meg a{" "}
 <span>algoritmikus egyenletek</span> vagy{" "}
 <span>hash függvények</span>. Ezek a problémák segítenek a bányászoknak
 erősítse meg a hálózaton belüli tranzakciók blokkjait. Bitcoin
 A bányászat jutalmat biztosít a bányászok számára azáltal, hogy Bitcoinban fizet
 kapcsolja be a bányászokat a tranzakciók megerősítésére a(z){" "}
 <span>blokklánc</span>. A bányászok új Bitcoint vezetnek be a
 hálózatot, és tranzakcióval is biztonságossá teszi a rendszert
 megerősítés. Hálózati díjakat is kapnak azért, amikor
 új érmét gyűjteni, és azt az időpontot, amikor az utolsó bitcoint megtalálják
 a bányászat folytatódik.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 5 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(5);
              }}
            >
              <h3>Használják a Bitcoint illegális tevékenységekre?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 5 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 Ez egy újabb vitatott téma. Mivel a
 szabadság és az <span>anonimitás</span> mértéke, amelyet a használat során használnak
 Bitcoin ajánlatok, sok felhasználó, aki vásárolni kívánt, ill
 illegális árukat vagy szolgáltatásokat keresni, amelyek kezdetben felhasználása felé fordultak
 Bitcoin, mint fizetési mód.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 6 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(6);
              }}
            >
              <h3>Szabályozható-e bármilyen módon a Bitcoin?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 6 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
            <p>
 Ismét, amikor a felhasználó úgy dönt, hogy egy adott típusú szoftvert használ
 Bitcoin pénztárcájuk számára eldöntik, milyen irányban a
 A Bitcoin hálózat felé tart. Más szóval, szüksége van a
 szinte minden egyes felhasználó együttműködése bármely módosítás érdekében
 a Bitcoin protokoll aspektusa. Ezért a Bitcoin tranzakció az
 decentralizált és nem szabályozható egyetlen szerv, ill
 vállalat.
 </p>
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 7 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(7);
              }}
            >
              <h3>A Bitcoin Anonymous?</h3>
              <i
                className="icofont-thin-down"
                style={{ rotate: `${activeFAQ === 7 ? "180deg" : "0deg"}` }}
              ></i>
            </div>
            <div className="answerBody">
              
            </div>
          </div>
          <div
            className="unitQuestion"
            style={{
              gridTemplateRows: `max-content ${
                activeFAQ === 8 ? "1fr" : "0px"
              }`,
            }}
          >
            <div
              className="questionHeading"
              onClick={() => {
                handleFAQToggle(8);
              }}
            >
<h3>Hogyan adhatok el Bitcoint?</h3>
<i
  className="icofont-thin-down"
  style={{ rotate: `${activeFAQ === 8 ? "180deg" : "0deg"}` }}
></i>
</div>
<div className="answerBody">
  <p>
    A Bitcoinokat helyileg el lehet adni a <span>LocalBitcoins</span> segítségével,
    <span>Bitcoin brókercégek / tőzsdék</span> igénybevételével, kétirányú{" "}
    <span>Bitcoin automata (BTM)</span> használatával, vagy akár árukért és szolgáltatásokért is fizethet velük. 
    A Bitcoinokat szinte bárkinek eladhatja, amennyiben rendelkeznek Bitcoin-címmel, 
    és eladhatók bármilyen fiat valutáért a világon, vagy kicserélhetők fizikai árura. 
    Bátran nézze meg az általunk ajánlott tőzsdék és brókercégek listáját, 
    hogy online eladhassa Bitcoinjait.
  </p>

            </div>
          </div>
          <p>
          További kérdése van? <a href="#">Lépjen kapcsolatba velünk</a>

          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
