import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Coded by{" "}
        <a
          href="https://sandipdeb.vercel.app/"
          className="footer-link"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Sandip Deb
        </a>{" "}
        || using{" "}
        <a
          href="https://www.omdbapi.com/"
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="footer-link"
        >
          OMDB API
        </a>
        .
      </p>
      <a
        href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <BsLinkedin className="icon " />
      </a>
      <a
        href="https://github.com/SandipDeb05"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <BsGithub className="icon" />
      </a>
    </div>
  );
};

export default Footer;
