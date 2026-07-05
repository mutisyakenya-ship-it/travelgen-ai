type Props={

onClick:()=>void;

};

function ShareButton({

onClick

}:Props){

return(

<button

onClick={onClick}

className="
rounded-xl
bg-indigo-600
px-5
py-3
text-white
hover:bg-indigo-700
transition
"

>

🔗 Share

</button>

);

}

export default ShareButton;