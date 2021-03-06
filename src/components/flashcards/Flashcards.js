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

  useEffect(() => {
    try {
      setCardPack(
        require(`../../../static/api/subjects/${subject}/flashcards/${chapter}.json`)
      )
    } catch (error) {
      console.log(error)
    }
  }, [cardPack, cardID, subject, chapter])

  return (
    <>
      <div className="Content">
        <div className="Intro">
          <h1>Chapter {chapter}</h1>
          <p>{cardPack.pack}</p>
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

            <div
              id="Flip"
              onClick={e => handleFlip()}
              className="flashcard-button-flip"
            >
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
