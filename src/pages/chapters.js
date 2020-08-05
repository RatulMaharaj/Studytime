import React, { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Chapters from "../components/chapters/Chapters"
import SEO from "../components/seo"

function ChapterPage() {
  const onKeydown = e => {
    if (e.key === "h" || e.key === "H") {
      e.preventDefault()
      document.getElementById("LogoHome").click()
    } else if (e.key === "Escape") {
      e.preventDefault()
      window.history.back()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
  })

  return (
    <div id="root">
      <SEO title="Chapters" />
      <Header />
      <div className="content-wrapper">
        <Chapters hello="0" />
      </div>
      <Footer />
    </div>
  )
}

export default ChapterPage