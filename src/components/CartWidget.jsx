import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Badge } from "antd";
import { Link } from "react-router-dom";

export function CartWidget() {

    const valorDelContexto = useContext(CartContext)

    return (
        <Link to="/cart">
            <Badge count={valorDelContexto.totalQuantity} offset={[-5, 5]}>
                <ShoppingCart size={36} strokeWidth={1.5} className="carrito" />
            </Badge>
        </Link>
    )
}

