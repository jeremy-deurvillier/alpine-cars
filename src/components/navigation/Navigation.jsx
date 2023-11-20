import './Navigation.css'

export default function Navigation() {
    return (
        <nav id="Navigation" className="navbar is-transparent">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/configure/a110">A110</a>
                    <a className="navbar-item" href="/configure/a110r">A110 R</a>
                    <a className="navbar-item" href="/configure/a110s">A110 S</a>
                    <a className="navbar-item" href="/configure/a110gt">A110 GT</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-radiusless" href="/configure">Configurer</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}