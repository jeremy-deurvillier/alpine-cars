export default function Error({message}) {
    return (
        <section id="Error" className="hero is-black is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 hidden>Alpine</h1>
                    <h2 className="subtitle is-1 is-uppercase has-text-weight-bold">
                        Erreur : {message}
                    </h2>
                </div>
            </div>
        </section>
    )
}