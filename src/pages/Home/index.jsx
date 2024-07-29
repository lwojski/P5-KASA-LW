import React from "react"
import logo from "../../assets/home_title_background.svg"
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
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
        </div>
        <div className="galleryRow">
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
          <div className="card">
            <p className="cardTitle">Titre de la location</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
