import { Link, useParams } from "react-router-dom"
import Card from "../card/Card"
import { useSelector } from "react-redux"

export function Start() {
  const gammes = useSelector(state => state.cars.versions)

  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div id="navbarConfigure" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Fermer</Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-justify-content-space-evenly">
            {gammes.map((model, index) => <Card key={index} model={model} />)}
          </div>
        </div>
      </div>
    </div>
  )
}