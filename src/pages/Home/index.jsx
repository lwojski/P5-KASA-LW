import React from "react"
import logo from "../../assets/home_title_background.svg"
import Card from "../../components/Card"
import logements from "../../data/logements.json"
import "./style.scss"

function Home() {
  return (
    <section className="home">
      <div className="homeHeadline">
        <h1 className="homeHeadlineText">Chez vous, partout et ailleurs</h1>
        <img
          src={logo}
          alt="Côte rocheuse"
          className="homeHeadlineBackground"
        />
      </div>
      <div className="gallery">
        <div className="galleryRow">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
