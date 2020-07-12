import React from "react"
import { Swipeable } from "react-swipeable"
import { InlineTex } from "react-tex"
import "katex/dist/katex.min.css"

function Flashcard(props) {
  return (
    <>
      <Swipeable
        className="flashcard"
        onSwipedLeft={e => props.handleNext()}
        onSwipedRight={e => props.handlePrevious()}
      >
        <div
          className={`flip-card ${props.isFlipped}`}
          onDoubleClick={e => props.handleFlip()}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h4 style={{ margin: `0` }}>Question</h4>
              <div className="flashcard-content">
                <InlineTex texContent={props.question} />
              </div>
              <p style={{ margin: `0`, opacity: `0.6` }}>
                {props.cardID + 1} of {props.cardTotal}
              </p>
            </div>
            <div className="flip-card-back">
              <h4 style={{ margin: `0` }}>Answer</h4>
              <div className="flashcard-content">
                <InlineTex texContent={props.answer} />
              </div>
              <p style={{ margin: `0`, opacity: `0.6` }}>
                {props.cardID + 1} of {props.cardTotal}
              </p>
            </div>
          </div>
        </div>
      </Swipeable>
    </>
  )
}

export default Flashcard
