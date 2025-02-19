import { useState, useRef, useEffect, useContext } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { motion } from "framer-motion";
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../database/firebaseConfig';
import { getFirestore, collection, getDocs, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { themeContext } from '../../providers/ThemeProvider';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Signup = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const [verify, setVerify] = useState("Default");
    const inputRef = useRef(null);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { registerFromPath } = ctx;

    // Initialize Firebase
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, "userlogs");
    const colRefNotif = collection(db, "notifications");

    const currentDate = new Date();
    const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const [toLocaleStorage, setToLocalStorage] = useState({
        name: "",
        avatar: "",
        email: "",
        password: "",
        balance: 0,
        date: dateString,
        accountStatus: "No Active Plan",
        investmentCount: 0,
        referralCount: 0,
        admin: false,
        idnum: 101010,
        userName: "",
        bonus: 50,
        authStatus: "unseen",
        dateUpdated: new Date().toISOString()
    });

    const notificationPush = {
        message: "You just received €50 sign up bonus",
        dateTime: new Date().toISOString(),
        idnum: toLocaleStorage.idnum,
        status: "unseen"
    };

    const getSingleDoc = () => {
        const q = query(colRef, where("name", "==", `${toLocaleStorage.name}`));
        let books = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(), id: doc.id});
            });
            const activeUser = books?.find((elem) => elem.password === toLocaleStorage.password);
            if (activeUser) {
                sessionStorage.setItem("activeUser", JSON.stringify({...toLocaleStorage, password: "******", id: activeUser.id}));
            }
        });
    };

    function generatePassword() {
        const crypto = window.crypto;

        if (crypto) {
            let password = "";
            let characters = "0123456789";
            let charactersLength = characters.length;
            let array = new Uint8Array(8);
            crypto.getRandomValues(array);
            for (let i = 0; i < 8; i++) {
                password += characters.charAt(array[i] % charactersLength);
            }
            return password;
        } else {
            return "Error4070";
        }
    }

    useEffect(() => {
        const newId = generatePassword();
        if (newId !== "") {
            setToLocalStorage(prevState => ({ ...prevState, idnum: newId }));
        }

        getDocs(colRef).then((snapshot) => {
            let books = [];
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(), id: doc.id});
            });
            setUsers(books);
        }).catch(err => {
            console.log(err.message);
        });
    }, []);

  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const alreadyExist = users.find((elem) => elem.email === toLocaleStorage.email && elem.password === toLocaleStorage.password);
        
        if (alreadyExist) {
            setErrMsg("An account already exists with this email and password. Try logging in.");
            setTimeout(() => setErrMsg(""), 3500);
        } else {
            try {
                // Add notification
                await addDoc(colRefNotif, {...notificationPush});
                // Add user
                await addDoc(colRef, {...toLocaleStorage});
                // Fetch and set active user
                getSingleDoc();
                e.target.reset();
                setVerify("Default");
                // Redirect
                router.push(registerFromPath);
            } catch (error) {
                console.error('Error during signup:', error);
                setErrMsg("An error occurred while creating your account. Please try again.");
                setTimeout(() => setErrMsg(""), 3500);
            }
        }
    };

    const handleVerify = () => {
        if (verify === "Default") {
            setVerify("verifying");
            setTimeout(() => {
                setVerify("verified");
                inputRef.current.checked = true;
            }, 3000);
        } else {
            inputRef.current.checked = true;
        }
    }

    return (
        <div className='signupCntn'>
            <Head>
                <title>Regisztráljon</title>
                <meta property="og:title" content="Sign up"/>
            </Head>
            <div className="leftSide">
                <video src="signup_vid2.mp4" autoPlay loop muted></video>
                <div className="overlay">
                    <h2>&quot;Ha esik az arany eső, <br />tedd ki a vödröt, <br /> nem a gyűszűt.&quot;</h2>
                    <p><span>--</span>  Warren Buffett  <span>--</span></p>
                </div>
            </div>
            <div className="righside">
                <form onSubmit={handleSubmit}>
                    <Link href={"/"} className='topsignuplink'><img src="/xtbLogo.svg" alt="logo" /></Link>
                    <h1>Regisztráljon e-mailben</h1>
                    <div className="inputcontainer">
                        <div className="inputCntn">
                            <input 
                                onChange={(e) => setToLocalStorage(prevState => ({ ...prevState, email: e.target.value }))} 
                                type='email' 
                                name='email' 
                                placeholder='Email' 
                                required
                            />
                            <span><i className="icofont-ui-email"></i></span>
                        </div>
                        <div className="inputCntn">
                            <input 
                                onChange={(e) => setToLocalStorage(prevState => ({ ...prevState, name: e.target.value }))} 
                                type="text" 
                                name='name' 
                                placeholder='Teljes név' 
                                required
                            />
                            <span><i className="icofont-ui-user"></i></span>
                        </div>
                        <div className="passcntn">
                            <input 
                                onChange={(e) => setToLocalStorage(prevState => ({ ...prevState, password: e.target.value }))} 
                                type={`${passwordShow ? "text" : "password"}`} 
                                name='password' 
                                placeholder='Jelszó' 
                                required
                            />
                            <button type="button" onClick={() => setPasswordShow(prev => !prev)}>
                                <i className={`icofont-eye-${!passwordShow ? "alt" : "blocked"}`}></i>
                            </button>
                        </div>

                        <div className="_cloudflr_verifcation_widget">
                            <div className="verification_Box">
                                <div className="checkbox_cntn" onClick={handleVerify}>
                                    <input ref={inputRef} type="checkbox" required/>
                                    {verify === "Default" && (<span aria-hidden="true" className="unchecked"></span>)}
                                    {verify === "verifying" && (<i aria-hidden="true" className="icofont-spinner-alt-2"></i>)}
                                    {verify === "verified" && (<i aria-hidden="true" className="icofont-check-circled"></i>)}
                                </div>
                                <div className="verification_status">
                                    {verify === "Default" && (<p>Emberi ellenőrzés</p>)}
                                    {verify === "verifying" && (<p>Ellenőrzés...</p>)}
                                    {verify === "verified" && (<p>Ellenőrzött</p>)}
                                </div>
                            </div>
                            <div className="service_provider">
                                <p>által védett <img src="/cloudflare.png" alt="cloudflare" /></p>
                            </div>
                        </div>
                        {errMsg && <p className='errorMsg'>{errMsg}</p>}
                        <label className="form-control2">
                            <input type="checkbox" name="checkbox" required/>Egyetértek minden feltétellel és
                            nemzetközi adománygyűjtés feltételei.
                        </label>

                        <button type="submit" className='fancyBtn'>Hozzon létre egy fiókot</button>
                    </div>
                    <p className='haveanaccount'>Van fiókja? <Link href={"/signin"}>Jelentkezzen be</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;