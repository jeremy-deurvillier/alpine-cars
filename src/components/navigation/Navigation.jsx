import './Navigation.css'

export default function Navigation() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#">A110</a>
                    <a className="navbar-item" href="#">A110 R</a>
                    <a className="navbar-item" href="#">A110 S</a>
                    <a className="navbar-item" href="#">A110 GT</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button" href="#">Configurer</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}