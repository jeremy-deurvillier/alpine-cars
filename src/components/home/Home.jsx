import Navigation from "../navigation/Navigation"
import './Home.css'

export default function Home() {
    return (
        <section id="home">
            <div className="content">
                <div>
                    <h1 hidden>Alpine</h1>
                    <h2 className="title">Gamme A110</h2>
                </div>
                <div>
                    <Navigation />
                </div>
            </div>
        </section>
    )
}