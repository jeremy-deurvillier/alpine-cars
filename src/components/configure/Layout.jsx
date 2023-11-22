import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { setCar } from '../../reducers/cars'
import Error from './Error'

const Layout = () => {
    const { name } = useParams()
    const car = useSelector(state => state.cars.current.model)
    const error = useSelector(state => state.cars.error)
    const dispatch = useDispatch()

    dispatch(setCar({ name: name }))

    return (
        <>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div id="navbarConfigure" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="#" className="navbar-link">Options ({car})</a>
                            <div className="navbar-dropdown">
                                <Link to={'/configure/' + name + '/color'} className="navbar-item">Couleur</Link>
                                <Link to="/configure/" className="navbar-item">Jantes & roues</Link>
                                <Link className="navbar-item">Sellerie</Link>
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
                {
                    error.message === '' 
                    ? <Outlet /> 
                    : <Error message={error.message} />
                }
                
            </main>
        </>
    )
}

export default Layout