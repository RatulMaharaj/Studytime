import React, {useEffect} from "react"
import Header from "../components/Header"
import Flashcards from "../components/flashcards/Flashcards"
import SEO from "../components/seo"

function FlashcardsPage() {
  const onKeydown = e => {
    console.log(e)
    if(e.key === " "){
      e.preventDefault()
      document.getElementById("Flip").click()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      document.getElementById("BackButton").click()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      document.getElementById("NextButton").click()
    } else if (e.key === "h" || e.key === "H") {
      e.preventDefault()
      document.getElementById('LogoHome').click()
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
      <SEO title="Flashcards" />
      <Header />
      <div className="content-wrapper">
        <Flashcards />
      </div>
    </div>
  )
}

export default FlashcardsPage
