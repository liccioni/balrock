import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Balrock from './Balrock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Balrock />
  </StrictMode>,
)
