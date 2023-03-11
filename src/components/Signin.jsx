import { useState } from "react";


function Signin() {
    const [signIn, setSignIn] = useState(true);

    return (
        <div className="container mx-auto px-4 flex justify-center bg-shell min-w-full grow">
            <form action="#" className= "w-1/4 rounded overflow-hidden shadow-lg p-9 mt-28 space-y-8 h-96 bg-sand">
                <h2 className="text-5xl text-center font-bold text-grape">{signIn ? "Sign In" : "Sign Up"}</h2>
                <div className="pb-4">
                    <label htmlFor="email"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="text" name="email" id="email" placeholder="Email"/>  
                </div>
                <div className="pb-4">
                    <label htmlFor="password"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="password" name="password" id="password" placeholder="Password"/> 
                </div>

                <button className="font-bold py-2 px-4 rounded bg-grape 
                text-white w-full font-semibold text-lg">{signIn ? "Log in" : "Sign up"}</button>
            </form>
        </div>
        
    )
}

export default Signin;