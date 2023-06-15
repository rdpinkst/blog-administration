import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar({signedIn}) {

    return (
      <header className="flex justify-between pt-7 pb-7 pr-14 pl-14 border-b bg-eggplant text-white">
        <h1 className="text-2xl font-semibold">
                <Link to="/">Blog Administration</Link></h1>
        <nav >
          {!signedIn &&    
            <ul className="flex justify-evenly space-x-9 text-lg font-medium">     
                  <li><Link to="/signin">Sign-in</Link></li>
                  <li><Link to="/signin">Sign-up</Link></li>    
            </ul>
          }
          {signedIn && 
            <ul className="flex justify-start space-x-9 text-lg font-medium">     
              <li><Link to="/new-post" state={{ postData: null }}>New Post</Link></li>   
            </ul>
          }
        </nav>
      </header>
    )
}

export default Navbar;