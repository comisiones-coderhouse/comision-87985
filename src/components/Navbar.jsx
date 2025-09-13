import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <header className="header">
            <h1 className="header__title">Mi tienda</h1>
            <nav className="header__nav nav">
                
                <Link className="header__link nav__link" to="/">Home</Link>
                <Link className="header__link nav__link" to="/about">About</Link>
                <Link className="header__link nav__link" to="/contacto">Contacto</Link>
                <CartWidget />
            </nav>
        </header>
    )
}
