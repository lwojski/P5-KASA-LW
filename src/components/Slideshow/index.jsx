import React, { useState } from "react"
import leftArrow from "../../assets/left_arrow.svg"
import rightArrow from "../../assets/right_arrow.svg"
import "./style.scss"

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = pictures.length

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  if (length === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshowImage" />
      </div>
    )
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Logement slide ${currentIndex + 1}`}
        className="slideshowImage"
      />
      <div className="slideshowArrows">
        <img
          src={leftArrow}
          alt="Précédent"
          className="leftArrow"
          onClick={prevSlide}
        />
        <img
          src={rightArrow}
          alt="Suivant"
          className="rightArrow"
          onClick={nextSlide}
        />
      </div>
      <div className="slideshowCounter">
        {currentIndex + 1}/{length}
      </div>
    </div>
  )
}

export default Slideshow
