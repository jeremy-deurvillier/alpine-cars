import Card from "../card/Card"

const gamme = [
  { name: 'A110 R', price: 59000 },
  { name: 'A110 S', price: 52000 }
]

export function Start() {
  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div id="navbarConfigure" className="navbar-menu">
            <div className="navbar-end">
              <a href="/" className="navbar-item">Fermer</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-justify-content-space-evenly">
            {gamme.map((model, index) => <Card key={index} name={model.name} price={model.price} />)}
          </div>
        </div>
      </div>
    </div>
  )
}