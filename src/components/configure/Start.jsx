import { Link } from "react-router-dom"
import Card from "../card/Card"

const gamme = [
  { name: 'Pure', price: 54700, img: '/assets/configurateur/modele/selection/pure.png' },
  { name: 'Legende', price: 58500, img: '/assets/configurateur/modele/selection/legende.png' }
]

export function Start() {
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
            {gamme.map((model, index) => <Card key={index} model={model} />)}
          </div>
        </div>
      </div>
    </div>
  )
}