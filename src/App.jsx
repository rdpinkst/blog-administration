import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import CreatePost from './components/CreatePost'


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      {/* <Signin /> */}
      <CreatePost />
    </div>
  )
}

export default App
