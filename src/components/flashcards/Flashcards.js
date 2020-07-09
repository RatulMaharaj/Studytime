import React, { useState, useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { Swipeable } from "react-swipeable"
import { MdNavigateNext, MdNavigateBefore, MdSwapHoriz } from "react-icons/md"
import "./Flashcards.css"

// max character count of 1567 must be allowed

function Flashcards() {
  const questions = require("../../../api/flashcards/ExampleQuestions.json")
  const [isFlipped, setIsFlipped] = useState("")
  const [cardID, setCardID] = useState(0)

  const [question, setQuestion] = useState(questions.cards[0].question)
  const [answer, setAnswer] = useState(questions.cards[0].answer)

  const handleFlip = e => {
    isFlipped === "" ? setIsFlipped("flipped") : setIsFlipped("")
  }

  const handlePrevious = e => {
    cardID - 1 < 0 ? setCardID(0) : setCardID(cardID - 1)
    setIsFlipped("")
  }

  const handleNext = e => {
    cardID + 1 >= questions.cards.length
      ? setCardID(questions.cards.length - 1)
      : setCardID(cardID + 1)
    setIsFlipped("")
  }

  useEffect(() => {
    
    setQuestion(questions.cards[cardID].question)
    setAnswer(questions.cards[cardID].answer)
    
    var isTouch = (("ontouchstart" in window) || (navigator.msMaxTouchPoints > 0));
    return isTouch

  }, [questions.cards, cardID])

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
      <div className="content-wrapper">
        <div className="Content">
          <div className="Intro">
            <h1>Flashcards</h1>
            {isTouch ? (
              <p>
                Double tap on the card to flip it over. Swipe to navigate
                between cards.
              </p>
            ) : (
              <p>
                Press the spacebar to flip the card over. Use the arrow keys to
                navigate between cards.
              </p>
            )}
          </div>
          <div className="flashcard-wrapper">
            <Swipeable
              className="flashcard"
              onSwipedLeft={e => handleNext()}
              onSwipedRight={e => handlePrevious()}
            >
              <div
                className={`flip-card ${isFlipped}`}
                onDoubleClick={e => handleFlip()}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h4 style={{ margin: `0` }}>Question</h4>
                    <div className="flashcard-content">
                      <h3>{question}</h3>
                    </div>
                    <p style={{ margin: `0`, opacity: `0.6` }}>
                      {cardID + 1} of {questions.cards.length}
                    </p>
                  </div>
                  <div className="flip-card-back">
                    <h4 style={{ margin: `0` }}>Answer</h4>
                    <div className="flashcard-content">
                      <h3>{answer}</h3>
                    </div>
                    <p style={{ margin: `0`, opacity: `0.6` }}>
                      {cardID + 1} of {questions.cards.length}
                    </p>
                  </div>
                </div>
              </div>
            </Swipeable>
            <div className="flashcard-button-wrapper">
              <div
                role="button"
                className="flashcard-button-previous"
                onClick={e => handlePrevious()}
              >
                <MdNavigateBefore />
              </div>
              <div
                role="button"
                className="flashcard-button-flip"
                onClick={e => handleFlip()}
              >
                <MdSwapHoriz />
              </div>
              <div
                role="button"
                className="flashcard-button-next"
                onClick={e => handleNext()}
              >
                <MdNavigateNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flashcards
