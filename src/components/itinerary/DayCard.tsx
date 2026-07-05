import type {

ReactNode

}

from "react";

type Props={

day:number;

children:ReactNode;

};

function DayCard({

day,

children

}:Props){

return(

<div

className="
rounded-3xl
bg-white
p-6
shadow-lg
space-y-5
"

>

<h2

className="
text-2xl
font-bold
text-slate-800
"

>

Day {day}

</h2>

{children}

</div>

);

}

export default DayCard;