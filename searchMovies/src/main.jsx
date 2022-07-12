import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// pd. borrar el StrictMode antes de desplegar
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
