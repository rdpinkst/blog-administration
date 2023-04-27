import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Navbar, Signin, CreatePost, Homepage } from './components';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App flex flex-col min-h-screen overflow-scroll">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Homepage />} />
          <Route path='/new-post' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
