import { useState } from "react";

import { Link } from "react-router-dom";

import {

resetPassword

}

from "../../pages/services/firebase/auth";

function ForgotPassword(){

const [

email,

setEmail

]

=

useState("");

const [

message,

setMessage

]

=

useState("");

const [

error,

setError

]

=

useState("");

const handleSubmit=async(

e:React.FormEvent

)=>{

e.preventDefault();

setError("");

setMessage("");

try{

await resetPassword(

email

);

setMessage(

"Password reset email sent."

);

}

catch(

err:any

){

setError(

err.message

);

}

};

return(

<div

className="
min-h-screen
flex
items-center
justify-center
bg-slate-50
px-6
"

>

<div

className="
w-full
max-w-md
rounded-3xl
bg-white
p-8
shadow-xl
"

>

<h1

className="
text-3xl
font-bold
"

>

Reset Password

</h1>

<p

className="
mt-2
text-slate-500
"

>

Enter your email address

</p>

{

message && (

<div

className="
mt-4
rounded-lg
bg-green-100
p-3
text-green-700
"

>

{message}

</div>

)

}

{

error && (

<div

className="
mt-4
rounded-lg
bg-red-100
p-3
text-red-600
"

>

{error}

</div>

)

}

<form

onSubmit={handleSubmit}

className="mt-6 space-y-4"

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

className="
w-full
rounded-xl
border
p-3
"

/>

<button

className="
w-full
rounded-xl
bg-green-700
py-3
text-white
"

>

Send Reset Link

</button>

</form>

<p

className="
mt-6
text-center
"

>

<Link

to="/login"

className="
text-green-700
"

>

Back to Login

</Link>

</p>

</div>

</div>

);

}

export default ForgotPassword;