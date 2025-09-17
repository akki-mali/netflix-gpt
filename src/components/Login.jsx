import Header from "./Header" 
import { useState } from "react"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="relative"> 
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
        loading="lazy" alt="netflix-bg.png"></img>
     </div>
     <form className="absolute w-4/12 bg-black/75 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded text-white">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-white mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Username" className="w-full border p-2 mb-6 "/>}
        <input type="email" placeholder="Email or phone number" className="w-full border p-2 mb-6"/>
        <input type="password" placeholder="Password" className="w-full border p-2 mb-6 "/>
        <button type="submit" className="bg-red-500 text-white w-full p-4">{isSignInForm ? "Sign In" : "Sign Up"}</button>
      </div>
      <p className="cursor-pointer" onClick={handleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered."}</p>
     </form>
    </div>
  )
}

export default Login