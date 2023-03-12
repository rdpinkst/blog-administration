import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import CreatePost from './components/CreatePost'
import Homepage from './components/Homepage'


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      {/* <Signin /> */}
      {/* <CreatePost /> */}
      <Homepage />
    </div>
  )
}

export default App
