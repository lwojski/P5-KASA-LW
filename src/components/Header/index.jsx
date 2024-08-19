import { NavLink, Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./style.scss"

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
