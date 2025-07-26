import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//<div id="root"></div>
const DOMElement = document.getElementById('root')

const VDOMElement = createRoot(DOMElement)

//JSX
VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
