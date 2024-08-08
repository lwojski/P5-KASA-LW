import React from "react"
import logo from "../../assets/about_headline_background.svg"
import "./style.scss"

function About() {
  return (
    <section className="about">
      <div className="aboutHeadline">
        <img src={logo} alt="Montagnes" className="aboutHeadlineBackground" />
      </div>
      <div className="dropDownMenu">
        <div className="dropDownTopBar"></div>
      </div>
    </section>
  )
}

export default About
