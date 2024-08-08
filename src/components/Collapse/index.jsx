import React, { useState } from "react"
import chevron from "../../assets/chevron.svg"
import "./style.scss"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={chevron}
          alt="Chevron"
          className={`chevron ${isOpen ? "down" : "up"}`}
        />
      </div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Collapse
