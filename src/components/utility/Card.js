import React from "react"
import { Link } from "gatsby"
import "./Card.css"

function Card(props) {
  const tags = props.tags

  return (
    <Link
      to={props.link}
      className={`Card ${props.active === false ? `inactive` : ``}`}
      onClick={(e)=> props.active === false ? e.preventDefault() : null}
    >
      {props.icon}
      <div className="heading">
        <h2>{props.heading}</h2>
      </div>
      {tags
        ? tags.map(tag => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))
        : ""}
      <div className="description">
        <p>{props.description}</p>
      </div>
    </Link>
  )
}

export default Card
