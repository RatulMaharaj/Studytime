import React, {useEffect} from "react"
import Header from "../components/Header"
import Subjects from "../components/subjects/Subjects"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function Index() {
  const onKeydown = e => {
    if(e.key === '1'){
      e.preventDefault()
      document.getElementById("RiskModels").click()
    } else if (e.key === '2'){
      e.preventDefault()
      document.getElementById("Contis").click()
    } else if (e.key === '3'){
      e.preventDefault()
      document.getElementById("Comms").click()
    }
    }
  useEffect(() => {
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
  })
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
