import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const NotificationSect = ({
  setWidgetState,
  setInvestData,
  currentUser,
  notifications,
}) => {
  initializeApp(firebaseConfig);

  const db = getFirestore();

  const handleDetailUpdate = (vlad) => {
    const docRef = doc(db, "notifications", vlad?.id);

    updateDoc(docRef, {
      status: "seen",
    });
  };

  useEffect(() => {
    notifications.forEach((elem) => {
      handleDetailUpdate(elem);
    });
  }, []);

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
    <div className="investmentMainCntn">
      <div className="myinvestmentSection">
        <h2>Értesítések</h2>
        {notifications.length > 0 ? (
          <div className="historyTable">
            {notifications
              .sort((a, b) => {
                const dateA = new Date(a.dateTime);
                const dateB = new Date(b.dateTime);
  
                return dateB - dateA;
              })
              .map((elem, idx) => (
                <div className="unitNotif" key={`${elem.idnum}-notiUser${idx}`}>
                  <h4>{elem?.message}</h4>
                  <p>
                    {new Date(elem?.dateTime).toLocaleDateString("hu-HU", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    |{" "}
                    {new Intl.DateTimeFormat("hu-HU", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }).format(new Date(elem?.dateTime))}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <div className="emptyTable">
            <i className="icofont-exclamation-tringle"></i>
            <p>Az értesítési halmaz jelenleg üres.</p>
          </div>
        )}
        <section className="Offers" id="Offers">
          <h2>Elérhető ajánlataink</h2>
          <div className="OffersCntn">
            <div className="unitOffer">
              <h3>EZÜST</h3>
              <h4>
                <span>€100</span> <br /> - <br /> <span>€900</span>
              </h4>
              <ul>
                <li>
                  <i className="icofont-tick-mark"></i> <span>5X hozam</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>5X bónusz a befektetésre</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Hozam és bónusz 24 órán belül</span>
                </li>
              </ul>
              <button
                className="borderBtn"
                onClick={() => {
                  investProcess("Silver", 100, 2);
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
                  <i className="icofont-tick-mark"></i> <span>5X hozam</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>10X bónusz a befektetésre</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Hozam és bónusz 7 nap alatt</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Hozzáférés 15 digitális pénzügyi forrásunkhoz</span>
                </li>
              </ul>
              <button
                className="fancyBtn"
                onClick={() => {
                  investProcess("Diamond", 10000, 7);
                }}
              >
                Gazdagodj meg
              </button>
            </div>
            <div className="unitOffer">
              <h3>ARANY</h3>
              <h4>
                <span>€1,000</span> <br /> - <br /> <span>€9,000</span>
              </h4>
              <ul>
                <li>
                  <i className="icofont-tick-mark"></i> <span>5X hozam</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>8X bónusz a befektetésre</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Hozam és bónusz 4 nap alatt</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Hozzáférés 5 digitális pénzügyi forrásunkhoz</span>
                </li>
              </ul>
              <button
                className="borderBtn"
                onClick={() => {
                  investProcess("Gold", 1000, 5);
                }}
              >
                Kezdj el nyerni
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  
};

export default NotificationSect;
