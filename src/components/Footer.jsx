import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Coded by{" "}
        <a
          href="https://sandipdeb.netlify.app/"
          className="footer-link"
          target={"_blank"}
        >
          Sandip Deb
        </a>{" "}
        || using{" "}
        <a
          href="https://www.omdbapi.com/"
          target={"_blank"}
          className="footer-link"
        >
          ODMB API
        </a>
        .
      </p>
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
