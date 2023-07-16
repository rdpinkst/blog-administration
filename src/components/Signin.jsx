import { useState } from "react";
import { Navigate } from "react-router-dom";

const API_USER_SIGNIN = "https://holy-water-2894.fly.dev/api/v1/user/signin"

function Signin({signedIn, setToken, setSignedIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');

    async function signUserIn(e) {
        e.preventDefault();
        const res = await fetch(API_USER_SIGNIN,{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })},)
            const obj = await res.json();
            if(obj.id) {
              setUserID(obj.id);
              setToken(obj.token);
              setSignedIn(true);
              localStorage.setItem("token", obj.token); 
            }
            
    }

    return (
        <div className="container mx-auto px-4 flex justify-center bg-shell min-w-full grow">
            <form action="#" className= "w-1/4 rounded overflow-hidden shadow-lg p-9 mt-28 space-y-8 h-96 bg-sand">
                <h2 className="text-5xl text-center font-bold text-grape">{signedIn ? "Sign In" : "Sign Up"}</h2>
                <div className="pb-4">
                    <label htmlFor="email"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="text" name="email" id="email" placeholder="Email"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>  
                </div>
                <div className="pb-4">
                    <label htmlFor="password"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="password" name="password" id="password" placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/> 
                </div>

                <button className="font-bold py-2 px-4 rounded bg-grape 
                text-white w-full font-semibold text-lg" 
                onClick={signUserIn}>Log in</button>
            </form>
            {userID && <Navigate to="/" replace/>}
        </div>
        
    )
}

export default Signin;