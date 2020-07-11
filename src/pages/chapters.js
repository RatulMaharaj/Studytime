import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Chapters from "../components/chapters/Chapters"
import SEO from "../components/seo"

function chapters() {
  return (
    <div id="root">
      <SEO title="Chapters" />
      <Header />
      <div className="content-wrapper">
        <Chapters hello='0' />
      </div>
      <Footer />
    </div>
  )
}

export default chapters