import React from "react";
import CreatorImage from "../assets/images/creatorImage.svg";
import "../css/Creator.css";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const Creator = () => {
  return (
    <div className="container">
      <div className="row text-center ">
        <div className="col d-flex ">
          <div className="row my-auto mx-auto">
            <div className="col fw-bolder text-start">
              <span className="creator-text">Meet the Creator</span>
              <br />
              <br />
              <span className="fs-3 fw-semibold">
                Hello, I'm Vikash Pal.
                <br /> A passionate developer from
                <span className="india-1"> In</span>
                <span>d</span>
                <span className="india-3">ia</span>.
              </span>
              <div className="icon-container">
                <a href="https://github.com/viikash10">
                  <img src={github} alt="GitHub" className="icon " />
                </a>
                <a href="https://www.instagram.com/_vikash_.pal/">
                  <img src={instagram} alt="Instagram" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/vikash-pal-/">
                  <img src={linkedin} alt="LinkedIn" className="icon" />
                </a>
                <a href="https://twitter.com/imvikashpal">
                  <img src={twitter} alt="Twitter" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img src={CreatorImage} alt="CreatorImage"></img>
        </div>
      </div>
    </div>
  );
};

export default Creator;
