
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At APK FAMILY RESTAURANT we prioritize your dining experience above all else.
             We work closely with restaurants to ensure seamless service and uphold the highest standards of quality and reliability. Whether you're a food enthusiast, a social butterfly, or someone who simply appreciates good food,
             we're here to make your dining experience memorable.
            </p>
            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
