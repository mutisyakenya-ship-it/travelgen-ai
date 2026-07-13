import {

googleLogin

}

from "../../services/firebase/auth";

function GoogleButton(){

const handleGoogle = async()=>{

try{

await googleLogin();

}

catch(

err

){

console.log(err);

}

};

return(

<button

onClick={handleGoogle}

className="
mt-4
w-full
rounded-xl
border
py-3
"

>

Continue with Google

</button>

);

}

export default GoogleButton;