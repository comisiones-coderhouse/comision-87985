import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CustomContext } from './components/CustomContext.jsx'
import './index.css'

const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)

VDOMElement.render(
  <StrictMode>
    <BrowserRouter>
      <CustomContext>
        <App />
      </CustomContext>
    </BrowserRouter>
  </StrictMode>,
)