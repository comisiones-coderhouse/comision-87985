import { Link } from "react-router-dom";
import { Card } from "antd";

export function Item(props) {

    return (
        <Card
            hoverable
            title={props.pokemon.name}
            actions={[
                <Link to={`/pokemon/${props.pokemon.name}`}>ver detalle</Link>
            ]}
            
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </Card>
    )
}