import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footerContainer">
      <footer>
        <p>© Postcards by Jiska de Waard</p>
        <p>
          See{" "}
          <a href="http://jiskadewaard.com/" target="_blank" rel="noreferrer">
            jiskadewaard.com{" "}
          </a>
          for more info
        </p>
      </footer>
    </div>
  );
}
