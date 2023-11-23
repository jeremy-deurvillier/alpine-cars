import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { setCar, setRim, setSealing } from '../../reducers/cars'
import Error from './Error'

const Layout = () => {
    const { name } = useParams()
    const car = useSelector(state => state.cars.current.model)
    const gammes = useSelector(state => state.cars.versions)
    const rims = useSelector(state => state.cars.options.rims)
    const sealings = useSelector(state => state.cars.options.sealing)
    const error = useSelector(state => state.cars.error)
    const dispatch = useDispatch()
    const myChoice = name === 'pure' ? gammes[0] : gammes[1]
    const rim = (myChoice.name && myChoice.name.toLowerCase() === 'pure') ? rims[0] : rims[2]
    const sealing = (myChoice.name && myChoice.name.toLowerCase() === 'pure') ? sealings[0] : sealings[2]

    if (!car.name) {
        dispatch(setCar({ car: myChoice }))
        dispatch(setRim({ rim }))
        dispatch(setSealing({ sealing }))
    }

    return (
        <>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div id="navbarConfigure" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="#" className="navbar-link">Options</a>
                            <div className="navbar-dropdown">
                                <Link to={'/configure/' + name + '/color'} className="navbar-item">Couleur</Link>
                                <Link to={'/configure/' + name + '/rim'} className="navbar-item">Jantes & roues</Link>
                                <Link to={'/configure/' + name + '/sealing'} className="navbar-item">Sellerie</Link>
                                <Link className="navbar-item">Equipements</Link>
                                <Link className="navbar-item">Accessoires</Link>
                                <Link className="navbar-item">Récapitulatif</Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to="/" className="button is-transparent">
                                Fermer
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout