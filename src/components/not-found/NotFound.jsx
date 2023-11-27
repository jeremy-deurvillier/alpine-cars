import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <section id="not-found">
            <div>
                <h1 hidden>Alpine</h1>
                <h2 className="title">Page non trouvée !</h2>
                <p>
                    <Link to="/" className="button">Retour à l'accueil</Link>
                </p>
            </div>
        </section>
    )
}