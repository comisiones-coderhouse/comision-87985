import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

//Componente Hijo
export function Contador(props) {

    const [count, setCount] = useState(0)


    const handleClickMinus = () => {
        const cuentaFinal = count - 1
        setCount(cuentaFinal)
        props.handle(cuentaFinal)
    }

    const handleClickPlus = () => {
        const cuentaFinal = count + 1
        setCount(cuentaFinal)
        props.handle(cuentaFinal)
    }

    return (
        <div>
            <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                onClick={handleClickPlus}
            />
            <p>Cantidad seleccionada : {count}</p>
            <Button
                type="primary"
                shape="circle"
                icon={<MinusOutlined />}
                onClick={handleClickMinus}
            />
        </div>
    )
}