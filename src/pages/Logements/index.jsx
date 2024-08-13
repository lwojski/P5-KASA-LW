import React from "react"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Collapse from "../../components/Collapse"
import Slideshow from "../../components/Slideshow"
import "./style.scss"

function Logements() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <section className="logement">
      <Slideshow pictures={logement.pictures} />
      <div className="logementDetails">
        <h1 className="logementTitle">{logement.title}</h1>
        <h2 className="logementLocation">{logement.location}</h2>
        <div className="logementTags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="logementHost">
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="hostPicture"
          />
          <p>{logement.host.name}</p>
        </div>
        <div className="logementRating">
          <p>{logement.rating} étoiles</p>
        </div>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  )
}

export default Logements
