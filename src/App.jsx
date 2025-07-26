import { Button } from "./Button"
//import { Button as OtroNombre } from "./Button"
//Un componente es una funcion cuya primera letra es mayuscula y retorna/devuelve un elemento JSX


//Mi primer componente de React
function App() {

  //Esto es JSX
  return (
    <div>
      <Button nombre="Crear Producto" />
      <Button nombre="Login" />
      <Button nombre="Salir" />
    </div>
  )
}


export default App