type Props={

onClick:()=>void;

};

function ExportButton({

onClick

}:Props){

return(

<button

onClick={onClick}

className="
rounded-xl
bg-green-600
px-5
py-3
text-white
hover:bg-green-700
transition
"

>

📄 Export PDF

</button>

);

}

export default ExportButton;