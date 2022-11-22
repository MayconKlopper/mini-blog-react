import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../Home'
import About from '../../screens/about/about'
import Footer from '../../screens/footer/footer'
import Navbar from '../../screens/navbar/navbar'

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers