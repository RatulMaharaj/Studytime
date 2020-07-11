import React from "react"
import PropTypes from "prop-types"
import withLocation from "../withLocation"
import Card from "../utility/Card"
import "./Chapter.css"

const Chapters = ({ search }) => {
  const { subject, app } = search
  const chapter_list = require(`../../../api/subjects/${subject}/contents.json`)
  return (
    <div className="Content">
      <div className="Intro">
        <h1>Chapters</h1>
        <p>Select the chapter you would like to study.</p>
      </div>
      <div className="Card-wrapper chapters">
      {chapter_list.chapters.map(chapter => (
        <Card
          key={chapter.id}
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
