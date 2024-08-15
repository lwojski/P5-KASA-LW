import { Link } from "react-router-dom"
import "./style.scss"

function Card({ id, title, cover }) {
  const link = `/logements/${id}`

  return (
    <div className="card">
      <Link to={link} className="cardLink">
        <img src={cover} alt={title} className="cardImage" />
        <h2 className="cardTitle">{title}</h2>
      </Link>
    </div>
  )
}

export default Card
