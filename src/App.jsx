import { useEffect, useState } from 'react'

import { Navbar, Signin, CreatePost, Homepage } from './components';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'



function App() {
  const [userToken, setUserToken] = useState(() => {
    return localStorage.getItem('token')
  });
  const [signedIn, setSignedIn] = useState(() => {
    if(userToken) return true;
    else false;
  });

  return (
    <div className="App flex flex-col min-h-screen overflow-scroll">
      <BrowserRouter>
      <Navbar signedIn={signedIn} />
        <Routes>
          <Route path="/signin" element={<Signin setToken={setUserToken} setSignedIn={setSignedIn} />} />
          <Route path="/" element={userToken ? <Homepage token={userToken} /> : <Navigate to="/signin" replace />} />
          <Route path='/new-post' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
