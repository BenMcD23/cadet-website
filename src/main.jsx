import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource-variable/inter'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/700.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { FlightPointsProvider } from './context/flightPointsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FlightPointsProvider>
        <App />
      </FlightPointsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
