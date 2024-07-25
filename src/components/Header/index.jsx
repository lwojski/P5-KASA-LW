import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/logements">Logements</Link>
      <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Header
