type Props={

onClick:()=>void;

loading?:boolean;

};

function SaveButton({

onClick,

loading=false

}:Props){

return(

<button

onClick={onClick}

disabled={loading}

className="
rounded-xl
bg-green-700
px-5
py-3
text-white
hover:bg-green-800
transition
"

>

{

loading

?

"Saving..."

:

"Save Trip"

}

</button>

);

}

export default SaveButton;