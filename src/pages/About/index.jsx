import React from "react"
import logo from "../../assets/about_headline_background.svg"
import Collapse from "../../components/Collapse"
import about from "../../data/about.json"
import "./style.scss"

function About() {
  return (
    <section className="about">
      <div className="aboutHeadline">
        <div className="aboutOverlay"></div>
        <img src={logo} alt="Montagnes" className="aboutHeadlineBackground" />
      </div>
      <div className="aboutMenu">
        {about.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  )
}

export default About
