import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductGrid from './pages/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ProductGrid/>
      <Footer/>
    </div>
  )
}

export default App