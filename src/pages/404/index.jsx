import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./style.scss"

function NotFound404() {
  return (
    <section className="page404">
      <div className="page404Content">
        <h1 className="page404Title">404</h1>
        <p className="page404Message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="page404Link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </section>
  )
}

export default NotFound404
