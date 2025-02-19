import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="homefooter">
      <div className="firstFooterSect">
        <div className="topper">
          <img src="/xtbLogo.svg" alt="vállalat logója" />
          <span></span>
          <p className="haveanaccount">
            Helló{" "}
            <Link href={"/signin_admin"}>Üdvözöljük</Link>
          </p>
        
          <div className="socials_1">
            <a>
              <img src="/twitter.svg" alt="twitter" />
            </a>
            <a>
              <img src="/viber.svg" alt="viber" />
            </a>
            <a href="">
              <img src="/telegram.svg" alt="telegram" />
            </a>
          </div>
        </div>
        <div className="faller">
          <div className="leftFaller">
            <Link href={"/signup"} className="unitoptionFaller">
              <p>REGISZTRÁCIÓ</p>
            </Link>
            <Link href={"/signin"} className="unitoptionFaller">
              <p>BEJELENTKEZÉS</p>
            </Link>
            <Link href={"/about"} className="unitoptionFaller">
              <p>RÓLUNK</p>
            </Link>
            <Link href={"/contact"} className="unitoptionFaller">
              <p>KAPCSOLAT</p>
            </Link>
            <a href="#Offers" className="unitoptionFaller">
              <p>Ajánlatok</p>
            </a>
          </div>
          <div className="centerFaller">
            <h4>CÍMEK:</h4>
            <h2 style={{ all: "unset" }}>
              A vállalat nem rendelkezik fizikai jelenléttel Magyarországon (HU).
              A magyar (HU) telefonszámok az ügyfelek kényelmét szolgálják. A vállalat Cipruson működik, és az ügyfélszolgálatot a következők biztosítják: 
              <p>
                <a href="mailto:helpdeskxtbhu@gmail.com">Fundrise SA - Lengyelországban található központ.</a>
              </p> 
            </h2>
            <div>
              <div className="address_1">
                <h5>MAGYARORSZÁG</h5>
                <p>
                  KIRÁNYSZÉK <br />
                  Fundrise GLOBAL Pikioni 10, Épület: Highsight Rentals Ltd 3075,
                  Limassol, Ciprus
                </p>
                <p>
                  <a href="mailto:consultantmanager3@gmail.com">KAPCSOLAT @ fundriseglobal.HU</a>
                </p>

                <p>H-V, 24/7</p>
              </div>
              <div className="address_1">
                <h5>LENGYELORSZÁG</h5>
                <p>KIRÁNYSZÉK Fundrise S.A. ul. Prosta 67 00-838 Warszawa</p>
                <p>
                  <a href="mailto:helppdeskk009@gmail.com">SEGÍTSÉG KAPCSOLAT</a>
                </p>

                <p>H-P, 24/7</p>
              </div>
            </div>
          </div>
          <div className="rightfaller fancybg">
            <h4>Kezdjen hozzá a Fundrise GLOBAL-lal</h4>
            <a href="#Offers" className="fancyBtn">
              Csatlakozzon hozzánk
            </a>
          </div>
        </div>
      </div>
      <div className="secndFootersect">
        <div className="left">
          <p>
            Az általunk kínált pénzügyi eszközök, különösen a CFD-k, magas kockázattal járhatnak. A Részvények Frakciói (RF) a Fundrise bizalmi jogából származnak, amelyek részvények és ETF-ek frakcionális részeire vonatkoznak. Az RF nem különálló pénzügyi eszköz. Az RF korlátozott vállalati jogokkal járnak.
          </p>
          <p>
            Ez az oldal a Magyarországon lakó befektetők számára készült. Fontolja meg, hogy megérti-e, hogyan működnek a pénzügyi eszközök, és megengedheti-e magának, hogy elveszítse a pénzét. Nem mindenki számára megfelelőek, ezért győződjön meg arról, hogy teljes mértékben tisztában van az összes kockázattal.
          </p>
        </div>
      </div>
      <div className="thirdfooterSect">
        <p>Szerzői jog © 2018 - 2024 Fundrise globalCompany.com Minden jog fenntartva.</p>
        <p>Hűség | Biztonság | Nyereség</p>
      </div>
    </footer>
  );
};

export default Footer;
