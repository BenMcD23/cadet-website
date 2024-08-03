import './NavbarStyles.css'
import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
        <nav className="nav">
            <NavLink to="/" className="site-title">Site Name</NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;
