import './NotFound.css'

export default function NotFound() {
    return (
        <section id="NotFound" className="hero is-black is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 hidden>Alpine</h1>
                    <h2 className="subtitle is-1 is-uppercase has-text-weight-bold">Page non trouvée !</h2>
                    <p>
                        <a href="/" className="is-uppercase button">Retour à l'accueil</a>
                    </p>
                </div>
            </div>
        </section>
    )
}