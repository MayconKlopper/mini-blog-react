import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './config/router/routers'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
)
