import React from "react"
import PropTypes from "prop-types"
import withLocation from "../withLocation"
import Card from "../utility/Card"
import { GiCardRandom, GiPencil, GiTimeTrap } from "react-icons/gi"
import "../subjects/Subjects.css"

const App = ({ search }) => {
  const { subject, learn, practice, test } = search

  return (
    <div className="content-wrapper">
      <div className="Content">
        <div className="Intro">
          <h1>Exam Preparation</h1>
          <p>Choose from one of the available apps.</p>
        </div>
        <div className="Card-wrapper">
          <Card
            link={learn==='0' ? `#` : `/chapters?app=flashcards&subject=${subject}`}
            active={learn==='0' ? false : true}
            icon={<GiCardRandom className="icon" />}
            heading="Flashcards"
            id="FlashcardApp"
            tags={["learn"]}
            description="Master your content using flashcards."
          />
          <Card
            link={practice==='0' ? "#" : "/"}
            active={practice==='0' ? false : true}
            icon={<GiPencil className="icon" />}
            heading="Past Exam Questions"
            id="PastExamQuestions"
            tags={["Practice"]}
            description="Practice your skills with past exam questions."
          />
          <Card
            link={test==='0' ? "#" : "/"}
            active={test==='0' ? false : true}
            icon={<GiTimeTrap className="icon" />}
            heading="Quiz"
            id="Quiz"
            tags={["Test"]}
            description="See how you fair under time pressure."
          />
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  search: PropTypes.object,
}

export default withLocation(App)
