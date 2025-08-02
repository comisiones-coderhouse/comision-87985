import { CartWidget } from "./CartWidget";

export function Navbar() {

    //vista
    return (
        <header>
            <h1>Mi tienda</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <CartWidget />
            </nav>
        </header>
    )
}
