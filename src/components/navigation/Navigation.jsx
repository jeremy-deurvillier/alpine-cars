import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav id="Navigation" className="navbar is-transparent">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/configure/a110">A110</Link>
                    <Link className="navbar-item" to="/configure/a110r">A110 R</Link>
                    <Link className="navbar-item" to="/configure/a110s">A110 S</Link>
                    <Link className="navbar-item" to="/configure/a110gt">A110 GT</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link className="button is-radiusless" to="/configure">Configurer</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}