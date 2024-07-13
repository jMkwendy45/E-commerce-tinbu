import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './component/footer/Footer'
import Allproduct from './pages/allproduct/Allproduct'
import ProductDetail from './component/productdetail/ProductDetail'
import CartDetails from './component/cartitem/CartItem'
import CheckoutForm from './pages/checkout/CheckoutForm'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/allproduct' element={<Allproduct/>} />
         <Route path='/addtocart' element={<ProductDetail/>} />
         <Route path='/viewcart' element={<CartDetails/>} />
         <Route path='/checkoutform' element={<CheckoutForm/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
