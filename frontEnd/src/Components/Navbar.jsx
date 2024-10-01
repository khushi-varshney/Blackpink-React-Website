/* eslint-disable react/jsx-no-duplicate-props */
import { NavLink, Link } from "react-router-dom";
import Image from "/blink.jpg";
import { FaHome } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { GiCard4Hearts } from "react-icons/gi";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = ({user, setLoginRegister}) => {
  const officialBP =
    "https://www.instagram.com/blackpinkofficial?igsh=MTN3Z3NmNHNrNTlibQ==";
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Top Global Icon",
    "Biggest Girl Group",
    "First Pick",
    "Successfull K-POP Group",
  ];
  const [text, setText] = useState("");
  const period = 700;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <div className=" bg-black">
      <div>
        <div className="flex items-center gap-9 bg-white text-black flex-row justify-between border-black border-2 ">
          <Link to={officialBP}>
            <img
              width={100}
              className="md:w-24 w-32"
              src="https://img.wattpad.com/71a2298b3b2f7ae46bbbbe81645f16fc580052c4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a755f4e6b683274594c53364d513d3d2d313032373139343434322e313636343563393937303164663637613831383836363834383532322e676966"
            />
          </Link>
          <p className="text-[3vw] md:text-xl pr-[1vw] font-extrabold tracking-wide">
            <NavLink to="https://www.blackpinkmusic.com">
              {`Blackpink In Your Area, The World's `}
              <span className="wrap">{text}</span>
            </NavLink>
          </p>
        </div>
      </div>

      <div
        className={
          color
            ? "flex items-center flex-col justify-between p-2 md:flex-row transition-[0.5s]"
            : "flex items-center flex-col justify-between p-2 md:flex-row"
        }
      >
        <div className="flex flex-row justify-between gap-[50vw] items-center ">
          <Link to="https://youtube.com/@blackpink?feature=shared">
            <img src={Image} className="pl-3" width={100} alt="logo-img" />
          </Link>
          <div className="md:hidden" onClick={handleClick}>
            {click ? (
              <TiThMenu size={25} style={{ color: "pink" }} />
            ) : (
              <ImCross size={25} style={{ color: "pink" }} />
            )}
          </div>
        </div>

        <div>
          <ul
            className={
              click
                ? "flex flex-col md:flex-row md:w-auto w-full h-[40vh] md:h-auto items-center pr-9 text-2xl font-bold justify-center p-1 text-pink-700 hidden"
                : "flex flex-col md:flex-row md:w-auto w-full h-[40vh] md:h-auto items-center pr-9 gap-7 text-2xl font-bold justify-center p-1 text-pink-700"
            }
          >
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive ? "purple" : "";
              }}
            >
              <li className="hover:text-pink-800 p-1 hover:text-[1.6rem] md:text-[1.5rem] text-[2rem] flex items-center justify-center gap-2">
                <FaHome /> Home
              </li>
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "purple" : "";
              }}
              to="/about"
            >
              <li className="hover:text-pink-800 p-1 hover:text-[1.6rem] md:text-[1.5rem] text-[2rem] flex items-center justify-center gap-2">
                <GiCard4Hearts /> About
              </li>
            </NavLink>
            {user ? <NavLink
              className={(e) => {
                return e.isActive ? "purple" : "";
              }}
              onClick={()=>setLoginRegister({})}
            >
              <li className="hover:text-pink-800 p-1 hover:text-[1.6rem] md:text-[1.5rem] text-[2rem] flex items-center justify-center gap-2">
                <GiCard4Hearts /> Logout
              </li>
              </NavLink> : ""
              }
            
            
            <NavLink
              className={(e) => {
                return e.isActive ? "purple" : "";
              }}
              to="/login"
            >
              <li className="hover:text-pink-800 p-1 hover:text-[1.6rem] md:text-[1.5rem] text-[2rem] flex items-center justify-center gap-2">
                <lord-icon
                  src="https://cdn.lordicon.com/bgebyztw.json"
                  trigger="hover"
                  colors="primary:#ee66aa,secondary:#e8308c"
                  state="hover-looking-around"
                  style={{width:"30px",height:"37px"}}
                ></lord-icon>
                {user ? user : "Login"}
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
