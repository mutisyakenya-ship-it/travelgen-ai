type Props={

title:string;

description:string;

icon:string;

};

function ActivityCard({

title,

description,

icon

}:Props){

return(

<div

className="
rounded-2xl
bg-[var(--color-surface)]
p-4
border
border-[var(--color-border)]
shadow-[var(--shadow-soft)]
"

>

<div

className="
flex
gap-4
items-start
"

>

<div

className="
text-3xl
"

>

{icon}

</div>

<div>

<h3

className="
font-semibold
text-[var(--color-text)]
"

>

{title}

</h3>

<p

className="
text-sm
text-[var(--color-text-secondary)]
mt-1
"

>

{description}

</p>

</div>

</div>

</div>

);

}

export default ActivityCard;