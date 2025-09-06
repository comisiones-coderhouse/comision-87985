import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Badge } from "antd";

export function CartWidget() {

    const valorDelContexto = useContext(CartContext)

    //vista
    return (
        <Badge count={valorDelContexto.totalQuantity} offset={[-5,5]}>
            <ShoppingCart size={36} strokeWidth={1.5} className="carrito" />
        </Badge>
    )
}

