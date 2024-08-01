import { Link } from "react-router-dom"
import "./style.scss"

function Card({ link, title, cover }) {
  return (
    <div className="card">
      <Link to={link}>
        <img src={cover} alt={title} className="cardImage" />
        <h2 className="cardTitle">{title}</h2>
      </Link>
    </div>
  )
}

export default Card
