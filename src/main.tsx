import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './config/router/routers'

import './index.css'
import Footer from './screens/footer/footer'
import Navbar from './screens/navbar/navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
)
