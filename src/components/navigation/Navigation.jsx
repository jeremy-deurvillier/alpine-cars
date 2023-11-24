import { Link } from 'react-router-dom'
import './Navigation.css'
import { useSelector } from 'react-redux'

export default function Navigation() {
    const gammes = useSelector(state => state.cars.versions)
    const links = gammes.map(model => {
        const link = '/configure/' + model.name.toLowerCase() + '/color'

        return <Link key={model.name} className="model-item" to={link}>{model.name}</Link>
    })

    return (
        <nav id="navigation">
            <div className="navigation-content">
                <div className="configure-button">
                    <Link className="button" to="/configure">Configurer</Link>
                </div>
                <div className="models-list">
                    {links}
                </div>
            </div>
        </nav>
    )
}