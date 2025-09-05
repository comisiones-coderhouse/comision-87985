import { createContext } from "react";

//Este es el contexto
export const miContexto = createContext()

//Esta variable no es obligatoria; solo estoy poniendo (renombrando) el Provider original (miContexto.Provider) en una nueva constante personalizada (MiProvider)
const MiProvider = miContexto.Provider

//Este es el componente "envoltorio"
export function CustomContext(props) {

    const elValorDelContexto = {
        nombre: "horacio"
    }

    return (
        <MiProvider value={elValorDelContexto}>
            {props.children}
        </MiProvider>
    )
}