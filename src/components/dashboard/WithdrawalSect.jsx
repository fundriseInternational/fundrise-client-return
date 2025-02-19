import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import {
  getFirestore,
  doc,
  where,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

const WithdrawalSect = ({
  currentUser,
  setWidgetState,
  totalBonus,
  totalCapital,
  totalROI,
}) => {
  const [withdrawals, setWithdrawals] = useState([]);
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRefWith = collection(db, "withdrawals");
  const q3 = query(colRefWith, where("idnum", "==", currentUser?.idnum));

  onSnapshot(q3, (snapshot) => {
    let utilNotif = [];
    snapshot.docs.forEach((doc) => {
      utilNotif.push({ ...doc.data(), id: doc.id });
    });
    setWithdrawals(utilNotif);
  });

  return (
    <div className="widthdrawMainSect">
      <div className="topmostWithdraw">
        <h2>
          Teljes egyenleg:{" "}
          <span>
            €
            {`${(
              currentUser?.bonus +
              totalROI +
              totalCapital +
              totalBonus
            ).toLocaleString()}`}
          </span>
        </h2>
        <button
          type="button"
          onClick={() => {
            setWidgetState({
              state: true,
              type: "withdraw",
            });
          }}
        >
          Kattintson ide a pénzfelvételhez
        </button>
      </div>
      {withdrawals.length > 0 ? (
        <div className="historyTable">
          <div className="investmentTablehead header">
            <div className="unitheadsect">Sorszám</div>
            <div className="unitheadsect">Tranzakció azonosító</div>
            <div className="unitheadsect">Összeg</div>
            <div className="unitheadsect">Állapot</div>
            <div className="unitheadsect">Fizetési mód</div>
          </div>
          {withdrawals.map((elem, idx) => (
            <div
              className="investmentTablehead"
              key={`${elem.idnum}-wUser${idx}`}
            >
              <div className="unitheadsect">{idx + 1}</div>
              <div className="unitheadsect">{elem?.id}</div>
              <div className="unitheadsect">€{elem?.amount}</div>
              <div className="unitheadsect">
                <span
                  style={{
                    color: `${
                      elem?.status === "Pending" ? "#F9F871" : "#2DC194"
                    }`,
                  }}
                >
                  {elem?.status === "Pending" ? "Függőben" : "Teljesítve"}
                </span>
              </div>
              <div className="unitheadsect">{elem?.paymentOption}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="emptyTable">
          <i className="icofont-exclamation-tringle"></i>
          <p>
            Jelenleg nincs pénzfelvételi előzménye.{" "}
            <button
              onClick={() => {
                setWidgetState({
                  state: true,
                  type: "withdraw",
                });
              }}
            >
              Vegyen fel most
            </button>
          </p>
        </div>
      )}
      <div className="widthdrawalGuides">
        <h2>Pénzfelvételi Útmutató</h2>
        <div className="guides">
          <p>
            - Pénzfelvételi folyamatunkat úgy alakítottuk ki, hogy olyan egyszerű
            legyen, mint a befizetési folyamat. A pénzfelvétel megkezdéséhez
            először válassza ki a kívánt pénzfelvételi módot, majd írja be a
            felvenni kívánt összeget, és kattintson a &quot;Folytatás&quot;
            gombra.
          </p>
          <p>
            - Két (2) pénzfelvételi módot biztosítunk (Bitcoin, Banki átutalás).
          </p>
          <p>
            - Pénzfelvételi kérelmek bármikor benyújthatók ezen a weboldalon
            keresztül. A kérelmeket azonnal feldolgozzuk, az érintett pénzintézetek
            nyitvatartási ideje alatt.
          </p>
          <p>
            - A pénzfelvétel az aktuális számlaegyenleg összegéig lehetséges (A
            minimális pénzfelvételi összeg €200).
          </p>
          <p>
            - Pénzfelvételhez feldolgozási díjat kell fizetni, mielőtt a
            pénzfelvétel végrehajtható lenne.
          </p>
          <p>
            - A pénzfelvételi kérelmeket a lehető leggyorsabban kezeljük.
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default WithdrawalSect;
