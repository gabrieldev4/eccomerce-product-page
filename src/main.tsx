import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalProvider } from './context/ModalContext.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </ModalProvider>
  </StrictMode>,
)
