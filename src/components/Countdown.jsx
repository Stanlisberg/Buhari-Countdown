import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";

function Countdown() {
  const [year, setYear] = useState("0");
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("0");
  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");
  const [second, setSecond] = useState("0");

  // State for display message and menu-box
  const [data, setData] = useState("");
  const [menu, setMenu] = useState();

  // Refs
  const wrapRef = useRef();
  const homeRef = useRef();
  const menuRef = useRef();
  const moonRef = useRef();
  const imageRef = useRef();
  const displayRef = useRef();
  const footRef = useRef();
  const countRef = useRef(0);
  const msgRef = useRef(0);
  const infoRef = useRef()

  // Setting varables for the year, month, day, hour, minute, and second
  const myYear = "Year";
  const myDay = "Day";
  const myMonth = "Month";
  const myHour = "Hour";
  const myMinute = "Minute";
  const mySecond = "Second";
  // footer current year
  // const thisYear = new Date().getFullYear();

  const countdownTimer = () => {
    const countDate = new Date("May 23, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    // console.log(diff);

    // evaluating the parameters
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    // Evaluating the values
    const textYear = Math.floor(diff / year);
    const textMonth = Math.floor((diff % year) / month);
    const textDay = Math.floor((diff % month) / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);

    if (diff == 0) {
      clearInterval(countdownTimer().current);
    } else {
      setYear(textYear);
      setMonth(textMonth);
      setDay(textDay);
      setHour(textHour);
      setMinute(textMinute);
      setSecond(textSecond);
    }
  };

  // validating the message in the dom
  const myArray = ["I", "Can't", "Fu*ki~g", "Waaaaaaaaaaaait!!!"];
  let doThis = () => {
    setData(myArray[msgRef.current]);
    msgRef.current = msgRef.current + 1;

    if (msgRef.current == myArray.length) {
      msgRef.current = 0;
    }
  };

  // Manipulating the colors in the dom
  const colorArray = ["whitesmoke", "#282c34"];
  const body = document.querySelector("body");
  function changeColor() {
    body.style.backgroundColor = colorArray[countRef.current];
    countRef.current = countRef.current + 1;
    if (countRef.current == colorArray.length) {
      countRef.current = 0;
    }

    if (body.style.backgroundColor == "whitesmoke") {
      wrapRef.current.style.color = "#282c34";
      footRef.current.style.color = "#282c34";
      menuRef.current.style.color = "#282c34";
      homeRef.current.style.color = "#282c34";
      moonRef.current.style.color = "#282c34";
      imageRef.current.style.borderColor = "#282c34";
      displayRef.current.style.color = "#282c34";
      infoRef.current.style.color = "#282c34";
    } else {
      wrapRef.current.style.color = "grey";
      footRef.current.style.color = "grey";
      menuRef.current.style.color = "grey";
      homeRef.current.style.color = "grey";
      moonRef.current.style.color = "grey";
      infoRef.current.style.color = "grey";
      imageRef.current.style.borderColor = "grey";
      displayRef.current.style.color = "tan";
    }
  }
  // setInterval(countdownTimer, 1000);

  const homePage = () => {
    alert('Holla Comrade, I tricked you... hehehehehe! click "ok" to go back. #Okaybye.');
  };
  const menuBox = () => {
    setMenu("Html. Css. React.");
  };

  const deleteIcon = () => {
    setMenu('')
    
  };

  // effect for the message in the dom and the countdown timer
  useEffect(() => {
    setInterval(doThis, 900);
    setInterval(countdownTimer, 1000);
  }, []);


  return (
    <>
      <img ref={imageRef} className="image" src="/images/buhari.jpg" alt=""/>
      <button
        ref={moonRef}
        type="submit"
        style={{
          color: "grey",
          fontSize: "27px",
          position: "absolute",
          top: "18px",
          right: "24px",
          background: "none",
          border: "1px dashed grey",
          borderRadius: "25px",
          padding: "4px",
        }}
        onClick={() => changeColor()}
        id="my-button1"
      >
        <HiMoon />
      </button>
      <button
        ref={homeRef}
        style={{
          color: "grey",
          fontSize: "27px",
          position: "absolute",
          top: "18px",
          right: "67px",
          background: "none",
          border: "1px dashed grey",
          borderRadius: "25px",
          padding: "4px",
        }}
        onClick={() => homePage()}
        id="my-button2"
      >
        <FaHome />
      </button>
      <button
        ref={menuRef}
        style={{
          color: "grey",
          fontSize: "27px",
          position: "absolute",
          top: "18px",
          right: "110px",
          background: "none",
          border: "1px dashed grey",
          borderRadius: "25px",
          padding: "4px",
        }}
        id="my-button3"
        onClick={() => menuBox()}
      >
        <HiMenuAlt3 />
      </button>
      {menu ? (
        <>
        <div ref={infoRef}
          className='menu'> {menu}
        </div>
        <button onClick={() => deleteIcon()} className="delete-me"><MdOutlineClear size={17} />
        </button> 
        </>
      ) : (
        '' 
      )}   
      <div className="container">
        <div className="wrapper" ref={wrapRef}>
          <h1 className="heading">Buhari's Tenure Will Be Over in:</h1>
          <div className="countdown">
            <div className="time-container">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="year-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {year < 10 ? `0${year}` : year}
                  </div>
                </div>
              </span>
              <span className="my-year">
                {year == 1 ? myYear : `${myYear}s`}
              </span>
            </div>
            <div className="time-container">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="month-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {month < 10 ? `0${month}` : month}
                  </div>
                </div>
              </span>
              <span className="my-month">
                {month == 1 ? myMonth : `${myMonth}s`}
              </span>
            </div>
            <div className="time-container">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="day-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {day < 10 ? `0${day}` : day}
                  </div>
                </div>
              </span>
              <span className="my-day">{day == 1 ? myDay : `${myDay}s`}</span>
            </div>
            <div className="time-container">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="hour-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {hour < 10 ? `0${hour}` : hour}
                  </div>
                </div>
              </span>
              <span className="my-hour">
                {hour == 1 ? myHour : `${myHour}s`}
              </span>
            </div>
            <div className="time-container">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="minute-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {minute < 10 ? `0${minute}` : minute}
                  </div>
                </div>
              </span>
              <span className="my-minute">
                {minute === 1 ? myMinute : `${myMinute}s`}
              </span>
            </div>
            <div className="time-container ">
              <span
                className="first-text time"
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "normal",
                  height: "100%",
                }}
              >
                <span className="placeholder">00</span>
                <div className="second-text" style={{ overFlow: "hidden" }}>
                  <div
                    className="second-timer"
                    style={{ opacity: "1", top: "0%" }}
                  >
                    {second < 10 ? `0${second}` : second}
                  </div>
                </div>
              </span>
              <span className="my-second">
                {second == 1 ? mySecond : `${mySecond}s`}
              </span>
            </div>
          </div>
          <p
            className="display"
            ref={displayRef}
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "tan",
            }}
          >
            {data}
          </p>
          <table>
            <thead>
              <tr>
                <td className="first">&#x1f60f;</td>
                <td className="second">&#x1f60f;</td>
                <td className="third">&#x1f60f;</td>
              </tr>
            </thead>
          </table>
          <footer
            ref={footRef}
            className="footer"
            style={{
              fontSize: "18px",
              color: "grey",
              display: "flex",
              flexDirection: "row",
              border: "1px dashed grey",
              marginTop: "35px",
              padding: "2px 15px",
              borderRadius: "10px",
            }}
          >
            <p>
              Crafted with <span id="span">&#x2764;</span> & <span id="span">&#x1f4a1;</span> by
              <a href="http://twitter.com/bubuTheCoder" target="_blank"> Stanlisberg
              </a>
            </p>
          </footer>
        </div>
      </div>
      {/* <Google /> */}
    </>
  );
}
export default Countdown;
