const InvestmentSect = ({
  setWidgetState,
  setInvestData,
  currentUser,
  investments,
}) => {
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
    <h2>Befektetések Története</h2>
    {investments.length > 0 ? (
      <div className="historyTable">
        <div className="investmentTablehead header">
          <div className="unitheadsect">S/N</div>
          <div className="unitheadsect">Terv</div>
          <div className="unitheadsect">Tőke</div>
          <div className="unitheadsect">Állapot</div>
          <div className="unitheadsect">Eltelt napok</div>
          <div className="unitheadsect">Hátralévő napok</div>
        </div>
        {investments
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            return dateB - dateA;
          })
          .map((elem, idx) => (
            <div
              className="investmentTablehead"
              key={`${elem.id}-userDash_€{idx}`}
            >
              <div className="unitheadsect">{idx + 1}</div>
              <div className="unitheadsect">{elem?.plan}</div>
              <div className="unitheadsect">
                €{elem?.capital.toLocaleString()}
              </div>
              <div className="unitheadsect">
                <span
                  style={{
                    color: `${
                      elem?.status === "Pending"
                        ? "#F9F871"
                        : elem?.status === "Expired"
                        ? "#DC1262"
                        : "#2DC194"
                    }`,
                  }}
                >
                  {elem?.status}
                </span>
              </div>
              <div className="unitheadsect">
                {elem?.status === "Pending"
                  ? "0"
                  : elem?.status === "Expired"
                  ? "0"
                  : `${
                      Math.floor(
                        (new Date(dateString) - new Date(elem?.date)) /
                          (1000 * 60 * 60 * 24)
                      ) + 1
                    }`}
              </div>
              <div className="unitheadsect">
                {elem?.status === "Pending"
                  ? `${elem?.duration}`
                  : elem?.status === "Expired"
                  ? "0"
                  : `${
                      elem?.duration -
                      (Math.floor(
                        (new Date(dateString) - new Date(elem?.date)) /
                          (1000 * 60 * 60 * 24)
                      ) +
                        1)
                    }`}
              </div>
            </div>
          ))}
      </div>
    ) : (
      <div className="emptyTable">
        <i className="icofont-exclamation-tringle"></i>
        <p>
          A befektetési előzményei jelenleg üresek.{" "}
          <a href="#Offers">Fektessen be most</a>
        </p>
      </div>
    )}
    <section className="Offers" id="Offers">
      <h2>Elérhető Ajánlataink</h2>
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
              <span>5X bónusz a befektetésen</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>Kapjon ROI-t és bónuszt 24 órán belül</span>
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
              <i className="icofont-tick-mark"></i> <span>5X ROI</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>10X bónusz a befektetésen</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>Kapjon ROI-t és bónuszt 7 nap alatt</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>15 digitális pénzügyi erőforrás elérése</span>
            </li>
          </ul>
          <button
            className="fancyBtn"
            onClick={() => {
              investProcess("Diamond", 10000, 7);
            }}
          >
            Gazdagodjon meg
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
              <span>8X bónusz a befektetésen</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>Kapjon ROI-t és bónuszt 4 nap alatt</span>
            </li>
            <li>
              <i className="icofont-tick-mark"></i>{" "}
              <span>5 digitális pénzügyi erőforrás elérése</span>
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

export default InvestmentSect;
