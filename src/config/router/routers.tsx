import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/about'
import Footer from '../../screens/footer/footer'
import Navbar from '../../screens/navbar/navbar'
import Grid from '@mui/material/Grid/Grid'

const Routers = () => {
  return (
    <BrowserRouter>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Grid>
    </BrowserRouter>
  )
}

export default Routers