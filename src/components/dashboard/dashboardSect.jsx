import { useState } from "react";
import TradingViewWidget from "./LengthyAnalytics";
import Analytics2 from "./Analytics2";
import AnalyticsViewWidget from "./Analytics3";

const DashboardSect = ({ setWidgetState, currentUser, setInvestData }) => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

  const investProcess = (vlad, clad, blad) => {
    setInvestData({
      idnum: currentUser?.idnum,
      plan: vlad,
      status: "Pending",
      capital: clad,
      date: new Date().toISOString(),
      duration: blad,
      paymentOption: "Bitcoin",
      authStatus: "unseen",
      admin: false,
      roi: 0,
      bonus: 0,
    });
    setWidgetState({
      state: true,
      type: "invest",
    });
  };
  return (
    <>
      <div className="gridAnalytics">
        <div className="leftGridAnalaytics">
          <AnalyticsViewWidget />
        </div>
        <div className="rightGridAnalaytics">
          <Analytics2 />
        </div>
      </div>
      <div className="lengthyAnalytics">
        <TradingViewWidget />
      </div>
      <section className="Offers" id="Offers">
        <h2>Our Available Offers</h2>
<div className="OffersCntn">
  <div className="unitOffer">
    <h3>EZÜST</h3>
    <h4>
      <span>€100</span> <br /> - <br /> <span>€900</span>
    </h4>
    <ul>
      <li>
        <i className="icofont-tick-mark"></i> <span>5X ROI</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>5X bónusz a befektetésre</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>ROI és bónusz 24 órán belül</span>
      </li>
    </ul>
    <button
      className="borderBtn"
      onClick={() => {
        investProcess("Ezüst", 100, 2);
      }}
    >
      Kezdj el nyerni
    </button>
  </div>
  <div className="unitOffer fancybg">
    <h3>
      GYÉMÁNT <i className="icofont-diamond"></i>
    </h3>
    <h4>
      <span>€10,000</span> <br /> - <br /> <span>€100,000</span>
    </h4>
    <ul>
      <li>
        <i className="icofont-tick-mark"></i> <span>5X ROI</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>10X bónusz a befektetésre</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>ROI és bónusz 7 napon belül</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>Hozzáférés 15 digitális pénzügyi forrásunkhoz</span>
      </li>
    </ul>
    <button
      className="fancyBtn"
      onClick={() => {
        investProcess("Gyémánt", 10000, 7);
      }}
    >
      Gazdagodjon
    </button>
  </div>
  <div className="unitOffer">
    <h3>ARANY</h3>
    <h4>
      <span>€1,000</span> <br /> - <br /> <span>€9,000</span>
    </h4>
    <ul>
      <li>
        <i className="icofont-tick-mark"></i> <span>5X ROI</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>8X bónusz a befektetésre</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>ROI és bónusz 4 napon belül</span>
      </li>
      <li>
        <i className="icofont-tick-mark"></i>{" "}
        <span>Hozzáférés 5 digitális pénzügyi forrásunkhoz</span>
      </li>
    </ul>
    <button
      className="borderBtn"
      onClick={() => {
        investProcess("Arany", 1000, 5);
      }}
    >
      Kezdj el nyerni
    </button>
  </div>
</div>

      </section>
    </>
  );
};

export default DashboardSect;
