import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const WithdrawalPayment = ({
  setProfileState,
  withdrawData,

  currentUser,
}) => {
  const [copystate, setCopystate] = useState("Copy");

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "withdrawals");

  const removeErr = () => {
    setTimeout(() => {
      setCopystate("Copy");
    }, 2500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopystate("Copied");
        removeErr();
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

const handleTransacConfirmation = () => {
  addDoc(colRef, {
    ...withdrawData,
    date: new Date().toISOString(),
    widthrawalFee: `${Number(withdrawData?.amount / 10 )} €`,
    idnum: currentUser?.idnum,
  });
  setProfileState("Withdrawals");
};

return (
  <div className="paymentSect">
    <h2>Fizetés Megerősítése</h2>
    <div className="mainPaymentSect">
      <h3>
        Innen a tranzakció a pénzügyi osztályon folytatódik, akik lépésről
        lépésre végigvezetnek a stresszmentes tranzakció érdekében. Küldjön
        pontosan{" "}
        <span>
          {`${Number(withdrawData?.amount / 10)} €`}
        </span>{" "}
        az Ön számára megadott bankszámlára vagy címre.
      </h3>
      <p>
        ********************************************
        <span
          onClick={() => {
            copyToClipboard("");
          }}
        >
          {copystate} <i className="icofont-ui-copy"></i>
        </span>
      </p>
    </div>
    <p>
      Erősítse meg a tranzakciót, miután az összeget átutalták, miközben mi
      befejezzük a folyamatot. Ez néhány perctől több óráig is eltarthat.
    </p>
    <p>
      A cég <strong>Bankszámlaszáma </strong> és <strong>Tárca Címe</strong> biztonsági
      okokból nem kerül nyilvánosságra.{" "}
      <strong>
        KÉRJÜK, KATTINTSON AZ ALÁBBI PÉNZÜGYI OSZTÁLY GOMBRA
      </strong>{" "}
      a tranzakció folytatásához. Köszönjük.
    </p>
    <button
      className="financeBtn"
      onClick={() => {
        window.open("https://wa.me/36306154461", "_blank");
      }}
    >
      Pénzügyi Osztály
    </button>
    <button type="button" onClick={handleTransacConfirmation}>
      Tranzakció Megerősítése
    </button>
  </div>
);


};

export default WithdrawalPayment;
