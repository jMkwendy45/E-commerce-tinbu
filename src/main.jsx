import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{BrowserRouter} from 'react-router-dom'
import './index.css'
import { CartProvider } from './component/cartitem/CartContenxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
  <App />
    </CartProvider>
  </BrowserRouter>
  
)
