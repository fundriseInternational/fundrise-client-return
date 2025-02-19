import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import IframeSect from "../components/home/IframeSect";

export default function Home() {
  useEffect(() => {
    // Load the Google Translate API script dynamically
    const script = document.createElement("script");
    // script.type = 'text/javascript';
    script.src =
      "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script tag when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [currentUser, setCurrentUser] = useState({});

  const [showsidecard, setShowsideCard] = useState(false);
  const [showDisplayCard, setshowDisplayCard] = useState(false);

  const handleGrandMovementTraffic = (e) => {
    if (e.target.className === "profileIcon") {
      setshowDisplayCard((prev) => !prev);
    } else {
      setshowDisplayCard(false);
    }
  };

  useEffect(() => {
    const user =
      JSON.parse(sessionStorage.getItem("activeUser")) ||
      JSON.parse(localStorage.getItem("activeUser"));
    setCurrentUser(user);
  }, []);

  //Animation variables
  const parentVar = {
    init: {
      opacity: 0.95,
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.01,
      },
    },
  };

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%",
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <div className="HomefirstPageCtn" onClick={handleGrandMovementTraffic}>
      <Navbar
        showsidecard={showsidecard}
        setShowsideCard={setShowsideCard}
        shownavOptions={true}
        showDisplayCard={showDisplayCard}
      />
      <main>
      <section className="homeIntro">
  <h1>Ahol a pénzed dolgozik</h1>
  <p>Egyszeri juttatás mindenki számára, aki jogosult szubjektív alapon az egyszeri jövedelemre személyenként, amelyet a Fundrise finanszírozási kapacitás terhére biztosítanak</p>

  <div className="cta">
    <a href="#Offers" className="fancyBtn">
    Kezdj el nyerni
    </a>
  </div>
</section>

<div className="keyfactsCntn">
  <div className="keyfacts fancybg">
    <div className="unitfact">
      <h2>1M+</h2>
      <p>Aktív felhasználók</p>
    </div>
    <div className="unitfact">
      <h2>€490.9M+</h2>
      <p>Összes kifizetés</p>
    </div>
    <div className="unitfact">
      <h2>€180M+</h2>
      <p>Összes betétek</p>
    </div>
    <div className="unitfact">
      <h2>€700M</h2>
      <p>Piaci kapitalizáció</p>
    </div>
  </div>
</div>

<section id="about" className="about">
  <div className="whatareweabout">
    <div className="aboutimg"></div>
    <div className="abouttext">
      <h2>Fundrise HU</h2>
      <p>
        A Fundrise egy teljesen engedélyezett és szabályozott kereskedési és
        befektetési vállalat. Az egyik legnagyobb tőzsdén jegyzett FX és CFD
        brókerek vagyunk a világon, amely kiskereskedelmi kereskedőknek kínál
        hozzáférést több száz globális piachoz, beleértve a{" "}
        <span>kriptovalutát</span>, <span>bináris opciókat</span>,{" "}
        <span>részvényeket</span>, <span>kötvényeket</span>,{" "}
        <span>határidős ügyleteket</span>, <span>devizákat</span>,{" "}
        <span>aranyat</span>, <span>ezüstöt</span> és <span>olajkereskedést</span>.
      </p>
      <p>
        Úgy gondoljuk, hogy a kiváló befektetési teljesítmény a tudás, a
        tapasztalat és az alkalmazkodóképesség ügyes egyensúlyán alapul. Nagyra
        értékeljük ügyfeleink hűségét, és fontosnak tartjuk az egyes ügyfelekkel
        kialakított kapcsolatokat.
      </p>
      <Link className="borderBtn" href={"/about"}>
        Többet a cégünkről...
      </Link>
    </div>
  </div>
  <coingecko-coin-price-marquee-widget
    coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,dogecoin,stellar,algorand,flow,dai,usdd,maker,astar,tezos,solana,neo,gala,cardano,aptos,helium,kava"
    currency="usd"
    background-color="#000613"
    locale="hu"
  ></coingecko-coin-price-marquee-widget>

  <div className="banks" style={{ display: "flex", gap: "10px" }}>
    <a>
      <img src="/bnk5.jpeg" alt="twitter" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk4.jpeg" alt="viber" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk3.jpeg" alt="telegram" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk2.jpeg" alt="twitter" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk1.jpeg" alt="twitter" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk7.jpeg" alt="twitter" style={{ height: "50px", width: "50px" }} />
    </a>
    <a>
      <img src="/bnk6.svg" alt="twitter" style={{ height: "50px", width: "50px" }} />
    </a>
  </div>

  <div className="companyscopes">
    <div className="unitscope advantage">
      <h3>ELŐNYEINK</h3>
      <p>
        Befektetési lehetőségeink rendkívül tisztességesek, és minden
        tranzakciós adatot blokkláncon tárolunk, amely lehetővé teszi
        ultra-biztonságos pénzügyi adatok létrehozását, átvitelét és
        ellenőrzését harmadik felek beavatkozása nélkül.
      </p>
    </div>
    <span className="vertSept" role="separator"></span>
    <div className="unitscope advantage">
      <h3>GARANCIÁINK</h3>
      <p>
        Azért vagyunk itt, mert szenvedélyesen hiszünk a nyitott, átlátható
        piacokban, és célunk, hogy jelentős hajtóerővé váljunk az elterjedésük
        érdekében. Garantáljuk a maximális nyereséget platformunk használatával,
        és természetesen gondoskodunk adatai biztonságáról.
      </p>
    </div>
    <span className="vertSept" role="separator"></span>
    <div className="unitscope advantage">
      <h3>KÜLDETÉSÜNK</h3>
      <p>
        Platformunk küldetése, hogy segítsen Önnek a helyes útra térni, és
        minden lehetőségből profitot szerezni, még akkor is, ha csak most
        kezdi befektetési útját.
      </p>
    </div>
  </div>
</section>

<section className="features">
  <h2>Soha nem tévedhet a Fundrise-szel</h2>
  <div className="thefeatureGrid">
    <div className="topSubgrid">
      <div className="lefttopSubgrid">
        <div className="gridunit floater">
          <h3>ERŐS BIZTONSÁG</h3>
          <p>Védelem DDoS támadások ellen, teljes adat titkosítás.</p>
        </div>
        <div className="gridunit floater">
          <h3>FIZETÉSI LEHETŐSÉGEK</h3>
          <p>
            Fő fizetési lehetőségünk a kriptovaluta, amely minden felhasználó
            számára elérhető világszerte.
          </p>
        </div>
      </div>
      <div className="righttopsubgrid floater">
        <h3>MOBIL ELÉRHETŐSÉG</h3>
        <p>
          Kényelmesen elérheti befektetéseit mobiltelefonján bármikor, bárhol,
          bármely napon.
        </p>
      </div>
    </div>
    <div className="bottomSubgrid">
      <div className="leftbottomSubgrid floater">
        <h3>KÖLTSÉGHATÉKONYSÁG</h3>
        <p>
          Ésszerű rendszer díjak minden platform felhasználó számára az összes
          piaci opcióban.
        </p>
      </div>
      <div className="rightBottomSubgrid floater">
        <h3>MAGAS LIKVIDITÁS</h3>
        <p>
          Platformunk magas likviditást kínál a felhasználóink számára elérhető
          összes befektetési lehetőséghez.
        </p>
      </div>
    </div>
    <div className="cta2 fancybg">
      <div className="leftCta2">
        <h2>
          Csatlakozzon <span>1M+ aktív felhasználónkhoz</span>
        </h2>
        <p>Vágjon bele még ma</p>
      </div>
      <a href="#Offers" className="fancyBtn">
        Csatlakozzon most
      </a>
    </div>
  </div>
</section>

        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,dogecoin,stellar,algorand,flow,dai,usdd,maker,astar,tezos,solana,neo,gala,cardano,aptos,helium,kava,fantom"
          currency="usd"
          background-color="#000613"
          locale="en"
        ></coingecko-coin-price-marquee-widget>
<section className="pathToInvest">
  <h2>Pénzügyi utazása itt kezdődik.</h2>
  <div className="pathCntn">
    <div className="unitPathSect">
      <span>1.</span>
      <img src="/download_coin.png" alt="Regisztráció" />
      <h2>Regisztráció</h2>
      <p>Töltse ki az adatait, és erősítse meg e-mail címét.</p>
    </div>
    <div className="unitPathSect">
      <span>2.</span>
      <img src="/add_coins.png" alt="Ajánlat vásárlása" />
      <h2>Bármelyik ajánlatunk megvásárlása</h2>
      <p>
        Töltse fel pénztárcáját, és vásároljon bármelyik tervet, amelyet választ,
        és nézze meg, hogyan kereskedik rendszerünk az Ön nevében.
      </p>
    </div>
    <div className="unitPathSect">
      <span>3.</span>
      <img src="/buy_sell.png" alt="Kezdje el keresni" />
      <h2>Kezdje el keresni</h2>
      <p>
        Azonnal figyelheti befektetése növekedését. Kifizetések 60 percenként.
      </p>
    </div>
  </div>
</section>

{!currentUser?.admin && (
  <section id="Offers" className="Offers">
    <h2>Üdvözöljük a CREDIT FORUMON! Pénzügyi szolgáltatásokkal kapcsolatos útja itt kezdődik</h2>
    <div className="OffersCntn">
      <div className="unitOffer">
        <h3>EZÜST</h3>
        <h4>
          <span>€100</span> <br /> - <br /> <span>€900</span>
        </h4>
        <ul>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>5X ROI / Profit</span>
          </li>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>ROI / Profit 24 órán belül</span>
          </li>
        </ul>
        <Link
          href={currentUser?.id ? "/profile#Offers" : "/signup"}
          className="borderBtn"
        >
          Kezdj el nyerni
        </Link>
      </div>
      <div className="unitOffer fancybg">
        <h3>
          DIAMOND <i className="icofont-diamond"></i>
        </h3>
        <h4>
          <span>€10,000</span> <br /> - <br /> <span>€100,000</span>
        </h4>
        <ul>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>10X ROI / Profit</span>
          </li>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>ROI / Profit 7 nap alatt</span>
          </li>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>Hozzáférés 15 digitális pénzügyi erőforrásunkhoz</span>
          </li>
        </ul>
        <Link
          href={currentUser?.id ? "/profile#Offers" : "/signup"}
          className="fancyBtn"
        >
          Gazdagodjon meg
        </Link>
      </div>
      <div className="unitOffer">
        <h3>ARANY</h3>
        <h4>
          <span>€1,000</span> <br /> - <br /> <span>€9,000</span>
        </h4>
        <ul>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>7X ROI / Profit</span>
          </li>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>ROI / Profit 4 nap alatt</span>
          </li>
          <li>
            <i className="icofont-tick-mark"></i>{" "}
            <span>Hozzáférés 5 digitális pénzügyi erőforrásunkhoz</span>
          </li>
        </ul>
        <Link
          href={currentUser?.id ? "/profile#Offers" : "/signup"}
          className="borderBtn"
        >
          Kezdj el nyerni        </Link>
      </div>
    </div>
  </section>
)}

        <IframeSect />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { apod: "ADA" },
  };
}
