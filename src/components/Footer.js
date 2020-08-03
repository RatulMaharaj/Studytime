import React from "react";
import "./Footer.css";
import Logo from "./utility/Logo"

function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <div className="footer">
      <div className="Footer-content">
      <Logo/>
      <br/>
      <div>
      &copy; {year}
      </div>
      </div>
    </div>
  );
}

export default Footer;
