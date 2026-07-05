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
bg-white
p-4
border
border-slate-200
shadow-sm
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
text-slate-800
"

>

{title}

</h3>

<p

className="
text-sm
text-slate-500
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