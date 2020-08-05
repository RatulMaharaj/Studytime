import React, { useState, useEffect } from "react"
import PropTypes, { string } from "prop-types"
import withLocation from "../withLocation"
import Card from "../utility/Card"
import "./Chapter.css"

function Chapters({ search }) {
  const { subject, app } = search
  const [chapterList, setChapterList] = useState({
    subject: "",
    chapters: [
      {
        id: 1,
        description: "",
      },
    ],
  })

  useEffect(() => {
    setChapterList(
      require(`../../../static/api/subjects/${subject}/contents.json`)
    )
  }, [subject])

  const [keysPressed, setKeysPressed] = useState({})

  const onKeydown = e => {
    keysPressed[e.key] = true
    const chapterNumber = Object.keys(keysPressed).join("")
    try {
      e.preventDefault()
      var chapterID = `chapter` + chapterNumber
      document.getElementById(chapterID).click()
    } catch (error) {
      console.log(error)
      // do nothing
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeydown)
    return () => {
      document.removeEventListener("keydown", onKeydown)
    }
  })

  return (
    <div className="Content">
      <div className="Intro">
        <h1>Chapters</h1>
        <p>Select the chapter you would like to study.</p>
      </div>
      <div className="Card-wrapper chapters">
        {chapterList.chapters.map(chapter => (
          <Card
            key={chapter.id}
            id={`chapter` + chapter.id}
            link={`/${app}?subject=${subject}&chapter=${chapter.id}`}
            heading={`Chapter ${chapter.id}`}
            description={`${chapter.description}`}
          />
        ))}
      </div>
    </div>
  )
}

Chapters.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Chapters)
