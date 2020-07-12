import React from "react"
import { MdNavigateNext, MdNavigateBefore, MdSwapHoriz } from "react-icons/md"

function FlashcardButtons(props) {
  return (
    <div className="flashcard-button-wrapper">
      <div
        role="button"
        className="flashcard-button-previous"
        onClick={e => props.handlePrevious()}
      >
        <MdNavigateBefore />
      </div>
      <div
        role="button"
        className="flashcard-button-flip"
        onClick={e => props.handleFlip()}
      >
        <MdSwapHoriz />
      </div>
      <div
        role="button"
        className="flashcard-button-next"
        onClick={e => props.handleNext()}
      >
        <MdNavigateNext />
      </div>
    </div>
  )
}

export default FlashcardButtons
