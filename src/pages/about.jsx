import { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import Footer from "../components/home/Footer";
import IframeSect from "../components/home/IframeSect";
import Head from "next/head";
import Image from "next/image";

const About = () => {
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
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="HomefirstPageCtn aboutMainCtn conatctMain"
      onClick={handleGrandMovementTraffic}
    >
      <Head>
        <title>Kapcsolat</title>
        <meta property="og:title" content="Rólunk" />
      </Head>
      <Navbar
        showsidecard={showsidecard}
        setShowsideCard={setShowsideCard}
        shownavOptions={false}
        showDisplayCard={showDisplayCard}
      />
      <section className="sect1">
        <h1>Miről szólunk...</h1>
      </section>
      <div className="preSect">
        <Link href={"/"}>Főoldal</Link>
        <span>
          <i className="icofont-rounded-right"></i>
        </span>
        <p>Rólunk</p>
      </div>
      <section id="about" className="about">
        <div className="whatareweabout">
          <div className="aboutimg"></div>
          <div className="abouttext">
            <h2>Fundrise HU</h2>
            <p>
              A Fundrise egy teljesen engedélyezett és szabályozott kereskedési és befektetési cég.
              Az egyik legnagyobb, tőzsdén jegyzett FX és CFD bróker vagyunk
              a világon, kiskereskedők számára biztosítva a hozzáférést több száz
              globális piachoz, beleértve
              <span>kriptovalutát</span>, <span>bináris</span>,{" "}
              <span>részvényeket</span>, <span>kötvényeket</span>, <span>határidős ügyleteket</span>,{" "}
              <span>devizákat</span>, <span>aranyat</span>, <span>ezüstöt</span>,
              és <span>olajkereskedést</span>.
            </p>
            <p>
              Hisszük, hogy a kiváló befektetési teljesítmény a
              tudás, tapasztalat és alkalmazkodóképesség ügyes egyensúlyával érhető el. 
              Nagyra értékeljük ügyfeleink hűségét és azokat a kapcsolatokat, amelyeket
              minden ügyféllel kialakítunk.
            </p>
          </div>
        </div>
        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,dogecoin,stellar,algorand,flow,dai,usdd,maker,astar,tezos,solana,neo,gala,cardano,aptos,helium,kava"
          currency="huf"
          background-color="#020d25"
          locale="hu"
        ></coingecko-coin-price-marquee-widget>
        <div className="companyscopes">
          <div className="unitscope advantage">
            <h3>LEGGYORSABBAN NÖVEKVŐ</h3>
            <Image
              src="/fast_growing.png"
              alt="gyorsan növekvő"
              width={300}
              height={200}
              className="small-image"
            />
          </div>
          <span className="vertSept" role="separator"></span>
          <div className="unitscope advantage">
            <h3>DÍJNYERTES</h3>
            <Image
              src="/awards.png"
              alt="díjak"
              width={300}
              height={200}
              className="small-image"
            />
          </div>
          <span className="vertSept" role="separator"></span>
          <div className="unitscope advantage">
            <h3>LEGMEGBÍZHATÓBB</h3>
  
            <Image
              src="/reliable.png"
              alt="megbízható"
              width={300}
              height={200}
              className="small-image"
            />
          </div>
        </div>
      </section>
      <IframeSect />
      <Footer />
    </div>
  );
  
};

export default About;
