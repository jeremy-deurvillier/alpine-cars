import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
    return (
        <>
            <nav id="main-navigation">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout