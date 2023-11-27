import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Card from "../card/Card"
import './Configure.css'

export function Start() {
  const gammes = useSelector(state => state.cars.versions)

  return (
    <section id="start">
      <nav className="navbar-configurator-start">
        <ul>
          <li>
            <Link to="/" className="button-close">Fermer</Link>
          </li>
        </ul>
      </nav>
      <div className="configurator-start-content">
        <div className="logo-content">
          <img src="/assets/logo.png" alt="Alpine logo" />
        </div>
        <div className="cars-list">
          {gammes.map((model, index) => <Card key={index} model={model} />)}
        </div>
      </div>
    </section>
  )
}