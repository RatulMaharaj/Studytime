import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Apps from "../components/apps/Apps"
import SEO from "../components/seo"

function flashcards() {
  return (
    <div id="root">
      <SEO title="Apps" />
      <Header />
      <div className="content-wrapper">
        <Apps/>
      </div>
      <Footer />
    </div>
  )
}

export default flashcards
