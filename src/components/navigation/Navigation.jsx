import { Link } from 'react-router-dom'
import './Navigation.css'
import { useSelector } from 'react-redux'

export default function Navigation() {
    const gammes = useSelector(state => state.cars.versions)
    const links = gammes.map(model => {
        const link = '/configure/' + model.name.toLowerCase() + '/color'

        return <Link key={model.name} className="navbar-item" to={link}>{model.name}</Link>
    })

    return (
        <nav id="Navigation" className="navbar is-transparent">
            <div className="navbar-menu">
                <div className="navbar-start">
                    { links }
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