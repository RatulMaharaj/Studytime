import React from "react"
import { InlineTex } from "react-tex"
import "katex/dist/katex.min.css"

function Flashcard(props) {
  return (
    <>
      <div
        className="flashcard"
      >
        <div
          className={`flip-card ${props.isFlipped}`}
          onDoubleClick={e => props.handleFlip()}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h4 className="flashcard-header">Question</h4>
              <div className="flashcard-content">
                <InlineTex texContent={props.question} />
              </div>
              <p className="flashcard-footer">
                {props.cardID} of {props.cardTotal}
              </p>
            </div>
            <div className="flip-card-back">
              <h4 className="flashcard-header">Answer</h4>
              <div className="flashcard-content">
                <InlineTex texContent={props.answer} />
              </div>
              <p className="flashcard-footer">
                {props.cardID} of {props.cardTotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flashcard
