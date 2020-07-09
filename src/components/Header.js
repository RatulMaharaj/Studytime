import React from "react"
import { Link } from "gatsby"
import Logo from "./utility/Logo"
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="Admin">
        <button className="btn-purple">Login</button>
        <button className="btn-purple">Sign Up</button>
      </div>
    </div>
  )
}

export default Header
