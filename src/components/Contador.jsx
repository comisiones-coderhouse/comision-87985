import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

//Componente Hijo
export function Contador(props) {

    const handleClick = () => {
        props.handle("1")
    }

    return (
        <div>
            <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={handleClick}
            />
            <p>Cantidad seleccionada : 0</p>
            <Button
                type="primary"
                shape="circle"
                icon={<MinusOutlined />}
            />
        </div>
    )
}