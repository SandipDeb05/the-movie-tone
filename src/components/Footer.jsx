import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Coded by Sandip Deb </p>
      <a
        href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
        target={"_blank"}
      >
        <BsLinkedin className="icon " />
      </a>
      <a href="https://github.com/SandipDeb05" target={"_blank"}>
        <BsGithub className="icon" />
      </a>
    </div>
  );
};

export default Footer;
