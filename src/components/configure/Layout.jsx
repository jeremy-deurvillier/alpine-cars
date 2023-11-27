import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { setCar, setRim, setSealing } from '../../reducers/cars'
import Error from './Error'

const Layout = () => {
    const { name } = useParams()
    const { option } = useParams()

    const car = useSelector(state => state.cars.current)
    const gammes = useSelector(state => state.cars.versions)
    const rims = useSelector(state => state.cars.options.rims)
    const sealings = useSelector(state => state.cars.options.sealing)
    const error = useSelector(state => state.cars.error)
    const dispatch = useDispatch()
    const myChoice = name === 'pure' ? gammes[0] : gammes[1]
    const rim = (myChoice.name && myChoice.name.toLowerCase() === 'pure') ? rims[0] : rims[2]
    const sealing = (myChoice.name && myChoice.name.toLowerCase() === 'pure') ? sealings[0] : sealings[2]
    const price = Object.keys(car).map(k => car[k].price).reduce((acc, cur) => acc + cur, 0)

    let productChoice

    if (car.model.name) {
        switch (option) {
            case 'color':
                productChoice = car.color.name + ' : +' + car.color.price + ' €'
                break;
            case 'rim':
                productChoice = car.rim.name + ' : +' + car.rim.price + ' €'
                break;
            case 'sealing':
                productChoice = car.sealing.name + ' : +' + car.sealing.price + ' €'
                break;
            default:
                productChoice = car.color.name + ' : +' + car.color.price + ' €'
        }
    }

    if (!car.model.name) {
        dispatch(setCar({ car: myChoice }))
        dispatch(setRim({ rim }))
        dispatch(setSealing({ sealing }))
    }

    return (
        <>
            <nav className="navigation-configurator" role="navigation" aria-label="main navigation">
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to={'/configure/' + name + '/color'} className="navbar-item">Couleur</Link>
                        </li>
                        <li>
                            <Link to={'/configure/' + name + '/rim'} className="navbar-item">Jantes & roues</Link>
                        </li>
                        <li>
                            <Link to={'/configure/' + name + '/sealing'} className="navbar-item">Sellerie</Link>
                        </li>
                        <li>
                            <Link className="navbar-item">Equipements</Link>
                        </li>
                        <li>
                            <Link className="navbar-item">Accessoires</Link>
                        </li>
                        <li>
                            <Link className="navbar-item">Récapitulatif</Link>
                        </li>
                    </ul>
                </div>
                <div className="product-price">
                    <p className="total-price">Prix : {price} €</p>
                    <p>{productChoice}</p>
                </div>
                <div className="navbar-configurator-close">
                    <ul>
                        <li>
                            <Link to="/" className="close-configurator">Fermer</Link>
                        </li>
                    </ul>
                </div>
            </nav >

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout