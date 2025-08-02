export function Button(props) {

    //vista
    return (
        <button className="btn">
            {props.icono}
            {props.nombre}
        </button>
    )
}