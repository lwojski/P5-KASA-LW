import React from "react"
import { Link } from "react-router-dom"
import "./style.scss"

function NotFound404() {
  return (
    <section className="page404">
      <div className="page404Content">
        <h1 className="page404Title">404</h1>
        <p className="page404Message">
          <span className="404MessageLine1">Oups! La page que </span>
          <span className="404MessageLine2">vous demandez n'existe pas.</span>
        </p>
        <Link to="/" className="page404Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </section>
  )
}

export default NotFound404
