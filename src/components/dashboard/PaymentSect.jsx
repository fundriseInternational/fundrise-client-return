import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const PaymentSect = ({ setProfileState, investData }) => {
  const [copystate, setCopystate] = useState("Copy");

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRef = collection(db, "investments");

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
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };

  const handleTransacConfirmation = () => {
    addDoc(colRef, {
      ...investData,
      bonus:
        investData.plan === "Silver"
          ? investData.capital * 5
          : investData.plan === "Gold"
          ? investData.capital * 8
          : investData.capital * 10,
    });
    setProfileState("Investments");
  };

  return (
    <div className="paymentSect">
      <h2>Fizetés megerősítése</h2>
      <div className="mainPaymentSect">
        <h3>
          Innen a tranzakció a pénzügyi osztállyal folytatódik, akik lépésről
          lépésre végigvezetik Önt egy stresszmentes tranzakció lebonyolításában.
          Küldjön pontosan <span>€{investData.capital.toLocaleString()}</span>{" "}
          az Ön számára megadott bankszámlára vagy címre.
        </h3>
        <p>
          ***********************{" "}
          <span
            onClick={() => {
              copyToClipboard();
            }}
          >
            {copystate} <i className="icofont-ui-copy"></i>
          </span>
        </p>
      </div>
      <p>
        Erősítse meg a tranzakciót, miután az összeget átutalta, miközben
        befejezzük a folyamatot. Ez néhány perctől több óráig is eltarthat.
      </p>
      <p>
        A cég <strong>Bankszámlaszáma</strong> és <strong>Tárcacíme</strong>{" "}
        biztonsági okokból nem kerül itt nyilvános megjelenítésre.{" "}
        <strong>KÉRJÜK, KATTINTSON AZ ALÁBBI PÉNZÜGYI OSZTÁLY GOMBRA</strong>{" "}
        a tranzakció folytatásához, köszönjük.
      </p>
      <button
        className="financeBtn"
        onClick={() => {
          window.open("https://wa.me/36306154461", "_blank");
        }}
      >
        Pénzügyi osztály
      </button>
      <button type="button" onClick={handleTransacConfirmation}>
        Tranzakció megerősítése
      </button>
    </div>
  );
  
};

export default PaymentSect;
