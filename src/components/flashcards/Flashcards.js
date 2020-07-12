import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useHotkeys } from "react-hotkeys-hook"
import Flashcard from "./Flashcard"
import FlashcardButtons from "./FlashcardButtons"
import withLocation from "../withLocation"
import "./Flashcards.css"

function Flashcards({search}) {
  const { subject, chapter } = search
  const [cardPack, setCardPack] = useState({
    pack: "Default Pack",
    cards: [
      {
        id: 1,
        question: "There are currently no questions available in this pack",
        answer: "There are currently no answers available in this pack",
      }
    ]
  })
  const [cardID, setCardID] = useState(0)
  const [isFlipped, setIsFlipped] = useState("")
  const [question, setQuestion] = useState(cardPack.cards[0].question)
  const [answer, setAnswer] = useState(cardPack.cards[0].answer)

  const handleFlip = e => {
    isFlipped === "" ? setIsFlipped("flipped") : setIsFlipped("")
  }

  const handlePrevious = e => {
    cardID - 1 < 0 ? setCardID(0) : setCardID(cardID - 1)
    setIsFlipped("")
  }

  const handleNext = e => {
    cardID + 1 >= cardPack.cards.length
      ? setCardID(cardPack.cards.length - 1)
      : setCardID(cardID + 1)
    setIsFlipped("")
  }

  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    try {
      setCardPack(require(`../../../static/api/subjects/${subject}/flashcards/${chapter}.json`))
    } catch (error) {
      console.log(error)
    }
    setIsTouch("ontouchstart" in window || navigator.msMaxTouchPoints > 0)
    setQuestion(cardPack.cards[cardID].question)
    setAnswer(cardPack.cards[cardID].answer)
  }, [cardPack, cardID, subject, chapter])

  useHotkeys("left", () => handlePrevious(), [cardID])
  useHotkeys("right", () => handleNext(), [cardID])
  useHotkeys(
    "space",
    e => {
      e.preventDefault()
      handleFlip()
    },
    [isFlipped]
  )

  return (
    <>
      <div className="Content">
        <div className="Intro">
          <h1>Flashcards</h1>
          {isTouch ? (
            <p>
              Double tap on the card to flip it over. Swipe to navigate between
              cards.
            </p>
          ) : (
            <p>
              Press the spacebar to flip the card over. Use the arrow keys to
              navigate between cards.
            </p>
          )}
        </div>
        <div className="flashcard-wrapper">
          <Flashcard
            cardID={cardID}
            cardTotal={cardPack.cards.length}
            isFlipped={isFlipped}
            question={question}
            answer={answer}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleFlip={handleFlip}
          />
          <FlashcardButtons
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleFlip={handleFlip}
          />
        </div>
      </div>
    </>
  )
}

Flashcards.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Flashcards)

