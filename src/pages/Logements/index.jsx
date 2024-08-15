import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import logements from "../../data/logements.json"
import Collapse from "../../components/Collapse"
import Slideshow from "../../components/Slideshow"
import starActive from "../../assets/star_active.svg"
import starInactive from "../../assets/star_inactive.svg"
import "./style.scss"

function Logements() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = React.useState(null)

  React.useEffect(() => {
    const foundLogement = logements.find((logement) => logement.id === id)
    if (!foundLogement) {
      navigate("/404")
    } else {
      setLogement(foundLogement)
    }
  }, [id, navigate])

  if (logement === null) {
    return null
  }

  return (
    <section className="logement">
      <Slideshow pictures={logement.pictures} />
      <div className="logementDetails">
        <div className="logementMainDetails">
          <div className="logementTitleLocationTagsContainer">
            <h1 className="logementTitle">{logement.title}</h1>
            <h2 className="logementLocation">{logement.location}</h2>
            <div className="logementTags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="logementHostRatingContainer">
            <div className="logementHost">
              <p className="hostName">
                <span>{logement.host.name.split(" ")[0]}</span>
                <span>{logement.host.name.split(" ")[1]}</span>
              </p>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="hostPicture"
              />
            </div>
            <div className="logementRating">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < logement.rating ? starActive : starInactive}
                  alt={
                    index < logement.rating
                      ? "Étoile active"
                      : "Étoile inactive"
                  }
                  className="star"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="collapses">
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
      </div>
    </section>
  )
}

export default Logements
