import React, {useEffect} from "react"
import Header from "../components/Header"
import Apps from "../components/apps/Apps"
import SEO from "../components/seo"

function AppPage() {
  const onKeydown = e => {
    if(e.key === "h" || e.key === "H" ){
      e.preventDefault()
      document.getElementById("LogoHome").click()
    } else if (e.key === 'Escape'){
      e.preventDefault()
      window.history.back()
    } else if (e.key === '1'){
      e.preventDefault()
      document.getElementById("FlashcardApp").click()
    } else if (e.key === '2'){
      e.preventDefault()
      document.getElementById("PastExamQuestions").click()
    } else if (e.key === '3'){
      e.preventDefault()
      document.getElementById("Quiz").click()
    }
    }
  useEffect(() => {
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
  })
  
  return (
    <div id="root">
      <SEO title="Apps" />
      <Header />
      <div className="content-wrapper">
        <Apps/>
      </div>
    </div>
  )
}

export default AppPage
