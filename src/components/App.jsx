import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Toaster } from "react-hot-toast"
import { Footer } from "./Footer"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Cart } from "./Cart"
import { About } from "./About"
import Contacto from "./Contacto"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pokemon/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}


export default App