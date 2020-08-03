import React, { useState, useEffect } from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import { MdNavigateNext, MdNavigateBefore, MdSwapHoriz } from "react-icons/md"
import PropTypes from "prop-types"
import Flashcard from "./Flashcard"
import withLocation from "../withLocation"
import "pure-react-carousel/dist/react-carousel.es.css"
import "./Flashcards.css"

function Flashcards({ search }) {
  const { subject, chapter } = search
  const [cardPack, setCardPack] = useState({
    pack: "Flashcards",
    cards: [
      {
        id: 1,
        question: "There are currently no questions available in this pack",
        answer: "There are currently no answers available in this pack",
      },
    ],
  })
  const [cardID, setCardID] = useState(0)
  const [isFlipped, setIsFlipped] = useState("")

  const handleFlip = e => {
    isFlipped === "" ? setIsFlipped("flipped") : setIsFlipped("")
  }

  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    try {
      setCardPack(
        require(`../../../static/api/subjects/${subject}/flashcards/${chapter}.json`)
      )
    } catch (error) {
      console.log(error)
    }
    setIsTouch("ontouchstart" in window || navigator.msMaxTouchPoints > 0)
  }, [cardPack, cardID, subject, chapter])

  const onKeydown = e => {
    console.log(e.key)
    if(e.key === " "){
      e.preventDefault()
      handleFlip()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      document.getElementById("BackButton").click()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      document.getElementById("NextButton").click()
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
  })
 
  return (
    <>
      <div className="Content">
        <div className="Intro">
          <h1>{cardPack.pack}</h1>
          {isTouch ? (
            <p>
              Double tap on the card to flip it over. Swipe to navigate between
              cards.
            </p>
          ) : (
            <p>
              Press the spacebar to flip the card over. Use the arrows to
              navigate between cards.
            </p>
          )}
        </div>
        <CarouselProvider
          totalSlides={cardPack.cards.length}
          naturalSlideWidth={100}
          naturalSlideHeight={26}
          isIntrinsicHeight={true}
        >
          <Slider moveThreshold={0.01}>
            {cardPack.cards.map(card => (
              <Slide key={card.id} index={card.id} style={{ padding: `2em` }}>
                <Flashcard
                  cardID={card.id}
                  cardTotal={cardPack.cards.length}
                  isFlipped={isFlipped}
                  question={card.question}
                  answer={card.answer}
                  handleFlip={handleFlip}
                />
              </Slide>
            ))}
          </Slider>
          <div className="flashcard-button-wrapper">
            <ButtonBack
              id="BackButton"
              onClick={e => setIsFlipped("")}
              style={{ border: `none` }}
            >
              <div className="flashcard-button-previous">
                <MdNavigateBefore />
              </div>
            </ButtonBack>

            <div onClick={e => handleFlip()} className="flashcard-button-flip">
              <MdSwapHoriz />
            </div>

            <ButtonNext
              id="NextButton"
              onClick={e => setIsFlipped("")}
              style={{ border: `none` }}
            >
              <div className="flashcard-button-next">
                <MdNavigateNext />
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </>
  )
}

Flashcards.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Flashcards)
