import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./style.scss"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="logo" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
