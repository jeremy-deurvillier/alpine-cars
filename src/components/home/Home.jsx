import Navigation from "../navigation/Navigation"
import './Home.css'

export default function Home() {

    return (
        <section id="Home" className="hero is-black is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 hidden>Alpine</h1>
                    <h2 className="subtitle is-1 is-uppercase has-text-weight-bold">Gamme A110</h2>
                </div>
            </div>
            <div className="hero-foot">
                <Navigation />
            </div>
        </section>
    )
}