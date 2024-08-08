import logo from "../../assets/logo_blanc.svg"
import "./style.scss"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa logo blanc" className="footerLogo" />
      <p>© 2024 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
