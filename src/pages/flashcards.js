import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Flashcards from "../components/flashcards/Flashcards"
import SEO from "../components/seo"

function flashcards() {
  return (
    <div id="root">
      <SEO title="Flashcards" />
      <Header />
      <div className="content-wrapper">
        <Flashcards />
      </div>
      <Footer />
    </div>
  )
}

export default flashcards
