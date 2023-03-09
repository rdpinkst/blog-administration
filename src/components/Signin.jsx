function Signin() {
    return (
        <div className="container mx-auto px-4 my-20 flex justify-center">
            <form action="#" className= "max-w-lg rounded overflow-hidden shadow-lg p-9 space-y-8 h-96">
                <h2 className="text-4xl text-center font-bold">Sign In</h2>
                <div>
                    <label htmlFor="email"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="text" name="email" id="email" placeholder="Email"/>  
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input className="form-input px-4 py-3 rounded-full w-full" 
                    type="password" name="password" id="password" placeholder="Password"/> 
                </div>

                <button className="font-bold py-2 px-4 rounded bg-sky-500 
                text-white w-full">Log in</button>
            </form>
        </div>
        
    )
}

export default Signin;