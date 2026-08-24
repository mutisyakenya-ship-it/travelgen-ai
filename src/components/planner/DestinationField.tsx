type Props = {

value:string

onChange:(value:string)=>void

}

function DestinationField({

value,

onChange

}:Props){

return(

<div>

<label

className="mb-2 block font-medium"

>

Destination

</label>

<input

type="text"

placeholder="Naivasha"

value={value}

onChange={(e)=>

onChange(

e.target.value

)

}

className="
w-full
rounded-xl
border border-[var(--color-border)]
bg-[var(--color-surface)]
p-3
text-[var(--color-text)]
placeholder:text-[var(--color-text-muted)]
focus:border-[var(--color-primary)]
focus:outline-none
focus:ring-2
focus:ring-[var(--color-primary-light)]
"

/>

</div>

)

}

export default DestinationField