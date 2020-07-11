import React from "react"
import Header from "../components/Header"
import Subjects from "../components/subjects/Subjects"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function Index() {
  return (
    <div id="root">
      <SEO title="Home" />
      <Header />
      <div className="content-wrapper">
        <Subjects />
      </div>
      <Footer />
    </div>
  )
}

export default Index
