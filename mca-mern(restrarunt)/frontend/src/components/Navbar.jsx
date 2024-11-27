import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "./Login";
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const login =(e)=>{
    e.preventDefault();
    navigate("/login");
  }
  return (
    <>
      <nav>
        <div className="logo">APK FAMILY RESTAURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={login}>LOGIN</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
