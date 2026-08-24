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
border border-[var(--color-border)]
bg-[var(--color-surface)]
p-6
shadow-[var(--shadow-soft)]
space-y-5
"

>

<h2

className="
text-2xl
font-bold
text-[var(--color-primary)]
"

>

Day {day}

</h2>

{children}

</div>

);

}

export default DayCard;