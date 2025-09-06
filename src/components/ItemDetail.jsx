import { useState, useContext } from "react";
import { Contador } from "./Contador";
import { CartContext } from "./CartContext"
import { Button } from "antd";



//Componente Padre
export const ItemDetail = (props) => {

    const [quantity, setQuantity] = useState(0)
    const valorDelContexto = useContext(CartContext)

    const handle = (data) => {
        setQuantity(data)
    }

    const handleAddToCart = () => {
        console.log(quantity)
        valorDelContexto.addItemToCart(quantity)
    }

    return (
        <div>
            <img
                src={props.pokemon.sprites?.front_default}
                alt={props.pokemon.name}
            />
            {props.pokemon.name}
            <Contador handle={handle} />
            {quantity > 0 ? (
                <Button type="primary" onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            ) : null}
        </div>
    )
}