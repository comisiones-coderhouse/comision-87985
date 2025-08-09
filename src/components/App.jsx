import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Toaster } from "react-hot-toast"

function App() {


  //vista
  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje="Bienvenido a mi app!" />
      <p id="" className="parrafo">Hola</p>
      <input type="text" placeholder="Ingrese su nombre" minLength="3" />
      <Toaster/>
    </div>
  )
}


export default App