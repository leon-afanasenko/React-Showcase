import React from "react";
import "./HelpSection.css";

const microsoftLogo = "/img/Group 2.svg";
const disneyLogo = "/img/Group.svg";
const facebookLogo = "/img/Mask group.svg";
const twitterLogo = "/img/Vectors.svg";
const googleLogo = "/img/Vector copy.svg";

const HelpSection = () => {
  return (
    <div className="help-section">
      <div className="help-text">
        <h2>Помогаем найти работу</h2>
        <a
          href="https://de.linkedin.com/?src=go-pa&trk=sem-ga_campid.17342682713_asid.148803897556_crid.657308124615_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9042937&mcid=6935667189886640128&cid=&gad_source=1&gbraid=0AAAAAojDCNTURqcSKn3CghS7Gx22uQlAl&gclid=Cj0KCQjwlIG2BhC4ARIsADBgpVQijL052xILZJjJVPBiRlAqlU74tjTWFQTbMZQI-VfOQK00qEzLOSEaArqxEALw_wcB&gclsrc=aw.ds"
          className="link-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Узнать больше
        </a>
      </div>
      <div className="help-icons">
        <a href="#" aria-label="Facebook">
          <img src={facebookLogo} alt="Facebook" className="icon" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterLogo} alt="Twitter" className="icon" />
        </a>
        <a href="#" aria-label="Google">
          <img src={googleLogo} alt="Google" className="icon" />
        </a>
        <a href="#" aria-label="Microsoft">
          <img src={microsoftLogo} alt="Microsoft" className="icon" />
        </a>
        <a href="#" aria-label="Disney">
          <img src={disneyLogo} alt="Disney" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default HelpSection;
