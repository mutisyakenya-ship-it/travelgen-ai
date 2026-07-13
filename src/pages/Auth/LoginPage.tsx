import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
login,
googleLogin
}

from "../../services/firebase/auth";

function Login(){

const navigate = useNavigate()

const [email,setEmail]=useState("")

const [password,setPassword]=useState("")

const [loading,setLoading]=useState(false)

const handleLogin = async(

e:React.FormEvent

)=>{

e.preventDefault()

try{

setLoading(true)

await login(

email,

password

)

navigate("/dashboard")

}

catch(error){

console.log(error)

}

finally{

setLoading(false)

}

}

const handleGoogle = async()=>{

try{

await googleLogin()

navigate("/dashboard")

}

catch(error){

console.log(error)

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-slate-50">

<div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

<h1 className="text-3xl font-bold">

TravelGen AI

</h1>

<p className="mt-2 text-slate-500">

Welcome Back

</p>

<form

onSubmit={handleLogin}

className="mt-8 space-y-4"

>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>

setEmail(

e.target.value

)

}

className="w-full rounded-xl border p-3"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(

e.target.value

)

}

className="w-full rounded-xl border p-3"

/>
<div

className="
text-right
"

>

<Link

to="/forgot-password"

className="
text-sm
text-green-700
"

>

Forgot Password?

</Link>

</div>

<button

disabled={loading}

className="w-full rounded-xl bg-green-700 py-3 text-white"

>

{

loading

?

"Logging in..."

:

"Login"

}

</button>

</form>

<button

onClick={handleGoogle}

className="mt-4 w-full rounded-xl border py-3"

>

Continue with Google

</button>

<p className="mt-6 text-center">

No account?

<Link

to="/register"

className="ml-2 text-green-700"

>

Register

</Link>

</p>

</div>

</div>

)

}

export default Login