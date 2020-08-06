import React from "react"
import { Link } from "gatsby"
import { MdKeyboard, MdPerson } from "react-icons/md"
import Logo from "./utility/Logo"
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link id="LogoHome" to="/">
          <Logo />
        </Link>
      </div>
      <div className="Admin">
      <div className="login">
        <MdPerson/>
      </div>
        <div className="hotkeys">
          <MdKeyboard />
          <div className="hotkeylist">
            <div className="hotkey-item">
              <div className="hotkey-title">Home</div>
              <div className="hotkey-key">H</div>
            </div>
            <div className="hotkey-item">
              <div className="hotkey-title">Go Back</div>
              <div className="hotkey-key">Esc</div>
            </div>
            <div className="hotkey-item">
              <div className="hotkey-title">Next Card</div>
              <div className="hotkey-key">&#8594;</div>
            </div>
            <div className="hotkey-item">
              <div className="hotkey-title">Previous Card</div>
              <div className="hotkey-key">&#8592;</div>
            </div>
            <div className="hotkey-item">
              <div className="hotkey-title">Flip Card</div>
              <div className="hotkey-key">Space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
