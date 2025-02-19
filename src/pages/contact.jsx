import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import Footer from "../components/home/Footer";
import Head from "next/head";

const Contact = () => {
  const [showsidecard, setShowsideCard] = useState(false);
  const [showDisplayCard, setshowDisplayCard] = useState(false);
  const form = useRef(null);

  const handleGrandMovementTraffic = (e) => {
    if (e.target.className === "profileIcon") {
      setshowDisplayCard((prev) => !prev);
    } else {
      setshowDisplayCard(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_s5g7n1x`,
        "template_9bk22el",
        form.current,
        "W0tSQpqgPaa8k339b"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Üzenetét sikeresen elküldtük");
        },
        (error) => {
          console.log(error.text);
          form.current.reset();
          alert("Hiba történt az üzenet elküldése közben");
        }
      );
  };

  return (
    <div
      className="HomefirstPageCtn conatctMain"
      onClick={handleGrandMovementTraffic}
    >
      <Head>
        <title>Kapcsolat</title>
        <meta property="og:title" content="Kapcsolat" />
      </Head>
      <Navbar
        showsidecard={showsidecard}
        setShowsideCard={setShowsideCard}
        shownavOptions={false}
        showDisplayCard={showDisplayCard}
      />
      <section className="sect1">
        <h1>Miben segíthetünk?</h1>
      </section>
      <div className="preSect">
        <Link href={"/"}>Főoldal</Link>
        <span>
          <i className="icofont-rounded-right"></i>
        </span>
        <p>Kapcsolat</p>
      </div>
      <div className="contactFormCntn">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputFields">
            <input type="text" name="user_name" placeholder="Keresztnév" />
            <input type="text" placeholder="Vezetéknév" />
            <input type="text" name="user_email" placeholder="Email" />
            <input type="text" placeholder="Tárgy" />
          </div>
          <textarea
            cols="30"
            rows="10"
            name="message"
            className="textarea"
            placeholder="Üzenet"
          ></textarea>
          <button type="submit" className="borderBtn">
            Üzenet küldése
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
  
};

export default Contact;
