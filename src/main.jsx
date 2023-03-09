import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Signin />
  </React.StrictMode>,
)
