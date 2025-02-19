import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, deleteDoc, query, where, collection, onSnapshot } from "firebase/firestore";
import { useRouter } from 'next/router';


const DynamicWidget = ({widgetState, setWidgetState, currentUser, setCurrentUser, investData, setInvestData, setProfileState, withdrawData, setWithdrawData, totalBonus, totalCapital, totaROI}) => {
    const [investments, setInvestments] = useState([]);

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const router = useRouter();
    const handlewidgetClose = () => {
        setWidgetState({...widgetState, state: false});
    };

    const colRef = collection(db, "investments");

    const getSingleDoc = () => {
        const q = query(colRef, where("idnum", "==", currentUser?.idnum));
    
        let books = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(), id: doc.id})
            });
            setInvestments(books);
        });
    }

    const handleProceed = (e) => {
        e.preventDefault();
        handlewidgetClose();
        setProfileState("Payments");
    };

    const handleProceedWithdraw = (e) => {
        e.preventDefault();
        handlewidgetClose();
        setProfileState("Withdrawal Payment");
    };

    useEffect(() => {
        getSingleDoc();
    }, []);

    const handleAccoutDelete = () => {
        const docRef = doc(db, "userlogs", currentUser?.id);
        deleteDoc(docRef).then(() => {
            router.push("/signup");
        })
    }

    return (
        <div className="absoluteDynamicWidget">
            {
                widgetState.type === "avatar" && (
                    <div className="avatarSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <h2>Válassza az Avatar lehetőséget</h2>
                        <div className="avatars">
                            <button className="unitAvatar" onClick={() => {setCurrentUser({...currentUser, avatar: "avatar_1"})}}><span></span></button>
                            <button className="unitAvatar" onClick={() => {setCurrentUser({...currentUser, avatar: "avatar_2"})}}><span></span></button>
                        </div>
                        <button type="button" onClick={handlewidgetClose}>Select</button>
                    </div>

                )
            } 
            {
                widgetState.type === "invest" && (
                    <div className="avatarSection investwidgetSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <h2>Beruházás kezdeményezése</h2>
                        <p>Befektetni készül a <span>{investData?.plan}</span> csomag, amely egy ideig tart <span>{investData?.duration} napokon</span></p>
                        <div className="investMinmax">
                            {
                                investData?.plan === "Silver" ? "Min. Capital: EUR 100 | Max. Capital: EUR 900" : investData?.plan === "Gold" ? "Min. Capital: EUR 1000 | Max. Capital: EUR 9000" : "Min. Capital: EUR 10,000 | Max. Capital: EUR 100,000"
                            }
                            
                        </div>
                        <form className='widgetInvestForm' onSubmit={handleProceed}>
  <div className="unitInputField">
    <label htmlFor="name">Befektetendő összeg</label>
    <input
      type="text"
      required
      value={investData?.capital}
      onChange={(e) => {
        setInvestData({
          ...investData,
          capital: parseInt(e.target.value !== "" ? e.target.value : "0"),
        });
      }}
    />
  </div>
  <div className="unitInputField">
    <label htmlFor="name">Befektetési Terv</label>
    <select
      required
      value={investData?.plan}
      onChange={(e) => {
        setInvestData({ ...investData, plan: e.target.value });
      }}
    >
      <option value="Silver">Ezüst</option>
      <option value="Gold">Arany</option>
      <option value="Diamond">Gyémánt</option>
    </select>
  </div>
  <div className="unitInputField">
    <label htmlFor="name">Fizetési Opció</label>
    <select
      required
      value={investData?.paymentOption}
      onChange={(e) => {
        setInvestData({ ...investData, paymentOption: e.target.value });
      }}
    >
      <option value="Bitcoin">Bitcoin</option>
      <option value="Bank Transfer">Banki Átutalás</option>
    </select>
  </div>
  <div className="bottomBtnCntn">
    <button type="submit">Folytatás</button>
    <button type='button' onClick={handlewidgetClose}>Mégse</button>
  </div>
</form>

                    </div>
                )
            }
{
    widgetState.type === "withdraw" && totalCapital >= 100 && (
        <div className="avatarSection investwidgetSection">
            <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
            <h2>Kivonás Kezdése</h2>
            <p>Ön éppen <span>€{withdrawData?.amount}</span>-t von ki a számlájáról.</p>
            <div className="investMinmax">
                {
                   "Minimálisan kivehető összeg: EUR 200"
                }
            </div>
            <form className='widgetInvestForm' onSubmit={handleProceedWithdraw}>
                <div className="unitInputField">
                    <label htmlFor="name">Kivonni kívánt összeg</label>
                    <input type="text" required value={withdrawData?.amount} onChange={(e) => {setWithdrawData({...withdrawData, amount: parseInt(e.target.value !== ""? e.target.value : "0")})}}/>
                </div>
                <div className="unitInputField">
                    <label htmlFor="name">Fizetési lehetőség</label>
                    <select required value={withdrawData?.paymentOption} onChange={(e) => {setWithdrawData({...withdrawData, paymentOption: e.target.value})}}>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Bank Transfer">Banki átutalás</option>
                    </select>
                </div>
                <div className="unitInputField">
                    <label htmlFor="name">Tárca címe/Bankszámlaszám</label>
                    <input type="text" required value={withdrawData?.address} onChange={(e) => {setWithdrawData({...withdrawData, address: e.target.value})}}/>
                </div>
                <div className="bottomBtnCntn">
                    <button type="submit">Tovább</button>
                    <button type='button' onClick={handlewidgetClose}>Mégse</button>
                </div>
            </form>
        </div>
    )
}

{
    widgetState.type === "withdraw" && totalCapital < 100 && (
        <div className="avatarSection emptySesction">
            <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>

            <h2>Az egyenlege jelenleg nem elegendő a kifizetéshez. Kérjük, fektessen be, vagy hajtson végre befizetést.</h2>
        </div>
    )
}

{
    widgetState.type === "delete" && totalCapital < 100 && (
        <div className="avatarSection investwidgetSection">
            <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
            <i className="icofont-exclamation-tringle" style={{fontSize:"4em",color: "#DC1262"}}></i>
            <h2>Biztos, hogy törölni szeretné ezt a fiókot?</h2>
            <div className="bottomBtnCntn">
                <button type="submit" onClick={handleAccoutDelete}>Tovább</button>
                <button type='button' onClick={handlewidgetClose}>Mégse</button>
            </div>
        </div>
    )
}

        </div>
    );
}

export default DynamicWidget