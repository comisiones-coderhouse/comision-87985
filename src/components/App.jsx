import { Button } from "./Button"
import { Navbar } from "./Navbar"
import logo from "../images/vite.svg"
import { ItemListContainer } from "./ItemListContainer"

function App() {


  //vista
  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje="Bienvenido a mi app!"/>
      {/* <img src="/images/vite.svg" alt="logo" /> */}
      {/* <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <Button nombre="Crear Producto" icono="🛒" />
      <Button nombre="Login" icono="🔑" />
      <Button nombre="Salir" icono="👋" />
      <Button nombre="Comprar" icono="🛒" /> */}
      <p id="" className="parrafo">Hola</p>
      <input type="text" placeholder="Ingrese su nombre" minLength="3"/>
    </div>
  )
}


export default App